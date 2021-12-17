import {cssEscape} from "./cssEscape"
import {makeValues} from "./makeValue"
import {ALL_PROPERTIES, PREFIX_MEDIA_QUERY, PREFIX_PSEUDO_CLASS, RULES, SELECTOR_PREFIX} from "./rules"

const stricmp = (a:string, b:string) => a.localeCompare(b)

export type Rules = Record<string, (value?:string) => string>
export type PrefixProps = { media?:string, selector?:string, postCSS?:Function }
export type PrefixRules = Record<string, PrefixProps>

const SELECTOR_PREFIX_KEYS = Object.keys(SELECTOR_PREFIX).sort((a, b) => stricmp(a, b) || b.length - a.length)

const PREFIX_RULES:PrefixRules = {
  ...PREFIX_PSEUDO_CLASS,
  ...PREFIX_MEDIA_QUERY,
}

const makeSelector = (prefix:string):PrefixProps|undefined => {
  const key = SELECTOR_PREFIX_KEYS.find(s => prefix.startsWith(s)) || ""
  const selector = SELECTOR_PREFIX[key] && SELECTOR_PREFIX[key](prefix.slice(0, -1))
  if (selector) return {selector}
}


// Parse & Generate
const property = /([^:(]+)/.source
const value = /(?:\((.*?)\))?/.source
const delimiter = /(:|$)/.source

const re_value = /(\((.*?)\))[!]*/g
const re_syntax = new RegExp(`${property}${value}${delimiter}`, "g")

const makeDefaultPseudoClass = (input:string):PrefixProps => ({selector: `&:${input.replace(/>>/g, " ")}`})

const generateAtomicCss = (rules:Rules, prefixRules:PrefixRules) => {
  const makeRule = (r:string) => rules[r] ?? ((value:string) => (ALL_PROPERTIES[r] && value) ? `${r}:${makeValues(value)}` : "")
  const priorityTable = Object.fromEntries(Object.entries(rules).map(([key, value], index) => [key, index]))

  return (atom:string):[string, number]|undefined => {

    try {
      // syntax validate
      const prop = atom.replace(re_value, "").split(":").pop()
      if (!rules[prop] && !ALL_PROPERTIES[prop]) {
        return
      }

      // ...! -> !important
      const isImportant = atom.endsWith("!")
      const important = isImportant ? "!important;" : ";"
      atom = isImportant ? atom.slice(0, -1) : atom

      // prepare result
      let $selector = [`.${cssEscape(atom + (isImportant ? "!" : ""))}`]
      let $mediaQuery:string[] = []
      let $postCSS:Function[] = []
      let $declaration = ""
      let $priority = 0

      // parse chunk
      re_syntax.lastIndex = 0
      for (; ;) {
        const chunk = re_syntax.exec(atom)
        if (!chunk) break

        const [input, name, value, type] = chunk

        // Make Prefix
        if (type === ":") {
          const prefixRule = makeSelector(input) ?? prefixRules[name + ":"] ?? makeDefaultPseudoClass(input.slice(0, -1))

          // selector
          $selector = $selector.map(s => (prefixRule?.selector?.split(",") ?? []).map((selector:string) => {
            return selector.replace(/&/g, s).trim()
          })).flat()

          // media query
          if (prefixRule.media) {
            $mediaQuery = [...$mediaQuery, prefixRule.media]
          }

          if (prefixRule.postCSS) {
            $postCSS = [...$postCSS, prefixRule.postCSS]
          }
        }

        // Make declaration
        else {
          $declaration = makeRule(name)(value).replace(/;/g, important).trim()
          if (!$declaration) return
          if ($declaration.includes("undefined")) return

          $priority = priorityTable[name + (input.includes("(") ? "(" : "")] || priorityTable[name] || 0
        }
      }

      const media = $mediaQuery.length ? "@media " + $mediaQuery.join(" and ") : ""
      const selectors = $selector.join(",")
      const rule = $declaration.includes("&") ? $declaration.replace(/&/g, selectors) : selectors + "{" + $declaration + "}"


      return [media ? media + "{" + rule + "}" : rule, $priority]
    }
    catch (e) {

    }
  }
}

const sortByRule = (a?:[string, number], b?:[string, number]) => a![1] - b![1]

export const createGenerateCss = (rules:Rules = {}, prefixRules:PrefixRules = {}) => {
  rules = {...RULES, ...rules}
  prefixRules = {...PREFIX_RULES, ...prefixRules}
  return (classList:string[]) => classList.map(generateAtomicCss(rules, prefixRules)).filter(Boolean).sort(sortByRule).map(a => a![0]).filter(Boolean)
}

export const generateCss = createGenerateCss()