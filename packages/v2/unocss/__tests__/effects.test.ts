import { describe, it, expect } from 'vitest'
import { generateSimpleCSS } from './simple-css-generator'

describe('Effects Group', () => {
  describe('Shadows', () => {
    it('should generate small shadow', () => {
      const result = generateSimpleCSS('shadow(sm)')
      expect(result).toContain('box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)')
    })

    it('should generate medium shadow', () => {
      const result = generateSimpleCSS('shadow(md)')
      expect(result).toContain('box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)')
    })

    it('should generate large shadow', () => {
      const result = generateSimpleCSS('shadow(lg)')
      expect(result).toContain('box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)')
    })

    it('should generate extra large shadow', () => {
      const result = generateSimpleCSS('shadow(xl)')
      expect(result).toContain('box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)')
    })

    it('should generate custom shadow', () => {
      const result = generateSimpleCSS('shadow(0/4/16/#000.1)')
      expect(result).toMatch(/box-shadow.*0px.*4px.*16px.*rgba\(0,\s*0,\s*0,\s*0\.1\)/)
    })
  })

  describe('Blur Effects', () => {
    it('should generate element blur', () => {
      const result = generateSimpleCSS('blur(4)')
      expect(result).toContain('filter: blur(4px)')
    })

    it('should generate layer blur', () => {
      const result = generateSimpleCSS('blur(layer/4)')
      expect(result).toContain('filter: blur(4px)')
    })

    it('should generate background blur', () => {
      const result = generateSimpleCSS('blur(bg/4)')
      expect(result).toContain('backdrop-filter: blur(4px)')
      expect(result).toContain('-webkit-backdrop-filter: blur(4px)')
    })

    it('should generate backdrop blur', () => {
      const result = generateSimpleCSS('backdrop(10)')
      expect(result).toContain('backdrop-filter: blur(10px)')
      expect(result).toContain('-webkit-backdrop-filter: blur(10px)')
    })
  })

  describe('Opacity', () => {
    it('should generate 50% opacity', () => {
      const result = generateSimpleCSS('opacity(.5)')
      expect(result).toContain('opacity: 0.5')
    })

    it('should generate 0% opacity (hidden)', () => {
      const result = generateSimpleCSS('opacity(0)')
      expect(result).toContain('opacity: 0')
    })
  })

  describe('Filter Effects', () => {
    it('should generate brightness filter', () => {
      const result = generateSimpleCSS('brightness(1.2)')
      expect(result).toContain('filter: brightness(1.2)')
    })

    it('should generate contrast filter', () => {
      const result = generateSimpleCSS('contrast(1.5)')
      expect(result).toContain('filter: contrast(1.5)')
    })

    it('should generate grayscale filter', () => {
      const result = generateSimpleCSS('grayscale(1)')
      expect(result).toContain('filter: grayscale(1)')
    })

    it('should generate hue rotation filter', () => {
      const result = generateSimpleCSS('hue-rotate(90deg)')
      expect(result).toContain('filter: hue-rotate(90deg)')
    })

    it('should generate invert filter', () => {
      const result = generateSimpleCSS('invert(1)')
      expect(result).toContain('filter: invert(1)')
    })

    it('should generate saturation filter', () => {
      const result = generateSimpleCSS('saturate(2)')
      expect(result).toContain('filter: saturate(2)')
    })

    it('should generate sepia filter', () => {
      const result = generateSimpleCSS('sepia(.5)')
      expect(result).toContain('filter: sepia(0.5)')
    })

    it('should generate drop shadow filter', () => {
      const result = generateSimpleCSS('drop-shadow(0/4/8/rgba(0,0,0,0.1))')
      expect(result).toContain('filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.1))')
    })
  })
})