import type {Plugin, ViteDevServer} from "vite"

import {createGenerateCss, parseAtoms, PrefixRules, Rules} from "./atomizer"
import {reset} from "./rules"

import micromatch from "micromatch"

interface Config {
  include:string[]
  reset:string
  rules:Rules
  prefixRules:PrefixRules
}

const ADORABLE_CSS = "@adorable.css"
const VIRTUAL_PATH = "/" + ADORABLE_CSS
const BUILD_PLACEHOLDER = `#--adorable-css--{top:1}`
const DEBOUNCE_TIMEOUT = 250

const CONFIG:Config = {
  include: ["**/*.{svelte,tsx,jsx,vue,mdx,svx,html}"],
  reset,
  rules: {},
  prefixRules: {}
}

export const adorableCSS = (config?:Partial<Config>):Plugin[] => {
  config = {...CONFIG, ...config}

  let isHMR = false
  let timestamp = Date.now()

  let configRoot = ""

  const servers:ViteDevServer[] = []
  const entry:Record<string, string[]> = Object.create(null)

  const generateCss = createGenerateCss(config.rules, config.prefixRules)

  const checkTargetFile = (id:string) => {
    if (id.startsWith(configRoot)) {
      id = id.slice(configRoot.length)
    }
    return (config.include ?? []).some(glob => micromatch.isMatch(id, glob))
  }

  const makeStyle = () => {
    const allAtoms = Object.values(entry).flat()
    const styles = generateCss([...new Set(allAtoms)])
    return config.reset + styles.join("\n")
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

      // glob을 위한 config.root
      configRoot = _server.config.root + "/"

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
        return makeStyle()
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
    load: (id:string) => id === VIRTUAL_PATH ? BUILD_PLACEHOLDER : undefined,

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
          chunk.source = chunk.source.replace(BUILD_PLACEHOLDER, adorableCSS)
        }
      }
    },
  }]
}

export * from "./makeValue"
export * from "./rules"
export {generateCss, createGenerateCss} from "./atomizer"
export {parseAtoms} from "./atomizer"
export {ALL_PROPERTIES} from "./const"