/** @type {import("@sveltejs/kit").Config} */
import adapter from "@sveltejs/adapter-static"
import {mdsvex} from "mdsvex"
import {resolve} from "path"
import preprocess from "svelte-preprocess"
import {adorableCSS} from "./packages/vite/dist/vite/index.js"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [
    preprocess(),
    mdsvex({extensions: [".md"]})
  ],
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    }
  }
}

if (process.env.NODE_ENV === "production") {
  config.kit.paths = {base: "/adorable-css"}
}

export default config