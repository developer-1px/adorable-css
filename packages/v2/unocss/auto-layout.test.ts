import { describe, it, expect } from 'vitest'
import { generateSimpleCSS } from './simple-css-generator'

describe('Auto Layout Group', () => {
  describe('Basic Layout', () => {
    it('should generate hbox (horizontal auto layout)', () => {
      const result = generateSimpleCSS('hbox')
      expect(result).toContain('display: flex')
      expect(result).toContain('align-items: center')
    })

    it('should generate vbox (vertical auto layout)', () => {
      const result = generateSimpleCSS('vbox')
      expect(result).toContain('display: flex')
      expect(result).toContain('flex-direction: column')
    })

    it('should generate pack (center in both directions)', () => {
      const result = generateSimpleCSS('pack')
      expect(result).toContain('display: flex')
      expect(result).toContain('align-items: center')
      expect(result).toContain('justify-content: center')
    })

    it('should generate wrap (flex wrap)', () => {
      const result = generateSimpleCSS('wrap')
      expect(result).toContain('flex-wrap: wrap')
    })
  })

  describe('Layout with Alignment', () => {
    it('should generate hbox with center alignment', () => {
      const result = generateSimpleCSS('hbox(center)')
      expect(result).toContain('display: flex')
      expect(result).toContain('align-items: center')
      expect(result).toContain('justify-content: center')
    })

    it('should generate hbox with left+top alignment', () => {
      const result = generateSimpleCSS('hbox(left+top)')
      expect(result).toContain('display: flex')
      expect(result).toContain('align-items: flex-start')
      expect(result).toContain('justify-content: flex-start')
    })

    it('should generate hbox with right+bottom alignment', () => {
      const result = generateSimpleCSS('hbox(right+bottom)')
      expect(result).toContain('display: flex')
      expect(result).toContain('align-items: flex-end')
      expect(result).toContain('justify-content: flex-end')
    })

    it('should generate vbox with center alignment', () => {
      const result = generateSimpleCSS('vbox(center)')
      expect(result).toContain('display: flex')
      expect(result).toContain('flex-direction: column')
      expect(result).toContain('align-items: center')
    })

    it('should generate wrap with middle alignment', () => {
      const result = generateSimpleCSS('wrap(middle)')
      expect(result).toContain('flex-wrap: wrap')
      expect(result).toContain('align-items: center')
    })
  })

  describe('Gap (Spacing)', () => {
    it('should generate gap with single value', () => {
      const result = generateSimpleCSS('gap(16)')
      expect(result).toContain('gap: 16px')
    })

    it('should generate gap with row/column values', () => {
      const result = generateSimpleCSS('gap(16/24)')
      expect(result).toContain('gap: 16px 24px')
    })
  })

  describe('Complex Combinations', () => {
    it('should handle multiple auto layout classes', () => {
      const result1 = generateSimpleCSS('hbox')
      const result2 = generateSimpleCSS('gap(16)')
      const result3 = generateSimpleCSS('p(24)')
      
      expect(result1).toContain('display: flex')
      expect(result2).toContain('gap: 16px')
      expect(result3).toContain('padding: 24px')
    })
  })
})