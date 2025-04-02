import { createGenerator } from 'unocss'
import { describe } from 'vitest'
import { adorableCSS } from './adorable-css-uno'

// UnoCSS 설정
const uno = createGenerator({
  ...adorableCSS(),
})

describe('UnoCSS Compilation', () => {})
