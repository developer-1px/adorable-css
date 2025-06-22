interface Token {
    type: string;
    image: string;
}
export declare const createTokenizer: (lex: [string, RegExp][]) => (script: string) => Token[];
export declare const createParser: (tokens: Token[]) => {
    peek: () => Token | null;
    consume: (typeOrValue: string) => Token;
    options: <T>(...parsers: Array<() => T>) => T;
    many: <T>(parser: () => T) => T[];
    many1: <T>(parser: () => T) => T[];
    many_sep: <T, S>(parser: () => T, sepParser: () => S) => Array<T | S>;
    many1_sep: <T, S>(parser: () => T, sepParser: () => S) => Array<T | S>;
    optional: <T>(parser: () => T) => T | null;
    eof: (v: unknown) => unknown;
    getPos: () => number;
};
export {};
//# sourceMappingURL=core.d.ts.map