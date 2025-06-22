import { RULES_FOR_UNOCSS } from './rules'

// Simple test to check rules
console.log('Testing RULES_FOR_UNOCSS:')
console.log('hbox exists:', !!RULES_FOR_UNOCSS['hbox'])
console.log('vbox exists:', !!RULES_FOR_UNOCSS['vbox'])
console.log('pack exists:', !!RULES_FOR_UNOCSS['pack'])
console.log('gap exists:', !!RULES_FOR_UNOCSS['gap'])

// Test hbox rule directly
if (RULES_FOR_UNOCSS['hbox']) {
  console.log('\nTesting hbox rule:')
  const hboxResult = RULES_FOR_UNOCSS['hbox']()
  console.log('hbox result:', hboxResult)
  
  if (hboxResult && typeof hboxResult[Symbol.iterator] === 'function') {
    console.log('hbox result is iterable, expanding:')
    for (const rule of hboxResult) {
      console.log('  -', rule)
    }
  }
}

// Test gap rule with value
if (RULES_FOR_UNOCSS['gap']) {
  console.log('\nTesting gap rule:')
  const gapResult = RULES_FOR_UNOCSS['gap']('16')
  console.log('gap result:', gapResult)
  
  if (gapResult && typeof gapResult[Symbol.iterator] === 'function') {
    console.log('gap result is iterable, expanding:')
    for (const rule of gapResult) {
      console.log('  -', rule)
    }
  }
}