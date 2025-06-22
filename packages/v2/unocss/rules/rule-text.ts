import { px } from '../values/makeValue'

export const RULES_TEXT_UNOCSS = {
  // Text Alignment
  'text': function* (value = '') {
    const values = value.split('+')

    for (const v of values) {
      switch (v) {
        case 'left':
          yield { 'text-align': 'left' }
          break

        case 'center':
          yield { 'text-align': 'center' }
          break

        case 'right':
          yield { 'text-align': 'right' }
          break

        case 'justify':
          yield { 'text-align': 'justify' }
          break

        case 'top':
          yield { display: 'flex' }
          yield { 'flex-flow': 'column' }
          yield { 'justify-content': 'flex-start' }
          break

        case 'middle':
          yield { display: 'flex' }
          yield { 'flex-flow': 'column' }
          yield { 'justify-content': 'center' }
          break

        case 'bottom':
          yield { display: 'flex' }
          yield { 'flex-flow': 'column' }
          yield { 'justify-content': 'flex-end' }
          break

        case 'pack':
          yield { display: 'flex' }
          yield { 'flex-flow': 'column' }
          yield { 'align-items': 'center', 'justify-content': 'center' }
          yield { 'text-align': 'center' }
          break
      }
    }
  },

  // OverFlow + Text
  'white-space-normal': () => ({ 'white-space': 'normal' }),
  'pre': () => ({ 'white-space': 'pre-wrap' }),
  'pre-wrap': () => ({ 'white-space': 'pre-wrap' }),
  'pre-line': () => ({ 'white-space': 'pre-line' }),
  'break-spaces': () => ({ 'white-space': 'break-spaces' }),
  'nowrap': () => ({ 'white-space': 'nowrap', 'width': 'max-content' }),

  // Truncate
  'nowrap...': () => ({
    'white-space': 'nowrap',
    'max-width': '100%',
    'flex-shrink': '1',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
  }),

  // max-lines
  'max-lines': function* (value: string) {
    yield {
      'overflow': 'hidden',
      'display': '-webkit-box',
      '-webkit-box-orient': 'vertical',
    }
    yield { '-webkit-line-clamp': value }
  },
  // line-clamp?
  // @NOTE:figma-first라서 정식은 max-lines이다.
  // @NOTE:하위 호환성을 위해 line-clamp 그냥 둘다 제공한다.
  'line-clamp': (value: string) => RULES_TEXT_UNOCSS['max-lines'](value),

  // ---

  // Text Indent
  'text-indent': (value: string) => ({ 'text-indent': px(value) }),

  // Text Wrap
  'keep-all': () => ({ 'word-break': 'keep-all' }),
  'break-all': () => ({ 'word-break': 'break-all' }),
  'break-word': () => ({ 'overflow-wrap': 'break-word' }),
  'hyphens': (value = 'auto') => ({ hyphens: value }),

  // @deprecated: vertical-align
  'vertical-top': () => ({ 'vertical-align': 'top' }),
  'vertical-middle': () => ({ 'vertical-align': 'middle' }),
  'vertical-bottom': () => ({ 'vertical-align': 'bottom' }),
  'sub': () => ({ 'vertical-align': 'sub' }),
  'super': () => ({ 'vertical-align': 'super' }),
  'text-top': () => ({ 'vertical-align': 'text-top' }),
  'text-bottom': () => ({ 'vertical-align': 'text-bottom' }),
}
