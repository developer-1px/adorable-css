import { makeColor, makeFont } from "../../../vite/src/core/makeValue"

// prettier-ignore
export const RULES_FOR_UNOCSS2 = {
	// -- Color
	c: (value: string) => {
		if (value.startsWith("linear-gradient")) return `background:${value.replace(/\//g, " ")};-webkit-background-clip:text;-webkit-text-fill-color:transparent;`
		if (value.startsWith("radial-gradient")) return `background:${value.replace(/\//g, " ")};-webkit-background-clip:text;-webkit-text-fill-color:transparent;`
		return `color:${makeColor(value)};`
	},

	// Font
	font: (value: string) => makeFont(value),

	// Font Weight
	"100": () => `font-weight:100;`,
	"200": () => `font-weight:200;`,
	"300": () => `font-weight:300;`,
	"400": () => `font-weight:400;`,
	"500": () => `font-weight:500;`,
	"600": () => `font-weight:600;`,
	"700": () => `font-weight:700;`,
	"800": () => `font-weight:800;`,
	"900": () => `font-weight:900;`,

	"thin": () => `font-weight:200;`,
	"light": () => `font-weight:300;`,
	"regular": () => `font-weight:normal;`,
	"medium": () => `font-weight:500;`,
	"semibold": () => `font-weight:600;`,
	"bold": () => `font-weight:bold;`,
	"heavy": () => `font-weight:900;`,

	hbox: () => `display:flex;align-items:center;`,
	vbox: () => `display:flex;flex-direction:column;`,
	pack: () => `display:flex;align-items:center;justify-content:center;`,
	
	// Layout & Spacing
	w: (value: string) => value === "fill" ? `width:100%;` : value === "hug" ? `width:fit-content;` : `width:${value}px;`,
	h: (value: string) => value === "fill" ? `height:100%;` : value === "hug" ? `height:fit-content;` : `height:${value}px;`,
	p: (value: string) => `padding:${value.replace(/\//g, "px ") + "px"};`,
	m: (value: string) => `margin:${value.replace(/\//g, "px ") + "px"};`,
	gap: (value: string) => `gap:${value}px;`,
	
	// Background & Border
	bg: (value: string) => {
		if (value.startsWith("linear-gradient")) return `background:${value.replace(/\//g, " ")};`
		if (value.startsWith("radial-gradient")) return `background:${value.replace(/\//g, " ")};`
		return `background:${makeColor(value)};`
	},
	r: (value: string) => `border-radius:${value}px;`,
	b: (value: string) => `border:1px solid ${makeColor(value)};`,
	
	// Position
	relative: () => `position:relative;`,
	absolute: () => `position:absolute;`,
	fixed: () => `position:fixed;`,
	sticky: () => `position:sticky;`,
	
	// Size shortcuts
	"full": () => `width:100%;height:100%;`,
	"screen": () => `width:100vw;height:100vh;`,
	
	// Text alignment
	"text": (value: string) => `text-align:${value};`,
	"center": () => `text-align:center;`,
	"left": () => `text-align:left;`,
	"right": () => `text-align:right;`,
	
	// Display
	block: () => `display:block;`,
	inline: () => `display:inline;`,
	"inline-block": () => `display:inline-block;`,
	hidden: () => `display:none;`,
	
	// Transform & Animation
	scale: (value: string) => `transform:scale(${value});`,
	rotate: (value: string) => `transform:rotate(${value}deg);`,
	transition: (value: string) => `transition:all ${value};`,
	
	// Shadow & Effects
	shadow: (value: string) => {
		const shadows = {
			sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
			md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
			lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
			xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
		}
		return `box-shadow:${shadows[value] || shadows.md};`
	},
	blur: (value: string) => `filter:blur(${value}px);`,
	opacity: (value: string) => `opacity:${value};`,
	
	// Cursor
	pointer: () => `cursor:pointer;`,
	
	// Overflow
	overflow: (value: string) => `overflow:${value};`,
	clip: () => `overflow:hidden;`,
	scroll: () => `overflow:auto;`,
	
	// Z-index
	z: (value: string) => `z-index:${value};`,
	
	// Modern gradient utilities
	gradient: (value: string) => {
		const [from, to, angle = "45"] = value.split("/")
		return `background:linear-gradient(${angle}deg, ${makeColor(from)}, ${makeColor(to)});`
	},
	
	// Modern spacing
	space: (value: string) => `& > * + *{margin-top:${value}px;}`,
	
	// Backdrop
	backdrop: (value: string) => `backdrop-filter:blur(${value}px);`,
	
	// Aspect ratio
	aspect: (value: string) => {
		const [w, h] = value.split("/")
		return `aspect-ratio:${w}/${h};`
	}
}
