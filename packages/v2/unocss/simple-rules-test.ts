// Simple test without complex dependencies

function px(value: string): string {
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

// Simple version of hbox rule
function hbox(value = '') {
  const rules = []
  
  // Basic flexbox layout
  rules.push({
    'display': 'flex',
    'align-items': 'center'
  })
  
  // Handle alignment values
  if (value === 'center') {
    rules.push({
      'justify-content': 'center'
    })
  } else if (value.includes('left+top')) {
    rules.push({
      'align-items': 'flex-start',
      'justify-content': 'flex-start'
    })
  }
  
  return rules
}

// Simple version of gap rule
function gap(value: string) {
  if (value.includes('/')) {
    const [rowGap, colGap] = value.split('/')
    return [{ gap: `${px(rowGap)} ${px(colGap)}` }]
  }
  return [{ gap: px(value) }]
}

// Test the rules
console.log('Testing simple hbox:')
const hboxResult = hbox()
console.log(hboxResult)

console.log('\nTesting hbox with center:')
const hboxCenterResult = hbox('center')
console.log(hboxCenterResult)

console.log('\nTesting gap:')
const gapResult = gap('16')
console.log(gapResult)

console.log('\nTesting gap with row/col:')
const gapRowColResult = gap('16/24')
console.log(gapRowColResult)

// Convert to CSS string
function cssObjectToString(obj: any): string {
  if (typeof obj === 'string') return obj
  if (typeof obj !== 'object' || obj === null) return ''
  
  return Object.entries(obj)
    .filter(([key, value]) => typeof value === 'string')
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ')
}

console.log('\nCSS string conversion:')
hboxResult.forEach((rule, i) => {
  console.log(`Rule ${i + 1}: ${cssObjectToString(rule)}`)
})