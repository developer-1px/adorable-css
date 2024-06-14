import{s as le,n as W,o as re,d as q,z as pe,r as fe}from"../chunks/scheduler.CH-LaNC3.js";import{S as de,i as ce,e as g,c as u,a as x,d as p,l as h,g as Q,C as be,s as B,o as ge,t as ne,f as F,p as ue,k as ie,b as ve,D as R,h as c,q as me,n as K,j as we,r as xe,u as ye,E as ke,v as _e}from"../chunks/index.Wx35Jw4s.js";import{r as Se,g as Te,p as Re}from"../chunks/atomizer.BAxtnY4Y.js";function te(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const oe=`
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

`.trim(),Ce=`
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

✨그라데이션
c(linear-gradient(90deg,#f00,#00f))

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

  <div class="c(linear-gradient(90deg,#f00,#00f)) bold nowrap">c(linear-gradient(90deg,#f00,#00f))</div>

  <div class="bg(red)">bg(red)</div>

  <div class="bg(#0080ff)">bg(#0080ff) HEX</div>

  <div class="bg(#0080ff.5)">bg(#0080ff.5) HEX + alpha</div>

  <div class="bg(0,255,0)">bg(0,255,0) RGB</div>

  <div class="bg(0,255,0,.5)">bg(0,255,0,.5) RGBA</div>

  <div class="bg(100,50%,50%)">bg(100,50%,50%) HSL</div>

  <div class="bg(100,50%,50%,.5)">bg(100,50%,50%,.5) HSLA</div>

  <div class="bg(--css-var)">bg(--css-var) css-variable</div>
</div>

`.trim(),Oe=`
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

`.trim(),Ie=`
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
`.trim(),Le=`
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

`.trim(),Ae=`
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

`.trim(),Ee=`
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

`.trim(),Ue=`
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

`.trim(),Be=`
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

nowrap {white-space:nowrap;}
nowrap... {white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1}
line-clamp(value) {display:-webkit-box;-webkit-line-clamp:<value>;-webkit-box-orient:vertical;overflow:hidden}
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
  <div class="bg(#eee) b(red) nowrap">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
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

  <h2>max-lines(3)</h2>
  <div class="w(200) bg(#eee) b(red)">
    <div class="max-lines(3)">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  </div>
</div>

<style>
h1 {font-size:20px;font-weight:bold;margin:0 0 10px 0}
h2 {font-weight:bold}
</style>
`.trim(),Fe=`
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

`.trim(),ze=`
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

`.trim(),Ve=`
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

`.trim(),Me=`
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

`.trim(),He=`
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

`.trim(),Pe="vs",Ye=!0,Xe=[{background:"FFFFFF",token:""},{foreground:"c41a16",token:"string"},{foreground:"1c00cf",token:"constant.numeric"},{foreground:"aa0d91",token:"keyword"},{foreground:"000000",token:"keyword.operator"},{foreground:"aa0d91",token:"constant.language"},{foreground:"990000",token:"support.class.exception"},{foreground:"000000",token:"entity.name.function"},{fontStyle:"bold underline",token:"entity.name.type"},{fontStyle:"italic",token:"variable.parameter"},{foreground:"888888",token:"comment"},{foreground:"ff0000",token:"invalid"},{background:"e71a1100",token:"invalid.deprecated.trailing-whitespace"},{foreground:"000000",background:"fafafafc",token:"text source"},{foreground:"aa0d91",token:"meta.tag"},{foreground:"aa0d91",token:"declaration.tag"},{foreground:"000000",fontStyle:"bold",token:"support"},{foreground:"aa0d91",token:"storage"},{fontStyle:"bold underline",token:"entity.name.section"},{foreground:"000000",fontStyle:"bold",token:"entity.name.function.frame"},{foreground:"333333",token:"meta.tag.preprocessor.xml"},{foreground:"994500",fontStyle:"italic",token:"entity.other.attribute-name"},{foreground:"881280",token:"entity.name.tag"}],qe={"editor.foreground":"#000000","editor.background":"#FFFFFF","editor.selectionBackground":"#BAD6FD","editor.lineHighlightBackground":"#FFFFFF","editorCursor.foreground":"#000000","editorWhitespace.foreground":"#B3B3B3F4"},Ne={base:Pe,inherit:Ye,rules:Xe,colors:qe};function Ge(e){let i;return{c(){i=g("div"),this.h()},l(t){i=u(t,"DIV",{class:!0}),x(i).forEach(p),this.h()},h(){h(i,"class","h(100%)")},m(t,r){Q(t,i,r),e[3](i)},p:W,i:W,o:W,d(t){t&&p(i),e[3](null)}}}function je(e,i,t){let{value:r=""}=i,l=null,a;const T=o=>{a&&a.setValue(o)};re(()=>{require.config({paths:{vs:"https://unpkg.com/monaco-editor@latest/min/vs"}}),window.MonacoEnvironment={getWorkerUrl:()=>o};let o=URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`],{type:"text/javascript"}));return require(["vs/editor/editor.main"],function(){monaco.editor.defineTheme("adorableCSS",Ne),a=monaco.editor.create(l,{value:r,language:"html",automaticLayout:!0,scrollBeyondLastLine:!1,readOnly:!1,theme:"adorableCSS",tabSize:2,fontSize:"12px",overviewRulerLanes:0,wordWrap:"on",minimap:{enabled:!1}}),a.onDidChangeModelContent(E=>{t(1,r=a.getValue())}),a.addCommand(monaco.KeyMod.CtrlCmd|monaco.KeyCode.KeyS,function(){a.getAction("editor.action.formatDocument").run()}),window.addEventListener("resize",()=>{a.layout()})}),()=>{a&&a.dispose()}});function d(o){q[o?"unshift":"push"](()=>{l=o,t(0,l)})}return e.$$set=o=>{"value"in o&&t(1,r=o.value)},[l,r,T,d]}class We extends de{constructor(i){super(),ce(this,i,je,Ge,le,{value:1,setValue:2})}get setValue(){return this.$$.ctx[2]}}const Ke=`
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

`.trim(),Qe=`
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

`.trim(),Je=`
<!--
Dark Mode
- 'dark:' prefix를 사용하여 다크모드를 지원할 수 있습니다.
- dark mode를 지원하기 위해 @media(prefers-color-scheme: dark)를 사용할 수 있습니다.

Tip:
- <html class="dark">의 경우에도 다크모드가 적용됩니다.
- 강제로 다크모드를 적용해보거나 테스트를 위해서 사용할 수 있습니다.

ex)
-->

<div class="bg(#fff) dark:bg(#222) p(20)">
  <div class="c(#555) dark:c(#fff) font(20) bold">제목입니다.</div>
  <p class="c(#888) dark:c(#ccc) font(14)">라이크모트와 다크모드를 토글해보세요!</p>
</div>

`.trim();function se(e,i,t){const r=e.slice();return r[14]=i[t][0],r[15]=i[t][1],r[17]=t,r}function ae(e){let i,t=e[14]+"",r,l,a;function T(){return e[10](e[14],e[15],e[17])}return{c(){i=g("div"),r=ne(t),this.h()},l(d){i=u(d,"DIV",{class:!0});var o=x(i);r=ve(o,t),o.forEach(p),this.h()},h(){h(i,"class","p(6/8) r(4) font(13) c(#000) pointer hover:c(--primary) .selected:bg(--primary) .selected:c(#fff)!"),R(i,"selected",e[3]===e[17])},m(d,o){Q(d,i,o),c(i,r),l||(a=K(i,"click",T),l=!0)},p(d,o){e=d,o&8&&R(i,"selected",e[3]===e[17])},d(d){d&&p(i),l=!1,a()}}}function Ze(e){let i,t,r,l,a,T,d,o,E,D,y,w,k,M="Result",z,_,v="CSS Output",O,S,I,A,N,L,H,C,G,J,U=te(e[6]),n=[];for(let s=0;s<U.length;s+=1)n[s]=ae(se(e,U,s));function he(s){e[11](s)}let Z={};return e[1]!==void 0&&(Z.value=e[1]),o=new We({props:Z}),q.push(()=>be(o,"value",he)),e[12](o),{c(){i=g("div"),t=g("div"),r=B(),l=g("div"),a=g("div");for(let s=0;s<n.length;s+=1)n[s].c();T=B(),d=g("div"),ge(o.$$.fragment),D=B(),y=g("div"),w=g("div"),k=g("button"),k.textContent=M,z=B(),_=g("button"),_.textContent=v,O=B(),S=g("div"),I=g("div"),A=g("iframe"),N=B(),L=g("div"),H=ne(e[2]),this.h()},l(s){i=u(s,"DIV",{class:!0});var f=x(i);t=u(f,"DIV",{class:!0}),x(t).forEach(p),r=F(f),l=u(f,"DIV",{class:!0});var m=x(l);a=u(m,"DIV",{class:!0});var b=x(a);for(let j=0;j<n.length;j+=1)n[j].l(b);b.forEach(p),T=F(m),d=u(m,"DIV",{class:!0});var V=x(d);ue(o.$$.fragment,V),V.forEach(p),D=F(m),y=u(m,"DIV",{class:!0});var P=x(y);w=u(P,"DIV",{class:!0});var Y=x(w);k=u(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(k)!=="svelte-1vrhu4d"&&(k.textContent=M),z=F(Y),_=u(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(_)!=="svelte-1bp9krm"&&(_.textContent=v),Y.forEach(p),O=F(P),S=u(P,"DIV",{class:!0});var X=x(S);I=u(X,"DIV",{class:!0});var $=x(I);A=u($,"IFRAME",{class:!0,frameborder:!0}),x(A).forEach(p),$.forEach(p),N=F(X),L=u(X,"DIV",{class:!0});var ee=x(L);H=ve(ee,e[2]),ee.forEach(p),X.forEach(p),P.forEach(p),m.forEach(p),f.forEach(p),this.h()},h(){h(t,"class","h(60)"),h(a,"class","w(200) vbox monospace(number) p(10) scroll-y"),h(d,"class","flex(4) vbox p(10)"),h(k,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),R(k,"selected",e[4]==="Result"),h(_,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),R(_,"selected",e[4]==="CSS_output"),h(w,"class","hbox bg(#fff) font(12) c(#999)"),h(A,"class","layer w(100%) h(100%) bg(transparent)"),h(A,"frameborder","0"),h(I,"class","layer pack check-board none"),R(I,"none",e[4]!=="Result"),h(L,"class","layer bg(#f9f9f9) pre monospace font(12) p(10) scroll-y none"),R(L,"none",e[4]!=="CSS_output"),h(S,"class","flex relative"),h(y,"class","flex(3) relative vbox c(#000) p(10) r(4)"),h(l,"class","flex hbox(fill) clip bg(#f9f9f9)"),h(i,"class","layer vbox overscroll(none)")},m(s,f){Q(s,i,f),c(i,t),c(i,r),c(i,l),c(l,a);for(let m=0;m<n.length;m+=1)n[m]&&n[m].m(a,null);c(l,T),c(l,d),me(o,d,null),c(l,D),c(l,y),c(y,w),c(w,k),c(w,z),c(w,_),c(y,O),c(y,S),c(S,I),c(I,A),e[13](A),c(S,N),c(S,L),c(L,H),C=!0,G||(J=[K(k,"click",e[7]),K(_,"click",e[8])],G=!0)},p(s,[f]){if(f&584){U=te(s[6]);let b;for(b=0;b<U.length;b+=1){const V=se(s,U,b);n[b]?n[b].p(V,f):(n[b]=ae(V),n[b].c(),n[b].m(a,null))}for(;b<n.length;b+=1)n[b].d(1);n.length=U.length}const m={};!E&&f&2&&(E=!0,m.value=s[1],pe(()=>E=!1)),o.$set(m),(!C||f&16)&&R(k,"selected",s[4]==="Result"),(!C||f&16)&&R(_,"selected",s[4]==="CSS_output"),(!C||f&16)&&R(I,"none",s[4]!=="Result"),(!C||f&4)&&we(H,s[2]),(!C||f&16)&&R(L,"none",s[4]!=="CSS_output")},i(s){C||(xe(o.$$.fragment,s),C=!0)},o(s){ye(o.$$.fragment,s),C=!1},d(s){s&&p(i),ke(n,s),e[12](null),_e(o),e[13](null),G=!1,fe(J)}}}function $e(e,i,t){let r,l,a=oe;const T=[["Hello AdorableCSS!",oe],["1. Colors",Ce],["2. Typography",Ee],["✨3. TextBox(align)",Ke],["4. Box Model",Ue],["5. Overflow",Be],["✨6. Flexbox",Fe],["✨7. Position",Qe],["8. Layer",De],["9. Visibility",Ve],["10. Hover, Active",ze],["11. Pseudo Class",Me],["12. Pseudo Element",He],["13. Media Query",Oe],["14. Selector",Ie],["15. Important!",Le],["16. Grouping +",Ae],["✨17. DarkMode",Je],["계속 작업 중입니다...",""]];let d=0,o="Result";const E=()=>t(4,o="Result"),D=()=>t(4,o="CSS_output"),y=(v,O,S)=>{t(1,a=O),t(3,d=S),w.setValue(O),location.hash=String(d)};let w;re(()=>{const v=+location.hash.slice(1);v>0&&(t(3,d=v),y(...T[d],d))});const k=(v,O,S)=>y(v,O,S);function M(v){a=v,t(1,a)}function z(v){q[v?"unshift":"push"](()=>{w=v,t(5,w)})}function _(v){q[v?"unshift":"push"](()=>{l=v,t(0,l),t(2,r),t(1,a)})}return e.$$.update=()=>{e.$$.dirty&2&&t(2,r=Se+Te(Re(a)).join(`
`)),e.$$.dirty&7&&l&&t(0,l.contentWindow.document.body.innerHTML=`<style>${r}</style>
`+a,l)},[l,a,r,d,o,w,T,E,D,y,k,M,z,_]}class oi extends de{constructor(i){super(),ce(this,i,$e,Ze,le,{})}}export{oi as component};
