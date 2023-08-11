export const pad = (s):string => s.length === 1 ? "0" + s : s

export const hex = (num:number):string => pad((Math.round(num * 255)).toString(16))


export const makeInt = (num:number) => makeNumber(Math.round(num))

export const makeNumber = (num:number) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0"

export const makeHexColor = (r:number, g:number, b:number) => {
  let hexColor = [r, g, b].map(hex)
  if (hexColor.every(h => h[0] === h[1])) hexColor = hexColor.map(h => h[0])
  return hexColor.join("")
}

export const makeColor = ({r, g, b}, opacity = 1) => `#${makeHexColor(r, g, b)}${opacity === 1 ? "" : makeNumber(opacity)}`

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