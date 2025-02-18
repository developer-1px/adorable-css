import { createGenerator } from 'unocss'
import { adorableCSS } from '../unocss/adorable-css-uno'

const uno = createGenerator({
  ...adorableCSS(),
})

const generateCss = (classList) => {
  return uno.then((uno) => uno.generate([...classList].join(' ')))
}

if (typeof window !== 'undefined') {
  const styleSheet = document.createElement('style')
  document.head.appendChild(styleSheet)

  const classList = new Set()

  const updateStyles = () => {
    generateCss(classList).then((res) => {
      styleSheet.innerHTML = res.css
    })
  }

  // 변경된 요소들의 클래스만 확인
  const handleMutationsClass = (mutations) => {
    let hasNewClasses = false

    mutations.forEach((mutation) => {
      // 클래스 속성이 변경된 경우
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        mutation.target.classList.forEach((className) => {
          if (!classList.has(className)) {
            classList.add(className)
            hasNewClasses = true
          }
        })
      }

      // 새로운 노드가 추가된 경우
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.querySelectorAll) {
            node.querySelectorAll('*[class]').forEach((el) => {
              el.classList.forEach((className) => classList.add(className))
              hasNewClasses = true
            })
          }

          if (node.classList) {
            node.classList.forEach((className) => {
              if (!classList.has(className)) {
                classList.add(className)
                hasNewClasses = true
              }
            })
          }
        })
      }
    })

    if (hasNewClasses) {
      updateStyles()
    }
  }

  // 초기 클래스 수집
  const initClassStyle = () => {
    document.querySelectorAll('*[class]').forEach((el) => {
      el.classList.forEach((className) => classList.add(className))
    })
    updateStyles()
  }

  const observer = new MutationObserver(handleMutationsClass)

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
    childList: true,
    subtree: true,
  })

  // 초기 실행
  initClassStyle()
  document.addEventListener('DOMContentLoaded', initClassStyle, { once: true })

  // HMR 이벤트 리스너 설정
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      initClassStyle()
    })
  }
}
