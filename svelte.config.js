/** @type {import("@sveltejs/kit").Config} */
import adapter from "@sveltejs/adapter-static"
import {mdsvex} from "mdsvex"
import {resolve} from "path"
import preprocess from "svelte-preprocess"
import {adorableCSS} from "adorable-css/vite"

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
    },
    vite: {
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          strict: false
        }
      },
      plugins: [adorableCSS()],
      resolve: {
        alias: {
          "src": resolve("src"),
        },
      },
    },
  }
}

if (process.env.NODE_ENV === "production") {
  config.kit.paths = {base: "/adorable-css"}
}

export default config