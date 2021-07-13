# 🐶 Adorable CSS 🐱

> ✨ Rapid On Demand Atomic CSS Framework.


## Usage

```
npm i -D adorable-css
```

```
#main.tsx

import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "@adorable.css"
import {App} from "./App"

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
)
```


```
#vite.config.js

...
import {adorableCSS} from "./src[adorable-css]/vite-plugin-adorable-css"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [..., adorableCSS()]
})
```


## Example

```
import "@adorable.css"

<button class="b(#000) r(10) p(10/20) font(14) bold pointer hover:bg(#000.08) active:bg(#000)! active:c(#fff)">Click Me</button>
```


```css
@adorable.css
  
/* auto generated */
* {margin:0; padding:0; box-sizing: border-box; font: inherit; color: inherit; flex-shrink: 0;}
.active\:bg\(\#000\)\!:active { background-color: #000!important; }
.active\:c\(\#fff\):active { color: #fff; }
.b\(\#000\){border: 1px solid #000;}
.bold{font-weight: 700;}
.font\(14\){font-size: 14px}
@media only screen and (hover:hover){ .hover\:bg\(\#000\.08\):hover{ background-color: rgba(0,0,0,.08); }} @media only screen and (hover:none){ .hover\:bg\(\#000\.08\):active { background-color: rgba(0,0,0,.08); }}
.p\(10\/20\){padding: 10px 20px;}
.pointer{cursor: pointer;}
.r\(10\){border-radius: 10px;}
```


## What is Adorable CSS?

- "Utility First CSS" 패러다임
- tailwind css를 영감을 받아 만들게 되었습니다.
- tailwind css의 컨셉은 매력적이었나 다음과 같은 이유로 현업에서는 사용하기 힘들었습니다.

1) 사용할 혹은 사용하지 않을 class들이 설정을 해야 합니다.
2) 특히 tailwind에서 정의되지 않은 수치나 색상등을 다 사전에 설정을 해야 합니다.
3) 이때 디자이너와 협업을 하기위해서는 색상 및 수치등을 서로 협의를 해야 하는데 수정이 빈번한 디자인 과정에서 이를 결정하고 개발을 하는 것은 쉬운일이 아닙니다.
4) 무엇보다 figma등의 handoff 과정에서 불편합니다.


## How?
- class에 정의할때마다 필요한 css를 자동으로 생성하는 방식으로 동작합니다. (acss.io에 영감을 받았습니다.)
- 모든 수치와 색상을 지원하며 필요한 경우 필요한 만큼의 CSS만 만들어 냅니다.


## If?
- **Easy**: 디자인을 위해 이름을 짓는 수고가 사라지며, 한번 외운 이름은 계속 사용할 수 있습니다. 
- **Fast Writing**: html, jsx에 바로 디자인을 적용할 수 있어 매우 빠른 디자인 개발 속도를 가집니다.
- **Portable**: css 없이 HTML만으로 UI를 만들 수 있어 이동과 리팩토링에서 자유롭습니다.
- **Compact**: 기존 css 방식보다 훨씬 더 적은 라인의 css를 생산합니다.
- **Easy for Auto HandOff**: figma등의 HandOff에서 최적화된 형태입니다.


## Syntax

```
 
property(value) 
  - 가장 기본적인 형태로 프로퍼티(값)의 형태를 가집니다.
  ex) class="w(240) h(100) c(#fff.3)"

property(value/value/...) 
  - 클래스는 띄어쓰기로 구분되므로 기존 css에서 띄어쓰기 구분자들은 '/'로 구분합니다.
  ex) class="p(10/20) font(12/18/-1%) m(10/20/30/40)"

property
  - 값이 없는 프로퍼티는 ()를 사용하지 않습니다.
  ex) class="hbox absolute bold none"

prefix:property(value) 
  - 조건부 렌더링 prefix를 통해 상황별로 서식을 다르게 적용할 수 있습니다.
  ex) class="hover:bg(red) focus:ring(blue) .isSelected:underline mobile:vbox"

prefix:property(value)! or property(value)! or property!
  - 마지막에 !를 붙이면 !important 로 만들어줍니다.
  ex) class="active:bg(red)! b(0)! none! fixed!"

```

## Rule

```typescript
export const reset = `* {margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}`

const RULES:Record<string, Function> = {

  // Colors
  c: (value:string) => `color:${makeColor(value)};`,
  bg: (value:string) => `background-color:${makeColor(value)};`, // @TODO:url형식이면, background-image만 넣는 것으로 하자.

  // @TODO:background 이미지에 대한 세련된 방법이 필요하다!
  "bg-repeat-x": () => `background-repeat:repeat-x;`,
  "bg-repeat-y": () => `background-repeat:repeat-y;`,
  "bg-no-repeat": () => `background-repeat:no-repeat;`,
  "bg-attachment-fixed": () => `background-attachment:fixed;`,
  "bg-attachment-scroll": () => `background-attachment:scroll;`,
  "bg-position": (value:string) => `background-position:${value};`,

  //
  contain: () => `background-size:contain;background-position:center;object-fit:contain;`,
  cover: () => `background-size:cover;background-position:center;object-fit:cover;`,


  // Typography
  font: (value:string) => makeFont(value),
  "font-size": (value:string) => `font-size:${px(value)};`,
  "letter-spacing": (value:string) => `letter-spacing:${px(value)};`,
  "word-spacing": (value:string) => `word-spacing:${px(value)};`,

  // Font Weight @TODO:prefix:@TODO:IE 검토 필
  "100": () => `font-weight:100;`,
  "200": () => `font-weight:200;`,
  "300": () => `font-weight:300;`,
  "400": () => `font-weight:400;`,
  "500": () => `font-weight:500;`,
  "600": () => `font-weight:600;`,
  "700": () => `font-weight:700;`,
  "800": () => `font-weight:800;`,
  "900": () => `font-weight:900;`,

  ultralight: () => `font-weight:100;`,
  lighter: () => `font-weight:100;`,
  thin: () => `font-weight:200;`,
  light: () => `font-weight:300;`,
  regular:() => `font-weight:400;`,
  medium: () => `font-weight:500;`,
  semibold: () => `font-weight:600;`,
  bold: () => `font-weight:700;`,
  heavy: () => `font-weight:800;`,
  bolder: () => `font-weight:900;`,


  // Font Weight Utility
  thicker: (value = 1) => `text-shadow:0 0 ${px(value)} currentColor;`,


  // Font-Style
  italic: () => `font-style:italic;`,
  overline: () => `text-decoration:overline;`,
  underline: () => `text-decoration:underline;`,
  "line-through": () => `text-decoration:line-through;`,
  "strike": () => `text-decoration:line-through;`,
  del: () => `text-decoration:line-through;`,


  // Font-Family @TODO:font-stack은 일반적인 스택 만들어 두기...(L)
  serif: () => `font-family:serif;`,
  "sans-serif": () => `font-family:sans-serif;`,
  monospace: () => `font-family:menlo,monospace;`,
  cursive: () => `font-family:cursive;`,
  fantasy: () => `font-family:fantasy;`,
  "system-ui": () => `font-family:system-ui;`,

  "small-caps": () => `font-variant:small-caps`,
  lowercase: () => `text-transform:lowercase;`,
  uppercase: () => `text-transform:uppercase;`,
  capitalize: () => `text-transform:capitalize;`,


  // Text
  "text-left": () => `text-align:left;`,
  "text-center": () => `text-align:center;`,
  "text-right": () => `text-align:right;`,
  "text-justify": () => `text-align:justify;`,

  "break-all": () => `word-break:break-all;`,
  "break-word": () => `word-break:break-word;overflow-wrap:break-word;`,
  "keep-all": () => `word-break:keep-all;`,

  // @TODO
  // "text-shadow":(value:string) => `text-shadow:${makeSide(value)};`,


  /// Box-Model

  // Box-Sizing
  "border-box": () => `box-sizing:border-box`,
  "content-box": () => `box-sizing:content-box`,

  // Box @TODO:1/6, calc()
  w: (value:string) => {
    if (value.includes("~")) {
      const result = []
      const [min, max] = value.split("~")
      min && result.push(`min-width:${px(min)};`)
      max && result.push(`max-width:${px(max)};`)
      return result.join("")
    }
    return value === "fill" ? `align-self:stretch` : `width:${px(value)};`
  },

  h: (value:string) => {
    if (value.includes("~")) {
      const result = []
      const [min, max] = value.split("~")
      min && result.push(`min-height:${px(min)};`)
      max && result.push(`max-height:${px(max)};`)
      return result.join("")
    }
    return value === "fill" ? `align-self:stretch` : `height:${px(value)};`
  },

  m: (value:string) => `margin:${makeSide(value)};`,
  mt: (value:string) => `margin-top:${px(value)};`,
  mr: (value:string) => `margin-right:${px(value)};`,
  mb: (value:string) => `margin-bottom:${px(value)};`,
  ml: (value:string) => `margin-left:${px(value)};`,

  p: (value:string) => `padding:${makeSide(value)};`,
  pt: (value:string) => `padding-top:${px(value)};`,
  pr: (value:string) => `padding-right:${px(value)};`,
  pb: (value:string) => `padding-bottom:${px(value)};`,
  pl: (value:string) => `padding-left:${px(value)};`,

  b: (value:string) => `border:${makeBorder(value)};`,
  bt: (value:string) => `border-top:${makeBorder(value)};`,
  br: (value:string) => `border-right:${makeBorder(value)};`,
  bb: (value:string) => `border-bottom:${makeBorder(value)};`,
  bl: (value:string) => `border-left:${makeBorder(value)};`,

  bw: (value:string) => `border-width:${px(value)};`,
  btw: (value:string) => `border-top-width:${px(value)};`,
  brw: (value:string) => `border-right-width:${px(value)};`,
  bbw: (value:string) => `border-bottom-width:${px(value)};`,
  blw: (value:string) => `border-left-width:${px(value)};`,

  bs: (value:string) => `border-style:${cssvar(value)};`,
  bts: (value:string) => `border-top-style:${cssvar(value)};`,
  brs: (value:string) => `border-right-style:${cssvar(value)};`,
  bbs: (value:string) => `border-bottom-style:${cssvar(value)};`,
  bls: (value:string) => `border-left-style:${cssvar(value)};`,

  bc: (value:string) => `border-color:${makeColor(value)};`,
  btc: (value:string) => `border-top-color:${makeColor(value)};`,
  brc: (value:string) => `border-right-color:${makeColor(value)};`,
  bbc: (value:string) => `border-bottom-color:${makeColor(value)};`,
  blc: (value:string) => `border-left-color:${makeColor(value)};`,

  // @TODO:교육이 필요하다.
  r: (value:string) => `border-radius:${makeSide(value)};`,

  rtl: (value:string) => `border-top-left-radius:${px(value)};`,
  rtr: (value:string) => `border-top-right-radius:${px(value)};`,
  rbr: (value:string) => `border-bottom-right-radius:${px(value)};`,
  rbl: (value:string) => `border-bottom-left-radius:${px(value)};`,

  rt: (value:string) => `border-top-left-radius:${px(value)};border-top-right-radius:${px(value)};`,
  rr: (value:string) => `border-top-right-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  rb: (value:string) => `border-bottom-left-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  rl: (value:string) => `border-top-left-radius:${px(value)};border-bottom-left-radius:${px(value)};`,

  ring: (value:string) => {
    const [color, size = 1] = value.split("/")
    return `box-shadow:0 0 0 ${px(size)} ${makeColor(color)};`
  },

  outline: (value:string) => `outline:1px solid ${makeColor(value)};`,
  "guide": (value = "#4f80ff") => `&, & > * { outline:1px solid ${makeColor(value)};}`,


  /// -- Overflow

  // OverFlow:@TODO:스크롤바 보여지느냐 아니냐... 보통 auto를 쓴다. 스크롤 바는 생각할게 많네요!! (thank you Linda!)
  overflow: (value:string) => `overflow:${value};`,
  "overflow-x": (value:string) => `overflow-x:${value};`,
  "overflow-y": (value:string) => `overflow-y:${value};`,

  clip: () => `overflow:hidden;`,
  "scroll": () => `overflow:auto;`,
  "scroll-x": () => `overflow-x:auto;overflow-y:hidden;`,
  "scroll-y": () => `overflow-x:hidden;overflow-y:auto;`,
  "scrollbar": () => `&{overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar {display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal {display:none;}`,

  // @TODO:- TBD
  "overscroll": (value:string) => `overscroll-behavior:${value};`,
  "overscroll-x": (value:string) => `overscroll-behavior-x:${value};`,
  "overscroll-y": (value:string) => `overscroll-behavior-y:${value};`,

  // @TODO:- TBD
  "no-bouncing": () => "",
  "no-overscroll": () => "",

  "vertical-top": () => `vertical-align:top`,


  // OverFlow + Text
  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "nowrap": () => `white-space:nowrap;flex-shrink:0;`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;`,

  // line-clamp vs max-lines
  // @NOTE:일단 기존 프로퍼티에 의거한다는 원칙에따라 line-clamp를 쓴다. 이후 max-lines가 정식 스펙이 되면 deprecated한다.
  "line-clamp": (value:string) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  // "max-lines":(value:string) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "text-indent": (value:string) => `text-indent:${px(value)};`,



  // Scroll Snap -- TBD @TODO:


  // Display
  "block": () => "display:block;",
  "inline-block": () => "display:inline-block;",
  "inline": () => "display:inline;",
  "inline-flex": () => "display:inline-flex;",
  "table": () => "display:table;",
  "inline-table": () => "display:inline-table;",
  "table-caption": () => "display:table-caption;",
  "table-cell": () => "display:table-cell;",
  "table-column": () => "display:table-column;",
  "table-column-group": () => "display:table-column-group;",
  "table-footer-group": () => "display:table-footer-group;",
  "table-header-group": () => "display:table-header-group;",
  "table-row-group": () => "display:table-row-group;",
  "table-row": () => "display:table-row;",
  "flow-root": () => "display:flow-root;",
  "grid": () => "display:grid;",
  "inline-grid": () => "display:inline-grid;",
  "contents": () => "display:contents;",
  "list-item": () => "display:list-item;",


  // Flexbox
  pack: () => `display:flex;align-items:center;justify-content:center;`,
  hbox: (value:string) => `display:flex;flex-flow:row;${makeHBox(value)}`,
  vbox: (value:string) => `display:flex;flex-flow:column;${makeVBox(value)}`,

  gap: (value:string) => `gap:${makeSide(value)};`,
  hgap: (value:string) => `&>*+* { margin-left:${px(value)};}`,
  vgap: (value:string) => `&>*+* { margin-top:${px(value)};}`,
  space: (value:string) => `padding:${px(+value / 2)};`,

  "space-between": () => `justify-content:space-between;`,
  "space-around": () => `justify-content:space-around;`,
  "space-evenly": () => `justify-content:space-evenly;`,

  // flex (L)
  flex: (value = "1") => `flex:${makeValues(value)};`,
  ">flex": (value = "1") => `&>*{flex:${makeValues(value)};}`,

  "flex-initial": () => `flex:initial;`,
  "flex-auto": () => `flex:auto;`,
  "flex-none": () => `flex:none;`,

  "flex-grow": (value:string) => `flex-grow:${cssvar(value)};`,
  "flex-shrink": (value:string) => `flex-shrink:${cssvar(value)};`,
  "flex-basis": (value:string) => `flex-basis:${px(value)};`,

  "flex-wrap": () => "flex-wrap:wrap;",
  "flex-wrap-reverse": () => "flex-wrap:wrap-reverse;",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value:string) => `order:${cssvar(value)};`,


  // Visibility
  none: () => `display:none;`,
  opacity: (value:string) => `opacity:${cssvar(value)};`,
  invisible: () => `visibility:hidden;`,
  visible: () => `visibility:visible;`,
  "gone": () => `position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);`,


  // Position
  layer: (value = "") => {
    const pos = {top: 0, right: 0, bottom: 0, left: 0}
    value.split("+").forEach(v => {
      switch (v) {
        //@ts-ignore
        case "top": {return (delete pos["bottom"])}
        //@ts-ignore
        case "right": {return (delete pos["left"])}
        //@ts-ignore
        case "bottom": {return (delete pos["top"])}
        //@ts-ignore
        case "left": {return (delete pos["right"])}
      }
    })
    return `position:absolute;` + Object.keys(pos).map((value:string) => `${value}:0`).join(";")
  },

  "absolute": () => `position:absolute;`,
  "relative": () => `position:relative;`,
  "static": () => `position:static;`,
  "fixed": () => `position:fixed;`,
  "sticky": () => `position:sticky;`,
  "sticky-top": (value = 0) => `position:sticky;top:${px(value)};`,
  "sticky-right": (value = 0) => `position:sticky;right:${px(value)};`,
  "sticky-bottom": (value = 0) => `position:sticky;bottom:${px(value)};`,
  "sticky-left": (value = 0) => `position:sticky;left:${px(value)};`,


  // Position
  x: (value:string) => `left:${px(value)};`,
  y: (value:string) => `top:${px(value)};`,
  z: (value:string) => `z-index:${cssvar(value)};`,
  top: (value:string) => `top:${px(value)};`,
  left: (value:string) => `left:${px(value)};`,
  right: (value:string) => `right:${px(value)};`,
  bottom: (value:string) => `bottom:${px(value)};`,


  // Interactions
  "user-select-none": () => "user-select:none;",
  "user-select-all": () => "user-select:all;",
  "user-select-auto": () => "user-select:auto;",
  "user-select-text": () => "user-select:text;",

  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",

  cursor: (value:string) => `cursor:${value};`,
  pointer: () => `cursor:pointer;`,
  grab: () => `&{cursor:grab;} &:active {cursor:grabbing;}`,
  grabbing: () => `cursor:grabbing;`,

  // 에니메이션:transition(transform=100s/opacity=2s)
  transition: (value:string) => `transition:${makeTransition(value)};`,

  // @TODO:섞을수가 없네? mix transform
  // @TBD: translate(10,10)+rotateX(180deg)+scale(2) 이런식으로 +기호로 묶자!!

  translate: (value:string) => `transform:translate(${makeCommaValues(value)});`,
  translateX: (value:string) => `transform:translateX(${cssvar(value)});`,
  translateY: (value:string) => `transform:translateY(${cssvar(value)});`,
  translateZ: (value:string) => `transform:translateZ(${cssvar(value)});`,
  translate3d: (value:string) => `transform:translate3d(${makeCommaValues(value)});`,

  rotate: (value:string) => `transform:rotate(${makeCommaValues(value)});`,
  rotateX: (value:string) => `transform:rotateX(${cssvar(value)});`,
  rotateY: (value:string) => `transform:rotateY(${cssvar(value)});`,
  rotateZ: (value:string) => `transform:rotateZ(${cssvar(value)});`,
  rotate3d: (value:string) => `transform:rotateZ(${makeCommaValues(value)});`,

  scale: (value:string) => `transform:scale(${makeCommaValues(value)});`,
  scaleX: (value:string) => `transform:scaleX(${makeCommaValues(value)});`,
  scaleY: (value:string) => `transform:scaleY(${makeCommaValues(value)});`,
  scaleZ: (value:string) => `transform:scaleZ(${makeCommaValues(value)});`,


  // Util
  ratio: (value:string) => `& {position:relative;width:100%;padding-top:${makeRatio(value)};} & > * {position:absolute;top:0;left:0;width:100%;height:100%;}`,
  gpu: () => `transform:translateZ(0.1px);`,

  // @TODO:triangle

  // etc
  "no-border": () => `border:none;outline:none;`,
  "app-region": (value:string) => `-webkit-app-region:${value};`,
  content: (value:string) => `content:'${cssvar(value)}'`,
  "clip-path": (value:string) => `clip-path:${cssvar(value)};-webkit-clip-path:${cssvar(value)};`,

  "table-layout-fixed": () => `table-layout:fixed;`,


  // Float & Clear
  "float-left": () => `float:left`,
  "float-right": () => `float:right`,
  "float-none": () => `float:none`,

  "clear-left": () => `clear:left`,
  "clear-right": () => `clear:right`,
  "clear-both": () => `clear:both`,
  "clear-none": () => `clear:none`,
}

const MEDIA_QUERY_RULES = {
  "sm:": (value:string) => `@media only screen and (max-width:767px) { html & { ${value} }}`,
  "~sm:": (value:string) => `@media only screen and (min-width:767px) { html & { ${value} }}`,
  "sm~:": (value:string) => `@media only screen and (min-width:767px) { html & { ${value} }}`,
  "!sm:": (value:string) => `@media only screen and (min-width:767px) { html & { ${value} }}`,

  "mobile:": (value:string) => `@media only screen and (max-width:767px) { html & { ${value} }}`,
  "!mobile:": (value:string) => `@media only screen and (min-width:767px) { html & { ${value} }}`,

  "mobile-device:": (value:string) => `@media only screen and (max-device-width:767px) { html & { ${value} }}`,
  "!mobile-device:": (value:string) => `@media only screen and (min-device-width:767px) { html & { ${value} }}`,

  "touch:": (value:string) => `@media only screen and (hover:none){ html & { ${value} }}`,
  "portrait:": (value:string) => `@media (orientation:portrait){ html & { ${value} }}`,
  "landscape:": (value:string) => `@media (orientation:landscape){ html & { ${value} }}`,

  // dark:@TBD
  "dark:": (value:string) => `html.dark { ${value} }`,
}

const SELECTOR_RULES:Record<string, Function> = {
  // ">":"", // @TODO:자식 선택자 모든 속성에~~
  // "+":"", // @TODO:자식 선택자 모든 속성에~~
  // "~":"", // @TODO:자식 선택자 모든 속성에~~
  ".class:": (value:string, cls:string) => `${cls}&,${cls} & { ${value} }`,
}

const PREFIX_RULES:Record<string, Function> = {
  ...MEDIA_QUERY_RULES,
  ...SELECTOR_RULES,

  "link:": (value:string) => `&:link { ${value} }`,
  "visited:": (value:string) => `&:visited { ${value} }`,

  "placeholder:": (value:string) => `&::placeholder { ${value} }`,

  "hover:": (value:string) => `@media only screen and (hover:hover){ &:hover{ ${value} }} @media only screen and (hover:none){ &:active { ${value} }}`,
  "active:": (value:string) => `&:active { ${value} }`,
  "focus:": (value:string) => `&:focus { ${value} }`,
  "focus-within:": (value:string) => `&:focus-within { ${value} }`,
  "disabled:": (value:string) => `html &:disabled { ${value} } html &[disabled] { ${value} }`,

  "group-hover:": (value:string) => `.group:hover &, .group.\\:hover & { ${value} }`,
  "group-active:": (value:string) => `.group:active &, .group.\\:active & { ${value} }`,
  "group-focus:": (value:string) => `.group:focus &, .group.\\:focus & { ${value} }`,
  "group-disabled:": (value:string) => `html .group:disabled &, html .group[disabled] &, html .group.disabled & { ${value} }`,

  // @TBD:!!
  "first:": (value:string) => `&:first-child { ${value} }`,
  "nth-child(?):": (value:string) => `&:nth-child(?) { ${value} }`,
  "before:": (value:string) => `&:before { ${value} }`,
  "after:": (value:string) => `&:after { ${value} }`,
}
```


## Ground Rule!

- 가능한 css의 property를 그대로 쓴다.
- c, bg, mt, p, 등 색상 및 box-model은 빈도를 고려해 축약해서 쓴다.
- 가급적 bootstrap이나 tailwind 등에서 이미 쓰고 있는 이름을 가급적 사용한다.
- *figma의 속성과 1:1이 될 수 있도록 한다.