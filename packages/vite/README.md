# WaveCSS

> Rapid On-Demand Atomic CSS framework
> A Fork of (AdorableCSS)[https://github.com/developer-1px/adorable-css] with a focus on performance and simplicity.

#### Don't write your own css. Just write down in HTML.

```tsx
// Button.tsx

export const Button = () => (
	<button
		class="hbox pack gap(6) bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000)! active:b(#000.2)"
	>
		<div>👍</div>
		<div>Like</div>
	</button>
);
```

#### ... and auto generate css on realtime! 😎

```css
/* @wave.css */

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font: inherit;
	color: inherit;
	flex-shrink: 0;
}
.c\(\#fff\) {
	color: #fff;
}
html .active\:bg\(\#000\)\!:active,
html .active\:bg\(\#000\)\!.\:active {
	background-color: #000 !important;
}
.bg\(\#333\) {
	background-color: #333;
}
@media (hover: hover) {
	.hover\:bg\(\#555\):hover,
	.hover\:bg\(\#555\).\:hover {
		background-color: #555;
	}
}
.font\(14\/16\/-1\%\) {
	font-size: 14px;
	line-height: 16px;
	letter-spacing: -0.01em;
}
.bold {
	font-weight: 700;
}
.hbox {
	display: flex;
	flex-flow: row;
	align-items: center;
}
.p\(8\/12\) {
	padding: 8px 12px;
}
.pack {
	display: flex;
	align-items: center;
	justify-content: center;
}
.pointer {
	cursor: pointer;
}
html .active\:b\(\#000\.2\):active,
html .active\:b\(\#000\.2\).\:active {
	border: 1px solid rgba(0, 0, 0, 0.2);
}
.b\(\#000\.2\) {
	border: 1px solid rgba(0, 0, 0, 0.2);
}
.r\(6\) {
	border-radius: 6px;
}
.gap\(6\) {
	gap: 6px;
}
.layer {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
.transition\(\.2s\) {
	transition: all 0.2s;
}
```

---

## Getting Started

### Vite(Recommended)

```sh
npm i -D wavecss
```

```ts
// vite.config.js
import {waveCSS} from "wavecss/vite" // <-

export default defineConfig({
  plugins: [waveCSS(), ...]
})
```

```tsx
// main.tsx
import '@wave.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
```

#### React, Svelte, Vue ... Almost Web framework support with Vite.

### CLI(beta): Build Time + Watch mode

```
npm i -D wavecss
```

```
Usage:
  $ wavecss [root]

Commands:
  [root]  build for production

For more info, run any command with the `--help` flag:
  $ wavecss --help

Options:
  -o, --out <dir>  [string] output Directory (default: adorable.css)
  -w, --watch      [boolean] rebuilds when modules have changed on disk (default: false)
  -m, --minify     [boolean] minify output css (default: false)
  -v, --verbose    [boolean] verbose build output (default: false)
  --no-reset       [boolean] exclude reset css from output (default: true)
```
