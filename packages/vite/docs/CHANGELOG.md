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
