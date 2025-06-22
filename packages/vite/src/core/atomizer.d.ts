export type Rules = Record<string, (value?: string) => string>;
export type PrefixProps = {
    media?: string;
    selector?: string;
};
export type PrefixRules = Record<string, PrefixProps>;
export declare const parseAtoms: (code: string) => string[];
export declare const tokenize: (script: string) => any[];
export declare const expr: () => any[];
export declare const expr2: (string: string) => any[][];
export declare const createGenerateCss: (rules?: Rules, prefixRules?: PrefixRules) => (classList: string[]) => string[];
export declare const generateCss: (classList: string[]) => string[];
//# sourceMappingURL=atomizer.d.ts.map