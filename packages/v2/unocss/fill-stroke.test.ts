import { describe, it, expect } from 'vitest'
import { generateSimpleCSS } from './simple-css-generator'

describe('Fill & Stroke Group', () => {
  describe('Background Colors', () => {
    it('should generate solid background color', () => {
      const result = generateSimpleCSS('bg(#667eea)')
      expect(result).toContain('background-color: #667eea')
    })

    it('should generate background with opacity', () => {
      const result = generateSimpleCSS('bg(#000/.5)')
      // Should convert to rgba or similar opacity format
      expect(result).toMatch(/background.*rgba.*0\.5|background.*#000.*opacity/i)
    })

    it('should generate linear gradient background', () => {
      const result = generateSimpleCSS('bg(linear-gradient(0deg/#000/#fff))')
      expect(result).toContain('background: linear-gradient(0deg, #000, #fff)')
    })

    it('should generate radial gradient background', () => {
      const result = generateSimpleCSS('bg(radial/#000/#fff)')
      expect(result).toContain('background: radial-gradient(#000, #fff)')
    })

    it('should generate background image from URL', () => {
      const result = generateSimpleCSS('bg(url(image.jpg))')
      expect(result).toContain('background-image: url(image.jpg)')
    })

    it('should generate background image from relative path', () => {
      const result = generateSimpleCSS('bg(./image.jpg)')
      expect(result).toContain('background-image: url(./image.jpg)')
    })
  })

  describe('Text Colors', () => {
    it('should generate text color', () => {
      const result = generateSimpleCSS('c(#333)')
      expect(result).toContain('color: #333')
    })

    it('should generate white text color', () => {
      const result = generateSimpleCSS('c(#fff)')
      expect(result).toContain('color: #fff')
    })

    it('should generate text color with opacity', () => {
      const result = generateSimpleCSS('c(#000/.5)')
      expect(result).toMatch(/color.*rgba.*0\.5|color.*#000.*opacity/i)
    })

    it('should generate gradient text color', () => {
      const result = generateSimpleCSS('c(linear-gradient(45deg/#ff0000/#00ff00))')
      expect(result).toContain('background: linear-gradient(45deg, #ff0000, #00ff00)')
      expect(result).toContain('-webkit-background-clip: text')
      expect(result).toContain('-webkit-text-fill-color: transparent')
    })

    it('should generate caret color', () => {
      const result = generateSimpleCSS('caret(#667eea)')
      expect(result).toContain('caret-color: #667eea')
    })
  })

  describe('Borders', () => {
    it('should generate border with default width', () => {
      const result = generateSimpleCSS('b(#e2e8f0)')
      expect(result).toContain('border: 1px solid #e2e8f0')
    })

    it('should generate border with custom width and color', () => {
      const result = generateSimpleCSS('b(2/#667eea)')
      expect(result).toContain('border: 2px solid #667eea')
    })

    it('should generate dashed border', () => {
      const result = generateSimpleCSS('b(1/#000/dashed)')
      expect(result).toContain('border: 1px dashed #000')
    })

    it('should generate top border only', () => {
      const result = generateSimpleCSS('bt(2/#667eea)')
      expect(result).toContain('border-top: 2px solid #667eea')
    })

    it('should generate right border only', () => {
      const result = generateSimpleCSS('br(2/#667eea)')
      expect(result).toContain('border-right: 2px solid #667eea')
    })

    it('should generate bottom border only', () => {
      const result = generateSimpleCSS('bb(2/#667eea)')
      expect(result).toContain('border-bottom: 2px solid #667eea')
    })

    it('should generate left border only', () => {
      const result = generateSimpleCSS('bl(2/#667eea)')
      expect(result).toContain('border-left: 2px solid #667eea')
    })
  })

  describe('Outline', () => {
    it('should generate outline', () => {
      const result = generateSimpleCSS('o(2/#667eea)')
      expect(result).toContain('outline: 2px solid #667eea')
    })
  })
})