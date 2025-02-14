// uno.config.ts
import { defineConfig } from 'unocss'
import { makeHEX } from './values/makeValue'
import { PREFIX_SELECTOR, RULES_FOR_UNOCSS } from './rules'

// + 분리 함수
export function splitByTopLevelPlus(input: string) {
  const brackets = { '(': ')', '{': '}', '[': ']' }

  const stack: string[] = []
  const parts: string[] = []
  let start = 0

  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    if (brackets[char]) {
      stack.push(brackets[char])
    } //
    else if (Object.values(brackets).includes(char)) {
      if (stack.pop() !== char) {
        return [input]
      }
    } //
    else if (char === '+' && stack.length === 0) {
      parts.push(input.slice(start, i).trim())
      start = i + 1
    }
  }

  if (stack.length > 0) {
    return [input]
  }

  parts.push(input.slice(start).trim())
  return parts
}

const VALID_PSEUDO_CLASSES = [
  'active',
  'checked',
  'disabled',
  'empty',
  'enabled',
  'first-child',
  'first-of-type',
  'focus',
  'hover',
  'in-range',
  'invalid',
  'last-child',
  'last-of-type',
  'link',
  'nth-child',
  'nth-last-child',
  'nth-last-of-type',
  'nth-of-type',
  'only-of-type',
  'only-child',
  'optional',
  'out-of-range',
  'read-only',
  'read-write',
  'required',
  'root',
  'target',
  'valid',
  'visited',
]

const VALID_PSEUDO_ELEMENTS = [
  'after',
  'before',
  'first-letter',
  'first-line',
  'selection',
  'backdrop',
  'placeholder',
  'marker',
  'spelling-error',
  'grammar-error',
]

function generateDimensions([, w, h]: string[]) {
  return { width: `${w}px`, height: `${h}px` }
}

function generateAspectRatio([, w, h]: string[]) {
  return { 'aspect-ratio': `${w}/${h}`, 'height': 'auto' }
}

// UnoCSS TypeScript
export const adorableCSS = () =>
  defineConfig({
    // ...UnoCSS options
    rules: [
      // 사이즈 매칭 (예: "32x32", "128x128")
      [/^(\d+)x(\d+)$/, generateDimensions],

      // aspect-ratio: 16:9
      [/^(\d+):(\d+)$/, generateAspectRatio],

      [
        /^([-a-zA-Z0-9_.]+)(?:\((.*?)\))?$/,
        ([_, prop, value], unocss) => {
          try {
            const fn = RULES_FOR_UNOCSS[prop]
            if (typeof fn !== 'function') return
            if (fn.length >= 1 && !value) return

            const def = fn(value, unocss)
            if (typeof def === 'string') return { [prop]: 'var(--not-implemented)' }
            return def
          } catch (e) {}
        },
      ],
    ],

    // AdorableCSS Syntax!
    variants: [
      // #hexa : #fff.02
      (matcher) => {
        const regexHexa = /(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/g
        const hexaColorMatch = matcher.match(regexHexa)

        if (hexaColorMatch) {
          return {
            matcher,
            body: (body) => {
              return body.map(([selector, value]) => [
                selector,
                String(value || '').replace(regexHexa, (a) => makeHEX(a)),
              ])
            },
          }
        }
      },

      // prefixPeusdo
      (matcher) => {
        const rangeMatch = matcher.match(/^(\d+)\.{2,3}(\d+):(.+)$/)
        if (rangeMatch) {
          const [full, min, max, rest] = rangeMatch
          const isInclusive = full.includes('...')
          return {
            matcher: rest,
            parent: `@media (min-width: ${min}px) and (max-width: ${isInclusive ? max : parseInt(max) - 1}px)`,
            order: parseInt(min),
          }
        }
      },

      // prefixSelector >, >>
      // pseudo classes / elements ex) :hover, ::before
      (matcher) => {
        const selectors = [] as ((s: string) => string)[]

        let currentMatcher = matcher
        while (true) {
          const match = currentMatcher.match(/^([^:]+):(.+)$/)
          if (!match) break

          const [, pseudo, rest] = match
          currentMatcher = rest

          const prefix = PREFIX_SELECTOR[pseudo.slice(0, 2)] || PREFIX_SELECTOR[pseudo.slice(0, 1)]
          if (prefix) {
            selectors.push((s: string) => prefix(pseudo).replace(/&/g, s))
          }
          //
          else if (VALID_PSEUDO_CLASSES.includes(pseudo)) {
            selectors.push((s: string) => `${s}:${pseudo}`)
          }
          //
          else if (VALID_PSEUDO_ELEMENTS.includes(pseudo)) {
            selectors.push((s: string) => `${s}::${pseudo}`)
          }
        }

        if (selectors.length > 0) {
          return {
            matcher: currentMatcher,
            selector: (s) => selectors.reduce((acc, fn) => fn(acc), s),
            order: selectors.length, // variants가 많을수록 높은 order
          }
        }
      },

      // >, >>
      (matcher) => {
        const match = matcher.match(/^(>>|>)(.+)$/)
        if (match) {
          const [, pseudo, rest] = match

          const pseudoSelector = {
            '>': (s: string) => `${s}>*`,
            '>>': (s: string) => `${s} *`,
          } as Record<string, (s: string) => string>

          return {
            matcher: rest,
            selector: pseudoSelector[pseudo],
            order: 1,
          }
        }
      },

      // important!
      (matcher) => {
        const match = matcher.match(/(.*?)(!+)$/)
        if (match) {
          const [, rest, important] = match
          return {
            matcher: rest,
            selector: (s) => s + '[class]'.repeat(important.length),
            body: (body) => {
              return body.map(([selector, value]) => [selector, value + '!important'])
            },
          }
        }
      },
    ],

    // +
    shortcuts: [
      [
        /(\+)/,
        (match) => {
          if (!match.input) return undefined
          const segments = splitByTopLevelPlus(match.input)
          return segments.length >= 2 ? segments : undefined
        },
      ],
    ],
  })
