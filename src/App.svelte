<script lang="ts">
import {generateCss} from "../src[adorable-css]/src/atomizer"
import {parseAtoms} from "../src[adorable-css]/src/parser"
import Design from "./Design.svelte"
import MonacoEditor, {setValue} from "./MonacoEditor.svelte"
import {TURORIAL_0_Hello} from "./tutorials/0. Hello Adorable"
import {TURORIAL_1_COLORS} from "./tutorials/1. Colors"
import {TURORIAL_2_TYPOGRAPHY} from "./tutorials/2. Typography"
import UIVersion from "./UIVersion.svelte"

let element:HTMLElement
let value = TURORIAL_2_TYPOGRAPHY

const tutorials = [
  ["0. Hello AdorableCSS!", TURORIAL_0_Hello],
  ["1. Colors", TURORIAL_1_COLORS],
  ["2. Typography", TURORIAL_2_TYPOGRAPHY],
  ["계속 작업 중입니다...", ""]
]

let currentTutorialIndex = 0

$: css = generateCss(parseAtoms(value)).join("\n")
$: element && (element.contentWindow.document.body.innerHTML = value + `<style>${css}</style>`)

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
    <!--    <div>REPL</div>-->
    <!--    <div>Tutorial</div>-->
    <!--    <div>Docs</div>-->
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
        <button class="p(8/12) pt(12) bb(-) bbw(4) .selected:bbc(orange) .selected:c(#000)" class:selected={type === "Result"} on:click={Result}>Result</button>
        <button class="p(8/12) pt(12) bb(-) bbw(4) .selected:bbc(orange) .selected:c(#000)" class:selected={type === "CSS_output"} on:click={CSS_output}>CSS output</button>
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

<UIVersion version="0.0.3"/>
