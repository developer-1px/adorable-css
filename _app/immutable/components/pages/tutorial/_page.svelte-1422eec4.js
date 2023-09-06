import{S as de,i as ce,s as ne,e as f,c as b,b as w,f as p,o as h,h as J,n as Q,M as ve,Q as G,R as be,a as B,u as ge,t as he,g as V,v as ue,m as oe,d as pe,T,j as n,w as me,r as K,U as we,k as xe,x as ye,y as ke,V as _e,z as Se,G as Te}from"../../../chunks/index-bc0b20f1.js";import{r as Re,g as Ie,p as Oe}from"../../../chunks/atomizer-1eee48ec.js";function se(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const le=`
<!--
ฅ^•ﻌ•^ฅ ♥

AdorableCSS에 놀러오신것을 환영합니다.
AdorableCSS는 아주 단순한 문법으로 되어 있습니다. 아래 HTML을 삭제 후
 
<div class="font(20) c(red)">Hello world</div>
 
라고 입력해보세요.

class="property(value)" 의 형식의 문법으로 작성해 주시면 됩니다.
원하는 속성들은 Tutorial이나 Reference를 보고 참고해주세요.

여기 코드는 수정이 가능하니 마음껏 테스트 해보세요!
-->

<div class="vbox pack gap(20) text-center p(50)">
  <div class="hbox font(100/-/-15%) AppleSD opacity(0.7) hover:scale(1.05) hover:opacity(1) transition(.4s) pointer group">
    <span class="group-hover:rotate(-10deg) group-active:rotate(10deg) transition(.4s)">ฅ</span>
    <span>^•ﻌ•^</span>
    <span class="group-hover:rotate(10deg) group-active:rotate(-10deg) transition(.4s)">ฅ <span class="font(30) c(#ccc) group-hover:c(#fb3958) vertical-top transition(.4s)">♥</span></span>
  </div>

  <div>
    <h1 class="font(30) 200 c(#666)">AdorableCSS</h1>
    <p>✨ Rapid on-demand atomic css framework</p>
  </div>
</div>

`.trim(),Le=`
<!--

Colors
: 먼저 글자색을 변경해 봅시다.
: 색상은 아래와 같이 여러가지 방식을 지원하며 배경색과 테두리색에도 공통으로 적용됩니다. eg) bg(), b()


sample)

c(red) 색상이름

c(#0080ff) HEX

c(#0080ff.8) HEX + alpha

c(255,0,0) rgb

c(255,0,0,.7) rgba

c(100,50%,50%) hsl

c(100,50%,50%,.5) hsla

c(--css-var) css-variable


@TODO: bg(...), b(...)로도 한번 해보세요.  
-->


<div class="font(20/200%) bg(#fff) p(20)" style="--css-var: green">

  <div class="c(red)">c(red)</div>

  <div class="c(#0080ff)">c(#0080ff) HEX</div>

  <div class="c(#0080ff.5)">c(#0080ff.5) HEX + alpha</div>

  <div class="c(0,255,0)">c(0,255,0) RGB</div>

  <div class="c(0,255,0,.5)">c(0,255,0,.5) RGBA</div>

  <div class="c(100,50%,50%)">c(100,50%,50%) HSL</div>

  <div class="c(100,50%,50%,.5)">c(100,50%,50%,.5) HSLA</div>

  <div class="c(--css-var)">c(--css-var) css-variable</div>

  <div class="bg(red)">bg(red)</div>

  <div class="bg(#0080ff)">bg(#0080ff) HEX</div>

  <div class="bg(#0080ff.5)">bg(#0080ff.5) HEX + alpha</div>

  <div class="bg(0,255,0)">bg(0,255,0) RGB</div>

  <div class="bg(0,255,0,.5)">bg(0,255,0,.5) RGBA</div>

  <div class="bg(100,50%,50%)">bg(100,50%,50%) HSL</div>

  <div class="bg(100,50%,50%,.5)">bg(100,50%,50%,.5) HSLA</div>

  <div class="bg(--css-var)">bg(--css-var) css-variable</div>
</div>

`.trim(),Ae=`
<!--
Media Query
https://developer.mozilla.org/ko/docs/Web/CSS/Media_Queries/Using_media_queries 

<div class="@w(360~):c(red)">@w(360~):c(red)</div>
<div class="@w(~720):c(red)">@w(~720):c(red)</div>
<div class="@w(360~720):c(red)">@w(360~720):c(red)</div>

@media only screen and (min-width:360px){html .\\@w\\(360\\~\\)\\:c\\(red\\){color:red;}}
@media only screen and (max-width:719.98px){html .\\@w\\(\\~720\\)\\:c\\(red\\){color:red;}}
@media only screen and (min-width:360px and max-width:719.98px){html .\\@w\\(360\\~720\\)\\:c\\(red\\){color:red;}}
-->

<div class="vbox vgap(20)">

  <div class="@w(360~):c(red)">@w(360~):c(red)</div>
  <div class="@w(~720):c(red)">@w(~720):c(red)</div>
  <div class="@w(360~720):c(red)">@w(360~720):c(red)</div>

</div>

`.trim(),Ce=`
<!--
Class Selector
클래스 조건에 맞는 속성을 선택하는 선택자 기능입니다.

ex)
.className:c(red)

그 밖에 Children Selector(>), Descendants Selector(>>) 도 가능합니다.  
-->
<h1>class Selector</h1>

<div class="hbox gap(20)">
  <div class="c(#000) .selected:c(red)">link #1</div>
  <div class="c(#000) .selected:c(red)">link #1</div>
  <div class="c(#000) .selected:c(red) selected">link #1</div>
  <div class="c(#000) .selected:c(red)">link #1</div>
</div>

<h1>class Selector & Descendants</h1>

<div class="hbox gap(20) selected">
  <div class=".selected:c(red)">link #1</div>
  <div class=".selected:c(red)">link #1</div>
  <div class=".selected:c(red)">link #1</div>
  <div class=".selected:c(red)">link #1</div>
</div>

<h1>Children Selector</h1>

<div class="hbox gap(20) selected >div:c(blue) >div.selected:c(red)">
  <div>link #1</div>
  <div class="selected">link #1</div>
  <div>link #1</div>
  <div>link #1</div>
</div>

<h1>Descendants Selector</h1>

<div class="hbox gap(20) selected >>a:c(blue)">
  <div>link <a href="#">#1</a></div>
  <div>link <a href="#">#2</a></div>
  <div>link <a href="#">#3</a></div>
  <div>link <a href="#">#4</a></div>
</div>


<!-- New 1.2.7 -->

<h1>Children Selector Shortcuts</h1>

<div class="hbox gap(20) >c(blue)">
  <div>link #1</div>
  <div class="selected">link #1</div>
  <div>link #1</div>
  <div>link #1</div>
</div>

<h1>Descendants Selector Shortcuts</h1>

<div class="hbox gap(20) >>c(blue)">
  <div>link <a href="#">#1</a></div>
  <div>link <a href="#">#2</a></div>
  <div>link <a href="#">#3</a></div>
  <div>link <a href="#">#4</a></div>
</div>

<style>
h1 { margin: 20px 0; font-size: 20px;}
</style>
`.trim(),Ue=`
<!--
Important!

- ! 통해서 !important를 지정하여 우선순위를 지정할 수 있습니다.
- !! 개수에 따라서 더 높은 우선순위를 지정할 수 있습니다. 
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

`.trim(),Ee=`
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

`.trim(),Fe=`
<!--

Typography

1. font(...)

font()는 font-size / line-height / letter-spacing 을 입력할 수 있습니다.

font(20) { font-size: 20px }
font(20/1.5) { font-size: 20px; line-height:1.5 }
font(20/150%/-1%) { font-size: 20px; line-height:150%; letter-spacing:-1em }
font(20/-/-1%) { font-size: 20px; letter-spacing:-1em } // -는 skip

@NOTE
line-height(1.3)
letter-spacing(1.5)
word-spacing(1.5)
따로 사용도 가능합니다.


2. font-weight

thin {font-weight:100;}
light {font-weight:200;}
demilight {font-weight:300;}
regular {font-weight:normal}
medium {font-weight:500;}
semibold {font-weight:600;}
bold {font-weight:bold}
heavy {font-weight:900;}

100 {font-weight:100;}
200 {font-weight:200;}
300 {font-weight:300;}
400 {font-weight:400;}
500 {font-weight:500;}
600 {font-weight:600;}
700 {font-weight:700;}
800 {font-weight:800;}
900 {font-weight:900;}


3. font-style

italic {font-style:italic}
overline {text-decoration:overline}
underline {text-decoration:underline}
line-through, strike, del {text-decoration:line-through}

sans-serif {font-family:sans-serif}
serif {font-family:serif}
monospace {font-family:menlo,monospace}
cursive {font-family:cursive}
fantasy {font-family:fantasy}
system-ui {font-family:system-ui}

small-caps {font-variant:small-caps}
lowercase {text-transform:lowercase}
uppercase {text-transform:uppercase}
capitalize {text-transform:capitalize}
-->


<div class="bg(#fff) p(20) >h1:font(20)+bb(#ccc)+m(40/0/20)" style="--css-var: green">

  <h1>Font</h1>
  
  <div class="font(14)">font(14)</div>
  <div class="font(20)">font(20)</div>
  <div class="font(24)">font(24)</div>

  <h1>line-height</h1>

  <div class="hbox gap(10)">
    <div class="font(20/1.5)">font<br/>(20/1.5)</div>
    <div class="font(20/2)">font<br/>(20/2)</div>
    <div class="font(20/3)">font<br/>(20/3)</div>
  </div>

  <h1>Font Weight</h1>

  <div class="thin">thin</div>
  <div class="light">light</div>
  <div class="demilight">demilight</div>
  <div class="regular">regular</div>
  <div class="medium">medium</div>
  <div class="semibold">semibold</div>
  <div class="bold">bold</div>
  <div class="heavy">heavy</div>
  
  <br/>
  
  <div class="100">100</div>
  <div class="200">200</div>
  <div class="300">300</div>
  <div class="400">400</div>
  <div class="500">500</div>
  <div class="600">600</div>
  <div class="700">700</div>
  <div class="800">800</div>
  <div class="900">900</div>

  <h1>font-style</h1>

  <div class="italic">italic</div>
  <div class="overline">overline</div>
  <div class="underline">underline</div>
  <div class="line-through">line-through</div>
  <div class="strike">strike</div>
  <div class="del">del</div>
  
  <br/>
  
  <div class="sans-serif">sans-serif</div>
  <div class="serif">serif</div>
  <div class="monospace">monospace</div>
  <div class="cursive">cursive</div>
  <div class="fantasy">fantasy</div>
  <div class="system-ui">system-ui</div>

  <br/>

  <div class="small-caps">small-caps</div>
  <div class="lowercase">lowercase</div>
  <div class="uppercase">uppercase</div>
  <div class="capitalize">capitalize</div>
</div>

`.trim(),Be=`
<!--
Box Model
- width / height
: w(32) h(32)

w(32) { width: 32px }
w(~32) { max-width: 32px }
w(32~) { min-width: 32px }
w(32~63) { min-width: 32px; max-width: 32px }
w(1/5) { width:20% }
w(100%-20px) { width: calc(100% - 20px) } // 주의: calc에서는 px를 생략할 수 없습니다!

h(100vh) -webkit-fill-available

- margin / padding / border / border-radius + (top / right / bottom / left)
: m/p/b/r + t/r/b/l 이런식의 조합방식을 사용합니다.
: box-model는 빈도를 고려해 축약해서 사용합니다.

ex)
m(10) { margin: 10px }
mx(10) { margin-left: 10px; margin-right: 10px; }

p(10/20) { padding: 10px 20px; }
pl(10) { padding-left: 10px; }
py(10) { padding-top: 10px; padding-bottom: 10px; }

br(#ccc) { border-right: 1px solid #ccc }
bbw(2) { border-bottom-width: 2px }

r(10) { border-radius: 10px }
r(10/10/20/20) { border-radius: 10px 10px 20px 20px }
r(100%) { border-radius: 100% }
rtl(5) { border-top-left-radius: 100% }
rr(10) { border-top-right-radius: 10px; border-bottom-right-radius: 10px;  

Box sizing
border-box { box-sizing: border-box }
content-box { box-sizing: content-box }
-->


<h1>Box Model</h1>

<div class="w(64) h(64) bg(orange) p(10) m(10)">64 x 64</div>

<div class="w(50%) w(~320) b(orange) bg(#fff) p(10)">w(50%) w(~320) = width:100%; max-width: 320px</div>

<div class="w(128) h(128) r(20) bg(red) p(20)">128 x 128 r(20)</div>

<div class="bl(4/red) bg(#f00.2) p(20) m(10)">quoto</div>

<div class="bg(blue) c(#fff) rl(20) p(20)">border-radius left</div>

<div class="bg(#fff) w(100) h(100) bt(red) br(8/orange) bb(dashed) bl(dotted/blue) m(20)">bt br bb bl</div>

`.trim(),Ve=`
<!--
Overflow
- 자주쓰는 기능 속성을 짧게 쓸 수 있도록 편의성 제공

clip { overflow: hidden }
scroll {overflow:auto;}
scroll-x {overflow-x:auto;overflow-y:hidden}
scroll-y {overflow-x:hidden;overflow-y:auto;}
scrollbar {overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}
no-scrollbar { &::-webkit-scrollbar {display:none;} }
no-scrollbar-x { &::-webkit-scrollbar:horizontal {display:none;} }

- 필요한 경우 css에서 지원하는 모든 값을 사용할 수 있다.
overflow(value) { overflow: <value> }
overflow-x(value) { overflow-x: <value> }
overflow-y(value) { overflow-y: <value> }

overscroll(value) { overscroll-behavior:<value> }
overscroll-x(value) { overscroll-behavior-x:<value>}
overscroll-y(value) { overscroll-behavior-y:<value>}


Overflow + Text

nowrap {white-space:nowrap;flex-shrink:0;}
nowrap... {white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1}
line-clamp(value) { display:-webkit-box;-webkit-line-clamp:<value>;-webkit-box-orient:vertical;overflow:hidden }
-->


<h1>Overflow</h1>

<div class="vbox gap(20)">
  
  <h2>default (=overflow:visible)</h2>
  <div class="w(200) h(100) bg(#eee) b(red)">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <div class="h(50)"></div>

  <h2>clip (=overflow:hidden)</h2>
  <div class="w(200) h(50) bg(#eee) b(red) clip">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <h2>scroll</h2>
  <div class="w(200) h(50) bg(#eee) b(red) scroll">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>
</div>


<h1 class="mt(50)">Overflow with Text</h1>

<div class="vbox gap(20)">

  <h2>nowrap</h2>
  <div class="w(200) bg(#eee) b(red) nowrap">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <h2>nowrap clip</h2>
  <div class="w(200) bg(#eee) b(red) nowrap clip">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <h2>nowrap...</h2>
  <div class="w(200) bg(#eee) b(red) nowrap...">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <h2>line-clamp(2)</h2>
  <div class="w(200) bg(#eee) b(red)">
    <div class="line-clamp(2)">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  </div>

  <h2>line-clamp(3)</h2>
  <div class="w(200) bg(#eee) b(red)">
    <div class="line-clamp(3)">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  </div>
</div>

<style>
h1 {font-size:20px;font-weight:bold;margin:0 0 10px 0}
h2 {font-weight:bold}
</style>
`.trim(),ze=`
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
hbox(fill) = hbox(stretch)  // stretch는 오타가 자주나고 길어서 fill alias를 제공합니다.
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

3
space-between space-around / space-evenly
:space-between은 각 컨텐츠를 같은 간격으로 벌려놓습니다. (NAVBar 같은 곳에서 사용합니다.) 

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

  <br/> 
  
  <h2>space-between / space-around / space-evenly</h2>  

  <div class="hbox space-between b(orange) w(300)">
    <div class="p(10) bg(orange) pack">space</div>
    <div class="p(10) bg(orange) pack">-</div>
    <div class="p(10) bg(orange) pack">between</div>
  </div>

  <div class="hbox space-around b(orange) w(300)">
    <div class="p(10) bg(orange) pack">space</div>
    <div class="p(10) bg(orange) pack">-</div>
    <div class="p(10) bg(orange) pack">around</div>
  </div>

  <div class="hbox space-evenly b(orange) w(300)">
    <div class="p(10) bg(orange) pack">space</div>
    <div class="p(10) bg(orange) pack">-</div>
    <div class="p(10) bg(orange) pack">evenly</div>
  </div>
</div>

`.trim(),De=`
<!--
Layout - Position
https://youtu.be/T5wMhoVHFU0

Basic
- 우선 css와 1:1 대응을 하는 속성

1. absolute / fixed / relative / static / sticky / sticky-top / sticky-left 
: css position 타입을 변경할 수 있다.

2. top / right / bottom / lef
: css의 top, right, bottom, left의 값을 조절 할 수 있다.

3. z
: css의 z-index값을 변경할 수 있다.


Extension

1. layer
: 전체를 덮는 형태의 레이아웃 
: 모달 팝업등에 dimmed를 까는 등 빈번히 사용되어 속성에 추가 하였습니다.
: absolute top(0) left(0) right(0) bottom(0)의 축약형입니다.

2. layer(top) / layer(right) / layer(bottom) / layer(left)
: 방향을 지정해주면 해당 면에 붙는 형태로 붙여줍니다.
: NAV나 BAR등을 고정할때 주로 사용합니다.


3. layer(top+left) / layer(top+right) / layer(bottom+left) / layer(bottom+right)
: top/bottom + left/right 는 조립이 가능합니다.
: 팝업의 닫기 버튼 등에서 margin과 함께 주로 사용합니다.


4. layer(top:10) 과 같이 값을 지정해주면 해당 값만큼 떨어진 위치에 붙여줍니다.

4. layer(top+outside) 
: layer(top)과 동일하지만, layer(top)은 부모엘리먼트의 바깥쪽 기준으로 붙습니다. 
-->


<h2>Position</h2>

<div class="vbox gap(20) bg(#fff) p(10)">

  <h2>layer</h2>
  <div class="relative w(100) h(100) b(#ff6347) pack">
    <div class="font(90)">🐳</div>
    <div class="layer pack bg(#ff6347.5)">layer</div>
  </div>


  <h2>layer(top) layer(right) layer(bottom) layer(left)</h2>
  
  <div class="hbox gap(10)">
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(top) pack bg(#ff6347.5)">layer(top)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(right) pack bg(#ff6347.5)">layer(right)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(bottom) pack bg(#ff6347.5)">layer(bottom)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(left) pack bg(#ff6347.5)">layer(left)</div>
    </div>
  </div>


  <h2>layer(top+left) / layer(top+right) / layer(bottom+right) / layer(bottom+right) </h2>
  
  <div class="hbox gap(10)">
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(top+left) pack bg(#ff6347.5) text-center">layer<br/>(top+left)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(top+right) pack bg(#ff6347.5) text-center">layer<br/>(top+right)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(bottom+left) pack bg(#ff6347.5) text-center">layer<br/>(bottom<br/>+left)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(bottom+right) pack bg(#ff6347.5) text-center">layer<br/>(bottom<br/>+right)</div>
    </div>
  </div>


  <h2>layer(top:10) / layer(top:50%)</h2>

  <div class="hbox gap(10)">
    <div class="relative w(200) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(top:10) pack bg(#ff6347.5)">layer(top:10)</div>
    </div>
    
    <div class="relative w(200) h(100) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(top:50%) pack bg(#ff6347.5)">layer(top:50%)</div>
    </div>    
  </div>


  <h2>layer + outside</h2>

  <div class="hbox gap(10)">
    <div class="relative w(200) h(200) b(#ff6347) pack">
      <div class="font(90)">🐳</div>
      <div class="layer(top+outside) pack bg(#ff6347.5)">layer(top+outside)</div>
      <div class="layer(right+outside) pack bg(#ff6347.5) w(150)">layer(top+outside)</div>
      <div class="layer(bottom+outside) pack bg(#ff6347.5)">layer(bottom+outside)</div>
    </div>    
  </div>


</div>

`.trim(),Me=`
<!--
Prefix
https://www.youtube.com/watch?v=12YGCglbdrY&list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL&index=5 

"hover:": {media: \`(hover:hover)\`, selector: \`&:hover, &.\\\\:hover\`},
"active:": {selector: \`html &:active, html &.\\\\:active\`},
"focus:": {selector: \`html &:focus, html &.\\\\:focus\`},
"focus-within:": {selector: \`html &:focus-within, html &.\\\\:focus-within\`},
"checked:": {selector: \`html &:checked, html &.\\\\:checked\`},
"read-only:": {selector: \`html &:read-only, html &.\\\\:read-only\`},
"enabled:": {selector: \`html &:enabled, html &.\\\\:enabled\`},
"disabled:": {selector: \`html body &:disabled, html body &.\\\\:disabled, html body &[disabled]\`},

"group-hover:": {selector: \`.group:hover &, html .group.\\\\:hover &\`},
"group-active:": {selector: \`html .group:active &, html .group.\\\\:active &\`},
"group-focus:": {selector: \`html .group:focus &, html .group.\\\\:focus &\`},
"group-focus-within:": {selector: \`html .group:focus-within &, html .group\\\\:focus-within\`},
"group-checked:": {selector: \`html .group:checked &, html .group.\\\\:checked &\`},
"group-read-only:": {selector: \`html .group:read-only &, html .group.\\\\:read-only &\`},
"group-enabled:": {selector: \`html .group:enabled &, html .group.\\\\:enabled &\`},
"group-disabled:": {selector: \`html body .group:disabled &, html body .group[disabled] &, html body .group.disabled &\`},

"placeholder:": {selector: \`&::placeholder\`},
-->

<div class="vbox gap(20) bg(#fff) p(10)">
  <div>
    <h2>:hover</h2>
    <div class="w(100) h(100) b(#000) font(12) pack pointer hover:bg(orange) hover:c(#fff) hover:font(18) transition(.5s)">Hover Me</div>
  </div>

  <div>
    <h2>:hover vs group-hover</h2>
    <div class="w(400) h(200) b(#000) font(12) pack gap(10)">
      <div class="w(100) h(100) b(#000) font(12) pack pointer hover:bg(orange) hover:c(#fff) hover:font(18) transition(.5s) pointer">hover1</div>
      <div class="w(100) h(100) b(#000) font(12) pack pointer hover:bg(red) hover:c(#fff) hover:font(18) transition(.5s) pointer">hover2</div>
    </div>
  </div>
    
  <div>
    <div class="group w(400) h(200) b(#000) font(12) pack gap(10) pointer">
      <div class="w(100) h(100) b(#000) font(12) pack pointer group-hover:bg(orange) group-hover:c(#fff) group-hover:font(18) transition(.5s)">group-hover1</div>
      <div class="w(100) h(100) b(#000) font(12) pack pointer group-hover:bg(red) group-hover:c(#fff) group-hover:font(18) transition(.5s)">group-hover2</div>
    </div>
  </div>
</div>

`.trim(),He=`
<!--
Visibility

화면의 표시여부를 결정합니다. 각각의 속성들은 모두 화면에서 사라지게 만듭니다.
그렇지만 각각의 속성들은 다른 방식으로 사라지게 만듭니다.

아래 3가지를 고려하여 사용하세요.
1. 자리차지 여부
2. 사용자 입력 가능
3. 스크린 리더기에 읽히는지 여부

=================

1) .none {display:none}
- 화면에서 사라집니다.
- 자리를 차지하지 않습니다.
- 사용자 입력도 불가능합니다.
- 스크린 리더기에 읽히지 않습니다.

2) .hidden {visibility:hidden}
- 화면에서 보이지 않지만 자리를 차지합니다.
- 사용자 입력은 불가능합니다.
- 스크린 리더기에도 읽히지 않습니다.

참고) invisible도 같은 역할을 합니다. (tailwindCSS 네이밍)
     visible을 사용하면 다시 보이게 됩니다. .visible {visibility:visible}

3) .opacity(0) {opacity:0}
- 투명하게 만들어 화면에서 사라집니다.
- 자리를 차지합니다.
- 사용자 입력은 가능합니다.
- 스크린 리더기에 읽힙니다. 

4) .blind: {position:absolute;width:1px;height:1px;padding:0;border:0;margin:-1px;white-space:nowrap;overflow:hidden;clip-path:inset(100%);}
- 화면에서 사라집니다. (실제로는 1px만큼의 공간을 차지합니다.)
- 자리를 차지하지 않습니다.
- 사용자 입력은 불가능합니다.
- 스크린 리더기에 읽힙니다.

참고) sr-only도 같은 역할을 합니다. (tailwindCSS 네이밍)
     sr-only는 screen reader only의 약자입니다.

-->
<h1>Visibility</h1>
<p>아래 컨텐츠들은 보이지 않는게 맞습니다.</p>

<div class="none">none</div>
<div class="hidden invisible">hidden(=invisible)</div>
<div class="blind sr-only">blind(=sr-only)</div>
<div class="opacity(0)">opacity(0)</div>

`.trim(),Pe=`
<!--
Prefix
https://www.youtube.com/watch?v=12YGCglbdrY&list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL&index=5 

:nth-child(3n+1)
-->

<div class="vbox">
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
</div>

`.trim(),Ye=`
<!--
Prefix
https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements 
* 브라우저에 따라 지원하지 않을 수 있습니다.

::after (:after)
::backdrop (en-US) 
::before (:before)
::cue (en-US)
::cue-region (en-US)
::first-letter (:first-letter) (en-US)
::first-line (:first-line) (en-US)
::grammar-error (en-US) 
::marker (en-US) 
::part() (en-US) 
::placeholder 
::selection (en-US)
::slotted() (en-US)
::spelling-error (en-US) 
-->

<div class="vbox vgap(20)">

  <div>first-line::c(red)</div>
  <div class="bg(#fff) first-line::c(red)">
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </div>
  
  <div>first-letter::c(red)</div>
  <div class="bg(#fff) first-letter::c(red)">
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </div>

  <div>selection::bg(red) (드래그 해보세요.)</div>
  <div class="bg(#fff) selection::bg(red)">
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </div>


  <div>-webkit-scrollbar-*</div>

  <div class="bg(#fff) h(100) scroll-y -webkit-scrollbar::w(4) -webkit-scrollbar-thumb::bg(red)">
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </div>
</div>

`.trim(),Xe="vs",qe=!0,Ge=[{background:"FFFFFF",token:""},{foreground:"c41a16",token:"string"},{foreground:"1c00cf",token:"constant.numeric"},{foreground:"aa0d91",token:"keyword"},{foreground:"000000",token:"keyword.operator"},{foreground:"aa0d91",token:"constant.language"},{foreground:"990000",token:"support.class.exception"},{foreground:"000000",token:"entity.name.function"},{fontStyle:"bold underline",token:"entity.name.type"},{fontStyle:"italic",token:"variable.parameter"},{foreground:"888888",token:"comment"},{foreground:"ff0000",token:"invalid"},{background:"e71a1100",token:"invalid.deprecated.trailing-whitespace"},{foreground:"000000",background:"fafafafc",token:"text source"},{foreground:"aa0d91",token:"meta.tag"},{foreground:"aa0d91",token:"declaration.tag"},{foreground:"000000",fontStyle:"bold",token:"support"},{foreground:"aa0d91",token:"storage"},{fontStyle:"bold underline",token:"entity.name.section"},{foreground:"000000",fontStyle:"bold",token:"entity.name.function.frame"},{foreground:"333333",token:"meta.tag.preprocessor.xml"},{foreground:"994500",fontStyle:"italic",token:"entity.other.attribute-name"},{foreground:"881280",token:"entity.name.tag"}],Ne={"editor.foreground":"#000000","editor.background":"#FFFFFF","editor.selectionBackground":"#BAD6FD","editor.lineHighlightBackground":"#FFFFFF","editorCursor.foreground":"#000000","editorWhitespace.foreground":"#B3B3B3F4"},je={base:Xe,inherit:qe,rules:Ge,colors:Ne};function We(e){let i;return{c(){i=f("div"),this.h()},l(t){i=b(t,"DIV",{class:!0}),w(i).forEach(p),this.h()},h(){h(i,"class","h(100%)")},m(t,r){J(t,i,r),e[3](i)},p:Q,i:Q,o:Q,d(t){t&&p(i),e[3](null)}}}function Qe(e,i,t){let{value:r=""}=i,a=null,s;const _=l=>{s&&s.setValue(l)};ve(()=>{require.config({paths:{vs:"https://unpkg.com/monaco-editor@latest/min/vs"}}),window.MonacoEnvironment={getWorkerUrl:()=>l};let l=URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`],{type:"text/javascript"}));return require(["vs/editor/editor.main"],function(){monaco.editor.defineTheme("adorableCSS",je),s=monaco.editor.create(a,{value:r,language:"html",automaticLayout:!0,scrollBeyondLastLine:!1,readOnly:!1,theme:"adorableCSS",tabSize:2,fontSize:"13px",overviewRulerLanes:0,wordWrap:"on",minimap:{enabled:!1}}),s.onDidChangeModelContent(x=>{t(1,r=s.getValue())}),s.addCommand(monaco.KeyMod.CtrlCmd|monaco.KeyCode.KeyS,function(){s.getAction("editor.action.formatDocument").run()})}),()=>{s&&s.dispose()}});function c(l){G[l?"unshift":"push"](()=>{a=l,t(0,a)})}return e.$$set=l=>{"value"in l&&t(1,r=l.value)},[a,r,_,c]}class Ke extends de{constructor(i){super(),ce(this,i,Qe,We,ne,{value:1,setValue:2})}get setValue(){return this.$$.ctx[2]}}const Je=`
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

`.trim(),Ze=`
<!--
<Basic Position>

static => position: static;
fixed => position: fixed;
absolute => position: absolute;
relative => position: relative;

sticky => position: sticky
sticky-top => position: sticky; top: 0;
sticky-left => position: sticky; left: 0;
sticky-right => position: sticky; right: 0;
sticky-bottom => position: sticky; bottom: 0;

top(value) => top: value;
right(value) => right: value;
bottom(value) => bottom: value;
left(value) => left: value;

z(value) => z-index: value;


<Advanced Position>

1. x(), y()
- css의 top, right, bottom, left의 값을 조금 더 간단한 표현으로 지정할 수 있습니다.
: x(10) => left:10px;
: x(~10) => right:10px;
: x(10~20) => left:10px; right:20px;

2. x(center), y(center)
- 가운데 정렬을 지정할 수 있습니다.
: x(center) => left:50%; transform:translateX(-50%);

3. absolute(x,y) / reative, fixed, sticky 모두 동일합니다.
- 조금 더 축약된 표현으로 position과 x, y값을 한번에 지정할 수 있습니다. 
: absolute(10,20) => position:absolute; left:10px; top:20px;
: absolute(~10,~20) => position:absolute; right:10px; bottom:20px;
: absolute(10~20,30~40) => position:absolute; left:10px; right:20px; top:30px; bottom:40px;
-->

<div class="relative w(400) h(300) b(#ff6347)">
  <div class="absolute bg(yellow)">absolute</div>
  <div class="absolute(20,20) bg(#ff6347.5)">absolute(20,20)</div>
  <div class="absolute x(5) y(100) bg(blue) c(#fff)">absolute x(5) y(100)</div>
  <div class="absolute x(~5) y(~5) bg(green) c(#fff)">absolute x(~5) y(~5)</div>
  
  <div class="absolute x(center) y(50) bg(aqua) nowrap">absolute x(center) y(50)</div>
  <div class="absolute x(center+50px) y(80) bg(aqua) nowrap">absolute x(center+50px) y(50)</div>
  <div class="absolute(center) bg(tomato)">absolute(center)</div>

  <div class="absolute bottom(0) bg(khaki)">absolute bottom(0)</div>

  <div class="fixed(~0,0) bg(aqua)">fixed(~0,0)</div>
</div>

`.trim();function ae(e,i,t){const r=e.slice();return r[14]=i[t][0],r[15]=i[t][1],r[17]=t,r}function re(e){let i,t=e[14]+"",r,a,s;function _(){return e[10](e[14],e[15],e[17])}return{c(){i=f("div"),r=he(t),this.h()},l(c){i=b(c,"DIV",{class:!0});var l=w(i);r=pe(l,t),l.forEach(p),this.h()},h(){h(i,"class","c(#000) pointer p(10/20) r(10) hover:c(--primary) .selected:bg(--primary) .selected:c(#fff)!"),T(i,"selected",e[3]===e[17])},m(c,l){J(c,i,l),n(i,r),a||(s=K(i,"click",_),a=!0)},p(c,l){e=c,l&8&&T(i,"selected",e[3]===e[17])},d(c){c&&p(i),a=!1,s()}}}function $e(e){let i,t,r,a,s,_,c,l,x,z,A,y,S,k,H="Result",D,d,C="CSS Output",U,I,O,E,N,L,P,R,j,Z,F=se(e[6]),v=[];for(let o=0;o<F.length;o+=1)v[o]=re(ae(e,F,o));function fe(o){e[11](o)}let $={};return e[1]!==void 0&&($.value=e[1]),x=new Ke({props:$}),G.push(()=>be(x,"value",fe)),e[12](x),{c(){i=f("div"),t=f("div"),r=B(),a=f("div"),s=f("div");for(let o=0;o<v.length;o+=1)v[o].c();_=B(),c=f("div"),l=f("div"),ge(x.$$.fragment),A=B(),y=f("div"),S=f("div"),k=f("button"),k.textContent=H,D=B(),d=f("button"),d.textContent=C,U=B(),I=f("div"),O=f("div"),E=f("iframe"),N=B(),L=f("div"),P=he(e[2]),this.h()},l(o){i=b(o,"DIV",{class:!0});var g=w(i);t=b(g,"DIV",{class:!0}),w(t).forEach(p),r=V(g),a=b(g,"DIV",{class:!0});var m=w(a);s=b(m,"DIV",{class:!0});var u=w(s);for(let W=0;W<v.length;W+=1)v[W].l(u);u.forEach(p),_=V(m),c=b(m,"DIV",{class:!0});var M=w(c);l=b(M,"DIV",{class:!0});var ee=w(l);ue(x.$$.fragment,ee),ee.forEach(p),M.forEach(p),A=V(m),y=b(m,"DIV",{class:!0});var Y=w(y);S=b(Y,"DIV",{class:!0});var X=w(S);k=b(X,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(k)!=="svelte-vq5vpt"&&(k.textContent=H),D=V(X),d=b(X,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(d)!=="svelte-7thca6"&&(d.textContent=C),X.forEach(p),U=V(Y),I=b(Y,"DIV",{class:!0});var q=w(I);O=b(q,"DIV",{class:!0});var ie=w(O);E=b(ie,"IFRAME",{class:!0,frameborder:!0}),w(E).forEach(p),ie.forEach(p),N=V(q),L=b(q,"DIV",{class:!0});var te=w(L);P=pe(te,e[2]),te.forEach(p),q.forEach(p),Y.forEach(p),m.forEach(p),g.forEach(p),this.h()},h(){h(t,"class","h(60)"),h(s,"class","vbox w(240) monospace(number) p(10) scroll-y"),h(l,"class","flex(4) vbox r(10) clip"),h(c,"class","flex(4) vbox p(10)"),h(k,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),T(k,"selected",e[4]==="Result"),h(d,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),T(d,"selected",e[4]==="CSS_output"),h(S,"class","hbox bg(#fff) font(12) c(#999)"),h(E,"class","layer w(100%) h(100%) bg(transparent)"),h(E,"frameborder","0"),h(O,"class","layer pack check-board none"),T(O,"none",e[4]!=="Result"),h(L,"class","layer bg(#f9f9f9) pre monospace font(12) p(10) scroll-y none"),T(L,"none",e[4]!=="CSS_output"),h(I,"class","flex relative"),h(y,"class","flex(3) relative vbox c(#000) p(10) r(10)"),h(a,"class","flex hbox(fill) clip bg(#f9f9f9)"),h(i,"class","layer vbox overscroll(none)")},m(o,g){J(o,i,g),n(i,t),n(i,r),n(i,a),n(a,s);for(let m=0;m<v.length;m+=1)v[m]&&v[m].m(s,null);n(a,_),n(a,c),n(c,l),me(x,l,null),n(a,A),n(a,y),n(y,S),n(S,k),n(S,D),n(S,d),n(y,U),n(y,I),n(I,O),n(O,E),e[13](E),n(I,N),n(I,L),n(L,P),R=!0,j||(Z=[K(k,"click",e[7]),K(d,"click",e[8])],j=!0)},p(o,[g]){if(g&584){F=se(o[6]);let u;for(u=0;u<F.length;u+=1){const M=ae(o,F,u);v[u]?v[u].p(M,g):(v[u]=re(M),v[u].c(),v[u].m(s,null))}for(;u<v.length;u+=1)v[u].d(1);v.length=F.length}const m={};!z&&g&2&&(z=!0,m.value=o[1],we(()=>z=!1)),x.$set(m),(!R||g&16)&&T(k,"selected",o[4]==="Result"),(!R||g&16)&&T(d,"selected",o[4]==="CSS_output"),(!R||g&16)&&T(O,"none",o[4]!=="Result"),(!R||g&4)&&xe(P,o[2]),(!R||g&16)&&T(L,"none",o[4]!=="CSS_output")},i(o){R||(ye(x.$$.fragment,o),R=!0)},o(o){ke(x.$$.fragment,o),R=!1},d(o){o&&p(i),_e(v,o),e[12](null),Se(x),e[13](null),j=!1,Te(Z)}}}function ei(e,i,t){let r,a,s=le;const _=[["Hello AdorableCSS!",le],["1. Colors",Le],["2. Typography",Fe],["✨3. TextBox(align)",Je],["4. Box Model",Be],["5. Overflow",Ve],["✨6. Flexbox",ze],["✨7. Position",Ze],["8. Layer",De],["9. Visibility",He],["10. Hover, Active",Me],["11. Pseudo Class",Pe],["12. Pseudo Element",Ye],["13. Media Query",Ae],["14. Selector",Ce],["15. Important!",Ue],["16. Grouping +",Ee],["계속 작업 중입니다...",""]];let c=0,l="Result";const x=()=>t(4,l="Result"),z=()=>t(4,l="CSS_output"),A=(d,C,U)=>{t(1,s=C),t(3,c=U),y.setValue(C),location.hash=String(c)};let y;ve(()=>{const d=+location.hash.slice(1);d>0&&(t(3,c=d),A(..._[c],c))});const S=(d,C,U)=>A(d,C,U);function k(d){s=d,t(1,s)}function H(d){G[d?"unshift":"push"](()=>{y=d,t(5,y)})}function D(d){G[d?"unshift":"push"](()=>{a=d,t(0,a),t(2,r),t(1,s)})}return e.$$.update=()=>{e.$$.dirty&2&&t(2,r=Re+Ie(Oe(s)).join(`
`)),e.$$.dirty&7&&a&&t(0,a.contentWindow.document.body.innerHTML=`<style>${r}</style>
`+s,a)},[a,s,r,c,l,y,_,x,z,A,S,k,H,D]}class oi extends de{constructor(i){super(),ce(this,i,ei,$e,ne,{})}}export{oi as default};
