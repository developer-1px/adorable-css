import { describe, it, expect } from 'vitest'
import { generateSimpleCSS } from './simple-css-generator'

describe('Typography Group', () => {
  describe('Font Size Shortcuts', () => {
    it('should generate font size shorthand', () => {
      const result = generateSimpleCSS('14')
      expect(result).toContain('font-size: 14px')
    })

    it('should generate font size and line height shorthand', () => {
      const result = generateSimpleCSS('16/24')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
    })
  })

  describe('Font Properties', () => {
    it('should generate font size only', () => {
      const result = generateSimpleCSS('font(16)')
      expect(result).toContain('font-size: 16px')
    })

    it('should generate font size and line height', () => {
      const result = generateSimpleCSS('font(16/24)')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
    })

    it('should generate size, line height, letter spacing', () => {
      const result = generateSimpleCSS('font(16/24/-2%)')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
      expect(result).toContain('letter-spacing: -0.02em')
    })

    it('should generate complete font styling', () => {
      const result = generateSimpleCSS('font(16/24/-2%)')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
      expect(result).toContain('letter-spacing: -0.02em')
    })

    it('should generate complete font with family', () => {
      const result = generateSimpleCSS('font(Inter/16/24/-2%)')
      expect(result).toContain('font-family: Inter')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
      expect(result).toContain('letter-spacing: -0.02em')
    })

    it('should generate font size with line height', () => {
      const result = generateSimpleCSS('font(24/32)')
      expect(result).toContain('font-size: 24px')
      expect(result).toContain('line-height: 32px')
    })

    it('should generate font size with line height and letter spacing', () => {
      const result = generateSimpleCSS('font(16/24/-2%)')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
      expect(result).toContain('letter-spacing: -0.02em')
    })

    it('should handle font family with size and line height', () => {
      const result = generateSimpleCSS('font(Inter/18/24)')
      expect(result).toContain('font-family: Inter')
      expect(result).toContain('font-size: 18px')
      expect(result).toContain('line-height: 24px')
    })

    it('should handle decimal line-height values', () => {
      const result = generateSimpleCSS('font(20/1.5)')
      expect(result).toContain('font-size: 20px')
      expect(result).toContain('line-height: 1.5')
    })

    it('should handle font-weight in 4th parameter', () => {
      const result = generateSimpleCSS('font(16/24/-2%/700)')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
      expect(result).toContain('letter-spacing: -0.02em')
      expect(result).toContain('font-weight: 700')
    })

    it('should handle numeric font-weight values (100-900)', () => {
      expect(generateSimpleCSS('font(20/24/-/600)')).toContain('font-weight: 600')
      expect(generateSimpleCSS('font(18/-/-/800)')).toContain('font-weight: 800')
      expect(generateSimpleCSS('font(16/22/-2%/500)')).toContain('font-weight: 500')
    })

    it('should handle font-weight with font-family (5th parameter)', () => {
      const result = generateSimpleCSS('font(Inter/16/24/-2%/700)')
      expect(result).toContain('font-family: Inter')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
      expect(result).toContain('letter-spacing: -0.02em')
      expect(result).toContain('font-weight: 700')
    })

    it('should handle non-numeric font-weight values', () => {
      const result = generateSimpleCSS('font(16/24/-/bold)')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
      expect(result).toContain('font-weight: bold')
    })

    it('should detect font-weight in 3rd position (smart parsing)', () => {
      const result = generateSimpleCSS('font(28/1.1/800)')
      expect(result).toContain('font-size: 28px')
      expect(result).toContain('line-height: 1.1')
      expect(result).toContain('font-weight: 800')
      expect(result).not.toContain('letter-spacing')
    })

    it('should handle named font-weight in 3rd position', () => {
      const result = generateSimpleCSS('font(24/1.2/bold)')
      expect(result).toContain('font-size: 24px')
      expect(result).toContain('line-height: 1.2')
      expect(result).toContain('font-weight: bold')
      expect(result).not.toContain('letter-spacing')
    })

    it('should still handle letter-spacing when not a font-weight', () => {
      const result = generateSimpleCSS('font(16/24/-2%/500)')
      expect(result).toContain('font-size: 16px')
      expect(result).toContain('line-height: 24px')
      expect(result).toContain('letter-spacing: -0.02em')
      expect(result).toContain('font-weight: 500')
    })
  })

  describe('Font Weights', () => {
    it('should generate bold font weight', () => {
      const result = generateSimpleCSS('bold')
      expect(result).toContain('font-weight: 700')
    })

    it('should generate medium font weight', () => {
      const result = generateSimpleCSS('medium')
      expect(result).toContain('font-weight: 500')
    })

    it('should generate light font weight', () => {
      const result = generateSimpleCSS('light')
      expect(result).toContain('font-weight: 300')
    })
    
    it('should generate numeric font weights', () => {
      expect(generateSimpleCSS('100')).toContain('font-weight: 100')
      expect(generateSimpleCSS('200')).toContain('font-weight: 200')
      expect(generateSimpleCSS('300')).toContain('font-weight: 300')
      expect(generateSimpleCSS('400')).toContain('font-weight: 400')
      expect(generateSimpleCSS('500')).toContain('font-weight: 500')
      expect(generateSimpleCSS('600')).toContain('font-weight: 600')
      expect(generateSimpleCSS('700')).toContain('font-weight: 700')
      expect(generateSimpleCSS('800')).toContain('font-weight: 800')
      expect(generateSimpleCSS('900')).toContain('font-weight: 900')
    })
  })

  describe('Text Styles', () => {
    it('should generate italic text', () => {
      const result = generateSimpleCSS('italic')
      expect(result).toContain('font-style: italic')
    })

    it('should generate underlined text', () => {
      const result = generateSimpleCSS('underline')
      expect(result).toContain('text-decoration: underline')
    })

    it('should generate strikethrough text', () => {
      const result = generateSimpleCSS('strike')
      expect(result).toContain('text-decoration: line-through')
    })

    it('should generate uppercase text', () => {
      const result = generateSimpleCSS('uppercase')
      expect(result).toContain('text-transform: uppercase')
    })

    it('should generate lowercase text', () => {
      const result = generateSimpleCSS('lowercase')
      expect(result).toContain('text-transform: lowercase')
    })

    it('should generate capitalize text', () => {
      const result = generateSimpleCSS('capitalize')
      expect(result).toContain('text-transform: capitalize')
    })
  })

  describe('Text Alignment', () => {
    it('should generate left text alignment', () => {
      const result = generateSimpleCSS('text(left)')
      expect(result).toContain('text-align: left')
    })

    it('should generate center text alignment', () => {
      const result = generateSimpleCSS('text(center)')
      expect(result).toContain('text-align: center')
    })

    it('should generate right text alignment', () => {
      const result = generateSimpleCSS('text(right)')
      expect(result).toContain('text-align: right')
    })

    it('should generate justify text alignment', () => {
      const result = generateSimpleCSS('text(justify)')
      expect(result).toContain('text-align: justify')
    })
  })

  describe('Vertical Alignment (Flexbox)', () => {
    it('should generate top vertical alignment', () => {
      const result = generateSimpleCSS('text(top)')
      expect(result).toContain('align-items: flex-start')
    })

    it('should generate middle vertical alignment', () => {
      const result = generateSimpleCSS('text(middle)')
      expect(result).toContain('align-items: center')
    })

    it('should generate bottom vertical alignment', () => {
      const result = generateSimpleCSS('text(bottom)')
      expect(result).toContain('align-items: flex-end')
    })
  })

  describe('Text Overflow', () => {
    it('should prevent text wrapping', () => {
      const result = generateSimpleCSS('nowrap')
      expect(result).toContain('white-space: nowrap')
    })

    it('should generate single line text with ellipsis', () => {
      const result = generateSimpleCSS('truncate')
      expect(result).toContain('white-space: nowrap')
      expect(result).toContain('overflow: hidden')
      expect(result).toContain('text-overflow: ellipsis')
    })

    it('should generate multi-line text clamp', () => {
      const result = generateSimpleCSS('max-lines(3)')
      expect(result).toContain('overflow: hidden')
      expect(result).toContain('display: -webkit-box')
      expect(result).toContain('-webkit-box-orient: vertical')
      expect(result).toContain('-webkit-line-clamp: 3')
    })

    it('should break long words', () => {
      const result = generateSimpleCSS('break(word)')
      expect(result).toContain('word-break: break-word')
    })

    it('should break all characters', () => {
      const result = generateSimpleCSS('break(all)')
      expect(result).toContain('word-break: break-all')
    })
  })
})