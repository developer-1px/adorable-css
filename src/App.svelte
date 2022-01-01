<script lang="ts">
import {generateCss} from "../src[vite-plugin-adorable-css]/src/atomizer"
import {parseAtoms} from "../src[vite-plugin-adorable-css]/src/parser"
import {reset} from "../src[vite-plugin-adorable-css]/src/rules"
import Design from "./Design.svelte"
import MonacoEditor from "./MonacoEditor.svelte"
import {TURORIAL_0_Hello} from "./tutorials/0. Hello Adorable"
import {TURORIAL_1_COLORS} from "./tutorials/1. Colors"
import {TURORIAL_2_TYPOGRAPHY} from "./tutorials/2. Typography"
import {TURORIAL_3_BOX_MODEL} from "./tutorials/3. Box Model"
import {TURORIAL_4_OVERFLOW} from "./tutorials/4. Overflow"
import {TURORIAL_5_LAYOUT_FLEXBOX} from "./tutorials/5. Layout - Flexbox"
import {TURORIAL_6_LAYOUT_POSITION} from "./tutorials/6. Layout - Position"
import {TURORIAL_7_PREFIX} from "./tutorials/7. Prefix"
import {TURORIAL_8_PREFIX2} from "./tutorials/8. Prefix2"
import {TURORIAL_9_PSEUDO_ELEMENT} from "./tutorials/9. Pseudo Element"
import UIVersion from "./UIVersion.svelte"

let element:HTMLElement
let value = TURORIAL_0_Hello

const tutorials = [
  ["0. Hello AdorableCSS!", TURORIAL_0_Hello],
  ["1. Colors", TURORIAL_1_COLORS],
  ["2. Typography", TURORIAL_2_TYPOGRAPHY],
  ["3. Box Model", TURORIAL_3_BOX_MODEL],
  ["4. Overflow", TURORIAL_4_OVERFLOW],
  ["5. Layout - Flexbox", TURORIAL_5_LAYOUT_FLEXBOX],
  ["6. Layout - Position", TURORIAL_6_LAYOUT_POSITION],
  ["7. Pseudo Class - :hover, :group-hover", TURORIAL_7_PREFIX],
  ["8. Pseudo Class 2 - :nth-child(3n+1)", TURORIAL_8_PREFIX2],
  ["✨ 9. Pseudo Element - ::first-line, -webkit-scrollbar", TURORIAL_9_PSEUDO_ELEMENT],
  ["계속 작업 중입니다...", ""]
]

let currentTutorialIndex = 0

$: css = reset + generateCss(parseAtoms(value)).join("\n")
$: element && (element.contentWindow.document.body.innerHTML = `<style`+ `>${css}</` + `style>\n` + value)

const hbox = () => {}
const vbox = () => {}

let type = "Result"
const Result = () => type = "Result"
const CSS_output = () => type = "CSS_output"

const 튜토리얼_선택 = (title, code, index) => {
  value = code
  currentTutorialIndex = index
  editor.setValue(code)
}

let editor
</script>

<div class="layer vbox overscroll(none)">
  <div class="hbox gap(10) h(64) bb(#fff.05) p(10/20) bg(#000) c(#fff) elevation(2) relative z(1)">
    <div class="hbox gap(4)">
      <div class="w(32) h(32) font(24) mt(-2) pack">🐳</div>
      <div class="font(20)"><span class="100">Adorable</span><span class="500">CSS</span></div>
    </div>
    <div class="space(30)"/>

    <div class="hbox gap(20)">
      <a class="pack" href="https://github.com/developer-1px/adorable-css" target="_blank">
        <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>

      <a class="pack" href="https://www.youtube.com/watch?v=O-eonCeumw8&list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL&index=2" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="32" height="32"
             viewBox="0 0 48 48"
             style=" fill:#000;">
          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
        </svg>
      </a>

      <a target="_blank" href="https://velog.io/@teo/series/AdorableCSS">Blog</a>
      <a target="_blank" href="https://github.com/developer-1px/adorable-css/blob/master/src%5Badorable-css%5D/docs/Reference.md">Reference</a>
    </div>
  </div>

  <div class="flex hbox(fill) clip">
    <div class="flex vbox p(10/20) br(#fff.05)">
      <div class="bold font(24)">Turotial</div>
      <div class="space(20)"/>
      {#each tutorials as [title, code], index}
        <div class="block .selected:c(#fff) c(#888) pointer" class:selected={currentTutorialIndex === index} on:click={() => 튜토리얼_선택(title, code, index)}>{title}</div>
      {/each}
    </div>

    <div class="flex(4) vbox br(#ccc)">
      <MonacoEditor bind:value bind:this={editor}/>
    </div>

    <div class="flex(3) relative vbox bg(#fff) c(#000)">
      <div class="hbox bg(#fff) bb(#ccc) font(12) c(#999)">
        <button class="p(8/12) pt(12) bb(4/transparent) .selected:bbc(orange) .selected:c(#000)" class:selected={type === "Result"} on:click={Result}>Result</button>
        <button class="p(8/12) pt(12) bb(4/transparent) .selected:bbc(orange) .selected:c(#000)" class:selected={type === "CSS_output"} on:click={CSS_output}>CSS output</button>
      </div>
      <div class="flex relative">
        <div class="layer pack br(#ccc) check-board none" class:none={type !== "Result"}>
          <iframe bind:this={element} class="layer w(100%) h(100%) bg(transparent)" frameborder="0"/>
        </div>
        <div class="layer pre monospace font(12) p(10) none" class:none={type !== "CSS_output"}>{css}</div>
      </div>
    </div>
  </div>
</div>

<UIVersion version="0.0.8"/>
