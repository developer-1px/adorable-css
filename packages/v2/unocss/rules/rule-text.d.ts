export declare const RULES_TEXT_UNOCSS: {
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
};
//# sourceMappingURL=rule-text.d.ts.map