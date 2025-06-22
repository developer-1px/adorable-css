// uno.config.ts
import { defineConfig } from "unocss"
import { adorableCSS } from "./packages/v2/unocss/adorable-css-uno"

export default defineConfig({
	presets: [],
	...adorableCSS(),
})
