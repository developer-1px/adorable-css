<script>
import {generateCss, parseAtoms} from "../src[vite-plugin-adorable-css]/src/atomizer"

const value = `!touch:c(red)!+bg(green)!!!`

console.log(parseAtoms(value))

const css = generateCss(parseAtoms(value)).join("\n")

console.log(css)
</script>

<!--<Tutorial/>-->