<script>
import Tutorial from "../src/routes/tutorial.svelte"
import {generateCss, parseAtoms} from "../src[vite-plugin-adorable-css]/src/atomizer"
import {reset} from "../src[vite-plugin-adorable-css]/src/rules"

const value = "class='active:c(red)+'"

console.log(parseAtoms(value))

const css = generateCss(parseAtoms(value)).join("\n")

console.log(css)
</script>

<!--<Tutorial/>-->