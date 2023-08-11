import {makeAdorableStyleColor} from "../codegen/adorableCSS";
import {makeTailwindStyleColor} from "../codegen/tailwindCSS";

export const OPTIONS = {
  "type": "adorablecss"
}

export const isNumber = (value) => +value === +value
export const px = (value) => isNumber(value) ? Math.round(value) + "px" : value

export const pad = (s):string => s.length === 1 ? "0" + s : s

export const hex = (num:number):string => pad((Math.round(num * 255)).toString(16))


export const makeInt = (num:number) => makeNumber(Math.round(num))

export const makeNumber = (num:number) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0"

export const makeHexColor = (r:number, g:number, b:number, a:number = 1) => {
  let hexColor = [r, g, b].map(hex)
  if (a === 1 && hexColor.every(h => h[0] === h[1])) hexColor = hexColor.map(h => h[0])
  return hexColor.join("")
}

export const makeColor = ({r, g, b}, opacity = 1) => {
  if (OPTIONS.type === "adorablecss") return makeAdorableStyleColor({r, g, b}, opacity)
  if (OPTIONS.type === "tailwindcss") return makeTailwindStyleColor({r, g, b}, opacity)
}


export const makeGradientLinear = (paint:GradientPaint) => {
  // https://github.com/jiangyijie27/figma-copy-css-and-react-style/blob/master/code.ts
  const {gradientTransform, gradientStops} = paint as GradientPaint
  if (!gradientTransform || !gradientStops) {
    return ""
  }
  let gradientTransformData = {
    m00: 1,
    m01: 0,
    m02: 0,
    m10: 0,
    m11: 1,
    m12: 0,
  }
  const delta = gradientTransform[0][0] * gradientTransform[1][1] - gradientTransform[0][1] * gradientTransform[1][0]

  if (delta !== 0) {
    const deltaVal = 1 / delta
    gradientTransformData = {
      m00: gradientTransform[1][1] * deltaVal,
      m01: -gradientTransform[0][1] * deltaVal,
      m02: (gradientTransform[0][1] * gradientTransform[1][2] - gradientTransform[1][1] * gradientTransform[0][2]) * deltaVal,
      m10: -gradientTransform[1][0] * deltaVal,
      m11: gradientTransform[0][0] * deltaVal,
      m12: (gradientTransform[1][0] * gradientTransform[0][2] - gradientTransform[0][0] * gradientTransform[1][2]) * deltaVal,
    }
  }
  const rotationTruthy = gradientTransformData.m00 * gradientTransformData.m11 - gradientTransformData.m01 * gradientTransformData.m10 > 0 ? 1 : -1

  const data = gradientTransformData
  const param = {x: 0, y: 1}
  const rotationData = {
    x: data.m00 * param.x + data.m01 * param.y,
    y: data.m10 * param.x + data.m11 * param.y,
  }
  const rad = makeNumber((Math.atan2(rotationData.y * rotationTruthy, rotationData.x * rotationTruthy) / Math.PI) * 180)
  const gradientColors = gradientStops.map((gradient) => `${makeColor(gradient.color, gradient.color.a)}/${makeNumber(gradient.position * 100)}%`)

  return `linear-gradient(${rad}deg,${gradientColors})`
}

export const fourSideValues = (t, r, b, l):number[] => {
  if (t === r && r === b && b === l) return [t]
  if (t === b && r === l) return [t, r]
  if (t !== b && r === l) return [t, r, b]
  return [t, r, b, l]
}

export const makeFourSideValues = (t, r, b, l) => fourSideValues(t, r, b, l).join("/")

export const stripZero = (value:string) => value.startsWith("0.") ? value.slice(1) : value.startsWith("-0.") ? "-" + value.slice(2) : value

export const unitValue = ({value, unit}):string => {
  value = stripZero("" + makeNumber(value))

  switch (unit) {
    case "PERCENT":
      return value + "%"
  }
  return value
}

export const ab2str = (buf) => String.fromCharCode.apply(null, new Uint16Array(buf))
export const capitalize = (str:string) => str.charAt(0).toUpperCase() + str.slice(1)

export const nl2br = (str:string) => str.replace(/(\r\n|\n|\r|\u2028|\u2029)/g, '<br/>');

export const indent = (code:string) => code ? "\n" + code.split("\n").map(line => "  " + line).join("\n") + "\n" : ""

export const traverse = (node, callback) => {
  callback(node)
  if (node.children && node.children.length) {
    node.children.forEach(child => traverse(child, callback))
  }
}
