import { describe, it, expect } from 'vitest'
import { generateSimpleCSS } from './simple-css-generator'

describe('Size & Dimensions Group', () => {
  describe('Fixed Dimensions', () => {
    it('should generate fixed width x height', () => {
      const result = generateSimpleCSS('300x200')
      expect(result).toContain('width: 300px')
      expect(result).toContain('height: 200px')
    })

    it('should generate fixed width', () => {
      const result = generateSimpleCSS('w(300)')
      expect(result).toContain('width: 300px')
    })

    it('should generate fixed height', () => {
      const result = generateSimpleCSS('h(200)')
      expect(result).toContain('height: 200px')
    })
  })

  describe('Figma-style Sizing', () => {
    it('should generate hug content width', () => {
      const result = generateSimpleCSS('w(hug)')
      expect(result).toContain('width: fit-content')
    })

    it('should generate fill container width', () => {
      const result = generateSimpleCSS('w(fill)')
      expect(result).toContain('width: 100%')
    })

    it('should generate hug content height', () => {
      const result = generateSimpleCSS('h(hug)')
      expect(result).toContain('height: fit-content')
    })

    it('should generate fill container height', () => {
      const result = generateSimpleCSS('h(fill)')
      expect(result).toContain('height: 100%')
    })
  })

  describe('Constraints', () => {
    it('should generate min-width constraint', () => {
      const result = generateSimpleCSS('w(200..)')
      expect(result).toContain('min-width: 200px')
    })

    it('should generate max-width constraint', () => {
      const result = generateSimpleCSS('w(..400)')
      expect(result).toContain('max-width: 400px')
    })

    it('should generate min and max width constraints', () => {
      const result = generateSimpleCSS('w(200..400)')
      expect(result).toContain('min-width: 200px')
      expect(result).toContain('max-width: 400px')
    })

    it('should generate fill with constraints', () => {
      const result = generateSimpleCSS('w(fill/300..600)')
      expect(result).toContain('width: 100%')
      expect(result).toContain('min-width: 300px')
      expect(result).toContain('max-width: 600px')
    })
  })

  describe('Aspect Ratios', () => {
    it('should generate 16:9 aspect ratio', () => {
      const result = generateSimpleCSS('16:9')
      expect(result).toContain('aspect-ratio: 16/9')
    })

    it('should generate 4:3 aspect ratio', () => {
      const result = generateSimpleCSS('4:3')
      expect(result).toContain('aspect-ratio: 4/3')
    })

    it('should generate 1:1 aspect ratio', () => {
      const result = generateSimpleCSS('1:1')
      expect(result).toContain('aspect-ratio: 1/1')
    })
  })
})