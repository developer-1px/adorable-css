import type { PrefixRules, Rules } from "./atomizer";
export declare const reset = "\n:where(*,:after,:before){margin:0;padding:0;font:inherit;color:inherit;box-sizing:border-box;}\n:where(:root){-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}\n:where(html,body){height:100%;}\n:where(img,picture,video,canvas){display:block;max-width:100%;}\n:where(img){text-indent:-9999px;}\n:where(button){background:none;border:0;cursor:pointer;}\n:where(a){text-decoration:none;}\n:where(table){border-collapse:collapse;border-spacing:0;}\n:where(ol,ul,menu,dir){list-style:none;}\n:where(*,:after,:before){--w-grow:initial;--w-align:initial;--h-grow:initial;--h-align:initial;}\n:where(*,:after,:before){\n--a-translate-x:0;\n--a-translate-y:0;\n--a-rotate:0;\n--a-skew-x:0;\n--a-skew-y:0;\n--a-scale-x:1;\n--a-scale-y:1;\n--a-transform: translateX(var(--a-translate-x)) translateY(var(--a-translate-y)) rotate(var(--a-rotate)) skewX(var(--a-skew-x)) skewY(var(--a-skew-y)) scaleX(var(--a-scale-x)) scaleY(var(--a-scale-y));\n--a-transform3d: translate3d(var(--a-translate-x),var(--a-translate-y),0) rotate(var(--a-rotate)) skewX(var(--a-skew-x)) skewY(var(--a-skew-y)) scaleX(var(--a-scale-x)) scaleY(var(--a-scale-y));\n}\n";
export declare const RULES: Rules;
export declare const PREFIX_PSEUDO_CLASS: PrefixRules;
export declare const PREFIX_MEDIA_QUERY: PrefixRules;
export declare const AT_RULE: {
    "@w": (ident: string, tokens: Array<{
        type: string;
        value: string;
    }>) => {
        media: string;
        selector: string;
    };
};
export declare const PREFIX_SELECTOR: Record<string, (selector: string) => string>;
//# sourceMappingURL=rules.d.ts.map