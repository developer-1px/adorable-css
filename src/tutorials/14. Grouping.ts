export const TURORIAL_14_Grouping = `
<!--
Grouping

hover:font(30) hover:c(blue)
-> hover:font(30)+c(blue)

+로 조립해서 Grouping해서 사용 할 수 있습니다.
-->
<h1>Grouping</h1>

<div class="font(20) c(red) hover:font(30) hover:c(blue)">Hello world</div>

<div class="font(20) c(red) hover:font(30)+c(blue)">Hello world</div>

<style>
h1 { margin: 20px 0; font-size: 20px;}
</style>

`.trim()