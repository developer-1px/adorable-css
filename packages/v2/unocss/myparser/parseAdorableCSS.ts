// 파서 함수
import { createParser, createTokenizer } from "./core"

const tokenize = createTokenizer([
	["(ws)", /(\s+)/],
	["(hexcolor)", /(#[0-9a-fA-F]{3,8}(?:\.[0-9]+)*)/],
	["(dimension)", /((?:[0-9]*\.[0-9]+|[0-9]+)[%a-z]*)/],
	["(string)", /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],
	["(ident)", /(-*[_a-zA-Z\u00A0-\uFFFF][_a-zA-Z0-9\u00A0-\uFFFF-]*)/],
	["(range)", /(\.\.\.|\.\.)/],
	["(operator)", /(!important|::|>>|[-+~|*/%!#@?&:;.,<>=[\](){}])/],
	["(unknown)", /./],
])

export function parseAdorableCSS(input: string) {
	const tokens = tokenize(input)

	const { options, consume, many, many1, many_sep, many1_sep, optional, eof } = createParser(tokens)

	// 화이트스페이스 스킵 헬퍼
	const skipWs = () => {
		many(() => consume("(ws)"))
	}

	function SelectorList() {
		skipWs()
		const selectors = []
		
		// 첫 번째 셀렉터
		const first = optional(() => SingleSelector())
		if (first) {
			selectors.push(first)
		}

		// 나머지 셀렉터들 (스페이스로 구분)
		many(() => {
			skipWs()
			const selector = optional(() => SingleSelector())
			if (selector) {
				selectors.push(selector)
			}
		})

		skipWs()

		return {
			type: "selector",
			value: selectors,
			image: selectors.map((s) => s.image).join(" "),
		}
	}

	function SingleSelector() {
		const at = optional(() => consume("@"))
		const selector = SimpleSelector()
		const important = many(() => consume("!"))
			.map((v) => v.image)
			.join("")

		const combinator = many(() => CombinatorSelector())

		return {
			type: "selector",
			combinator: "",
			selector,
			important,
			combinators: combinator,
			image: (at ? "@" : "") + selector.image + important + combinator.map(c => c.image).join(""),
		}
	}

	function SimpleSelector() {
		return options(
			() => CSSLiteral(),
			() => FunctionCall(),
			() => Range(),
			() => consume("(ident)"),
			() => consume("(dimension)"),
			() => consume("&"),
		)
	}

	function CombinatorSelector() {
		const combinator = many1(() =>
			options(
				() => consume(":"),
				() => consume("."),
				() => consume(">"),
				() => consume(">>"),
				() => consume("+"),
				() => consume("~"),
				() => consume("#"),
				() => consume("::"),
			),
		)
			.map((v) => v.image)
			.join("")

		const selector = SimpleSelector()
		const important = many(() => consume("!"))
			.map((v) => v.image)
			.join("")

		return {
			type: "selector",
			combinator: combinator,
			selector,
			important,
			image: `${combinator}${selector.image}${important}`,
		}
	}

	function Range() {
		return options(
			// 10..20
			() => {
				const min = Term()
				const range = consume("(range)").image
				const max = Term()
				return { type: "range", min, max, range, image: `${min.image}${range}${max.image}` }
			},

			// 10..
			() => {
				const min = Term()
				const range = consume("(range)").image
				return { type: "range", min, max: null, range, image: `${min.image}${range}` }
			},

			// ..10
			() => {
				const range = consume("(range)").image
				const max = Term()
				return { type: "range", min: null, max, range, image: `${range}${max.image}` }
			},
		)
	}

	function FunctionCall() {
		const name = consume("(ident)")

		consume("(")

		const args = many_sep(Arg, () =>
			options(
				() => consume("/"),
				() => consume(","),
			),
		)

		consume(")")

		return {
			type: "function",
			name: name.image,
			args,
			image: `${name.image}(${args
				.flat()
				.map((v) => v.image)
				.join("")})`,
		}
	}

	function Arg() {
		return options(
			() => FunctionCall(),
			() => Range(),
			() => KeyValue(),
			() => CombinatorSelector(),
			() => Expr(),
			() => consume("-"),
		)
	}

	function KeyValue() {
		const key = consume("(ident)")
		consume(":")
		const value = Expr()

		return {
			type: "keyValue",
			key: key.image,
			value,
			image: `${key.image}:${value.image}`,
		}
	}

	function Expr() {
		const value = many1_sep(Term, () =>
			options(
				() => consume("+"),
				() => consume("-"),
				() => consume("*"),
			),
		)

		return {
			type: "expr",
			value,
			image: value.map((v) => v.image).join(""),
		}
	}

	function Term() {
		return options(
			() => CSSFunc(),
			() => {
				const minus = optional(() => consume("-"))
				const dimension = consume("(dimension)")
				return { ...dimension, image: minus ? `-${dimension.image}` : dimension.image }
			},
			() => consume("(hexcolor)"),
			() => consume("(ident)"),
		)
	}

	function CSSFunc() {
		const name = consume("(ident)")

		consume("(")

		const args = many_sep(Expr, () =>
			options(
				() => consume("/"),
				() => consume(","),
			),
		)

		consume(")")

		return {
			type: "css_function",
			name: name.image,
			args,
			image: `${name.image}(${args
				.flat()
				.map((v) => v.image)
				.join("")})`,
		}
	}

	function CSSLiteral() {

		const value = []

		consume("{")

		many(() => {
			optional(() => value.push(consume(";")))

			value.push(consume("(ident)"))
			value.push(consume(":"))

			value.push(
				...many(() =>
					options(
						() => consume("(dimension)"),
						() => consume("(hexcolor)"),
						() => consume("(string)"),
						() => CSSFunc(),
						() => consume("(ident)"),
					),
				),
			)

			optional(() => value.push(consume("!important")))
			optional(() => value.push(consume(";")))
		})

		consume("}")

		return {
			type: "css_literal",
			value,
			image:
				"{" +
				value
					.map((v) => v.image)
					.join("")
					.replace(/_/g, " ") +
				"}",
		}
	}

	try {
		const r = SelectorList()
		eof(r)
		return r
	} catch (e) {
		console.error("파싱 에러:", e)
	}
}
