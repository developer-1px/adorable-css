var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/core/makeValue.ts
var makeValue_exports = {};
__export(makeValue_exports, {
  cssString: () => cssString,
  cssvar: () => cssvar,
  makeBorder: () => makeBorder,
  makeColor: () => makeColor,
  makeCommaValues: () => makeCommaValues,
  makeFont: () => makeFont,
  makeFontFamily: () => makeFontFamily,
  makeHBox: () => makeHBox,
  makeHEX: () => makeHEX,
  makeHLS: () => makeHLS,
  makeNumber: () => makeNumber,
  makeRGB: () => makeRGB,
  makeRatio: () => makeRatio,
  makeSide: () => makeSide,
  makeTransition: () => makeTransition,
  makeVBox: () => makeVBox,
  makeValues: () => makeValues,
  percentToEm: () => percentToEm,
  px: () => px
});
module.exports = __toCommonJS(makeValue_exports);
var makeNumber = (num) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0";
var cssvar = (value) => String(value).startsWith("--") ? `var(${value})` : value;
var cssString = (value) => String(value).startsWith("--") ? `var(${value})` : `"${value}"`;
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
  return (value || "").split("/").map((value2, index) => {
    if (value2 === "-")
      return;
    if (String(value2).startsWith("--"))
      return `var(${value2})`;
    switch (index) {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cssString,
  cssvar,
  makeBorder,
  makeColor,
  makeCommaValues,
  makeFont,
  makeFontFamily,
  makeHBox,
  makeHEX,
  makeHLS,
  makeNumber,
  makeRGB,
  makeRatio,
  makeSide,
  makeTransition,
  makeVBox,
  makeValues,
  percentToEm,
  px
});
