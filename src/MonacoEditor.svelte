<script lang="ts">
import type monaco from "monaco-editor"
import {onMount} from "svelte"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"

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

  Monaco = await import("monaco-editor")
  editor = Monaco.editor.create(element, {
    value,
    language: "html",
    automaticLayout: true,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: "vs-dark",
    tabSize: 2,
    minimap: {
      enabled: false,
    },
  })

  editor.onDidChangeModelContent(event => {
    value = editor.getValue()
  })

  return () => {
    editor.dispose()
  }
})
</script>

<div bind:this={element} class="h(100%)"/>
