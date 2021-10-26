import {svelte} from "@sveltejs/vite-plugin-svelte"
import {adorableCSS} from "./src[adorable-css]/vite-plugin-adorable-css"

import {defineConfig} from "vite"

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const isProduction = mode === "production"
  return {
    server: {
      open: true,
    },
    plugins: [
      adorableCSS(),
      svelte(),
    ],
    build: {
      outDir: "docs",
      rollupOptions: {
        input: "index.html",
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`
        }
      },
      target: "esnext",
      sourcemap: !isProduction,
      minify: isProduction
    }
  }
})