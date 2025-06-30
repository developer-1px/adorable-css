<script lang="ts">
	// AdorableCSS 파서 학습 가이드 - 단순한 것부터 복잡한 것 순서로
	const allTestCases = [
		// 1. Term - 기본 토큰들 (가장 단순한 구성요소)
		{ class: "hbox", group: "1. Term - 식별자", description: "(ident) 토큰 - 기본 키워드" },
		{ class: "relative", group: "1. Term - 식별자", description: "(ident) 토큰 - 위치 키워드" },
		{ class: "block", group: "1. Term - 식별자", description: "(ident) 토큰 - 디스플레이 속성" },

		// 2. Term - 기본 값들 (SimpleSelector에서 단독 사용 가능)
		{ class: "#667eea", group: "2. Term - 컬러", description: "(hexcolor) 토큰 - 6자리" },
		{ class: "#fff", group: "2. Term - 컬러", description: "(hexcolor) 토큰 - 3자리" },
		{ class: "#000.5", group: "2. Term - 컬러", description: "(hexcolor) 토큰 - 투명도" },

		// 3. Range - 범위 표현식 (SimpleSelector에서 단독 사용 가능)
		{ class: "200..400", group: "3. Range - 범위", description: "최소..최대 범위" },
		{ class: "..400", group: "3. Range - 범위", description: "..최대 (최대값만)" },
		{ class: "200..", group: "3. Range - 범위", description: "최소.. (최소값만)" },

		// 4. FunctionCall - 단순한 함수 (단일 Term 인수)
		{ class: "w(300)", group: "4. FunctionCall - 단순", description: "(dimension) 토큰 인수" },
		{ class: "w(300px)", group: "4. FunctionCall - 단순", description: "(dimension) 토큰 - 단위 포함" },
		{ class: "w(50%)", group: "4. FunctionCall - 단순", description: "(dimension) 토큰 - 퍼센트" },
		{ class: "bg(#667eea)", group: "4. FunctionCall - 단순", description: "(hexcolor) 토큰 인수" },
		{ class: "text(center)", group: "4. FunctionCall - 단순", description: "(ident) 토큰 인수" },
		{ class: "bg('image.jpg')", group: "4. FunctionCall - 단순", description: "(string) 토큰 인수" },

		// 5. FunctionCall - Range 인수
		{ class: "w(200..400)", group: "5. FunctionCall - Range", description: "Range 인수" },
		{ class: "h(100..)", group: "5. FunctionCall - Range", description: "Range 인수 (최소값만)" },
		{ class: "p(..20)", group: "5. FunctionCall - Range", description: "Range 인수 (최대값만)" },

		// 6. Expr - 표현식 (여러 Term을 연산자로 연결)
		{ class: "calc(100+20)", group: "6. Expr - 표현식", description: "+ 연산자로 연결" },
		{ class: "calc(100-50)", group: "6. Expr - 표현식", description: "- 연산자로 연결" },
		{ class: "calc(10*5)", group: "6. Expr - 표현식", description: "* 연산자로 연결" },

		// 7. FunctionCall - 슬래시 구분 다중 인수 (Arg로 처리)
		{ class: "p(16/24)", group: "7. FunctionCall - 다중", description: "2개 인수 (/ 구분)" },
		{ class: "p(16/24/32)", group: "7. FunctionCall - 다중", description: "3개 인수 (/ 구분)" },
		{ class: "font(16/24/-2%)", group: "7. FunctionCall - 다중", description: "음수 포함 다중 인수" },
		{ class: "shadow(0/4/8/#000)", group: "7. FunctionCall - 다중", description: "숫자+컬러 혼합" },

		// 8. KeyValue - 키:값 쌍 (Arg 내에서)
		{ class: "font(family:Inter)", group: "8. KeyValue - 키값", description: "키:값 쌍 구조" },
		{ class: "transform(rotate:45deg)", group: "8. KeyValue - 키값", description: "키:값 + 단위" },
		{ class: "grid(cols:3)", group: "8. KeyValue - 키값", description: "키:숫자 값" },

		// 9. CSSFunc - CSS 함수 중첩 (Term 내에서)
		{ class: "bg(linear-gradient(0deg/#000/#fff))", group: "9. CSSFunc - 중첩", description: "CSS 함수 중첩" },
		{ class: "transform(rotate(45deg))", group: "9. CSSFunc - 중첨", description: "CSS 함수 + 단위" },
		{ class: "filter(blur(4px))", group: "9. CSSFunc - 중첩", description: "CSS 함수 체인" },

		// 10. Expr + 연산자 - 복잡한 표현식 조합
		{ class: "hbox(center+middle)", group: "10. Expr - 조합", description: "Expr에서 + 연산자" },
		{ class: "text(left+top)", group: "10. Expr - 조합", description: "키워드 + 연산자" },
		{ class: "margin(10+20/30-5)", group: "10. Expr - 조합", description: "복잡한 연산식" },

		// 11. SingleSelector - !important 기능
		{ class: "w(300)!", group: "11. !important", description: "단일 !" },
		{ class: "bg(#667eea)!!", group: "11. !important", description: "이중 !!" },
		{ class: "p(16)!!!", group: "11. !important", description: "삼중 !!!" },

		// 12. CombinatorSelector - 의사 클래스 (:)
		{ class: "hover:bg(#667eea)", group: "12. CombinatorSelector", description: "단일 의사클래스" },
		{ class: "focus-visible:outline(2px)", group: "12. CombinatorSelector", description: "복합 의사클래스" },
		{ class: "group-hover:bg(#f5f5f5)", group: "12. CombinatorSelector", description: "그룹 의사클래스" },
		{ class: "first:mt(0)", group: "12. CombinatorSelector", description: "구조 의사클래스" },

		// 13. CombinatorSelector + !important 조합
		{ class: "hover:bg(#fff)!", group: "13. Combinator + !", description: "의사클래스 + !important" },
		{ class: "focus:border(#667eea)!!", group: "13. Combinator + !", description: "의사클래스 + 이중!" },

		// 14. CSSLiteral - CSS 리터럴 블록
		{ class: "{display:flex}", group: "14. CSSLiteral", description: "단일 CSS 속성" },
		{ class: "{color:red;background:blue}", group: "14. CSSLiteral", description: "다중 CSS 속성" },
		{ class: "{margin:10px_20px}", group: "14. CSSLiteral", description: "_ → 공백 변환" },
		{ class: "{border:1px_solid_#000}", group: "14. CSSLiteral", description: "복합 CSS 값" },

		// 15. SelectorList - 다중 클래스 조합 (공백 구분)
		{ class: "vbox w(fill) p(24)", group: "15. SelectorList", description: "3개 클래스 조합" },
		{ class: "hbox(center) bg(#fff) shadow(md)", group: "15. SelectorList", description: "함수+컬러+키워드" },
		{ class: "hover:bg(#667eea) focus:border(#333)", group: "15. SelectorList", description: "다중 의사클래스" },

		// 16. 복잡한 실제 사용 사례 (모든 문법 요소 활용)
		{ class: "w(fill/200..800) h(auto/100..600)", group: "16. 복합 사례", description: "키워드+범위 조합" },
		{ class: "font(Inter/16/24/-2%/700)", group: "16. 복합 사례", description: "5개 값 복합" },
		{ class: "hover:bg(linear-gradient(135deg/#667eea/#764ba2))", group: "16. 복합 사례", description: "의사클래스+CSS함수" },

		// 17. 에지 케이스 (정상 작동)
		{ class: "w(0)", group: "17. 에지 케이스", description: "0 값" },
		{ class: "opacity(0.0)", group: "17. 에지 케이스", description: "소수점 0" },
		{ class: "p(0/0/0/0)", group: "17. 에지 케이스", description: "모든 값 0" },

		// 18. 에러 케이스 (파싱 실패 예상)
		{ class: "w(", group: "18. 에러 케이스", description: "닫히지 않은 괄호" },
		{ class: "bg(#zzzz)", group: "18. 에러 케이스", description: "잘못된 hex 코드" },
		{ class: "hover:", group: "18. 에러 케이스", description: "빈 의사 클래스" },
		{ class: "p()", group: "18. 에러 케이스", description: "빈 함수 인수" },
	]
</script>
