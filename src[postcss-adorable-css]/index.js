const postcss = require("postcss")
const chokidar = require("chokidar")
const {promises: fs} = require("fs")
const {parse} = postcss
const {parseAtoms, generateCss, reset} = require("adorable-css/vite-plugin-adorable-css")

/**
 * @type {import("postcss").PluginCreator}
 */
module.exports = (opts = {}) => {
  // Work with options here
  const entry = Object.create(null)

  const makeStyle = (entry) => {
    const allAtoms = Object.values(entry).flat()
    const styles = generateCss([...new Set(allAtoms)])
    return [reset, ...styles].join("\n")
  }

  let resolver
  const notify = () => {
    if (!resolver) return setTimeout(notify, 50)
    resolver(makeStyle(entry))
    resolver = null
  }

  const watcher = chokidar.watch("**/*.{svelte,tsx,jsx,vue,mdx,svx,html}", {
    ignored: (path) => path.includes("node_modules")
  })

  watcher.on("change", async (path) => {
    entry[path] = parseAtoms(await fs.readFile(path, "utf-8"))
    notify()
  })

  watcher.on("ready", async () => {
    const watchedPaths = watcher.getWatched()
    // console.log("--- ready --")
    // console.log("watchedPaths", watchedPaths)

    await Promise.all(Object.entries(watchedPaths)
      .map(([path, files]) => files
        .map(file => path + "/" + file)
        .map(filepath => fs.readFile(filepath, "utf-8")
          .then(data => entry[filepath] = parseAtoms(data))))
      .flat(1))

    notify()
  })

  return {
    postcssPlugin: "postcss-adorable-css",

    async AtRule (atRule) {
      if (atRule.name === "adorable.css") {
        atRule.replaceWith(parse(await new Promise(resolve => {
          resolver = resolve
        })))
      }
    }
  }
}

module.exports.postcss = true
