export const TURORIAL_5_LAYOUT_FLEXBOX = `
<!--
Layout - Flexbox
AdorableCSS는 flexbox에 기반하여 레이아웃을 아주 쉽게 만들수 있도록 구성하였습니다.
https://youtu.be/qFvOhBqX1-k

1
hbox
: 컨텐츠를 가로로 배치하고 싶다면 hbox(horizontal box)를 사용하세요.
: hbox의 경우 전체 박스를 가운데로 맞춰 정렬하며 자식 엘리먼트의 크기가 지정되지 않을 경우에는 컨텐츠에 맞게 자동으로 늘어납니다.

gap(value)
gap(vertical/horizonal)
: 각 컨텐츠별 간격을 입력할 수 있습니다.
https://caniuse.com/flexbox-gap
@NOTE: IE<=11,  safari<14.1 을 지원해야 한다면 hgap, hgap-reverse를 사용할 수 있습니다.

gap(auto) : space-between



1-2
배치를 변경해보자)

hbox(top)
hbox(bottom)
hbox(fill)
hbox(right)
hbox(reverse)

+로 조립해서 사용할수 있다.

hbox(top+right)
hbox(bottom+right)
hbox(fill+reverse+left)

+ 기호를 사용하여 bottom+right / top+reverse 등 자유롭게 컨텐츠를 배치하세요

1-3 h(fill)
: fill = fill-parent
: 개별 항목에 height를 fill로 지정하면 부모 컨텐츠 만큼의 크기를 갖습니다.

1-4 hbox(fill)
: 모든 자식 컨텐츠의 크기를 부모 컨텐츠와 같이 만들어 줍니다. (단, 자식의 height가 지정이 될 경우에는 지정된 height를 우선합니다.)


2
pack / space-between
pack은 모든 컨텐츠를 가운데로 배치합니다.
버튼이나 모달 팝업 등등 여러곳에서 자주 사용합니다. 자식 컨텐츠는 여러개가 있을 경우 같이 가운데에 배치됩니다.

vpack / space-between
vpack은 pack의 column 버전입니다. 모든 컨텐츠를 column 가운데로 배치합니다.


5
vbox
: 컨텐츠를 세로로 배치하고 싶다면 vbox(vertical box)를 사용하세요.
: 사용법은 hbox와 동일 합니다. 단, vbox는 기본값이 fill = stretch 입니다.
-->


<h1>Box Model</h1>

<div class="vbox gap(20) bg(#fff) p(10)">

  <h2>hbox + gap(20)</h2>

  <div class="hbox gap(20) p(10) b(orange)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(48) bg(orange) pack">b</div>
    <div class="w(48) h(48) bg(orange) pack">o</div>
    <div class="w(48) h(48) bg(orange) pack">x</div>
  </div> 
  
  <h2>hbox + ✨gap(auto)</h2>

  <div class="hbox gap(auto) p(10) b(orange)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(48) bg(orange) pack">b</div>
    <div class="w(48) h(48) bg(orange) pack">o</div>
    <div class="w(48) h(48) bg(orange) pack">x</div>
  </div> 


  <h2>hbox(top)</h2>  
  <div class="hbox(top) gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="w(48) h(50) bg(orange) pack">(top)</div>
  </div>
  
  <h2>hbox(bottom+right)</h2>  
  <div class="hbox(bottom+right) gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="p(10) h(50) bg(orange) pack">(bottom+right)</div>
  </div>

  <h2>pack</h2>  
  <div class="hbox pack b(orange) p(10) h(100)">
    <div class="p(10) bg(orange) pack">pack</div>
  </div>

  <h2>vpack</h2>  
  <div class="vpack b(orange) p(10) h(100)">
    <div class="vpack p(10) bg(orange)">
      <div>vpack</div>
      <div>column</div>
    </div>
  </div>
    
  <br/>
    
  <h2>hbox(fill)</h2>  
  <div class="hbox(fill) gap(10) b(orange) p(10) h(200)">
    <div class="w(48) bg(orange) pack">h</div>
    <div class="w(72) h(hug) bg(orange) pack">h(hug)크기를 지정하면<br/>컨텐츠 크기</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) bg(orange) pack">x</div>
    <div class="p(10) bg(orange) pack">(fill)</div>
  </div>

  <h2>✨w(fill)</h2>  
  <div class="hbox gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="w(fill) h(100) bg(orange) pack">w(fill)</div>
    <div class="w(48) p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
  </div>

  <h2>✨h(fill)</h2>  
  <div class="hbox gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="p(10) h(fill) bg(orange) pack">h(fill)</div>
  </div>
</div>

`.trim()
