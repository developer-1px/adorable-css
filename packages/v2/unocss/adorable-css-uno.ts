// uno.config.ts
import { defineConfig } from "unocss"
import { makePosition2, px } from "./values/makeValue"
import { generateCSSFromAdorableCSS } from "./myparser"

function generateDimensions([, w, h]: string[]) {
	return { width: px(w), height: px(h) }
}

function generateAspectRatio([, w, h]: string[]) {
	return { "aspect-ratio": `${w}/${h}`, "height": "auto" }
}

function generatePosition([, x, y]: string[]) {
	return {
		position: "absolute",
		...makePosition2(x, y),
	}
}

// UnoCSS TypeScript
export const adorableCSS = () =>
	defineConfig({
		// ...UnoCSS options
		rules: [
			// 사이즈 매칭 (예: "32x32", "128x128")
			[/^(\d+)x(\d+)$/, generateDimensions],

			// aspect-ratio: 16:9
			[/^(\d+):(\d+)$/, generateAspectRatio],

			// position: (10,20)
			[/^\(([^,)\s]+),([^,)\s]+)\)$/, generatePosition],

			[
				/^.+$/,
				([inputValue]: string[], context: any) => {
					try {
						const cssResult = generateCSSFromAdorableCSS(inputValue)

						// If it's an error, return undefined
						if (cssResult instanceof Error) return undefined

						// Extract CSS rules from the generated CSS string
						// Format: ".selector{rule1: value1; rule2: value2}"
						const match = cssResult.match(/\{([^}]+)\}/)
						if (!match) return undefined

						const cssRules = match[1]
						const styleObject: Record<string, string> = {}

						// Parse CSS rules into object
						cssRules.split(";").forEach((rule) => {
							const [property, value] = rule.split(":").map((s) => s.trim())
							if (property && value) {
								styleObject[property] = value
							}
						})

						return Object.keys(styleObject).length > 0 ? styleObject : undefined
					} catch (error) {
						return undefined
					}
				},
			],
		],
	})
