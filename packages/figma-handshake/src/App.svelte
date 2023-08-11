<script lang="ts">
let scriptCode = ""
let html = ""
let bg = ""
let pageBg = "#111"
let offsetWidth = document.body.offsetWidth
let width = offsetWidth
let height = document.body.offsetHeight
let scale = 1

window.onresize = () => {
  offsetWidth = document.body.offsetWidth
  scale = Math.min(1, offsetWidth / width)
}

window.onmessage = (event) => {
  console.log("Event", event)

  const type = event.data?.pluginMessage?.type

  if (type === "code") {
    const {code, backgroundColor, pageBackgroundColor, width: w, height: h} = event.data.pluginMessage
    scriptCode = code
    html = code
    bg = backgroundColor
    pageBg = pageBackgroundColor
    width = w
    height = h
    scale = Math.min(1, offsetWidth / width)
    return
  }

  if (type === "assets") {
    const {id, svg} = event.data.pluginMessage
    document.querySelectorAll(`[data-asset-id="${id}"]`).forEach((el) => {
      el.innerHTML = svg
    })
    return
  }
}
</script>

<main class="layer vbox(left) bg(--bg)" style:--bg={pageBg}>
  <section class="relative vbox(left) bg(--bg)" style:--bg={bg} style:zoom="{scale}" style:width="{width}px" style:height="{height}px">{@html html}</section>
  <textarea class="h(200~) w(fill) h(fill) bg(#000) c(#fff) font(8/12)! monospace no-border" spellcheck="false"
            wrap="off">{scriptCode}</textarea>
</main>