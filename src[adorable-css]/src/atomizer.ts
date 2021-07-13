import {cssEscape} from "./cssEscape"
import {cssvar, makeBorder, makeColor, makeCommaValues, makeFont, makeHBox, makeRatio, makeSide, makeTransition, makeValues, makeVBox, px} from "./makeValue"

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

const rules = (r:string) => RULES[r] || (() => "")
const prefix_rules = (r:string) => PREFIX_RULES[r] || ((r:string) => r)

const regEx = /^([^:]+:)*([^(!]+)(?:\((.*?)\))?[!]?$/g

export const generateAtomicCss = (atom:string) => {
  try {
    if (!regEx.test(atom)) return

    const isImportant = atom.slice(-1) === "!"
    const important = isImportant ? "!important;" : ";"

    const result = atom.replace(regEx, (a, prefix, b, value) => {

      let option
      if (prefix && prefix.startsWith(".") && prefix.endsWith(":")) {
        option = prefix.slice(0, -1)
        prefix = ".class:"
      }

      const rule = rules(b)(value)
      return prefix_rules(prefix)(rule, option)
    })
    if (!result) return

    const escapedClass = `.${cssEscape(atom)}`
    const declaration = result.replace(/;/g, important)
    const styleText = declaration.includes("&") ? declaration.replace(/&/g, escapedClass) : `${escapedClass}{${declaration}}`
    return styleText
  }
  catch (e) {
    return
  }
}

const priority = [
  "block",
  "contents",
  "flow-root",
  "grid",
  "inline",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
  "list-item",
  "revert",
  "table",
  "table-caption",
  "table-cell",
  "table-column",
  "table-column-group",
  "hbox",
  "vbox",
  "pack",
  "hbox(",
  "vbox(",
  "none",
  "layer",
  "absolute",
  "fixed",
  "relative",
  "sticky",
  "static",
  "flex",
  "flex-shrink",
].reverse()

const getPriority = (a:string) => priority.findIndex((value:string) => a.startsWith(value.split(":").pop() || ""))

const strcmp = (a:string, b:string) => a > b ? 1 : a < b ? -1 : 0

const sortByRule = (a:string, b:string) => getPriority(b) - getPriority(a) || strcmp(a, b)

export const generateCss = (classList:string[]) => classList.map(a => String(a)).sort(sortByRule).map(generateAtomicCss).filter(Boolean)