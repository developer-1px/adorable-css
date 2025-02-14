<script lang="ts">
// import { generateCss, parseAtoms } from 'packages/vite/src/core/atomizer'
// import { reset } from 'packages/vite/src/core/rules'

import { TURORIAL_0_Hello } from 'src/tutorials/0. Hello Adorable'
import { TURORIAL_1_COLORS } from 'src/tutorials/1. Colors'
import { TURORIAL_10_MEDIA_QUERY } from 'src/tutorials/10. Media Query'
import { TURORIAL_11_Selector } from 'src/tutorials/11. Selector'
import { TURORIAL_12_Important } from 'src/tutorials/12. Important'
import { TURORIAL_14_Grouping } from 'src/tutorials/14. Grouping'
import { TURORIAL_2_TYPOGRAPHY } from 'src/tutorials/2. Typography'
import { TURORIAL_3_BOX_MODEL } from 'src/tutorials/3. Box Model'
import { TURORIAL_4_OVERFLOW } from 'src/tutorials/5. Overflow'
import { TURORIAL_5_LAYOUT_FLEXBOX } from 'src/tutorials/4. Layout - Flexbox'
import { TURORIAL_6_LAYOUT_POSITION } from 'src/tutorials/6. Layout - Position'
import { TURORIAL_7_PREFIX } from 'src/tutorials/7. Prefix'
import { TUTORIAL_7_VISIBILITY } from 'src/tutorials/7. Visibility'
import { TURORIAL_8_PREFIX2 } from 'src/tutorials/8. Prefix2'
import { TURORIAL_9_PSEUDO_ELEMENT } from 'src/tutorials/9. Pseudo Element'
import { onMount } from 'svelte'
import MonacoEditor from '../../screens/MonacoEditor.svelte'
import { TURORIAL_TEXTBOX } from 'src/tutorials/TextBox'
import { TUTORIAL_LAYOUT_POSITION } from 'src/tutorials/Position'
import { TUROTIAL_DARKMODE } from 'src/tutorials/DarkMode'

import { createGenerator } from 'unocss';
import { adorableCSS } from 'packages/v2/unocss/adorable-css-uno'
import { reset } from 'packages/v2/unocss/rules'

// UnoCSS 설정
const uno = createGenerator({
  ...adorableCSS()
});

let element:HTMLElement
let value = TURORIAL_0_Hello

const tutorials = [
  ["Hello AdorableCSS!", TURORIAL_0_Hello],
  ["1. Colors", TURORIAL_1_COLORS],
  ["2. Typography", TURORIAL_2_TYPOGRAPHY],
  ["✨3. TextBox(align)", TURORIAL_TEXTBOX],
  ["4. Box Model", TURORIAL_3_BOX_MODEL],
  ["5. Overflow", TURORIAL_4_OVERFLOW],
  ["✨6. Flexbox", TURORIAL_5_LAYOUT_FLEXBOX],
  ["✨7. Position", TUTORIAL_LAYOUT_POSITION],
  ["8. Layer", TURORIAL_6_LAYOUT_POSITION],
  ["9. Visibility", TUTORIAL_7_VISIBILITY],
  ["10. Hover, Active", TURORIAL_7_PREFIX],
  ["11. Pseudo Class", TURORIAL_8_PREFIX2],
  ["12. Pseudo Element", TURORIAL_9_PSEUDO_ELEMENT],
  ["13. Media Query", TURORIAL_10_MEDIA_QUERY],
  ["14. Selector", TURORIAL_11_Selector],
  ["15. Important!", TURORIAL_12_Important],
  ["16. Grouping +", TURORIAL_14_Grouping],
  ["✨17. DarkMode", TUROTIAL_DARKMODE],
  ["계속 작업 중입니다...", ""]
]

let currentTutorialIndex = 0
let css = 'hello'

async function generateCSS(value) {
  const unoo = await uno
  const res = await unoo.generate(value)
  css = reset + res.css
  element && (element.contentWindow.document.body.innerHTML = `<style` + `>${css}</` + `style>\n` + value)
}

$: generateCSS(value)

// $: uno.generate(value).then((css2) => {
//   css = reset + css2
//   element && (element.contentWindow.document.body.innerHTML = `<style` + `>${css}</` + `style>\n` + value)
// })

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
  <div class="h(56)"></div>

  <div class="h(fill) hbox(fill) clip bg(#f9f9f9)">
    <div class="w(200) vbox monospace(number) p(10) scroll-y">
      {#each tutorials as [title, code], index}
        <div class="p(6/8) r(4) font(13) c(#000) pointer hover:c(--primary) .selected:bg(--primary) .selected:c(#fff)!"
             class:selected={currentTutorialIndex === index} on:click={() => 튜토리얼_선택(title, code, index)}>{title}</div>
      {/each}
    </div>

    <div class="flex(4) vbox p(10)">
      <MonacoEditor bind:value bind:this={editor}/>
    </div>

    <div class="flex(3) relative vbox c(#000) p(10) r(4)">
      <div class="hbox bg(#fff) font(12) c(#999)">
        <button class="p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"
                class:selected={type === "Result"} on:click={Result}>Result
        </button>
        <button class="p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"
                class:selected={type === "CSS_output"} on:click={CSS_output}>CSS Output
        </button>
      </div>

      <div class="h(fill) relative">
        <div class="layer pack check-board none" class:none={type !== "Result"}>
          <iframe bind:this={element} class="layer w(100%) h(100%) bg(transparent)" frameborder="0"/>
        </div>
        <div class="layer bg(#f9f9f9) pre monospace font(12) p(10) scroll-y none"
             class:none={type !== "CSS_output"}>{css}</div>
      </div>
    </div>
  </div>
</div>