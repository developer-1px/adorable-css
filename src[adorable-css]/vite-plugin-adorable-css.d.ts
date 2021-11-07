import { Plugin } from 'vite';

declare type Rules = Record<string, (value?: string) => string>;
declare type PrefixProps = {
    media?: string;
    selector?: string;
    postCSS?: Function;
};
declare type PrefixRules = Record<string, PrefixProps>;

interface Config {
    ext: string[];
    rules: Rules;
    prefixRules: PrefixRules;
}
declare const adorableCSS: (config?: Partial<Config>) => Plugin[];

export { adorableCSS };
