// src/core/const.ts
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

// src/core/cssEscape.ts
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

// src/core/makeValue.ts
var splitValues = (value, project = cssvar) => {
  if (value.includes("|")) return value.split("|").map(project);
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
  if (value === void 0 || value === null) throw new Error("px: value is undefined");
  if (value === 0 || value === "0") return 0;
  const v = String(value);
  if (v.startsWith("--")) return cssvar("" + value);
  const [n, m] = v.split("/");
  if (+n > 0 && +m > 0) return makeNumber(+n / +m * 100) + "%";
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return "calc(" + v.replace(/[-+]/g, (a) => ` ${a} `) + ")";
  }
  return +value === +value ? value + "px" : value;
};
var deg = (value) => {
  if (value === void 0 || value === null) throw new Error("deg: value is undefined");
  if (value === 0 || value === "0") return 0;
  const v = String(value);
  if (v.startsWith("--")) return cssvar("" + value);
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return "calc(" + v.replace(/[-+]/g, (a) => ` ${a} `) + ")";
  }
  return +value === +value ? value + "deg" : value;
};
var rpx = (value) => {
  if (value === "fill") return "9999px";
  return px(value);
};
var percentToEm = (value) => {
  if (value.endsWith("%")) return +value.slice(0, -1) / 100 + "em";
  return px(value);
};
var makeHEX = (value) => {
  const [rgb, a] = value.split(".");
  if (a && rgb.length === 4) return "rgba(" + rgb.slice(1).split("").map((value2) => parseInt(value2 + value2, 16)).join(",") + ",." + a + ")";
  if (a) return "rgba(" + [rgb.slice(1, 3), rgb.slice(3, 5), rgb.slice(5, 7)].map((value2) => parseInt(value2, 16)).join(",") + ",." + a + ")";
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
  if (value === "-") return "transparent";
  if (value === "transparent") return "transparent";
  if (value.startsWith("--")) return `var(${value})`;
  if (value.split(",").every((v) => parseFloat(v) >= 0)) {
    if (value.includes("%")) {
      return makeHLS(value);
    }
    return makeRGB(value);
  }
  return value;
};
var makeFont = (value) => {
  if (!value) throw new Error("makeFont: value is undefined");
  return (value || "").split("/").map((value2, index2) => {
    if (value2 === "-") return;
    if (String(value2).startsWith("--")) return `var(${value2});`;
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
  if (!value || value === "none" || value === "0" || value === "-") return "none";
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
  if (!hasWidth) values.unshift("1px");
  if (!hasStyle) values.unshift("solid");
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
  if (val.includes("row")) return makeHBoxFill();
  if (val.includes("column")) return makeVBoxFill();
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
  if (!/\d/.test(value)) return value;
  if (!value.includes("=")) return makeValues(value);
  return value.split(/[/|]/).map((item) => item.replace("=", " ")).join(",");
};
var makePosition1 = (value) => {
  const values = value.split(" ").map(px);
  values[1] = values[1] || values[0];
  values[2] = values[2] || values[0];
  values[3] = values[3] || values[1] || values[0];
  return ["top", "right", "bottom", "left"].map((prop, index2) => {
    const value2 = values[index2];
    if (!value2 || value2 === "-") return;
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
  if (!value) return "";
  if (value === "pack" || value === "center") {
    return "left:50%;top:50%;transform:translate(-50%,-50%);";
  }
  return (value.includes(",") ? makePosition2(value) : makePosition1(value)) + ";";
};

// src/core/rules.ts
var reset = `
:where(*,:after,:before){margin:0;padding:0;font:inherit;color:inherit;box-sizing:border-box;}
:where(:root){-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
:where(html,body){height:100%;}
:where(img,picture,video,canvas){display:block;max-width:100%;}
:where(img){text-indent:-9999px;}
:where(button){background:none;border:0;cursor:pointer;}
:where(a){text-decoration:none;}
:where(table){border-collapse:collapse;border-spacing:0;}
:where(ol,ul,menu,dir){list-style:none;}
:where(*,:after,:before){--w-grow:initial;--w-align:initial;--h-grow:initial;--h-align:initial;}
:where(*,:after,:before){
--a-translate-x:0;
--a-translate-y:0;
--a-rotate:0;
--a-skew-x:0;
--a-skew-y:0;
--a-scale-x:1;
--a-scale-y:1;
--a-transform: translateX(var(--a-translate-x)) translateY(var(--a-translate-y)) rotate(var(--a-rotate)) skewX(var(--a-skew-x)) skewY(var(--a-skew-y)) scaleX(var(--a-scale-x)) scaleY(var(--a-scale-y));
--a-transform3d: translate3d(var(--a-translate-x),var(--a-translate-y),0) rotate(var(--a-rotate)) skewX(var(--a-skew-x)) skewY(var(--a-skew-y)) scaleX(var(--a-scale-x)) scaleY(var(--a-scale-y));
}
`;
var RULES = {
  // -- Color
  "c": (value) => {
    if (value.startsWith("linear-gradient")) return `background:${value.replace(/\//g, " ")};-webkit-background-clip:text;-webkit-text-fill-color:transparent;`;
    if (value.startsWith("radial-gradient")) return `background:${value.replace(/\//g, " ")};-webkit-background-clip:text;-webkit-text-fill-color:transparent;`;
    return `color:${makeColor(value)};`;
  },
  "color": (value) => RULES.c(value),
  "caret": (value) => `caret-color:${makeColor(value)};`,
  "caret-current": () => `caret-color:currentColor;`,
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
    if (value === "number") return `font-variant-numeric:tabular-nums;`;
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
    if (value === "hug") return "width:max-content;";
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
    if (value === "hug") return "height:max-content;";
    if (value === "stretch" || value === "fill") {
      return `flex-grow:var(--h-grow);flex-shrink:var(--h-shrink);align-self:var(--h-align);max-height:100%;`;
    }
    if (value.includes("~")) {
      const result = [];
      const values = value.split("~");
      if (values.length <= 2) {
        const [min2, max2] = value.split("~");
        if (min2) result.push(`min-height:${px(min2)};`);
        if (max2) result.push(`max-height:${px(max2)};`);
        return result.join("");
      }
      const [min, height, max] = values;
      if (min) result.push(`min-height:${px(min)};`);
      result.push(`height:${px(height)};`);
      if (max) result.push(`max-height:${px(max)};`);
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
    if (value.startsWith("linear-gradient")) return `background:${value.replace(/\//g, " ")};`;
    if (value.startsWith("radial-gradient")) return `background:${value.replace(/\//g, " ")};`;
    if (value.startsWith("url")) return `background-image:${value};`;
    if (/^(http|[./])/.test(value)) return `background-image:url(${value});`;
    if (value === "transparent") return `background:transparent;`;
    return `background:${makeColor(value)};`;
  },
  "bg-image": (value) => {
    if (value.startsWith("url")) return `background-image:${value};`;
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
    if (value === "auto") return "&{justify-content:space-between;align-content:space-between;}&>:only-child{margin:auto;}";
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
    if (+value === +value) css.push(`grid-template-columns:repeat(${value},1fr);`);
    else if (value) css.push(`grid-template-columns:${value};`);
    return css.join("");
  },
  "grid-cols": (value) => {
    const css = ["display:grid;"];
    if (+value === +value) css.push(`grid-template-columns:repeat(${value},1fr);`);
    else if (value) css.push(`grid-template-columns:${value};`);
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
  "matrix": (value) => `transform:matrix(${value});`,
  // @TODO: 3d transform
  // "translate3d": (value:string) => `--a-translate-x:${px(value)};--a-translate-y:${px(value)};--a-translate-z:${px(value)};transform:var(--a-transform);`,
  // "rotate3d": (value:string) => `--a-rotate-x:${deg(value)};--a-rotate-y:${deg(value)};--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
  // "translateZ": (value:string) => `--a-translate-z:${px(value)};transform:var(--a-transform);`,
  // "rotateZ": (value:string) => `--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
  // "skewZ": (value:string) => `--a-skew-z:${deg(value)};transform:var(--a-transform);`,
  // "scaleZ": (value:string) => `--a-scale-z:${makeCommaValues(value)};transform:var(--a-transform);`,
  // "matrix3d": (value:string) => `transform:matrix(${value});`,
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
  "group-disabled:": {
    selector: `html body .group:disabled &,html body .group[disabled] &,html body .group.disabled &`
  },
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
  "tablet:": {
    media: `(min-device-width:768px) and (max-device-width:1023.98px)`,
    selector: `html &`
  },
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
    if (tokens2[2]?.value !== "(" || tokens2[tokens2.length - 1]?.value !== ")") {
      throw Error("invalid syntax!");
    }
    const value = tokens2.slice(3, -1).map((t) => t.value).join("");
    if (!value.includes("~")) {
      throw Error("invalid syntax! required '~'.");
    }
    let [min, max] = value.split("~");
    if (min) min = `(min-width:${px(+min)})`;
    if (max) max = `(max-width:${px(+max - 0.02)})`;
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

// src/core/atomizer.ts
var PREFIX_RULES = {
  ...PREFIX_PSEUDO_CLASS,
  ...PREFIX_MEDIA_QUERY
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
      } else throw new Error("Unexpected:" + token.id);
    } else if (stack.length === 0 && (token.id === ":" || token.id === "::" || token.id === "(important)" || token.id === "+")) {
      break;
    }
    push(next());
  }
  if (stack.length > 0) throw new Error("Unexpected end of input");
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
            if (rule) return value === "" ? rule() : rule(value);
            if (value && ALL_PROPERTIES[property]) return `${property}:${makeValues(value)};`;
            throw new Error("Not defined property: " + property);
          })();
          if (declaration.search("undefined") >= 0) {
            throw new Error("Not defined property: " + property);
          }
          if (token && token.id === "(important)") {
            declaration = declaration.replace(
              /;/g,
              (a, b, c) => c.charAt(b - 1) !== "\\" ? "!important;" : a
            );
            priority = 9999 + token.value.length;
          }
          declarations.push({ declaration, priority });
        }
        next();
      }
      const mediaQuery = selectors.map((a) => a.media).filter(Boolean);
      const media = mediaQuery.length ? "@media" + mediaQuery.join(" and ") : "";
      const atom = "." + cssEscape(script);
      const selector = selectors.map((a) => a.selector).filter(Boolean).map((selector2) => selector2.split(",")).reduce(
        (prev, curr) => {
          return prev.map((prev2) => curr.map((selector2) => selector2.replace(/&/g, prev2))).flat();
        },
        [atom]
      ).join(",");
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

// src/index.ts
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = "body {display:none!important}";
  document.head.appendChild(styleSheet);
  const classList = /* @__PURE__ */ new Set();
  const generateStyleSheet = () => styleSheet.innerHTML = reset + generateCss([...classList]).join("\n");
  const registerObserver = () => {
    if (!document.body) return;
    const observer = new MutationObserver(() => init());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"], childList: true, subtree: true });
  };
  const init = () => {
    const prevLength = classList.size;
    Array.from(document.querySelectorAll("*[class]")).forEach((el) => Array.from(el.classList).forEach((value) => classList.add(value)));
    if (prevLength !== classList.size) {
      generateStyleSheet();
    }
    if (styleSheet.parentNode !== document.head) {
      document.head.appendChild(styleSheet);
    }
  };
  const bootstrap = () => {
    init();
    generateStyleSheet();
    registerObserver();
    document.removeEventListener("readystatechange", bootstrap);
  };
  bootstrap();
  document.addEventListener("readystatechange", bootstrap);
}
