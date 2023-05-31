# AdorableCSS

> ⚡️ Rapid On-Demand Atomic CSS framework

## Getting Started

```sh
npm i -D adorable-css
```
> 라이브러리 설치 후 3가지 방법으로 사용할 수 있습니다.
 
1. vite 기반의 프로젝트를 사용하고 있다면 vite 플러그인을 사용하는 것을 추천합니다. vite 플러그인으로 만들경우 런타임 비용이 0이 됩니다.
2. 그 외에도 css in js 방식으로 사용할 수 있습니다.
3. CDN을 통해서 설치없이도 간편하게 사용할 수 있습니다.

### Vite (Recommanded)
- Build-time에서 최종 css를 만들어냅니다. (zero run-time)
- 최종적으로 만들어진 css를 통해서 런타임 비용을 더 줄일 수 있고 css의 캐싱 기능을 더 활용할 수 있습니다.
- 단, 빌드시에만 css를 만들어내기 때문에 동적으로 class를 추가하면 바로 적용되지 않습니다.

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


### CSS in JS
```sh
npm i -D adorable-css
```

```tsx
// main.tsx

import "adorable-css"
```
- 스크립트를 통해서 css를 동적으로 생성하여 적용합니다.
- 런타임 비용이 있습니다. (하지만 최소한의 비용입니다.)
- css in js 방식을 사용하고 싶다면 이 방법을 사용하세요.
- 100% 동적생성 방식이기 때문에 런타임에 class를 추가하면 바로 적용됩니다.

### CDN
- ⛱ vite, webpack, postcss등 다른 복잡한 설정 없이 그냥 script 한줄만 추가하면 adorableCSS를 사용할 수 있습니다.
- ⚡️ adorableCSS를 간편하게 쓰는 방법! body 맨 아래 스크립트만 추가하면 됩니다.
- 런타임 방식으로 css in js 방식을 통해서 동적으로 style을 생성하여 적용해줍니다.
- (지금 개발자 도구를 열어서 아무 엘리먼트나 class="bg(red)" 를 한번 추가해보세요.)

```html
  <script src="https://unpkg.com/adorable-css"></script>
</body>
</html>
```