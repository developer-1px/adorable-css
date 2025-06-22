import { createGenerator } from "unocss"
import { describe, it, expect } from "vitest"
import { adorableCSS } from "./adorable-css-uno"

// UnoCSS 설정
const uno = createGenerator({
	...adorableCSS(),
})

async function generate(input: string) {
	const result = await uno.generate(input)
	console.log(`Input: "${input}" -> CSS: "${result.css}"`)
	return result.css
}

describe("AdorableCSS v2 UnoCSS Integration", () => {
	describe("Layout - Auto Layout", () => {
		it("should generate horizontal box layout", async () => {
			const css = await generate("hbox")
			expect(css).toContain("display: flex")
			expect(css).toContain("flex-direction: row")
		})

		it("should generate vertical box layout", async () => {
			const css = await generate("vbox")
			expect(css).toContain("display: flex")
			expect(css).toContain("flex-direction: column")
		})

		it("should generate centered alignment", async () => {
			const css = await generate("hbox(center)")
			expect(css).toContain("justify-content: center")
			expect(css).toContain("align-items: center")
		})

		it("should generate gap spacing", async () => {
			const css = await generate("gap(16)")
			expect(css).toContain("gap: 16px")
		})

		it("should generate complex gap with row/column", async () => {
			const css = await generate("gap(16/24)")
			expect(css).toContain("row-gap: 16px")
			expect(css).toContain("column-gap: 24px")
		})

		it("should generate padding", async () => {
			const css = await generate("p(16)")
			expect(css).toContain("padding: 16px")
		})

		it("should generate padding with horizontal/vertical values", async () => {
			const css = await generate("p(16/24)")
			expect(css).toContain("padding: 16px 24px")
		})
	})

	describe("Sizing", () => {
		it("should generate fixed dimensions", async () => {
			const css = await generate("400x300")
			expect(css).toContain("width:400px")
			expect(css).toContain("height:300px")
		})

		it("should generate width only", async () => {
			const css = await generate("w(300)")
			expect(css).toContain("width: 300px")
		})

		it("should generate height only", async () => {
			const css = await generate("h(200)")
			expect(css).toContain("height: 200px")
		})

		it("should generate hug content sizing", async () => {
			const css = await generate("w(hug)")
			expect(css).toContain("width: fit-content")
		})

		it("should generate fill container sizing", async () => {
			const css = await generate("w(fill)")
			expect(css).toContain("width: 100%")
		})

		it("should generate min-width constraint", async () => {
			const css = await generate("w(300..)")
			expect(css).toContain("min-width: 300px")
		})

		it("should generate max-width constraint", async () => {
			const css = await generate("w(..600)")
			expect(css).toContain("max-width: 600px")
		})

		it("should generate min and max width constraints", async () => {
			const css = await generate("w(300..600)")
			expect(css).toContain("min-width: 300px")
			expect(css).toContain("max-width: 600px")
		})

		it("should generate aspect ratio", async () => {
			const css = await generate("16:9")
			expect(css).toContain("aspect-ratio: 16/9")
		})
	})

	describe("Position & Constraints", () => {
		it("should generate absolute positioning", async () => {
			const css = await generate("absolute")
			expect(css).toContain("position: absolute")
		})

		it("should generate fixed positioning", async () => {
			const css = await generate("fixed")
			expect(css).toContain("position: fixed")
		})

		it.skip("should generate x position", async () => {
			const css = await generate("x(100)")
			expect(css).toContain("left: 100px")
		})

		it.skip("should generate y position", async () => {
			const css = await generate("y(100)")
			expect(css).toContain("top: 100px")
		})

		it.skip("should generate z-index", async () => {
			const css = await generate("z(2)")
			expect(css).toContain("z-index: 2")
		})

		it.skip("should generate transform rotation", async () => {
			const css = await generate("rotate(45)")
			expect(css).toContain("transform: rotate(45deg)")
		})

		it.skip("should generate centered position", async () => {
			const css = await generate("x(center)")
			expect(css).toContain("left: 50%")
			expect(css).toContain("transform: translateX(-50%)")
		})

		it.skip("should generate coordinate positioning", async () => {
			const css = await generate("(0,0)")
			expect(css).toContain("left: 0px")
			expect(css).toContain("top: 0px")
		})

		it.skip("should generate right/bottom positioning", async () => {
			const css = await generate("(..0,..0)")
			expect(css).toContain("right: 0px")
			expect(css).toContain("bottom: 0px")
		})
	})

	describe("Visual Properties", () => {
		it.skip("should generate border radius", async () => {
			const css = await generate("r(8)")
			expect(css).toContain("border-radius: 8px")
		})

		it.skip("should generate background color", async () => {
			const css = await generate("bg(#000)")
			expect(css).toContain("background-color: #000")
		})

		it.skip("should generate background with opacity", async () => {
			const css = await generate("bg(#000.5)")
			expect(css).toContain("background-color: rgba(0, 0, 0, 0.5)")
		})

		it.skip("should generate border", async () => {
			const css = await generate("b(#000)")
			expect(css).toContain("border: 1px solid #000")
		})

		it.skip("should generate border with width and color", async () => {
			const css = await generate("b(2/#ff0000)")
			expect(css).toContain("border: 2px solid #ff0000")
		})

		it.skip("should generate outline", async () => {
			const css = await generate("o(#000)")
			expect(css).toContain("outline: 1px solid #000")
		})
	})

	describe("Typography", () => {
		it.skip("should generate font size only", async () => {
			const css = await generate("font(16)")
			expect(css).toContain("font-size: 16px")
		})

		it.skip("should generate font size and line height", async () => {
			const css = await generate("font(16/24)")
			expect(css).toContain("font-size: 16px")
			expect(css).toContain("line-height: 24px")
		})

		it.skip("should generate complete font properties", async () => {
			const css = await generate("font(16/1.5/-1%/600)")
			expect(css).toContain("font-size: 16px")
			expect(css).toContain("line-height: 1.5")
			expect(css).toContain("letter-spacing: -1%")
			expect(css).toContain("font-weight: 600")
		})

		it.skip("should generate font shortcuts", async () => {
			const css = await generate("bold")
			expect(css).toContain("font-weight: 700")
		})

		it.skip("should generate italic", async () => {
			const css = await generate("italic")
			expect(css).toContain("font-style: italic")
		})

		it.skip("should generate underline", async () => {
			const css = await generate("underline")
			expect(css).toContain("text-decoration: underline")
		})

		it.skip("should generate strikethrough", async () => {
			const css = await generate("strike")
			expect(css).toContain("text-decoration: line-through")
		})

		it.skip("should generate text color", async () => {
			const css = await generate("c(#000)")
			expect(css).toContain("color: #000")
		})

		it.skip("should generate text alignment", async () => {
			const css = await generate("text(center)")
			expect(css).toContain("text-align: center")
		})

		it.skip("should generate text transform", async () => {
			const css = await generate("uppercase")
			expect(css).toContain("text-transform: uppercase")
		})

		it.skip("should generate nowrap", async () => {
			const css = await generate("nowrap")
			expect(css).toContain("white-space: nowrap")
		})

		it.skip("should generate line clamp", async () => {
			const css = await generate("max-lines(3)")
			expect(css).toContain("-webkit-line-clamp: 3")
		})
	})

	describe("Effects", () => {
		it("should generate blur effect", async () => {
			const css = await generate("blur(10)")
			expect(css).toContain("filter: blur(10px)")
		})

		it.skip("should generate opacity", async () => {
			const css = await generate("opacity(.5)")
			expect(css).toContain("opacity: 0.5")
		})

		it("should generate overflow clip", async () => {
			const css = await generate("clip")
			expect(css).toContain("overflow: hidden")
		})

		it("should generate box shadow", async () => {
			const css = await generate("shadow(md)")
			expect(css).toContain("box-shadow:")
		})
	})

	describe("Scroll & Overflow", () => {
		it("should generate scroll overflow", async () => {
			const css = await generate("scroll")
			expect(css).toContain("overflow: auto")
		})

		it("should generate horizontal scroll", async () => {
			const css = await generate("scroll(x)")
			expect(css).toContain("overflow-x: auto")
			expect(css).toContain("overflow-y: hidden")
		})

		it("should generate vertical scroll", async () => {
			const css = await generate("scroll(y)")
			expect(css).toContain("overflow-y: auto")
			expect(css).toContain("overflow-x: hidden")
		})

		it("should generate smooth scroll behavior", async () => {
			const css = await generate("scroll(smooth)")
			expect(css).toContain("scroll-behavior: smooth")
		})

		it("should generate scrollbar hiding", async () => {
			const css = await generate("scrollbar(none)")
			expect(css).toContain("scrollbar-width: none")
		})

		it("should generate thin scrollbar", async () => {
			const css = await generate("scrollbar(thin)")
			expect(css).toContain("scrollbar-width: thin")
		})
	})

	describe("Pseudo Classes & States", () => {
		it("should generate hover state", async () => {
			const css = await generate("hover:bg(#f00)")
			expect(css).toContain(":hover")
			expect(css).toContain("background-color: #f00")
		})

		it("should generate active state", async () => {
			const css = await generate("active:scale(.95)")
			expect(css).toContain(":active")
			expect(css).toContain("transform: scale(0.95)")
		})

		it("should generate focus state", async () => {
			const css = await generate("focus:b(2/#000)")
			expect(css).toContain(":focus")
			expect(css).toContain("border: 2px solid #000")
		})

		it("should generate disabled state", async () => {
			const css = await generate("disabled:opacity(.5)")
			expect(css).toContain(":disabled")
			expect(css).toContain("opacity: 0.5")
		})
	})

	describe("Transform", () => {
		it("should generate rotation", async () => {
			const css = await generate("rotate(45)")
			expect(css).toContain("transform: rotate(45deg)")
		})

		it("should generate negative rotation", async () => {
			const css = await generate("rotate(-45)")
			expect(css).toContain("transform: rotate(-45deg)")
		})

		it("should generate scale", async () => {
			const css = await generate("scale(1.5)")
			expect(css).toContain("transform: scale(1.5)")
		})

		it("should generate scale with X/Y values", async () => {
			const css = await generate("scale(1.5/2)")
			expect(css).toContain("transform: scaleX(1.5) scaleY(2)")
		})

		it("should generate translate", async () => {
			const css = await generate("translate(10/20)")
			expect(css).toContain("transform: translateX(10px) translateY(20px)")
		})
	})

	describe("Complex Examples", () => {
		it("should handle multiple classes", async () => {
			const input = "vbox(fill) w(fill) p(24) r(12) bg(#fff) shadow(md) gap(16)"
			const css = await generate(input)

			expect(css).toContain("display: flex")
			expect(css).toContain("flex-direction: column")
			expect(css).toContain("width: 100%")
			expect(css).toContain("padding: 24px")
			expect(css).toContain("border-radius: 12px")
			expect(css).toContain("background-color: #fff")
			expect(css).toContain("gap: 16px")
		})

		it("should handle Figma card component example", async () => {
			const input = "hbox(center) w(fill) h(48) r(8) bg(blue) c(#fff)"
			const css = await generate(input)

			expect(css).toContain("display: flex")
			expect(css).toContain("justify-content: center")
			expect(css).toContain("align-items: center")
			expect(css).toContain("width: 100%")
			expect(css).toContain("height: 48px")
			expect(css).toContain("border-radius: 8px")
			expect(css).toContain("color: #fff")
		})

		it("should handle navigation layout example", async () => {
			const input = "hbox() gap(auto) w(fill) h(64) px(32) bg(#fff) shadow(sm)"
			const css = await generate(input)

			expect(css).toContain("display: flex")
			expect(css).toContain("width: 100%")
			expect(css).toContain("height: 64px")
			expect(css).toContain("background-color: #fff")
		})
	})

	describe("Edge Cases & Error Handling", () => {
		it("should handle empty input", async () => {
			const css = await generate("")
			expect(css).toBe("")
		})

		it("should handle invalid syntax gracefully", async () => {
			const css = await generate("invalid-syntax")
			// Should not throw error, just return empty or unchanged
			expect(typeof css).toBe("string")
		})

		it("should handle mixed valid and invalid classes", async () => {
			const css = await generate("w(100) invalid-class h(200)")
			expect(css).toContain("width: 100px")
			expect(css).toContain("height: 200px")
		})
	})
})
