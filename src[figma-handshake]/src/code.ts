import {parseAtoms} from "../../src[adorable-css]/src/parser"
import {generateCss} from "../../src[adorable-css]/src/atomizer"
import {ab2str, capitalize, makeColor, makeFourSideValues, makeInt, makeNumber, unitValue} from "./util"

figma.showUI(__html__, {
  width: 300,
  height: 300,
})

const createClassBuilder = (cls) => {
  const addClass = (prop, value?) => cls.push(`${prop}${value ? "(" + value + ")" : ""}`)
  return {addClass}
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
  return `\n<!-- <${name}/> -->\n${code}\n<!-- </${name}> -->\n`
}

const generateGroup = async (node, depth) => await generateChild(depth, node.children, content => content)

const generateComponentSet = async (node, depth) => {
  const child = await generateChild(depth, node.children, content => content)
  return `<div class="vbox gap(20)">${child}</div>`
}


const generateInstance = async (node, depth) => {
  const code = await generateFrame(node, depth)
  return wrapInstance(node, code)
}

const addClassWidth = (node, addClass) => {
  const {parent, layoutGrow, layoutAlign} = node
  const {layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height} = node

  if (node === figma.currentPage.selection[0]) addClass("w", makeInt(width))
  else if (parent?.layoutMode === "VERTICAL" && (layoutAlign === "STRETCH" || width === parent.width)) !everyChildrenHasStretchVbox(node.parent) && addClass("w", "fill")
  else if (parent?.layoutMode === "HORIZONTAL" && layoutGrow) addClass("flex")
  else if (!layoutMode || layoutMode === "NONE") addClass("w", makeInt(width))
  else if (layoutMode === "HORIZONTAL" && primaryAxisSizingMode === "FIXED") addClass("w", makeInt(width))
  else if (layoutMode === "VERTICAL" && counterAxisSizingMode === "FIXED") addClass("w", makeInt(width))
}

const addClassHeight = (node, addClass) => {
  const {layoutGrow, layoutAlign} = node
  const {layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height} = node

  if (node === figma.currentPage.selection[0]) addClass("h", makeInt(height))
  else if (node.parent && node.parent.layoutMode === "HORIZONTAL" && layoutAlign === "STRETCH") addClass("h", "fill")
  else if (node.parent && node.parent.layoutMode === "VERTICAL" && layoutGrow) addClass("flex")
  else if (!layoutMode || layoutMode === "NONE") addClass("h", makeInt(height))
  else if (layoutMode === "HORIZONTAL" && counterAxisSizingMode === "FIXED") addClass("h", makeInt(height))
  else if (layoutMode === "VERTICAL" && primaryAxisSizingMode === "FIXED") addClass("h", makeInt(height))
}


function addClassBorder(node, addClass:(prop, value?) => number) {
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


const everyChildrenHasStretchVbox = (node) => node.children?.every(c => c.layoutAlign === "STRETCH" || c.width === node.width)


const generateFrame = async (node, depth) => {
  const cls = []
  const {addClass} = createClassBuilder(cls)

  const hasChildren = node.children?.filter(child => child.visible).length > 1


  // width
  addClassWidth(node, addClass)

  // height
  addClassHeight(node, addClass)


  const {layoutGrow, layoutAlign} = node
  const {layoutMode, primaryAxisAlignItems, primaryAxisSizingMode, counterAxisAlignItems, counterAxisSizingMode, width, height} = node

  if (layoutMode === "HORIZONTAL") {
    if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
      addClass("hbox")
      addClass("pack")
    }
    else {
      const value = []

      // V - Hug contents
      if (counterAxisSizingMode === "AUTO" && layoutAlign === "INHERIT") {
        if (primaryAxisAlignItems === "MAX") value.push("right")
        else if (primaryAxisAlignItems === "CENTER") value.push("right")
      }

      // V - Fixed || Fill
      else {
        if (counterAxisAlignItems === "MIN") value.push("top")
        else if (counterAxisAlignItems === "MAX") value.push("bottom")
        if (primaryAxisAlignItems === "MAX") value.push("right")
        else if (primaryAxisAlignItems === "CENTER") value.push("right")
      }
      addClass("hbox", value.join("+"))
    }
  }

  else if (layoutMode === "VERTICAL") {
    if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
      addClass("vbox")
      addClass("pack")
    }
    else {

      // V - Hug contents
      const value = []

      if (everyChildrenHasStretchVbox(node)) {}
      // else if (counterAxisAlignItems === "MIN") value.push("left")
      else if (counterAxisAlignItems === "CENTER") value.push("center")
      else if (counterAxisAlignItems === "MAX") value.push("right")

      if (primaryAxisAlignItems === "MAX") value.push("bottom")
      addClass("vbox", value.join("+"))
      if (primaryAxisAlignItems === "CENTER") addClass("pack")
    }
  }


  // gap
  if (layoutMode !== "NONE") {
    if (primaryAxisAlignItems === "SPACE_BETWEEN") addClass("space-between")

    const {itemSpacing} = node
    if (hasChildren && itemSpacing > 0 && itemSpacing < width) {
      layoutMode === "HORIZONTAL" ? addClass("hgap", itemSpacing) : addClass("vgap", itemSpacing)
    }
  }

  // padding
  if (layoutMode !== "NONE") {
    const {paddingTop, paddingRight, paddingBottom, paddingLeft} = node
    if (paddingTop > 0 || paddingRight > 0 || paddingBottom > 0 || paddingLeft > 0) addClass("p", makeFourSideValues(paddingTop, paddingRight, paddingBottom, paddingLeft))
  }


  // Radius
  const {topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius} = node
  if (topLeftRadius > 0 || topRightRadius > 0 || bottomRightRadius > 0 || bottomLeftRadius > 0) cls.push(`r(${makeFourSideValues(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius)})`)


  // bg
  const bg = node.fills.filter(fill => fill.visible)[0]
  if (bg?.type === "SOLID") {
    addClass("bg", makeColor(bg.color, bg.opacity))
  }

  // border
  addClassBorder(node, addClass)

  // effectStyle
  if (node.effectStyleId) {
    const style = figma.getStyleById(node.effectStyleId)
    addClass(style.name.toLowerCase())
  }

  // opacity
  if (node.opacity !== 1) addClass("opacity", makeNumber(node.opacity))

  // overflow
  if (hasChildren && node.clipsContent) addClass("clip")

  const className = cls.join(" ")
  return await generateChild(depth, node.children, content => `<div class="${className}">\n${content}</div>`)
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
  if (node.type === "ELLIPSE") addClass("r", "100%")
  else {
    const {topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius} = node
    if (topLeftRadius > 0 || topRightRadius > 0 || bottomRightRadius > 0 || bottomLeftRadius > 0) cls.push(`r(${makeFourSideValues(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius)})`)
  }

  // bg
  const bg = node.fills.filter(fill => fill.visible)[0]
  if (bg?.type === "SOLID") {
    addClass("bg", makeColor(bg.color, bg.opacity))
  }

  // border
  addClassBorder(node, addClass)

  const className = cls.join(" ")
  return `<div class="${className}"></div>`
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
  return `<div class="${className}">${node.characters}</div>`
}


const isSVG = (node) => {
  return node.children?.find(node => node.type === "VECTOR" || node.type === "BOOLEAN_OPERATION")
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
  else if (node.type === "COMPONENT" || node.type === "FRAME" || node.type === "LINE") code = await generateFrame(node, depth)
  else if (node.type === "RECTANGLE" || node.type === "ELLIPSE") code = await generateShape(node)
  else if (node.type === "TEXT") code = await generateText(node)
  else if (node.type === "COMPONENT_SET") code = await generateComponentSet(node, depth)

  return Array(depth).fill("  ").join("") + code + "\n"
}

const generate = async () => {
  const selection = figma.currentPage.selection

  if (!selection.length) return

  const node:SceneNode = selection[0]
  console.log(node.type)
  console.log(node)

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