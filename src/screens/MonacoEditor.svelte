<script lang="ts">
import {KeyCode, KeyMod} from "monaco-editor"
import type monaco from "monaco-editor"
import {onMount} from "svelte"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import theme from "./github.theme.json"

export let value = ""

let element:HTMLDivElement = null
let editor:monaco.editor.IStandaloneCodeEditor
let Monaco

export const setValue = (value:string) => editor.setValue(value)

onMount(async () => {
  // @ts-ignore
  self.MonacoEnvironment = {
    getWorker: function(_moduleId:any, label:string) {
      return new htmlWorker()
    }
  }

  console.warn("@@@", theme)

  Monaco = await import("monaco-editor")
  editor = Monaco.editor.create(element, {
    value,
    language: "html",
    automaticLayout: true,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: "vs",
    tabSize: 2,
    fontSize: "13px",
    overviewRulerLanes: 0,
    wordWrap: "on",
    minimap: {
      enabled: false,
    },
  })

  var myBinding = editor.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, function() {
    editor.getAction("editor.action.formatDocument").run()
    return
  })

  console.log("editor", editor)
  console.log("myBinding", editor)
  window.editor = editor


  editor.onDidChangeModelContent(event => {
    value = editor.getValue()
  })


  return () => {
    editor.dispose()
  }
})
</script>

<div bind:this={element} class="h(100%)"/>
