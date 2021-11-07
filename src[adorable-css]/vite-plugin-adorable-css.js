var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/vite-plugin-adorable-css.ts
__export(exports, {
  adorableCSS: () => adorableCSS
});

// src/parser.ts
var REGEXP_STRING1 = /(?:"(?:[^"]|\\"])*")/gm;
var REGEXP_STRING2 = /(?:'(?:[^']|\\'])*')/gm;
var REGEXP_STRING3 = /(?:`(?:[^`]|\\`])*`)/gm;
var REGEXP_SVG = /<svg((\s|.)*?)<\/svg/g;
var trim = (a) => a.trim();
var findAll = (str, regex, callback) => String(str).replace(regex, (...args) => (callback(...args), args[0]));
var parseAtoms = (code) => {
  code = code.replace(REGEXP_SVG, "");
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
var cssvar = (value2) => String(value2).startsWith("--") ? `var(${value2})` : value2;
var px = (value2) => {
  if (value2 === 0 || value2 === "0")
    return 0;
  if (String(value2).startsWith("--"))
    return cssvar("" + value2);
  const [n, m] = String(value2).split("/");
  if (+n > 0 && +m > 0)
    return makeNumber(+n / +m * 100) + "%";
  if (/.[-+*\/]/.test(String(value2))) {
    return "calc(" + String(value2).replace(/[-+]/g, (a) => ` ${a} `) + ")";
  }
  return +value2 === +value2 ? value2 + "px" : value2;
};
var percentToEm = (value2) => {
  if (value2.endsWith("%"))
    return +value2.slice(0, -1) / 100 + "em";
  return value2;
};
var makeHEX = (value2) => {
  const [rgb, a] = value2.split(".");
  if (a && rgb.length === 4)
    return "rgba(" + rgb.slice(1).split("").map((value3) => parseInt(value3 + value3, 16)).join(",") + ",." + a + ")";
  if (a)
    return "rgba(" + [rgb.slice(1, 3), rgb.slice(3, 5), rgb.slice(5, 7)].map((value3) => parseInt(value3, 16)).join(",") + ",." + a + ")";
  return value2;
};
var makeHLS = (value2) => {
  const [h, s, l, a] = value2.split(",");
  return "hsl" + (a ? "a" : "") + "(" + [h, s, l, a].filter(Boolean).map(cssvar).join() + ")";
};
var makeRGB = (value2) => {
  const [r, g, b, a] = value2.split(",");
  return "rgb" + (a ? "a" : "") + "(" + [r, g, b, a].filter(Boolean).map(cssvar).join() + ")";
};
var makeColor = (value2 = "transparent") => {
  if (value2 === "-")
    return "transparent";
  if (value2 === "transparent")
    return "transparent";
  if (value2.startsWith("--"))
    return `var(${value2})`;
  if (value2.charAt(0) === "#")
    return makeHEX(value2);
  if (value2.includes(",") && value2.includes("%"))
    return makeHLS(value2);
  if (value2.includes(","))
    return makeRGB(value2);
  return value2;
};
var makeFont = (value2) => (value2 || "").split("/").map((value3, index) => {
  if (value3 === "-")
    return;
  if (String(value3).startsWith("--"))
    return `var(${value3})`;
  switch (index) {
    case 0: {
      return `font-size:${px(value3)}`;
    }
    case 1: {
      return `line-height:${+value3 < 4 ? makeNumber(+value3) : px(value3)}`;
    }
    case 2: {
      return `letter-spacing:${px(percentToEm(value3))}`;
    }
  }
}).filter(Boolean).join(";");
var makeBorder = (value2) => {
  if (!value2 || value2 === "none" || value2 === "0" || value2 === "-")
    return "none";
  const borderStyles = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
  let hasWidth = false;
  let hasStyle = false;
  const values = value2.split("/").map((value3) => {
    if (parseInt(value3) > 0) {
      hasWidth = true;
      return value3.includes(",") ? makeColor(value3) : px(value3);
    }
    if (borderStyles.includes(value3)) {
      hasStyle = true;
      return value3;
    }
    return makeColor(value3);
  });
  if (!hasWidth)
    values.unshift("1px");
  if (!hasStyle)
    values.unshift("solid");
  return values.join(" ");
};
var makeValues = (value2, project = (a) => a) => {
  if (String(value2).startsWith("--"))
    return `var(${value2})`;
  return value2 && value2.split("/").map(project).join(" ");
};
var makeCommaValues = (value2, project = (a) => a) => {
  if (String(value2).startsWith("--"))
    return `var(${value2})`;
  return value2 && value2.split(",").map(project).join(",");
};
var makeSide = (value2) => makeValues(value2, px);
var makeRatio = (value2) => {
  const [w, h] = value2.split(":");
  return (+h / +w * 100).toFixed(2) + "%";
};
var makeHBox = (value2 = "") => {
  const values = value2.split("+");
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
var makeVBox = (value2 = "") => {
  const values = value2.split("+");
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
var makeTransition = (value2) => {
  if (!value2.includes("="))
    return `all ${value2}`;
  return value2.split("/").map((item) => item.replace("=", " ")).join(",");
};

// src/atomizer.ts
var stricmp = (a, b) => a.localeCompare(b);
var reset = `* {margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}`;
var RULES = {
  c: (value2) => `color:${makeColor(value2)};`,
  bg: (value2) => `background-color:${makeColor(value2)};`,
  font: (value2) => makeFont(value2),
  "font-size": (value2) => `font-size:${px(value2)};`,
  "line-height": (value2) => `line-height:${+value2 < 4 ? makeNumber(+value2) : px(value2)}`,
  "letter-spacing": (value2) => `letter-spacing:${px(value2)};`,
  "word-spacing": (value2) => `word-spacing:${px(value2)};`,
  "100": () => `font-weight:100;`,
  "200": () => `font-weight:200;`,
  "300": () => `font-weight:300;`,
  "400": () => `font-weight:400;`,
  "500": () => `font-weight:500;`,
  "600": () => `font-weight:600;`,
  "700": () => `font-weight:700;`,
  "800": () => `font-weight:800;`,
  "900": () => `font-weight:900;`,
  thin: () => `font-weight:100;`,
  "extra-light": () => `font-weight:200;`,
  light: () => `font-weight:300;`,
  regular: () => `font-weight:400;`,
  medium: () => `font-weight:500;`,
  semibold: () => `font-weight:600;`,
  bold: () => `font-weight:700;`,
  "extra-bold": () => `font-weight:800;`,
  heavy: () => `font-weight:900;`,
  thicker: (value2 = "1") => `text-shadow:0 0 ${px(value2)} currentColor;`,
  italic: () => `font-style:italic;`,
  overline: () => `text-decoration:overline;`,
  underline: () => `text-decoration:underline;`,
  "line-through": () => `text-decoration:line-through;`,
  "strike": () => `text-decoration:line-through;`,
  del: () => `text-decoration:line-through;`,
  "sans-serif": () => `font-family:sans-serif;`,
  serif: () => `font-family:serif;`,
  monospace: () => `font-family:menlo,monospace;`,
  cursive: () => `font-family:cursive;`,
  fantasy: () => `font-family:fantasy;`,
  "system-ui": () => `font-family:system-ui;`,
  "small-caps": () => `font-variant:small-caps`,
  lowercase: () => `text-transform:lowercase;`,
  uppercase: () => `text-transform:uppercase;`,
  capitalize: () => `text-transform:capitalize;`,
  "text-justify": () => `text-align:justify;`,
  "text-center": () => `text-align:center;`,
  "text-right": () => `text-align:right;`,
  "text-left": () => `text-align:left;`,
  "break-all": () => `word-break:break-all;`,
  "break-word": () => `word-break:break-word;overflow-wrap:break-word;`,
  "keep-all": () => `word-break:keep-all;`,
  "border-box": () => `box-sizing:border-box`,
  "content-box": () => `box-sizing:content-box`,
  w: (value2) => {
    if (value2.includes("~")) {
      const result = [];
      const [min, max] = value2.split("~");
      min && result.push(`min-width:${px(min)};`);
      max && result.push(`max-width:${px(max)};`);
      return result.join("");
    }
    return value2 === "stretch" || value2 === "fill" ? `align-self:stretch` : `width:${px(value2)};`;
  },
  h: (value2) => {
    if (value2.includes("~")) {
      const result = [];
      const [min, max] = value2.split("~");
      min && result.push(`min-height:${px(min)};`);
      max && result.push(`max-height:${px(max)};`);
      return result.join("");
    }
    return value2 === "stretch" || value2 === "fill" ? `align-self:stretch` : `height:${px(value2)};`;
  },
  m: (value2) => `margin:${makeSide(value2)};`,
  mt: (value2) => `margin-top:${px(value2)};`,
  mr: (value2) => `margin-right:${px(value2)};`,
  mb: (value2) => `margin-bottom:${px(value2)};`,
  ml: (value2) => `margin-left:${px(value2)};`,
  p: (value2) => `padding:${makeSide(value2)};`,
  pt: (value2) => `padding-top:${px(value2)};`,
  pr: (value2) => `padding-right:${px(value2)};`,
  pb: (value2) => `padding-bottom:${px(value2)};`,
  pl: (value2) => `padding-left:${px(value2)};`,
  b: (value2) => `border:${makeBorder(value2)};`,
  bt: (value2) => `border-top:${makeBorder(value2)};`,
  br: (value2) => `border-right:${makeBorder(value2)};`,
  bb: (value2) => `border-bottom:${makeBorder(value2)};`,
  bl: (value2) => `border-left:${makeBorder(value2)};`,
  bw: (value2) => `border-width:${px(value2)};`,
  btw: (value2) => `border-top-width:${px(value2)};`,
  brw: (value2) => `border-right-width:${px(value2)};`,
  bbw: (value2) => `border-bottom-width:${px(value2)};`,
  blw: (value2) => `border-left-width:${px(value2)};`,
  bs: (value2) => `border-style:${cssvar(value2)};`,
  bts: (value2) => `border-top-style:${cssvar(value2)};`,
  brs: (value2) => `border-right-style:${cssvar(value2)};`,
  bbs: (value2) => `border-bottom-style:${cssvar(value2)};`,
  bls: (value2) => `border-left-style:${cssvar(value2)};`,
  bc: (value2) => `border-color:${makeColor(value2)};`,
  btc: (value2) => `border-top-color:${makeColor(value2)};`,
  brc: (value2) => `border-right-color:${makeColor(value2)};`,
  bbc: (value2) => `border-bottom-color:${makeColor(value2)};`,
  blc: (value2) => `border-left-color:${makeColor(value2)};`,
  r: (value2) => `border-radius:${makeSide(value2)};`,
  rt: (value2) => `border-top-left-radius:${px(value2)};border-top-right-radius:${px(value2)};`,
  rr: (value2) => `border-top-right-radius:${px(value2)};border-bottom-right-radius:${px(value2)};`,
  rb: (value2) => `border-bottom-left-radius:${px(value2)};border-bottom-right-radius:${px(value2)};`,
  rl: (value2) => `border-top-left-radius:${px(value2)};border-bottom-left-radius:${px(value2)};`,
  rtl: (value2) => `border-top-left-radius:${px(value2)};`,
  rtr: (value2) => `border-top-right-radius:${px(value2)};`,
  rbr: (value2) => `border-bottom-right-radius:${px(value2)};`,
  rbl: (value2) => `border-bottom-left-radius:${px(value2)};`,
  ring: (value2) => {
    const [color, size = 1] = value2.split("/");
    return `box-shadow:0 0 0 ${px(size)} ${makeColor(color)};`;
  },
  "box-shadow": (value2) => `box-shadow:${makeValues(value2)}`,
  outline: (value2) => `outline:1px solid ${makeColor(value2)};`,
  "guide": (value2 = "#4f80ff") => `&, & > * { outline:1px solid ${makeColor(value2)};}`,
  "bg-repeat-x": () => `background-repeat:repeat-x;`,
  "bg-repeat-y": () => `background-repeat:repeat-y;`,
  "bg-no-repeat": () => `background-repeat:no-repeat;`,
  "bg-fixed": () => `background-attachment:fixed;`,
  "bg-scroll": () => `background-attachment:scroll;`,
  "bg-position": (value2) => `background-position:${value2};`,
  contain: () => `background-size:contain;background-position:center;object-fit:contain;`,
  cover: () => `background-size:cover;background-position:center;object-fit:cover;`,
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
  hbox: (value2) => `display:flex;flex-flow:row;${makeHBox(value2)}`,
  vbox: (value2) => `display:flex;flex-flow:column;${makeVBox(value2)}`,
  pack: () => `display:flex;align-items:center;justify-content:center;`,
  "hbox(": () => ``,
  "vbox(": () => ``,
  gap: (value2) => `gap:${makeSide(value2)};`,
  hgap: (value2) => `&>*+* {margin-left:${px(value2)};}`,
  "hgap-reverse": (value2) => `&>*+* {margin-right:${px(value2)};}`,
  vgap: (value2) => `&>*+* {margin-top:${px(value2)};}`,
  "vgap-reverse": (value2) => `&>*+* {margin-bottom:${px(value2)};}`,
  "space-between": () => `justify-content:space-between;`,
  "space-around": () => `justify-content:space-around;`,
  "space-evenly": () => `justify-content:space-evenly;`,
  flex: (value2 = "1") => `flex:${makeValues(value2)};`,
  space: (value2) => `[class*="hbox"]>& {width:${px(value2)};} [class*="vbox"]>& {height:${px(value2)};}`,
  "flex-grow": (value2) => `flex-grow:${cssvar(value2)};`,
  "flex-shrink": (value2) => `flex-shrink:${cssvar(value2)};`,
  "flex-basis": (value2) => `flex-basis:${px(value2)};`,
  "flex-wrap": () => "flex-wrap:wrap;",
  "flex-wrap-reverse": () => "flex-wrap:wrap-reverse;",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value2) => `order:${cssvar(value2)};`,
  overflow: (value2) => `overflow:${value2};`,
  "overflow-x": (value2) => `overflow-x:${value2};`,
  "overflow-y": (value2) => `overflow-y:${value2};`,
  clip: () => `overflow:hidden;`,
  "scroll": () => `overflow:auto;`,
  "scroll-x": () => `overflow-x:auto;overflow-y:hidden;`,
  "scroll-y": () => `overflow-x:hidden;overflow-y:auto;`,
  "scrollbar": () => `&{overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar {display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal {display:none;}`,
  "overscroll": (value2) => `overscroll-behavior:${value2};`,
  "overscroll-x": (value2) => `overscroll-behavior-x:${value2};`,
  "overscroll-y": (value2) => `overscroll-behavior-y:${value2};`,
  "no-bouncing": () => "",
  "no-overscroll": () => "",
  "vertical-align": (value2) => `vertical-align:${value2}`,
  "vertical-top": () => `vertical-align:top`,
  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "nowrap": () => `white-space:nowrap;flex-shrink:0;`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;`,
  "line-clamp": (value2) => `display:-webkit-box;-webkit-line-clamp:${value2};-webkit-box-orient:vertical;overflow:hidden;`,
  "max-lines": (value2) => `display:-webkit-box;-webkit-line-clamp:${value2};-webkit-box-orient:vertical;overflow:hidden;`,
  "text-indent": (value2) => `text-indent:${px(value2)};`,
  none: () => `display:none;`,
  opacity: (value2) => `opacity:${cssvar(value2)};`,
  invisible: () => `visibility:hidden;`,
  visible: () => `visibility:visible;`,
  "gone": () => `position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);`,
  layer: (value2 = "") => {
    const pos = { top: 0, right: 0, bottom: 0, left: 0 };
    value2.split("+").forEach((v) => {
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
    return `position:absolute;` + Object.keys(pos).map((value3) => `${value3}:0`).join(";");
  },
  "absolute": () => `position:absolute;`,
  "relative": () => `position:relative;`,
  "sticky": () => `position:sticky;`,
  "sticky-top": (value2 = "0") => `position:sticky;top:${px(value2)};`,
  "sticky-right": (value2 = "0") => `position:sticky;right:${px(value2)};`,
  "sticky-bottom": (value2 = "0") => `position:sticky;bottom:${px(value2)};`,
  "sticky-left": (value2 = "0") => `position:sticky;left:${px(value2)};`,
  "fixed": () => `position:fixed;`,
  "static": () => `position:static;`,
  x: (value2) => `left:${px(value2)};`,
  y: (value2) => `top:${px(value2)};`,
  z: (value2) => `z-index:${cssvar(value2)};`,
  top: (value2) => `top:${px(value2)};`,
  left: (value2) => `left:${px(value2)};`,
  right: (value2) => `right:${px(value2)};`,
  bottom: (value2) => `bottom:${px(value2)};`,
  "user-select-none": () => "user-select:none;",
  "user-select-all": () => "user-select:all;",
  "user-select-auto": () => "user-select:auto;",
  "user-select-text": () => "user-select:text;",
  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",
  pointer: () => `cursor:pointer;`,
  grab: () => `&{cursor:grab;} &:active{cursor:grabbing;}`,
  grabbing: () => `cursor:grabbing;`,
  cursor: (value2) => `cursor:${value2};`,
  transition: (value2) => `transition:${makeTransition(value2)};`,
  translate: (value2) => `transform:translate(${makeCommaValues(value2)});`,
  translateX: (value2) => `transform:translateX(${cssvar(value2)});`,
  translateY: (value2) => `transform:translateY(${cssvar(value2)});`,
  translateZ: (value2) => `transform:translateZ(${cssvar(value2)});`,
  translate3d: (value2) => `transform:translate3d(${makeCommaValues(value2)});`,
  rotate: (value2) => `transform:rotate(${makeCommaValues(value2)});`,
  rotateX: (value2) => `transform:rotateX(${cssvar(value2)});`,
  rotateY: (value2) => `transform:rotateY(${cssvar(value2)});`,
  rotateZ: (value2) => `transform:rotateZ(${cssvar(value2)});`,
  rotate3d: (value2) => `transform:rotateZ(${makeCommaValues(value2)});`,
  scale: (value2) => `transform:scale(${makeCommaValues(value2)});`,
  scaleX: (value2) => `transform:scaleX(${makeCommaValues(value2)});`,
  scaleY: (value2) => `transform:scaleY(${makeCommaValues(value2)});`,
  scaleZ: (value2) => `transform:scaleZ(${makeCommaValues(value2)});`,
  ratio: (value2) => `& {position:relative;} &:before{content:"";display:block;width:100%;padding-top:${makeRatio(value2)};} & > * {position:absolute;top:0;left:0;width:100%;height:100%;}`,
  gpu: () => `transform:translateZ(0.1px);`,
  "no-border": () => `border:none;outline:none;`,
  "app-region": (value2) => `-webkit-app-region:${value2};`,
  content: (value2) => `content:'${cssvar(value2)}'`,
  "clip-path": (value2) => `clip-path:${cssvar(value2)};-webkit-clip-path:${cssvar(value2)};`,
  "table-layout-fixed": () => `table-layout:fixed;`,
  "float": (value2) => `float:${cssvar(value2)}`,
  "clear": (value2) => `clear:${cssvar(value2)}`,
  "blur": (value2) => `filter:blur(${px(value2)})`,
  "brightness": (value2) => `filter:brightness(${cssvar(value2)})`,
  "contrast": (value2) => `filter:contrast(${cssvar(value2)})`,
  "drop-shadow": (value2) => `filter:drop-shadow(${cssvar(value2)})`,
  "grayscale": (value2) => `filter:grayscale(${cssvar(value2)})`,
  "hue-rotate": (value2) => `filter:hue-rotate(${cssvar(value2)})`,
  "invert": (value2) => `filter:invert(${cssvar(value2)})`,
  "sepia": (value2) => `filter:sepia(${cssvar(value2)})`,
  "saturate": (value2) => `filter:saturate(${cssvar(value2)})`,
  "backdrop-blur": (value2) => `backdrop-filter:blur(${px(value2)})`,
  "backdrop-brightness": (value2) => `backdrop-filter:brightness(${cssvar(value2)})`,
  "backdrop-contrast": (value2) => `backdrop-filter:contrast(${cssvar(value2)})`,
  "backdrop-drop-shadow": (value2) => `backdrop-filter:drop-shadow(${cssvar(value2)})`,
  "backdrop-grayscale": (value2) => `backdrop-filter:grayscale(${cssvar(value2)})`,
  "backdrop-hue-rotate": (value2) => `backdrop-filter:hue-rotate(${cssvar(value2)})`,
  "backdrop-invert": (value2) => `backdrop-filter:invert(${cssvar(value2)})`,
  "backdrop-sepia": (value2) => `backdrop-filter:sepia(${cssvar(value2)})`,
  "backdrop-saturate": (value2) => `backdrop-filter:saturate(${cssvar(value2)})`,
  triangle: (value2) => {
    const [direction, size, angle = 0] = value2.split("/");
    const bd = ["top", "right", "bottom", "left", "top", "right", "bottom", "left"];
    const bdr = bd.slice(bd.indexOf(direction));
    const height = 0.5;
    let css = `width:0;height:0;border:0 solid transparent;`;
    css += "border-" + bdr[1] + "-width:" + Math.round(+size * (-angle + 1) / 2) + "px;";
    css += "border-" + bdr[3] + "-width:" + Math.round(+size * (+angle + 1) / 2) + "px;";
    css += "border-" + bdr[2] + ":" + Math.round(+size * height) + "px solid black;";
    return css;
  },
  elevation: (value2) => {
    const dp = +value2;
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
var PREFIX_PSEUDO_CLASS = {
  "hover:": { media: `(hover:hover)`, selector: `&:hover, &.\\:hover` },
  "active:": { selector: `html &:active, html &.\\:active` },
  "focus:": { selector: `html &:focus, html &.\\:focus` },
  "focus-within:": { selector: `html &:focus-within, html &.\\:focus-within` },
  "checked:": { selector: `html &:checked, html &.\\:checked` },
  "read-only:": { selector: `html &:read-only, html &.\\:read-only` },
  "enabled:": { selector: `html &:enabled, html &.\\:enabled` },
  "disabled:": { selector: `html body &:disabled, html body &.\\:disabled, html body &[disabled]` },
  "group-hover:": { selector: `.group:hover &, html .group.\\:hover &` },
  "group-active:": { selector: `html .group:active &, html .group.\\:active &` },
  "group-focus:": { selector: `html .group:focus &, html .group.\\:focus &` },
  "group-focus-within:": { selector: `html .group:focus-within &, html .group\\:focus-within` },
  "group-checked:": { selector: `html .group:checked &, html .group.\\:checked &` },
  "group-read-only:": { selector: `html .group:read-only &, html .group.\\:read-only &` },
  "group-enabled:": { selector: `html .group:enabled &, html .group.\\:enabled &` },
  "group-disabled:": { selector: `html body .group:disabled &, html body .group[disabled] &, html body .group.disabled &` },
  "placeholder:": { selector: `&::placeholder` },
  "link:": { selector: `&:link` },
  "visited:": { selector: `&:visited` },
  "first:": { selector: `&:first-child` },
  "first-child:": { selector: `&:first-child` },
  "last:": { selector: `&:last-child` },
  "last-child:": { selector: `&:last-child` },
  "odd:": { selector: `&:nth-child(2n+1)` },
  "even:": { selector: `&:nth-child(2n)` }
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
  "tablet:": { media: `(min-device-width:768px) and (max-width:1023.98px)`, selector: `html &` },
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
  "dark:": { selector: `html.dark &` },
  "device": {}
};
var SELECTOR_PREFIX = {
  ">>": (selector) => `& ${selector.slice(2, 0)}`,
  ">": (selector) => `&${selector}`,
  "+": (selector) => `&${selector}`,
  ".": (selector) => `&${selector}, ${selector} &`
};
var SELECTOR_PREFIX_KEYS = Object.keys(SELECTOR_PREFIX).sort((a, b) => stricmp(a, b) || b.length - a.length);
var PREFIX_RULES = __spreadValues(__spreadValues({}, PREFIX_PSEUDO_CLASS), PREFIX_MEDIA_QUERY);
var makeSelector = (prefix) => {
  const key = SELECTOR_PREFIX_KEYS.find((s) => prefix.startsWith(s)) || "";
  const selector = SELECTOR_PREFIX[key] && SELECTOR_PREFIX[key](prefix.slice(0, -1));
  if (selector)
    return { selector };
};
var property = /([^:(]+)/.source;
var value = /(?:\((.*?)\))?/.source;
var delimiter = /(:|$)/.source;
var re_syntax = new RegExp(`${property}${value}${delimiter}`, "g");
var re_syntax_validator = new RegExp(`^(${re_syntax.source})+$`);
var generateAtomicCss = (rules, prefixRules) => {
  const makeRule = (r) => rules[r] || (() => "");
  const priorityTable = Object.fromEntries(Object.entries(rules).map(([key, value2], index) => [key, index]));
  return (atom) => {
    try {
      const isImportant = atom.endsWith("!");
      const important = isImportant ? "!important;" : ";";
      atom = isImportant ? atom.slice(0, -1) : atom;
      if (!re_syntax_validator.test(atom))
        return;
      let $selector = [`.${cssEscape(atom + (isImportant ? "!" : ""))}`];
      let $mediaQuery = [];
      let $postCSS = [];
      let $declaration = "";
      let $priority = 0;
      re_syntax.lastIndex = 0;
      for (; ; ) {
        const chunk = re_syntax.exec(atom);
        if (!chunk)
          break;
        const [input, name, value2, type] = chunk;
        if (type === ":") {
          const prefixRule = makeSelector(input) || prefixRules[name + ":"];
          if (!prefixRule)
            return;
          $selector = $selector.map((s) => {
            var _a;
            return (((_a = prefixRule == null ? void 0 : prefixRule.selector) == null ? void 0 : _a.split(",")) || []).map((selector) => {
              return selector.replace(/&/g, s).trim();
            });
          }).flat();
          if (prefixRule.media) {
            $mediaQuery = [...$mediaQuery, prefixRule.media];
          }
          if (prefixRule.postCSS) {
            $postCSS = [...$postCSS, prefixRule.postCSS];
          }
        } else {
          if (!rules[name])
            return;
          $declaration = makeRule(name)(value2).replace(/;/g, important).trim();
          if (!$declaration)
            return;
          if ($declaration.includes("undefined"))
            return;
          $priority = priorityTable[name + (input.includes("(") ? "(" : "")] || priorityTable[name] || 0;
        }
      }
      const media = $mediaQuery.length ? "@media " + $mediaQuery.join(" and ") : "";
      const selectors = $selector.join(",");
      const rule = $declaration.includes("&") ? $declaration.replace(/&/g, selectors) : selectors + "{" + $declaration + "}";
      return [media ? media + "{" + rule + "}" : rule, $priority];
    } catch (e) {
      return;
    }
  };
};
var sortByRule = (a, b) => a[1] - b[1];
var createGenerateCss = (rules = {}, prefixRules = {}) => {
  rules = __spreadValues(__spreadValues({}, RULES), rules);
  prefixRules = __spreadValues(__spreadValues({}, PREFIX_RULES), prefixRules);
  return (classList) => classList.map(generateAtomicCss(rules, prefixRules)).filter(Boolean).sort(sortByRule).map((a) => a[0]).filter(Boolean);
};
var generateCss = createGenerateCss();

// src/vite-plugin-adorable-css.ts
var ADORABLE_CSS = "@adorable.css";
var VIRTUAL_PATH = "/" + ADORABLE_CSS;
var CHUNK_PLACEHOLDER = "[##_adorable_css_##]";
var DEBOUNCE_TIMEOUT = 250;
var CONFIG = {
  ext: ["svelte", "vue", "tsx", "jsx"],
  rules: {},
  prefixRules: {}
};
var adorableCSS = (config) => {
  config = __spreadValues(__spreadValues({}, CONFIG), config);
  let isHMR = false;
  let timestamp = Date.now();
  const servers = [];
  const entry = Object.create(null);
  const generateCss2 = createGenerateCss(config.rules, config.prefixRules);
  const checkTargetFile = (id) => config.ext.includes(id.split(".").pop() || "");
  const makeStyle = () => {
    const allAtoms = Object.values(entry).flat();
    const styles = generateCss2([...new Set(allAtoms)]);
    return [reset, ...styles].join("\n");
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
      servers.push(_server);
      _server.middlewares.use((req, res, next) => {
        if (!isHMR && req.url && checkTargetFile(req.url)) {
          debounceInvalidate();
        }
        return next();
      });
    },
    resolveId: (id) => id === ADORABLE_CSS || id === VIRTUAL_PATH ? VIRTUAL_PATH : void 0,
    load: (id) => {
      if (id === VIRTUAL_PATH) {
        if (isHMR)
          return makeStyle();
        return new Promise((resolve) => {
          setTimeout(() => resolve(makeStyle()), 500);
        });
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
    async handleHotUpdate({ server, file, read, modules }) {
      if (!checkTargetFile(file))
        return;
      isHMR = true;
      entry[file] = parseAtoms(await read());
      const module2 = server.moduleGraph.getModuleById(VIRTUAL_PATH);
      return [module2, ...modules].filter(Boolean);
    }
  }, {
    name: `${ADORABLE_CSS}:build`,
    apply: "build",
    enforce: "pre",
    resolveId: (id) => id === ADORABLE_CSS || id === VIRTUAL_PATH ? VIRTUAL_PATH : void 0,
    load: (id) => id === VIRTUAL_PATH ? "[##_adorable_css_##]" : void 0,
    transform(code, id) {
      if (!checkTargetFile(id))
        return code;
      entry[id] = parseAtoms(code);
    },
    generateBundle(options, bundle) {
      const adorableCSS2 = makeStyle();
      for (const chunk of Object.values(bundle)) {
        if (!chunk.fileName.endsWith(".css"))
          continue;
        if (chunk.type === "asset" && typeof chunk.source === "string") {
          chunk.source = chunk.source.replace(CHUNK_PLACEHOLDER, adorableCSS2);
        }
      }
    }
  }];
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  adorableCSS
});
