import {cssEscape} from "./cssEscape"
import {cssvar, makeBorder, makeColor, makeCommaValues, makeFont, makeHBox, makeRatio, makeSide, makeTransition, makeValues, makeVBox, px} from "./makeValue"

export const reset = `* {margin:0; padding:0; box-sizing: border-box; font: inherit; color: inherit; flex-shrink: 0;}`

const RULES = {

  // Colors
  c: value => `color: ${makeColor(value)};`,
  bg: value => `background-color: ${makeColor(value)};`, // @TODO: url형식이면, background-image만 넣는 것으로 하자.

  // @TODO: background 이미지에 대한 세련된 방법이 필요하다!
  "bg-repeat-x": value => `background-repeat: repeat-x;`,
  "bg-repeat-y": value => `background-repeat: repeat-y;`,
  "bg-no-repeat": value => `background-repeat: no-repeat;`,
  "bg-attachment-fixed": value => `background-attachment: fixed;`,
  "bg-attachment-scroll": value => `background-attachment: scroll;`,
  "bg-position": value => `background-position: ${value};`,

  //
  contain: () => `background-size: contain; background-position: center; object-fit: contain;`,
  cover: () => `background-size: cover; background-position: center; object-fit: cover;`,


  // Typography
  font: value => makeFont(value),
  "font-size": value => `font-size: ${px(value)};`,
  "letter-spacing": value => `letter-spacing: ${px(value)};`,
  "word-spacing": value => `word-spacing: ${px(value)};`,

  // @TODO: prefix: @TODO: IE 검토 필
  "100": value => `font-weight: 100;`,
  "200": value => `font-weight: 200;`,
  "300": value => `font-weight: 300;`,
  "400": value => `font-weight: 400;`,
  "500": value => `font-weight: 500;`,
  "600": value => `font-weight: 600;`,
  "700": value => `font-weight: 700;`,
  "800": value => `font-weight: 800;`,
  "900": value => `font-weight: 900;`,

  lighter: value => `font-weight: 100;`,
  thin: value => `font-weight: 200;`,
  light: value => `font-weight: 300;`,
  medium: value => `font-weight: 500;`,
  semibold: value => `font-weight: 600;`,
  bold: value => `font-weight: 700;`,
  heavy: value => `font-weight: 800;`,
  bolder: value => `font-weight: 900;`,

  thicker: (value = 1) => `text-shadow: 0 0 ${px(value)} currentColor;`,

  // Font-Style (L)
  italic: () => `font-style: italic;`,
  overline: () => `text-decoration: overline;`,
  underline: () => `text-decoration: underline;`,
  del: () => `text-decoration: line-through;`,

  // Font-Family @TODO: font-stack은 일반적인 스택 만들어 두기...(L)
  serif: value => `font-family:serif;`,
  "sans-serif": value => `font-family:sans-serif;`,
  monospace: value => `font-family:menlo,monospace;`,
  cursive: value => `font-family:cursive;`,
  fantasy: value => `font-family:fantasy;`,
  "system-ui": value => `font-family:system-ui;`,

  "small-caps": () => `font-variant: small-caps`,
  lowercase: () => `text-transform: lowercase;`,
  uppercase: () => `text-transform: uppercase;`,
  capitalize: () => `text-transform: capitalize;`,

  // Text
  "text-left": () => `text-align: left;`,
  "text-center": () => `text-align: center;`,
  "text-right": () => `text-align: right;`,
  "text-justify": () => `text-align: justify;`,

  "break-all": () => `word-break: break-all;`,
  "break-word": () => `word-break: break-word; overflow-wrap: break-word;`,
  "keep-all": () => `word-break: keep-all;`,

  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "nowrap": () => `white-space:nowrap;flex-shrink:0`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1`,

  // line-clamp vs max-lines
  // @NOTE: 일단 기존 프로퍼티에 의거한다는 원칙에따라 line-clamp를 쓴다. 이후 max-lines가 정식 스펙이 되면 deprecated한다.
  "line-clamp": (value) => `display: -webkit-box; -webkit-line-clamp: ${value}; -webkit-box-orient: vertical; overflow: hidden;`,
  // "max-lines": (value) => `display: -webkit-box; -webkit-line-clamp: ${value}; -webkit-box-orient: vertical; overflow: hidden;`,
  "text-indent": value => `text-indent: ${px(value)};`,

  // @TODO
  // "text-shadow": value => `text-shadow: ${makeSide(value)};`,


  // Box-Sizing
  "border-box": () => `box-sizing: border-box`,
  "content-box": () => `box-sizing: content-box`,

  // Box @TODO: 1/6, calc()
  w: value => {
    if (value.includes("~")) {
      const result = []
      const [min, max] = value.split("~")
      min && result.push(`min-width: ${px(min)};`)
      max && result.push(`max-width: ${px(max)};`)
      return result.join("")
    }
    return value === "fill" ? `align-self:stretch` : `width: ${px(value)};`
  },

  "min-w": value => `min-width: ${px(value)};`,
  "max-w": value => `max-width: ${px(value)};`,

  h: value => {
    if (value.includes("~")) {
      const result = []
      const [min, max] = value.split("~")
      min && result.push(`min-height: ${px(min)};`)
      max && result.push(`max-height: ${px(max)};`)
      return result.join("")
    }
    return value === "fill" ? `align-self:stretch` : `height: ${px(value)};`
  },

  "min-h": value => `min-height: ${px(value)};`,
  "max-h": value => `max-height: ${px(value)};`,

  m: value => `margin: ${makeSide(value)};`,
  mt: value => `margin-top: ${px(value)};`,
  mr: value => `margin-right: ${px(value)};`,
  mb: value => `margin-bottom: ${px(value)};`,
  ml: value => `margin-left: ${px(value)};`,

  p: value => `padding: ${makeSide(value)};`,
  pt: value => `padding-top: ${px(value)};`,
  pr: value => `padding-right: ${px(value)};`,
  pb: value => `padding-bottom: ${px(value)};`,
  pl: value => `padding-left: ${px(value)};`,

  b: value => `border: ${makeBorder(value)};`,
  bt: value => `border-top: ${makeBorder(value)};`,
  br: value => `border-right: ${makeBorder(value)};`,
  bb: value => `border-bottom: ${makeBorder(value)};`,
  bl: value => `border-left: ${makeBorder(value)};`,

  bw: value => `border-width: ${px(value)};`,
  btw: value => `border-top-width: ${px(value)};`,
  brw: value => `border-right-width: ${px(value)};`,
  bbw: value => `border-bottom-width: ${px(value)};`,
  blw: value => `border-left-width: ${px(value)};`,

  bs: value => `border-style: ${cssvar(value)};`,
  bts: value => `border-top-style: ${cssvar(value)};`,
  brs: value => `border-right-style: ${cssvar(value)};`,
  bbs: value => `border-bottom-style: ${cssvar(value)};`,
  bls: value => `border-left-style: ${cssvar(value)};`,

  bc: value => `border-color: ${makeColor(value)};`,
  btc: value => `border-top-color: ${makeColor(value)};`,
  brc: value => `border-right-color: ${makeColor(value)};`,
  bbc: value => `border-bottom-color: ${makeColor(value)};`,
  blc: value => `border-left-color: ${makeColor(value)};`,

  // @TODO: 교육이 필요하다.
  r: value => `border-radius: ${makeSide(value)};`,

  rtl: value => `border-top-left-radius: ${px(value)};`,
  rtr: value => `border-top-right-radius: ${px(value)};`,
  rbr: value => `border-bottom-right-radius: ${px(value)};`,
  rbl: value => `border-bottom-left-radius: ${px(value)};`,

  rt: value => `border-top-left-radius: ${px(value)}; border-top-right-radius: ${px(value)};`,
  rr: value => `border-top-right-radius: ${px(value)}; border-bottom-right-radius: ${px(value)};`,
  rb: value => `border-bottom-left-radius: ${px(value)}; border-bottom-right-radius: ${px(value)};`,
  rl: value => `border-top-left-radius: ${px(value)}; border-bottom-left-radius: ${px(value)};`,

  ring: value => {
    const [color, size = 1] = value.split("/")
    return `box-shadow: 0 0 0 ${px(size)} ${makeColor(color)};`
  },

  outline: value => `outline: 1px solid ${makeColor(value)};`,
  "guide": (value = "#4f80ff") => `&, & > * { outline: 1px solid ${makeColor(value)}; }`,


  // OverFlow: @TODO: 스크롤바 보여지느냐 아니냐... 보통 auto를 쓴다. 스크롤 바는 생각할게 많네요!! (thank you Linda!)
  overflow: (value) => `overflow: ${value};`,
  "overflow-x": (value) => `overflow-x: ${value};`,
  "overflow-y": (value) => `overflow-y: ${value};`,

  clip: () => `overflow: hidden;`,
  "scroll": () => `overflow: auto;`,
  "scroll-x": () => `overflow-x: auto; overflow-y: hidden;`,
  "scroll-y": () => `overflow-x: hidden; overflow-y: auto;`,
  "scrollbar": () => `&{overflow: scroll;} &.scroll {overflow: scroll;} &.scroll-x {overflow-x: scroll;} &.scroll-y {overflow-y: scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar {display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal {display:none;}`,

  // @TODO: - TBD
  "overscroll": (value) => `overscroll-behavior: ${value};`,
  "overscroll-x": (value) => `overscroll-behavior-x: ${value};`,
  "overscroll-y": (value) => `overscroll-behavior-y: ${value};`,

  // @TODO: - TBD
  "no-bouncing": () => "",
  "no-overscroll": () => "",

  "vertical-top": () => `vertical-align:top`,


  // Scroll Snap -- TBD @TODO:


  // Display
  "block": () => `display:block`,
  "contents": () => `display:contents`,
  "flow-root": () => `display:flow-root`,
  "grid": () => `display:grid`,
  "inline": () => `display:inline`,
  "inline-block": () => `display:inline-block`,
  "inline-flex": () => `display:inline-flex`,
  "inline-grid": () => `display:inline-grid`,
  "inline-table": () => `display:inline-table`,
  "list-item": () => `display:list-item`,
  "revert": () => `display:revert`,
  "table": () => `display:table`,
  "table-caption": () => `display:table-caption`,
  "table-cell": () => `display:table-cell`,
  "table-column": () => `display:table-column`,
  "table-column-group": () => `display:table-column-group`,

  // Flexbox
  pack: () => `display: flex; align-items: center; justify-content: center;`,
  hbox: (value) => `display: flex; flex-flow: row; ${makeHBox(value)}`,
  vbox: (value) => `display: flex; flex-flow: column; ${makeVBox(value)}`,

  gap: value => `gap: ${makeSide(value)};`,
  hgap: value => `&>*+* { margin-left: ${px(value)}; }`,
  vgap: value => `&>*+* { margin-top: ${px(value)}; }`,
  space: value => `padding: ${px(value / 2)};`,

  "space-between": () => `justify-content: space-between;`,
  "space-around": () => `justify-content: space-around;`,
  "space-evenly": () => `justify-content: space-evenly;`,

  // flex (L)
  flex: (value = "1") => `flex:${makeValues(value)};`,
  ">flex": (value = "1") => `&>*{flex:${makeValues(value)};}`,

  "flex-initial": () => `flex: initial;`,
  "flex-auto": () => `flex: auto;`,
  "flex-none": () => `flex: none;`,

  "flex-grow": value => `flex-grow: ${cssvar(value)};`,
  "flex-shrink": value => `flex-shrink: ${cssvar(value)};`,
  "flex-basis": value => `flex-basis: ${px(value)};`,

  "flex-wrap": () => "flex-wrap: wrap;",
  "flex-wrap-reverse": () => "flex-wrap: wrap-reverse;",
  "flex-nowrap": () => "flex-wrap: nowrap;",
  "order": (value) => `order: ${cssvar(value)};`,


  // Visibility
  none: () => `display:none;`,
  opacity: value => `opacity: ${cssvar(value)};`,
  invisible: value => `visibility: hidden;`,
  visible: value => `visibility: visible;`,
  "gone": () => `position: absolute !important; width: 1px; height: 1px; overflow: hidden; clip:rect(1px 1px 1px 1px); clip:rect(1px, 1px, 1px, 1px);`,


  // Position
  layer: (value = "") => {
    const pos = {top: 0, right: 0, bottom: 0, left: 0}
    value.split("+").forEach(v => {
      switch (v) {
        case "top": {return (delete pos["bottom"])}
        case "right": {return (delete pos["left"])}
        case "bottom": {return (delete pos["top"])}
        case "left": {return (delete pos["right"])}
      }
    })
    return `position: absolute;` + Object.keys(pos).map(value => `${value}:0`).join(";")
  },

  "absolute": () => `position: absolute;`,
  "relative": () => `position: relative;`,
  "static": () => `position: static;`,
  "fixed": () => `position: fixed;`,
  "sticky": () => `position: sticky;`,
  "sticky-top": (value = 0) => `position: sticky; top: ${px(value)};`,
  "sticky-right": (value = 0) => `position: sticky; right: ${px(value)};`,
  "sticky-bottom": (value = 0) => `position: sticky; bottom: ${px(value)};`,
  "sticky-left": (value = 0) => `position: sticky; left: ${px(value)};`,


  // Position
  x: value => `left: ${px(value)};`,
  y: value => `top: ${px(value)};`,
  z: value => `z-index: ${cssvar(value)};`,
  top: value => `top: ${px(value)};`,
  left: value => `left: ${px(value)};`,
  right: value => `right: ${px(value)};`,
  bottom: value => `bottom: ${px(value)};`,


  // Interactions
  "user-select-none": () => "user-select: none;",
  "user-select-all": () => "user-select: all;",
  "user-select-auto": () => "user-select: auto;",
  "user-select-text": () => "user-select: text;",

  "pointer-events-none": () => "pointer-events: none;",
  "pointer-events-auto": () => "pointer-events: auto;",

  cursor: value => `cursor: ${value};`,
  pointer: value => `cursor: pointer;`,
  grab: value => `&{cursor: grab;} &:active {cursor:grabbing;}`,
  grabbing: value => `cursor:grabbing;`,


  // 에니메이션: @TODO: transition(transform=100s/opacity=2s) // TBD
  transition: value => `transition: ${makeTransition(value)};`,

  rotate: value => `transform: rotate(${makeCommaValues(value)});`,
  rotateX: value => `transform: rotateX(${cssvar(value)});`,
  rotateY: value => `transform: rotateY(${cssvar(value)});`,
  rotateZ: value => `transform: rotateZ(${cssvar(value)});`,
  rotate3d: value => `transform: rotateZ(${makeCommaValues(value)});`,

  translate: value => `transform: translate(${makeCommaValues(value)});`,
  translateX: value => `transform: translateX(${cssvar(value)});`,
  translateY: value => `transform: translateY(${cssvar(value)});`,
  translateZ: value => `transform: translateZ(${cssvar(value)});`,
  translate3d: value => `transform: translate3d(${makeCommaValues(value)});`,


  // @TODO: hover:fade(.3s)x



  // Util
  ratio: value => `& {position:relative; width:100%; padding-top: ${makeRatio(value)};} & > * {position: absolute; top:0; left:0; width:100%; height:100%;}`,
  gpu: () => `transform: translateZ(0.1px);`,

  // @TODO: triangle

  // etc
  "no-border": () => `border:none;outline:none;`,
  "app-region": (value) => `-webkit-app-region: ${value};`,
  content: (value) => `content: '${cssvar(value)}'`,
}

const RULES_INDEX = {...RULES}
Object.keys(RULES_INDEX).forEach((key, index) => RULES_INDEX[key] = index)

const MEDIA_QUERY_RULES = {
  "sm:": value => `@media only screen and (max-width:767px) { html & { ${value} }}`,
  "~sm:": value => `@media only screen and (min-width:767px) { html & { ${value} }}`,
  "sm~:": value => `@media only screen and (min-width:767px) { html & { ${value} }}`,
  "!sm:": value => `@media only screen and (min-width:767px) { html & { ${value} }}`,

  "mobile:": value => `@media only screen and (max-width:767px) { html & { ${value} }}`,
  "!mobile:": value => `@media only screen and (min-width:767px) { html & { ${value} }}`,

  "mobile-device:": value => `@media only screen and (max-device-width:767px) { html & { ${value} }}`,
  "!mobile-device:": value => `@media only screen and (min-device-width:767px) { html & { ${value} }}`,

  "touch:": value => `@media only screen and (hover:none){ html & { ${value} }}`,
  "portrait:": value => `@media (orientation: portrait){ html & { ${value} }}`,
  "landscape:": value => `@media (orientation: landscape){ html & { ${value} }}`,

  // dark: @TODO
  "dark:": value => `@TODO`,
}

const SELECTOR_RULES = {
  // ">":"", // @TODO: 자식 선택자 모든 속성에~~
  // "+":"", // @TODO: 자식 선택자 모든 속성에~~
  // "~":"", // @TODO: 자식 선택자 모든 속성에~~
  ".class:": (value, cls) => `${cls}&,${cls} & { ${value} }`,
}

const PREFIX_RULES = {
  ...MEDIA_QUERY_RULES,
  ...SELECTOR_RULES,

  "link:": value => `&:link { ${value} }`,
  "visited:": value => `&:visited { ${value} }`,

  "placeholder:": value => `&::placeholder { ${value} }`,

  "hover:": value => `@media only screen and (hover:hover){ &:hover{ ${value} }} @media only screen and (hover:none){ &:active { ${value} }}`,
  "active:": value => `&:active { ${value} }`,
  "focus:": value => `&:focus { ${value} }`,
  "focus-within:": value => `&:focus-within { ${value} }`,
  "disabled:": value => `html &:disabled { ${value} } html &[disabled] { ${value} }`,

  "group-hover:": value => `.group:hover &, .group.\\:hover & { ${value} }`,
  "group-active:": value => `.group:active &, .group.\\:active & { ${value} }`,
  "group-focus:": value => `.group:focus &, .group.\\:focus & { ${value} }`,
  "group-disabled:": value => `html .group:disabled &, html .group[disabled] &, html .group.disabled & { ${value} }`,

  // @TBD:!!
  "first:": value => `&:first-child { ${value} }`,
  "nth-child(?):": value => `&:nth-child(?) { ${value} }`,
  "before:": value => `&:before { ${value} }`,
  "after:": value => `&:after { ${value} }`,
}

const rules = (r) => RULES[r] || (() => "")
const prefix_rules = (r) => PREFIX_RULES[r] || ((r) => r)

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

const getPriority = (a:string) => priority.findIndex((value) => a.startsWith(value.split(":").pop()))

const strcmp = (a:string, b:string) => a > b ? 1 : a < b ? -1 : 0

const sortByRule = (a, b) => getPriority(b) - getPriority(a) || strcmp(a, b)

export const generateCss = (classList:string[]) => classList.map(a => String(a)).sort(sortByRule).map(generateAtomicCss).filter(Boolean)