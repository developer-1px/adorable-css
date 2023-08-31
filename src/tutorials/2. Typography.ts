export const TURORIAL_2_TYPOGRAPHY = `
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

`.trim()