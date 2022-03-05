export const TURORIAL_12_Important = `
<!--
Important!

important!를 통해서 우선순위를 지정할 수 있습니다.
-->
<h1>important!</h1>

<div class="c(red) c(blue)">c(red) c(blue) red? blue?</div>

<div class="c(red)! c(blue)">c(red)! c(blue) red? blue?</div>

<div class="c(red)! c(blue)!">c(red)! c(blue)! red? blue?</div>

<div class="c(red)!! c(blue)!">c(red)!! c(blue)! red? blue?</div>

<div class="c(red)!! c(blue)!!">c(red)!! c(blue)!! red? blue?</div>

<div class="c(red)!!! c(blue)!!">c(red)!!! c(blue)!! red? blue?</div>

<style>
h1 { margin: 20px 0; font-size: 20px;}
</style>

`.trim()