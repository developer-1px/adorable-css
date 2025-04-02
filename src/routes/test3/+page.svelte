<script lang="ts">
  const lex: [string, RegExp][] = [
    ['(ws)', /(\s+)/],
    ['(hexcolor)', /(#[0-9a-fA-F]{3,8}(?:\.\d+)*)/],
    ['(dimension)', /((?:[0-9]*\.[0-9]+|[0-9]+)[%a-z]*)/],
    ['(string)', /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],
    ['(operator)', /(\.\.\.|\.\.|::|>>|[-+~|*/%!#@?&:;.,<>=[\](){}])/],
    ['(ident)', /([^\s-+~|*/%!#@?&:;.,<>=[\](){}]+)/],
    ['(unknown)', /./],
  ]

  const regex = new RegExp(lex.map((v) => v[1].source).join('|'), 'g')

  const tokenize = (script: string) => {
    const tokens = []

    script.replace(regex, (value, ...args) => {
      const index: number = args[args.length - 2]
      const type = lex[args.findIndex((v) => v !== undefined)][0]
      const id = type === '(operator)' ? value : type
      tokens.push({ type, id, value, index })
      return value
    })

    return tokens
  }

  // 괄호를 기반으로 중첩 구조 파싱
  function parse(tokens) {
    const result = []
    let i = 0

    function parseExpr() {
      if (i >= tokens.length) return null

      const token = tokens[i++]

      // 여는 괄호를 기반으로 그룹화
      if (token.value === '(' || token.value === '{' || token.value === '[') {
        const group = [token.value]
        const closingMap = { '(': ')', '{': '}', '[': ']' }
        const closing = closingMap[token.value]

        // 닫는 괄호를 찾을 때까지 파싱
        while (i < tokens.length && tokens[i].value !== closing) {
          const expr = parseExpr()
          if (expr !== null) {
            group.push(expr)
          }
        }

        // 닫는 괄호 추가
        if (i < tokens.length) {
          group.push(tokens[i].value)
          i++
        }

        return group
      }

      // 다른 토큰은 값만 반환
      return token.value
    }

    // 모든 표현식 파싱
    while (i < tokens.length) {
      const expr = parseExpr()
      if (expr !== null) {
        result.push(expr)
      }
    }

    return result
  }

  // 토큰화 후 파싱
  function tokenizeAndParse(input) {
    console.log('tokenize(input)', tokenize(input))

    return input.split(/\s+/).map((input) => parse(tokenize(input)))
  }

  // 예시
  const input = '(..100,200) hover:c(#fff.2)! lg..sm:hover:nth-child(3n+1):hbox(top+right) {border:1px_solid_red} .selected:gap(20/auto) [&:nth-child(3n+1)]:p(0/0/0/2) >gg(center-50px) w(100%)!! bold+c(#ccc) 700 w(100..300) hslide(start/p:10/mt:20) opacity(.4)'
  console.log('토큰화 결과:', tokenize(input))
  console.log('파싱 결과:', JSON.stringify(tokenizeAndParse(input), null, 2))
</script>
