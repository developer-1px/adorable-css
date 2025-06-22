// Simple CSS generator for testing
import { parseSimpleClass } from './simple-parser'

// Utility functions
function px(value: string): string {
  if (value === 'auto') return 'auto'
  if (value === 'fill') return '100%'
  if (value === 'hug') return 'fit-content'
  return isNaN(parseFloat(value)) ? value : `${value}px`
}

function makeSide(value: string): string {
  const values = value.split('/')
  if (values.length === 1) return px(values[0])
  if (values.length === 2) return `${px(values[0])} ${px(values[1])}`
  if (values.length === 3) return `${px(values[0])} ${px(values[1])} ${px(values[2])}`
  if (values.length === 4) return `${px(values[0])} ${px(values[1])} ${px(values[2])} ${px(values[3])}`
  return value
}

// Rule functions
const SIMPLE_RULES = {
  // Auto Layout
  'hbox': (args?: string) => {
    const rules = []
    
    rules.push({
      'display': 'flex',
      'align-items': 'center'
    })
    
    if (args === 'center') {
      rules.push({
        'justify-content': 'center'
      })
    } else if (args?.includes('left+top')) {
      rules.push({
        'align-items': 'flex-start',
        'justify-content': 'flex-start'
      })
    } else if (args?.includes('right+bottom')) {
      rules.push({
        'align-items': 'flex-end',
        'justify-content': 'flex-end'
      })
    }
    
    return rules
  },
  
  'vbox': (args?: string) => {
    const rules = []
    
    rules.push({
      'display': 'flex',
      'flex-direction': 'column'
    })
    
    if (args === 'center') {
      rules.push({
        'align-items': 'center'
      })
    }
    
    return rules
  },
  
  'pack': () => {
    return [{
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center'
    }]
  },
  
  'wrap': (args?: string) => {
    const rules = []
    
    rules.push({
      'flex-wrap': 'wrap'
    })
    
    if (args === 'middle') {
      rules.push({
        'align-items': 'center'
      })
    }
    
    return rules
  },
  
  'gap': (args: string) => {
    if (args.includes('/')) {
      const [rowGap, colGap] = args.split('/')
      return [{ gap: `${px(rowGap)} ${px(colGap)}` }]
    }
    return [{ gap: px(args) }]
  },

  // Size & Dimensions
  'dimensions': (args: string) => {
    const [width, height] = args.split('/')
    return [{ width: px(width), height: px(height) }]
  },
  
  'aspect-ratio': (args: string) => {
    const [w, h] = args.split('/')
    return [{ 'aspect-ratio': `${w}/${h}` }]
  },
  'w': (args: string) => {
    // Handle complex patterns like w(fill/300..600)
    if (args.includes('/') && args.includes('..')) {
      const [baseValue, constraints] = args.split('/')
      const [min, max] = constraints.split('..')
      const rules = []
      
      if (baseValue === 'fill') {
        rules.push({ width: '100%' })
      } else {
        rules.push({ width: px(baseValue) })
      }
      
      if (min) rules.push({ 'min-width': px(min) })
      if (max) rules.push({ 'max-width': px(max) })
      
      return rules
    }
    
    if (args.includes('..')) {
      const rules = []
      const [min, max] = args.split('..')
      if (min) rules.push({ 'min-width': px(min) })
      if (max) rules.push({ 'max-width': px(max) })
      return rules
    }
    return [{ width: px(args) }]
  },
  
  'h': (args: string) => {
    if (args.includes('..')) {
      const rules = []
      const [min, max] = args.split('..')
      if (min) rules.push({ 'min-height': px(min) })
      if (max) rules.push({ 'max-height': px(max) })
      return rules
    }
    return [{ height: px(args) }]
  },

  // Position
  'position-constraint': (args: string) => {
    const [x, y] = args.split('/')
    const rules = []
    
    // Handle X position
    if (x === 'center') {
      rules.push({ left: '50%' })
    } else if (x.startsWith('..')) {
      const value = x.substring(2)
      rules.push({ right: px(value) })
    } else if (x.includes('..')) {
      const [left, right] = x.split('..')
      if (left) rules.push({ left: px(left) })
      if (right) rules.push({ right: px(right) })
    } else {
      rules.push({ left: px(x) })
    }
    
    // Handle Y position
    if (y === 'center') {
      rules.push({ top: '50%' })
      if (x === 'center') {
        rules.push({ transform: 'translate(-50%, -50%)' })
      }
    } else if (y.startsWith('..')) {
      const value = y.substring(2)
      rules.push({ bottom: px(value) })
    } else if (y.includes('..')) {
      const [top, bottom] = y.split('..')
      if (top) rules.push({ top: px(top) })
      if (bottom) rules.push({ bottom: px(bottom) })
    } else {
      rules.push({ top: px(y) })
    }
    
    return rules
  },
  
  'layer': (args?: string) => {
    const rules = [{ position: 'absolute' }]
    
    if (!args) {
      rules.push({ inset: '0' })
    } else if (args === 'top') {
      rules.push({ top: '0', left: '0', right: '0' })
    } else if (args === 'top+left') {
      rules.push({ top: '0', left: '0' })
    }
    
    return rules
  },
  
  'absolute': () => [{ position: 'absolute' }],
  'relative': () => [{ position: 'relative' }],
  'fixed': () => [{ position: 'fixed' }],
  'sticky': () => [{ position: 'sticky' }],
  
  'top': (args: string) => [{ top: px(args) }],
  'left': (args: string) => [{ left: px(args) }],
  'right': (args: string) => [{ right: px(args) }],
  'bottom': (args: string) => [{ bottom: px(args) }],
  
  'z': (args: string) => {
    if (args === 'top') return [{ 'z-index': '9999' }]
    return [{ 'z-index': args }]
  },

  // Spacing
  'p': (args: string) => {
    return [{ padding: makeSide(args) }]
  },
  
  'px': (args: string) => [{ 'padding-left': px(args), 'padding-right': px(args) }],
  'py': (args: string) => [{ 'padding-top': px(args), 'padding-bottom': px(args) }],
  'pt': (args: string) => [{ 'padding-top': px(args) }],
  'pr': (args: string) => [{ 'padding-right': px(args) }],
  'pb': (args: string) => [{ 'padding-bottom': px(args) }],
  'pl': (args: string) => [{ 'padding-left': px(args) }],
  
  'm': (args: string) => [{ margin: makeSide(args) }],
  'mx': (args: string) => {
    if (args === 'auto') return [{ 'margin-left': 'auto', 'margin-right': 'auto' }]
    return [{ 'margin-left': px(args), 'margin-right': px(args) }]
  },
  'my': (args: string) => [{ 'margin-top': px(args), 'margin-bottom': px(args) }],
  'mt': (args: string) => [{ 'margin-top': px(args) }],
  'mr': (args: string) => [{ 'margin-right': px(args) }],
  'mb': (args: string) => [{ 'margin-bottom': px(args) }],
  'ml': (args: string) => [{ 'margin-left': px(args) }],

  // Fill & Stroke
  'bg': (args: string) => {
    // Handle gradients
    if (args.startsWith('linear-gradient(')) {
      const gradientStr = args.replace(/\//g, ', ')
      return [{ 'background': gradientStr }]
    }
    
    if (args.startsWith('radial/')) {
      const colors = args.substring(7).split('/')
      return [{ 'background': `radial-gradient(${colors.join(', ')})` }]
    }
    
    // Handle URLs
    if (args.startsWith('url(') || args.includes('.jpg') || args.includes('.png') || args.includes('.gif') || args.includes('.webp')) {
      if (args.startsWith('url(')) {
        return [{ 'background-image': args }]
      } else {
        return [{ 'background-image': `url(${args})` }]
      }
    }
    
    // Handle opacity
    if (args.includes('/')) {
      const [color, opacity] = args.split('/')
      if (opacity.startsWith('.') || parseFloat(opacity) < 1) {
        return [{ 'background-color': `rgba(${hexToRgb(color)}, ${opacity.startsWith('.') ? '0' + opacity : opacity})` }]
      }
    }
    return [{ 'background-color': args }]
  },
  
  'c': (args: string) => {
    // Handle gradient text
    if (args.startsWith('linear-gradient(')) {
      const gradientStr = args.replace(/\//g, ', ')
      return [{ 
        'background': gradientStr,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }]
    }
    
    if (args.includes('/')) {
      const [color, opacity] = args.split('/')
      if (opacity.startsWith('.') || parseFloat(opacity) < 1) {
        return [{ color: `rgba(${hexToRgb(color)}, ${opacity.startsWith('.') ? '0' + opacity : opacity})` }]
      }
    }
    return [{ color: args }]
  },
  
  'caret': (args: string) => [{ 'caret-color': args }],
  
  'b': (args: string) => {
    if (args.includes('/')) {
      const parts = args.split('/')
      if (parts.length === 2) {
        const [width, color] = parts
        return [{ border: `${px(width)} solid ${color}` }]
      }
      if (parts.length === 3) {
        const [width, color, style] = parts
        return [{ border: `${px(width)} ${style} ${color}` }]
      }
    }
    return [{ border: `1px solid ${args}` }]
  },
  
  'bt': (args: string) => {
    if (args.includes('/')) {
      const [width, color] = args.split('/')
      return [{ 'border-top': `${px(width)} solid ${color}` }]
    }
    return [{ 'border-top': `1px solid ${args}` }]
  },
  
  'br': (args: string) => {
    if (args.includes('/')) {
      const [width, color] = args.split('/')
      return [{ 'border-right': `${px(width)} solid ${color}` }]
    }
    return [{ 'border-right': `1px solid ${args}` }]
  },
  
  'bb': (args: string) => {
    if (args.includes('/')) {
      const [width, color] = args.split('/')
      return [{ 'border-bottom': `${px(width)} solid ${color}` }]
    }
    return [{ 'border-bottom': `1px solid ${args}` }]
  },
  
  'bl': (args: string) => {
    if (args.includes('/')) {
      const [width, color] = args.split('/')
      return [{ 'border-left': `${px(width)} solid ${color}` }]
    }
    return [{ 'border-left': `1px solid ${args}` }]
  },
  
  'o': (args: string) => {
    if (args.includes('/')) {
      const [width, color] = args.split('/')
      return [{ 'outline': `${px(width)} solid ${color}` }]
    }
    return [{ 'outline': `1px solid ${args}` }]
  },

  // Corner Radius
  'r': (args: string) => {
    if (args === '') return [{ 'border-radius': '9999px' }]
    if (args.includes('/')) {
      const values = args.split('/')
      if (values.length === 2) {
        return [{ 'border-radius': `${px(values[0])} ${px(values[1])}` }]
      }
      if (values.length === 4) {
        return [{ 'border-radius': `${px(values[0])} ${px(values[1])} ${px(values[2])} ${px(values[3])}` }]
      }
    }
    return [{ 'border-radius': px(args) }]
  },

  // Typography
  'font-size-only': (args: string) => [{ 'font-size': px(args) }],
  
  'font-shorthand': (args: string) => {
    const [fontSize, lineHeight] = args.split('/')
    return [
      { 'font-size': px(fontSize) },
      { 'line-height': px(lineHeight) }
    ]
  },
  
  'font': (args: string) => {
    const parts = args.split('/')
    const rules = []
    
    // Helper function for line-height
    const processLineHeight = (value: string) => {
      const num = parseFloat(value)
      // If it's a number less than 4, treat it as unitless (CSS line-height ratio)
      if (!isNaN(num) && num < 4) {
        return num.toString()
      }
      // Otherwise treat as pixel value
      return px(value)
    }
    
    // Check if first part is a font family (non-numeric)
    if (parts[0] && isNaN(parseFloat(parts[0]))) {
      // Pattern: font-family/size/line-height/letter-spacing/font-weight
      rules.push({ 'font-family': parts[0] })
      if (parts[1]) rules.push({ 'font-size': px(parts[1]) })
      if (parts[2] && parts[2] !== '-') rules.push({ 'line-height': processLineHeight(parts[2]) })
      if (parts[3] && parts[3] !== '-') {
        rules.push({ 'letter-spacing': parts[3].includes('%') ? `${parseFloat(parts[3]) / 100}em` : parts[3] })
      }
      // Handle font-weight for 5th parameter
      if (parts[4] && parts[4] !== '-') {
        const numWeight = parseInt(parts[4], 10)
        if (!isNaN(numWeight) && numWeight >= 100 && numWeight <= 900 && numWeight % 100 === 0) {
          rules.push({ 'font-weight': parts[4] })
        } else {
          rules.push({ 'font-weight': parts[4] })
        }
      }
    } else {
      // Pattern: size/line-height/letter-spacing/font-weight
      // But if 3rd parameter looks like font-weight, treat it as font-weight directly
      if (parts[0]) rules.push({ 'font-size': px(parts[0]) })
      if (parts[1] && parts[1] !== '-') rules.push({ 'line-height': processLineHeight(parts[1]) })
      
      // Smart detection: if 3rd parameter is a font-weight value, skip letter-spacing
      if (parts[2] && parts[2] !== '-') {
        const numWeight = parseInt(parts[2], 10)
        const isFontWeight = !isNaN(numWeight) && numWeight >= 100 && numWeight <= 900 && numWeight % 100 === 0
        const isNamedWeight = ['bold', 'medium', 'light', 'regular', 'thin', 'heavy', 'semibold'].includes(parts[2])
        
        if (isFontWeight || isNamedWeight) {
          // 3rd parameter is font-weight, skip letter-spacing
          rules.push({ 'font-weight': parts[2] })
        } else {
          // 3rd parameter is letter-spacing
          rules.push({ 'letter-spacing': parts[2].includes('%') ? `${parseFloat(parts[2]) / 100}em` : parts[2] })
          
          // Handle font-weight for 4th parameter
          if (parts[3] && parts[3] !== '-') {
            const numWeight4 = parseInt(parts[3], 10)
            if (!isNaN(numWeight4) && numWeight4 >= 100 && numWeight4 <= 900 && numWeight4 % 100 === 0) {
              rules.push({ 'font-weight': parts[3] })
            } else {
              rules.push({ 'font-weight': parts[3] })
            }
          }
        }
      } else if (parts[2] === '-') {
        // 3rd parameter is skipped with dash, check 4th parameter for font-weight
        if (parts[3] && parts[3] !== '-') {
          const numWeight4 = parseInt(parts[3], 10)
          if (!isNaN(numWeight4) && numWeight4 >= 100 && numWeight4 <= 900 && numWeight4 % 100 === 0) {
            rules.push({ 'font-weight': parts[3] })
          } else {
            rules.push({ 'font-weight': parts[3] })
          }
        }
      }
    }
    
    return rules
  },
  
  'bold': () => [{ 'font-weight': '700' }],
  'medium': () => [{ 'font-weight': '500' }],
  'light': () => [{ 'font-weight': '300' }],
  'italic': () => [{ 'font-style': 'italic' }],
  'underline': () => [{ 'text-decoration': 'underline' }],
  'strike': () => [{ 'text-decoration': 'line-through' }],
  'uppercase': () => [{ 'text-transform': 'uppercase' }],
  'lowercase': () => [{ 'text-transform': 'lowercase' }],
  'capitalize': () => [{ 'text-transform': 'capitalize' }],
  
  'text': (args: string) => {
    const alignments = {
      'left': 'left',
      'center': 'center', 
      'right': 'right',
      'justify': 'justify',
      'top': 'flex-start',
      'middle': 'center',
      'bottom': 'flex-end'
    }
    
    if (alignments[args]) {
      if (['top', 'middle', 'bottom'].includes(args)) {
        return [{ 'align-items': alignments[args] }]
      } else {
        return [{ 'text-align': alignments[args] }]
      }
    }
    return []
  },
  
  'nowrap': () => [{ 'white-space': 'nowrap' }],
  'truncate': () => [{
    'white-space': 'nowrap',
    'overflow': 'hidden', 
    'text-overflow': 'ellipsis'
  }],
  
  'max-lines': (args: string) => [{
    'overflow': 'hidden',
    'display': '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': args
  }],
  
  'break': (args: string) => {
    if (args === 'word') return [{ 'word-break': 'break-word' }]
    if (args === 'all') return [{ 'word-break': 'break-all' }]
    return []
  },

  // Effects
  'shadow': (args: string) => {
    const shadows = {
      'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
    }
    
    if (shadows[args]) {
      return [{ 'box-shadow': shadows[args] }]
    }
    
    // Parse custom shadow like: 0/4/16/#000.1
    if (args.includes('/')) {
      const parts = args.split('/')
      if (parts.length >= 4) {
        const [offsetX, offsetY, blur, color] = parts
        const colorWithOpacity = color.includes('.') ? 
          `rgba(${hexToRgb(color.split('.')[0])}, 0.${color.split('.')[1]})` : 
          color
        return [{ 'box-shadow': `${px(offsetX)} ${px(offsetY)} ${px(blur)} ${colorWithOpacity}` }]
      }
    }
    
    return [{ 'box-shadow': args }]
  },
  
  'blur': (args: string) => {
    // Handle different blur types
    if (args.includes('/')) {
      const [type, value] = args.split('/')
      if (type === 'bg') {
        return [{
          'backdrop-filter': `blur(${px(value)})`,
          '-webkit-backdrop-filter': `blur(${px(value)})`
        }]
      } else if (type === 'layer') {
        return [{ filter: `blur(${px(value)})` }]
      }
    }
    return [{ filter: `blur(${px(args)})` }]
  },
  
  'opacity': (args: string) => {
    // Ensure proper decimal format
    const opacity = args.startsWith('.') ? `0${args}` : args
    return [{ opacity: opacity }]
  },
  
  'backdrop': (args: string) => [{
    'backdrop-filter': `blur(${px(args)})`,
    '-webkit-backdrop-filter': `blur(${px(args)})`
  }],
  
  // Filter effects
  'brightness': (args: string) => [{ filter: `brightness(${args})` }],
  'contrast': (args: string) => [{ filter: `contrast(${args})` }],
  'grayscale': (args: string) => [{ filter: `grayscale(${args})` }],
  'hue-rotate': (args: string) => [{ filter: `hue-rotate(${args})` }],
  'invert': (args: string) => [{ filter: `invert(${args})` }],
  'saturate': (args: string) => [{ filter: `saturate(${args})` }],
  'sepia': (args: string) => {
    const value = args.startsWith('.') ? `0${args}` : args
    return [{ filter: `sepia(${value})` }]
  },
  'drop-shadow': (args: string) => {
    // Parse drop shadow args like: 0/4/8/rgba(0,0,0,0.1)
    if (args.includes('/')) {
      const parts = args.split('/')
      if (parts.length >= 4) {
        const [offsetX, offsetY, blur, ...colorParts] = parts
        const color = colorParts.join('/') // Rejoin in case rgba had more parts
        return [{ filter: `drop-shadow(${px(offsetX)} ${px(offsetY)} ${px(blur)} ${color})` }]
      }
    }
    return [{ filter: `drop-shadow(${args})` }]
  },
  
  // Font weight classes (100-900)
  '100': () => [{ 'font-weight': '100' }],
  '200': () => [{ 'font-weight': '200' }],
  '300': () => [{ 'font-weight': '300' }],
  '400': () => [{ 'font-weight': '400' }],
  '500': () => [{ 'font-weight': '500' }],
  '600': () => [{ 'font-weight': '600' }],
  '700': () => [{ 'font-weight': '700' }],
  '800': () => [{ 'font-weight': '800' }],
  '900': () => [{ 'font-weight': '900' }]
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result) {
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)
    return `${r}, ${g}, ${b}`
  }
  return '0, 0, 0'
}

// CSS object to string converter
function cssObjectToString(obj: any): string {
  if (typeof obj === 'string') return obj
  if (typeof obj !== 'object' || obj === null) return ''
  
  return Object.entries(obj)
    .filter(([key, value]) => typeof value === 'string')
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ')
}

// Main CSS generator
export function generateSimpleCSS(className: string): string {
  const parsed = parseSimpleClass(className)
  if (!parsed) return ''
  
  const rule = SIMPLE_RULES[parsed.name]
  if (!rule) return ''
  
  const cssRules = rule(parsed.args)
  const cssStrings = cssRules.map(cssObjectToString).filter(s => s)
  
  return cssStrings.join('; ')
}

// Test the generator
console.log('Testing CSS generation:')
console.log('hbox:', generateSimpleCSS('hbox'))
console.log('hbox(center):', generateSimpleCSS('hbox(center)'))
console.log('vbox:', generateSimpleCSS('vbox'))
console.log('gap(16):', generateSimpleCSS('gap(16)'))
console.log('gap(16/24):', generateSimpleCSS('gap(16/24)'))
console.log('p(24):', generateSimpleCSS('p(24)'))