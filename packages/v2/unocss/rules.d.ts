export declare const reset = "\n:where(*,:after,:before){margin:0;padding:0;font:inherit;color:inherit;box-sizing:border-box;}\n:where(:root){-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}\n:where(html,body){height:100%;}\n:where(img,picture,video,canvas){display:block;max-width:100%;height:auto;}\n:where(img){text-indent:-9999px;}\n:where(button){background:none;border:0;cursor:pointer;}\n:where(a){text-decoration:none;}\n:where(table){border-collapse:collapse;border-spacing:0;}\n:where(ol,ul,menu,dir,summary){list-style:none;}\n";
export declare const RULES_FOR_UNOCSS: {
    "border-box": () => {
        "box-sizing": string;
    };
    "content-box": () => {
        "box-sizing": string;
    };
    m: (value: string) => {
        margin: string;
    };
    mx: (value: string) => {
        "margin-left": string | number;
        "margin-right": string | number;
    };
    my: (value: string) => {
        "margin-top": string | number;
        "margin-bottom": string | number;
    };
    mt: (value: string) => {
        "margin-top": string | number;
    };
    mr: (value: string) => {
        "margin-right": string | number;
    };
    mb: (value: string) => {
        "margin-bottom": string | number;
    };
    ml: (value: string) => {
        "margin-left": string | number;
    };
    p: (value: string) => {
        padding: string;
    };
    px: (value: string) => {
        "padding-left": string | number;
        "padding-right": string | number;
    };
    py: (value: string) => {
        "padding-top": string | number;
        "padding-bottom": string | number;
    };
    pt: (value: string) => {
        "padding-top": string | number;
    };
    pr: (value: string) => {
        "padding-right": string | number;
    };
    pb: (value: string) => {
        "padding-bottom": string | number;
    };
    pl: (value: string) => {
        "padding-left": string | number;
    };
    "no-border": () => {
        border: string;
        outline: string;
    };
    b: (value: string) => {
        border: string;
    };
    bx: (value: string) => {
        "border-left": string;
        "border-right": string;
    };
    by: (value: string) => {
        "border-top": string;
        "border-bottom": string;
    };
    bt: (value: string) => {
        "border-top": string;
    };
    br: (value: string) => {
        "border-right": string;
    };
    bb: (value: string) => {
        "border-bottom": string;
    };
    bl: (value: string) => {
        "border-left": string;
    };
    bw: (value: string) => {
        "border-width": string;
    };
    bxw: (value: string) => {
        "border-left-width": string | number;
        "border-right-width": string | number;
    };
    byw: (value: string) => {
        "border-top-width": string | number;
        "border-bottom-width": string | number;
    };
    btw: (value: string) => {
        "border-top-width": string | number;
    };
    brw: (value: string) => {
        "border-right-width": string | number;
    };
    bbw: (value: string) => {
        "border-bottom-width": string | number;
    };
    blw: (value: string) => {
        "border-left-width": string | number;
    };
    bs: (value: string) => {
        "border-style": string;
    };
    bxs: (value: string) => {
        "border-left-style": string | number;
        "border-right-style": string | number;
    };
    bys: (value: string) => {
        "border-top-style": string | number;
        "border-bottom-style": string | number;
    };
    bts: (value: string) => {
        "border-top-style": string | number;
    };
    brs: (value: string) => {
        "border-right-style": string | number;
    };
    bbs: (value: string) => {
        "border-bottom-style": string | number;
    };
    bls: (value: string) => {
        "border-left-style": string | number;
    };
    bc: (value: string) => {
        "border-color": string;
    };
    bxc: (value: string) => {
        "border-left-color": string;
        "border-right-color": string;
    };
    byc: (value: string) => {
        "border-top-color": string;
        "border-bottom-color": string;
    };
    btc: (value: string) => {
        "border-top-color": string;
    };
    brc: (value: string) => {
        "border-right-color": string;
    };
    bbc: (value: string) => {
        "border-bottom-color": string;
    };
    blc: (value: string) => {
        "border-left-color": string;
    };
    outline: (value: string) => {
        outline: string;
    };
    r: (value: string) => {
        "border-radius": string;
    };
    rt: (value: string) => {
        "border-top-left-radius": string | number;
        "border-top-right-radius": string | number;
    };
    rr: (value: string) => {
        "border-top-right-radius": string | number;
        "border-bottom-right-radius": string | number;
    };
    rb: (value: string) => {
        "border-bottom-left-radius": string | number;
        "border-bottom-right-radius": string | number;
    };
    rl: (value: string) => {
        "border-top-left-radius": string | number;
        "border-bottom-left-radius": string | number;
    };
    rtl: (value: string) => {
        "border-top-left-radius": string | number;
    };
    rtr: (value: string) => {
        "border-top-right-radius": string | number;
    };
    rbr: (value: string) => {
        "border-bottom-right-radius": string | number;
    };
    rbl: (value: string) => {
        "border-bottom-left-radius": string | number;
    };
    ring: (value: string) => {
        "box-shadow": string;
    };
    "box-shadow": (value: string) => {
        "box-shadow": string;
    };
    bg: (value: string) => {
        background: string;
        "background-image"?: undefined;
    } | {
        "background-image": string;
        background?: undefined;
    };
    "bg-image": (value: string) => {
        "background-image": string;
    };
    "background-image": (value: string) => {
        "background-image": string;
    };
    "bg-position": (value: string) => {
        "background-position": string;
    };
    "bg-repeat-x": () => {
        "background-repeat": string;
    };
    "bg-repeat-y": () => {
        "background-repeat": string;
    };
    "bg-no-repeat": () => {
        "background-repeat": string;
    };
    "bg-fixed": () => {
        "background-attachment": string;
    };
    "bg-scroll": () => {
        "background-attachment": string;
    };
    contain: () => {
        "background-size": string;
        "background-position": string;
        "background-repeat": string;
        "object-fit": string;
    };
    cover: () => {
        "background-size": string;
        "background-position": string;
        "background-repeat": string;
        "object-fit": string;
    };
    scroll: (value?: string) => {
        "scroll-behavior": string;
        'overflow-x'?: undefined;
        'overflow-y'?: undefined;
        overflow?: undefined;
    } | {
        "overflow-x": string;
        "overflow-y": string;
        "scroll-behavior"?: undefined;
        overflow?: undefined;
    } | {
        overflow: string;
        "scroll-behavior"?: undefined;
        'overflow-x'?: undefined;
        'overflow-y'?: undefined;
    };
    scrollbar: (value: string) => {
        "scrollbar-width": string;
    } | {
        "scrollbar-width"?: undefined;
    };
    "no-scrollbar": () => string;
    "no-scrollbar-x": () => string;
    "scroll-m": (value: string) => {
        "scroll-margin": string;
    };
    "scroll-mt": (value: string) => {
        "scroll-margin-top": string | number;
    };
    "scroll-mr": (value: string) => {
        "scroll-margin-right": string | number;
    };
    "scroll-mb": (value: string) => {
        "scroll-margin-bottom": string | number;
    };
    "scroll-ml": (value: string) => {
        "scroll-margin-left": string | number;
    };
    "scroll-p": (value: string) => {
        "scroll-padding": string;
    };
    "scroll-pt": (value: string) => {
        "scroll-padding-top": string | number;
    };
    "scroll-pr": (value: string) => {
        "scroll-padding-right": string | number;
    };
    "scroll-pb": (value: string) => {
        "scroll-padding-bottom": string | number;
    };
    "scroll-pl": (value: string) => {
        "scroll-padding-left": string | number;
    };
    snap: (value: string) => {
        "scroll-snap-align": string | number;
    };
    "snap-start": () => {
        "scroll-snap-align": string;
    };
    "snap-end": () => {
        "scroll-snap-align": string;
    };
    "snap-center": () => {
        "scroll-snap-align": string;
    };
    "snap-align-none": () => {
        "scroll-snap-align": string;
    };
    "snap-none": () => {
        "scroll-snap-type": string;
    };
    "snap-x": () => {
        "scroll-snap-type": string;
    };
    "snap-x-proximity": () => {
        "scroll-snap-type": string;
    };
    "snap-y": () => {
        "scroll-snap-type": string;
    };
    "snap-y-proximity": () => {
        "scroll-snap-type": string;
    };
    "snap-both": () => {
        "scroll-snap-type": string;
    };
    "snap-both-proximity": () => {
        "scroll-snap-type": string;
    };
    "snap-mandatory": () => {
        "--a-scroll-snap-strictness": string;
    };
    "snap-proximity": () => {
        "--a-scroll-snap-strictness": string;
    };
    "snap-normal": () => {
        "scroll-snap-stop": string;
    };
    "snap-always": () => {
        "scroll-snap-stop": string;
    };
    overscroll: (value: string) => {
        "overscroll-behavior": string;
    };
    "overscroll-x": (value: string) => {
        "overscroll-behavior-x": string;
    };
    "overscroll-y": (value: string) => {
        "overscroll-behavior-y": string;
    };
    "no-bouncing": () => string;
    "no-overscroll": () => string;
    grid: (value: any) => string;
    "grid-cols": (value: any) => string;
    "inline-grid": () => string;
    isolate: () => string;
    opacity: (value: string) => {
        opacity: string | number;
    };
    "col-resize": () => {
        cursor: string;
    };
    crosshair: () => {
        cursor: string;
    };
    "e-resize": () => {
        cursor: string;
    };
    "ew-resize": () => {
        cursor: string;
    };
    grab: () => string;
    grabbing: () => {
        cursor: string;
    };
    "n-resize": () => {
        cursor: string;
    };
    "ne-resize": () => {
        cursor: string;
    };
    "nesw-resize": () => {
        cursor: string;
    };
    "ns-resize": () => {
        cursor: string;
    };
    "nw-resize": () => {
        cursor: string;
    };
    "nwse-resize": () => {
        cursor: string;
    };
    "not-allowed": () => {
        cursor: string;
    };
    pointer: () => {
        cursor: string;
    };
    progress: () => {
        cursor: string;
    };
    "row-resize": () => {
        cursor: string;
    };
    "s-resize": () => {
        cursor: string;
    };
    "se-resize": () => {
        cursor: string;
    };
    "sw-resize": () => {
        cursor: string;
    };
    "w-resize": () => {
        cursor: string;
    };
    "zoom-in": () => {
        cursor: string;
    };
    "zoom-out": () => {
        cursor: string;
    };
    cursor: (value: string) => {
        cursor: string;
    };
    "user-select-none": () => {
        "user-select": string;
        "-webkit-user-select": string;
    };
    "user-select-all": () => {
        "user-select": string;
        "-webkit-user-select": string;
    };
    "user-select-auto": () => {
        "user-select": string;
        "-webkit-user-select": string;
    };
    "user-select-text": () => {
        "user-select": string;
        "-webkit-user-select": string;
    };
    "user-select": (value: string) => {
        "user-select": string | number;
        "-webkit-user-select": string | number;
    };
    "pointer-events-none": () => {
        "pointer-events": string;
    };
    "pointer-events-auto": () => {
        "pointer-events": string;
    };
    transition: (value: string) => {
        transition: string;
    };
    translate: (value: string) => {
        "--a-transform-translate-x": string;
        "--a-transform-translate-y": string;
        transform: string;
    };
    translateX: (value: string) => {
        "--a-translate-x": string | number;
        transform: string;
    };
    translateY: (value: string) => {
        "--a-translate-y": string | number;
        transform: string;
    };
    rotate: (value: string) => {
        "--a-rotate": string;
        "--a-rotate-x": string;
        "--a-rotate-y": string;
        "--a-rotate-z": string;
        transform: string;
    };
    rotateX: (value: string) => {
        "--a-rotate-x": string | number;
        transform: string;
    };
    rotateY: (value: string) => {
        "--a-rotate-y": string | number;
        transform: string;
    };
    scale: (value: string) => {
        "--a-scale-x": string;
        "--a-scale-y": string;
        "--a-scale-z": string;
        transform: string;
    };
    scaleX: (value: string) => {
        "--a-scale-x": string;
        transform: string;
    };
    scaleY: (value: string) => {
        "--a-scale-y": string;
        transform: string;
    };
    skew: (value: string) => {
        "--a-skew-x": string;
        "--a-skew-y": string;
        transform: string;
    };
    skewX: (value: string) => {
        "--a-skew-x": string | number;
        transform: string;
    };
    skewY: (value: string) => {
        "--a-skew-y": string | number;
        transform: string;
    };
    matrix: (value: string) => {
        transform: string;
    };
    gpu: () => string;
    "app-region": (value: string) => string;
    "clip-path": (value: string) => string;
    "table-fixed": () => {
        tableLayout: string;
    };
    "table-auto": () => {
        tableLayout: string;
    };
    "table-layout-fixed": () => {
        tableLayout: string;
    };
    "table-layout-auto": () => {
        tableLayout: string;
    };
    blur: (value: string) => string;
    brightness: (value: string) => string;
    contrast: (value: string) => string;
    "drop-shadow": (value: string) => string;
    grayscale: (value: string) => string;
    "hue-rotate": (value: string) => string;
    invert: (value: string) => string;
    sepia: (value: string) => string;
    saturate: (value: string) => string;
    "backdrop-blur": (value: string) => string;
    "backdrop-brightness": (value: string) => string;
    "backdrop-contrast": (value: string) => string;
    "backdrop-drop-shadow": (value: string) => string;
    "backdrop-grayscale": (value: string) => string;
    "backdrop-hue-rotate": (value: string) => string;
    "backdrop-invert": (value: string) => string;
    "backdrop-sepia": (value: string) => string;
    "backdrop-saturate": (value: string) => string;
    o: (value: string) => {
        outline: string;
    };
    shadow: (value: string) => {
        "box-shadow": any;
    };
    triangle: (value: string) => string;
    elevation: (value: string) => string;
    debug: () => Generator<{
        outline: string;
        "outline-offset": string;
    }, void, unknown>;
    layer: (value?: string) => Record<string, string>;
    absolute: (value?: string) => {
        position: string;
    };
    relative: (value?: string) => {
        position: string;
    };
    sticky: (value?: string) => {
        position: string;
    };
    'sticky-top': (value?: number) => {
        position: string;
        top: string | number;
    };
    'sticky-right': (value?: number) => {
        position: string;
        right: string | number;
    };
    'sticky-bottom': (value?: number) => {
        position: string;
        bottom: string | number;
    };
    'sticky-left': (value?: number) => {
        position: string;
        left: string | number;
    };
    fixed: (value?: string) => {
        position: string;
    };
    static: () => {
        position: string;
    };
    top: (value: string) => {
        top: string | number;
    };
    left: (value: string) => {
        left: string | number;
    };
    right: (value: string) => {
        right: string | number;
    };
    bottom: (value: string) => {
        bottom: string | number;
    };
    x: (value: string) => {
        left: string;
        transform: string;
    } | {
        right?: string | number | undefined;
        left?: string | number | undefined;
        transform?: undefined;
    };
    y: (value: string) => {
        top: string;
        transform: string;
    } | {
        bottom?: string | number | undefined;
        top?: string | number | undefined;
        transform?: undefined;
    };
    z: (value: string) => {
        'z-index': string | number;
    };
    block: () => {
        display: string;
    };
    'inline-block': () => {
        display: string;
    };
    inline: () => {
        display: string;
    };
    'inline-flex': () => {
        display: string;
    };
    table: () => {
        display: string;
    };
    'inline-table': () => {
        display: string;
    };
    'table-caption': () => {
        display: string;
    };
    'table-cell': () => {
        display: string;
    };
    'table-column': () => {
        display: string;
    };
    'table-column-group': () => {
        display: string;
    };
    'table-footer-group': () => {
        display: string;
    };
    'table-header-group': () => {
        display: string;
    };
    'table-row-group': () => {
        display: string;
    };
    'table-row': () => {
        display: string;
    };
    'flow-root': () => {
        display: string;
    };
    contents: () => {
        display: string;
    };
    'list-item': () => {
        display: string;
    };
    none: () => {
        display: string;
    };
    hidden: () => {
        visibility: string;
    };
    invisible: () => {
        visibility: string;
    };
    blind: () => {
        position: string;
        width: string;
        height: string;
        padding: string;
        border: string;
        margin: string;
        'white-space': string;
        overflow: string;
        'clip-path': string;
    };
    'sr-only': () => {
        position: string;
        width: string;
        height: string;
        padding: string;
        border: string;
        margin: string;
        'white-space': string;
        overflow: string;
        'clip-path': string;
    };
    gone: () => {
        position: string;
        width: string;
        height: string;
        padding: string;
        border: string;
        margin: string;
        'white-space': string;
        overflow: string;
        'clip-path': string;
    };
    clip: () => Generator<{
        overflow: string;
        'flex-shrink'?: undefined;
    } | {
        [x: number]: (s: string) => string;
        'flex-shrink': string;
        overflow?: undefined;
    }, void, unknown>;
    text: (value?: string) => Generator<{
        'text-align': string;
        display?: undefined;
        'flex-flow'?: undefined;
        'justify-content'?: undefined;
        'align-items'?: undefined;
    } | {
        display: string;
        'text-align'?: undefined;
        'flex-flow'?: undefined;
        'justify-content'?: undefined;
        'align-items'?: undefined;
    } | {
        'flex-flow': string;
        'text-align'?: undefined;
        display?: undefined;
        'justify-content'?: undefined;
        'align-items'?: undefined;
    } | {
        'justify-content': string;
        'text-align'?: undefined;
        display?: undefined;
        'flex-flow'?: undefined;
        'align-items'?: undefined;
    } | {
        'align-items': string;
        'justify-content': string;
        'text-align'?: undefined;
        display?: undefined;
        'flex-flow'?: undefined;
    }, void, unknown>;
    'white-space-normal': () => {
        'white-space': string;
    };
    pre: () => {
        'white-space': string;
    };
    'pre-wrap': () => {
        'white-space': string;
    };
    'pre-line': () => {
        'white-space': string;
    };
    'break-spaces': () => {
        'white-space': string;
    };
    nowrap: () => {
        'white-space': string;
        width: string;
    };
    'nowrap...': () => {
        'white-space': string;
        'max-width': string;
        'flex-shrink': string;
        overflow: string;
        'text-overflow': string;
    };
    'max-lines': (value: string) => Generator<{
        overflow: string;
        display: string;
        '-webkit-box-orient': string;
        '-webkit-line-clamp'?: undefined;
    } | {
        '-webkit-line-clamp': string;
        overflow?: undefined;
        display?: undefined;
        '-webkit-box-orient'?: undefined;
    }, void, unknown>;
    'line-clamp': (value: string) => Generator<{
        overflow: string;
        display: string;
        '-webkit-box-orient': string;
        '-webkit-line-clamp'?: undefined;
    } | {
        '-webkit-line-clamp': string;
        overflow?: undefined;
        display?: undefined;
        '-webkit-box-orient'?: undefined;
    }, void, unknown>;
    'text-indent': (value: string) => {
        'text-indent': string | number;
    };
    'keep-all': () => {
        'word-break': string;
    };
    'break-all': () => {
        'word-break': string;
    };
    'break-word': () => {
        'overflow-wrap': string;
    };
    hyphens: (value?: string) => {
        hyphens: string;
    };
    'vertical-top': () => {
        'vertical-align': string;
    };
    'vertical-middle': () => {
        'vertical-align': string;
    };
    'vertical-bottom': () => {
        'vertical-align': string;
    };
    sub: () => {
        'vertical-align': string;
    };
    super: () => {
        'vertical-align': string;
    };
    'text-top': () => {
        'vertical-align': string;
    };
    'text-bottom': () => {
        'vertical-align': string;
    };
    'font-size': (value: string) => {
        'font-size': string | number;
    };
    'line-height': (value: string) => {
        'line-height': string | number;
    };
    'letter-spacing': (value: string) => {
        'letter-spacing': string | number;
    };
    'word-spacing': (value: string) => {
        'word-spacing': string | number;
    };
    thicker: (value?: string) => string;
    color: (value: string) => {
        color: string;
        background?: undefined;
        '-webkit-background-clip'?: undefined;
        '-webkit-text-fill-color'?: undefined;
    } | {
        background: string;
        '-webkit-background-clip': string;
        '-webkit-text-fill-color': string;
        color?: undefined;
    };
    caret: (value: string) => {
        'caret-color': string;
    };
    'caret-current': () => {
        'caret-color': string;
    };
    sans: () => {
        'font-family': string;
    };
    'sans-serif': () => {
        'font-family': string;
    };
    serif: () => {
        'font-family': string;
    };
    cursive: () => {
        'font-family': string;
    };
    fantasy: () => {
        'font-family': string;
    };
    'system-ui': () => {
        'font-family': string;
    };
    AppleSD: () => {
        'font-family': string;
    };
    Roboto: () => {
        'font-family': string;
    };
    font: (value: string) => Generator<{
        'font-size': string | number;
    } | {
        'font-family': string | number;
    } | {
        'line-height': string | number;
    } | {
        'letter-spacing': string | number;
    } | {
        'font-weight': string | number;
    }, void, unknown>;
    '100': () => {
        'font-weight': number;
    };
    '200': () => {
        'font-weight': number;
    };
    '300': () => {
        'font-weight': number;
    };
    '400': () => {
        'font-weight': number;
    };
    '500': () => {
        'font-weight': number;
    };
    '600': () => {
        'font-weight': number;
    };
    '700': () => {
        'font-weight': number;
    };
    '800': () => {
        'font-weight': number;
    };
    '900': () => {
        'font-weight': number;
    };
    thin: () => {
        'font-weight': number;
    };
    light: () => {
        'font-weight': number;
    };
    regular: () => {
        'font-weight': string;
    };
    medium: () => {
        'font-weight': number;
    };
    semibold: () => {
        'font-weight': number;
    };
    bold: () => {
        'font-weight': string;
    };
    heavy: () => {
        'font-weight': number;
    };
    c: (value: string) => {
        color: string;
        background?: undefined;
        '-webkit-background-clip'?: undefined;
        '-webkit-text-fill-color'?: undefined;
    } | {
        background: string;
        '-webkit-background-clip': string;
        '-webkit-text-fill-color': string;
        color?: undefined;
    };
    italic: () => {
        'font-style': string;
    };
    underline: () => {
        'text-decoration': string;
    };
    'line-through': () => {
        'text-decoration': string;
    };
    strike: () => {
        'text-decoration': string;
    };
    del: () => {
        'text-decoration': string;
    };
    overline: () => {
        'text-decoration': string;
    };
    'small-caps': () => {
        'font-variant-caps': string;
    };
    'all-small-caps': () => {
        'font-variant-caps': string;
    };
    'slashed-zero': () => {
        'font-variant-numeric': string;
    };
    'tabular-nums': () => {
        'font-variant-numeric': string;
    };
    lowercase: () => {
        'text-transform': string;
    };
    uppercase: () => {
        'text-transform': string;
    };
    capitalize: () => {
        'text-transform': string;
    };
    monospace: (value: string) => {
        'font-family': string;
    } | {
        'font-variant-numeric': string;
    };
    w: (value: string) => Generator<{
        'max-width'?: string | number | undefined;
        'min-width'?: string | number | undefined;
    } | {
        width: string | number;
        'max-width'?: string | number | undefined;
        'min-width'?: string | number | undefined;
    }, void, unknown>;
    h: (value: string) => Generator<{
        'max-height'?: string | number | undefined;
        'min-height'?: string | number | undefined;
    } | {
        height: string | number;
        'max-height'?: string | number | undefined;
        'min-height'?: string | number | undefined;
    }, void, unknown>;
    'min-w': (value: string) => {
        'min-width': string | number;
    };
    'max-w': (value: string) => {
        'max-width': string | number;
    };
    'min-h': (value: string) => {
        'min-height': string | number;
    };
    'max-h': (value: string) => {
        'max-height': string | number;
    };
    hbox: (value?: string) => Generator<{
        display: string;
        'flex-flow': string;
        'align-items'?: undefined;
        'justify-content'?: undefined;
    } | {
        'align-items': "center" | "stretch";
        display?: undefined;
        'flex-flow'?: undefined;
        'justify-content'?: undefined;
    } | {
        'justify-content': any;
        display?: undefined;
        'flex-flow'?: undefined;
        'align-items'?: undefined;
    } | {
        [x: number]: number | ((s: string) => string);
        flex: string;
        position: string;
        'align-self'?: undefined;
    } | {
        [x: number]: (s: string) => string;
        flex: string;
        position?: undefined;
        'align-self'?: undefined;
    } | {
        [x: number]: (s: string) => string;
        'align-self': string;
        flex?: undefined;
        position?: undefined;
    }, void, unknown>;
    vbox: (value?: string) => Generator<{
        display: string;
        'flex-flow': string;
        'align-items'?: undefined;
        'justify-content'?: undefined;
    } | {
        'align-items': "center" | "stretch";
        display?: undefined;
        'flex-flow'?: undefined;
        'justify-content'?: undefined;
    } | {
        'justify-content': any;
        display?: undefined;
        'flex-flow'?: undefined;
        'align-items'?: undefined;
    } | {
        [x: number]: number | ((s: string) => string);
        flex: string;
        position: string;
        'align-self'?: undefined;
    } | {
        [x: number]: (s: string) => string;
        flex: string;
        position?: undefined;
        'align-self'?: undefined;
    } | {
        [x: number]: (s: string) => string;
        'align-self': string;
        flex?: undefined;
        position?: undefined;
    } | {
        [x: number]: (s: string) => string;
        'align-items': string;
    }, void, unknown>;
    wrap: (value?: string) => Generator<{
        display: string;
        'flex-flow': string;
        'align-items'?: undefined;
        'justify-content'?: undefined;
    } | {
        'align-items': "center" | "stretch";
        display?: undefined;
        'flex-flow'?: undefined;
        'justify-content'?: undefined;
    } | {
        'justify-content': any;
        display?: undefined;
        'flex-flow'?: undefined;
        'align-items'?: undefined;
    } | {
        [x: number]: number | ((s: string) => string);
        flex: string;
        position: string;
        'align-self'?: undefined;
    } | {
        [x: number]: (s: string) => string;
        flex: string;
        position?: undefined;
        'align-self'?: undefined;
    } | {
        [x: number]: (s: string) => string;
        'align-self': string;
        flex?: undefined;
        position?: undefined;
    }, void, unknown>;
    pack: () => Generator<{
        display: string;
        'flex-flow': string;
        'align-items'?: undefined;
        'justify-content'?: undefined;
    } | {
        'align-items': "center" | "stretch";
        display?: undefined;
        'flex-flow'?: undefined;
        'justify-content'?: undefined;
    } | {
        'justify-content': any;
        display?: undefined;
        'flex-flow'?: undefined;
        'align-items'?: undefined;
    } | {
        [x: number]: number | ((s: string) => string);
        flex: string;
        position: string;
        'align-self'?: undefined;
    } | {
        [x: number]: (s: string) => string;
        flex: string;
        position?: undefined;
        'align-self'?: undefined;
    } | {
        [x: number]: (s: string) => string;
        'align-self': string;
        flex?: undefined;
        position?: undefined;
    }, void, unknown>;
    gap: (value: string) => Generator<{
        'justify-content': string;
        'align-content': string;
        margin?: undefined;
        'grid-gap'?: undefined;
        gap?: undefined;
    } | {
        [x: number]: (s: string) => string;
        margin: string;
        'justify-content'?: undefined;
        'align-content'?: undefined;
        'grid-gap'?: undefined;
        gap?: undefined;
    } | {
        'grid-gap': string;
        gap: string;
        'justify-content'?: undefined;
        'align-content'?: undefined;
        margin?: undefined;
    }, void, unknown>;
    subbox: () => {
        display: string;
        'flex-flow': string;
        'align-items': string;
        'justify-content': string;
    };
    hgap: (value: string) => string;
    'hgap-reverse': (value: string) => string;
    vgap: (value: string) => string;
    'vgap-reverse': (value: string) => string;
    'space-between': () => {
        'justify-content': string;
        'align-content': string;
    };
    'space-around': () => {
        'justify-content': string;
        'align-content': string;
    };
    'space-evenly': () => {
        'justify-content': string;
        'align-content': string;
    };
    space: (value: string) => {
        padding: string | number;
    };
    order: (value: string) => {
        order: string | number;
    };
    flex: (value: string) => {
        flex: string | number;
    };
};
export declare const PREFIX_PSEUDO_CLASS: PrefixRules;
export declare const PREFIX_MEDIA_QUERY: PrefixRules;
export declare const AT_RULE: {
    "@w": (ident: string, tokens: Array<{
        type: string;
        value: string;
    }>) => {
        media: string;
        selector: string;
    };
};
export declare const PREFIX_SELECTOR: Record<string, (selector: string) => string>;
//# sourceMappingURL=rules.d.ts.map