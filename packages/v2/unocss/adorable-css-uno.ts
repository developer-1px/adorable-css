// uno.config.ts
import { defineConfig } from "unocss"
import { makePosition2, px } from "./values/makeValue"
import { parseAdorableCSS } from "./myparser/parseAdorableCSS"
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

// 스타일 인자 추출 함수 (myparser용)
const extractStyleArgs = (selector: any) => {
	if (selector.type === "function" && selector.args) {
		return selector.args.map((arg: any) => {
			// myparser의 args 구조에 맞게 수정
			if (arg.type === "expr" && arg.value) {
				return arg.value.map((v: any) => {
					if (v.image.startsWith('#')) return makeHEX(v.image)
					return v.image
				}).join('')
			}
			if (arg.image) {
				if (arg.image.startsWith('#')) return makeHEX(arg.image)
				return arg.image
			}
			return arg
		})
	}

	return []
}

// 스타일 결과를 배열로 변환하는 함수
function normalizeStyleResult(result: any): StyleProperties[] {
	if (typeof result === "string") return []
	if (Array.isArray(result)) return result
	if (result && typeof result[Symbol.iterator] === 'function') return [...result]
	return result ? [result] : []
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
				([inputValue]: string[], context: any) => {
					try {
						const parsedInput = parseAdorableCSS(inputValue)
						if (!parsedInput || !parsedInput.value) return undefined
						
						const styleRules: StyleProperties[] = []

						parsedInput.value.forEach((selectorItem: any) => {
							const selector = selectorItem.selector
							const propertyName = selector.type === "function" ? selector.name : selector.image
							const fn = RULES_FOR_UNOCSS[propertyName as keyof typeof RULES_FOR_UNOCSS]

							if (fn) {
								const args = extractStyleArgs(selector)
								const styleResult = args.length ? fn(args.join("/")) : fn()
								const styleDeclarations = normalizeStyleResult(styleResult)
								styleRules.push(...styleDeclarations)
							}
						})

						return styleRules.length > 0 ? styleRules : undefined
					} catch (error) {
						return undefined
					}
				},
			],
		],
	})
