import { describe, it, expect } from 'vitest'
import { generateSimpleCSS } from './simple-css-generator'

describe('Position & Constraints Group', () => {
  describe('Position Types', () => {
    it('should generate relative positioning', () => {
      const result = generateSimpleCSS('relative')
      expect(result).toContain('position: relative')
    })

    it('should generate absolute positioning', () => {
      const result = generateSimpleCSS('absolute')
      expect(result).toContain('position: absolute')
    })

    it('should generate fixed positioning', () => {
      const result = generateSimpleCSS('fixed')
      expect(result).toContain('position: fixed')
    })

    it('should generate sticky positioning', () => {
      const result = generateSimpleCSS('sticky')
      expect(result).toContain('position: sticky')
    })
  })

  describe('Position Offsets', () => {
    it('should generate top offset', () => {
      const result = generateSimpleCSS('top(10)')
      expect(result).toContain('top: 10px')
    })

    it('should generate left offset', () => {
      const result = generateSimpleCSS('left(20)')
      expect(result).toContain('left: 20px')
    })

    it('should generate right offset', () => {
      const result = generateSimpleCSS('right(30)')
      expect(result).toContain('right: 30px')
    })

    it('should generate bottom offset', () => {
      const result = generateSimpleCSS('bottom(40)')
      expect(result).toContain('bottom: 40px')
    })
  })

  describe('Figma-style Constraints', () => {
    it('should generate absolute position (0,0)', () => {
      const result = generateSimpleCSS('(0,0)')
      expect(result).toContain('left: 0px')
      expect(result).toContain('top: 0px')
    })

    it('should generate absolute position (..0,..0)', () => {
      const result = generateSimpleCSS('(..0,..0)')
      expect(result).toContain('right: 0px')
      expect(result).toContain('bottom: 0px')
    })

    it('should generate absolute position (10..10,0)', () => {
      const result = generateSimpleCSS('(10..10,0)')
      expect(result).toContain('left: 10px')
      expect(result).toContain('right: 10px')
      expect(result).toContain('top: 0px')
    })

    it('should generate absolute center positioning', () => {
      const result = generateSimpleCSS('(center,center)')
      expect(result).toContain('left: 50%')
      expect(result).toContain('top: 50%')
      expect(result).toContain('transform: translate(-50%, -50%)')
    })
  })

  describe('Layer Positioning', () => {
    it('should generate full layer', () => {
      const result = generateSimpleCSS('layer')
      expect(result).toContain('position: absolute')
      expect(result).toContain('inset: 0')
    })

    it('should generate top layer', () => {
      const result = generateSimpleCSS('layer(top)')
      expect(result).toContain('position: absolute')
      expect(result).toContain('top: 0')
      expect(result).toContain('left: 0')
      expect(result).toContain('right: 0')
    })

    it('should generate top-left layer', () => {
      const result = generateSimpleCSS('layer(top+left)')
      expect(result).toContain('position: absolute')
      expect(result).toContain('top: 0')
      expect(result).toContain('left: 0')
    })
  })

  describe('Z-Index', () => {
    it('should generate z-index 1', () => {
      const result = generateSimpleCSS('z(1)')
      expect(result).toContain('z-index: 1')
    })

    it('should generate z-index 10', () => {
      const result = generateSimpleCSS('z(10)')
      expect(result).toContain('z-index: 10')
    })

    it('should generate top z-index', () => {
      const result = generateSimpleCSS('z(top)')
      expect(result).toContain('z-index: 9999')
    })
  })
})