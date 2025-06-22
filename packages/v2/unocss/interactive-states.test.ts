import { describe, it, expect } from 'vitest'
import { generateSimpleCSS } from './simple-css-generator'

describe('Interactive States Group', () => {
  describe('Hover States', () => {
    it('should generate hover background change', () => {
      const result = generateSimpleCSS('hover:bg(#667eea)')
      expect(result).toMatch(/&:hover.*background.*#667eea|\.hover.*:hover.*background.*#667eea/i)
    })

    it('should generate hover scale effect', () => {
      const result = generateSimpleCSS('hover:scale(1.05)')
      expect(result).toMatch(/&:hover.*transform.*scale\(1\.05\)|\.hover.*:hover.*transform.*scale\(1\.05\)/i)
    })
  })

  describe('Active States', () => {
    it('should generate active background styling', () => {
      const result = generateSimpleCSS('active:bg(#5a6fd8)')
      expect(result).toMatch(/&:active.*background.*#5a6fd8|\.active.*:active.*background.*#5a6fd8/i)
    })

    it('should generate active scale effect', () => {
      const result = generateSimpleCSS('active:scale(.95)')
      expect(result).toMatch(/&:active.*transform.*scale\(0?\.95\)|\.active.*:active.*transform.*scale\(0?\.95\)/i)
    })
  })

  describe('Focus States', () => {
    it('should generate focus border', () => {
      const result = generateSimpleCSS('focus:b(2/#667eea)')
      expect(result).toMatch(/&:focus.*border.*2px.*solid.*#667eea|\.focus.*:focus.*border.*2px.*solid.*#667eea/i)
    })

    it('should generate focus visible outline', () => {
      const result = generateSimpleCSS('focus-visible:outline(2/#667eea)')
      expect(result).toMatch(/&:focus-visible.*outline.*2px.*solid.*#667eea|\.focus-visible.*:focus-visible.*outline.*2px.*solid.*#667eea/i)
    })

    it('should generate focus within styling', () => {
      const result = generateSimpleCSS('focus-within:bg(#f0f0f0)')
      expect(result).toMatch(/&:focus-within.*background.*#f0f0f0|\.focus-within.*:focus-within.*background.*#f0f0f0/i)
    })
  })

  describe('Form States', () => {
    it('should generate checked state styling', () => {
      const result = generateSimpleCSS('checked:bg(#667eea)')
      expect(result).toMatch(/&:checked.*background.*#667eea|\.checked.*:checked.*background.*#667eea/i)
    })

    it('should generate disabled state styling', () => {
      const result = generateSimpleCSS('disabled:opacity(.5)')
      expect(result).toMatch(/&:disabled.*opacity.*0?\.5|\.disabled.*:disabled.*opacity.*0?\.5/i)
    })
  })

  describe('Group States', () => {
    it('should generate group hover effect', () => {
      const result = generateSimpleCSS('group-hover:bg(#667eea)')
      expect(result).toMatch(/\.group:hover.*&.*background.*#667eea|group.*hover.*background.*#667eea/i)
    })

    it('should generate group focus effect', () => {
      const result = generateSimpleCSS('group-focus:scale(1.1)')
      expect(result).toMatch(/\.group:focus.*&.*transform.*scale\(1\.1\)|group.*focus.*transform.*scale\(1\.1\)/i)
    })
  })

  describe('Child Selectors', () => {
    it('should generate odd child styling', () => {
      const result = generateSimpleCSS('odd:bg(#f9f9f9)')
      expect(result).toMatch(/&:nth-child\(2n\+1\).*background.*#f9f9f9|odd.*nth-child.*background.*#f9f9f9/i)
    })

    it('should generate even child styling', () => {
      const result = generateSimpleCSS('even:bg(#f0f0f0)')
      expect(result).toMatch(/&:nth-child\(2n\).*background.*#f0f0f0|even.*nth-child.*background.*#f0f0f0/i)
    })

    it('should generate first child styling', () => {
      const result = generateSimpleCSS('first:mt(0)')
      expect(result).toMatch(/&:first-child.*margin-top.*0|first.*first-child.*margin-top.*0/i)
    })

    it('should generate last child styling', () => {
      const result = generateSimpleCSS('last:mb(0)')
      expect(result).toMatch(/&:last-child.*margin-bottom.*0|last.*last-child.*margin-bottom.*0/i)
    })
  })

  describe('Pseudo Elements', () => {
    it('should generate before pseudo-element', () => {
      const result = generateSimpleCSS('before:content("")')
      expect(result).toMatch(/&::before.*content.*""|before.*::before.*content.*""/i)
    })

    it('should generate after pseudo-element', () => {
      const result = generateSimpleCSS('after:content("")')
      expect(result).toMatch(/&::after.*content.*""|after.*::after.*content.*""/i)
    })

    it('should generate placeholder styling', () => {
      const result = generateSimpleCSS('placeholder:c(#999)')
      expect(result).toMatch(/&::placeholder.*color.*#999|placeholder.*::placeholder.*color.*#999/i)
    })

    it('should generate text selection styling', () => {
      const result = generateSimpleCSS('selection::bg(#667eea)')
      expect(result).toMatch(/&::selection.*background.*#667eea|selection.*::selection.*background.*#667eea/i)
    })
  })
})