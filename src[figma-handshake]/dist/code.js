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

// ../src[adorable-css]/src/parser.ts
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

// ../src[adorable-css]/src/cssEscape.ts
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

// ../src[adorable-css]/src/makeValue.ts
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

// ../src[adorable-css]/src/rules.ts
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
  ".": (selector) => `&${selector}, ${selector} &`,
  ">>": (selector) => `& ${selector.slice(2, 0)}`,
  ">": (selector) => `&${selector}`,
  "+": (selector) => `&${selector}`
};

// ../src[adorable-css]/src/atomizer.ts
var stricmp = (a, b) => a.localeCompare(b);
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
var stripZero = (value2) => value2.startsWith("0.") ? value2.slice(1) : value2.startsWith("-0.") ? "-" + value2.slice(2) : value2;
var unitValue = ({ value: value2, unit }) => {
  value2 = stripZero("" + makeNumber2(value2));
  switch (unit) {
    case "PERCENT":
      return value2 + "%";
  }
  return value2;
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
  const addClass = (prop, value2) => cls.push(`${prop}${value2 ? "(" + value2 + ")" : ""}`);
  return { addClass };
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
  else if ((parent == null ? void 0 : parent.layoutMode) === "VERTICAL" && (layoutAlign === "STRETCH" || width === parent.width))
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
function addClassBorder(node, addClass) {
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
}
var everyChildrenHasStretchVbox = (node) => {
  var _a;
  return (_a = node.children) == null ? void 0 : _a.every((c) => c.layoutAlign === "STRETCH" || c.width === node.width);
};
var generateFrame = async (node, depth) => {
  var _a;
  const cls = [];
  const { addClass } = createClassBuilder(cls);
  const hasChildren = ((_a = node.children) == null ? void 0 : _a.filter((child) => child.visible).length) > 1;
  addClassWidth(node, addClass);
  addClassHeight(node, addClass);
  const { layoutGrow, layoutAlign } = node;
  const { layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height } = node;
  if (layoutMode === "HORIZONTAL") {
    if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
      addClass("hbox");
      addClass("pack");
    } else {
      const value2 = [];
      if (counterAxisSizingMode === "AUTO" && layoutAlign === "INHERIT") {
        if (primaryAxisAlignItems === "MAX")
          value2.push("right");
        else if (primaryAxisAlignItems === "CENTER")
          value2.push("right");
      } else {
        if (counterAxisAlignItems === "MIN")
          value2.push("top");
        else if (counterAxisAlignItems === "MAX")
          value2.push("bottom");
        if (primaryAxisAlignItems === "MAX")
          value2.push("right");
        else if (primaryAxisAlignItems === "CENTER")
          value2.push("right");
      }
      addClass("hbox", value2.join("+"));
    }
  } else if (layoutMode === "VERTICAL") {
    if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
      addClass("vbox");
      addClass("pack");
    } else {
      const value2 = [];
      if (everyChildrenHasStretchVbox(node)) {
      } else if (counterAxisAlignItems === "CENTER")
        value2.push("center");
      else if (counterAxisAlignItems === "MAX")
        value2.push("right");
      if (primaryAxisAlignItems === "MAX")
        value2.push("bottom");
      addClass("vbox", value2.join("+"));
      if (primaryAxisAlignItems === "CENTER")
        addClass("pack");
    }
  }
  if (layoutMode !== "NONE") {
    if (primaryAxisAlignItems === "SPACE_BETWEEN")
      addClass("space-between");
    const { itemSpacing } = node;
    if (hasChildren && itemSpacing > 0 && itemSpacing < width) {
      layoutMode === "HORIZONTAL" ? addClass("hgap", itemSpacing) : addClass("vgap", itemSpacing);
    }
  }
  if (layoutMode !== "NONE") {
    const { paddingTop, paddingRight, paddingBottom, paddingLeft } = node;
    if (paddingTop > 0 || paddingRight > 0 || paddingBottom > 0 || paddingLeft > 0)
      addClass("p", makeFourSideValues(paddingTop, paddingRight, paddingBottom, paddingLeft));
  }
  const { topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = node;
  if (topLeftRadius > 0 || topRightRadius > 0 || bottomRightRadius > 0 || bottomLeftRadius > 0)
    cls.push(`r(${makeFourSideValues(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius)})`);
  const bg = node.fills.filter((fill) => fill.visible)[0];
  if ((bg == null ? void 0 : bg.type) === "SOLID") {
    addClass("bg", makeColor2(bg.color, bg.opacity));
  }
  addClassBorder(node, addClass);
  if (node.effectStyleId) {
    const style = figma.getStyleById(node.effectStyleId);
    addClass(style.name.toLowerCase());
  }
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
  if (node.type === "ELLIPSE")
    addClass("r", "100%");
  else {
    const { topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = node;
    if (topLeftRadius > 0 || topRightRadius > 0 || bottomRightRadius > 0 || bottomLeftRadius > 0)
      cls.push(`r(${makeFourSideValues(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius)})`);
  }
  const bg = node.fills.filter((fill) => fill.visible)[0];
  if ((bg == null ? void 0 : bg.type) === "SOLID") {
    addClass("bg", makeColor2(bg.color, bg.opacity));
  }
  addClassBorder(node, addClass);
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
  return (_a = node.children) == null ? void 0 : _a.find((node2) => node2.type === "VECTOR" || node2.type === "BOOLEAN_OPERATION");
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
  else if (node.type === "COMPONENT" || node.type === "FRAME" || node.type === "LINE")
    code = await generateFrame(node, depth);
  else if (node.type === "RECTANGLE" || node.type === "ELLIPSE")
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
