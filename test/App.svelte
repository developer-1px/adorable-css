<script>
import {generateCss, parseAtoms} from "../src[vite-plugin-adorable-css]/src/atomizer"

const value = `>h1:bold+mt(20)`

console.log(parseAtoms(value))

const css = generateCss(parseAtoms(value)).join("\n")

console.log(css)
</script>

<!--<Tutorial/>-->