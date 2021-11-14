import type {Plugin, ViteDevServer} from "vite"

import {parseAtoms} from "./parser"
import {createGenerateCss, PrefixRules, reset, Rules} from "./atomizer"

interface Config {
  ext: string[]
  rules: Rules
  prefixRules: PrefixRules
}

const ADORABLE_CSS = "@adorable.css"
const VIRTUAL_PATH = "/" + ADORABLE_CSS
const CHUNK_PLACEHOLDER = "[##_adorable_css_##]"
const DEBOUNCE_TIMEOUT = 250

const CONFIG:Config = {
  ext: ["svelte", "vue", "tsx", "jsx", "mdx", "svx", "html"],
  rules: {},
  prefixRules: {}
}

export const adorableCSS = (config?:Partial<Config>):Plugin[] => {
  config = {...CONFIG, ...config}

  let isHMR = false
  let timestamp = Date.now()

  const servers:ViteDevServer[] = []
  const entry:Record<string, string[]> = Object.create(null)

  const generateCss = createGenerateCss(config.rules, config.prefixRules)
  const checkTargetFile = (id:string) => (config?.ext ?? CONFIG.ext).includes(id.split(".").pop() || "")

  const makeStyle = () => {
    const allAtoms = Object.values(entry).flat()
    const styles = generateCss([...new Set(allAtoms)])
    // console.log("styles", styles, entry)

    return [reset, ...styles].join("\n")
  }

  const invalidate = () => {
    // console.log("invalidate")

    for (const server of servers) {
      const mod = server.moduleGraph.getModuleById(VIRTUAL_PATH)
      if (!mod) {
        continue
      }

      server.moduleGraph.invalidateModule(mod)

      server.ws.send({
        type: "update",
        updates: [{
          acceptedPath: VIRTUAL_PATH,
          path: VIRTUAL_PATH,
          timestamp,
          type: "js-update",
        }],
      })
    }
  }

  let timer:NodeJS.Timer
  const debounceInvalidate = () => {
    clearTimeout(timer)
    timer = setTimeout(invalidate, DEBOUNCE_TIMEOUT)
  }

  // @ts-ignore
  return [{
    name: `${ADORABLE_CSS}:dev`,
    apply: "serve",
    enforce: "pre",

    configureServer: (_server) => {
      servers.push(_server)
      _server.middlewares.use((req, res, next) => {
        if (!isHMR && req.url && checkTargetFile(req.url)) {
          debounceInvalidate()
        }
        return next()
      })
    },

    resolveId: (id:string) => (id === ADORABLE_CSS || id === VIRTUAL_PATH) ? VIRTUAL_PATH : undefined,

    load: (id:string) => {
      if (id === VIRTUAL_PATH) {
        if (isHMR) return makeStyle()
        return new Promise(resolve => {
          setTimeout(() => resolve(makeStyle()), 500)
        })
      }
    },

    transform(code, id) {
      if (isHMR) return code
      if (id === VIRTUAL_PATH) return code
      if (!checkTargetFile(id)) return code
      entry[id] = parseAtoms(code)
      timestamp = Date.now()
    },

    // @ts-ignore
    async handleHotUpdate({file, read}) {
      if (!checkTargetFile(file)) return
      isHMR = true
      entry[file] = parseAtoms(await read())
      timestamp = Date.now()
      invalidate()
    },
  }, {
    name: `${ADORABLE_CSS}:build`,
    apply: "build",
    enforce: "pre",

    resolveId: (id:string) => (id === ADORABLE_CSS || id === VIRTUAL_PATH) ? VIRTUAL_PATH : undefined,
    load: (id:string) => id === VIRTUAL_PATH ? "[##_adorable_css_##]" : undefined,

    transform(code, id) {
      if (checkTargetFile(id)) {
        entry[id] = parseAtoms(code)
      }
      return undefined
    },

    generateBundle(options, bundle) {
      const adorableCSS = makeStyle()
      for (const chunk of Object.values(bundle)) {
        if (!chunk.fileName.endsWith(".css")) continue
        if (chunk.type === "asset" && typeof chunk.source === "string") {
          chunk.source = chunk.source.replace(CHUNK_PLACEHOLDER, adorableCSS)
        }
      }
    },
  }]
}

export * from "./makeValue"
export {parseAtoms} from "./parser"
export {generateCss, createGenerateCss} from "./atomizer"