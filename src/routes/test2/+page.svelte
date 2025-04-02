<script lang="ts">
  import { createSyntaxDiagramsCode } from 'chevrotain'
  import { parseInput, parser } from 'packages/v2/unocss/parser'

  let tokens = []
  let parseResult

  function runParser() {
    try {
      const result = parseInput(inputText)
      if (typeof result === 'string') {
        parseResult = result
        tokens = []
      } else {
        parseResult = JSON.stringify(result.cst, null, 2)
        tokens = result.tokens
      }
    } catch (error: any) {
      parseResult = `파싱 오류: ${error.message || '알 수 없는 오류'}`
      console.error('파싱 오류:', error)
      tokens = []
    }
  }

  // 테스트 케이스들
  const testCases = [
    // 기본 선택자 테스트
    '#fa3:hover:c(#fff.3)',
    '&.selected#main:hover',
    'div.container>p>>span',
    'a+b~c>d>>e',

    // 범위 테스트
    'lg..sm:div',
    '10..20px',
    'xl..:div',
    '..md:span',

    // 단순 함수 호출 테스트
    'transform(rotate/scale/translate)',
    'color(#fff,#000)',
    'margin(10px/20px/30px/40px)',
    'font(100/-/-1%)',
    'font(10/-/1%)',

    // 복합 함수 인수 테스트
    'grid(1fr+20px/repeat+2/auto+1fr)',
    'translate(50%+10px,100%+20px)',

    // 키-값 함수 인수 테스트
    'slide(duration:300/delay:0/ease:in-out)',
    'config(x:10/y:20/z:30/scale:1.5)',

    // 혼합 함수 인수 테스트
    'animation(slide+left/duration:500/delay:0,fade+in/d:300)',
    'transform(rotate30deg/scale:1.2/translate:10px)',
    'c(rgba(0,0,0,.2))',

    // 복잡한 조합 테스트
    'lg..md:&.header.active#main:hover:transform(rotate+30deg/scale:1.2)!',
    'sm:container>div.item+p:nth-child(2n+1):slide(top+down/d:300)!',

    // 특수 케이스 테스트
    'calc(100%+20px*2-10px)',
    'gradient(#fff..#000/angle:45deg/stops:3)',
    '@media(min:300/max:800):&.responsive:config(cols:2/gap:10)!',

    // 에러 케이스 테스트 (이것들은 실패해야 정상)
    // '..',  // 범위 값 없음
    // 'foo(',  // 닫는 괄호 없음
    // 'a++b',  // 연속된 연산자
    // 'test)',  // 여는 괄호 없음
    // ':hover:',  // 값 없는 의사 클래스
  ]

  // 테스트 입력 초기값 설정
  let inputText = testCases[0]

  // 테스트 케이스 선택 함수
  function selectTestCase(index: number) {
    inputText = testCases[index]
    runParser()
  }

  // 파서 규칙 가져오기 (다이어그램용)
  const parserInstance = parser.getSerializedGastProductions()
  const htmlText = createSyntaxDiagramsCode(parserInstance)

  // 컴포넌트 마운트 시 파서 실행
  runParser()
</script>

<main class="layer y(56) hbox(top) clip">
  <div class="w(fill) h(fill) vbox gap(20) monospace">
    <h2>CSS 확장 문법 파서 테스트</h2>

    <div class="vbox gap(10)">
      <label>테스트 케이스:</label>
      <div class="hbox wrap gap(5)">
        {#each testCases as test, i}
          <button
            on:click={() => selectTestCase(i)}
            class="p(4/8) bg(#eee) r(4) {inputText === test ? 'bg(#117ce9) c(white)' : ''}">{test}</button
          >
        {/each}
      </div>
    </div>

    <div>
      <label for="input">테스트할 표현식:</label>
      <input id="input" bind:value={inputText} class="w(100%) p(4) mb(10)" />
      <button on:click={runParser} class="p(4/10) bg(#117ce9) c(white) r(4)">파싱</button>
    </div>

    <h3>토큰:</h3>
    <code class="monospace bg(#eee) p(4/10) r(4)">
      {@html tokens
        .map(
          (t) =>
            `<span class="bg(#f5f5f5) p(2/4) m(2) inline-block r(2)">${t.image} <i class="c(blue) font(10)">${t.tokenType?.name || '알 수 없음'}</i></span>`,
        )
        .join('')}
    </code>

    <h3>파싱 결과:</h3>
    <pre class="h(300) scroll font(12) bg(#f5f5f5) p(10) r(4)">{parseResult}</pre>
  </div>

  <div class="w(fill) h(fill) scroll">
    <h3>문법 다이어그램:</h3>
    <iframe srcdoc={htmlText} style="width: 100%; height: 600px; border: 1px solid #ccc; border-radius: 4px;"></iframe>
  </div>
</main>
