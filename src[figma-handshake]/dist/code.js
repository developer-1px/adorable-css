var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// ../src[vite-plugin-adorable-css]/src/const.ts
var ALL_PROPERTIES = {
  "--*": 1,
  "-ms-accelerator": 1,
  "-ms-block-progression": 1,
  "-ms-content-zoom-chaining": 1,
  "-ms-content-zooming": 1,
  "-ms-content-zoom-limit": 1,
  "-ms-content-zoom-limit-max": 1,
  "-ms-content-zoom-limit-min": 1,
  "-ms-content-zoom-snap": 1,
  "-ms-content-zoom-snap-points": 1,
  "-ms-content-zoom-snap-type": 1,
  "-ms-filter": 1,
  "-ms-flow-from": 1,
  "-ms-flow-into": 1,
  "-ms-grid-columns": 1,
  "-ms-grid-rows": 1,
  "-ms-high-contrast-adjust": 1,
  "-ms-hyphenate-limit-chars": 1,
  "-ms-hyphenate-limit-lines": 1,
  "-ms-hyphenate-limit-zone": 1,
  "-ms-ime-align": 1,
  "-ms-overflow-style": 1,
  "-ms-scrollbar-3dlight-color": 1,
  "-ms-scrollbar-arrow-color": 1,
  "-ms-scrollbar-base-color": 1,
  "-ms-scrollbar-darkshadow-color": 1,
  "-ms-scrollbar-face-color": 1,
  "-ms-scrollbar-highlight-color": 1,
  "-ms-scrollbar-shadow-color": 1,
  "-ms-scrollbar-track-color": 1,
  "-ms-scroll-chaining": 1,
  "-ms-scroll-limit": 1,
  "-ms-scroll-limit-x-max": 1,
  "-ms-scroll-limit-x-min": 1,
  "-ms-scroll-limit-y-max": 1,
  "-ms-scroll-limit-y-min": 1,
  "-ms-scroll-rails": 1,
  "-ms-scroll-snap-points-x": 1,
  "-ms-scroll-snap-points-y": 1,
  "-ms-scroll-snap-type": 1,
  "-ms-scroll-snap-x": 1,
  "-ms-scroll-snap-y": 1,
  "-ms-scroll-translation": 1,
  "-ms-text-autospace": 1,
  "-ms-touch-select": 1,
  "-ms-user-select": 1,
  "-ms-wrap-flow": 1,
  "-ms-wrap-margin": 1,
  "-ms-wrap-through": 1,
  "-moz-appearance": 1,
  "-moz-binding": 1,
  "-moz-border-bottom-colors": 1,
  "-moz-border-left-colors": 1,
  "-moz-border-right-colors": 1,
  "-moz-border-top-colors": 1,
  "-moz-context-properties": 1,
  "-moz-float-edge": 1,
  "-moz-force-broken-image-icon": 1,
  "-moz-image-region": 1,
  "-moz-orient": 1,
  "-moz-outline-radius": 1,
  "-moz-outline-radius-bottomleft": 1,
  "-moz-outline-radius-bottomright": 1,
  "-moz-outline-radius-topleft": 1,
  "-moz-outline-radius-topright": 1,
  "-moz-stack-sizing": 1,
  "-moz-text-blink": 1,
  "-moz-user-focus": 1,
  "-moz-user-input": 1,
  "-moz-user-modify": 1,
  "-moz-window-dragging": 1,
  "-moz-window-shadow": 1,
  "-webkit-appearance": 1,
  "-webkit-border-before": 1,
  "-webkit-border-before-color": 1,
  "-webkit-border-before-style": 1,
  "-webkit-border-before-width": 1,
  "-webkit-box-reflect": 1,
  "-webkit-line-clamp": 1,
  "-webkit-mask": 1,
  "-webkit-mask-attachment": 1,
  "-webkit-mask-clip": 1,
  "-webkit-mask-composite": 1,
  "-webkit-mask-image": 1,
  "-webkit-mask-origin": 1,
  "-webkit-mask-position": 1,
  "-webkit-mask-position-x": 1,
  "-webkit-mask-position-y": 1,
  "-webkit-mask-repeat": 1,
  "-webkit-mask-repeat-x": 1,
  "-webkit-mask-repeat-y": 1,
  "-webkit-mask-size": 1,
  "-webkit-overflow-scrolling": 1,
  "-webkit-tap-highlight-color": 1,
  "-webkit-text-fill-color": 1,
  "-webkit-text-stroke": 1,
  "-webkit-text-stroke-color": 1,
  "-webkit-text-stroke-width": 1,
  "-webkit-touch-callout": 1,
  "-webkit-user-modify": 1,
  "accent-color": 1,
  "align-content": 1,
  "align-items": 1,
  "align-self": 1,
  "align-tracks": 1,
  "all": 1,
  "animation": 1,
  "animation-delay": 1,
  "animation-direction": 1,
  "animation-duration": 1,
  "animation-fill-mode": 1,
  "animation-iteration-count": 1,
  "animation-name": 1,
  "animation-play-state": 1,
  "animation-timing-function": 1,
  "appearance": 1,
  "aspect-ratio": 1,
  "azimuth": 1,
  "backdrop-filter": 1,
  "backface-visibility": 1,
  "background": 1,
  "background-attachment": 1,
  "background-blend-mode": 1,
  "background-clip": 1,
  "background-color": 1,
  "background-image": 1,
  "background-origin": 1,
  "background-position": 1,
  "background-position-x": 1,
  "background-position-y": 1,
  "background-repeat": 1,
  "background-size": 1,
  "block-overflow": 1,
  "block-size": 1,
  "border": 1,
  "border-block": 1,
  "border-block-color": 1,
  "border-block-style": 1,
  "border-block-width": 1,
  "border-block-end": 1,
  "border-block-end-color": 1,
  "border-block-end-style": 1,
  "border-block-end-width": 1,
  "border-block-start": 1,
  "border-block-start-color": 1,
  "border-block-start-style": 1,
  "border-block-start-width": 1,
  "border-bottom": 1,
  "border-bottom-color": 1,
  "border-bottom-left-radius": 1,
  "border-bottom-right-radius": 1,
  "border-bottom-style": 1,
  "border-bottom-width": 1,
  "border-collapse": 1,
  "border-color": 1,
  "border-end-end-radius": 1,
  "border-end-start-radius": 1,
  "border-image": 1,
  "border-image-outset": 1,
  "border-image-repeat": 1,
  "border-image-slice": 1,
  "border-image-source": 1,
  "border-image-width": 1,
  "border-inline": 1,
  "border-inline-end": 1,
  "border-inline-color": 1,
  "border-inline-style": 1,
  "border-inline-width": 1,
  "border-inline-end-color": 1,
  "border-inline-end-style": 1,
  "border-inline-end-width": 1,
  "border-inline-start": 1,
  "border-inline-start-color": 1,
  "border-inline-start-style": 1,
  "border-inline-start-width": 1,
  "border-left": 1,
  "border-left-color": 1,
  "border-left-style": 1,
  "border-left-width": 1,
  "border-radius": 1,
  "border-right": 1,
  "border-right-color": 1,
  "border-right-style": 1,
  "border-right-width": 1,
  "border-spacing": 1,
  "border-start-end-radius": 1,
  "border-start-start-radius": 1,
  "border-style": 1,
  "border-top": 1,
  "border-top-color": 1,
  "border-top-left-radius": 1,
  "border-top-right-radius": 1,
  "border-top-style": 1,
  "border-top-width": 1,
  "border-width": 1,
  "bottom": 1,
  "box-align": 1,
  "box-decoration-break": 1,
  "box-direction": 1,
  "box-flex": 1,
  "box-flex-group": 1,
  "box-lines": 1,
  "box-ordinal-group": 1,
  "box-orient": 1,
  "box-pack": 1,
  "box-shadow": 1,
  "box-sizing": 1,
  "break-after": 1,
  "break-before": 1,
  "break-inside": 1,
  "caption-side": 1,
  "caret-color": 1,
  "clear": 1,
  "clip": 1,
  "clip-path": 1,
  "color": 1,
  "color-adjust": 1,
  "color-scheme": 1,
  "column-count": 1,
  "column-fill": 1,
  "column-gap": 1,
  "column-rule": 1,
  "column-rule-color": 1,
  "column-rule-style": 1,
  "column-rule-width": 1,
  "column-span": 1,
  "column-width": 1,
  "columns": 1,
  "contain": 1,
  "content": 1,
  "content-visibility": 1,
  "counter-increment": 1,
  "counter-reset": 1,
  "counter-set": 1,
  "cursor": 1,
  "direction": 1,
  "display": 1,
  "empty-cells": 1,
  "filter": 1,
  "flex": 1,
  "flex-basis": 1,
  "flex-direction": 1,
  "flex-flow": 1,
  "flex-grow": 1,
  "flex-shrink": 1,
  "flex-wrap": 1,
  "float": 1,
  "font": 1,
  "font-family": 1,
  "font-feature-settings": 1,
  "font-kerning": 1,
  "font-language-override": 1,
  "font-optical-sizing": 1,
  "font-variation-settings": 1,
  "font-size": 1,
  "font-size-adjust": 1,
  "font-smooth": 1,
  "font-stretch": 1,
  "font-style": 1,
  "font-synthesis": 1,
  "font-variant": 1,
  "font-variant-alternates": 1,
  "font-variant-caps": 1,
  "font-variant-east-asian": 1,
  "font-variant-ligatures": 1,
  "font-variant-numeric": 1,
  "font-variant-position": 1,
  "font-weight": 1,
  "forced-color-adjust": 1,
  "gap": 1,
  "grid": 1,
  "grid-area": 1,
  "grid-auto-columns": 1,
  "grid-auto-flow": 1,
  "grid-auto-rows": 1,
  "grid-column": 1,
  "grid-column-end": 1,
  "grid-column-gap": 1,
  "grid-column-start": 1,
  "grid-gap": 1,
  "grid-row": 1,
  "grid-row-end": 1,
  "grid-row-gap": 1,
  "grid-row-start": 1,
  "grid-template": 1,
  "grid-template-areas": 1,
  "grid-template-columns": 1,
  "grid-template-rows": 1,
  "hanging-punctuation": 1,
  "height": 1,
  "hyphens": 1,
  "image-orientation": 1,
  "image-rendering": 1,
  "image-resolution": 1,
  "ime-mode": 1,
  "initial-letter": 1,
  "initial-letter-align": 1,
  "inline-size": 1,
  "input-security": 1,
  "inset": 1,
  "inset-block": 1,
  "inset-block-end": 1,
  "inset-block-start": 1,
  "inset-inline": 1,
  "inset-inline-end": 1,
  "inset-inline-start": 1,
  "isolation": 1,
  "justify-content": 1,
  "justify-items": 1,
  "justify-self": 1,
  "justify-tracks": 1,
  "left": 1,
  "letter-spacing": 1,
  "line-break": 1,
  "line-clamp": 1,
  "line-height": 1,
  "line-height-step": 1,
  "list-style": 1,
  "list-style-image": 1,
  "list-style-position": 1,
  "list-style-type": 1,
  "margin": 1,
  "margin-block": 1,
  "margin-block-end": 1,
  "margin-block-start": 1,
  "margin-bottom": 1,
  "margin-inline": 1,
  "margin-inline-end": 1,
  "margin-inline-start": 1,
  "margin-left": 1,
  "margin-right": 1,
  "margin-top": 1,
  "margin-trim": 1,
  "mask": 1,
  "mask-border": 1,
  "mask-border-mode": 1,
  "mask-border-outset": 1,
  "mask-border-repeat": 1,
  "mask-border-slice": 1,
  "mask-border-source": 1,
  "mask-border-width": 1,
  "mask-clip": 1,
  "mask-composite": 1,
  "mask-image": 1,
  "mask-mode": 1,
  "mask-origin": 1,
  "mask-position": 1,
  "mask-repeat": 1,
  "mask-size": 1,
  "mask-type": 1,
  "masonry-auto-flow": 1,
  "math-style": 1,
  "max-block-size": 1,
  "max-height": 1,
  "max-inline-size": 1,
  "max-lines": 1,
  "max-width": 1,
  "min-block-size": 1,
  "min-height": 1,
  "min-inline-size": 1,
  "min-width": 1,
  "mix-blend-mode": 1,
  "object-fit": 1,
  "object-position": 1,
  "offset": 1,
  "offset-anchor": 1,
  "offset-distance": 1,
  "offset-path": 1,
  "offset-position": 1,
  "offset-rotate": 1,
  "opacity": 1,
  "order": 1,
  "orphans": 1,
  "outline": 1,
  "outline-color": 1,
  "outline-offset": 1,
  "outline-style": 1,
  "outline-width": 1,
  "overflow": 1,
  "overflow-anchor": 1,
  "overflow-block": 1,
  "overflow-clip-box": 1,
  "overflow-clip-margin": 1,
  "overflow-inline": 1,
  "overflow-wrap": 1,
  "overflow-x": 1,
  "overflow-y": 1,
  "overscroll-behavior": 1,
  "overscroll-behavior-block": 1,
  "overscroll-behavior-inline": 1,
  "overscroll-behavior-x": 1,
  "overscroll-behavior-y": 1,
  "padding": 1,
  "padding-block": 1,
  "padding-block-end": 1,
  "padding-block-start": 1,
  "padding-bottom": 1,
  "padding-inline": 1,
  "padding-inline-end": 1,
  "padding-inline-start": 1,
  "padding-left": 1,
  "padding-right": 1,
  "padding-top": 1,
  "page-break-after": 1,
  "page-break-before": 1,
  "page-break-inside": 1,
  "paint-order": 1,
  "perspective": 1,
  "perspective-origin": 1,
  "place-content": 1,
  "place-items": 1,
  "place-self": 1,
  "pointer-events": 1,
  "position": 1,
  "quotes": 1,
  "resize": 1,
  "right": 1,
  "rotate": 1,
  "row-gap": 1,
  "ruby-align": 1,
  "ruby-merge": 1,
  "ruby-position": 1,
  "scale": 1,
  "scrollbar-color": 1,
  "scrollbar-gutter": 1,
  "scrollbar-width": 1,
  "scroll-behavior": 1,
  "scroll-margin": 1,
  "scroll-margin-block": 1,
  "scroll-margin-block-start": 1,
  "scroll-margin-block-end": 1,
  "scroll-margin-bottom": 1,
  "scroll-margin-inline": 1,
  "scroll-margin-inline-start": 1,
  "scroll-margin-inline-end": 1,
  "scroll-margin-left": 1,
  "scroll-margin-right": 1,
  "scroll-margin-top": 1,
  "scroll-padding": 1,
  "scroll-padding-block": 1,
  "scroll-padding-block-start": 1,
  "scroll-padding-block-end": 1,
  "scroll-padding-bottom": 1,
  "scroll-padding-inline": 1,
  "scroll-padding-inline-start": 1,
  "scroll-padding-inline-end": 1,
  "scroll-padding-left": 1,
  "scroll-padding-right": 1,
  "scroll-padding-top": 1,
  "scroll-snap-align": 1,
  "scroll-snap-coordinate": 1,
  "scroll-snap-destination": 1,
  "scroll-snap-points-x": 1,
  "scroll-snap-points-y": 1,
  "scroll-snap-stop": 1,
  "scroll-snap-type": 1,
  "scroll-snap-type-x": 1,
  "scroll-snap-type-y": 1,
  "shape-image-threshold": 1,
  "shape-margin": 1,
  "shape-outside": 1,
  "tab-size": 1,
  "table-layout": 1,
  "text-align": 1,
  "text-align-last": 1,
  "text-combine-upright": 1,
  "text-decoration": 1,
  "text-decoration-color": 1,
  "text-decoration-line": 1,
  "text-decoration-skip": 1,
  "text-decoration-skip-ink": 1,
  "text-decoration-style": 1,
  "text-decoration-thickness": 1,
  "text-emphasis": 1,
  "text-emphasis-color": 1,
  "text-emphasis-position": 1,
  "text-emphasis-style": 1,
  "text-indent": 1,
  "text-justify": 1,
  "text-orientation": 1,
  "text-overflow": 1,
  "text-rendering": 1,
  "text-shadow": 1,
  "text-size-adjust": 1,
  "text-transform": 1,
  "text-underline-offset": 1,
  "text-underline-position": 1,
  "top": 1,
  "touch-action": 1,
  "transform": 1,
  "transform-box": 1,
  "transform-origin": 1,
  "transform-style": 1,
  "transition": 1,
  "transition-delay": 1,
  "transition-duration": 1,
  "transition-property": 1,
  "transition-timing-function": 1,
  "translate": 1,
  "unicode-bidi": 1,
  "user-select": 1,
  "vertical-align": 1,
  "visibility": 1,
  "white-space": 1,
  "widows": 1,
  "width": 1,
  "will-change": 1,
  "word-break": 1,
  "word-spacing": 1,
  "word-wrap": 1,
  "writing-mode": 1,
  "z-index": 1,
  "zoom": 1
};

// ../src[vite-plugin-adorable-css]/src/cssEscape.ts
var cssEscape = (string) => {
  const length = string.length;
  const firstCodeUnit = string.charCodeAt(0);
  let index2 = -1;
  let codeUnit;
  let result = "";
  while (++index2 < length) {
    codeUnit = string.charCodeAt(index2);
    if (codeUnit == 0) {
      result += "\uFFFD";
      continue;
    }
    if (codeUnit >= 1 && codeUnit <= 31 || codeUnit == 127 || index2 == 0 && codeUnit >= 48 && codeUnit <= 57 || index2 == 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit == 45) {
      result += "\\" + codeUnit.toString(16) + " ";
      continue;
    }
    if (index2 == 0 && length == 1 && codeUnit == 45) {
      result += "\\" + string.charAt(index2);
      continue;
    }
    if (codeUnit >= 128 || codeUnit == 45 || codeUnit == 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) {
      result += string.charAt(index2);
      continue;
    }
    result += "\\" + string.charAt(index2);
  }
  return result;
};

// ../src[vite-plugin-adorable-css]/src/makeValue.ts
var makeNumber = (num) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0";
var cssvar = (value) => String(value).startsWith("--") ? `var(${value})` : value;
var px = (value) => {
  if (value === void 0 || value === null)
    throw new Error("px: value is undefined");
  if (value === 0 || value === "0")
    return 0;
  if (String(value).startsWith("--"))
    return cssvar("" + value);
  const [n, m] = String(value).split("/");
  if (+n > 0 && +m > 0)
    return makeNumber(+n / +m * 100) + "%";
  if (/.[-+*/]/.test(String(value))) {
    return "calc(" + String(value).replace(/[-+]/g, (a) => ` ${a} `) + ")";
  }
  return +value === +value ? value + "px" : value;
};
var percentToEm = (value) => {
  if (value.endsWith("%"))
    return +value.slice(0, -1) / 100 + "em";
  return px(value);
};
var makeHEX = (value) => {
  const [rgb, a] = value.split(".");
  if (a && rgb.length === 4)
    return "rgba(" + rgb.slice(1).split("").map((value2) => parseInt(value2 + value2, 16)).join(",") + ",." + a + ")";
  if (a)
    return "rgba(" + [rgb.slice(1, 3), rgb.slice(3, 5), rgb.slice(5, 7)].map((value2) => parseInt(value2, 16)).join(",") + ",." + a + ")";
  return value;
};
var makeHLS = (value) => {
  const [h, s, l, a] = value.split(",");
  return "hsl" + (a ? "a" : "") + "(" + [h, s, l, a].filter(Boolean).map(cssvar).join() + ")";
};
var makeRGB = (value) => {
  const [r, g, b, a] = value.split(",");
  return "rgb" + (a ? "a" : "") + "(" + [r, g, b, a].filter(Boolean).map(cssvar).join() + ")";
};
var makeColor = (value = "transparent") => {
  if (value === "-")
    return "transparent";
  if (value === "transparent")
    return "transparent";
  if (value.startsWith("--"))
    return `var(${value})`;
  if (value.split(",").every((v) => parseFloat(v) >= 0)) {
    if (value.includes("%")) {
      return makeHLS(value);
    }
    return makeRGB(value);
  }
  return value;
};
var makeFont = (value) => {
  if (!value)
    throw new Error("makeFont: value is undefined");
  return (value || "").split("/").map((value2, index2) => {
    if (value2 === "-")
      return;
    if (String(value2).startsWith("--"))
      return `var(${value2})`;
    switch (index2) {
      case 0: {
        return `font-size:${px(value2)}`;
      }
      case 1: {
        return `line-height:${+value2 < 4 ? makeNumber(+value2) : px(value2)}`;
      }
      case 2: {
        return `letter-spacing:${px(percentToEm(value2))}`;
      }
    }
  }).filter(Boolean).join(";");
};
var makeFontFamily = (value) => `font-family:${value};font-family:var(--${value}, ${value});`;
var makeBorder = (value) => {
  if (!value || value === "none" || value === "0" || value === "-")
    return "none";
  const borderStyles = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
  let hasWidth = false;
  let hasStyle = false;
  const values = value.split("/").map((value2) => {
    if (parseInt(value2) > 0) {
      hasWidth = true;
      return value2.includes(",") ? makeColor(value2) : px(value2);
    }
    if (borderStyles.includes(value2)) {
      hasStyle = true;
      return value2;
    }
    return makeColor(value2);
  });
  if (!hasWidth)
    values.unshift("1px");
  if (!hasStyle)
    values.unshift("solid");
  return values.join(" ");
};
var makeValues = (value, project = cssvar) => {
  if (String(value).startsWith("--"))
    return `var(${value})`;
  return value && value.split("/").map(project).join(" ");
};
var makeCommaValues = (value, project = (a) => a) => {
  if (String(value).startsWith("--"))
    return `var(${value})`;
  return value && value.split(",").map(project).join(",");
};
var makeSide = (value) => makeValues(value, px);
var makeRatio = (value) => {
  const [w, h] = value.split(":");
  return (+h / +w * 100).toFixed(2) + "%";
};
var makeHBox = (value = "") => {
  const values = value.split("+");
  const result = values.map((v) => {
    switch (v) {
      case "top": {
        return "align-items:flex-start;";
      }
      case "bottom": {
        return "align-items:flex-end;";
      }
      case "fill": {
        return "align-items:stretch;";
      }
      case "stretch": {
        return "align-items:stretch;";
      }
      case "left": {
        return values.includes("reverse") ? "justify-content:flex-end;" : "";
      }
      case "right": {
        return !values.includes("reverse") ? "justify-content:flex-end;" : "";
      }
      case "reverse": {
        return "flex-direction:row-reverse;";
      }
      case "center": {
        return "justify-content:center;";
      }
    }
    return "";
  });
  if (!result.find((r) => r.startsWith("align-items:"))) {
    result.unshift("align-items:center;");
  }
  return [...new Set(result)].join("");
};
var makeVBox = (value = "") => {
  const values = value.split("+");
  const result = values.map((v) => {
    switch (v) {
      case "left": {
        return "align-items:flex-start;";
      }
      case "center": {
        return "align-items:center;";
      }
      case "right": {
        return "align-items:flex-end;";
      }
      case "fill": {
        return "align-items:stretch;";
      }
      case "top": {
        return values.includes("reverse") ? "justify-content:flex-end;" : "";
      }
      case "middle": {
        return "justify-content:center;";
      }
      case "bottom": {
        return !values.includes("reverse") ? "justify-content:flex-end;" : "";
      }
      case "reverse": {
        return "flex-direction:column-reverse;";
      }
    }
    return "";
  });
  if (!result.find((r) => r.startsWith("align-items:"))) {
    result.unshift("align-items:stretch;");
  }
  return [...new Set(result)].join("");
};
var makeTransition = (value) => {
  if (!/\d/.test(value))
    return value;
  if (!value.includes("="))
    return `all ${value}`;
  return value.split("/").map((item) => item.replace("=", " ")).join(",");
};

// ../src[vite-plugin-adorable-css]/src/rules.ts
var RULES = {
  "c": (value) => `color:${makeColor(value)};`,
  "font": (value) => makeFont(value),
  "font-size": (value) => `font-size:${px(value)};`,
  "line-height": (value) => `line-height:${+value < 4 ? makeNumber(+value) : px(value)}`,
  "letter-spacing": (value) => `letter-spacing:${percentToEm(value)};`,
  "word-spacing": (value) => `word-spacing:${px(value)};`,
  "sans-serif": () => makeFontFamily("sans-serif"),
  "serif": () => makeFontFamily("serif"),
  "cursive": () => makeFontFamily("cursive"),
  "fantasy": () => makeFontFamily("fantasy"),
  "system-ui": () => makeFontFamily("system-ui"),
  "monospace": (value) => {
    if (value === "number")
      return `font-variant-numeric:tabular-nums;`;
    return makeFontFamily("monospace");
  },
  "AppleSD": () => `font-family:"Apple SD Gothic Neo";`,
  "Roboto": () => makeFontFamily("Roboto"),
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
  "thicker": (value = "1") => `text-shadow:0 0 ${px(value)} currentColor;`,
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
  "text-justify": () => `text-align:justify;`,
  "text-center": () => `text-align:center;`,
  "text-right": () => `text-align:right;`,
  "text-left": () => `text-align:left;`,
  "vertical-top": () => `vertical-align:top;`,
  "vertical-middle": () => `vertical-align:middle;`,
  "vertical-bottom": () => `vertical-align:bottom;`,
  "sub": () => `vertical-align: sub;`,
  "super": () => `vertical-align: super;`,
  "text-top": () => `vertical-align: text-top;`,
  "text-bottom": () => `vertical-align: text-bottom;`,
  "break-all": () => `word-break:break-all;`,
  "break-word": () => `overflow-wrap:break-word;`,
  "keep-all": () => `word-break:keep-all;`,
  "hyphens": (value = "auto") => `hyphens: ${value};`,
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
  "grid": (value) => {
    const css = ["display:grid;"];
    if (+value === +value)
      css.push(`grid-template-columns:repeat(${value},1fr);`);
    else if (value)
      css.push(`grid-template-columns:${value};`);
    return css.join("");
  },
  "inline-grid": () => "display:inline-grid;",
  "contents": () => "display:contents;",
  "list-item": () => "display:list-item;",
  "hbox": (value = "") => `display:flex;flex-flow:row;${makeHBox(value)}`,
  "vbox": (value = "") => `display:flex;flex-flow:column;${makeVBox(value)}`,
  "pack": () => `display:flex;align-items:center;justify-content:center;`,
  "hbox(": () => ``,
  "vbox(": () => ``,
  "subbox": () => `display:flex;flex-flow:inherit;align-items:inherit;justify-content:inherit;`,
  "gap": (value) => `gap:${makeSide(value)};grid-gap:${makeSide(value)};`,
  "hgap": (value) => `&>*+* {margin-left:${px(value)};}`,
  "hgap-reverse": (value) => `&>*+* {margin-right:${px(value)};}`,
  "vgap": (value) => `&>*+* {margin-top:${px(value)};}`,
  "vgap-reverse": (value) => `&>*+* {margin-bottom:${px(value)};}`,
  "space-between": () => `justify-content:space-between;`,
  "space-around": () => `justify-content:space-around;`,
  "space-evenly": () => `justify-content:space-evenly;`,
  "flex": (value = "1") => `flex:${makeValues(value)};`,
  "space": (value) => `[class*="hbox"]>& {width:${px(value)};} [class*="vbox"]>& {height:${px(value)};}`,
  "flex-grow": (value = "1") => `flex-grow:${cssvar(value)};`,
  "flex-shrink": (value = "1") => `flex-shrink:${cssvar(value)};`,
  "flex-basis": (value) => `flex-basis:${px(value)};`,
  "flex-wrap": () => "&{flex-wrap:wrap;}&>*{max-width:100%;max-height:100%;}",
  "flex-wrap-reverse": () => "&{flex-wrap:wrap-reverse;}&>*{max-width:100%;max-height:100%;}",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value) => `order:${cssvar(value)};`,
  "border-box": () => `box-sizing:border-box`,
  "content-box": () => `box-sizing:content-box`,
  "w": (value) => {
    if (value.includes("~")) {
      const result = [];
      const [min, max] = value.split("~");
      min && result.push(`min-width:${px(min)};`);
      max && result.push(`max-width:${px(max)};`);
      return result.join("");
    }
    return value === "stretch" || value === "fill" ? `align-self:stretch` : `width:${px(value)};`;
  },
  "h": (value) => {
    if (value.includes("~")) {
      const result = [];
      const [min, max] = value.split("~");
      min && result.push(`min-height:${px(min)};`);
      max && result.push(`max-height:${px(max)};`);
      return result.join("");
    }
    return value === "stretch" || value === "fill" ? `align-self:stretch` : `height:${px(value)};`;
  },
  "m": (value) => `margin:${makeSide(value)};`,
  "mt": (value) => `margin-top:${px(value)};`,
  "mr": (value) => `margin-right:${px(value)};`,
  "mb": (value) => `margin-bottom:${px(value)};`,
  "ml": (value) => `margin-left:${px(value)};`,
  "p": (value) => `padding:${makeSide(value)};`,
  "pt": (value) => `padding-top:${px(value)};`,
  "pr": (value) => `padding-right:${px(value)};`,
  "pb": (value) => `padding-bottom:${px(value)};`,
  "pl": (value) => `padding-left:${px(value)};`,
  "b": (value) => `border:${makeBorder(value)};`,
  "bt": (value) => `border-top:${makeBorder(value)};`,
  "br": (value) => `border-right:${makeBorder(value)};`,
  "bb": (value) => `border-bottom:${makeBorder(value)};`,
  "bl": (value) => `border-left:${makeBorder(value)};`,
  "bw": (value) => `border-width:${px(value)};`,
  "btw": (value) => `border-top-width:${px(value)};`,
  "brw": (value) => `border-right-width:${px(value)};`,
  "bbw": (value) => `border-bottom-width:${px(value)};`,
  "blw": (value) => `border-left-width:${px(value)};`,
  "bs": (value) => `border-style:${cssvar(value)};`,
  "bts": (value) => `border-top-style:${cssvar(value)};`,
  "brs": (value) => `border-right-style:${cssvar(value)};`,
  "bbs": (value) => `border-bottom-style:${cssvar(value)};`,
  "bls": (value) => `border-left-style:${cssvar(value)};`,
  "bc": (value) => `border-color:${makeColor(value)};`,
  "btc": (value) => `border-top-color:${makeColor(value)};`,
  "brc": (value) => `border-right-color:${makeColor(value)};`,
  "bbc": (value) => `border-bottom-color:${makeColor(value)};`,
  "blc": (value) => `border-left-color:${makeColor(value)};`,
  "r": (value) => `border-radius:${makeSide(value)};`,
  "rt": (value) => `border-top-left-radius:${px(value)};border-top-right-radius:${px(value)};`,
  "rr": (value) => `border-top-right-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  "rb": (value) => `border-bottom-left-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  "rl": (value) => `border-top-left-radius:${px(value)};border-bottom-left-radius:${px(value)};`,
  "rtl": (value) => `border-top-left-radius:${px(value)};`,
  "rtr": (value) => `border-top-right-radius:${px(value)};`,
  "rbr": (value) => `border-bottom-right-radius:${px(value)};`,
  "rbl": (value) => `border-bottom-left-radius:${px(value)};`,
  "ring": (value) => {
    const [color, size = 1] = value.split("/");
    return `box-shadow:0 0 0 ${px(size)} ${makeColor(color)};`;
  },
  "box-shadow": (value) => `box-shadow:${makeValues(value)}`,
  "outline": (value) => {
    if (value === "-")
      return `outline:none;`;
    if (value === "none" || value === "unset" || value === "inherit" || value === "initial")
      return `outline:${value};`;
    return `outline:1px solid ${makeColor(value)};`;
  },
  "guide": (value = "#4f80ff") => `&,&>*{ outline:1px solid ${makeColor(value)};}`,
  "bg": (value) => {
    if (value.startsWith("linear-gradient"))
      return `background:${value.replace(/\//g, " ")};`;
    if (value.startsWith("radial-gradient"))
      return `background:${value.replace(/\//g, " ")};`;
    if (value.startsWith("url"))
      return `background-image:${value};`;
    if (/^(http|[./])/.test(value))
      return `background-image:url(${value});`;
    if (value === "transparent")
      return `background-color:transparent;`;
    return `background-color:${makeColor(value)};`;
  },
  "bg-repeat-x": () => `background-repeat:repeat-x;`,
  "bg-repeat-y": () => `background-repeat:repeat-y;`,
  "bg-no-repeat": () => `background-repeat:no-repeat;`,
  "bg-fixed": () => `background-attachment:fixed;`,
  "bg-scroll": () => `background-attachment:scroll;`,
  "bg-position": (value) => `background-position:${value};`,
  "contain": () => `background-size:contain;background-position:center;background-repeat:no-repeat;object-fit:contain;`,
  "cover": () => `background-size:cover;background-position:center;background-repeat:no-repeat;object-fit:cover;`,
  "overflow": (value) => `overflow:${value};`,
  "overflow-x": (value) => `overflow-x:${value};`,
  "overflow-y": (value) => `overflow-y:${value};`,
  "clip": () => `overflow:hidden;`,
  "scroll": () => `overflow:auto;`,
  "scroll-x": () => `overflow-x:auto;overflow-y:hidden;`,
  "scroll-y": () => `overflow-x:hidden;overflow-y:auto;`,
  "scrollbar": () => `&{overflow:scroll;}&.scroll{overflow:scroll;}&.scroll-x{overflow-x:scroll;}&.scroll-y{overflow-y:scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar{display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal{display:none;}`,
  "overscroll": (value) => `overscroll-behavior:${value};`,
  "overscroll-x": (value) => `overscroll-behavior-x:${value};`,
  "overscroll-y": (value) => `overscroll-behavior-y:${value};`,
  "no-bouncing": () => "",
  "no-overscroll": () => "",
  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "nowrap": () => `white-space:nowrap;flex-shrink:0;`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;`,
  "line-clamp": (value) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "max-lines": (value) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "text-indent": (value) => `text-indent:${px(value)};`,
  "layer": (value = "") => {
    const pos = { top: 0, right: 0, bottom: 0, left: 0 };
    value.split("+").forEach((v) => {
      switch (v) {
        case "top": {
          return delete pos.bottom;
        }
        case "right": {
          return delete pos.left;
        }
        case "bottom": {
          return delete pos.top;
        }
        case "left": {
          return delete pos.right;
        }
      }
    });
    return `position:absolute;` + Object.keys(pos).map((value2) => `${value2}:0;`).join("");
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
  "x": (value) => `left:${px(value)};`,
  "y": (value) => `top:${px(value)};`,
  "z": (value) => `z-index:${cssvar(value)};`,
  "top": (value) => `top:${px(value)};`,
  "left": (value) => `left:${px(value)};`,
  "right": (value) => `right:${px(value)};`,
  "bottom": (value) => `bottom:${px(value)};`,
  "none": () => `display:none;`,
  "hidden": () => `visibility:hidden;`,
  "invisible": () => `visibility:hidden;`,
  "gone": () => `position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);`,
  "opacity": (value) => `opacity:${cssvar(value)};`,
  "visible": () => `visibility:visible;`,
  "pointer": () => `cursor:pointer;`,
  "grab": () => `&{cursor:grab;}&:active{cursor:grabbing;}`,
  "grabbing": () => `cursor:grabbing;`,
  "cursor": (value) => `cursor:${value};`,
  "user-select-none": () => "user-select:none;-webkit-user-select:none;",
  "user-select-all": () => "user-select:all;-webkit-user-select:all;",
  "user-select-auto": () => "user-select:auto;-webkit-user-select:auto;",
  "user-select-text": () => "user-select:text;-webkit-user-select:text;",
  "user-select": (value) => `user-select:${cssvar(value)};-webkit-user-select:${cssvar(value)};`,
  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",
  "transition": (value) => `transition:${makeTransition(value)};`,
  "translate": (value) => `transform:translate(${makeCommaValues(value)});`,
  "translateX": (value) => `transform:translateX(${cssvar(value)});`,
  "translateY": (value) => `transform:translateY(${cssvar(value)});`,
  "translateZ": (value) => `transform:translateZ(${cssvar(value)});`,
  "translate3d": (value) => `transform:translate3d(${makeCommaValues(value)});`,
  "rotate": (value) => `transform:rotate(${makeCommaValues(value)});`,
  "rotateX": (value) => `transform:rotateX(${cssvar(value)});`,
  "rotateY": (value) => `transform:rotateY(${cssvar(value)});`,
  "rotateZ": (value) => `transform:rotateZ(${cssvar(value)});`,
  "rotate3d": (value) => `transform:rotateZ(${makeCommaValues(value)});`,
  "scale": (value) => `transform:scale(${makeCommaValues(value)});`,
  "scaleX": (value) => `transform:scaleX(${makeCommaValues(value)});`,
  "scaleY": (value) => `transform:scaleY(${makeCommaValues(value)});`,
  "scaleZ": (value) => `transform:scaleZ(${makeCommaValues(value)});`,
  "ratio": (value) => `&{position:relative;}&:before{content:"";display:block;width:100%;padding-top:${makeRatio(value)};}&>*{position:absolute;top:0;left:0;width:100%;height:100%;}`,
  "gpu": () => `transform:translateZ(0.1px);`,
  "no-border": () => `border:none;outline:none;`,
  "app-region": (value) => `-webkit-app-region:${value};`,
  "content": (value = "''") => `content:${cssvar(value)}`,
  "clip-path": (value) => `clip-path:${cssvar(value)};-webkit-clip-path:${cssvar(value)};`,
  "table-layout-fixed": () => `table-layout:fixed;`,
  "table-layout-auto": () => `table-layout:auto;`,
  "aspect-ratio": (value) => `aspect-ratio:${cssvar(value.replace(/:/g, "/"))}`,
  "float": (value) => `float:${cssvar(value)};`,
  "clear": (value) => `clear:${cssvar(value)};`,
  "blur": (value) => `filter:blur(${px(value)})`,
  "brightness": (value) => `filter:brightness(${cssvar(value)})`,
  "contrast": (value) => `filter:contrast(${cssvar(value)})`,
  "drop-shadow": (value) => `filter:drop-shadow(${cssvar(value)})`,
  "grayscale": (value) => `filter:grayscale(${cssvar(value)})`,
  "hue-rotate": (value) => `filter:hue-rotate(${cssvar(value)})`,
  "invert": (value) => `filter:invert(${cssvar(value)})`,
  "sepia": (value) => `filter:sepia(${cssvar(value)})`,
  "saturate": (value) => `filter:saturate(${cssvar(value)})`,
  "backdrop-blur": (value) => `backdrop-filter:blur(${px(value)})`,
  "backdrop-brightness": (value) => `backdrop-filter:brightness(${cssvar(value)})`,
  "backdrop-contrast": (value) => `backdrop-filter:contrast(${cssvar(value)})`,
  "backdrop-drop-shadow": (value) => `backdrop-filter:drop-shadow(${cssvar(value)})`,
  "backdrop-grayscale": (value) => `backdrop-filter:grayscale(${cssvar(value)})`,
  "backdrop-hue-rotate": (value) => `backdrop-filter:hue-rotate(${cssvar(value)})`,
  "backdrop-invert": (value) => `backdrop-filter:invert(${cssvar(value)})`,
  "backdrop-sepia": (value) => `backdrop-filter:sepia(${cssvar(value)})`,
  "backdrop-saturate": (value) => `backdrop-filter:saturate(${cssvar(value)})`,
  "triangle": (value) => {
    const [direction, size, angle = 0] = value.split("/");
    const bd = ["top", "right", "bottom", "left", "top", "right", "bottom", "left"];
    const bdr = bd.slice(bd.indexOf(direction));
    const height = 0.5;
    let css = `width:0;height:0;border:0 solid transparent;`;
    css += "border-" + bdr[1] + "-width:" + Math.round(+size * (-angle + 1) / 2) + "px;";
    css += "border-" + bdr[3] + "-width:" + Math.round(+size * (+angle + 1) / 2) + "px;";
    css += "border-" + bdr[2] + ":" + Math.round(+size * height) + "px solid black;";
    return css;
  },
  "elevation": (value) => {
    const dp = +value;
    if (!dp) {
      return `box-shadow:none;`;
    }
    const blur = dp == 1 ? 3 : dp * 2;
    const amba = (dp + 10 + dp / 9.38) / 100;
    const diry = dp < 10 ? dp % 2 == 0 ? dp - (dp / 2 - 1) : dp - (dp - 1) / 2 : dp - 4;
    const dira = (24 - Math.round(dp / 10)) / 100;
    return `box-shadow: 0px ${px(dp)} ${px(blur)} rgba(0,0,0,${amba}),0px ${px(diry)} ${px(blur)} rgba(0,0,0,${dira});`;
  }
};
var PREFIX_PSEUDO_CLASS = {
  "hover:": { media: `(hover:hover)`, selector: `&:hover,&.\\:hover` },
  "active:": { selector: `html &:active,html &.\\:active` },
  "focus:": { selector: `html &:focus,html &.\\:focus` },
  "focus-visible": { selector: `html &:focus-visible,html &.\\:focus-visible` },
  "focus-within:": { selector: `html &:focus-within,html &.\\:focus-within` },
  "checked:": { selector: `html &:checked,html &.\\:checked` },
  "read-only:": { selector: `html &:read-only,html &.\\:read-only` },
  "enabled:": { selector: `html &:enabled,html &.\\:enabled` },
  "disabled:": { selector: `html body &:disabled,html body &.\\:disabled,html body &[disabled]` },
  "group-hover:": { selector: `.group:hover &,html .group.\\:hover &` },
  "group-active:": { selector: `html .group:active &,html .group.\\:active &` },
  "group-focus:": { selector: `html .group:focus &,html .group.\\:focus &` },
  "group-focus-within:": { selector: `html .group:focus-within &,html .group\\:focus-within` },
  "group-checked:": { selector: `html .group:checked &,html .group.\\:checked &` },
  "group-read-only:": { selector: `html .group:read-only &,html .group.\\:read-only &` },
  "group-enabled:": { selector: `html .group:enabled &,html .group.\\:enabled &` },
  "group-disabled:": { selector: `html body .group:disabled &,html body .group[disabled] &,html body .group.disabled &` },
  "placeholder:": { selector: `&::placeholder` },
  "odd:": { selector: `&:nth-child(2n+1)` },
  "even:": { selector: `&:nth-child(2n)` },
  "first:": { selector: `&:first-child` },
  "last:": { selector: `&:last-child` },
  "after:": { selector: `&::after` },
  "before:": { selector: `&::before` },
  "selection::": { selector: `&::selection,& *::selection` }
};
var PREFIX_MEDIA_QUERY = {
  "sm:": { media: `(min-width:480px)`, selector: `html &` },
  "md:": { media: `(min-width:768px)`, selector: `html &` },
  "lg:": { media: `(min-width:1024px)`, selector: `html &` },
  "xl:": { media: `(min-width:1280px)`, selector: `html &` },
  "sm~:": { media: `(min-width:480px)`, selector: `html &` },
  "md~:": { media: `(min-width:768px)`, selector: `html &` },
  "lg~:": { media: `(min-width:1024px)`, selector: `html &` },
  "xl~:": { media: `(min-width:1280px)`, selector: `html &` },
  "~sm:": { media: `(max-width:479.98px)`, selector: `html &` },
  "~md:": { media: `(max-width:767.98px)`, selector: `html &` },
  "~lg:": { media: `(max-width:1023.98px)`, selector: `html &` },
  "~xl:": { media: `(max-width:1279.98px)`, selector: `html &` },
  "mobile:": { media: `(max-device-width:767.98px)`, selector: `html &` },
  "tablet:": { media: `(min-device-width:768px) and (max-device-width:1023.98px)`, selector: `html &` },
  "desktop:": { media: `(min-device-width:1024px)`, selector: `html &` },
  "!mobile:": { media: `(min-device-width:768px)`, selector: `html &` },
  "!desktop:": { media: `(max-device-width:1023.98px)`, selector: `html &` },
  "touch:": { media: `(max-device-width:1023.98px)`, selector: `html &` },
  "!touch:": { media: `(min-device-width:1024px)`, selector: `html &` },
  "portrait:": { media: `(orientation:portrait)`, selector: `html &` },
  "landscape:": { media: `(orientation:landscape)`, selector: `html &` },
  "print:": { media: `print`, selector: `html &` },
  "screen:": { media: `screen`, selector: `html &` },
  "speech:": { media: `speech`, selector: `html &` },
  "dark:": { selector: `html.dark &` }
};
var AT_RULE = {
  "@w": (ident, tokens2) => {
    var _a, _b;
    if (((_a = tokens2[2]) == null ? void 0 : _a.value) !== "(" || ((_b = tokens2[tokens2.length - 1]) == null ? void 0 : _b.value) !== ")") {
      throw Error("invalid syntax!");
    }
    const value = tokens2.slice(3, -1).map((t) => t.value).join("");
    if (!value.includes("~")) {
      throw Error("invalid syntax! required '~'.");
    }
    let [min, max] = value.split("~");
    if (min)
      min = `(min-width:${px(+min)})`;
    if (max)
      max = `(max-width:${px(+max - 0.02)})`;
    const rule = [min, max].filter(Boolean).join(" and ");
    return { media: ` only screen and ${rule}`, selector: `html &` };
  }
};
var PREFIX_SELECTOR = {
  ">>": (selector) => `& ${selector.slice(2)}`,
  ".": (selector) => `&${selector},${selector} &`,
  "[": (selector) => `&${selector},${selector} &`,
  ">": (selector) => `&${selector}`,
  "+": (selector) => `&${selector}`,
  "~": (selector) => `&${selector}`,
  "#": (selector) => `&${selector}`
};

// ../src[vite-plugin-adorable-css]/src/atomizer.ts
var PREFIX_RULES = __spreadValues(__spreadValues({}, PREFIX_PSEUDO_CLASS), PREFIX_MEDIA_QUERY);
var parseAtoms = (code) => {
  let lastIndex = 0;
  const atoms = /* @__PURE__ */ new Set();
  const delimiter = /["'`]|\s+/g;
  code += " ";
  code.replace(delimiter, (a, index2, s) => {
    let token2 = s.slice(lastIndex, index2);
    if (token2.startsWith("class:")) {
      token2 = token2.slice("class:".length).split("=")[0];
    }
    atoms.add(token2);
    lastIndex = index2 + a.length;
    return a;
  });
  return [...atoms].filter(Boolean);
};
var lex = [
  ["(hexcolor)", /(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/],
  ["(important)", /(!+$|!+\+)/],
  ["(string)", /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],
  ["(operator)", /(::|>>|[-+~|*/%!#@?:;.,<>=[\](){}])/],
  ["(ident)", /((?:\\.|[^!'":[\](){}#])+)/],
  ["(unknown)", /./]
];
var regex = new RegExp(lex.map((v) => v[1].source).join("|"), "g");
var tokens = [];
var token;
var index = 0;
var next = (id) => {
  if (id && token && token.id && token.id !== id) {
    throw new Error("Unexpected token: " + token.id + " expected: " + id);
  }
  const t = token;
  token = tokens[index++];
  return t;
};
var tokenize = (script) => {
  tokens = [];
  index = 0;
  script.replace(regex, (value, ...args) => {
    const index2 = args[args.length - 2];
    const type = lex[args.findIndex((v) => v !== void 0)][0];
    const id = type === "(operator)" ? value : type;
    value = type === "(hexcolor)" ? makeHEX(value) : value;
    tokens.push({ type, id, value, index: index2 });
    return value;
  });
  next();
};
var expr = () => {
  const args = [];
  const push = (v) => args.push(v);
  const stack = [];
  while (token) {
    if (token.id === "(" || token.id === "[" || token.id === "{") {
      stack.push(token.id);
    } else if (token.id === ")" || token.id === "]" || token.id === "}") {
      const prev = stack.pop();
      if (prev === "(" && token.id === ")") {
      } else if (prev === "[" && token.id === "]") {
      } else if (prev === "{" && token.id === "}") {
      } else
        throw new Error("Unexpected:" + token.id);
    } else if (stack.length === 0 && (token.id === ":" || token.id === "::" || token.id === "(important)" || token.id === "+")) {
      break;
    }
    push(next());
  }
  if (stack.length > 0)
    throw new Error("Unexpected end of input");
  return args;
};
var parsePrefix = (prefixRules, e) => {
  const type = e[0].value;
  const selector = e.map((e2) => e2.value).join("");
  const makeSelector = PREFIX_SELECTOR[type];
  if (makeSelector) {
    return { selector: makeSelector(selector).replace(/>>/g, " ") };
  }
  const value = e.slice(0, 2).map((r) => r.value).join("");
  const makeAtRule = AT_RULE[value];
  if (makeAtRule) {
    return makeAtRule(selector, e);
  }
  const makePseudo = prefixRules[selector + token.id];
  if (makePseudo) {
    return makePseudo;
  }
  if (/^[-a-z]+$/.test(type)) {
    return { selector: `&${token.id}${selector}` };
  }
  throw new Error("Invalid Prefix Syntax:" + token.id);
};
var generateAtomicCss = (rules, prefixRules) => {
  const priorityTable = Object.fromEntries(Object.keys(rules).map((key, index2) => [key, index2 + 1]));
  return (script) => {
    try {
      tokenize(script);
      const ast = [];
      while (token) {
        const e = expr();
        if (e.find((e2) => e2.id === "(") && e[e.length - 1].id !== ")") {
          throw new Error("Invalid Syntax!");
        }
        if (token && (token.id === ":" || token.id === "::")) {
          const rule2 = parsePrefix(prefixRules, e);
          ast.push(rule2);
        } else if (!token || token.id === "(important)" || token.id === "+") {
          const property = e[0].value;
          const value = e.slice(2, -1).map((r) => r.value).join("");
          const rule2 = rules[property];
          let priority2 = priorityTable[property + property.includes("(") ? "(" : ""] || priorityTable[property] || 0;
          let declaration2 = (() => {
            if (rule2)
              return value === "" ? rule2() : rule2(value);
            if (value && ALL_PROPERTIES[property])
              return `${property}:${makeValues(value)};`;
            throw new Error("Not defined property: " + property);
          })();
          if (declaration2.search("undefined") >= 0) {
            throw new Error("Not defined property: " + property);
          }
          if (token && token.id === "(important)") {
            declaration2 = declaration2.replace(/;/g, (a, b, c) => c.charAt(b - 1) !== "\\" ? "!important;" : a);
            priority2 = 9999 + token.value.length;
          }
          ast.push({ declaration: declaration2, priority: priority2 });
        }
        next();
      }
      const mediaQuery = ast.map((a) => a.media).filter(Boolean);
      const media = mediaQuery.length ? "@media" + mediaQuery.join(" and ") : "";
      const atom = "." + cssEscape(script);
      const selector = ast.map((a) => a.selector).filter(Boolean).map((selector2) => selector2.split(",")).reduce((prev, curr) => {
        return prev.map((prev2) => curr.map((selector2) => selector2.replace(/&/g, prev2))).flat();
      }, [atom]).join(",");
      const declaration = ast.map((a) => a.declaration).filter(Boolean).join("");
      if (!declaration) {
        throw new Error("no declaration");
      }
      let priority = ast.map((a) => a.priority).filter(Boolean).reduce((prev, curr) => Math.max(prev, curr), 0);
      const rule = declaration.includes("&") ? declaration.replace(/&/g, selector) : selector + "{" + declaration + "}";
      return [media ? media + "{" + rule + "}" : rule, priority];
    } catch (e) {
    }
  };
};
var sortByRule = (a, b) => a[1] - b[1];
var createGenerateCss = (rules = {}, prefixRules = {}) => {
  rules = __spreadValues(__spreadValues({}, RULES), rules);
  prefixRules = __spreadValues(__spreadValues({}, PREFIX_RULES), prefixRules);
  return (classList) => classList.map(generateAtomicCss(rules, prefixRules)).filter(Boolean).sort(sortByRule).map((a) => a[0]);
};
var generateCss = createGenerateCss();

// src/util.ts
var pad = (s) => s.length === 1 ? "0" + s : s;
var hex = (num) => pad(Math.round(num * 255).toString(16));
var makeInt = (num) => makeNumber2(Math.round(num));
var makeNumber2 = (num) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0";
var makeHexColor = (r, g, b) => {
  let hexColor = [r, g, b].map(hex);
  if (hexColor.every((h) => h[0] === h[1]))
    hexColor = hexColor.map((h) => h[0]);
  return hexColor.join("");
};
var makeColor2 = ({ r, g, b }, opacity = 1) => `#${makeHexColor(r, g, b)}${opacity === 1 ? "" : makeNumber2(opacity)}`;
var fourSideValues = (t, r, b, l) => {
  if (t === r && r === b && b === l)
    return [t];
  if (t === b && r === l)
    return [t, r];
  if (t !== b && r === l)
    return [t, r, b];
  return [t, r, b, l];
};
var makeFourSideValues = (t, r, b, l) => fourSideValues(t, r, b, l).join("/");
var stripZero = (value) => value.startsWith("0.") ? value.slice(1) : value.startsWith("-0.") ? "-" + value.slice(2) : value;
var unitValue = ({ value, unit }) => {
  value = stripZero("" + makeNumber2(value));
  switch (unit) {
    case "PERCENT":
      return value + "%";
  }
  return value;
};
var ab2str = (buf) => String.fromCharCode.apply(null, new Uint16Array(buf));
var capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// src/code.ts
var isReact = false;
var CLASS_NAME = isReact ? "className" : "class";
var COMMENT_START = isReact ? "{/*" : "<!--";
var COMMENT_END = isReact ? "*/}" : "-->";
figma.showUI(__html__, {
  width: 300,
  height: 300
});
var createClassBuilder = (cls) => {
  const addClass = (prop, value) => cls.push(`${prop}${value ? "(" + value + ")" : ""}`);
  return { addClass, cls };
};
var generateChild = async (depth, children, callback) => {
  const contents = await Promise.all((children || []).map((params) => generateCode(params, depth + 1)));
  const content = contents.join("");
  return callback(content);
};
var wrapInstance = (node, code) => {
  var _a;
  const mainComponent = node.mainComponent;
  const mainComponentSet = ((_a = mainComponent.parent) == null ? void 0 : _a.type) === "COMPONENT_SET" ? mainComponent.parent : mainComponent;
  const name = capitalize(mainComponentSet.name.trim().replace(/\s*\/\s*/g, "_").replace(/-|\s+/g, "_").replace(/\s+/g, "_"));
  return `
${COMMENT_START} <${name}/> ${COMMENT_END}
${code}
${COMMENT_START} </${name}> ${COMMENT_END}
`;
};
var generateGroup = async (node, depth) => await generateChild(depth, node.children, (content) => content);
var generateComponentSet = async (node, depth) => {
  const child = await generateChild(depth, node.children, (content) => content);
  return `<div ${CLASS_NAME}="vbox gap(20)">${child}</div>`;
};
var generateInstance = async (node, depth) => {
  const code = await generateFrame(node, depth);
  return wrapInstance(node, code);
};
var addClassWidth = (node, addClass) => {
  const { parent, layoutGrow, layoutAlign } = node;
  const { layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height } = node;
  if (node === figma.currentPage.selection[0])
    addClass("w", makeInt(width));
  else if ((parent == null ? void 0 : parent.layoutMode) === "VERTICAL" && layoutAlign === "STRETCH")
    !everyChildrenHasStretchVbox(node.parent) && addClass("w", "fill");
  else if ((parent == null ? void 0 : parent.layoutMode) === "HORIZONTAL" && layoutGrow)
    addClass("flex");
  else if (!layoutMode || layoutMode === "NONE")
    addClass("w", makeInt(width));
  else if (layoutMode === "HORIZONTAL" && primaryAxisSizingMode === "FIXED")
    addClass("w", makeInt(width));
  else if (layoutMode === "VERTICAL" && counterAxisSizingMode === "FIXED")
    addClass("w", makeInt(width));
};
var addClassHeight = (node, addClass) => {
  const { layoutGrow, layoutAlign } = node;
  const { layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height } = node;
  if (node === figma.currentPage.selection[0])
    addClass("h", makeInt(height));
  else if (node.parent && node.parent.layoutMode === "HORIZONTAL" && layoutAlign === "STRETCH")
    addClass("h", "fill");
  else if (node.parent && node.parent.layoutMode === "VERTICAL" && layoutGrow)
    addClass("flex");
  else if (!layoutMode || layoutMode === "NONE")
    addClass("h", makeInt(height));
  else if (layoutMode === "HORIZONTAL" && counterAxisSizingMode === "FIXED")
    addClass("h", makeInt(height));
  else if (layoutMode === "VERTICAL" && primaryAxisSizingMode === "FIXED")
    addClass("h", makeInt(height));
};
var addClassBorder = (node, addClass) => {
  try {
    const { strokes, strokeAlign, strokeWeight } = node;
    const border = strokes.filter((stroke) => stroke.visible)[0];
    if (border && border.color && strokeWeight > 0) {
      if (strokeAlign === "OUTSIDE") {
        addClass("ring", [strokeWeight > 1 ? strokeWeight : null, makeColor2(border.color, border.opacity)].filter(Boolean).join("/"));
      } else {
        addClass("b", `${makeColor2(border.color, border.opacity)}`);
        if (strokeWeight > 1) {
          addClass("bw", node.strokeWeight);
        }
      }
    }
  } catch (e) {
  }
};
var addClassBorderRadius = (node, addClass) => {
  try {
    if (node.type === "ELLIPSE")
      addClass("r", "100%");
    const { topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = node;
    if (topLeftRadius > 0 || topRightRadius > 0 || bottomRightRadius > 0 || bottomLeftRadius > 0) {
      const size = Math.max(node.width, node.height);
      if (topLeftRadius > size && topRightRadius > size && bottomRightRadius > size && bottomLeftRadius > size) {
        addClass(`r(100%)`);
      } else {
        addClass(`r(${makeFourSideValues(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius)})`);
      }
    }
  } catch (e) {
  }
};
var addEffectStyle = (node, addClass) => {
  if (node.effectStyleId) {
    const style = figma.getStyleById(node.effectStyleId);
    addClass(style.name.toLowerCase());
  }
};
var makeGradientLinear = (paint) => {
  const { gradientTransform, gradientStops } = paint;
  if (!gradientTransform || !gradientStops) {
    return "";
  }
  let gradientTransformData = {
    m00: 1,
    m01: 0,
    m02: 0,
    m10: 0,
    m11: 1,
    m12: 0
  };
  const delta = gradientTransform[0][0] * gradientTransform[1][1] - gradientTransform[0][1] * gradientTransform[1][0];
  if (delta !== 0) {
    const deltaVal = 1 / delta;
    gradientTransformData = {
      m00: gradientTransform[1][1] * deltaVal,
      m01: -gradientTransform[0][1] * deltaVal,
      m02: (gradientTransform[0][1] * gradientTransform[1][2] - gradientTransform[1][1] * gradientTransform[0][2]) * deltaVal,
      m10: -gradientTransform[1][0] * deltaVal,
      m11: gradientTransform[0][0] * deltaVal,
      m12: (gradientTransform[1][0] * gradientTransform[0][2] - gradientTransform[0][0] * gradientTransform[1][2]) * deltaVal
    };
  }
  const rotationTruthy = gradientTransformData.m00 * gradientTransformData.m11 - gradientTransformData.m01 * gradientTransformData.m10 > 0 ? 1 : -1;
  const data = gradientTransformData;
  const param = { x: 0, y: 1 };
  const rotationData = {
    x: data.m00 * param.x + data.m01 * param.y,
    y: data.m10 * param.x + data.m11 * param.y
  };
  const rad = makeNumber2(Math.atan2(rotationData.y * rotationTruthy, rotationData.x * rotationTruthy) / Math.PI * 180);
  const gradientColors = gradientStops.map((gradient) => `${makeColor2(gradient.color)}/${makeNumber2(gradient.position * 100)}%`);
  return `linear-gradient(${rad}deg,${gradientColors})`;
};
var everyChildrenHasStretchVbox = (node) => {
  var _a;
  return (_a = node.children) == null ? void 0 : _a.every((c) => c.layoutAlign === "STRETCH" || c.width === node.width);
};
var generateFrame = async (node, depth) => {
  var _a, _b, _c;
  const { addClass, cls } = createClassBuilder([]);
  const selection = figma.currentPage.selection;
  if (node !== selection[0] && ((_a = node.parent) == null ? void 0 : _a.type) === "FRAME" && ((_b = node.parent) == null ? void 0 : _b.layoutMode) === "NONE") {
    addClass("absolute");
    switch (node.constraints.vertical) {
      case "MIN":
        addClass(`top(${node.y})`);
        break;
      case "MAX":
        addClass(`bottom(${node.parent.height - node.y - node.height})`);
        break;
    }
    switch (node.constraints.horizontal) {
      case "MIN":
        addClass(`left(${node.x})`);
        break;
      case "MAX":
        addClass(`right(${node.parent.width - node.x - node.width})`);
        break;
    }
  }
  const numChildren = (_c = node.children) == null ? void 0 : _c.filter((child) => child.visible).length;
  const hasChildren = numChildren > 0;
  const hasMoreChildren = numChildren > 1;
  const { layoutGrow, layoutAlign } = node;
  const { layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height } = node;
  if (hasChildren) {
    if (layoutMode === "HORIZONTAL") {
      if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
        if (numChildren > 1)
          addClass("hbox");
        addClass("pack");
      } else {
        const value = [];
        if (counterAxisSizingMode === "AUTO" && layoutAlign === "INHERIT") {
          if (primaryAxisAlignItems === "MAX")
            value.push("right");
        } else {
          if (counterAxisAlignItems === "MIN")
            value.push("top");
          else if (counterAxisAlignItems === "MAX")
            value.push("bottom");
          if (primaryAxisAlignItems === "MAX")
            value.push("right");
        }
        addClass("hbox", value.join("+"));
        if (primaryAxisAlignItems === "CENTER")
          addClass("pack");
      }
    } else if (layoutMode === "VERTICAL") {
      if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
        if (numChildren > 1)
          addClass("vbox");
        addClass("pack");
      } else {
        const value = [];
        if (everyChildrenHasStretchVbox(node)) {
        } else if (counterAxisAlignItems === "CENTER")
          value.push("center");
        else if (counterAxisAlignItems === "MAX")
          value.push("right");
        if (primaryAxisAlignItems === "CENTER")
          value.push("middle");
        if (primaryAxisAlignItems === "MAX")
          value.push("bottom");
        addClass("vbox", value.join("+"));
      }
    } else {
      addClass("relative");
    }
    if (hasMoreChildren) {
      if (layoutMode !== "NONE") {
        if (primaryAxisAlignItems === "SPACE_BETWEEN")
          addClass("space-between");
        const { itemSpacing } = node;
        if (hasChildren && itemSpacing > 0 && itemSpacing < width) {
          layoutMode === "HORIZONTAL" ? addClass("hgap", itemSpacing) : addClass("vgap", itemSpacing);
        }
      }
    }
    if (layoutMode !== "NONE") {
      const { paddingTop, paddingRight, paddingBottom, paddingLeft } = node;
      if (paddingTop > 0 || paddingRight > 0 || paddingBottom > 0 || paddingLeft > 0)
        addClass("p", makeFourSideValues(paddingTop, paddingRight, paddingBottom, paddingLeft));
    }
  }
  addClassWidth(node, addClass);
  addClassHeight(node, addClass);
  try {
    const bg = node.fills.filter((fill) => fill.visible)[0];
    if ((bg == null ? void 0 : bg.type) === "SOLID") {
      addClass("bg", makeColor2(bg.color, bg.opacity));
    } else if ((bg == null ? void 0 : bg.type) === "GRADIENT_LINEAR") {
      addClass("bg", makeGradientLinear(bg));
    }
  } catch (e) {
  }
  addClassBorderRadius(node, addClass);
  addClassBorder(node, addClass);
  addEffectStyle(node, addClass);
  if (node.opacity !== 1)
    addClass("opacity", makeNumber2(node.opacity));
  if (hasChildren && node.clipsContent)
    addClass("clip");
  const className = cls.join(" ");
  return await generateChild(depth, node.children, (content) => `<div ${CLASS_NAME}="${className}">
${content}</div>`);
};
var generateShape = async (node) => {
  var _a;
  const cls = [];
  const { addClass } = createClassBuilder(cls);
  const hasChildren = ((_a = node.children) == null ? void 0 : _a.filter((child) => child.visible).length) > 1;
  addClassWidth(node, addClass);
  addClassHeight(node, addClass);
  addClassBorderRadius(node, addClass);
  const bg = node.fills.filter((fill) => fill.visible)[0];
  if ((bg == null ? void 0 : bg.type) === "SOLID") {
    addClass("bg", makeColor2(bg.color, bg.opacity));
  }
  addClassBorder(node, addClass);
  addEffectStyle(node, addClass);
  const className = cls.join(" ");
  return `<div ${CLASS_NAME}="${className}"></div>`;
};
var generateText = async (node) => {
  var _a, _b, _c, _d, _e, _f;
  const cls = [];
  const { addClass } = createClassBuilder(cls);
  const { layoutGrow } = node;
  if (layoutGrow === 1)
    addClass("flex");
  const { textAutoResize, width, height } = node;
  switch (textAutoResize) {
    case "WIDTH_AND_HEIGHT":
      break;
    case "HEIGHT":
      addClass("w", makeInt(width));
      break;
    case "NONE":
      addClass("w", makeInt(width));
      addClass("h", makeInt(height));
      break;
  }
  const font = [node.fontSize];
  if (((_a = node.lineHeight) == null ? void 0 : _a.value) && ((_b = node.lineHeight) == null ? void 0 : _b.unit) !== "AUTO") {
    font.push(unitValue(node.lineHeight));
  }
  if ((_c = node.letterSpacing) == null ? void 0 : _c.value) {
    if (font.length === 1)
      font.push("-");
    font.push(unitValue(node.letterSpacing));
  }
  addClass("font", font.filter(Boolean).map((v) => v.toString()).join("/"));
  if ((_d = node.fontName) == null ? void 0 : _d.style) {
    switch ((_e = node.fontName) == null ? void 0 : _e.style.toLowerCase()) {
      case "regular":
        break;
      case "black": {
        addClass("bolder");
        break;
      }
      default: {
        addClass((_f = node.fontName) == null ? void 0 : _f.style.toLowerCase());
      }
    }
  }
  const fill = node.fills[0];
  if ((fill == null ? void 0 : fill.visible) && (fill == null ? void 0 : fill.type) === "SOLID") {
    addClass("c", makeColor2(fill.color, fill.opacity));
  }
  if (node.opacity !== 1)
    addClass("opacity", makeNumber2(node.opacity));
  switch (node.textAlignHorizontal) {
    case "CENTER": {
      addClass("text-center");
      break;
    }
    case "RIGHT": {
      addClass("text-right");
      break;
    }
    case "JUSTIFIED": {
      addClass("text-justify");
      break;
    }
  }
  const className = cls.join(" ");
  return `<div ${CLASS_NAME}="${className}">${node.characters}</div>`;
};
var isSVG = (node) => {
  var _a;
  return node.type === "GROUP" && ((_a = node.children) == null ? void 0 : _a.every((node2) => node2.type === "VECTOR" || node2.type === "BOOLEAN_OPERATION"));
};
var generateCode = async (node, depth = 0) => {
  if (node.visible === false)
    return "";
  let code = "";
  if (node.exportSettings.length > 0 || node.type === "INSTANCE" && node.mainComponent.exportSettings.length > 0 || isSVG(node)) {
    try {
      const svgCodeArrayBuffer = await node.exportAsync({ format: "SVG", svgIdAttribute: false });
      const svgCode = ab2str(svgCodeArrayBuffer);
      code = node.type === "INSTANCE" ? wrapInstance(node, svgCode) : svgCode;
    } catch (e) {
    }
  } else if (node.type === "GROUP")
    code = await generateGroup(node, depth);
  else if (node.type === "INSTANCE")
    code = await generateInstance(node, depth);
  else if (node.type === "COMPONENT" || node.type === "FRAME")
    code = await generateFrame(node, depth);
  else if (node.type === "RECTANGLE" || node.type === "ELLIPSE" || node.type === "LINE")
    code = await generateShape(node);
  else if (node.type === "TEXT")
    code = await generateText(node);
  else if (node.type === "COMPONENT_SET")
    code = await generateComponentSet(node, depth);
  return Array(depth).fill("  ").join("") + code + "\n";
};
var generate = async () => {
  const selection = figma.currentPage.selection;
  if (!selection.length)
    return;
  const node = selection[0];
  console.log(node.type);
  console.log(node);
  console.warn("!!!!! layoutGrow, layoutAlign", node.layoutGrow, node.layoutAlign);
  const record = {};
  traverse(node, (node2) => {
    var _a;
    if (node2.type === "INSTANCE") {
      const mainComponent = node2.mainComponent;
      const mainComponentSet = ((_a = mainComponent.parent) == null ? void 0 : _a.type) === "COMPONENT_SET" ? mainComponent.parent : mainComponent;
      record[node2.mainComponent.id] = mainComponentSet.name;
    }
  });
  console.log(record);
  const code = await generateCode(node, 0);
  figma.showUI(__html__, {
    width: Math.min(1440, (Math.floor(node.width) || 0) + 40 + 40 + 240),
    height: Math.min(1024, (Math.floor(node.height) || 0) + 40 + 40)
  });
  const css = generateCss(parseAtoms(code)).join("\n");
  figma.ui.postMessage({ code, css });
};
var traverse = (node, callback) => {
  callback(node);
  if (node.children && node.children.length) {
    node.children.forEach((child) => traverse(child, callback));
  }
};
generate();
figma.on("selectionchange", generate);
figma.on("currentpagechange", generate);
