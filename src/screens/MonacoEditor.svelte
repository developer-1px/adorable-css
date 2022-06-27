<script lang="ts">
import {onMount} from "svelte"
import githubTheme from "./github.theme.json"

export let value = ""

let element:HTMLDivElement = null
let editor

export const setValue = (value) => {
  editor && editor.setValue(value)
}


onMount(() => {

  require.config({paths: {"vs": "https://unpkg.com/monaco-editor@latest/min/vs"}})
  window.MonacoEnvironment = {getWorkerUrl: () => proxy}

  let proxy = URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`], {type: "text/javascript"}))

  require(["vs/editor/editor.main"], function() {
    monaco.editor.defineTheme("adorableCSS", githubTheme)
    editor = monaco.editor.create(element, {
      value,
      language: "html",
      automaticLayout: true,
      scrollBeyondLastLine: false,
      readOnly: false,
      theme: "adorableCSS",
      tabSize: 2,
      fontSize: "13px",
      overviewRulerLanes: 0,
      wordWrap: "on",
      minimap: {
        enabled: false,
      },
    })

    editor.onDidChangeModelContent(event => {
      value = editor.getValue()
    })

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, function() {
      editor.getAction("editor.action.formatDocument").run()
      return
    })
  })

  return () => {
    editor && editor.dispose()
  }
})
</script>

<div bind:this={element} class="h(100%)"/>
