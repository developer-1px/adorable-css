# AdorableCSS

> ⚡️ Rapid On-Demand Atomic CSS framework

## Getting Started

```sh
npm i -D adorable-css
```

```ts
// vite.config.js
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

#### React, Svelte, Vue ... Almost Web framework support with Vite.