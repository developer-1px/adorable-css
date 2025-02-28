<script lang="ts">
  import { generateCss, tokenize, expr, expr2 } from 'src/../packages/vite/src/core/atomizer'

  import { createGenerator } from 'unocss'
  import { adorableCSS } from 'packages/v2/unocss/adorable-css-uno'

  let test = $state('c(blue)+font(19/42)+c(#D0D0D0)')
  let res = $state('')

  const result = $derived(expr2(test))

  console.log(result)
</script>

<div class="layer pack">
  <div class="w(800) m(auto) vbox">
    <input type="text" class="b(-) outline(-) bb(#000) p(10)" bind:value={test} autofocus />
    <div class="pre font(10) word-spacing(20)">> {JSON.stringify(result)}</div>
  </div>
</div>
