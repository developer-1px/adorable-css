import {cssEscape} from "./cssEscape"
import {makeHEX, makeValues} from "./makeValue"
import {ALL_PROPERTIES, AT_RULE, PREFIX_MEDIA_QUERY, PREFIX_PSEUDO_CLASS, PREFIX_SELECTOR, RULES} from "./rules"

export type Rules = Record<string, (value?:string) => string>
export type PrefixProps = { media?:string, selector?:string }
export type PrefixRules = Record<string, PrefixProps>

const PREFIX_RULES:PrefixRules = {
  ...PREFIX_PSEUDO_CLASS,
  ...PREFIX_MEDIA_QUERY,
}

/// Tokenizer
const lex:[string, RegExp][] = [
  ["(hexcolor)", /(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/],
  ["(important)", /(!+)$/],
  ["(string)", /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],
  ["(operator)", /(::|>>|[-+~|*/%!#@?:;.,<>=[\](){}])/],
  ["(indent)", /((?:\\.|[^!'":[\](){}#])+)/],
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
    else if (stack.length === 0 && (token.id === ":" || token.id === "::" || token.id === "(important)")) {
      break
    }

    push(next())
  }

  if (stack.length > 0) throw new Error("Unexpected end of input")
  return args
}

const generateAtomicCss = (rules:Rules, prefixRules:PrefixRules) => {
  const priorityTable = Object.fromEntries(Object.entries(rules).map(([key, value], index) => [key, index]))

  return (script:string):[string, number]|undefined => {

    try {
      tokenize(script)
      const ast = []

      while (token) {
        const e = expr()
        const type = e[0].value
        const ident = e.map(e => e.value).join("")

        // selector
        if (token && (token.id === ":" || token.id === "::")) {
          const selector = ident
          const makeSelector = PREFIX_SELECTOR[type]
          const makePseudo = prefixRules[ident + token.id]
          const makeAtRule = AT_RULE[e.slice(0, 2).map(r => r.value).join("")]

          const rule = (() => {
            if (makeAtRule) return makeAtRule(ident, e)
            if (makeSelector) return {selector: makeSelector(selector)}
            if (makePseudo) return makePseudo
            return {selector: `&${token.id}${selector}`}
          })()

          rule.selector = rule.selector.replace(/>>/g, " ")
          ast.push(rule)
        }

        // declaration
        else if (!token || token.id === "(important)") {
          const property = type
          const value = ident.slice(type.length + 1, -1)
          const rule = rules[property]
          const priority = priorityTable[property + (value.includes("(") ? "(" : "")] || priorityTable[property] || 0

          let declaration = (() => {
            if (rule) return value === "" ? rule() : rule(value)
            if (value && ALL_PROPERTIES[property]) return `${property}:${makeValues(value)}`
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

      const mediaQuery = ast.map(a => a.media).filter(Boolean)
      const media = mediaQuery.length ? "@media" + mediaQuery.join(" and ") : ""

      const atom = "." + cssEscape(script)
      const selector = ast.map(a => a.selector).filter(Boolean).map(selector => selector.split(",")).reduce((prev, curr) => {
        return prev.map(prev => curr.map(selector => selector.replace(/&/g, prev))).flat()
      }, [atom]).join(",")

      const declaration = ast.map(a => a.declaration).pop()
      const priority = ast.map(a => a.priority).pop()

      const rule = declaration.includes("&") ? declaration.replace(/&/g, selector) : selector + "{" + declaration + "}"

      return [media ? media + "{" + rule + "}" : rule, priority]
    }
    catch (e) {
      // console.error(e)
    }
  }
}

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

export const parseAtoms = (code:string):string[] => {
  const atoms = new Set<string>()
  code.split(/[\s"'`]/).forEach(atom => atoms.add(atom))
  return [...atoms]
}