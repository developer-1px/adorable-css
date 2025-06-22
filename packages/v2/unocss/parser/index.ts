// Parser for AdorableCSS syntax
export interface ParsedSelector {
  selector: {
    type: string
    name?: string
    image: string
    args?: Array<{ value: { type: string; image: string } }>
  }
  combinator?: string
  image: string
}

export interface ParsedInput {
  cst: ParsedSelector[]
}

// Simple parser for AdorableCSS syntax
export function parseInput(input: string): ParsedInput {
  const selectors: ParsedSelector[] = []
  const parts = input.trim().split(/\s+/)
  
  for (const part of parts) {
    if (!part) continue
    
    // Check if it's a function with parameters
    const functionMatch = part.match(/^([a-zA-Z-_]+)\(([^)]*)\)$/)
    if (functionMatch) {
      const [, name, argsStr] = functionMatch
      const args = argsStr ? argsStr.split('/').map(arg => ({
        value: {
          type: arg.startsWith('#') ? 'hex' : 'ident',
          image: arg
        }
      })) : []
      
      selectors.push({
        selector: {
          type: 'function',
          name,
          image: part,
          args
        },
        image: part
      })
    } else {
      // Simple identifier
      selectors.push({
        selector: {
          type: 'ident',
          image: part
        },
        image: part
      })
    }
  }
  
  return { cst: selectors }
}

// Create a simple parser instance for syntax diagrams
export const parser = {
  getSerializedGastProductions() {
    // Return empty array for now as this is just for compatibility
    return []
  }
}