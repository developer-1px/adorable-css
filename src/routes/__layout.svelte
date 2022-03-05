<script lang="ts">
import {base} from "$app/paths"
import {page} from "$app/stores"
import "@adorable.css"
import UIVersion from "../screens/UIVersion.svelte"
import "../style.css"

const useActive = (el) => {
  page.subscribe(page => {
    el.classList.toggle("active", location.origin + page.url.pathname === el.href)
  })
}
</script>

<div class="vbox">
  <div class="relative hbox space-between h(60) gap(20) p(10/20) sticky-top bg(#fff) bb(#000.1) z(999) >>a:hover:c(--primary) >>a.active:c(--primary) scroll-x">
    <a href="{base}/" class="pack font(20/-/-10%) pointer AppleSD">^•ﻌ•^ฅ</a>

    <div class="hbox gap(20)">
      <a href="{base}/guide" use:useActive>Guide</a>
      <a href="{base}/docs" use:useActive>Docs</a>
      <a href="{base}/tutorial" use:useActive>Tutorial</a>
      <a href="{base}/changelogs" use:useActive>ChangeLog</a>
      <a href="{base}/reference" use:useActive>Reference</a>
      <a target="_blank" href="https://velog.io/@teo/series/AdorableCSS">Blog</a>
      <a target="_blank" href="https://github.com/developer-1px/adorable-css/issues">기능 제안</a>
    </div>

    <div class="hbox gap(20)">
      <a class="pack" href="https://www.youtube.com/watch?v=O-eonCeumw8&list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL&index=2" target="_blank" aria-label="youtube">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="32" height="32"
             viewBox="0 0 48 48"
             style=" fill:#000;">
          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
        </svg>
      </a>

      <a class="pack" href="https://github.com/developer-1px/adorable-css" target="_blank" aria-label="github">
        <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
    </div>
  </div>

  <slot/>
</div>

<UIVersion version="0.1.2"/>