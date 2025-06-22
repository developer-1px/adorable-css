import { parseAdorableCSS } from "./parseAdorableCSS"
import { RULES_FOR_UNOCSS } from "../rules"

// Simple CSS escape function for testing
function cssEscape(value: string): string {
  return value.replace(/[()#:.]/g, '\\$&')
}

// Convert CSS object to string
function cssObjectToString(obj: any): string {
  if (typeof obj === 'string') return obj
  if (typeof obj !== 'object' || obj === null) return ''
  
  return Object.entries(obj)
    .filter(([key, value]) => !key.startsWith('[') && typeof value === 'string') // Skip special symbols
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ')
}

export function generateCSSFromAdorableCSS(value: string) {
	try {
		const result = parseAdorableCSS(value)

		const rawSelector = "." + cssEscape(value)
		const rules = []

		result.value.forEach((v) => {
			console.log('Full v object:', v)
			console.log('v.selector:', v.selector)

			const name = v.selector.name || v.selector.image
			console.log('name:', name)
			console.log('handler exists:', !!RULES_FOR_UNOCSS[name])
			const handler = RULES_FOR_UNOCSS[name]

			// selector
			if (!handler) {
			}
			// function
			else {
				const keyowrd = !v.selector.name && handler.length === 0
				const fn = v.selector.name && handler.length >= 1

				if (fn) {
					const args = v.selector.args.map((arg) => arg.image).join("")
					console.log(name, args)
					const result = handler(args)
					
					// Handle generator functions
					if (result && typeof result[Symbol.iterator] === 'function') {
						for (const cssRule of result) {
							rules.push(cssObjectToString(cssRule))
						}
					} else {
						rules.push(cssObjectToString(result))
					}
				}
				//
				else if (keyowrd) {
					const result = handler()
					
					// Handle generator functions
					if (result && typeof result[Symbol.iterator] === 'function') {
						for (const cssRule of result) {
							rules.push(cssObjectToString(cssRule))
						}
					} else {
						rules.push(cssObjectToString(result))
					}
				}
			}
		})

		const rule = rules.filter(r => r).join("; ")
		if (rule.includes("&")) {
			// @TODO: 단순 & 치환이 아닌, 문법적 치환이 필요함
			return rule.replace(/&/g, rawSelector)
		}

		return `${rawSelector}{${rule}}`
	} catch (e) {
		return e
	}
}

export function generateCSS(classList: string[]) {
	return classList.map((v) => generateCSSFromAdorableCSS(v)).join("\n")
}
