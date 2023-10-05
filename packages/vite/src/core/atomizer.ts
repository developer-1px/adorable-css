import {ALL_PROPERTIES} from "./const"
import {cssEscape} from "./cssEscape"
import {makeHEX, makeValues} from "./makeValue"
import {AT_RULE, PREFIX_MEDIA_QUERY, PREFIX_PSEUDO_CLASS, PREFIX_SELECTOR, RULES} from "./rules"

export type Rules = Record<string, (value?:string) => string>
export type PrefixProps = {media?:string, selector?:string}
export type PrefixRules = Record<string, PrefixProps>

const PREFIX_RULES:PrefixRules = {
  ...PREFIX_PSEUDO_CLASS,
  ...PREFIX_MEDIA_QUERY,
}

/// parseAtoms
// @TODO: lex를 이용해서 validate와 parse를 같이 하는 방식으로 업데이트하자!
export const parseAtoms = (code:string):string[] => {
  const delimiter = /["'`]|\s+/g

  const atoms = new Set<string>()
  let lastIndex = 0

  code += " "
  code.replace(delimiter, (a, index) => {
    // @NOTE: content('aa') 용도
    if (code[index - 1] === "(" || code[index + 1] === ")") {
      return a
    }

    let token = code.slice(lastIndex, index)

    // @NOTE: svelte class:prop 지원
    if (token.startsWith("class:")) {
      token = token.slice("class:".length).split("=")[0]
    }

    if (token) {
      atoms.add(token)
    }

    lastIndex = index + a.length
    return a
  })

  return [...atoms]
}

/// Tokenizer
const lex:[string, RegExp][] = [
  ["(hexcolor)", /(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/],
  ["(important)", /(!+$|!+\+)/],
  ["(string)", /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],
  ["(operator)", /(::|>>|&:|&\.|&\[|[-+~|*/%!#@?:;.,<>=[\](){}])/],
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

export const tokenize = (script:string) => {
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
  return tokens
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

  // 1. Pseudo Class, Pseudo Element 인가?
  const makePseudo = prefixRules[selector + token.id]
  if (makePseudo) {
    return makePseudo
  }

  // 2. Selector인가?
  const makeSelector = PREFIX_SELECTOR[type]
  if (makeSelector) {
    return {selector: makeSelector(selector).replace(/>>/g, " ")}
  }

  // 3. @at-rule인가?
  const value = e.slice(0, 2).map(r => r.value).join("")
  const makeAtRule = AT_RULE[value]
  if (makeAtRule) {
    return makeAtRule(selector, e)
  }

  if (/^[-a-z]+$/.test(type)) {
    return {selector: `&${token.id}${selector}`}
  }

  throw new Error("Invalid Prefix Syntax:" + token.id)
}

const validateCSS = (s:string) => {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
    "'": "'",
    '"': '"',
    "`": "`"
  };

  let inString = null;
  let lastChar = null;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (inString) {
      if (char === inString && lastChar !== '\\') {
        if (stack.length === 0 || stack.pop() !== pairs[char]) {
          return false;
        }
        inString = null;
      }
      // Update lastChar at the end of the loop
      lastChar = char;
      continue;
    }

    if (char === "(" || char === "{" || char === "[" || char === "'" || char === '"' || char === "`") {
      stack.push(char);
      if (char === "'" || char === '"' || char === "`") {
        inString = char;
      }
    }
    else if (char === ")" || char === "}" || char === "]" || char === "'" || char === '"' || char === "`") {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
    // Update lastChar at the end of the loop
    lastChar = char;
  }

  return stack.length === 0;
}

const generateAtomicCss = (rules:Rules, prefixRules:PrefixRules) => {
  const priorityTable = Object.fromEntries(Object.keys(rules).map((key, index) => [key, index + 1]))

  return (script:string):Array<[string, number]> => {
    try {
      tokenize(script)

      const selectors = []
      const declarations = []

      while (token) {
        const e = expr()

        // validate prop(value) format
        if (e.find(e => e.id === "(") && e[e.length - 1].id !== ")") {
          throw new Error("Invalid Syntax!")
        }

        // selector
        if (token && (token.id === ":" || token.id === "::")) {
          const rule = parsePrefix(prefixRules, e)
          selectors.push(rule)
          next()
          continue
        }

        // @FIXME: declaration
        if (!token || token.id === "(important)" || token.id === "+") {
          let property = e[0].value

          // >> 기능 ex) >>c(red)
          if (property === ">>") {
            selectors.push({selector: "& *"})
            e.shift()
            property = e[0].value
          }

          // > 기능 ex) >c(red)
          else if (property === ">") {
            selectors.push({selector: "&>*"})
            e.shift()
            property = e[0].value
          }

          // 일반 Property
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

          // (important)에 따라서 priority를 바꿔준다.
          if (token && token.id === "(important)") {
            declaration = declaration.replace(/;/g, (a, b, c) => c.charAt(b - 1) !== "\\" ? "!important;" : a)
            priority = 9999 + token.value.length
          }

          declarations.push({declaration, priority})
        }

        next()
      }

      const mediaQuery = selectors.map(a => a.media).filter(Boolean)
      const media = mediaQuery.length ? "@media" + mediaQuery.join(" and ") : ""

      const atom = "." + cssEscape(script)
      const selector = selectors.map(a => a.selector).filter(Boolean).map(selector => selector.split(",")).reduce((prev, curr) => {
        return prev.map(prev => curr.map(selector => selector.replace(/&/g, prev))).flat()
      }, [atom]).join(",")

      return declarations.map(({declaration, priority}) => {
        if (!declaration) {
          throw new Error("no declaration")
        }

        let rule = ""
        if (declaration.includes("&")) {
          rule = declaration.replace(/[&]/g, selector)
        }
        else {
          if (selector.includes("{...}")) {
            rule = selector.replace(new RegExp("{...}", "g"), "{" + declaration + "}")
          }
          else {
            rule = selector + "{" + declaration + "}"
          }
        }

        const finalRule = media ? media + "{" + rule + "}" : rule

        if (!validateCSS(finalRule)) {
          throw new Error("no validate css!!")
        }

        return [finalRule, priority]
      })
    } catch (e) {
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
    .flatMap(generateAtomicCss(rules, prefixRules))
    .filter(Boolean)
    .sort(sortByRule)
    .map(a => a[0])
}

export const generateCss = createGenerateCss()