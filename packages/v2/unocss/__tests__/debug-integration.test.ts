import { describe, it, expect } from "vitest"
import { createGenerator } from "unocss"
import { adorableCSS } from "../adorable-css-uno"
import { parseAdorableCSS } from "../myparser/parseAdorableCSS"

describe("Debug UnoCSS Integration", () => {
  const uno = createGenerator({
    ...(adorableCSS() as any),
  })

  async function generateCSS(input: string) {
    const result = await uno.generate(input)
    return result.css
  }

  it("should debug parser output structure", () => {
    const testCases = [
      "hbox",
      "screen", 
      "w(100)",
      "gradient(#667eea/#764ba2)",
      "hover:scale(1.02)"
    ]

    testCases.forEach(testCase => {
      console.log(`\n=== Testing: ${testCase} ===`)
      const parsed = parseAdorableCSS(testCase)
      console.log("Parsed result:", JSON.stringify(parsed, null, 2))
    })
  })

  it("should test CSS generation for working cases", async () => {
    const workingCases = ["hbox", "pack", "vbox", "gap(32)"]
    
    for (const testCase of workingCases) {
      const css = await generateCSS(testCase)
      console.log(`\n${testCase} -> CSS:`, css)
      expect(css).not.toBe("")
    }
  })

  it("should test CSS generation for failing cases", async () => {
    const failingCases = ["screen", "gradient(#667eea/#764ba2)", "hover:scale(1.02)"]
    
    for (const testCase of failingCases) {
      const css = await generateCSS(testCase)
      console.log(`\n${testCase} -> CSS:`, css)
      // This will help us understand why they're failing
    }
  })
})