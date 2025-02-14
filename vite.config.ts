import {sveltekit} from "@sveltejs/kit/vite"
import type {UserConfig} from "vite"
// import {adorableCSS} from "./packages/vite/src/vite"
import UnoCSS from 'unocss/vite'

const config:UserConfig = {
  plugins: [UnoCSS(), sveltekit()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      strict: false
    }
  }
}

export default config