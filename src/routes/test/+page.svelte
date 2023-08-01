<script lang="ts">
import {generateCss, tokenize} from "src/../packages/vite/src/core/atomizer"

let test = "c(blue)+font(19/42)+c(#D0D0D0)"

$: result = tokenize(test)
$: result2 = generateCss([test])

$: console.log(result)
$: console.log(result2)
</script>

<div class="layer pack">
  <div class="w(800) m(auto) vbox">
    <input type="text" class="b(-) outline(-) bb(#000) p(10)" bind:value={test} autofocus>
    <div class="pre font(10) word-spacing(20)">{result.map(r => r.value).join(" ")}</div>
  </div>
</div>