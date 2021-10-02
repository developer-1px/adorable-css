# 🐳 AdorableCSS

> Rapid On-Demand Atomic CSS framework


## Introduce

![AdorableCSS](https://j.gifs.com/WP87WJ.gif)

#### Don't write your own css. Just write down in HTML.

```tsx
// Button.tsx

export const Button = () =>
  <button class="hbox pack gap(6) bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000)! active:b(#000.2)">click me</button>
```

#### ... and auto generated css code on realtime! 😎

```css
/* @adorable.css */

* {margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}
.c\(\#fff\){color:#fff;}
html .active\:bg\(\#000\)\!:active,html .active\:bg\(\#000\)\!.\:active{background-color:#000!important;}
.bg\(\#333\){background-color:#333;}
@media (hover:hover){.hover\:bg\(\#555\):hover,.hover\:bg\(\#555\).\:hover{background-color:#555;}}
.font\(14\/16\/-1\%\){font-size:14px;line-height:16px;letter-spacing:-0.01em}
.bold{font-weight:700;}
.hbox{display:flex;flex-flow:row;align-items: center;}
.p\(8\/12\){padding:8px 12px;}
.pack{display:flex;align-items:center;justify-content:center;}
.pointer{cursor:pointer;}
html .active\:b\(\#000\.2\):active,html .active\:b\(\#000\.2\).\:active{border:1px solid rgba(0,0,0,.2);}
.b\(\#000\.2\){border:1px solid rgba(0,0,0,.2);}
.r\(6\){border-radius:6px;}
.gap\(6\){gap:6px;}
.layer{position:absolute;top:0;right:0;bottom:0;left:0}
.transition\(\.2s\){transition:all .2s;}

```



## 소개

CSS는 배우기 쉽고 작성하기 쉬운데 잘 만들고 잘 관리하기란 참 어려운 분야입니다.

그래서 일까요? OOCSS ->  SMACSS -> ITCSS -> BEM에 이르기까지

지난 수년간 CSS를 어떻게 작성할것이냐 대해 매번 때마다 새로운 방법들이 제시되곤 했습니다.

<br/>

**CSS 방법론이라는 것의 본질은 무엇일까요?**

selector를 어떻게 간결하게 쓸것이냐로 시작되는 결국 **class의 이름을 어떻게 지을것인가?** 하는 부분입니다.

개발에서 특히 CSS에서는 이름을 짓는다는 행위는 가장 어렵고 잘 해야 하는 일이기 때문입니다.

이름을 짓는게 그렇게 어렵고 힘든거라면 이름을 아예 짓지 않는 방법은 어떨까요?

나아가 CSS를 아예 작성을 하지 않는다면 어떨까요?

그러한 접근법이 바로 **Functional CSS**라는 방법론이며 대표적인 프레임워크가 바로 TailwindCSS 입니다.

<br/>

TailwindCSS는 미리 만들어놓은 단일 기능의 수많은 class를 조립해서 inline으로 붙이기만 하면 디자인을 구성할 수 있습니다.

아직 한번도 TailwindCSS에 대해 들어본 적이 없었다면 한번 [여기](https://tailwindcss.com/)를 눌러 어떤 방식인지 한번 구경하고 오세요.

분명 흥미로울거에요.

<br/>

하지만 이러한 방식에도 문제가 있었습니다.

바로 미리 만들어 놓은 class이기에 색상과 수치가 정해져있었고

저의 경우 디자인 수정이 변화무쌍한 현업에서는 모든 디자인에 대응할 수가 없었습니다.

css에 디자인을 맞출 수는 없으니 (이걸 디자인 시스템이라고 부르지만 현실은 그렇지 않죠)

<br/>


그러면 **AdorableCSS**는 어떻게 해결했을까요?

미리 만들어 놓는게 문제라면 **필요할때만** 만들어준다면 어떨까요?

**주문형 방식**으로 필요한 class만 제공을 한다면 필요한 색상과 수치들은 모두 필요한 만큼만 제공을 할 수 있게 될 것 같습니다.

그래서 훨씬 더 다양한 스타일을 제공하면서도 최소한의 css만을 생성하는 멋진 프레임워크가 되었습니다.



> Notice!
현재 tailwindCSS에서도 just in time mode라고 해서 실시간으로 필요한 내용만 반영하는 기능이 최근 업데이트 되었습니다.
이제 Functional CSS는 이런 방식으로 진화를 하고 있습니다.
https://tailwindcss.com/docs/just-in-time-mode


## Adorable CSS는 어떤점이 좋은가요?

class 이름짓기의 고뇌에서 이제 벗어 날 수 있습니다.

더이상 css를 작성하지 않아도 됩니다.

HTML 혹은 jsx에서 벗어나지 않고 그 자리에서 디자인을 적용하고 실시간으로 적용된 결과를 볼 수 있습니다.

직관적이고 실용적으로 구성된 다양한 class function들로 기존보다 훨씬 더 편하게 UI 개발을 할 수 있습니다.

handOff 친화적인 개발 방식으로 figma 플러그인을 통해 한번에 디자이너의 결과물을 HTML로 jsx로 가져오세요.


## Getting Started

https://www.youtube.com/watch?v=55W1rlJ4ukc

```
npm i -D adorable-css
```

```
#vite.config.js

...
import {adorableCSS} from "./src[adorable-css]/vite-plugin-adorable-css"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [..., adorableCSS()] // <-
})
```

```
#main.tsx

import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "@adorable.css" // <-
import {App} from "./App"

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
)
```

```
// App.tsx

export const App = () => <div className="layer pack">
  <button className="font(20) p(10) b(none) r(6) bg(orange) hover:bg(darkorange) pointer">click Me</button>
</div>
```

#### @NOTE: React뿐만 아니라 Svelte, Vue를 포함해 vite기반의 모든 프레임워크를 지원합니다. 


## What is AdorableCSS?

- Rapid On-Demand Atomic CSS framework
- class="w(100) h(100) c(red)" 등 미리 정의된 간단한 class를 조립하여 원하는 디자인을 만들 수 있습니다!
- 더 이상 새로운 css를 작성하는 데 힘빼지 마세요. 거의 모든 class는 만들어져있습니다. 쓰기만 하세요.


## How?
- class에 속성을 정의할때마다 필요한 css를 자동으로 생성하는 방식으로 동작합니다.
- 모든 수치와 색상을 지원하며 필요한 경우 필요한 만큼의 CSS만 만들어 냅니다.


## Why?
- **Easy**: 디자인을 위해 이름을 짓는 수고가 사라지며, 한번 외운 이름은 계속 사용할 수 있습니다. 
- **Write less do more**: 기존 css문법보다 훨씬 더 간결하면서도 더 많은 작업을 할 수 있습니다.
- **Fast Writing and No switching**: html, jsx에 바로 디자인을 적용할 수 있어 매우 빠른 디자인 개발 속도를 가집니다.
- **Portable**: css 없이 HTML만으로 UI를 만들 수 있어 이동과 리팩토링에서 자유롭습니다.
- **Compact**: 기존 css 방식보다 훨씬 더 적은 라인의 최적화된 css를 생산합니다.
- **Great for Auto Design HandOff**: 이름이 필요없기에 figma등의 HandOff에서 변환하기에 최적화된 형태입니다.


## Syntax

```
property(value) 
  - 가장 기본적인 형태로 프로퍼티(값)의 형태를 가집니다.
  ex) class="w(240) h(100) c(#fff.3)"

property(value/value/...) 
  - 클래스는 띄어쓰기로 구분되므로 기존 css에서 띄어쓰기 구분자들은 '/'로 구분합니다.
  ex) class="p(10/20) font(12/18/-1%) m(10/20/30/40)"

property
  - 값이 없는 프로퍼티는 ()를 사용하지 않습니다.
  ex) class="hbox absolute bold none"

prefix:property(value) 
  - 조건부 렌더링 prefix를 통해 상황별로 서식을 다르게 적용할 수 있습니다.
  ex) class="hover:bg(red) focus:ring(blue) .isSelected:underline mobile:vbox"

prefix:property(value)! or property(value)! or property!
  - 마지막에 !를 붙이면 !important 로 만들어줍니다.
  ex) class="active:bg(red)! b(0)! none! fixed!"

```



## Basic

### 색상

색상은 아래와 같이 여러가지 방식을 지원하며 배경색과 테두리색에도 공통으로 적용됩니다. ex) bg(), b() 

```
c(red) 색상이름

c(#0080ff) hex

c(#0080ff.8) hex + alpha

c(255,0,0) rgb

c(255,0,0,.7) rgba

c(100,50%,50%) hsl

c(100,50%,50%,.5) hsla

c(--css-var) css-variable
```



<br/>

### 글자크기

font()는 font-size / line-height / letter-spacing 을 입력할 수 있습니다.


```
font(20) => { font-size: 20px }

font(20/1.5) => { font-size: 20px; line-height:1.5 }

font(20/1.5/-1%) => { font-size: 20px; line-height:1.5; letter-spacing:-1em } }

font(20/-/-1%) => { font-size: 20px; letter-spacing:-1em } }
```


### 글자모양
()는 없습니다.

```
class="bold italic underline" { font-weight:bold; font-style:italic; text-decoration:underline;  }
class="600" {font-weight: 600}
class="semibold" {font-weight: 600}
class="uppercase" {text-transform: uppercase} (e.g lowercase / small-caps)
class="monospace" {font-family:monospace}  (e.g serif / sans-serif / cursive / fantasy)
class="text-center" {text-align:center} (e.g text-left, text-right, text-justify )
class="break-all" {word-break:break-all} (e.g break-word, keep-all )
```


### Box-Sizing
width / height

```
w(100) {width: 100px}
w(100~) {min-width: 100px}
w(~100%) {max-width: 100%}
w(100~200) {min-width: 100px; max-width:200}
w(50) w(~100%) {width:100; max-width: 100%}
```

height도 동일합니다. h()


### Box-Model

margin / padding / border / border-radius  m/p/b/r + t/r/b/l 이런식의 조합방식을 사용합니다.
(**box-model는 빈도를 고려해 축약해서 사용합니다.**)

```
m(10) { margin: 10px }
p(10/20) { padding: 10px 20px; }
br(#ccc) { border-right: 1px solid #ccc }
bbw(2) { border-bottom-width: 2px }
r(10) { border-radius: 10px }
r(10/10/20/20) { border-radius: 10px 10px 20px 20px }
r(100%) { border-radius: 100% }
rtl(5) { border-top-left-radius: 100% }
rr(10) { border-top-right-radius: 10px; border-bottom-right-radius: 10px;  }
```


### Overflow

```
clip { overflow: hidden} // 빈도가 높아서 축약형으로 추가했습니다.
scrol" { overflow: auto}
scroll-y { overflow-x: hidden; overflow-y: auto} (e.g scroll-x)
scrollbar { overflow: scroll }
overflow(visible) { overflow: visible}
```




## Layout - Flexbox

https://www.youtube.com/watch?v=qFvOhBqX1-k


CSS의 꽃! 레이아웃에 대해서 알아봅시다.

AdorableCSS는 flexbox에 기반하여 레이아웃을 아주 쉽게 만들수 있도록 구성하였습니다.

### hbox
: 컨텐츠를 가로로 배치하고 싶다면 hbox(horizontal box)를 사용하세요.



```html
<div class="hbox gap(10) b(orange) p(10)">
  <div class="w(48) h(48) bg(orange) pack">h</div>
  <div class="w(48) h(48) bg(orange) pack">b</div>
  <div class="w(48) h(48) bg(orange) pack">o</div>
  <div class="w(48) h(48) bg(orange) pack">x</div>
</div>
```



### gap(value)
### gap(vertical/horizonal)

: 각 컨텐츠별 간격을 입력할 수 있습니다.

https://caniuse.com/flexbox-gap

@NOTE: IE<=11,  safari<14.1 을 지원해야 한다면 hgap, hgap-reverse를 사용할 수 있습니다.


```html
<div class="hbox gap(10) b(orange) p(10)">
  <div class="w(48) h(48) bg(orange) pack">h</div>
  <div class="w(48) h(100) bg(orange) pack">b</div>
  <div class="p(10) h(56) bg(orange) pack">o width가 없으면(=auto)<br/>컨텐츠에 맞게 늘어남.</div>
  <div class="w(48) h(24) bg(orange) pack">x</div>
</div>
```

hbox의 경우 전체 박스를 가운데로 맞춰 정렬하며 자식 엘리먼트의 크기가 지정되지 않을 경우에는 컨텐츠에 맞게 자동으로 늘어납니다.


### 배치를 변경해보자)

```
hbox(top)

hbox(bottom)

hbox(fill) = hbox(stretch)  // stretch는 오타가 자주나고 길어서 fill alias를 제공합니다.

hbox(right)

hbox(reverse)
```

+로 조립해서 사용할수 있다.

```
hbox(top+right)

hbox(bottom+right)

hbox(fill+reverse+left)
```


```
<div class="hbox(top) gap(10) b(orange) p(10)">
  <div class="w(48) h(48) bg(orange) pack">h</div>
  <div class="w(48) h(100) bg(orange) pack">b</div>
  <div class="p(10) bg(orange) pack">o</div>
  <div class="w(48) h(24) bg(orange) pack">x</div>
  <div class="w(48) h(50) bg(orange) pack">(top)</div>
</div>
```

```
<div class="hbox(bottom) gap(10) b(orange) p(10)">
  <div class="w(48) h(48) bg(orange) pack">h</div>
  <div class="w(48) h(100) bg(orange) pack">b</div>
  <div class="p(10) bg(orange) pack">o</div>
  <div class="w(48) h(24) bg(orange) pack">x</div>
  <div class="p(10) h(50) bg(orange) pack">(bottom)</div>
</div>
```



+ 기호를 사용하여 bottom+right / top+reverse 등 자유롭게 컨텐츠를 배치하세요

```
<div class="hbox(bottom+right) gap(10) b(orange) p(10) w(400) h(200)">
```

```
<div class="hbox(top+reverse) gap(10) b(orange) p(10) w(400) h(200)">
```




### h(fill) (= h(stretch))  *fill = fill-parent

: 개별 항목에 height를 fill로 지정하면 부모 컨텐츠 만큼의 크기를 갖습니다.

```html
<div class="hbox gap(10) b(orange) p(10)">
  <div class="w(48) h(48) bg(orange) pack">h</div>
  <div class="w(48) h(100) bg(orange) pack">b</div>
  <div class="p(10) bg(orange) pack">o</div>
  <div class="w(48) h(24) bg(orange) pack">x</div>
  <div class="p(10) h(fill) bg(orange) pack">h(fill)</div>
</div>
```



### hbox(fill)

: 모든 자식 컨텐츠의 크기를 부모 컨텐츠와 같이 만들어 줍니다. (단, 자식의 height가 지정이 될 경우에는 지정된 height를 우선합니다.)

```html
<div class="hbox(fill) gap(10) b(orange) p(10) h(200)">
  <div class="w(48) bg(orange) pack">h</div>
  <div class="w(48) h(100) bg(orange) pack">크기를 지정하면<br/>컨텐츠 크기</div>
  <div class="p(10) bg(orange) pack">o</div>
  <div class="w(48) bg(orange) pack">x</div>
  <div class="p(10) bg(orange) pack">(fill)</div>
</div>
```



### pack / space-between

pack은 모든 컨텐츠를 가운데로 배치합니다.

버튼이나 모달 팝업 등등 여러곳에서 자주 사용합니다. 자식 컨텐츠는 여러개가 있을 경우 같이 가운데에 배치됩니다. (세로로 하고 싶다면 vbox)


```html
<div class="hbox pack b(orange) p(10) h(200)">
  <div class="p(10) bg(orange) pack">pack</div>
</div>
```



아래와 같이 hbox(top)과 pack을 조합해서 배치도 가능합니다.

```html
<div class="hbox(top) pack gap(10) b(orange) p(10) w(200) h(200)">
  <div class="p(10) bg(orange) pack">hbox(top)</div>
  <div class="p(10) bg(orange) pack">pack</div>
</div>
```




### space-between space-around / space-evenly

:space-between은 각 컨텐츠를 같은 간격으로 벌려놓습니다. (NAVBar 같은 곳에서 사용합니다.) 

```html
<div class="hbox space-between b(orange) p(10) w(300)">
  <div class="p(10) bg(orange) pack">space</div>
  <div class="p(10) bg(orange) pack">-</div>
  <div class="p(10) bg(orange) pack">beetween</div>
</div>
```

### space / flex


```html
<div class="hbox b(orange) w(400)">
  <div class="p(10) bg(orange) pack">space(8)</div>
  <div class="space(8)"/>
  <div class="p(10) bg(orange) pack">vs</div>
  <div class="flex"/>
  <div class="p(10) bg(orange)">flex</div>
</div>
```




### space

: 커스텀 부분을 지정하여 간격을 띄울때는 margin을 사용하는 것보다 빈 엘리먼트를 만드는것이 더 좋습니다.

: 실전에서 디자인 가이드에 보통 저 사이 간격을 적어주는 편이기도 하고 컴포넌트나 엘리먼트에 margin을 직접 적용하면 재사용이 힘들어지기 때문입니다.





### flex

: flex는 빈공간을 메워주는 역할을 합니다.

: 단독으로만 사용해서 좌우를 벌려주는 용도로 가장 많이 사용하고 Auto Grow가 필요한 컨텐츠 영역에 사용하기도 합니다.

: 숫자를 부여하면 남는 공간을 비율로 나눌 수 있습니다.

```html
<div class="hbox b(orange) w(400)">
  <div class="p(10) bg(red) pack flex(1)">flex(1)</div>
  <div class="p(10) bg(yellow) pack flex(2)">flex(2)</div>
  <div class="p(10) bg(green) pack flex(3)">flex(3)</div>
</div>
```


### vbox

: 컨텐츠를 세로로 배치하고 싶다면 vbox(vertical box)를 사용하세요.

: 사용법은 hbox와 동일 합니다. 단, vbox는 기본값이 fill = stretch 입니다.




## Reference

```typescript
export const reset = `* {margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}`

export const RULES:Record<string, Function> = {

  // -- Color
  c: (value:string) => `color:${makeColor(value)};`,

  // -- Background Color
  bg: (value:string) => `background-color:${makeColor(value)};`, // @TODO:url형식이면, background-image만 넣는 것으로 하자.

  // -- Typography
  font: (value:string) => makeFont(value),
  "font-size": (value:string) => `font-size:${px(value)};`,
  "letter-spacing": (value:string) => `letter-spacing:${px(value)};`,
  "word-spacing": (value:string) => `word-spacing:${px(value)};`,

  // Font Weight
  "100": () => `font-weight:100;`,
  "200": () => `font-weight:200;`,
  "300": () => `font-weight:300;`,
  "400": () => `font-weight:400;`,
  "500": () => `font-weight:500;`,
  "600": () => `font-weight:600;`,
  "700": () => `font-weight:700;`,
  "800": () => `font-weight:800;`,
  "900": () => `font-weight:900;`,

  ultralight: () => `font-weight:100;`,
  lighter: () => `font-weight:100;`,
  thin: () => `font-weight:200;`,
  light: () => `font-weight:300;`,
  regular: () => `font-weight:400;`,
  medium: () => `font-weight:500;`,
  semibold: () => `font-weight:600;`,
  bold: () => `font-weight:700;`,
  heavy: () => `font-weight:800;`,
  bolder: () => `font-weight:900;`,

  // Font Weight Utility
  thicker: (value = 1) => `text-shadow:0 0 ${px(value)} currentColor;`,


  // Font-Style
  italic: () => `font-style:italic;`,
  overline: () => `text-decoration:overline;`,
  underline: () => `text-decoration:underline;`,
  "line-through": () => `text-decoration:line-through;`,
  "strike": () => `text-decoration:line-through;`,
  del: () => `text-decoration:line-through;`,


  // Font-Family @TODO:font-stack은 일반적인 스택 만들어 두기...(L)
  "sans-serif": () => `font-family:sans-serif;`,
  serif: () => `font-family:serif;`,
  monospace: () => `font-family:menlo,monospace;`,
  cursive: () => `font-family:cursive;`,
  fantasy: () => `font-family:fantasy;`,
  "system-ui": () => `font-family:system-ui;`,

  "small-caps": () => `font-variant:small-caps`,
  lowercase: () => `text-transform:lowercase;`,
  uppercase: () => `text-transform:uppercase;`,
  capitalize: () => `text-transform:capitalize;`,


  // Text
  "text-justify": () => `text-align:justify;`,
  "text-center": () => `text-align:center;`,
  "text-right": () => `text-align:right;`,
  "text-left": () => `text-align:left;`,

  "break-all": () => `word-break:break-all;`,
  "break-word": () => `word-break:break-word;overflow-wrap:break-word;`,
  "keep-all": () => `word-break:keep-all;`,

  // @TODO
  // "text-shadow":(value:string) => `text-shadow:${makeSide(value)};`,


  // -- Box-Sizing
  "border-box": () => `box-sizing:border-box`,
  "content-box": () => `box-sizing:content-box`,

  // -- Box-Model

  // @TODO:1/6, calc()
  w: (value:string) => {
    if (value.includes("~")) {
      const result = []
      const [min, max] = value.split("~")
      min && result.push(`min-width:${px(min)};`)
      max && result.push(`max-width:${px(max)};`)
      return result.join("")
    }
    return (value === "stretch" || value === "fill") ? `align-self:stretch` : `width:${px(value)};`
  },

  h: (value:string) => {
    if (value.includes("~")) {
      const result = []
      const [min, max] = value.split("~")
      min && result.push(`min-height:${px(min)};`)
      max && result.push(`max-height:${px(max)};`)
      return result.join("")
    }
    return (value === "stretch" || value === "fill") ? `align-self:stretch` : `height:${px(value)};`
  },

  m: (value:string) => `margin:${makeSide(value)};`,
  mt: (value:string) => `margin-top:${px(value)};`,
  mr: (value:string) => `margin-right:${px(value)};`,
  mb: (value:string) => `margin-bottom:${px(value)};`,
  ml: (value:string) => `margin-left:${px(value)};`,

  p: (value:string) => `padding:${makeSide(value)};`,
  pt: (value:string) => `padding-top:${px(value)};`,
  pr: (value:string) => `padding-right:${px(value)};`,
  pb: (value:string) => `padding-bottom:${px(value)};`,
  pl: (value:string) => `padding-left:${px(value)};`,

  b: (value:string) => `border:${makeBorder(value)};`,
  bt: (value:string) => `border-top:${makeBorder(value)};`,
  br: (value:string) => `border-right:${makeBorder(value)};`,
  bb: (value:string) => `border-bottom:${makeBorder(value)};`,
  bl: (value:string) => `border-left:${makeBorder(value)};`,

  bw: (value:string) => `border-width:${px(value)};`,
  btw: (value:string) => `border-top-width:${px(value)};`,
  brw: (value:string) => `border-right-width:${px(value)};`,
  bbw: (value:string) => `border-bottom-width:${px(value)};`,
  blw: (value:string) => `border-left-width:${px(value)};`,

  bs: (value:string) => `border-style:${cssvar(value)};`,
  bts: (value:string) => `border-top-style:${cssvar(value)};`,
  brs: (value:string) => `border-right-style:${cssvar(value)};`,
  bbs: (value:string) => `border-bottom-style:${cssvar(value)};`,
  bls: (value:string) => `border-left-style:${cssvar(value)};`,

  bc: (value:string) => `border-color:${makeColor(value)};`,
  btc: (value:string) => `border-top-color:${makeColor(value)};`,
  brc: (value:string) => `border-right-color:${makeColor(value)};`,
  bbc: (value:string) => `border-bottom-color:${makeColor(value)};`,
  blc: (value:string) => `border-left-color:${makeColor(value)};`,

  // @TODO:교육이 필요하다.
  r: (value:string) => `border-radius:${makeSide(value)};`,

  rt: (value:string) => `border-top-left-radius:${px(value)};border-top-right-radius:${px(value)};`,
  rr: (value:string) => `border-top-right-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  rb: (value:string) => `border-bottom-left-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  rl: (value:string) => `border-top-left-radius:${px(value)};border-bottom-left-radius:${px(value)};`,

  rtl: (value:string) => `border-top-left-radius:${px(value)};`,
  rtr: (value:string) => `border-top-right-radius:${px(value)};`,
  rbr: (value:string) => `border-bottom-right-radius:${px(value)};`,
  rbl: (value:string) => `border-bottom-left-radius:${px(value)};`,

  ring: (value:string) => {
    const [color, size = 1] = value.split("/")
    return `box-shadow:0 0 0 ${px(size)} ${makeColor(color)};`
  },

  outline: (value:string) => `outline:1px solid ${makeColor(value)};`,
  "guide": (value = "#4f80ff") => `&, & > * { outline:1px solid ${makeColor(value)};}`,

  // -- Background Image

  // @TODO:background 이미지에 대한 세련된 방법이 필요하다!
  "bg-repeat-x": () => `background-repeat:repeat-x;`,
  "bg-repeat-y": () => `background-repeat:repeat-y;`,
  "bg-no-repeat": () => `background-repeat:no-repeat;`,
  "bg-fixed": () => `background-attachment:fixed;`,
  "bg-scroll": () => `background-attachment:scroll;`,
  "bg-position": (value:string) => `background-position:${value};`,

  contain: () => `background-size:contain;background-position:center;object-fit:contain;`,
  cover: () => `background-size:cover;background-position:center;object-fit:cover;`,


  // -- Display
  "block": () => "display:block;",
  "inline-block": () => "display:inline-block;",
  "inline": () => "display:inline;",
  "inline-flex": () => "display:inline-flex;",
  "table": () => "display:table;",
  "inline-table": () => "display:inline-table;",
  "table-caption": () => "display:table-caption;",
  "table-cell": () => "display:table-cell;",
  "table-column": () => "display:table-column;",
  "table-column-group": () => "display:table-column-group;",
  "table-footer-group": () => "display:table-footer-group;",
  "table-header-group": () => "display:table-header-group;",
  "table-row-group": () => "display:table-row-group;",
  "table-row": () => "display:table-row;",
  "flow-root": () => "display:flow-root;",
  "grid": () => "display:grid;",
  "inline-grid": () => "display:inline-grid;",
  "contents": () => "display:contents;",
  "list-item": () => "display:list-item;",

  // -- Flexbox
  hbox: (value:string) => `display:flex;flex-flow:row;${makeHBox(value)}`,
  vbox: (value:string) => `display:flex;flex-flow:column;${makeVBox(value)}`,
  pack: () => `display:flex;align-items:center;justify-content:center;`,
  "hbox(": () => ``,
  "vbox(": () => ``,

  gap: (value:string) => `gap:${makeSide(value)};`,

  // @NOTE: IE, safari<=13
  hgap: (value:string) => `&>*+* {margin-left:${px(value)};}`,
  "hgap-reverse": (value:string) => `&>*+* {margin-right:${px(value)};}`,
  vgap: (value:string) => `&>*+* {margin-top:${px(value)};}`,
  "vgap-reverse": (value:string) => `&>*+* {margin-bottom:${px(value)};}`,

  "space-between": () => `justify-content:space-between;`,
  "space-around": () => `justify-content:space-around;`,
  "space-evenly": () => `justify-content:space-evenly;`,

  // flex
  flex: (value = "1") => `flex:${makeValues(value)};`,
  space: (value:string) => `[class*="hbox"]>& {width:${px(value)};} [class*="vbox"]>& {height:${px(value)};}`,

  "flex-grow": (value:string) => `flex-grow:${cssvar(value)};`,
  "flex-shrink": (value:string) => `flex-shrink:${cssvar(value)};`,
  "flex-basis": (value:string) => `flex-basis:${px(value)};`,

  "flex-wrap": () => "flex-wrap:wrap;",
  "flex-wrap-reverse": () => "flex-wrap:wrap-reverse;",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value:string) => `order:${cssvar(value)};`,


  /// -- Overflow

  // OverFlow:@TODO:스크롤바 보여지느냐 아니냐... 보통 auto를 쓴다. 스크롤 바는 생각할게 많네요!! (thank you Linda!)
  overflow: (value:string) => `overflow:${value};`,
  "overflow-x": (value:string) => `overflow-x:${value};`,
  "overflow-y": (value:string) => `overflow-y:${value};`,

  clip: () => `overflow:hidden;`,
  "scroll": () => `overflow:auto;`,
  "scroll-x": () => `overflow-x:auto;overflow-y:hidden;`,
  "scroll-y": () => `overflow-x:hidden;overflow-y:auto;`,
  "scrollbar": () => `&{overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar {display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal {display:none;}`,

  // @TODO:- TBD
  "overscroll": (value:string) => `overscroll-behavior:${value};`,
  "overscroll-x": (value:string) => `overscroll-behavior-x:${value};`,
  "overscroll-y": (value:string) => `overscroll-behavior-y:${value};`,

  // @TODO:- TBD
  "no-bouncing": () => "",
  "no-overscroll": () => "",

  "vertical-align": (value:string) => `vertical-align:${value}`,
  "vertical-top": () => `vertical-align:top`,

  // OverFlow + Text
  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "nowrap": () => `white-space:nowrap;flex-shrink:0;`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;`,

  // line-clamp vs max-lines
  // @NOTE:일단 기존 프로퍼티에 의거한다는 원칙에따라 line-clamp를 쓴다. 이후 max-lines가 정식 스펙이 되면 deprecated한다.
  // @NOTE:그냥 둘다 제공한다.
  "line-clamp": (value:string) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "max-lines": (value:string) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "text-indent": (value:string) => `text-indent:${px(value)};`,


  // Scroll Snap -- TBD @TODO:


  // Visibility
  none: () => `display:none;`,
  opacity: (value:string) => `opacity:${cssvar(value)};`,
  invisible: () => `visibility:hidden;`,
  visible: () => `visibility:visible;`,
  "gone": () => `position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);`,


  // Position
  layer: (value = "") => {
    const pos = {top: 0, right: 0, bottom: 0, left: 0}
    value.split("+").forEach(v => {
      switch (v) {
        //@ts-ignore
        case "top": {return (delete pos["bottom"])}
        //@ts-ignore
        case "right": {return (delete pos["left"])}
        //@ts-ignore
        case "bottom": {return (delete pos["top"])}
        //@ts-ignore
        case "left": {return (delete pos["right"])}
      }
    })
    return `position:absolute;` + Object.keys(pos).map((value:string) => `${value}:0`).join(";")
  },

  "absolute": () => `position:absolute;`,
  "relative": () => `position:relative;`,
  "sticky": () => `position:sticky;`,
  "sticky-top": (value = 0) => `position:sticky;top:${px(value)};`,
  "sticky-right": (value = 0) => `position:sticky;right:${px(value)};`,
  "sticky-bottom": (value = 0) => `position:sticky;bottom:${px(value)};`,
  "sticky-left": (value = 0) => `position:sticky;left:${px(value)};`,
  "fixed": () => `position:fixed;`,
  "static": () => `position:static;`,


  // Position
  x: (value:string) => `left:${px(value)};`,
  y: (value:string) => `top:${px(value)};`,
  z: (value:string) => `z-index:${cssvar(value)};`,
  top: (value:string) => `top:${px(value)};`,
  left: (value:string) => `left:${px(value)};`,
  right: (value:string) => `right:${px(value)};`,
  bottom: (value:string) => `bottom:${px(value)};`,


  // Interactions
  "user-select-none": () => "user-select:none;",
  "user-select-all": () => "user-select:all;",
  "user-select-auto": () => "user-select:auto;",
  "user-select-text": () => "user-select:text;",

  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",

  pointer: () => `cursor:pointer;`,
  grab: () => `&{cursor:grab;} &:active{cursor:grabbing;}`,
  grabbing: () => `cursor:grabbing;`,
  cursor: (value:string) => `cursor:${value};`,

  // 에니메이션:transition(transform=100s/opacity=2s)
  transition: (value:string) => `transition:${makeTransition(value)};`,

  // @TODO:섞을수가 없네? mix transform
  // @TBD: translate(10,10)+rotateX(180deg)+scale(2) 이런식으로 +기호로 묶자!!

  translate: (value:string) => `transform:translate(${makeCommaValues(value)});`,
  translateX: (value:string) => `transform:translateX(${cssvar(value)});`,
  translateY: (value:string) => `transform:translateY(${cssvar(value)});`,
  translateZ: (value:string) => `transform:translateZ(${cssvar(value)});`,
  translate3d: (value:string) => `transform:translate3d(${makeCommaValues(value)});`,

  rotate: (value:string) => `transform:rotate(${makeCommaValues(value)});`,
  rotateX: (value:string) => `transform:rotateX(${cssvar(value)});`,
  rotateY: (value:string) => `transform:rotateY(${cssvar(value)});`,
  rotateZ: (value:string) => `transform:rotateZ(${cssvar(value)});`,
  rotate3d: (value:string) => `transform:rotateZ(${makeCommaValues(value)});`,

  scale: (value:string) => `transform:scale(${makeCommaValues(value)});`,
  scaleX: (value:string) => `transform:scaleX(${makeCommaValues(value)});`,
  scaleY: (value:string) => `transform:scaleY(${makeCommaValues(value)});`,
  scaleZ: (value:string) => `transform:scaleZ(${makeCommaValues(value)});`,


  // Util
  ratio: (value:string) => `& {position:relative;width:100%;padding-top:${makeRatio(value)};} & > * {position:absolute;top:0;left:0;width:100%;height:100%;}`,
  gpu: () => `transform:translateZ(0.1px);`,

  // @TODO:triangle

  // etc
  "no-border": () => `border:none;outline:none;`,
  "app-region": (value:string) => `-webkit-app-region:${value};`,
  content: (value:string) => `content:'${cssvar(value)}'`,
  "clip-path": (value:string) => `clip-path:${cssvar(value)};-webkit-clip-path:${cssvar(value)};`,

  "table-layout-fixed": () => `table-layout:fixed;`,

  // Float & Clear
  "float": (value:string) => `float:${cssvar(value)}`,
  "clear": (value:string) => `clear:${cssvar(value)}`,

  // Filter
  "blur": (value:string) => `filter:blur(${px(value)})`,
  "brightness": (value:string) => `filter:brightness(${cssvar(value)})`,
  "contrast": (value:string) => `filter:contrast(${cssvar(value)})`,
  "drop-shadow": (value:string) => `filter:drop-shadow(${cssvar(value)})`,
  "grayscale": (value:string) => `filter:grayscale(${cssvar(value)})`,
  "hue-rotate": (value:string) => `filter:hue-rotate(${cssvar(value)})`,
  "invert": (value:string) => `filter:invert(${cssvar(value)})`,
  "sepia": (value:string) => `filter:sepia(${cssvar(value)})`,
  "saturate": (value:string) => `filter:saturate(${cssvar(value)})`,

  "backdrop-blur": (value:string) => `backdrop-filter:blur(${px(value)})`,
  "backdrop-brightness": (value:string) => `backdrop-filter:brightness(${cssvar(value)})`,
  "backdrop-contrast": (value:string) => `backdrop-filter:contrast(${cssvar(value)})`,
  "backdrop-drop-shadow": (value:string) => `backdrop-filter:drop-shadow(${cssvar(value)})`,
  "backdrop-grayscale": (value:string) => `backdrop-filter:grayscale(${cssvar(value)})`,
  "backdrop-hue-rotate": (value:string) => `backdrop-filter:hue-rotate(${cssvar(value)})`,
  "backdrop-invert": (value:string) => `backdrop-filter:invert(${cssvar(value)})`,
  "backdrop-sepia": (value:string) => `backdrop-filter:sepia(${cssvar(value)})`,
  "backdrop-saturate": (value:string) => `backdrop-filter:saturate(${cssvar(value)})`,


  // elevation
  elevation: (value:string) => {
    const dp = +value
    if (!dp) {
      return `box-shadow: none`
    }

    const blur = (dp == 1 ? 3 : dp * 2)
    const amba = (dp + 10 + (dp / 9.38)) / 100
    const diry = (dp < 10 ? (dp % 2 == 0 ? dp - ((dp / 2) - 1) : (dp - ((dp - 1) / 2))) : dp - 4)
    const dira = (24 - (Math.round(dp / 10))) / 100

    return `box-shadow: 0px ${px(dp)} ${px(blur)} rgba(0, 0, 0, ${amba}), 0px ${px(diry)} ${px(blur)} rgba(0, 0, 0, ${dira})`
  }
}

/// Prefix
type PrefixProps = { media?:string, selector?:string, postCSS?:Function }
type PrefixRules = Record<string, PrefixProps>

const PREFIX_PSEUDO_CLASS:PrefixRules = {
  "hover:": {media: `(hover:hover)`, selector: `&:hover, &.\\:hover`},
  "active:": {selector: `html &:active, html &.\\:active`},
  "focus:": {selector: `html &:focus, html &.\\:focus`},
  "focus-within:": {selector: `html &:focus-within, html &.\\:focus-within`},
  "checked:": {selector: `html &:checked, html &.\\:checked`},
  "read-only:": {selector: `html &:read-only, html &.\\:read-only`},
  "enabled:": {selector: `html &:enabled, html &.\\:enabled`},
  "disabled:": {selector: `html body &:disabled, html body &.\\:disabled, html body &[disabled]`},

  "group-hover:": {selector: `.group:hover &, html .group.\\:hover &`},
  "group-active:": {selector: `html .group:active &, html .group.\\:active &`},
  "group-focus:": {selector: `html .group:focus &, html .group.\\:focus &`},
  "group-focus-within:": {selector: `html .group:focus-within &, html .group\\:focus-within`},
  "group-checked:": {selector: `html .group:checked &, html .group.\\:checked &`},
  "group-read-only:": {selector: `html .group:read-only &, html .group.\\:read-only &`},
  "group-enabled:": {selector: `html .group:enabled &, html .group.\\:enabled &`},
  "group-disabled:": {selector: `html body .group:disabled &, html body .group[disabled] &, html body .group.disabled &`},

  "placeholder:": {selector: `&::placeholder`},

  "link:": {selector: `&:link`},
  "visited:": {selector: `&:visited`},

  "first:": {selector: `&:first-child`},
  "first-child:": {selector: `&:first-child`},
  "last:": {selector: `&:last-child`},
  "last-child:": {selector: `&:last-child`},
  "odd:": {selector: `&:nth-child(2n+1)`},
  "even:": {selector: `&:nth-child(2n)`},

  // @TBD:!!
  // "before:": {selector: `&:before`},
  // "after:": {selector: `&:after`},
  // "nth-child(?):": {selector: `&:nth-child(?)`},
}

const PREFIX_MEDIA_QUERY:PrefixRules = {
  "sm:": {media: `(min-width:480px)`, selector: `html &`},
  "md:": {media: `(min-width:768px)`, selector: `html &`},
  "lg:": {media: `(min-width:1024px)`, selector: `html &`},
  "xl:": {media: `(min-width:1280px)`, selector: `html &`},

  "sm~:": {media: `(min-width:480px)`, selector: `html &`},
  "md~:": {media: `(min-width:768px)`, selector: `html &`},
  "lg~:": {media: `(min-width:1024px)`, selector: `html &`},
  "xl~:": {media: `(min-width:1280px)`, selector: `html &`},

  "~sm:": {media: `(max-width:479.98px)`, selector: `html &`},
  "~md:": {media: `(max-width:767.98px)`, selector: `html &`},
  "~lg:": {media: `(max-width:1023.98px)`, selector: `html &`},
  "~xl:": {media: `(max-width:1279.98px)`, selector: `html &`},

  "mobile:": {media: `(max-device-width:767.98px)`, selector: `html &`},
  "tablet:": {media: `(min-device-width:768px) and (max-width:1023.98px)`, selector: `html &`},
  "desktop:": {media: `(min-device-width:1024px)`, selector: `html &`},
  "!mobile:": {media: `(min-device-width:768px)`, selector: `html &`},
  "!desktop:": {media: `(max-device-width:1023.98px)`, selector: `html &`},

  "touch:": {media: `(hover:none)`, selector: `html &`},
  "!touch:": {media: `(hover:hover)`, selector: `html &`},

  "portrait:": {media: `(orientation:portrait)`, selector: `html &`},
  "landscape:": {media: `(orientation:landscape)`, selector: `html &`},

  "print:": {media: `print`, selector: `html &`},
  "screen:": {media: `screen`, selector: `html &`},
  "speech:": {media: `speech`, selector: `html &`},


  // dark:@TBD
  "dark:": {selector: `html.dark &`},

  // device:@TBD
  "device": {
    postCSS: ({media, ...props}) => {
      media = media.replace(/(max|min)-width/g, (a, b) => {
        return b + "-device-width"
      })
      return {media, ...props}
    }
  },
}
```


## Ground Rule!

- 가능한 css의 property를 그대로 쓴다.
- c, bg, mt, p, 등 색상 및 box-model은 빈도를 고려해 축약해서 쓴다.
- 가급적 bootstrap이나 tailwind 등에서 이미 쓰고 있는 이름을 가급적 사용한다. eg) text-center
- *figma의 속성과 1:1이 될 수 있도록 한다. eg) hbox(top+right) gap(10)