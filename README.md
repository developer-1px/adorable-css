# 🐳 AdorableCSS

> Rapid On-Demand Atomic CSS framework

![AdorableCSS](https://j.gifs.com/WP87WJ.gif)

#### Don't write your own css. Just write down in HTML.

```tsx
// Button.tsx

export const Button = () =>
  <button class="hbox pack gap(6) bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000)! active:b(#000.2)">
    <div>👍</div>
    <div>Like</div>
  </button>
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

---

## Getting Started

https://www.youtube.com/watch?v=55W1rlJ4ukc

```
npm i -D adorable-css
```

```ts
// vite.config.js
...
import {adorableCSS} from "adorable-css/vite-plugin-adorable-css" // <-

export default defineConfig({
  plugins: [..., adorableCSS()] // <-
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
> @NOTE: React뿐만 아니라 Svelte, Vue를 포함해 vite기반의 모든 프레임워크를 지원합니다.


## Documentation
For full documentation, visit [here](https://github.com/developer-1px/adorable-css/tree/master/src%5Badorable-css%5D).


## Why?
- **Easy**: 디자인을 위해 이름을 짓는 수고가 사라지며, 한번 외운 이름은 계속 사용할 수 있습니다. 
- **Write less do more**: 기존 css문법보다 훨씬 더 간결하면서도 더 많은 작업을 할 수 있습니다.
- **Fast Writing and No switching**: html, jsx에 바로 디자인을 적용할 수 있어 매우 빠른 디자인 개발 속도를 가집니다.
- **Portable**: css 없이 HTML만으로 UI를 만들 수 있어 이동과 리팩토링에서 자유롭습니다.
- **Compact**: 기존 css 방식보다 훨씬 더 적은 라인의 최적화된 css를 생산합니다.
- **Great for Auto Design HandOff**: 이름이 필요없기에 figma등의 HandOff에서 변환하기에 최적화된 형태입니다. [link](https://github.com/developer-1px/adorable-css/tree/master/src%5Bfigma-handshake%5D)