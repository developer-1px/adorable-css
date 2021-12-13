import { Plugin } from 'vite';

declare type Rules = Record<string, (value?: string) => string>;
declare type PrefixProps = {
    media?: string;
    selector?: string;
    postCSS?: Function;
};
declare type PrefixRules = Record<string, PrefixProps>;
declare const createGenerateCss: (rules?: Rules, prefixRules?: PrefixRules) => (classList: string[]) => string[];
declare const generateCss: (classList: string[]) => string[];

declare const makeNumber: (num: number) => string;
declare const cssvar: (value: string) => string;
declare const px: (value: string | number) => string | number;
declare const percentToEm: (value: string) => string;
declare const makeHEX: (value: string) => string;
declare const makeHLS: (value: string) => string;
declare const makeRGB: (value: string) => string;
declare const makeColor: (value?: string) => string;
declare const makeFont: (value: string) => string;
declare const makeBorder: (value: string) => string;
declare const makeValues: (value: string, project?: (a: string) => string | number) => string;
declare const makeCommaValues: (value: string, project?: (a: string) => string | number) => string;
declare const makeSide: (value: string) => string;
declare const makeRatio: (value: string) => string;
declare const makeHBox: (value?: string) => string;
declare const makeVBox: (value?: string) => string;
declare const makeTransition: (value: string) => string;

declare const parseAtoms: (code: string) => string[];

interface Config {
    include: string[];
    rules: Rules;
    prefixRules: PrefixRules;
}
declare const adorableCSS: (config?: Partial<Config>) => Plugin[];

export { adorableCSS, createGenerateCss, cssvar, generateCss, makeBorder, makeColor, makeCommaValues, makeFont, makeHBox, makeHEX, makeHLS, makeNumber, makeRGB, makeRatio, makeSide, makeTransition, makeVBox, makeValues, parseAtoms, percentToEm, px };
