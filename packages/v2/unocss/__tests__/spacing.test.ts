import { describe, it, expect } from 'vitest'
import { generateSimpleCSS } from './simple-css-generator'

describe('Spacing Group', () => {
  describe('Padding', () => {
    it('should generate equal padding on all sides', () => {
      const result = generateSimpleCSS('p(16)')
      expect(result).toContain('padding: 16px')
    })

    it('should generate vertical and horizontal padding', () => {
      const result = generateSimpleCSS('p(16/24)')
      expect(result).toContain('padding: 16px 24px')
    })

    it('should generate top, horizontal, bottom padding', () => {
      const result = generateSimpleCSS('p(16/24/32)')
      expect(result).toContain('padding: 16px 24px 32px')
    })

    it('should generate all four sides padding', () => {
      const result = generateSimpleCSS('p(16/24/32/8)')
      expect(result).toContain('padding: 16px 24px 32px 8px')
    })

    it('should generate horizontal padding', () => {
      const result = generateSimpleCSS('px(20)')
      expect(result).toContain('padding-left: 20px')
      expect(result).toContain('padding-right: 20px')
    })

    it('should generate vertical padding', () => {
      const result = generateSimpleCSS('py(16)')
      expect(result).toContain('padding-top: 16px')
      expect(result).toContain('padding-bottom: 16px')
    })

    it('should generate top padding', () => {
      const result = generateSimpleCSS('pt(12)')
      expect(result).toContain('padding-top: 12px')
    })

    it('should generate right padding', () => {
      const result = generateSimpleCSS('pr(12)')
      expect(result).toContain('padding-right: 12px')
    })

    it('should generate bottom padding', () => {
      const result = generateSimpleCSS('pb(12)')
      expect(result).toContain('padding-bottom: 12px')
    })

    it('should generate left padding', () => {
      const result = generateSimpleCSS('pl(12)')
      expect(result).toContain('padding-left: 12px')
    })
  })

  describe('Margin', () => {
    it('should generate equal margin on all sides', () => {
      const result = generateSimpleCSS('m(16)')
      expect(result).toContain('margin: 16px')
    })

    it('should generate horizontal margin', () => {
      const result = generateSimpleCSS('mx(20)')
      expect(result).toContain('margin-left: 20px')
      expect(result).toContain('margin-right: 20px')
    })

    it('should generate vertical margin', () => {
      const result = generateSimpleCSS('my(16)')
      expect(result).toContain('margin-top: 16px')
      expect(result).toContain('margin-bottom: 16px')
    })

    it('should generate center horizontally with auto margin', () => {
      const result = generateSimpleCSS('mx(auto)')
      expect(result).toContain('margin-left: auto')
      expect(result).toContain('margin-right: auto')
    })

    it('should generate top margin', () => {
      const result = generateSimpleCSS('mt(20)')
      expect(result).toContain('margin-top: 20px')
    })

    it('should generate right margin', () => {
      const result = generateSimpleCSS('mr(20)')
      expect(result).toContain('margin-right: 20px')
    })

    it('should generate bottom margin', () => {
      const result = generateSimpleCSS('mb(20)')
      expect(result).toContain('margin-bottom: 20px')
    })

    it('should generate left margin', () => {
      const result = generateSimpleCSS('ml(20)')
      expect(result).toContain('margin-left: 20px')
    })
  })
})