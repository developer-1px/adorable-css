import {createUnplugin} from "unplugin"
import WebpackSources from "webpack-sources"

const PLUGIN_NAME = "AdorableCSS:webpack"
const UPDATE_DEBOUNCE = 10

const createContext = () => {}

export function adorableCSS(configOrPath, defaults) {
  return createUnplugin(config => {
    const context = createContext(configOrPath, defaults)
    const {uno, tokens, filter, extract, onInvalidate} = context

    let timer
    onInvalidate(() => {
      clearTimeout(timer)
      timer = setTimeout(updateModules, UPDATE_DEBOUNCE)
    })

    const tasks = []
    const entries = new Map()

    const plugin = {
      name: "AdorableCSS:webpack",

      enforce: "pre",

      transformInclude(id) {
        return filter("", id)
      },

      transform(code, id) {
        tasks.push(extract(code, id))
        return null
      },

      resolveId(id) {
        // const entry = resolveId(id)
        // if (entry) {
        //   entries.set(entry.id, entry.layer)
        //   entries.set(id, entry.layer)
        //   return entry.id
        // }
      }, // serve the placeholders in virtual module

      load(id) {
        // const layer = entries.get(getPath(id))
        // if (layer) return getLayerPlaceholder(layer)
      },

      webpack(compiler) {// replace the placeholders
        compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
          compilation.hooks.optimizeAssets.tapPromise(PLUGIN_NAME, async () => {
            const files = Object.keys(compilation.assets)

            await Promise.all(tasks)
            const result = await uno.generate(tokens, {minify: true})

            for (const file of files) {
              let code = compilation.assets[file].source().toString()
              let replaced = false
              code = code.replace(LAYER_PLACEHOLDER_RE, (_, quote, layer) => {
                replaced = true
                const css = layer === LAYER_MARK_ALL ? result.getLayers(undefined, Array.from(entries.values())) : result.getLayer(layer) || ""

                if (!quote) return css

                // the css is in a js file, escaping
                let escaped = JSON.stringify(css).slice(1, -1)
                // in `eval()`, escaping twice
                if (quote === "\\\"") escaped = JSON.stringify(escaped).slice(1, -1)
                return quote + escaped
              })
              if (replaced) compilation.assets[file] = new WebpackSources.RawSource(code)
            }
          })
        })
      },
    }

    async function updateModules() {
      if (!plugin.__vfsModules) return

      const result = await uno.generate(tokens)
      Array.from(plugin.__vfsModules)
        .forEach((id) => {
          const path = id.slice(plugin.__virtualModulePrefix.length)
          const layer = entries.get(path)
          if (!layer) return
          const code = layer === LAYER_MARK_ALL ? result.getLayers(undefined, Array.from(entries.values())) : result.getLayer(layer) || ""
          plugin.__vfs.writeModule(id, code)
        })
    }

    return plugin
  }).webpack()
}