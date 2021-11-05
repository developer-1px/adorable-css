import type {Plugin, ViteDevServer} from "vite"

import {parseAtoms} from "./src/parser"
import {generateCss, reset} from "./src/atomizer"

const ADORABLE_CSS = "@adorable.css"
const VIRTUAL_PATH = "/" + ADORABLE_CSS
const CHUNK_PLACEHOLDER = "[##_adorable_css_##]"

const DEBOUNCE_TIMEOUT = 200
const READY_TIMEOUT = 1000

const CONFIG = {
  ext: ["svelte", "vue", "tsx", "jsx"],
}

export const adorableCSS = (config = CONFIG):Plugin[] => {
  let isHMR = false
  let timestamp = +Date.now()

  const servers:ViteDevServer[] = []
  const entry:Record<string, string[]> = Object.create(null)

  const checkTargetFile = (id:string) => config.ext.includes(id.split(".").pop() || "")

  const makeStyle = () => {
    const allAtoms = Object.values(entry).flat()
    const styles = generateCss([...new Set(allAtoms)])
    // console.log("styles", styles, entry)

    return [reset, ...styles].join("\n")
  }

  let readyTimer:NodeJS.Timer

  const invalidate = () => {
    // console.log("invalidate")

    for (const server of servers) {
      const mod = server.moduleGraph.getModuleById(VIRTUAL_PATH)
      if (!mod) {
        continue
      }

      clearTimeout(readyTimer)
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

    configureServer: (_server) => void servers.push(_server),
    resolveId: (id:string) => (id === ADORABLE_CSS || id === VIRTUAL_PATH) ? VIRTUAL_PATH : undefined,
    load: (id:string) => id === VIRTUAL_PATH ? makeStyle() : undefined,

    transform(code, id) {
      if (isHMR) return code
      if (id === VIRTUAL_PATH) {
        setTimeout(invalidate, READY_TIMEOUT)
        return code
      }

      if (!checkTargetFile(id)) return code
      entry[id] = parseAtoms(code)
      timestamp = +Date.now()
      debounceInvalidate()
    },

    // @ts-ignore
    async handleHotUpdate({server, file, read, modules}) {
      if (!checkTargetFile(file)) return
      isHMR = true
      entry[file] = parseAtoms(await read())

      const module = server.moduleGraph.getModuleById(VIRTUAL_PATH)
      return [module, ...modules].filter(Boolean)
    },
  }, {
    name: `${ADORABLE_CSS}:build`,
    apply: "build",
    enforce: "pre",

    resolveId: (id:string) => (id === ADORABLE_CSS || id === VIRTUAL_PATH) ? VIRTUAL_PATH : undefined,
    load: (id:string) => id === VIRTUAL_PATH ? "[##_adorable_css_##]" : undefined,

    transform(code, id) {
      if (!checkTargetFile(id)) return code
      entry[id] = parseAtoms(code)
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