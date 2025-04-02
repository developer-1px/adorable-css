import {
  cssvar,
  deg,
  makeBorder,
  makeColor,
  makeCommaValues,
  makeNumber,
  makeRatio,
  makeSide,
  makeTransition,
  makeValues,
  px,
  rpx,
} from './values/makeValue'
import { RULES_FONT_UNOCSS } from './rules/rule-font'
import { RULES_AUTO_LAYOUT_UNOCSS } from './rules/rule-layout'
import { RULES_TEXT_UNOCSS } from './rules/rule-text'
import { RULES_DISPLAY_UNOCSS } from './rules/rule-display'
import { RULES_POSITION_UNOCSS } from './rules/rule-position'
import { symbols } from 'unocss'

export const reset = `
:where(*,:after,:before){margin:0;padding:0;font:inherit;color:inherit;box-sizing:border-box;}
:where(:root){-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
:where(html,body){height:100%;}
:where(img,picture,video,canvas){display:block;max-width:100%;height:auto;}
:where(img){text-indent:-9999px;}
:where(button){background:none;border:0;cursor:pointer;}
:where(a){text-decoration:none;}
:where(table){border-collapse:collapse;border-spacing:0;}
:where(ol,ul,menu,dir,summary){list-style:none;}
`

export const RULES_FOR_UNOCSS = {
  ...RULES_AUTO_LAYOUT_UNOCSS,

  ...RULES_FONT_UNOCSS,
  ...RULES_TEXT_UNOCSS,

  ...RULES_DISPLAY_UNOCSS,
  ...RULES_POSITION_UNOCSS,

  // -- Box

  // Box-Sizing
  'border-box': () => ({ 'box-sizing': 'border-box' }),
  'content-box': () => ({ 'box-sizing': 'content-box' }),

  // BoxModel - Margin
  'm': (value: string) => ({ margin: makeSide(value) }),
  'mx': (value: string) => ({ 'margin-left': px(value), 'margin-right': px(value) }),
  'my': (value: string) => ({ 'margin-top': px(value), 'margin-bottom': px(value) }),
  'mt': (value: string) => ({ 'margin-top': px(value) }),
  'mr': (value: string) => ({ 'margin-right': px(value) }),
  'mb': (value: string) => ({ 'margin-bottom': px(value) }),
  'ml': (value: string) => ({ 'margin-left': px(value) }),

  // BoxModel - Padding
  'p': (value: string) => ({ padding: makeSide(value) }),
  'px': (value: string) => ({ 'padding-left': px(value), 'padding-right': px(value) }),
  'py': (value: string) => ({ 'padding-top': px(value), 'padding-bottom': px(value) }),
  'pt': (value: string) => ({ 'padding-top': px(value) }),
  'pr': (value: string) => ({ 'padding-right': px(value) }),
  'pb': (value: string) => ({ 'padding-bottom': px(value) }),
  'pl': (value: string) => ({ 'padding-left': px(value) }),

  // BoxModel - Border
  'no-border': () => ({ border: 'none', outline: 'none' }),
  'b': (value: string) => ({ border: makeBorder(value) }),
  'bx': (value: string) => ({
    'border-left': makeBorder(value),
    'border-right': makeBorder(value),
  }),
  'by': (value: string) => ({
    'border-top': makeBorder(value),
    'border-bottom': makeBorder(value),
  }),
  'bt': (value: string) => ({ 'border-top': makeBorder(value) }),
  'br': (value: string) => ({ 'border-right': makeBorder(value) }),
  'bb': (value: string) => ({ 'border-bottom': makeBorder(value) }),
  'bl': (value: string) => ({ 'border-left': makeBorder(value) }),

  'bw': (value: string) => ({ 'border-width': makeValues(value, px) }),
  'bxw': (value: string) => ({ 'border-left-width': px(value), 'border-right-width': px(value) }),
  'byw': (value: string) => ({ 'border-top-width': px(value), 'border-bottom-width': px(value) }),
  'btw': (value: string) => ({ 'border-top-width': px(value) }),
  'brw': (value: string) => ({ 'border-right-width': px(value) }),
  'bbw': (value: string) => ({ 'border-bottom-width': px(value) }),
  'blw': (value: string) => ({ 'border-left-width': px(value) }),

  'bs': (value: string) => ({ 'border-style': makeValues(value) }),
  'bxs': (value: string) => ({
    'border-left-style': cssvar(value),
    'border-right-style': cssvar(value),
  }),
  'bys': (value: string) => ({
    'border-top-style': cssvar(value),
    'border-bottom-style': cssvar(value),
  }),
  'bts': (value: string) => ({ 'border-top-style': cssvar(value) }),
  'brs': (value: string) => ({ 'border-right-style': cssvar(value) }),
  'bbs': (value: string) => ({ 'border-bottom-style': cssvar(value) }),
  'bls': (value: string) => ({ 'border-left-style': cssvar(value) }),

  'bc': (value: string) => ({ 'border-color': makeValues(value, makeColor) }),
  'bxc': (value: string) => ({
    'border-left-color': makeColor(value),
    'border-right-color': makeColor(value),
  }),
  'byc': (value: string) => ({
    'border-top-color': makeColor(value),
    'border-bottom-color': makeColor(value),
  }),
  'btc': (value: string) => ({ 'border-top-color': makeColor(value) }),
  'brc': (value: string) => ({ 'border-right-color': makeColor(value) }),
  'bbc': (value: string) => ({ 'border-bottom-color': makeColor(value) }),
  'blc': (value: string) => ({ 'border-left-color': makeColor(value) }),

  // outline
  'outline': (value: string) => ({ outline: makeBorder(value) }),

  // @FIXME:
  // 'guide': (value: string, unocss) => {
  //   // @FIXME:
  //   value = value === 'undefined' ? '#4f80ff' : value;
  //
  //   const { symbols } = unocss;
  //   return {
  //     [symbols.selector]: (s) => `${s},div:has(>.guide),${s} *:hover`,
  //     outline: makeBorder(value),
  //   };
  // },

  // border-radius
  'r': (value: string) => ({ 'border-radius': makeValues(value, rpx) }),

  'rt': (value: string) => ({
    'border-top-left-radius': rpx(value),
    'border-top-right-radius': rpx(value),
  }),
  'rr': (value: string) => ({
    'border-top-right-radius': rpx(value),
    'border-bottom-right-radius': rpx(value),
  }),
  'rb': (value: string) => ({
    'border-bottom-left-radius': rpx(value),
    'border-bottom-right-radius': rpx(value),
  }),
  'rl': (value: string) => ({
    'border-top-left-radius': rpx(value),
    'border-bottom-left-radius': rpx(value),
  }),

  'rtl': (value: string) => ({ 'border-top-left-radius': rpx(value) }),
  'rtr': (value: string) => ({ 'border-top-right-radius': rpx(value) }),
  'rbr': (value: string) => ({ 'border-bottom-right-radius': rpx(value) }),
  'rbl': (value: string) => ({ 'border-bottom-left-radius': rpx(value) }),

  // box-shadow
  'ring': (value: string) => {
    const [color, size = 1] = value.split('/')
    return { 'box-shadow': `0 0 0 ${px(size)} ${makeColor(color)}` }
  },

  'box-shadow': (value: string) => ({
    'box-shadow': `${makeValues(value, (v) => (Number.isInteger(+v) ? px(v) : cssvar(v)))}`,
  }),

  // -- Background
  'bg': (value: string) => {
    if (value.startsWith('linear-gradient')) return { background: `${value.replace(/\//g, ' ')}` }
    if (value.startsWith('radial-gradient')) return { background: `${value.replace(/\//g, ' ')}` }

    // background-image-url
    if (value.startsWith('url')) return { 'background-image': `${value}` }
    if (/^(http|[./])/.test(value)) return { 'background-image': `url(${value})` }

    if (value === 'transparent') return { background: 'transparent' }
    return { background: makeColor(value) }
  },

  'bg-image': (value: string) => {
    if (value.startsWith('url')) return { 'background-image': value }
    return { 'background-image': `url(${value})` }
  },
  'background-image': (value: string) => RULES_FOR_UNOCSS['bg-image'](value),

  'bg-position': (value: string) => ({ 'background-position': makeValues(value) }),

  // @TODO:background 이미지에 대한 세련된 방법이 필요하다!
  'bg-repeat-x': () => ({ 'background-repeat': 'repeat-x' }),
  'bg-repeat-y': () => ({ 'background-repeat': 'repeat-y' }),
  'bg-no-repeat': () => ({ 'background-repeat': 'no-repeat' }),
  'bg-fixed': () => ({ 'background-attachment': 'fixed' }),
  'bg-scroll': () => ({ 'background-attachment': 'scroll' }),

  'contain': () => ({
    'background-size': 'contain',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'object-fit': 'contain',
  }),
  'cover': () => ({
    'background-size': 'cover',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'object-fit': 'cover',
  }),

  // Scroll
  'scroll': () => ({ overflow: 'auto' }),
  'scroll-x': () => ({ 'overflow-x': 'scroll', 'overflow-y': 'hidden' }),
  'scroll-y': () => ({ 'overflow-x': 'hidden', 'overflow-y': 'auto' }),

  // @TODO
  'scrollbar': () =>
    `&{overflow:scroll;}&.scroll{overflow:scroll;}&.scroll-x{overflow-x:scroll;}&.scroll-y{overflow-y:scroll;}`,
  'no-scrollbar': () => `&::-webkit-scrollbar{display:none;}`,
  'no-scrollbar-x': () => `&::-webkit-scrollbar:horizontal{display:none;}`,

  // Scroll Snap
  'scroll-m': (value: string) => ({ 'scroll-margin': makeSide(value) }),
  'scroll-mt': (value: string) => ({ 'scroll-margin-top': px(value) }),
  'scroll-mr': (value: string) => ({ 'scroll-margin-right': px(value) }),
  'scroll-mb': (value: string) => ({ 'scroll-margin-bottom': px(value) }),
  'scroll-ml': (value: string) => ({ 'scroll-margin-left': px(value) }),

  'scroll-p': (value: string) => ({ 'scroll-padding': makeSide(value) }),
  'scroll-pt': (value: string) => ({ 'scroll-padding-top': px(value) }),
  'scroll-pr': (value: string) => ({ 'scroll-padding-right': px(value) }),
  'scroll-pb': (value: string) => ({ 'scroll-padding-bottom': px(value) }),
  'scroll-pl': (value: string) => ({ 'scroll-padding-left': px(value) }),

  'snap': (value: string) => ({ 'scroll-snap-align': cssvar(value) }),
  'snap-start': () => ({ 'scroll-snap-align': 'start' }),
  'snap-end': () => ({ 'scroll-snap-align': 'end' }),
  'snap-center': () => ({ 'scroll-snap-align': 'center' }),
  'snap-align-none': () => ({ 'scroll-snap-align': 'none' }),

  'snap-none': () => ({ 'scroll-snap-type': 'none' }),
  'snap-x': () => ({ 'scroll-snap-type': 'x var(--a-scroll-snap-strictness, mandatory)' }),
  'snap-x-proximity': () => ({ 'scroll-snap-type': 'x proximity' }),
  'snap-y': () => ({ 'scroll-snap-type': 'y var(--a-scroll-snap-strictness, mandatory)' }),
  'snap-y-proximity': () => ({ 'scroll-snap-type': 'y proximity' }),
  'snap-both': () => ({ 'scroll-snap-type': 'both var(--a-scroll-snap-strictness, mandatory)' }),
  'snap-both-proximity': () => ({ 'scroll-snap-type': 'both proximity' }),
  'snap-mandatory': () => ({ '--a-scroll-snap-strictness': 'mandatory' }),
  'snap-proximity': () => ({ '--a-scroll-snap-strictness': 'proximity' }),

  'snap-normal': () => ({ 'scroll-snap-stop': 'normal' }),
  'snap-always': () => ({ 'scroll-snap-stop': 'always' }),

  // @TODO:- TBD
  'overscroll': (value: string) => ({ 'overscroll-behavior': value }),
  'overscroll-x': (value: string) => ({ 'overscroll-behavior-x': value }),
  'overscroll-y': (value: string) => ({ 'overscroll-behavior-y': value }),

  // @TODO:- TBD
  'no-bouncing': () => '',
  'no-overscroll': () => '',

  // -- Grid
  // @TODO:-- GRID TBD
  'grid': (value) => {
    const css = ['display:grid;']
    if (+value === +value) css.push(`grid-template-columns:repeat(${value},1fr);`)
    else if (value) css.push(`grid-template-columns:${value};`)
    return css.join('')
  },
  'grid-cols': (value) => {
    const css = ['display:grid;']
    if (+value === +value) css.push(`grid-template-columns:repeat(${value},1fr);`)
    else if (value) css.push(`grid-template-columns:${value};`)
    return css.join('')
  },
  'inline-grid': () => 'display:inline-grid;',

  'isolate': () => `isolation:isolate;`,

  // visible: () => `visibility:visible;`,
  // collapse: () => `visibility:collapse;`,
  'opacity': (value: string) => ({ opacity: cssvar(value) }),

  // Interactions
  'col-resize': () => ({ cursor: 'col-resize' }),
  'crosshair': () => ({ cursor: 'crosshair' }),
  'e-resize': () => ({ cursor: 'e-resize' }),
  'ew-resize': () => ({ cursor: 'ew-resize' }),
  // @TODO
  'grab': () => `&{cursor:grab;}&:active{cursor:grabbing;}`,
  'grabbing': () => ({ cursor: 'grabbing' }),
  'n-resize': () => ({ cursor: 'n-resize' }),
  'ne-resize': () => ({ cursor: 'ne-resize' }),
  'nesw-resize': () => ({ cursor: 'nesw-resize' }),
  'ns-resize': () => ({ cursor: 'ns-resize' }),
  'nw-resize': () => ({ cursor: 'nw-resize' }),
  'nwse-resize': () => ({ cursor: 'nwse-resize' }),
  'not-allowed': () => ({ cursor: 'not-allowed' }),
  'pointer': () => ({ cursor: 'pointer' }),
  'progress': () => ({ cursor: 'progress' }),
  'row-resize': () => ({ cursor: 'row-resize' }),
  's-resize': () => ({ cursor: 's-resize' }),
  'se-resize': () => ({ cursor: 'se-resize' }),
  'sw-resize': () => ({ cursor: 'sw-resize' }),
  'w-resize': () => ({ cursor: 'w-resize' }),
  'zoom-in': () => ({ cursor: 'zoom-in' }),
  'zoom-out': () => ({ cursor: 'zoom-out' }),
  'cursor': (value: string) => ({ cursor: value }),

  'user-select-none': () => ({ 'user-select': 'none', '-webkit-user-select': 'none' }),
  'user-select-all': () => ({ 'user-select': 'all', '-webkit-user-select': 'all' }),
  'user-select-auto': () => ({ 'user-select': 'auto', '-webkit-user-select': 'auto' }),
  'user-select-text': () => ({ 'user-select': 'text', '-webkit-user-select': 'text' }),
  'user-select': (value: string) => ({
    'user-select': cssvar(value),
    '-webkit-user-select': cssvar(value),
  }),

  'pointer-events-none': () => ({ 'pointer-events': 'none' }),
  'pointer-events-auto': () => ({ 'pointer-events': 'auto' }),

  // 에니메이션:transition(transform=100s/opacity=2s)
  'transition': (value: string) => ({ transition: makeTransition(value) }),

  // transform
  'translate': (value: string) => {
    const [x, y] = makeCommaValues(value, px).split(',')
    return {
      '--a-transform-translate-x': x,
      '--a-transform-translate-y': y,
      'transform': 'var(--a-transform)',
    }
  },
  'translateX': (value: string) => ({
    '--a-translate-x': px(value),
    'transform': 'var(--a-transform)',
  }),
  'translateY': (value: string) => ({
    '--a-translate-y': px(value),
    'transform': 'var(--a-transform)',
  }),

  'rotate': (value: string) => {
    let [x, y, z] = makeCommaValues(value, deg).split(',')
    x = x || x
    y = y || x
    z = z || x

    return {
      '--a-rotate': x,
      '--a-rotate-x': x,
      '--a-rotate-y': y,
      '--a-rotate-z': z,
      'transform': 'var(--a-transform)',
    }
  },
  'rotateX': (value: string) => ({
    '--a-rotate-x': deg(value),
    'transform': 'var(--a-transform)',
  }),
  'rotateY': (value: string) => ({
    '--a-rotate-y': deg(value),
    'transform': 'var(--a-transform)',
  }),

  'scale': (value: string) => {
    let [x, y, z] = makeCommaValues(value).split(',')
    x = x || x
    y = y || x
    z = z || x

    return {
      '--a-scale-x': x,
      '--a-scale-y': y,
      '--a-scale-z': z,
      'transform': 'var(--a-transform)',
    }
  },

  'scaleX': (value: string) => ({
    '--a-scale-x': makeNumber(+value),
    'transform': 'var(--a-transform)',
  }),
  'scaleY': (value: string) => ({
    '--a-scale-y': makeNumber(+value),
    'transform': 'var(--a-transform)',
  }),

  'skew': (value: string) => {
    const [x, y] = makeCommaValues(value, deg).split(',')
    return {
      '--a-skew-x': x,
      '--a-skew-y': y,
      'transform': 'var(--a-transform)',
    }
  },
  'skewX': (value: string) => ({
    '--a-skew-x': deg(value),
    'transform': 'var(--a-transform)',
  }),
  'skewY': (value: string) => ({
    '--a-skew-y': deg(value),
    'transform': 'var(--a-transform)',
  }),

  'matrix': (value: string) => ({ transform: `matrix(${value})` }),

  // @TODO: 3d transform
  // "translate3d": (value:string) => `--a-translate-x:${px(value)};--a-translate-y:${px(value)};--a-translate-z:${px(value)};transform:var(--a-transform);`,
  // "rotate3d": (value:string) => `--a-rotate-x:${deg(value)};--a-rotate-y:${deg(value)};--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
  // "translateZ": (value:string) => `--a-translate-z:${px(value)};transform:var(--a-transform);`,
  // "rotateZ": (value:string) => `--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
  // "skewZ": (value:string) => `--a-skew-z:${deg(value)};transform:var(--a-transform);`,
  // "scaleZ": (value:string) => `--a-scale-z:${makeCommaValues(value)};transform:var(--a-transform);`,
  // "matrix3d": (value:string) => `transform:matrix(${value});`,

  // Util
  'gpu': () => `transform:translateZ(0.1px);`,

  // etc
  'app-region': (value: string) => `app-region:${value};-webkit-app-region:${value};`,
  'clip-path': (value: string) => `clip-path:${makeValues(value)};-webkit-clip-path:${makeValues(value)};`,

  // table
  'table-fixed': () => ({ tableLayout: 'fixed' }),
  'table-auto': () => ({ tableLayout: 'auto' }),
  'table-layout-fixed': () => ({ tableLayout: 'fixed' }),
  'table-layout-auto': () => ({ tableLayout: 'auto' }),

  // Filter
  'blur': (value: string) => `filter:blur(${px(value)});-webkit-filter:blur(${px(value)});`,
  'brightness': (value: string) => `filter:brightness(${cssvar(value)});-webkit-filter:brightness(${cssvar(value)});`,
  'contrast': (value: string) => `filter:contrast(${cssvar(value)});-webkit-filter:contrast(${cssvar(value)});`,
  'drop-shadow': (value: string) =>
    `filter:drop-shadow(${makeValues(value, px)});-webkit-filter:drop-shadow(${makeValues(value, px)});`,
  'grayscale': (value: string) => `filter:grayscale(${cssvar(value)});-webkit-filter:grayscale(${cssvar(value)});`,
  'hue-rotate': (value: string) => `filter:hue-rotate(${cssvar(value)});-webkit-filter:hue-rotate(${cssvar(value)});`,
  'invert': (value: string) => `filter:invert(${cssvar(value)});-webkit-filter:invert(${cssvar(value)});`,
  'sepia': (value: string) => `filter:sepia(${cssvar(value)});-webkit-filter:sepia(${cssvar(value)});`,
  'saturate': (value: string) => `filter:saturate(${cssvar(value)});-webkit-filter:saturate(${cssvar(value)});`,

  'backdrop-blur': (value: string) => `backdrop-filter:blur(${px(value)});-webkit-backdrop-filter:blur(${px(value)});`,
  'backdrop-brightness': (value: string) =>
    `backdrop-filter:brightness(${cssvar(value)});-webkit-backdrop-filter:brightness(${cssvar(value)});`,
  'backdrop-contrast': (value: string) =>
    `backdrop-filter:contrast(${cssvar(value)});-webkit-backdrop-filter:contrast(${cssvar(value)});`,
  'backdrop-drop-shadow': (value: string) =>
    `backdrop-filter:drop-shadow(${makeValues(value, px)});-webkit-backdrop-filter:drop-shadow(${makeValues(value, px)});`,
  'backdrop-grayscale': (value: string) =>
    `backdrop-filter:grayscale(${cssvar(value)});-webkit-backdrop-filter:grayscale(${cssvar(value)});`,
  'backdrop-hue-rotate': (value: string) =>
    `backdrop-filter:hue-rotate(${cssvar(value)});-webkit-backdrop-filter:hue-rotate(${cssvar(value)});`,
  'backdrop-invert': (value: string) =>
    `backdrop-filter:invert(${cssvar(value)});-webkit-backdrop-filter:invert(${cssvar(value)});`,
  'backdrop-sepia': (value: string) =>
    `backdrop-filter:sepia(${cssvar(value)});-webkit-backdrop-filter:sepia(${cssvar(value)});`,
  'backdrop-saturate': (value: string) =>
    `backdrop-filter:saturate(${cssvar(value)});-webkit-backdrop-filter:saturate(${cssvar(value)});`,

  // @TODO:triangle
  'triangle': (value: string) => {
    const [direction, size, angle = 0] = value.split('/')
    const bd = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom', 'left']
    const bdr = bd.slice(bd.indexOf(direction))
    const height = 0.5

    let css = `width:0;height:0;border:0 solid transparent;`
    css += 'border-' + bdr[1] + '-width:' + Math.round((+size * (-angle + 1)) / 2) + 'px;'
    css += 'border-' + bdr[3] + '-width:' + Math.round((+size * (+angle + 1)) / 2) + 'px;'
    css += 'border-' + bdr[2] + ':' + Math.round(+size * height) + 'px solid black;'

    return css
  },

  // elevation
  'elevation': (value: string) => {
    const dp = +value
    if (!dp) {
      return `box-shadow:none;`
    }

    const blur = dp == 1 ? 3 : dp * 2
    const amba = (dp + 10 + dp / 9.38) / 100
    const diry = dp < 10 ? (dp % 2 == 0 ? dp - (dp / 2 - 1) : dp - (dp - 1) / 2) : dp - 4
    const dira = (24 - Math.round(dp / 10)) / 100

    return `box-shadow:0px ${px(dp)} ${px(blur)} rgba(0,0,0,${amba}),0px ${px(diry)} ${px(blur)} rgba(0,0,0,${dira});`
  },

  'debug': function* () {
    yield {
      'outline': '2px solid #4f80ff',
      'outline-offset': '-1px',
    }
    yield {
      [symbols.selector]: (s: string) => `${s}>*`,
      'outline': '1px dashed #4f80ff',
      'outline-offset': '-1px',
    }
  },
}

// Prefix
// pseudo class
export const PREFIX_PSEUDO_CLASS: PrefixRules = {
  'hover:': { media: `(hover:hover)`, selector: `&:hover,&.\\:hover` },
  'active:': { selector: `html &:active,html &.\\:active` },
  'focus:': { selector: `html &:focus,html &.\\:focus` },
  'focus-visible': { selector: `html &:focus-visible,html &.\\:focus-visible` },
  'focus-within:': { selector: `html &:focus-within,html &.\\:focus-within` },
  'checked:': { selector: `html &:checked,html &.\\:checked` },
  'read-only:': { selector: `html &:read-only,html &.\\:read-only` },
  'enabled:': { selector: `html &:enabled,html &.\\:enabled` },
  'disabled:': { selector: `html body &:disabled,html body &.\\:disabled,html body &[disabled]` },

  'group-hover:': { selector: `.group:hover &,html .group.\\:hover &` },
  'group-active:': { selector: `html .group:active &,html .group.\\:active &` },
  'group-focus:': { selector: `html .group:focus &,html .group.\\:focus &` },
  'group-focus-within:': { selector: `html .group:focus-within &,html .group\\:focus-within` },
  'group-checked:': { selector: `html .group:checked &,html .group.\\:checked &` },
  'group-read-only:': { selector: `html .group:read-only &,html .group.\\:read-only &` },
  'group-enabled:': { selector: `html .group:enabled &,html .group.\\:enabled &` },
  'group-disabled:': {
    selector: `html body .group:disabled &,html body .group[disabled] &,html body .group.disabled &`,
  },

  'placeholder:': { selector: `&::placeholder` },

  'odd:': { selector: `&:nth-child(2n+1)` },
  'even:': { selector: `&:nth-child(2n)` },

  'first:': { selector: `&:first-child` },
  'last:': { selector: `&:last-child` },

  'after:': { selector: `&::after` },
  'before:': { selector: `&::before` },

  'selection::': { selector: `&::selection,& *::selection` },
}

// media query
export const PREFIX_MEDIA_QUERY: PrefixRules = {
  'sm:': { media: `(min-width:480px)`, selector: `html &` },
  'md:': { media: `(min-width:768px)`, selector: `html &` },
  'lg:': { media: `(min-width:1024px)`, selector: `html &` },
  'xl:': { media: `(min-width:1280px)`, selector: `html &` },

  'sm~:': { media: `(min-width:480px)`, selector: `html &` },
  'md~:': { media: `(min-width:768px)`, selector: `html &` },
  'lg~:': { media: `(min-width:1024px)`, selector: `html &` },
  'xl~:': { media: `(min-width:1280px)`, selector: `html &` },

  '~sm:': { media: `(max-width:479.98px)`, selector: `html &` },
  '~md:': { media: `(max-width:767.98px)`, selector: `html &` },
  '~lg:': { media: `(max-width:1023.98px)`, selector: `html &` },
  '~xl:': { media: `(max-width:1279.98px)`, selector: `html &` },

  'mobile:': { media: `(max-device-width:767.98px)`, selector: `html &` },
  'tablet:': {
    media: `(min-device-width:768px) and (max-device-width:1023.98px)`,
    selector: `html &`,
  },
  'desktop:': { media: `(min-device-width:1024px)`, selector: `html &` },
  '!mobile:': { media: `(min-device-width:768px)`, selector: `html &` },
  '!desktop:': { media: `(max-device-width:1023.98px)`, selector: `html &` },

  // "touch:":{media:`(hover:none)`,selector:`html &`},
  // "!touch:":{media:`(hover:hover)`,selector:`html &`},

  // @TBD: don't use it!
  'touch:': { media: `(max-device-width:1023.98px)`, selector: `html &` },
  '!touch:': { media: `(min-device-width:1024px)`, selector: `html &` },

  'portrait:': { media: `(orientation:portrait)`, selector: `html &` },
  'landscape:': { media: `(orientation:landscape)`, selector: `html &` },

  'print:': { media: `print`, selector: `html &` },
  'screen:': { media: `screen`, selector: `html &` },
  'speech:': { media: `speech`, selector: `html &` },

  // dark:@TBD
  'dark:': { selector: `@media(prefers-color-scheme:dark){html &{...}}\nhtml.dark &{...}` },
}

export const AT_RULE = {
  '@w': (ident: string, tokens: Array<{ type: string; value: string }>) => {
    if (tokens[2]?.value !== '(' || tokens[tokens.length - 1]?.value !== ')') {
      throw Error('invalid syntax!')
    }

    const value = tokens
      .slice(3, -1)
      .map((t) => t.value)
      .join('')
    if (!value.includes('~')) {
      throw Error("invalid syntax! required '~'.")
    }

    let [min, max] = value.split('~')

    if (min) min = `(min-width:${px(+min)})`
    if (max) max = `(max-width:${px(+max - 0.02)})`
    const rule = [min, max].filter(Boolean).join(' and ')

    return { media: ` only screen and ${rule}`, selector: `html &` }
  },
}

// selector
export const PREFIX_SELECTOR: Record<string, (selector: string) => string> = {
  '>>': (selector: string) => `& ${selector.slice(2)}`,
  '&:': (selector: string) => `${selector}`,
  '&.': (selector: string) => `${selector}`,
  '&[': (selector: string) => `${selector}`,
  '.': (selector: string) => `&${selector},${selector} &`,
  '[': (selector: string) => `&${selector},${selector} &`,
  '>': (selector: string) => `&${selector}`,
  '+': (selector: string) => `&${selector}`,
  '#': (selector: string) => `&${selector}`,
}

// "~": (selector:string) => `&${selector}`,
