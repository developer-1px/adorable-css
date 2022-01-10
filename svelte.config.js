/** @type {import("@sveltejs/kit").Config} */
import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import {mdsvex} from "mdsvex"
// import {adorableCSS} from "adorable-css/vite-plugin-adorable-css"
import {adorableCSS} from "./src[vite-plugin-adorable-css]/vite-plugin-adorable-css.js"

const config = {
  extensions: [".svelte", ".md", ".svelte.md"],
  preprocess: [mdsvex({extensions: [".svelte.md", ".md", ".svx"]}), preprocess()],
  kit: {
    vite: {
      plugins: [adorableCSS()],
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          strict:false
        }
      }
    },
    adapter: adapter(), // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte"
  }
}

export default config
