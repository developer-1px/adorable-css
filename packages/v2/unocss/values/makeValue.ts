export const splitValues = (value: string, project = cssvar) => {
  if (value.includes('|')) return value.split('|').map(project)
  return value.split('/').map(project)
}
export const makeValues = (value: string, project = cssvar) => splitValues(value, project).join(' ')

export const makeCommaValues = (value: string, project = cssvar) => value.split(',').map(project).join(',')

export const makeSide = (value: string) => makeValues(value, px)

export const makeRatio = (value: string) => {
  const [w, h] = value.split(/[:/]/)
  return ((+h / +w) * 100).toFixed(2) + '%'
}

export const makeNumber = (num: number) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, '') || '0'

export const cssvar = (value: string | number) => (String(value).startsWith('--') ? `var(${value})` : value)

export const cssString = (value: string | number) => (String(value).startsWith('--') ? `var(${value})` : `"${value}"`)

// <length> default: px
export const px = (value: string | number) => {
  if (value === undefined || value === null) throw new Error('px: value is undefined')
  if (value === 0 || value === '0') return 0

  const v = String(value)

  // --css-var
  if (v.startsWith('--')) return cssvar('' + value)

  // 1/6
  const [n, m] = v.split('/')
  if (+n > 0 && +m > 0) return makeNumber((+n / +m) * 100) + '%'

  // calc
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return 'calc(' + v.replace(/[-+]/g, (a) => ` ${a} `) + ')'
  }

  // number
  return +value === +value ? value + 'px' : value
}

export const deg = (value: string | number) => {
  if (value === undefined || value === null) throw new Error('deg: value is undefined')
  if (value === 0 || value === '0') return 0

  const v = String(value)

  // --css-var
  if (v.startsWith('--')) return cssvar('' + value)

  // calc
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return 'calc(' + v.replace(/[-+]/g, (a) => ` ${a} `) + ')'
  }

  // number
  return +value === +value ? value + 'deg' : value
}

export const rpx = (value: string | number) => {
  if (value === 'fill') return '9999px'
  return px(value)
}

export const percentToEm = (value: string) => {
  if (value.endsWith('%')) return +value.slice(0, -1) / 100 + 'em'
  return px(value)
}

export const makeHEX = (value: string) => {
  const [rgb, a] = value.split('.')
  if (a && rgb.length === 4)
    return (
      'rgba(' +
      rgb
        .slice(1)
        .split('')
        .map((value) => parseInt(value + value, 16))
        .join(',') +
      ',.' +
      a +
      ')'
    )
  if (a)
    return (
      'rgba(' +
      [rgb.slice(1, 3), rgb.slice(3, 5), rgb.slice(5, 7)].map((value) => parseInt(value, 16)).join(',') +
      ',.' +
      a +
      ')'
    )
  return value
}

export const makeHLS = (value: string) => {
  const [h, s, l, a] = value.split(',')
  return 'hsl' + (a ? 'a' : '') + '(' + [h, s, l, a].filter(Boolean).map(cssvar).join() + ')'
}

export const makeRGB = (value: string) => {
  const [r, g, b, a] = value.split(',')
  return 'rgb' + (a ? 'a' : '') + '(' + [r, g, b, a].filter(Boolean).map(cssvar).join() + ')'
}

export const makeColor = (value = 'transparent') => {
  if (value === '-') return 'transparent'
  if (value === 'transparent') return 'transparent'
  if (value.startsWith('--')) return `var(${value})`

  // c(255,255,155) or c(100%,0,0)
  if (value.split(',').every((v) => parseFloat(v) >= 0)) {
    // HSL, HSLA (222,100%,50%)
    if (value.includes('%')) {
      return makeHLS(value)
    }
    // RGB, RGBA
    return makeRGB(value)
  }

  return value
}

// @TODO:
export const makeBorder = (value: string) => {
  if (!value || value === 'none' || value === '0' || value === '-') return 'none'

  const borderStyles = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']

  let widthValue = null
  let styleValue = null
  let colorValue = null

  // 입력값 처리 및 각 값 유형 식별
  splitValues(value, (val) => {
    if (+val > 0) {
      widthValue = px(val)
      return widthValue
    }

    if (borderStyles.includes(String(val))) {
      styleValue = val
      return val
    }

    colorValue = makeColor(String(val))
    return colorValue
  })

  // 기본값 설정
  if (!widthValue) widthValue = '1px'
  if (!styleValue) styleValue = 'solid'

  // 값을 표준 순서로 반환: width style color
  return `${widthValue} ${styleValue}${colorValue ? ' ' + colorValue : ''}`
}

export const makeTransition = (value: string) => {
  if (!/\d/.test(value)) return value
  if (!value.includes('=')) return makeValues(value)
  return value
    .split(/[/|]/)
    .map((item) => item.replace('=', ' '))
    .join(',')
}

export const makePosition1 = (value: string) => {
  const values = value.split(' ').map(px)
  values[1] = values[1] || values[0]
  values[2] = values[2] || values[0]
  values[3] = values[3] || values[1] || values[0]

  return ['top', 'right', 'bottom', 'left']
    .map((prop, index) => {
      const value = values[index]
      if (!value || value === '-') return
      return `${prop}:${px(value)};`
    })
    .filter(Boolean)
    .join('')
}

export const makePosition2X = (x: string) => {
  if (x.startsWith('center')) {
    const offset = x.slice(6) || 0
    return {
      left: '50%',
      transform: `translateX(-50%) translateX(${px(offset)})`,
    }
  }

  const [left, right] = x.split(/\.\.|~/)
  return {
    ...(left ? { left: px(left) } : {}),
    ...(right ? { right: px(right) } : {}),
  }
}

export const makePosition2Y = (y: string) => {
  if (y.startsWith('center')) {
    const offset = y.slice(6) || 0
    return {
      top: '50%',
      transform: `translateY(-50%) translateY(${px(offset)})`,
    }
  }

  const [top, bottom] = y.split(/\.\.|~/)
  return {
    ...(top ? { top: px(top) } : {}),
    ...(bottom ? { bottom: px(bottom) } : {}),
  }
}

export const makePosition2 = (x, y) => {
  const posX = makePosition2X(x)
  const posY = makePosition2Y(y)

  let transform = {}
  if (posX.transform && posY.transform) {
    transform = { transform: `${posX.transform} ${posY.transform}` }
  }

  return {
    ...makePosition2X(x),
    ...makePosition2Y(y),
    ...transform,
  }
}
