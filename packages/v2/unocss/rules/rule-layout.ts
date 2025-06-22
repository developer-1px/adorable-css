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

  // Handle flex layout
  yield {
    'display': 'flex',
    'flex-direction': hasReverse ? `${baseDirection}-reverse` : baseDirection,
    ...(wrap && { 'flex-wrap': 'wrap' })
  }

  const alignValue = (values.findLast((v) => v in layout.aligns) || layout.defaultAlign) as keyof typeof layout.aligns

  yield { 'align-items': layout.aligns[alignValue] }

  const justifyKey = values.findLast((v) => v in layout.justify) as keyof typeof layout.justify | undefined

  const justifyWithReverse = justifyKey && hasReverse ? (`${justifyKey}+reverse` as const) : justifyKey

  if (justifyWithReverse) {
    yield { 'justify-content': layout.justify[justifyWithReverse] }
  }
}


export const RULES_AUTO_LAYOUT_UNOCSS = {
  // Box-Model
  'w': function* (value: string) {
    if (value === 'hug') {
      yield { width: 'fit-content' }
      return
    }

    if (value === 'fill') {
      // Default fallback: 100% width
      // In flex contexts, this will be overridden by flex: 1 or align-self: stretch
      yield { width: '100%' }
      return
    }

    // Handle constraints: w(200..), w(..400), w(200..400)
    if (value.includes('..')) {
      const [min, max] = value.split('..')
      yield {
        ...(min && { 'min-width': px(min) }),
        ...(max && { 'max-width': px(max) }),
      }
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

    if (value === 'fill') {
      // Default fallback: 100% height
      // In flex contexts, this will be overridden by flex: 1 or align-self: stretch
      yield { height: '100%' }
      return
    }

    // Handle constraints: h(200..), h(..400), h(200..400)
    if (value.includes('..')) {
      const [min, max] = value.split('..')
      yield {
        ...(min && { 'min-height': px(min) }),
        ...(max && { 'max-height': px(max) }),
      }
      return
    }

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
    yield* makeBoxAligns('row', value)
  },
  'vbox': function* (value = '') {
    yield* makeBoxAligns('column', value)
  },
  'wrap': function* (value = '') {
    yield* makeBoxAligns('row wrap', value)
  },
  'pack': function* (value = '') {
    yield* makeBoxAligns('row', 'center+middle')
  },

  // gap
  'gap': (value: string) => {
    if (value === 'auto') {
      return {
        'justify-content': 'space-between',
        'align-content': 'space-between',
      }
    }

    if (value.includes('auto')) {
      return {
        'justify-content': 'space-between',
        'align-content': 'space-between',
        'grid-gap': makeSide(value.replace(/auto/g, '0')),
        'gap': makeSide(value.replace(/auto/g, '0')),
      }
    }

    return {
      'grid-gap': makeSide(value),
      'gap': makeSide(value),
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
  'space': (value: string) => {
    return { padding: px(value) }
  },

  'order': (value: string) => ({ order: cssvar(value) }),
  'flex': (value: string) => ({ flex: cssvar(value) }),
}
