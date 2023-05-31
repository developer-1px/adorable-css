import {generateCss} from "./core/atomizer"
import {reset} from "./core/rules"

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.innerHTML = "body {display:none!important}"
  document.head.appendChild(styleSheet)

  const classList = new Set<string>()
  const generateStyleSheet = () => styleSheet.innerHTML = reset + generateCss([...classList]).join("\n")

  const registerObserver = () => {
    if (!document.body) return
    const observer = new MutationObserver(() => init())
    observer.observe(document.documentElement, {attributes: true, attributeFilter: ["class"], childList: true, subtree: true})
  }

  const init = () => {
    const prevLength = classList.size
    Array.from(document.querySelectorAll("*[class]")).forEach(el => Array.from(el.classList).forEach(value => classList.add(value)))
    if (prevLength !== classList.size) {
      generateStyleSheet()
    }

    if (styleSheet.parentNode !== document.head) {
      document.head.appendChild(styleSheet)
    }
  }

  const bootstrap = () => {
    init()
    generateStyleSheet()
    registerObserver()
    document.removeEventListener("readystatechange", bootstrap)
  }
  bootstrap()
  document.addEventListener("readystatechange", bootstrap)
}