import {PrefixRules, Rules} from "./atomizer"
import {cssvar, makeBorder, makeColor, makeCommaValues, makeFont, makeHBox, makeNumber, makeRatio, makeSide, makeTransition, makeValues, makeVBox, px} from "./makeValue"

export const ALL_PROPERTIES = {
  "--*": 1, "-ms-accelerator": 1, "-ms-block-progression": 1, "-ms-content-zoom-chaining": 1, "-ms-content-zooming": 1, "-ms-content-zoom-limit": 1, "-ms-content-zoom-limit-max": 1, "-ms-content-zoom-limit-min": 1, "-ms-content-zoom-snap": 1, "-ms-content-zoom-snap-points": 1, "-ms-content-zoom-snap-type": 1, "-ms-filter": 1, "-ms-flow-from": 1, "-ms-flow-into": 1, "-ms-grid-columns": 1, "-ms-grid-rows": 1, "-ms-high-contrast-adjust": 1, "-ms-hyphenate-limit-chars": 1, "-ms-hyphenate-limit-lines": 1, "-ms-hyphenate-limit-zone": 1, "-ms-ime-align": 1, "-ms-overflow-style": 1, "-ms-scrollbar-3dlight-color": 1, "-ms-scrollbar-arrow-color": 1, "-ms-scrollbar-base-color": 1, "-ms-scrollbar-darkshadow-color": 1, "-ms-scrollbar-face-color": 1, "-ms-scrollbar-highlight-color": 1, "-ms-scrollbar-shadow-color": 1, "-ms-scrollbar-track-color": 1, "-ms-scroll-chaining": 1, "-ms-scroll-limit": 1, "-ms-scroll-limit-x-max": 1, "-ms-scroll-limit-x-min": 1, "-ms-scroll-limit-y-max": 1, "-ms-scroll-limit-y-min": 1, "-ms-scroll-rails": 1, "-ms-scroll-snap-points-x": 1, "-ms-scroll-snap-points-y": 1, "-ms-scroll-snap-type": 1, "-ms-scroll-snap-x": 1, "-ms-scroll-snap-y": 1, "-ms-scroll-translation": 1, "-ms-text-autospace": 1, "-ms-touch-select": 1, "-ms-user-select": 1, "-ms-wrap-flow": 1, "-ms-wrap-margin": 1, "-ms-wrap-through": 1, "-moz-appearance": 1, "-moz-binding": 1, "-moz-border-bottom-colors": 1, "-moz-border-left-colors": 1, "-moz-border-right-colors": 1, "-moz-border-top-colors": 1, "-moz-context-properties": 1, "-moz-float-edge": 1, "-moz-force-broken-image-icon": 1, "-moz-image-region": 1, "-moz-orient": 1, "-moz-outline-radius": 1, "-moz-outline-radius-bottomleft": 1, "-moz-outline-radius-bottomright": 1, "-moz-outline-radius-topleft": 1, "-moz-outline-radius-topright": 1, "-moz-stack-sizing": 1, "-moz-text-blink": 1, "-moz-user-focus": 1, "-moz-user-input": 1, "-moz-user-modify": 1, "-moz-window-dragging": 1, "-moz-window-shadow": 1, "-webkit-appearance": 1, "-webkit-border-before": 1, "-webkit-border-before-color": 1, "-webkit-border-before-style": 1, "-webkit-border-before-width": 1, "-webkit-box-reflect": 1, "-webkit-line-clamp": 1, "-webkit-mask": 1, "-webkit-mask-attachment": 1, "-webkit-mask-clip": 1, "-webkit-mask-composite": 1, "-webkit-mask-image": 1, "-webkit-mask-origin": 1, "-webkit-mask-position": 1, "-webkit-mask-position-x": 1, "-webkit-mask-position-y": 1, "-webkit-mask-repeat": 1, "-webkit-mask-repeat-x": 1, "-webkit-mask-repeat-y": 1, "-webkit-mask-size": 1, "-webkit-overflow-scrolling": 1, "-webkit-tap-highlight-color": 1, "-webkit-text-fill-color": 1, "-webkit-text-stroke": 1, "-webkit-text-stroke-color": 1, "-webkit-text-stroke-width": 1, "-webkit-touch-callout": 1, "-webkit-user-modify": 1, "accent-color": 1, "align-content": 1, "align-items": 1, "align-self": 1, "align-tracks": 1, "all": 1, "animation": 1, "animation-delay": 1, "animation-direction": 1, "animation-duration": 1, "animation-fill-mode": 1, "animation-iteration-count": 1, "animation-name": 1, "animation-play-state": 1, "animation-timing-function": 1, "appearance": 1, "aspect-ratio": 1, "azimuth": 1, "backdrop-filter": 1, "backface-visibility": 1, "background": 1, "background-attachment": 1, "background-blend-mode": 1, "background-clip": 1, "background-color": 1, "background-image": 1, "background-origin": 1, "background-position": 1, "background-position-x": 1, "background-position-y": 1, "background-repeat": 1, "background-size": 1, "block-overflow": 1, "block-size": 1, "border": 1, "border-block": 1, "border-block-color": 1, "border-block-style": 1, "border-block-width": 1, "border-block-end": 1, "border-block-end-color": 1, "border-block-end-style": 1, "border-block-end-width": 1, "border-block-start": 1, "border-block-start-color": 1, "border-block-start-style": 1, "border-block-start-width": 1, "border-bottom": 1, "border-bottom-color": 1, "border-bottom-left-radius": 1, "border-bottom-right-radius": 1, "border-bottom-style": 1, "border-bottom-width": 1, "border-collapse": 1, "border-color": 1, "border-end-end-radius": 1, "border-end-start-radius": 1, "border-image": 1, "border-image-outset": 1, "border-image-repeat": 1, "border-image-slice": 1, "border-image-source": 1, "border-image-width": 1, "border-inline": 1, "border-inline-end": 1, "border-inline-color": 1, "border-inline-style": 1, "border-inline-width": 1, "border-inline-end-color": 1, "border-inline-end-style": 1, "border-inline-end-width": 1, "border-inline-start": 1, "border-inline-start-color": 1, "border-inline-start-style": 1, "border-inline-start-width": 1, "border-left": 1, "border-left-color": 1, "border-left-style": 1, "border-left-width": 1, "border-radius": 1, "border-right": 1, "border-right-color": 1, "border-right-style": 1, "border-right-width": 1, "border-spacing": 1, "border-start-end-radius": 1, "border-start-start-radius": 1, "border-style": 1, "border-top": 1, "border-top-color": 1, "border-top-left-radius": 1, "border-top-right-radius": 1, "border-top-style": 1, "border-top-width": 1, "border-width": 1, "bottom": 1, "box-align": 1, "box-decoration-break": 1, "box-direction": 1, "box-flex": 1, "box-flex-group": 1, "box-lines": 1, "box-ordinal-group": 1, "box-orient": 1, "box-pack": 1, "box-shadow": 1, "box-sizing": 1, "break-after": 1, "break-before": 1, "break-inside": 1, "caption-side": 1, "caret-color": 1, "clear": 1, "clip": 1, "clip-path": 1, "color": 1, "color-adjust": 1, "color-scheme": 1, "column-count": 1, "column-fill": 1, "column-gap": 1, "column-rule": 1, "column-rule-color": 1, "column-rule-style": 1, "column-rule-width": 1, "column-span": 1, "column-width": 1, "columns": 1, "contain": 1, "content": 1, "content-visibility": 1, "counter-increment": 1, "counter-reset": 1, "counter-set": 1, "cursor": 1, "direction": 1, "display": 1, "empty-cells": 1, "filter": 1, "flex": 1, "flex-basis": 1, "flex-direction": 1, "flex-flow": 1, "flex-grow": 1, "flex-shrink": 1, "flex-wrap": 1, "float": 1, "font": 1, "font-family": 1, "font-feature-settings": 1, "font-kerning": 1, "font-language-override": 1, "font-optical-sizing": 1, "font-variation-settings": 1, "font-size": 1, "font-size-adjust": 1, "font-smooth": 1, "font-stretch": 1, "font-style": 1, "font-synthesis": 1, "font-variant": 1, "font-variant-alternates": 1, "font-variant-caps": 1, "font-variant-east-asian": 1, "font-variant-ligatures": 1, "font-variant-numeric": 1, "font-variant-position": 1, "font-weight": 1, "forced-color-adjust": 1, "gap": 1, "grid": 1, "grid-area": 1, "grid-auto-columns": 1, "grid-auto-flow": 1, "grid-auto-rows": 1, "grid-column": 1, "grid-column-end": 1, "grid-column-gap": 1, "grid-column-start": 1, "grid-gap": 1, "grid-row": 1, "grid-row-end": 1, "grid-row-gap": 1, "grid-row-start": 1, "grid-template": 1, "grid-template-areas": 1, "grid-template-columns": 1, "grid-template-rows": 1, "hanging-punctuation": 1, "height": 1, "hyphens": 1, "image-orientation": 1, "image-rendering": 1, "image-resolution": 1, "ime-mode": 1, "initial-letter": 1, "initial-letter-align": 1, "inline-size": 1, "input-security": 1, "inset": 1, "inset-block": 1, "inset-block-end": 1, "inset-block-start": 1, "inset-inline": 1, "inset-inline-end": 1, "inset-inline-start": 1, "isolation": 1, "justify-content": 1, "justify-items": 1, "justify-self": 1, "justify-tracks": 1, "left": 1, "letter-spacing": 1, "line-break": 1, "line-clamp": 1, "line-height": 1, "line-height-step": 1, "list-style": 1, "list-style-image": 1, "list-style-position": 1, "list-style-type": 1, "margin": 1, "margin-block": 1, "margin-block-end": 1, "margin-block-start": 1, "margin-bottom": 1, "margin-inline": 1, "margin-inline-end": 1, "margin-inline-start": 1, "margin-left": 1, "margin-right": 1, "margin-top": 1, "margin-trim": 1, "mask": 1, "mask-border": 1, "mask-border-mode": 1, "mask-border-outset": 1, "mask-border-repeat": 1, "mask-border-slice": 1, "mask-border-source": 1, "mask-border-width": 1, "mask-clip": 1, "mask-composite": 1, "mask-image": 1, "mask-mode": 1, "mask-origin": 1, "mask-position": 1, "mask-repeat": 1, "mask-size": 1, "mask-type": 1, "masonry-auto-flow": 1, "math-style": 1, "max-block-size": 1, "max-height": 1, "max-inline-size": 1, "max-lines": 1, "max-width": 1, "min-block-size": 1, "min-height": 1, "min-inline-size": 1, "min-width": 1, "mix-blend-mode": 1, "object-fit": 1, "object-position": 1, "offset": 1, "offset-anchor": 1, "offset-distance": 1, "offset-path": 1, "offset-position": 1, "offset-rotate": 1, "opacity": 1, "order": 1, "orphans": 1, "outline": 1, "outline-color": 1, "outline-offset": 1, "outline-style": 1, "outline-width": 1, "overflow": 1, "overflow-anchor": 1, "overflow-block": 1, "overflow-clip-box": 1, "overflow-clip-margin": 1, "overflow-inline": 1, "overflow-wrap": 1, "overflow-x": 1, "overflow-y": 1, "overscroll-behavior": 1, "overscroll-behavior-block": 1, "overscroll-behavior-inline": 1, "overscroll-behavior-x": 1, "overscroll-behavior-y": 1, "padding": 1, "padding-block": 1, "padding-block-end": 1, "padding-block-start": 1, "padding-bottom": 1, "padding-inline": 1, "padding-inline-end": 1, "padding-inline-start": 1, "padding-left": 1, "padding-right": 1, "padding-top": 1, "page-break-after": 1, "page-break-before": 1, "page-break-inside": 1, "paint-order": 1, "perspective": 1, "perspective-origin": 1, "place-content": 1, "place-items": 1, "place-self": 1, "pointer-events": 1, "position": 1, "quotes": 1, "resize": 1, "right": 1, "rotate": 1, "row-gap": 1, "ruby-align": 1, "ruby-merge": 1, "ruby-position": 1, "scale": 1, "scrollbar-color": 1, "scrollbar-gutter": 1, "scrollbar-width": 1, "scroll-behavior": 1, "scroll-margin": 1, "scroll-margin-block": 1, "scroll-margin-block-start": 1, "scroll-margin-block-end": 1, "scroll-margin-bottom": 1, "scroll-margin-inline": 1, "scroll-margin-inline-start": 1, "scroll-margin-inline-end": 1, "scroll-margin-left": 1, "scroll-margin-right": 1, "scroll-margin-top": 1, "scroll-padding": 1, "scroll-padding-block": 1, "scroll-padding-block-start": 1, "scroll-padding-block-end": 1, "scroll-padding-bottom": 1, "scroll-padding-inline": 1, "scroll-padding-inline-start": 1, "scroll-padding-inline-end": 1, "scroll-padding-left": 1, "scroll-padding-right": 1, "scroll-padding-top": 1, "scroll-snap-align": 1, "scroll-snap-coordinate": 1, "scroll-snap-destination": 1, "scroll-snap-points-x": 1, "scroll-snap-points-y": 1, "scroll-snap-stop": 1, "scroll-snap-type": 1, "scroll-snap-type-x": 1, "scroll-snap-type-y": 1, "shape-image-threshold": 1, "shape-margin": 1, "shape-outside": 1, "tab-size": 1, "table-layout": 1, "text-align": 1, "text-align-last": 1, "text-combine-upright": 1, "text-decoration": 1, "text-decoration-color": 1, "text-decoration-line": 1, "text-decoration-skip": 1, "text-decoration-skip-ink": 1, "text-decoration-style": 1, "text-decoration-thickness": 1, "text-emphasis": 1, "text-emphasis-color": 1, "text-emphasis-position": 1, "text-emphasis-style": 1, "text-indent": 1, "text-justify": 1, "text-orientation": 1, "text-overflow": 1, "text-rendering": 1, "text-shadow": 1, "text-size-adjust": 1, "text-transform": 1, "text-underline-offset": 1, "text-underline-position": 1, "top": 1, "touch-action": 1, "transform": 1, "transform-box": 1, "transform-origin": 1, "transform-style": 1, "transition": 1, "transition-delay": 1, "transition-duration": 1, "transition-property": 1, "transition-timing-function": 1, "translate": 1, "unicode-bidi": 1, "user-select": 1, "vertical-align": 1, "visibility": 1, "white-space": 1, "widows": 1, "width": 1, "will-change": 1, "word-break": 1, "word-spacing": 1, "word-wrap": 1, "writing-mode": 1, "z-index": 1, "zoom": 1
}

export const reset = `*{margin:0;padding:0;font:inherit;color:inherit;}
*, :after, :before {box-sizing:border-box;flex-shrink:0;}
:root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
html, body {height:100%;}
img, picture, video, canvas, svg {display: block;max-width:100%;}
button {background:none;border:0;cursor:pointer;}
a {text-decoration:none}
table {border-collapse:collapse;border-spacing:0}`

export const RULES:Rules = {

  // -- Color
  "c": (value:string) => `color:${makeColor(value)};`,

  // -- Background Color
  "bg": (value:string) => `background-color:${makeColor(value)};`, // @TODO:url형식이면, background-image만 넣는 것으로 하자.

  // -- Typography
  "font": (value:string) => makeFont(value),
  "font-size": (value:string) => `font-size:${px(value)};`,
  "line-height": (value:string) => `line-height:${+value < 4 ? makeNumber(+value) : px(value)}`,
  "letter-spacing": (value:string) => `letter-spacing:${px(value)};`,
  "word-spacing": (value:string) => `word-spacing:${px(value)};`,

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

  "thin": () => `font-weight:100;`,
  "extra-light": () => `font-weight:200;`,
  "light": () => `font-weight:300;`,
  "regular": () => `font-weight:400;`,
  "medium": () => `font-weight:500;`,
  "semibold": () => `font-weight:600;`,
  "bold": () => `font-weight:700;`,
  "extra-bold": () => `font-weight:800;`,
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


  // Font-Family @TODO:font-stack은 일반적인 스택 만들어 두기...(L)
  "sans-serif": () => `font-family:sans-serif;`,
  "serif": () => `font-family:serif;`,
  "monospace": () => `font-family:menlo,monospace;`,
  "cursive": () => `font-family:cursive;`,
  "fantasy": () => `font-family:fantasy;`,
  "system-ui": () => `font-family:system-ui;`,

  "small-caps": () => `font-variant:small-caps`,
  "lowercase": () => `text-transform:lowercase;`,
  "uppercase": () => `text-transform:uppercase;`,
  "capitalize": () => `text-transform:capitalize;`,


  // Text
  "text-justify": () => `text-align:justify;`,
  "text-center": () => `text-align:center;`,
  "text-right": () => `text-align:right;`,
  "text-left": () => `text-align:left;`,

  "break-all": () => `word-break:break-all;`,
  "break-word": () => `word-break:break-word;overflow-wrap:break-word;`,
  "keep-all": () => `word-break:keep-all;`,

  // @TODO
  // "text-shadow":(value:string) => `text-shadow:${makeSide(value)};`,


  // -- Box-Sizing
  "border-box": () => `box-sizing:border-box`,
  "content-box": () => `box-sizing:content-box`,

  // -- Box-Model
  "w": (value:string) => {
    if (value.includes("~")) {
      const result = []
      const [min, max] = value.split("~")
      min && result.push(`min-width:${px(min)};`)
      max && result.push(`max-width:${px(max)};`)
      return result.join("")
    }
    return (value === "stretch" || value === "fill") ? `align-self:stretch` : `width:${px(value)};`
  },

  "h": (value:string) => {
    if (value.includes("~")) {
      const result = []
      const [min, max] = value.split("~")
      min && result.push(`min-height:${px(min)};`)
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

  // @TODO:교육이 필요하다.
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

  "box-shadow": (value:string) => `box-shadow:${makeValues(value)}`,

  "outline": (value:string) => {
    if (value === "-") return `outline:none;`
    if (value === "none" || value === "unset" || value === "inherit" || value === "initial") return `outline:${value};`
    return `outline:1px solid ${makeColor(value)};`
  },

  "guide": (value = "#4f80ff") => `&, & > * { outline:1px solid ${makeColor(value)};}`,

  // -- Background Image

  // @TODO:background 이미지에 대한 세련된 방법이 필요하다!
  "bg-repeat-x": () => `background-repeat:repeat-x;`,
  "bg-repeat-y": () => `background-repeat:repeat-y;`,
  "bg-no-repeat": () => `background-repeat:no-repeat;`,
  "bg-fixed": () => `background-attachment:fixed;`,
  "bg-scroll": () => `background-attachment:scroll;`,
  "bg-position": (value:string) => `background-position:${value};`,

  "contain": () => `background-size:contain;background-position:center;object-fit:contain;`,
  "cover": () => `background-size:cover;background-position:center;object-fit:cover;`,

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
  "grid": () => "display:grid;",
  "inline-grid": () => "display:inline-grid;",
  "contents": () => "display:contents;",
  "list-item": () => "display:list-item;",

  // -- Flexbox
  "hbox": (value:string) => `display:flex;flex-flow:row;${makeHBox(value)}`,
  "vbox": (value:string) => `display:flex;flex-flow:column;${makeVBox(value)}`,
  "pack": () => `display:flex;align-items:center;justify-content:center;`,
  "hbox(": () => ``,
  "vbox(": () => ``,

  "gap": (value:string) => `gap:${makeSide(value)};`,

  // @NOTE: IE, safari<=13
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

  "flex-grow": (value:string) => `flex-grow:${cssvar(value)};`,
  "flex-shrink": (value:string) => `flex-shrink:${cssvar(value)};`,
  "flex-basis": (value:string) => `flex-basis:${px(value)};`,

  "flex-wrap": () => "flex-wrap:wrap;",
  "flex-wrap-reverse": () => "flex-wrap:wrap-reverse;",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value:string) => `order:${cssvar(value)};`,


  /// -- Overflow

  // OverFlow:@TODO:스크롤바 보여지느냐 아니냐... 보통 auto를 쓴다. 스크롤 바는 생각할게 많네요!! (thank you Linda!)
  "overflow": (value:string) => `overflow:${value};`,
  "overflow-x": (value:string) => `overflow-x:${value};`,
  "overflow-y": (value:string) => `overflow-y:${value};`,

  "clip": () => `overflow:hidden;`,
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

  "vertical-align": (value:string) => `vertical-align:${value}`,
  "vertical-top": () => `vertical-align:top`,

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

  // Scroll Snap -- TBD @TODO:

  // Visibility
  "none": () => `display:none;`,
  "opacity": (value:string) => `opacity:${cssvar(value)};`,
  "invisible": () => `visibility:hidden;`,
  "visible": () => `visibility:visible;`,
  "gone": () => `position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);`,

  // Position
  "layer": (value = "") => {
    const pos = {top: 0, right: 0, bottom: 0, left: 0}
    value.split("+").forEach(v => {
      switch (v) {
        // @ts-ignore
        case "top": {return (delete pos.bottom)}
        // @ts-ignore
        case "right": {return (delete pos.left)}
        // @ts-ignore
        case "bottom": {return (delete pos.top)}
        // @ts-ignore
        case "left": {return (delete pos.right)}
      }
    })
    return `position:absolute;` + Object.keys(pos).map((value:string) => `${value}:0`).join(";")
  },

  "absolute": () => `position:absolute;`,
  "relative": () => `position:relative;`,
  "sticky": () => `position:sticky;`,
  "sticky-top": (value = "0") => `position:sticky;top:${px(value)};`,
  "sticky-right": (value = "0") => `position:sticky;right:${px(value)};`,
  "sticky-bottom": (value = "0") => `position:sticky;bottom:${px(value)};`,
  "sticky-left": (value = "0") => `position:sticky;left:${px(value)};`,
  "fixed": () => `position:fixed;`,
  "static": () => `position:static;`,

  // Position
  "x": (value:string) => `left:${px(value)};`,
  "y": (value:string) => `top:${px(value)};`,
  "z": (value:string) => `z-index:${cssvar(value)};`,
  "top": (value:string) => `top:${px(value)};`,
  "left": (value:string) => `left:${px(value)};`,
  "right": (value:string) => `right:${px(value)};`,
  "bottom": (value:string) => `bottom:${px(value)};`,

  // Interactions
  "user-select-none": () => "user-select:none;",
  "user-select-all": () => "user-select:all;",
  "user-select-auto": () => "user-select:auto;",
  "user-select-text": () => "user-select:text;",

  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",

  "pointer": () => `cursor:pointer;`,
  "grab": () => `&{cursor:grab;} &:active{cursor:grabbing;}`,
  "grabbing": () => `cursor:grabbing;`,
  "cursor": (value:string) => `cursor:${value};`,

  // 에니메이션:transition(transform=100s/opacity=2s)
  "transition": (value:string) => `transition:${makeTransition(value)};`,

  // @TODO:섞을수가 없네? mix transform
  // @TBD: translate(10,10)|rotateX(180deg)|scale(2) 이런식으로 |기호로 묶자!!
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

  // Util
  "ratio": (value:string) => `& {position:relative;} &:before{content:"";display:block;width:100%;padding-top:${makeRatio(value)};} & > * {position:absolute;top:0;left:0;width:100%;height:100%;}`,
  "gpu": () => `transform:translateZ(0.1px);`,

  // etc
  "no-border": () => `border:none;outline:none;`,
  "app-region": (value:string) => `-webkit-app-region:${value};`,
  "content": (value:string) => `content:'${cssvar(value)}'`,
  "clip-path": (value:string) => `clip-path:${cssvar(value)};-webkit-clip-path:${cssvar(value)};`,

  "table-layout-fixed": () => `table-layout:fixed;`,

  // Float & Clear
  "float": (value:string) => `float:${cssvar(value)}`,
  "clear": (value:string) => `clear:${cssvar(value)}`,

  // Filter
  "blur": (value:string) => `filter:blur(${px(value)})`,
  "brightness": (value:string) => `filter:brightness(${cssvar(value)})`,
  "contrast": (value:string) => `filter:contrast(${cssvar(value)})`,
  "drop-shadow": (value:string) => `filter:drop-shadow(${cssvar(value)})`,
  "grayscale": (value:string) => `filter:grayscale(${cssvar(value)})`,
  "hue-rotate": (value:string) => `filter:hue-rotate(${cssvar(value)})`,
  "invert": (value:string) => `filter:invert(${cssvar(value)})`,
  "sepia": (value:string) => `filter:sepia(${cssvar(value)})`,
  "saturate": (value:string) => `filter:saturate(${cssvar(value)})`,

  "backdrop-blur": (value:string) => `backdrop-filter:blur(${px(value)})`,
  "backdrop-brightness": (value:string) => `backdrop-filter:brightness(${cssvar(value)})`,
  "backdrop-contrast": (value:string) => `backdrop-filter:contrast(${cssvar(value)})`,
  "backdrop-drop-shadow": (value:string) => `backdrop-filter:drop-shadow(${cssvar(value)})`,
  "backdrop-grayscale": (value:string) => `backdrop-filter:grayscale(${cssvar(value)})`,
  "backdrop-hue-rotate": (value:string) => `backdrop-filter:hue-rotate(${cssvar(value)})`,
  "backdrop-invert": (value:string) => `backdrop-filter:invert(${cssvar(value)})`,
  "backdrop-sepia": (value:string) => `backdrop-filter:sepia(${cssvar(value)})`,
  "backdrop-saturate": (value:string) => `backdrop-filter:saturate(${cssvar(value)})`,

  // triangle
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
      return `box-shadow: none`
    }

    const blur = (dp == 1 ? 3 : dp * 2)
    const amba = (dp + 10 + (dp / 9.38)) / 100
    const diry = (dp < 10 ? (dp % 2 == 0 ? dp - ((dp / 2) - 1) : (dp - ((dp - 1) / 2))) : dp - 4)
    const dira = (24 - (Math.round(dp / 10))) / 100

    return `box-shadow: 0px ${px(dp)} ${px(blur)} rgba(0, 0, 0, ${amba}), 0px ${px(diry)} ${px(blur)} rgba(0, 0, 0, ${dira})`
  },

  "aspect-ratio": (value:string) => `aspect-ratio:${cssvar(value.replace(/:/g, "/"))}`,
}

// Prefix
// pseudo class
export const PREFIX_PSEUDO_CLASS:PrefixRules = {
  "hover:": {media: `(hover:hover)`, selector: `&:hover, &.\\:hover`},
  "active:": {selector: `html &:active, html &.\\:active`},
  "focus:": {selector: `html &:focus, html &.\\:focus`},
  "focus-visible": {selector: `html &:focus-visible, html &.\\:focus-visible`},
  "focus-within:": {selector: `html &:focus-within, html &.\\:focus-within`},
  "checked:": {selector: `html &:checked, html &.\\:checked`},
  "read-only:": {selector: `html &:read-only, html &.\\:read-only`},
  "enabled:": {selector: `html &:enabled, html &.\\:enabled`},
  "disabled:": {selector: `html body &:disabled, html body &.\\:disabled, html body &[disabled]`},

  "group-hover:": {selector: `.group:hover &, html .group.\\:hover &`},
  "group-active:": {selector: `html .group:active &, html .group.\\:active &`},
  "group-focus:": {selector: `html .group:focus &, html .group.\\:focus &`},
  "group-focus-within:": {selector: `html .group:focus-within &, html .group\\:focus-within`},
  "group-checked:": {selector: `html .group:checked &, html .group.\\:checked &`},
  "group-read-only:": {selector: `html .group:read-only &, html .group.\\:read-only &`},
  "group-enabled:": {selector: `html .group:enabled &, html .group.\\:enabled &`},
  "group-disabled:": {selector: `html body .group:disabled &, html body .group[disabled] &, html body .group.disabled &`},

  "placeholder:": {selector: `&::placeholder`},

  "odd:": {selector: `&:nth-child(2n+1)`},
  "even:": {selector: `&:nth-child(2n)`},

  "first:": {selector: `&:first-child`},
  "last:": {selector: `&:last-child`},
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
  "tablet:": {media: `(min-device-width:768px) and (max-width:1023.98px)`, selector: `html &`},
  "desktop:": {media: `(min-device-width:1024px)`, selector: `html &`},
  "!mobile:": {media: `(min-device-width:768px)`, selector: `html &`},
  "!desktop:": {media: `(max-device-width:1023.98px)`, selector: `html &`},

  // "touch:": {media: `(hover:none)`, selector: `html &`},
  // "!touch:": {media: `(hover:hover)`, selector: `html &`},

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

// selector
export const SELECTOR_PREFIX:Record<string, (selector:string) => string> = {
  ".": (selector:string) => `&${selector}, ${selector} &`,
  ">>": (selector:string) => `& ${selector.slice(2, 0)}`,
  ">": (selector:string) => `&${selector}`,
  "+": (selector:string) => `&${selector}`,
  "[": (selector:string) => `&${selector}`,
}