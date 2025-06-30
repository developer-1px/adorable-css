import { cssvar, makePosition2X, makePosition2Y, px } from "../values/makeValue"

export const RULES_POSITION_UNOCSS = {
	// -- Position Utilities
	"layer": (value = "") => {
		const pos: Record<string, string> = { top: "0", right: "0", bottom: "0", left: "0" }
		const outsides: string[] = []
		let outside = false

		value.split("+").forEach((v) => {
			const [direction, value = "0"] = v.split(":")
			switch (direction) {
				case "top": {
					pos.top = value
					pos.bottom = undefined
					outsides.push("top")
					return
				}
				case "right": {
					pos.right = value
					pos.left = undefined
					outsides.push("right")
					return
				}
				case "bottom": {
					pos.bottom = value
					pos.top = undefined
					outsides.push("bottom")
					return
				}
				case "left": {
					pos.left = value
					pos.right = undefined
					outsides.push("left")
					return
				}
				case "outside": {
					outside = true
					return
				}
			}
		})

		if (outside) {
			const revert = (b: string, a: string) => {
				pos[a] = pos[b] === "0" ? "100%" : `calc(100% + ${px(pos[b])})`
				pos[b] = undefined
			}

			outsides.forEach((direction) => {
				switch (direction) {
					case "top":
						return revert("top", "bottom")
					case "right":
						return revert("right", "left")
					case "bottom":
						return revert("bottom", "top")
					case "left":
						return revert("left", "right")
				}
			})
		}

		const styles: Record<string, string> = {
			position: "absolute",
		}

		Object.entries(pos).forEach(([key, value]) => {
			if (value !== undefined) {
				styles[key] = px(value)
			}
		})

		return styles
	},

	"absolute": (value = "") => ({
		position: "absolute",
		// ...makePosition(value),
	}),
	"relative": (value = "") => ({
		position: "relative",
		// ...makePosition(value),
	}),
	"sticky": (value = "") => ({
		position: "sticky",
		// ...makePosition(value),
	}),
	"sticky-top": (value = 0) => ({ position: "sticky", top: px(value) }),
	"sticky-right": (value = 0) => ({ position: "sticky", right: px(value) }),
	"sticky-bottom": (value = 0) => ({ position: "sticky", bottom: px(value) }),
	"sticky-left": (value = 0) => ({ position: "sticky", left: px(value) }),

	"fixed": (value = "") => ({
		position: "fixed",
		// ...makePosition(value),
	}),
	"static": () => ({ position: "static" }),

	// Position
	"top": (value: string) => ({ top: px(value) }),
	"left": (value: string) => ({ left: px(value) }),
	"right": (value: string) => ({ right: px(value) }),
	"bottom": (value: string) => ({ bottom: px(value) }),

	"x": (value: string) => makePosition2X(value),
	"y": (value: string) => makePosition2Y(value),
	"z": (value: string) => ({ "z-index": cssvar(value) }),
}
