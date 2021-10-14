<script lang="ts">
import type monaco from "monaco-editor"
import {onMount} from "svelte"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"

export let value = ""

let divEl:HTMLDivElement = null
let editor:monaco.editor.IStandaloneCodeEditor
let Monaco

onMount(async () => {
  // @ts-ignore
  self.MonacoEnvironment = {
    getWorker: function(_moduleId:any, label:string) {
      return new htmlWorker()
    }
  }

  Monaco = await import("monaco-editor")
  editor = Monaco.editor.create(divEl, {
    value,
    language: "html",
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: "vs-dark",
    tabSize: 2,
  })

  console.log(editor)

  editor.onDidChangeModelContent(event => {
    value = editor.getValue()
  })

  return () => {
    editor.dispose()
  }
})
</script>

<div bind:this={divEl} class="h-screen" style="height:100%"/>
