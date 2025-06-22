// 토큰 인터페이스
interface Token {
	type: string
	image: string
}

export const createTokenizer = (lex: [string, RegExp][]) => {
	const regex = new RegExp(lex.map((v) => v[1].source).join("|"), "g")

	return (script: string) => {
		const tokens: Token[] = []

		script.replace(regex, (image, ...args) => {
			const type = lex[args.findIndex((v) => v !== undefined)][0]
			tokens.push({ type, image })
			return image
		})

		return tokens
	}
}

// 함수형 파서 콤비네이터 라이브러리
export const createParser = (tokens: Token[]) => {
	let pos = 0

	// 현재 토큰 확인
	const peek = () => (pos < tokens.length ? tokens[pos] : null)

	// 특정 토큰 소비
	const consume = (typeOrValue: string) => {
		const token = peek()

		if (!token) throw new Error(`Expected ${typeOrValue}, got EOF`)

		if (token.type === typeOrValue || token.image === typeOrValue) {
			pos++
			return token
		}

		throw new Error(`Expected ${typeOrValue}, got ${token.image || token.type}`)
	}

	// 여러 파서 중 하나 선택
	const options = <T>(...parsers: Array<() => T>): T => {
		const startPos = pos
		for (const parser of parsers) {
			try {
				return parser()
			} catch {
				pos = startPos
			}
		}

		throw new Error(`All options failed at ${pos}`)
	}

	// 파서 0번 이상 반복
	const many = <T>(parser: () => T): T[] => {
		const results = []
		while (pos < tokens.length) {
			const startPos = pos
			try {
				results.push(parser())
				// 파서가 성공했지만 토큰을 소비하지 않으면 무한 루프이므로 오류 발생
				if (pos === startPos) {
					throw new Error(`Infinite loop detected at ${pos}: parser succeeded without consuming input`)
				}
			} catch {
				pos = startPos
				break
			}
		}

		return results
	}

	// 선택적 파서
	const optional = <T>(parser: () => T) => {
		const startPos = pos
		try {
			return parser()
		} catch {
			pos = startPos
			return null
		}
	}

	// 파서 1번 이상 반복
	const many1 = <T>(parser: () => T) => [parser(), ...many(parser)]

	// 구분자로 구분된 요소들 파싱 (0개 이상, 구분자 포함, many + flat 사용)
	const many_sep = <T, S>(parser: () => T, sepParser: () => S): Array<T | S> => {
		const first = optional(parser)
		if (first === null) {
			return []
		}

		return [first, ...many(() => [sepParser(), parser()] as [S, T]).flat(1)]
	}

	// 구분자로 구분된 요소들 파싱 (1개 이상, 구분자 포함, many + flat 사용)
	const many1_sep = <T, S>(parser: () => T, sepParser: () => S): Array<T | S> => [parser(), ...many(() => [sepParser(), parser()] as [S, T]).flat(1)]

	const eof = (v: unknown) => {
		if (pos < tokens.length) {
			throw new Error(`Unexpected token at ${pos}: ${tokens[pos].image} not EOF.`)
		}
		return v
	}

	return { peek, consume, options, many, many1, many_sep, many1_sep, optional, eof, getPos: () => pos }
}
