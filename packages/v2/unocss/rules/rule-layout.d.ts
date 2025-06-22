export declare const RULES_AUTO_LAYOUT_UNOCSS: {
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
//# sourceMappingURL=rule-layout.d.ts.map