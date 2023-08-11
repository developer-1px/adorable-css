import {makeColor, OPTIONS} from "./libs/utils"
import {getGeneratedCode} from "./codegen"
OPTIONS.type = "adorablecss"
// OPTIONS.type = "tailwindcss"

const generateCodeWithUI = async () => {
  const selection = figma.currentPage.selection
  if (!selection.length) return

  const node = selection[0]
  console.log("selectedNode: ", node)

  const code = await getGeneratedCode(node)

  // 배경색상 찾기
  const pageBackgroundColor = makeColor(figma.currentPage.backgrounds[0].color)
  const getBackgroundColor = (node:SceneNode) => node.fills?.find(fill => fill.visible && fill.type === "SOLID")

  let it = node.parent
  let backgroundColor = pageBackgroundColor
  while (it) {
    const bg = getBackgroundColor(it)
    if (getBackgroundColor(it)) {
      backgroundColor = makeColor(bg.color, bg.opacity)
      console.log(backgroundColor)
      break
    }
    it = it.parent
  }

  // 피그마로 분석한 코드 전달 및 화면크기 조절 요청
  const rect = node.absoluteBoundingBox
  const width = Math.floor(rect.width) || 0
  const height = (Math.floor(rect.height) || 0)
  figma.ui.resize(width, height + 200)
  figma.ui.postMessage({type: "code", code, backgroundColor, pageBackgroundColor, width, height})
}

// Make sure that we're in Dev Mode and running codegen
if (figma.editorType === "dev" && figma.mode === "codegen") {
  // Register a callback to the "generate" event
  figma.codegen.on("generate", async ({node}) => {
    const code = await getGeneratedCode(node)
    return [{
      title: "HTML",
      language: "HTML",
      code: code,
    }]
  })
}
else {
  figma.showUI(__html__)
  figma.on("selectionchange", generateCodeWithUI)
  figma.on("documentchange", generateCodeWithUI)
  void generateCodeWithUI()
}