# AdorableCSS

> A Figma-first CSS framework for seamless design-code synchronization

AdorableCSS brings Figma's design paradigms directly to your code with intuitive, design-friendly syntax. Now with v2 featuring enhanced Figma integration and CDN support!

> AdorableCSS를 만들게 된 배경이 궁금하다면 [여기](https://velog.io/@teo/adorable-css)를 통해 확인해보세요.

![](https://images.velog.io/images/teo/post/0282cd6a-7530-4674-ad56-2cea0b55b773/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-12%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.06.40.png)


## Try It Online
- Try it online [here](https://developer-1px.github.io/adorable-css/).

![AdorableCSS](https://images.velog.io/images/teo/post/dde8bc56-15d0-4fc0-a15a-f3c204f50494/AdorableCSS.gif)

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

#### ... and auto generate css on realtime! 😎

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

### CDN
- ⛱ vite, webpack, postcss등 다른 복잡한 설정 없이 그냥 script 한줄만 추가하면 adorableCSS를 사용할 수 있습니다.
- ⚡️ adorableCSS를 간편하게 쓰는 방법! body 맨 아래 `<script src="https://unpkg.com/adorable-css"></script>`만 추가해보세요.
- 런타임 방식으로 css in js 방식을 통해서 동적으로 style을 생성하여 적용해줍니다.
- (지금 개발자 도구를 열어서 아무 엘리먼트나 class="bg(red)" 를 한번 추가해보세요.)

```html
  <script src="https://unpkg.com/adorable-css"></script>
</body>
</html>
```


### Vite(Recommanded)
- run-time이 아니라 Build-time에서 최종 css를 만들어냅니다. (zero run-time)
- 최종적으로 만들어진 css를 통해서 런타임 비용을 더 줄일 수 있고 css의 캐싱 기능을 더 활용할 수 있습니다.

```sh
npm i -D adorable-css
```

```ts
// vite.config.js
import {adorableCSS} from "adorable-css/vite" // <-

export default defineConfig({
  plugins: [adorableCSS(), ...] // <- plugin을 맨 처음에 등록합니다.
})
```

```tsx
// main.tsx
import "@adorable.css" // <- virtual css를 import 합니다.

import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import {App} from "./App"

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
)
```

#### React, Svelte, Vue ... Almost Web framework support with Vite.


### CLI(beta): Build Time + Watch mode
[Remix + adorable css example](./examples/adorable-css-remix/)

```
npm i -D adorable-css
```

```
Usage:
  $ adorable-css [root]

Commands:
  [root]  build for production

For more info, run any command with the `--help` flag:
  $ adorable-css --help

Options:
  -o, --out <dir>  [string] output Directory (default: adorable.css)
  -w, --watch      [boolean] rebuilds when modules have changed on disk (default: false)
  -m, --minify     [boolean] minify output css (default: false)
  -v, --verbose    [boolean] verbose build output (default: false)
  --no-reset       [boolean] exclude reset css from output (default: true)
```

> vite 환경이 아니라면 cdn을 통해서 실시간으로 개발하고 cli로 최종 빌드시 css만 포함하는 방식을 생각하고 있습니다.
> 다양한 환경에서 조금더 DX를 높이는 방향성을 고민해보겠습니다. 

---

## What is AdorableCSS?
> Rapid On-Demand Atomic CSS framework

골치아픈 css 이름짓기는 이제 그만!

더 이상 새로운 css를 작성하는 데 힘빼지 마세요. 거의 모든 class를 미리 정의해두었습니다.

class="font(20) c(red)"와 같이 함수형으로 정의된 형식으로 입력해보세요.

모든 수치와 색상을 지원하며, 필요한 만큼의 CSS만 만들어 냅니다.

## Why Use AdorableCSS?

**Easy!**
: 디자인 개발을 위해 이름을 짓는 수고가 사라지며, 한번 외운 이름은 계속 사용할 수 있습니다.

**Write less do more!**
: 기존 css문법보다 훨씬 더 적은 코드로 더 많은 작업을 할 수 있습니다.

**Fast Writing and No switching!**
: html, jsx에 바로 디자인을 적용할 수 있어 매우 빠른 디자인 개발 속도를 가집니다.

**Portable!**
: css 없이 HTML만으로 UI를 만들 수 있어 이동과 리팩토링에서 자유롭습니다.

**Compact!**
: 기존 css 방식보다 훨씬 더 적은 라인의 최적화된 css를 생산합니다.

**Great for Auto Design HandOff!**
: 이름이 필요없기에 figma등의 HandOff에서 변환하기에 최적화된 형태입니다.

## Handshake
> figma AdorableCSS plugin [link](https://github.com/developer-1px/adorable-css/tree/master/src%5Bfigma-handshake%5D)

![](https://images.velog.io/images/teo/post/579cdb7b-8819-4902-8f97-06c3400b2021/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%202021-09-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.17.17.mov.gif)

## Documentation
For full documentation, visit [here](https://github.com/developer-1px/adorable-css/tree/master/src%5Badorable-css%5D).
