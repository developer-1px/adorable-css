import {svelte} from "@sveltejs/vite-plugin-svelte"
import {defineConfig} from "vite"
import {viteSingleFile} from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), viteSingleFile()],
  build: {
    emptyOutDir: false,
  }
})