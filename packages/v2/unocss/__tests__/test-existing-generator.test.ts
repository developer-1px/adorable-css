import { describe, it, expect } from "vitest"
import { generateCSSFromAdorableCSS } from "../myparser"

describe("Test Existing CSS Generator", () => {
	it("should generate CSS for basic selector", () => {
		const result = generateCSSFromAdorableCSS("hbox")
		console.log("hbox ->", result)
		expect(result).toBeDefined()
	})

	it("should generate CSS for function", () => {
		const result = generateCSSFromAdorableCSS("w(100)")
		console.log("w(100) ->", result)
		expect(result).toBeDefined()
	})

	it("should generate CSS for gradient", () => {
		const result = generateCSSFromAdorableCSS("gradient(#667eea/#764ba2)")
		console.log("gradient ->", result)
		expect(result).toBeDefined()
	})

	it("should generate CSS for pseudo-class", () => {
		const result = generateCSSFromAdorableCSS("hover:scale(1.02)")
		console.log("hover:scale ->", result)
		expect(result).toBeDefined()
	})

	it("should generate CSS for complex example", () => {
		const result = generateCSSFromAdorableCSS("hbox(center) w(fill) h(48) r(8) bg(#667eea)")
		console.log("complex ->", result)
		expect(result).toBeDefined()
	})
})
