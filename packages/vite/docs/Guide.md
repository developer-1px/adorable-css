# AdorableCSS

> ⚡️ Rapid On-Demand Atomic CSS framework



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