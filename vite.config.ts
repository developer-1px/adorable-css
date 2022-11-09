import {resolve} from "path"
import {sveltekit} from "@sveltejs/kit/vite"
import type {UserConfig} from "vite"
import {adorableCSS} from "./packages/vite/src/vite"

const config:UserConfig = {
  plugins: [adorableCSS(), sveltekit()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      strict: false
    }
  },
  resolve: {
    alias: {
      "src": resolve("src"),
      "packages": resolve("packages"),
    },
  }
}

export default config