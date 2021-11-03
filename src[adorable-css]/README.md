# 🐳 AdorableCSS

> Rapid On-Demand Atomic CSS framework

> AdorableCSS를 만들게 된 배경이 궁금하다면 [여기](https://velog.io/@teo/adorable-css)를 통해 확인해보세요.

## Try It Online
- try it online [here](https://developer-1px.github.io/adorable-css/).

![AdorableCSS](https://images.velog.io/images/teo/post/dde8bc56-15d0-4fc0-a15a-f3c204f50494/AdorableCSS.gif)

#### Don't write your own css. Just write down in HTML.

```tsx
// Button.tsx

export const Button = () =>
  <button class="hbox pack bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000)! active:b(#000.2)">click me</button>
```

#### ... and auto generated css code on realtime! 😎

```css
/* @adorable.css */

* {margin: 0;padding: 0;box-sizing: border-box;font: inherit;color: inherit;flex-shrink: 0;}
.c\(\#fff\) {color: #fff;}
html .active\:bg\(\#000\)\!:active, html .active\:bg\(\#000\)\!.\:active {background-color: #000 !important;}
.bg\(\#333\) {background-color: #333;}
@media (hover: hover) {
  .hover\:bg\(\#555\):hover, .hover\:bg\(\#555\).\:hover {background-color: #555;}
}
.font\(14\/16\/-1\%\) {font-size: 14px;line-height: 16px;letter-spacing: -0.01em}
.bold {font-weight: 700;}
.hbox {display: flex;flex-flow: row;align-items: center;}
.p\(8\/12\) {padding: 8px 12px;}
.pack {display: flex;align-items: center;justify-content: center;}
.pointer {cursor: pointer;}
html .active\:b\(\#000\.2\):active, html .active\:b\(\#000\.2\).\:active {border: 1px solid rgba(0, 0, 0, .2);}
.b\(\#000\.2\) {border: 1px solid rgba(0, 0, 0, .2);}
.r\(6\) {border-radius: 6px;}
.transition\(\.2s\) {transition: all .2s;}
```

---

## Getting Started

https://www.youtube.com/watch?v=55W1rlJ4ukc&list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL

```
npm i -D adorable-css
```

```ts
// vite.config.js
...
import {adorableCSS} from "adorable-css/vite-plugin-adorable-css" // <-

export default defineConfig({
  plugins: [adorableCSS(), ...] // <-
})
```

```tsx
// main.tsx

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

#### @NOTE: React뿐만 아니라 Svelte, Vue를 포함해 vite기반의 모든 프레임워크를 지원합니다.


## New features
- 0.3.1 - border 지원 업데이트
- 0.3.0 - +나 -로 시작하는 value인 경우 calc가 되지 않도록 하는 버그 수정
- 0.2.9 - +selector 지원 ex) +&:bl(#ccc)
- 0.2.8 - calc() 지원 ex) w(100%-10px)

## 지금 준비하고 있는 기능들
- transform 결합: ex) translateX(10)+scale(.5)
- more level cascade priority(!important): ex) bg(red) .test:bg(orange)! .test2:bg(red)!!


## 프롤로그
> 패러다임의 전환

지난 20년간 jQuery시대에서 React등의 시대로 넘어 오면서 웹 개발의 패러다임이 변했습니다.

jQuery 시절 우리는 html에 직접 이벤트를 연동하지 않고 DOM을 이용해서 js와 html의 관점을 최대한 분리하여 작업할 수 있는 것들이 미덕인 시절이 있었습니다.

하지만 현재는 관점의 분리보다 목적의 결합인 컴포넌트 방식이 훨씬 더 좋은 방식이며 HTML에 직접 이벤트 핸들러를 연동하고 DOM의 사용을 줄이는 방향으로 진화했습니다.

css는 어떨까요? css 역시 html과 css의 관점의 분리 그리고 시멘틱한 개발 방식이 미덕인 시절이 있었고 이 관점은 아직까지 유효합니다.

하지만 현재의 컴포넌트 기반의 프레임워크기반 개발이 당연시 되는 현 시점에서 css는 그 한계점이 도출이 되고 있는 상황이며 새로운 해결책이 필요하다고 생각합니다. (global scope, dead code 문제 등..)   

jQuery가 웹 프레임워크로 전환되었던것 처럼 기존의 시멘틱과 관점의 분리라는 패러다임이 아니라 html에 직접 binding을 하면서 DOM를 쓰지 않듯이 CSS를 쓰지 않는 형태의 functional CSS Framework 패러다임을 제안합니다. 


## 소개

CSS는 배우기 쉽고 작성하기 쉬운데 잘 만들고 잘 관리하기란 참 어려운 분야입니다.

그래서 일까요? OOCSS -> SMACSS -> ITCSS -> BEM에 이르기까지

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


## Adorable CSS는 어떤점이 좋은가요?

class 이름짓기의 고뇌에서 이제 벗어 날 수 있습니다.

더이상 css를 작성하지 않아도 됩니다.

HTML 혹은 jsx에서 벗어나지 않고 그 자리에서 디자인을 적용하고 실시간으로 적용된 결과를 볼 수 있습니다.

직관적이고 실용적으로 구성된 다양한 class function들로 기존보다 훨씬 더 편하게 UI 개발을 할 수 있습니다.

handOff 친화적인 개발 방식으로 figma 플러그인을 통해 한번에 디자이너의 결과물을 HTML로 jsx로 가져오세요.


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
https://www.youtube.com/watch?v=O-eonCeumw8&list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL&index=2


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

margin / padding / border / border-radius m/p/b/r + t/r/b/l 이런식의 조합방식을 사용합니다.
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

@NOTE: IE<=11, safari<14.1 을 지원해야 한다면 hgap, hgap-reverse를 사용할 수 있습니다.

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

## Ground Rule!

- 가능한 css의 property를 그대로 쓴다.
- c, bg, mt, p, 등 색상 및 box-model은 빈도를 고려해 축약해서 쓴다.
- 가급적 bootstrap이나 tailwind 등에서 이미 쓰고 있는 이름을 가급적 사용한다. eg) text-center
- *figma의 속성과 1:1이 될 수 있도록 한다. eg) hbox(top+right) gap(10)

## Reference

for full reference information [here](https://github.com/developer-1px/adorable-css/blob/master/src%5Badorable-css%5D/docs/Reference.md).