import { parseAdorableCSS } from "./parseAdorableCSS"
import { RULES } from "../../../vite/src/core/rules"
import { cssEscape } from "../../../vite/src/core/cssEscape"

export function generateCSSFromAdorableCSS(value: string) {
	try {
		const result = parseAdorableCSS(value)

		const rawSelector = "." + cssEscape(value)
		const rules = []

		result.value.forEach((v) => {
			console.log(v.selector)

			const name = v.selector.name || v.selector.image
			const handler = RULES[name]

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
					rules.push(handler(args))
				}
				//
				else if (keyowrd) {
					rules.push(handler())
				}
			}
		})

		const rule = rules.join("")
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
