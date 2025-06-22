// uno.config.ts
import { defineConfig, symbols } from "unocss"
import { makePosition2, px } from "./values/makeValue"
import { parseInput } from "./parser"
import { makeHEX, makeColor } from "./values/makeValue"
import { RULES_FOR_UNOCSS } from "./rules"

const VALID_PSEUDO_CLASSES = [
	"active",
	"checked",
	"disabled",
	"empty",
	"enabled",
	"first-child",
	"first-of-type",
	"focus",
	"hover",
	"in-range",
	"invalid",
	"last-child",
	"last-of-type",
	"link",
	"nth-child",
	"nth-last-child",
	"nth-last-of-type",
	"nth-of-type",
	"only-of-type",
	"only-child",
	"optional",
	"out-of-range",
	"read-only",
	"read-write",
	"required",
	"root",
	"target",
	"valid",
	"visited",
]

const VALID_PSEUDO_ELEMENTS = [
	"after", //
	"before",
	"first-letter",
	"first-line",
	"selection",
	"backdrop",
	"placeholder",
	"marker",
	"spelling-error",
	"grammar-error",
]

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

// 스타일 인자 추출 함수
const extractStyleArgs = (selector) => {
	if (selector.type === "function") {
		return selector.args.map(({ value: atom }) => {
			if (atom.type === "hex") return makeHEX(atom.image)
			return atom.image
		})
	}

	return []
}

// 스타일 결과를 배열로 변환하는 함수
function normalizeStyleResult(result: StyleProperties | StyleProperties[]): StyleProperties[] {
	if (typeof result === "string") return []
	return Array.isArray(result) || result[Symbol.iterator] ? [...result] : [result]
}

// TypeScript interface for style properties
type StyleProperties = Record<string, string | number> | string

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
				([inputValue]) => {
					try {
						const parsedInput = parseInput(inputValue)
						const statements = parsedInput.cst as []

						console.log("Parsed:", JSON.stringify(parsedInput, null, 2))

						const styleRules = []

						statements.forEach((selector) => {
							const simpleSelector = selector.selector
							const propertyName = simpleSelector.type === "function" ? simpleSelector.name : simpleSelector.image

							console.log("Looking for rule:", propertyName)
							const fn = RULES_FOR_UNOCSS[propertyName]

							if (fn) {
								console.log("Found rule function for:", propertyName)
								const args = extractStyleArgs(simpleSelector)
								const styleResult = args.length ? fn(args.join("/")) : fn()
								const styleDeclarations = normalizeStyleResult(styleResult)
								console.log("Style result:", styleDeclarations)
								styleRules.push(...styleDeclarations)
							} else {
								console.log("No rule found for:", propertyName)
							}
						})

						console.log("Final style rules:", styleRules)
						return styleRules.length > 0 ? styleRules : undefined
					} catch (error) {
						console.error("Error in rule processing:", error)
						return undefined
					}
				},
			],
		],
	})
