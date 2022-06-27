import {resolve} from "path"
import {defineConfig} from "vite"
import {svelte} from "@sveltejs/vite-plugin-svelte"
import {adorableCSS} from "./packages/vite/dist/vite"

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    server: {
      open: true,
    },
    resolve: {
      alias: {
        "src": resolve("src"),
      },
    },
    plugins: [
      adorableCSS(),
      svelte(),
    ]
  }
})