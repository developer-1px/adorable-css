export const TURORIAL_TEXTBOX = `
<!--

TextBox (TextAlign)

- text(align)은 text-align을 입력할 수 있습니다.
- text(align+align)은 글자의 정렬 방향을 가로와 세로로 조합할 수 있습니다.
- (left | right | center | justify) + (top | bottom | middle | pack)

ex)
text(left): text-align: left;
text(right): text-align: right;
text(center): text-align: center;
text(justify): text-align: justify;

- +를 이용해서 가로와 세로를 조합할 수 있습니다.

ex)
text(left+middle): text-align:left;display:flex;flex-flow:column;justify-content:center;
text(right+bottom): text-align:left;display:flex;flex-flow:column;justify-content:center;

text(pack): {text-align:left;display:flex;flex-flow:column;justify-content:center;
-->

<div class="vbox gap(20)">
  <div class="w(200) h(150) b(#000) text(left)">This is <br/>text(left)</div>
  <div class="w(200) h(150) b(#000) text(middle+right)">This is <br/>text(middle+right)</div>
  <div class="w(200) h(150) b(#000) text(center+bottom)">This is<br/> text(center+bottom)</div>
  <div class="w(200) h(150) b(#000) text(pack)">This is<br/> text(pack)</div>
</div>

`.trim()