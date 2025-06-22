<script lang="ts">
	// 테스트 케이스들
	import { parseAdorableCSS } from "packages/v2/unocss/myparser/parseAdorableCSS"
	import { generateCSSFromAdorableCSS } from "packages/v2/unocss/myparser/generateCSSFromAdorableCSS"

	const testCases = [
		// 기본 선택자 테스트
		">>bold",
		"{border:1px_solid_#ccc;}",
		"{border:1px_solid_#ccc;color:#fff;test:rgba(0,0,0,.1)!important;}",
		"calc(100%-10px)",
		"xl:dark:&.card>.header:first-child+.content:nth-child(2n):filter(blur(2px)/brightness(calc(100%+10%))):transform(rotate(10deg))!",
		"test(#ccc..#fff)",
		"&.selected#main:hover",
		"div.container>p>>span",
		"a+b~c>d>>e",
		"#fadd:hover:c(#fff.3)",

		"calc(50%+min(10px,5%))",
		"rotate(30deg+var(--angle))",

		// 여러 단위 혼합
		"m(10px/2em/3vh/4%)",
		"grid-template(1fr+2fr/minmax(100px,1fr)/auto)",

		// 중첩된 함수 호출
		"filter(blur(10px)/brightness(1.2))",
		"transform(translate(calc(50%+min(10px,5%)),rotate(30deg+var(--angle))))",

		// 여러 상태 조합
		"hover:focus:active:c(red)",
		"sm:dark:hover:c(blue)",
		"print:portrait:m(20)",

		// 복잡한 선택자 패턴
		"&:is(.active,.focus):not(.disabled)",
		"&:where(:hover,:focus):after:c(green)",

		// 범위 테스트
		"lg..sm:div",
		"10..20px",
		"xl..:div",
		"..md:span",

		// 단순 함수 호출 테스트
		"transform(rotate/scale/translate)",
		"color(#fff,#000)",
		"margin(10px/20px/30px/40px)",
		"font(100/-/-1%)",
		"font(10/-/1%)",

		// 복합 함수 인수 테스트
		"grid(1fr+20px/repeat+2/auto+1fr)",
		"translate(50%+10px,100%+20px)",

		// 키-값 함수 인수 테스트
		"slide(duration:300/delay:0/ease:in-out)",
		"config(x:10/y:20/z:30/scale:1.5)",

		// 혼합 함수 인수 테스트
		"animation(slide+left/duration:500/delay:0,fade+in/d:300)",
		"transform(rotate30deg/scale:1.2/translate:10px)",
		"c(rgba(0,0,0,.2))",

		// 복잡한 조합 테스트
		"lg..md:&.header.active#main:hover:transform(rotate+30deg/scale:1.2)!",
		"sm:container>div.item+p:nth-child(2n+1):slide(top+down/d:300)!",

		// 특수 케이스 테스트
		"calc(100%+20px*2-10px)",
		"gradient(#fff..#000/angle:45deg/stops:3)",
		"@media(min:300/max:800):&.responsive:config(cols:2/gap:10)!",

		// 에러 케이스 테스트 (이것들은 실패해야 정상)
		// '..',  // 범위 값 없음
		// 'foo(',  // 닫는 괄호 없음
		// 'a++b',  // 연속된 연산자
		// 'test)',  // 여는 괄호 없음
		// ':hover:',  // 값 없는 의사 클래스
	]

	// 테스트 입력 초기값 설정
	let lastIndex = localStorage.getItem("lastIndex") || 0
	let inputText = testCases[lastIndex]
	let result = []

	// 테스트 케이스 선택 함수
	function selectTestCase(index: number) {
		lastIndex = index
		localStorage.setItem("lastIndex", index.toString())
		inputText = testCases[index]
		runParser()
	}

	function runParser() {
		result = parseAdorableCSS(inputText)
		console.log("파싱 결과:", result)
	}

	runParser()
</script>

<h2>CSS 확장 문법 파서 테스트</h2>

<div class="vbox gap(10)">
	<label>테스트 케이스:</label>
	<div class="hbox wrap gap(5)">
		{#each testCases as test, i}
			<button on:click={() => selectTestCase(i)} class="p(4/8) bg(#eee) r(4) {inputText === test ? 'bg(#117ce9)+bold' : ''}">{test}</button>
		{/each}
	</div>
</div>

<div>
	<label for="input">테스트할 표현식:</label>
	<input id="input" bind:value={inputText} class="w(100%) p(4) mb(10)" />
	<button on:click={runParser} class="p(4/10) bg(#117ce9) c(white) r(4)">파싱</button>
</div>

<h3>토큰:</h3>
<!--<code class="monospace bg(#eee) p(4/10) r(4)">-->
<!--	{@html tokens.map((t) => `<span class="bg(#f5f5f5) p(2/4) m(2) inline-block r(2)">${t.image} <i class="c(blue) font(10)">${t.tokenType?.name || "알 수 없음"}</i></span>`).join("")}-->
<!--</code>-->

<div>{generateCSSFromAdorableCSS(inputText)}</div>

<h3>파싱 결과:</h3>
<pre class="font(12) bg(#f5f5f5) p(10) r(4)">{JSON.stringify(result, null, 2)}</pre>
