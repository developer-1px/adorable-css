<script lang="ts">
import {generateCss, parseAtoms} from "packages/vite/src/core/atomizer"
import {reset} from "packages/vite/src/core/rules"
import {TURORIAL_0_Hello} from "src/tutorials/0. Hello Adorable"
import {TURORIAL_1_COLORS} from "src/tutorials/1. Colors"
import {TURORIAL_10_MEDIA_QUERY} from "src/tutorials/10. Media Query"
import {TURORIAL_11_Selector} from "src/tutorials/11. Selector"
import {TURORIAL_12_Important} from "src/tutorials/12. Important"
import {TURORIAL_14_Grouping} from "src/tutorials/14. Grouping"
import {TURORIAL_2_TYPOGRAPHY} from "src/tutorials/2. Typography"
import {TURORIAL_3_BOX_MODEL} from "src/tutorials/3. Box Model"
import {TURORIAL_4_OVERFLOW} from "../../tutorials/5. Overflow"
import {TURORIAL_5_LAYOUT_FLEXBOX} from "../../tutorials/4. Layout - Flexbox"
import {TURORIAL_6_LAYOUT_POSITION} from "src/tutorials/6. Layout - Position"
import {TURORIAL_7_PREFIX} from "src/tutorials/7. Prefix"
import {TUTORIAL_7_VISIBILITY} from "src/tutorials/7. Visibility"
import {TURORIAL_8_PREFIX2} from "src/tutorials/8. Prefix2"
import {TURORIAL_9_PSEUDO_ELEMENT} from "src/tutorials/9. Pseudo Element"
import {onMount} from "svelte"
import MonacoEditor from "../../screens/MonacoEditor.svelte"
import {TURORIAL_TEXTBOX} from "../../tutorials/TextBox";

let element:HTMLElement
let value = TURORIAL_0_Hello

const tutorials = [
  ["Hello AdorableCSS!", TURORIAL_0_Hello],
  ["1. Colors", TURORIAL_1_COLORS],
  ["2. Typography", TURORIAL_2_TYPOGRAPHY],
  ["✨3. TextBox(TextAlign)", TURORIAL_TEXTBOX],
  ["4. Box Model", TURORIAL_3_BOX_MODEL],
  ["5. Flexbox", TURORIAL_5_LAYOUT_FLEXBOX],
  ["6. Overflow", TURORIAL_4_OVERFLOW],
  ["7. Position", TURORIAL_6_LAYOUT_POSITION],
  ["8. Visibility", TUTORIAL_7_VISIBILITY],
  ["9. Hover, Active", TURORIAL_7_PREFIX],
  ["10. Pseudo Class", TURORIAL_8_PREFIX2],
  ["11. Pseudo Element", TURORIAL_9_PSEUDO_ELEMENT],
  ["12. Media Query", TURORIAL_10_MEDIA_QUERY],
  ["13. Selector", TURORIAL_11_Selector],
  ["14. Important!", TURORIAL_12_Important],
  ["15. Grouping +", TURORIAL_14_Grouping],
  ["계속 작업 중입니다...", ""]
]

let currentTutorialIndex = 0

$: css = reset + generateCss(parseAtoms(value)).join("\n")
$: element && (element.contentWindow.document.body.innerHTML = `<style` + `>${css}</` + `style>\n` + value)

let type = "Result"
const Result = () => type = "Result"
const CSS_output = () => type = "CSS_output"

const 튜토리얼_선택 = (title, code, index) => {
  value = code
  currentTutorialIndex = index
  editor.setValue(code)
  location.hash = String(currentTutorialIndex)
}

let editor

onMount(() => {
  const index = +location.hash.slice(1)
  if (index > 0) {
    currentTutorialIndex = index
    튜토리얼_선택(...tutorials[currentTutorialIndex], currentTutorialIndex)
  }
})
</script>

<div class="layer vbox overscroll(none)">
  <div class="h(60)"/>

  <div class="flex hbox(fill) clip bg(#f9f9f9)">
    <div class="vbox w(240) monospace(number) p(10) scroll-y">
      {#each tutorials as [title, code], index}
        <div class="c(#000) pointer p(10/20) r(10) hover:c(--primary) .selected:bg(--primary) .selected:c(#fff)!" class:selected={currentTutorialIndex === index} on:click={() => 튜토리얼_선택(title, code, index)}>{title}</div>
      {/each}
    </div>

    <div class="flex(4) vbox p(10)">
      <div class="flex(4) vbox r(10) clip">
        <MonacoEditor bind:value bind:this={editor}/>
      </div>
    </div>

    <div class="flex(3) relative vbox c(#000) p(10) r(10)">
      <div class="hbox bg(#fff) font(12) c(#999)">
        <button class="p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)" class:selected={type === "Result"} on:click={Result}>Result</button>
        <button class="p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)" class:selected={type === "CSS_output"} on:click={CSS_output}>CSS Output</button>
      </div>
      <div class="flex relative">
        <div class="layer pack check-board none" class:none={type !== "Result"}>
          <iframe bind:this={element} class="layer w(100%) h(100%) bg(transparent)" frameborder="0"/>
        </div>
        <div class="layer bg(#f9f9f9) pre monospace font(12) p(10) scroll-y none" class:none={type !== "CSS_output"}>{css}</div>
      </div>
    </div>
  </div>
</div>