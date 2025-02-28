<script lang="ts">
  import { createToken, Lexer, EmbeddedActionsParser, createSyntaxDiagramsCode } from 'chevrotain'

  // 토큰 정의
  const HexValue = createToken({ name: 'HexValue', pattern: /#[0-9a-fA-F]{3,6}(?:\.\d+)*/ })
  const Identifier = createToken({ name: 'Identifier', pattern: /[a-zA-Z]\w*/ })
  const Dimension = createToken({ name: 'Dimension', pattern: /(?:[0-9]+|[0-9]*\.[0-9]+)[%a-z]*/ })
  const Integer = createToken({ name: 'Integer', pattern: /0|[1-9]\d*/ })

  const Plus = createToken({ name: '+', pattern: /\+/ })
  const Minus = createToken({ name: '-', pattern: /-/ })
  const Multiply = createToken({ name: '*', pattern: /\*/ })

  const Comma = createToken({ name: ',', pattern: /,/ })
  const Slash = createToken({ name: '/', pattern: /\// })
  const Semicolon = createToken({ name: ';', pattern: /;/ })
  const Colon = createToken({ name: ':', pattern: /:/ })

  const LParen = createToken({ name: '(', pattern: /\(/ })
  const RParen = createToken({ name: ')', pattern: /\)/ })
  const Equals = createToken({ name: '=', pattern: /=/ })
  const Bang = createToken({ name: '!', pattern: /!/ })

  const Range = createToken({ name: '..', pattern: /\.\./ })

  const WhiteSpace = createToken({ name: 'WhiteSpace', pattern: /\s+/ })

  // 모든 토큰을 배열로 정의
  const allTokens = [
    WhiteSpace, // 공백은 항상 먼저 정의해야 함
    HexValue,
    Dimension,
    Integer,

    Semicolon,
    Colon,
    Bang,
    Comma,
    LParen,
    RParen,
    Equals,
    Plus,
    Minus,
    Multiply,
    Slash,
    Identifier,
    Range,
  ]

  // 렉서 인스턴스 생성
  const lexer = new Lexer(allTokens)

  // 파서 클래스 정의
  class SimpleParser extends EmbeddedActionsParser {
    constructor() {
      super(allTokens)

      const $ = this

      // 파서 규칙 정의
      $.RULE('Program', () => {
        let stmts = []

        $.MANY_SEP({
          SEP: WhiteSpace,
          DEF: () => {
            stmts.push($.SUBRULE($.Statement))
          },
        })

        return stmts
      })

      $.RULE('Statement', () => {
        let selector = ''
        let style = []

        $.MANY(() => {
          selector = $.SUBRULE($.Selector)
        })
        $.MANY_SEP({
          SEP: Plus,
          DEF: () => {
            style.push($.SUBRULE($.Declaration))
          },
        })

        return {
          selector,
          style,
        }
      })

      $.RULE('Selector', () => {
        const selector = $.CONSUME(Identifier)
        $.CONSUME(Colon)

        return selector.image
      })

      $.RULE('Declaration', () => {
        const declaration = $.OR([
          { ALT: () => $.SUBRULE($.PositionDeclaration) },
          { ALT: () => $.SUBRULE($.PropertyDeclaration) },
          { ALT: () => $.SUBRULE($.VoidPropertyDeclaration) },
        ])
        const important = []
        $.MANY(() => important.push($.CONSUME(Bang)))

        return Object.fromEntries(
          Object.entries(declaration).map(([key, value]) => {
            return [
              key,
              {
                ...value,
                important: important.length,
              },
            ]
          }),
        )
      })

      $.RULE('PositionDeclaration', () => {
        $.CONSUME(LParen)
        const x = $.SUBRULE1($.Value)
        $.CONSUME(Comma)
        const y = $.SUBRULE2($.Value)
        $.CONSUME3(RParen)

        return { x, y }
      })

      $.RULE('PropertyDeclaration', () => {
        const prop = $.CONSUME(Identifier)
        $.CONSUME(LParen)

        const values = []
        $.MANY_SEP({
          SEP: Slash,
          DEF: () => {
            values.push($.SUBRULE($.Value))
          },
        })
        $.CONSUME(RParen)

        return {
          [prop.image]: { values: values },
        }
      })

      $.RULE('VoidPropertyDeclaration', () => {
        const prop = $.CONSUME(Identifier)
        return { [prop.image]: true }
      })

      $.RULE('Value', () => {
        return $.OR([
          { ALT: () => $.SUBRULE($.RangeValue) },
          { ALT: () => $.SUBRULE($.KeyValue) },
          { ALT: () => $.SUBRULE($.Expression) },
          { ALT: () => $.SUBRULE($.Atom) },
        ])
      })

      $.RULE('RangeValue', () => {
        return $.OR([
          {
            ALT: () => {
              const min = $.SUBRULE1($.Atom)
              $.CONSUME1(Range)
              const max = $.SUBRULE2($.Atom)
              return { min, max }
            },
          },
          {
            ALT: () => {
              const min = $.SUBRULE3($.Atom)
              $.CONSUME2(Range)
              return { min }
            },
          },
          {
            ALT: () => {
              $.CONSUME3(Range)
              const max = $.SUBRULE4($.Atom)
              return { max }
            },
          },
        ])
      })

      $.RULE('KeyValue', () => {
        const key = $.CONSUME(Identifier)
        $.CONSUME(Colon)
        const value = $.SUBRULE($.Value)
        return { [key.image]: value }
      })

      $.RULE('Expression', () => {
        const expr = []

        expr.push($.SUBRULE1($.Atom))

        $.AT_LEAST_ONE(() => {
          expr.push(
            $.OR([
              { ALT: () => $.CONSUME(Plus) },
              { ALT: () => $.CONSUME(Minus) },
              { ALT: () => $.CONSUME(Multiply) },
            ]).image,
          )
          expr.push($.SUBRULE2($.Atom))
        })

        return expr.join('')
      })

      $.RULE('Atom', () => {
        const v = $.OR([
          { ALT: () => $.CONSUME(HexValue) },
          { ALT: () => $.CONSUME(Dimension) },
          { ALT: () => $.CONSUME(Integer) },
          { ALT: () => $.CONSUME(Identifier) },
        ])

        return v.image
      })

      // 파서 규칙 초기화
      $.performSelfAnalysis()
    }
  }

  // 파서 인스턴스 생성
  const parser = new SimpleParser()
  let tokens = []

  // 파싱 함수
  function parseInput(text) {
    // 토큰화
    const lexResult = lexer.tokenize(text)

    tokens = lexResult.tokens

    // 에러 체크
    if (lexResult.errors.length > 0) {
      return `어휘 분석 오류:\n${lexResult.errors.map((err) => JSON.stringify(err)).join('\n')}`
    }

    // 파서 상태 초기화
    parser.input = lexResult.tokens

    // 파싱 실행
    const cst = parser.Program()

    // 에러 체크
    if (parser.errors.length > 0) {
      return `구문 분석 오류:\n${parser.errors.map((err) => err.message).join('\n')}`
    }

    return {
      cst: cst,
      lexResult: lexResult,
    }
  }

  // 파싱 실행 함수
  let inputText =
    '(..100,200) hover:c(#fff.2)! hbox(top+right) gap(20/auto) p(0/0/0/2) gg(center-50px) w(100%)!! bold+c(#ccc) w(100..300) hslide(start/p:10/mt:20) opacity(.4)'
  let parseResult = ''

  function runParser() {
    const result = parseInput(inputText)
    if (typeof result === 'string') {
      console.error(result)
      return
    }

    console.log(result.cst)
    parseResult = JSON.stringify(result.cst, null, 2)
  }

  const parserInstance = parser.getSerializedGastProductions()
  const htmlText = createSyntaxDiagramsCode(parserInstance)

  // 컴포넌트 마운트 시 다이어그램 생성
  runParser()
</script>

<main class="layer y(50) hbox(top) clip">
  <div class="w(fill) h(fill) vbox gap(20) monospace">
    <code class="monospace bg(#eee) p(4/10) r(4)">{inputText}</code>
    <code class="monospace >span:bg(#eee)+p(4)+m(8)+r(4)"
      >{@html tokens.map((t) => `<span>${t.image}</span>`).join('')}</code
    >
    <pre class="h(fill) scroll font(10)">{parseResult}</pre>
  </div>

  <div class="w(fill) h(fill) scroll">
    <iframe srcdoc={htmlText} style="width: 100%; height: 5000px; overflow: scroll"></iframe>
  </div>
</main>
