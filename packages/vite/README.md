![](https://images.velog.io/images/teo/post/0282cd6a-7530-4674-ad56-2cea0b55b773/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-12%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.06.40.png)

# AdorableCSS

> Rapid On-Demand Atomic CSS framework

## Try It Online

> try it online [here](https://developer-1px.github.io/adorable-css/).

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
*{margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}
.c\(\#fff\){color:#fff;}
.bg\(\#333\){background-color:#333;}
@media (hover:hover){.hover\:bg\(\#555\):hover,.hover\:bg\(\#555\).\:hover{background-color:#555;}}
html .active\:bg\(\#000\)\!:active,html .active\:bg\(\#000\)\!.\:active{background-color:#000!important;}
.font\(14\/16\/-1\%\){font-size:14px;line-height:16px;letter-spacing:-0.01em}
.bold{font-weight:700;}
.p\(8\/12\){padding:8px 12px;}
.b\(\#000\.2\){border:solid 1px rgba(0,0,0,.2);}
html .active\:b\(\#000\.2\):active,html .active\:b\(\#000\.2\).\:active{border:solid 1px rgba(0,0,0,.2);}
.r\(6\){border-radius:6px;}
.hbox{display:flex;flex-flow:row;align-items: center;}
.pack{display:flex;align-items:center;justify-content:center;}
.pointer{cursor:pointer;}
.transition\(\.2s\){transition:all .2s;}
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

## Documentation
For full documentation, visit [AdorableCSS](https://developer-1px.github.io/adorable-css/)