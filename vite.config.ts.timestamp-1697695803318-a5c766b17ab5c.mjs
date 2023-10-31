// vite.config.ts
import { resolve } from "path";
import { sveltekit } from "file:///Users/kakao/Desktop/@adorable-css/node_modules/.pnpm/@sveltejs+kit@1.0.0-next.589_svelte@4.2.0_vite@4.4.9/node_modules/@sveltejs/kit/src/exports/vite/index.js";

// packages/vite/src/vite/vite-plugin-adorable-css.ts
import micromatch from "file:///Users/kakao/Desktop/@adorable-css/node_modules/.pnpm/micromatch@4.0.5/node_modules/micromatch/index.js";

// packages/vite/src/core/const.ts
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

// packages/vite/src/core/cssEscape.ts
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
    if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
      codeUnit >= 1 && codeUnit <= 31 || codeUnit == 127 || // If the character is the first character and is in the range [0-9]
      // (U+0030 to U+0039), […]
      index2 == 0 && codeUnit >= 48 && codeUnit <= 57 || // If the character is the second character and is in the range [0-9]
      // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
      index2 == 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit == 45
    ) {
      result += "\\" + codeUnit.toString(16) + " ";
      continue;
    }
    if (
      // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      index2 == 0 && length == 1 && codeUnit == 45
    ) {
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

// packages/vite/src/core/makeValue.ts
var splitValues = (value, project = cssvar) => {
  if (value.includes("|"))
    return value.split("|").map(project);
  return value.split("/").map(project);
};
var makeValues = (value, project = cssvar) => splitValues(value, project).join(" ");
var makeCommaValues = (value, project = cssvar) => value.split(",").map(project).join(",");
var makeSide = (value) => makeValues(value, px);
var makeRatio = (value) => {
  const [w, h] = value.split(/[:/]/);
  return (+h / +w * 100).toFixed(2) + "%";
};
var makeNumber = (num) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0";
var cssvar = (value) => String(value).startsWith("--") ? `var(${value})` : value;
var px = (value) => {
  if (value === void 0 || value === null)
    throw new Error("px: value is undefined");
  if (value === 0 || value === "0")
    return 0;
  const v = String(value);
  if (v.startsWith("--"))
    return cssvar("" + value);
  const [n, m] = v.split("/");
  if (+n > 0 && +m > 0)
    return makeNumber(+n / +m * 100) + "%";
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return "calc(" + v.replace(/[-+]/g, (a) => ` ${a} `) + ")";
  }
  return +value === +value ? value + "px" : value;
};
var deg = (value) => {
  if (value === void 0 || value === null)
    throw new Error("deg: value is undefined");
  if (value === 0 || value === "0")
    return 0;
  const v = String(value);
  if (v.startsWith("--"))
    return cssvar("" + value);
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return "calc(" + v.replace(/[-+]/g, (a) => ` ${a} `) + ")";
  }
  return +value === +value ? value + "deg" : value;
};
var rpx = (value) => {
  if (value === "fill")
    return "9999px";
  return px(value);
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
      return `var(${value2});`;
    switch (index2) {
      case 0: {
        return `font-size:${px(value2)};`;
      }
      case 1: {
        return `line-height:${+value2 < 4 ? makeNumber(+value2) : px(value2)};`;
      }
      case 2: {
        return `letter-spacing:${px(percentToEm(value2))};`;
      }
    }
  }).filter(Boolean).join("");
};
var makeFontFamily = (value) => `font-family:${value};font-family:var(--${value}, ${value});`;
var makeBorder = (value) => {
  if (!value || value === "none" || value === "0" || value === "-")
    return "none";
  const borderStyles = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
  let hasWidth = false;
  let hasStyle = false;
  const values = splitValues(value, (value2) => {
    if (+value2 > 0) {
      hasWidth = true;
      return px(value2);
    }
    if (borderStyles.includes(String(value2))) {
      hasStyle = true;
      return value2;
    }
    return makeColor(String(value2));
  });
  if (!hasWidth)
    values.unshift("1px");
  if (!hasStyle)
    values.unshift("solid");
  return values.join(" ");
};
var makeHBoxWithSemi = (value = "") => {
  const values = value.split(/[+/|]/);
  const result = values.map((v) => {
    switch (v) {
      case "top": {
        return "align-items:flex-start;";
      }
      case "middle": {
        return "align-items:center;";
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
    return /^[\d.]+$/.test(v) ? `gap:${px(v)};` : "";
  });
  if (!result.find((r) => r.startsWith("align-items:"))) {
    result.unshift("align-items:center;");
  }
  return [...new Set(result)].join("");
};
var makeVBoxWithSemi = (value = "") => {
  const values = value.split(/[+/|]/);
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
    return /^[\d.]+$/.test(v) ? `gap:${px(v)};` : "";
  });
  if (!result.find((r) => r.startsWith("align-items:"))) {
    result.unshift("align-items:stretch;");
  }
  return [...new Set(result)].join("");
};
var makeHBoxFill = () => ":where(&>*){flex-shrink:0;--w-grow:1;--w-shrink:1;--w-align:initial;--h-grow:initial;--h-shrink:0;--h-align:stretch;}";
var makeVBoxFill = () => ":where(&>*){flex-shrink:0;--h-grow:1;--h-shrink:1;--h-align:initial;--w-grow:initial;--w-shrink:0;--w-align:stretch;}";
var makeBoxFill = (value) => {
  const val = value.split(/\s+/);
  if (val.includes("row"))
    return makeHBoxFill();
  if (val.includes("column"))
    return makeVBoxFill();
  return "";
};
var makeTextBox = (value = "") => {
  const values = value.split("+");
  const result = values.map((v) => {
    switch (v) {
      case "left": {
        return "text-align:left;";
      }
      case "center": {
        return "text-align:center;";
      }
      case "right": {
        return "text-align:right;";
      }
      case "justify": {
        return "text-align:justify;";
      }
      case "top": {
        return "display:flex;flex-flow:column;justify-content:flex-start;";
      }
      case "middle": {
        return "display:flex;flex-flow:column;justify-content:center;";
      }
      case "bottom": {
        return "display:flex;flex-flow:column;justify-content:flex-end;";
      }
      case "pack": {
        return "display:flex;flex-flow:column;align-items:center;justify-content:center;text-align:center;";
      }
    }
    return "";
  });
  return [...new Set(result)].join("");
};
var makeTransition = (value) => {
  if (!/\d/.test(value))
    return value;
  if (!value.includes("="))
    return `all ${value}`;
  return value.split(/[/|]/).map((item) => item.replace("=", " ")).join(",");
};
var makePosition1 = (value) => {
  const values = value.split(" ").map(px);
  values[1] = values[1] || values[0];
  values[2] = values[2] || values[0];
  values[3] = values[3] || values[1] || values[0];
  return ["top", "right", "bottom", "left"].map((prop, index2) => {
    const value2 = values[index2];
    if (!value2 || value2 === "-")
      return;
    return `${prop}:${px(value2)};`;
  }).filter(Boolean).join("");
};
var makePosition2X = (x) => {
  if (x.startsWith("center")) {
    const left2 = x === "center" ? "50%" : `calc(50% + ${x.slice(6)})`;
    return `left:${left2};--a-translate-x:-50%;transform:var(--a-transform);`;
  }
  const [left, right] = x.split("~");
  const res = [];
  res.push(left ? `left:${px(left)};` : "");
  res.push(right ? `right:${px(right)};` : "");
  return res.join("");
};
var makePosition2Y = (y) => {
  if (y.startsWith("center")) {
    const top2 = y === "center" ? "50%" : `calc(50% + ${y.slice(6)})`;
    return `top:${top2};--a-translate-y:-50%;transform:var(--a-transform);`;
  }
  const [top, bottom] = y.split("~");
  const res = [];
  res.push(top ? `top:${px(top)};` : "");
  res.push(bottom ? `bottom:${px(bottom)};` : "");
  return res.join("");
};
var makePosition2 = (value) => {
  const [x, y] = value.split(",");
  return makePosition2X(x) + makePosition2Y(y);
};
var makePositionWithSemi = (value) => {
  if (!value)
    return "";
  if (value === "pack" || value === "center") {
    return "left:50%;top:50%;transform:translate(-50%,-50%);";
  }
  return (value.includes(",") ? makePosition2(value) : makePosition1(value)) + ";";
};

// packages/vite/src/core/rules.ts
var reset = `
*,:after,:before{margin:0;padding:0;font:inherit;color:inherit;box-sizing:border-box;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
html,body{height:100%;}
img,picture,video,canvas{display:block;max-width:100%;}
img{text-indent:-9999px;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}
*,:after,:before{--w-grow:initial;--w-align:initial;--h-grow:initial;--h-align:initial;}
*,:after,:before{
--a-translate-x:0;
--a-translate-y:0;
--a-rotate:0;
--a-skew-x:0;
--a-skew-y:0;
--a-scale-x:1;
--a-scale-y:1;
--a-transform:translateX(var(--a-translate-x)) translateY(var(--a-translate-y)) rotate(var(--a-rotate)) skewX(var(--a-skew-x)) skewY(var(--a-skew-y)) scaleX(var(--a-scale-x)) scaleY(var(--a-scale-y));
--a-transform3d:translate3d(var(--a-translate-x),var(--a-translate-y),0) rotate(var(--a-rotate)) skewX(var(--a-skew-x)) skewY(var(--a-skew-y)) scaleX(var(--a-scale-x)) scaleY(var(--a-scale-y));
}
`;
var RULES = {
  // -- Color
  "c": (value) => `color:${makeColor(value)};`,
  "color": (value) => RULES.c(value),
  "caret": (value) => `caret-color:${makeColor(value)};`,
  "caret-current": () => `color:currentColor;`,
  // -- Typography
  "font": (value) => makeFont(value),
  "font-size": (value) => `font-size:${px(value)};`,
  "line-height": (value) => `line-height:${+value < 4 ? makeNumber(+value) : px(value)};`,
  "letter-spacing": (value) => `letter-spacing:${percentToEm(value)};`,
  "word-spacing": (value) => `word-spacing:${px(value)};`,
  // Font-Family @TODO:font-stack은 일반적인 스택 만들어 두기...(L),Roboto,NotoSans와 같은것도 만들까?
  // @TODO: Font-Family Utility
  "AppleSD": () => `font-family:"Apple SD Gothic Neo";`,
  "Roboto": () => makeFontFamily("Roboto"),
  // @TODO:font-family:var(--serif),serif; 이게 먹히나?
  "sans": () => makeFontFamily("sans"),
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
  "text": (value) => makeTextBox(value),
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
  // Text Indent
  "text-indent": (value) => `text-indent:${px(value)};`,
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
  // -- Box
  // Box-Sizing
  "border-box": () => `box-sizing:border-box;`,
  "content-box": () => `box-sizing:content-box;`,
  // Box-Model
  "w": (value) => {
    if (value === "hug")
      return "width:max-content;";
    if (value === "stretch" || value === "fill") {
      return `&{flex-grow:var(--w-grow);flex-shrink:var(--w-shrink);align-self:var(--w-align);max-width:100%}&.h\\(fill\\),&.h\\(stretch\\){flex-grow:1;flex-shrink:1;align-self:stretch;max-width:100%;max-height:100%;}`;
    }
    if (value.includes("~")) {
      const result = [];
      const values = value.split("~");
      if (values.length <= 2) {
        const [min2, max2] = values;
        min2 && result.push(`min-width:${px(min2)};`);
        max2 && result.push(`max-width:${px(max2)};`);
        return result.join("");
      }
      const [min, width, max] = values;
      min && result.push(`min-width:${px(min)};`);
      result.push(`width:${px(width)};`);
      max && result.push(`max-width:${px(max)};`);
      return result.join("");
    }
    return `width:${px(value)};`;
  },
  "min-w": (value) => `min-width:${px(value)};`,
  "max-w": (value) => `max-width:${px(value)};`,
  "h": (value) => {
    if (value === "hug")
      return "height:max-content;";
    if (value === "stretch" || value === "fill") {
      return `flex-grow:var(--h-grow);flex-shrink:var(--h-shrink);align-self:var(--h-align);max-height:100%;`;
    }
    if (value.includes("~")) {
      const result = [];
      const values = value.split("~");
      if (values.length <= 2) {
        const [min2, max2] = value.split("~");
        min2 && result.push(`min-height:${px(min2)};`);
        max2 && result.push(`max-height:${px(max2)};`);
        return result.join("");
      }
      const [min, height, max] = values;
      min && result.push(`min-height:${px(min)};`);
      result.push(`height:${px(height)};`);
      max && result.push(`max-height:${px(max)};`);
      return result.join("");
    }
    return `height:${px(value)};`;
  },
  "min-h": (value) => `min-height:${px(value)};`,
  "max-h": (value) => `max-height:${px(value)};`,
  // BoxModel - Margin
  "m": (value) => `margin:${makeSide(value)};`,
  "mx": (value) => `margin-left:${px(value)};margin-right:${px(value)};`,
  "my": (value) => `margin-top:${px(value)};margin-bottom:${px(value)};`,
  "mt": (value) => `margin-top:${px(value)};`,
  "mr": (value) => `margin-right:${px(value)};`,
  "mb": (value) => `margin-bottom:${px(value)};`,
  "ml": (value) => `margin-left:${px(value)};`,
  // BoxModel - Padding
  "p": (value) => `padding:${makeSide(value)};`,
  "px": (value) => `padding-left:${px(value)};padding-right:${px(value)};`,
  "py": (value) => `padding-top:${px(value)};padding-bottom:${px(value)};`,
  "pt": (value) => `padding-top:${px(value)};`,
  "pr": (value) => `padding-right:${px(value)};`,
  "pb": (value) => `padding-bottom:${px(value)};`,
  "pl": (value) => `padding-left:${px(value)};`,
  // BoxModel - Border
  "no-border": () => `border:none;outline:none;`,
  "b": (value) => `border:${makeBorder(value)};`,
  "bx": (value) => `border-left:${makeBorder(value)};border-right:${makeBorder(value)};`,
  "by": (value) => `border-top:${makeBorder(value)};border-bottom:${makeBorder(value)};`,
  "bt": (value) => `border-top:${makeBorder(value)};`,
  "br": (value) => `border-right:${makeBorder(value)};`,
  "bb": (value) => `border-bottom:${makeBorder(value)};`,
  "bl": (value) => `border-left:${makeBorder(value)};`,
  "bw": (value) => `border-width:${makeValues(value, px)};`,
  "bxw": (value) => `border-left-width:${px(value)};border-right-width:${px(value)};`,
  "byw": (value) => `border-top-width:${px(value)};border-bottom-width:${px(value)};`,
  "btw": (value) => `border-top-width:${px(value)};`,
  "brw": (value) => `border-right-width:${px(value)};`,
  "bbw": (value) => `border-bottom-width:${px(value)};`,
  "blw": (value) => `border-left-width:${px(value)};`,
  "bs": (value) => `border-style:${makeValues(value)};`,
  "bxs": (value) => `border-left-style:${cssvar(value)};border-right-style:${cssvar(value)};`,
  "bys": (value) => `border-top-style:${cssvar(value)};border-bottom-style:${cssvar(value)};`,
  "bts": (value) => `border-top-style:${cssvar(value)};`,
  "brs": (value) => `border-right-style:${cssvar(value)};`,
  "bbs": (value) => `border-bottom-style:${cssvar(value)};`,
  "bls": (value) => `border-left-style:${cssvar(value)};`,
  "bc": (value) => `border-color:${makeValues(value, makeColor)};`,
  "bxc": (value) => `border-left-color:${makeColor(value)};border-right-color:${makeColor(value)};`,
  "byc": (value) => `border-top-color:${makeColor(value)};border-bottom-color:${makeColor(value)};`,
  "btc": (value) => `border-top-color:${makeColor(value)};`,
  "brc": (value) => `border-right-color:${makeColor(value)};`,
  "bbc": (value) => `border-bottom-color:${makeColor(value)};`,
  "blc": (value) => `border-left-color:${makeColor(value)};`,
  // outline
  "outline": (value) => `outline:${makeBorder(value)};`,
  "guide": (value = "#4f80ff") => `&,&>*{outline:1px solid ${makeColor(value)};}`,
  // border-radius
  "r": (value) => `border-radius:${makeValues(value, rpx)};`,
  "rt": (value) => `border-top-left-radius:${rpx(value)};border-top-right-radius:${rpx(value)};`,
  "rr": (value) => `border-top-right-radius:${rpx(value)};border-bottom-right-radius:${rpx(value)};`,
  "rb": (value) => `border-bottom-left-radius:${rpx(value)};border-bottom-right-radius:${rpx(value)};`,
  "rl": (value) => `border-top-left-radius:${rpx(value)};border-bottom-left-radius:${rpx(value)};`,
  "rtl": (value) => `border-top-left-radius:${rpx(value)};`,
  "rtr": (value) => `border-top-right-radius:${rpx(value)};`,
  "rbr": (value) => `border-bottom-right-radius:${rpx(value)};`,
  "rbl": (value) => `border-bottom-left-radius:${rpx(value)};`,
  // box-shadow
  "ring": (value) => {
    const [color, size = 1] = value.split("/");
    return `box-shadow:0 0 0 ${px(size)} ${makeColor(color)};`;
  },
  "box-shadow": (value) => `box-shadow:${makeValues(value, (v) => Number.isInteger(+v) ? px(v) : cssvar(v))};`,
  // -- Background
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
      return `background:transparent;`;
    return `background:${makeColor(value)};`;
  },
  "bg-image": (value) => {
    if (value.startsWith("url"))
      return `background-image:${value};`;
    return `background-image:url(${value});`;
  },
  "background-image": (value) => RULES["bg-image"](value),
  "bg-position": (value) => `background-position:${makeValues(value)};`,
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
  "clip": () => `&{overflow:hidden;}&:has(.nowrap\\.\\.\\.){flex-shrink:1;}`,
  "overflow": (value) => `overflow:${value};`,
  "overflow-x": (value) => `overflow-x:${value};`,
  "overflow-y": (value) => `overflow-y:${value};`,
  // Scroll
  "scroll": () => `overflow:auto;`,
  "scroll-x": () => `overflow-x:auto;overflow-y:hidden;`,
  "scroll-y": () => `overflow-x:hidden;overflow-y:auto;`,
  "scrollbar": () => `&{overflow:scroll;}&.scroll{overflow:scroll;}&.scroll-x{overflow-x:scroll;}&.scroll-y{overflow-y:scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar{display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal{display:none;}`,
  // Scroll Snap
  "scroll-m": (value) => `scroll-margin:${makeSide(value)};`,
  "scroll-mt": (value) => `scroll-margin-top:${px(value)};`,
  "scroll-mr": (value) => `scroll-margin-right:${px(value)};`,
  "scroll-mb": (value) => `scroll-margin-bottom:${px(value)};`,
  "scroll-ml": (value) => `scroll-margin-left:${px(value)};`,
  "scroll-p": (value) => `scroll-padding:${makeSide(value)};`,
  "scroll-pt": (value) => `scroll-padding-top:${px(value)};`,
  "scroll-pr": (value) => `scroll-padding-right:${px(value)};`,
  "scroll-pb": (value) => `scroll-padding-bottom:${px(value)};`,
  "scroll-pl": (value) => `scroll-padding-left:${px(value)};`,
  "snap": (value) => `scroll-snap-align:${cssvar(value)};`,
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
  "snap-normal": () => `scroll-snap-stop:normal;`,
  "snap-always": () => `scroll-snap-stop:always;`,
  // @TODO:- TBD
  "overscroll": (value) => `overscroll-behavior:${value};`,
  "overscroll-x": (value) => `overscroll-behavior-x:${value};`,
  "overscroll-y": (value) => `overscroll-behavior-y:${value};`,
  // @TODO:- TBD
  "no-bouncing": () => "",
  "no-overscroll": () => "",
  // OverFlow + Text
  "white-space-normal": () => `white-space:normal;`,
  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "break-spaces": () => `white-space:break-spaces;`,
  "nowrap": () => `white-space:nowrap;`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;max-width:100%;`,
  // line-clamp vs max-lines
  // @NOTE:일단 기존 프로퍼티에 의거한다는 원칙에따라 line-clamp를 쓴다. 이후 max-lines가 정식 스펙이 되면 deprecated한다.
  // @NOTE:그냥 둘다 제공한다.
  "line-clamp": (value) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "max-lines": (value) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  // -- Flexbox Layout
  "hbox": (value = "") => `&{display:flex;flex-flow:row;${makeHBoxWithSemi(value)}}${makeHBoxFill()}`,
  "vbox": (value = "") => `&{display:flex;flex-flow:column;${makeVBoxWithSemi(value)}}${makeVBoxFill()}`,
  "wrap": (value = "") => `&{display:flex;flex-flow:wrap;${makeHBoxWithSemi(value)}}${makeHBoxFill()}`,
  "pack": () => `&{display:flex;align-items:center;justify-content:center;}${makeHBoxFill()}`,
  "hpack": () => `&{display:flex;flex-flow:row;align-items:center;justify-content:center;}${makeHBoxFill()}`,
  "vpack": () => `&{display:flex;flex-flow:column;align-items:center;justify-content:center;}${makeVBoxFill()}`,
  "hbox(": () => ``,
  "vbox(": () => ``,
  "subbox": () => `display:flex;flex-flow:inherit;align-items:inherit;justify-content:inherit;`,
  "flex-flow:": (value) => `&{flex-flow:${value};}${makeBoxFill(value)}`,
  "flex-direction:": (value) => `&{flex-direction:${value};}${makeBoxFill(value)}`,
  "gap": (value) => {
    if (value === "auto")
      return "&{justify-content:space-between;align-content:space-between;}&>:only-child{margin:auto;}";
    return `gap:${makeSide(value)};grid-gap:${makeSide(value)};`;
  },
  // @NOTE:IE,safari<=13
  "hgap": (value) => `&>*+*{margin-left:${px(value)};}`,
  "hgap-reverse": (value) => `&>*+*{margin-right:${px(value)};}`,
  "vgap": (value) => `&>*+*{margin-top:${px(value)};}`,
  "vgap-reverse": (value) => `&>*+*{margin-bottom:${px(value)};}`,
  // align-items
  "ai": (value) => `align-items:${value};`,
  "items": (value) => `align-items:${value};`,
  "items-start": () => `align-items:flex-start;`,
  "items-end": () => `align-items:flex-end;`,
  "items-center": () => `align-items:center;`,
  "items-baseline": () => `align-items:baseline;`,
  "items-stretch": () => `align-items:stretch;`,
  // align-content
  "ac": (value) => `align-content:${value};`,
  "content-start": () => `align-content:flex-start;`,
  "content-end": () => `align-content:flex-end;`,
  "content-center": () => `align-content:center;`,
  "content-between": () => `align-content:space-between;`,
  "content-around": () => `align-content:space-around;`,
  "content-evenly": () => `align-content:space-evenly;`,
  "content-stretch": () => `align-content:stretch;`,
  // justify-content
  "jc": (value) => `justify-content:${value};`,
  "justify": (value) => `justify-content:${value};`,
  "justify-start": () => `justify-content:flex-start;`,
  "justify-end": () => `justify-content:flex-end;`,
  "justify-center": () => `justify-content:center;`,
  "justify-between": () => `justify-content:space-between;`,
  "justify-around": () => `justify-content:space-around;`,
  "justify-evenly": () => `justify-content:space-evenly;`,
  "justify-stretch": () => `justify-content:stretch;`,
  "space-between": () => `justify-content:space-between;align-content:space-between;`,
  "space-around": () => `justify-content:space-around;align-content:space-around;`,
  "space-evenly": () => `justify-content:space-evenly;align-content:space-evenly;`,
  // justify-items
  "ji": (value) => `justify-items:${value};`,
  "justify-items": (value) => `justify-items:${value};`,
  "justify-items-start": () => `justify-items:start;`,
  "justify-items-end": () => `justify-items:end;`,
  "justify-items-center": () => `justify-items:center;`,
  "justify-items-stretch": () => `justify-items:stretch;`,
  // flex: @deprecated
  "flex": (value = "1") => `flex:${makeValues(value)};`,
  "space": (value) => `[class*="hbox"]>&{width:${px(value)};}[class*="vbox"]>&{height:${px(value)};}`,
  // flex
  "grow": (value = "1") => `flex-grow:${cssvar(value)};`,
  "grow-0": () => `flex-grow:0;`,
  "no-grow": () => `flex-grow:0;`,
  "shrink": (value = "1") => `flex-shrink:${cssvar(value)};`,
  "no-shrink": () => `flex-shrink:0;`,
  "flex-grow": (value = "1") => `flex-grow:${cssvar(value)};`,
  "flex-shrink": (value = "1") => `flex-shrink:${cssvar(value)};`,
  "flex-basis": (value) => `flex-basis:${px(value)};`,
  "flex-wrap": () => "&{flex-wrap:wrap;}:where(&>*){max-width:100%;max-height:100%;}",
  "flex-wrap-reverse": () => "&{flex-wrap:wrap-reverse;}:where(&>*){max-width:100%;max-height:100%;}",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value) => `order:${cssvar(value)};`,
  // -- Grid
  // @TODO:-- GRID TBD
  "grid": (value) => {
    const css = ["display:grid;"];
    if (+value === +value)
      css.push(`grid-template-columns:repeat(${value},1fr);`);
    else if (value)
      css.push(`grid-template-columns:${value};`);
    return css.join("");
  },
  "grid-cols": (value) => {
    const css = ["display:grid;"];
    if (+value === +value)
      css.push(`grid-template-columns:repeat(${value},1fr);`);
    else if (value)
      css.push(`grid-template-columns:${value};`);
    return css.join("");
  },
  "inline-grid": () => "display:inline-grid;",
  // -- Position Utilities
  "layer": (value = "") => {
    const pos = { top: "0", right: "0", bottom: "0", left: "0" };
    const outsides = [];
    let outside = false;
    value.split("+").forEach((v) => {
      const [direction, value2 = "0"] = v.split(":");
      switch (direction) {
        case "top": {
          pos.top = value2;
          delete pos.bottom;
          outsides.push("top");
          return;
        }
        case "right": {
          pos.right = value2;
          delete pos.left;
          outsides.push("right");
          return;
        }
        case "bottom": {
          pos.bottom = value2;
          delete pos.top;
          outsides.push("bottom");
          return;
        }
        case "left": {
          pos.left = value2;
          delete pos.right;
          outsides.push("left");
          return;
        }
        case "outside": {
          outside = true;
          return;
        }
      }
    });
    if (outside) {
      const revert = (b, a) => {
        pos[a] = pos[b] === "0" ? "100%" : `calc(100% + ${px(pos[b])})`;
        delete pos[b];
      };
      outsides.forEach((direction) => {
        switch (direction) {
          case "top":
            return revert("top", "bottom");
          case "right":
            return revert("right", "left");
          case "bottom":
            return revert("bottom", "top");
          case "left":
            return revert("left", "right");
        }
      });
    }
    return `position:absolute;` + Object.keys(pos).map((value2) => `${value2}:${px(pos[value2])};`).join("");
  },
  "absolute": (value) => `position:absolute;${makePositionWithSemi(value)}`,
  "relative": (value) => `position:relative;${makePositionWithSemi(value)}`,
  "sticky": (value) => `position:sticky;${makePositionWithSemi(value)}`,
  "sticky-top": (value = "0") => `position:sticky;top:${px(value)};`,
  "sticky-right": (value = "0") => `position:sticky;right:${px(value)};`,
  "sticky-bottom": (value = "0") => `position:sticky;bottom:${px(value)};`,
  "sticky-left": (value = "0") => `position:sticky;left:${px(value)};`,
  "fixed": (value) => `position:fixed;${makePositionWithSemi(value)}`,
  "static": () => `position:static;`,
  // Position
  "top": (value) => `top:${px(value)};`,
  "left": (value) => `left:${px(value)};`,
  "right": (value) => `right:${px(value)};`,
  "bottom": (value) => `bottom:${px(value)};`,
  "x": (value) => makePosition2X(value),
  "y": (value) => makePosition2Y(value),
  "z": (value) => `z-index:${cssvar(value)};`,
  "isolate": () => `isolation:isolate;`,
  // Visibility
  "none": () => `display:none;`,
  "hidden": () => `visibility:hidden;`,
  "invisible": () => `visibility:hidden;`,
  "blind": () => `position:absolute;width:1px;height:1px;padding:0;border:0;margin:-1px;white-space:nowrap;overflow:hidden;clip-path:inset(100%);`,
  "sr-only": () => `position:absolute;width:1px;height:1px;padding:0;border:0;margin:-1px;white-space:nowrap;overflow:hidden;clip-path:inset(100%);`,
  "gone": () => `position:absolute;width:1px;height:1px;padding:0;border:0;margin:-1px;white-space:nowrap;overflow:hidden;clip-path:inset(100%);`,
  "visible": () => `visibility:visible;`,
  "collapse": () => `visibility:collapse;`,
  "opacity": (value) => `opacity:${cssvar(value)};`,
  // Interactions
  "col-resize": () => `cursor:col-resize;`,
  "crosshair": () => `cursor:crosshair;`,
  "e-resize": () => `cursor:e-resize;`,
  "ew-resize": () => `cursor:ew-resize;`,
  "grab": () => `&{cursor:grab;}&:active{cursor:grabbing;}`,
  "grabbing": () => `cursor:grabbing;`,
  "n-resize": () => `cursor:n-resize;`,
  "ne-resize": () => `cursor:ne-resize;`,
  "nesw-resize": () => `cursor:nesw-resize;`,
  "ns-resize": () => `cursor:ns-resize;`,
  "nw-resize": () => `cursor:nw-resize;`,
  "nwse-resize": () => `cursor:nwse-resize;`,
  "not-allowed": () => `cursor:not-allowed;`,
  "pointer": () => `cursor:pointer;`,
  "progress": () => `cursor:progress;`,
  "row-resize": () => `cursor:row-resize;`,
  "s-resize": () => `cursor:s-resize;`,
  "se-resize": () => `cursor:se-resize;`,
  "sw-resize": () => `cursor:sw-resize;`,
  "w-resize": () => `cursor:w-resize;`,
  "zoom-in": () => `cursor:zoom-in;`,
  "zoom-out": () => `cursor:zoom-out;`,
  "cursor": (value) => `cursor:${value};`,
  "user-select-none": () => "user-select:none;-webkit-user-select:none;",
  "user-select-all": () => "user-select:all;-webkit-user-select:all;",
  "user-select-auto": () => "user-select:auto;-webkit-user-select:auto;",
  "user-select-text": () => "user-select:text;-webkit-user-select:text;",
  "user-select": (value) => `user-select:${cssvar(value)};-webkit-user-select:${cssvar(value)};`,
  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",
  // 에니메이션:transition(transform=100s/opacity=2s)
  "transition": (value) => `transition:${makeTransition(value)};`,
  // transform
  "translate": (value) => {
    const [x, y] = makeCommaValues(value, px).split(",");
    return `--a-transform-translate-x:${x};--a-transform-translate-y:${y};transform:var(--a-transform);`;
  },
  "translateX": (value) => `--a-translate-x:${px(value)};transform:var(--a-transform);`,
  "translateY": (value) => `--a-translate-y:${px(value)};transform:var(--a-transform);`,
  "rotate": (value) => {
    let [x, y, z] = makeCommaValues(value, deg).split(",");
    x = x || x;
    y = y || x;
    z = z || x;
    return `--a-rotate:${x};--a-rotate-x:${x};--a-rotate-y:${y};--a-rotate-z:${z};transform:var(--a-transform);`;
  },
  "rotateX": (value) => `--a-rotate-x:${deg(value)};transform:var(--a-transform);`,
  "rotateY": (value) => `--a-rotate-y:${deg(value)};transform:var(--a-transform);`,
  "scale": (value) => {
    let [x, y, z] = makeCommaValues(value).split(",");
    x = x || x;
    y = y || x;
    z = z || x;
    return `--a-scale-x:${x};--a-scale-y:${y};--a-scale-z:${z};transform:var(--a-transform);`;
  },
  "scaleX": (value) => `--a-scale-x:${makeNumber(+value)};transform:var(--a-transform);`,
  "scaleY": (value) => `--a-scale-y:${makeNumber(+value)};transform:var(--a-transform);`,
  "skew": (value) => {
    const [x, y] = makeCommaValues(value, deg).split(",");
    return `--a-skew-x:${x};--a-skew-y:${y};transform:var(--a-transform);`;
  },
  "skewX": (value) => `--a-skew-x:${deg(value)};transform:var(--a-transform);`,
  "skewY": (value) => `--a-skew-y:${deg(value)};transform:var(--a-transform);`,
  // @TODO: 3d transform
  // "translate3d": (value:string) => `--a-translate-x:${px(value)};--a-translate-y:${px(value)};--a-translate-z:${px(value)};transform:var(--a-transform);`,
  // "rotate3d": (value:string) => `--a-rotate-x:${deg(value)};--a-rotate-y:${deg(value)};--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
  // "translateZ": (value:string) => `--a-translate-z:${px(value)};transform:var(--a-transform);`,
  // "rotateZ": (value:string) => `--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
  // "skewZ": (value:string) => `--a-skew-z:${deg(value)};transform:var(--a-transform);`,
  // "scaleZ": (value:string) => `--a-scale-z:${makeCommaValues(value)};transform:var(--a-transform);`,
  // Util
  "ratio": (value) => `&{position:relative;}&:before{content:"";display:block;width:100%;padding-top:${makeRatio(value)};}&>*{position:absolute;top:0;left:0;width:100%;height:100%;}`,
  "aspect": (value) => `aspect-ratio:${cssvar(value.replace(/:/g, "/"))};`,
  "aspect-ratio": (value) => `aspect-ratio:${cssvar(value.replace(/:/g, "/"))};`,
  "gpu": () => `transform:translateZ(0.1px);`,
  // etc
  "content": (value = "''") => `content:${cssvar(value)};`,
  "app-region": (value) => `app-region:${value};-webkit-app-region:${value};`,
  "clip-path": (value) => `clip-path:${makeValues(value)};-webkit-clip-path:${makeValues(value)};`,
  // table
  "table-fixed": () => `table-layout:fixed;`,
  "table-auto": () => `table-layout:auto;`,
  "table-layout-fixed": () => `table-layout:fixed;`,
  "table-layout-auto": () => `table-layout:auto;`,
  // Float & Clear
  "float": (value) => `float:${cssvar(value)};`,
  "clear": (value) => `clear:${cssvar(value)};`,
  // Filter
  "blur": (value) => `filter:blur(${px(value)});-webkit-filter:blur(${px(value)});`,
  "brightness": (value) => `filter:brightness(${cssvar(value)});-webkit-filter:brightness(${cssvar(value)});`,
  "contrast": (value) => `filter:contrast(${cssvar(value)});-webkit-filter:contrast(${cssvar(value)});`,
  "drop-shadow": (value) => `filter:drop-shadow(${makeValues(value, px)});-webkit-filter:drop-shadow(${makeValues(value, px)});`,
  "grayscale": (value) => `filter:grayscale(${cssvar(value)});-webkit-filter:grayscale(${cssvar(value)});`,
  "hue-rotate": (value) => `filter:hue-rotate(${cssvar(value)});-webkit-filter:hue-rotate(${cssvar(value)});`,
  "invert": (value) => `filter:invert(${cssvar(value)});-webkit-filter:invert(${cssvar(value)});`,
  "sepia": (value) => `filter:sepia(${cssvar(value)});-webkit-filter:sepia(${cssvar(value)});`,
  "saturate": (value) => `filter:saturate(${cssvar(value)});-webkit-filter:saturate(${cssvar(value)});`,
  "backdrop-blur": (value) => `backdrop-filter:blur(${px(value)});-webkit-backdrop-filter:blur(${px(value)});`,
  "backdrop-brightness": (value) => `backdrop-filter:brightness(${cssvar(value)});-webkit-backdrop-filter:brightness(${cssvar(value)});`,
  "backdrop-contrast": (value) => `backdrop-filter:contrast(${cssvar(value)});-webkit-backdrop-filter:contrast(${cssvar(value)});`,
  "backdrop-drop-shadow": (value) => `backdrop-filter:drop-shadow(${makeValues(value, px)});-webkit-backdrop-filter:drop-shadow(${makeValues(value, px)});`,
  "backdrop-grayscale": (value) => `backdrop-filter:grayscale(${cssvar(value)});-webkit-backdrop-filter:grayscale(${cssvar(value)});`,
  "backdrop-hue-rotate": (value) => `backdrop-filter:hue-rotate(${cssvar(value)});-webkit-backdrop-filter:hue-rotate(${cssvar(value)});`,
  "backdrop-invert": (value) => `backdrop-filter:invert(${cssvar(value)});-webkit-backdrop-filter:invert(${cssvar(value)});`,
  "backdrop-sepia": (value) => `backdrop-filter:sepia(${cssvar(value)});-webkit-backdrop-filter:sepia(${cssvar(value)});`,
  "backdrop-saturate": (value) => `backdrop-filter:saturate(${cssvar(value)});-webkit-backdrop-filter:saturate(${cssvar(value)});`,
  // @TODO:triangle
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
  // elevation
  "elevation": (value) => {
    const dp = +value;
    if (!dp) {
      return `box-shadow:none;`;
    }
    const blur = dp == 1 ? 3 : dp * 2;
    const amba = (dp + 10 + dp / 9.38) / 100;
    const diry = dp < 10 ? dp % 2 == 0 ? dp - (dp / 2 - 1) : dp - (dp - 1) / 2 : dp - 4;
    const dira = (24 - Math.round(dp / 10)) / 100;
    return `box-shadow:0px ${px(dp)} ${px(blur)} rgba(0,0,0,${amba}),0px ${px(diry)} ${px(blur)} rgba(0,0,0,${dira});`;
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
  // "touch:":{media:`(hover:none)`,selector:`html &`},
  // "!touch:":{media:`(hover:hover)`,selector:`html &`},
  // @TBD: don't use it!
  "touch:": { media: `(max-device-width:1023.98px)`, selector: `html &` },
  "!touch:": { media: `(min-device-width:1024px)`, selector: `html &` },
  "portrait:": { media: `(orientation:portrait)`, selector: `html &` },
  "landscape:": { media: `(orientation:landscape)`, selector: `html &` },
  "print:": { media: `print`, selector: `html &` },
  "screen:": { media: `screen`, selector: `html &` },
  "speech:": { media: `speech`, selector: `html &` },
  // dark:@TBD
  "dark:": { selector: `@media(prefers-color-scheme:dark){html &{...}}
html.dark &{...}` }
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
  "&:": (selector) => `${selector}`,
  "&.": (selector) => `${selector}`,
  "&[": (selector) => `${selector}`,
  ".": (selector) => `&${selector},${selector} &`,
  "[": (selector) => `&${selector},${selector} &`,
  ">": (selector) => `&${selector}`,
  "+": (selector) => `&${selector}`,
  "#": (selector) => `&${selector}`
};

// packages/vite/src/core/atomizer.ts
var PREFIX_RULES = {
  ...PREFIX_PSEUDO_CLASS,
  ...PREFIX_MEDIA_QUERY
};
var parseAtoms = (code) => {
  const delimiter = /["'`]|\s+/g;
  const atoms = /* @__PURE__ */ new Set();
  let lastIndex = 0;
  code += " ";
  code.replace(delimiter, (a, index2) => {
    if (code[index2 - 1] === "(" || code[index2 + 1] === ")") {
      return a;
    }
    let token2 = code.slice(lastIndex, index2);
    if (token2.startsWith("class:")) {
      token2 = token2.slice("class:".length).split("=")[0];
    }
    if (token2) {
      atoms.add(token2);
    }
    lastIndex = index2 + a.length;
    return a;
  });
  return [...atoms];
};
var lex = [
  ["(hexcolor)", /(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/],
  ["(important)", /(!+$|!+\+)/],
  ["(string)", /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],
  ["(operator)", /(::|>>|&:|&\.|&\[|[-+~|*/%!#@?:;.,<>=[\](){}])/],
  ["(ident)", /((?:\\.|[^!'":+[\](){}#])+)/],
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
  return tokens;
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
  const makePseudo = prefixRules[selector + token.id];
  if (makePseudo) {
    return makePseudo;
  }
  const makeSelector = PREFIX_SELECTOR[type];
  if (makeSelector) {
    return { selector: makeSelector(selector).replace(/>>/g, " ") };
  }
  const value = e.slice(0, 2).map((r) => r.value).join("");
  const makeAtRule = AT_RULE[value];
  if (makeAtRule) {
    return makeAtRule(selector, e);
  }
  if (/^[-a-z]+$/.test(type)) {
    return { selector: `&${token.id}${selector}` };
  }
  throw new Error("Invalid Prefix Syntax:" + token.id);
};
var validateCSS = (s) => {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
    "'": "'",
    '"': '"',
    "`": "`"
  };
  let inString = null;
  let lastChar = null;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (inString) {
      if (char === inString && lastChar !== "\\") {
        if (stack.length === 0 || stack.pop() !== pairs[char]) {
          return false;
        }
        inString = null;
      }
      lastChar = char;
      continue;
    }
    if (char === "(" || char === "{" || char === "[" || char === "'" || char === '"' || char === "`") {
      stack.push(char);
      if (char === "'" || char === '"' || char === "`") {
        inString = char;
      }
    } else if (char === ")" || char === "}" || char === "]" || char === "'" || char === '"' || char === "`") {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
    lastChar = char;
  }
  return stack.length === 0;
};
var generateAtomicCss = (rules, prefixRules) => {
  const priorityTable = Object.fromEntries(Object.keys(rules).map((key, index2) => [key, index2 + 1]));
  return (script) => {
    try {
      tokenize(script);
      const selectors = [];
      const declarations = [];
      while (token) {
        const e = expr();
        if (e.find((e2) => e2.id === "(") && e[e.length - 1].id !== ")") {
          throw new Error("Invalid Syntax!");
        }
        if (token && (token.id === ":" || token.id === "::")) {
          const rule = parsePrefix(prefixRules, e);
          selectors.push(rule);
          next();
          continue;
        }
        if (!token || token.id === "(important)" || token.id === "+") {
          let property = e[0].value;
          if (property === ">>") {
            selectors.push({ selector: "& *" });
            e.shift();
            property = e[0].value;
          } else if (property === ">") {
            selectors.push({ selector: "&>*" });
            e.shift();
            property = e[0].value;
          }
          const value = e.slice(2, -1).map((r) => r.value).join("");
          const rule = rules[property];
          let priority = priorityTable[property + property.includes("(") ? "(" : ""] || priorityTable[property] || 0;
          let declaration = (() => {
            if (rule)
              return value === "" ? rule() : rule(value);
            if (value && ALL_PROPERTIES[property])
              return `${property}:${makeValues(value)};`;
            throw new Error("Not defined property: " + property);
          })();
          if (declaration.search("undefined") >= 0) {
            throw new Error("Not defined property: " + property);
          }
          if (token && token.id === "(important)") {
            declaration = declaration.replace(/;/g, (a, b, c) => c.charAt(b - 1) !== "\\" ? "!important;" : a);
            priority = 9999 + token.value.length;
          }
          declarations.push({ declaration, priority });
        }
        next();
      }
      const mediaQuery = selectors.map((a) => a.media).filter(Boolean);
      const media = mediaQuery.length ? "@media" + mediaQuery.join(" and ") : "";
      const atom = "." + cssEscape(script);
      const selector = selectors.map((a) => a.selector).filter(Boolean).map((selector2) => selector2.split(",")).reduce((prev, curr) => {
        return prev.map((prev2) => curr.map((selector2) => selector2.replace(/&/g, prev2))).flat();
      }, [atom]).join(",");
      return declarations.map(({ declaration, priority }) => {
        if (!declaration) {
          throw new Error("no declaration");
        }
        let rule = "";
        if (declaration.includes("&")) {
          rule = declaration.replace(/[&]/g, selector);
        } else {
          if (selector.includes("{...}")) {
            rule = selector.replace(new RegExp("{...}", "g"), "{" + declaration + "}");
          } else {
            rule = selector + "{" + declaration + "}";
          }
        }
        const finalRule = media ? media + "{" + rule + "}" : rule;
        if (!validateCSS(finalRule)) {
          throw new Error("no validate css!!");
        }
        return [finalRule, priority];
      });
    } catch (e) {
    }
  };
};
var sortByRule = (a, b) => a[1] - b[1];
var createGenerateCss = (rules = {}, prefixRules = {}) => {
  rules = { ...RULES, ...rules };
  prefixRules = { ...PREFIX_RULES, ...prefixRules };
  return (classList) => classList.flatMap(generateAtomicCss(rules, prefixRules)).filter(Boolean).sort(sortByRule).map((a) => a[0]);
};
var generateCss = createGenerateCss();

// packages/vite/src/vite/vite-plugin-adorable-css.ts
var ADORABLE_CSS = "@adorable.css";
var VIRTUAL_PATH = "/" + ADORABLE_CSS;
var BUILD_PLACEHOLDER = `#--adorable-css--{top:1}`;
var DEBOUNCE_TIMEOUT = 250;
var CONFIG = {
  preLoads: ["**/*.html"],
  include: ["**/*.{svelte,tsx,jsx,vue,mdx,svx,html}"],
  reset,
  rules: {},
  prefixRules: {}
};
var adorableCSS = (config2) => {
  config2 = { ...CONFIG, ...config2 };
  let isHMR = false;
  let timestamp = Date.now();
  let configRoot = "";
  const servers = [];
  const entry = /* @__PURE__ */ Object.create(null);
  const generateCss2 = createGenerateCss(config2.rules, config2.prefixRules);
  const checkTargetFile = (id) => {
    if (id.startsWith(configRoot)) {
      id = id.slice(configRoot.length);
    }
    return (config2.include ?? []).some((glob) => micromatch.isMatch(id, glob));
  };
  const makeStyle = () => {
    const allAtoms = Object.values(entry).flat();
    const styles = generateCss2([...new Set(allAtoms)]);
    return config2.reset + styles.join("\n");
  };
  const invalidate = () => {
    for (const server of servers) {
      const mod = server.moduleGraph.getModuleById(VIRTUAL_PATH);
      if (!mod) {
        continue;
      }
      server.moduleGraph.invalidateModule(mod);
      server.ws.send({
        type: "update",
        updates: [{
          acceptedPath: VIRTUAL_PATH,
          path: VIRTUAL_PATH,
          timestamp,
          type: "js-update"
        }]
      });
    }
  };
  let timer;
  const debounceInvalidate = () => {
    clearTimeout(timer);
    timer = setTimeout(invalidate, DEBOUNCE_TIMEOUT);
  };
  return [{
    name: `${ADORABLE_CSS}:dev`,
    apply: "serve",
    enforce: "pre",
    configureServer: (_server) => {
      configRoot = _server.config.root + "/";
      servers.push(_server);
      _server.middlewares.use((req, res, next2) => {
        if (!isHMR && req.url && checkTargetFile(req.url)) {
          debounceInvalidate();
        }
        return next2();
      });
    },
    buildStart: () => {
    },
    resolveId: (id) => id === ADORABLE_CSS || id === VIRTUAL_PATH ? VIRTUAL_PATH : void 0,
    load: (id) => {
      if (id === VIRTUAL_PATH) {
        return makeStyle();
      }
    },
    transform(code, id) {
      if (isHMR)
        return code;
      if (id === VIRTUAL_PATH)
        return code;
      if (!checkTargetFile(id))
        return code;
      entry[id] = parseAtoms(code);
      timestamp = Date.now();
    },
    async handleHotUpdate({ file, read }) {
      if (!checkTargetFile(file))
        return;
      isHMR = true;
      entry[file] = parseAtoms(await read());
      timestamp = Date.now();
      invalidate();
    }
  }, {
    name: `${ADORABLE_CSS}:build`,
    apply: "build",
    enforce: "pre",
    resolveId: (id) => id === ADORABLE_CSS || id === VIRTUAL_PATH ? VIRTUAL_PATH : void 0,
    load: (id) => id === VIRTUAL_PATH ? BUILD_PLACEHOLDER : void 0,
    transform(code, id) {
      if (checkTargetFile(id)) {
        entry[id] = parseAtoms(code);
      }
      return void 0;
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    generateBundle(options, bundle) {
      const adorableCSS2 = makeStyle();
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === "asset" && typeof chunk.source === "string") {
          chunk.source = chunk.source.replace(BUILD_PLACEHOLDER, adorableCSS2);
        }
      }
    }
  }];
};

// vite.config.ts
var config = {
  plugins: [adorableCSS(), sveltekit()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      strict: false
    }
  },
  resolve: {
    alias: {
      "src": resolve("src"),
      "packages": resolve("packages")
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZXMvdml0ZS9zcmMvdml0ZS92aXRlLXBsdWdpbi1hZG9yYWJsZS1jc3MudHMiLCAicGFja2FnZXMvdml0ZS9zcmMvY29yZS9jb25zdC50cyIsICJwYWNrYWdlcy92aXRlL3NyYy9jb3JlL2Nzc0VzY2FwZS50cyIsICJwYWNrYWdlcy92aXRlL3NyYy9jb3JlL21ha2VWYWx1ZS50cyIsICJwYWNrYWdlcy92aXRlL3NyYy9jb3JlL3J1bGVzLnRzIiwgInBhY2thZ2VzL3ZpdGUvc3JjL2NvcmUvYXRvbWl6ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2FrYW8vRGVza3RvcC9AYWRvcmFibGUtY3NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMva2FrYW8vRGVza3RvcC9AYWRvcmFibGUtY3NzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rYWthby9EZXNrdG9wL0BhZG9yYWJsZS1jc3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQge3Jlc29sdmV9IGZyb20gXCJwYXRoXCJcbmltcG9ydCB7c3ZlbHRla2l0fSBmcm9tIFwiQHN2ZWx0ZWpzL2tpdC92aXRlXCJcbmltcG9ydCB0eXBlIHtVc2VyQ29uZmlnfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQge2Fkb3JhYmxlQ1NTfSBmcm9tIFwiLi9wYWNrYWdlcy92aXRlL3NyYy92aXRlXCJcblxuY29uc3QgY29uZmlnOlVzZXJDb25maWcgPSB7XG4gIHBsdWdpbnM6IFthZG9yYWJsZUNTUygpLCBzdmVsdGVraXQoKV0sXG4gIHNlcnZlcjoge1xuICAgIGZzOiB7XG4gICAgICAvLyBBbGxvdyBzZXJ2aW5nIGZpbGVzIGZyb20gb25lIGxldmVsIHVwIHRvIHRoZSBwcm9qZWN0IHJvb3RcbiAgICAgIHN0cmljdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJzcmNcIjogcmVzb2x2ZShcInNyY1wiKSxcbiAgICAgIFwicGFja2FnZXNcIjogcmVzb2x2ZShcInBhY2thZ2VzXCIpLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2FrYW8vRGVza3RvcC9AYWRvcmFibGUtY3NzL3BhY2thZ2VzL3ZpdGUvc3JjL3ZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9rYWthby9EZXNrdG9wL0BhZG9yYWJsZS1jc3MvcGFja2FnZXMvdml0ZS9zcmMvdml0ZS92aXRlLXBsdWdpbi1hZG9yYWJsZS1jc3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2tha2FvL0Rlc2t0b3AvQGFkb3JhYmxlLWNzcy9wYWNrYWdlcy92aXRlL3NyYy92aXRlL3ZpdGUtcGx1Z2luLWFkb3JhYmxlLWNzcy50c1wiOy8vIGltcG9ydCBjaG9raWRhciBmcm9tIFwiY2hva2lkYXJcIlxuLy8gaW1wb3J0IHtwcm9taXNlcyBhcyBmc30gZnJvbSBcImZzXCJcblxuaW1wb3J0IHR5cGUge1BsdWdpbn0gZnJvbSBcInZpdGVcIlxuXG5pbXBvcnQgbWljcm9tYXRjaCBmcm9tIFwibWljcm9tYXRjaFwiXG5pbXBvcnQge2NyZWF0ZUdlbmVyYXRlQ3NzLCBwYXJzZUF0b21zLCBQcmVmaXhSdWxlcywgUnVsZXN9IGZyb20gXCIuLi9jb3JlL2F0b21pemVyXCJcbmltcG9ydCB7cmVzZXR9IGZyb20gXCIuLi9jb3JlL3J1bGVzXCJcblxuaW50ZXJmYWNlIENvbmZpZyB7XG4gIGluY2x1ZGU6c3RyaW5nW11cbiAgcmVzZXQ6c3RyaW5nXG4gIHJ1bGVzOlJ1bGVzXG4gIHByZWZpeFJ1bGVzOlByZWZpeFJ1bGVzXG4gIHByZUxvYWRzOnN0cmluZ1tdXG59XG5cbmNvbnN0IEFET1JBQkxFX0NTUyA9IFwiQGFkb3JhYmxlLmNzc1wiXG5jb25zdCBWSVJUVUFMX1BBVEggPSBcIi9cIiArIEFET1JBQkxFX0NTU1xuY29uc3QgQlVJTERfUExBQ0VIT0xERVIgPSBgIy0tYWRvcmFibGUtY3NzLS17dG9wOjF9YFxuY29uc3QgREVCT1VOQ0VfVElNRU9VVCA9IDI1MFxuXG5jb25zdCBDT05GSUc6Q29uZmlnID0ge1xuICBwcmVMb2FkczogW1wiKiovKi5odG1sXCJdLFxuICBpbmNsdWRlOiBbXCIqKi8qLntzdmVsdGUsdHN4LGpzeCx2dWUsbWR4LHN2eCxodG1sfVwiXSxcbiAgcmVzZXQsXG4gIHJ1bGVzOiB7fSxcbiAgcHJlZml4UnVsZXM6IHt9LFxufVxuXG5leHBvcnQgY29uc3QgYWRvcmFibGVDU1MgPSAoY29uZmlnPzpQYXJ0aWFsPENvbmZpZz4pOlBsdWdpbltdID0+IHtcbiAgY29uZmlnID0gey4uLkNPTkZJRywgLi4uY29uZmlnfVxuXG4gIGxldCBpc0hNUiA9IGZhbHNlXG4gIGxldCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpXG5cbiAgbGV0IGNvbmZpZ1Jvb3QgPSBcIlwiXG5cbiAgY29uc3Qgc2VydmVycyA9IFtdXG4gIGNvbnN0IGVudHJ5OlJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBjb25zdCBnZW5lcmF0ZUNzcyA9IGNyZWF0ZUdlbmVyYXRlQ3NzKGNvbmZpZy5ydWxlcywgY29uZmlnLnByZWZpeFJ1bGVzKVxuXG4gIGNvbnN0IGNoZWNrVGFyZ2V0RmlsZSA9IChpZDpzdHJpbmcpID0+IHtcbiAgICBpZiAoaWQuc3RhcnRzV2l0aChjb25maWdSb290KSkge1xuICAgICAgaWQgPSBpZC5zbGljZShjb25maWdSb290Lmxlbmd0aClcbiAgICB9XG4gICAgcmV0dXJuIChjb25maWcuaW5jbHVkZSA/PyBbXSkuc29tZShnbG9iID0+IG1pY3JvbWF0Y2guaXNNYXRjaChpZCwgZ2xvYikpXG4gIH1cblxuICBjb25zdCBtYWtlU3R5bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsQXRvbXMgPSBPYmplY3QudmFsdWVzKGVudHJ5KS5mbGF0KClcbiAgICBjb25zdCBzdHlsZXMgPSBnZW5lcmF0ZUNzcyhbLi4ubmV3IFNldChhbGxBdG9tcyldKVxuICAgIHJldHVybiBjb25maWcucmVzZXQgKyBzdHlsZXMuam9pbihcIlxcblwiKVxuICB9XG5cbiAgY29uc3QgaW52YWxpZGF0ZSA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImludmFsaWRhdGVcIilcblxuICAgIGZvciAoY29uc3Qgc2VydmVyIG9mIHNlcnZlcnMpIHtcbiAgICAgIGNvbnN0IG1vZCA9IHNlcnZlci5tb2R1bGVHcmFwaC5nZXRNb2R1bGVCeUlkKFZJUlRVQUxfUEFUSClcbiAgICAgIGlmICghbW9kKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHNlcnZlci5tb2R1bGVHcmFwaC5pbnZhbGlkYXRlTW9kdWxlKG1vZClcblxuICAgICAgc2VydmVyLndzLnNlbmQoe1xuICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICB1cGRhdGVzOiBbe1xuICAgICAgICAgIGFjY2VwdGVkUGF0aDogVklSVFVBTF9QQVRILFxuICAgICAgICAgIHBhdGg6IFZJUlRVQUxfUEFUSCxcbiAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgdHlwZTogXCJqcy11cGRhdGVcIixcbiAgICAgICAgfV0sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGxldCB0aW1lcjpOb2RlSlMuVGltZXJcbiAgY29uc3QgZGVib3VuY2VJbnZhbGlkYXRlID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoaW52YWxpZGF0ZSwgREVCT1VOQ0VfVElNRU9VVClcbiAgfVxuXG4gIHJldHVybiBbe1xuICAgIG5hbWU6IGAke0FET1JBQkxFX0NTU306ZGV2YCxcbiAgICBhcHBseTogXCJzZXJ2ZVwiLFxuICAgIGVuZm9yY2U6IFwicHJlXCIsXG5cbiAgICBjb25maWd1cmVTZXJ2ZXI6IChfc2VydmVyKSA9PiB7XG5cbiAgICAgIC8vIGdsb2JcdUM3NDQgXHVDNzA0XHVENTVDIGNvbmZpZy5yb290XG4gICAgICBjb25maWdSb290ID0gX3NlcnZlci5jb25maWcucm9vdCArIFwiL1wiXG5cbiAgICAgIHNlcnZlcnMucHVzaChfc2VydmVyKVxuICAgICAgX3NlcnZlci5taWRkbGV3YXJlcy51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmICghaXNITVIgJiYgcmVxLnVybCAmJiAoY2hlY2tUYXJnZXRGaWxlKHJlcS51cmwpKSkge1xuICAgICAgICAgIGRlYm91bmNlSW52YWxpZGF0ZSgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQoKVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgYnVpbGRTdGFydDogKCkgPT4ge1xuICAgICAgLy8gY29uc3Qge3ByZUxvYWRzfSA9IGNvbmZpZ1xuICAgICAgLy9cbiAgICAgIC8vIGNvbnN0IHdhdGNoZXIgPSBjaG9raWRhci53YXRjaChwcmVMb2Fkcywge1xuICAgICAgLy8gICBpZ25vcmVkOiAocGF0aCkgPT4gcGF0aC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlc1wiKVxuICAgICAgLy8gfSlcbiAgICAgIC8vXG4gICAgICAvLyB3YXRjaGVyLm9uKFwiY2hhbmdlXCIsIGFzeW5jIChwYXRoKSA9PiB7XG4gICAgICAvLyAgIGVudHJ5W3BhdGhdID0gcGFyc2VBdG9tcyhhd2FpdCBmcy5yZWFkRmlsZShwYXRoLCBcInV0Zi04XCIpKVxuICAgICAgLy8gICBkZWJvdW5jZUludmFsaWRhdGUoKVxuICAgICAgLy8gfSlcbiAgICAgIC8vXG4gICAgICAvLyB3YXRjaGVyLm9uKFwicmVhZHlcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gICBjb25zdCB3YXRjaGVkUGF0aHMgPSB3YXRjaGVyLmdldFdhdGNoZWQoKVxuICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhcIi0tLSByZWFkeSAtLVwiKVxuICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhcIndhdGNoZWRQYXRoc1wiLCB3YXRjaGVkUGF0aHMpXG4gICAgICAvL1xuICAgICAgLy8gICBhd2FpdCBQcm9taXNlLmFsbChPYmplY3QuZW50cmllcyh3YXRjaGVkUGF0aHMpXG4gICAgICAvLyAgICAgLm1hcCgoW3BhdGgsIGZpbGVzXSkgPT4gKGZpbGVzIGFzIHN0cmluZ1tdKVxuICAgICAgLy8gICAgICAgLm1hcChmaWxlID0+IHBhdGggKyBcIi9cIiArIGZpbGUpXG4gICAgICAvLyAgICAgICAubWFwKGZpbGVwYXRoID0+IGZzLnJlYWRGaWxlKGZpbGVwYXRoLCBcInV0Zi04XCIpXG4gICAgICAvLyAgICAgICAgIC50aGVuKGRhdGEgPT4gZW50cnlbZmlsZXBhdGhdID0gcGFyc2VBdG9tcyhkYXRhKSkpKVxuICAgICAgLy8gICAgIC5mbGF0KDEpKVxuICAgICAgLy9cbiAgICAgIC8vICAgZGVib3VuY2VJbnZhbGlkYXRlKClcbiAgICAgIC8vIH0pXG4gICAgfSxcblxuICAgIHJlc29sdmVJZDogKGlkOnN0cmluZykgPT4gKGlkID09PSBBRE9SQUJMRV9DU1MgfHwgaWQgPT09IFZJUlRVQUxfUEFUSCkgPyBWSVJUVUFMX1BBVEggOiB1bmRlZmluZWQsXG5cbiAgICBsb2FkOiAoaWQ6c3RyaW5nKSA9PiB7XG4gICAgICBpZiAoaWQgPT09IFZJUlRVQUxfUEFUSCkge1xuICAgICAgICByZXR1cm4gbWFrZVN0eWxlKClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdHJhbnNmb3JtKGNvZGUsIGlkKSB7XG4gICAgICBpZiAoaXNITVIpIHJldHVybiBjb2RlXG4gICAgICBpZiAoaWQgPT09IFZJUlRVQUxfUEFUSCkgcmV0dXJuIGNvZGVcbiAgICAgIGlmICghY2hlY2tUYXJnZXRGaWxlKGlkKSkgcmV0dXJuIGNvZGVcbiAgICAgIGVudHJ5W2lkXSA9IHBhcnNlQXRvbXMoY29kZSlcbiAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgICB9LFxuXG4gICAgYXN5bmMgaGFuZGxlSG90VXBkYXRlKHtmaWxlLCByZWFkfSkge1xuICAgICAgaWYgKCFjaGVja1RhcmdldEZpbGUoZmlsZSkpIHJldHVyblxuICAgICAgaXNITVIgPSB0cnVlXG4gICAgICBlbnRyeVtmaWxlXSA9IHBhcnNlQXRvbXMoYXdhaXQgcmVhZCgpKVxuICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICAgICAgaW52YWxpZGF0ZSgpXG4gICAgfSxcbiAgfSwge1xuICAgIG5hbWU6IGAke0FET1JBQkxFX0NTU306YnVpbGRgLFxuICAgIGFwcGx5OiBcImJ1aWxkXCIsXG4gICAgZW5mb3JjZTogXCJwcmVcIixcblxuICAgIHJlc29sdmVJZDogKGlkOnN0cmluZykgPT4gKGlkID09PSBBRE9SQUJMRV9DU1MgfHwgaWQgPT09IFZJUlRVQUxfUEFUSCkgPyBWSVJUVUFMX1BBVEggOiB1bmRlZmluZWQsXG4gICAgbG9hZDogKGlkOnN0cmluZykgPT4gaWQgPT09IFZJUlRVQUxfUEFUSCA/IEJVSUxEX1BMQUNFSE9MREVSIDogdW5kZWZpbmVkLFxuXG4gICAgdHJhbnNmb3JtKGNvZGUsIGlkKSB7XG4gICAgICBpZiAoY2hlY2tUYXJnZXRGaWxlKGlkKSkge1xuICAgICAgICBlbnRyeVtpZF0gPSBwYXJzZUF0b21zKGNvZGUpXG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSxcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2VuZXJhdGVCdW5kbGUob3B0aW9ucywgYnVuZGxlOlJlY29yZDxzdHJpbmcsIHsgZmlsZU5hbWU6c3RyaW5nLCB0eXBlOnN0cmluZywgc291cmNlOnN0cmluZyB9Pikge1xuICAgICAgY29uc3QgYWRvcmFibGVDU1MgPSBtYWtlU3R5bGUoKVxuICAgICAgZm9yIChjb25zdCBjaHVuayBvZiBPYmplY3QudmFsdWVzKGJ1bmRsZSkpIHtcbiAgICAgICAgaWYgKGNodW5rLnR5cGUgPT09IFwiYXNzZXRcIiAmJiB0eXBlb2YgY2h1bmsuc291cmNlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY2h1bmsuc291cmNlID0gY2h1bmsuc291cmNlLnJlcGxhY2UoQlVJTERfUExBQ0VIT0xERVIsIGFkb3JhYmxlQ1NTKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfV1cbn1cblxuZXhwb3J0ICogZnJvbSBcIi4uL2NvcmUvbWFrZVZhbHVlXCJcbmV4cG9ydCAqIGZyb20gXCIuLi9jb3JlL3J1bGVzXCJcbmV4cG9ydCAqIGZyb20gXCIuLi9jb3JlL2F0b21pemVyXCJcbmV4cG9ydCAqIGZyb20gXCIuLi9jb3JlL2NvbnN0XCIiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9rYWthby9EZXNrdG9wL0BhZG9yYWJsZS1jc3MvcGFja2FnZXMvdml0ZS9zcmMvY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tha2FvL0Rlc2t0b3AvQGFkb3JhYmxlLWNzcy9wYWNrYWdlcy92aXRlL3NyYy9jb3JlL2NvbnN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rYWthby9EZXNrdG9wL0BhZG9yYWJsZS1jc3MvcGFja2FnZXMvdml0ZS9zcmMvY29yZS9jb25zdC50c1wiO2V4cG9ydCBjb25zdCBBTExfUFJPUEVSVElFUyA9IHtcbiAgXCItLSpcIjogMSxcbiAgXCItbXMtYWNjZWxlcmF0b3JcIjogMSxcbiAgXCItbXMtYmxvY2stcHJvZ3Jlc3Npb25cIjogMSxcbiAgXCItbXMtY29udGVudC16b29tLWNoYWluaW5nXCI6IDEsXG4gIFwiLW1zLWNvbnRlbnQtem9vbWluZ1wiOiAxLFxuICBcIi1tcy1jb250ZW50LXpvb20tbGltaXRcIjogMSxcbiAgXCItbXMtY29udGVudC16b29tLWxpbWl0LW1heFwiOiAxLFxuICBcIi1tcy1jb250ZW50LXpvb20tbGltaXQtbWluXCI6IDEsXG4gIFwiLW1zLWNvbnRlbnQtem9vbS1zbmFwXCI6IDEsXG4gIFwiLW1zLWNvbnRlbnQtem9vbS1zbmFwLXBvaW50c1wiOiAxLFxuICBcIi1tcy1jb250ZW50LXpvb20tc25hcC10eXBlXCI6IDEsXG4gIFwiLW1zLWZpbHRlclwiOiAxLFxuICBcIi1tcy1mbG93LWZyb21cIjogMSxcbiAgXCItbXMtZmxvdy1pbnRvXCI6IDEsXG4gIFwiLW1zLWdyaWQtY29sdW1uc1wiOiAxLFxuICBcIi1tcy1ncmlkLXJvd3NcIjogMSxcbiAgXCItbXMtaGlnaC1jb250cmFzdC1hZGp1c3RcIjogMSxcbiAgXCItbXMtaHlwaGVuYXRlLWxpbWl0LWNoYXJzXCI6IDEsXG4gIFwiLW1zLWh5cGhlbmF0ZS1saW1pdC1saW5lc1wiOiAxLFxuICBcIi1tcy1oeXBoZW5hdGUtbGltaXQtem9uZVwiOiAxLFxuICBcIi1tcy1pbWUtYWxpZ25cIjogMSxcbiAgXCItbXMtb3ZlcmZsb3ctc3R5bGVcIjogMSxcbiAgXCItbXMtc2Nyb2xsYmFyLTNkbGlnaHQtY29sb3JcIjogMSxcbiAgXCItbXMtc2Nyb2xsYmFyLWFycm93LWNvbG9yXCI6IDEsXG4gIFwiLW1zLXNjcm9sbGJhci1iYXNlLWNvbG9yXCI6IDEsXG4gIFwiLW1zLXNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yXCI6IDEsXG4gIFwiLW1zLXNjcm9sbGJhci1mYWNlLWNvbG9yXCI6IDEsXG4gIFwiLW1zLXNjcm9sbGJhci1oaWdobGlnaHQtY29sb3JcIjogMSxcbiAgXCItbXMtc2Nyb2xsYmFyLXNoYWRvdy1jb2xvclwiOiAxLFxuICBcIi1tcy1zY3JvbGxiYXItdHJhY2stY29sb3JcIjogMSxcbiAgXCItbXMtc2Nyb2xsLWNoYWluaW5nXCI6IDEsXG4gIFwiLW1zLXNjcm9sbC1saW1pdFwiOiAxLFxuICBcIi1tcy1zY3JvbGwtbGltaXQteC1tYXhcIjogMSxcbiAgXCItbXMtc2Nyb2xsLWxpbWl0LXgtbWluXCI6IDEsXG4gIFwiLW1zLXNjcm9sbC1saW1pdC15LW1heFwiOiAxLFxuICBcIi1tcy1zY3JvbGwtbGltaXQteS1taW5cIjogMSxcbiAgXCItbXMtc2Nyb2xsLXJhaWxzXCI6IDEsXG4gIFwiLW1zLXNjcm9sbC1zbmFwLXBvaW50cy14XCI6IDEsXG4gIFwiLW1zLXNjcm9sbC1zbmFwLXBvaW50cy15XCI6IDEsXG4gIFwiLW1zLXNjcm9sbC1zbmFwLXR5cGVcIjogMSxcbiAgXCItbXMtc2Nyb2xsLXNuYXAteFwiOiAxLFxuICBcIi1tcy1zY3JvbGwtc25hcC15XCI6IDEsXG4gIFwiLW1zLXNjcm9sbC10cmFuc2xhdGlvblwiOiAxLFxuICBcIi1tcy10ZXh0LWF1dG9zcGFjZVwiOiAxLFxuICBcIi1tcy10b3VjaC1zZWxlY3RcIjogMSxcbiAgXCItbXMtdXNlci1zZWxlY3RcIjogMSxcbiAgXCItbXMtd3JhcC1mbG93XCI6IDEsXG4gIFwiLW1zLXdyYXAtbWFyZ2luXCI6IDEsXG4gIFwiLW1zLXdyYXAtdGhyb3VnaFwiOiAxLFxuICBcIi1tb3otYXBwZWFyYW5jZVwiOiAxLFxuICBcIi1tb3otYmluZGluZ1wiOiAxLFxuICBcIi1tb3otYm9yZGVyLWJvdHRvbS1jb2xvcnNcIjogMSxcbiAgXCItbW96LWJvcmRlci1sZWZ0LWNvbG9yc1wiOiAxLFxuICBcIi1tb3otYm9yZGVyLXJpZ2h0LWNvbG9yc1wiOiAxLFxuICBcIi1tb3otYm9yZGVyLXRvcC1jb2xvcnNcIjogMSxcbiAgXCItbW96LWNvbnRleHQtcHJvcGVydGllc1wiOiAxLFxuICBcIi1tb3otZmxvYXQtZWRnZVwiOiAxLFxuICBcIi1tb3otZm9yY2UtYnJva2VuLWltYWdlLWljb25cIjogMSxcbiAgXCItbW96LWltYWdlLXJlZ2lvblwiOiAxLFxuICBcIi1tb3otb3JpZW50XCI6IDEsXG4gIFwiLW1vei1vdXRsaW5lLXJhZGl1c1wiOiAxLFxuICBcIi1tb3otb3V0bGluZS1yYWRpdXMtYm90dG9tbGVmdFwiOiAxLFxuICBcIi1tb3otb3V0bGluZS1yYWRpdXMtYm90dG9tcmlnaHRcIjogMSxcbiAgXCItbW96LW91dGxpbmUtcmFkaXVzLXRvcGxlZnRcIjogMSxcbiAgXCItbW96LW91dGxpbmUtcmFkaXVzLXRvcHJpZ2h0XCI6IDEsXG4gIFwiLW1vei1zdGFjay1zaXppbmdcIjogMSxcbiAgXCItbW96LXRleHQtYmxpbmtcIjogMSxcbiAgXCItbW96LXVzZXItZm9jdXNcIjogMSxcbiAgXCItbW96LXVzZXItaW5wdXRcIjogMSxcbiAgXCItbW96LXVzZXItbW9kaWZ5XCI6IDEsXG4gIFwiLW1vei13aW5kb3ctZHJhZ2dpbmdcIjogMSxcbiAgXCItbW96LXdpbmRvdy1zaGFkb3dcIjogMSxcbiAgXCItd2Via2l0LWFwcGVhcmFuY2VcIjogMSxcbiAgXCItd2Via2l0LWJvcmRlci1iZWZvcmVcIjogMSxcbiAgXCItd2Via2l0LWJvcmRlci1iZWZvcmUtY29sb3JcIjogMSxcbiAgXCItd2Via2l0LWJvcmRlci1iZWZvcmUtc3R5bGVcIjogMSxcbiAgXCItd2Via2l0LWJvcmRlci1iZWZvcmUtd2lkdGhcIjogMSxcbiAgXCItd2Via2l0LWJveC1yZWZsZWN0XCI6IDEsXG4gIFwiLXdlYmtpdC1saW5lLWNsYW1wXCI6IDEsXG4gIFwiLXdlYmtpdC1tYXNrXCI6IDEsXG4gIFwiLXdlYmtpdC1tYXNrLWF0dGFjaG1lbnRcIjogMSxcbiAgXCItd2Via2l0LW1hc2stY2xpcFwiOiAxLFxuICBcIi13ZWJraXQtbWFzay1jb21wb3NpdGVcIjogMSxcbiAgXCItd2Via2l0LW1hc2staW1hZ2VcIjogMSxcbiAgXCItd2Via2l0LW1hc2stb3JpZ2luXCI6IDEsXG4gIFwiLXdlYmtpdC1tYXNrLXBvc2l0aW9uXCI6IDEsXG4gIFwiLXdlYmtpdC1tYXNrLXBvc2l0aW9uLXhcIjogMSxcbiAgXCItd2Via2l0LW1hc2stcG9zaXRpb24teVwiOiAxLFxuICBcIi13ZWJraXQtbWFzay1yZXBlYXRcIjogMSxcbiAgXCItd2Via2l0LW1hc2stcmVwZWF0LXhcIjogMSxcbiAgXCItd2Via2l0LW1hc2stcmVwZWF0LXlcIjogMSxcbiAgXCItd2Via2l0LW1hc2stc2l6ZVwiOiAxLFxuICBcIi13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nXCI6IDEsXG4gIFwiLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yXCI6IDEsXG4gIFwiLXdlYmtpdC10ZXh0LWZpbGwtY29sb3JcIjogMSxcbiAgXCItd2Via2l0LXRleHQtc3Ryb2tlXCI6IDEsXG4gIFwiLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvclwiOiAxLFxuICBcIi13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGhcIjogMSxcbiAgXCItd2Via2l0LXRvdWNoLWNhbGxvdXRcIjogMSxcbiAgXCItd2Via2l0LXVzZXItbW9kaWZ5XCI6IDEsXG4gIFwiYWNjZW50LWNvbG9yXCI6IDEsXG4gIFwiYWxpZ24tY29udGVudFwiOiAxLFxuICBcImFsaWduLWl0ZW1zXCI6IDEsXG4gIFwiYWxpZ24tc2VsZlwiOiAxLFxuICBcImFsaWduLXRyYWNrc1wiOiAxLFxuICBcImFsbFwiOiAxLFxuICBcImFuaW1hdGlvblwiOiAxLFxuICBcImFuaW1hdGlvbi1kZWxheVwiOiAxLFxuICBcImFuaW1hdGlvbi1kaXJlY3Rpb25cIjogMSxcbiAgXCJhbmltYXRpb24tZHVyYXRpb25cIjogMSxcbiAgXCJhbmltYXRpb24tZmlsbC1tb2RlXCI6IDEsXG4gIFwiYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiOiAxLFxuICBcImFuaW1hdGlvbi1uYW1lXCI6IDEsXG4gIFwiYW5pbWF0aW9uLXBsYXktc3RhdGVcIjogMSxcbiAgXCJhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCI6IDEsXG4gIFwiYXBwZWFyYW5jZVwiOiAxLFxuICBcImFzcGVjdC1yYXRpb1wiOiAxLFxuICBcImF6aW11dGhcIjogMSxcbiAgXCJiYWNrZHJvcC1maWx0ZXJcIjogMSxcbiAgXCJiYWNrZmFjZS12aXNpYmlsaXR5XCI6IDEsXG4gIFwiYmFja2dyb3VuZFwiOiAxLFxuICBcImJhY2tncm91bmQtYXR0YWNobWVudFwiOiAxLFxuICBcImJhY2tncm91bmQtYmxlbmQtbW9kZVwiOiAxLFxuICBcImJhY2tncm91bmQtY2xpcFwiOiAxLFxuICBcImJhY2tncm91bmQtY29sb3JcIjogMSxcbiAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IDEsXG4gIFwiYmFja2dyb3VuZC1vcmlnaW5cIjogMSxcbiAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6IDEsXG4gIFwiYmFja2dyb3VuZC1wb3NpdGlvbi14XCI6IDEsXG4gIFwiYmFja2dyb3VuZC1wb3NpdGlvbi15XCI6IDEsXG4gIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogMSxcbiAgXCJiYWNrZ3JvdW5kLXNpemVcIjogMSxcbiAgXCJibG9jay1vdmVyZmxvd1wiOiAxLFxuICBcImJsb2NrLXNpemVcIjogMSxcbiAgXCJib3JkZXJcIjogMSxcbiAgXCJib3JkZXItYmxvY2tcIjogMSxcbiAgXCJib3JkZXItYmxvY2stY29sb3JcIjogMSxcbiAgXCJib3JkZXItYmxvY2stc3R5bGVcIjogMSxcbiAgXCJib3JkZXItYmxvY2std2lkdGhcIjogMSxcbiAgXCJib3JkZXItYmxvY2stZW5kXCI6IDEsXG4gIFwiYm9yZGVyLWJsb2NrLWVuZC1jb2xvclwiOiAxLFxuICBcImJvcmRlci1ibG9jay1lbmQtc3R5bGVcIjogMSxcbiAgXCJib3JkZXItYmxvY2stZW5kLXdpZHRoXCI6IDEsXG4gIFwiYm9yZGVyLWJsb2NrLXN0YXJ0XCI6IDEsXG4gIFwiYm9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yXCI6IDEsXG4gIFwiYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlXCI6IDEsXG4gIFwiYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoXCI6IDEsXG4gIFwiYm9yZGVyLWJvdHRvbVwiOiAxLFxuICBcImJvcmRlci1ib3R0b20tY29sb3JcIjogMSxcbiAgXCJib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzXCI6IDEsXG4gIFwiYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIjogMSxcbiAgXCJib3JkZXItYm90dG9tLXN0eWxlXCI6IDEsXG4gIFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiOiAxLFxuICBcImJvcmRlci1jb2xsYXBzZVwiOiAxLFxuICBcImJvcmRlci1jb2xvclwiOiAxLFxuICBcImJvcmRlci1lbmQtZW5kLXJhZGl1c1wiOiAxLFxuICBcImJvcmRlci1lbmQtc3RhcnQtcmFkaXVzXCI6IDEsXG4gIFwiYm9yZGVyLWltYWdlXCI6IDEsXG4gIFwiYm9yZGVyLWltYWdlLW91dHNldFwiOiAxLFxuICBcImJvcmRlci1pbWFnZS1yZXBlYXRcIjogMSxcbiAgXCJib3JkZXItaW1hZ2Utc2xpY2VcIjogMSxcbiAgXCJib3JkZXItaW1hZ2Utc291cmNlXCI6IDEsXG4gIFwiYm9yZGVyLWltYWdlLXdpZHRoXCI6IDEsXG4gIFwiYm9yZGVyLWlubGluZVwiOiAxLFxuICBcImJvcmRlci1pbmxpbmUtZW5kXCI6IDEsXG4gIFwiYm9yZGVyLWlubGluZS1jb2xvclwiOiAxLFxuICBcImJvcmRlci1pbmxpbmUtc3R5bGVcIjogMSxcbiAgXCJib3JkZXItaW5saW5lLXdpZHRoXCI6IDEsXG4gIFwiYm9yZGVyLWlubGluZS1lbmQtY29sb3JcIjogMSxcbiAgXCJib3JkZXItaW5saW5lLWVuZC1zdHlsZVwiOiAxLFxuICBcImJvcmRlci1pbmxpbmUtZW5kLXdpZHRoXCI6IDEsXG4gIFwiYm9yZGVyLWlubGluZS1zdGFydFwiOiAxLFxuICBcImJvcmRlci1pbmxpbmUtc3RhcnQtY29sb3JcIjogMSxcbiAgXCJib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlXCI6IDEsXG4gIFwiYm9yZGVyLWlubGluZS1zdGFydC13aWR0aFwiOiAxLFxuICBcImJvcmRlci1sZWZ0XCI6IDEsXG4gIFwiYm9yZGVyLWxlZnQtY29sb3JcIjogMSxcbiAgXCJib3JkZXItbGVmdC1zdHlsZVwiOiAxLFxuICBcImJvcmRlci1sZWZ0LXdpZHRoXCI6IDEsXG4gIFwiYm9yZGVyLXJhZGl1c1wiOiAxLFxuICBcImJvcmRlci1yaWdodFwiOiAxLFxuICBcImJvcmRlci1yaWdodC1jb2xvclwiOiAxLFxuICBcImJvcmRlci1yaWdodC1zdHlsZVwiOiAxLFxuICBcImJvcmRlci1yaWdodC13aWR0aFwiOiAxLFxuICBcImJvcmRlci1zcGFjaW5nXCI6IDEsXG4gIFwiYm9yZGVyLXN0YXJ0LWVuZC1yYWRpdXNcIjogMSxcbiAgXCJib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzXCI6IDEsXG4gIFwiYm9yZGVyLXN0eWxlXCI6IDEsXG4gIFwiYm9yZGVyLXRvcFwiOiAxLFxuICBcImJvcmRlci10b3AtY29sb3JcIjogMSxcbiAgXCJib3JkZXItdG9wLWxlZnQtcmFkaXVzXCI6IDEsXG4gIFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIjogMSxcbiAgXCJib3JkZXItdG9wLXN0eWxlXCI6IDEsXG4gIFwiYm9yZGVyLXRvcC13aWR0aFwiOiAxLFxuICBcImJvcmRlci13aWR0aFwiOiAxLFxuICBcImJvdHRvbVwiOiAxLFxuICBcImJveC1hbGlnblwiOiAxLFxuICBcImJveC1kZWNvcmF0aW9uLWJyZWFrXCI6IDEsXG4gIFwiYm94LWRpcmVjdGlvblwiOiAxLFxuICBcImJveC1mbGV4XCI6IDEsXG4gIFwiYm94LWZsZXgtZ3JvdXBcIjogMSxcbiAgXCJib3gtbGluZXNcIjogMSxcbiAgXCJib3gtb3JkaW5hbC1ncm91cFwiOiAxLFxuICBcImJveC1vcmllbnRcIjogMSxcbiAgXCJib3gtcGFja1wiOiAxLFxuICBcImJveC1zaGFkb3dcIjogMSxcbiAgXCJib3gtc2l6aW5nXCI6IDEsXG4gIFwiYnJlYWstYWZ0ZXJcIjogMSxcbiAgXCJicmVhay1iZWZvcmVcIjogMSxcbiAgXCJicmVhay1pbnNpZGVcIjogMSxcbiAgXCJjYXB0aW9uLXNpZGVcIjogMSxcbiAgXCJjYXJldC1jb2xvclwiOiAxLFxuICBcImNsZWFyXCI6IDEsXG4gIFwiY2xpcFwiOiAxLFxuICBcImNsaXAtcGF0aFwiOiAxLFxuICBcImNvbG9yXCI6IDEsXG4gIFwiY29sb3ItYWRqdXN0XCI6IDEsXG4gIFwiY29sb3Itc2NoZW1lXCI6IDEsXG4gIFwiY29sdW1uLWNvdW50XCI6IDEsXG4gIFwiY29sdW1uLWZpbGxcIjogMSxcbiAgXCJjb2x1bW4tZ2FwXCI6IDEsXG4gIFwiY29sdW1uLXJ1bGVcIjogMSxcbiAgXCJjb2x1bW4tcnVsZS1jb2xvclwiOiAxLFxuICBcImNvbHVtbi1ydWxlLXN0eWxlXCI6IDEsXG4gIFwiY29sdW1uLXJ1bGUtd2lkdGhcIjogMSxcbiAgXCJjb2x1bW4tc3BhblwiOiAxLFxuICBcImNvbHVtbi13aWR0aFwiOiAxLFxuICBcImNvbHVtbnNcIjogMSxcbiAgXCJjb250YWluXCI6IDEsXG4gIFwiY29udGVudFwiOiAxLFxuICBcImNvbnRlbnQtdmlzaWJpbGl0eVwiOiAxLFxuICBcImNvdW50ZXItaW5jcmVtZW50XCI6IDEsXG4gIFwiY291bnRlci1yZXNldFwiOiAxLFxuICBcImNvdW50ZXItc2V0XCI6IDEsXG4gIFwiY3Vyc29yXCI6IDEsXG4gIFwiZGlyZWN0aW9uXCI6IDEsXG4gIFwiZGlzcGxheVwiOiAxLFxuICBcImVtcHR5LWNlbGxzXCI6IDEsXG4gIFwiZmlsdGVyXCI6IDEsXG4gIFwiZmxleFwiOiAxLFxuICBcImZsZXgtYmFzaXNcIjogMSxcbiAgXCJmbGV4LWRpcmVjdGlvblwiOiAxLFxuICBcImZsZXgtZmxvd1wiOiAxLFxuICBcImZsZXgtZ3Jvd1wiOiAxLFxuICBcImZsZXgtc2hyaW5rXCI6IDEsXG4gIFwiZmxleC13cmFwXCI6IDEsXG4gIFwiZmxvYXRcIjogMSxcbiAgXCJmb250XCI6IDEsXG4gIFwiZm9udC1mYW1pbHlcIjogMSxcbiAgXCJmb250LWZlYXR1cmUtc2V0dGluZ3NcIjogMSxcbiAgXCJmb250LWtlcm5pbmdcIjogMSxcbiAgXCJmb250LWxhbmd1YWdlLW92ZXJyaWRlXCI6IDEsXG4gIFwiZm9udC1vcHRpY2FsLXNpemluZ1wiOiAxLFxuICBcImZvbnQtdmFyaWF0aW9uLXNldHRpbmdzXCI6IDEsXG4gIFwiZm9udC1zaXplXCI6IDEsXG4gIFwiZm9udC1zaXplLWFkanVzdFwiOiAxLFxuICBcImZvbnQtc21vb3RoXCI6IDEsXG4gIFwiZm9udC1zdHJldGNoXCI6IDEsXG4gIFwiZm9udC1zdHlsZVwiOiAxLFxuICBcImZvbnQtc3ludGhlc2lzXCI6IDEsXG4gIFwiZm9udC12YXJpYW50XCI6IDEsXG4gIFwiZm9udC12YXJpYW50LWFsdGVybmF0ZXNcIjogMSxcbiAgXCJmb250LXZhcmlhbnQtY2Fwc1wiOiAxLFxuICBcImZvbnQtdmFyaWFudC1lYXN0LWFzaWFuXCI6IDEsXG4gIFwiZm9udC12YXJpYW50LWxpZ2F0dXJlc1wiOiAxLFxuICBcImZvbnQtdmFyaWFudC1udW1lcmljXCI6IDEsXG4gIFwiZm9udC12YXJpYW50LXBvc2l0aW9uXCI6IDEsXG4gIFwiZm9udC13ZWlnaHRcIjogMSxcbiAgXCJmb3JjZWQtY29sb3ItYWRqdXN0XCI6IDEsXG4gIFwiZ2FwXCI6IDEsXG4gIFwiZ3JpZFwiOiAxLFxuICBcImdyaWQtYXJlYVwiOiAxLFxuICBcImdyaWQtYXV0by1jb2x1bW5zXCI6IDEsXG4gIFwiZ3JpZC1hdXRvLWZsb3dcIjogMSxcbiAgXCJncmlkLWF1dG8tcm93c1wiOiAxLFxuICBcImdyaWQtY29sdW1uXCI6IDEsXG4gIFwiZ3JpZC1jb2x1bW4tZW5kXCI6IDEsXG4gIFwiZ3JpZC1jb2x1bW4tZ2FwXCI6IDEsXG4gIFwiZ3JpZC1jb2x1bW4tc3RhcnRcIjogMSxcbiAgXCJncmlkLWdhcFwiOiAxLFxuICBcImdyaWQtcm93XCI6IDEsXG4gIFwiZ3JpZC1yb3ctZW5kXCI6IDEsXG4gIFwiZ3JpZC1yb3ctZ2FwXCI6IDEsXG4gIFwiZ3JpZC1yb3ctc3RhcnRcIjogMSxcbiAgXCJncmlkLXRlbXBsYXRlXCI6IDEsXG4gIFwiZ3JpZC10ZW1wbGF0ZS1hcmVhc1wiOiAxLFxuICBcImdyaWQtdGVtcGxhdGUtY29sdW1uc1wiOiAxLFxuICBcImdyaWQtdGVtcGxhdGUtcm93c1wiOiAxLFxuICBcImhhbmdpbmctcHVuY3R1YXRpb25cIjogMSxcbiAgXCJoZWlnaHRcIjogMSxcbiAgXCJoeXBoZW5zXCI6IDEsXG4gIFwiaW1hZ2Utb3JpZW50YXRpb25cIjogMSxcbiAgXCJpbWFnZS1yZW5kZXJpbmdcIjogMSxcbiAgXCJpbWFnZS1yZXNvbHV0aW9uXCI6IDEsXG4gIFwiaW1lLW1vZGVcIjogMSxcbiAgXCJpbml0aWFsLWxldHRlclwiOiAxLFxuICBcImluaXRpYWwtbGV0dGVyLWFsaWduXCI6IDEsXG4gIFwiaW5saW5lLXNpemVcIjogMSxcbiAgXCJpbnB1dC1zZWN1cml0eVwiOiAxLFxuICBcImluc2V0XCI6IDEsXG4gIFwiaW5zZXQtYmxvY2tcIjogMSxcbiAgXCJpbnNldC1ibG9jay1lbmRcIjogMSxcbiAgXCJpbnNldC1ibG9jay1zdGFydFwiOiAxLFxuICBcImluc2V0LWlubGluZVwiOiAxLFxuICBcImluc2V0LWlubGluZS1lbmRcIjogMSxcbiAgXCJpbnNldC1pbmxpbmUtc3RhcnRcIjogMSxcbiAgXCJpc29sYXRpb25cIjogMSxcbiAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogMSxcbiAgXCJqdXN0aWZ5LWl0ZW1zXCI6IDEsXG4gIFwianVzdGlmeS1zZWxmXCI6IDEsXG4gIFwianVzdGlmeS10cmFja3NcIjogMSxcbiAgXCJsZWZ0XCI6IDEsXG4gIFwibGV0dGVyLXNwYWNpbmdcIjogMSxcbiAgXCJsaW5lLWJyZWFrXCI6IDEsXG4gIFwibGluZS1jbGFtcFwiOiAxLFxuICBcImxpbmUtaGVpZ2h0XCI6IDEsXG4gIFwibGluZS1oZWlnaHQtc3RlcFwiOiAxLFxuICBcImxpc3Qtc3R5bGVcIjogMSxcbiAgXCJsaXN0LXN0eWxlLWltYWdlXCI6IDEsXG4gIFwibGlzdC1zdHlsZS1wb3NpdGlvblwiOiAxLFxuICBcImxpc3Qtc3R5bGUtdHlwZVwiOiAxLFxuICBcIm1hcmdpblwiOiAxLFxuICBcIm1hcmdpbi1ibG9ja1wiOiAxLFxuICBcIm1hcmdpbi1ibG9jay1lbmRcIjogMSxcbiAgXCJtYXJnaW4tYmxvY2stc3RhcnRcIjogMSxcbiAgXCJtYXJnaW4tYm90dG9tXCI6IDEsXG4gIFwibWFyZ2luLWlubGluZVwiOiAxLFxuICBcIm1hcmdpbi1pbmxpbmUtZW5kXCI6IDEsXG4gIFwibWFyZ2luLWlubGluZS1zdGFydFwiOiAxLFxuICBcIm1hcmdpbi1sZWZ0XCI6IDEsXG4gIFwibWFyZ2luLXJpZ2h0XCI6IDEsXG4gIFwibWFyZ2luLXRvcFwiOiAxLFxuICBcIm1hcmdpbi10cmltXCI6IDEsXG4gIFwibWFza1wiOiAxLFxuICBcIm1hc2stYm9yZGVyXCI6IDEsXG4gIFwibWFzay1ib3JkZXItbW9kZVwiOiAxLFxuICBcIm1hc2stYm9yZGVyLW91dHNldFwiOiAxLFxuICBcIm1hc2stYm9yZGVyLXJlcGVhdFwiOiAxLFxuICBcIm1hc2stYm9yZGVyLXNsaWNlXCI6IDEsXG4gIFwibWFzay1ib3JkZXItc291cmNlXCI6IDEsXG4gIFwibWFzay1ib3JkZXItd2lkdGhcIjogMSxcbiAgXCJtYXNrLWNsaXBcIjogMSxcbiAgXCJtYXNrLWNvbXBvc2l0ZVwiOiAxLFxuICBcIm1hc2staW1hZ2VcIjogMSxcbiAgXCJtYXNrLW1vZGVcIjogMSxcbiAgXCJtYXNrLW9yaWdpblwiOiAxLFxuICBcIm1hc2stcG9zaXRpb25cIjogMSxcbiAgXCJtYXNrLXJlcGVhdFwiOiAxLFxuICBcIm1hc2stc2l6ZVwiOiAxLFxuICBcIm1hc2stdHlwZVwiOiAxLFxuICBcIm1hc29ucnktYXV0by1mbG93XCI6IDEsXG4gIFwibWF0aC1zdHlsZVwiOiAxLFxuICBcIm1heC1ibG9jay1zaXplXCI6IDEsXG4gIFwibWF4LWhlaWdodFwiOiAxLFxuICBcIm1heC1pbmxpbmUtc2l6ZVwiOiAxLFxuICBcIm1heC1saW5lc1wiOiAxLFxuICBcIm1heC13aWR0aFwiOiAxLFxuICBcIm1pbi1ibG9jay1zaXplXCI6IDEsXG4gIFwibWluLWhlaWdodFwiOiAxLFxuICBcIm1pbi1pbmxpbmUtc2l6ZVwiOiAxLFxuICBcIm1pbi13aWR0aFwiOiAxLFxuICBcIm1peC1ibGVuZC1tb2RlXCI6IDEsXG4gIFwib2JqZWN0LWZpdFwiOiAxLFxuICBcIm9iamVjdC1wb3NpdGlvblwiOiAxLFxuICBcIm9mZnNldFwiOiAxLFxuICBcIm9mZnNldC1hbmNob3JcIjogMSxcbiAgXCJvZmZzZXQtZGlzdGFuY2VcIjogMSxcbiAgXCJvZmZzZXQtcGF0aFwiOiAxLFxuICBcIm9mZnNldC1wb3NpdGlvblwiOiAxLFxuICBcIm9mZnNldC1yb3RhdGVcIjogMSxcbiAgXCJvcGFjaXR5XCI6IDEsXG4gIFwib3JkZXJcIjogMSxcbiAgXCJvcnBoYW5zXCI6IDEsXG4gIFwib3V0bGluZVwiOiAxLFxuICBcIm91dGxpbmUtY29sb3JcIjogMSxcbiAgXCJvdXRsaW5lLW9mZnNldFwiOiAxLFxuICBcIm91dGxpbmUtc3R5bGVcIjogMSxcbiAgXCJvdXRsaW5lLXdpZHRoXCI6IDEsXG4gIFwib3ZlcmZsb3dcIjogMSxcbiAgXCJvdmVyZmxvdy1hbmNob3JcIjogMSxcbiAgXCJvdmVyZmxvdy1ibG9ja1wiOiAxLFxuICBcIm92ZXJmbG93LWNsaXAtYm94XCI6IDEsXG4gIFwib3ZlcmZsb3ctY2xpcC1tYXJnaW5cIjogMSxcbiAgXCJvdmVyZmxvdy1pbmxpbmVcIjogMSxcbiAgXCJvdmVyZmxvdy13cmFwXCI6IDEsXG4gIFwib3ZlcmZsb3cteFwiOiAxLFxuICBcIm92ZXJmbG93LXlcIjogMSxcbiAgXCJvdmVyc2Nyb2xsLWJlaGF2aW9yXCI6IDEsXG4gIFwib3ZlcnNjcm9sbC1iZWhhdmlvci1ibG9ja1wiOiAxLFxuICBcIm92ZXJzY3JvbGwtYmVoYXZpb3ItaW5saW5lXCI6IDEsXG4gIFwib3ZlcnNjcm9sbC1iZWhhdmlvci14XCI6IDEsXG4gIFwib3ZlcnNjcm9sbC1iZWhhdmlvci15XCI6IDEsXG4gIFwicGFkZGluZ1wiOiAxLFxuICBcInBhZGRpbmctYmxvY2tcIjogMSxcbiAgXCJwYWRkaW5nLWJsb2NrLWVuZFwiOiAxLFxuICBcInBhZGRpbmctYmxvY2stc3RhcnRcIjogMSxcbiAgXCJwYWRkaW5nLWJvdHRvbVwiOiAxLFxuICBcInBhZGRpbmctaW5saW5lXCI6IDEsXG4gIFwicGFkZGluZy1pbmxpbmUtZW5kXCI6IDEsXG4gIFwicGFkZGluZy1pbmxpbmUtc3RhcnRcIjogMSxcbiAgXCJwYWRkaW5nLWxlZnRcIjogMSxcbiAgXCJwYWRkaW5nLXJpZ2h0XCI6IDEsXG4gIFwicGFkZGluZy10b3BcIjogMSxcbiAgXCJwYWdlLWJyZWFrLWFmdGVyXCI6IDEsXG4gIFwicGFnZS1icmVhay1iZWZvcmVcIjogMSxcbiAgXCJwYWdlLWJyZWFrLWluc2lkZVwiOiAxLFxuICBcInBhaW50LW9yZGVyXCI6IDEsXG4gIFwicGVyc3BlY3RpdmVcIjogMSxcbiAgXCJwZXJzcGVjdGl2ZS1vcmlnaW5cIjogMSxcbiAgXCJwbGFjZS1jb250ZW50XCI6IDEsXG4gIFwicGxhY2UtaXRlbXNcIjogMSxcbiAgXCJwbGFjZS1zZWxmXCI6IDEsXG4gIFwicG9pbnRlci1ldmVudHNcIjogMSxcbiAgXCJwb3NpdGlvblwiOiAxLFxuICBcInF1b3Rlc1wiOiAxLFxuICBcInJlc2l6ZVwiOiAxLFxuICBcInJpZ2h0XCI6IDEsXG4gIFwicm90YXRlXCI6IDEsXG4gIFwicm93LWdhcFwiOiAxLFxuICBcInJ1YnktYWxpZ25cIjogMSxcbiAgXCJydWJ5LW1lcmdlXCI6IDEsXG4gIFwicnVieS1wb3NpdGlvblwiOiAxLFxuICBcInNjYWxlXCI6IDEsXG4gIFwic2Nyb2xsYmFyLWNvbG9yXCI6IDEsXG4gIFwic2Nyb2xsYmFyLWd1dHRlclwiOiAxLFxuICBcInNjcm9sbGJhci13aWR0aFwiOiAxLFxuICBcInNjcm9sbC1iZWhhdmlvclwiOiAxLFxuICBcInNjcm9sbC1tYXJnaW5cIjogMSxcbiAgXCJzY3JvbGwtbWFyZ2luLWJsb2NrXCI6IDEsXG4gIFwic2Nyb2xsLW1hcmdpbi1ibG9jay1zdGFydFwiOiAxLFxuICBcInNjcm9sbC1tYXJnaW4tYmxvY2stZW5kXCI6IDEsXG4gIFwic2Nyb2xsLW1hcmdpbi1ib3R0b21cIjogMSxcbiAgXCJzY3JvbGwtbWFyZ2luLWlubGluZVwiOiAxLFxuICBcInNjcm9sbC1tYXJnaW4taW5saW5lLXN0YXJ0XCI6IDEsXG4gIFwic2Nyb2xsLW1hcmdpbi1pbmxpbmUtZW5kXCI6IDEsXG4gIFwic2Nyb2xsLW1hcmdpbi1sZWZ0XCI6IDEsXG4gIFwic2Nyb2xsLW1hcmdpbi1yaWdodFwiOiAxLFxuICBcInNjcm9sbC1tYXJnaW4tdG9wXCI6IDEsXG4gIFwic2Nyb2xsLXBhZGRpbmdcIjogMSxcbiAgXCJzY3JvbGwtcGFkZGluZy1ibG9ja1wiOiAxLFxuICBcInNjcm9sbC1wYWRkaW5nLWJsb2NrLXN0YXJ0XCI6IDEsXG4gIFwic2Nyb2xsLXBhZGRpbmctYmxvY2stZW5kXCI6IDEsXG4gIFwic2Nyb2xsLXBhZGRpbmctYm90dG9tXCI6IDEsXG4gIFwic2Nyb2xsLXBhZGRpbmctaW5saW5lXCI6IDEsXG4gIFwic2Nyb2xsLXBhZGRpbmctaW5saW5lLXN0YXJ0XCI6IDEsXG4gIFwic2Nyb2xsLXBhZGRpbmctaW5saW5lLWVuZFwiOiAxLFxuICBcInNjcm9sbC1wYWRkaW5nLWxlZnRcIjogMSxcbiAgXCJzY3JvbGwtcGFkZGluZy1yaWdodFwiOiAxLFxuICBcInNjcm9sbC1wYWRkaW5nLXRvcFwiOiAxLFxuICBcInNjcm9sbC1zbmFwLWFsaWduXCI6IDEsXG4gIFwic2Nyb2xsLXNuYXAtY29vcmRpbmF0ZVwiOiAxLFxuICBcInNjcm9sbC1zbmFwLWRlc3RpbmF0aW9uXCI6IDEsXG4gIFwic2Nyb2xsLXNuYXAtcG9pbnRzLXhcIjogMSxcbiAgXCJzY3JvbGwtc25hcC1wb2ludHMteVwiOiAxLFxuICBcInNjcm9sbC1zbmFwLXN0b3BcIjogMSxcbiAgXCJzY3JvbGwtc25hcC10eXBlXCI6IDEsXG4gIFwic2Nyb2xsLXNuYXAtdHlwZS14XCI6IDEsXG4gIFwic2Nyb2xsLXNuYXAtdHlwZS15XCI6IDEsXG4gIFwic2hhcGUtaW1hZ2UtdGhyZXNob2xkXCI6IDEsXG4gIFwic2hhcGUtbWFyZ2luXCI6IDEsXG4gIFwic2hhcGUtb3V0c2lkZVwiOiAxLFxuICBcInRhYi1zaXplXCI6IDEsXG4gIFwidGFibGUtbGF5b3V0XCI6IDEsXG4gIFwidGV4dC1hbGlnblwiOiAxLFxuICBcInRleHQtYWxpZ24tbGFzdFwiOiAxLFxuICBcInRleHQtY29tYmluZS11cHJpZ2h0XCI6IDEsXG4gIFwidGV4dC1kZWNvcmF0aW9uXCI6IDEsXG4gIFwidGV4dC1kZWNvcmF0aW9uLWNvbG9yXCI6IDEsXG4gIFwidGV4dC1kZWNvcmF0aW9uLWxpbmVcIjogMSxcbiAgXCJ0ZXh0LWRlY29yYXRpb24tc2tpcFwiOiAxLFxuICBcInRleHQtZGVjb3JhdGlvbi1za2lwLWlua1wiOiAxLFxuICBcInRleHQtZGVjb3JhdGlvbi1zdHlsZVwiOiAxLFxuICBcInRleHQtZGVjb3JhdGlvbi10aGlja25lc3NcIjogMSxcbiAgXCJ0ZXh0LWVtcGhhc2lzXCI6IDEsXG4gIFwidGV4dC1lbXBoYXNpcy1jb2xvclwiOiAxLFxuICBcInRleHQtZW1waGFzaXMtcG9zaXRpb25cIjogMSxcbiAgXCJ0ZXh0LWVtcGhhc2lzLXN0eWxlXCI6IDEsXG4gIFwidGV4dC1pbmRlbnRcIjogMSxcbiAgXCJ0ZXh0LWp1c3RpZnlcIjogMSxcbiAgXCJ0ZXh0LW9yaWVudGF0aW9uXCI6IDEsXG4gIFwidGV4dC1vdmVyZmxvd1wiOiAxLFxuICBcInRleHQtcmVuZGVyaW5nXCI6IDEsXG4gIFwidGV4dC1zaGFkb3dcIjogMSxcbiAgXCJ0ZXh0LXNpemUtYWRqdXN0XCI6IDEsXG4gIFwidGV4dC10cmFuc2Zvcm1cIjogMSxcbiAgXCJ0ZXh0LXVuZGVybGluZS1vZmZzZXRcIjogMSxcbiAgXCJ0ZXh0LXVuZGVybGluZS1wb3NpdGlvblwiOiAxLFxuICBcInRvcFwiOiAxLFxuICBcInRvdWNoLWFjdGlvblwiOiAxLFxuICBcInRyYW5zZm9ybVwiOiAxLFxuICBcInRyYW5zZm9ybS1ib3hcIjogMSxcbiAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IDEsXG4gIFwidHJhbnNmb3JtLXN0eWxlXCI6IDEsXG4gIFwidHJhbnNpdGlvblwiOiAxLFxuICBcInRyYW5zaXRpb24tZGVsYXlcIjogMSxcbiAgXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6IDEsXG4gIFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiOiAxLFxuICBcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCI6IDEsXG4gIFwidHJhbnNsYXRlXCI6IDEsXG4gIFwidW5pY29kZS1iaWRpXCI6IDEsXG4gIFwidXNlci1zZWxlY3RcIjogMSxcbiAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiAxLFxuICBcInZpc2liaWxpdHlcIjogMSxcbiAgXCJ3aGl0ZS1zcGFjZVwiOiAxLFxuICBcIndpZG93c1wiOiAxLFxuICBcIndpZHRoXCI6IDEsXG4gIFwid2lsbC1jaGFuZ2VcIjogMSxcbiAgXCJ3b3JkLWJyZWFrXCI6IDEsXG4gIFwid29yZC1zcGFjaW5nXCI6IDEsXG4gIFwid29yZC13cmFwXCI6IDEsXG4gIFwid3JpdGluZy1tb2RlXCI6IDEsXG4gIFwiei1pbmRleFwiOiAxLFxuICBcInpvb21cIjogMVxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2tha2FvL0Rlc2t0b3AvQGFkb3JhYmxlLWNzcy9wYWNrYWdlcy92aXRlL3NyYy9jb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMva2FrYW8vRGVza3RvcC9AYWRvcmFibGUtY3NzL3BhY2thZ2VzL3ZpdGUvc3JjL2NvcmUvY3NzRXNjYXBlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rYWthby9EZXNrdG9wL0BhZG9yYWJsZS1jc3MvcGFja2FnZXMvdml0ZS9zcmMvY29yZS9jc3NFc2NhcGUudHNcIjsvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9DU1MuZXNjYXBlXG5cbi8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jc2VyaWFsaXplLWFuLWlkZW50aWZpZXJcbmV4cG9ydCBjb25zdCBjc3NFc2NhcGUgPSAoc3RyaW5nOnN0cmluZyk6c3RyaW5nID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICBjb25zdCBmaXJzdENvZGVVbml0ID0gc3RyaW5nLmNoYXJDb2RlQXQoMClcblxuICBsZXQgaW5kZXggPSAtMVxuICBsZXQgY29kZVVuaXRcbiAgbGV0IHJlc3VsdCA9IFwiXCJcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNvZGVVbml0ID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpXG4gICAgLy8gTm90ZTogdGhlcmVcdTIwMTlzIG5vIG5lZWQgdG8gc3BlY2lhbC1jYXNlIGFzdHJhbCBzeW1ib2xzLCBzdXJyb2dhdGVcbiAgICAvLyBwYWlycywgb3IgbG9uZSBzdXJyb2dhdGVzLlxuXG4gICAgLy8gSWYgdGhlIGNoYXJhY3RlciBpcyBOVUxMIChVKzAwMDApLCB0aGVuIHRoZSBSRVBMQUNFTUVOVCBDSEFSQUNURVJcbiAgICAvLyAoVStGRkZEKS5cbiAgICBpZiAoY29kZVVuaXQgPT0gMHgwMDAwKSB7XG4gICAgICByZXN1bHQgKz0gXCJcXHVGRkZEXCJcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgLy8gSWYgdGhlIGNoYXJhY3RlciBpcyBpbiB0aGUgcmFuZ2UgW1xcMS1cXDFGXSAoVSswMDAxIHRvIFUrMDAxRikgb3IgaXNcbiAgICAgIC8vIFUrMDA3RiwgW1x1MjAyNl1cbiAgICAgIChjb2RlVW5pdCA+PSAweDAwMDEgJiYgY29kZVVuaXQgPD0gMHgwMDFGKSB8fCBjb2RlVW5pdCA9PSAweDAwN0YgfHxcbiAgICAgIC8vIElmIHRoZSBjaGFyYWN0ZXIgaXMgdGhlIGZpcnN0IGNoYXJhY3RlciBhbmQgaXMgaW4gdGhlIHJhbmdlIFswLTldXG4gICAgICAvLyAoVSswMDMwIHRvIFUrMDAzOSksIFtcdTIwMjZdXG4gICAgICAoaW5kZXggPT0gMCAmJiBjb2RlVW5pdCA+PSAweDAwMzAgJiYgY29kZVVuaXQgPD0gMHgwMDM5KSB8fFxuICAgICAgLy8gSWYgdGhlIGNoYXJhY3RlciBpcyB0aGUgc2Vjb25kIGNoYXJhY3RlciBhbmQgaXMgaW4gdGhlIHJhbmdlIFswLTldXG4gICAgICAvLyAoVSswMDMwIHRvIFUrMDAzOSkgYW5kIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgYSBgLWAgKFUrMDAyRCksIFtcdTIwMjZdXG4gICAgICAoXG4gICAgICAgIGluZGV4ID09IDEgJiZcbiAgICAgICAgY29kZVVuaXQgPj0gMHgwMDMwICYmIGNvZGVVbml0IDw9IDB4MDAzOSAmJlxuICAgICAgICBmaXJzdENvZGVVbml0ID09IDB4MDAyRFxuICAgICAgKVxuICAgICkge1xuICAgICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNlc2NhcGUtYS1jaGFyYWN0ZXItYXMtY29kZS1wb2ludFxuICAgICAgcmVzdWx0ICs9IFwiXFxcXFwiICsgY29kZVVuaXQudG9TdHJpbmcoMTYpICsgXCIgXCJcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgLy8gSWYgdGhlIGNoYXJhY3RlciBpcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGFuZCBpcyBhIGAtYCAoVSswMDJEKSwgYW5kXG4gICAgICAvLyB0aGVyZSBpcyBubyBzZWNvbmQgY2hhcmFjdGVyLCBbXHUyMDI2XVxuICAgICAgaW5kZXggPT0gMCAmJlxuICAgICAgbGVuZ3RoID09IDEgJiZcbiAgICAgIGNvZGVVbml0ID09IDB4MDAyRFxuICAgICkge1xuICAgICAgcmVzdWx0ICs9IFwiXFxcXFwiICsgc3RyaW5nLmNoYXJBdChpbmRleClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGNoYXJhY3RlciBpcyBub3QgaGFuZGxlZCBieSBvbmUgb2YgdGhlIGFib3ZlIHJ1bGVzIGFuZCBpc1xuICAgIC8vIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBVKzAwODAsIGlzIGAtYCAoVSswMDJEKSBvciBgX2AgKFUrMDA1RiksIG9yXG4gICAgLy8gaXMgaW4gb25lIG9mIHRoZSByYW5nZXMgWzAtOV0gKFUrMDAzMCB0byBVKzAwMzkpLCBbQS1aXSAoVSswMDQxIHRvXG4gICAgLy8gVSswMDVBKSwgb3IgW2Etel0gKFUrMDA2MSB0byBVKzAwN0EpLCBbXHUyMDI2XVxuICAgIGlmIChcbiAgICAgIGNvZGVVbml0ID49IDB4MDA4MCB8fFxuICAgICAgY29kZVVuaXQgPT0gMHgwMDJEIHx8XG4gICAgICBjb2RlVW5pdCA9PSAweDAwNUYgfHxcbiAgICAgIGNvZGVVbml0ID49IDB4MDAzMCAmJiBjb2RlVW5pdCA8PSAweDAwMzkgfHxcbiAgICAgIGNvZGVVbml0ID49IDB4MDA0MSAmJiBjb2RlVW5pdCA8PSAweDAwNUEgfHxcbiAgICAgIGNvZGVVbml0ID49IDB4MDA2MSAmJiBjb2RlVW5pdCA8PSAweDAwN0FcbiAgICApIHtcbiAgICAgIC8vIHRoZSBjaGFyYWN0ZXIgaXRzZWxmXG4gICAgICByZXN1bHQgKz0gc3RyaW5nLmNoYXJBdChpbmRleClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGUgZXNjYXBlZCBjaGFyYWN0ZXIuXG4gICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNlc2NhcGUtYS1jaGFyYWN0ZXJcbiAgICByZXN1bHQgKz0gXCJcXFxcXCIgKyBzdHJpbmcuY2hhckF0KGluZGV4KVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2tha2FvL0Rlc2t0b3AvQGFkb3JhYmxlLWNzcy9wYWNrYWdlcy92aXRlL3NyYy9jb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMva2FrYW8vRGVza3RvcC9AYWRvcmFibGUtY3NzL3BhY2thZ2VzL3ZpdGUvc3JjL2NvcmUvbWFrZVZhbHVlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rYWthby9EZXNrdG9wL0BhZG9yYWJsZS1jc3MvcGFja2FnZXMvdml0ZS9zcmMvY29yZS9tYWtlVmFsdWUudHNcIjtleHBvcnQgY29uc3Qgc3BsaXRWYWx1ZXMgPSAodmFsdWU6c3RyaW5nLCBwcm9qZWN0ID0gY3NzdmFyKSA9PiB7XG4gIGlmICh2YWx1ZS5pbmNsdWRlcyhcInxcIikpIHJldHVybiB2YWx1ZS5zcGxpdChcInxcIikubWFwKHByb2plY3QpXG4gIHJldHVybiB2YWx1ZS5zcGxpdChcIi9cIikubWFwKHByb2plY3QpXG59XG5leHBvcnQgY29uc3QgbWFrZVZhbHVlcyA9ICh2YWx1ZTpzdHJpbmcsIHByb2plY3QgPSBjc3N2YXIpID0+IHNwbGl0VmFsdWVzKHZhbHVlLCBwcm9qZWN0KS5qb2luKFwiIFwiKVxuXG5leHBvcnQgY29uc3QgbWFrZUNvbW1hVmFsdWVzID0gKHZhbHVlOnN0cmluZywgcHJvamVjdCA9IGNzc3ZhcikgPT4gdmFsdWUuc3BsaXQoXCIsXCIpLm1hcChwcm9qZWN0KS5qb2luKFwiLFwiKVxuXG5leHBvcnQgY29uc3QgbWFrZVNpZGUgPSAodmFsdWU6c3RyaW5nKSA9PiBtYWtlVmFsdWVzKHZhbHVlLCBweClcblxuZXhwb3J0IGNvbnN0IG1ha2VSYXRpbyA9ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgY29uc3QgW3csIGhdID0gdmFsdWUuc3BsaXQoL1s6L10vKVxuICByZXR1cm4gKCtoIC8gK3cgKiAxMDApLnRvRml4ZWQoMikgKyBcIiVcIlxufVxuXG5leHBvcnQgY29uc3QgbWFrZU51bWJlciA9IChudW06bnVtYmVyKSA9PiBudW0udG9GaXhlZCgyKS5yZXBsYWNlKC9eMCt8XFwuMDAkfDArJC9nLCBcIlwiKSB8fCBcIjBcIlxuXG5leHBvcnQgY29uc3QgY3NzdmFyID0gKHZhbHVlOnN0cmluZ3xudW1iZXIpID0+IFN0cmluZyh2YWx1ZSkuc3RhcnRzV2l0aChcIi0tXCIpID8gYHZhcigke3ZhbHVlfSlgIDogdmFsdWVcblxuZXhwb3J0IGNvbnN0IGNzc1N0cmluZyA9ICh2YWx1ZTpzdHJpbmd8bnVtYmVyKSA9PiBTdHJpbmcodmFsdWUpLnN0YXJ0c1dpdGgoXCItLVwiKSA/IGB2YXIoJHt2YWx1ZX0pYCA6IGBcIiR7dmFsdWV9XCJgXG5cbi8vIDxsZW5ndGg+IGRlZmF1bHQ6IHB4XG5leHBvcnQgY29uc3QgcHggPSAodmFsdWU6c3RyaW5nfG51bWJlcikgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwicHg6IHZhbHVlIGlzIHVuZGVmaW5lZFwiKVxuICBpZiAodmFsdWUgPT09IDAgfHwgdmFsdWUgPT09IFwiMFwiKSByZXR1cm4gMFxuXG4gIGNvbnN0IHYgPSBTdHJpbmcodmFsdWUpXG5cbiAgLy8gLS1jc3MtdmFyXG4gIGlmICh2LnN0YXJ0c1dpdGgoXCItLVwiKSkgcmV0dXJuIGNzc3ZhcihcIlwiICsgdmFsdWUpXG5cbiAgLy8gMS82XG4gIGNvbnN0IFtuLCBtXSA9IHYuc3BsaXQoXCIvXCIpXG4gIGlmICgrbiA+IDAgJiYgK20gPiAwKSByZXR1cm4gbWFrZU51bWJlcigrbiAvICttICogMTAwKSArIFwiJVwiXG5cbiAgLy8gY2FsY1xuICBpZiAoLy5bLSsqL10vLnRlc3QodikgJiYgL1xcZC8udGVzdCh2KSkge1xuICAgIHJldHVybiBcImNhbGMoXCIgKyB2LnJlcGxhY2UoL1stK10vZywgKGEpID0+IGAgJHthfSBgKSArIFwiKVwiXG4gIH1cblxuICAvLyBudW1iZXJcbiAgcmV0dXJuICt2YWx1ZSA9PT0gK3ZhbHVlID8gdmFsdWUgKyBcInB4XCIgOiB2YWx1ZVxufVxuXG5leHBvcnQgY29uc3QgZGVnID0gKHZhbHVlOnN0cmluZ3xudW1iZXIpID0+IHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcihcImRlZzogdmFsdWUgaXMgdW5kZWZpbmVkXCIpXG4gIGlmICh2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA9PT0gXCIwXCIpIHJldHVybiAwXG5cbiAgY29uc3QgdiA9IFN0cmluZyh2YWx1ZSlcblxuICAvLyAtLWNzcy12YXJcbiAgaWYgKHYuc3RhcnRzV2l0aChcIi0tXCIpKSByZXR1cm4gY3NzdmFyKFwiXCIgKyB2YWx1ZSlcblxuICAvLyBjYWxjXG4gIGlmICgvLlstKyovXS8udGVzdCh2KSAmJiAvXFxkLy50ZXN0KHYpKSB7XG4gICAgcmV0dXJuIFwiY2FsYyhcIiArIHYucmVwbGFjZSgvWy0rXS9nLCAoYSkgPT4gYCAke2F9IGApICsgXCIpXCJcbiAgfVxuXG4gIC8vIG51bWJlclxuICByZXR1cm4gK3ZhbHVlID09PSArdmFsdWUgPyB2YWx1ZSArIFwiZGVnXCIgOiB2YWx1ZVxufVxuXG5leHBvcnQgY29uc3QgcnB4ID0gKHZhbHVlOnN0cmluZ3xudW1iZXIpID0+IHtcbiAgaWYgKHZhbHVlID09PSBcImZpbGxcIikgcmV0dXJuIFwiOTk5OXB4XCJcbiAgcmV0dXJuIHB4KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgcGVyY2VudFRvRW0gPSAodmFsdWU6c3RyaW5nKSA9PiB7XG4gIGlmICh2YWx1ZS5lbmRzV2l0aChcIiVcIikpIHJldHVybiArKHZhbHVlLnNsaWNlKDAsIC0xKSkgLyAxMDAgKyBcImVtXCJcbiAgcmV0dXJuIHB4KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgbWFrZUhFWCA9ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgY29uc3QgW3JnYiwgYV0gPSB2YWx1ZS5zcGxpdChcIi5cIilcbiAgaWYgKGEgJiYgcmdiLmxlbmd0aCA9PT0gNCkgcmV0dXJuIFwicmdiYShcIiArIHJnYi5zbGljZSgxKS5zcGxpdChcIlwiKS5tYXAodmFsdWUgPT4gcGFyc2VJbnQodmFsdWUgKyB2YWx1ZSwgMTYpKS5qb2luKFwiLFwiKSArIFwiLC5cIiArIGEgKyBcIilcIlxuICBpZiAoYSkgcmV0dXJuIFwicmdiYShcIiArIFtyZ2Iuc2xpY2UoMSwgMyksIHJnYi5zbGljZSgzLCA1KSwgcmdiLnNsaWNlKDUsIDcpXS5tYXAodmFsdWUgPT4gcGFyc2VJbnQodmFsdWUsIDE2KSkuam9pbihcIixcIikgKyBcIiwuXCIgKyBhICsgXCIpXCJcbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlSExTID0gKHZhbHVlOnN0cmluZykgPT4ge1xuICBjb25zdCBbaCwgcywgbCwgYV0gPSB2YWx1ZS5zcGxpdChcIixcIilcbiAgcmV0dXJuIFwiaHNsXCIgKyAoYSA/IFwiYVwiIDogXCJcIikgKyBcIihcIiArIFtoLCBzLCBsLCBhXS5maWx0ZXIoQm9vbGVhbikubWFwKGNzc3Zhcikuam9pbigpICsgXCIpXCJcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VSR0IgPSAodmFsdWU6c3RyaW5nKSA9PiB7XG4gIGNvbnN0IFtyLCBnLCBiLCBhXSA9IHZhbHVlLnNwbGl0KFwiLFwiKVxuICByZXR1cm4gXCJyZ2JcIiArIChhID8gXCJhXCIgOiBcIlwiKSArIFwiKFwiICsgW3IsIGcsIGIsIGFdLmZpbHRlcihCb29sZWFuKS5tYXAoY3NzdmFyKS5qb2luKCkgKyBcIilcIlxufVxuXG5leHBvcnQgY29uc3QgbWFrZUNvbG9yID0gKHZhbHVlID0gXCJ0cmFuc3BhcmVudFwiKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gXCItXCIpIHJldHVybiBcInRyYW5zcGFyZW50XCJcbiAgaWYgKHZhbHVlID09PSBcInRyYW5zcGFyZW50XCIpIHJldHVybiBcInRyYW5zcGFyZW50XCJcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCItLVwiKSkgcmV0dXJuIGB2YXIoJHt2YWx1ZX0pYFxuXG4gIC8vIGMoMjU1LDI1NSwxNTUpIG9yIGMoMTAwJSwwLDApXG4gIGlmICh2YWx1ZS5zcGxpdChcIixcIikuZXZlcnkodiA9PiBwYXJzZUZsb2F0KHYpID49IDApKSB7XG4gICAgLy8gSFNMLCBIU0xBICgyMjIsMTAwJSw1MCUpXG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKFwiJVwiKSkge1xuICAgICAgcmV0dXJuIG1ha2VITFModmFsdWUpXG4gICAgfVxuICAgIC8vIFJHQiwgUkdCQVxuICAgIHJldHVybiBtYWtlUkdCKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlRm9udCA9ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgaWYgKCF2YWx1ZSkgdGhyb3cgbmV3IEVycm9yKFwibWFrZUZvbnQ6IHZhbHVlIGlzIHVuZGVmaW5lZFwiKVxuXG4gIHJldHVybiAodmFsdWUgfHwgXCJcIikuc3BsaXQoXCIvXCIpLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSBcIi1cIikgcmV0dXJuXG4gICAgaWYgKFN0cmluZyh2YWx1ZSkuc3RhcnRzV2l0aChcIi0tXCIpKSByZXR1cm4gYHZhcigke3ZhbHVlfSk7YFxuXG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAwOiB7cmV0dXJuIGBmb250LXNpemU6JHtweCh2YWx1ZSl9O2B9XG4gICAgICBjYXNlIDE6IHtyZXR1cm4gYGxpbmUtaGVpZ2h0OiR7K3ZhbHVlIDwgNCA/IG1ha2VOdW1iZXIoK3ZhbHVlKSA6IHB4KHZhbHVlKX07YH1cbiAgICAgIGNhc2UgMjoge3JldHVybiBgbGV0dGVyLXNwYWNpbmc6JHtweChwZXJjZW50VG9FbSh2YWx1ZSkpfTtgfVxuICAgIH1cbiAgfSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcIilcbn1cblxuXG5leHBvcnQgY29uc3QgbWFrZUZvbnRGYW1pbHkgPSAodmFsdWU6c3RyaW5nKSA9PiBgZm9udC1mYW1pbHk6JHt2YWx1ZX07Zm9udC1mYW1pbHk6dmFyKC0tJHt2YWx1ZX0sICR7dmFsdWV9KTtgXG5cbi8vIEBUT0RPOlxuZXhwb3J0IGNvbnN0IG1ha2VCb3JkZXIgPSAodmFsdWU6c3RyaW5nKSA9PiB7XG4gIGlmICghdmFsdWUgfHwgdmFsdWUgPT09IFwibm9uZVwiIHx8IHZhbHVlID09PSBcIjBcIiB8fCB2YWx1ZSA9PT0gXCItXCIpIHJldHVybiBcIm5vbmVcIlxuXG4gIGNvbnN0IGJvcmRlclN0eWxlcyA9IFtcIm5vbmVcIiwgXCJoaWRkZW5cIiwgXCJkb3R0ZWRcIiwgXCJkYXNoZWRcIiwgXCJzb2xpZFwiLCBcImRvdWJsZVwiLCBcImdyb292ZVwiLCBcInJpZGdlXCIsIFwiaW5zZXRcIiwgXCJvdXRzZXRcIl1cblxuICBsZXQgaGFzV2lkdGggPSBmYWxzZVxuICBsZXQgaGFzU3R5bGUgPSBmYWxzZVxuXG4gIGNvbnN0IHZhbHVlcyA9IHNwbGl0VmFsdWVzKHZhbHVlLCB2YWx1ZSA9PiB7XG4gICAgaWYgKCt2YWx1ZSA+IDApIHtcbiAgICAgIGhhc1dpZHRoID0gdHJ1ZVxuICAgICAgcmV0dXJuIHB4KHZhbHVlKVxuICAgIH1cblxuICAgIGlmIChib3JkZXJTdHlsZXMuaW5jbHVkZXMoU3RyaW5nKHZhbHVlKSkpIHtcbiAgICAgIGhhc1N0eWxlID0gdHJ1ZVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VDb2xvcihTdHJpbmcodmFsdWUpKVxuICB9KVxuXG4gIGlmICghaGFzV2lkdGgpIHZhbHVlcy51bnNoaWZ0KFwiMXB4XCIpXG4gIGlmICghaGFzU3R5bGUpIHZhbHVlcy51bnNoaWZ0KFwic29saWRcIilcblxuICByZXR1cm4gdmFsdWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlSEJveFdpdGhTZW1pID0gKHZhbHVlID0gXCJcIikgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdCgvWysvfF0vKVxuXG4gIGNvbnN0IHJlc3VsdCA9IHZhbHVlcy5tYXAodiA9PiB7XG4gICAgc3dpdGNoICh2KSB7XG4gICAgICBjYXNlIFwidG9wXCI6IHtyZXR1cm4gXCJhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1wifVxuICAgICAgY2FzZSBcIm1pZGRsZVwiOiB7cmV0dXJuIFwiYWxpZ24taXRlbXM6Y2VudGVyO1wifVxuICAgICAgY2FzZSBcImJvdHRvbVwiOiB7cmV0dXJuIFwiYWxpZ24taXRlbXM6ZmxleC1lbmQ7XCJ9XG4gICAgICBjYXNlIFwiZmlsbFwiOiB7cmV0dXJuIFwiYWxpZ24taXRlbXM6c3RyZXRjaDtcIn1cbiAgICAgIGNhc2UgXCJzdHJldGNoXCI6IHtyZXR1cm4gXCJhbGlnbi1pdGVtczpzdHJldGNoO1wifVxuICAgICAgY2FzZSBcImxlZnRcIjoge3JldHVybiB2YWx1ZXMuaW5jbHVkZXMoXCJyZXZlcnNlXCIpID8gXCJqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XCIgOiBcIlwifVxuICAgICAgY2FzZSBcInJpZ2h0XCI6IHtyZXR1cm4gIXZhbHVlcy5pbmNsdWRlcyhcInJldmVyc2VcIikgPyBcImp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcIiA6IFwiXCJ9XG4gICAgICBjYXNlIFwicmV2ZXJzZVwiOiB7cmV0dXJuIFwiZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7XCJ9XG4gICAgICBjYXNlIFwiY2VudGVyXCI6IHtyZXR1cm4gXCJqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1wifVxuICAgIH1cbiAgICByZXR1cm4gL15bXFxkLl0rJC8udGVzdCh2KSA/IGBnYXA6JHtweCh2KX07YCA6IFwiXCJcbiAgfSlcblxuICBpZiAoIXJlc3VsdC5maW5kKHIgPT4gci5zdGFydHNXaXRoKFwiYWxpZ24taXRlbXM6XCIpKSkge1xuICAgIHJlc3VsdC51bnNoaWZ0KFwiYWxpZ24taXRlbXM6Y2VudGVyO1wiKVxuICB9XG5cbiAgcmV0dXJuIFsuLi5uZXcgU2V0KHJlc3VsdCldLmpvaW4oXCJcIilcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VWQm94V2l0aFNlbWkgPSAodmFsdWUgPSBcIlwiKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KC9bKy98XS8pXG5cbiAgY29uc3QgcmVzdWx0ID0gdmFsdWVzLm1hcCh2ID0+IHtcbiAgICBzd2l0Y2ggKHYpIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6IHtyZXR1cm4gXCJhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1wifVxuICAgICAgY2FzZSBcImNlbnRlclwiOiB7cmV0dXJuIFwiYWxpZ24taXRlbXM6Y2VudGVyO1wifVxuICAgICAgY2FzZSBcInJpZ2h0XCI6IHtyZXR1cm4gXCJhbGlnbi1pdGVtczpmbGV4LWVuZDtcIn1cbiAgICAgIGNhc2UgXCJmaWxsXCI6IHtyZXR1cm4gXCJhbGlnbi1pdGVtczpzdHJldGNoO1wifVxuICAgICAgY2FzZSBcInRvcFwiOiB7cmV0dXJuIHZhbHVlcy5pbmNsdWRlcyhcInJldmVyc2VcIikgPyBcImp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcIiA6IFwiXCJ9XG4gICAgICBjYXNlIFwibWlkZGxlXCI6IHtyZXR1cm4gXCJqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1wifVxuICAgICAgY2FzZSBcImJvdHRvbVwiOiB7cmV0dXJuICF2YWx1ZXMuaW5jbHVkZXMoXCJyZXZlcnNlXCIpID8gXCJqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XCIgOiBcIlwifVxuICAgICAgY2FzZSBcInJldmVyc2VcIjoge3JldHVybiBcImZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO1wifVxuICAgIH1cbiAgICByZXR1cm4gL15bXFxkLl0rJC8udGVzdCh2KSA/IGBnYXA6JHtweCh2KX07YCA6IFwiXCJcbiAgfSlcblxuICBpZiAoIXJlc3VsdC5maW5kKHIgPT4gci5zdGFydHNXaXRoKFwiYWxpZ24taXRlbXM6XCIpKSkge1xuICAgIHJlc3VsdC51bnNoaWZ0KFwiYWxpZ24taXRlbXM6c3RyZXRjaDtcIilcbiAgfVxuXG4gIHJldHVybiBbLi4ubmV3IFNldChyZXN1bHQpXS5qb2luKFwiXCIpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlSEJveEZpbGwgPSAoKSA9PiBcIjp3aGVyZSgmPiope2ZsZXgtc2hyaW5rOjA7LS13LWdyb3c6MTstLXctc2hyaW5rOjE7LS13LWFsaWduOmluaXRpYWw7LS1oLWdyb3c6aW5pdGlhbDstLWgtc2hyaW5rOjA7LS1oLWFsaWduOnN0cmV0Y2g7fVwiXG5leHBvcnQgY29uc3QgbWFrZVZCb3hGaWxsID0gKCkgPT4gXCI6d2hlcmUoJj4qKXtmbGV4LXNocmluazowOy0taC1ncm93OjE7LS1oLXNocmluazoxOy0taC1hbGlnbjppbml0aWFsOy0tdy1ncm93OmluaXRpYWw7LS13LXNocmluazowOy0tdy1hbGlnbjpzdHJldGNoO31cIlxuXG5leHBvcnQgY29uc3QgbWFrZUJveEZpbGwgPSAodmFsdWU6c3RyaW5nKSA9PiB7XG4gIGNvbnN0IHZhbCA9IHZhbHVlLnNwbGl0KC9cXHMrLylcbiAgaWYgKHZhbC5pbmNsdWRlcyhcInJvd1wiKSkgcmV0dXJuIG1ha2VIQm94RmlsbCgpXG4gIGlmICh2YWwuaW5jbHVkZXMoXCJjb2x1bW5cIikpIHJldHVybiBtYWtlVkJveEZpbGwoKVxuICByZXR1cm4gXCJcIlxufVxuXG5leHBvcnQgY29uc3QgbWFrZVRleHRCb3ggPSAodmFsdWUgPSBcIlwiKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KFwiK1wiKVxuXG4gIGNvbnN0IHJlc3VsdCA9IHZhbHVlcy5tYXAodiA9PiB7XG4gICAgc3dpdGNoICh2KSB7XG4gICAgICBjYXNlIFwibGVmdFwiOiB7cmV0dXJuIFwidGV4dC1hbGlnbjpsZWZ0O1wifVxuICAgICAgY2FzZSBcImNlbnRlclwiOiB7cmV0dXJuIFwidGV4dC1hbGlnbjpjZW50ZXI7XCJ9XG4gICAgICBjYXNlIFwicmlnaHRcIjoge3JldHVybiBcInRleHQtYWxpZ246cmlnaHQ7XCJ9XG4gICAgICBjYXNlIFwianVzdGlmeVwiOiB7cmV0dXJuIFwidGV4dC1hbGlnbjpqdXN0aWZ5O1wifVxuICAgICAgY2FzZSBcInRvcFwiOiB7cmV0dXJuIFwiZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpjb2x1bW47anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XCJ9XG4gICAgICBjYXNlIFwibWlkZGxlXCI6IHtyZXR1cm4gXCJkaXNwbGF5OmZsZXg7ZmxleC1mbG93OmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1wifVxuICAgICAgY2FzZSBcImJvdHRvbVwiOiB7cmV0dXJuIFwiZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpjb2x1bW47anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1wifVxuICAgICAgY2FzZSBcInBhY2tcIjoge3JldHVybiBcImRpc3BsYXk6ZmxleDtmbGV4LWZsb3c6Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyO1wifVxuICAgIH1cbiAgICByZXR1cm4gXCJcIlxuICB9KVxuXG4gIHJldHVybiBbLi4ubmV3IFNldChyZXN1bHQpXS5qb2luKFwiXCIpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlVHJhbnNpdGlvbiA9ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgaWYgKCEvXFxkLy50ZXN0KHZhbHVlKSkgcmV0dXJuIHZhbHVlXG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCI9XCIpKSByZXR1cm4gYGFsbCAke3ZhbHVlfWBcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC9bL3xdLykubWFwKGl0ZW0gPT4gaXRlbS5yZXBsYWNlKFwiPVwiLCBcIiBcIikpLmpvaW4oXCIsXCIpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlUG9zaXRpb24xID0gKHZhbHVlOnN0cmluZykgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIiBcIikubWFwKHB4KVxuICB2YWx1ZXNbMV0gPSB2YWx1ZXNbMV0gfHwgdmFsdWVzWzBdXG4gIHZhbHVlc1syXSA9IHZhbHVlc1syXSB8fCB2YWx1ZXNbMF1cbiAgdmFsdWVzWzNdID0gdmFsdWVzWzNdIHx8IHZhbHVlc1sxXSB8fCB2YWx1ZXNbMF1cblxuICByZXR1cm4gW1widG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCJdXG4gIC5tYXAoKHByb3AsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gXCItXCIpIHJldHVyblxuICAgIHJldHVybiBgJHtwcm9wfToke3B4KHZhbHVlKX07YFxuICB9KVxuICAuZmlsdGVyKEJvb2xlYW4pXG4gIC5qb2luKFwiXCIpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlUG9zaXRpb24yWCA9ICh4OnN0cmluZykgPT4ge1xuICBpZiAoeC5zdGFydHNXaXRoKFwiY2VudGVyXCIpKSB7XG4gICAgY29uc3QgbGVmdCA9IHggPT09IFwiY2VudGVyXCIgPyBcIjUwJVwiIDogYGNhbGMoNTAlICsgJHt4LnNsaWNlKDYpfSlgXG4gICAgcmV0dXJuIGBsZWZ0OiR7bGVmdH07LS1hLXRyYW5zbGF0ZS14Oi01MCU7dHJhbnNmb3JtOnZhcigtLWEtdHJhbnNmb3JtKTtgXG4gIH1cbiAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHguc3BsaXQoXCJ+XCIpXG4gIGNvbnN0IHJlcyA9IFtdXG4gIHJlcy5wdXNoKGxlZnQgPyBgbGVmdDoke3B4KGxlZnQpfTtgIDogXCJcIilcbiAgcmVzLnB1c2gocmlnaHQgPyBgcmlnaHQ6JHtweChyaWdodCl9O2AgOiBcIlwiKVxuICByZXR1cm4gcmVzLmpvaW4oXCJcIilcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VQb3NpdGlvbjJZID0gKHk6c3RyaW5nKSA9PiB7XG4gIGlmICh5LnN0YXJ0c1dpdGgoXCJjZW50ZXJcIikpIHtcbiAgICBjb25zdCB0b3AgPSB5ID09PSBcImNlbnRlclwiID8gXCI1MCVcIiA6IGBjYWxjKDUwJSArICR7eS5zbGljZSg2KX0pYFxuICAgIHJldHVybiBgdG9wOiR7dG9wfTstLWEtdHJhbnNsYXRlLXk6LTUwJTt0cmFuc2Zvcm06dmFyKC0tYS10cmFuc2Zvcm0pO2BcbiAgfVxuICBjb25zdCBbdG9wLCBib3R0b21dID0geS5zcGxpdChcIn5cIilcblxuICBjb25zdCByZXMgPSBbXVxuICByZXMucHVzaCh0b3AgPyBgdG9wOiR7cHgodG9wKX07YCA6IFwiXCIpXG4gIHJlcy5wdXNoKGJvdHRvbSA/IGBib3R0b206JHtweChib3R0b20pfTtgIDogXCJcIilcbiAgcmV0dXJuIHJlcy5qb2luKFwiXCIpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlUG9zaXRpb24yID0gKHZhbHVlOnN0cmluZykgPT4ge1xuICBjb25zdCBbeCwgeV0gPSB2YWx1ZS5zcGxpdChcIixcIilcbiAgcmV0dXJuIG1ha2VQb3NpdGlvbjJYKHgpICsgbWFrZVBvc2l0aW9uMlkoeSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VQb3NpdGlvbldpdGhTZW1pID0gKHZhbHVlPzpzdHJpbmcpID0+IHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIFwiXCJcbiAgaWYgKHZhbHVlID09PSBcInBhY2tcIiB8fCB2YWx1ZSA9PT0gXCJjZW50ZXJcIikge1xuICAgIHJldHVybiBcImxlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1wiXG4gIH1cbiAgcmV0dXJuICh2YWx1ZS5pbmNsdWRlcyhcIixcIikgPyBtYWtlUG9zaXRpb24yKHZhbHVlKSA6IG1ha2VQb3NpdGlvbjEodmFsdWUpKSArIFwiO1wiXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2FrYW8vRGVza3RvcC9AYWRvcmFibGUtY3NzL3BhY2thZ2VzL3ZpdGUvc3JjL2NvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9rYWthby9EZXNrdG9wL0BhZG9yYWJsZS1jc3MvcGFja2FnZXMvdml0ZS9zcmMvY29yZS9ydWxlcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMva2FrYW8vRGVza3RvcC9AYWRvcmFibGUtY3NzL3BhY2thZ2VzL3ZpdGUvc3JjL2NvcmUvcnVsZXMudHNcIjtpbXBvcnQge1ByZWZpeFJ1bGVzLCBSdWxlc30gZnJvbSBcIi4vYXRvbWl6ZXJcIlxuaW1wb3J0IHtjc3N2YXIsIGRlZywgbWFrZUJvcmRlciwgbWFrZUJveEZpbGwsIG1ha2VDb2xvciwgbWFrZUNvbW1hVmFsdWVzLCBtYWtlRm9udCwgbWFrZUZvbnRGYW1pbHksIG1ha2VIQm94RmlsbCwgbWFrZUhCb3hXaXRoU2VtaSwgbWFrZU51bWJlciwgbWFrZVBvc2l0aW9uMlgsIG1ha2VQb3NpdGlvbjJZLCBtYWtlUG9zaXRpb25XaXRoU2VtaSwgbWFrZVJhdGlvLCBtYWtlU2lkZSwgbWFrZVRleHRCb3gsIG1ha2VUcmFuc2l0aW9uLCBtYWtlVmFsdWVzLCBtYWtlVkJveEZpbGwsIG1ha2VWQm94V2l0aFNlbWksIHBlcmNlbnRUb0VtLCBweCwgcnB4fSBmcm9tIFwiLi9tYWtlVmFsdWVcIlxuXG5leHBvcnQgY29uc3QgcmVzZXQgPSBgXG4qLDphZnRlciw6YmVmb3Jle21hcmdpbjowO3BhZGRpbmc6MDtmb250OmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtib3gtc2l6aW5nOmJvcmRlci1ib3g7fVxuOnJvb3R7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RleHQtc2l6ZS1hZGp1c3Q6MTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTtsaW5lLWhlaWdodDoxLjU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZDt0YWItc2l6ZToyO2ZvbnQtc3ludGhlc2lzOm5vbmU7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlO31cbmh0bWwsYm9keXtoZWlnaHQ6MTAwJTt9XG5pbWcscGljdHVyZSx2aWRlbyxjYW52YXN7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6MTAwJTt9XG5pbWd7dGV4dC1pbmRlbnQ6LTk5OTlweDt9XG5idXR0b257YmFja2dyb3VuZDpub25lO2JvcmRlcjowO2N1cnNvcjpwb2ludGVyO31cbmF7dGV4dC1kZWNvcmF0aW9uOm5vbmU7fVxudGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7fVxub2wsdWwsbWVudSxkaXJ7bGlzdC1zdHlsZTpub25lO31cbiosOmFmdGVyLDpiZWZvcmV7LS13LWdyb3c6aW5pdGlhbDstLXctYWxpZ246aW5pdGlhbDstLWgtZ3Jvdzppbml0aWFsOy0taC1hbGlnbjppbml0aWFsO31cbiosOmFmdGVyLDpiZWZvcmV7XG4tLWEtdHJhbnNsYXRlLXg6MDtcbi0tYS10cmFuc2xhdGUteTowO1xuLS1hLXJvdGF0ZTowO1xuLS1hLXNrZXcteDowO1xuLS1hLXNrZXcteTowO1xuLS1hLXNjYWxlLXg6MTtcbi0tYS1zY2FsZS15OjE7XG4tLWEtdHJhbnNmb3JtOnRyYW5zbGF0ZVgodmFyKC0tYS10cmFuc2xhdGUteCkpIHRyYW5zbGF0ZVkodmFyKC0tYS10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS1hLXJvdGF0ZSkpIHNrZXdYKHZhcigtLWEtc2tldy14KSkgc2tld1kodmFyKC0tYS1za2V3LXkpKSBzY2FsZVgodmFyKC0tYS1zY2FsZS14KSkgc2NhbGVZKHZhcigtLWEtc2NhbGUteSkpO1xuLS1hLXRyYW5zZm9ybTNkOnRyYW5zbGF0ZTNkKHZhcigtLWEtdHJhbnNsYXRlLXgpLHZhcigtLWEtdHJhbnNsYXRlLXkpLDApIHJvdGF0ZSh2YXIoLS1hLXJvdGF0ZSkpIHNrZXdYKHZhcigtLWEtc2tldy14KSkgc2tld1kodmFyKC0tYS1za2V3LXkpKSBzY2FsZVgodmFyKC0tYS1zY2FsZS14KSkgc2NhbGVZKHZhcigtLWEtc2NhbGUteSkpO1xufVxuYFxuXG5leHBvcnQgY29uc3QgUlVMRVM6UnVsZXMgPSB7XG5cbiAgLy8gLS0gQ29sb3JcbiAgXCJjXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBjb2xvcjoke21ha2VDb2xvcih2YWx1ZSl9O2AsXG4gIFwiY29sb3JcIjogKHZhbHVlOnN0cmluZykgPT4gUlVMRVMuYyh2YWx1ZSksXG4gIFwiY2FyZXRcIjogKHZhbHVlOnN0cmluZykgPT4gYGNhcmV0LWNvbG9yOiR7bWFrZUNvbG9yKHZhbHVlKX07YCxcbiAgXCJjYXJldC1jdXJyZW50XCI6ICgpID0+IGBjb2xvcjpjdXJyZW50Q29sb3I7YCxcblxuICAvLyAtLSBUeXBvZ3JhcGh5XG4gIFwiZm9udFwiOiAodmFsdWU6c3RyaW5nKSA9PiBtYWtlRm9udCh2YWx1ZSksXG4gIFwiZm9udC1zaXplXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBmb250LXNpemU6JHtweCh2YWx1ZSl9O2AsXG4gIFwibGluZS1oZWlnaHRcIjogKHZhbHVlOnN0cmluZykgPT4gYGxpbmUtaGVpZ2h0OiR7K3ZhbHVlIDwgNCA/IG1ha2VOdW1iZXIoK3ZhbHVlKSA6IHB4KHZhbHVlKX07YCxcbiAgXCJsZXR0ZXItc3BhY2luZ1wiOiAodmFsdWU6c3RyaW5nKSA9PiBgbGV0dGVyLXNwYWNpbmc6JHtwZXJjZW50VG9FbSh2YWx1ZSl9O2AsXG4gIFwid29yZC1zcGFjaW5nXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGB3b3JkLXNwYWNpbmc6JHtweCh2YWx1ZSl9O2AsXG5cbiAgLy8gRm9udC1GYW1pbHkgQFRPRE86Zm9udC1zdGFja1x1Qzc0MCBcdUM3N0NcdUJDMThcdUM4MDFcdUM3NzggXHVDMkE0XHVEMEREIFx1QjlDQ1x1QjRFNFx1QzVCNCBcdUI0NTBcdUFFMzAuLi4oTCksUm9ib3RvLE5vdG9TYW5zXHVDNjQwIFx1QUMxOVx1Qzc0MFx1QUM4M1x1QjNDNCBcdUI5Q0NcdUI0RTRcdUFFNEM/XG4gIC8vIEBUT0RPOiBGb250LUZhbWlseSBVdGlsaXR5XG4gIFwiQXBwbGVTRFwiOiAoKSA9PiBgZm9udC1mYW1pbHk6XCJBcHBsZSBTRCBHb3RoaWMgTmVvXCI7YCxcbiAgXCJSb2JvdG9cIjogKCkgPT4gbWFrZUZvbnRGYW1pbHkoXCJSb2JvdG9cIiksXG5cbiAgLy8gQFRPRE86Zm9udC1mYW1pbHk6dmFyKC0tc2VyaWYpLHNlcmlmOyBcdUM3NzRcdUFDOEMgXHVCQTM5XHVENzg4XHVCMDk4P1xuICBcInNhbnNcIjogKCkgPT4gbWFrZUZvbnRGYW1pbHkoXCJzYW5zXCIpLFxuICBcInNhbnMtc2VyaWZcIjogKCkgPT4gbWFrZUZvbnRGYW1pbHkoXCJzYW5zLXNlcmlmXCIpLFxuICBcInNlcmlmXCI6ICgpID0+IG1ha2VGb250RmFtaWx5KFwic2VyaWZcIiksXG4gIFwiY3Vyc2l2ZVwiOiAoKSA9PiBtYWtlRm9udEZhbWlseShcImN1cnNpdmVcIiksXG4gIFwiZmFudGFzeVwiOiAoKSA9PiBtYWtlRm9udEZhbWlseShcImZhbnRhc3lcIiksXG4gIFwic3lzdGVtLXVpXCI6ICgpID0+IG1ha2VGb250RmFtaWx5KFwic3lzdGVtLXVpXCIpLFxuICBcIm1vbm9zcGFjZVwiOiAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IFwibnVtYmVyXCIpIHJldHVybiBgZm9udC12YXJpYW50LW51bWVyaWM6dGFidWxhci1udW1zO2BcbiAgICByZXR1cm4gbWFrZUZvbnRGYW1pbHkoXCJtb25vc3BhY2VcIilcbiAgfSxcblxuICAvLyBGb250IFdlaWdodFxuICBcIjEwMFwiOiAoKSA9PiBgZm9udC13ZWlnaHQ6MTAwO2AsXG4gIFwiMjAwXCI6ICgpID0+IGBmb250LXdlaWdodDoyMDA7YCxcbiAgXCIzMDBcIjogKCkgPT4gYGZvbnQtd2VpZ2h0OjMwMDtgLFxuICBcIjQwMFwiOiAoKSA9PiBgZm9udC13ZWlnaHQ6NDAwO2AsXG4gIFwiNTAwXCI6ICgpID0+IGBmb250LXdlaWdodDo1MDA7YCxcbiAgXCI2MDBcIjogKCkgPT4gYGZvbnQtd2VpZ2h0OjYwMDtgLFxuICBcIjcwMFwiOiAoKSA9PiBgZm9udC13ZWlnaHQ6NzAwO2AsXG4gIFwiODAwXCI6ICgpID0+IGBmb250LXdlaWdodDo4MDA7YCxcbiAgXCI5MDBcIjogKCkgPT4gYGZvbnQtd2VpZ2h0OjkwMDtgLFxuXG4gIFwidGhpblwiOiAoKSA9PiBgZm9udC13ZWlnaHQ6MjAwO2AsXG4gIFwibGlnaHRcIjogKCkgPT4gYGZvbnQtd2VpZ2h0OjMwMDtgLFxuICBcInJlZ3VsYXJcIjogKCkgPT4gYGZvbnQtd2VpZ2h0Om5vcm1hbDtgLFxuICBcIm1lZGl1bVwiOiAoKSA9PiBgZm9udC13ZWlnaHQ6NTAwO2AsXG4gIFwic2VtaWJvbGRcIjogKCkgPT4gYGZvbnQtd2VpZ2h0OjYwMDtgLFxuICBcImJvbGRcIjogKCkgPT4gYGZvbnQtd2VpZ2h0OmJvbGQ7YCxcbiAgXCJoZWF2eVwiOiAoKSA9PiBgZm9udC13ZWlnaHQ6OTAwO2AsXG5cbiAgLy8gRm9udCBXZWlnaHQgVXRpbGl0eVxuICBcInRoaWNrZXJcIjogKHZhbHVlID0gXCIxXCIpID0+IGB0ZXh0LXNoYWRvdzowIDAgJHtweCh2YWx1ZSl9IGN1cnJlbnRDb2xvcjtgLFxuXG4gIC8vIEZvbnQtU3R5bGVcbiAgXCJpdGFsaWNcIjogKCkgPT4gYGZvbnQtc3R5bGU6aXRhbGljO2AsXG4gIFwib3ZlcmxpbmVcIjogKCkgPT4gYHRleHQtZGVjb3JhdGlvbjpvdmVybGluZTtgLFxuICBcInVuZGVybGluZVwiOiAoKSA9PiBgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtgLFxuICBcImxpbmUtdGhyb3VnaFwiOiAoKSA9PiBgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtgLFxuICBcInN0cmlrZVwiOiAoKSA9PiBgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtgLFxuICBcImRlbFwiOiAoKSA9PiBgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtgLFxuXG4gIFwic21hbGwtY2Fwc1wiOiAoKSA9PiBgZm9udC12YXJpYW50LWNhcHM6c21hbGwtY2FwcztgLFxuICBcImFsbC1zbWFsbC1jYXBzXCI6ICgpID0+IGBmb250LXZhcmlhbnQtY2FwczphbGwtc21hbGwtY2FwcztgLFxuICBcInNsYXNoZWQtemVyb1wiOiAoKSA9PiBgZm9udC12YXJpYW50LW51bWVyaWM6c2xhc2hlZC16ZXJvO2AsXG4gIFwidGFidWxhci1udW1zXCI6ICgpID0+IGBmb250LXZhcmlhbnQtbnVtZXJpYzp0YWJ1bGFyLW51bXM7YCxcblxuICBcImxvd2VyY2FzZVwiOiAoKSA9PiBgdGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlO2AsXG4gIFwidXBwZXJjYXNlXCI6ICgpID0+IGB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7YCxcbiAgXCJjYXBpdGFsaXplXCI6ICgpID0+IGB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO2AsXG5cbiAgLy8gVGV4dCBBbGlnblxuICBcInRleHRcIjogKHZhbHVlOnN0cmluZykgPT4gbWFrZVRleHRCb3godmFsdWUpLFxuXG4gIFwidGV4dC1qdXN0aWZ5XCI6ICgpID0+IGB0ZXh0LWFsaWduOmp1c3RpZnk7YCxcbiAgXCJ0ZXh0LWNlbnRlclwiOiAoKSA9PiBgdGV4dC1hbGlnbjpjZW50ZXI7YCxcbiAgXCJ0ZXh0LXJpZ2h0XCI6ICgpID0+IGB0ZXh0LWFsaWduOnJpZ2h0O2AsXG4gIFwidGV4dC1sZWZ0XCI6ICgpID0+IGB0ZXh0LWFsaWduOmxlZnQ7YCxcblxuICBcInZlcnRpY2FsLXRvcFwiOiAoKSA9PiBgdmVydGljYWwtYWxpZ246dG9wO2AsXG4gIFwidmVydGljYWwtbWlkZGxlXCI6ICgpID0+IGB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7YCxcbiAgXCJ2ZXJ0aWNhbC1ib3R0b21cIjogKCkgPT4gYHZlcnRpY2FsLWFsaWduOmJvdHRvbTtgLFxuICBcInN1YlwiOiAoKSA9PiBgdmVydGljYWwtYWxpZ246c3ViO2AsXG4gIFwic3VwZXJcIjogKCkgPT4gYHZlcnRpY2FsLWFsaWduOnN1cGVyO2AsXG4gIFwidGV4dC10b3BcIjogKCkgPT4gYHZlcnRpY2FsLWFsaWduOnRleHQtdG9wO2AsXG4gIFwidGV4dC1ib3R0b21cIjogKCkgPT4gYHZlcnRpY2FsLWFsaWduOnRleHQtYm90dG9tO2AsXG5cbiAgLy8gVGV4dCBJbmRlbnRcbiAgXCJ0ZXh0LWluZGVudFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgdGV4dC1pbmRlbnQ6JHtweCh2YWx1ZSl9O2AsXG5cbiAgLy8gVGV4dCBXcmFwXG4gIFwiYnJlYWstYWxsXCI6ICgpID0+IGB3b3JkLWJyZWFrOmJyZWFrLWFsbDtgLFxuICBcImJyZWFrLXdvcmRcIjogKCkgPT4gYG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDtgLFxuICBcImtlZXAtYWxsXCI6ICgpID0+IGB3b3JkLWJyZWFrOmtlZXAtYWxsO2AsXG4gIFwiaHlwaGVuc1wiOiAodmFsdWUgPSBcImF1dG9cIikgPT4gYGh5cGhlbnM6JHt2YWx1ZX07YCxcblxuXG4gIC8vIC0tIERpc3BsYXlcbiAgXCJibG9ja1wiOiAoKSA9PiBcImRpc3BsYXk6YmxvY2s7XCIsXG4gIFwiaW5saW5lLWJsb2NrXCI6ICgpID0+IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7XCIsXG4gIFwiaW5saW5lXCI6ICgpID0+IFwiZGlzcGxheTppbmxpbmU7XCIsXG4gIFwiaW5saW5lLWZsZXhcIjogKCkgPT4gXCJkaXNwbGF5OmlubGluZS1mbGV4O1wiLFxuICBcInRhYmxlXCI6ICgpID0+IFwiZGlzcGxheTp0YWJsZTtcIixcbiAgXCJpbmxpbmUtdGFibGVcIjogKCkgPT4gXCJkaXNwbGF5OmlubGluZS10YWJsZTtcIixcbiAgXCJ0YWJsZS1jYXB0aW9uXCI6ICgpID0+IFwiZGlzcGxheTp0YWJsZS1jYXB0aW9uO1wiLFxuICBcInRhYmxlLWNlbGxcIjogKCkgPT4gXCJkaXNwbGF5OnRhYmxlLWNlbGw7XCIsXG4gIFwidGFibGUtY29sdW1uXCI6ICgpID0+IFwiZGlzcGxheTp0YWJsZS1jb2x1bW47XCIsXG4gIFwidGFibGUtY29sdW1uLWdyb3VwXCI6ICgpID0+IFwiZGlzcGxheTp0YWJsZS1jb2x1bW4tZ3JvdXA7XCIsXG4gIFwidGFibGUtZm9vdGVyLWdyb3VwXCI6ICgpID0+IFwiZGlzcGxheTp0YWJsZS1mb290ZXItZ3JvdXA7XCIsXG4gIFwidGFibGUtaGVhZGVyLWdyb3VwXCI6ICgpID0+IFwiZGlzcGxheTp0YWJsZS1oZWFkZXItZ3JvdXA7XCIsXG4gIFwidGFibGUtcm93LWdyb3VwXCI6ICgpID0+IFwiZGlzcGxheTp0YWJsZS1yb3ctZ3JvdXA7XCIsXG4gIFwidGFibGUtcm93XCI6ICgpID0+IFwiZGlzcGxheTp0YWJsZS1yb3c7XCIsXG4gIFwiZmxvdy1yb290XCI6ICgpID0+IFwiZGlzcGxheTpmbG93LXJvb3Q7XCIsXG4gIFwiY29udGVudHNcIjogKCkgPT4gXCJkaXNwbGF5OmNvbnRlbnRzO1wiLFxuICBcImxpc3QtaXRlbVwiOiAoKSA9PiBcImRpc3BsYXk6bGlzdC1pdGVtO1wiLFxuXG4gIC8vIC0tIEJveFxuXG4gIC8vIEJveC1TaXppbmdcbiAgXCJib3JkZXItYm94XCI6ICgpID0+IGBib3gtc2l6aW5nOmJvcmRlci1ib3g7YCxcbiAgXCJjb250ZW50LWJveFwiOiAoKSA9PiBgYm94LXNpemluZzpjb250ZW50LWJveDtgLFxuXG4gIC8vIEJveC1Nb2RlbFxuICBcIndcIjogKHZhbHVlOnN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJodWdcIikgcmV0dXJuIFwid2lkdGg6bWF4LWNvbnRlbnQ7XCJcbiAgICBpZiAodmFsdWUgPT09IFwic3RyZXRjaFwiIHx8IHZhbHVlID09PSBcImZpbGxcIikge1xuICAgICAgcmV0dXJuIGAme2ZsZXgtZ3Jvdzp2YXIoLS13LWdyb3cpO2ZsZXgtc2hyaW5rOnZhcigtLXctc2hyaW5rKTthbGlnbi1zZWxmOnZhcigtLXctYWxpZ24pO21heC13aWR0aDoxMDAlfSYuaFxcXFwoZmlsbFxcXFwpLCYuaFxcXFwoc3RyZXRjaFxcXFwpe2ZsZXgtZ3JvdzoxO2ZsZXgtc2hyaW5rOjE7YWxpZ24tc2VsZjpzdHJldGNoO21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTt9YFxuICAgIH1cblxuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcIn5cIikpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KFwiflwiKVxuICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPD0gMikge1xuICAgICAgICBjb25zdCBbbWluLCBtYXhdID0gdmFsdWVzXG4gICAgICAgIG1pbiAmJiByZXN1bHQucHVzaChgbWluLXdpZHRoOiR7cHgobWluKX07YClcbiAgICAgICAgbWF4ICYmIHJlc3VsdC5wdXNoKGBtYXgtd2lkdGg6JHtweChtYXgpfTtgKVxuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCJcIilcbiAgICAgIH1cblxuICAgICAgY29uc3QgW21pbiwgd2lkdGgsIG1heF0gPSB2YWx1ZXNcbiAgICAgIG1pbiAmJiByZXN1bHQucHVzaChgbWluLXdpZHRoOiR7cHgobWluKX07YClcbiAgICAgIHJlc3VsdC5wdXNoKGB3aWR0aDoke3B4KHdpZHRoKX07YClcbiAgICAgIG1heCAmJiByZXN1bHQucHVzaChgbWF4LXdpZHRoOiR7cHgobWF4KX07YClcbiAgICAgIHJldHVybiByZXN1bHQuam9pbihcIlwiKVxuICAgIH1cblxuICAgIHJldHVybiBgd2lkdGg6JHtweCh2YWx1ZSl9O2BcbiAgfSxcbiAgXCJtaW4td1wiOiAodmFsdWU6c3RyaW5nKSA9PiBgbWluLXdpZHRoOiR7cHgodmFsdWUpfTtgLFxuICBcIm1heC13XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBtYXgtd2lkdGg6JHtweCh2YWx1ZSl9O2AsXG5cbiAgXCJoXCI6ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IFwiaHVnXCIpIHJldHVybiBcImhlaWdodDptYXgtY29udGVudDtcIlxuICAgIGlmICh2YWx1ZSA9PT0gXCJzdHJldGNoXCIgfHwgdmFsdWUgPT09IFwiZmlsbFwiKSB7XG4gICAgICByZXR1cm4gYGZsZXgtZ3Jvdzp2YXIoLS1oLWdyb3cpO2ZsZXgtc2hyaW5rOnZhcigtLWgtc2hyaW5rKTthbGlnbi1zZWxmOnZhcigtLWgtYWxpZ24pO21heC1oZWlnaHQ6MTAwJTtgXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKFwiflwiKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gW11cblxuICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoXCJ+XCIpXG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgIGNvbnN0IFttaW4sIG1heF0gPSB2YWx1ZS5zcGxpdChcIn5cIilcbiAgICAgICAgbWluICYmIHJlc3VsdC5wdXNoKGBtaW4taGVpZ2h0OiR7cHgobWluKX07YClcbiAgICAgICAgbWF4ICYmIHJlc3VsdC5wdXNoKGBtYXgtaGVpZ2h0OiR7cHgobWF4KX07YClcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpXG4gICAgICB9XG5cbiAgICAgIC8vIGgoMTB+MjB+MzApXG4gICAgICBjb25zdCBbbWluLCBoZWlnaHQsIG1heF0gPSB2YWx1ZXNcbiAgICAgIG1pbiAmJiByZXN1bHQucHVzaChgbWluLWhlaWdodDoke3B4KG1pbil9O2ApXG4gICAgICByZXN1bHQucHVzaChgaGVpZ2h0OiR7cHgoaGVpZ2h0KX07YClcbiAgICAgIG1heCAmJiByZXN1bHQucHVzaChgbWF4LWhlaWdodDoke3B4KG1heCl9O2ApXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCJcIilcbiAgICB9XG5cbiAgICByZXR1cm4gYGhlaWdodDoke3B4KHZhbHVlKX07YFxuICB9LFxuICBcIm1pbi1oXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBtaW4taGVpZ2h0OiR7cHgodmFsdWUpfTtgLFxuICBcIm1heC1oXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBtYXgtaGVpZ2h0OiR7cHgodmFsdWUpfTtgLFxuXG4gIC8vIEJveE1vZGVsIC0gTWFyZ2luXG4gIFwibVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgbWFyZ2luOiR7bWFrZVNpZGUodmFsdWUpfTtgLFxuICBcIm14XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBtYXJnaW4tbGVmdDoke3B4KHZhbHVlKX07bWFyZ2luLXJpZ2h0OiR7cHgodmFsdWUpfTtgLFxuICBcIm15XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBtYXJnaW4tdG9wOiR7cHgodmFsdWUpfTttYXJnaW4tYm90dG9tOiR7cHgodmFsdWUpfTtgLFxuICBcIm10XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBtYXJnaW4tdG9wOiR7cHgodmFsdWUpfTtgLFxuICBcIm1yXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBtYXJnaW4tcmlnaHQ6JHtweCh2YWx1ZSl9O2AsXG4gIFwibWJcIjogKHZhbHVlOnN0cmluZykgPT4gYG1hcmdpbi1ib3R0b206JHtweCh2YWx1ZSl9O2AsXG4gIFwibWxcIjogKHZhbHVlOnN0cmluZykgPT4gYG1hcmdpbi1sZWZ0OiR7cHgodmFsdWUpfTtgLFxuXG4gIC8vIEJveE1vZGVsIC0gUGFkZGluZ1xuICBcInBcIjogKHZhbHVlOnN0cmluZykgPT4gYHBhZGRpbmc6JHttYWtlU2lkZSh2YWx1ZSl9O2AsXG4gIFwicHhcIjogKHZhbHVlOnN0cmluZykgPT4gYHBhZGRpbmctbGVmdDoke3B4KHZhbHVlKX07cGFkZGluZy1yaWdodDoke3B4KHZhbHVlKX07YCxcbiAgXCJweVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgcGFkZGluZy10b3A6JHtweCh2YWx1ZSl9O3BhZGRpbmctYm90dG9tOiR7cHgodmFsdWUpfTtgLFxuICBcInB0XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBwYWRkaW5nLXRvcDoke3B4KHZhbHVlKX07YCxcbiAgXCJwclwiOiAodmFsdWU6c3RyaW5nKSA9PiBgcGFkZGluZy1yaWdodDoke3B4KHZhbHVlKX07YCxcbiAgXCJwYlwiOiAodmFsdWU6c3RyaW5nKSA9PiBgcGFkZGluZy1ib3R0b206JHtweCh2YWx1ZSl9O2AsXG4gIFwicGxcIjogKHZhbHVlOnN0cmluZykgPT4gYHBhZGRpbmctbGVmdDoke3B4KHZhbHVlKX07YCxcblxuICAvLyBCb3hNb2RlbCAtIEJvcmRlclxuICBcIm5vLWJvcmRlclwiOiAoKSA9PiBgYm9yZGVyOm5vbmU7b3V0bGluZTpub25lO2AsXG4gIFwiYlwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyOiR7bWFrZUJvcmRlcih2YWx1ZSl9O2AsXG4gIFwiYnhcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1sZWZ0OiR7bWFrZUJvcmRlcih2YWx1ZSl9O2JvcmRlci1yaWdodDoke21ha2VCb3JkZXIodmFsdWUpfTtgLFxuICBcImJ5XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItdG9wOiR7bWFrZUJvcmRlcih2YWx1ZSl9O2JvcmRlci1ib3R0b206JHttYWtlQm9yZGVyKHZhbHVlKX07YCxcbiAgXCJidFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyLXRvcDoke21ha2VCb3JkZXIodmFsdWUpfTtgLFxuICBcImJyXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItcmlnaHQ6JHttYWtlQm9yZGVyKHZhbHVlKX07YCxcbiAgXCJiYlwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyLWJvdHRvbToke21ha2VCb3JkZXIodmFsdWUpfTtgLFxuICBcImJsXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItbGVmdDoke21ha2VCb3JkZXIodmFsdWUpfTtgLFxuXG4gIFwiYndcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci13aWR0aDoke21ha2VWYWx1ZXModmFsdWUsIHB4KX07YCxcbiAgXCJieHdcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1sZWZ0LXdpZHRoOiR7cHgodmFsdWUpfTtib3JkZXItcmlnaHQtd2lkdGg6JHtweCh2YWx1ZSl9O2AsXG4gIFwiYnl3XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItdG9wLXdpZHRoOiR7cHgodmFsdWUpfTtib3JkZXItYm90dG9tLXdpZHRoOiR7cHgodmFsdWUpfTtgLFxuICBcImJ0d1wiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyLXRvcC13aWR0aDoke3B4KHZhbHVlKX07YCxcbiAgXCJicndcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1yaWdodC13aWR0aDoke3B4KHZhbHVlKX07YCxcbiAgXCJiYndcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1ib3R0b20td2lkdGg6JHtweCh2YWx1ZSl9O2AsXG4gIFwiYmx3XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItbGVmdC13aWR0aDoke3B4KHZhbHVlKX07YCxcblxuICBcImJzXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItc3R5bGU6JHttYWtlVmFsdWVzKHZhbHVlKX07YCxcbiAgXCJieHNcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1sZWZ0LXN0eWxlOiR7Y3NzdmFyKHZhbHVlKX07Ym9yZGVyLXJpZ2h0LXN0eWxlOiR7Y3NzdmFyKHZhbHVlKX07YCxcbiAgXCJieXNcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci10b3Atc3R5bGU6JHtjc3N2YXIodmFsdWUpfTtib3JkZXItYm90dG9tLXN0eWxlOiR7Y3NzdmFyKHZhbHVlKX07YCxcbiAgXCJidHNcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci10b3Atc3R5bGU6JHtjc3N2YXIodmFsdWUpfTtgLFxuICBcImJyc1wiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyLXJpZ2h0LXN0eWxlOiR7Y3NzdmFyKHZhbHVlKX07YCxcbiAgXCJiYnNcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1ib3R0b20tc3R5bGU6JHtjc3N2YXIodmFsdWUpfTtgLFxuICBcImJsc1wiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyLWxlZnQtc3R5bGU6JHtjc3N2YXIodmFsdWUpfTtgLFxuXG4gIFwiYmNcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1jb2xvcjoke21ha2VWYWx1ZXModmFsdWUsIG1ha2VDb2xvcil9O2AsXG4gIFwiYnhjXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItbGVmdC1jb2xvcjoke21ha2VDb2xvcih2YWx1ZSl9O2JvcmRlci1yaWdodC1jb2xvcjoke21ha2VDb2xvcih2YWx1ZSl9O2AsXG4gIFwiYnljXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItdG9wLWNvbG9yOiR7bWFrZUNvbG9yKHZhbHVlKX07Ym9yZGVyLWJvdHRvbS1jb2xvcjoke21ha2VDb2xvcih2YWx1ZSl9O2AsXG4gIFwiYnRjXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItdG9wLWNvbG9yOiR7bWFrZUNvbG9yKHZhbHVlKX07YCxcbiAgXCJicmNcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1yaWdodC1jb2xvcjoke21ha2VDb2xvcih2YWx1ZSl9O2AsXG4gIFwiYmJjXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItYm90dG9tLWNvbG9yOiR7bWFrZUNvbG9yKHZhbHVlKX07YCxcbiAgXCJibGNcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1sZWZ0LWNvbG9yOiR7bWFrZUNvbG9yKHZhbHVlKX07YCxcblxuICAvLyBvdXRsaW5lXG4gIFwib3V0bGluZVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgb3V0bGluZToke21ha2VCb3JkZXIodmFsdWUpfTtgLFxuICBcImd1aWRlXCI6ICh2YWx1ZSA9IFwiIzRmODBmZlwiKSA9PiBgJiwmPip7b3V0bGluZToxcHggc29saWQgJHttYWtlQ29sb3IodmFsdWUpfTt9YCxcblxuICAvLyBib3JkZXItcmFkaXVzXG4gIFwiclwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyLXJhZGl1czoke21ha2VWYWx1ZXModmFsdWUsIHJweCl9O2AsXG5cbiAgXCJydFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoke3JweCh2YWx1ZSl9O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiR7cnB4KHZhbHVlKX07YCxcbiAgXCJyclwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6JHtycHgodmFsdWUpfTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoke3JweCh2YWx1ZSl9O2AsXG4gIFwicmJcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6JHtycHgodmFsdWUpfTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoke3JweCh2YWx1ZSl9O2AsXG4gIFwicmxcIjogKHZhbHVlOnN0cmluZykgPT4gYGJvcmRlci10b3AtbGVmdC1yYWRpdXM6JHtycHgodmFsdWUpfTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiR7cnB4KHZhbHVlKX07YCxcblxuICBcInJ0bFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoke3JweCh2YWx1ZSl9O2AsXG4gIFwicnRyXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoke3JweCh2YWx1ZSl9O2AsXG4gIFwicmJyXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoke3JweCh2YWx1ZSl9O2AsXG4gIFwicmJsXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiR7cnB4KHZhbHVlKX07YCxcblxuICAvLyBib3gtc2hhZG93XG4gIFwicmluZ1wiOiAodmFsdWU6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgW2NvbG9yLCBzaXplID0gMV0gPSB2YWx1ZS5zcGxpdChcIi9cIilcbiAgICByZXR1cm4gYGJveC1zaGFkb3c6MCAwIDAgJHtweChzaXplKX0gJHttYWtlQ29sb3IoY29sb3IpfTtgXG4gIH0sXG5cbiAgXCJib3gtc2hhZG93XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBib3gtc2hhZG93OiR7bWFrZVZhbHVlcyh2YWx1ZSwgdiA9PiBOdW1iZXIuaXNJbnRlZ2VyKCt2KSA/IHB4KHYpIDogY3NzdmFyKHYpKX07YCxcblxuICAvLyAtLSBCYWNrZ3JvdW5kXG4gIFwiYmdcIjogKHZhbHVlOnN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKFwibGluZWFyLWdyYWRpZW50XCIpKSByZXR1cm4gYGJhY2tncm91bmQ6JHt2YWx1ZS5yZXBsYWNlKC9cXC8vZywgXCIgXCIpfTtgXG4gICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCJyYWRpYWwtZ3JhZGllbnRcIikpIHJldHVybiBgYmFja2dyb3VuZDoke3ZhbHVlLnJlcGxhY2UoL1xcLy9nLCBcIiBcIil9O2BcblxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2UtdXJsXG4gICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCJ1cmxcIikpIHJldHVybiBgYmFja2dyb3VuZC1pbWFnZToke3ZhbHVlfTtgXG4gICAgaWYgKC9eKGh0dHB8Wy4vXSkvLnRlc3QodmFsdWUpKSByZXR1cm4gYGJhY2tncm91bmQtaW1hZ2U6dXJsKCR7dmFsdWV9KTtgXG5cbiAgICBpZiAodmFsdWUgPT09IFwidHJhbnNwYXJlbnRcIikgcmV0dXJuIGBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2BcbiAgICByZXR1cm4gYGJhY2tncm91bmQ6JHttYWtlQ29sb3IodmFsdWUpfTtgXG4gIH0sXG5cbiAgXCJiZy1pbWFnZVwiOiAodmFsdWU6c3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCJ1cmxcIikpIHJldHVybiBgYmFja2dyb3VuZC1pbWFnZToke3ZhbHVlfTtgXG4gICAgcmV0dXJuIGBiYWNrZ3JvdW5kLWltYWdlOnVybCgke3ZhbHVlfSk7YFxuICB9LFxuICBcImJhY2tncm91bmQtaW1hZ2VcIjogKHZhbHVlOnN0cmluZykgPT4gUlVMRVNbXCJiZy1pbWFnZVwiXSh2YWx1ZSksXG5cbiAgXCJiZy1wb3NpdGlvblwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYmFja2dyb3VuZC1wb3NpdGlvbjoke21ha2VWYWx1ZXModmFsdWUpfTtgLFxuXG4gIC8vIEBUT0RPOmJhY2tncm91bmQgXHVDNzc0XHVCQkY4XHVDOUMwXHVDNUQwIFx1QjMwMFx1RDU1QyBcdUMxMzhcdUI4MjhcdUI0MUMgXHVCQzI5XHVCQzk1XHVDNzc0IFx1RDU0NFx1QzY5NFx1RDU1OFx1QjJFNCFcbiAgXCJiZy1yZXBlYXQteFwiOiAoKSA9PiBgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXg7YCxcbiAgXCJiZy1yZXBlYXQteVwiOiAoKSA9PiBgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXk7YCxcbiAgXCJiZy1uby1yZXBlYXRcIjogKCkgPT4gYGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtgLFxuICBcImJnLWZpeGVkXCI6ICgpID0+IGBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7YCxcbiAgXCJiZy1zY3JvbGxcIjogKCkgPT4gYGJhY2tncm91bmQtYXR0YWNobWVudDpzY3JvbGw7YCxcblxuICBcImNvbnRhaW5cIjogKCkgPT4gYGJhY2tncm91bmQtc2l6ZTpjb250YWluO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtvYmplY3QtZml0OmNvbnRhaW47YCxcbiAgXCJjb3ZlclwiOiAoKSA9PiBgYmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtvYmplY3QtZml0OmNvdmVyO2AsXG5cbiAgLy8vIC0tIE92ZXJmbG93XG5cbiAgLy8gT3ZlckZsb3dcbiAgXCJjbGlwXCI6ICgpID0+IGAme292ZXJmbG93OmhpZGRlbjt9JjpoYXMoLm5vd3JhcFxcXFwuXFxcXC5cXFxcLil7ZmxleC1zaHJpbms6MTt9YCxcbiAgXCJvdmVyZmxvd1wiOiAodmFsdWU6c3RyaW5nKSA9PiBgb3ZlcmZsb3c6JHt2YWx1ZX07YCxcbiAgXCJvdmVyZmxvdy14XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBvdmVyZmxvdy14OiR7dmFsdWV9O2AsXG4gIFwib3ZlcmZsb3cteVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgb3ZlcmZsb3cteToke3ZhbHVlfTtgLFxuXG4gIC8vIFNjcm9sbFxuICBcInNjcm9sbFwiOiAoKSA9PiBgb3ZlcmZsb3c6YXV0bztgLFxuICBcInNjcm9sbC14XCI6ICgpID0+IGBvdmVyZmxvdy14OmF1dG87b3ZlcmZsb3cteTpoaWRkZW47YCxcbiAgXCJzY3JvbGwteVwiOiAoKSA9PiBgb3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO2AsXG4gIFwic2Nyb2xsYmFyXCI6ICgpID0+IGAme292ZXJmbG93OnNjcm9sbDt9Ji5zY3JvbGx7b3ZlcmZsb3c6c2Nyb2xsO30mLnNjcm9sbC14e292ZXJmbG93LXg6c2Nyb2xsO30mLnNjcm9sbC15e292ZXJmbG93LXk6c2Nyb2xsO31gLFxuICBcIm5vLXNjcm9sbGJhclwiOiAoKSA9PiBgJjo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lO31gLFxuICBcIm5vLXNjcm9sbGJhci14XCI6ICgpID0+IGAmOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFse2Rpc3BsYXk6bm9uZTt9YCxcblxuICAvLyBTY3JvbGwgU25hcFxuICBcInNjcm9sbC1tXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBzY3JvbGwtbWFyZ2luOiR7bWFrZVNpZGUodmFsdWUpfTtgLFxuICBcInNjcm9sbC1tdFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgc2Nyb2xsLW1hcmdpbi10b3A6JHtweCh2YWx1ZSl9O2AsXG4gIFwic2Nyb2xsLW1yXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBzY3JvbGwtbWFyZ2luLXJpZ2h0OiR7cHgodmFsdWUpfTtgLFxuICBcInNjcm9sbC1tYlwiOiAodmFsdWU6c3RyaW5nKSA9PiBgc2Nyb2xsLW1hcmdpbi1ib3R0b206JHtweCh2YWx1ZSl9O2AsXG4gIFwic2Nyb2xsLW1sXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBzY3JvbGwtbWFyZ2luLWxlZnQ6JHtweCh2YWx1ZSl9O2AsXG5cbiAgXCJzY3JvbGwtcFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgc2Nyb2xsLXBhZGRpbmc6JHttYWtlU2lkZSh2YWx1ZSl9O2AsXG4gIFwic2Nyb2xsLXB0XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBzY3JvbGwtcGFkZGluZy10b3A6JHtweCh2YWx1ZSl9O2AsXG4gIFwic2Nyb2xsLXByXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBzY3JvbGwtcGFkZGluZy1yaWdodDoke3B4KHZhbHVlKX07YCxcbiAgXCJzY3JvbGwtcGJcIjogKHZhbHVlOnN0cmluZykgPT4gYHNjcm9sbC1wYWRkaW5nLWJvdHRvbToke3B4KHZhbHVlKX07YCxcbiAgXCJzY3JvbGwtcGxcIjogKHZhbHVlOnN0cmluZykgPT4gYHNjcm9sbC1wYWRkaW5nLWxlZnQ6JHtweCh2YWx1ZSl9O2AsXG5cbiAgXCJzbmFwXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBzY3JvbGwtc25hcC1hbGlnbjoke2Nzc3Zhcih2YWx1ZSl9O2AsXG4gIFwic25hcC1zdGFydFwiOiAoKSA9PiBgc2Nyb2xsLXNuYXAtYWxpZ246c3RhcnQ7YCxcbiAgXCJzbmFwLWVuZFwiOiAoKSA9PiBgc2Nyb2xsLXNuYXAtYWxpZ246ZW5kO2AsXG4gIFwic25hcC1jZW50ZXJcIjogKCkgPT4gYHNjcm9sbC1zbmFwLWFsaWduOmNlbnRlcjtgLFxuICBcInNuYXAtYWxpZ24tbm9uZVwiOiAoKSA9PiBgc2Nyb2xsLXNuYXAtYWxpZ246bm9uZTtgLFxuXG4gIFwic25hcC1ub25lXCI6ICgpID0+IGBzY3JvbGwtc25hcC10eXBlOm5vbmU7YCxcbiAgXCJzbmFwLXhcIjogKCkgPT4gYHNjcm9sbC1zbmFwLXR5cGU6eCB2YXIoLS1hLXNjcm9sbC1zbmFwLXN0cmljdG5lc3MsIG1hbmRhdG9yeSk7YCxcbiAgXCJzbmFwLXgtcHJveGltaXR5XCI6ICgpID0+IGBzY3JvbGwtc25hcC10eXBlOnggcHJveGltaXR5O2AsXG4gIFwic25hcC15XCI6ICgpID0+IGBzY3JvbGwtc25hcC10eXBlOnkgdmFyKC0tYS1zY3JvbGwtc25hcC1zdHJpY3RuZXNzLCBtYW5kYXRvcnkpO2AsXG4gIFwic25hcC15LXByb3hpbWl0eVwiOiAoKSA9PiBgc2Nyb2xsLXNuYXAtdHlwZTp5IHByb3hpbWl0eTtgLFxuICBcInNuYXAtYm90aFwiOiAoKSA9PiBgc2Nyb2xsLXNuYXAtdHlwZTpib3RoIHZhcigtLWEtc2Nyb2xsLXNuYXAtc3RyaWN0bmVzcywgbWFuZGF0b3J5KTtgLFxuICBcInNuYXAtYm90aC1wcm94aW1pdHlcIjogKCkgPT4gYHNjcm9sbC1zbmFwLXR5cGU6Ym90aCBwcm94aW1pdHk7YCxcbiAgXCJzbmFwLW1hbmRhdG9yeVwiOiAoKSA9PiBgLS1hLXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6bWFuZGF0b3J5O2AsXG4gIFwic25hcC1wcm94aW1pdHlcIjogKCkgPT4gYC0tYS1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOnByb3hpbWl0eTtgLFxuXG4gIFwic25hcC1ub3JtYWxcIjogKCkgPT4gYHNjcm9sbC1zbmFwLXN0b3A6bm9ybWFsO2AsXG4gIFwic25hcC1hbHdheXNcIjogKCkgPT4gYHNjcm9sbC1zbmFwLXN0b3A6YWx3YXlzO2AsXG5cbiAgLy8gQFRPRE86LSBUQkRcbiAgXCJvdmVyc2Nyb2xsXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBvdmVyc2Nyb2xsLWJlaGF2aW9yOiR7dmFsdWV9O2AsXG4gIFwib3ZlcnNjcm9sbC14XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBvdmVyc2Nyb2xsLWJlaGF2aW9yLXg6JHt2YWx1ZX07YCxcbiAgXCJvdmVyc2Nyb2xsLXlcIjogKHZhbHVlOnN0cmluZykgPT4gYG92ZXJzY3JvbGwtYmVoYXZpb3IteToke3ZhbHVlfTtgLFxuXG4gIC8vIEBUT0RPOi0gVEJEXG4gIFwibm8tYm91bmNpbmdcIjogKCkgPT4gXCJcIixcbiAgXCJuby1vdmVyc2Nyb2xsXCI6ICgpID0+IFwiXCIsXG5cbiAgLy8gT3ZlckZsb3cgKyBUZXh0XG4gIFwid2hpdGUtc3BhY2Utbm9ybWFsXCI6ICgpID0+IGB3aGl0ZS1zcGFjZTpub3JtYWw7YCxcbiAgXCJwcmVcIjogKCkgPT4gYHdoaXRlLXNwYWNlOnByZS13cmFwO2AsXG4gIFwicHJlLXdyYXBcIjogKCkgPT4gYHdoaXRlLXNwYWNlOnByZS13cmFwO2AsXG4gIFwicHJlLWxpbmVcIjogKCkgPT4gYHdoaXRlLXNwYWNlOnByZS1saW5lO2AsXG4gIFwiYnJlYWstc3BhY2VzXCI6ICgpID0+IGB3aGl0ZS1zcGFjZTpicmVhay1zcGFjZXM7YCxcbiAgXCJub3dyYXBcIjogKCkgPT4gYHdoaXRlLXNwYWNlOm5vd3JhcDtgLFxuICBcIm5vd3JhcC4uLlwiOiAoKSA9PiBgd2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVuO2ZsZXgtc2hyaW5rOjE7bWF4LXdpZHRoOjEwMCU7YCxcblxuICAvLyBsaW5lLWNsYW1wIHZzIG1heC1saW5lc1xuICAvLyBATk9URTpcdUM3N0NcdUIyRTggXHVBRTMwXHVDODc0IFx1RDUwNFx1Qjg1Q1x1RDM3Q1x1RDJGMFx1QzVEMCBcdUM3NThcdUFDNzBcdUQ1NUNcdUIyRTRcdUIyOTQgXHVDNkQwXHVDRTU5XHVDNUQwXHVCNTMwXHVCNzdDIGxpbmUtY2xhbXBcdUI5N0MgXHVDNEY0XHVCMkU0LiBcdUM3NzRcdUQ2QzQgbWF4LWxpbmVzXHVBQzAwIFx1QzgxNVx1QzJERCBcdUMyQTRcdUQzOTlcdUM3NzQgXHVCNDE4XHVCQTc0IGRlcHJlY2F0ZWRcdUQ1NUNcdUIyRTQuXG4gIC8vIEBOT1RFOlx1QURGOFx1QjBFNSBcdUI0NThcdUIyRTQgXHVDODFDXHVBQ0Y1XHVENTVDXHVCMkU0LlxuICBcImxpbmUtY2xhbXBcIjogKHZhbHVlOnN0cmluZykgPT4gYGRpc3BsYXk6LXdlYmtpdC1ib3g7LXdlYmtpdC1saW5lLWNsYW1wOiR7dmFsdWV9Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDtvdmVyZmxvdzpoaWRkZW47YCxcbiAgXCJtYXgtbGluZXNcIjogKHZhbHVlOnN0cmluZykgPT4gYGRpc3BsYXk6LXdlYmtpdC1ib3g7LXdlYmtpdC1saW5lLWNsYW1wOiR7dmFsdWV9Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDtvdmVyZmxvdzpoaWRkZW47YCxcblxuXG4gIC8vIC0tIEZsZXhib3ggTGF5b3V0XG4gIFwiaGJveFwiOiAodmFsdWUgPSBcIlwiKSA9PiBgJntkaXNwbGF5OmZsZXg7ZmxleC1mbG93OnJvdzske21ha2VIQm94V2l0aFNlbWkodmFsdWUpfX0ke21ha2VIQm94RmlsbCgpfWAsXG4gIFwidmJveFwiOiAodmFsdWUgPSBcIlwiKSA9PiBgJntkaXNwbGF5OmZsZXg7ZmxleC1mbG93OmNvbHVtbjske21ha2VWQm94V2l0aFNlbWkodmFsdWUpfX0ke21ha2VWQm94RmlsbCgpfWAsXG4gIFwid3JhcFwiOiAodmFsdWUgPSBcIlwiKSA9PiBgJntkaXNwbGF5OmZsZXg7ZmxleC1mbG93OndyYXA7JHttYWtlSEJveFdpdGhTZW1pKHZhbHVlKX19JHttYWtlSEJveEZpbGwoKX1gLFxuICBcInBhY2tcIjogKCkgPT4gYCZ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO30ke21ha2VIQm94RmlsbCgpfWAsXG4gIFwiaHBhY2tcIjogKCkgPT4gYCZ7ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7fSR7bWFrZUhCb3hGaWxsKCl9YCxcbiAgXCJ2cGFja1wiOiAoKSA9PiBgJntkaXNwbGF5OmZsZXg7ZmxleC1mbG93OmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt9JHttYWtlVkJveEZpbGwoKX1gLFxuICBcImhib3goXCI6ICgpID0+IGBgLFxuICBcInZib3goXCI6ICgpID0+IGBgLFxuICBcInN1YmJveFwiOiAoKSA9PiBgZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzppbmhlcml0O2FsaWduLWl0ZW1zOmluaGVyaXQ7anVzdGlmeS1jb250ZW50OmluaGVyaXQ7YCxcblxuICBcImZsZXgtZmxvdzpcIjogKHZhbHVlOnN0cmluZykgPT4gYCZ7ZmxleC1mbG93OiR7dmFsdWV9O30ke21ha2VCb3hGaWxsKHZhbHVlKX1gLFxuICBcImZsZXgtZGlyZWN0aW9uOlwiOiAodmFsdWU6c3RyaW5nKSA9PiBgJntmbGV4LWRpcmVjdGlvbjoke3ZhbHVlfTt9JHttYWtlQm94RmlsbCh2YWx1ZSl9YCxcblxuICBcImdhcFwiOiAodmFsdWU6c3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSBcImF1dG9cIikgcmV0dXJuIFwiJntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW47fSY+Om9ubHktY2hpbGR7bWFyZ2luOmF1dG87fVwiXG4gICAgcmV0dXJuIGBnYXA6JHttYWtlU2lkZSh2YWx1ZSl9O2dyaWQtZ2FwOiR7bWFrZVNpZGUodmFsdWUpfTtgXG4gIH0sXG5cbiAgLy8gQE5PVEU6SUUsc2FmYXJpPD0xM1xuICBcImhnYXBcIjogKHZhbHVlOnN0cmluZykgPT4gYCY+Kisqe21hcmdpbi1sZWZ0OiR7cHgodmFsdWUpfTt9YCxcbiAgXCJoZ2FwLXJldmVyc2VcIjogKHZhbHVlOnN0cmluZykgPT4gYCY+Kisqe21hcmdpbi1yaWdodDoke3B4KHZhbHVlKX07fWAsXG4gIFwidmdhcFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgJj4qKyp7bWFyZ2luLXRvcDoke3B4KHZhbHVlKX07fWAsXG4gIFwidmdhcC1yZXZlcnNlXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGAmPiorKnttYXJnaW4tYm90dG9tOiR7cHgodmFsdWUpfTt9YCxcblxuICAvLyBhbGlnbi1pdGVtc1xuICBcImFpXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBhbGlnbi1pdGVtczoke3ZhbHVlfTtgLFxuICBcIml0ZW1zXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBhbGlnbi1pdGVtczoke3ZhbHVlfTtgLFxuICBcIml0ZW1zLXN0YXJ0XCI6ICgpID0+IGBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2AsXG4gIFwiaXRlbXMtZW5kXCI6ICgpID0+IGBhbGlnbi1pdGVtczpmbGV4LWVuZDtgLFxuICBcIml0ZW1zLWNlbnRlclwiOiAoKSA9PiBgYWxpZ24taXRlbXM6Y2VudGVyO2AsXG4gIFwiaXRlbXMtYmFzZWxpbmVcIjogKCkgPT4gYGFsaWduLWl0ZW1zOmJhc2VsaW5lO2AsXG4gIFwiaXRlbXMtc3RyZXRjaFwiOiAoKSA9PiBgYWxpZ24taXRlbXM6c3RyZXRjaDtgLFxuXG4gIC8vIGFsaWduLWNvbnRlbnRcbiAgXCJhY1wiOiAodmFsdWU6c3RyaW5nKSA9PiBgYWxpZ24tY29udGVudDoke3ZhbHVlfTtgLFxuICBcImNvbnRlbnQtc3RhcnRcIjogKCkgPT4gYGFsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDtgLFxuICBcImNvbnRlbnQtZW5kXCI6ICgpID0+IGBhbGlnbi1jb250ZW50OmZsZXgtZW5kO2AsXG4gIFwiY29udGVudC1jZW50ZXJcIjogKCkgPT4gYGFsaWduLWNvbnRlbnQ6Y2VudGVyO2AsXG4gIFwiY29udGVudC1iZXR3ZWVuXCI6ICgpID0+IGBhbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW47YCxcbiAgXCJjb250ZW50LWFyb3VuZFwiOiAoKSA9PiBgYWxpZ24tY29udGVudDpzcGFjZS1hcm91bmQ7YCxcbiAgXCJjb250ZW50LWV2ZW5seVwiOiAoKSA9PiBgYWxpZ24tY29udGVudDpzcGFjZS1ldmVubHk7YCxcbiAgXCJjb250ZW50LXN0cmV0Y2hcIjogKCkgPT4gYGFsaWduLWNvbnRlbnQ6c3RyZXRjaDtgLFxuXG4gIC8vIGp1c3RpZnktY29udGVudFxuICBcImpjXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBqdXN0aWZ5LWNvbnRlbnQ6JHt2YWx1ZX07YCxcbiAgXCJqdXN0aWZ5XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBqdXN0aWZ5LWNvbnRlbnQ6JHt2YWx1ZX07YCxcbiAgXCJqdXN0aWZ5LXN0YXJ0XCI6ICgpID0+IGBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtgLFxuICBcImp1c3RpZnktZW5kXCI6ICgpID0+IGBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7YCxcbiAgXCJqdXN0aWZ5LWNlbnRlclwiOiAoKSA9PiBganVzdGlmeS1jb250ZW50OmNlbnRlcjtgLFxuICBcImp1c3RpZnktYmV0d2VlblwiOiAoKSA9PiBganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YCxcbiAgXCJqdXN0aWZ5LWFyb3VuZFwiOiAoKSA9PiBganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtgLFxuICBcImp1c3RpZnktZXZlbmx5XCI6ICgpID0+IGBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O2AsXG4gIFwianVzdGlmeS1zdHJldGNoXCI6ICgpID0+IGBqdXN0aWZ5LWNvbnRlbnQ6c3RyZXRjaDtgLFxuXG4gIFwic3BhY2UtYmV0d2VlblwiOiAoKSA9PiBganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuO2AsXG4gIFwic3BhY2UtYXJvdW5kXCI6ICgpID0+IGBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2FsaWduLWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2AsXG4gIFwic3BhY2UtZXZlbmx5XCI6ICgpID0+IGBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O2FsaWduLWNvbnRlbnQ6c3BhY2UtZXZlbmx5O2AsXG5cbiAgLy8ganVzdGlmeS1pdGVtc1xuICBcImppXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBqdXN0aWZ5LWl0ZW1zOiR7dmFsdWV9O2AsXG4gIFwianVzdGlmeS1pdGVtc1wiOiAodmFsdWU6c3RyaW5nKSA9PiBganVzdGlmeS1pdGVtczoke3ZhbHVlfTtgLFxuICBcImp1c3RpZnktaXRlbXMtc3RhcnRcIjogKCkgPT4gYGp1c3RpZnktaXRlbXM6c3RhcnQ7YCxcbiAgXCJqdXN0aWZ5LWl0ZW1zLWVuZFwiOiAoKSA9PiBganVzdGlmeS1pdGVtczplbmQ7YCxcbiAgXCJqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiOiAoKSA9PiBganVzdGlmeS1pdGVtczpjZW50ZXI7YCxcbiAgXCJqdXN0aWZ5LWl0ZW1zLXN0cmV0Y2hcIjogKCkgPT4gYGp1c3RpZnktaXRlbXM6c3RyZXRjaDtgLFxuXG4gIC8vIGZsZXg6IEBkZXByZWNhdGVkXG4gIFwiZmxleFwiOiAodmFsdWUgPSBcIjFcIikgPT4gYGZsZXg6JHttYWtlVmFsdWVzKHZhbHVlKX07YCxcbiAgXCJzcGFjZVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgW2NsYXNzKj1cImhib3hcIl0+Jnt3aWR0aDoke3B4KHZhbHVlKX07fVtjbGFzcyo9XCJ2Ym94XCJdPiZ7aGVpZ2h0OiR7cHgodmFsdWUpfTt9YCxcblxuICAvLyBmbGV4XG4gIFwiZ3Jvd1wiOiAodmFsdWUgPSBcIjFcIikgPT4gYGZsZXgtZ3Jvdzoke2Nzc3Zhcih2YWx1ZSl9O2AsXG4gIFwiZ3Jvdy0wXCI6ICgpID0+IGBmbGV4LWdyb3c6MDtgLFxuICBcIm5vLWdyb3dcIjogKCkgPT4gYGZsZXgtZ3JvdzowO2AsXG4gIFwic2hyaW5rXCI6ICh2YWx1ZSA9IFwiMVwiKSA9PiBgZmxleC1zaHJpbms6JHtjc3N2YXIodmFsdWUpfTtgLFxuICBcIm5vLXNocmlua1wiOiAoKSA9PiBgZmxleC1zaHJpbms6MDtgLFxuXG4gIFwiZmxleC1ncm93XCI6ICh2YWx1ZSA9IFwiMVwiKSA9PiBgZmxleC1ncm93OiR7Y3NzdmFyKHZhbHVlKX07YCxcbiAgXCJmbGV4LXNocmlua1wiOiAodmFsdWUgPSBcIjFcIikgPT4gYGZsZXgtc2hyaW5rOiR7Y3NzdmFyKHZhbHVlKX07YCxcbiAgXCJmbGV4LWJhc2lzXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBmbGV4LWJhc2lzOiR7cHgodmFsdWUpfTtgLFxuXG4gIFwiZmxleC13cmFwXCI6ICgpID0+IFwiJntmbGV4LXdyYXA6d3JhcDt9OndoZXJlKCY+Kil7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlO31cIixcbiAgXCJmbGV4LXdyYXAtcmV2ZXJzZVwiOiAoKSA9PiBcIiZ7ZmxleC13cmFwOndyYXAtcmV2ZXJzZTt9OndoZXJlKCY+Kil7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlO31cIixcbiAgXCJmbGV4LW5vd3JhcFwiOiAoKSA9PiBcImZsZXgtd3JhcDpub3dyYXA7XCIsXG4gIFwib3JkZXJcIjogKHZhbHVlOnN0cmluZykgPT4gYG9yZGVyOiR7Y3NzdmFyKHZhbHVlKX07YCxcblxuXG4gIC8vIC0tIEdyaWRcbiAgLy8gQFRPRE86LS0gR1JJRCBUQkRcbiAgXCJncmlkXCI6ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGNzcyA9IFtcImRpc3BsYXk6Z3JpZDtcIl1cbiAgICBpZiAoK3ZhbHVlID09PSArdmFsdWUpIGNzcy5wdXNoKGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KCR7dmFsdWV9LDFmcik7YClcbiAgICBlbHNlIGlmICh2YWx1ZSkgY3NzLnB1c2goYGdyaWQtdGVtcGxhdGUtY29sdW1uczoke3ZhbHVlfTtgKVxuICAgIHJldHVybiBjc3Muam9pbihcIlwiKVxuICB9LFxuICBcImdyaWQtY29sc1wiOiAodmFsdWUpID0+IHtcbiAgICBjb25zdCBjc3MgPSBbXCJkaXNwbGF5OmdyaWQ7XCJdXG4gICAgaWYgKCt2YWx1ZSA9PT0gK3ZhbHVlKSBjc3MucHVzaChgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgke3ZhbHVlfSwxZnIpO2ApXG4gICAgZWxzZSBpZiAodmFsdWUpIGNzcy5wdXNoKGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6JHt2YWx1ZX07YClcbiAgICByZXR1cm4gY3NzLmpvaW4oXCJcIilcbiAgfSxcbiAgXCJpbmxpbmUtZ3JpZFwiOiAoKSA9PiBcImRpc3BsYXk6aW5saW5lLWdyaWQ7XCIsXG5cblxuICAvLyAtLSBQb3NpdGlvbiBVdGlsaXRpZXNcbiAgXCJsYXllclwiOiAodmFsdWUgPSBcIlwiKSA9PiB7XG4gICAgY29uc3QgcG9zID0ge3RvcDogXCIwXCIsIHJpZ2h0OiBcIjBcIiwgYm90dG9tOiBcIjBcIiwgbGVmdDogXCIwXCJ9XG4gICAgY29uc3Qgb3V0c2lkZXMgPSBbXVxuICAgIGxldCBvdXRzaWRlID0gZmFsc2VcblxuICAgIHZhbHVlLnNwbGl0KFwiK1wiKS5mb3JFYWNoKHYgPT4ge1xuICAgICAgY29uc3QgW2RpcmVjdGlvbiwgdmFsdWUgPSBcIjBcIl0gPSB2LnNwbGl0KFwiOlwiKVxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBcInRvcFwiOiB7XG4gICAgICAgICAgcG9zLnRvcCA9IHZhbHVlXG4gICAgICAgICAgZGVsZXRlIHBvcy5ib3R0b21cbiAgICAgICAgICBvdXRzaWRlcy5wdXNoKFwidG9wXCIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6IHtcbiAgICAgICAgICBwb3MucmlnaHQgPSB2YWx1ZVxuICAgICAgICAgIGRlbGV0ZSBwb3MubGVmdFxuICAgICAgICAgIG91dHNpZGVzLnB1c2goXCJyaWdodFwiKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJib3R0b21cIjoge1xuICAgICAgICAgIHBvcy5ib3R0b20gPSB2YWx1ZVxuICAgICAgICAgIGRlbGV0ZSBwb3MudG9wXG4gICAgICAgICAgb3V0c2lkZXMucHVzaChcImJvdHRvbVwiKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6IHtcbiAgICAgICAgICBwb3MubGVmdCA9IHZhbHVlXG4gICAgICAgICAgZGVsZXRlIHBvcy5yaWdodFxuICAgICAgICAgIG91dHNpZGVzLnB1c2goXCJsZWZ0XCIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIm91dHNpZGVcIjoge1xuICAgICAgICAgIG91dHNpZGUgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKG91dHNpZGUpIHtcbiAgICAgIGNvbnN0IHJldmVydCA9IChiOnN0cmluZywgYTpzdHJpbmcpID0+IHtcbiAgICAgICAgcG9zW2FdID0gcG9zW2JdID09PSBcIjBcIiA/IFwiMTAwJVwiIDogYGNhbGMoMTAwJSArICR7cHgocG9zW2JdKX0pYFxuICAgICAgICBkZWxldGUgcG9zW2JdXG4gICAgICB9XG5cbiAgICAgIG91dHNpZGVzLmZvckVhY2goZGlyZWN0aW9uID0+IHtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJ0KFwidG9wXCIsIFwiYm90dG9tXCIpXG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJ0KFwicmlnaHRcIiwgXCJsZWZ0XCIpXG4gICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgICAgcmV0dXJuIHJldmVydChcImJvdHRvbVwiLCBcInRvcFwiKVxuICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJ0KFwibGVmdFwiLCBcInJpZ2h0XCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGBwb3NpdGlvbjphYnNvbHV0ZTtgICsgT2JqZWN0LmtleXMocG9zKS5tYXAoKHZhbHVlOnN0cmluZykgPT4gYCR7dmFsdWV9OiR7cHgocG9zW3ZhbHVlXSl9O2ApLmpvaW4oXCJcIilcbiAgfSxcblxuICBcImFic29sdXRlXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBwb3NpdGlvbjphYnNvbHV0ZTske21ha2VQb3NpdGlvbldpdGhTZW1pKHZhbHVlKX1gLFxuICBcInJlbGF0aXZlXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBwb3NpdGlvbjpyZWxhdGl2ZTske21ha2VQb3NpdGlvbldpdGhTZW1pKHZhbHVlKX1gLFxuICBcInN0aWNreVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgcG9zaXRpb246c3RpY2t5OyR7bWFrZVBvc2l0aW9uV2l0aFNlbWkodmFsdWUpfWAsXG4gIFwic3RpY2t5LXRvcFwiOiAodmFsdWUgPSBcIjBcIikgPT4gYHBvc2l0aW9uOnN0aWNreTt0b3A6JHtweCh2YWx1ZSl9O2AsXG4gIFwic3RpY2t5LXJpZ2h0XCI6ICh2YWx1ZSA9IFwiMFwiKSA9PiBgcG9zaXRpb246c3RpY2t5O3JpZ2h0OiR7cHgodmFsdWUpfTtgLFxuICBcInN0aWNreS1ib3R0b21cIjogKHZhbHVlID0gXCIwXCIpID0+IGBwb3NpdGlvbjpzdGlja3k7Ym90dG9tOiR7cHgodmFsdWUpfTtgLFxuICBcInN0aWNreS1sZWZ0XCI6ICh2YWx1ZSA9IFwiMFwiKSA9PiBgcG9zaXRpb246c3RpY2t5O2xlZnQ6JHtweCh2YWx1ZSl9O2AsXG4gIFwiZml4ZWRcIjogKHZhbHVlOnN0cmluZykgPT4gYHBvc2l0aW9uOmZpeGVkOyR7bWFrZVBvc2l0aW9uV2l0aFNlbWkodmFsdWUpfWAsXG4gIFwic3RhdGljXCI6ICgpID0+IGBwb3NpdGlvbjpzdGF0aWM7YCxcblxuICAvLyBQb3NpdGlvblxuICBcInRvcFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgdG9wOiR7cHgodmFsdWUpfTtgLFxuICBcImxlZnRcIjogKHZhbHVlOnN0cmluZykgPT4gYGxlZnQ6JHtweCh2YWx1ZSl9O2AsXG4gIFwicmlnaHRcIjogKHZhbHVlOnN0cmluZykgPT4gYHJpZ2h0OiR7cHgodmFsdWUpfTtgLFxuICBcImJvdHRvbVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYm90dG9tOiR7cHgodmFsdWUpfTtgLFxuXG4gIFwieFwiOiAodmFsdWU6c3RyaW5nKSA9PiBtYWtlUG9zaXRpb24yWCh2YWx1ZSksXG4gIFwieVwiOiAodmFsdWU6c3RyaW5nKSA9PiBtYWtlUG9zaXRpb24yWSh2YWx1ZSksXG4gIFwielwiOiAodmFsdWU6c3RyaW5nKSA9PiBgei1pbmRleDoke2Nzc3Zhcih2YWx1ZSl9O2AsXG5cbiAgXCJpc29sYXRlXCI6ICgpID0+IGBpc29sYXRpb246aXNvbGF0ZTtgLFxuXG5cbiAgLy8gVmlzaWJpbGl0eVxuICBcIm5vbmVcIjogKCkgPT4gYGRpc3BsYXk6bm9uZTtgLFxuICBcImhpZGRlblwiOiAoKSA9PiBgdmlzaWJpbGl0eTpoaWRkZW47YCxcbiAgXCJpbnZpc2libGVcIjogKCkgPT4gYHZpc2liaWxpdHk6aGlkZGVuO2AsXG4gIFwiYmxpbmRcIjogKCkgPT4gYHBvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDtib3JkZXI6MDttYXJnaW46LTFweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO2NsaXAtcGF0aDppbnNldCgxMDAlKTtgLFxuICBcInNyLW9ubHlcIjogKCkgPT4gYHBvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDtib3JkZXI6MDttYXJnaW46LTFweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO2NsaXAtcGF0aDppbnNldCgxMDAlKTtgLFxuICBcImdvbmVcIjogKCkgPT4gYHBvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDtib3JkZXI6MDttYXJnaW46LTFweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO2NsaXAtcGF0aDppbnNldCgxMDAlKTtgLFxuICBcInZpc2libGVcIjogKCkgPT4gYHZpc2liaWxpdHk6dmlzaWJsZTtgLFxuICBcImNvbGxhcHNlXCI6ICgpID0+IGB2aXNpYmlsaXR5OmNvbGxhcHNlO2AsXG4gIFwib3BhY2l0eVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgb3BhY2l0eToke2Nzc3Zhcih2YWx1ZSl9O2AsXG5cbiAgLy8gSW50ZXJhY3Rpb25zXG4gIFwiY29sLXJlc2l6ZVwiOiAoKSA9PiBgY3Vyc29yOmNvbC1yZXNpemU7YCxcbiAgXCJjcm9zc2hhaXJcIjogKCkgPT4gYGN1cnNvcjpjcm9zc2hhaXI7YCxcbiAgXCJlLXJlc2l6ZVwiOiAoKSA9PiBgY3Vyc29yOmUtcmVzaXplO2AsXG4gIFwiZXctcmVzaXplXCI6ICgpID0+IGBjdXJzb3I6ZXctcmVzaXplO2AsXG4gIFwiZ3JhYlwiOiAoKSA9PiBgJntjdXJzb3I6Z3JhYjt9JjphY3RpdmV7Y3Vyc29yOmdyYWJiaW5nO31gLFxuICBcImdyYWJiaW5nXCI6ICgpID0+IGBjdXJzb3I6Z3JhYmJpbmc7YCxcbiAgXCJuLXJlc2l6ZVwiOiAoKSA9PiBgY3Vyc29yOm4tcmVzaXplO2AsXG4gIFwibmUtcmVzaXplXCI6ICgpID0+IGBjdXJzb3I6bmUtcmVzaXplO2AsXG4gIFwibmVzdy1yZXNpemVcIjogKCkgPT4gYGN1cnNvcjpuZXN3LXJlc2l6ZTtgLFxuICBcIm5zLXJlc2l6ZVwiOiAoKSA9PiBgY3Vyc29yOm5zLXJlc2l6ZTtgLFxuICBcIm53LXJlc2l6ZVwiOiAoKSA9PiBgY3Vyc29yOm53LXJlc2l6ZTtgLFxuICBcIm53c2UtcmVzaXplXCI6ICgpID0+IGBjdXJzb3I6bndzZS1yZXNpemU7YCxcbiAgXCJub3QtYWxsb3dlZFwiOiAoKSA9PiBgY3Vyc29yOm5vdC1hbGxvd2VkO2AsXG4gIFwicG9pbnRlclwiOiAoKSA9PiBgY3Vyc29yOnBvaW50ZXI7YCxcbiAgXCJwcm9ncmVzc1wiOiAoKSA9PiBgY3Vyc29yOnByb2dyZXNzO2AsXG4gIFwicm93LXJlc2l6ZVwiOiAoKSA9PiBgY3Vyc29yOnJvdy1yZXNpemU7YCxcbiAgXCJzLXJlc2l6ZVwiOiAoKSA9PiBgY3Vyc29yOnMtcmVzaXplO2AsXG4gIFwic2UtcmVzaXplXCI6ICgpID0+IGBjdXJzb3I6c2UtcmVzaXplO2AsXG4gIFwic3ctcmVzaXplXCI6ICgpID0+IGBjdXJzb3I6c3ctcmVzaXplO2AsXG4gIFwidy1yZXNpemVcIjogKCkgPT4gYGN1cnNvcjp3LXJlc2l6ZTtgLFxuICBcInpvb20taW5cIjogKCkgPT4gYGN1cnNvcjp6b29tLWluO2AsXG4gIFwiem9vbS1vdXRcIjogKCkgPT4gYGN1cnNvcjp6b29tLW91dDtgLFxuICBcImN1cnNvclwiOiAodmFsdWU6c3RyaW5nKSA9PiBgY3Vyc29yOiR7dmFsdWV9O2AsXG5cbiAgXCJ1c2VyLXNlbGVjdC1ub25lXCI6ICgpID0+IFwidXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7XCIsXG4gIFwidXNlci1zZWxlY3QtYWxsXCI6ICgpID0+IFwidXNlci1zZWxlY3Q6YWxsOy13ZWJraXQtdXNlci1zZWxlY3Q6YWxsO1wiLFxuICBcInVzZXItc2VsZWN0LWF1dG9cIjogKCkgPT4gXCJ1c2VyLXNlbGVjdDphdXRvOy13ZWJraXQtdXNlci1zZWxlY3Q6YXV0bztcIixcbiAgXCJ1c2VyLXNlbGVjdC10ZXh0XCI6ICgpID0+IFwidXNlci1zZWxlY3Q6dGV4dDstd2Via2l0LXVzZXItc2VsZWN0OnRleHQ7XCIsXG4gIFwidXNlci1zZWxlY3RcIjogKHZhbHVlOnN0cmluZykgPT4gYHVzZXItc2VsZWN0OiR7Y3NzdmFyKHZhbHVlKX07LXdlYmtpdC11c2VyLXNlbGVjdDoke2Nzc3Zhcih2YWx1ZSl9O2AsXG5cbiAgXCJwb2ludGVyLWV2ZW50cy1ub25lXCI6ICgpID0+IFwicG9pbnRlci1ldmVudHM6bm9uZTtcIixcbiAgXCJwb2ludGVyLWV2ZW50cy1hdXRvXCI6ICgpID0+IFwicG9pbnRlci1ldmVudHM6YXV0bztcIixcblxuICAvLyBcdUM1RDBcdUIyQzhcdUJBNTRcdUM3NzRcdUMxNTg6dHJhbnNpdGlvbih0cmFuc2Zvcm09MTAwcy9vcGFjaXR5PTJzKVxuICBcInRyYW5zaXRpb25cIjogKHZhbHVlOnN0cmluZykgPT4gYHRyYW5zaXRpb246JHttYWtlVHJhbnNpdGlvbih2YWx1ZSl9O2AsXG5cbiAgLy8gdHJhbnNmb3JtXG4gIFwidHJhbnNsYXRlXCI6ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBtYWtlQ29tbWFWYWx1ZXModmFsdWUsIHB4KS5zcGxpdChcIixcIik7XG4gICAgcmV0dXJuIGAtLWEtdHJhbnNmb3JtLXRyYW5zbGF0ZS14OiR7eH07LS1hLXRyYW5zZm9ybS10cmFuc2xhdGUteToke3l9O3RyYW5zZm9ybTp2YXIoLS1hLXRyYW5zZm9ybSk7YDtcbiAgfSxcbiAgXCJ0cmFuc2xhdGVYXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGAtLWEtdHJhbnNsYXRlLXg6JHtweCh2YWx1ZSl9O3RyYW5zZm9ybTp2YXIoLS1hLXRyYW5zZm9ybSk7YCxcbiAgXCJ0cmFuc2xhdGVZXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGAtLWEtdHJhbnNsYXRlLXk6JHtweCh2YWx1ZSl9O3RyYW5zZm9ybTp2YXIoLS1hLXRyYW5zZm9ybSk7YCxcblxuICBcInJvdGF0ZVwiOiAodmFsdWU6c3RyaW5nKSA9PiB7XG4gICAgbGV0IFt4LCB5LCB6XSA9IG1ha2VDb21tYVZhbHVlcyh2YWx1ZSwgZGVnKS5zcGxpdChcIixcIik7XG4gICAgeCA9IHggfHwgeFxuICAgIHkgPSB5IHx8IHhcbiAgICB6ID0geiB8fCB4XG5cbiAgICByZXR1cm4gYC0tYS1yb3RhdGU6JHt4fTstLWEtcm90YXRlLXg6JHt4fTstLWEtcm90YXRlLXk6JHt5fTstLWEtcm90YXRlLXo6JHt6fTt0cmFuc2Zvcm06dmFyKC0tYS10cmFuc2Zvcm0pO2A7XG4gIH0sXG4gIFwicm90YXRlWFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgLS1hLXJvdGF0ZS14OiR7ZGVnKHZhbHVlKX07dHJhbnNmb3JtOnZhcigtLWEtdHJhbnNmb3JtKTtgLFxuICBcInJvdGF0ZVlcIjogKHZhbHVlOnN0cmluZykgPT4gYC0tYS1yb3RhdGUteToke2RlZyh2YWx1ZSl9O3RyYW5zZm9ybTp2YXIoLS1hLXRyYW5zZm9ybSk7YCxcblxuICBcInNjYWxlXCI6ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgICBsZXQgW3gsIHksIHpdID0gbWFrZUNvbW1hVmFsdWVzKHZhbHVlKS5zcGxpdChcIixcIik7XG4gICAgeCA9IHggfHwgeFxuICAgIHkgPSB5IHx8IHhcbiAgICB6ID0geiB8fCB4XG5cbiAgICByZXR1cm4gYC0tYS1zY2FsZS14OiR7eH07LS1hLXNjYWxlLXk6JHt5fTstLWEtc2NhbGUtejoke3p9O3RyYW5zZm9ybTp2YXIoLS1hLXRyYW5zZm9ybSk7YDtcbiAgfSxcblxuICBcInNjYWxlWFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgLS1hLXNjYWxlLXg6JHttYWtlTnVtYmVyKCt2YWx1ZSl9O3RyYW5zZm9ybTp2YXIoLS1hLXRyYW5zZm9ybSk7YCxcbiAgXCJzY2FsZVlcIjogKHZhbHVlOnN0cmluZykgPT4gYC0tYS1zY2FsZS15OiR7bWFrZU51bWJlcigrdmFsdWUpfTt0cmFuc2Zvcm06dmFyKC0tYS10cmFuc2Zvcm0pO2AsXG5cbiAgXCJza2V3XCI6ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBtYWtlQ29tbWFWYWx1ZXModmFsdWUsIGRlZykuc3BsaXQoXCIsXCIpO1xuICAgIHJldHVybiBgLS1hLXNrZXcteDoke3h9Oy0tYS1za2V3LXk6JHt5fTt0cmFuc2Zvcm06dmFyKC0tYS10cmFuc2Zvcm0pO2A7XG4gIH0sXG4gIFwic2tld1hcIjogKHZhbHVlOnN0cmluZykgPT4gYC0tYS1za2V3LXg6JHtkZWcodmFsdWUpfTt0cmFuc2Zvcm06dmFyKC0tYS10cmFuc2Zvcm0pO2AsXG4gIFwic2tld1lcIjogKHZhbHVlOnN0cmluZykgPT4gYC0tYS1za2V3LXk6JHtkZWcodmFsdWUpfTt0cmFuc2Zvcm06dmFyKC0tYS10cmFuc2Zvcm0pO2AsXG5cbiAgLy8gQFRPRE86IDNkIHRyYW5zZm9ybVxuICAvLyBcInRyYW5zbGF0ZTNkXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGAtLWEtdHJhbnNsYXRlLXg6JHtweCh2YWx1ZSl9Oy0tYS10cmFuc2xhdGUteToke3B4KHZhbHVlKX07LS1hLXRyYW5zbGF0ZS16OiR7cHgodmFsdWUpfTt0cmFuc2Zvcm06dmFyKC0tYS10cmFuc2Zvcm0pO2AsXG4gIC8vIFwicm90YXRlM2RcIjogKHZhbHVlOnN0cmluZykgPT4gYC0tYS1yb3RhdGUteDoke2RlZyh2YWx1ZSl9Oy0tYS1yb3RhdGUteToke2RlZyh2YWx1ZSl9Oy0tYS1yb3RhdGUtejoke2RlZyh2YWx1ZSl9O3RyYW5zZm9ybTp2YXIoLS1hLXRyYW5zZm9ybSk7YCxcbiAgLy8gXCJ0cmFuc2xhdGVaXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGAtLWEtdHJhbnNsYXRlLXo6JHtweCh2YWx1ZSl9O3RyYW5zZm9ybTp2YXIoLS1hLXRyYW5zZm9ybSk7YCxcbiAgLy8gXCJyb3RhdGVaXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGAtLWEtcm90YXRlLXo6JHtkZWcodmFsdWUpfTt0cmFuc2Zvcm06dmFyKC0tYS10cmFuc2Zvcm0pO2AsXG4gIC8vIFwic2tld1pcIjogKHZhbHVlOnN0cmluZykgPT4gYC0tYS1za2V3LXo6JHtkZWcodmFsdWUpfTt0cmFuc2Zvcm06dmFyKC0tYS10cmFuc2Zvcm0pO2AsXG4gIC8vIFwic2NhbGVaXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGAtLWEtc2NhbGUtejoke21ha2VDb21tYVZhbHVlcyh2YWx1ZSl9O3RyYW5zZm9ybTp2YXIoLS1hLXRyYW5zZm9ybSk7YCxcblxuICAvLyBVdGlsXG4gIFwicmF0aW9cIjogKHZhbHVlOnN0cmluZykgPT4gYCZ7cG9zaXRpb246cmVsYXRpdmU7fSY6YmVmb3Jle2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7cGFkZGluZy10b3A6JHttYWtlUmF0aW8odmFsdWUpfTt9Jj4qe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO31gLFxuICBcImFzcGVjdFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYXNwZWN0LXJhdGlvOiR7Y3NzdmFyKHZhbHVlLnJlcGxhY2UoLzovZywgXCIvXCIpKX07YCxcbiAgXCJhc3BlY3QtcmF0aW9cIjogKHZhbHVlOnN0cmluZykgPT4gYGFzcGVjdC1yYXRpbzoke2Nzc3Zhcih2YWx1ZS5yZXBsYWNlKC86L2csIFwiL1wiKSl9O2AsXG4gIFwiZ3B1XCI6ICgpID0+IGB0cmFuc2Zvcm06dHJhbnNsYXRlWigwLjFweCk7YCxcblxuICAvLyBldGNcbiAgXCJjb250ZW50XCI6ICh2YWx1ZSA9IFwiJydcIikgPT4gYGNvbnRlbnQ6JHtjc3N2YXIodmFsdWUpfTtgLFxuICBcImFwcC1yZWdpb25cIjogKHZhbHVlOnN0cmluZykgPT4gYGFwcC1yZWdpb246JHt2YWx1ZX07LXdlYmtpdC1hcHAtcmVnaW9uOiR7dmFsdWV9O2AsXG4gIFwiY2xpcC1wYXRoXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBjbGlwLXBhdGg6JHttYWtlVmFsdWVzKHZhbHVlKX07LXdlYmtpdC1jbGlwLXBhdGg6JHttYWtlVmFsdWVzKHZhbHVlKX07YCxcblxuICAvLyB0YWJsZVxuICBcInRhYmxlLWZpeGVkXCI6ICgpID0+IGB0YWJsZS1sYXlvdXQ6Zml4ZWQ7YCxcbiAgXCJ0YWJsZS1hdXRvXCI6ICgpID0+IGB0YWJsZS1sYXlvdXQ6YXV0bztgLFxuICBcInRhYmxlLWxheW91dC1maXhlZFwiOiAoKSA9PiBgdGFibGUtbGF5b3V0OmZpeGVkO2AsXG4gIFwidGFibGUtbGF5b3V0LWF1dG9cIjogKCkgPT4gYHRhYmxlLWxheW91dDphdXRvO2AsXG5cbiAgLy8gRmxvYXQgJiBDbGVhclxuICBcImZsb2F0XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBmbG9hdDoke2Nzc3Zhcih2YWx1ZSl9O2AsXG4gIFwiY2xlYXJcIjogKHZhbHVlOnN0cmluZykgPT4gYGNsZWFyOiR7Y3NzdmFyKHZhbHVlKX07YCxcblxuICAvLyBGaWx0ZXJcbiAgXCJibHVyXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBmaWx0ZXI6Ymx1cigke3B4KHZhbHVlKX0pOy13ZWJraXQtZmlsdGVyOmJsdXIoJHtweCh2YWx1ZSl9KTtgLFxuICBcImJyaWdodG5lc3NcIjogKHZhbHVlOnN0cmluZykgPT4gYGZpbHRlcjpicmlnaHRuZXNzKCR7Y3NzdmFyKHZhbHVlKX0pOy13ZWJraXQtZmlsdGVyOmJyaWdodG5lc3MoJHtjc3N2YXIodmFsdWUpfSk7YCxcbiAgXCJjb250cmFzdFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgZmlsdGVyOmNvbnRyYXN0KCR7Y3NzdmFyKHZhbHVlKX0pOy13ZWJraXQtZmlsdGVyOmNvbnRyYXN0KCR7Y3NzdmFyKHZhbHVlKX0pO2AsXG4gIFwiZHJvcC1zaGFkb3dcIjogKHZhbHVlOnN0cmluZykgPT4gYGZpbHRlcjpkcm9wLXNoYWRvdygke21ha2VWYWx1ZXModmFsdWUsIHB4KX0pOy13ZWJraXQtZmlsdGVyOmRyb3Atc2hhZG93KCR7bWFrZVZhbHVlcyh2YWx1ZSwgcHgpfSk7YCxcbiAgXCJncmF5c2NhbGVcIjogKHZhbHVlOnN0cmluZykgPT4gYGZpbHRlcjpncmF5c2NhbGUoJHtjc3N2YXIodmFsdWUpfSk7LXdlYmtpdC1maWx0ZXI6Z3JheXNjYWxlKCR7Y3NzdmFyKHZhbHVlKX0pO2AsXG4gIFwiaHVlLXJvdGF0ZVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgZmlsdGVyOmh1ZS1yb3RhdGUoJHtjc3N2YXIodmFsdWUpfSk7LXdlYmtpdC1maWx0ZXI6aHVlLXJvdGF0ZSgke2Nzc3Zhcih2YWx1ZSl9KTtgLFxuICBcImludmVydFwiOiAodmFsdWU6c3RyaW5nKSA9PiBgZmlsdGVyOmludmVydCgke2Nzc3Zhcih2YWx1ZSl9KTstd2Via2l0LWZpbHRlcjppbnZlcnQoJHtjc3N2YXIodmFsdWUpfSk7YCxcbiAgXCJzZXBpYVwiOiAodmFsdWU6c3RyaW5nKSA9PiBgZmlsdGVyOnNlcGlhKCR7Y3NzdmFyKHZhbHVlKX0pOy13ZWJraXQtZmlsdGVyOnNlcGlhKCR7Y3NzdmFyKHZhbHVlKX0pO2AsXG4gIFwic2F0dXJhdGVcIjogKHZhbHVlOnN0cmluZykgPT4gYGZpbHRlcjpzYXR1cmF0ZSgke2Nzc3Zhcih2YWx1ZSl9KTstd2Via2l0LWZpbHRlcjpzYXR1cmF0ZSgke2Nzc3Zhcih2YWx1ZSl9KTtgLFxuXG4gIFwiYmFja2Ryb3AtYmx1clwiOiAodmFsdWU6c3RyaW5nKSA9PiBgYmFja2Ryb3AtZmlsdGVyOmJsdXIoJHtweCh2YWx1ZSl9KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKCR7cHgodmFsdWUpfSk7YCxcbiAgXCJiYWNrZHJvcC1icmlnaHRuZXNzXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBiYWNrZHJvcC1maWx0ZXI6YnJpZ2h0bmVzcygke2Nzc3Zhcih2YWx1ZSl9KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpicmlnaHRuZXNzKCR7Y3NzdmFyKHZhbHVlKX0pO2AsXG4gIFwiYmFja2Ryb3AtY29udHJhc3RcIjogKHZhbHVlOnN0cmluZykgPT4gYGJhY2tkcm9wLWZpbHRlcjpjb250cmFzdCgke2Nzc3Zhcih2YWx1ZSl9KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpjb250cmFzdCgke2Nzc3Zhcih2YWx1ZSl9KTtgLFxuICBcImJhY2tkcm9wLWRyb3Atc2hhZG93XCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBiYWNrZHJvcC1maWx0ZXI6ZHJvcC1zaGFkb3coJHttYWtlVmFsdWVzKHZhbHVlLCBweCl9KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpkcm9wLXNoYWRvdygke21ha2VWYWx1ZXModmFsdWUsIHB4KX0pO2AsXG4gIFwiYmFja2Ryb3AtZ3JheXNjYWxlXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBiYWNrZHJvcC1maWx0ZXI6Z3JheXNjYWxlKCR7Y3NzdmFyKHZhbHVlKX0pOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmdyYXlzY2FsZSgke2Nzc3Zhcih2YWx1ZSl9KTtgLFxuICBcImJhY2tkcm9wLWh1ZS1yb3RhdGVcIjogKHZhbHVlOnN0cmluZykgPT4gYGJhY2tkcm9wLWZpbHRlcjpodWUtcm90YXRlKCR7Y3NzdmFyKHZhbHVlKX0pOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmh1ZS1yb3RhdGUoJHtjc3N2YXIodmFsdWUpfSk7YCxcbiAgXCJiYWNrZHJvcC1pbnZlcnRcIjogKHZhbHVlOnN0cmluZykgPT4gYGJhY2tkcm9wLWZpbHRlcjppbnZlcnQoJHtjc3N2YXIodmFsdWUpfSk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6aW52ZXJ0KCR7Y3NzdmFyKHZhbHVlKX0pO2AsXG4gIFwiYmFja2Ryb3Atc2VwaWFcIjogKHZhbHVlOnN0cmluZykgPT4gYGJhY2tkcm9wLWZpbHRlcjpzZXBpYSgke2Nzc3Zhcih2YWx1ZSl9KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzZXBpYSgke2Nzc3Zhcih2YWx1ZSl9KTtgLFxuICBcImJhY2tkcm9wLXNhdHVyYXRlXCI6ICh2YWx1ZTpzdHJpbmcpID0+IGBiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoJHtjc3N2YXIodmFsdWUpfSk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoJHtjc3N2YXIodmFsdWUpfSk7YCxcblxuICAvLyBAVE9ETzp0cmlhbmdsZVxuICBcInRyaWFuZ2xlXCI6ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBbZGlyZWN0aW9uLCBzaXplLCBhbmdsZSA9IDBdID0gdmFsdWUuc3BsaXQoXCIvXCIpXG4gICAgY29uc3QgYmQgPSBbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl1cbiAgICBjb25zdCBiZHIgPSBiZC5zbGljZShiZC5pbmRleE9mKGRpcmVjdGlvbikpXG4gICAgY29uc3QgaGVpZ2h0ID0gMC41XG5cbiAgICBsZXQgY3NzID0gYHdpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyOjAgc29saWQgdHJhbnNwYXJlbnQ7YFxuICAgIGNzcyArPSBcImJvcmRlci1cIiArIGJkclsxXSArIFwiLXdpZHRoOlwiICsgTWF0aC5yb3VuZCgrc2l6ZSAqICgtYW5nbGUgKyAxKSAvIDIpICsgXCJweDtcIlxuICAgIGNzcyArPSBcImJvcmRlci1cIiArIGJkclszXSArIFwiLXdpZHRoOlwiICsgTWF0aC5yb3VuZCgrc2l6ZSAqICgrYW5nbGUgKyAxKSAvIDIpICsgXCJweDtcIlxuICAgIGNzcyArPSBcImJvcmRlci1cIiArIGJkclsyXSArIFwiOlwiICsgTWF0aC5yb3VuZCgrc2l6ZSAqIGhlaWdodCkgKyBcInB4IHNvbGlkIGJsYWNrO1wiXG5cbiAgICByZXR1cm4gY3NzXG4gIH0sXG5cbiAgLy8gZWxldmF0aW9uXG4gIFwiZWxldmF0aW9uXCI6ICh2YWx1ZTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkcCA9ICt2YWx1ZVxuICAgIGlmICghZHApIHtcbiAgICAgIHJldHVybiBgYm94LXNoYWRvdzpub25lO2BcbiAgICB9XG5cbiAgICBjb25zdCBibHVyID0gKGRwID09IDEgPyAzIDogZHAgKiAyKVxuICAgIGNvbnN0IGFtYmEgPSAoZHAgKyAxMCArIChkcCAvIDkuMzgpKSAvIDEwMFxuICAgIGNvbnN0IGRpcnkgPSAoZHAgPCAxMCA/IChkcCAlIDIgPT0gMCA/IGRwIC0gKChkcCAvIDIpIC0gMSkgOiAoZHAgLSAoKGRwIC0gMSkgLyAyKSkpIDogZHAgLSA0KVxuICAgIGNvbnN0IGRpcmEgPSAoMjQgLSAoTWF0aC5yb3VuZChkcCAvIDEwKSkpIC8gMTAwXG5cbiAgICByZXR1cm4gYGJveC1zaGFkb3c6MHB4ICR7cHgoZHApfSAke3B4KGJsdXIpfSByZ2JhKDAsMCwwLCR7YW1iYX0pLDBweCAke3B4KGRpcnkpfSAke3B4KGJsdXIpfSByZ2JhKDAsMCwwLCR7ZGlyYX0pO2BcbiAgfSxcbn1cblxuLy8gUHJlZml4XG4vLyBwc2V1ZG8gY2xhc3NcbmV4cG9ydCBjb25zdCBQUkVGSVhfUFNFVURPX0NMQVNTOlByZWZpeFJ1bGVzID0ge1xuICBcImhvdmVyOlwiOiB7bWVkaWE6IGAoaG92ZXI6aG92ZXIpYCwgc2VsZWN0b3I6IGAmOmhvdmVyLCYuXFxcXDpob3ZlcmB9LFxuICBcImFjdGl2ZTpcIjoge3NlbGVjdG9yOiBgaHRtbCAmOmFjdGl2ZSxodG1sICYuXFxcXDphY3RpdmVgfSxcbiAgXCJmb2N1czpcIjoge3NlbGVjdG9yOiBgaHRtbCAmOmZvY3VzLGh0bWwgJi5cXFxcOmZvY3VzYH0sXG4gIFwiZm9jdXMtdmlzaWJsZVwiOiB7c2VsZWN0b3I6IGBodG1sICY6Zm9jdXMtdmlzaWJsZSxodG1sICYuXFxcXDpmb2N1cy12aXNpYmxlYH0sXG4gIFwiZm9jdXMtd2l0aGluOlwiOiB7c2VsZWN0b3I6IGBodG1sICY6Zm9jdXMtd2l0aGluLGh0bWwgJi5cXFxcOmZvY3VzLXdpdGhpbmB9LFxuICBcImNoZWNrZWQ6XCI6IHtzZWxlY3RvcjogYGh0bWwgJjpjaGVja2VkLGh0bWwgJi5cXFxcOmNoZWNrZWRgfSxcbiAgXCJyZWFkLW9ubHk6XCI6IHtzZWxlY3RvcjogYGh0bWwgJjpyZWFkLW9ubHksaHRtbCAmLlxcXFw6cmVhZC1vbmx5YH0sXG4gIFwiZW5hYmxlZDpcIjoge3NlbGVjdG9yOiBgaHRtbCAmOmVuYWJsZWQsaHRtbCAmLlxcXFw6ZW5hYmxlZGB9LFxuICBcImRpc2FibGVkOlwiOiB7c2VsZWN0b3I6IGBodG1sIGJvZHkgJjpkaXNhYmxlZCxodG1sIGJvZHkgJi5cXFxcOmRpc2FibGVkLGh0bWwgYm9keSAmW2Rpc2FibGVkXWB9LFxuXG4gIFwiZ3JvdXAtaG92ZXI6XCI6IHtzZWxlY3RvcjogYC5ncm91cDpob3ZlciAmLGh0bWwgLmdyb3VwLlxcXFw6aG92ZXIgJmB9LFxuICBcImdyb3VwLWFjdGl2ZTpcIjoge3NlbGVjdG9yOiBgaHRtbCAuZ3JvdXA6YWN0aXZlICYsaHRtbCAuZ3JvdXAuXFxcXDphY3RpdmUgJmB9LFxuICBcImdyb3VwLWZvY3VzOlwiOiB7c2VsZWN0b3I6IGBodG1sIC5ncm91cDpmb2N1cyAmLGh0bWwgLmdyb3VwLlxcXFw6Zm9jdXMgJmB9LFxuICBcImdyb3VwLWZvY3VzLXdpdGhpbjpcIjoge3NlbGVjdG9yOiBgaHRtbCAuZ3JvdXA6Zm9jdXMtd2l0aGluICYsaHRtbCAuZ3JvdXBcXFxcOmZvY3VzLXdpdGhpbmB9LFxuICBcImdyb3VwLWNoZWNrZWQ6XCI6IHtzZWxlY3RvcjogYGh0bWwgLmdyb3VwOmNoZWNrZWQgJixodG1sIC5ncm91cC5cXFxcOmNoZWNrZWQgJmB9LFxuICBcImdyb3VwLXJlYWQtb25seTpcIjoge3NlbGVjdG9yOiBgaHRtbCAuZ3JvdXA6cmVhZC1vbmx5ICYsaHRtbCAuZ3JvdXAuXFxcXDpyZWFkLW9ubHkgJmB9LFxuICBcImdyb3VwLWVuYWJsZWQ6XCI6IHtzZWxlY3RvcjogYGh0bWwgLmdyb3VwOmVuYWJsZWQgJixodG1sIC5ncm91cC5cXFxcOmVuYWJsZWQgJmB9LFxuICBcImdyb3VwLWRpc2FibGVkOlwiOiB7c2VsZWN0b3I6IGBodG1sIGJvZHkgLmdyb3VwOmRpc2FibGVkICYsaHRtbCBib2R5IC5ncm91cFtkaXNhYmxlZF0gJixodG1sIGJvZHkgLmdyb3VwLmRpc2FibGVkICZgfSxcblxuICBcInBsYWNlaG9sZGVyOlwiOiB7c2VsZWN0b3I6IGAmOjpwbGFjZWhvbGRlcmB9LFxuXG4gIFwib2RkOlwiOiB7c2VsZWN0b3I6IGAmOm50aC1jaGlsZCgybisxKWB9LFxuICBcImV2ZW46XCI6IHtzZWxlY3RvcjogYCY6bnRoLWNoaWxkKDJuKWB9LFxuXG4gIFwiZmlyc3Q6XCI6IHtzZWxlY3RvcjogYCY6Zmlyc3QtY2hpbGRgfSxcbiAgXCJsYXN0OlwiOiB7c2VsZWN0b3I6IGAmOmxhc3QtY2hpbGRgfSxcblxuICBcImFmdGVyOlwiOiB7c2VsZWN0b3I6IGAmOjphZnRlcmB9LFxuICBcImJlZm9yZTpcIjoge3NlbGVjdG9yOiBgJjo6YmVmb3JlYH0sXG5cbiAgXCJzZWxlY3Rpb246OlwiOiB7c2VsZWN0b3I6IGAmOjpzZWxlY3Rpb24sJiAqOjpzZWxlY3Rpb25gfSxcbn1cblxuXG4vLyBtZWRpYSBxdWVyeVxuZXhwb3J0IGNvbnN0IFBSRUZJWF9NRURJQV9RVUVSWTpQcmVmaXhSdWxlcyA9IHtcbiAgXCJzbTpcIjoge21lZGlhOiBgKG1pbi13aWR0aDo0ODBweClgLCBzZWxlY3RvcjogYGh0bWwgJmB9LFxuICBcIm1kOlwiOiB7bWVkaWE6IGAobWluLXdpZHRoOjc2OHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG4gIFwibGc6XCI6IHttZWRpYTogYChtaW4td2lkdGg6MTAyNHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG4gIFwieGw6XCI6IHttZWRpYTogYChtaW4td2lkdGg6MTI4MHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG5cbiAgXCJzbX46XCI6IHttZWRpYTogYChtaW4td2lkdGg6NDgwcHgpYCwgc2VsZWN0b3I6IGBodG1sICZgfSxcbiAgXCJtZH46XCI6IHttZWRpYTogYChtaW4td2lkdGg6NzY4cHgpYCwgc2VsZWN0b3I6IGBodG1sICZgfSxcbiAgXCJsZ346XCI6IHttZWRpYTogYChtaW4td2lkdGg6MTAyNHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG4gIFwieGx+OlwiOiB7bWVkaWE6IGAobWluLXdpZHRoOjEyODBweClgLCBzZWxlY3RvcjogYGh0bWwgJmB9LFxuXG4gIFwifnNtOlwiOiB7bWVkaWE6IGAobWF4LXdpZHRoOjQ3OS45OHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG4gIFwifm1kOlwiOiB7bWVkaWE6IGAobWF4LXdpZHRoOjc2Ny45OHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG4gIFwifmxnOlwiOiB7bWVkaWE6IGAobWF4LXdpZHRoOjEwMjMuOThweClgLCBzZWxlY3RvcjogYGh0bWwgJmB9LFxuICBcIn54bDpcIjoge21lZGlhOiBgKG1heC13aWR0aDoxMjc5Ljk4cHgpYCwgc2VsZWN0b3I6IGBodG1sICZgfSxcblxuICBcIm1vYmlsZTpcIjoge21lZGlhOiBgKG1heC1kZXZpY2Utd2lkdGg6NzY3Ljk4cHgpYCwgc2VsZWN0b3I6IGBodG1sICZgfSxcbiAgXCJ0YWJsZXQ6XCI6IHttZWRpYTogYChtaW4tZGV2aWNlLXdpZHRoOjc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6MTAyMy45OHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG4gIFwiZGVza3RvcDpcIjoge21lZGlhOiBgKG1pbi1kZXZpY2Utd2lkdGg6MTAyNHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG4gIFwiIW1vYmlsZTpcIjoge21lZGlhOiBgKG1pbi1kZXZpY2Utd2lkdGg6NzY4cHgpYCwgc2VsZWN0b3I6IGBodG1sICZgfSxcbiAgXCIhZGVza3RvcDpcIjoge21lZGlhOiBgKG1heC1kZXZpY2Utd2lkdGg6MTAyMy45OHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG5cbiAgLy8gXCJ0b3VjaDpcIjp7bWVkaWE6YChob3Zlcjpub25lKWAsc2VsZWN0b3I6YGh0bWwgJmB9LFxuICAvLyBcIiF0b3VjaDpcIjp7bWVkaWE6YChob3Zlcjpob3ZlcilgLHNlbGVjdG9yOmBodG1sICZgfSxcblxuICAvLyBAVEJEOiBkb24ndCB1c2UgaXQhXG4gIFwidG91Y2g6XCI6IHttZWRpYTogYChtYXgtZGV2aWNlLXdpZHRoOjEwMjMuOThweClgLCBzZWxlY3RvcjogYGh0bWwgJmB9LFxuICBcIiF0b3VjaDpcIjoge21lZGlhOiBgKG1pbi1kZXZpY2Utd2lkdGg6MTAyNHB4KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG5cbiAgXCJwb3J0cmFpdDpcIjoge21lZGlhOiBgKG9yaWVudGF0aW9uOnBvcnRyYWl0KWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG4gIFwibGFuZHNjYXBlOlwiOiB7bWVkaWE6IGAob3JpZW50YXRpb246bGFuZHNjYXBlKWAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG5cbiAgXCJwcmludDpcIjoge21lZGlhOiBgcHJpbnRgLCBzZWxlY3RvcjogYGh0bWwgJmB9LFxuICBcInNjcmVlbjpcIjoge21lZGlhOiBgc2NyZWVuYCwgc2VsZWN0b3I6IGBodG1sICZgfSxcbiAgXCJzcGVlY2g6XCI6IHttZWRpYTogYHNwZWVjaGAsIHNlbGVjdG9yOiBgaHRtbCAmYH0sXG5cbiAgLy8gZGFyazpAVEJEXG4gIFwiZGFyazpcIjoge3NlbGVjdG9yOiBgQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspe2h0bWwgJnsuLi59fVxcbmh0bWwuZGFyayAmey4uLn1gfSxcbn1cblxuZXhwb3J0IGNvbnN0IEFUX1JVTEUgPSB7XG4gIFwiQHdcIjogKGlkZW50OnN0cmluZywgdG9rZW5zOkFycmF5PHt0eXBlOnN0cmluZywgdmFsdWU6c3RyaW5nfT4pID0+IHtcbiAgICBpZiAodG9rZW5zWzJdPy52YWx1ZSAhPT0gXCIoXCIgfHwgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXT8udmFsdWUgIT09IFwiKVwiKSB7XG4gICAgICB0aHJvdyBFcnJvcihcImludmFsaWQgc3ludGF4IVwiKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gdG9rZW5zLnNsaWNlKDMsIC0xKS5tYXAodCA9PiB0LnZhbHVlKS5qb2luKFwiXCIpXG4gICAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIn5cIikpIHtcbiAgICAgIHRocm93IEVycm9yKFwiaW52YWxpZCBzeW50YXghIHJlcXVpcmVkICd+Jy5cIilcbiAgICB9XG5cbiAgICBsZXQgW21pbiwgbWF4XSA9IHZhbHVlLnNwbGl0KFwiflwiKVxuXG4gICAgaWYgKG1pbikgbWluID0gYChtaW4td2lkdGg6JHtweCgrbWluKX0pYFxuICAgIGlmIChtYXgpIG1heCA9IGAobWF4LXdpZHRoOiR7cHgoK21heCAtIDAuMDIpfSlgXG4gICAgY29uc3QgcnVsZSA9IFttaW4sIG1heF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgYW5kIFwiKVxuXG4gICAgcmV0dXJuIHttZWRpYTogYCBvbmx5IHNjcmVlbiBhbmQgJHtydWxlfWAsIHNlbGVjdG9yOiBgaHRtbCAmYH1cbiAgfVxufVxuXG4vLyBzZWxlY3RvclxuZXhwb3J0IGNvbnN0IFBSRUZJWF9TRUxFQ1RPUjpSZWNvcmQ8c3RyaW5nLCAoc2VsZWN0b3I6c3RyaW5nKSA9PiBzdHJpbmc+ID0ge1xuICBcIj4+XCI6IChzZWxlY3RvcjpzdHJpbmcpID0+IGAmICR7c2VsZWN0b3Iuc2xpY2UoMil9YCxcbiAgXCImOlwiOiAoc2VsZWN0b3I6c3RyaW5nKSA9PiBgJHtzZWxlY3Rvcn1gLFxuICBcIiYuXCI6IChzZWxlY3RvcjpzdHJpbmcpID0+IGAke3NlbGVjdG9yfWAsXG4gIFwiJltcIjogKHNlbGVjdG9yOnN0cmluZykgPT4gYCR7c2VsZWN0b3J9YCxcbiAgXCIuXCI6IChzZWxlY3RvcjpzdHJpbmcpID0+IGAmJHtzZWxlY3Rvcn0sJHtzZWxlY3Rvcn0gJmAsXG4gIFwiW1wiOiAoc2VsZWN0b3I6c3RyaW5nKSA9PiBgJiR7c2VsZWN0b3J9LCR7c2VsZWN0b3J9ICZgLFxuICBcIj5cIjogKHNlbGVjdG9yOnN0cmluZykgPT4gYCYke3NlbGVjdG9yfWAsXG4gIFwiK1wiOiAoc2VsZWN0b3I6c3RyaW5nKSA9PiBgJiR7c2VsZWN0b3J9YCxcbiAgXCIjXCI6IChzZWxlY3RvcjpzdHJpbmcpID0+IGAmJHtzZWxlY3Rvcn1gLFxufVxuXG4vLyBcIn5cIjogKHNlbGVjdG9yOnN0cmluZykgPT4gYCYke3NlbGVjdG9yfWAsXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9rYWthby9EZXNrdG9wL0BhZG9yYWJsZS1jc3MvcGFja2FnZXMvdml0ZS9zcmMvY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tha2FvL0Rlc2t0b3AvQGFkb3JhYmxlLWNzcy9wYWNrYWdlcy92aXRlL3NyYy9jb3JlL2F0b21pemVyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rYWthby9EZXNrdG9wL0BhZG9yYWJsZS1jc3MvcGFja2FnZXMvdml0ZS9zcmMvY29yZS9hdG9taXplci50c1wiO2ltcG9ydCB7QUxMX1BST1BFUlRJRVN9IGZyb20gXCIuL2NvbnN0XCJcbmltcG9ydCB7Y3NzRXNjYXBlfSBmcm9tIFwiLi9jc3NFc2NhcGVcIlxuaW1wb3J0IHttYWtlSEVYLCBtYWtlVmFsdWVzfSBmcm9tIFwiLi9tYWtlVmFsdWVcIlxuaW1wb3J0IHtBVF9SVUxFLCBQUkVGSVhfTUVESUFfUVVFUlksIFBSRUZJWF9QU0VVRE9fQ0xBU1MsIFBSRUZJWF9TRUxFQ1RPUiwgUlVMRVN9IGZyb20gXCIuL3J1bGVzXCJcblxuZXhwb3J0IHR5cGUgUnVsZXMgPSBSZWNvcmQ8c3RyaW5nLCAodmFsdWU/OnN0cmluZykgPT4gc3RyaW5nPlxuZXhwb3J0IHR5cGUgUHJlZml4UHJvcHMgPSB7bWVkaWE/OnN0cmluZywgc2VsZWN0b3I/OnN0cmluZ31cbmV4cG9ydCB0eXBlIFByZWZpeFJ1bGVzID0gUmVjb3JkPHN0cmluZywgUHJlZml4UHJvcHM+XG5cbmNvbnN0IFBSRUZJWF9SVUxFUzpQcmVmaXhSdWxlcyA9IHtcbiAgLi4uUFJFRklYX1BTRVVET19DTEFTUyxcbiAgLi4uUFJFRklYX01FRElBX1FVRVJZLFxufVxuXG4vLy8gcGFyc2VBdG9tc1xuLy8gQFRPRE86IGxleFx1Qjk3QyBcdUM3NzRcdUM2QTlcdUQ1NzRcdUMxMUMgdmFsaWRhdGVcdUM2NDAgcGFyc2VcdUI5N0MgXHVBQzE5XHVDNzc0IFx1RDU1OFx1QjI5NCBcdUJDMjlcdUMyRERcdUM3M0NcdUI4NUMgXHVDNUM1XHVCMzcwXHVDNzc0XHVEMkI4XHVENTU4XHVDNzkwIVxuZXhwb3J0IGNvbnN0IHBhcnNlQXRvbXMgPSAoY29kZTpzdHJpbmcpOnN0cmluZ1tdID0+IHtcbiAgY29uc3QgZGVsaW1pdGVyID0gL1tcIidgXXxcXHMrL2dcblxuICBjb25zdCBhdG9tcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGxldCBsYXN0SW5kZXggPSAwXG5cbiAgY29kZSArPSBcIiBcIlxuICBjb2RlLnJlcGxhY2UoZGVsaW1pdGVyLCAoYSwgaW5kZXgpID0+IHtcbiAgICAvLyBATk9URTogY29udGVudCgnYWEnKSBcdUM2QTlcdUIzQzRcbiAgICBpZiAoY29kZVtpbmRleCAtIDFdID09PSBcIihcIiB8fCBjb2RlW2luZGV4ICsgMV0gPT09IFwiKVwiKSB7XG4gICAgICByZXR1cm4gYVxuICAgIH1cblxuICAgIGxldCB0b2tlbiA9IGNvZGUuc2xpY2UobGFzdEluZGV4LCBpbmRleClcblxuICAgIC8vIEBOT1RFOiBzdmVsdGUgY2xhc3M6cHJvcCBcdUM5QzBcdUM2RDBcbiAgICBpZiAodG9rZW4uc3RhcnRzV2l0aChcImNsYXNzOlwiKSkge1xuICAgICAgdG9rZW4gPSB0b2tlbi5zbGljZShcImNsYXNzOlwiLmxlbmd0aCkuc3BsaXQoXCI9XCIpWzBdXG4gICAgfVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBhdG9tcy5hZGQodG9rZW4pXG4gICAgfVxuXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyBhLmxlbmd0aFxuICAgIHJldHVybiBhXG4gIH0pXG5cbiAgcmV0dXJuIFsuLi5hdG9tc11cbn1cblxuLy8vIFRva2VuaXplclxuY29uc3QgbGV4OltzdHJpbmcsIFJlZ0V4cF1bXSA9IFtcbiAgW1wiKGhleGNvbG9yKVwiLCAvKCMoPzpbMC05YS1mQS1GXXszfSl7MSwyfSg/OlxcLlxcZCspPykvXSxcbiAgW1wiKGltcG9ydGFudClcIiwgLyghKyR8IStcXCspL10sXG4gIFtcIihzdHJpbmcpXCIsIC8oJyg/OlteJ118XFxcXCcpKid8XCIoPzpbXlwiXXxcXFxcXCIpKlwiKS9dLFxuICBbXCIob3BlcmF0b3IpXCIsIC8oOjp8Pj58Jjp8JlxcLnwmXFxbfFstK358Ki8lISNAPzo7Liw8Pj1bXFxdKCl7fV0pL10sXG4gIFtcIihpZGVudClcIiwgLygoPzpcXFxcLnxbXiEnXCI6K1tcXF0oKXt9I10pKykvXSxcbiAgW1wiKHVua25vd24pXCIsIC8uL11cbl1cblxuY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGxleC5tYXAodiA9PiB2WzFdLnNvdXJjZSkuam9pbihcInxcIiksIFwiZ1wiKVxuXG5sZXQgdG9rZW5zID0gW11cbmxldCB0b2tlblxubGV0IGluZGV4ID0gMFxuXG5jb25zdCBuZXh0ID0gKGlkPzpzdHJpbmcpID0+IHtcbiAgaWYgKGlkICYmIHRva2VuICYmIHRva2VuLmlkICYmIHRva2VuLmlkICE9PSBpZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgdG9rZW46IFwiICsgdG9rZW4uaWQgKyBcIiBleHBlY3RlZDogXCIgKyBpZClcbiAgfVxuXG4gIGNvbnN0IHQgPSB0b2tlblxuICB0b2tlbiA9IHRva2Vuc1tpbmRleCsrXVxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgY29uc3QgdG9rZW5pemUgPSAoc2NyaXB0OnN0cmluZykgPT4ge1xuICB0b2tlbnMgPSBbXVxuICBpbmRleCA9IDBcblxuICBzY3JpcHQucmVwbGFjZShyZWdleCwgKHZhbHVlLCAuLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgaW5kZXg6bnVtYmVyID0gYXJnc1thcmdzLmxlbmd0aCAtIDJdXG4gICAgY29uc3QgdHlwZSA9IGxleFthcmdzLmZpbmRJbmRleCh2ID0+IHYgIT09IHVuZGVmaW5lZCldWzBdXG4gICAgY29uc3QgaWQgPSB0eXBlID09PSBcIihvcGVyYXRvcilcIiA/IHZhbHVlIDogdHlwZVxuICAgIHZhbHVlID0gdHlwZSA9PT0gXCIoaGV4Y29sb3IpXCIgPyBtYWtlSEVYKHZhbHVlKSA6IHZhbHVlXG4gICAgdG9rZW5zLnB1c2goe3R5cGUsIGlkLCB2YWx1ZSwgaW5kZXh9KVxuICAgIHJldHVybiB2YWx1ZVxuICB9KVxuXG4gIG5leHQoKVxuICByZXR1cm4gdG9rZW5zXG59XG5cblxuLy8gUGFyc2VyOiBwcm9wICsgKClbXXt9XG5jb25zdCBleHByID0gKCkgPT4ge1xuICBjb25zdCBhcmdzID0gW11cbiAgY29uc3QgcHVzaCA9ICh2KSA9PiBhcmdzLnB1c2godilcbiAgY29uc3Qgc3RhY2sgPSBbXVxuXG4gIHdoaWxlICh0b2tlbikge1xuICAgIGlmICh0b2tlbi5pZCA9PT0gXCIoXCIgfHwgdG9rZW4uaWQgPT09IFwiW1wiIHx8IHRva2VuLmlkID09PSBcIntcIikge1xuICAgICAgc3RhY2sucHVzaCh0b2tlbi5pZClcbiAgICB9XG4gICAgZWxzZSBpZiAodG9rZW4uaWQgPT09IFwiKVwiIHx8IHRva2VuLmlkID09PSBcIl1cIiB8fCB0b2tlbi5pZCA9PT0gXCJ9XCIpIHtcbiAgICAgIGNvbnN0IHByZXYgPSBzdGFjay5wb3AoKVxuICAgICAgaWYgKHByZXYgPT09IFwiKFwiICYmIHRva2VuLmlkID09PSBcIilcIikge31cbiAgICAgIGVsc2UgaWYgKHByZXYgPT09IFwiW1wiICYmIHRva2VuLmlkID09PSBcIl1cIikge31cbiAgICAgIGVsc2UgaWYgKHByZXYgPT09IFwie1wiICYmIHRva2VuLmlkID09PSBcIn1cIikge31cbiAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZDpcIiArIHRva2VuLmlkKVxuICAgIH1cbiAgICBlbHNlIGlmIChzdGFjay5sZW5ndGggPT09IDAgJiYgKHRva2VuLmlkID09PSBcIjpcIiB8fCB0b2tlbi5pZCA9PT0gXCI6OlwiIHx8IHRva2VuLmlkID09PSBcIihpbXBvcnRhbnQpXCIgfHwgdG9rZW4uaWQgPT09IFwiK1wiKSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBwdXNoKG5leHQoKSlcbiAgfVxuXG4gIGlmIChzdGFjay5sZW5ndGggPiAwKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGVuZCBvZiBpbnB1dFwiKVxuICByZXR1cm4gYXJnc1xufVxuXG5cbi8vIFByZWZpeFxuLy8gLmNsYXNzU2VsZWN0b3IoZXhwcik6XG4vLyBQc2V1ZG9DbGFzcyhleHByKTpcbi8vIFBzZXVkb0VsZW1lbnQoZXhwcik6OlxuLy8gQEF0UnVsZShleHByKTpcblxuY29uc3QgcGFyc2VQcmVmaXggPSAocHJlZml4UnVsZXM6UHJlZml4UnVsZXMsIGUpID0+IHtcbiAgY29uc3QgdHlwZSA9IGVbMF0udmFsdWVcbiAgY29uc3Qgc2VsZWN0b3IgPSBlLm1hcChlID0+IGUudmFsdWUpLmpvaW4oXCJcIilcblxuICAvLyAxLiBQc2V1ZG8gQ2xhc3MsIFBzZXVkbyBFbGVtZW50IFx1Qzc3OFx1QUMwMD9cbiAgY29uc3QgbWFrZVBzZXVkbyA9IHByZWZpeFJ1bGVzW3NlbGVjdG9yICsgdG9rZW4uaWRdXG4gIGlmIChtYWtlUHNldWRvKSB7XG4gICAgcmV0dXJuIG1ha2VQc2V1ZG9cbiAgfVxuXG4gIC8vIDIuIFNlbGVjdG9yXHVDNzc4XHVBQzAwP1xuICBjb25zdCBtYWtlU2VsZWN0b3IgPSBQUkVGSVhfU0VMRUNUT1JbdHlwZV1cbiAgaWYgKG1ha2VTZWxlY3Rvcikge1xuICAgIHJldHVybiB7c2VsZWN0b3I6IG1ha2VTZWxlY3RvcihzZWxlY3RvcikucmVwbGFjZSgvPj4vZywgXCIgXCIpfVxuICB9XG5cbiAgLy8gMy4gQGF0LXJ1bGVcdUM3NzhcdUFDMDA/XG4gIGNvbnN0IHZhbHVlID0gZS5zbGljZSgwLCAyKS5tYXAociA9PiByLnZhbHVlKS5qb2luKFwiXCIpXG4gIGNvbnN0IG1ha2VBdFJ1bGUgPSBBVF9SVUxFW3ZhbHVlXVxuICBpZiAobWFrZUF0UnVsZSkge1xuICAgIHJldHVybiBtYWtlQXRSdWxlKHNlbGVjdG9yLCBlKVxuICB9XG5cbiAgaWYgKC9eWy1hLXpdKyQvLnRlc3QodHlwZSkpIHtcbiAgICByZXR1cm4ge3NlbGVjdG9yOiBgJiR7dG9rZW4uaWR9JHtzZWxlY3Rvcn1gfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBQcmVmaXggU3ludGF4OlwiICsgdG9rZW4uaWQpXG59XG5cbmNvbnN0IHZhbGlkYXRlQ1NTID0gKHM6c3RyaW5nKSA9PiB7XG4gIGNvbnN0IHN0YWNrID0gW107XG4gIGNvbnN0IHBhaXJzID0ge1xuICAgIFwiKVwiOiBcIihcIixcbiAgICBcIn1cIjogXCJ7XCIsXG4gICAgXCJdXCI6IFwiW1wiLFxuICAgIFwiJ1wiOiBcIidcIixcbiAgICAnXCInOiAnXCInLFxuICAgIFwiYFwiOiBcImBcIlxuICB9O1xuXG4gIGxldCBpblN0cmluZyA9IG51bGw7XG4gIGxldCBsYXN0Q2hhciA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhciA9IHNbaV07XG5cbiAgICBpZiAoaW5TdHJpbmcpIHtcbiAgICAgIGlmIChjaGFyID09PSBpblN0cmluZyAmJiBsYXN0Q2hhciAhPT0gJ1xcXFwnKSB7XG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPT09IDAgfHwgc3RhY2sucG9wKCkgIT09IHBhaXJzW2NoYXJdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGluU3RyaW5nID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBsYXN0Q2hhciBhdCB0aGUgZW5kIG9mIHRoZSBsb29wXG4gICAgICBsYXN0Q2hhciA9IGNoYXI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PT0gXCIoXCIgfHwgY2hhciA9PT0gXCJ7XCIgfHwgY2hhciA9PT0gXCJbXCIgfHwgY2hhciA9PT0gXCInXCIgfHwgY2hhciA9PT0gJ1wiJyB8fCBjaGFyID09PSBcImBcIikge1xuICAgICAgc3RhY2sucHVzaChjaGFyKTtcbiAgICAgIGlmIChjaGFyID09PSBcIidcIiB8fCBjaGFyID09PSAnXCInIHx8IGNoYXIgPT09IFwiYFwiKSB7XG4gICAgICAgIGluU3RyaW5nID0gY2hhcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoY2hhciA9PT0gXCIpXCIgfHwgY2hhciA9PT0gXCJ9XCIgfHwgY2hhciA9PT0gXCJdXCIgfHwgY2hhciA9PT0gXCInXCIgfHwgY2hhciA9PT0gJ1wiJyB8fCBjaGFyID09PSBcImBcIikge1xuICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PT0gMCB8fCBzdGFjay5wb3AoKSAhPT0gcGFpcnNbY2hhcl0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBVcGRhdGUgbGFzdENoYXIgYXQgdGhlIGVuZCBvZiB0aGUgbG9vcFxuICAgIGxhc3RDaGFyID0gY2hhcjtcbiAgfVxuXG4gIHJldHVybiBzdGFjay5sZW5ndGggPT09IDA7XG59XG5cbmNvbnN0IGdlbmVyYXRlQXRvbWljQ3NzID0gKHJ1bGVzOlJ1bGVzLCBwcmVmaXhSdWxlczpQcmVmaXhSdWxlcykgPT4ge1xuICBjb25zdCBwcmlvcml0eVRhYmxlID0gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5rZXlzKHJ1bGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IFtrZXksIGluZGV4ICsgMV0pKVxuXG4gIHJldHVybiAoc2NyaXB0OnN0cmluZyk6QXJyYXk8W3N0cmluZywgbnVtYmVyXT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICB0b2tlbml6ZShzY3JpcHQpXG5cbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IFtdXG4gICAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXVxuXG4gICAgICB3aGlsZSAodG9rZW4pIHtcbiAgICAgICAgY29uc3QgZSA9IGV4cHIoKVxuXG4gICAgICAgIC8vIHZhbGlkYXRlIHByb3AodmFsdWUpIGZvcm1hdFxuICAgICAgICBpZiAoZS5maW5kKGUgPT4gZS5pZCA9PT0gXCIoXCIpICYmIGVbZS5sZW5ndGggLSAxXS5pZCAhPT0gXCIpXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFN5bnRheCFcIilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlbGVjdG9yXG4gICAgICAgIGlmICh0b2tlbiAmJiAodG9rZW4uaWQgPT09IFwiOlwiIHx8IHRva2VuLmlkID09PSBcIjo6XCIpKSB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IHBhcnNlUHJlZml4KHByZWZpeFJ1bGVzLCBlKVxuICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKHJ1bGUpXG4gICAgICAgICAgbmV4dCgpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBGSVhNRTogZGVjbGFyYXRpb25cbiAgICAgICAgaWYgKCF0b2tlbiB8fCB0b2tlbi5pZCA9PT0gXCIoaW1wb3J0YW50KVwiIHx8IHRva2VuLmlkID09PSBcIitcIikge1xuICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IGVbMF0udmFsdWVcblxuICAgICAgICAgIC8vID4+IFx1QUUzMFx1QjJBNSBleCkgPj5jKHJlZClcbiAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiPj5cIikge1xuICAgICAgICAgICAgc2VsZWN0b3JzLnB1c2goe3NlbGVjdG9yOiBcIiYgKlwifSlcbiAgICAgICAgICAgIGUuc2hpZnQoKVxuICAgICAgICAgICAgcHJvcGVydHkgPSBlWzBdLnZhbHVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gPiBcdUFFMzBcdUIyQTUgZXgpID5jKHJlZClcbiAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKHtzZWxlY3RvcjogXCImPipcIn0pXG4gICAgICAgICAgICBlLnNoaWZ0KClcbiAgICAgICAgICAgIHByb3BlcnR5ID0gZVswXS52YWx1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFx1Qzc3Q1x1QkMxOCBQcm9wZXJ0eVxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS5zbGljZSgyLCAtMSkubWFwKHIgPT4gci52YWx1ZSkuam9pbihcIlwiKVxuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlc1twcm9wZXJ0eV1cbiAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBwcmlvcml0eVRhYmxlW3Byb3BlcnR5ICsgcHJvcGVydHkuaW5jbHVkZXMoXCIoXCIpID8gXCIoXCIgOiBcIlwiXSB8fCBwcmlvcml0eVRhYmxlW3Byb3BlcnR5XSB8fCAwXG5cbiAgICAgICAgICBsZXQgZGVjbGFyYXRpb24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bGUpIHJldHVybiB2YWx1ZSA9PT0gXCJcIiA/IHJ1bGUoKSA6IHJ1bGUodmFsdWUpXG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgQUxMX1BST1BFUlRJRVNbcHJvcGVydHldKSByZXR1cm4gYCR7cHJvcGVydHl9OiR7bWFrZVZhbHVlcyh2YWx1ZSl9O2BcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBkZWZpbmVkIHByb3BlcnR5OiBcIiArIHByb3BlcnR5KVxuICAgICAgICAgIH0pKClcblxuICAgICAgICAgIGlmIChkZWNsYXJhdGlvbi5zZWFyY2goXCJ1bmRlZmluZWRcIikgPj0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGRlZmluZWQgcHJvcGVydHk6IFwiICsgcHJvcGVydHkpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gKGltcG9ydGFudClcdUM1RDAgXHVCNTMwXHVCNzdDXHVDMTFDIHByaW9yaXR5XHVCOTdDIFx1QkMxNFx1QUZENFx1QzkwMFx1QjJFNC5cbiAgICAgICAgICBpZiAodG9rZW4gJiYgdG9rZW4uaWQgPT09IFwiKGltcG9ydGFudClcIikge1xuICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi5yZXBsYWNlKC87L2csIChhLCBiLCBjKSA9PiBjLmNoYXJBdChiIC0gMSkgIT09IFwiXFxcXFwiID8gXCIhaW1wb3J0YW50O1wiIDogYSlcbiAgICAgICAgICAgIHByaW9yaXR5ID0gOTk5OSArIHRva2VuLnZhbHVlLmxlbmd0aFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKHtkZWNsYXJhdGlvbiwgcHJpb3JpdHl9KVxuICAgICAgICB9XG5cbiAgICAgICAgbmV4dCgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lZGlhUXVlcnkgPSBzZWxlY3RvcnMubWFwKGEgPT4gYS5tZWRpYSkuZmlsdGVyKEJvb2xlYW4pXG4gICAgICBjb25zdCBtZWRpYSA9IG1lZGlhUXVlcnkubGVuZ3RoID8gXCJAbWVkaWFcIiArIG1lZGlhUXVlcnkuam9pbihcIiBhbmQgXCIpIDogXCJcIlxuXG4gICAgICBjb25zdCBhdG9tID0gXCIuXCIgKyBjc3NFc2NhcGUoc2NyaXB0KVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvcnMubWFwKGEgPT4gYS5zZWxlY3RvcikuZmlsdGVyKEJvb2xlYW4pLm1hcChzZWxlY3RvciA9PiBzZWxlY3Rvci5zcGxpdChcIixcIikpLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICByZXR1cm4gcHJldi5tYXAocHJldiA9PiBjdXJyLm1hcChzZWxlY3RvciA9PiBzZWxlY3Rvci5yZXBsYWNlKC8mL2csIHByZXYpKSkuZmxhdCgpXG4gICAgICB9LCBbYXRvbV0pLmpvaW4oXCIsXCIpXG5cbiAgICAgIHJldHVybiBkZWNsYXJhdGlvbnMubWFwKCh7ZGVjbGFyYXRpb24sIHByaW9yaXR5fSkgPT4ge1xuICAgICAgICBpZiAoIWRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gZGVjbGFyYXRpb25cIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBydWxlID0gXCJcIlxuICAgICAgICBpZiAoZGVjbGFyYXRpb24uaW5jbHVkZXMoXCImXCIpKSB7XG4gICAgICAgICAgcnVsZSA9IGRlY2xhcmF0aW9uLnJlcGxhY2UoL1smXS9nLCBzZWxlY3RvcilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoc2VsZWN0b3IuaW5jbHVkZXMoXCJ7Li4ufVwiKSkge1xuICAgICAgICAgICAgcnVsZSA9IHNlbGVjdG9yLnJlcGxhY2UobmV3IFJlZ0V4cChcInsuLi59XCIsIFwiZ1wiKSwgXCJ7XCIgKyBkZWNsYXJhdGlvbiArIFwifVwiKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJ1bGUgPSBzZWxlY3RvciArIFwie1wiICsgZGVjbGFyYXRpb24gKyBcIn1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbmFsUnVsZSA9IG1lZGlhID8gbWVkaWEgKyBcIntcIiArIHJ1bGUgKyBcIn1cIiA6IHJ1bGVcblxuICAgICAgICBpZiAoIXZhbGlkYXRlQ1NTKGZpbmFsUnVsZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyB2YWxpZGF0ZSBjc3MhIVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtmaW5hbFJ1bGUsIHByaW9yaXR5XVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBjb25zb2xlLmVycm9yKGUpXG4gICAgfVxuICB9XG59XG5cblxuLy9cbmNvbnN0IHNvcnRCeVJ1bGUgPSAoYT86W3N0cmluZywgbnVtYmVyXSwgYj86W3N0cmluZywgbnVtYmVyXSkgPT4gYSFbMV0gLSBiIVsxXVxuXG5leHBvcnQgY29uc3QgY3JlYXRlR2VuZXJhdGVDc3MgPSAocnVsZXM6UnVsZXMgPSB7fSwgcHJlZml4UnVsZXM6UHJlZml4UnVsZXMgPSB7fSkgPT4ge1xuICBydWxlcyA9IHsuLi5SVUxFUywgLi4ucnVsZXN9XG4gIHByZWZpeFJ1bGVzID0gey4uLlBSRUZJWF9SVUxFUywgLi4ucHJlZml4UnVsZXN9XG5cbiAgcmV0dXJuIChjbGFzc0xpc3Q6c3RyaW5nW10pID0+IGNsYXNzTGlzdFxuICAgIC5mbGF0TWFwKGdlbmVyYXRlQXRvbWljQ3NzKHJ1bGVzLCBwcmVmaXhSdWxlcykpXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5zb3J0KHNvcnRCeVJ1bGUpXG4gICAgLm1hcChhID0+IGFbMF0pXG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNzcyA9IGNyZWF0ZUdlbmVyYXRlQ3NzKCkiXSwKICAibWFwcGluZ3MiOiAiO0FBQXdSLFNBQVEsZUFBYztBQUM5UyxTQUFRLGlCQUFnQjs7O0FDSXhCLE9BQU8sZ0JBQWdCOzs7QUNMaVUsSUFBTSxpQkFBaUI7QUFBQSxFQUM3VyxPQUFPO0FBQUEsRUFDUCxtQkFBbUI7QUFBQSxFQUNuQix5QkFBeUI7QUFBQSxFQUN6Qiw2QkFBNkI7QUFBQSxFQUM3Qix1QkFBdUI7QUFBQSxFQUN2QiwwQkFBMEI7QUFBQSxFQUMxQiw4QkFBOEI7QUFBQSxFQUM5Qiw4QkFBOEI7QUFB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V0FBVyxVQUFVO0FBQzlELGdCQUFNLFNBQVMsTUFBTSxPQUFPLFFBQVEsbUJBQW1CQSxZQUFXO0FBQUEsUUFDcEU7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOzs7QURoTEEsSUFBTSxTQUFvQjtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO0FBQUEsRUFDcEMsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBO0FBQUEsTUFFRixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU8sUUFBUSxLQUFLO0FBQUEsTUFDcEIsWUFBWSxRQUFRLFVBQVU7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbImluZGV4IiwgInZhbHVlIiwgImluZGV4IiwgImxlZnQiLCAidG9wIiwgIm1pbiIsICJtYXgiLCAidmFsdWUiLCAidG9rZW5zIiwgImluZGV4IiwgInRva2VuIiwgImUiLCAic2VsZWN0b3IiLCAicHJldiIsICJjb25maWciLCAiZ2VuZXJhdGVDc3MiLCAibmV4dCIsICJhZG9yYWJsZUNTUyJdCn0K
