/** @type {import("@sveltejs/kit").Config} */
import adapter from "@sveltejs/adapter-static"
import {mdsvex} from "mdsvex"
import preprocess from "svelte-preprocess"
// import {adorableCSS} from "adorable-css/vite-plugin-adorable-css"
import {adorableCSS} from "./src[vite-plugin-adorable-css]/vite-plugin-adorable-css.js"

const config = {
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [
    preprocess(),
    mdsvex({extensions: [".md"]})
  ],
  kit: {
    vite: {
      plugins: [adorableCSS()],
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          strict: false
        }
      }
    },
    adapter: adapter(),
    target: "#svelte"
  }
}

if (process.env.NODE_ENV === "production") {
  config.paths = {
    base: "/adorable-css"
  }
}

export default config
