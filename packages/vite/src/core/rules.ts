import {PrefixRules, Rules} from "./atomizer"
import {cssvar, makeBorder, makeColor, makeCommaValues, makeFont, makeFontFamily, makeHBox, makeNumber, makePosition, makeRatio, makeSide, makeTransition, makeValues, makeVBox, percentToEm, px} from "./makeValue"

export const reset = `*{margin:0;padding:0;font:inherit;color:inherit;}
*,:after,:before{box-sizing:border-box;flex-shrink:0;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2}
html,body{height:100%;}
img,picture,video,canvas{display:block;max-width:100%;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}
`

export const RULES:Rules = {

  // -- Color
  "c": (value:string) => `color:${makeColor(value)};`,
  "color": (value:string) => RULES.c(value),
  "caret": (value:string) => `caret-color:${makeColor(value)};`,
  "caret-current": () => `color:currentColor`,

  // -- Typography
  "font": (value:string) => makeFont(value),
  "font-size": (value:string) => `font-size:${px(value)};`,
  "line-height": (value:string) => `line-height:${+value < 4 ? makeNumber(+value) : px(value)}`,
  "letter-spacing": (value:string) => `letter-spacing:${percentToEm(value)};`,
  "word-spacing": (value:string) => `word-spacing:${px(value)};`,

  // Font-Family @TODO:font-stack은 일반적인 스택 만들어 두기...(L),Roboto,NotoSans와 같은것도 만들까?

  // @TODO:font-family:var(--serif),serif; 이게 먹히나?
  "sans": () => makeFontFamily("sans-serif"),
  "sans-serif": () => makeFontFamily("sans-serif"),
  "serif": () => makeFontFamily("serif"),
  "cursive": () => makeFontFamily("cursive"),
  "fantasy": () => makeFontFamily("fantasy"),
  "system-ui": () => makeFontFamily("system-ui"),
  "monospace": (value) => {
    if (value === "number") return `font-variant-numeric:tabular-nums;`
    return makeFontFamily("monospace")
  },

  "AppleSD": () => `font-family:"Apple SD Gothic Neo";`,
  "Roboto": () => makeFontFamily("Roboto"),

  // Font Weight
  "100": () => `font-weight:100;`,
  "200": () => `font-weight:200;`,
  "300": () => `font-weight:300;`,
  "400": () => `font-weight:400;`,
  "500": () => `font-weight:500;`,
  "600": () => `font-weight:600;`,
  "700": () => `font-weight:700;`,
  "800": () => `font-weight:800;`,
  "900": () => `font-weight:900;`,

  "thin": () => `font-weight:200;`,
  "light": () => `font-weight:300;`,
  "regular": () => `font-weight:normal;`,
  "medium": () => `font-weight:500;`,
  "semibold": () => `font-weight:600;`,
  "bold": () => `font-weight:bold;`,
  "heavy": () => `font-weight:900;`,

  // Font Weight Utility
  "thicker": (value = "1") => `text-shadow:0 0 ${px(value)} currentColor;`,

  // Font-Style
  "italic": () => `font-style:italic;`,
  "overline": () => `text-decoration:overline;`,
  "underline": () => `text-decoration:underline;`,
  "line-through": () => `text-decoration:line-through;`,
  "strike": () => `text-decoration:line-through;`,
  "del": () => `text-decoration:line-through;`,

  "small-caps": () => `font-variant-caps:small-caps;`,
  "all-small-caps": () => `font-variant-caps:all-small-caps;`,
  "slashed-zero": () => `font-variant-numeric:slashed-zero;`,
  "tabular-nums": () => `font-variant-numeric:tabular-nums;`,

  "lowercase": () => `text-transform:lowercase;`,
  "uppercase": () => `text-transform:uppercase;`,
  "capitalize": () => `text-transform:capitalize;`,

  // Text Align
  "text-justify": () => `text-align:justify;`,
  "text-center": () => `text-align:center;`,
  "text-right": () => `text-align:right;`,
  "text-left": () => `text-align:left;`,

  "vertical-top": () => `vertical-align:top;`,
  "vertical-middle": () => `vertical-align:middle;`,
  "vertical-bottom": () => `vertical-align:bottom;`,
  "sub": () => `vertical-align:sub;`,
  "super": () => `vertical-align:super;`,
  "text-top": () => `vertical-align:text-top;`,
  "text-bottom": () => `vertical-align:text-bottom;`,

  // Text Wrap
  "break-all": () => `word-break:break-all;`,
  "break-word": () => `overflow-wrap:break-word;`,
  "keep-all": () => `word-break:keep-all;`,
  "hyphens": (value = "auto") => `hyphens:${value};`,

  // -- Display
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
  "contents": () => "display:contents;",
  "list-item": () => "display:list-item;",

  // @TODO:-- GRID TBD
  "grid": (value) => {
    const css = ["display:grid;"]
    if (+value === +value) css.push(`grid-template-columns:repeat(${value},1fr);`)
    else if (value) css.push(`grid-template-columns:${value};`)
    return css.join("")
  },
  "grid-cols": (value) => {
    const css = ["display:grid;"]
    if (+value === +value) css.push(`grid-template-columns:repeat(${value},1fr);`)
    else if (value) css.push(`grid-template-columns:${value};`)
    return css.join("")
  },
  "inline-grid": () => "display:inline-grid;",

  // -- Flexbox
  "hbox": (value = "") => `display:flex;flex-flow:row;${makeHBox(value)}`,
  "vbox": (value = "") => `display:flex;flex-flow:column;${makeVBox(value)}`,
  "pack": () => `display:flex;align-items:center;justify-content:center;`,
  "hpack": () => `display:flex;flex-flow:row;align-items:center;justify-content:center;`,
  "vpack": () => `display:flex;flex-flow:column;align-items:center;justify-content:center;`,
  "hbox(": () => ``,
  "vbox(": () => ``,
  "subbox": () => `display:flex;flex-flow:inherit;align-items:inherit;justify-content:inherit;`,

  "gap": (value:string) => `gap:${makeSide(value)};grid-gap:${makeSide(value)};`,

  // @NOTE:IE,safari<=13
  "hgap": (value:string) => `&>*+* {margin-left:${px(value)};}`,
  "hgap-reverse": (value:string) => `&>*+* {margin-right:${px(value)};}`,
  "vgap": (value:string) => `&>*+* {margin-top:${px(value)};}`,
  "vgap-reverse": (value:string) => `&>*+* {margin-bottom:${px(value)};}`,

  "space-between": () => `justify-content:space-between;`,
  "space-around": () => `justify-content:space-around;`,
  "space-evenly": () => `justify-content:space-evenly;`,

  // flex
  "flex": (value = "1") => `flex:${makeValues(value)};`,
  "space": (value:string) => `[class*="hbox"]>& {width:${px(value)};} [class*="vbox"]>& {height:${px(value)};}`,

  "flex-grow": (value = "1") => `flex-grow:${cssvar(value)};`,
  "flex-shrink": (value = "1") => `flex-shrink:${cssvar(value)};`,
  "flex-basis": (value:string) => `flex-basis:${px(value)};`,

  "flex-wrap": () => "&{flex-wrap:wrap;}&>*{max-width:100%;max-height:100%;}",
  "flex-wrap-reverse": () => "&{flex-wrap:wrap-reverse;}&>*{max-width:100%;max-height:100%;}",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value:string) => `order:${cssvar(value)};`,

  // "self":(value:string) => `order:${cssvar(value)};`,

  // -- Box

  // Box-Sizing
  "border-box": () => `box-sizing:border-box`,
  "content-box": () => `box-sizing:content-box`,

  // Box-Model
  "w": (value:string) => {
    if (value.includes("~")) {
      const result = []

      const values = value.split("~")
      if (values.length <= 2) {
        const [min, max] = values
        min && result.push(`min-width:${px(min)};`)
        max && result.push(`max-width:${px(max)};`)
        return result.join("")
      }

      const [min, width, max] = values
      min && result.push(`min-width:${px(min)};`)
      result.push(`width:${px(width)};`)
      max && result.push(`max-width:${px(max)};`)
      return result.join("")
    }

    return (value === "stretch" || value === "fill") ? `align-self:stretch` : `width:${px(value)};`
  },

  "h": (value:string) => {
    if (value.includes("~")) {
      const result = []

      const values = value.split("~")
      if (values.length <= 2) {
        const [min, max] = value.split("~")
        min && result.push(`min-height:${px(min)};`)
        max && result.push(`max-height:${px(max)};`)
        return result.join("")
      }

      // h(10~20~30)
      const [min, height, max] = values
      min && result.push(`min-height:${px(min)};`)
      result.push(`height:${px(height)};`)
      max && result.push(`max-height:${px(max)};`)
      return result.join("")
    }

    return (value === "stretch" || value === "fill") ? `align-self:stretch` : `height:${px(value)};`
  },

  "m": (value:string) => `margin:${makeSide(value)};`,
  "mt": (value:string) => `margin-top:${px(value)};`,
  "mr": (value:string) => `margin-right:${px(value)};`,
  "mb": (value:string) => `margin-bottom:${px(value)};`,
  "ml": (value:string) => `margin-left:${px(value)};`,

  "p": (value:string) => `padding:${makeSide(value)};`,
  "pt": (value:string) => `padding-top:${px(value)};`,
  "pr": (value:string) => `padding-right:${px(value)};`,
  "pb": (value:string) => `padding-bottom:${px(value)};`,
  "pl": (value:string) => `padding-left:${px(value)};`,

  "b": (value:string) => `border:${makeBorder(value)};`,
  "bt": (value:string) => `border-top:${makeBorder(value)};`,
  "br": (value:string) => `border-right:${makeBorder(value)};`,
  "bb": (value:string) => `border-bottom:${makeBorder(value)};`,
  "bl": (value:string) => `border-left:${makeBorder(value)};`,

  "bw": (value:string) => `border-width:${px(value)};`,
  "btw": (value:string) => `border-top-width:${px(value)};`,
  "brw": (value:string) => `border-right-width:${px(value)};`,
  "bbw": (value:string) => `border-bottom-width:${px(value)};`,
  "blw": (value:string) => `border-left-width:${px(value)};`,

  "bs": (value:string) => `border-style:${cssvar(value)};`,
  "bts": (value:string) => `border-top-style:${cssvar(value)};`,
  "brs": (value:string) => `border-right-style:${cssvar(value)};`,
  "bbs": (value:string) => `border-bottom-style:${cssvar(value)};`,
  "bls": (value:string) => `border-left-style:${cssvar(value)};`,

  "bc": (value:string) => `border-color:${makeColor(value)};`,
  "btc": (value:string) => `border-top-color:${makeColor(value)};`,
  "brc": (value:string) => `border-right-color:${makeColor(value)};`,
  "bbc": (value:string) => `border-bottom-color:${makeColor(value)};`,
  "blc": (value:string) => `border-left-color:${makeColor(value)};`,

  // border-radius
  "r": (value:string) => `border-radius:${makeSide(value)};`,

  "rt": (value:string) => `border-top-left-radius:${px(value)};border-top-right-radius:${px(value)};`,
  "rr": (value:string) => `border-top-right-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  "rb": (value:string) => `border-bottom-left-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  "rl": (value:string) => `border-top-left-radius:${px(value)};border-bottom-left-radius:${px(value)};`,

  "rtl": (value:string) => `border-top-left-radius:${px(value)};`,
  "rtr": (value:string) => `border-top-right-radius:${px(value)};`,
  "rbr": (value:string) => `border-bottom-right-radius:${px(value)};`,
  "rbl": (value:string) => `border-bottom-left-radius:${px(value)};`,

  "ring": (value:string) => {
    const [color, size = 1] = value.split("/")
    return `box-shadow:0 0 0 ${px(size)} ${makeColor(color)};`
  },

  "box-shadow": (value:string) => `box-shadow:${makeValues(value, v => Number.isInteger(+v) ? px(v) : cssvar(v))}`,

  "outline": (value:string) => `outline:${makeBorder(value)};`,
  "guide": (value = "#4f80ff") => `&,&>*{ outline:1px solid ${makeColor(value)};}`,

  // -- Background
  "bg": (value:string) => {
    if (value.startsWith("linear-gradient")) return `background:${value.replace(/\//g, " ")};`
    if (value.startsWith("radial-gradient")) return `background:${value.replace(/\//g, " ")};`

    // background-image-url
    if (value.startsWith("url")) return `background-image:${value};`
    if (/^(http|[./])/.test(value)) return `background-image:url(${value});`

    if (value === "transparent") return `background-color:transparent;`
    return `background-color:${makeColor(value)};`
  },

  "bg-image": (value:string) => {
    if (value.startsWith("url")) return `background-image:${value};`
    return `background-image:url(${value});`
  },
  "background-image": (value:string) => RULES["bg-image"](value),

  "bg-position": (value:string) => `background-position:${makeValues(value)};`,

  // @TODO:background 이미지에 대한 세련된 방법이 필요하다!
  "bg-repeat-x": () => `background-repeat:repeat-x;`,
  "bg-repeat-y": () => `background-repeat:repeat-y;`,
  "bg-no-repeat": () => `background-repeat:no-repeat;`,
  "bg-fixed": () => `background-attachment:fixed;`,
  "bg-scroll": () => `background-attachment:scroll;`,

  "contain": () => `background-size:contain;background-position:center;background-repeat:no-repeat;object-fit:contain;`,
  "cover": () => `background-size:cover;background-position:center;background-repeat:no-repeat;object-fit:cover;`,

  /// -- Overflow

  // OverFlow
  "overflow": (value:string) => `overflow:${value};`,
  "overflow-x": (value:string) => `overflow-x:${value};`,
  "overflow-y": (value:string) => `overflow-y:${value};`,
  "clip": () => `overflow:hidden;`,

  // Scroll
  "scroll": () => `overflow:auto;`,
  "scroll-x": () => `overflow-x:auto;overflow-y:hidden;`,
  "scroll-y": () => `overflow-x:hidden;overflow-y:auto;`,
  "scrollbar": () => `&{overflow:scroll;}&.scroll{overflow:scroll;}&.scroll-x{overflow-x:scroll;}&.scroll-y{overflow-y:scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar{display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal{display:none;}`,

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

  "snap": (value:string) => `scroll-snap-align:${cssvar(value)};`,
  "snap-start": () => `scroll-snap-align:start;`,
  "snap-end": () => `scroll-snap-align:end;`,
  "snap-center": () => `scroll-snap-align:center;`,
  "snap-align-none": () => `scroll-snap-align:none;`,

  "snap-none": () => `scroll-snap-type:none;`,
  "snap-x": () => `scroll-snap-type:x var(--a-scroll-snap-strictness, mandatory);`,
  "snap-x-proximity": () => `scroll-snap-type:x proximity;`,
  "snap-y": () => `scroll-snap-type:y var(--a-scroll-snap-strictness, mandatory);`,
  "snap-y-proximity": () => `scroll-snap-type:y proximity;`,
  "snap-both": () => `scroll-snap-type:both var(--a-scroll-snap-strictness, mandatory);`,
  "snap-both-proximity": () => `scroll-snap-type:both proximity;`,
  "snap-mandatory": () => `--a-scroll-snap-strictness:mandatory;`,
  "snap-proximity": () => `--a-scroll-snap-strictness:proximity;`,

  "snap-normal": () => `scroll-snap-stop: normal;`,
  "snap-always": () => `scroll-snap-stop: always;`,

  // @TODO:- TBD
  "overscroll": (value:string) => `overscroll-behavior:${value};`,
  "overscroll-x": (value:string) => `overscroll-behavior-x:${value};`,
  "overscroll-y": (value:string) => `overscroll-behavior-y:${value};`,

  // @TODO:- TBD
  "no-bouncing": () => "",
  "no-overscroll": () => "",

  // OverFlow + Text
  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "nowrap": () => `white-space:nowrap;flex-shrink:0;`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;`,

  // line-clamp vs max-lines
  // @NOTE:일단 기존 프로퍼티에 의거한다는 원칙에따라 line-clamp를 쓴다. 이후 max-lines가 정식 스펙이 되면 deprecated한다.
  // @NOTE:그냥 둘다 제공한다.
  "line-clamp": (value:string) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "max-lines": (value:string) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "text-indent": (value:string) => `text-indent:${px(value)};`,

  // Position
  "layer": (value = "") => {
    const pos = {top: 0, right: 0, bottom: 0, left: 0}
    value.split("+").forEach(v => {
      switch (v) {
        case "top": {return (delete pos.bottom)}
        case "right": {return (delete pos.left)}
        case "bottom": {return (delete pos.top)}
        case "left": {return (delete pos.right)}
      }
    })
    return `position:absolute;` + Object.keys(pos).map((value:string) => `${value}:0;`).join("")
  },

  "absolute": (value:string) => `position:absolute;${makePosition(value)}`,
  "relative": (value:string) => `position:relative;${makePosition(value)}`,
  "sticky": (value:string) => `position:sticky;${makePosition(value)}`,
  "sticky-top": (value = "0") => `position:sticky;top:${px(value)};`,
  "sticky-right": (value = "0") => `position:sticky;right:${px(value)};`,
  "sticky-bottom": (value = "0") => `position:sticky;bottom:${px(value)};`,
  "sticky-left": (value = "0") => `position:sticky;left:${px(value)};`,
  "fixed": (value:string) => `position:fixed;${makePosition(value)}`,
  "static": () => `position:static;`,

  // Position
  "x": (value:string) => `left:${px(value)};`,
  "y": (value:string) => `top:${px(value)};`,
  "z": (value:string) => `z-index:${cssvar(value)};`,
  "top": (value:string) => `top:${px(value)};`,
  "left": (value:string) => `left:${px(value)};`,
  "right": (value:string) => `right:${px(value)};`,
  "bottom": (value:string) => `bottom:${px(value)};`,

  // Visibility
  "none": () => `display:none;`,
  "hidden": () => `visibility:hidden;`,
  "invisible": () => `visibility:hidden;`,
  "gone": () => `position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);`,
  "opacity": (value:string) => `opacity:${cssvar(value)};`,
  "visible": () => `visibility:visible;`,

  // Interactions
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

  "user-select-none": () => "user-select:none;-webkit-user-select:none;",
  "user-select-all": () => "user-select:all;-webkit-user-select:all;",
  "user-select-auto": () => "user-select:auto;-webkit-user-select:auto;",
  "user-select-text": () => "user-select:text;-webkit-user-select:text;",
  "user-select": (value:string) => `user-select:${cssvar(value)};-webkit-user-select:${cssvar(value)};`,

  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",

  // 에니메이션:transition(transform=100s/opacity=2s)
  "transition": (value:string) => `transition:${makeTransition(value)};`,

  // @TODO:섞을수가 없네? mix transform
  // @TBD:translate(10,10)+rotateX(180deg)+scale(2) 이런식으로 +기호로 묶자!!
  "translate": (value:string) => `transform:translate(${makeCommaValues(value)});`,
  "translateX": (value:string) => `transform:translateX(${cssvar(value)});`,
  "translateY": (value:string) => `transform:translateY(${cssvar(value)});`,
  "translateZ": (value:string) => `transform:translateZ(${cssvar(value)});`,
  "translate3d": (value:string) => `transform:translate3d(${makeCommaValues(value)});`,

  "rotate": (value:string) => `transform:rotate(${makeCommaValues(value)});`,
  "rotateX": (value:string) => `transform:rotateX(${cssvar(value)});`,
  "rotateY": (value:string) => `transform:rotateY(${cssvar(value)});`,
  "rotateZ": (value:string) => `transform:rotateZ(${cssvar(value)});`,
  "rotate3d": (value:string) => `transform:rotateZ(${makeCommaValues(value)});`,

  "scale": (value:string) => `transform:scale(${makeCommaValues(value)});`,
  "scaleX": (value:string) => `transform:scaleX(${makeCommaValues(value)});`,
  "scaleY": (value:string) => `transform:scaleY(${makeCommaValues(value)});`,
  "scaleZ": (value:string) => `transform:scaleZ(${makeCommaValues(value)});`,

  "skew": (value:string) => `transform:skew(${makeCommaValues(value)});`,
  "skewX": (value:string) => `transform:skewX(${makeCommaValues(value)});`,
  "skewY": (value:string) => `transform:skewY(${makeCommaValues(value)});`,
  "skewZ": (value:string) => `transform:skewZ(${makeCommaValues(value)});`,

  // Util
  "ratio": (value:string) => `&{position:relative;}&:before{content:"";display:block;width:100%;padding-top:${makeRatio(value)};}&>*{position:absolute;top:0;left:0;width:100%;height:100%;}`,
  "gpu": () => `transform:translateZ(0.1px);`,

  // etc
  "no-border": () => `border:none;outline:none;`,
  "app-region": (value:string) => `-webkit-app-region:${value};`,
  "content": (value = "''") => `content:${cssvar(value)}`,
  "clip-path": (value:string) => `clip-path:${cssvar(value)};-webkit-clip-path:${cssvar(value)};`,

  "table-layout-fixed": () => `table-layout:fixed;`,
  "table-layout-auto": () => `table-layout:auto;`,

  "aspect-ratio": (value:string) => `aspect-ratio:${cssvar(value.replace(/:/g, "/"))}`,

  // Float & Clear
  "float": (value:string) => `float:${cssvar(value)};`,
  "clear": (value:string) => `clear:${cssvar(value)};`,

  // Filter
  "blur": (value:string) => `filter:blur(${px(value)})`,
  "brightness": (value:string) => `filter:brightness(${cssvar(value)})`,
  "contrast": (value:string) => `filter:contrast(${cssvar(value)})`,
  "drop-shadow": (value:string) => `filter:drop-shadow(${makeValues(value, px)})`,
  "grayscale": (value:string) => `filter:grayscale(${cssvar(value)})`,
  "hue-rotate": (value:string) => `filter:hue-rotate(${cssvar(value)})`,
  "invert": (value:string) => `filter:invert(${cssvar(value)})`,
  "sepia": (value:string) => `filter:sepia(${cssvar(value)})`,
  "saturate": (value:string) => `filter:saturate(${cssvar(value)})`,

  "backdrop-blur": (value:string) => `backdrop-filter:blur(${px(value)})`,
  "backdrop-brightness": (value:string) => `backdrop-filter:brightness(${cssvar(value)})`,
  "backdrop-contrast": (value:string) => `backdrop-filter:contrast(${cssvar(value)})`,
  "backdrop-drop-shadow": (value:string) => `backdrop-filter:drop-shadow(${makeValues(value, px)})`,
  "backdrop-grayscale": (value:string) => `backdrop-filter:grayscale(${cssvar(value)})`,
  "backdrop-hue-rotate": (value:string) => `backdrop-filter:hue-rotate(${cssvar(value)})`,
  "backdrop-invert": (value:string) => `backdrop-filter:invert(${cssvar(value)})`,
  "backdrop-sepia": (value:string) => `backdrop-filter:sepia(${cssvar(value)})`,
  "backdrop-saturate": (value:string) => `backdrop-filter:saturate(${cssvar(value)})`,

  // @TODO:triangle
  "triangle": (value:string) => {
    const [direction, size, angle = 0] = value.split("/")
    const bd = ["top", "right", "bottom", "left", "top", "right", "bottom", "left"]
    const bdr = bd.slice(bd.indexOf(direction))
    const height = 0.5

    let css = `width:0;height:0;border:0 solid transparent;`
    css += "border-" + bdr[1] + "-width:" + Math.round(+size * (-angle + 1) / 2) + "px;"
    css += "border-" + bdr[3] + "-width:" + Math.round(+size * (+angle + 1) / 2) + "px;"
    css += "border-" + bdr[2] + ":" + Math.round(+size * height) + "px solid black;"

    return css
  },

  // elevation
  "elevation": (value:string) => {
    const dp = +value
    if (!dp) {
      return `box-shadow:none;`
    }

    const blur = (dp == 1 ? 3 : dp * 2)
    const amba = (dp + 10 + (dp / 9.38)) / 100
    const diry = (dp < 10 ? (dp % 2 == 0 ? dp - ((dp / 2) - 1) : (dp - ((dp - 1) / 2))) : dp - 4)
    const dira = (24 - (Math.round(dp / 10))) / 100

    return `box-shadow:0px ${px(dp)} ${px(blur)} rgba(0,0,0,${amba}),0px ${px(diry)} ${px(blur)} rgba(0,0,0,${dira});`
  },
}

// Prefix
// pseudo class
export const PREFIX_PSEUDO_CLASS:PrefixRules = {
  "hover:": {media: `(hover:hover)`, selector: `&:hover,&.\\:hover`},
  "active:": {selector: `html &:active,html &.\\:active`},
  "focus:": {selector: `html &:focus,html &.\\:focus`},
  "focus-visible": {selector: `html &:focus-visible,html &.\\:focus-visible`},
  "focus-within:": {selector: `html &:focus-within,html &.\\:focus-within`},
  "checked:": {selector: `html &:checked,html &.\\:checked`},
  "read-only:": {selector: `html &:read-only,html &.\\:read-only`},
  "enabled:": {selector: `html &:enabled,html &.\\:enabled`},
  "disabled:": {selector: `html body &:disabled,html body &.\\:disabled,html body &[disabled]`},

  "group-hover:": {selector: `.group:hover &,html .group.\\:hover &`},
  "group-active:": {selector: `html .group:active &,html .group.\\:active &`},
  "group-focus:": {selector: `html .group:focus &,html .group.\\:focus &`},
  "group-focus-within:": {selector: `html .group:focus-within &,html .group\\:focus-within`},
  "group-checked:": {selector: `html .group:checked &,html .group.\\:checked &`},
  "group-read-only:": {selector: `html .group:read-only &,html .group.\\:read-only &`},
  "group-enabled:": {selector: `html .group:enabled &,html .group.\\:enabled &`},
  "group-disabled:": {selector: `html body .group:disabled &,html body .group[disabled] &,html body .group.disabled &`},

  "placeholder:": {selector: `&::placeholder`},

  "odd:": {selector: `&:nth-child(2n+1)`},
  "even:": {selector: `&:nth-child(2n)`},

  "first:": {selector: `&:first-child`},
  "last:": {selector: `&:last-child`},

  "after:": {selector: `&::after`},
  "before:": {selector: `&::before`},

  "selection::": {selector: `&::selection,& *::selection`},
}


// media query
export const PREFIX_MEDIA_QUERY:PrefixRules = {
  "sm:": {media: `(min-width:480px)`, selector: `html &`},
  "md:": {media: `(min-width:768px)`, selector: `html &`},
  "lg:": {media: `(min-width:1024px)`, selector: `html &`},
  "xl:": {media: `(min-width:1280px)`, selector: `html &`},

  "sm~:": {media: `(min-width:480px)`, selector: `html &`},
  "md~:": {media: `(min-width:768px)`, selector: `html &`},
  "lg~:": {media: `(min-width:1024px)`, selector: `html &`},
  "xl~:": {media: `(min-width:1280px)`, selector: `html &`},

  "~sm:": {media: `(max-width:479.98px)`, selector: `html &`},
  "~md:": {media: `(max-width:767.98px)`, selector: `html &`},
  "~lg:": {media: `(max-width:1023.98px)`, selector: `html &`},
  "~xl:": {media: `(max-width:1279.98px)`, selector: `html &`},

  "mobile:": {media: `(max-device-width:767.98px)`, selector: `html &`},
  "tablet:": {media: `(min-device-width:768px) and (max-device-width:1023.98px)`, selector: `html &`},
  "desktop:": {media: `(min-device-width:1024px)`, selector: `html &`},
  "!mobile:": {media: `(min-device-width:768px)`, selector: `html &`},
  "!desktop:": {media: `(max-device-width:1023.98px)`, selector: `html &`},

  // "touch:":{media:`(hover:none)`,selector:`html &`},
  // "!touch:":{media:`(hover:hover)`,selector:`html &`},

  "touch:": {media: `(max-device-width:1023.98px)`, selector: `html &`},
  "!touch:": {media: `(min-device-width:1024px)`, selector: `html &`},

  "portrait:": {media: `(orientation:portrait)`, selector: `html &`},
  "landscape:": {media: `(orientation:landscape)`, selector: `html &`},

  "print:": {media: `print`, selector: `html &`},
  "screen:": {media: `screen`, selector: `html &`},
  "speech:": {media: `speech`, selector: `html &`},

  // dark:@TBD
  "dark:": {selector: `html.dark &`},
}

export const AT_RULE = {
  "@w": (ident:string, tokens:Array<{ type:string, value:string }>) => {
    if (tokens[2]?.value !== "(" || tokens[tokens.length - 1]?.value !== ")") {
      throw Error("invalid syntax!")
    }

    const value = tokens.slice(3, -1).map(t => t.value).join("")
    if (!value.includes("~")) {
      throw Error("invalid syntax! required '~'.")
    }

    let [min, max] = value.split("~")

    if (min) min = `(min-width:${px(+min)})`
    if (max) max = `(max-width:${px(+max - 0.02)})`
    const rule = [min, max].filter(Boolean).join(" and ")

    return {media: ` only screen and ${rule}`, selector: `html &`}
  }
}

// selector
export const PREFIX_SELECTOR:Record<string, (selector:string) => string> = {
  ">>": (selector:string) => `& ${selector.slice(2)}`,
  "&:": (selector:string) => `${selector}`,
  "&.": (selector:string) => `${selector}`,
  "&[": (selector:string) => `${selector}`,
  ".": (selector:string) => `&${selector},${selector} &`,
  "[": (selector:string) => `&${selector},${selector} &`,
  ">": (selector:string) => `&${selector}`,
  "+": (selector:string) => `&${selector}`,
  "~": (selector:string) => `&${selector}`,
  "#": (selector:string) => `&${selector}`,
}