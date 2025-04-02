import { cssvar, makeColor, makeNumber, percentToEm, px } from '../values/makeValue'

// 문자열을 CSS 변수 형식으로 변환하는 함수
function toCssVariable(str: string): string {
  if (!str) return ''

  // 접두사 제거 (이미 있는 경우)
  const value = str.startsWith('--') ? str.substring(2) : str

  // 변환 과정: 카멜케이스 → 케밥케이스, 공백/특수문자 → 하이픈, 소문자화
  return (
    '--' +
    value
      .replace(/([A-Z])/g, '-$1') // 대문자 앞에 하이픈 추가
      .replace(/[\s_.]+/g, '-') // 공백, 언더스코어, 점을 하이픈으로
      .replace(/[^a-zA-Z0-9-]/g, '') // 특수문자 제거
      .replace(/-+/g, '-') // 연속된 하이픈 처리
      .replace(/^-|-$/g, '') // 양쪽 끝 하이픈 제거
      .toLowerCase()
  ) // 소문자화
}

export const makeFontFamily = (value: string) => ({
  'font-family': `var(${toCssVariable(value)}, ${value})`,
})

export const RULES_FONT_BASIC = {
  // -- Typography
  'font': function* (value: string) {
    if (!value) return
    const handlers = [
      (v: string) => ({ 'font-size': px(v) }),
      (v: string) => ({ 'line-height': +v < 4 ? makeNumber(+v) : px(v) }),
      (v: string) => ({ 'letter-spacing': px(percentToEm(v)) }),
      (v: string) => ({ 'font-weight': cssvar(v) }),
      (v: string) => ({ 'font-family': cssvar(v) }),
    ]

    for (const [i, val] of value.split('/').entries()) {
      if (val === '-') continue
      yield handlers[i](val)
    }
  },

  // Font Weight
  '100': () => ({ 'font-weight': 100 }),
  '200': () => ({ 'font-weight': 200 }),
  '300': () => ({ 'font-weight': 300 }),
  '400': () => ({ 'font-weight': 400 }),
  '500': () => ({ 'font-weight': 500 }),
  '600': () => ({ 'font-weight': 600 }),
  '700': () => ({ 'font-weight': 700 }),
  '800': () => ({ 'font-weight': 800 }),
  '900': () => ({ 'font-weight': 900 }),

  'thin': () => ({ 'font-weight': 200 }),
  'light': () => ({ 'font-weight': 300 }),
  'regular': () => ({ 'font-weight': 'normal' }),
  'medium': () => ({ 'font-weight': 500 }),
  'semibold': () => ({ 'font-weight': 600 }),
  'bold': () => ({ 'font-weight': 'bold' }),
  'heavy': () => ({ 'font-weight': 900 }),

  // -- Color
  'c': (value: string) => {
    if (value === 'current') return { color: 'currentColor' }

    if (value.startsWith('linear-gradient'))
      return {
        'background': value.replace(/\//g, ' '),
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      }
    if (value.startsWith('radial-gradient'))
      return {
        'background': value.replace(/\//g, ' '),
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      }

    return { color: makeColor(value) }
  },

  // Font-Style
  'italic': () => ({ 'font-style': 'italic' }),
  'underline': () => ({ 'text-decoration': 'underline' }),
  'line-through': () => ({ 'text-decoration': 'line-through' }),
  'strike': () => ({ 'text-decoration': 'line-through' }),
  'del': () => ({ 'text-decoration': 'line-through' }),
  'overline': () => ({ 'text-decoration': 'overline' }),

  'small-caps': () => ({ 'font-variant-caps': 'small-caps' }),
  'all-small-caps': () => ({ 'font-variant-caps': 'all-small-caps' }),
  'slashed-zero': () => ({ 'font-variant-numeric': 'slashed-zero' }),
  'tabular-nums': () => ({ 'font-variant-numeric': 'tabular-nums' }),

  'lowercase': () => ({ 'text-transform': 'lowercase' }),
  'uppercase': () => ({ 'text-transform': 'uppercase' }),
  'capitalize': () => ({ 'text-transform': 'capitalize' }),

  'monospace': (value: string) => {
    if (value === 'number') return { 'font-variant-numeric': 'tabular-nums' }
    return makeFontFamily('monospace')
  },
}

export const RULES_FONT_ADVANCED = {
  // Font
  'font-size': (value: string) => ({ 'font-size': px(value) }),
  'line-height': (value: string) => ({
    'line-height': +value < 4 ? makeNumber(+value) : px(value),
  }),
  'letter-spacing': (value: string) => ({ 'letter-spacing': percentToEm(value) }),
  'word-spacing': (value: string) => ({ 'word-spacing': px(value) }),

  // Font Weight Utility
  'thicker': (value = '1') => `text-shadow:0 0 ${px(value)} currentColor;`,

  // Font Style Utility
  'color': (value: string) => RULES_FONT_UNOCSS.c(value),
  'caret': (value: string) => ({ 'caret-color': makeColor(value) }),
  'caret-current': () => ({ 'caret-color': 'currentColor' }),

  // @TODO:font-stack은 일반적인 스택 만들어 두기...(L),Roboto,NotoSans와 같은것도 만들까?

  // Font-Family
  'sans': () => makeFontFamily('sans'),
  'sans-serif': () => makeFontFamily('sans-serif'),
  'serif': () => makeFontFamily('serif'),
  'cursive': () => makeFontFamily('cursive'),
  'fantasy': () => makeFontFamily('fantasy'),
  'system-ui': () => makeFontFamily('system-ui'),

  // @deprecated
  'AppleSD': () => makeFontFamily('Apple SD Gothic Neo'),
  'Roboto': () => makeFontFamily('Roboto'),
}

export const RULES_FONT_UNOCSS = {
  ...RULES_FONT_BASIC,
  ...RULES_FONT_ADVANCED,
}
