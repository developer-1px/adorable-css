export declare const splitValues: (value: string, project?: (value: string | number) => string | number) => (string | number)[];
export declare const makeValues: (value: string, project?: (value: string | number) => string | number) => string;
export declare const makeCommaValues: (value: string, project?: (value: string | number) => string | number) => string;
export declare const makeSide: (value: string) => string;
export declare const makeRatio: (value: string) => string;
export declare const makeNumber: (num: number) => string;
export declare const cssvar: (value: string | number) => string | number;
export declare const cssString: (value: string | number) => string;
export declare const px: (value: string | number) => string | number;
export declare const deg: (value: string | number) => string | number;
export declare const rpx: (value: string | number) => string | number;
export declare const percentToEm: (value: string) => string | number;
export declare const makeHEX: (value: string) => string;
export declare const makeHLS: (value: string) => string;
export declare const makeRGB: (value: string) => string;
export declare const makeColor: (value?: string) => string;
export declare const makeBorder: (value: string) => string;
export declare const makeTransition: (value: string) => string;
export declare const makePosition1: (value: string) => string;
export declare const makePosition2X: (x: string) => {
    left: string;
    transform: string;
} | {
    right?: string | number | undefined;
    left?: string | number | undefined;
    transform?: undefined;
};
export declare const makePosition2Y: (y: string) => {
    top: string;
    transform: string;
} | {
    bottom?: string | number | undefined;
    top?: string | number | undefined;
    transform?: undefined;
};
export declare const makePosition2: (x: any, y: any) => {
    top: string;
    transform: string;
    left: string;
} | {
    bottom?: string | number | undefined;
    top?: string | number | undefined;
    transform: string;
    left: string;
} | {
    top: string;
    transform: string;
    right?: string | number | undefined;
    left?: string | number | undefined;
} | {
    bottom?: string | number | undefined;
    top?: string | number | undefined;
    transform?: undefined;
    right?: string | number | undefined;
    left?: string | number | undefined;
};
//# sourceMappingURL=makeValue.d.ts.map