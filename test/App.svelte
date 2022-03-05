<script>
import {generateCss, parseAtoms} from "../src[vite-plugin-adorable-css]/src/atomizer"

const value = `class:hover:c(red)+bg(blue)`

console.log(parseAtoms(value))

const css = generateCss(parseAtoms(value)).join("\n")

console.log(css)
</script>

<!--<Tutorial/>-->