import { cssvar, deg, makeBorder, makeColor, makeCommaValues, makeNumber, makeRatio, makeSide, makeTransition, makeValues, px, rpx, splitValues, percentToEm } from "./values/makeValue"
import { RULES_FONT_UNOCSS } from "./rules/rule-font"
import { RULES_AUTO_LAYOUT_UNOCSS } from "./rules/rule-layout"
import { RULES_TEXT_UNOCSS } from "./rules/rule-text"
import { RULES_DISPLAY_UNOCSS } from "./rules/rule-display"
import { RULES_POSITION_UNOCSS } from "./rules/rule-position"
import { symbols } from "unocss"

export const reset = `
:where(*,:after,:before){margin:0;padding:0;font:inherit;color:inherit;box-sizing:border-box;}
:where(:root){-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
:where(html,body){height:100%;}
:where(img,picture,video,canvas){display:block;max-width:100%;height:auto;}
:where(img){text-indent:-9999px;}
:where(button){background:none;border:0;cursor:pointer;}
:where(a){text-decoration:none;}
:where(table){border-collapse:collapse;border-spacing:0;}
:where(ol,ul,menu,dir,summary){list-style:none;}
`

export const RULES_FOR_UNOCSS = {
	...RULES_AUTO_LAYOUT_UNOCSS,

	...RULES_FONT_UNOCSS,
	...RULES_TEXT_UNOCSS,

	...RULES_DISPLAY_UNOCSS,
	...RULES_POSITION_UNOCSS,

	"c": (value: string) => {
		if (value.startsWith("linear-gradient")) return { background: `${value.replace(/\//g, " ")}`, "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent" }
		if (value.startsWith("radial-gradient")) return { background: `${value.replace(/\//g, " ")}`, "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent" }
		return { color: makeColor(value) }
	},
	"color": (value: string) => RULES_FOR_UNOCSS.c(value),
	"caret": (value: string) => ({ "caret-color": makeColor(value) }),

	// FONT - removed makeFont as it doesn't exist
	"bold": () => ({ "font-weight": 700 }),
	"italic": () => ({ "font-style": "italic" }),
	"underline": () => ({ "text-decoration": "underline" }),
	"strike": () => ({ "text-decoration": "line-through" }),
	"uppercase": () => ({ "text-transform": "uppercase" }),
	"nowrap": () => ({ "white-space": "nowrap" }),
	"max-lines": (value: string) => ({
		"overflow": "hidden",
		"display": "-webkit-box",
		"-webkit-box-orient": "vertical",
		"-webkit-line-clamp": value,
	}),

	// Box-Sizing
	"border-box": () => ({ "box-sizing": "border-box" }),
	"content-box": () => ({ "box-sizing": "content-box" }),

	// BoxModel - Margin
	"m": (value: string) => ({ margin: makeSide(value) }),
	"mx": (value: string) => ({ "margin-left": px(value), "margin-right": px(value) }),
	"my": (value: string) => ({ "margin-top": px(value), "margin-bottom": px(value) }),
	"mt": (value: string) => ({ "margin-top": px(value) }),
	"mr": (value: string) => ({ "margin-right": px(value) }),
	"mb": (value: string) => ({ "margin-bottom": px(value) }),
	"ml": (value: string) => ({ "margin-left": px(value) }),

	// BoxModel - Padding
	"p": (value: string) => ({ padding: makeSide(value) }),
	"px": (value: string) => ({ "padding-left": px(value), "padding-right": px(value) }),
	"py": (value: string) => ({ "padding-top": px(value), "padding-bottom": px(value) }),
	"pt": (value: string) => ({ "padding-top": px(value) }),
	"pr": (value: string) => ({ "padding-right": px(value) }),
	"pb": (value: string) => ({ "padding-bottom": px(value) }),
	"pl": (value: string) => ({ "padding-left": px(value) }),

	// BoxModel - Border
	"b": (value: string) => ({ border: makeBorder(value) }),
	"bt": (value: string) => ({ "border-top": makeBorder(value) }),
	"br": (value: string) => ({ "border-right": makeBorder(value) }),
	"bb": (value: string) => ({ "border-bottom": makeBorder(value) }),
	"bl": (value: string) => ({ "border-left": makeBorder(value) }),
	"o": (value: string) => ({ outline: makeBorder(value) }),

	// border-radius
	"r": (value: string) => ({ "border-radius": makeValues(value, rpx) }),

	// -- Background
	"bg": (value: string) => {
		if (value.startsWith("linear-gradient")) return { background: `${value.replace(/\//g, " ")}` }
		if (value.startsWith("radial-gradient")) return { background: `${value.replace(/\//g, " ")}` }
		if (value.startsWith("url")) return { "background-image": `${value}` }
		if (/^(http|[./])/.test(value)) return { "background-image": `url(${value})` }
		return { "background-color": makeColor(value) }
	},

	// Scroll
	"scroll": (value?: string) => {
		if (value === "smooth") return { "scroll-behavior": "smooth" }
		if (value === "x") return { "overflow-x": "auto", "overflow-y": "hidden" }
		if (value === "y") return { "overflow-y": "auto", "overflow-x": "hidden" }
		return { overflow: "auto" }
	},
	"scrollbar": (value: string) => {
		if (value === "none") return { "scrollbar-width": "none", "::-webkit-scrollbar": { display: "none" } }
		if (value === "thin") return { "scrollbar-width": "thin" }
		return {}
	},

	// -- Transform
	"translate": (value: string) => {
		const [x, y] = splitValues(value)
		return { "transform": `translateX(${px(x)}) translateY(${px(y || x)})` }
	},
	"translateX": (value: string) => ({ "transform": `translateX(${px(value)})` }),
	"translateY": (value: string) => ({ "transform": `translateY(${px(value)})` }),

	"rotate": (value: string) => ({ "transform": `rotate(${deg(value)})` }),

	"scale": (value: string) => {
		const [x, y] = splitValues(value)
		return { "transform": `scale(${x}, ${y || x})` }
	},
	"scaleX": (value: string) => ({ "transform": `scaleX(${cssvar(value)})` }),
	"scaleY": (value: string) => ({ "transform": `scaleY(${cssvar(value)})` }),

	// -- Filter
	"blur": (value: string) => ({ "filter": `blur(${px(value)})` }),
	"opacity": (value: string) => ({ opacity: value }),

	"clip": () => ({ overflow: "hidden" }),

	"shadow": (value: string) => {
		const shadows = {
			sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
			md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
			lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
			xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
		}
		return { "box-shadow": shadows[value] || value }
	},

	// -- Grid
	// @TODO:-- GRID TBD
	"grid": (value) => {
		const css = ["display:grid;"]
		if (+value === +value) css.push(`grid-template-columns:repeat(${value},1fr);`)
		else if (value) css.push(`grid-template-columns:${value};`)
		return css.join("")
	},
	"grid-cols": (value) => {
		const css = ["display:grid;"]
		if (+value === +value) css.push(`grid-template-columns:repeat(${value},1fr);`)
		else if (value) css.push(`grid-template-columns:${value};`)
		return css.join("")
	},
	"inline-grid": () => "display:inline-grid;",

	"isolate": () => `isolation:isolate;`,

	// visible: () => `visibility:visible;`,
	// collapse: () => `visibility:collapse;`,
	"opacity": (value: string) => ({ opacity: cssvar(value) }),

	// Interactions
	"col-resize": () => ({ cursor: "col-resize" }),
	"crosshair": () => ({ cursor: "crosshair" }),
	"e-resize": () => ({ cursor: "e-resize" }),
	"ew-resize": () => ({ cursor: "ew-resize" }),
	// @TODO
	"grab": () => `&{cursor:grab;}&:active{cursor:grabbing;}`,
	"grabbing": () => ({ cursor: "grabbing" }),
	"n-resize": () => ({ cursor: "n-resize" }),
	"ne-resize": () => ({ cursor: "ne-resize" }),
	"nesw-resize": () => ({ cursor: "nesw-resize" }),
	"ns-resize": () => ({ cursor: "ns-resize" }),
	"nw-resize": () => ({ cursor: "nw-resize" }),
	"nwse-resize": () => ({ cursor: "nwse-resize" }),
	"not-allowed": () => ({ cursor: "not-allowed" }),
	"pointer": () => ({ cursor: "pointer" }),
	"progress": () => ({ cursor: "progress" }),
	"row-resize": () => ({ cursor: "row-resize" }),
	"s-resize": () => ({ cursor: "s-resize" }),
	"se-resize": () => ({ cursor: "se-resize" }),
	"sw-resize": () => ({ cursor: "sw-resize" }),
	"w-resize": () => ({ cursor: "w-resize" }),
	"zoom-in": () => ({ cursor: "zoom-in" }),
	"zoom-out": () => ({ cursor: "zoom-out" }),
	"cursor": (value: string) => ({ cursor: value }),

	"user-select-none": () => ({ "user-select": "none", "-webkit-user-select": "none" }),
	"user-select-all": () => ({ "user-select": "all", "-webkit-user-select": "all" }),
	"user-select-auto": () => ({ "user-select": "auto", "-webkit-user-select": "auto" }),
	"user-select-text": () => ({ "user-select": "text", "-webkit-user-select": "text" }),
	"user-select": (value: string) => ({
		"user-select": cssvar(value),
		"-webkit-user-select": cssvar(value),
	}),

	"pointer-events-none": () => ({ "pointer-events": "none" }),
	"pointer-events-auto": () => ({ "pointer-events": "auto" }),

	// 에니메이션:transition(transform=100s/opacity=2s)
	"transition": (value: string) => ({ transition: makeTransition(value) }),

	// transform
	"rotate": (value: string) => {
		const [x] = splitValues(value, deg)
		return { "transform": `rotate(${x})` }
	},

	"rotateX": (value: string) => ({
		"--a-rotate-x": deg(value),
	}),
	"rotateY": (value: string) => ({
		"transform": `rotateY(${deg(value)})`,
	}),

	"skew": (value: string) => {
		const [x, y] = makeCommaValues(value, deg).split(",")
		return {
			"--a-skew-x": x,
			"--a-skew-y": y,
			"transform": "var(--a-transform)",
		}
	},
	"skewX": (value: string) => ({
		"--a-skew-x": deg(value),
		"transform": "var(--a-transform)",
	}),
	"skewY": (value: string) => ({
		"--a-skew-y": deg(value),
		"transform": "var(--a-transform)",
	}),

	"matrix": (value: string) => ({ transform: `matrix(${value})` }),

	// @TODO: 3d transform
	// "translate3d": (value:string) => `--a-translate-x:${px(value)};--a-translate-y:${px(value)};--a-translate-z:${px(value)};transform:var(--a-transform);`,
	// "rotate3d": (value:string) => `--a-rotate-x:${deg(value)};--a-rotate-y:${deg(value)};--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
	// "translateZ": (value:string) => `--a-translate-z:${px(value)};transform:var(--a-transform);`,
	// "rotateZ": (value:string) => `--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
	// "skewZ": (value:string) => `--a-skew-z:${deg(value)};transform:var(--a-transform);`,
	// "scaleZ": (value:string) => `--a-scale-z:${makeCommaValues(value)};transform:var(--a-transform);`,
	// "matrix3d": (value:string) => `transform:matrix(${value});`,

	// Util
	"gpu": () => `transform:translateZ(0.1px);`,

	// etc
	"app-region": (value: string) => `app-region:${value};-webkit-app-region:${value};`,
	"clip-path": (value: string) => `clip-path:${makeValues(value)};-webkit-clip-path:${makeValues(value)};`,

	// table
	"table-fixed": () => ({ tableLayout: "fixed" }),
	"table-auto": () => ({ tableLayout: "auto" }),
	"table-layout-fixed": () => ({ tableLayout: "fixed" }),
	"table-layout-auto": () => ({ tableLayout: "auto" }),

	// Filter
	"brightness": (value: string) => ({ filter: `brightness(${cssvar(value)})` }),
	"contrast": (value: string) => ({ filter: `contrast(${cssvar(value)})` }),
	"drop-shadow": (value: string) => ({ filter: `drop-shadow(${makeValues(value, px)})` }),
	"grayscale": (value: string) => ({ filter: `grayscale(${cssvar(value)})` }),
	"hue-rotate": (value: string) => ({ filter: `hue-rotate(${cssvar(value)})` }),
	"invert": (value: string) => ({ filter: `invert(${cssvar(value)})` }),
	"saturate": (value: string) => ({ filter: `saturate(${cssvar(value)})` }),
	"sepia": (value: string) => ({ filter: `sepia(${cssvar(value)})` }),

	"filter": (value: string) => ({ filter: cssvar(value) }),
	"filter-none": () => ({ filter: "none" }),

	// @TODO:
	// "transform": (value:string) => ({
	//   'transform': value.replace(/([^=]+)=([^/]+)/g, (_,p,v)=>`${p}(${v})`)
	// }),

	"transform-origin": (value: string) => ({ "transform-origin": value }),
	"transform-style": (value: string) => ({ "transform-style": value }),
	"transform-box": (value: string) => ({ "transform-box": value }),
	"transform-none": () => ({ transform: "none" }),

	// perspective
	"perspective": (value: string) => ({ perspective: px(value) }),
	"perspective-origin": (value: string) => ({ "perspective-origin": value }),

	// Additional v2 utilities (moved from PREFIX_MEDIA_QUERY)
	"gradient": (value: string) => {
		const [from, to, angle = "45"] = value.split("/")
		return { background: `linear-gradient(${angle}deg, ${makeColor(from)}, ${makeColor(to)})` }
	},
	
	"backdrop": (value: string) => ({ "backdrop-filter": `blur(${px(value)})`, "-webkit-backdrop-filter": `blur(${px(value)})` }),
	
	"aspect": (value: string) => {
		const [w, h] = value.split("/")
		return { "aspect-ratio": `${w}/${h}` }
	},
	
	// Position utilities for absolute positioning
	"top": (value: string) => ({ top: px(value) }),
	"left": (value: string) => ({ left: px(value) }),
	"right": (value: string) => ({ right: px(value) }),
	"bottom": (value: string) => ({ bottom: px(value) }),
	
	// Justify content
	"justify": (value: string) => ({ "justify-content": value }),
	
	// Screen size utilities
	"screen": () => ({ width: "100vw", height: "100vh" }),
	"full": () => ({ width: "100%", height: "100%" }),

	// Overflow utilities
	"overflow": (value: string) => ({ overflow: value }),
	"overflow-x": (value: string) => ({ "overflow-x": value }),
	"overflow-y": (value: string) => ({ "overflow-y": value }),
}

// Prefix
// pseudo class
export const PREFIX_PSEUDO_CLASS: PrefixRules = {
	"hover:": { media: `(hover:hover)`, selector: `&:hover,&.\\:hover` },
	"active:": { selector: `html &:active,html &.\\:active` },
	"focus:": { selector: `html &:focus,html &.\\:focus` },
	"focus-visible": { selector: `html &:focus-visible,html &.\\:focus-visible` },
	"focus-within:": { selector: `html &:focus-within,html &.\\:focus-within` },
	"checked:": { selector: `html &:checked,html &.\\:checked` },
	"read-only:": { selector: `html &:read-only,html &.\\:read-only` },
	"enabled:": { selector: `html &:enabled,html &.\\:enabled` },
	"disabled:": { selector: `html body &:disabled,html body &.\\:disabled,html body &[disabled]` },

	"group-hover:": { selector: `.group:hover &,html .group.\\:hover &` },
	"group-active:": { selector: `html .group:active &,html .group.\\:active &` },
	"group-focus:": { selector: `html .group:focus &,html .group.\\:focus &` },
	"group-focus-within:": { selector: `html .group:focus-within &,html .group\\:focus-within` },
	"group-checked:": { selector: `html .group:checked &,html .group.\\:checked &` },
	"group-read-only:": { selector: `html .group:read-only &,html .group.\\:read-only &` },
	"group-enabled:": { selector: `html .group:enabled &,html .group.\\:enabled &` },
	"group-disabled:": {
		selector: `html body .group:disabled &,html body .group[disabled] &,html body .group.disabled &`,
	},

	"placeholder:": { selector: `&::placeholder` },

	"odd:": { selector: `&:nth-child(2n+1)` },
	"even:": { selector: `&:nth-child(2n)` },

	"first:": { selector: `&:first-child` },
	"last:": { selector: `&:last-child` },

	"after:": { selector: `&::after` },
	"before:": { selector: `&::before` },

	"selection::": { selector: `&::selection,& *::selection` },
}

// media query
export const PREFIX_MEDIA_QUERY: PrefixRules = {
	"sm:": { media: `(min-width:480px)`, selector: `html &` },
	"md:": { media: `(min-width:768px)`, selector: `html &` },
	"lg:": { media: `(min-width:1024px)`, selector: `html &` },
	"xl:": { media: `(min-width:1280px)`, selector: `html &` },

	"sm~:": { media: `(min-width:480px)`, selector: `html &` },
	"md~:": { media: `(min-width:768px)`, selector: `html &` },
	"lg~:": { media: `(min-width:1024px)`, selector: `html &` },
	"xl~:": { media: `(min-width:1280px)`, selector: `html &` },

	"~sm:": { media: `(max-width:479.98px)`, selector: `html &` },
	"~md:": { media: `(max-width:767.98px)`, selector: `html &` },
	"~lg:": { media: `(max-width:1023.98px)`, selector: `html &` },
	"~xl:": { media: `(max-width:1279.98px)`, selector: `html &` },

	"mobile:": { media: `(max-device-width:767.98px)`, selector: `html &` },
	"tablet:": {
		media: `(min-device-width:768px) and (max-device-width:1023.98px)`,
		selector: `html &`,
	},
	"desktop:": { media: `(min-device-width:1024px)`, selector: `html &` },
	"!mobile:": { media: `(min-device-width:768px)`, selector: `html &` },
	"!desktop:": { media: `(max-device-width:1023.98px)`, selector: `html &` },
}