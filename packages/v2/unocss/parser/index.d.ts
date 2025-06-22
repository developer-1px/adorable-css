export interface ParsedSelector {
    selector: {
        type: string;
        name?: string;
        image: string;
        args?: Array<{
            value: {
                type: string;
                image: string;
            };
        }>;
    };
    combinator?: string;
    image: string;
}
export interface ParsedInput {
    cst: ParsedSelector[];
}
export declare function parseInput(input: string): ParsedInput;
//# sourceMappingURL=index.d.ts.map