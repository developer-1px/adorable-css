import {capitalize, isNumber, makeColor, makeFourSideValues, makeGradientLinear, makeInt, makeNumber, nl2br, px, unitValue, indent, OPTIONS, makeHexColor} from "../libs/utils"

export const makeTailwindStyleColor = ({r, g, b}, opacity = 1) => `#${makeHexColor(r, g, b, opacity)}${opacity === 1 ? "" : Math.round(+opacity * 255).toString(16)}`

const makeTailwindValue = (value) => px(value).replace(/\s+/g, "_")

type AddClass = (prop, value?) => void

// @TODO: TBD
const isReact = false
const CLASS_NAME = isReact ? "className" : "class"
const COMMENT_START = isReact ? "{/*" : "<!--"
const COMMENT_END = isReact ? "*/}" : "-->"

const createClassBuilder = (cls:string[] = []) => {
  function addClass(prop, value?) {
    if (arguments.length === 2 && (value === null || value === undefined)) return
    cls.push(`${prop}${value ? "-[" + makeTailwindValue(value) + "]" : ""}`)
  }

  return {addClass, cls}
}

const addClassWidth = (node:FrameNode, addClass:AddClass) => {
  const {layoutSizingHorizontal, width, minWidth, maxWidth} = node

  if (node.constraints?.horizontal === "STRETCH" || node.constraints?.horizontal === "SCALE") {}
  else if (layoutSizingHorizontal === "HUG") {}
  else if (layoutSizingHorizontal === "FIXED") addClass("w", makeInt(width))
  else if (layoutSizingHorizontal === "FILL") {
    if (node.parent.layoutMode === "HORIZONTAL") addClass("flex-1")
    else if (node.parent.layoutMode === "VERTICAL") addClass("self-stretch")
    else addClass("w-full")
  }

  minWidth !== null && addClass("min-w", makeInt(minWidth))
  maxWidth !== null && addClass("max-w", makeInt(maxWidth))
}

const addClassHeight = (node:FrameNode, addClass:AddClass) => {
  const {layoutSizingVertical, height, minHeight, maxHeight} = node

  if (node.constraints?.vertical === "STRETCH" || node.constraints?.vertical === "SCALE") {}
  else if (layoutSizingVertical === "HUG") {}
  else if (layoutSizingVertical === "FIXED") addClass("h", makeInt(height))
  else if (layoutSizingVertical === "FILL") {
    if (node.parent.layoutMode === "VERTICAL") addClass("flex-1")
    else if (node.parent.layoutMode === "HORIZONTAL") addClass("self-stretch")
    else addClass("h-full")
  }

  minHeight !== null && addClass("min-h", makeInt(minHeight))
  minHeight !== null && addClass("max-h", makeInt(minHeight))
}

const addClassBorderRadius = (node:FrameNode|EllipseNode, addClass:AddClass) => {
  if (node.type === "ELLIPSE") addClass("rounded", "100%")
  else {
    let {topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius} = node
    if (topLeftRadius > 0 || topRightRadius > 0 || bottomRightRadius > 0 || bottomLeftRadius > 0) {
      topLeftRadius = Math.round(topLeftRadius)
      topRightRadius = Math.round(topRightRadius)
      bottomRightRadius = Math.round(bottomRightRadius)
      bottomLeftRadius = Math.round(bottomLeftRadius)

      // @TODO: 4 corner radius
      addClass("rounded", topLeftRadius)
    }
  }
}

const addClassBorder = (node, addClass:AddClass) => {
  try {
    const {strokes, strokeAlign, strokeWeight} = node
    const border = strokes.find(stroke => stroke.visible)

    if (border && border.color && strokeWeight >= 1) {
      if (strokeAlign === "OUTSIDE") {
        addClass("ring", [strokeWeight > 1 ? strokeWeight : null, makeColor(border.color, border.opacity)].filter(Boolean).join("/"))
      }
      else {
        addClass("border", `${makeColor(border.color, border.opacity)}`)
        addClass("border", makeInt(node.strokeWeight))
      }
    }
  } catch (e) {}
}

const addEffectClass = (node:FrameNode, addClass:AddClass) => {
  // if (node.effectStyleId) {
  //   const style = figma.getStyleById(node.effectStyleId)
  //   addClass(style.name.toLowerCase())
  // }

  node.effects.forEach(effect => {
    if (!effect.visible) return

    switch (effect.type) {
      case "DROP_SHADOW":
      case "INNER_SHADOW": {
        const {color, offset, radius, spread} = effect
        const {x, y} = offset
        const inset = effect.type === "INNER_SHADOW" ? "inset/" : ""
        addClass("box-shadow", `${inset}${x}/${y}/${radius}` + (spread ? "/" + spread : "") + `/${makeColor(color, color.a)}`)
        break
      }

      case "LAYER_BLUR": {
        addClass("blur", Math.round(effect.radius / 2))
        break
      }

      case "BACKGROUND_BLUR": {
        addClass("backdrop-blur", Math.round(effect.radius / 2))
        break
      }
    }
  })
}

const isAbsoluteLayout = (node) => {
  const selection = figma.currentPage.selection
  if (node === selection[0]) {
    return false
  }

  if (node.layoutPositioning === "ABSOLUTE") {
    return true
  }

  if (!node.parent.layoutMode || node.parent.layoutMode === "NONE") {
    return true
  }

  return false
}

const addClassPosition = (node:FrameNode, addClass:AddClass) => {
  if (isAbsoluteLayout(node)) {
    const rect1 = node.parent.absoluteBoundingBox
    const rect2 = node.absoluteBoundingBox
    const x = Math.floor(rect2.x - rect1.x)
    const y = Math.floor(rect2.y - rect1.y)

    addClass("absolute")
    const {horizontal = "MIN", vertical = "MIN"} = node.constraints ?? {}
    if (horizontal === "MIN" && vertical === "MIN" && x === 0 && y === 0) {
      return
    }

    const right = Math.floor(rect1.x + rect1.width - rect2.x - rect2.width)
    const bottom = Math.floor(rect1.y + rect1.height - rect2.y - rect2.height)

    const offsetXFromCenter = Math.floor(rect2.x - rect1.x - (rect1.width / 2 - rect2.width / 2))
    const offsetYFromCenter = Math.floor(rect2.y - rect1.y - (rect1.height / 2 - rect2.height / 2))

    const percentLeft = Math.round((x / rect1.width) * 100)
    const percentRight = Math.round((right / rect1.width) * 100)

    // 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'SCALE'
    switch (horizontal) {
      case "MIN": {
        addClass("left", x);
        break
      }
      case "MAX": {
        addClass("right", right);
        break
      }
      case "CENTER": {
        if (Math.abs(offsetXFromCenter) <= 1) addClass("left-1/2")
        else addClass("left", "calc(50%" + (offsetXFromCenter > 0 ? "+" : "") + px(offsetXFromCenter) + ")")
        addClass("-translate-x-1/2")
        break
      }
      case "STRETCH": {
        addClass("left", x)
        addClass("right", right)
        break
      }
      case "SCALE": {
        addClass("left", percentLeft + "%")
        addClass("right", percentRight + "%")
      }
    }

    switch (vertical) {
      case "MIN": {
        addClass("top", y);
        break
      }
      case "MAX": {
        addClass("bottom", bottom);
        break
      }
      case "CENTER": {
        if (Math.abs(offsetYFromCenter) <= 1) addClass("top-1/2")
        else addClass("top", "calc(50%" + (offsetYFromCenter > 0 ? "+" : "") + px(offsetYFromCenter) + ")")
        addClass("-translate-y-1/2")
        break
      }
      case "STRETCH": {
        addClass("top", y)
        addClass("bottom", bottom)
        break
      }
    }

    return
  }

  if (node.findChild && node.findChild(isAbsoluteLayout)) {
    addClass("relative")
  }
}


const addClassFlexbox = (node:FrameNode, addClass:AddClass) => {
  // Flex Layout
  const numChildren = node.children?.filter(child => child.visible).length
  const hasChildren = numChildren > 0
  const hasMoreChildren = numChildren > 1

  const {
    layoutMode,
    layoutWrap,
    primaryAxisAlignItems,
    counterAxisAlignItems,
  } = node

  if (layoutMode !== "NONE" && hasChildren) {

    // hbox
    if (layoutMode === "HORIZONTAL") {
      addClass("flex")
      addClass("flex-row")

      // flex-wrap
      if (layoutWrap === "WRAP") {
        addClass("flex-wrap")
      }

      if (counterAxisAlignItems === "MIN") addClass("items-start")
      else if (counterAxisAlignItems === "CENTER") addClass("items-center")
      else if (counterAxisAlignItems === "MAX") addClass("items-end")

      if (primaryAxisAlignItems === "MIN") addClass("justify-start")
      else if (primaryAxisAlignItems === "CENTER") addClass("justify-center")
      else if (primaryAxisAlignItems === "MAX") addClass("justify-end")
    }

    // vbox
    else if (layoutMode === "VERTICAL") {
      addClass("flex")
      addClass("flex-col")

      // flex-wrap
      if (layoutWrap === "WRAP") {
        addClass("flex-wrap")
      }

      if (counterAxisAlignItems === "MIN") addClass("items-start")
      else if (counterAxisAlignItems === "CENTER") addClass("items-center")
      else if (counterAxisAlignItems === "MAX") addClass("items-end")

      if (primaryAxisAlignItems === "MIN") addClass("justify-start")
      else if (primaryAxisAlignItems === "CENTER") addClass("justify-center")
      else if (primaryAxisAlignItems === "MAX") addClass("justify-end")
    }

    // gap
    if (hasMoreChildren) {
      if (primaryAxisAlignItems === "SPACE_BETWEEN") {
        addClass("justify-between")
      }
      else if (isNumber(node.itemSpacing) && node.itemSpacing !== 0) {
        const {itemSpacing} = node

        if (itemSpacing < 0) {
          layoutMode === "HORIZONTAL" ? addClass("space-x", itemSpacing) : addClass("space-y", itemSpacing)
        }
        else {
          addClass("gap", itemSpacing)
        }
      }
    }

    // padding
    const {paddingTop, paddingRight, paddingBottom, paddingLeft} = node
    if (paddingTop > 0 || paddingRight > 0 || paddingBottom > 0 || paddingLeft > 0) {
      if (paddingTop === paddingBottom && paddingRight === paddingLeft && paddingTop === paddingLeft && paddingTop > 0) addClass("p", paddingTop)
      else {
        if (paddingTop === paddingBottom && paddingTop > 0) addClass("py", paddingTop)
        else {
          if (paddingTop > 0) addClass("pt", paddingTop)
          if (paddingBottom > 0) addClass("pb", paddingBottom)
        }

        if (paddingRight === paddingLeft && paddingRight > 0) addClass("px", paddingRight)
        else {
          if (paddingRight > 0) addClass("pr", paddingRight)
          if (paddingLeft > 0) addClass("pl", paddingLeft)
        }
      }
    }
  }
}

const addClassBackground = (node:FrameNode, addClass:AddClass) => {
  try {
    const fills = [...node.fills].reverse().filter(fill => fill.visible)
    if (fills.length === 0) {
      return
    }

    if (fills.length === 1) {
      const fill = fills[0]
      if (fill.type === "SOLID") {
        addClass("bg", makeColor(fill.color, fill.opacity))
      }
      else if (fill.type === "GRADIENT_LINEAR") {
        addClass(`[background:${makeGradientLinear(fill)}]`.replace(/\s+/g, "_"))
      }
      return
    }

    const gradients = fills.map((fill, index, A) => {
      if (fill.type === "SOLID" && index === A.length - 1) {
        return makeColor(fill.color, fill.opacity)
      }
      if (fill.type === "SOLID") {
        return `linear-gradient(0deg,${makeColor(fill.color, fill.opacity)} 0%,${makeColor(fill.color, fill.opacity)} 100%)`
      }
      if (fill.type === "GRADIENT_LINEAR") {
        return makeGradientLinear(fill)
      }
      return ""
    }).filter(Boolean).join(",")

    addClass(`[background:${gradients}]`.replace(/\s+/g, "_"))

  } catch (e) {}
}

const addClassOverflow = (node:FrameNode, addClass:AddClass) => {
  if (!node.children) return
  const numChildren = node.children.filter(child => child.visible).length
  const hasChildren = numChildren > 0
  if (hasChildren && node.clipsContent) addClass("overflow-hidden")
  else if (node.findOne(child => child.type === "TEXT" && child.textTruncation === "ENDING")) {
    addClass("overflow-hidden")
    if (node.parent.layoutMode === "HORIZONTAL" || node.parent.layoutMode === "VERTICAL") {
      addClass("shrink")
    }
  }
}

// @TODO: Group에도 opacity가 있다. display:contents를 활용하는 방법을 고민해보자.
const addOpacity = (node:SceneNode, addClass:AddClass) => {
  // opacity
  if (node.opacity !== 1) addClass("opacity", makeNumber(node.opacity))
}

// ----------------------------------------------------------------

const wrapInstance = (node, code) => {
  const mainComponent = node.mainComponent || node
  const mainComponentSet = (mainComponent.parent && mainComponent.parent?.type === "COMPONENT_SET") ? mainComponent.parent : mainComponent

  const name = capitalize(mainComponentSet.name.trim().replace(/\s*\/\s*/g, "_").replace(/-|\s+/g, "_").replace(/\s+/g, "_"))
  return `\n${COMMENT_START} <${name}> ${COMMENT_END}\n${code}\n${COMMENT_START} </${name}> ${COMMENT_END}\n`
}

const generateChild = async (depth, children, callback) => {
  const contents = await Promise.all((children || []).map(params => generateCode(params, depth + 1)))
  const content = contents.filter(Boolean).join("\n")
  return callback(content)
}

const generateComponentSet = async (node, depth) => {
  const children = await generateChild(depth, node.children, content => content)
  return `<div ${CLASS_NAME}="vbox gap(20)">\n${children}\n</div>`
}

const generateInstance = async (node, depth) => {
  const code = await generateFrame(node, depth)
  return wrapInstance(node, code)
}

const generateFrame = async (node:FrameNode, depth:number) => {

  const {addClass, cls} = createClassBuilder()

  // Position
  addClassPosition(node, addClass)

  // Size: width,height: hug, fixed, fill
  addClassWidth(node, addClass)
  addClassHeight(node, addClass)

  // AutoLayout: hbox / vbox
  addClassFlexbox(node, addClass)

  // Fill: Backgrounds
  addClassBackground(node, addClass)

  // Border
  addClassBorder(node, addClass)

  // Border Radius
  addClassBorderRadius(node, addClass)

  // clip: Overflow
  addClassOverflow(node, addClass)

  // Effects: Style
  addEffectClass(node, addClass)

  // Layer: opacity
  addOpacity(node, addClass)

  // @TODO: First on Top
  if (node.itemReverseZIndex) {
    addClass("itemReverseZIndex")
  }

  // Dev Log
  const className = cls.join(" ")
  return await generateChild(depth, node.children, content => `<div ${CLASS_NAME}="${className}">${indent(content)}</div>`)
}

const addClassFont = (node:TextNode, addClass:AddClass) => {
  // font-size
  if (node.fontSize) {
    addClass("text", node.fontSize)
  }

  // color
  const fill = node.fills?.find(fill => fill?.visible && fill?.type === "SOLID")
  if (fill) {
    addClass("text", makeColor(fill.color, fill.opacity))
  }

  // line-height
  if (node.lineHeight?.value && node.lineHeight?.unit !== "AUTO") {
    addClass("leading", unitValue(node.lineHeight))
  }

  // letter-spacing
  if (node.letterSpacing?.value) {
    addClass("tracking", unitValue(node.letterSpacing))
  }

  // font-family
  const fontFamilyName = node.fontFamily?.replace(/\s/g, "-")
  if (fontFamilyName) {
    addClass(fontFamilyName)
  }

  // font-weight
  if (node.fontWeight) {
    const fontStyleName = node.fontWeight.toLowerCase()
    switch (fontStyleName) {
      case "regular": {
        break
      }

      default: {
        addClass("font-" + fontStyleName)
      }
    }
  }

  // text-decoration
  switch (node.textDecoration) {
    case "UNDERLINE": {
      addClass("underline")
      break
    }
    case "STRIKETHROUGH": {
      addClass("line-through")
      break
    }
  }

  // textCase
  switch (node.textCase) {
    case "UPPER": {
      addClass("uppercase");
      break
    }
    case "LOWER": {
      addClass("lowercase")
      break
    }
    case "TITLE": {
      addClass("capitalize")
      break
    }
    case "SMALL_CAPS": {
      addClass("small-caps")
      break
    }
    case "SMALL_CAPS_FORCED": {
      addClass("capitalize small-caps")
      break
    }
  }
}

const generateText = async (node:TextNode) => {
  const {addClass, cls} = createClassBuilder()

  // Position
  addClassPosition(node, addClass)

  // Size
  const {textAutoResize, textTruncation, maxLines, textAlignHorizontal, textAlignVertical} = node
  switch (textAutoResize) {
    case "WIDTH_AND_HEIGHT":
      break

    case "HEIGHT":
      addClassWidth(node, addClass)
      break

    case "NONE":
      addClassWidth(node, addClass)
      addClassHeight(node, addClass)
      break
  }


  // Text Segment
  // @TODO: 세그먼트에서 공통은 위로 보내고 다른 점만 span에 class로 넣기 기능
  const segments = node.getStyledTextSegments([
    "fontSize",
    "fontName",
    "fontWeight",
    "textDecoration",
    "textCase",
    "lineHeight",
    "letterSpacing",
    "fills",
    "textStyleId",
    "fillStyleId",
    "listOptions",
    "indentation",
    "hyperlink",
    // "openTypeFeatures"
  ]).map(segment => ({...segment, fontFamily: segment.fontName?.family, fontWeight: segment.fontName?.style}))

  // get common segments style
  const commonFontStyle = segments.reduce((prev, curr) => {
    const style = {}
    Object.keys(prev).forEach(key => {
      if (JSON.stringify(prev[key]) === JSON.stringify(curr[key])) style[key] = prev[key]
    })
    return style
  })

  addClassFont(commonFontStyle, addClass)

  // text-align
  const HORIZONTAL_ALIGN = {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right",
    JUSTIFIED: "justify"
  }

  // textAutoResize
  if (textAutoResize === "NONE") {
    if (textAlignVertical === "CENTER" || textAlignVertical === "BOTTOM") {
      addClass("flex")
      addClass("flex-col")
      if (textAlignVertical === "CENTER") {
        addClass("justify-center")
      }
      if (textAlignVertical === "BOTTOM") {
        addClass("justify-end")
      }
      addClass(`text-${HORIZONTAL_ALIGN[textAlignHorizontal]}`)
    }
  }
  else {
    addClass(`text-${HORIZONTAL_ALIGN[textAlignHorizontal]}`)
  }

  // textTruncation
  if (textTruncation === "ENDING") {
    if (maxLines > 1) {
      if (maxLines <= 6) {
        addClass(`line-clamp-[${maxLines}]`,)
      }
      else {
        addClass(`line-clamp`, maxLines)
      }
    }
    else {
      addClass("truncate")
    }
  }

  // opacity
  if (node.opacity !== 1) {
    addClass("opacity", makeNumber(node.opacity))
  }

  const textContent = segments.length === 1 ? nl2br(node.characters) : segments.map(segment => {
    const {addClass, cls} = createClassBuilder()
    // remove common style
    Object.keys(commonFontStyle).forEach(key => {
      if (JSON.stringify(commonFontStyle[key]) === JSON.stringify(segment[key])) delete segment[key]
    })
    addClassFont(segment, addClass)

    const className = cls.join(" ")
    return cls.length ? `<span ${CLASS_NAME}="${className}">${nl2br(segment.characters)}</span>` : nl2br(segment.characters)
  }).join("")

  const className = cls.join(" ")
  return `<div ${CLASS_NAME}="${className}">${textContent}</div>`
}

const isAsset = (node) => {
  if (node.isAsset) return true
  if (node.findChild && node.findChild(child => child.isMask)) return true
  if (node.exportSettings && node.exportSettings.length) {
    if (node.parent.type === "SECTION" || node.parent.type === "PAGE") {
      return false
    }
    return true
  }
  return false
}

const generateAsset = async (node:SceneNode) => {
  let code = ""

  const cls = []
  const {addClass} = createClassBuilder(cls)

  try {
    if (isAbsoluteLayout(node)) {
      addClassPosition(node, addClass)
    }

    addClassWidth(node, addClass)
    addClassHeight(node, addClass)
    if (node.type === "ELLIPSE") {
      addClass("r", "100%")
    }

    if (figma.mode !== "codegen") {
      node.exportAsync({format: "SVG_STRING", useAbsoluteBounds: true})
        .then((content) => {
          const inlineSVG = content.replace(/pattern\d/g, (a) => a + node.id.replace(/[^a-zA-z0-9]/g, "-")).replace(/\n/g, "")
          figma.ui.postMessage({type: "assets", id: node.id, svg: inlineSVG})
        })
        .catch(e => {
          console.warn("export failed: ", e)
        })
    }

    const className = cls.join(" ")
    code = `<figure ${CLASS_NAME}="block ${className}" data-asset-id="${node.id}" src="${node.name}"></figure>`

    if (node.type === "INSTANCE" || node.type === "COMPONENT") {
      code = wrapInstance(node, code)
    }
    else {
      code = "\n" + code + "\n"
    }
  } catch (e) {
    console.error(e)
    console.error("asset error node:", node)
  }

  return code
}

const generateCode = async (node:SceneNode, depth:number = 0) => {
  if (node.visible === false) return ""

  if (isAsset(node)) return generateAsset(node)
  else if (node.type === "COMPONENT" || node.type === "INSTANCE") return generateInstance(node, depth)
  else if (node.type === "COMPONENT_SET") return generateComponentSet(node, depth)
  else if (node.type === "TEXT") return generateText(node)

  return generateFrame(node as FrameNode, depth)
}

export const getGeneratedCode = async (node) => {
  const code = await generateCode(node, 0)
  return code.replace(/(\n\s*\n)+/g, "\n\n")
}