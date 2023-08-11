import {OPTIONS} from "../libs/utils";
import {getGeneratedCode as a} from "./adorableCSS";
import {getGeneratedCode as t} from "./tailwindCSS"

export const getGeneratedCode = async (node) => {
  if (OPTIONS.type === "adorablecss") return a(node)
  if (OPTIONS.type === "tailwindcss") return t(node)
  return ""
}