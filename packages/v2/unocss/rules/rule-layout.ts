import { symbols } from 'unocss'
import { cssvar, makeSide, px, splitValues } from '../values/makeValue'

const LAYOUT_MAP = {
  row: {
    aligns: {
      top: 'flex-start',
      middle: 'center',
      pack: 'center',
      bottom: 'flex-end',
      fill: 'stretch',
    },
    justify: {
      'left': 'flex-start',
      'left+reverse': 'flex-end',
      'right': 'flex-end',
      'right+reverse': 'flex-start',
      'center': 'center',
      'center+reverse': 'center',
      'pack': 'center',
      'pack+reverse': 'center',
    },
    defaultAlign: 'middle',
  },
  column: {
    aligns: {
      left: 'flex-start',
      center: 'center',
      pack: 'center',
      right: 'flex-end',
      fill: 'stretch',
    },
    justify: {
      'top': 'flex-start',
      'top+reverse': 'flex-end',
      'bottom': 'flex-end',
      'bottom+reverse': 'flex-start',
      'middle': 'center',
      'middle+reverse': 'center',
      'pack': 'center',
      'pack+reverse': 'center',
    },
    defaultAlign: 'fill',
  },
} as const

type BaseDirection = keyof typeof LAYOUT_MAP
type Direction = BaseDirection | `${BaseDirection} wrap`

function* makeBoxAligns(direction: Direction = 'row', value = '') {
  const [baseDirection, wrap] = direction.split(' ') as [BaseDirection, 'wrap' | undefined]
  const values = value.split(/[+/|]/)
  const layout = LAYOUT_MAP[baseDirection]
  const hasReverse = values.includes('reverse')

  // Handle flex-flow
  yield {
    'flex-flow': [hasReverse ? `${baseDirection}-reverse` : baseDirection, wrap]
      .filter(Boolean)
      .join(' '),
  }

  const alignValue = (values.findLast((v) => v in layout.aligns) ||
    layout.defaultAlign) as keyof typeof layout.aligns

  yield { 'align-items': layout.aligns[alignValue] }

  const justifyKey = values.findLast((v) => v in layout.justify) as
    | keyof typeof layout.justify
    | undefined

  const justifyWithReverse =
    justifyKey && hasReverse ? (`${justifyKey}+reverse` as const) : justifyKey

  if (justifyWithReverse) {
    yield { 'justify-content': layout.justify[justifyWithReverse] }
  }
}

function* makeFlexFill(isRow: boolean) {
  yield {
    [symbols.selector]: (s: string) => `:where(${s}>*)`,
    [symbols.sort]: -1,
    flex: 'none',
  }
  yield {
    [symbols.selector]: (s: string) => `:where(${s}>.${isRow ? 'w' : 'h'}\\(fill\\))`,
    flex: '1 0 0',
  }
  yield {
    [symbols.selector]: (s: string) => `:where(${s}>.${isRow ? 'h' : 'w'}\\(fill\\))`,
    'align-self': 'stretch',
  }
}

const makeHBoxFill = () => makeFlexFill(true)
const makeVBoxFill = () => makeFlexFill(false)

export const RULES_AUTO_LAYOUT_UNOCSS = {
  // Box-Model
  'w': function* (value: string) {
    if (value === 'hug') {
      yield { width: 'fit-content' }
      return
    }

    if (value === 'fill') {
      yield { 'min-width': '1px', 'max-width': '100%' }
      return
    }

    if (value.includes('~')) {
      const values = value.split('~')
      if (values.length <= 2) {
        const [min, max] = value.split('~')
        yield {
          ...(min && { 'min-width': px(min) }),
          ...(max && { 'max-width': px(max) }),
        }
        return
      }

      const [min, width, max] = values
      yield {
        ...(min && { 'min-width': px(min) }),
        ...(max && { 'max-width': px(max) }),
        ...{ width: px(width) },
      }
      return
    }

    yield { width: px(value) }
  },

  'h': function* (value: string) {
    if (value === 'hug') {
      yield { height: 'fit-content' }
      return
    }

    //
    if (value === 'fill') {
      yield { 'min-height': '1px', 'max-height': '100%' }
      return
    }

    //
    if (value.includes('~')) {
      const values = value.split('~')

      if (values.length <= 2) {
        const [min, max] = value.split('~')
        yield {
          ...(min && { 'min-height': px(min) }),
          ...(max && { 'max-height': px(max) }),
        }
        return
      }

      // h(10~20~30)
      const [min, width, max] = values
      yield {
        ...(min && { 'min-height': px(min) }),
        ...(max && { 'max-height': px(max) }),
        ...{ height: px(width) },
      }
      return
    }

    yield { height: px(value) }
    return
  },

  'min-w': (value: string) => ({ 'min-width': px(value) }),
  'max-w': (value: string) => ({ 'max-width': px(value) }),
  'min-h': (value: string) => ({ 'min-height': px(value) }),
  'max-h': (value: string) => ({ 'max-height': px(value) }),

  // -- Flexbox Layout
  'hbox': function* (value = '') {
    yield { display: 'flex' }
    yield* makeBoxAligns('row', value)
    yield* makeHBoxFill()
  },
  'vbox': function* (value = '') {
    yield { display: 'flex' }
    yield* makeBoxAligns('column', value)
    yield* makeVBoxFill()
    yield {
      [symbols.selector]: (s: string) => `${s}.pack`,
      'align-items': 'center',
    }
  },
  'wrap': function* (value = '') {
    yield { display: 'flex' }
    yield* makeBoxAligns('row wrap', value)
    yield* makeHBoxFill()
  },
  'pack': function* () {
    yield { display: 'flex' }
    yield* makeBoxAligns('row', 'center+middle')
    yield* makeHBoxFill()
  },

  // gap
  'gap': function* (value: string) {
    if (value === 'auto') {
      yield {
        'justify-content': 'space-between',
        'align-content': 'space-between',
      }
      yield {
        [symbols.selector]: (s: string) => `${s}>:only-child`,
        margin: 'auto',
      }
      return
    }

    if (value.includes('auto')) {
      yield {
        'justify-content': 'space-between',
        'align-content': 'space-between',
      }
    }

    yield {
      'grid-gap': makeSide(value.replace(/auto/g, '0')),
      'gap': makeSide(value.replace(/auto/g, '0')),
    }
  },

  // @deprecated
  'subbox': () => ({
    'display': 'flex',
    'flex-flow': 'inherit',
    'align-items': 'inherit',
    'justify-content': 'inherit',
  }),

  // @NOTE:IE,safari<=13
  'hgap': (value: string) => `&>*+*{margin-left':${px(value)};}`,
  'hgap-reverse': (value: string) => `&>*+*{margin-right:${px(value)};}`,
  'vgap': (value: string) => `&>*+*{margin-top:${px(value)};}`,
  'vgap-reverse': (value: string) => `&>*+*{margin-bottom:${px(value)};}`,

  // flex: @deprecated
  'space-between': () => ({
    'justify-content': 'space-between',
    'align-content': 'space-between',
  }),
  'space-around': () => ({
    'justify-content': 'space-around',
    'align-content': 'space-around',
  }),
  'space-evenly': () => ({
    'justify-content': 'space-evenly',
    'align-content': 'space-evenly',
  }),

  // flex: @deprecated
  'space': (value: string) =>
    `[class*="hbox"]>&{width:${px(value)};}[class*="vbox"]>&{height:${px(value)};}`,

  'order': (value: string) => ({ order: cssvar(value) }),
  'flex': (value: string) => ({ flex: cssvar(value) }),
}
