import{S as ne,i as ve,s as he,k as f,l as b,m as g,h as v,n as p,b as $,B as J,o as pe,P as W,Q as be,a as B,w as ge,q as X,c as V,x as ue,r as q,R,C as n,y as me,O as Z,T as we,u as ye,f as ke,t as xe,U as _e,z as Se,K as Re}from"../../../chunks/index-5e2bc00b.js";import{r as Te,g as Ie,p as Oe}from"../../../chunks/atomizer-badf1dae.js";const re=`
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

`.trim(),Ee=`
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

`.trim(),Le=`
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

thin {font-weight:200;}
light {font-weight:300;}
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
line-through {text-decoration:line-through}
strike {text-decoration:line-through}
del {text-decoration:line-through}

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


  <h1>text-align</h1>

  <div class="small-caps">text-left</div>
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

<div class="vbox gap(20) bg(#fff)">
  
  <h2>default (overflow:visible)</h2>
  <div class="w(200) h(100) bg(#eee) b(red)">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <div class="space(50)"></div>

  <h2>clip (overflow:hidden)</h2>
  <div class="w(200) h(50) bg(#eee) b(red) clip">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <h2>scroll</h2>
  <div class="w(200) h(50) bg(#eee) b(red) scroll">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>
</div>


<h1>Overflow with Text</h1>

<div class="vbox gap(20) bg(#fff)">

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

특정 간격을 변경하고 싶다면 subbox를 써보세요!


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

4
space / flex

space
: 커스텀 부분을 지정하여 간격을 띄울때는 margin을 사용하는 것보다 빈 엘리먼트를 만드는것이 더 좋습니다.
: 실전에서 디자인 가이드에 보통 저 사이 간격을 적어주는 편이기도 하고 컴포넌트나 엘리먼트에 margin을 직접 적용하면 재사용이 힘들어지기 때문입니다.

flex
: flex는 빈공간을 메워주는 역할을 합니다.
: 단독으로만 사용해서 좌우를 벌려주는 용도로 가장 많이 사용하고 Auto Grow가 필요한 컨텐츠 영역에 사용하기도 합니다.
: 숫자를 부여하면 남는 공간을 비율로 나눌 수 있습니다.


5
vbox
: 컨텐츠를 세로로 배치하고 싶다면 vbox(vertical box)를 사용하세요.
: 사용법은 hbox와 동일 합니다. 단, vbox는 기본값이 fill = stretch 입니다.
-->


<h1>Box Model</h1>

<div class="vbox gap(20) bg(#fff) p(10)">

  <h2>hbox + gap</h2>

  <div class="hbox gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(48) bg(orange) pack">b</div>
    <div class="w(48) h(48) bg(orange) pack">o</div>
    <div class="w(48) h(48) bg(orange) pack">x</div>
  </div>  


  <h2>hbox + gap + subbox</h2>

  <div class="hbox gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>

    <div class="subbox gap(50)">
      <div class="w(48) h(48) bg(orange) pack">b</div>    
      <div class="w(48) h(48) bg(orange) pack">o</div>
    </div>

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
  
  <h2>hbox(bottom)</h2>  
  <div class="hbox(bottom) gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="p(10) h(50) bg(orange) pack">(bottom)</div>
  </div>

  <h2>hbox(bottom+right)</h2>  
  <div class="hbox(bottom+right) gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="p(10) h(50) bg(orange) pack">(bottom+right)</div>
  </div>

  <h2>hbox(fill) = hbox(stretch)</h2>  
  <div class="hbox(fill) gap(10) b(orange) p(10) h(200)">
    <div class="w(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">크기를 지정하면<br/>컨텐츠 크기</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) bg(orange) pack">x</div>
    <div class="p(10) bg(orange) pack">(fill)</div>
  </div>

  <h2>h(fill) = h(stretch) = align-self:stretch</h2>  
  <div class="hbox gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="p(10) h(fill) bg(orange) pack">h(fill)</div>
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
  
  <h2>space-beetween / space-around / space-evenly</h2>  

  <div class="hbox space-between b(orange) w(300)">
    <div class="p(10) bg(orange) pack">space</div>
    <div class="p(10) bg(orange) pack">-</div>
    <div class="p(10) bg(orange) pack">beetween</div>
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


  <h2>space / flex</h2>  

  <div class="hbox b(orange) w(400)">
    <div class="p(10) bg(orange) pack">space(8)</div>
    <div class="space(8)"></div>
    <div class="p(10) bg(orange) pack">vs</div>
    <div class="flex"></div>
    <div class="p(10) bg(orange)">flex</div>
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

`.trim(),He=`
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

`.trim(),Me=`
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

`.trim(),Ge="vs",Ne=!0,Xe=[{background:"FFFFFF",token:""},{foreground:"c41a16",token:"string"},{foreground:"1c00cf",token:"constant.numeric"},{foreground:"aa0d91",token:"keyword"},{foreground:"000000",token:"keyword.operator"},{foreground:"aa0d91",token:"constant.language"},{foreground:"990000",token:"support.class.exception"},{foreground:"000000",token:"entity.name.function"},{fontStyle:"bold underline",token:"entity.name.type"},{fontStyle:"italic",token:"variable.parameter"},{foreground:"888888",token:"comment"},{foreground:"ff0000",token:"invalid"},{background:"e71a1100",token:"invalid.deprecated.trailing-whitespace"},{foreground:"000000",background:"fafafafc",token:"text source"},{foreground:"aa0d91",token:"meta.tag"},{foreground:"aa0d91",token:"declaration.tag"},{foreground:"000000",fontStyle:"bold",token:"support"},{foreground:"aa0d91",token:"storage"},{fontStyle:"bold underline",token:"entity.name.section"},{foreground:"000000",fontStyle:"bold",token:"entity.name.function.frame"},{foreground:"333333",token:"meta.tag.preprocessor.xml"},{foreground:"994500",fontStyle:"italic",token:"entity.other.attribute-name"},{foreground:"881280",token:"entity.name.tag"}],qe={"editor.foreground":"#000000","editor.background":"#FFFFFF","editor.selectionBackground":"#BAD6FD","editor.lineHighlightBackground":"#FFFFFF","editorCursor.foreground":"#000000","editorWhitespace.foreground":"#B3B3B3F4"},We={base:Ge,inherit:Ne,rules:Xe,colors:qe};function Qe(e){let i;return{c(){i=f("div"),this.h()},l(o){i=b(o,"DIV",{class:!0}),g(i).forEach(v),this.h()},h(){p(i,"class","h(100%)")},m(o,r){$(o,i,r),e[3](i)},p:J,i:J,o:J,d(o){o&&v(i),e[3](null)}}}function Ke(e,i,o){let{value:r=""}=i,l=null,s;const _=a=>{s&&s.setValue(a)};pe(()=>{require.config({paths:{vs:"https://unpkg.com/monaco-editor@latest/min/vs"}}),window.MonacoEnvironment={getWorkerUrl:()=>a};let a=URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`],{type:"text/javascript"}));return require(["vs/editor/editor.main"],function(){monaco.editor.defineTheme("adorableCSS",We),s=monaco.editor.create(l,{value:r,language:"html",automaticLayout:!0,scrollBeyondLastLine:!1,readOnly:!1,theme:"adorableCSS",tabSize:2,fontSize:"13px",overviewRulerLanes:0,wordWrap:"on",minimap:{enabled:!1}}),s.onDidChangeModelContent(y=>{o(1,r=s.getValue())}),s.addCommand(monaco.KeyMod.CtrlCmd|monaco.KeyCode.KeyS,function(){s.getAction("editor.action.formatDocument").run()})}),()=>{s&&s.dispose()}});function d(a){W[a?"unshift":"push"](()=>{l=a,o(0,l)})}return e.$$set=a=>{"value"in a&&o(1,r=a.value)},[l,r,_,d]}class je extends ne{constructor(i){super(),ve(this,i,Ke,Qe,he,{value:1,setValue:2})}get setValue(){return this.$$.ctx[2]}}function de(e,i,o){const r=e.slice();return r[14]=i[o][0],r[15]=i[o][1],r[17]=o,r}function ce(e){let i,o=e[14]+"",r,l,s;function _(){return e[10](e[14],e[15],e[17])}return{c(){i=f("div"),r=X(o),this.h()},l(d){i=b(d,"DIV",{class:!0});var a=g(i);r=q(a,o),a.forEach(v),this.h()},h(){p(i,"class","c(#000) pointer p(10/20) r(10) hover:c(--primary) .selected:bg(--primary) .selected:c(#fff)!"),R(i,"selected",e[3]===e[17])},m(d,a){$(d,i,a),n(i,r),l||(s=Z(i,"click",_),l=!0)},p(d,a){e=d,a&8&&R(i,"selected",e[3]===e[17])},d(d){d&&v(i),l=!1,s()}}}function Je(e){let i,o,r,l,s,_,d,a,y,z,C,k,S,x,D,H,c,I,U,O,E,A,Q,L,P,T,K,ee,F=e[6],h=[];for(let t=0;t<F.length;t+=1)h[t]=ce(de(e,F,t));function fe(t){e[11](t)}let ie={};return e[1]!==void 0&&(ie.value=e[1]),y=new je({props:ie}),W.push(()=>be(y,"value",fe)),e[12](y),{c(){i=f("div"),o=f("div"),r=B(),l=f("div"),s=f("div");for(let t=0;t<h.length;t+=1)h[t].c();_=B(),d=f("div"),a=f("div"),ge(y.$$.fragment),C=B(),k=f("div"),S=f("div"),x=f("button"),D=X("Result"),H=B(),c=f("button"),I=X("CSS Output"),U=B(),O=f("div"),E=f("div"),A=f("iframe"),Q=B(),L=f("div"),P=X(e[2]),this.h()},l(t){i=b(t,"DIV",{class:!0});var u=g(i);o=b(u,"DIV",{class:!0}),g(o).forEach(v),r=V(u),l=b(u,"DIV",{class:!0});var w=g(l);s=b(w,"DIV",{class:!0});var m=g(s);for(let j=0;j<h.length;j+=1)h[j].l(m);m.forEach(v),_=V(w),d=b(w,"DIV",{class:!0});var M=g(d);a=b(M,"DIV",{class:!0});var oe=g(a);ue(y.$$.fragment,oe),oe.forEach(v),M.forEach(v),C=V(w),k=b(w,"DIV",{class:!0});var Y=g(k);S=b(Y,"DIV",{class:!0});var G=g(S);x=b(G,"BUTTON",{class:!0});var te=g(x);D=q(te,"Result"),te.forEach(v),H=V(G),c=b(G,"BUTTON",{class:!0});var se=g(c);I=q(se,"CSS Output"),se.forEach(v),G.forEach(v),U=V(Y),O=b(Y,"DIV",{class:!0});var N=g(O);E=b(N,"DIV",{class:!0});var ae=g(E);A=b(ae,"IFRAME",{class:!0,frameborder:!0}),g(A).forEach(v),ae.forEach(v),Q=V(N),L=b(N,"DIV",{class:!0});var le=g(L);P=q(le,e[2]),le.forEach(v),N.forEach(v),Y.forEach(v),w.forEach(v),u.forEach(v),this.h()},h(){p(o,"class","h(60)"),p(s,"class","vbox w(240) monospace(number) p(10) scroll-y"),p(a,"class","flex(4) vbox r(10) clip"),p(d,"class","flex(4) vbox p(10)"),p(x,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),R(x,"selected",e[4]==="Result"),p(c,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),R(c,"selected",e[4]==="CSS_output"),p(S,"class","hbox bg(#fff) font(12) c(#999)"),p(A,"class","layer w(100%) h(100%) bg(transparent)"),p(A,"frameborder","0"),p(E,"class","layer pack check-board none"),R(E,"none",e[4]!=="Result"),p(L,"class","layer bg(#f9f9f9) pre monospace font(12) p(10) scroll-y none"),R(L,"none",e[4]!=="CSS_output"),p(O,"class","flex relative"),p(k,"class","flex(3) relative vbox c(#000) p(10) r(10)"),p(l,"class","flex hbox(fill) clip bg(#f9f9f9)"),p(i,"class","layer vbox overscroll(none)")},m(t,u){$(t,i,u),n(i,o),n(i,r),n(i,l),n(l,s);for(let w=0;w<h.length;w+=1)h[w]&&h[w].m(s,null);n(l,_),n(l,d),n(d,a),me(y,a,null),n(l,C),n(l,k),n(k,S),n(S,x),n(x,D),n(S,H),n(S,c),n(c,I),n(k,U),n(k,O),n(O,E),n(E,A),e[13](A),n(O,Q),n(O,L),n(L,P),T=!0,K||(ee=[Z(x,"click",e[7]),Z(c,"click",e[8])],K=!0)},p(t,[u]){if(u&584){F=t[6];let m;for(m=0;m<F.length;m+=1){const M=de(t,F,m);h[m]?h[m].p(M,u):(h[m]=ce(M),h[m].c(),h[m].m(s,null))}for(;m<h.length;m+=1)h[m].d(1);h.length=F.length}const w={};!z&&u&2&&(z=!0,w.value=t[1],we(()=>z=!1)),y.$set(w),(!T||u&16)&&R(x,"selected",t[4]==="Result"),(!T||u&16)&&R(c,"selected",t[4]==="CSS_output"),(!T||u&16)&&R(E,"none",t[4]!=="Result"),(!T||u&4)&&ye(P,t[2]),(!T||u&16)&&R(L,"none",t[4]!=="CSS_output")},i(t){T||(ke(y.$$.fragment,t),T=!0)},o(t){xe(y.$$.fragment,t),T=!1},d(t){t&&v(i),_e(h,t),e[12](null),Se(y),e[13](null),K=!1,Re(ee)}}}function Ze(e,i,o){let r,l,s=re;const _=[["Hello AdorableCSS!",re],["1. Colors",Ee],["2. Typography",Fe],["3. Box Model",Be],["4. Overflow",Ve],["5. Flexbox",ze],["6. Position",De],["✨7. Visibility",Me],["8. Hover, Active",He],["9. Pseudo Class",Pe],["10. Pseudo Element",Ye],["11. Media Query",Le],["12. Selector",Ce],["13. Important!",Ue],["✨14. Grouping+",Ae],["계속 작업 중입니다...",""]];let d=0,a="Result";const y=()=>o(4,a="Result"),z=()=>o(4,a="CSS_output"),C=(c,I,U)=>{o(1,s=I),o(3,d=U),k.setValue(I),location.hash=String(d)};let k;pe(()=>{const c=+location.hash.slice(1);c>0&&(o(3,d=c),C(..._[d],d))});const S=(c,I,U)=>C(c,I,U);function x(c){s=c,o(1,s)}function D(c){W[c?"unshift":"push"](()=>{k=c,o(5,k)})}function H(c){W[c?"unshift":"push"](()=>{l=c,o(0,l),o(2,r),o(1,s)})}return e.$$.update=()=>{e.$$.dirty&2&&o(2,r=Te+Ie(Oe(s)).join(`
`)),e.$$.dirty&7&&l&&o(0,l.contentWindow.document.body.innerHTML=`<style>${r}</style>
`+s,l)},[l,s,r,d,a,k,_,y,z,C,S,x,D,H]}class ii extends ne{constructor(i){super(),ve(this,i,Ze,Je,he,{})}}export{ii as default};
