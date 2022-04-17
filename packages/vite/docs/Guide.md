# AdorableCSS

> ⚡️ Rapid On-Demand Atomic CSS framework

## Getting Started

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