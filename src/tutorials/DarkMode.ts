export const TUROTIAL_DARKMODE = `
<!--
Dark Mode
- 'dark:' prefix를 사용하여 다크모드를 지원할 수 있습니다.
- dark mode를 지원하기 위해 @media(prefers-color-scheme: dark)를 사용할 수 있습니다.

Tip:
- <html class="dark">의 경우에도 다크모드가 적용됩니다.
- 강제로 다크모드를 적용해보거나 테스트를 위해서 사용할 수 있습니다.

ex)
-->

<div class="bg(#fff) dark:bg(#222) p(20)">
  <div class="c(#555) dark:c(#fff) font(20) bold">제목입니다.</div>
  <p class="c(#888) dark:c(#ccc) font(14)">라이크모트와 다크모드를 토글해보세요!</p>
</div>

`.trim()