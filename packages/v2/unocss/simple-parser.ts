// Simple parser for AdorableCSS classes

interface ParsedClass {
  name: string
  args?: string
}

export function parseSimpleClass(className: string): ParsedClass | null {
  // Match position constraint patterns like: (0,0), (..0,..0), (center,center)
  const positionMatch = className.match(/^\(([^,]+),([^)]+)\)$/)
  if (positionMatch) {
    return {
      name: 'position-constraint',
      args: `${positionMatch[1]}/${positionMatch[2]}`
    }
  }
  
  // Match dimension patterns like: 300x200, 16:9
  const dimensionMatch = className.match(/^(\d+)x(\d+)$/)
  if (dimensionMatch) {
    return {
      name: 'dimensions',
      args: `${dimensionMatch[1]}/${dimensionMatch[2]}`
    }
  }
  
  // Match aspect ratio patterns like: 16:9, 4:3
  const aspectMatch = className.match(/^(\d+):(\d+)$/)
  if (aspectMatch) {
    return {
      name: 'aspect-ratio',
      args: `${aspectMatch[1]}/${aspectMatch[2]}`
    }
  }
  
  // Match font weight shortcuts like: 100, 200, 300, 400, 500, 600, 700, 800, 900
  const fontWeightMatch = className.match(/^(100|200|300|400|500|600|700|800|900)$/)
  if (fontWeightMatch) {
    return {
      name: fontWeightMatch[1],  // Use the weight value as the rule name
      args: undefined
    }
  }
  
  // Match font size shortcuts like: 14, 16/24 (but not font weights)
  const fontSizeMatch = className.match(/^(\d+(?:\.\d+)?)(?:\/(\d+(?:\.\d+)?))?$/)
  if (fontSizeMatch && !fontWeightMatch) {
    if (fontSizeMatch[2]) {
      return {
        name: 'font-shorthand',
        args: `${fontSizeMatch[1]}/${fontSizeMatch[2]}`
      }
    } else {
      return {
        name: 'font-size-only',
        args: fontSizeMatch[1]
      }
    }
  }
  
  // Match patterns like: hbox, gap(16), hbox(center), etc.
  // Handle nested parentheses by counting balanced parens
  const functionPattern = /^([a-zA-Z-]+)\(/
  const functionMatch = className.match(functionPattern)
  
  if (functionMatch) {
    const name = functionMatch[1]
    
    // Find matching closing parenthesis, handling nested parens
    let openParens = 0
    let argsStart = name.length + 1  // After the opening paren
    let argsEnd = className.length - 1  // Before the closing paren
    
    for (let i = name.length; i < className.length; i++) {
      if (className[i] === '(') {
        openParens++
      } else if (className[i] === ')') {
        openParens--
        if (openParens === 0) {
          argsEnd = i
          break
        }
      }
    }
    
    const args = className.substring(argsStart, argsEnd)
    
    return {
      name: name,
      args: args
    }
  }
  
  // Simple class without arguments
  const simpleMatch = className.match(/^([a-zA-Z-]+)$/)
  if (simpleMatch) {
    return {
      name: simpleMatch[1]
    }
  }
  
  return null
}

// Test the parser
console.log('Testing simple parser:')
console.log('hbox:', parseSimpleClass('hbox'))
console.log('hbox(center):', parseSimpleClass('hbox(center)'))
console.log('gap(16):', parseSimpleClass('gap(16)'))
console.log('gap(16/24):', parseSimpleClass('gap(16/24)'))