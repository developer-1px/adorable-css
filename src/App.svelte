<script lang="ts">
import {generateCss} from "../src[adorable-css]/src/atomizer"
import {parseAtoms} from "../src[adorable-css]/src/parser"
import MonacoEditor from "./MonacoEditor.svelte"
import UIVersion from "./UIVersion.svelte"

let element:HTMLElement
let value = `<div class="bg(gold) c(#fff) p(10) r(8)">click me</div>`

$: css = generateCss(parseAtoms(value)).join("\n")

$: console.log("css", css)

$: if (element && css && value) {
  element.contentWindow.document.body.innerHTML = value + `<style>${css}</style>`
}
</script>

<div class="layer hbox(fill)">
  <div class="flex vbox(fill)">
    <MonacoEditor bind:value/>
  </div>

  <div class="flex relative pack br(#ccc)">
    <iframe bind:this={element} class="layer w(100%) h(100%)" frameborder="0"/>
  </div>

  <div class="flex relative br(#ccc) p(10)">
    <div class="pre monospace font(12)">{css}</div>
  </div>

  <div class="w(300) bg(#fff)">

    <div class="p(20) bb(#ccc)">
      <div class="bold">Auto Layout</div>

      <button>→</button>
      <button>↓</button>

      <div>gap</div>
      <input type="number" value="0"/>

      <div>padding()</div>
      <input type="number" value="0"/>

      <div class="p(10) pack">
        <div class="b(#ccc) w(200) h(200) relative">
          <div class="bg(#4f80ff) layer(top+left) m(10) p(10)">box</div>
        </div>
      </div>

      <select>
        <option value="packed">packed</option>
        <option value="space-beetween">space beetween</option>
      </select>
    </div>

    <div class="p(20) bb(#ccc)">
      <div class="bold">Resize</div>
      <div>width</div>
      <div>height</div>
    </div>

    <div class="p(20) bb(#ccc)">
      <div class="bold">Box</div>
      <div>Radius</div>
      <div>Fill</div>
      <div>Border</div>
      <div>Shadow</div>
    </div>


    <div class="p(20) bb(#ccc)">
      <div class="bold">Text</div>

      <div>Roboto</div>

      <div class="hbox gap(10)">
        <div>Regular</div>
        <div>12</div>
      </div>

      <div class="hbox gap(10)">
        <div>line-height</div>
        <div>letter-spacing</div>
      </div>

      <div class="hbox gap(10)">
        <div>left</div>
        <div>center</div>
        <div>right</div>
        <div>justify</div>
      </div>
    </div>
  </div>
</div>


<UIVersion version="0.0.1"/>