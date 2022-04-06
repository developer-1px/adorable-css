<script lang="ts" context="module">
import {reset} from "../../src[vite-plugin-adorable-css]/src/rules"
import {generateCss} from "../../src[vite-plugin-adorable-css]/src/atomizer"

if (typeof document !== "undefined") {
  const target = document.documentElement
  const styleSheet = document.createElement("style")
  target.querySelector("head").appendChild(styleSheet)

  const classList = new Set()
  const generateStyleSheet = () => styleSheet.innerHTML = reset + generateCss([...classList]).join("\n")

  const observer = new MutationObserver(mutations => {
    console.log("mutations", mutations)

    mutations.forEach(mutation => {
      mutation.oldValue?.split(/\s+/).forEach(value => classList.delete(value))
      Array.from(mutation.target?.classList).forEach(value => classList.add(value))
      generateStyleSheet()
    })
  })
  observer.observe(target, {attributes: true, subtree: true, childList: true, attributeOldValue: true, attributeFilter: ["class"]})

  const init = () => {
    Array.from(document.querySelectorAll("*[class]")).forEach(el => Array.from(el.classList).forEach(value => classList.add(value)))
    generateStyleSheet()
  }

  if (document.readyState === "loading") {
    document.addEventListener("readystatechange", () => {
      init()
      document.removeEventListener("readystatechange", init)
    })
  }
  else {
    init()
  }
}
</script>

<div id="test c(red) font(100) p(10)">cdn no vite!</div>