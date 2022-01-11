<script lang="ts">

import {onMount} from "svelte"
import {cssEscape} from "../../src[vite-plugin-adorable-css]/src/cssEscape"
import {makeValues} from "../../src[vite-plugin-adorable-css]/src/makeValue"

/// Tokenizer
import {ALL_PROPERTIES, PREFIX_MEDIA_QUERY, PREFIX_PSEUDO_CLASS, PREFIX_SELECTOR, RULES} from "../../src[vite-plugin-adorable-css]/src/rules"

const lex = [
  ["(hexcolor)", /(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/],
  ["(important)", /(!+)$/],
  ["(string)", /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],
  ["(operator)", /(::|>>|[-+~|*/%!#@?:;.,<>=[\](){}])/],
  ["(indent)", /((?:\\.|[^'":[\](){}#])+)/],
  ["(unknown)", /./]
]

const regex = new RegExp(lex.map(v => v[1].source).join("|"), "g")

let tokens = []
let token
let index = 0

const next = (id?:string) => {
  if (id && token && token.id && token.id !== id) {
    throw new Error("Unexpected token: " + token.id + " expected: " + id)
  }

  const t = token
  token = tokens[index++]
  return t
}

const tokenize = (script:string) => {
  tokens = []
  index = 0

  script.replace(regex, (value, ...args) => {
    const index:number = args[args.length - 2]
    const type = lex[args.findIndex(v => v !== undefined)][0]
    const id = type === "(operator)" ? value : type
    tokens.push({type, id, value, index})
    return value
  })

  next()
}

const expr = () => {
  const args = []
  const push = (v) => args.push(v)
  const stack = []

  while (token) {
    if (token.id === "(" || token.id === "[" || token.id === "{") {
      stack.push(token.id)
    }
    else if (token.id === ")" || token.id === "]" || token.id === "}") {
      const prev = stack.pop()
      if (prev === "(" && token.id === ")") {}
      else if (prev === "[" && token.id === "]") {}
      else if (prev === "{" && token.id === "}") {}
      else throw new Error("Unexpected:" + token.id)
    }
    else if (stack.length === 0 && token.id === ":" || token.id === "::" || token.id === "(important)") {
      break
    }

    push(next())
  }

  if (stack.length > 0) throw new Error("Unexpected end of input")
  return args
}

const rules = RULES

const prefixRules = {
  ...PREFIX_PSEUDO_CLASS,
  ...PREFIX_MEDIA_QUERY,
}

const priorityTable = Object.fromEntries(Object.entries(rules).map(([key, value], index) => [key, index]))

const ruleset = (script:string) => {
  tokenize(script)
  const ast = []

  while (token) {
    const e = expr()
    const type = e[0].value
    const ident = e.map(e => e.value).join("")

    // selector
    if (token && (token.id === ":" || token.id === "::")) {
      const selector = ident.replace(/>>/g, " ")
      const makeSelector = PREFIX_SELECTOR[type]
      const makePseudo = prefixRules[ident + token.id]

      const rule = (() => {
        if (makeSelector) return {selector: makeSelector(selector)}
        if (makePseudo) return makePseudo
        return {selector: `&${token.id}${selector}`}
      })()

      ast.push(rule)
    }

    // declaration
    else if (!token || token.id === "(important)") {
      const property = type
      const value = ident.slice(type.length + 1, -1)
      const rule = rules[type]
      const priority = priorityTable[property + (value.includes("(") ? "(" : "")] || priorityTable[property] || 0

      let declaration = (() => {
        if (rule) return rules[type](value)
        if (ALL_PROPERTIES[property]) return `${property}:${makeValues(value)}`
        throw new Error("Not defined property: " + property)
      })()

      if (token && token.id === "(important)") {
        declaration = declaration.replace(/;/g, (a, b, c) => c.charAt(b - 1) !== "\\" ? "!important;" : a)
      }

      ast.push({declaration, priority})
      break
    }

    next()
  }

  const atom = "." + cssEscape(script)
  const mediaQuery = ast.map(a => a.media).filter(Boolean)
  const media = mediaQuery.length ? "@media" + mediaQuery.join(" and ") : ""
  const selector = ast.map(a => a.selector).filter(Boolean).reduce((a, b) => b.replace(/&/g, a), atom)
  const declaration = ast.map(a => a.declaration).pop()
  const priority = ast.map(a => a.priority).pop()
  const rule = declaration.includes("&") ? declaration.replace(/&/g, selector) : selector + "{" + declaration + "}"

  return [media ? media + "{" + rule + "}" : rule, priority]
}

let result = ""

onMount(() => {

  const line = `.transition\\(\\.2s\\){transition:all`

  try {
    const r = ruleset(line)
    console.log(tokens)
    console.log(tokens.map(t => t.value))
    console.log(line, r)
    result += r[0] + "\n"
  }
  catch (e) {
    console.log("error", e)
  }

})
</script>


<textarea id="test">

</textarea>


<textarea style="height:800px; font-family:menlo">{result}</textarea>