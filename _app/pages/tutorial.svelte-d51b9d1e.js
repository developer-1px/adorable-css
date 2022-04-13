import{S as re,i as le,s as de,e as h,c as p,a as f,d as C,b as n,f as J,G as Z,u as he,R as W,t as q,g as G,T as E,F as l,U as $,V as pe,j as I,v as fe,l as L,w as be,x as Be,W as ge,h as De,p as me,n as we,X as Ae,A as Ee,P as ye}from"../chunks/vendor-e0ae2598.js";import{r as xe,g as ke,p as _e}from"../chunks/atomizer-73d9d5a8.js";const Fe="vs",Se=!0,Re=[{background:"FFFFFF",token:""},{foreground:"c41a16",token:"string"},{foreground:"1c00cf",token:"constant.numeric"},{foreground:"aa0d91",token:"keyword"},{foreground:"000000",token:"keyword.operator"},{foreground:"aa0d91",token:"constant.language"},{foreground:"990000",token:"support.class.exception"},{foreground:"000000",token:"entity.name.function"},{fontStyle:"bold underline",token:"entity.name.type"},{fontStyle:"italic",token:"variable.parameter"},{foreground:"888888",token:"comment"},{foreground:"ff0000",token:"invalid"},{background:"e71a1100",token:"invalid.deprecated.trailing-whitespace"},{foreground:"000000",background:"fafafafc",token:"text source"},{foreground:"aa0d91",token:"meta.tag"},{foreground:"aa0d91",token:"declaration.tag"},{foreground:"000000",fontStyle:"bold",token:"support"},{foreground:"aa0d91",token:"storage"},{fontStyle:"bold underline",token:"entity.name.section"},{foreground:"000000",fontStyle:"bold",token:"entity.name.function.frame"},{foreground:"333333",token:"meta.tag.preprocessor.xml"},{foreground:"994500",fontStyle:"italic",token:"entity.other.attribute-name"},{foreground:"881280",token:"entity.name.tag"}],Te={"editor.foreground":"#000000","editor.background":"#FFFFFF","editor.selectionBackground":"#BAD6FD","editor.lineHighlightBackground":"#FFFFFF","editorCursor.foreground":"#000000","editorWhitespace.foreground":"#B3B3B3F4"};var Oe={base:Fe,inherit:Se,rules:Re,colors:Te};function Ie(e){let u;return{c(){u=h("div"),this.h()},l(o){u=p(o,"DIV",{class:!0}),f(u).forEach(C),this.h()},h(){n(u,"class","h(100%)")},m(o,r){J(o,u,r),e[3](u)},p:Z,i:Z,o:Z,d(o){o&&C(u),e[3](null)}}}function Le(e,u,o){let{value:r=""}=u,a=null,t;const y=s=>{t&&t.setValue(s)};he(()=>{require.config({paths:{vs:"https://unpkg.com/monaco-editor@latest/min/vs"}}),window.MonacoEnvironment={getWorkerUrl:()=>s};let s=URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`],{type:"text/javascript"}));return require(["vs/editor/editor.main"],function(){monaco.editor.defineTheme("adorableCSS",Oe),t=monaco.editor.create(a,{value:r,language:"html",automaticLayout:!0,scrollBeyondLastLine:!1,readOnly:!1,theme:"adorableCSS",tabSize:2,fontSize:"13px",overviewRulerLanes:0,wordWrap:"on",minimap:{enabled:!1}}),t.onDidChangeModelContent(g=>{o(1,r=t.getValue())}),t.addCommand(monaco.KeyMod.CtrlCmd|monaco.KeyCode.KeyS,function(){t.getAction("editor.action.formatDocument").run()})}),()=>{t&&t.dispose()}});function c(s){W[s?"unshift":"push"](()=>{a=s,o(0,a)})}return e.$$set=s=>{"value"in s&&o(1,r=s.value)},[a,r,y,c]}class Ue extends re{constructor(u){super();le(this,u,Le,Ie,de,{value:1,setValue:2})}get setValue(){return this.$$.ctx[2]}}const ce=`
<!--
\u0E05^\u2022\uFECC\u2022^\u0E05 \u2665

AdorableCSS\uC5D0 \uB180\uB7EC\uC624\uC2E0\uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4.
AdorableCSS\uB294 \uC544\uC8FC \uB2E8\uC21C\uD55C \uBB38\uBC95\uC73C\uB85C \uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 HTML\uC744 \uC0AD\uC81C \uD6C4
 
<div class="font(20) c(red)">Hello world</div>
 
\uB77C\uACE0 \uC785\uB825\uD574\uBCF4\uC138\uC694.

class="property(value)" \uC758 \uD615\uC2DD\uC758 \uBB38\uBC95\uC73C\uB85C \uC791\uC131\uD574 \uC8FC\uC2DC\uBA74 \uB429\uB2C8\uB2E4.
\uC6D0\uD558\uB294 \uC18D\uC131\uB4E4\uC740 Tutorial\uC774\uB098 Reference\uB97C \uBCF4\uACE0 \uCC38\uACE0\uD574\uC8FC\uC138\uC694.

\uC5EC\uAE30 \uCF54\uB4DC\uB294 \uC218\uC815\uC774 \uAC00\uB2A5\uD558\uB2C8 \uB9C8\uC74C\uAECF \uD14C\uC2A4\uD2B8 \uD574\uBCF4\uC138\uC694!
-->

<div class="vbox pack gap(20) text-center p(50)">
  <div class="hbox font(100/-/-15%) AppleSD opacity(0.7) hover:scale(1.05) hover:opacity(1) transition(.4s) pointer group">
    <span class="group-hover:rotate(-10deg) group-active:rotate(10deg) transition(.4s)">\u0E05</span>
    <span>^\u2022\uFECC\u2022^</span>
    <span class="group-hover:rotate(10deg) group-active:rotate(-10deg) transition(.4s)">\u0E05 <span class="font(30) c(#ccc) group-hover:c(#fb3958) vertical-top transition(.4s)">\u2665</span></span>
  </div>

  <div>
    <h1 class="font(30) 200 c(#666)">AdorableCSS</h1>
    <p>\u2728 Rapid on-demand atomic css framework</p>
  </div>
</div>

`.trim(),ze=`
<!--

Colors
: \uBA3C\uC800 \uAE00\uC790\uC0C9\uC744 \uBCC0\uACBD\uD574 \uBD05\uC2DC\uB2E4.
: \uC0C9\uC0C1\uC740 \uC544\uB798\uC640 \uAC19\uC774 \uC5EC\uB7EC\uAC00\uC9C0 \uBC29\uC2DD\uC744 \uC9C0\uC6D0\uD558\uBA70 \uBC30\uACBD\uC0C9\uACFC \uD14C\uB450\uB9AC\uC0C9\uC5D0\uB3C4 \uACF5\uD1B5\uC73C\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. eg) bg(), b()


sample)

c(red) \uC0C9\uC0C1\uC774\uB984

c(#0080ff) HEX

c(#0080ff.8) HEX + alpha

c(255,0,0) rgb

c(255,0,0,.7) rgba

c(100,50%,50%) hsl

c(100,50%,50%,.5) hsla

c(--css-var) css-variable


@TODO: bg(...), b(...)\uB85C\uB3C4 \uD55C\uBC88 \uD574\uBCF4\uC138\uC694.  
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

`.trim(),Ve=`
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

`.trim(),Me=`
<!--
Class Selector
\uD074\uB798\uC2A4 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uC18D\uC131\uC744 \uC120\uD0DD\uD558\uB294 \uC120\uD0DD\uC790 \uAE30\uB2A5\uC785\uB2C8\uB2E4.

ex)
.className:c(red)

\uADF8 \uBC16\uC5D0 Children Selector(>), Descendants Selector(>>) \uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.  
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

<style>
h1 { margin: 20px 0; font-size: 20px;}
</style>

`.trim(),He=`
<!--
Important!

important!\uB97C \uD1B5\uD574\uC11C \uC6B0\uC120\uC21C\uC704\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
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

`.trim(),Pe=`
<!--

Typography

1. font(...)

font()\uB294 font-size / line-height / letter-spacing \uC744 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.

font(20) { font-size: 20px }
font(20/1.5) { font-size: 20px; line-height:1.5 }
font(20/150%/-1%) { font-size: 20px; line-height:150%; letter-spacing:-1em }
font(20/-/-1%) { font-size: 20px; letter-spacing:-1em } // -\uB294 skip

@NOTE
line-height(1.3)
letter-spacing(1.5)
word-spacing(1.5)
\uB530\uB85C \uC0AC\uC6A9\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.


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


<div class="bg(#fff) p(20) >h1:font(20) >h1:bb(#ccc) >h1:m(40/0/20)" style="--css-var: green">

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

`.trim(),Ye=`
<!--
Box Model
- width / height
: w(32) h(32)

w(32) { width: 32px }
w(~32) { max-width: 32px }
w(32~) { min-width: 32px }
w(32~63) { min-width: 32px; max-width: 32px }
w(1/5) { width:20% }
w(100%-20px) { width: calc(100% - 20px) }

- margin / padding / border / border-radius + (top / right / bottom / left)
: m/p/b/r + t/r/b/l \uC774\uB7F0\uC2DD\uC758 \uC870\uD569\uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.
: box-model\uB294 \uBE48\uB3C4\uB97C \uACE0\uB824\uD574 \uCD95\uC57D\uD574\uC11C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.

ex)
m(10) { margin: 10px }
p(10/20) { padding: 10px 20px; }
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

<div class="w(~128) h(128~) b(orange) bg(#fff) p(24) m(20)">max-width<br/>min-height</div>

<div class="w(128) h(128) r(20) bg(red) p(20)">128 x 128 r(20)</div>

<div class="bl(4/red) bg(#f00.2) p(20) m(10)">quoto</div>

<div class="bg(blue) c(#fff) rl(20) p(20)">border-radius left</div>

<div class="bg(#fff) w(100) h(100) bt(red) br(8/orange) bb(dashed) bl(dotted/blue) m(20)">bt br bb bl</div>

`.trim(),Xe=`
<!--
Overflow
- \uC790\uC8FC\uC4F0\uB294 \uAE30\uB2A5 \uC18D\uC131\uC744 \uC9E7\uAC8C \uC4F8 \uC218 \uC788\uB3C4\uB85D \uD3B8\uC758\uC131 \uC81C\uACF5

clip { overflow: hidden }
scroll {overflow:auto;}
scroll-x {overflow-x:auto;overflow-y:hidden}
scroll-y {overflow-x:hidden;overflow-y:auto;}
scrollbar {overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}
no-scrollbar { &::-webkit-scrollbar {display:none;} }
no-scrollbar-x { &::-webkit-scrollbar:horizontal {display:none;} }

- \uD544\uC694\uD55C \uACBD\uC6B0 css\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uBAA8\uB4E0 \uAC12\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.
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

`.trim(),Ne=`
<!--
Layout - Flexbox
AdorableCSS\uB294 flexbox\uC5D0 \uAE30\uBC18\uD558\uC5EC \uB808\uC774\uC544\uC6C3\uC744 \uC544\uC8FC \uC27D\uAC8C \uB9CC\uB4E4\uC218 \uC788\uB3C4\uB85D \uAD6C\uC131\uD558\uC600\uC2B5\uB2C8\uB2E4.
https://youtu.be/qFvOhBqX1-k

1
hbox
: \uCEE8\uD150\uCE20\uB97C \uAC00\uB85C\uB85C \uBC30\uCE58\uD558\uACE0 \uC2F6\uB2E4\uBA74 hbox(horizontal box)\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.
: hbox\uC758 \uACBD\uC6B0 \uC804\uCCB4 \uBC15\uC2A4\uB97C \uAC00\uC6B4\uB370\uB85C \uB9DE\uCDB0 \uC815\uB82C\uD558\uBA70 \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uD06C\uAE30\uAC00 \uC9C0\uC815\uB418\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uCEE8\uD150\uCE20\uC5D0 \uB9DE\uAC8C \uC790\uB3D9\uC73C\uB85C \uB298\uC5B4\uB0A9\uB2C8\uB2E4.

gap(value)
gap(vertical/horizonal)
: \uAC01 \uCEE8\uD150\uCE20\uBCC4 \uAC04\uACA9\uC744 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
https://caniuse.com/flexbox-gap

@NOTE: IE<=11,  safari<14.1 \uC744 \uC9C0\uC6D0\uD574\uC57C \uD55C\uB2E4\uBA74 hgap, hgap-reverse\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.

\uD2B9\uC815 \uAC04\uACA9\uC744 \uBCC0\uACBD\uD558\uACE0 \uC2F6\uB2E4\uBA74 subbox\uB97C \uC368\uBCF4\uC138\uC694!


1-2
\uBC30\uCE58\uB97C \uBCC0\uACBD\uD574\uBCF4\uC790)

hbox(top)
hbox(bottom)
hbox(fill) = hbox(stretch)  // stretch\uB294 \uC624\uD0C0\uAC00 \uC790\uC8FC\uB098\uACE0 \uAE38\uC5B4\uC11C fill alias\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.
hbox(right)
hbox(reverse)

+\uB85C \uC870\uB9BD\uD574\uC11C \uC0AC\uC6A9\uD560\uC218 \uC788\uB2E4.

hbox(top+right)
hbox(bottom+right)
hbox(fill+reverse+left)

+ \uAE30\uD638\uB97C \uC0AC\uC6A9\uD558\uC5EC bottom+right / top+reverse \uB4F1 \uC790\uC720\uB86D\uAC8C \uCEE8\uD150\uCE20\uB97C \uBC30\uCE58\uD558\uC138\uC694

1-3 h(fill)
: fill = fill-parent
: \uAC1C\uBCC4 \uD56D\uBAA9\uC5D0 height\uB97C fill\uB85C \uC9C0\uC815\uD558\uBA74 \uBD80\uBAA8 \uCEE8\uD150\uCE20 \uB9CC\uD07C\uC758 \uD06C\uAE30\uB97C \uAC16\uC2B5\uB2C8\uB2E4.

1-4 hbox(fill)
: \uBAA8\uB4E0 \uC790\uC2DD \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uBD80\uBAA8 \uCEE8\uD150\uCE20\uC640 \uAC19\uC774 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4. (\uB2E8, \uC790\uC2DD\uC758 height\uAC00 \uC9C0\uC815\uC774 \uB420 \uACBD\uC6B0\uC5D0\uB294 \uC9C0\uC815\uB41C height\uB97C \uC6B0\uC120\uD569\uB2C8\uB2E4.)


2
pack / space-between
pack\uC740 \uBAA8\uB4E0 \uCEE8\uD150\uCE20\uB97C \uAC00\uC6B4\uB370\uB85C \uBC30\uCE58\uD569\uB2C8\uB2E4.
\uBC84\uD2BC\uC774\uB098 \uBAA8\uB2EC \uD31D\uC5C5 \uB4F1\uB4F1 \uC5EC\uB7EC\uACF3\uC5D0\uC11C \uC790\uC8FC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC790\uC2DD \uCEE8\uD150\uCE20\uB294 \uC5EC\uB7EC\uAC1C\uAC00 \uC788\uC744 \uACBD\uC6B0 \uAC19\uC774 \uAC00\uC6B4\uB370\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4. (\uC138\uB85C\uB85C \uD558\uACE0 \uC2F6\uB2E4\uBA74 vbox)

3
space-between space-around / space-evenly
:space-between\uC740 \uAC01 \uCEE8\uD150\uCE20\uB97C \uAC19\uC740 \uAC04\uACA9\uC73C\uB85C \uBC8C\uB824\uB193\uC2B5\uB2C8\uB2E4. (NAVBar \uAC19\uC740 \uACF3\uC5D0\uC11C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.) 

4
space / flex

space
: \uCEE4\uC2A4\uD140 \uBD80\uBD84\uC744 \uC9C0\uC815\uD558\uC5EC \uAC04\uACA9\uC744 \uB744\uC6B8\uB54C\uB294 margin\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uBCF4\uB2E4 \uBE48 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uB9CC\uB4DC\uB294\uAC83\uC774 \uB354 \uC88B\uC2B5\uB2C8\uB2E4.
: \uC2E4\uC804\uC5D0\uC11C \uB514\uC790\uC778 \uAC00\uC774\uB4DC\uC5D0 \uBCF4\uD1B5 \uC800 \uC0AC\uC774 \uAC04\uACA9\uC744 \uC801\uC5B4\uC8FC\uB294 \uD3B8\uC774\uAE30\uB3C4 \uD558\uACE0 \uCEF4\uD3EC\uB10C\uD2B8\uB098 \uC5D8\uB9AC\uBA3C\uD2B8\uC5D0 margin\uC744 \uC9C1\uC811 \uC801\uC6A9\uD558\uBA74 \uC7AC\uC0AC\uC6A9\uC774 \uD798\uB4E4\uC5B4\uC9C0\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.

flex
: flex\uB294 \uBE48\uACF5\uAC04\uC744 \uBA54\uC6CC\uC8FC\uB294 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4.
: \uB2E8\uB3C5\uC73C\uB85C\uB9CC \uC0AC\uC6A9\uD574\uC11C \uC88C\uC6B0\uB97C \uBC8C\uB824\uC8FC\uB294 \uC6A9\uB3C4\uB85C \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uD558\uACE0 Auto Grow\uAC00 \uD544\uC694\uD55C \uCEE8\uD150\uCE20 \uC601\uC5ED\uC5D0 \uC0AC\uC6A9\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4.
: \uC22B\uC790\uB97C \uBD80\uC5EC\uD558\uBA74 \uB0A8\uB294 \uACF5\uAC04\uC744 \uBE44\uC728\uB85C \uB098\uB20C \uC218 \uC788\uC2B5\uB2C8\uB2E4.


5
vbox
: \uCEE8\uD150\uCE20\uB97C \uC138\uB85C\uB85C \uBC30\uCE58\uD558\uACE0 \uC2F6\uB2E4\uBA74 vbox(vertical box)\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.
: \uC0AC\uC6A9\uBC95\uC740 hbox\uC640 \uB3D9\uC77C \uD569\uB2C8\uB2E4. \uB2E8, vbox\uB294 \uAE30\uBCF8\uAC12\uC774 fill = stretch \uC785\uB2C8\uB2E4.
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
    <div class="w(48) h(100) bg(orange) pack">\uD06C\uAE30\uB97C \uC9C0\uC815\uD558\uBA74<br/>\uCEE8\uD150\uCE20 \uD06C\uAE30</div>
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

`.trim(),We=`
<!--
Layout - Position
https://youtu.be/T5wMhoVHFU0

Basic
- \uC6B0\uC120 css\uC640 1:1 \uB300\uC751\uC744 \uD558\uB294 \uC18D\uC131

1. absolute / fixed / relative / static / sticky / sticky-top / sticky-left 
: css position \uD0C0\uC785\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uB2E4.

2. top / right / bottom / lef
: css\uC758 top, right, bottom, left\uC758 \uAC12\uC744 \uC870\uC808 \uD560 \uC218 \uC788\uB2E4.

3. z
: css\uC758 z-index\uAC12\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uB2E4.


Extension

1. layer
: \uC804\uCCB4\uB97C \uB36E\uB294 \uD615\uD0DC\uC758 \uB808\uC774\uC544\uC6C3 
: \uBAA8\uB2EC \uD31D\uC5C5\uB4F1\uC5D0 dimmed\uB97C \uAE4C\uB294 \uB4F1 \uBE48\uBC88\uD788 \uC0AC\uC6A9\uB418\uC5B4 \uC18D\uC131\uC5D0 \uCD94\uAC00 \uD558\uC600\uC2B5\uB2C8\uB2E4.
: absolute top(0) left(0) right(0) bottom(0)\uC758 \uCD95\uC57D\uD615\uC785\uB2C8\uB2E4.

2. layer(top) / layer(right) / layer(bottom) / layer(left)
: \uBC29\uD5A5\uC744 \uC9C0\uC815\uD574\uC8FC\uBA74 \uD574\uB2F9 \uBA74\uC5D0 \uBD99\uB294 \uD615\uD0DC\uB85C \uBD99\uC5EC\uC90D\uB2C8\uB2E4.
: NAV\uB098 BAR\uB4F1\uC744 \uACE0\uC815\uD560\uB54C \uC8FC\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.


3. layer(top+left) / layer(top+right) / layer(bottom+left) / layer(bottom+right)
: top/bottom + left/right \uB294 \uC870\uB9BD\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
: \uD31D\uC5C5\uC758 \uB2EB\uAE30 \uBC84\uD2BC \uB4F1\uC5D0\uC11C margin\uACFC \uD568\uAED8 \uC8FC\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.
-->


<h2>Position</h2>

<div class="vbox gap(20) bg(#fff) p(10)">

  <h2>layer</h2>
  <div class="relative w(100) h(100) b(#ff6347) pack">
    <div class="font(90)">\u{1F433}</div>
    <div class="layer pack bg(#ff6347.5)">layer</div>
  </div>


  <h2>layer(top) layer(right) layer(bottom) layer(left)</h2>
  
  <div class="hbox gap(10)">
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(top) pack bg(#ff6347.5)">layer(top)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(right) pack bg(#ff6347.5)">layer(right)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(bottom) pack bg(#ff6347.5)">layer(bottom)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(left) pack bg(#ff6347.5)">layer(left)</div>
    </div>
  </div>


  <h2>layer(top+left) / layer(top+right) / layer(bottom+right) / layer(bottom+right) </h2>
  
  <div class="hbox gap(10)">
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(top+left) pack bg(#ff6347.5) text-center">layer<br/>(top+left)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(top+right) pack bg(#ff6347.5) text-center">layer<br/>(top+right)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(bottom+left) pack bg(#ff6347.5) text-center">layer<br/>(bottom<br/>+left)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(bottom+right) pack bg(#ff6347.5) text-center">layer<br/>(bottom<br/>+right)</div>
    </div>
  </div>

</div>

`.trim(),qe=`
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

`.trim(),Ge=`
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

`.trim(),je=`
<!--
Prefix
https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements 
* \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uB530\uB77C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.

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

  <div>selection::bg(red) (\uB4DC\uB798\uADF8 \uD574\uBCF4\uC138\uC694.)</div>
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

`.trim();function Ce(e,u,o){const r=e.slice();return r[14]=u[o][0],r[15]=u[o][1],r[17]=o,r}function ne(e){let u,o=e[14]+"",r,a,t;function y(){return e[10](e[14],e[15],e[17])}return{c(){u=h("div"),r=q(o),this.h()},l(c){u=p(c,"DIV",{class:!0});var s=f(u);r=G(s,o),s.forEach(C),this.h()},h(){n(u,"class","c(#000) pointer p(10/20) r(10) hover:c(--primary) .selected:bg(--primary) .selected:c(#fff)!"),E(u,"selected",e[3]===e[17])},m(c,s){J(c,u,s),l(u,r),a||(t=$(u,"click",y),a=!0)},p(c,s){e=c,s&8&&E(u,"selected",e[3]===e[17])},d(c){c&&C(u),a=!1,t()}}}function Qe(e){let u,o,r,a,t,y,c,s,g,U,T,D,A,w,z,V,d,x,S,k,_,R,j,F,P,M,Q,ee,O=e[6],v=[];for(let i=0;i<O.length;i+=1)v[i]=ne(Ce(e,O,i));function ve(i){e[11](i)}let ue={};return e[1]!==void 0&&(ue.value=e[1]),g=new Ue({props:ue}),W.push(()=>pe(g,"value",ve)),e[12](g),{c(){u=h("div"),o=h("div"),r=I(),a=h("div"),t=h("div");for(let i=0;i<v.length;i+=1)v[i].c();y=I(),c=h("div"),s=h("div"),fe(g.$$.fragment),T=I(),D=h("div"),A=h("div"),w=h("button"),z=q("Result"),V=I(),d=h("button"),x=q("CSS Output"),S=I(),k=h("div"),_=h("div"),R=h("iframe"),j=I(),F=h("div"),P=q(e[2]),this.h()},l(i){u=p(i,"DIV",{class:!0});var b=f(u);o=p(b,"DIV",{class:!0}),f(o).forEach(C),r=L(b),a=p(b,"DIV",{class:!0});var m=f(a);t=p(m,"DIV",{class:!0});var B=f(t);for(let K=0;K<v.length;K+=1)v[K].l(B);B.forEach(C),y=L(m),c=p(m,"DIV",{class:!0});var H=f(c);s=p(H,"DIV",{class:!0});var oe=f(s);be(g.$$.fragment,oe),oe.forEach(C),H.forEach(C),T=L(m),D=p(m,"DIV",{class:!0});var Y=f(D);A=p(Y,"DIV",{class:!0});var X=f(A);w=p(X,"BUTTON",{class:!0});var ie=f(w);z=G(ie,"Result"),ie.forEach(C),V=L(X),d=p(X,"BUTTON",{class:!0});var te=f(d);x=G(te,"CSS Output"),te.forEach(C),X.forEach(C),S=L(Y),k=p(Y,"DIV",{class:!0});var N=f(k);_=p(N,"DIV",{class:!0});var se=f(_);R=p(se,"IFRAME",{class:!0,frameborder:!0}),f(R).forEach(C),se.forEach(C),j=L(N),F=p(N,"DIV",{class:!0});var ae=f(F);P=G(ae,e[2]),ae.forEach(C),N.forEach(C),Y.forEach(C),m.forEach(C),b.forEach(C),this.h()},h(){n(o,"class","h(60)"),n(t,"class","vbox w(240) monospace(number) p(10)"),n(s,"class","flex(4) vbox r(10) clip"),n(c,"class","flex(4) vbox p(10)"),n(w,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),E(w,"selected",e[4]==="Result"),n(d,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),E(d,"selected",e[4]==="CSS_output"),n(A,"class","hbox bg(#fff) font(12) c(#999)"),n(R,"class","layer w(100%) h(100%) bg(transparent)"),n(R,"frameborder","0"),n(_,"class","layer pack check-board none"),E(_,"none",e[4]!=="Result"),n(F,"class","layer pre monospace font(12) p(10) none scroll-y"),E(F,"none",e[4]!=="CSS_output"),n(k,"class","flex relative"),n(D,"class","flex(3) relative vbox c(#000) p(10) r(10)"),n(a,"class","flex hbox(fill) clip bg(#f9f9f9)"),n(u,"class","layer vbox overscroll(none)")},m(i,b){J(i,u,b),l(u,o),l(u,r),l(u,a),l(a,t);for(let m=0;m<v.length;m+=1)v[m].m(t,null);l(a,y),l(a,c),l(c,s),Be(g,s,null),l(a,T),l(a,D),l(D,A),l(A,w),l(w,z),l(A,V),l(A,d),l(d,x),l(D,S),l(D,k),l(k,_),l(_,R),e[13](R),l(k,j),l(k,F),l(F,P),M=!0,Q||(ee=[$(w,"click",e[7]),$(d,"click",e[8])],Q=!0)},p(i,[b]){if(b&584){O=i[6];let B;for(B=0;B<O.length;B+=1){const H=Ce(i,O,B);v[B]?v[B].p(H,b):(v[B]=ne(H),v[B].c(),v[B].m(t,null))}for(;B<v.length;B+=1)v[B].d(1);v.length=O.length}const m={};!U&&b&2&&(U=!0,m.value=i[1],ge(()=>U=!1)),g.$set(m),b&16&&E(w,"selected",i[4]==="Result"),b&16&&E(d,"selected",i[4]==="CSS_output"),b&16&&E(_,"none",i[4]!=="Result"),(!M||b&4)&&De(P,i[2]),b&16&&E(F,"none",i[4]!=="CSS_output")},i(i){M||(me(g.$$.fragment,i),M=!0)},o(i){we(g.$$.fragment,i),M=!1},d(i){i&&C(u),Ae(v,i),e[12](null),Ee(g),e[13](null),Q=!1,ye(ee)}}}function Ke(e,u,o){let r,a,t=ce;const y=[["Hello AdorableCSS!",ce],["1. Colors",ze],["2. Typography",Pe],["3. Box Model",Ye],["4. Overflow",Xe],["5. Flexbox",Ne],["6. Position",We],["7. Hover, Active",qe],["8. Pseudo Class",Ge],["9. Pseudo Element",je],["10. Media Query",Ve],["11. Selector",Me],["12. Important!",He],["\uACC4\uC18D \uC791\uC5C5 \uC911\uC785\uB2C8\uB2E4...",""]];let c=0,s="Result";const g=()=>o(4,s="Result"),U=()=>o(4,s="CSS_output"),T=(d,x,S)=>{o(1,t=x),o(3,c=S),D.setValue(x)};let D;const A=(d,x,S)=>T(d,x,S);function w(d){t=d,o(1,t)}function z(d){W[d?"unshift":"push"](()=>{D=d,o(5,D)})}function V(d){W[d?"unshift":"push"](()=>{a=d,o(0,a),o(2,r),o(1,t)})}return e.$$.update=()=>{e.$$.dirty&2&&o(2,r=xe+ke(_e(t)).join(`
`)),e.$$.dirty&7&&a&&o(0,a.contentWindow.document.body.innerHTML=`<style>${r}</style>
`+t,a)},[a,t,r,c,s,D,y,g,U,T,A,w,z,V]}class $e extends re{constructor(u){super();le(this,u,Ke,Qe,de,{})}}export{$e as default};
