import { describe, it, expect } from "vitest"
import { parseAdorableCSS } from "../myparser/parseAdorableCSS"

describe("Debug Args Structure", () => {
  it("should debug args structure for text(center)", () => {
    const result = parseAdorableCSS("text(center)")
    console.log("text(center) parsed:", JSON.stringify(result, null, 2))
    
    if (result?.value?.[0]?.selector?.args) {
      console.log("args:", result.value[0].selector.args)
      result.value[0].selector.args.forEach((arg, i) => {
        console.log(`arg[${i}]:`, arg)
        console.log(`arg[${i}].image:`, arg.image)
      })
    }
  })

  it("should debug args structure for hbox(center)", () => {
    const result = parseAdorableCSS("hbox(center)")
    console.log("hbox(center) parsed:", JSON.stringify(result, null, 2))
    
    if (result?.value?.[0]?.selector?.args) {
      console.log("args:", result.value[0].selector.args)
      result.value[0].selector.args.forEach((arg, i) => {
        console.log(`arg[${i}]:`, arg)
        console.log(`arg[${i}].image:`, arg.image)
      })
    }
  })
})