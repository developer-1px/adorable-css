// AdorableCSS v2 - CDN Entry Point
import { generateCSSFromAdorableCSS } from './cssGenerator'

// Types for browser environment
interface AdorableCSSV2 {
  version: string
  init: (options?: AdorableCSSOptions) => void
  generate: (classes: string[]) => string
  destroy: () => void
}

interface AdorableCSSOptions {
  watch?: boolean
  target?: HTMLElement | string
  debug?: boolean
}

// Create the main AdorableCSS v2 object
const AdorableCSSV2: AdorableCSSV2 = {
  version: '2.0.0-beta.1',
  
  init: (options: AdorableCSSOptions = {}) => {
    if (typeof window === 'undefined') {
      console.warn('AdorableCSS v2 is intended for browser use only')
      return
    }
    
    const { watch = true, target, debug = false } = options
    
    // Create or get style element
    let styleElement = document.getElementById('adorable-css-v2-styles') as HTMLStyleElement
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = 'adorable-css-v2-styles'
      styleElement.setAttribute('data-adorable-css-v2', 'true')
      
      // Insert before other stylesheets to allow overrides
      const head = document.head
      const firstStylesheet = head.querySelector('style, link[rel="stylesheet"]')
      if (firstStylesheet) {
        head.insertBefore(styleElement, firstStylesheet)
      } else {
        head.appendChild(styleElement)
      }
    }
    
    if (!watch) return
    
    const classList = new Set<string>()
    
    const updateStyles = () => {
      const css = generateCSSFromAdorableCSS([...classList])
      styleElement.innerHTML = css
      
      if (debug) {
        console.log('AdorableCSS v2: Updated styles for classes:', [...classList])
      }
    }
    
    const processElement = (element: Element) => {
      element.classList.forEach((className) => {
        if (!classList.has(className)) {
          classList.add(className)
        }
      })
    }
    
    const scanForClasses = (root: Element = document.documentElement) => {
      let hasNewClasses = false
      
      // Process root element
      const rootClassCount = classList.size
      processElement(root)
      if (classList.size > rootClassCount) hasNewClasses = true
      
      // Process all descendants
      const elements = root.querySelectorAll('*')
      elements.forEach((element) => {
        const beforeCount = classList.size
        processElement(element)
        if (classList.size > beforeCount) hasNewClasses = true
      })
      
      if (hasNewClasses) {
        updateStyles()
      }
    }
    
    // Initial scan
    scanForClasses()
    
    // Watch for changes
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const beforeCount = classList.size
          processElement(mutation.target as Element)
          if (classList.size > beforeCount) shouldUpdate = true
        }
        
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const beforeCount = classList.size
              scanForClasses(node as Element)
              if (classList.size > beforeCount) shouldUpdate = true
            }
          })
        }
      })
      
      if (shouldUpdate) {
        updateStyles()
      }
    })
    
    const targetElement = typeof target === 'string' 
      ? document.querySelector(target) || document.documentElement
      : target || document.documentElement
    
    observer.observe(targetElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    })
    
    // Store observer for cleanup
    ;(window as any).__adorableCSSV2Observer = observer
    ;(window as any).__adorableCSSV2StyleElement = styleElement
    
    if (debug) {
      console.log('AdorableCSS v2: Initialized and watching for class changes')
    }
  },
  
  generate: (classes: string[]) => {
    return generateCSSFromAdorableCSS(classes)
  },
  
  destroy: () => {
    if (typeof window === 'undefined') return
    
    // Clean up observer
    const observer = (window as any).__adorableCSSV2Observer
    if (observer) {
      observer.disconnect()
      delete (window as any).__adorableCSSV2Observer
    }
    
    // Remove style element
    const styleElement = (window as any).__adorableCSSV2StyleElement
    if (styleElement && styleElement.parentNode) {
      styleElement.parentNode.removeChild(styleElement)
      delete (window as any).__adorableCSSV2StyleElement
    }
  }
}

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  // Check if auto-init is disabled
  const script = document.currentScript as HTMLScriptElement
  const autoInit = script?.getAttribute('data-auto-init') !== 'false'
  
  if (autoInit) {
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        AdorableCSSV2.init()
      })
    } else {
      AdorableCSSV2.init()
    }
  }
  
  // Make available globally
  ;(window as any).AdorableCSSV2 = AdorableCSSV2
}

// Export for module systems
export default AdorableCSSV2
export { AdorableCSSV2 }
export type { AdorableCSSOptions }