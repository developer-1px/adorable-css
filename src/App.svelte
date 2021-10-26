<script lang="ts">
import {generateCss} from "../src[adorable-css]/src/atomizer"
import {parseAtoms} from "../src[adorable-css]/src/parser"
import Design from "./Design.svelte"
import MonacoEditor from "./MonacoEditor.svelte"
import UIVersion from "./UIVersion.svelte"

let element:HTMLElement
let value = `<div class="layer pack">
  <div class="vbox bg(#fff) w(300) r(12) p(32) elevation(6)">

    <div class="vbox gap(10)">
      <div class="font(30/-/-1%) bold">🐳 Hello Adorable!</div>
      <div class="font(16/-/-1%) c(#999)">| Atomic Dynamic Ondand Rapidly</div>
    </div>

    <div class="space(40)"></div>

    <div class="hbox(right) gap(10)">
      <button class="pack bg(#fff) b(none) c(#000) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#eee)">Cancel</button>

      <button class="pack bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000) active:b(#000.2)">OK</button>
    </div>
  </div>
</div>`

$: css = generateCss(parseAtoms(value)).join("\n")

$: if (element && css && value) {
  element.contentWindow.document.body.innerHTML = value + `<style>${css}</style>`
}

const hbox = () => {}
const vbox = () => {}
</script>

<div class="layer vbox overscroll(none)">
  <div class="hbox gap(10) h(64) bb(#ccc) p(10/20)">
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
    <div class="flex(4) vbox(fill)">
      <MonacoEditor bind:value/>
    </div>

    <div class="flex(3) relative pack br(#ccc) check-board">
      <iframe bind:this={element} class="layer w(100%) h(100%) bg(transparent)" frameborder="0"/>
    </div>

    <!--    <Design/>-->

    <div class="flex(2) relative br(#ccc) p(10)">
      <div class="pre monospace font(12)">{css}</div>
    </div>

  </div>
</div>

<UIVersion version="0.0.2"/>
