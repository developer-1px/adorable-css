// uno.config.ts
import { defineConfig, symbols } from 'unocss'
import { cssvar, makePosition2, px } from './values/makeValue'
import { parseInput } from './parser'
import { makeHEX } from '../../vite/src/core/makeValue'
import { ALL_PROPERTIES } from './const'
import { RULES_FOR_UNOCSS } from './rules'

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
  return { width: px(w), height: px(h) }
}

function generateAspectRatio([, w, h]: string[]) {
  return { 'aspect-ratio': `${w}/${h}`, 'height': 'auto' }
}

function generatePosition([, x, y]: string[]) {
  return {
    position: 'absolute',
    ...makePosition2(x, y),
  }
}

// 스타일 인자 추출 함수
const extractStyleArgs = (selector) => {
  if (selector.type === 'function') {
    return selector.args.map(({ value: atom }) => {
      console.log('atom', atom)
      if (atom.type === 'hex') return makeHEX(atom.image)
      return atom.image
    })
  }

  return []
}

// 스타일 결과를 배열로 변환하는 함수
function normalizeStyleResult(result: StyleProperties | StyleProperties[]): StyleProperties[] {
  if (typeof result === 'string') return []
  return Array.isArray(result) || result[Symbol.iterator] ? [...result] : [result]
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

      // position: (10,20)
      [/^\(([^,)\s]+),([^,)\s]+)\)$/, generatePosition],

      [
        /^.+$/,
        ([inputValue], { rawSelector }) => {
          try {
            const parsedInput = parseInput(inputValue)
            const statements = parsedInput.cst as []

            console.log(parsedInput)
            console.log(statements)

            const selectorParts: string[] = []
            const styleRules = []

            statements.forEach((selector) => {
              const simpleSelector = selector.selector
              const propertyName = simpleSelector.type === 'function' ? simpleSelector.name : simpleSelector.image

              console.log('styleResult', simpleSelector)
              console.log('styleDeclarations', propertyName)

              const fn =
                RULES_FOR_UNOCSS[propertyName] ||
                (ALL_PROPERTIES[propertyName] ? (value) => ({ [propertyName]: cssvar(value) }) : null)

              // selector
              if (!fn) {
                if (!selector.combinator) {
                  let pseudoIdentifier = simpleSelector.type === 'function' ? simpleSelector.name : simpleSelector.image
                  let selectorText = simpleSelector.image
                  if (VALID_PSEUDO_CLASSES.includes(pseudoIdentifier)) selectorText = ':' + selectorText
                  else if (VALID_PSEUDO_ELEMENTS.includes(pseudoIdentifier)) selectorText = '::' + selectorText
                  selectorParts.push(selectorText)
                } else {
                  selectorParts.push(selector.image)
                }
              }
              // property
              else {
                const args = extractStyleArgs(simpleSelector)
                const styleResult = args.length ? fn(args.join('/')) : fn()
                const styleDeclarations = normalizeStyleResult(styleResult)

                console.log('styleResult', styleResult)
                console.log('styleDeclarations', styleDeclarations)

                styleRules.push(styleDeclarations)
              }
            })

            const cssSelector = selectorParts.join('')

            console.log('cssSelector', cssSelector)

            return [
              ...styleRules.flat().map((rule) => {
                const selectorTransformer = rule[symbols.selector] || ((s) => s)
                return {
                  ...rule,
                  [symbols.selector]: (s: string) => selectorTransformer(`${s}${cssSelector}`),
                }
              }),
            ]
          } catch (error) {
            // console.error(error)
          }
        },
      ],
    ],
  })
