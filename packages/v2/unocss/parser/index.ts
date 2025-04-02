import { createToken, EmbeddedActionsParser, Lexer } from 'chevrotain'
import { makeHEX } from '../values/makeValue'

// 토큰 정의
const WhiteSpace = createToken({ name: 'WhiteSpace', pattern: /\s+/, group: 'skip' })

// 선택자 관련 토큰
const Dot = createToken({ name: '.', pattern: /\./ })
const Hash = createToken({ name: '#', pattern: /#/ })
const Ampersand = createToken({ name: '&', pattern: /&/ })
const Child = createToken({ name: '>', pattern: />/ })
const DeepDescendant = createToken({ name: '>>', pattern: />>/ })
const Tilde = createToken({ name: '~', pattern: /~/ })
const DoubleColon = createToken({ name: '::', pattern: /::/ })
const Colon = createToken({ name: ':', pattern: /:/ })

// 함수 및 값 관련 토큰
const LParen = createToken({ name: '(', pattern: /\(/ })
const RParen = createToken({ name: ')', pattern: /\)/ })
const Comma = createToken({ name: ',', pattern: /,/ })
const Slash = createToken({ name: '/', pattern: /\// })
const Bang = createToken({ name: '!', pattern: /!/ })

// 연산자 토큰
const Plus = createToken({ name: '+', pattern: /\+/ })
const Minus = createToken({ name: '-', pattern: /-/ })
const Multiply = createToken({ name: '*', pattern: /\*/ })

// 값 토큰
const Range = createToken({ name: '..', pattern: /\.\./ })
const Func = createToken({ name: 'Func', pattern: /[-_]*[a-zA-Z]+[-_\w]*\(/ })
const Identifier = createToken({ name: 'Identifier', pattern: /[-_]*[a-zA-Z]+[-_\w]*(\.\.\.)?/ })
const Number = createToken({ name: 'Number', pattern: /(-?([0-9]*\.[0-9]+|[0-9]+))/ })
const Dimension = createToken({ name: 'Dimension', pattern: /(-?([0-9]*\.[0-9]+|[0-9]+)[%a-z]*)/ })
const HexValue = createToken({ name: 'HexValue', pattern: /#[0-9a-fA-F]{3,8}(?:\.\d+)*/ })

const allTokens = [
  WhiteSpace, // 공백은 스킵

  // 값 토큰 (Dimension은 Number 패턴을 포함하므로 먼저 처리)
  HexValue,
  Dimension,
  Number,
  Func,
  Identifier,

  // 복합 패턴이 있는 토큰을 먼저 배치
  DeepDescendant, // >> 패턴이 > 패턴을 포함하므로 먼저 처리
  Range, // .. 패턴이 . 패턴을 포함하므로 먼저 처리

  // 셀렉터 관련 토큰
  Child,
  Dot,
  Hash,
  Ampersand,
  DoubleColon,
  Colon,
  Plus,
  Tilde,

  // 함수 및 값 관련 토큰
  LParen,
  RParen,
  Comma,
  Slash,
  Bang,

  // 연산자 토큰
  Minus,
  Multiply,
]

// 렉서 생성
const lexer = new Lexer(allTokens)

// 파서 클래스 정의
class CssExtendedParser extends EmbeddedActionsParser {
  // 클래스 내에서 사용할 규칙 메서드들을 미리 선언
  public Statement: any
  private Expression: any
  private FunctionCall: any
  private RangeExpression: any
  private AtomicValue: any
  private Argument: any
  private KeyValue: any
  private CompositeValue: any

  constructor() {
    super(allTokens)

    const $ = this

    // 전체 프로그램 (한 개 이상의 문장으로 구성)
    // $.RULE('Program', () => {
    //   const statements = []
    //   $.MANY_SEP({
    //     SEP: WhiteSpace,
    //     DEF: () => {
    //       statements.push($.SUBRULE($.Statement))
    //     },
    //   })
    //   return statements
    // })

    $.RULE('Statement', () => {
      const parts = []

      // 첫 번째 셀렉터는 필수
      $.OPTION(() => {
        const selector = $.SUBRULE($.Expression)
        parts.push({
          combinator: '',
          selector,
          image: selector.image,
        })
      })

      // 콤비네이터로 연결된 추가 셀렉터들
      $.MANY(() => {
        // 콤비네이터
        const combinator = $.OR([
          { ALT: () => $.CONSUME(Hash) }, // 인접 형제
          { ALT: () => $.CONSUME(Dot) }, // 클래스
          { ALT: () => $.CONSUME(Child) }, // 자식
          { ALT: () => $.CONSUME(DeepDescendant) && { image: ' ' } }, // 자손
          { ALT: () => $.CONSUME(Plus) }, // 인접 형제
          { ALT: () => $.CONSUME(Tilde) }, // 일반 형제
          { ALT: () => $.CONSUME(DoubleColon) }, // 의사 클래스
          { ALT: () => $.CONSUME(Colon) }, // 의사 클래스
        ]).image

        // 다음 셀렉터
        const selector = $.SUBRULE2($.Expression)

        parts.push({
          combinator,
          selector,
          image: combinator + selector.image,
        })
      })

      return parts
    })

    // 값 (범위, 수학식, 기본값)
    $.RULE('Expression', () => {
      const expr = $.OR([
        { ALT: () => $.SUBRULE($.RangeExpression) },
        { ALT: () => $.SUBRULE($.FunctionCall) },
        { ALT: () => $.CONSUME(HexValue) },
        { ALT: () => $.CONSUME(Identifier) },
        { ALT: () => $.CONSUME(Number) },
        { ALT: () => $.CONSUME(Ampersand) },
        { ALT: () => $.CONSUME(Multiply) },
      ])

      // 느낌표 처리
      $.MANY(() => {
        $.CONSUME(Bang)
      })

      return expr.tokenType ? { type: expr.tokenType.name, image: expr.image } : expr
    })

    // 범위 값 (min..max, ..max, min..)
    $.RULE('RangeExpression', () => {
      return $.OR([
        {
          ALT: () => {
            const min = $.SUBRULE($.AtomicValue)
            const range = $.CONSUME(Range)
            const max = $.SUBRULE2($.AtomicValue)
            return { type: 'range', min, max, image: `${min}${range.image}${max}` }
          },
        },
        {
          ALT: () => {
            const range = $.CONSUME1(Range)
            const max = $.SUBRULE3($.AtomicValue)
            return { type: 'range', min: null, max, image: `${range.image}${max}` }
          },
        },
        {
          ALT: () => {
            const min = $.SUBRULE4($.AtomicValue)
            const range = $.CONSUME2(Range)
            return { type: 'range', min, max: null, image: `${range.image}` }
          },
        },
      ])
    })

    // 함수 호출 (foo(arg1/arg2,arg3))
    $.RULE('FunctionCall', () => {
      const name = $.CONSUME(Func)

      const args = []

      // 첫 번째 인수 (필수)
      const value = $.SUBRULE($.Argument)
      args.push({
        separator: '',
        value: value,
        image: value.image,
      })

      // 추가 인수 (Slash 또는 Comma로 구분)
      $.MANY(() => {
        const separator = $.OR([
          { ALT: () => $.CONSUME(Slash) }, //
          { ALT: () => $.CONSUME(Comma) },
        ])

        const value = $.SUBRULE2($.Argument)
        args.push({
          separator: separator.image,
          value,
          image: separator.image + value.image,
        })
      })

      $.CONSUME(RParen)

      const funcName = name.image.slice(0, -1)

      return {
        type: 'function',
        name: funcName,
        args,
        image: `${funcName}(${args.map((arg) => arg.image).join('')})`,
      }
    })

    // 함수 인수
    $.RULE('Argument', () => {
      return $.OR([
        { ALT: () => $.SUBRULE($.KeyValue) },
        { ALT: () => $.SUBRULE($.CompositeValue) },
        { ALT: () => $.SUBRULE($.FunctionCall) },
        { ALT: () => $.CONSUME(Minus) },
      ])
    })

    // 키:값 쌍
    $.RULE('KeyValue', () => {
      const key = $.CONSUME(Identifier)
      $.CONSUME(Colon)
      const value = $.SUBRULE($.CompositeValue)

      return {
        type: 'keyValue',
        key: key.image,
        value,
        image: `${key}:${value}`,
      }
    })

    //
    $.RULE('CompositeValue', () => {
      const values = []
      values.push($.SUBRULE($.AtomicValue))

      $.MANY(() => {
        const operator = $.OR([
          { ALT: () => $.CONSUME(Plus) },
          { ALT: () => $.CONSUME(Minus) },
          { ALT: () => $.CONSUME(Multiply) },
          { ALT: () => $.CONSUME(Comma) },
        ])

        values.push(operator)
        values.push($.SUBRULE2($.AtomicValue))
      })

      return {
        type: 'composite',
        value: values,
        image: values.map((value) => (value.type === 'hex' ? makeHEX(value.image) : value.image)).join(''),
      }
    })

    // 기본 값 (식별자, 숫자, 치수, 색상)
    $.RULE('AtomicValue', () => {
      return $.OR([
        {
          ALT: () => {
            const id = $.CONSUME(Identifier)
            return { type: 'identifier', value: id.image, image: id.image }
          },
        },
        {
          ALT: () => {
            const num = $.CONSUME(Number)
            return { type: 'number', value: num.image, image: num.image }
          },
        },
        {
          ALT: () => {
            const dim = $.CONSUME(Dimension)
            return { type: 'dimension', value: dim.image, image: dim.image }
          },
        },
        {
          ALT: () => {
            const hex = $.CONSUME(HexValue)
            return { type: 'hex', value: hex.image, image: hex.image }
          },
        },
      ])
    })

    // 파서 규칙 초기화
    this.performSelfAnalysis()
  }
}

// 파서 인스턴스 생성
export const parser = new CssExtendedParser()

// 파싱 함수
export function parseInput(text: string) {
  // 토큰화
  const lexResult = lexer.tokenize(text)
  const tokens = lexResult.tokens

  // 어휘 분석 오류 확인
  if (lexResult.errors.length > 0) {
    throw lexResult.errors
  }

  // 파서 입력 설정
  parser.input = tokens

  // 파싱 실행
  const cst = parser.Statement()

  // 구문 분석 오류 확인
  if (parser.errors.length > 0) {
    throw parser.errors
  }

  return {
    cst: cst,
    tokens: tokens,
  }
}
