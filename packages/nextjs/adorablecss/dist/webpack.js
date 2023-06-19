const VirtualModulesPlugin = require("webpack-virtual-modules")
const {parseAtoms, generateCss} = require("../../../vite/dist/vite")

const NAME = "AdorableCSSPlugin"

let css = ""
let entries = Object.create(null)
let dirty = false

let timer = null

class AdorableCSSPlugin {

  insert(filePath, sourceCode) {
    entries[filePath] = parseAtoms(sourceCode)
    dirty = true
    this.compile()
  }

  compile() {
    const allAtoms = Object.values(entries).flat()
    css = generateCss([...new Set(allAtoms)]).join("\n")
  }

  apply(compiler) {

    const virtualModules = new VirtualModulesPlugin({["node_modules/@adorable.css"]: ""})
    virtualModules.apply(compiler)

    const updateCSS = () => {
      console.log("updateCSS", css)
      virtualModules.writeModule("node_modules/@adorable.css", css)
    }

    compiler.hooks.compilation.tap(NAME, (compilation) => {

      compilation.hooks.succeedModule.tap(NAME, (module) => {
        const originalFilePath = module.resource || ""
        if (originalFilePath.endsWith(".tsx") || originalFilePath.endsWith(".jsx")) {
          if (module._source) {
            const sourceCode = module._source.source()
            this.insert(originalFilePath, sourceCode)
            console.log("succeedModule", originalFilePath)
          }
        }
      })

      clearTimeout(timer)
      timer = setTimeout(updateCSS, 250)
    })

    // compiler.hooks.afterEmit.tap(NAME, () => {
    //   console.log("afterEmit")
    //   updateCSS()
    // })

  }
}

module.exports = AdorableCSSPlugin