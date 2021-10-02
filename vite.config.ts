import {svelte} from "@sveltejs/vite-plugin-svelte"
import {adorableCSS} from "./src[adorable-css]/vite-plugin-adorable-css"

import {defineConfig} from "vite"

// @ts-ignore
module.exports = defineConfig(({build, mode}) => {
  return {
    plugins: [svelte(), adorableCSS()],
  }
})