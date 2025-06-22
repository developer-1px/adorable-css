// Simplified CSS generator for AdorableCSS v2 CDN
// This is a standalone version that doesn't depend on the UnoCSS parser

interface CSSRule {
  [property: string]: string | number | undefined
}

type CSSGenerator = (value?: string) => CSSRule | string

// CSS utility functions
const px = (value: string | number): string => {
  if (value === 0 || value === '0') return '0'
  return +value === +value ? value + 'px' : String(value)
}

const makeColor = (value: string): string => {
  if (value === 'transparent') return 'transparent'
  if (value.startsWith('#') && value.includes('.')) {
    const [rgb, a] = value.split('.')
    if (rgb.length === 4) {
      return `rgba(${rgb.slice(1).split('').map(v => parseInt(v + v, 16)).join(',')},0.${a})`
    }
    if (rgb.length === 7) {
      const r = parseInt(rgb.slice(1, 3), 16)
      const g = parseInt(rgb.slice(3, 5), 16)
      const b = parseInt(rgb.slice(5, 7), 16)
      return `rgba(${r},${g},${b},0.${a})`
    }
  }
  return value
}

const makeBorder = (value: string): string => {
  if (!value || value === 'none') return 'none'
  const parts = value.split('/')
  const width = parts[0] ? px(parts[0]) : '1px'
  const color = parts[1] ? makeColor(parts[1]) : 'currentColor'
  return `${width} solid ${color}`
}

// Basic CSS rules for AdorableCSS v2
const cssRules: Record<string, CSSGenerator> = {
  // Layout
  'hbox': () => ({ display: 'flex', 'flex-direction': 'row' }),
  'vbox': () => ({ display: 'flex', 'flex-direction': 'column' }),
  'pack': () => ({ display: 'flex', 'justify-content': 'center', 'align-items': 'center' }),
  
  // Sizing
  'w': (value = '') => {
    if (value === 'hug') return { width: 'fit-content' }
    if (value === 'fill') return { width: '100%' }
    return { width: px(value) }
  },
  'h': (value = '') => {
    if (value === 'hug') return { height: 'fit-content' }
    if (value === 'fill') return { height: '100%' }
    return { height: px(value) }
  },
  
  // Position
  'absolute': () => ({ position: 'absolute' }),
  'relative': () => ({ position: 'relative' }),
  'fixed': () => ({ position: 'fixed' }),
  'x': (value = '') => ({ left: px(value) }),
  'y': (value = '') => ({ top: px(value) }),
  'z': (value = '') => ({ 'z-index': value }),
  
  // Spacing
  'p': (value = '') => ({ padding: value.split('/').map(px).join(' ') }),
  'm': (value = '') => ({ margin: value.split('/').map(px).join(' ') }),
  'gap': (value = '') => ({ gap: value.split('/').map(px).join(' ') }),
  
  // Visual
  'bg': (value = '') => ({ background: makeColor(value) }),
  'c': (value = '') => ({ color: makeColor(value) }),
  'b': (value = '') => ({ border: makeBorder(value) }),
  'r': (value = '') => ({ 'border-radius': px(value) }),
  
  // Typography
  'font': (value = '') => {
    const parts = value.split('/')
    const rules: CSSRule = {}
    if (parts[0]) rules['font-size'] = px(parts[0])
    if (parts[1]) rules['line-height'] = +parts[1] < 4 ? parts[1] : px(parts[1])
    if (parts[2]) rules['letter-spacing'] = parts[2]
    if (parts[3]) rules['font-weight'] = parts[3]
    return rules
  },
  'bold': () => ({ 'font-weight': '700' }),
  'italic': () => ({ 'font-style': 'italic' }),
  'underline': () => ({ 'text-decoration': 'underline' }),
  'strike': () => ({ 'text-decoration': 'line-through' }),
  
  // Text
  'text': (value = '') => {
    const alignments = ['left', 'center', 'right', 'justify']
    if (alignments.includes(value)) {
      return { 'text-align': value }
    }
    return { 'text-align': 'left' }
  },
  'nowrap': () => ({ 'white-space': 'nowrap' }),
  'uppercase': () => ({ 'text-transform': 'uppercase' }),
  'lowercase': () => ({ 'text-transform': 'lowercase' }),
  
  // Effects
  'opacity': (value = '') => ({ opacity: value }),
  'blur': (value = '') => ({ filter: `blur(${px(value)})` }),
  'shadow': (value = '') => {
    const shadows = {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    }
    return { 'box-shadow': shadows[value as keyof typeof shadows] || shadows.md }
  },
  
  // Transform
  'rotate': (value = '') => ({ transform: `rotate(${value}deg)` }),
  'scale': (value = '') => ({ transform: `scale(${value})` }),
  
  // Overflow
  'clip': () => ({ overflow: 'hidden' }),
  'scroll': (value = '') => {
    if (value === 'x') return { 'overflow-x': 'auto', 'overflow-y': 'hidden' }
    if (value === 'y') return { 'overflow-y': 'auto', 'overflow-x': 'hidden' }
    return { overflow: 'auto' }
  },
  
  // Display
  'none': () => ({ display: 'none' }),
  'hidden': () => ({ visibility: 'hidden' }),
  'block': () => ({ display: 'block' }),
  'inline': () => ({ display: 'inline' }),
  'inline-block': () => ({ display: 'inline-block' })
}

// Parse simple AdorableCSS syntax
function parseAdorableCSSClass(className: string): { property: string; value?: string } | null {
  // Handle size syntax: 400x300
  if (/^\d+x\d+$/.test(className)) {
    const [w, h] = className.split('x')
    return { property: 'size', value: `${w}/${h}` }
  }
  
  // Handle aspect ratio: 16:9
  if (/^\d+:\d+$/.test(className)) {
    return { property: 'aspect-ratio', value: className.replace(':', '/') }
  }
  
  // Handle function syntax: prop(value)
  const functionMatch = className.match(/^([a-zA-Z-]+)\(([^)]*)\)$/)
  if (functionMatch) {
    return { property: functionMatch[1], value: functionMatch[2] }
  }
  
  // Handle simple property
  if (cssRules[className]) {
    return { property: className }
  }
  
  return null
}

// Generate CSS for a single class
function generateCSSForClass(className: string): string {
  const parsed = parseAdorableCSSClass(className)
  if (!parsed) return ''
  
  let rules: CSSRule | string = {}
  
  // Special cases
  if (parsed.property === 'size' && parsed.value) {
    const [w, h] = parsed.value.split('/')
    rules = { width: px(w), height: px(h) }
  } else if (parsed.property === 'aspect-ratio' && parsed.value) {
    const ratio = parsed.value.replace('/', '/')
    rules = { 'aspect-ratio': ratio }
  } else if (cssRules[parsed.property]) {
    rules = cssRules[parsed.property](parsed.value)
  }
  
  if (typeof rules === 'string') return rules
  if (typeof rules === 'object' && rules !== null) {
    const cssProps = Object.entries(rules)
      .map(([prop, value]) => `${prop}:${value}`)
      .join(';')
    
    if (cssProps) {
      // Escape CSS class name
      const escapedClassName = className.replace(/[^a-zA-Z0-9-_]/g, '\\$&')
      return `.${escapedClassName}{${cssProps};}`
    }
  }
  
  return ''
}

// Main CSS generation function
export function generateCSSFromAdorableCSS(classes: string[]): string {
  return classes
    .map(generateCSSForClass)
    .filter(Boolean)
    .join('\n')
}