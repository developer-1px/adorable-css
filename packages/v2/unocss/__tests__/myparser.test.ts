import { describe, it, expect } from "vitest"
import { parseAdorableCSS } from "../myparser/parseAdorableCSS"

describe("MyParser - AdorableCSS Parser", () => {
  describe("Basic Identifiers", () => {
    it("should parse simple identifier", () => {
      const result = parseAdorableCSS("hbox")
      expect(result).toBeDefined()
      expect(result?.value).toHaveLength(1)
      expect(result?.value[0].selector.type).toBe("(ident)")
      expect(result?.value[0].selector.image).toBe("hbox")
    })

    it("should parse multiple identifiers", () => {
      const result = parseAdorableCSS("hbox vbox pack")
      expect(result).toBeDefined()
      expect(result?.value).toHaveLength(3)
      expect(result?.value[0].selector.image).toBe("hbox")
      expect(result?.value[1].selector.image).toBe("vbox") 
      expect(result?.value[2].selector.image).toBe("pack")
    })
  })

  describe("Function Calls", () => {
    it("should parse function with single argument", () => {
      const result = parseAdorableCSS("w(100)")
      expect(result).toBeDefined()
      expect(result?.value).toHaveLength(1)
      expect(result?.value[0].selector.type).toBe("function")
      expect(result?.value[0].selector.name).toBe("w")
      expect(result?.value[0].selector.args).toHaveLength(1)
    })

    it("should parse function with multiple arguments", () => {
      const result = parseAdorableCSS("p(16/24)")
      expect(result).toBeDefined()
      expect(result?.value[0].selector.type).toBe("function")
      expect(result?.value[0].selector.name).toBe("p")
      expect(result?.value[0].selector.args).toHaveLength(3) // p(16/24) = [16, /, 24]
    })

    it("should parse function with hex color", () => {
      const result = parseAdorableCSS("bg(#667eea)")
      expect(result).toBeDefined()
      expect(result?.value[0].selector.type).toBe("function")
      expect(result?.value[0].selector.name).toBe("bg")
      expect(result?.value[0].selector.args).toHaveLength(1)
    })

    it("should parse function with fill argument", () => {
      const result = parseAdorableCSS("w(fill)")
      expect(result).toBeDefined()
      expect(result?.value[0].selector.type).toBe("function")
      expect(result?.value[0].selector.name).toBe("w")
      expect(result?.value[0].selector.args).toHaveLength(1)
    })
  })

  describe("Range Syntax", () => {
    it("should parse min..max range", () => {
      const result = parseAdorableCSS("w(200..400)")
      expect(result).toBeDefined()
      expect(result?.value[0].selector.type).toBe("function")
      expect(result?.value[0].selector.name).toBe("w")
      expect(result?.value[0].selector.args).toHaveLength(1)
      // Range 파싱 결과 확인
    })

    it("should parse min.. range", () => {
      const result = parseAdorableCSS("w(200..)")
      expect(result).toBeDefined()
    })

    it("should parse ..max range", () => {
      const result = parseAdorableCSS("w(..400)")
      expect(result).toBeDefined()
    })
  })

  describe("Complex Expressions", () => {
    it("should parse gradient function", () => {
      const result = parseAdorableCSS("gradient(#667eea/#764ba2)")
      expect(result).toBeDefined()
      expect(result?.value[0].selector.type).toBe("function")
      expect(result?.value[0].selector.name).toBe("gradient")
    })

    it("should parse nested function calls", () => {
      const result = parseAdorableCSS("bg(gradient(#667eea/#764ba2))")
      expect(result).toBeDefined()
      expect(result?.value[0].selector.type).toBe("function")
      expect(result?.value[0].selector.name).toBe("bg")
    })

    it("should parse color with opacity", () => {
      const result = parseAdorableCSS("bg(#fff.8)")
      expect(result).toBeDefined()
      expect(result?.value[0].selector.type).toBe("function")
      expect(result?.value[0].selector.name).toBe("bg")
    })

    it("should parse opacity with color", () => {
      const result = parseAdorableCSS("bg(#000.5)")
      expect(result).toBeDefined()
    })
  })

  describe("Pseudo Classes", () => {
    it("should parse hover pseudo class", () => {
      const result = parseAdorableCSS("hover:bg(#333)")
      expect(result).toBeDefined()
      // 구조 확인 필요
    })

    it("should parse active pseudo class", () => {
      const result = parseAdorableCSS("active:scale(1.05)")
      expect(result).toBeDefined()
    })
  })

  describe("Mixed Syntax", () => {
    it("should parse complex layout example", () => {
      const result = parseAdorableCSS("hbox(center) w(fill) h(48) r(8) bg(#667eea) c(#fff)")
      expect(result).toBeDefined()
      expect(result?.value).toHaveLength(6)
    })

    it("should parse homepage hero section", () => {
      const result = parseAdorableCSS("vbox(fill) gap(40) p(80/40) bg(gradient(#667eea/#764ba2))")
      expect(result).toBeDefined()
      expect(result?.value).toHaveLength(4)
    })
  })

  describe("Error Handling", () => {
    it("should handle empty input", () => {
      const result = parseAdorableCSS("")
      // 에러 처리 방식 확인 필요
    })

    it("should handle invalid syntax", () => {
      const result = parseAdorableCSS("invalid(")
      // 에러 처리 방식 확인 필요
    })

    it("should handle malformed function", () => {
      const result = parseAdorableCSS("w(100")
      // 에러 처리 방식 확인 필요
    })
  })

  describe("Output Structure Validation", () => {
    it("should have consistent output structure", () => {
      const result = parseAdorableCSS("w(100)")
      expect(result).toHaveProperty("type")
      expect(result).toHaveProperty("value")
      expect(result).toHaveProperty("image")
      
      if (result?.value && result.value.length > 0) {
        const selector = result.value[0]
        expect(selector).toHaveProperty("type")
        expect(selector).toHaveProperty("selector")
        expect(selector).toHaveProperty("image")
      }
    })
  })
})