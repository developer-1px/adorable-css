"use strict";Object.defineProperty(exports, "__esModule", {value: true});var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/parser.ts
var REGEXP_STRING1 = /(?:"(?:[^"]|\\"])*")/gm;
var REGEXP_STRING2 = /(?:'(?:[^']|\\'])*')/gm;
var REGEXP_STRING3 = /(?:`(?:[^`]|\\`])*`)/gm;
var trim = (a) => a.trim();
var findAll = (str, regex, callback) => String(str).replace(regex, (...args) => (callback(...args), args[0]));
var parseAtoms = (code) => {
  const atoms = Object.create(null);
  findAll(code, REGEXP_STRING1, (a) => a.slice(1, -1).split(/\s+/).map(trim).filter(Boolean).forEach((atom) => atoms[atom] = atom));
  findAll(code, REGEXP_STRING2, (a) => a.slice(1, -1).split(/\s+/).map(trim).filter(Boolean).forEach((atom) => atoms[atom] = atom));
  findAll(code, REGEXP_STRING3, (a) => a.slice(1, -1).split(/\s+/).map(trim).filter(Boolean).forEach((atom) => atoms[atom] = atom));
  return Object.values(atoms);
};

// src/cssEscape.ts
var cssEscape = (string) => {
  const length = string.length;
  const firstCodeUnit = string.charCodeAt(0);
  let index = -1;
  let codeUnit;
  let result = "";
  while (++index < length) {
    codeUnit = string.charCodeAt(index);
    if (codeUnit == 0) {
      result += "\uFFFD";
      continue;
    }
    if (codeUnit >= 1 && codeUnit <= 31 || codeUnit == 127 || index == 0 && codeUnit >= 48 && codeUnit <= 57 || index == 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit == 45) {
      result += "\\" + codeUnit.toString(16) + " ";
      continue;
    }
    if (index == 0 && length == 1 && codeUnit == 45) {
      result += "\\" + string.charAt(index);
      continue;
    }
    if (codeUnit >= 128 || codeUnit == 45 || codeUnit == 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) {
      result += string.charAt(index);
      continue;
    }
    result += "\\" + string.charAt(index);
  }
  return result;
};

// src/makeValue.ts
var makeNumber = (num) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0";
var cssvar = (value) => String(value).startsWith("--") ? `var(${value})` : value;
var px = (value) => {
  if (value === 0 || value === "0")
    return 0;
  if (String(value).startsWith("--"))
    return cssvar("" + value);
  const [n, m] = String(value).split("/");
  if (+n > 0 && +m > 0)
    return makeNumber(+n / +m * 100) + "%";
  return +value === +value ? value + "px" : value;
};
var percentToEm = (value) => {
  if (value.endsWith("%"))
    return +value.slice(0, -1) / 100 + "em";
  return value;
};
var makeFont = (value) => (value || "").split("/").map((value2, index) => {
  if (value2 === "-")
    return;
  if (String(value2).startsWith("--"))
    return `var(${value2})`;
  switch (index) {
    case 0: {
      return `font-size: ${px(value2)}`;
    }
    case 1: {
      return `line-height: ${+value2 < 4 ? makeNumber(+value2) : px(value2)}`;
    }
    case 2: {
      return `letter-spacing: ${px(percentToEm(value2))}`;
    }
  }
}).filter(Boolean).join(";");
var makeHEX = (value) => {
  const [rgb, a] = value.split(".");
  if (a && rgb.length === 4)
    return "rgba(" + [...rgb.slice(1)].map((value2) => parseInt(value2 + value2, 16)).join(",") + ",." + a + ")";
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
  if (value.charAt(0) === "#")
    return makeHEX(value);
  if (value.includes(",") && value.includes("%"))
    return makeHLS(value);
  if (value.includes(","))
    return makeRGB(value);
  return value;
};
var makeBorder = (value) => {
  if (value === "none")
    return "none";
  if (value === "0")
    return "none";
  return `1px solid ${makeColor(value)}`;
};
var makeValues = (value, project = (a) => a) => {
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
  return (+w / +h * 100).toFixed(2) + "%";
};
var makeHBox = (value = "") => {
  const values = value.split("+");
  const result = values.map((v) => {
    switch (v) {
      case "top": {
        return "align-items: flex-start;";
      }
      case "bottom": {
        return "align-items: flex-end;";
      }
      case "fill": {
        return "align-items: stretch;";
      }
      case "stretch": {
        return "align-items: stretch;";
      }
      case "center": {
        return "justify-content: center;";
      }
      case "left": {
        return values.includes("reverse") ? "justify-content: flex-end;" : "";
      }
      case "right": {
        return !values.includes("reverse") ? "justify-content: flex-end;" : "";
      }
      case "reverse": {
        return "flex-direction: row-reverse;";
      }
    }
  });
  if (!values.includes("top") && !values.includes("bottom") && !values.includes("full")) {
    result.unshift("align-items: center;");
  }
  return result.join("");
};
var makeVBox = (value = "") => {
  const values = value.split("+");
  const result = values.map((v) => {
    switch (v) {
      case "left": {
        return "align-items: flex-start;";
      }
      case "center": {
        return "align-items: center;";
      }
      case "right": {
        return "align-items: flex-end;";
      }
      case "top": {
        return values.includes("reverse") ? "justify-content: flex-end;" : "";
      }
      case "bottom": {
        return !values.includes("reverse") ? "justify-content: flex-end;" : "";
      }
      case "reverse": {
        return "flex-direction: column-reverse;";
      }
    }
  });
  if (!values.includes("left") && !values.includes("center") && !values.includes("right")) {
    result.unshift("align-items: stretch;");
  }
  return result.join("");
};
var makeTransition = (value) => {
  if (!value.includes("="))
    return `all ${value}`;
  return value.split("/").map((item) => item.replace("=", " ")).join(",");
};

// src/atomizer.ts
var reset = `* {margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}`;
var RULES = {
  c: (value) => `color:${makeColor(value)};`,
  bg: (value) => `background-color:${makeColor(value)};`,
  "bg-repeat-x": () => `background-repeat:repeat-x;`,
  "bg-repeat-y": () => `background-repeat:repeat-y;`,
  "bg-no-repeat": () => `background-repeat:no-repeat;`,
  "bg-attachment-fixed": () => `background-attachment:fixed;`,
  "bg-attachment-scroll": () => `background-attachment:scroll;`,
  "bg-position": (value) => `background-position:${value};`,
  contain: () => `background-size:contain;background-position:center;object-fit:contain;`,
  cover: () => `background-size:cover;background-position:center;object-fit:cover;`,
  font: (value) => makeFont(value),
  "font-size": (value) => `font-size:${px(value)};`,
  "letter-spacing": (value) => `letter-spacing:${px(value)};`,
  "word-spacing": (value) => `word-spacing:${px(value)};`,
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
  regular: () => `font-weight:400;`,
  medium: () => `font-weight:500;`,
  semibold: () => `font-weight:600;`,
  bold: () => `font-weight:700;`,
  heavy: () => `font-weight:800;`,
  bolder: () => `font-weight:900;`,
  thicker: (value = 1) => `text-shadow:0 0 ${px(value)} currentColor;`,
  italic: () => `font-style:italic;`,
  overline: () => `text-decoration:overline;`,
  underline: () => `text-decoration:underline;`,
  "line-through": () => `text-decoration:line-through;`,
  "strike": () => `text-decoration:line-through;`,
  del: () => `text-decoration:line-through;`,
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
  "text-left": () => `text-align:left;`,
  "text-center": () => `text-align:center;`,
  "text-right": () => `text-align:right;`,
  "text-justify": () => `text-align:justify;`,
  "break-all": () => `word-break:break-all;`,
  "break-word": () => `word-break:break-word;overflow-wrap:break-word;`,
  "keep-all": () => `word-break:keep-all;`,
  "border-box": () => `box-sizing:border-box`,
  "content-box": () => `box-sizing:content-box`,
  w: (value) => {
    if (value.includes("~")) {
      const result = [];
      const [min, max] = value.split("~");
      min && result.push(`min-width:${px(min)};`);
      max && result.push(`max-width:${px(max)};`);
      return result.join("");
    }
    return value === "stretch" || value === "fill" ? `align-self:stretch` : `width:${px(value)};`;
  },
  h: (value) => {
    if (value.includes("~")) {
      const result = [];
      const [min, max] = value.split("~");
      min && result.push(`min-height:${px(min)};`);
      max && result.push(`max-height:${px(max)};`);
      return result.join("");
    }
    return value === "stretch" || value === "fill" ? `align-self:stretch` : `height:${px(value)};`;
  },
  m: (value) => `margin:${makeSide(value)};`,
  mt: (value) => `margin-top:${px(value)};`,
  mr: (value) => `margin-right:${px(value)};`,
  mb: (value) => `margin-bottom:${px(value)};`,
  ml: (value) => `margin-left:${px(value)};`,
  p: (value) => `padding:${makeSide(value)};`,
  pt: (value) => `padding-top:${px(value)};`,
  pr: (value) => `padding-right:${px(value)};`,
  pb: (value) => `padding-bottom:${px(value)};`,
  pl: (value) => `padding-left:${px(value)};`,
  b: (value) => `border:${makeBorder(value)};`,
  bt: (value) => `border-top:${makeBorder(value)};`,
  br: (value) => `border-right:${makeBorder(value)};`,
  bb: (value) => `border-bottom:${makeBorder(value)};`,
  bl: (value) => `border-left:${makeBorder(value)};`,
  bw: (value) => `border-width:${px(value)};`,
  btw: (value) => `border-top-width:${px(value)};`,
  brw: (value) => `border-right-width:${px(value)};`,
  bbw: (value) => `border-bottom-width:${px(value)};`,
  blw: (value) => `border-left-width:${px(value)};`,
  bs: (value) => `border-style:${cssvar(value)};`,
  bts: (value) => `border-top-style:${cssvar(value)};`,
  brs: (value) => `border-right-style:${cssvar(value)};`,
  bbs: (value) => `border-bottom-style:${cssvar(value)};`,
  bls: (value) => `border-left-style:${cssvar(value)};`,
  bc: (value) => `border-color:${makeColor(value)};`,
  btc: (value) => `border-top-color:${makeColor(value)};`,
  brc: (value) => `border-right-color:${makeColor(value)};`,
  bbc: (value) => `border-bottom-color:${makeColor(value)};`,
  blc: (value) => `border-left-color:${makeColor(value)};`,
  r: (value) => `border-radius:${makeSide(value)};`,
  rtl: (value) => `border-top-left-radius:${px(value)};`,
  rtr: (value) => `border-top-right-radius:${px(value)};`,
  rbr: (value) => `border-bottom-right-radius:${px(value)};`,
  rbl: (value) => `border-bottom-left-radius:${px(value)};`,
  rt: (value) => `border-top-left-radius:${px(value)};border-top-right-radius:${px(value)};`,
  rr: (value) => `border-top-right-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  rb: (value) => `border-bottom-left-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  rl: (value) => `border-top-left-radius:${px(value)};border-bottom-left-radius:${px(value)};`,
  ring: (value) => {
    const [color, size = 1] = value.split("/");
    return `box-shadow:0 0 0 ${px(size)} ${makeColor(color)};`;
  },
  outline: (value) => `outline:1px solid ${makeColor(value)};`,
  "guide": (value = "#4f80ff") => `&, & > * { outline:1px solid ${makeColor(value)};}`,
  overflow: (value) => `overflow:${value};`,
  "overflow-x": (value) => `overflow-x:${value};`,
  "overflow-y": (value) => `overflow-y:${value};`,
  clip: () => `overflow:hidden;`,
  "scroll": () => `overflow:auto;`,
  "scroll-x": () => `overflow-x:auto;overflow-y:hidden;`,
  "scroll-y": () => `overflow-x:hidden;overflow-y:auto;`,
  "scrollbar": () => `&{overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar {display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal {display:none;}`,
  "overscroll": (value) => `overscroll-behavior:${value};`,
  "overscroll-x": (value) => `overscroll-behavior-x:${value};`,
  "overscroll-y": (value) => `overscroll-behavior-y:${value};`,
  "no-bouncing": () => "",
  "no-overscroll": () => "",
  "vertical-top": () => `vertical-align:top`,
  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "nowrap": () => `white-space:nowrap;flex-shrink:0;`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;`,
  "line-clamp": (value) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "text-indent": (value) => `text-indent:${px(value)};`,
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
  pack: () => `display:flex;align-items:center;justify-content:center;`,
  hbox: (value) => `display:flex;flex-flow:row;${makeHBox(value)}`,
  vbox: (value) => `display:flex;flex-flow:column;${makeVBox(value)}`,
  gap: (value) => `gap:${makeSide(value)};`,
  hgap: (value) => `&>*+* {margin-left:${px(value)};}`,
  "hgap-reverse": (value) => `&>*+* {margin-right:${px(value)};}`,
  vgap: (value) => `&>*+* {margin-top:${px(value)};}`,
  "vgap-reverse": (value) => `&>*+* {margin-bottom:${px(value)};}`,
  "space-between": () => `justify-content:space-between;`,
  "space-around": () => `justify-content:space-around;`,
  "space-evenly": () => `justify-content:space-evenly;`,
  flex: (value = "1") => `flex:${makeValues(value)};`,
  space: (value) => `[class*="hbox"]>& {width:${px(value)};} [class*="vbox"]>& {height:${px(value)};}`,
  "flex-initial": () => `flex:initial;`,
  "flex-auto": () => `flex:auto;`,
  "flex-none": () => `flex:none;`,
  "flex-grow": (value) => `flex-grow:${cssvar(value)};`,
  "flex-shrink": (value) => `flex-shrink:${cssvar(value)};`,
  "flex-basis": (value) => `flex-basis:${px(value)};`,
  "flex-wrap": () => "flex-wrap:wrap;",
  "flex-wrap-reverse": () => "flex-wrap:wrap-reverse;",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value) => `order:${cssvar(value)};`,
  none: () => `display:none;`,
  opacity: (value) => `opacity:${cssvar(value)};`,
  invisible: () => `visibility:hidden;`,
  visible: () => `visibility:visible;`,
  "gone": () => `position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);`,
  layer: (value = "") => {
    const pos = { top: 0, right: 0, bottom: 0, left: 0 };
    value.split("+").forEach((v) => {
      switch (v) {
        case "top": {
          return delete pos["bottom"];
        }
        case "right": {
          return delete pos["left"];
        }
        case "bottom": {
          return delete pos["top"];
        }
        case "left": {
          return delete pos["right"];
        }
      }
    });
    return `position:absolute;` + Object.keys(pos).map((value2) => `${value2}:0`).join(";");
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
  x: (value) => `left:${px(value)};`,
  y: (value) => `top:${px(value)};`,
  z: (value) => `z-index:${cssvar(value)};`,
  top: (value) => `top:${px(value)};`,
  left: (value) => `left:${px(value)};`,
  right: (value) => `right:${px(value)};`,
  bottom: (value) => `bottom:${px(value)};`,
  "user-select-none": () => "user-select:none;",
  "user-select-all": () => "user-select:all;",
  "user-select-auto": () => "user-select:auto;",
  "user-select-text": () => "user-select:text;",
  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",
  cursor: (value) => `cursor:${value};`,
  pointer: () => `cursor:pointer;`,
  grab: () => `&{cursor:grab;} &:active {cursor:grabbing;}`,
  grabbing: () => `cursor:grabbing;`,
  transition: (value) => `transition:${makeTransition(value)};`,
  translate: (value) => `transform:translate(${makeCommaValues(value)});`,
  translateX: (value) => `transform:translateX(${cssvar(value)});`,
  translateY: (value) => `transform:translateY(${cssvar(value)});`,
  translateZ: (value) => `transform:translateZ(${cssvar(value)});`,
  translate3d: (value) => `transform:translate3d(${makeCommaValues(value)});`,
  rotate: (value) => `transform:rotate(${makeCommaValues(value)});`,
  rotateX: (value) => `transform:rotateX(${cssvar(value)});`,
  rotateY: (value) => `transform:rotateY(${cssvar(value)});`,
  rotateZ: (value) => `transform:rotateZ(${cssvar(value)});`,
  rotate3d: (value) => `transform:rotateZ(${makeCommaValues(value)});`,
  scale: (value) => `transform:scale(${makeCommaValues(value)});`,
  scaleX: (value) => `transform:scaleX(${makeCommaValues(value)});`,
  scaleY: (value) => `transform:scaleY(${makeCommaValues(value)});`,
  scaleZ: (value) => `transform:scaleZ(${makeCommaValues(value)});`,
  ratio: (value) => `& {position:relative;width:100%;padding-top:${makeRatio(value)};} & > * {position:absolute;top:0;left:0;width:100%;height:100%;}`,
  gpu: () => `transform:translateZ(0.1px);`,
  "no-border": () => `border:none;outline:none;`,
  "app-region": (value) => `-webkit-app-region:${value};`,
  content: (value) => `content:'${cssvar(value)}'`,
  "clip-path": (value) => `clip-path:${cssvar(value)};-webkit-clip-path:${cssvar(value)};`,
  "table-layout-fixed": () => `table-layout:fixed;`,
  "float-left": () => `float:left`,
  "float-right": () => `float:right`,
  "float-none": () => `float:none`,
  "clear-left": () => `clear:left`,
  "clear-right": () => `clear:right`,
  "clear-both": () => `clear:both`,
  "clear-none": () => `clear:none`,
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
  elevation: (value) => {
    const dp = +value;
    if (!dp) {
      return `box-shadow: none`;
    }
    const blur = dp == 1 ? 3 : dp * 2;
    const amba = (dp + 10 + dp / 9.38) / 100;
    const diry = dp < 10 ? dp % 2 == 0 ? dp - (dp / 2 - 1) : dp - (dp - 1) / 2 : dp - 4;
    const dira = (24 - Math.round(dp / 10)) / 100;
    return `box-shadow: 0px ${px(dp)} ${px(blur)} rgba(0, 0, 0, ${amba}), 0px ${px(diry)} ${px(blur)} rgba(0, 0, 0, ${dira})`;
  }
};
var MEDIA_QUERY_RULES = {
  "sm:": { media: `(max-width:767px)`, selector: `html &` },
  "~sm:": { media: `(mix-width:767px)`, selector: `html &` },
  "sm~:": { media: `(min-width:767px)`, selector: `html &` },
  "!sm:": { media: `(max-width:767px)`, selector: `html &` },
  "mobile:": { media: `(max-width:767px)`, selector: `html &` },
  "!mobile:": { media: `(min-width:767px)`, selector: `html &` },
  "mobile-device:": { media: `(max-device-width:767px)`, selector: `html &` },
  "!mobile-device:": { media: `(min-device-width:767px)`, selector: `html &` },
  "touch:": { media: `(hover:none)`, selector: `html &` },
  "portrait:": { media: `(orientation:portrait)`, selector: `html &` },
  "landscape:": { media: `(orientation:landscape)`, selector: `html &` },
  "dark:": { selector: `html.dark &` }
};
var PREFIX_RULES = __spreadProps(__spreadValues({}, MEDIA_QUERY_RULES), {
  "hover:": { media: `(hover:hover)`, selector: `&:hover, &.\\:hover` },
  "active:": { selector: `html &:active, html &.\\:active` },
  "focus:": { selector: `html &:focus, html &.\\:focus` },
  "focus-within:": { selector: `html &:focus-within, html &.\\:focus-within` },
  "disabled:": { selector: `html body &:disabled, html body &.\\:disabled, html body &[disabled]` },
  "group-hover:": { selector: `.group:hover &, html .group.\\:hover &` },
  "group-active:": { selector: `html .group:active &, html .group.\\:active &` },
  "group-focus:": { selector: `html .group:focus &, html .group.\\:focus &` },
  "group-focus-within:": { selector: `html .group:focus-within &, html .group\\:focus-within` },
  "group-disabled:": { selector: `html body .group:disabled &, html body .group[disabled] &, html body .group.disabled &` },
  "placeholder:": { selector: `&::placeholder` },
  "link:": { selector: `&:link` },
  "visited:": { selector: `&:visited` },
  "first:": { selector: `&:first-child` },
  "nth-child(?):": { selector: `&:nth-child(?)` },
  "before:": { selector: `&:before` },
  "after:": { selector: `&:after` }
});
var rules = (r) => RULES[r] || (() => "");
var re_syntax = /^((?:[^:]+:)*)([^(!]+)(?:\((.*?)\))?([!]?)$/g;
var generateAtomicCss = (atom) => {
  try {
    if (!re_syntax.test(atom))
      return;
    let $selector = [`.${cssEscape(atom)}`];
    let $mediaQuery = [];
    const result = atom.replace(re_syntax, (a, prefix, property, value, isImportant) => {
      if (!RULES[property])
        throw "";
      const important = isImportant ? "!important;" : ";";
      prefix.split(":").forEach((prefix2) => {
        const r = prefix2.startsWith(".") ? { selector: `&${prefix2}, ${prefix2} &` } : prefix2.startsWith(">>") ? { selector: `& ${prefix2.slice(2, 0)}` } : prefix2.startsWith(">") ? { selector: `&${prefix2}` } : PREFIX_RULES[prefix2 + ":"];
        if (!r)
          return;
        $selector = $selector.map((s) => ((r == null ? void 0 : r.selector.split(",")) || []).map((selector) => {
          return selector.replace(/&/g, s).trim();
        })).flat();
        if (r.media) {
          $mediaQuery = [...$mediaQuery, r.media];
        }
      });
      const media = $mediaQuery.length ? "@media " + $mediaQuery.join(" and ") : "";
      const selectors = $selector.join(",");
      const declaration = rules(property)(value).replace(/;/g, important);
      const rule = declaration.includes("&") ? declaration.replace(/&/g, selectors) : selectors + "{" + declaration + "}";
      return media ? media + "{" + rule + "}" : rule;
    });
    if (!result)
      return;
    return result;
  } catch (e) {
    return;
  }
};
var priority = [
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
  "flex-shrink"
].reverse();
var getPriority = (a) => priority.findIndex((value) => a.startsWith(value.split(":").pop() || ""));
var strcmp = (a, b) => a > b ? 1 : a < b ? -1 : 0;
var sortByRule = (a, b) => getPriority(b) - getPriority(a) || strcmp(a, b);
var generateCss = (classList) => classList.map((a) => String(a)).sort(sortByRule).map(generateAtomicCss).filter(Boolean);

// vite-plugin-adorable-css.ts


var _fs = require('fs');
var NAME = "@adorable.css";
var VIRTUAL_FILE_ID = "/@adorable.css";
var CONFIG = {
  ext: ["svelte", "vue", "tsx", "jsx"]
};
var adorableCSS = (config = CONFIG) => {
  let timer;
  let resolver;
  let isHMR = false;
  const entry = Object.create(null);
  const checkTargetFile = (id) => config.ext.includes(id.split(".").pop() || "");
  const debouncing = async () => {
    if (!resolver) {
      clearTimeout(timer);
      timer = setTimeout(debouncing, 50);
      return;
    }
    const allAtoms = Object.values(entry).map((id) => parseAtoms(_fs.readFileSync.call(void 0, id, "utf8"))).flat();
    const styles = generateCss([...new Set(allAtoms)]);
    const a = [reset, ...styles].join("\n");
    resolver(a);
  };
  return {
    name: `${NAME}:entry`,
    enforce: "pre",
    resolveId(id) {
      clearTimeout(timer);
      if (id === NAME || id === VIRTUAL_FILE_ID) {
        return VIRTUAL_FILE_ID;
      }
      timer = setTimeout(debouncing, isHMR ? 0 : 500);
    },
    async load(id) {
      if (id === VIRTUAL_FILE_ID) {
        return new Promise((resolve) => {
          resolver = resolve;
          if (isHMR)
            debouncing();
        });
      }
      if (!checkTargetFile(id))
        return;
      entry[id] = id;
    },
    async handleHotUpdate({ server, file, modules }) {
      if (!checkTargetFile(file))
        return;
      isHMR = true;
      const module = server.moduleGraph.getModuleById(VIRTUAL_FILE_ID);
      return [...modules, module].filter(Boolean);
    }
  };
};


exports.adorableCSS = adorableCSS;
