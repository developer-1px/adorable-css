import {defineConfig} from "vite"
import {svelte} from "@sveltejs/vite-plugin-svelte"
import {adorableCSS} from "./src[vite-plugin-adorable-css]/src/vite-plugin-adorable-css"

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    server: {
      open: true,
    },
    plugins: [
      adorableCSS(),
      svelte(),
    ]
  }
})