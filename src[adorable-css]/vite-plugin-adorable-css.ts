import type {Plugin} from "vite"

import {parseAtoms} from "./src/parser"
import {generateCss, reset} from "./src/atomizer"

// @ts-ignore
import * as fs from "fs"

const NAME = "@adorable.css"
const VIRTUAL_FILE_ID = "/@adorable.css"

const CONFIG = {
  ext: ["svelte", "vue", "tsx", "jsx"]
}

export const adorableCSS = (config = CONFIG):Plugin => {

  let timer:NodeJS.Timeout
  let resolver:Function
  let isHMR = false

  const entry:Record<string, string> = Object.create(null)

  const checkTargetFile = (id:string) => config.ext.includes(id.split(".").pop() || "")

  const debouncing = async () => {
    if (!resolver) {
      clearTimeout(timer)
      timer = setTimeout(debouncing, 50)
      return
    }

    // @TODO: hmr일 경우에는 다르게 동작하도록
    const allAtoms = Object.values(entry).map(id => parseAtoms(fs.readFileSync(id as string, "utf8"))).reduce((a, b) => [...a, ...b], [])
    const styles = generateCss([...new Set(allAtoms)])
    const a = [reset, ...styles].join("\n")
    resolver(a)
  }

  return {
    name: `${NAME}:entry`,
    enforce: "pre",

    resolveId(id:string) {
      clearTimeout(timer)
      if (id === NAME || id === VIRTUAL_FILE_ID) {
        return VIRTUAL_FILE_ID
      }
      timer = setTimeout(debouncing, isHMR ? 0 : 500)
    },

    async load(id:string) {
      if (id === VIRTUAL_FILE_ID) {
        return new Promise(resolve => {
          resolver = resolve
          if (isHMR) debouncing()
        })
      }

      if (!checkTargetFile(id)) return
      entry[id] = id
    },

    // @ts-ignore
    async handleHotUpdate({server, file, modules}) {
      if (!checkTargetFile(file)) return
      isHMR = true
      const module = server.moduleGraph.getModuleById(VIRTUAL_FILE_ID)
      return [...modules, module].filter(Boolean)
    },
  }
}