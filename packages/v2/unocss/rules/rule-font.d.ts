export declare const makeFontFamily: (value: string) => {
    'font-family': string;
};
export declare const RULES_FONT_BASIC: {
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
};
export declare const RULES_FONT_ADVANCED: {
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
};
export declare const RULES_FONT_UNOCSS: {
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
};
//# sourceMappingURL=rule-font.d.ts.map