## 1.5.6
- 🐛 .vbox 자식 엘리먼트 에서 `w(fill)`을 사용할 경우 의도치 않은 `flex-shrink:1`가 적용이 되어 문제가 발생하던 부분을 수정하였습니다.
- 🐛 .hbox 자식 엘리먼트 에서 `h(fill)`을 사용할 경우 의도치 않은 `flex-shrink:1`가 적용이 되어 문제가 발생하던 부분을 수정하였습니다.

## 1.5.5
## 1.5.4
- 사용하지 마세요!

## 1.5.3
- 🐛 .vbox 내부의 .h(fill).scroll 이 예상대로 동작하지 않습니다
  #77
- 새롭게 추가된 `h(fill)`에 `flex-shrink:1;max-height:100%;` 이 누락되어 있어 추가하였습니다.
- dolsup님의 제보 감사드립니다.

## 1.5.2
- 🐛 1.5.1에서 clip, hbox 등 일부 기능이 동작하지 않던 버그를 수정하였습니다.

## 1.5.1
- 사용하지 마세요! BUG FIX

## 1.5.0
- `dark:` dark mode 기능이 정식으로 추가되었습니다.
- `<div class="c(#000) dark:c(#fff)>"` 와 같이 사용할 수 있습니다. 

## 1.4.9
- `min-w`, `min-h`, `max-w`, `max-h` 기능이 추가되었습니다.

## 1.4.8
- `wrap`: `display:flex;flex-flow:wrap;` 기능이 추가되었습니다.

## 1.4.7
- `gap(auto)!`시 `important!`가 적용되지 않던 버그를 수정하였습니다.

## 1.4.6
- `gap(auto)`시 엘리먼트가 하나라면 figma에서처럼 가운데 정렬하도록 개선하였습니다.

## 1.4.5
- ✨ `gap(auto)`가 추가되었습니다.
- `gap(auto) = space-between` 으로 조금 더 직관적이고 단순한 기입이 가능하도록 수정하였습니다.

## 1.4.4
- 🐛 `rotate()`가 정상동작하지 않던 현상을 수정하였습니다.
- ✨ `rotate(90)` 처럼 숫자만 적어도 자동으로 `90deg` unit이 붙도록 개선하였습니다. 
 
## 1.4.3
- ⚡️타 CSS와 호환시(ex mui) 디자인이 틀어지게 되는 `*{flex-shrink:0}` 속성을 기본 Reset에서 제거하였습니다.
- ⚡️그러면서도 hbox, vbox 등은 여전히 figma의 AutoLayout과 동일하도록 `where:(.hbox>*){flex-shrink:0}`의 속성이 적용될 수 있도록 하였습니다.
- 🐛 `bc(border-color)`, `bw(border-width)`가 4방향을 다르게 각각 적용이 되지 않던 버그를 수정하였습니다.

## 1.4.0
- ✨ top/bottom 과 left/right를 이제 x(), y()로 더 간단하고 멋지게 표현할 수 있습니다.
  - `x(10) = left(10)`
  - `x(~10) = right(10)`
  - `x(10~20) = left(10)+right(20)`

- ✨ x(center) 기능이 추가 되었습니다.
  - `x(center) = left(50%)+translateX(-50%)`
  - `x(center+50px) = left(50%+50px)+translateX(-50%)`
 
- ✨`r(fill)`이 추가되어 양 옆이 둥근 사각형을 더 직관적으로 만들 수 있게 되었습니다.
    - `r(fill) = border-radius:9999px;`

- 🐛 w(max-content) width:max-content;가 적용되지 않던 버그를 수정하였습니다.

## 1.3.7
- ✨ 이제 `w(fill)`, `h(fill)`이 Flexbox에서 제대로 동작하게 됩니다.
- 🐛 invalidate한 CSS 결과물들을 필터링하는 기능이 추가되었습니다.

## 1.3.6
- 🐛`nowrap`, `nowrap...` 에 max-width:100%를 두어 특정 상황에서 글 내용이 넘치는 현상을 수정하였습니다.

## 1.3.5
- ✨글자 배치를 가로+세로를 함께 할 수 있는 새로운 textAlign 스펙이 추가되었습니다.
- 튜토리얼을 확인해주세요!
- ex) `text(left)` `text(middle+right)` `text(pack)`


## 1.3.4
- ✨filter와 backdrop-filter에 -webkit- prefix를 추가하였습니다.
- 🐛일부 ;이 누락되어 !important가 적용되지 않던 속성들을 수정하였습니다.
 
## 1.3.3
- ✨`mx(3)`, `px(10) py(20)` 과 같이 mx = margin-left+margin-right를 같이 적용하는 rule을 추가하였습니다.
 
## 1.3.1
- ✨`.blind`, `.sr-only` 스크린 리더용 클래스를 추가하였습니다. 해당 클래스를 사용하면 화면에는 보이지 않지만 스크린 리더에서는 읽어줍니다. 참고로 blind와 sr-only는 동일한 역할을 수행합니다.
- table-layout의 축약버전을 추가하였습니다.
- table-fixed `table-layout:fixed;`,
- table-auto `table-layout:auto;`,


## 1.3.0
- ✨align-items, justify-content, align-content, justify-items의 축약버전을 추가하였습니다.   
- `ex) <div class="ai(flex-start) jc(flex-end)">`

- ✨flex-grow, flex-shrink의 축약버전을 추가하였습니다. grow, grow-0, no-grow, shrink, shrink-0, no-shrink
- no-grow와 grow-0는 같은 의미입니다.

- 🐛CDN 방식에서 class가 하나도 없을 때 `body {display:none}`이 사라지지 않던 버그를 수정하였습니다. 


## 1.2.8
- ✨layer(top:10) 과 같이 layer에 offset을 지정할 수 있는 기능을 추가하였습니다. 

- ✨layer(top+outside) 와 같이 부모 엘리먼트의 바깥쪽을 기준으로 붙이는 기능이 추가되었습니다.

- 🐛adorableCSS가 잘못된 CSS를 생성하더라도 이후 라인이 문제가 생기지 않게 하도록 개선하였습니다. 복잡한 Selector 구문인 경우 맨 뒤에 `{}` 문자열을 추가하여 그 다음 라인은 정상적으로 동작할 수 있도록 하였습니다. 

- `ex) .transform\:scale\(10\):transform{transform:scale(10);}{}`


## 1.2.7
- 🐛.test:hgap(10)+c(#111)과 같이 복합 rule과 +가 결합했을때 css값이 잘못 출력이 되는 현상을 수정하였습니다. 

## 1.2.6
- ✨ >p(10) >>w(100%)와 같이 자식선택자, 하위 선택자 기능을 추가하였습니다.

## 1.2.5
- 🐛 font(13/20)+c(red)와 같이 font를 먼저쓰고 +를 할 경우 이후 서식이 적용이 되지 않던 버그를 수정하였습니다.

## 1.2.4
- ✨️ ~ selector는 media rule과 `ex) ~md:font(2em)`e 충돌이 나서 삭제하기로 함. ~selector는 반대로 만들어야 하는데 `ex) p ~ & { ... }` 사용성이 낮아서 우선순위 보류 

## 1.2.2
- ✨️ box-shadow(0/0/10/#000.2) box-shadow에 단위를 생략하면 px이 자동으로 붙도록 수정하였습니다.
- 🐛bg-position에서 /가 적용이 안되는 현상을 수정하였습니다. 

## 1.2.1
- ✨️ absolute(-/10/20/-) 기능이 추가 되었습니다. position + top, right, bottom, left, -는 생략
- ✨️ absolute(10,20) 기능이 추가 되었습니다. position(x,y)
- ✨️ absolute(~10,~20) 기능이 추가 되었습니다. position(right,bottom)

## 1.1.8
- ✨️ cdn 방식이 astro에서 적용이 되지 않던 현상을 수정하였습니다.
- ✨️ skew() skewX() skewY() skewZ()가 누락되어 있던 현상을 수정하였습니다.

## 1.1.5
- ⛱ vite, webpack, postcss등 다른 복잡한 설정 없이 그냥 script 한줄만 추가하면 adorableCSS를 사용할 수 있습니다.
- ⚡️ adorableCSS를 간편하게 쓰는 방법! body 맨 아래 `<script src="https://unpkg.com/adorable-css"></script>`만 추가해보세요.
- 런타임 방식으로 css in js 방식을 통해서 동적으로 style을 생성하여 적용해줍니다.
- (지금 개발자 도구를 열어서 아무 엘리먼트나 class="bg(red)" 를 한번 추가해보세요.)

```html
  <script src="https://unpkg.com/adorable-css"></script>
</body>
</html>
```

## 1.1.2
- ✨ adoarbleCSS cli 기능 업데이트 (PR 너무 너무 감사합니다!! ❤️)
- https://github.com/dudlf/adorable-css-cli

## 1.1.0
- 🐛 outline(1/red), drop-shadow(30px/10px/4px/#4444dd)가 제대로 동작하지 않던 버그 수정

## 1.0.9
- ✨ vpack, hpack 속성을 추가하였습니다. vpack = vbox+pack

## 1.0.4
- 🐛 after:content('|') 와 같이 따옴표가 포함된 값이 제대로 적용되지 않던 현상을 수정하였습니다.

## 1.0.3
- 🐛 background-image가 url을 함께 사용했을때 제대로 동작하지 않던 현상을 수정하였습니다.
- ✨ background-image에서 url을 쓰지 않아도 동작하도록 수정하였습니다.
- ✨ background-image를 bg-image로 축약해서 쓸 수 있도록 수정하였습니다.

## 0.9.6
- 🐛 typescript에서 package type 에러가 나던 현상을 수정하였습니다.
- ♻️ `import {adorableCSS} from "adorable-css/vite" // import path를 하나로 통일했습니다.`

## 0.8.8
- 🐛 chokidar 윈도우 버그 때문에 기능 삭제. vite plugin 타입 에러가 나는 부분을 수정하였습니다.

## 0.8.7
- ✨ w(10~50%~100)나, h(~100~100%) 등 value와 minmax를 한번에 쓸 수 있도록 기능을 추가하였습니다.
- 📝 (단, 해당 기능은 인지적 측면에서 직관적이지는 않으므로 Best Practice의 형태는 w(100%) w(32~300) 처럼 value와 minmax를 분리해서 쓰기를 권장합니다.)

## 0.8.6
- ✨ snap-x-proximity, snap-y-proximity, snap-both-proximity를 추가하였습니다.

## 0.8.5
- ✨ &:last-child>span 과 같이 & 기능을 추가하였습니다.

```
<div class="flex &:last-child>span:c(red)">
  <span>{index + 1}</span>
</div>
```

✨ &.selected, &[disabled] 기능도 함께 출시가 되었습니다.


## 0.8.4
✨ Vite가 없어도 CDN 방식으로 AdorableCSS를 사용할 수 있는 방법이 추가 되었습니다. (beta 주의!) angular나 webpack, vanilla HTML에서도 AdorableCSS를 사용해보세요! 

🔥 경고! 아직은 검증이 더 필요하기에 production용으로는 가급적 사용하지 마세요. IE11 주의!

### CDN(beta): Just-in-time + css-in-js

```html
<!DOCTYPE html>
<html>
<head>
  ...
  <script src="https://unpkg.com/adorable-css"></script>
</head>
</html>
```
다른 CSS 프레임워크 없이 script만 넣어보세요. css-in-js 방식으로 실시간으로 AdorableCSS의 스펙을 지원합니다.


## 0.7.8
- cursor 단축 표현이 일부 추가되었습니다.

```js
{
  "col-resize": () => `cursor: col-resize;`,
  "crosshair": () => `cursor: crosshair;`,
  "e-resize": () => `cursor: e-resize;`,
  "ew-resize": () => `cursor: ew-resize;`,
  "grab": () => `&{cursor:grab;}&:active{cursor:grabbing;}`,
  "grabbing": () => `cursor: grabbing;`,
  "n-resize": () => `cursor: n-resize;`,
  "ne-resize": () => `cursor: ne-resize;`,
  "nesw-resize": () => `cursor: nesw-resize;`,
  "ns-resize": () => `cursor: ns-resize;`,
  "nw-resize": () => `cursor: nw-resize;`,
  "nwse-resize": () => `cursor: nwse-resize;`,
  "not-allowed": () => `cursor: not-allowed;`,
  "pointer": () => `cursor: pointer;`,
  "progress": () => `cursor: progress;`,
  "row-resize": () => `cursor: row-resize;`,
  "s-resize": () => `cursor: s-resize;`,
  "se-resize": () => `cursor: se-resize;`,
  "sw-resize": () => `cursor: sw-resize;`,
  "w-resize": () => `cursor: w-resize;`,
  "zoom-in": () => `cursor: zoom-in;`,
  "zoom-out": () => `cursor: zoom-out;`,
  "cursor": (value:string) => `cursor:${value};`,
}
```

## 0.7.7
- ♻️ vite plugin import path를 간결하게 수정하였습니다. (기존 호환은 당분간 유지합니다! 1.0 정식 버전이 나오면 기존 vite-plugin-adorable-css 이름은 삭제할 예정입니다.)

```ts
// vite.config.js
import {adorableCSS} from "adorable-css/vite" // <-

export default defineConfig({
  plugins: [adorableCSS(), ...] // <- plugin을 맨 처음에 등록합니다.
})
```
- scroll-snap 관련 기능을 추가하였습니다.
```ts
{
  // Scroll Snap
  "scroll-m": (value:string) => `scroll-margin:${makeSide(value)};`,
  "scroll-mt": (value:string) => `scroll-margin-top:${px(value)};`,
  "scroll-mr": (value:string) => `scroll-margin-right:${px(value)};`,
  "scroll-mb": (value:string) => `scroll-margin-bottom:${px(value)};`,
  "scroll-ml": (value:string) => `scroll-margin-left:${px(value)};`,

  "scroll-p": (value:string) => `scroll-padding:${makeSide(value)};`,
  "scroll-pt": (value:string) => `scroll-padding-top:${px(value)};`,
  "scroll-pr": (value:string) => `scroll-padding-right:${px(value)};`,
  "scroll-pb": (value:string) => `scroll-padding-bottom:${px(value)};`,
  "scroll-pl": (value:string) => `scroll-padding-left:${px(value)};`,

  "snap-start": () => `scroll-snap-align:start;`,
  "snap-end": () => `scroll-snap-align:end;`,
  "snap-center": () => `scroll-snap-align:center;`,
  "snap-none": () => `scroll-snap-align:none;`,

  "no-snap": () => `scroll-snap-type:none;`,
  "snap-x": () => `scroll-snap-type:x var(--a-scroll-snap-strictness, mandatory);`,
  "snap-y": () => `scroll-snap-type:y var(--a-scroll-snap-strictness, mandatory);`,
  "snap-both": () => `scroll-snap-type:both var(--a-scroll-snap-strictness, mandatory);`,
  "snap-mandatory": () => `--a-scroll-snap-strictness:mandatory;`,
  "snap-proximity": () => `--a-scroll-snap-strictness:proximity;`,

  "snap-normal": () => `scroll-snap-stop: normal;`,
  "snap-always": () => `scroll-snap-stop: always;`,
}
```

## 0.7.5
- 🐛 hover:mt(10)+bold는 동작하나 hover:bold+mt(10)이 동작하지 않던 버그 수정

## 0.7.3
- ✨ grid(5) 기능이 추가 되었습니다. = grid-template-columns:repeat(5,1fr);
- ✨ grid(1fr,1f,1f) = grid-template-columns:1fr,1f,1f 
- grid의 값은 가장 많이 쓰이는 grid-template-columns을 사용하도록 문법을 작성하였습니다.

## 0.7.1
- 🐛 !touch 와 같이 !로 시작하는 prefix가 동작하지 않던 현상을 수정하였습니다.
- ⚡️ 불필요한 자동생성이 되는 현상을 수정하였습니다.

## 0.7.0
- ✨ prop(value)! prop(value)!! prop(value)!!! 기능이 추가되었습니다.
- ✨ hover:c(red)+bg(blue)+b(#000) + 기능이 추가되었습니다.
- 📝 selector 기능 관련 문서를 추가하였습니다.
- 📝 important! 기능 관련 문서를 추가하였습니다.

## 0.6.9
- ✨ subbox 기능이 추가되었습니다.
- 🐛️ 예외처리를 강화해서 잘못된 CSS를 생성하지 않도록 수정하였습니다.

## 0.6.8
- ✨ bg(url(...)) background-image:url(...)
- ✨ bg(http...), bg(./), bg(/...) background-image:url(...)
- 🐛 transition(none)이 되지 않던 버그를 수정했습니다.

## 0.6.7
- 🐛 class에서 줄바꿈시 오류 수정

## 0.6.6
- 🐛 hsl컬러 지정안되는 현상을 수정하였습니다.
- 🐛 after:content('...')가 동작하지 않던 현상을 수정하였습니다.  
- ✨ after:content 만 입력할 경우 content:'' 의 default값으로 적용하도록 수정하였습니다.

## 0.6.5
- ✨ .index 파일의 경우 vite의 transform 목록에 포함되어 있지 않아 adorable.css 를 자동생성하지 못하는 문제 수정 #32
config에 `preLoads`의 옵션을 이용해서 (default: `[/*/**.html]`) 모든 html파일을 미리 watch 목록에 올리도록 기능 추가함.


## 0.6.4
- 🐛️ ~sm, ~md 기능 안되던 버그 수정
- 🐛️ :root `{ ... word-break:break-word ... }` 추가 해서 text로 인해 flex-box가 커지는 기능 방지
- ✨️ flex-wrap에 `& > {max-width:100%;max-height:100%;}`를 주어 overflow 방지 기능 추가
- ✨️ reset에 min-width:0 추가

## 0.6.3
- 🐛️ hidden(구 invisible) vs visible 이 동시에 있을때는 visible이 우선순위가 더 높도록 수정하였습니다.

## 0.6.2
- ✨️ #000.2 와 같은 HEXa 포맷을 구문 전체에서 지원합니다.
- ⚡️ cover, contain에 background-repeat: no-repeat 추가 되었습니다.
- ✨️ --serif, --sans-serif와 같이 css variable을 통해서 기본 폰트를 지정할 수 있도록 수정하였습니다.
- ✨️ @media query 지원 기능을 추가하였습니다. @w(~360), @w(360~), @w(360~720) 

## 0.6.1
- 🚑️ pointer-events-auto! 와 같이 ()가 없는 ! 기능이 동작하지 않던 현상을 수정하였습니다.

## 0.6.0
- 🧑‍💻 flex-shrink === flex-shrink(1), flex-glow === flex-glow(1)로 default 값을 추가헀습니다.

## 0.5.8
- 🎉 홈페이지를 새롭게 단장하였습니다. 1.0.0 정식 오픈을 위해서 열심히 해보곘습니다.
- 🐛 정규식이 있는 경우 CSS가 잘못 분석이 되던 버그를 수정하였습니다.
- ⚡️ 파서 엔진을 교체하여 잘못된 CSS가 생성되는 현상을 수정하였습니다.
- ✨ monospace(number) 기능이 추가되었습니다. https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric

---

## 0.5.7
- ```:after``` ```:before``` ```content``` 기능이 추가되었습니다.
- class는 띄어쓰기를 못하므로 content에 공백이 있다면 css variable를 추천합니다.

```html
<div class="before:content('hello') before:c(red)">world</div>
<div class="before:content(--content) before:c(red)" style="--content:'hello, '">world</div>
```
> @NOTE: ```:after``` vs ```::after``` 정석은 ```::after```가 맞으나 IE8 이후 오랜 관습으로 남아 있는 ```:after```도 사용가능하도록 추가하였습니다. ```:before```도 동일합니다.  


- ::first-line과 같은 pseudo-elements를 지원합니다. https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements

```html
<div class="first-line::c(red)">
  <p>first-line</p>
  <p>second-line</p>
</div>
```
- ::webkit-scrollbar를 적용할 수 있습니다.
```html
<div class="h(100) scroll-y -webkit-scrollbar::w(4) -webkit-scrollbar-thumb::bg(red)">
</div>
```

- reset를 config에서 커스텀이 가능하도록 하였습니다. 
```js
    plugins: [
      adorableCSS({
        reset: `*{margin:0; padding} /* <-- your reset code here */`
      }),
    ],
```

---

## 지난 로그

- 0.5.6 - (beta) bg(linear-gradient) 기능 추가
- 0.5.5 - user-select 사파리에서 동작하지 않는 버그 수정, -webkit- prefix 추가
- 0.5.3 - CSS Reset 보강 https://github.com/developer-1px/adorable-css/blob/master/src%5Badorable-css%5D/src/rules.ts
- 0.5.2 - PostCSS를 사용하는 build 환경에서 에러발생하는 오류 수정함. 
- 0.4.9 - :nth-child를 비롯한 **모든 pseudo class** 지원, 등록되지 않은 모든 css도 일단 지원. ex) touch-action(pan-x)
- 0.4.7 - glob방식의 config.include 추가 ex) ```adorableCSS({include: "src/**/*.{svelte,svx})"```  
- 0.4.5 - attribute selector 기능 추가 ex) [attr='value']:c(red)
- 0.4.4 - build시 sourcemap 포함되면 error나던 현상 수정

## 지금 준비하고 있는 기능들
- transform 결합: ex) translateX(10)+scale(.5)
- more level cascade priority(!important): ex) bg(red) .test:bg(orange)! .test2:bg(red)!!
