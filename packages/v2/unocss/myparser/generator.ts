import { parseAdorableCSS } from "./parser"
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
		let actualSelector = rawSelector // Will be modified for pseudo-classes

		result.value.forEach((v) => {
			// Handle pseudo-classes (hover:, active:, etc.)
			if (v.combinators && v.combinators.length > 0) {
				v.combinators.forEach((combinator) => {
					if (combinator.combinator === ":") {
						const pseudoClass = v.selector.image // e.g., "hover"
						const targetSelector = combinator.selector
						const name = targetSelector.name || targetSelector.image
						const handler = RULES_FOR_UNOCSS[name]

						// Update selector to include pseudo-class
						actualSelector = `${rawSelector}:${pseudoClass}`

						if (handler) {
							const keyword = !targetSelector.name && handler.length === 0
							const fn = targetSelector.name && handler.length >= 1

							if (fn) {
								const args = targetSelector.args.map((arg) => arg.image).join("")
								console.log(`Calling pseudo ${name}(${args}) - handler exists:`, !!handler)
								const result = handler(args)
								
								// Handle generator functions
								if (result && typeof result[Symbol.iterator] === 'function') {
									for (const cssRule of result) {
										rules.push(cssObjectToString(cssRule))
									}
								} else {
									rules.push(cssObjectToString(result))
								}
							} else if (keyword) {
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
					}
				})
			} else {
				// Handle regular selectors (no pseudo-classes)
				const name = v.selector.name || v.selector.image
				const handler = RULES_FOR_UNOCSS[name]

				// selector
				if (!handler) {
				}
				// function
				else {
					const keyword = !v.selector.name && handler.length === 0
					const fn = v.selector.name && handler.length >= 1

					if (fn) {
						const args = v.selector.args.map((arg) => arg.image).join("")
						console.log(`Calling ${name}(${args}) - handler exists:`, !!handler)
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
					else if (keyword) {
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
			}
		})

		const rule = rules.filter(r => r).join("; ")
		if (rule.includes("&")) {
			// @TODO: 단순 & 치환이 아닌, 문법적 치환이 필요함
			return rule.replace(/&/g, actualSelector)
		}

		return `${actualSelector}{${rule}}`
	} catch (e) {
		return e
	}
}

export function generateCSS(classList: string[]) {
	return classList.map((v) => generateCSSFromAdorableCSS(v)).join("\n")
}
