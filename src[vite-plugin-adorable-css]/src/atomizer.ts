import {ALL_PROPERTIES} from "./const"
import {cssEscape} from "./cssEscape"
import {makeHEX, makeValues} from "./makeValue"
import {AT_RULE, PREFIX_MEDIA_QUERY, PREFIX_PSEUDO_CLASS, PREFIX_SELECTOR, RULES} from "./rules"

export type Rules = Record<string, (value?:string) => string>
export type PrefixProps = { media?:string, selector?:string }
export type PrefixRules = Record<string, PrefixProps>

const PREFIX_RULES:PrefixRules = {
  ...PREFIX_PSEUDO_CLASS,
  ...PREFIX_MEDIA_QUERY,
}

/// parseAtoms
export const parseAtoms = (code:string):string[] => {
  let lastIndex = 0
  const atoms = new Set<string>()
  const delimiter = /["'`]|\s+/g

  code += " "
  code.replace(delimiter, (a, index, s) => {
    let token = s.slice(lastIndex, index)

    // @Note: svelte class:prop 지원
    if (token.startsWith("class:")) {
      token = token.slice("class:".length).split("=")[0]
    }

    atoms.add(token)
    lastIndex = index + a.length
    return a
  })

  return [...atoms].filter(Boolean)
}

/// Tokenizer
const lex:[string, RegExp][] = [
  ["(hexcolor)", /(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/],
  ["(important)", /(!+$|!+\+)/],
  ["(string)", /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],
  ["(operator)", /(::|>>|[-+~|*/%!#@?:;.,<>=[\](){}])/],
  ["(ident)", /((?:\\.|[^!'":+[\](){}#])+)/],
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
    value = type === "(hexcolor)" ? makeHEX(value) : value
    tokens.push({type, id, value, index})
    return value
  })

  next()
}

// Parser: prop + ()[]{}
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
    else if (stack.length === 0 && (token.id === ":" || token.id === "::" || token.id === "(important)" || token.id === "+")) {
      break
    }

    push(next())
  }

  if (stack.length > 0) throw new Error("Unexpected end of input")
  return args
}


// Prefix
// .classSelector(expr):
// PseudoClass(expr):
// PseudoElement(expr)::
// @AtRule(expr):

const parsePrefix = (prefixRules:PrefixRules, e) => {
  const type = e[0].value
  const selector = e.map(e => e.value).join("")

  // 1. Selector인가?
  const makeSelector = PREFIX_SELECTOR[type]
  if (makeSelector) {
    return {selector: makeSelector(selector).replace(/>>/g, " ")}
  }

  // 2. @at-rule인가?
  const value = e.slice(0, 2).map(r => r.value).join("")
  const makeAtRule = AT_RULE[value]
  if (makeAtRule) {
    return makeAtRule(selector, e)
  }

  // 3. Pseudo Class, Pseudo Element 인가?
  const makePseudo = prefixRules[selector + token.id]
  if (makePseudo) {
    return makePseudo
  }

  if (/^[-a-z]+$/.test(type)) {
    return {selector: `&${token.id}${selector}`}
  }

  throw new Error("Invalid Prefix Syntax:" + token.id)
}


const generateAtomicCss = (rules:Rules, prefixRules:PrefixRules) => {
  const priorityTable = Object.fromEntries(Object.keys(rules).map((key, index) => [key, index + 1]))

  return (script:string):[string, number]|undefined => {

    try {
      tokenize(script)

      const ast = []

      while (token) {
        const e = expr()

        // validate prop(value) format
        if (e.find(e => e.id === "(") && e[e.length - 1].id !== ")") {
          throw new Error("Invalid Syntax!")
        }

        // selector
        if (token && (token.id === ":" || token.id === "::")) {
          const rule = parsePrefix(prefixRules, e)
          ast.push(rule)
        }

        // @FIXME: declaration
        else if (!token || token.id === "(important)" || token.id === "+") {

          console.log(e)

          const property = e[0].value
          const value = e.slice(2, -1).map(r => r.value).join("")
          const rule = rules[property]
          let priority = priorityTable[property + property.includes("(") ? "(" : ""] || priorityTable[property] || 0

          let declaration = (() => {
            if (rule) return value === "" ? rule() : rule(value)
            if (value && ALL_PROPERTIES[property]) return `${property}:${makeValues(value)};`
            throw new Error("Not defined property: " + property)
          })()

          if (declaration.search("undefined") >= 0) {
            throw new Error("Not defined property: " + property)
          }

          // (important)에 따라서 priority 를 바꿔준다.
          if (token && token.id === "(important)") {
            declaration = declaration.replace(/;/g, (a, b, c) => c.charAt(b - 1) !== "\\" ? "!important;" : a)
            priority = 9999 + token.value.length
          }

          ast.push({declaration, priority})
        }

        next()
      }

      const mediaQuery = ast.map(a => a.media).filter(Boolean)
      const media = mediaQuery.length ? "@media" + mediaQuery.join(" and ") : ""

      const atom = "." + cssEscape(script)
      const selector = ast.map(a => a.selector).filter(Boolean).map(selector => selector.split(",")).reduce((prev, curr) => {
        return prev.map(prev => curr.map(selector => selector.replace(/&/g, prev))).flat()
      }, [atom]).join(",")

      const declaration = ast.map(a => a.declaration).filter(Boolean).join("")
      if (!declaration) {
        throw new Error("no declaration")
      }

      let priority = ast.map(a => a.priority).filter(Boolean).reduce((prev, curr) => Math.max(prev, curr), 0)

      const rule = declaration.includes("&") ? declaration.replace(/&/g, selector) : selector + "{" + declaration + "}"

      return [media ? media + "{" + rule + "}" : rule, priority]
    }
    catch (e) {
      // console.error(e)
    }
  }
}


//
const sortByRule = (a?:[string, number], b?:[string, number]) => a![1] - b![1]

export const createGenerateCss = (rules:Rules = {}, prefixRules:PrefixRules = {}) => {
  rules = {...RULES, ...rules}
  prefixRules = {...PREFIX_RULES, ...prefixRules}

  return (classList:string[]) => classList
    .map(generateAtomicCss(rules, prefixRules))
    .filter(Boolean)
    .sort(sortByRule)
    .map(a => a[0])
}

export const generateCss = createGenerateCss()