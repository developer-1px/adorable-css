<script lang="ts">
import {TURORIAL_0_Hello} from "../../tutorials/0. Hello Adorable"
import {TURORIAL_1_COLORS} from "../../tutorials/1. Colors"
import {TURORIAL_10_MEDIA_QUERY} from "../../tutorials/10. Media Query"
import {TURORIAL_11_Selector} from "../../tutorials/11. Selector"
import {TURORIAL_12_Important} from "../../tutorials/12. Important"
import {TURORIAL_2_TYPOGRAPHY} from "../../tutorials/2. Typography"
import {TURORIAL_3_BOX_MODEL} from "../../tutorials/3. Box Model"
import {TURORIAL_4_OVERFLOW} from "../../tutorials/4. Overflow"
import {TURORIAL_5_LAYOUT_FLEXBOX} from "../../tutorials/5. Layout - Flexbox"
import {TURORIAL_6_LAYOUT_POSITION} from "../../tutorials/6. Layout - Position"
import {TURORIAL_7_PREFIX} from "../../tutorials/7. Prefix"
import {TURORIAL_8_PREFIX2} from "../../tutorials/8. Prefix2"
import {TURORIAL_9_PSEUDO_ELEMENT} from "../../tutorials/9. Pseudo Element"
import {generateCss, parseAtoms} from "../../../packages/vite/src/core/atomizer"
import {reset} from "../../../packages/vite/src/core/rules"
import MonacoEditor from "../../screens/MonacoEditor.svelte"

let element:HTMLElement
let value = TURORIAL_0_Hello

const tutorials = [
  ["Hello AdorableCSS!", TURORIAL_0_Hello],
  ["1. Colors", TURORIAL_1_COLORS],
  ["2. Typography", TURORIAL_2_TYPOGRAPHY],
  ["3. Box Model", TURORIAL_3_BOX_MODEL],
  ["4. Overflow", TURORIAL_4_OVERFLOW],
  ["5. Flexbox", TURORIAL_5_LAYOUT_FLEXBOX],
  ["6. Position", TURORIAL_6_LAYOUT_POSITION],
  ["7. Hover, Active", TURORIAL_7_PREFIX],
  ["8. Pseudo Class", TURORIAL_8_PREFIX2],
  ["9. Pseudo Element", TURORIAL_9_PSEUDO_ELEMENT],
  ["10. Media Query", TURORIAL_10_MEDIA_QUERY],
  ["11. Selector", TURORIAL_11_Selector],
  ["12. Important!", TURORIAL_12_Important],
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
}

let editor
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