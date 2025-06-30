import { describe, it, expect } from "vitest"
import { generateCSSFromAdorableCSS } from "../myparser"

describe("Debug Failing Cases", () => {
	const failingCases = ["text(center)", "hbox(center)", "top(0)", "text(left)"]

	failingCases.forEach((testCase) => {
		it(`should debug ${testCase}`, () => {
			console.log(`\n=== Testing: ${testCase} ===`)
			const result = generateCSSFromAdorableCSS(testCase)
			console.log("Generated CSS:", result)
			expect(result).toBeDefined()
		})
	})
})
