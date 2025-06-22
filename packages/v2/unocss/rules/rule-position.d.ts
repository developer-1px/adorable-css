export declare const RULES_POSITION_UNOCSS: {
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
};
//# sourceMappingURL=rule-position.d.ts.map