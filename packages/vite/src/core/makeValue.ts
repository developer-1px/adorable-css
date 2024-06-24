export const splitValues = (value:string, project = cssvar) => {
  if (value.includes("|")) return value.split("|").map(project)
  return value.split("/").map(project)
}
export const makeValues = (value:string, project = cssvar) => splitValues(value, project).join(" ")

export const makeCommaValues = (value:string, project = cssvar) => value.split(",").map(project).join(",")

export const makeSide = (value:string) => makeValues(value, px)

export const makeRatio = (value:string) => {
  const [w, h] = value.split(/[:/]/)
  return (+h / +w * 100).toFixed(2) + "%"
}

export const makeNumber = (num:number) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0"

export const cssvar = (value:string|number) => String(value).startsWith("--") ? `var(${value})` : value

export const cssString = (value:string|number) => String(value).startsWith("--") ? `var(${value})` : `"${value}"`

// <length> default: px
export const px = (value:string|number) => {
  if (value === undefined || value === null) throw new Error("px: value is undefined")
  if (value === 0 || value === "0") return 0

  const v = String(value)

  // --css-var
  if (v.startsWith("--")) return cssvar("" + value)

  // 1/6
  const [n, m] = v.split("/")
  if (+n > 0 && +m > 0) return makeNumber(+n / +m * 100) + "%"

  // calc
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return "calc(" + v.replace(/[-+]/g, (a) => ` ${a} `) + ")"
  }

  // number
  return +value === +value ? value + "px" : value
}

export const deg = (value:string|number) => {
  if (value === undefined || value === null) throw new Error("deg: value is undefined")
  if (value === 0 || value === "0") return 0

  const v = String(value)

  // --css-var
  if (v.startsWith("--")) return cssvar("" + value)

  // calc
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return "calc(" + v.replace(/[-+]/g, (a) => ` ${a} `) + ")"
  }

  // number
  return +value === +value ? value + "deg" : value
}

export const rpx = (value:string|number) => {
  if (value === "fill") return "9999px"
  return px(value)
}

export const percentToEm = (value:string) => {
  if (value.endsWith("%")) return +(value.slice(0, -1)) / 100 + "em"
  return px(value)
}

export const makeHEX = (value:string) => {
  const [rgb, a] = value.split(".")
  if (a && rgb.length === 4) return "rgba(" + rgb.slice(1).split("").map(value => parseInt(value + value, 16)).join(",") + ",." + a + ")"
  if (a) return "rgba(" + [rgb.slice(1, 3), rgb.slice(3, 5), rgb.slice(5, 7)].map(value => parseInt(value, 16)).join(",") + ",." + a + ")"
  return value
}

export const makeHLS = (value:string) => {
  const [h, s, l, a] = value.split(",")
  return "hsl" + (a ? "a" : "") + "(" + [h, s, l, a].filter(Boolean).map(cssvar).join() + ")"
}

export const makeRGB = (value:string) => {
  const [r, g, b, a] = value.split(",")
  return "rgb" + (a ? "a" : "") + "(" + [r, g, b, a].filter(Boolean).map(cssvar).join() + ")"
}

export const makeColor = (value = "transparent") => {
  if (value === "-") return "transparent"
  if (value === "transparent") return "transparent"
  if (value.startsWith("--")) return `var(${value})`

  // c(255,255,155) or c(100%,0,0)
  if (value.split(",").every(v => parseFloat(v) >= 0)) {
    // HSL, HSLA (222,100%,50%)
    if (value.includes("%")) {
      return makeHLS(value)
    }
    // RGB, RGBA
    return makeRGB(value)
  }

  return value
}

export const makeFont = (value:string) => {
  if (!value) throw new Error("makeFont: value is undefined")

  return (value || "").split("/").map((value, index) => {
    if (value === "-") return
    if (String(value).startsWith("--")) return `var(${value});`

    switch (index) {
      case 0: {return `font-size:${px(value)};`}
      case 1: {return `line-height:${+value < 4 ? makeNumber(+value) : px(value)};`}
      case 2: {return `letter-spacing:${px(percentToEm(value))};`}
    }
  }).filter(Boolean).join("")
}


export const makeFontFamily = (value:string) => `font-family:${value};font-family:var(--${value}, ${value});`

// @TODO:
export const makeBorder = (value:string) => {
  if (!value || value === "none" || value === "0" || value === "-") return "none"

  const borderStyles = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]

  let hasWidth = false
  let hasStyle = false

  const values = splitValues(value, value => {
    if (+value > 0) {
      hasWidth = true
      return px(value)
    }

    if (borderStyles.includes(String(value))) {
      hasStyle = true
      return value
    }

    return makeColor(String(value))
  })

  if (!hasWidth) values.unshift("1px")
  if (!hasStyle) values.unshift("solid")

  return values.join(" ")
}

export const makeHBoxWithSemi = (value = "") => {
  const values = value.split(/[+/|]/)

  const result = values.map(v => {
    switch (v) {
      case "top": {return "align-items:flex-start;"}
      case "middle": {return "align-items:center;"}
      case "bottom": {return "align-items:flex-end;"}
      case "fill": {return "align-items:stretch;"}
      case "stretch": {return "align-items:stretch;"}
      case "left": {return values.includes("reverse") ? "justify-content:flex-end;" : ""}
      case "right": {return !values.includes("reverse") ? "justify-content:flex-end;" : ""}
      case "reverse": {return "flex-direction:row-reverse;"}
      case "center": {return "justify-content:center;"}
    }
    return /^[\d.]+$/.test(v) ? `gap:${px(v)};` : ""
  })

  if (!result.find(r => r.startsWith("align-items:"))) {
    result.unshift("align-items:center;")
  }

  return [...new Set(result)].join("")
}

export const makeVBoxWithSemi = (value = "") => {
  const values = value.split(/[+/|]/)

  const result = values.map(v => {
    switch (v) {
      case "left": {return "align-items:flex-start;"}
      case "center": {return "align-items:center;"}
      case "right": {return "align-items:flex-end;"}
      case "fill": {return "align-items:stretch;"}
      case "top": {return values.includes("reverse") ? "justify-content:flex-end;" : ""}
      case "middle": {return "justify-content:center;"}
      case "bottom": {return !values.includes("reverse") ? "justify-content:flex-end;" : ""}
      case "reverse": {return "flex-direction:column-reverse;"}
    }
    return /^[\d.]+$/.test(v) ? `gap:${px(v)};` : ""
  })

  if (!result.find(r => r.startsWith("align-items:"))) {
    result.unshift("align-items:stretch;")
  }

  return [...new Set(result)].join("")
}

export const makeHBoxFill = () => ":where(&>*){flex-shrink:0;--w-grow:1;--w-shrink:1;--w-align:initial;--h-grow:initial;--h-shrink:0;--h-align:stretch;}"
export const makeVBoxFill = () => ":where(&>*){flex-shrink:0;--h-grow:1;--h-shrink:1;--h-align:initial;--w-grow:initial;--w-shrink:0;--w-align:stretch;}"

export const makeBoxFill = (value:string) => {
  const val = value.split(/\s+/)
  if (val.includes("row")) return makeHBoxFill()
  if (val.includes("column")) return makeVBoxFill()
  return ""
}

export const makeTextBox = (value = "") => {
  const values = value.split("+")

  const result = values.map(v => {
    switch (v) {
      case "left": {return "text-align:left;"}
      case "center": {return "text-align:center;"}
      case "right": {return "text-align:right;"}
      case "justify": {return "text-align:justify;"}
      case "top": {return "display:flex;flex-flow:column;justify-content:flex-start;"}
      case "middle": {return "display:flex;flex-flow:column;justify-content:center;"}
      case "bottom": {return "display:flex;flex-flow:column;justify-content:flex-end;"}
      case "pack": {return "display:flex;flex-flow:column;align-items:center;justify-content:center;text-align:center;"}
    }
    return ""
  })

  return [...new Set(result)].join("")
}

export const makeTransition = (value:string) => {
  if (!/\d/.test(value)) return value
  if (!value.includes("=")) return makeValues(value)
  return value.split(/[/|]/).map(item => item.replace("=", " ")).join(",")
}

export const makePosition1 = (value:string) => {
  const values = value.split(" ").map(px)
  values[1] = values[1] || values[0]
  values[2] = values[2] || values[0]
  values[3] = values[3] || values[1] || values[0]

  return ["top", "right", "bottom", "left"]
  .map((prop, index) => {
    const value = values[index]
    if (!value || value === "-") return
    return `${prop}:${px(value)};`
  })
  .filter(Boolean)
  .join("")
}

export const makePosition2X = (x:string) => {
  if (x.startsWith("center")) {
    const left = x === "center" ? "50%" : `calc(50% + ${x.slice(6)})`
    return `left:${left};--a-translate-x:-50%;transform:var(--a-transform);`
  }
  const [left, right] = x.split("~")
  const res = []
  res.push(left ? `left:${px(left)};` : "")
  res.push(right ? `right:${px(right)};` : "")
  return res.join("")
}

export const makePosition2Y = (y:string) => {
  if (y.startsWith("center")) {
    const top = y === "center" ? "50%" : `calc(50% + ${y.slice(6)})`
    return `top:${top};--a-translate-y:-50%;transform:var(--a-transform);`
  }
  const [top, bottom] = y.split("~")

  const res = []
  res.push(top ? `top:${px(top)};` : "")
  res.push(bottom ? `bottom:${px(bottom)};` : "")
  return res.join("")
}

export const makePosition2 = (value:string) => {
  const [x, y] = value.split(",")
  return makePosition2X(x) + makePosition2Y(y)
}

export const makePositionWithSemi = (value?:string) => {
  if (!value) return ""
  if (value === "pack" || value === "center") {
    return "left:50%;top:50%;transform:translate(-50%,-50%);"
  }
  return (value.includes(",") ? makePosition2(value) : makePosition1(value)) + ";"
}