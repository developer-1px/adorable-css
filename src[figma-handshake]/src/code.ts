import {generateCss} from "../../src[adorable-css]/src/atomizer"
import {parseAtoms} from "../../src[adorable-css]/src/parser"
import {ab2str, capitalize, makeColor, makeFourSideValues, makeInt, makeNumber, unitValue} from "./util"

type AddClass = (prop, value?) => number

// @TODO: TBD
const isReact = false
const CLASS_NAME = isReact ? "className" : "class"
const COMMENT_START = isReact ? "{/*" : "<!--"
const COMMENT_END = isReact ? "*/}" : "-->"

figma.showUI(__html__, {
  width: 300,
  height: 300,
})

const createClassBuilder = (cls:string[]) => {
  const addClass = (prop, value?) => cls.push(`${prop}${value ? "(" + value + ")" : ""}`)
  return {addClass, cls}
}

const generateChild = async (depth, children, callback) => {
  const contents = await Promise.all((children || []).map(params => generateCode(params, depth + 1)))
  const content = contents.join("")
  return callback(content)
}

const wrapInstance = (node, code) => {

  const mainComponent = node.mainComponent
  const mainComponentSet = mainComponent.parent?.type === "COMPONENT_SET" ? mainComponent.parent : mainComponent

  const name = capitalize(mainComponentSet.name.trim().replace(/\s*\/\s*/g, "_").replace(/-|\s+/g, "_").replace(/\s+/g, "_"))
  return `\n${COMMENT_START} <${name}/> ${COMMENT_END}\n${code}\n${COMMENT_START} </${name}> ${COMMENT_END}\n`
}

const generateGroup = async (node, depth) => await generateChild(depth, node.children, content => content)

const generateComponentSet = async (node, depth) => {
  const child = await generateChild(depth, node.children, content => content)
  return `<div ${CLASS_NAME}="vbox gap(20)">${child}</div>`
}


const generateInstance = async (node, depth) => {
  const code = await generateFrame(node, depth)
  return wrapInstance(node, code)
}

const addClassWidth = (node, addClass:AddClass) => {
  const {parent, layoutGrow, layoutAlign} = node
  const {layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height} = node

  if (node === figma.currentPage.selection[0]) addClass("w", makeInt(width))
  else if (parent?.layoutMode === "VERTICAL" && layoutAlign === "STRETCH") !everyChildrenHasStretchVbox(node.parent) && addClass("w", "fill")
  else if (parent?.layoutMode === "HORIZONTAL" && layoutGrow) addClass("flex")
  else if (!layoutMode || layoutMode === "NONE") addClass("w", makeInt(width))
  else if (layoutMode === "HORIZONTAL" && primaryAxisSizingMode === "FIXED") addClass("w", makeInt(width))
  else if (layoutMode === "VERTICAL" && counterAxisSizingMode === "FIXED") addClass("w", makeInt(width))
}

const addClassHeight = (node, addClass:AddClass) => {
  const {layoutGrow, layoutAlign} = node
  const {layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height} = node

  if (node === figma.currentPage.selection[0]) addClass("h", makeInt(height))
  else if (node.parent && node.parent.layoutMode === "HORIZONTAL" && layoutAlign === "STRETCH") addClass("h", "fill")
  else if (node.parent && node.parent.layoutMode === "VERTICAL" && layoutGrow) addClass("flex")
  else if (!layoutMode || layoutMode === "NONE") addClass("h", makeInt(height))
  else if (layoutMode === "HORIZONTAL" && counterAxisSizingMode === "FIXED") addClass("h", makeInt(height))
  else if (layoutMode === "VERTICAL" && primaryAxisSizingMode === "FIXED") addClass("h", makeInt(height))
}


const addClassBorder = (node, addClass:AddClass) => {
  try {
    const {strokes, strokeAlign, strokeWeight} = node

    const border = strokes.filter(stroke => stroke.visible)[0]

    // @ts-ignore
    if (border && border.color && strokeWeight > 0) {

      if (strokeAlign === "OUTSIDE") {
        addClass("ring", [strokeWeight > 1 ? strokeWeight : null, makeColor(border.color, border.opacity)].filter(Boolean).join("/"))
      }
      else {
        // @ts-ignore
        addClass("b", `${makeColor(border.color, border.opacity)}`)
        if (strokeWeight > 1) {
          addClass("bw", node.strokeWeight)
        }
      }
    }
  }
  catch (e) {}
}

const addClassBorderRadius = (node, addClass:AddClass) => {
  try {
    if (node.type === "ELLIPSE") addClass("r", "100%")
    const {topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius} = node
    if (topLeftRadius > 0 || topRightRadius > 0 || bottomRightRadius > 0 || bottomLeftRadius > 0) {
      const size = Math.max(node.width, node.height)
      if (topLeftRadius > size && topRightRadius > size && bottomRightRadius > size && bottomLeftRadius > size) {
        addClass(`r(100%)`)
      }
      else {
        addClass(`r(${makeFourSideValues(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius)})`)
      }
    }
  }
  catch (e) {}
}

const addEffectStyle = (node, addClass:AddClass) => {
  if (node.effectStyleId) {
    const style = figma.getStyleById(node.effectStyleId)
    addClass(style.name.toLowerCase())
  }
}

const makeGradientLinear = (paint:GradientPaint) => {
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
  const gradientColors = gradientStops.map((gradient) => `${makeColor(gradient.color)}/${makeNumber(gradient.position * 100)}%`)

  return `linear-gradient(${rad}deg,${gradientColors})`
}


const everyChildrenHasStretchVbox = (node) => node.children?.every(c => c.layoutAlign === "STRETCH" || c.width === node.width)

const generateFrame = async (node:ComponentNode|FrameNode, depth) => {
  const {addClass, cls} = createClassBuilder([])

  // Constraints
  if (node.parent?.type === "FRAME" && node.parent?.layoutMode === "NONE") {
    addClass("absolute")

    //"MIN" | "CENTER" | "MAX" | "STRETCH" | "SCALE"
    switch (node.constraints.vertical) {
      case "MIN":
        addClass(`top(${node.y})`)
        break
      case "MAX":
        addClass(`bottom(${node.parent.height - node.y - node.height})`)
        break
    }

    switch (node.constraints.horizontal) {
      case "MIN":
        addClass(`left(${node.x})`)
        break
      case "MAX":
        addClass(`right(${node.parent.width - node.x - node.width})`)
        break
    }
  }

  // Layout
  const numChildren = node.children?.filter(child => child.visible).length
  const hasChildren = numChildren > 0
  const hasMoreChildren = numChildren > 1
  const {layoutGrow, layoutAlign} = node
  const {layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height} = node

  if (hasChildren) {
    if (layoutMode === "HORIZONTAL") {
      if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
        if (numChildren > 1) addClass("hbox")
        addClass("pack")
      }
      else {
        const value = []

        // H - Hug contents
        if (counterAxisSizingMode === "AUTO" && layoutAlign === "INHERIT") {
          if (primaryAxisAlignItems === "MAX") value.push("right")
        }

        // H - Fixed || Fill
        else {
          if (counterAxisAlignItems === "MIN") value.push("top")
          else if (counterAxisAlignItems === "MAX") value.push("bottom")
          if (primaryAxisAlignItems === "MAX") value.push("right")
        }
        addClass("hbox", value.join("+"))
        if (primaryAxisAlignItems === "CENTER") addClass("pack")
      }
    }

    else if (layoutMode === "VERTICAL") {
      if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
        if (numChildren > 1) addClass("vbox")
        addClass("pack")
      }
      else {
        // V - Hug contents
        const value = []

        if (everyChildrenHasStretchVbox(node)) {}
        else if (counterAxisAlignItems === "CENTER") value.push("center")
        else if (counterAxisAlignItems === "MAX") value.push("right")
        if (primaryAxisAlignItems === "CENTER") value.push("middle")
        if (primaryAxisAlignItems === "MAX") value.push("bottom")
        addClass("vbox", value.join("+"))
      }
    }
    else {
      addClass("relative")
    }

    // gap
    if (hasMoreChildren) {
      if (layoutMode !== "NONE") {
        if (primaryAxisAlignItems === "SPACE_BETWEEN") addClass("space-between")

        const {itemSpacing} = node
        if (hasChildren && itemSpacing > 0 && itemSpacing < width) {
          layoutMode === "HORIZONTAL" ? addClass("hgap", itemSpacing) : addClass("vgap", itemSpacing)
        }
      }
    }

    // padding
    if (layoutMode !== "NONE") {
      const {paddingTop, paddingRight, paddingBottom, paddingLeft} = node
      if (paddingTop > 0 || paddingRight > 0 || paddingBottom > 0 || paddingLeft > 0) addClass("p", makeFourSideValues(paddingTop, paddingRight, paddingBottom, paddingLeft))
    }
  }

  // width
  addClassWidth(node, addClass)

  // height
  addClassHeight(node, addClass)

  // bg
  try {
    const bg = node.fills.filter(fill => fill.visible)[0]
    if (bg?.type === "SOLID") {
      addClass("bg", makeColor(bg.color, bg.opacity))
    }
    else if (bg?.type === "GRADIENT_LINEAR") {
      addClass("bg", makeGradientLinear(bg))
    }
  }
  catch (e) {}

  // Radius
  addClassBorderRadius(node, addClass)

  // border
  addClassBorder(node, addClass)

  // effectStyle
  addEffectStyle(node, addClass)


  // opacity
  if (node.opacity !== 1) addClass("opacity", makeNumber(node.opacity))

  // overflow
  if (hasChildren && node.clipsContent) addClass("clip")

  const className = cls.join(" ")
  return await generateChild(depth, node.children, content => `<div ${CLASS_NAME}="${className}">\n${content}</div>`)
}

const generateShape = async (node) => {

  const cls = []
  const {addClass} = createClassBuilder(cls)

  const hasChildren = node.children?.filter(child => child.visible).length > 1

  // width
  addClassWidth(node, addClass)

  // height
  addClassHeight(node, addClass)

  // Radius
  addClassBorderRadius(node, addClass)

  // bg
  const bg = node.fills.filter(fill => fill.visible)[0]
  if (bg?.type === "SOLID") {
    addClass("bg", makeColor(bg.color, bg.opacity))
  }

  // border
  addClassBorder(node, addClass)

  // effectStyle
  addEffectStyle(node, addClass)

  const className = cls.join(" ")
  return `<div ${CLASS_NAME}="${className}"></div>`
}


const generateText = async (node) => {
  const cls = []
  const {addClass} = createClassBuilder(cls)

  const {layoutGrow} = node
  if (layoutGrow === 1) addClass("flex")

  const {textAutoResize, width, height} = node
  switch (textAutoResize) {
    case "WIDTH_AND_HEIGHT":
      break

    case "HEIGHT":
      addClass("w", makeInt(width))
      break

    case "NONE":
      addClass("w", makeInt(width))
      addClass("h", makeInt(height))
      break
  }

  // opacity
  const font = [node.fontSize]
  // @ts-ignore
  if (node.lineHeight?.value && node.lineHeight?.unit !== "AUTO") {
    font.push(unitValue(node.lineHeight))
  }

  // @ts-ignore
  if (node.letterSpacing?.value) {
    if (font.length === 1) font.push("-")
    font.push(unitValue(node.letterSpacing))
  }

  addClass("font", font.filter(Boolean).map(v => v.toString()).join("/"))

  // fontName

  // @ts-ignore
  if (node.fontName?.style) {
    switch (node.fontName?.style.toLowerCase()) {
      case "regular":
        break

      case "black": {
        addClass("bolder")
        break
      }

      default: {
        addClass(node.fontName?.style.toLowerCase())
      }
    }
  }

  // fill
  const fill = node.fills[0]
  if (fill?.visible && fill?.type === "SOLID") {
    addClass("c", makeColor(fill.color, fill.opacity))
  }

  if (node.opacity !== 1) addClass("opacity", makeNumber(node.opacity))

  switch (node.textAlignHorizontal) {
    case "CENTER": {
      addClass("text-center")
      break
    }
    case "RIGHT": {
      addClass("text-right")
      break
    }
    case "JUSTIFIED": {
      addClass("text-justify")
      break
    }
  }

  const className = cls.join(" ")
  return `<div ${CLASS_NAME}="${className}">${node.characters}</div>`
}


const isSVG = (node) => {
  return node.type === "GROUP" && node.children?.every(node => node.type === "VECTOR" || node.type === "BOOLEAN_OPERATION")
}

const generateCode = async (node:SceneNode, depth:number = 0) => {
  if (node.visible === false) return ""

  let code = ""

  if (node.exportSettings.length > 0 || (node.type === "INSTANCE" && node.mainComponent.exportSettings.length > 0) || isSVG(node)) {
    try {
      const svgCodeArrayBuffer = await node.exportAsync({format: "SVG", svgIdAttribute: false})
      const svgCode = ab2str(svgCodeArrayBuffer)
      code = node.type === "INSTANCE" ? wrapInstance(node, svgCode) : svgCode
    }
    catch (e) {}
  }

  else if (node.type === "GROUP") code = await generateGroup(node, depth)
  else if (node.type === "INSTANCE") code = await generateInstance(node, depth)
  else if (node.type === "COMPONENT" || node.type === "FRAME") code = await generateFrame(node, depth)
  else if (node.type === "RECTANGLE" || node.type === "ELLIPSE" || node.type === "LINE") code = await generateShape(node)
  else if (node.type === "TEXT") code = await generateText(node)
  else if (node.type === "COMPONENT_SET") code = await generateComponentSet(node, depth)

  return Array(depth).fill("  ").join("") + code + "\n"
}

const generate = async () => {
  const selection = figma.currentPage.selection

  if (!selection.length) return

  const node = selection[0]
  console.log(node.type)
  console.log(node)

  console.warn("!!!!! layoutGrow, layoutAlign", node.layoutGrow, node.layoutAlign)


  const record = {}

  traverse(node, (node) => {
    if (node.type === "INSTANCE") {
      const mainComponent = node.mainComponent
      const mainComponentSet = mainComponent.parent?.type === "COMPONENT_SET" ? mainComponent.parent : mainComponent
      record[node.mainComponent.id] = mainComponentSet.name
    }
  })

  console.log(record)

  const code = await generateCode(node, 0)

  figma.showUI(__html__, {
    width: Math.min(1440, (Math.floor(node.width) || 0) + 40 + 40 + 240),
    height: Math.min(1024, (Math.floor(node.height) || 0) + 40 + 40),
  })

  const css = generateCss(parseAtoms(code)).join("\n")

  figma.ui.postMessage({code, css})
}

const traverse = (node, callback) => {
  callback(node)
  if (node.children && node.children.length) {
    node.children.forEach(child => traverse(child, callback))
  }
}

generate()
figma.on("selectionchange", generate)
figma.on("currentpagechange", generate)