var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// ../../../../../../usr/local/lib/node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
  "../../../../../../usr/local/lib/node_modules/tsup/assets/cjs_shims.js"() {
  }
});

// ../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var path2 = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = __spreadProps(__spreadValues({}, POSIX_CHARS), {
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    });
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      CHAR_0: 48,
      CHAR_9: 57,
      CHAR_UPPERCASE_A: 65,
      CHAR_LOWERCASE_A: 97,
      CHAR_UPPERCASE_Z: 90,
      CHAR_LOWERCASE_Z: 122,
      CHAR_LEFT_PARENTHESES: 40,
      CHAR_RIGHT_PARENTHESES: 41,
      CHAR_ASTERISK: 42,
      CHAR_AMPERSAND: 38,
      CHAR_AT: 64,
      CHAR_BACKWARD_SLASH: 92,
      CHAR_CARRIAGE_RETURN: 13,
      CHAR_CIRCUMFLEX_ACCENT: 94,
      CHAR_COLON: 58,
      CHAR_COMMA: 44,
      CHAR_DOT: 46,
      CHAR_DOUBLE_QUOTE: 34,
      CHAR_EQUAL: 61,
      CHAR_EXCLAMATION_MARK: 33,
      CHAR_FORM_FEED: 12,
      CHAR_FORWARD_SLASH: 47,
      CHAR_GRAVE_ACCENT: 96,
      CHAR_HASH: 35,
      CHAR_HYPHEN_MINUS: 45,
      CHAR_LEFT_ANGLE_BRACKET: 60,
      CHAR_LEFT_CURLY_BRACE: 123,
      CHAR_LEFT_SQUARE_BRACKET: 91,
      CHAR_LINE_FEED: 10,
      CHAR_NO_BREAK_SPACE: 160,
      CHAR_PERCENT: 37,
      CHAR_PLUS: 43,
      CHAR_QUESTION_MARK: 63,
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      CHAR_RIGHT_CURLY_BRACE: 125,
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      CHAR_SEMICOLON: 59,
      CHAR_SINGLE_QUOTE: 39,
      CHAR_SPACE: 32,
      CHAR_TAB: 9,
      CHAR_UNDERSCORE: 95,
      CHAR_VERTICAL_LINE: 124,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      SEP: path2.sep,
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// ../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    init_cjs_shims();
    var path2 = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path2.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1)
        return input;
      if (input[idx - 1] === "\\")
        return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// ../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var utils = require_utils();
    var {
      CHAR_ASTERISK,
      CHAR_AT,
      CHAR_BACKWARD_SLASH,
      CHAR_COMMA,
      CHAR_DOT,
      CHAR_EXCLAMATION_MARK,
      CHAR_FORWARD_SLASH,
      CHAR_LEFT_CURLY_BRACE,
      CHAR_LEFT_PARENTHESES,
      CHAR_LEFT_SQUARE_BRACKET,
      CHAR_PLUS,
      CHAR_QUESTION_MARK,
      CHAR_RIGHT_CURLY_BRACE,
      CHAR_RIGHT_PARENTHESES,
      CHAR_RIGHT_SQUARE_BRACKET
    } = require_constants();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token2) => {
      if (token2.isPrefix !== true) {
        token2.depth = token2.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens2 = [];
      const parts = [];
      let str = input;
      let index2 = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token2 = { value: "", depth: 0, isGlob: false };
      const eos = () => index2 >= length;
      const peek = () => str.charCodeAt(index2 + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index2);
      };
      while (index2 < length) {
        code = advance();
        let next2;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token2.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token2.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token2.isBrace = true;
              isGlob = token2.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token2.isBrace = true;
              isGlob = token2.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token2.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index2);
          tokens2.push(token2);
          token2 = { value: "", depth: 0, isGlob: false };
          if (finished === true)
            continue;
          if (prev === CHAR_DOT && index2 === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index2 + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token2.isGlob = true;
            isExtglob = token2.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index2 === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token2.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token2.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK)
            isGlobstar = token2.isGlobstar = true;
          isGlob = token2.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token2.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next2 = advance())) {
            if (next2 === CHAR_BACKWARD_SLASH) {
              backslashes = token2.backslashes = true;
              advance();
              continue;
            }
            if (next2 === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token2.isBracket = true;
              isGlob = token2.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index2 === start) {
          negated = token2.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token2.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token2.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob2 = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob2 = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob2 = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob2)
          glob2 = utils.removeBackslashes(glob2);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob: glob2,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens2.push(token2);
        }
        state.tokens = tokens2;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens2[idx].isPrefix = true;
              tokens2[idx].value = prefix;
            } else {
              tokens2[idx].value = value;
            }
            depth(tokens2[idx]);
            state.maxDepth += tokens2[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens2[tokens2.length - 1].value = value;
            depth(tokens2[tokens2.length - 1]);
            state.maxDepth += tokens2[tokens2.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// ../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var constants = require_constants();
    var utils = require_utils();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens2 = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens: tokens2
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token2) => {
        state.output += token2.output != null ? token2.output : token2.value;
        consume(token2.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output)
          append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens2.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token2 = __spreadProps(__spreadValues({}, EXTGLOB_CHARS[value2]), { conditions: 1, inner: "" });
        token2.prev = prev;
        token2.parens = state.parens;
        token2.output = state.output;
        const output = (opts.capture ? "(" : "") + token2.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token2);
      };
      const extglobClose = (token2) => {
        let output = token2.close + (opts.capture ? ")" : "");
        let rest;
        if (token2.type === "negate") {
          let extglobStar = star;
          if (token2.inner && token2.inner.length > 1 && token2.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token2.close = `)$))${extglobStar}`;
          }
          if (token2.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, __spreadProps(__spreadValues({}, options), { fastpaths: false })).output;
            output = token2.close = `)${expression})${extglobStar})`;
          }
          if (token2.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index2) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index2 === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next2 = peek();
          if (next2 === "/" && opts.bash !== true) {
            continue;
          }
          if (next2 === "." || next2 === ";") {
            continue;
          }
          if (!next2) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens2.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens2.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens2.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens2.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".")
              prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next2 = peek();
            let output = value;
            if (next2 === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next2) || next2 === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token2 = { type: "star", value, output: star };
        if (opts.bash === true) {
          token2.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token2.output = nodot + token2.output;
          }
          push(token2);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token2.output = value;
          push(token2);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token2);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token2 of state.tokens) {
          state.output += token2.output != null ? token2.output : token2.value;
          if (token2.suffix) {
            state.output += token2.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true)
          return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match)
              return;
            const source2 = create(match[1]);
            if (!source2)
              return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// ../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var path2 = require("path");
    var scan = require_scan();
    var parse = require_parse();
    var utils = require_utils();
    var constants = require_constants();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob2, options, returnState = false) => {
      if (Array.isArray(glob2)) {
        const fns = glob2.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2)
              return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob2) && glob2.tokens && glob2.input;
      if (glob2 === "" || typeof glob2 !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex2 = isState ? picomatch.compileRe(glob2, options) : picomatch.makeRe(glob2, options, false, true);
      const state = regex2.state;
      delete regex2.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = __spreadProps(__spreadValues({}, options), { ignore: null, onMatch: null, onResult: null });
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex2, options, { glob: glob2, posix });
        const result = { glob: glob2, state, regex: regex2, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex2, options, { glob: glob2, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob2;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob2;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex2, options, posix);
        } else {
          match = regex2.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob2, options, posix = utils.isWindows(options)) => {
      const regex2 = glob2 instanceof RegExp ? glob2 : picomatch.makeRe(glob2, options);
      return regex2.test(path2.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern))
        return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, __spreadProps(__spreadValues({}, options), { fastpaths: false }));
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex2 = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex2.state = state;
      }
      return regex2;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true)
          throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// ../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = require_picomatch();
  }
});

// ../../node_modules/.pnpm/readdirp@3.6.0/node_modules/readdirp/index.js
var require_readdirp = __commonJS({
  "../../node_modules/.pnpm/readdirp@3.6.0/node_modules/readdirp/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var fs2 = require("fs");
    var { Readable } = require("stream");
    var sysPath = require("path");
    var { promisify } = require("util");
    var picomatch = require_picomatch2();
    var readdir = promisify(fs2.readdir);
    var stat = promisify(fs2.stat);
    var lstat = promisify(fs2.lstat);
    var realpath = promisify(fs2.realpath);
    var BANG = "!";
    var RECURSIVE_ERROR_CODE = "READDIRP_RECURSIVE_ERROR";
    var NORMAL_FLOW_ERRORS = /* @__PURE__ */ new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", RECURSIVE_ERROR_CODE]);
    var FILE_TYPE = "files";
    var DIR_TYPE = "directories";
    var FILE_DIR_TYPE = "files_directories";
    var EVERYTHING_TYPE = "all";
    var ALL_TYPES = [FILE_TYPE, DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE];
    var isNormalFlowError = (error) => NORMAL_FLOW_ERRORS.has(error.code);
    var [maj, min] = process.versions.node.split(".").slice(0, 2).map((n) => Number.parseInt(n, 10));
    var wantBigintFsStats = process.platform === "win32" && (maj > 10 || maj === 10 && min >= 5);
    var normalizeFilter = (filter) => {
      if (filter === void 0)
        return;
      if (typeof filter === "function")
        return filter;
      if (typeof filter === "string") {
        const glob2 = picomatch(filter.trim());
        return (entry) => glob2(entry.basename);
      }
      if (Array.isArray(filter)) {
        const positive = [];
        const negative = [];
        for (const item of filter) {
          const trimmed = item.trim();
          if (trimmed.charAt(0) === BANG) {
            negative.push(picomatch(trimmed.slice(1)));
          } else {
            positive.push(picomatch(trimmed));
          }
        }
        if (negative.length > 0) {
          if (positive.length > 0) {
            return (entry) => positive.some((f) => f(entry.basename)) && !negative.some((f) => f(entry.basename));
          }
          return (entry) => !negative.some((f) => f(entry.basename));
        }
        return (entry) => positive.some((f) => f(entry.basename));
      }
    };
    var ReaddirpStream = class extends Readable {
      static get defaultOptions() {
        return {
          root: ".",
          fileFilter: (path2) => true,
          directoryFilter: (path2) => true,
          type: FILE_TYPE,
          lstat: false,
          depth: 2147483648,
          alwaysStat: false
        };
      }
      constructor(options = {}) {
        super({
          objectMode: true,
          autoDestroy: true,
          highWaterMark: options.highWaterMark || 4096
        });
        const opts = __spreadValues(__spreadValues({}, ReaddirpStream.defaultOptions), options);
        const { root, type } = opts;
        this._fileFilter = normalizeFilter(opts.fileFilter);
        this._directoryFilter = normalizeFilter(opts.directoryFilter);
        const statMethod = opts.lstat ? lstat : stat;
        if (wantBigintFsStats) {
          this._stat = (path2) => statMethod(path2, { bigint: true });
        } else {
          this._stat = statMethod;
        }
        this._maxDepth = opts.depth;
        this._wantsDir = [DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
        this._wantsFile = [FILE_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
        this._wantsEverything = type === EVERYTHING_TYPE;
        this._root = sysPath.resolve(root);
        this._isDirent = "Dirent" in fs2 && !opts.alwaysStat;
        this._statsProp = this._isDirent ? "dirent" : "stats";
        this._rdOptions = { encoding: "utf8", withFileTypes: this._isDirent };
        this.parents = [this._exploreDir(root, 1)];
        this.reading = false;
        this.parent = void 0;
      }
      async _read(batch) {
        if (this.reading)
          return;
        this.reading = true;
        try {
          while (!this.destroyed && batch > 0) {
            const { path: path2, depth, files = [] } = this.parent || {};
            if (files.length > 0) {
              const slice = files.splice(0, batch).map((dirent) => this._formatEntry(dirent, path2));
              for (const entry of await Promise.all(slice)) {
                if (this.destroyed)
                  return;
                const entryType = await this._getEntryType(entry);
                if (entryType === "directory" && this._directoryFilter(entry)) {
                  if (depth <= this._maxDepth) {
                    this.parents.push(this._exploreDir(entry.fullPath, depth + 1));
                  }
                  if (this._wantsDir) {
                    this.push(entry);
                    batch--;
                  }
                } else if ((entryType === "file" || this._includeAsFile(entry)) && this._fileFilter(entry)) {
                  if (this._wantsFile) {
                    this.push(entry);
                    batch--;
                  }
                }
              }
            } else {
              const parent = this.parents.pop();
              if (!parent) {
                this.push(null);
                break;
              }
              this.parent = await parent;
              if (this.destroyed)
                return;
            }
          }
        } catch (error) {
          this.destroy(error);
        } finally {
          this.reading = false;
        }
      }
      async _exploreDir(path2, depth) {
        let files;
        try {
          files = await readdir(path2, this._rdOptions);
        } catch (error) {
          this._onError(error);
        }
        return { files, depth, path: path2 };
      }
      async _formatEntry(dirent, path2) {
        let entry;
        try {
          const basename = this._isDirent ? dirent.name : dirent;
          const fullPath = sysPath.resolve(sysPath.join(path2, basename));
          entry = { path: sysPath.relative(this._root, fullPath), fullPath, basename };
          entry[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
        } catch (err) {
          this._onError(err);
        }
        return entry;
      }
      _onError(err) {
        if (isNormalFlowError(err) && !this.destroyed) {
          this.emit("warn", err);
        } else {
          this.destroy(err);
        }
      }
      async _getEntryType(entry) {
        const stats = entry && entry[this._statsProp];
        if (!stats) {
          return;
        }
        if (stats.isFile()) {
          return "file";
        }
        if (stats.isDirectory()) {
          return "directory";
        }
        if (stats && stats.isSymbolicLink()) {
          const full = entry.fullPath;
          try {
            const entryRealPath = await realpath(full);
            const entryRealPathStats = await lstat(entryRealPath);
            if (entryRealPathStats.isFile()) {
              return "file";
            }
            if (entryRealPathStats.isDirectory()) {
              const len = entryRealPath.length;
              if (full.startsWith(entryRealPath) && full.substr(len, 1) === sysPath.sep) {
                const recursiveError = new Error(`Circular symlink detected: "${full}" points to "${entryRealPath}"`);
                recursiveError.code = RECURSIVE_ERROR_CODE;
                return this._onError(recursiveError);
              }
              return "directory";
            }
          } catch (error) {
            this._onError(error);
          }
        }
      }
      _includeAsFile(entry) {
        const stats = entry && entry[this._statsProp];
        return stats && this._wantsEverything && !stats.isDirectory();
      }
    };
    var readdirp = (root, options = {}) => {
      let type = options.entryType || options.type;
      if (type === "both")
        type = FILE_DIR_TYPE;
      if (type)
        options.type = type;
      if (!root) {
        throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
      } else if (typeof root !== "string") {
        throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
      } else if (type && !ALL_TYPES.includes(type)) {
        throw new Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(", ")}`);
      }
      options.root = root;
      return new ReaddirpStream(options);
    };
    var readdirpPromise = (root, options = {}) => {
      return new Promise((resolve, reject) => {
        const files = [];
        readdirp(root, options).on("data", (entry) => files.push(entry)).on("end", () => resolve(files)).on("error", (error) => reject(error));
      });
    };
    readdirp.promise = readdirpPromise;
    readdirp.ReaddirpStream = ReaddirpStream;
    readdirp.default = readdirp;
    module2.exports = readdirp;
  }
});

// ../../node_modules/.pnpm/normalize-path@3.0.0/node_modules/normalize-path/index.js
var require_normalize_path = __commonJS({
  "../../node_modules/.pnpm/normalize-path@3.0.0/node_modules/normalize-path/index.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = function(path2, stripTrailing) {
      if (typeof path2 !== "string") {
        throw new TypeError("expected path to be a string");
      }
      if (path2 === "\\" || path2 === "/")
        return "/";
      var len = path2.length;
      if (len <= 1)
        return path2;
      var prefix = "";
      if (len > 4 && path2[3] === "\\") {
        var ch = path2[2];
        if ((ch === "?" || ch === ".") && path2.slice(0, 2) === "\\\\") {
          path2 = path2.slice(2);
          prefix = "//";
        }
      }
      var segs = path2.split(/[/\\]+/);
      if (stripTrailing !== false && segs[segs.length - 1] === "") {
        segs.pop();
      }
      return prefix + segs.join("/");
    };
  }
});

// ../../node_modules/.pnpm/anymatch@3.1.2/node_modules/anymatch/index.js
var require_anymatch = __commonJS({
  "../../node_modules/.pnpm/anymatch@3.1.2/node_modules/anymatch/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var picomatch = require_picomatch2();
    var normalizePath = require_normalize_path();
    var BANG = "!";
    var DEFAULT_OPTIONS = { returnIndex: false };
    var arrify = (item) => Array.isArray(item) ? item : [item];
    var createPattern = (matcher, options) => {
      if (typeof matcher === "function") {
        return matcher;
      }
      if (typeof matcher === "string") {
        const glob2 = picomatch(matcher, options);
        return (string) => matcher === string || glob2(string);
      }
      if (matcher instanceof RegExp) {
        return (string) => matcher.test(string);
      }
      return (string) => false;
    };
    var matchPatterns = (patterns, negPatterns, args, returnIndex) => {
      const isList = Array.isArray(args);
      const _path = isList ? args[0] : args;
      if (!isList && typeof _path !== "string") {
        throw new TypeError("anymatch: second argument must be a string: got " + Object.prototype.toString.call(_path));
      }
      const path2 = normalizePath(_path);
      for (let index2 = 0; index2 < negPatterns.length; index2++) {
        const nglob = negPatterns[index2];
        if (nglob(path2)) {
          return returnIndex ? -1 : false;
        }
      }
      const applied = isList && [path2].concat(args.slice(1));
      for (let index2 = 0; index2 < patterns.length; index2++) {
        const pattern = patterns[index2];
        if (isList ? pattern(...applied) : pattern(path2)) {
          return returnIndex ? index2 : true;
        }
      }
      return returnIndex ? -1 : false;
    };
    var anymatch = (matchers, testString, options = DEFAULT_OPTIONS) => {
      if (matchers == null) {
        throw new TypeError("anymatch: specify first argument");
      }
      const opts = typeof options === "boolean" ? { returnIndex: options } : options;
      const returnIndex = opts.returnIndex || false;
      const mtchers = arrify(matchers);
      const negatedGlobs = mtchers.filter((item) => typeof item === "string" && item.charAt(0) === BANG).map((item) => item.slice(1)).map((item) => picomatch(item, opts));
      const patterns = mtchers.filter((item) => typeof item !== "string" || typeof item === "string" && item.charAt(0) !== BANG).map((matcher) => createPattern(matcher, opts));
      if (testString == null) {
        return (testString2, ri = false) => {
          const returnIndex2 = typeof ri === "boolean" ? ri : false;
          return matchPatterns(patterns, negatedGlobs, testString2, returnIndex2);
        };
      }
      return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
    };
    anymatch.default = anymatch;
    module2.exports = anymatch;
  }
});

// ../../node_modules/.pnpm/is-extglob@2.1.1/node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "../../node_modules/.pnpm/is-extglob@2.1.1/node_modules/is-extglob/index.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2])
          return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});

// ../../node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "../../node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js"(exports, module2) {
    init_cjs_shims();
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index2 = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index2 < str.length) {
        if (str[index2] === "*") {
          return true;
        }
        if (str[index2 + 1] === "?" && /[\].+)]/.test(str[index2])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index2] === "[" && str[index2 + 1] !== "]") {
          if (closeSquareIndex < index2) {
            closeSquareIndex = str.indexOf("]", index2);
          }
          if (closeSquareIndex > index2) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index2);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index2] === "{" && str[index2 + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index2);
          if (closeCurlyIndex > index2) {
            backSlashIndex = str.indexOf("\\", index2);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index2] === "(" && str[index2 + 1] === "?" && /[:!=]/.test(str[index2 + 2]) && str[index2 + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index2);
          if (closeParenIndex > index2) {
            backSlashIndex = str.indexOf("\\", index2);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index2] === "(" && str[index2 + 1] !== "|") {
          if (pipeIndex < index2) {
            pipeIndex = str.indexOf("|", index2);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index2] === "\\") {
          var open = str[index2 + 1];
          index2 += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index2);
            if (n !== -1) {
              index2 = n + 1;
            }
          }
          if (str[index2] === "!") {
            return true;
          }
        } else {
          index2++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index2 = 0;
      while (index2 < str.length) {
        if (/[*?{}()[\]]/.test(str[index2])) {
          return true;
        }
        if (str[index2] === "\\") {
          var open = str[index2 + 1];
          index2 += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index2);
            if (n !== -1) {
              index2 = n + 1;
            }
          }
          if (str[index2] === "!") {
            return true;
          }
        } else {
          index2++;
        }
      }
      return false;
    };
    module2.exports = function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check = strictCheck;
      if (options && options.strict === false) {
        check = relaxedCheck;
      }
      return check(str);
    };
  }
});

// ../../node_modules/.pnpm/glob-parent@5.1.2/node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "../../node_modules/.pnpm/glob-parent@5.1.2/node_modules/glob-parent/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var isGlob = require_is_glob();
    var pathPosixDirname = require("path").posix.dirname;
    var isWin32 = require("os").platform() === "win32";
    var slash = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module2.exports = function globParent(str, opts) {
      var options = Object.assign({ flipBackslashes: true }, opts);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
      }
      if (enclosure.test(str)) {
        str += slash;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    };
  }
});

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    init_cjs_shims();
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false)
        return false;
      if (!exports.isInteger(min) || !exports.isInteger(max))
        return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      let node = block.nodes[n];
      if (!node)
        return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace")
        return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace")
        return false;
      if (block.invalid === true || block.dollar)
        return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text")
        acc.push(node.value);
      if (node.type === "range")
        node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          let ele = arr[i];
          Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/stringify.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var utils = require_utils2();
    module2.exports = (ast, options = {}) => {
      let stringify = (node, parent = {}) => {
        let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      };
      return stringify(ast);
    };
  }
});

// ../../node_modules/.pnpm/is-number@7.0.0/node_modules/is-number/index.js
var require_is_number = __commonJS({
  "../../node_modules/.pnpm/is-number@7.0.0/node_modules/is-number/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// ../../node_modules/.pnpm/to-regex-range@5.0.1/node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "../../node_modules/.pnpm/to-regex-range@5.0.1/node_modules/to-regex-range/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = __spreadValues({ relaxZeros: true }, options);
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens2 = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens2.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens2;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++)
        arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// ../../node_modules/.pnpm/fill-range@7.0.1/node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "../../node_modules/.pnpm/fill-range@7.0.1/node_modules/fill-range/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var util = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index2 = -1;
      if (value[0] === "-")
        value = value.slice(1);
      if (value === "0")
        return false;
      while (value[++index2] === "0")
        ;
      return index2 > 0;
    };
    var stringify = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash)
          input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength)
        input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, __spreadValues({ wrap: false }, options));
      }
      let start = String.fromCharCode(a);
      if (a === b)
        return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true)
        throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true)
          throw rangeError([start, end]);
        return [];
      }
      if (a === 0)
        a = 0;
      if (b === 0)
        b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index2 = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index2), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index2++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options) : toRegex(range, null, __spreadValues({ wrap: false }, options));
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index2 = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index2));
        a = descending ? a - step : a + step;
        index2++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = __spreadValues({}, options);
      if (opts.capture === true)
        opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step))
          return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/compile.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var fill = require_fill_range();
    var utils = require_utils2();
    var compile = (ast, options = {}) => {
      let walk = (node, parent = {}) => {
        let invalidBlock = utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let invalid = invalidBlock === true || invalidNode === true;
        let prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          let range = fill(...args, __spreadProps(__spreadValues({}, options), { wrap: false, toRegex: true }));
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/expand.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils2();
    var append = (queue = "", stash = "", enclose = false) => {
      let result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length)
        return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (let item of queue) {
        if (Array.isArray(item)) {
          for (let value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string")
              ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options = {}) => {
      let rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      let walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        let enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          let child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1)
              queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/constants.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      CHAR_0: "0",
      CHAR_9: "9",
      CHAR_UPPERCASE_A: "A",
      CHAR_LOWERCASE_A: "a",
      CHAR_UPPERCASE_Z: "Z",
      CHAR_LOWERCASE_Z: "z",
      CHAR_LEFT_PARENTHESES: "(",
      CHAR_RIGHT_PARENTHESES: ")",
      CHAR_ASTERISK: "*",
      CHAR_AMPERSAND: "&",
      CHAR_AT: "@",
      CHAR_BACKSLASH: "\\",
      CHAR_BACKTICK: "`",
      CHAR_CARRIAGE_RETURN: "\r",
      CHAR_CIRCUMFLEX_ACCENT: "^",
      CHAR_COLON: ":",
      CHAR_COMMA: ",",
      CHAR_DOLLAR: "$",
      CHAR_DOT: ".",
      CHAR_DOUBLE_QUOTE: '"',
      CHAR_EQUAL: "=",
      CHAR_EXCLAMATION_MARK: "!",
      CHAR_FORM_FEED: "\f",
      CHAR_FORWARD_SLASH: "/",
      CHAR_HASH: "#",
      CHAR_HYPHEN_MINUS: "-",
      CHAR_LEFT_ANGLE_BRACKET: "<",
      CHAR_LEFT_CURLY_BRACE: "{",
      CHAR_LEFT_SQUARE_BRACKET: "[",
      CHAR_LINE_FEED: "\n",
      CHAR_NO_BREAK_SPACE: "\xA0",
      CHAR_PERCENT: "%",
      CHAR_PLUS: "+",
      CHAR_QUESTION_MARK: "?",
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      CHAR_RIGHT_CURLY_BRACE: "}",
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      CHAR_SEMICOLON: ";",
      CHAR_SINGLE_QUOTE: "'",
      CHAR_SPACE: " ",
      CHAR_TAB: "	",
      CHAR_UNDERSCORE: "_",
      CHAR_VERTICAL_LINE: "|",
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
    };
  }
});

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/parse.js
var require_parse2 = __commonJS({
  "../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/parse.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      CHAR_BACKTICK,
      CHAR_COMMA,
      CHAR_DOT,
      CHAR_LEFT_PARENTHESES,
      CHAR_RIGHT_PARENTHESES,
      CHAR_LEFT_CURLY_BRACE,
      CHAR_RIGHT_CURLY_BRACE,
      CHAR_LEFT_SQUARE_BRACKET,
      CHAR_RIGHT_SQUARE_BRACKET,
      CHAR_DOUBLE_QUOTE,
      CHAR_SINGLE_QUOTE,
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants2();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      let opts = options || {};
      let max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      let ast = { type: "root", input, nodes: [] };
      let stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      let length = input.length;
      let index2 = 0;
      let depth = 0;
      let value;
      let memo = {};
      const advance = () => input[index2++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index2 < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let closed = true;
          let next2;
          while (index2 < length && (next2 = advance())) {
            value += next2;
            if (next2 === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next2 === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next2 === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          let open = value;
          let next2;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index2 < length && (next2 = advance())) {
            if (next2 === CHAR_BACKSLASH) {
              value += next2 + advance();
              continue;
            }
            if (next2 === open) {
              if (options.keepQuotes === true)
                value += next2;
              break;
            }
            value += next2;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          let brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          let type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            let open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          let siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            let before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open")
                node.isOpen = true;
              if (node.type === "close")
                node.isClose = true;
              if (!node.nodes)
                node.type = "text";
              node.invalid = true;
            }
          });
          let parent = stack[stack.length - 1];
          let index3 = parent.nodes.indexOf(block);
          parent.nodes.splice(index3, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/index.js
var require_braces = __commonJS({
  "../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse2();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (let pattern of input) {
          let result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// ../../node_modules/.pnpm/binary-extensions@2.2.0/node_modules/binary-extensions/binary-extensions.json
var require_binary_extensions = __commonJS({
  "../../node_modules/.pnpm/binary-extensions@2.2.0/node_modules/binary-extensions/binary-extensions.json"(exports, module2) {
    module2.exports = [
      "3dm",
      "3ds",
      "3g2",
      "3gp",
      "7z",
      "a",
      "aac",
      "adp",
      "ai",
      "aif",
      "aiff",
      "alz",
      "ape",
      "apk",
      "appimage",
      "ar",
      "arj",
      "asf",
      "au",
      "avi",
      "bak",
      "baml",
      "bh",
      "bin",
      "bk",
      "bmp",
      "btif",
      "bz2",
      "bzip2",
      "cab",
      "caf",
      "cgm",
      "class",
      "cmx",
      "cpio",
      "cr2",
      "cur",
      "dat",
      "dcm",
      "deb",
      "dex",
      "djvu",
      "dll",
      "dmg",
      "dng",
      "doc",
      "docm",
      "docx",
      "dot",
      "dotm",
      "dra",
      "DS_Store",
      "dsk",
      "dts",
      "dtshd",
      "dvb",
      "dwg",
      "dxf",
      "ecelp4800",
      "ecelp7470",
      "ecelp9600",
      "egg",
      "eol",
      "eot",
      "epub",
      "exe",
      "f4v",
      "fbs",
      "fh",
      "fla",
      "flac",
      "flatpak",
      "fli",
      "flv",
      "fpx",
      "fst",
      "fvt",
      "g3",
      "gh",
      "gif",
      "graffle",
      "gz",
      "gzip",
      "h261",
      "h263",
      "h264",
      "icns",
      "ico",
      "ief",
      "img",
      "ipa",
      "iso",
      "jar",
      "jpeg",
      "jpg",
      "jpgv",
      "jpm",
      "jxr",
      "key",
      "ktx",
      "lha",
      "lib",
      "lvp",
      "lz",
      "lzh",
      "lzma",
      "lzo",
      "m3u",
      "m4a",
      "m4v",
      "mar",
      "mdi",
      "mht",
      "mid",
      "midi",
      "mj2",
      "mka",
      "mkv",
      "mmr",
      "mng",
      "mobi",
      "mov",
      "movie",
      "mp3",
      "mp4",
      "mp4a",
      "mpeg",
      "mpg",
      "mpga",
      "mxu",
      "nef",
      "npx",
      "numbers",
      "nupkg",
      "o",
      "odp",
      "ods",
      "odt",
      "oga",
      "ogg",
      "ogv",
      "otf",
      "ott",
      "pages",
      "pbm",
      "pcx",
      "pdb",
      "pdf",
      "pea",
      "pgm",
      "pic",
      "png",
      "pnm",
      "pot",
      "potm",
      "potx",
      "ppa",
      "ppam",
      "ppm",
      "pps",
      "ppsm",
      "ppsx",
      "ppt",
      "pptm",
      "pptx",
      "psd",
      "pya",
      "pyc",
      "pyo",
      "pyv",
      "qt",
      "rar",
      "ras",
      "raw",
      "resources",
      "rgb",
      "rip",
      "rlc",
      "rmf",
      "rmvb",
      "rpm",
      "rtf",
      "rz",
      "s3m",
      "s7z",
      "scpt",
      "sgi",
      "shar",
      "snap",
      "sil",
      "sketch",
      "slk",
      "smv",
      "snk",
      "so",
      "stl",
      "suo",
      "sub",
      "swf",
      "tar",
      "tbz",
      "tbz2",
      "tga",
      "tgz",
      "thmx",
      "tif",
      "tiff",
      "tlz",
      "ttc",
      "ttf",
      "txz",
      "udf",
      "uvh",
      "uvi",
      "uvm",
      "uvp",
      "uvs",
      "uvu",
      "viv",
      "vob",
      "war",
      "wav",
      "wax",
      "wbmp",
      "wdp",
      "weba",
      "webm",
      "webp",
      "whl",
      "wim",
      "wm",
      "wma",
      "wmv",
      "wmx",
      "woff",
      "woff2",
      "wrm",
      "wvx",
      "xbm",
      "xif",
      "xla",
      "xlam",
      "xls",
      "xlsb",
      "xlsm",
      "xlsx",
      "xlt",
      "xltm",
      "xltx",
      "xm",
      "xmind",
      "xpi",
      "xpm",
      "xwd",
      "xz",
      "z",
      "zip",
      "zipx"
    ];
  }
});

// ../../node_modules/.pnpm/binary-extensions@2.2.0/node_modules/binary-extensions/index.js
var require_binary_extensions2 = __commonJS({
  "../../node_modules/.pnpm/binary-extensions@2.2.0/node_modules/binary-extensions/index.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = require_binary_extensions();
  }
});

// ../../node_modules/.pnpm/is-binary-path@2.1.0/node_modules/is-binary-path/index.js
var require_is_binary_path = __commonJS({
  "../../node_modules/.pnpm/is-binary-path@2.1.0/node_modules/is-binary-path/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var path2 = require("path");
    var binaryExtensions = require_binary_extensions2();
    var extensions = new Set(binaryExtensions);
    module2.exports = (filePath) => extensions.has(path2.extname(filePath).slice(1).toLowerCase());
  }
});

// ../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/constants.js
var require_constants3 = __commonJS({
  "../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/constants.js"(exports) {
    "use strict";
    init_cjs_shims();
    var { sep } = require("path");
    var { platform } = process;
    var os = require("os");
    exports.EV_ALL = "all";
    exports.EV_READY = "ready";
    exports.EV_ADD = "add";
    exports.EV_CHANGE = "change";
    exports.EV_ADD_DIR = "addDir";
    exports.EV_UNLINK = "unlink";
    exports.EV_UNLINK_DIR = "unlinkDir";
    exports.EV_RAW = "raw";
    exports.EV_ERROR = "error";
    exports.STR_DATA = "data";
    exports.STR_END = "end";
    exports.STR_CLOSE = "close";
    exports.FSEVENT_CREATED = "created";
    exports.FSEVENT_MODIFIED = "modified";
    exports.FSEVENT_DELETED = "deleted";
    exports.FSEVENT_MOVED = "moved";
    exports.FSEVENT_CLONED = "cloned";
    exports.FSEVENT_UNKNOWN = "unknown";
    exports.FSEVENT_TYPE_FILE = "file";
    exports.FSEVENT_TYPE_DIRECTORY = "directory";
    exports.FSEVENT_TYPE_SYMLINK = "symlink";
    exports.KEY_LISTENERS = "listeners";
    exports.KEY_ERR = "errHandlers";
    exports.KEY_RAW = "rawEmitters";
    exports.HANDLER_KEYS = [exports.KEY_LISTENERS, exports.KEY_ERR, exports.KEY_RAW];
    exports.DOT_SLASH = `.${sep}`;
    exports.BACK_SLASH_RE = /\\/g;
    exports.DOUBLE_SLASH_RE = /\/\//;
    exports.SLASH_OR_BACK_SLASH_RE = /[/\\]/;
    exports.DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
    exports.REPLACER_RE = /^\.[/\\]/;
    exports.SLASH = "/";
    exports.SLASH_SLASH = "//";
    exports.BRACE_START = "{";
    exports.BANG = "!";
    exports.ONE_DOT = ".";
    exports.TWO_DOTS = "..";
    exports.STAR = "*";
    exports.GLOBSTAR = "**";
    exports.ROOT_GLOBSTAR = "/**/*";
    exports.SLASH_GLOBSTAR = "/**";
    exports.DIR_SUFFIX = "Dir";
    exports.ANYMATCH_OPTS = { dot: true };
    exports.STRING_TYPE = "string";
    exports.FUNCTION_TYPE = "function";
    exports.EMPTY_STR = "";
    exports.EMPTY_FN = () => {
    };
    exports.IDENTITY_FN = (val) => val;
    exports.isWindows = platform === "win32";
    exports.isMacos = platform === "darwin";
    exports.isLinux = platform === "linux";
    exports.isIBMi = os.type() === "OS400";
  }
});

// ../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/nodefs-handler.js
var require_nodefs_handler = __commonJS({
  "../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/nodefs-handler.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var fs2 = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var isBinaryPath = require_is_binary_path();
    var {
      isWindows,
      isLinux,
      EMPTY_FN,
      EMPTY_STR,
      KEY_LISTENERS,
      KEY_ERR,
      KEY_RAW,
      HANDLER_KEYS,
      EV_CHANGE,
      EV_ADD,
      EV_ADD_DIR,
      EV_ERROR,
      STR_DATA,
      STR_END,
      BRACE_START,
      STAR
    } = require_constants3();
    var THROTTLE_MODE_WATCH = "watch";
    var open = promisify(fs2.open);
    var stat = promisify(fs2.stat);
    var lstat = promisify(fs2.lstat);
    var close = promisify(fs2.close);
    var fsrealpath = promisify(fs2.realpath);
    var statMethods = { lstat, stat };
    var foreach = (val, fn) => {
      if (val instanceof Set) {
        val.forEach(fn);
      } else {
        fn(val);
      }
    };
    var addAndConvert = (main, prop, item) => {
      let container = main[prop];
      if (!(container instanceof Set)) {
        main[prop] = container = /* @__PURE__ */ new Set([container]);
      }
      container.add(item);
    };
    var clearItem = (cont) => (key) => {
      const set = cont[key];
      if (set instanceof Set) {
        set.clear();
      } else {
        delete cont[key];
      }
    };
    var delFromSet = (main, prop, item) => {
      const container = main[prop];
      if (container instanceof Set) {
        container.delete(item);
      } else if (container === item) {
        delete main[prop];
      }
    };
    var isEmptySet = (val) => val instanceof Set ? val.size === 0 : !val;
    var FsWatchInstances = /* @__PURE__ */ new Map();
    function createFsWatchInstance(path2, options, listener, errHandler, emitRaw) {
      const handleEvent = (rawEvent, evPath) => {
        listener(path2);
        emitRaw(rawEvent, evPath, { watchedPath: path2 });
        if (evPath && path2 !== evPath) {
          fsWatchBroadcast(sysPath.resolve(path2, evPath), KEY_LISTENERS, sysPath.join(path2, evPath));
        }
      };
      try {
        return fs2.watch(path2, options, handleEvent);
      } catch (error) {
        errHandler(error);
      }
    }
    var fsWatchBroadcast = (fullPath, type, val1, val2, val3) => {
      const cont = FsWatchInstances.get(fullPath);
      if (!cont)
        return;
      foreach(cont[type], (listener) => {
        listener(val1, val2, val3);
      });
    };
    var setFsWatchListener = (path2, fullPath, options, handlers) => {
      const { listener, errHandler, rawEmitter } = handlers;
      let cont = FsWatchInstances.get(fullPath);
      let watcher;
      if (!options.persistent) {
        watcher = createFsWatchInstance(path2, options, listener, errHandler, rawEmitter);
        return watcher.close.bind(watcher);
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_ERR, errHandler);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        watcher = createFsWatchInstance(path2, options, fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS), errHandler, fsWatchBroadcast.bind(null, fullPath, KEY_RAW));
        if (!watcher)
          return;
        watcher.on(EV_ERROR, async (error) => {
          const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
          cont.watcherUnusable = true;
          if (isWindows && error.code === "EPERM") {
            try {
              const fd = await open(path2, "r");
              await close(fd);
              broadcastErr(error);
            } catch (err) {
            }
          } else {
            broadcastErr(error);
          }
        });
        cont = {
          listeners: listener,
          errHandlers: errHandler,
          rawEmitters: rawEmitter,
          watcher
        };
        FsWatchInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_ERR, errHandler);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          cont.watcher.close();
          FsWatchInstances.delete(fullPath);
          HANDLER_KEYS.forEach(clearItem(cont));
          cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    };
    var FsWatchFileInstances = /* @__PURE__ */ new Map();
    var setFsWatchFileListener = (path2, fullPath, options, handlers) => {
      const { listener, rawEmitter } = handlers;
      let cont = FsWatchFileInstances.get(fullPath);
      let listeners = /* @__PURE__ */ new Set();
      let rawEmitters = /* @__PURE__ */ new Set();
      const copts = cont && cont.options;
      if (copts && (copts.persistent < options.persistent || copts.interval > options.interval)) {
        listeners = cont.listeners;
        rawEmitters = cont.rawEmitters;
        fs2.unwatchFile(fullPath);
        cont = void 0;
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        cont = {
          listeners: listener,
          rawEmitters: rawEmitter,
          options,
          watcher: fs2.watchFile(fullPath, options, (curr, prev) => {
            foreach(cont.rawEmitters, (rawEmitter2) => {
              rawEmitter2(EV_CHANGE, fullPath, { curr, prev });
            });
            const currmtime = curr.mtimeMs;
            if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) {
              foreach(cont.listeners, (listener2) => listener2(path2, curr));
            }
          })
        };
        FsWatchFileInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          FsWatchFileInstances.delete(fullPath);
          fs2.unwatchFile(fullPath);
          cont.options = cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    };
    var NodeFsHandler = class {
      constructor(fsW) {
        this.fsw = fsW;
        this._boundHandleError = (error) => fsW._handleError(error);
      }
      _watchWithNodeFs(path2, listener) {
        const opts = this.fsw.options;
        const directory = sysPath.dirname(path2);
        const basename = sysPath.basename(path2);
        const parent = this.fsw._getWatchedDir(directory);
        parent.add(basename);
        const absolutePath = sysPath.resolve(path2);
        const options = { persistent: opts.persistent };
        if (!listener)
          listener = EMPTY_FN;
        let closer;
        if (opts.usePolling) {
          options.interval = opts.enableBinaryInterval && isBinaryPath(basename) ? opts.binaryInterval : opts.interval;
          closer = setFsWatchFileListener(path2, absolutePath, options, {
            listener,
            rawEmitter: this.fsw._emitRaw
          });
        } else {
          closer = setFsWatchListener(path2, absolutePath, options, {
            listener,
            errHandler: this._boundHandleError,
            rawEmitter: this.fsw._emitRaw
          });
        }
        return closer;
      }
      _handleFile(file, stats, initialAdd) {
        if (this.fsw.closed) {
          return;
        }
        const dirname = sysPath.dirname(file);
        const basename = sysPath.basename(file);
        const parent = this.fsw._getWatchedDir(dirname);
        let prevStats = stats;
        if (parent.has(basename))
          return;
        const listener = async (path2, newStats) => {
          if (!this.fsw._throttle(THROTTLE_MODE_WATCH, file, 5))
            return;
          if (!newStats || newStats.mtimeMs === 0) {
            try {
              const newStats2 = await stat(file);
              if (this.fsw.closed)
                return;
              const at = newStats2.atimeMs;
              const mt = newStats2.mtimeMs;
              if (!at || at <= mt || mt !== prevStats.mtimeMs) {
                this.fsw._emit(EV_CHANGE, file, newStats2);
              }
              if (isLinux && prevStats.ino !== newStats2.ino) {
                this.fsw._closeFile(path2);
                prevStats = newStats2;
                this.fsw._addPathCloser(path2, this._watchWithNodeFs(file, listener));
              } else {
                prevStats = newStats2;
              }
            } catch (error) {
              this.fsw._remove(dirname, basename);
            }
          } else if (parent.has(basename)) {
            const at = newStats.atimeMs;
            const mt = newStats.mtimeMs;
            if (!at || at <= mt || mt !== prevStats.mtimeMs) {
              this.fsw._emit(EV_CHANGE, file, newStats);
            }
            prevStats = newStats;
          }
        };
        const closer = this._watchWithNodeFs(file, listener);
        if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
          if (!this.fsw._throttle(EV_ADD, file, 0))
            return;
          this.fsw._emit(EV_ADD, file, stats);
        }
        return closer;
      }
      async _handleSymlink(entry, directory, path2, item) {
        if (this.fsw.closed) {
          return;
        }
        const full = entry.fullPath;
        const dir = this.fsw._getWatchedDir(directory);
        if (!this.fsw.options.followSymlinks) {
          this.fsw._incrReadyCount();
          let linkPath;
          try {
            linkPath = await fsrealpath(path2);
          } catch (e) {
            this.fsw._emitReady();
            return true;
          }
          if (this.fsw.closed)
            return;
          if (dir.has(item)) {
            if (this.fsw._symlinkPaths.get(full) !== linkPath) {
              this.fsw._symlinkPaths.set(full, linkPath);
              this.fsw._emit(EV_CHANGE, path2, entry.stats);
            }
          } else {
            dir.add(item);
            this.fsw._symlinkPaths.set(full, linkPath);
            this.fsw._emit(EV_ADD, path2, entry.stats);
          }
          this.fsw._emitReady();
          return true;
        }
        if (this.fsw._symlinkPaths.has(full)) {
          return true;
        }
        this.fsw._symlinkPaths.set(full, true);
      }
      _handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
        directory = sysPath.join(directory, EMPTY_STR);
        if (!wh.hasGlob) {
          throttler = this.fsw._throttle("readdir", directory, 1e3);
          if (!throttler)
            return;
        }
        const previous = this.fsw._getWatchedDir(wh.path);
        const current = /* @__PURE__ */ new Set();
        let stream = this.fsw._readdirp(directory, {
          fileFilter: (entry) => wh.filterPath(entry),
          directoryFilter: (entry) => wh.filterDir(entry),
          depth: 0
        }).on(STR_DATA, async (entry) => {
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          const item = entry.path;
          let path2 = sysPath.join(directory, item);
          current.add(item);
          if (entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path2, item)) {
            return;
          }
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          if (item === target || !target && !previous.has(item)) {
            this.fsw._incrReadyCount();
            path2 = sysPath.join(dir, sysPath.relative(dir, path2));
            this._addToNodeFs(path2, initialAdd, wh, depth + 1);
          }
        }).on(EV_ERROR, this._boundHandleError);
        return new Promise((resolve) => stream.once(STR_END, () => {
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          const wasThrottled = throttler ? throttler.clear() : false;
          resolve();
          previous.getChildren().filter((item) => {
            return item !== directory && !current.has(item) && (!wh.hasGlob || wh.filterPath({
              fullPath: sysPath.resolve(directory, item)
            }));
          }).forEach((item) => {
            this.fsw._remove(directory, item);
          });
          stream = void 0;
          if (wasThrottled)
            this._handleRead(directory, false, wh, target, dir, depth, throttler);
        }));
      }
      async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
        const parentDir = this.fsw._getWatchedDir(sysPath.dirname(dir));
        const tracked = parentDir.has(sysPath.basename(dir));
        if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
          if (!wh.hasGlob || wh.globFilter(dir))
            this.fsw._emit(EV_ADD_DIR, dir, stats);
        }
        parentDir.add(sysPath.basename(dir));
        this.fsw._getWatchedDir(dir);
        let throttler;
        let closer;
        const oDepth = this.fsw.options.depth;
        if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
          if (!target) {
            await this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler);
            if (this.fsw.closed)
              return;
          }
          closer = this._watchWithNodeFs(dir, (dirPath, stats2) => {
            if (stats2 && stats2.mtimeMs === 0)
              return;
            this._handleRead(dirPath, false, wh, target, dir, depth, throttler);
          });
        }
        return closer;
      }
      async _addToNodeFs(path2, initialAdd, priorWh, depth, target) {
        const ready = this.fsw._emitReady;
        if (this.fsw._isIgnored(path2) || this.fsw.closed) {
          ready();
          return false;
        }
        const wh = this.fsw._getWatchHelpers(path2, depth);
        if (!wh.hasGlob && priorWh) {
          wh.hasGlob = priorWh.hasGlob;
          wh.globFilter = priorWh.globFilter;
          wh.filterPath = (entry) => priorWh.filterPath(entry);
          wh.filterDir = (entry) => priorWh.filterDir(entry);
        }
        try {
          const stats = await statMethods[wh.statMethod](wh.watchPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(wh.watchPath, stats)) {
            ready();
            return false;
          }
          const follow = this.fsw.options.followSymlinks && !path2.includes(STAR) && !path2.includes(BRACE_START);
          let closer;
          if (stats.isDirectory()) {
            const absPath = sysPath.resolve(path2);
            const targetPath = follow ? await fsrealpath(path2) : path2;
            if (this.fsw.closed)
              return;
            closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (absPath !== targetPath && targetPath !== void 0) {
              this.fsw._symlinkPaths.set(absPath, targetPath);
            }
          } else if (stats.isSymbolicLink()) {
            const targetPath = follow ? await fsrealpath(path2) : path2;
            if (this.fsw.closed)
              return;
            const parent = sysPath.dirname(wh.watchPath);
            this.fsw._getWatchedDir(parent).add(wh.watchPath);
            this.fsw._emit(EV_ADD, wh.watchPath, stats);
            closer = await this._handleDir(parent, stats, initialAdd, depth, path2, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (targetPath !== void 0) {
              this.fsw._symlinkPaths.set(sysPath.resolve(path2), targetPath);
            }
          } else {
            closer = this._handleFile(wh.watchPath, stats, initialAdd);
          }
          ready();
          this.fsw._addPathCloser(path2, closer);
          return false;
        } catch (error) {
          if (this.fsw._handleError(error)) {
            ready();
            return path2;
          }
        }
      }
    };
    module2.exports = NodeFsHandler;
  }
});

// ../../node_modules/.pnpm/fsevents@2.3.2/node_modules/fsevents/fsevents.node
var fsevents_default;
var init_fsevents = __esm({
  "../../node_modules/.pnpm/fsevents@2.3.2/node_modules/fsevents/fsevents.node"() {
    fsevents_default = "./fsevents-72LCIACT.node";
  }
});

// node-file:/Users/kakao_ent/Desktop/adorable-css/node_modules/.pnpm/fsevents@2.3.2/node_modules/fsevents/fsevents.node
var require_fsevents = __commonJS({
  "node-file:/Users/kakao_ent/Desktop/adorable-css/node_modules/.pnpm/fsevents@2.3.2/node_modules/fsevents/fsevents.node"(exports, module2) {
    init_cjs_shims();
    init_fsevents();
    try {
      module2.exports = require(fsevents_default);
    } catch {
    }
  }
});

// ../../node_modules/.pnpm/fsevents@2.3.2/node_modules/fsevents/fsevents.js
var require_fsevents2 = __commonJS({
  "../../node_modules/.pnpm/fsevents@2.3.2/node_modules/fsevents/fsevents.js"(exports) {
    "use strict";
    init_cjs_shims();
    if (process.platform !== "darwin") {
      throw new Error(`Module 'fsevents' is not compatible with platform '${process.platform}'`);
    }
    var Native = require_fsevents();
    var events = Native.constants;
    function watch2(path2, since, handler) {
      if (typeof path2 !== "string") {
        throw new TypeError(`fsevents argument 1 must be a string and not a ${typeof path2}`);
      }
      if (typeof since === "function" && typeof handler === "undefined") {
        handler = since;
        since = Native.flags.SinceNow;
      }
      if (typeof since !== "number") {
        throw new TypeError(`fsevents argument 2 must be a number and not a ${typeof since}`);
      }
      if (typeof handler !== "function") {
        throw new TypeError(`fsevents argument 3 must be a function and not a ${typeof handler}`);
      }
      let instance = Native.start(Native.global, path2, since, handler);
      if (!instance)
        throw new Error(`could not watch: ${path2}`);
      return () => {
        const result = instance ? Promise.resolve(instance).then(Native.stop) : Promise.resolve(void 0);
        instance = void 0;
        return result;
      };
    }
    function getInfo(path2, flags) {
      return {
        path: path2,
        flags,
        event: getEventType(flags),
        type: getFileType(flags),
        changes: getFileChanges(flags)
      };
    }
    function getFileType(flags) {
      if (events.ItemIsFile & flags)
        return "file";
      if (events.ItemIsDir & flags)
        return "directory";
      if (events.ItemIsSymlink & flags)
        return "symlink";
    }
    function anyIsTrue(obj) {
      for (let key in obj) {
        if (obj[key])
          return true;
      }
      return false;
    }
    function getEventType(flags) {
      if (events.ItemRemoved & flags)
        return "deleted";
      if (events.ItemRenamed & flags)
        return "moved";
      if (events.ItemCreated & flags)
        return "created";
      if (events.ItemModified & flags)
        return "modified";
      if (events.RootChanged & flags)
        return "root-changed";
      if (events.ItemCloned & flags)
        return "cloned";
      if (anyIsTrue(flags))
        return "modified";
      return "unknown";
    }
    function getFileChanges(flags) {
      return {
        inode: !!(events.ItemInodeMetaMod & flags),
        finder: !!(events.ItemFinderInfoMod & flags),
        access: !!(events.ItemChangeOwner & flags),
        xattrs: !!(events.ItemXattrMod & flags)
      };
    }
    exports.watch = watch2;
    exports.getInfo = getInfo;
    exports.constants = events;
  }
});

// ../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/fsevents-handler.js
var require_fsevents_handler = __commonJS({
  "../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/fsevents-handler.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var fs2 = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var fsevents;
    try {
      fsevents = require_fsevents2();
    } catch (error) {
      if (process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR)
        console.error(error);
    }
    if (fsevents) {
      const mtch = process.version.match(/v(\d+)\.(\d+)/);
      if (mtch && mtch[1] && mtch[2]) {
        const maj = Number.parseInt(mtch[1], 10);
        const min = Number.parseInt(mtch[2], 10);
        if (maj === 8 && min < 16) {
          fsevents = void 0;
        }
      }
    }
    var {
      EV_ADD,
      EV_CHANGE,
      EV_ADD_DIR,
      EV_UNLINK,
      EV_ERROR,
      STR_DATA,
      STR_END,
      FSEVENT_CREATED,
      FSEVENT_MODIFIED,
      FSEVENT_DELETED,
      FSEVENT_MOVED,
      FSEVENT_UNKNOWN,
      FSEVENT_TYPE_FILE,
      FSEVENT_TYPE_DIRECTORY,
      FSEVENT_TYPE_SYMLINK,
      ROOT_GLOBSTAR,
      DIR_SUFFIX,
      DOT_SLASH,
      FUNCTION_TYPE,
      EMPTY_FN,
      IDENTITY_FN
    } = require_constants3();
    var Depth = (value) => isNaN(value) ? {} : { depth: value };
    var stat = promisify(fs2.stat);
    var lstat = promisify(fs2.lstat);
    var realpath = promisify(fs2.realpath);
    var statMethods = { stat, lstat };
    var FSEventsWatchers = /* @__PURE__ */ new Map();
    var consolidateThreshhold = 10;
    var wrongEventFlags = /* @__PURE__ */ new Set([
      69888,
      70400,
      71424,
      72704,
      73472,
      131328,
      131840,
      262912
    ]);
    var createFSEventsInstance = (path2, callback) => {
      const stop = fsevents.watch(path2, callback);
      return { stop };
    };
    function setFSEventsListener(path2, realPath, listener, rawEmitter) {
      let watchPath = sysPath.extname(realPath) ? sysPath.dirname(realPath) : realPath;
      const parentPath = sysPath.dirname(watchPath);
      let cont = FSEventsWatchers.get(watchPath);
      if (couldConsolidate(parentPath)) {
        watchPath = parentPath;
      }
      const resolvedPath = sysPath.resolve(path2);
      const hasSymlink = resolvedPath !== realPath;
      const filteredListener = (fullPath, flags, info) => {
        if (hasSymlink)
          fullPath = fullPath.replace(realPath, resolvedPath);
        if (fullPath === resolvedPath || !fullPath.indexOf(resolvedPath + sysPath.sep))
          listener(fullPath, flags, info);
      };
      let watchedParent = false;
      for (const watchedPath of FSEventsWatchers.keys()) {
        if (realPath.indexOf(sysPath.resolve(watchedPath) + sysPath.sep) === 0) {
          watchPath = watchedPath;
          cont = FSEventsWatchers.get(watchPath);
          watchedParent = true;
          break;
        }
      }
      if (cont || watchedParent) {
        cont.listeners.add(filteredListener);
      } else {
        cont = {
          listeners: /* @__PURE__ */ new Set([filteredListener]),
          rawEmitter,
          watcher: createFSEventsInstance(watchPath, (fullPath, flags) => {
            if (!cont.listeners.size)
              return;
            const info = fsevents.getInfo(fullPath, flags);
            cont.listeners.forEach((list) => {
              list(fullPath, flags, info);
            });
            cont.rawEmitter(info.event, fullPath, info);
          })
        };
        FSEventsWatchers.set(watchPath, cont);
      }
      return () => {
        const lst = cont.listeners;
        lst.delete(filteredListener);
        if (!lst.size) {
          FSEventsWatchers.delete(watchPath);
          if (cont.watcher)
            return cont.watcher.stop().then(() => {
              cont.rawEmitter = cont.watcher = void 0;
              Object.freeze(cont);
            });
        }
      };
    }
    var couldConsolidate = (path2) => {
      let count = 0;
      for (const watchPath of FSEventsWatchers.keys()) {
        if (watchPath.indexOf(path2) === 0) {
          count++;
          if (count >= consolidateThreshhold) {
            return true;
          }
        }
      }
      return false;
    };
    var canUse = () => fsevents && FSEventsWatchers.size < 128;
    var calcDepth = (path2, root) => {
      let i = 0;
      while (!path2.indexOf(root) && (path2 = sysPath.dirname(path2)) !== root)
        i++;
      return i;
    };
    var sameTypes = (info, stats) => info.type === FSEVENT_TYPE_DIRECTORY && stats.isDirectory() || info.type === FSEVENT_TYPE_SYMLINK && stats.isSymbolicLink() || info.type === FSEVENT_TYPE_FILE && stats.isFile();
    var FsEventsHandler = class {
      constructor(fsw) {
        this.fsw = fsw;
      }
      checkIgnored(path2, stats) {
        const ipaths = this.fsw._ignoredPaths;
        if (this.fsw._isIgnored(path2, stats)) {
          ipaths.add(path2);
          if (stats && stats.isDirectory()) {
            ipaths.add(path2 + ROOT_GLOBSTAR);
          }
          return true;
        }
        ipaths.delete(path2);
        ipaths.delete(path2 + ROOT_GLOBSTAR);
      }
      addOrChange(path2, fullPath, realPath, parent, watchedDir, item, info, opts) {
        const event = watchedDir.has(item) ? EV_CHANGE : EV_ADD;
        this.handleEvent(event, path2, fullPath, realPath, parent, watchedDir, item, info, opts);
      }
      async checkExists(path2, fullPath, realPath, parent, watchedDir, item, info, opts) {
        try {
          const stats = await stat(path2);
          if (this.fsw.closed)
            return;
          if (sameTypes(info, stats)) {
            this.addOrChange(path2, fullPath, realPath, parent, watchedDir, item, info, opts);
          } else {
            this.handleEvent(EV_UNLINK, path2, fullPath, realPath, parent, watchedDir, item, info, opts);
          }
        } catch (error) {
          if (error.code === "EACCES") {
            this.addOrChange(path2, fullPath, realPath, parent, watchedDir, item, info, opts);
          } else {
            this.handleEvent(EV_UNLINK, path2, fullPath, realPath, parent, watchedDir, item, info, opts);
          }
        }
      }
      handleEvent(event, path2, fullPath, realPath, parent, watchedDir, item, info, opts) {
        if (this.fsw.closed || this.checkIgnored(path2))
          return;
        if (event === EV_UNLINK) {
          const isDirectory = info.type === FSEVENT_TYPE_DIRECTORY;
          if (isDirectory || watchedDir.has(item)) {
            this.fsw._remove(parent, item, isDirectory);
          }
        } else {
          if (event === EV_ADD) {
            if (info.type === FSEVENT_TYPE_DIRECTORY)
              this.fsw._getWatchedDir(path2);
            if (info.type === FSEVENT_TYPE_SYMLINK && opts.followSymlinks) {
              const curDepth = opts.depth === void 0 ? void 0 : calcDepth(fullPath, realPath) + 1;
              return this._addToFsEvents(path2, false, true, curDepth);
            }
            this.fsw._getWatchedDir(parent).add(item);
          }
          const eventName = info.type === FSEVENT_TYPE_DIRECTORY ? event + DIR_SUFFIX : event;
          this.fsw._emit(eventName, path2);
          if (eventName === EV_ADD_DIR)
            this._addToFsEvents(path2, false, true);
        }
      }
      _watchWithFsEvents(watchPath, realPath, transform, globFilter) {
        if (this.fsw.closed || this.fsw._isIgnored(watchPath))
          return;
        const opts = this.fsw.options;
        const watchCallback = async (fullPath, flags, info) => {
          if (this.fsw.closed)
            return;
          if (opts.depth !== void 0 && calcDepth(fullPath, realPath) > opts.depth)
            return;
          const path2 = transform(sysPath.join(watchPath, sysPath.relative(watchPath, fullPath)));
          if (globFilter && !globFilter(path2))
            return;
          const parent = sysPath.dirname(path2);
          const item = sysPath.basename(path2);
          const watchedDir = this.fsw._getWatchedDir(info.type === FSEVENT_TYPE_DIRECTORY ? path2 : parent);
          if (wrongEventFlags.has(flags) || info.event === FSEVENT_UNKNOWN) {
            if (typeof opts.ignored === FUNCTION_TYPE) {
              let stats;
              try {
                stats = await stat(path2);
              } catch (error) {
              }
              if (this.fsw.closed)
                return;
              if (this.checkIgnored(path2, stats))
                return;
              if (sameTypes(info, stats)) {
                this.addOrChange(path2, fullPath, realPath, parent, watchedDir, item, info, opts);
              } else {
                this.handleEvent(EV_UNLINK, path2, fullPath, realPath, parent, watchedDir, item, info, opts);
              }
            } else {
              this.checkExists(path2, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          } else {
            switch (info.event) {
              case FSEVENT_CREATED:
              case FSEVENT_MODIFIED:
                return this.addOrChange(path2, fullPath, realPath, parent, watchedDir, item, info, opts);
              case FSEVENT_DELETED:
              case FSEVENT_MOVED:
                return this.checkExists(path2, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          }
        };
        const closer = setFSEventsListener(watchPath, realPath, watchCallback, this.fsw._emitRaw);
        this.fsw._emitReady();
        return closer;
      }
      async _handleFsEventsSymlink(linkPath, fullPath, transform, curDepth) {
        if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath))
          return;
        this.fsw._symlinkPaths.set(fullPath, true);
        this.fsw._incrReadyCount();
        try {
          const linkTarget = await realpath(linkPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(linkTarget)) {
            return this.fsw._emitReady();
          }
          this.fsw._incrReadyCount();
          this._addToFsEvents(linkTarget || linkPath, (path2) => {
            let aliasedPath = linkPath;
            if (linkTarget && linkTarget !== DOT_SLASH) {
              aliasedPath = path2.replace(linkTarget, linkPath);
            } else if (path2 !== DOT_SLASH) {
              aliasedPath = sysPath.join(linkPath, path2);
            }
            return transform(aliasedPath);
          }, false, curDepth);
        } catch (error) {
          if (this.fsw._handleError(error)) {
            return this.fsw._emitReady();
          }
        }
      }
      emitAdd(newPath, stats, processPath, opts, forceAdd) {
        const pp = processPath(newPath);
        const isDir = stats.isDirectory();
        const dirObj = this.fsw._getWatchedDir(sysPath.dirname(pp));
        const base = sysPath.basename(pp);
        if (isDir)
          this.fsw._getWatchedDir(pp);
        if (dirObj.has(base))
          return;
        dirObj.add(base);
        if (!opts.ignoreInitial || forceAdd === true) {
          this.fsw._emit(isDir ? EV_ADD_DIR : EV_ADD, pp, stats);
        }
      }
      initWatch(realPath, path2, wh, processPath) {
        if (this.fsw.closed)
          return;
        const closer = this._watchWithFsEvents(wh.watchPath, sysPath.resolve(realPath || wh.watchPath), processPath, wh.globFilter);
        this.fsw._addPathCloser(path2, closer);
      }
      async _addToFsEvents(path2, transform, forceAdd, priorDepth) {
        if (this.fsw.closed) {
          return;
        }
        const opts = this.fsw.options;
        const processPath = typeof transform === FUNCTION_TYPE ? transform : IDENTITY_FN;
        const wh = this.fsw._getWatchHelpers(path2);
        try {
          const stats = await statMethods[wh.statMethod](wh.watchPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(wh.watchPath, stats)) {
            throw null;
          }
          if (stats.isDirectory()) {
            if (!wh.globFilter)
              this.emitAdd(processPath(path2), stats, processPath, opts, forceAdd);
            if (priorDepth && priorDepth > opts.depth)
              return;
            this.fsw._readdirp(wh.watchPath, __spreadValues({
              fileFilter: (entry) => wh.filterPath(entry),
              directoryFilter: (entry) => wh.filterDir(entry)
            }, Depth(opts.depth - (priorDepth || 0)))).on(STR_DATA, (entry) => {
              if (this.fsw.closed) {
                return;
              }
              if (entry.stats.isDirectory() && !wh.filterPath(entry))
                return;
              const joinedPath = sysPath.join(wh.watchPath, entry.path);
              const { fullPath } = entry;
              if (wh.followSymlinks && entry.stats.isSymbolicLink()) {
                const curDepth = opts.depth === void 0 ? void 0 : calcDepth(joinedPath, sysPath.resolve(wh.watchPath)) + 1;
                this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
              } else {
                this.emitAdd(joinedPath, entry.stats, processPath, opts, forceAdd);
              }
            }).on(EV_ERROR, EMPTY_FN).on(STR_END, () => {
              this.fsw._emitReady();
            });
          } else {
            this.emitAdd(wh.watchPath, stats, processPath, opts, forceAdd);
            this.fsw._emitReady();
          }
        } catch (error) {
          if (!error || this.fsw._handleError(error)) {
            this.fsw._emitReady();
            this.fsw._emitReady();
          }
        }
        if (opts.persistent && forceAdd !== true) {
          if (typeof transform === FUNCTION_TYPE) {
            this.initWatch(void 0, path2, wh, processPath);
          } else {
            let realPath;
            try {
              realPath = await realpath(wh.watchPath);
            } catch (e) {
            }
            this.initWatch(realPath, path2, wh, processPath);
          }
        }
      }
    };
    module2.exports = FsEventsHandler;
    module2.exports.canUse = canUse;
  }
});

// ../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/index.js
var require_chokidar = __commonJS({
  "../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var { EventEmitter: EventEmitter2 } = require("events");
    var fs2 = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var readdirp = require_readdirp();
    var anymatch = require_anymatch().default;
    var globParent = require_glob_parent();
    var isGlob = require_is_glob();
    var braces = require_braces();
    var normalizePath = require_normalize_path();
    var NodeFsHandler = require_nodefs_handler();
    var FsEventsHandler = require_fsevents_handler();
    var {
      EV_ALL,
      EV_READY,
      EV_ADD,
      EV_CHANGE,
      EV_UNLINK,
      EV_ADD_DIR,
      EV_UNLINK_DIR,
      EV_RAW,
      EV_ERROR,
      STR_CLOSE,
      STR_END,
      BACK_SLASH_RE,
      DOUBLE_SLASH_RE,
      SLASH_OR_BACK_SLASH_RE,
      DOT_RE,
      REPLACER_RE,
      SLASH,
      SLASH_SLASH,
      BRACE_START,
      BANG,
      ONE_DOT,
      TWO_DOTS,
      GLOBSTAR,
      SLASH_GLOBSTAR,
      ANYMATCH_OPTS,
      STRING_TYPE,
      FUNCTION_TYPE,
      EMPTY_STR,
      EMPTY_FN,
      isWindows,
      isMacos,
      isIBMi
    } = require_constants3();
    var stat = promisify(fs2.stat);
    var readdir = promisify(fs2.readdir);
    var arrify = (value = []) => Array.isArray(value) ? value : [value];
    var flatten = (list, result = []) => {
      list.forEach((item) => {
        if (Array.isArray(item)) {
          flatten(item, result);
        } else {
          result.push(item);
        }
      });
      return result;
    };
    var unifyPaths = (paths_) => {
      const paths = flatten(arrify(paths_));
      if (!paths.every((p) => typeof p === STRING_TYPE)) {
        throw new TypeError(`Non-string provided as watch path: ${paths}`);
      }
      return paths.map(normalizePathToUnix);
    };
    var toUnix = (string) => {
      let str = string.replace(BACK_SLASH_RE, SLASH);
      let prepend = false;
      if (str.startsWith(SLASH_SLASH)) {
        prepend = true;
      }
      while (str.match(DOUBLE_SLASH_RE)) {
        str = str.replace(DOUBLE_SLASH_RE, SLASH);
      }
      if (prepend) {
        str = SLASH + str;
      }
      return str;
    };
    var normalizePathToUnix = (path2) => toUnix(sysPath.normalize(toUnix(path2)));
    var normalizeIgnored = (cwd = EMPTY_STR) => (path2) => {
      if (typeof path2 !== STRING_TYPE)
        return path2;
      return normalizePathToUnix(sysPath.isAbsolute(path2) ? path2 : sysPath.join(cwd, path2));
    };
    var getAbsolutePath = (path2, cwd) => {
      if (sysPath.isAbsolute(path2)) {
        return path2;
      }
      if (path2.startsWith(BANG)) {
        return BANG + sysPath.join(cwd, path2.slice(1));
      }
      return sysPath.join(cwd, path2);
    };
    var undef = (opts, key) => opts[key] === void 0;
    var DirEntry = class {
      constructor(dir, removeWatcher) {
        this.path = dir;
        this._removeWatcher = removeWatcher;
        this.items = /* @__PURE__ */ new Set();
      }
      add(item) {
        const { items } = this;
        if (!items)
          return;
        if (item !== ONE_DOT && item !== TWO_DOTS)
          items.add(item);
      }
      async remove(item) {
        const { items } = this;
        if (!items)
          return;
        items.delete(item);
        if (items.size > 0)
          return;
        const dir = this.path;
        try {
          await readdir(dir);
        } catch (err) {
          if (this._removeWatcher) {
            this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
          }
        }
      }
      has(item) {
        const { items } = this;
        if (!items)
          return;
        return items.has(item);
      }
      getChildren() {
        const { items } = this;
        if (!items)
          return;
        return [...items.values()];
      }
      dispose() {
        this.items.clear();
        delete this.path;
        delete this._removeWatcher;
        delete this.items;
        Object.freeze(this);
      }
    };
    var STAT_METHOD_F = "stat";
    var STAT_METHOD_L = "lstat";
    var WatchHelper = class {
      constructor(path2, watchPath, follow, fsw) {
        this.fsw = fsw;
        this.path = path2 = path2.replace(REPLACER_RE, EMPTY_STR);
        this.watchPath = watchPath;
        this.fullWatchPath = sysPath.resolve(watchPath);
        this.hasGlob = watchPath !== path2;
        if (path2 === EMPTY_STR)
          this.hasGlob = false;
        this.globSymlink = this.hasGlob && follow ? void 0 : false;
        this.globFilter = this.hasGlob ? anymatch(path2, void 0, ANYMATCH_OPTS) : false;
        this.dirParts = this.getDirParts(path2);
        this.dirParts.forEach((parts) => {
          if (parts.length > 1)
            parts.pop();
        });
        this.followSymlinks = follow;
        this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
      }
      checkGlobSymlink(entry) {
        if (this.globSymlink === void 0) {
          this.globSymlink = entry.fullParentDir === this.fullWatchPath ? false : { realPath: entry.fullParentDir, linkPath: this.fullWatchPath };
        }
        if (this.globSymlink) {
          return entry.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath);
        }
        return entry.fullPath;
      }
      entryPath(entry) {
        return sysPath.join(this.watchPath, sysPath.relative(this.watchPath, this.checkGlobSymlink(entry)));
      }
      filterPath(entry) {
        const { stats } = entry;
        if (stats && stats.isSymbolicLink())
          return this.filterDir(entry);
        const resolvedPath = this.entryPath(entry);
        const matchesGlob = this.hasGlob && typeof this.globFilter === FUNCTION_TYPE ? this.globFilter(resolvedPath) : true;
        return matchesGlob && this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
      }
      getDirParts(path2) {
        if (!this.hasGlob)
          return [];
        const parts = [];
        const expandedPath = path2.includes(BRACE_START) ? braces.expand(path2) : [path2];
        expandedPath.forEach((path3) => {
          parts.push(sysPath.relative(this.watchPath, path3).split(SLASH_OR_BACK_SLASH_RE));
        });
        return parts;
      }
      filterDir(entry) {
        if (this.hasGlob) {
          const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
          let globstar = false;
          this.unmatchedGlob = !this.dirParts.some((parts) => {
            return parts.every((part, i) => {
              if (part === GLOBSTAR)
                globstar = true;
              return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i], ANYMATCH_OPTS);
            });
          });
        }
        return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
      }
    };
    var FSWatcher = class extends EventEmitter2 {
      constructor(_opts) {
        super();
        const opts = {};
        if (_opts)
          Object.assign(opts, _opts);
        this._watched = /* @__PURE__ */ new Map();
        this._closers = /* @__PURE__ */ new Map();
        this._ignoredPaths = /* @__PURE__ */ new Set();
        this._throttled = /* @__PURE__ */ new Map();
        this._symlinkPaths = /* @__PURE__ */ new Map();
        this._streams = /* @__PURE__ */ new Set();
        this.closed = false;
        if (undef(opts, "persistent"))
          opts.persistent = true;
        if (undef(opts, "ignoreInitial"))
          opts.ignoreInitial = false;
        if (undef(opts, "ignorePermissionErrors"))
          opts.ignorePermissionErrors = false;
        if (undef(opts, "interval"))
          opts.interval = 100;
        if (undef(opts, "binaryInterval"))
          opts.binaryInterval = 300;
        if (undef(opts, "disableGlobbing"))
          opts.disableGlobbing = false;
        opts.enableBinaryInterval = opts.binaryInterval !== opts.interval;
        if (undef(opts, "useFsEvents"))
          opts.useFsEvents = !opts.usePolling;
        const canUseFsEvents = FsEventsHandler.canUse();
        if (!canUseFsEvents)
          opts.useFsEvents = false;
        if (undef(opts, "usePolling") && !opts.useFsEvents) {
          opts.usePolling = isMacos;
        }
        if (isIBMi) {
          opts.usePolling = true;
        }
        const envPoll = process.env.CHOKIDAR_USEPOLLING;
        if (envPoll !== void 0) {
          const envLower = envPoll.toLowerCase();
          if (envLower === "false" || envLower === "0") {
            opts.usePolling = false;
          } else if (envLower === "true" || envLower === "1") {
            opts.usePolling = true;
          } else {
            opts.usePolling = !!envLower;
          }
        }
        const envInterval = process.env.CHOKIDAR_INTERVAL;
        if (envInterval) {
          opts.interval = Number.parseInt(envInterval, 10);
        }
        if (undef(opts, "atomic"))
          opts.atomic = !opts.usePolling && !opts.useFsEvents;
        if (opts.atomic)
          this._pendingUnlinks = /* @__PURE__ */ new Map();
        if (undef(opts, "followSymlinks"))
          opts.followSymlinks = true;
        if (undef(opts, "awaitWriteFinish"))
          opts.awaitWriteFinish = false;
        if (opts.awaitWriteFinish === true)
          opts.awaitWriteFinish = {};
        const awf = opts.awaitWriteFinish;
        if (awf) {
          if (!awf.stabilityThreshold)
            awf.stabilityThreshold = 2e3;
          if (!awf.pollInterval)
            awf.pollInterval = 100;
          this._pendingWrites = /* @__PURE__ */ new Map();
        }
        if (opts.ignored)
          opts.ignored = arrify(opts.ignored);
        let readyCalls = 0;
        this._emitReady = () => {
          readyCalls++;
          if (readyCalls >= this._readyCount) {
            this._emitReady = EMPTY_FN;
            this._readyEmitted = true;
            process.nextTick(() => this.emit(EV_READY));
          }
        };
        this._emitRaw = (...args) => this.emit(EV_RAW, ...args);
        this._readyEmitted = false;
        this.options = opts;
        if (opts.useFsEvents) {
          this._fsEventsHandler = new FsEventsHandler(this);
        } else {
          this._nodeFsHandler = new NodeFsHandler(this);
        }
        Object.freeze(opts);
      }
      add(paths_, _origAdd, _internal) {
        const { cwd, disableGlobbing } = this.options;
        this.closed = false;
        let paths = unifyPaths(paths_);
        if (cwd) {
          paths = paths.map((path2) => {
            const absPath = getAbsolutePath(path2, cwd);
            if (disableGlobbing || !isGlob(path2)) {
              return absPath;
            }
            return normalizePath(absPath);
          });
        }
        paths = paths.filter((path2) => {
          if (path2.startsWith(BANG)) {
            this._ignoredPaths.add(path2.slice(1));
            return false;
          }
          this._ignoredPaths.delete(path2);
          this._ignoredPaths.delete(path2 + SLASH_GLOBSTAR);
          this._userIgnored = void 0;
          return true;
        });
        if (this.options.useFsEvents && this._fsEventsHandler) {
          if (!this._readyCount)
            this._readyCount = paths.length;
          if (this.options.persistent)
            this._readyCount *= 2;
          paths.forEach((path2) => this._fsEventsHandler._addToFsEvents(path2));
        } else {
          if (!this._readyCount)
            this._readyCount = 0;
          this._readyCount += paths.length;
          Promise.all(paths.map(async (path2) => {
            const res = await this._nodeFsHandler._addToNodeFs(path2, !_internal, 0, 0, _origAdd);
            if (res)
              this._emitReady();
            return res;
          })).then((results) => {
            if (this.closed)
              return;
            results.filter((item) => item).forEach((item) => {
              this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
            });
          });
        }
        return this;
      }
      unwatch(paths_) {
        if (this.closed)
          return this;
        const paths = unifyPaths(paths_);
        const { cwd } = this.options;
        paths.forEach((path2) => {
          if (!sysPath.isAbsolute(path2) && !this._closers.has(path2)) {
            if (cwd)
              path2 = sysPath.join(cwd, path2);
            path2 = sysPath.resolve(path2);
          }
          this._closePath(path2);
          this._ignoredPaths.add(path2);
          if (this._watched.has(path2)) {
            this._ignoredPaths.add(path2 + SLASH_GLOBSTAR);
          }
          this._userIgnored = void 0;
        });
        return this;
      }
      close() {
        if (this.closed)
          return this._closePromise;
        this.closed = true;
        this.removeAllListeners();
        const closers = [];
        this._closers.forEach((closerList) => closerList.forEach((closer) => {
          const promise = closer();
          if (promise instanceof Promise)
            closers.push(promise);
        }));
        this._streams.forEach((stream) => stream.destroy());
        this._userIgnored = void 0;
        this._readyCount = 0;
        this._readyEmitted = false;
        this._watched.forEach((dirent) => dirent.dispose());
        ["closers", "watched", "streams", "symlinkPaths", "throttled"].forEach((key) => {
          this[`_${key}`].clear();
        });
        this._closePromise = closers.length ? Promise.all(closers).then(() => void 0) : Promise.resolve();
        return this._closePromise;
      }
      getWatched() {
        const watchList = {};
        this._watched.forEach((entry, dir) => {
          const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
          watchList[key || ONE_DOT] = entry.getChildren().sort();
        });
        return watchList;
      }
      emitWithAll(event, args) {
        this.emit(...args);
        if (event !== EV_ERROR)
          this.emit(EV_ALL, ...args);
      }
      async _emit(event, path2, val1, val2, val3) {
        if (this.closed)
          return;
        const opts = this.options;
        if (isWindows)
          path2 = sysPath.normalize(path2);
        if (opts.cwd)
          path2 = sysPath.relative(opts.cwd, path2);
        const args = [event, path2];
        if (val3 !== void 0)
          args.push(val1, val2, val3);
        else if (val2 !== void 0)
          args.push(val1, val2);
        else if (val1 !== void 0)
          args.push(val1);
        const awf = opts.awaitWriteFinish;
        let pw;
        if (awf && (pw = this._pendingWrites.get(path2))) {
          pw.lastChange = new Date();
          return this;
        }
        if (opts.atomic) {
          if (event === EV_UNLINK) {
            this._pendingUnlinks.set(path2, args);
            setTimeout(() => {
              this._pendingUnlinks.forEach((entry, path3) => {
                this.emit(...entry);
                this.emit(EV_ALL, ...entry);
                this._pendingUnlinks.delete(path3);
              });
            }, typeof opts.atomic === "number" ? opts.atomic : 100);
            return this;
          }
          if (event === EV_ADD && this._pendingUnlinks.has(path2)) {
            event = args[0] = EV_CHANGE;
            this._pendingUnlinks.delete(path2);
          }
        }
        if (awf && (event === EV_ADD || event === EV_CHANGE) && this._readyEmitted) {
          const awfEmit = (err, stats) => {
            if (err) {
              event = args[0] = EV_ERROR;
              args[1] = err;
              this.emitWithAll(event, args);
            } else if (stats) {
              if (args.length > 2) {
                args[2] = stats;
              } else {
                args.push(stats);
              }
              this.emitWithAll(event, args);
            }
          };
          this._awaitWriteFinish(path2, awf.stabilityThreshold, event, awfEmit);
          return this;
        }
        if (event === EV_CHANGE) {
          const isThrottled = !this._throttle(EV_CHANGE, path2, 50);
          if (isThrottled)
            return this;
        }
        if (opts.alwaysStat && val1 === void 0 && (event === EV_ADD || event === EV_ADD_DIR || event === EV_CHANGE)) {
          const fullPath = opts.cwd ? sysPath.join(opts.cwd, path2) : path2;
          let stats;
          try {
            stats = await stat(fullPath);
          } catch (err) {
          }
          if (!stats || this.closed)
            return;
          args.push(stats);
        }
        this.emitWithAll(event, args);
        return this;
      }
      _handleError(error) {
        const code = error && error.code;
        if (error && code !== "ENOENT" && code !== "ENOTDIR" && (!this.options.ignorePermissionErrors || code !== "EPERM" && code !== "EACCES")) {
          this.emit(EV_ERROR, error);
        }
        return error || this.closed;
      }
      _throttle(actionType, path2, timeout) {
        if (!this._throttled.has(actionType)) {
          this._throttled.set(actionType, /* @__PURE__ */ new Map());
        }
        const action = this._throttled.get(actionType);
        const actionPath = action.get(path2);
        if (actionPath) {
          actionPath.count++;
          return false;
        }
        let timeoutObject;
        const clear = () => {
          const item = action.get(path2);
          const count = item ? item.count : 0;
          action.delete(path2);
          clearTimeout(timeoutObject);
          if (item)
            clearTimeout(item.timeoutObject);
          return count;
        };
        timeoutObject = setTimeout(clear, timeout);
        const thr = { timeoutObject, clear, count: 0 };
        action.set(path2, thr);
        return thr;
      }
      _incrReadyCount() {
        return this._readyCount++;
      }
      _awaitWriteFinish(path2, threshold, event, awfEmit) {
        let timeoutHandler;
        let fullPath = path2;
        if (this.options.cwd && !sysPath.isAbsolute(path2)) {
          fullPath = sysPath.join(this.options.cwd, path2);
        }
        const now = new Date();
        const awaitWriteFinish = (prevStat) => {
          fs2.stat(fullPath, (err, curStat) => {
            if (err || !this._pendingWrites.has(path2)) {
              if (err && err.code !== "ENOENT")
                awfEmit(err);
              return;
            }
            const now2 = Number(new Date());
            if (prevStat && curStat.size !== prevStat.size) {
              this._pendingWrites.get(path2).lastChange = now2;
            }
            const pw = this._pendingWrites.get(path2);
            const df = now2 - pw.lastChange;
            if (df >= threshold) {
              this._pendingWrites.delete(path2);
              awfEmit(void 0, curStat);
            } else {
              timeoutHandler = setTimeout(awaitWriteFinish, this.options.awaitWriteFinish.pollInterval, curStat);
            }
          });
        };
        if (!this._pendingWrites.has(path2)) {
          this._pendingWrites.set(path2, {
            lastChange: now,
            cancelWait: () => {
              this._pendingWrites.delete(path2);
              clearTimeout(timeoutHandler);
              return event;
            }
          });
          timeoutHandler = setTimeout(awaitWriteFinish, this.options.awaitWriteFinish.pollInterval);
        }
      }
      _getGlobIgnored() {
        return [...this._ignoredPaths.values()];
      }
      _isIgnored(path2, stats) {
        if (this.options.atomic && DOT_RE.test(path2))
          return true;
        if (!this._userIgnored) {
          const { cwd } = this.options;
          const ign = this.options.ignored;
          const ignored = ign && ign.map(normalizeIgnored(cwd));
          const paths = arrify(ignored).filter((path3) => typeof path3 === STRING_TYPE && !isGlob(path3)).map((path3) => path3 + SLASH_GLOBSTAR);
          const list = this._getGlobIgnored().map(normalizeIgnored(cwd)).concat(ignored, paths);
          this._userIgnored = anymatch(list, void 0, ANYMATCH_OPTS);
        }
        return this._userIgnored([path2, stats]);
      }
      _isntIgnored(path2, stat2) {
        return !this._isIgnored(path2, stat2);
      }
      _getWatchHelpers(path2, depth) {
        const watchPath = depth || this.options.disableGlobbing || !isGlob(path2) ? path2 : globParent(path2);
        const follow = this.options.followSymlinks;
        return new WatchHelper(path2, watchPath, follow, this);
      }
      _getWatchedDir(directory) {
        if (!this._boundRemove)
          this._boundRemove = this._remove.bind(this);
        const dir = sysPath.resolve(directory);
        if (!this._watched.has(dir))
          this._watched.set(dir, new DirEntry(dir, this._boundRemove));
        return this._watched.get(dir);
      }
      _hasReadPermissions(stats) {
        if (this.options.ignorePermissionErrors)
          return true;
        const md = stats && Number.parseInt(stats.mode, 10);
        const st = md & 511;
        const it = Number.parseInt(st.toString(8)[0], 10);
        return Boolean(4 & it);
      }
      _remove(directory, item, isDirectory) {
        const path2 = sysPath.join(directory, item);
        const fullPath = sysPath.resolve(path2);
        isDirectory = isDirectory != null ? isDirectory : this._watched.has(path2) || this._watched.has(fullPath);
        if (!this._throttle("remove", path2, 100))
          return;
        if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) {
          this.add(directory, item, true);
        }
        const wp = this._getWatchedDir(path2);
        const nestedDirectoryChildren = wp.getChildren();
        nestedDirectoryChildren.forEach((nested) => this._remove(path2, nested));
        const parent = this._getWatchedDir(directory);
        const wasTracked = parent.has(item);
        parent.remove(item);
        if (this._symlinkPaths.has(fullPath)) {
          this._symlinkPaths.delete(fullPath);
        }
        let relPath = path2;
        if (this.options.cwd)
          relPath = sysPath.relative(this.options.cwd, path2);
        if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
          const event = this._pendingWrites.get(relPath).cancelWait();
          if (event === EV_ADD)
            return;
        }
        this._watched.delete(path2);
        this._watched.delete(fullPath);
        const eventName = isDirectory ? EV_UNLINK_DIR : EV_UNLINK;
        if (wasTracked && !this._isIgnored(path2))
          this._emit(eventName, path2);
        if (!this.options.useFsEvents) {
          this._closePath(path2);
        }
      }
      _closePath(path2) {
        this._closeFile(path2);
        const dir = sysPath.dirname(path2);
        this._getWatchedDir(dir).remove(sysPath.basename(path2));
      }
      _closeFile(path2) {
        const closers = this._closers.get(path2);
        if (!closers)
          return;
        closers.forEach((closer) => closer());
        this._closers.delete(path2);
      }
      _addPathCloser(path2, closer) {
        if (!closer)
          return;
        let list = this._closers.get(path2);
        if (!list) {
          list = [];
          this._closers.set(path2, list);
        }
        list.push(closer);
      }
      _readdirp(root, opts) {
        if (this.closed)
          return;
        const options = __spreadValues({ type: EV_ALL, alwaysStat: true, lstat: true }, opts);
        let stream = readdirp(root, options);
        this._streams.add(stream);
        stream.once(STR_CLOSE, () => {
          stream = void 0;
        });
        stream.once(STR_END, () => {
          if (stream) {
            this._streams.delete(stream);
            stream = void 0;
          }
        });
        return stream;
      }
    };
    exports.FSWatcher = FSWatcher;
    var watch2 = (paths, options) => {
      const watcher = new FSWatcher(options);
      watcher.add(paths);
      return watcher;
    };
    exports.watch = watch2;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-0/optimize.js
var require_optimize = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-0/optimize.js"(exports, module2) {
    init_cjs_shims();
    function level0Optimize(tokens2) {
      return tokens2;
    }
    module2.exports = level0Optimize;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/natural-compare.js
var require_natural_compare = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/natural-compare.js"(exports, module2) {
    init_cjs_shims();
    var NUMBER_PATTERN = /([0-9]+)/;
    function naturalCompare(value1, value2) {
      var keys1 = ("" + value1).split(NUMBER_PATTERN).map(tryParseInt);
      var keys2 = ("" + value2).split(NUMBER_PATTERN).map(tryParseInt);
      var key1;
      var key2;
      var compareFirst = Math.min(keys1.length, keys2.length);
      var i, l;
      for (i = 0, l = compareFirst; i < l; i++) {
        key1 = keys1[i];
        key2 = keys2[i];
        if (key1 != key2) {
          return key1 > key2 ? 1 : -1;
        }
      }
      return keys1.length > keys2.length ? 1 : keys1.length == keys2.length ? 0 : -1;
    }
    function tryParseInt(value) {
      return "" + parseInt(value) == value ? parseInt(value) : value;
    }
    module2.exports = naturalCompare;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/sort-selectors.js
var require_sort_selectors = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/sort-selectors.js"(exports, module2) {
    init_cjs_shims();
    var naturalCompare = require_natural_compare();
    function naturalSorter(scope1, scope2) {
      return naturalCompare(scope1[1], scope2[1]);
    }
    function standardSorter(scope1, scope2) {
      return scope1[1] > scope2[1] ? 1 : -1;
    }
    function sortSelectors(selectors, method) {
      switch (method) {
        case "natural":
          return selectors.sort(naturalSorter);
        case "standard":
          return selectors.sort(standardSorter);
        case "none":
        case false:
          return selectors;
      }
    }
    module2.exports = sortSelectors;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/override.js
var require_override = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/override.js"(exports, module2) {
    init_cjs_shims();
    function override(source1, source2) {
      var target = {};
      var key1;
      var key2;
      var item;
      for (key1 in source1) {
        item = source1[key1];
        if (Array.isArray(item)) {
          target[key1] = item.slice(0);
        } else if (typeof item == "object" && item !== null) {
          target[key1] = override(item, {});
        } else {
          target[key1] = item;
        }
      }
      for (key2 in source2) {
        item = source2[key2];
        if (key2 in target && Array.isArray(item)) {
          target[key2] = item.slice(0);
        } else if (key2 in target && typeof item == "object" && item !== null) {
          target[key2] = override(target[key2], item);
        } else {
          target[key2] = item;
        }
      }
      return target;
    }
    module2.exports = override;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/format.js
var require_format = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/format.js"(exports, module2) {
    init_cjs_shims();
    var systemLineBreak = require("os").EOL;
    var override = require_override();
    var Breaks = {
      AfterAtRule: "afterAtRule",
      AfterBlockBegins: "afterBlockBegins",
      AfterBlockEnds: "afterBlockEnds",
      AfterComment: "afterComment",
      AfterProperty: "afterProperty",
      AfterRuleBegins: "afterRuleBegins",
      AfterRuleEnds: "afterRuleEnds",
      BeforeBlockEnds: "beforeBlockEnds",
      BetweenSelectors: "betweenSelectors"
    };
    var BreakWith = {
      CarriageReturnLineFeed: "\r\n",
      LineFeed: "\n",
      System: systemLineBreak
    };
    var IndentWith = {
      Space: " ",
      Tab: "	"
    };
    var Spaces = {
      AroundSelectorRelation: "aroundSelectorRelation",
      BeforeBlockBegins: "beforeBlockBegins",
      BeforeValue: "beforeValue"
    };
    var DEFAULTS = {
      breaks: breaks(false),
      breakWith: BreakWith.System,
      indentBy: 0,
      indentWith: IndentWith.Space,
      spaces: spaces(false),
      wrapAt: false,
      semicolonAfterLastProperty: false
    };
    var BEAUTIFY_ALIAS = "beautify";
    var KEEP_BREAKS_ALIAS = "keep-breaks";
    var OPTION_SEPARATOR = ";";
    var OPTION_NAME_VALUE_SEPARATOR = ":";
    var HASH_VALUES_OPTION_SEPARATOR = ",";
    var HASH_VALUES_NAME_VALUE_SEPARATOR = "=";
    var FALSE_KEYWORD_1 = "false";
    var FALSE_KEYWORD_2 = "off";
    var TRUE_KEYWORD_1 = "true";
    var TRUE_KEYWORD_2 = "on";
    function breaks(value) {
      var breakOptions = {};
      breakOptions[Breaks.AfterAtRule] = value;
      breakOptions[Breaks.AfterBlockBegins] = value;
      breakOptions[Breaks.AfterBlockEnds] = value;
      breakOptions[Breaks.AfterComment] = value;
      breakOptions[Breaks.AfterProperty] = value;
      breakOptions[Breaks.AfterRuleBegins] = value;
      breakOptions[Breaks.AfterRuleEnds] = value;
      breakOptions[Breaks.BeforeBlockEnds] = value;
      breakOptions[Breaks.BetweenSelectors] = value;
      return breakOptions;
    }
    function spaces(value) {
      var spaceOptions = {};
      spaceOptions[Spaces.AroundSelectorRelation] = value;
      spaceOptions[Spaces.BeforeBlockBegins] = value;
      spaceOptions[Spaces.BeforeValue] = value;
      return spaceOptions;
    }
    function formatFrom(source) {
      if (source === void 0 || source === false) {
        return false;
      }
      if (typeof source == "object" && "breakWith" in source) {
        source = override(source, { breakWith: mapBreakWith(source.breakWith) });
      }
      if (typeof source == "object" && "indentBy" in source) {
        source = override(source, { indentBy: parseInt(source.indentBy) });
      }
      if (typeof source == "object" && "indentWith" in source) {
        source = override(source, { indentWith: mapIndentWith(source.indentWith) });
      }
      if (typeof source == "object") {
        return remapBreaks(override(DEFAULTS, source));
      }
      if (typeof source == "string" && source == BEAUTIFY_ALIAS) {
        return remapBreaks(override(DEFAULTS, {
          breaks: breaks(true),
          indentBy: 2,
          spaces: spaces(true)
        }));
      }
      if (typeof source == "string" && source == KEEP_BREAKS_ALIAS) {
        return remapBreaks(override(DEFAULTS, {
          breaks: {
            afterAtRule: true,
            afterBlockBegins: true,
            afterBlockEnds: true,
            afterComment: true,
            afterRuleEnds: true,
            beforeBlockEnds: true
          }
        }));
      }
      if (typeof source == "string") {
        return remapBreaks(override(DEFAULTS, toHash(source)));
      }
      return DEFAULTS;
    }
    function toHash(string) {
      return string.split(OPTION_SEPARATOR).reduce(function(accumulator, directive) {
        var parts = directive.split(OPTION_NAME_VALUE_SEPARATOR);
        var name = parts[0];
        var value = parts[1];
        if (name == "breaks" || name == "spaces") {
          accumulator[name] = hashValuesToHash(value);
        } else if (name == "indentBy" || name == "wrapAt") {
          accumulator[name] = parseInt(value);
        } else if (name == "indentWith") {
          accumulator[name] = mapIndentWith(value);
        } else if (name == "breakWith") {
          accumulator[name] = mapBreakWith(value);
        }
        return accumulator;
      }, {});
    }
    function hashValuesToHash(string) {
      return string.split(HASH_VALUES_OPTION_SEPARATOR).reduce(function(accumulator, directive) {
        var parts = directive.split(HASH_VALUES_NAME_VALUE_SEPARATOR);
        var name = parts[0];
        var value = parts[1];
        accumulator[name] = normalizeValue(value);
        return accumulator;
      }, {});
    }
    function normalizeValue(value) {
      switch (value) {
        case FALSE_KEYWORD_1:
        case FALSE_KEYWORD_2:
          return false;
        case TRUE_KEYWORD_1:
        case TRUE_KEYWORD_2:
          return true;
        default:
          return value;
      }
    }
    function mapBreakWith(value) {
      switch (value) {
        case "windows":
        case "crlf":
        case BreakWith.CarriageReturnLineFeed:
          return BreakWith.CarriageReturnLineFeed;
        case "unix":
        case "lf":
        case BreakWith.LineFeed:
          return BreakWith.LineFeed;
        default:
          return systemLineBreak;
      }
    }
    function mapIndentWith(value) {
      switch (value) {
        case "space":
          return IndentWith.Space;
        case "tab":
          return IndentWith.Tab;
        default:
          return value;
      }
    }
    function remapBreaks(source) {
      for (var key in Breaks) {
        var breakName = Breaks[key];
        var breakValue = source.breaks[breakName];
        if (breakValue === true) {
          source.breaks[breakName] = source.breakWith;
        } else if (breakValue === false) {
          source.breaks[breakName] = "";
        } else {
          source.breaks[breakName] = source.breakWith.repeat(parseInt(breakValue));
        }
      }
      return source;
    }
    module2.exports = {
      Breaks,
      Spaces,
      formatFrom
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/tokenizer/marker.js
var require_marker = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/tokenizer/marker.js"(exports, module2) {
    init_cjs_shims();
    var Marker = {
      ASTERISK: "*",
      AT: "@",
      BACK_SLASH: "\\",
      CARRIAGE_RETURN: "\r",
      CLOSE_CURLY_BRACKET: "}",
      CLOSE_ROUND_BRACKET: ")",
      CLOSE_SQUARE_BRACKET: "]",
      COLON: ":",
      COMMA: ",",
      DOUBLE_QUOTE: '"',
      EXCLAMATION: "!",
      FORWARD_SLASH: "/",
      INTERNAL: "-clean-css-",
      NEW_LINE_NIX: "\n",
      OPEN_CURLY_BRACKET: "{",
      OPEN_ROUND_BRACKET: "(",
      OPEN_SQUARE_BRACKET: "[",
      SEMICOLON: ";",
      SINGLE_QUOTE: "'",
      SPACE: " ",
      TAB: "	",
      UNDERSCORE: "_"
    };
    module2.exports = Marker;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/format-position.js
var require_format_position = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/format-position.js"(exports, module2) {
    init_cjs_shims();
    function formatPosition(metadata) {
      var line = metadata[0];
      var column = metadata[1];
      var source = metadata[2];
      return source ? source + ":" + line + ":" + column : line + ":" + column;
    }
    module2.exports = formatPosition;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/tidy-rules.js
var require_tidy_rules = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/tidy-rules.js"(exports, module2) {
    init_cjs_shims();
    var Spaces = require_format().Spaces;
    var Marker = require_marker();
    var formatPosition = require_format_position();
    var CASE_ATTRIBUTE_PATTERN = /[\s"'][iI]\s*\]/;
    var CASE_RESTORE_PATTERN = /([\d\w])([iI])\]/g;
    var DOUBLE_QUOTE_CASE_PATTERN = /="([a-zA-Z][a-zA-Z\d\-_]+)"([iI])/g;
    var DOUBLE_QUOTE_PATTERN = /="([a-zA-Z][a-zA-Z\d\-_]+)"(\s|\])/g;
    var HTML_COMMENT_PATTERN = /^(?:(?:<!--|-->)\s*)+/;
    var SINGLE_QUOTE_CASE_PATTERN = /='([a-zA-Z][a-zA-Z\d\-_]+)'([iI])/g;
    var SINGLE_QUOTE_PATTERN = /='([a-zA-Z][a-zA-Z\d\-_]+)'(\s|\])/g;
    var RELATION_PATTERN = /[>+~]/;
    var WHITESPACE_PATTERN = /\s/;
    var ASTERISK_PLUS_HTML_HACK = "*+html ";
    var ASTERISK_FIRST_CHILD_PLUS_HTML_HACK = "*:first-child+html ";
    var LESS_THAN = "<";
    var PSEUDO_CLASSES_WITH_SELECTORS = [
      ":current",
      ":future",
      ":has",
      ":host",
      ":host-context",
      ":is",
      ":not",
      ":past",
      ":where"
    ];
    function hasInvalidCharacters(value) {
      var isEscaped;
      var isInvalid = false;
      var character;
      var isQuote = false;
      var i, l;
      for (i = 0, l = value.length; i < l; i++) {
        character = value[i];
        if (isEscaped) {
        } else if (character == Marker.SINGLE_QUOTE || character == Marker.DOUBLE_QUOTE) {
          isQuote = !isQuote;
        } else if (!isQuote && (character == Marker.CLOSE_CURLY_BRACKET || character == Marker.EXCLAMATION || character == LESS_THAN || character == Marker.SEMICOLON)) {
          isInvalid = true;
          break;
        } else if (!isQuote && i === 0 && RELATION_PATTERN.test(character)) {
          isInvalid = true;
          break;
        }
        isEscaped = character == Marker.BACK_SLASH;
      }
      return isInvalid;
    }
    function removeWhitespace(value, format) {
      var stripped = [];
      var character;
      var isNewLineNix;
      var isNewLineWin;
      var isEscaped;
      var wasEscaped;
      var isQuoted;
      var isSingleQuoted;
      var isDoubleQuoted;
      var isAttribute;
      var isRelation;
      var isWhitespace;
      var isSpaceAwarePseudoClass;
      var roundBracketLevel = 0;
      var wasComma = false;
      var wasRelation = false;
      var wasWhitespace = false;
      var withCaseAttribute = CASE_ATTRIBUTE_PATTERN.test(value);
      var spaceAroundRelation = format && format.spaces[Spaces.AroundSelectorRelation];
      var i, l;
      for (i = 0, l = value.length; i < l; i++) {
        character = value[i];
        isNewLineNix = character == Marker.NEW_LINE_NIX;
        isNewLineWin = character == Marker.NEW_LINE_NIX && value[i - 1] == Marker.CARRIAGE_RETURN;
        isQuoted = isSingleQuoted || isDoubleQuoted;
        isRelation = !isAttribute && !isEscaped && roundBracketLevel === 0 && RELATION_PATTERN.test(character);
        isWhitespace = WHITESPACE_PATTERN.test(character);
        isSpaceAwarePseudoClass = roundBracketLevel == 1 && character == Marker.CLOSE_ROUND_BRACKET ? false : isSpaceAwarePseudoClass || roundBracketLevel === 0 && character == Marker.COLON && isPseudoClassWithSelectors(value, i);
        if (wasEscaped && isQuoted && isNewLineWin) {
          stripped.pop();
          stripped.pop();
        } else if (isEscaped && isQuoted && isNewLineNix) {
          stripped.pop();
        } else if (isEscaped) {
          stripped.push(character);
        } else if (character == Marker.OPEN_SQUARE_BRACKET && !isQuoted) {
          stripped.push(character);
          isAttribute = true;
        } else if (character == Marker.CLOSE_SQUARE_BRACKET && !isQuoted) {
          stripped.push(character);
          isAttribute = false;
        } else if (character == Marker.OPEN_ROUND_BRACKET && !isQuoted) {
          stripped.push(character);
          roundBracketLevel++;
        } else if (character == Marker.CLOSE_ROUND_BRACKET && !isQuoted) {
          stripped.push(character);
          roundBracketLevel--;
        } else if (character == Marker.SINGLE_QUOTE && !isQuoted) {
          stripped.push(character);
          isSingleQuoted = true;
        } else if (character == Marker.DOUBLE_QUOTE && !isQuoted) {
          stripped.push(character);
          isDoubleQuoted = true;
        } else if (character == Marker.SINGLE_QUOTE && isQuoted) {
          stripped.push(character);
          isSingleQuoted = false;
        } else if (character == Marker.DOUBLE_QUOTE && isQuoted) {
          stripped.push(character);
          isDoubleQuoted = false;
        } else if (isWhitespace && wasRelation && !spaceAroundRelation) {
          continue;
        } else if (!isWhitespace && wasRelation && spaceAroundRelation) {
          stripped.push(Marker.SPACE);
          stripped.push(character);
        } else if (isWhitespace && !wasWhitespace && wasComma && roundBracketLevel > 0 && isSpaceAwarePseudoClass) {
        } else if (isWhitespace && !wasWhitespace && roundBracketLevel > 0 && isSpaceAwarePseudoClass) {
          stripped.push(character);
        } else if (isWhitespace && (isAttribute || roundBracketLevel > 0) && !isQuoted) {
        } else if (isWhitespace && wasWhitespace && !isQuoted) {
        } else if ((isNewLineWin || isNewLineNix) && (isAttribute || roundBracketLevel > 0) && isQuoted) {
        } else if (isRelation && wasWhitespace && !spaceAroundRelation) {
          stripped.pop();
          stripped.push(character);
        } else if (isRelation && !wasWhitespace && spaceAroundRelation) {
          stripped.push(Marker.SPACE);
          stripped.push(character);
        } else if (isWhitespace) {
          stripped.push(Marker.SPACE);
        } else {
          stripped.push(character);
        }
        wasEscaped = isEscaped;
        isEscaped = character == Marker.BACK_SLASH;
        wasRelation = isRelation;
        wasWhitespace = isWhitespace;
        wasComma = character == Marker.COMMA;
      }
      return withCaseAttribute ? stripped.join("").replace(CASE_RESTORE_PATTERN, "$1 $2]") : stripped.join("");
    }
    function isPseudoClassWithSelectors(value, colonPosition) {
      var pseudoClass = value.substring(colonPosition, value.indexOf(Marker.OPEN_ROUND_BRACKET, colonPosition));
      return PSEUDO_CLASSES_WITH_SELECTORS.indexOf(pseudoClass) > -1;
    }
    function removeQuotes(value) {
      if (value.indexOf("'") == -1 && value.indexOf('"') == -1) {
        return value;
      }
      return value.replace(SINGLE_QUOTE_CASE_PATTERN, "=$1 $2").replace(SINGLE_QUOTE_PATTERN, "=$1$2").replace(DOUBLE_QUOTE_CASE_PATTERN, "=$1 $2").replace(DOUBLE_QUOTE_PATTERN, "=$1$2");
    }
    function replacePseudoClasses(value) {
      return value.replace("nth-child(1)", "first-child").replace("nth-of-type(1)", "first-of-type").replace("nth-of-type(even)", "nth-of-type(2n)").replace("nth-child(even)", "nth-child(2n)").replace("nth-of-type(2n+1)", "nth-of-type(odd)").replace("nth-child(2n+1)", "nth-child(odd)").replace("nth-last-child(1)", "last-child").replace("nth-last-of-type(1)", "last-of-type").replace("nth-last-of-type(even)", "nth-last-of-type(2n)").replace("nth-last-child(even)", "nth-last-child(2n)").replace("nth-last-of-type(2n+1)", "nth-last-of-type(odd)").replace("nth-last-child(2n+1)", "nth-last-child(odd)");
    }
    function tidyRules(rules, removeUnsupported, adjacentSpace, format, warnings) {
      var list = [];
      var repeated = [];
      function removeHTMLComment(rule2, match) {
        warnings.push("HTML comment '" + match + "' at " + formatPosition(rule2[2][0]) + ". Removing.");
        return "";
      }
      for (var i = 0, l = rules.length; i < l; i++) {
        var rule = rules[i];
        var reduced = rule[1];
        reduced = reduced.replace(HTML_COMMENT_PATTERN, removeHTMLComment.bind(null, rule));
        if (hasInvalidCharacters(reduced)) {
          warnings.push("Invalid selector '" + rule[1] + "' at " + formatPosition(rule[2][0]) + ". Ignoring.");
          continue;
        }
        reduced = removeWhitespace(reduced, format);
        reduced = removeQuotes(reduced);
        if (adjacentSpace && reduced.indexOf("nav") > 0) {
          reduced = reduced.replace(/\+nav(\S|$)/, "+ nav$1");
        }
        if (removeUnsupported && reduced.indexOf(ASTERISK_PLUS_HTML_HACK) > -1) {
          continue;
        }
        if (removeUnsupported && reduced.indexOf(ASTERISK_FIRST_CHILD_PLUS_HTML_HACK) > -1) {
          continue;
        }
        if (reduced.indexOf("*") > -1) {
          reduced = reduced.replace(/\*([:#.[])/g, "$1").replace(/^(:first-child)?\+html/, "*$1+html");
        }
        if (repeated.indexOf(reduced) > -1) {
          continue;
        }
        reduced = replacePseudoClasses(reduced);
        rule[1] = reduced;
        repeated.push(reduced);
        list.push(rule);
      }
      if (list.length == 1 && list[0][1].length === 0) {
        warnings.push("Empty selector '" + list[0][1] + "' at " + formatPosition(list[0][2][0]) + ". Ignoring.");
        list = [];
      }
      return list;
    }
    module2.exports = tidyRules;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/tidy-block.js
var require_tidy_block = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/tidy-block.js"(exports, module2) {
    init_cjs_shims();
    var SUPPORTED_COMPACT_BLOCK_MATCHER = /^@media\W/;
    var SUPPORTED_QUOTE_REMOVAL_MATCHER = /^@(?:keyframes|-moz-keyframes|-o-keyframes|-webkit-keyframes)\W/;
    function tidyBlock(values, spaceAfterClosingBrace) {
      var withoutSpaceAfterClosingBrace;
      var withoutQuotes;
      var i;
      for (i = values.length - 1; i >= 0; i--) {
        withoutSpaceAfterClosingBrace = !spaceAfterClosingBrace && SUPPORTED_COMPACT_BLOCK_MATCHER.test(values[i][1]);
        withoutQuotes = SUPPORTED_QUOTE_REMOVAL_MATCHER.test(values[i][1]);
        values[i][1] = values[i][1].replace(/\n|\r\n/g, " ").replace(/\s+/g, " ").replace(/(,|:|\() /g, "$1").replace(/ \)/g, ")");
        if (withoutQuotes) {
          values[i][1] = values[i][1].replace(/'([a-zA-Z][a-zA-Z\d\-_]+)'/, "$1").replace(/"([a-zA-Z][a-zA-Z\d\-_]+)"/, "$1");
        }
        if (withoutSpaceAfterClosingBrace) {
          values[i][1] = values[i][1].replace(/\) /g, ")");
        }
      }
      return values;
    }
    module2.exports = tidyBlock;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/tidy-at-rule.js
var require_tidy_at_rule = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/tidy-at-rule.js"(exports, module2) {
    init_cjs_shims();
    function tidyAtRule(value) {
      return value.replace(/\s+/g, " ").replace(/url\(\s+/g, "url(").replace(/\s+\)/g, ")").trim();
    }
    module2.exports = tidyAtRule;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/hack.js
var require_hack = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/hack.js"(exports, module2) {
    init_cjs_shims();
    var Hack = {
      ASTERISK: "asterisk",
      BANG: "bang",
      BACKSLASH: "backslash",
      UNDERSCORE: "underscore"
    };
    module2.exports = Hack;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/remove-unused.js
var require_remove_unused = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/remove-unused.js"(exports, module2) {
    init_cjs_shims();
    function removeUnused(properties) {
      for (var i = properties.length - 1; i >= 0; i--) {
        var property = properties[i];
        if (property.unused) {
          property.all.splice(property.position, 1);
        }
      }
    }
    module2.exports = removeUnused;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/restore-from-optimizing.js
var require_restore_from_optimizing = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/restore-from-optimizing.js"(exports, module2) {
    init_cjs_shims();
    var Hack = require_hack();
    var Marker = require_marker();
    var ASTERISK_HACK = "*";
    var BACKSLASH_HACK = "\\";
    var IMPORTANT_TOKEN = "!important";
    var UNDERSCORE_HACK = "_";
    var BANG_HACK = "!ie";
    function restoreFromOptimizing(properties, restoreCallback) {
      var property;
      var restored;
      var current;
      var i;
      for (i = properties.length - 1; i >= 0; i--) {
        property = properties[i];
        if (property.dynamic && property.important) {
          restoreImportant(property);
          continue;
        }
        if (property.dynamic) {
          continue;
        }
        if (property.unused) {
          continue;
        }
        if (!property.dirty && !property.important && !property.hack) {
          continue;
        }
        if (property.optimizable && restoreCallback) {
          restored = restoreCallback(property);
          property.value = restored;
        } else {
          restored = property.value;
        }
        if (property.important) {
          restoreImportant(property);
        }
        if (property.hack) {
          restoreHack(property);
        }
        if ("all" in property) {
          current = property.all[property.position];
          current[1][1] = property.name;
          current.splice(2, current.length - 1);
          Array.prototype.push.apply(current, restored);
        }
      }
    }
    function restoreImportant(property) {
      property.value[property.value.length - 1][1] += IMPORTANT_TOKEN;
    }
    function restoreHack(property) {
      if (property.hack[0] == Hack.UNDERSCORE) {
        property.name = UNDERSCORE_HACK + property.name;
      } else if (property.hack[0] == Hack.ASTERISK) {
        property.name = ASTERISK_HACK + property.name;
      } else if (property.hack[0] == Hack.BACKSLASH) {
        property.value[property.value.length - 1][1] += BACKSLASH_HACK + property.hack[1];
      } else if (property.hack[0] == Hack.BANG) {
        property.value[property.value.length - 1][1] += Marker.SPACE + BANG_HACK;
      }
    }
    module2.exports = restoreFromOptimizing;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/tokenizer/token.js
var require_token = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/tokenizer/token.js"(exports, module2) {
    init_cjs_shims();
    var Token = {
      AT_RULE: "at-rule",
      AT_RULE_BLOCK: "at-rule-block",
      AT_RULE_BLOCK_SCOPE: "at-rule-block-scope",
      COMMENT: "comment",
      NESTED_BLOCK: "nested-block",
      NESTED_BLOCK_SCOPE: "nested-block-scope",
      PROPERTY: "property",
      PROPERTY_BLOCK: "property-block",
      PROPERTY_NAME: "property-name",
      PROPERTY_VALUE: "property-value",
      RAW: "raw",
      RULE: "rule",
      RULE_SCOPE: "rule-scope"
    };
    module2.exports = Token;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/wrap-for-optimizing.js
var require_wrap_for_optimizing = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/wrap-for-optimizing.js"(exports, module2) {
    init_cjs_shims();
    var Hack = require_hack();
    var Marker = require_marker();
    var Token = require_token();
    var Match = {
      ASTERISK: "*",
      BACKSLASH: "\\",
      BANG: "!",
      BANG_SUFFIX_PATTERN: /!\w+$/,
      IMPORTANT_TOKEN: "!important",
      IMPORTANT_TOKEN_PATTERN: new RegExp("!important$", "i"),
      IMPORTANT_WORD: "important",
      IMPORTANT_WORD_PATTERN: new RegExp("important$", "i"),
      SUFFIX_BANG_PATTERN: /!$/,
      UNDERSCORE: "_",
      VARIABLE_REFERENCE_PATTERN: /var\(--.+\)$/
    };
    function wrapAll(properties, skipProperties) {
      var wrapped = [];
      var single;
      var property;
      var i;
      for (i = properties.length - 1; i >= 0; i--) {
        property = properties[i];
        if (property[0] != Token.PROPERTY) {
          continue;
        }
        if (skipProperties && skipProperties.indexOf(property[1][1]) > -1) {
          continue;
        }
        single = wrapSingle(property);
        single.all = properties;
        single.position = i;
        wrapped.unshift(single);
      }
      return wrapped;
    }
    function someVariableReferences(property) {
      var i, l;
      var value;
      for (i = 2, l = property.length; i < l; i++) {
        value = property[i];
        if (value[0] != Token.PROPERTY_VALUE) {
          continue;
        }
        if (isVariableReference(value[1])) {
          return true;
        }
      }
      return false;
    }
    function isVariableReference(value) {
      return Match.VARIABLE_REFERENCE_PATTERN.test(value);
    }
    function isMultiplex(property) {
      var value;
      var i, l;
      for (i = 3, l = property.length; i < l; i++) {
        value = property[i];
        if (value[0] == Token.PROPERTY_VALUE && (value[1] == Marker.COMMA || value[1] == Marker.FORWARD_SLASH)) {
          return true;
        }
      }
      return false;
    }
    function hackFrom(property) {
      var match = false;
      var name = property[1][1];
      var lastValue = property[property.length - 1];
      if (name[0] == Match.UNDERSCORE) {
        match = [Hack.UNDERSCORE];
      } else if (name[0] == Match.ASTERISK) {
        match = [Hack.ASTERISK];
      } else if (lastValue[1][0] == Match.BANG && !lastValue[1].match(Match.IMPORTANT_WORD_PATTERN)) {
        match = [Hack.BANG];
      } else if (lastValue[1].indexOf(Match.BANG) > 0 && !lastValue[1].match(Match.IMPORTANT_WORD_PATTERN) && Match.BANG_SUFFIX_PATTERN.test(lastValue[1])) {
        match = [Hack.BANG];
      } else if (lastValue[1].indexOf(Match.BACKSLASH) > 0 && lastValue[1].indexOf(Match.BACKSLASH) == lastValue[1].length - Match.BACKSLASH.length - 1) {
        match = [Hack.BACKSLASH, lastValue[1].substring(lastValue[1].indexOf(Match.BACKSLASH) + 1)];
      } else if (lastValue[1].indexOf(Match.BACKSLASH) === 0 && lastValue[1].length == 2) {
        match = [Hack.BACKSLASH, lastValue[1].substring(1)];
      }
      return match;
    }
    function isImportant(property) {
      if (property.length < 3) {
        return false;
      }
      var lastValue = property[property.length - 1];
      if (Match.IMPORTANT_TOKEN_PATTERN.test(lastValue[1])) {
        return true;
      }
      if (Match.IMPORTANT_WORD_PATTERN.test(lastValue[1]) && Match.SUFFIX_BANG_PATTERN.test(property[property.length - 2][1])) {
        return true;
      }
      return false;
    }
    function stripImportant(property) {
      var lastValue = property[property.length - 1];
      var oneButLastValue = property[property.length - 2];
      if (Match.IMPORTANT_TOKEN_PATTERN.test(lastValue[1])) {
        lastValue[1] = lastValue[1].replace(Match.IMPORTANT_TOKEN_PATTERN, "");
      } else {
        lastValue[1] = lastValue[1].replace(Match.IMPORTANT_WORD_PATTERN, "");
        oneButLastValue[1] = oneButLastValue[1].replace(Match.SUFFIX_BANG_PATTERN, "");
      }
      if (lastValue[1].length === 0) {
        property.pop();
      }
      if (oneButLastValue[1].length === 0) {
        property.pop();
      }
    }
    function stripPrefixHack(property) {
      property[1][1] = property[1][1].substring(1);
    }
    function stripSuffixHack(property, hackFrom2) {
      var lastValue = property[property.length - 1];
      lastValue[1] = lastValue[1].substring(0, lastValue[1].indexOf(hackFrom2[0] == Hack.BACKSLASH ? Match.BACKSLASH : Match.BANG)).trim();
      if (lastValue[1].length === 0) {
        property.pop();
      }
    }
    function wrapSingle(property) {
      var importantProperty = isImportant(property);
      if (importantProperty) {
        stripImportant(property);
      }
      var whichHack = hackFrom(property);
      if (whichHack[0] == Hack.ASTERISK || whichHack[0] == Hack.UNDERSCORE) {
        stripPrefixHack(property);
      } else if (whichHack[0] == Hack.BACKSLASH || whichHack[0] == Hack.BANG) {
        stripSuffixHack(property, whichHack);
      }
      return {
        block: property[2] && property[2][0] == Token.PROPERTY_BLOCK,
        components: [],
        dirty: false,
        dynamic: someVariableReferences(property),
        hack: whichHack,
        important: importantProperty,
        name: property[1][1],
        multiplex: property.length > 3 ? isMultiplex(property) : false,
        optimizable: true,
        position: 0,
        shorthand: false,
        unused: false,
        value: property.slice(2)
      };
    }
    module2.exports = {
      all: wrapAll,
      single: wrapSingle
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/invalid-property-error.js
var require_invalid_property_error = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/invalid-property-error.js"(exports, module2) {
    init_cjs_shims();
    function InvalidPropertyError(message) {
      this.name = "InvalidPropertyError";
      this.message = message;
      this.stack = new Error().stack;
    }
    InvalidPropertyError.prototype = Object.create(Error.prototype);
    InvalidPropertyError.prototype.constructor = InvalidPropertyError;
    module2.exports = InvalidPropertyError;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration/break-up.js
var require_break_up = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration/break-up.js"(exports, module2) {
    init_cjs_shims();
    var InvalidPropertyError = require_invalid_property_error();
    var wrapSingle = require_wrap_for_optimizing().single;
    var Token = require_token();
    var Marker = require_marker();
    var formatPosition = require_format_position();
    function _anyIsInherit(values) {
      var i, l;
      for (i = 0, l = values.length; i < l; i++) {
        if (values[i][1] == "inherit") {
          return true;
        }
      }
      return false;
    }
    function _colorFilter(validator) {
      return function(value) {
        return value[1] == "invert" || validator.isColor(value[1]) || validator.isPrefixed(value[1]);
      };
    }
    function _styleFilter(validator) {
      return function(value) {
        return value[1] != "inherit" && validator.isStyleKeyword(value[1]) && !validator.isColorFunction(value[1]);
      };
    }
    function _wrapDefault(name, property, configuration) {
      var descriptor = configuration[name];
      if (descriptor.doubleValues && descriptor.defaultValue.length == 2) {
        return wrapSingle([
          Token.PROPERTY,
          [Token.PROPERTY_NAME, name],
          [Token.PROPERTY_VALUE, descriptor.defaultValue[0]],
          [Token.PROPERTY_VALUE, descriptor.defaultValue[1]]
        ]);
      }
      if (descriptor.doubleValues && descriptor.defaultValue.length == 1) {
        return wrapSingle([
          Token.PROPERTY,
          [Token.PROPERTY_NAME, name],
          [Token.PROPERTY_VALUE, descriptor.defaultValue[0]]
        ]);
      }
      return wrapSingle([
        Token.PROPERTY,
        [Token.PROPERTY_NAME, name],
        [Token.PROPERTY_VALUE, descriptor.defaultValue]
      ]);
    }
    function _widthFilter(validator) {
      return function(value) {
        return value[1] != "inherit" && (validator.isWidth(value[1]) || validator.isUnit(value[1]) || validator.isDynamicUnit(value[1])) && !validator.isStyleKeyword(value[1]) && !validator.isColorFunction(value[1]);
      };
    }
    function animation(property, configuration, validator) {
      var duration = _wrapDefault(property.name + "-duration", property, configuration);
      var timing = _wrapDefault(property.name + "-timing-function", property, configuration);
      var delay = _wrapDefault(property.name + "-delay", property, configuration);
      var iteration = _wrapDefault(property.name + "-iteration-count", property, configuration);
      var direction = _wrapDefault(property.name + "-direction", property, configuration);
      var fill = _wrapDefault(property.name + "-fill-mode", property, configuration);
      var play = _wrapDefault(property.name + "-play-state", property, configuration);
      var name = _wrapDefault(property.name + "-name", property, configuration);
      var components = [duration, timing, delay, iteration, direction, fill, play, name];
      var values = property.value;
      var value;
      var durationSet = false;
      var timingSet = false;
      var delaySet = false;
      var iterationSet = false;
      var directionSet = false;
      var fillSet = false;
      var playSet = false;
      var nameSet = false;
      var i;
      var l;
      if (property.value.length == 1 && property.value[0][1] == "inherit") {
        duration.value = timing.value = delay.value = iteration.value = direction.value = fill.value = play.value = name.value = property.value;
        return components;
      }
      if (values.length > 1 && _anyIsInherit(values)) {
        throw new InvalidPropertyError("Invalid animation values at " + formatPosition(values[0][2][0]) + ". Ignoring.");
      }
      for (i = 0, l = values.length; i < l; i++) {
        value = values[i];
        if (validator.isTime(value[1]) && !durationSet) {
          duration.value = [value];
          durationSet = true;
        } else if (validator.isTime(value[1]) && !delaySet) {
          delay.value = [value];
          delaySet = true;
        } else if ((validator.isGlobal(value[1]) || validator.isTimingFunction(value[1])) && !timingSet) {
          timing.value = [value];
          timingSet = true;
        } else if ((validator.isAnimationIterationCountKeyword(value[1]) || validator.isPositiveNumber(value[1])) && !iterationSet) {
          iteration.value = [value];
          iterationSet = true;
        } else if (validator.isAnimationDirectionKeyword(value[1]) && !directionSet) {
          direction.value = [value];
          directionSet = true;
        } else if (validator.isAnimationFillModeKeyword(value[1]) && !fillSet) {
          fill.value = [value];
          fillSet = true;
        } else if (validator.isAnimationPlayStateKeyword(value[1]) && !playSet) {
          play.value = [value];
          playSet = true;
        } else if ((validator.isAnimationNameKeyword(value[1]) || validator.isIdentifier(value[1])) && !nameSet) {
          name.value = [value];
          nameSet = true;
        } else {
          throw new InvalidPropertyError("Invalid animation value at " + formatPosition(value[2][0]) + ". Ignoring.");
        }
      }
      return components;
    }
    function background(property, configuration, validator) {
      var image = _wrapDefault("background-image", property, configuration);
      var position = _wrapDefault("background-position", property, configuration);
      var size = _wrapDefault("background-size", property, configuration);
      var repeat = _wrapDefault("background-repeat", property, configuration);
      var attachment = _wrapDefault("background-attachment", property, configuration);
      var origin = _wrapDefault("background-origin", property, configuration);
      var clip = _wrapDefault("background-clip", property, configuration);
      var color = _wrapDefault("background-color", property, configuration);
      var components = [image, position, size, repeat, attachment, origin, clip, color];
      var values = property.value;
      var positionSet = false;
      var clipSet = false;
      var originSet = false;
      var repeatSet = false;
      var anyValueSet = false;
      if (property.value.length == 1 && property.value[0][1] == "inherit") {
        color.value = image.value = repeat.value = position.value = size.value = origin.value = clip.value = property.value;
        return components;
      }
      if (property.value.length == 1 && property.value[0][1] == "0 0") {
        return components;
      }
      for (var i = values.length - 1; i >= 0; i--) {
        var value = values[i];
        if (validator.isBackgroundAttachmentKeyword(value[1])) {
          attachment.value = [value];
          anyValueSet = true;
        } else if (validator.isBackgroundClipKeyword(value[1]) || validator.isBackgroundOriginKeyword(value[1])) {
          if (clipSet) {
            origin.value = [value];
            originSet = true;
          } else {
            clip.value = [value];
            clipSet = true;
          }
          anyValueSet = true;
        } else if (validator.isBackgroundRepeatKeyword(value[1])) {
          if (repeatSet) {
            repeat.value.unshift(value);
          } else {
            repeat.value = [value];
            repeatSet = true;
          }
          anyValueSet = true;
        } else if (validator.isBackgroundPositionKeyword(value[1]) || validator.isBackgroundSizeKeyword(value[1]) || validator.isUnit(value[1]) || validator.isDynamicUnit(value[1])) {
          if (i > 0) {
            var previousValue = values[i - 1];
            if (previousValue[1] == Marker.FORWARD_SLASH) {
              size.value = [value];
            } else if (i > 1 && values[i - 2][1] == Marker.FORWARD_SLASH) {
              size.value = [previousValue, value];
              i -= 2;
            } else {
              if (!positionSet) {
                position.value = [];
              }
              position.value.unshift(value);
              positionSet = true;
            }
          } else {
            if (!positionSet) {
              position.value = [];
            }
            position.value.unshift(value);
            positionSet = true;
          }
          anyValueSet = true;
        } else if ((color.value[0][1] == configuration[color.name].defaultValue || color.value[0][1] == "none") && (validator.isColor(value[1]) || validator.isPrefixed(value[1]))) {
          color.value = [value];
          anyValueSet = true;
        } else if (validator.isUrl(value[1]) || validator.isFunction(value[1])) {
          image.value = [value];
          anyValueSet = true;
        }
      }
      if (clipSet && !originSet) {
        origin.value = clip.value.slice(0);
      }
      if (!anyValueSet) {
        throw new InvalidPropertyError("Invalid background value at " + formatPosition(values[0][2][0]) + ". Ignoring.");
      }
      return components;
    }
    function borderRadius(property, configuration) {
      var values = property.value;
      var splitAt = -1;
      for (var i = 0, l = values.length; i < l; i++) {
        if (values[i][1] == Marker.FORWARD_SLASH) {
          splitAt = i;
          break;
        }
      }
      if (splitAt === 0 || splitAt === values.length - 1) {
        throw new InvalidPropertyError("Invalid border-radius value at " + formatPosition(values[0][2][0]) + ". Ignoring.");
      }
      var target = _wrapDefault(property.name, property, configuration);
      target.value = splitAt > -1 ? values.slice(0, splitAt) : values.slice(0);
      target.components = fourValues(target, configuration);
      var remainder = _wrapDefault(property.name, property, configuration);
      remainder.value = splitAt > -1 ? values.slice(splitAt + 1) : values.slice(0);
      remainder.components = fourValues(remainder, configuration);
      for (var j = 0; j < 4; j++) {
        target.components[j].multiplex = true;
        target.components[j].value = target.components[j].value.concat(remainder.components[j].value);
      }
      return target.components;
    }
    function font(property, configuration, validator) {
      var style = _wrapDefault("font-style", property, configuration);
      var variant = _wrapDefault("font-variant", property, configuration);
      var weight = _wrapDefault("font-weight", property, configuration);
      var stretch = _wrapDefault("font-stretch", property, configuration);
      var size = _wrapDefault("font-size", property, configuration);
      var height = _wrapDefault("line-height", property, configuration);
      var family = _wrapDefault("font-family", property, configuration);
      var components = [style, variant, weight, stretch, size, height, family];
      var values = property.value;
      var fuzzyMatched = 4;
      var index2 = 0;
      var isStretchSet = false;
      var isStretchValid;
      var isStyleSet = false;
      var isStyleValid;
      var isVariantSet = false;
      var isVariantValid;
      var isWeightSet = false;
      var isWeightValid;
      var appendableFamilyName = false;
      if (!values[index2]) {
        throw new InvalidPropertyError("Missing font values at " + formatPosition(property.all[property.position][1][2][0]) + ". Ignoring.");
      }
      if (values.length == 1 && values[0][1] == "inherit") {
        style.value = variant.value = weight.value = stretch.value = size.value = height.value = family.value = values;
        return components;
      }
      if (values.length == 1 && (validator.isFontKeyword(values[0][1]) || validator.isGlobal(values[0][1]) || validator.isPrefixed(values[0][1]))) {
        values[0][1] = Marker.INTERNAL + values[0][1];
        style.value = variant.value = weight.value = stretch.value = size.value = height.value = family.value = values;
        return components;
      }
      if (values.length < 2 || !_anyIsFontSize(values, validator) || !_anyIsFontFamily(values, validator)) {
        throw new InvalidPropertyError("Invalid font values at " + formatPosition(property.all[property.position][1][2][0]) + ". Ignoring.");
      }
      if (values.length > 1 && _anyIsInherit(values)) {
        throw new InvalidPropertyError("Invalid font values at " + formatPosition(values[0][2][0]) + ". Ignoring.");
      }
      while (index2 < fuzzyMatched) {
        isStretchValid = validator.isFontStretchKeyword(values[index2][1]) || validator.isGlobal(values[index2][1]);
        isStyleValid = validator.isFontStyleKeyword(values[index2][1]) || validator.isGlobal(values[index2][1]);
        isVariantValid = validator.isFontVariantKeyword(values[index2][1]) || validator.isGlobal(values[index2][1]);
        isWeightValid = validator.isFontWeightKeyword(values[index2][1]) || validator.isGlobal(values[index2][1]);
        if (isStyleValid && !isStyleSet) {
          style.value = [values[index2]];
          isStyleSet = true;
        } else if (isVariantValid && !isVariantSet) {
          variant.value = [values[index2]];
          isVariantSet = true;
        } else if (isWeightValid && !isWeightSet) {
          weight.value = [values[index2]];
          isWeightSet = true;
        } else if (isStretchValid && !isStretchSet) {
          stretch.value = [values[index2]];
          isStretchSet = true;
        } else if (isStyleValid && isStyleSet || isVariantValid && isVariantSet || isWeightValid && isWeightSet || isStretchValid && isStretchSet) {
          throw new InvalidPropertyError("Invalid font style / variant / weight / stretch value at " + formatPosition(values[0][2][0]) + ". Ignoring.");
        } else {
          break;
        }
        index2++;
      }
      if (validator.isFontSizeKeyword(values[index2][1]) || validator.isUnit(values[index2][1]) && !validator.isDynamicUnit(values[index2][1])) {
        size.value = [values[index2]];
        index2++;
      } else {
        throw new InvalidPropertyError("Missing font size at " + formatPosition(values[0][2][0]) + ". Ignoring.");
      }
      if (!values[index2]) {
        throw new InvalidPropertyError("Missing font family at " + formatPosition(values[0][2][0]) + ". Ignoring.");
      }
      if (values[index2] && values[index2][1] == Marker.FORWARD_SLASH && values[index2 + 1] && (validator.isLineHeightKeyword(values[index2 + 1][1]) || validator.isUnit(values[index2 + 1][1]) || validator.isNumber(values[index2 + 1][1]))) {
        height.value = [values[index2 + 1]];
        index2++;
        index2++;
      }
      family.value = [];
      while (values[index2]) {
        if (values[index2][1] == Marker.COMMA) {
          appendableFamilyName = false;
        } else {
          if (appendableFamilyName) {
            family.value[family.value.length - 1][1] += Marker.SPACE + values[index2][1];
          } else {
            family.value.push(values[index2]);
          }
          appendableFamilyName = true;
        }
        index2++;
      }
      if (family.value.length === 0) {
        throw new InvalidPropertyError("Missing font family at " + formatPosition(values[0][2][0]) + ". Ignoring.");
      }
      return components;
    }
    function _anyIsFontSize(values, validator) {
      var value;
      var i, l;
      for (i = 0, l = values.length; i < l; i++) {
        value = values[i];
        if (validator.isFontSizeKeyword(value[1]) || validator.isUnit(value[1]) && !validator.isDynamicUnit(value[1]) || validator.isFunction(value[1])) {
          return true;
        }
      }
      return false;
    }
    function _anyIsFontFamily(values, validator) {
      var value;
      var i, l;
      for (i = 0, l = values.length; i < l; i++) {
        value = values[i];
        if (validator.isIdentifier(value[1]) || validator.isQuotedText(value[1])) {
          return true;
        }
      }
      return false;
    }
    function fourValues(property, configuration) {
      var componentNames = configuration[property.name].components;
      var components = [];
      var value = property.value;
      if (value.length < 1) {
        return [];
      }
      if (value.length < 2) {
        value[1] = value[0].slice(0);
      }
      if (value.length < 3) {
        value[2] = value[0].slice(0);
      }
      if (value.length < 4) {
        value[3] = value[1].slice(0);
      }
      for (var i = componentNames.length - 1; i >= 0; i--) {
        var component = wrapSingle([
          Token.PROPERTY,
          [Token.PROPERTY_NAME, componentNames[i]]
        ]);
        component.value = [value[i]];
        components.unshift(component);
      }
      return components;
    }
    function multiplex(splitWith) {
      return function(property, configuration, validator) {
        var splitsAt = [];
        var values = property.value;
        var i, j, l, m;
        for (i = 0, l = values.length; i < l; i++) {
          if (values[i][1] == ",") {
            splitsAt.push(i);
          }
        }
        if (splitsAt.length === 0) {
          return splitWith(property, configuration, validator);
        }
        var splitComponents = [];
        for (i = 0, l = splitsAt.length; i <= l; i++) {
          var from = i === 0 ? 0 : splitsAt[i - 1] + 1;
          var to = i < l ? splitsAt[i] : values.length;
          var _property = _wrapDefault(property.name, property, configuration);
          _property.value = values.slice(from, to);
          if (_property.value.length > 0) {
            splitComponents.push(splitWith(_property, configuration, validator));
          }
        }
        var components = splitComponents[0];
        for (i = 0, l = components.length; i < l; i++) {
          components[i].multiplex = true;
          for (j = 1, m = splitComponents.length; j < m; j++) {
            components[i].value.push([Token.PROPERTY_VALUE, Marker.COMMA]);
            Array.prototype.push.apply(components[i].value, splitComponents[j][i].value);
          }
        }
        return components;
      };
    }
    function listStyle(property, configuration, validator) {
      var type = _wrapDefault("list-style-type", property, configuration);
      var position = _wrapDefault("list-style-position", property, configuration);
      var image = _wrapDefault("list-style-image", property, configuration);
      var components = [type, position, image];
      if (property.value.length == 1 && property.value[0][1] == "inherit") {
        type.value = position.value = image.value = [property.value[0]];
        return components;
      }
      var values = property.value.slice(0);
      var total = values.length;
      var index2 = 0;
      for (index2 = 0, total = values.length; index2 < total; index2++) {
        if (validator.isUrl(values[index2][1]) || values[index2][1] == "0") {
          image.value = [values[index2]];
          values.splice(index2, 1);
          break;
        }
      }
      for (index2 = 0, total = values.length; index2 < total; index2++) {
        if (validator.isListStylePositionKeyword(values[index2][1])) {
          position.value = [values[index2]];
          values.splice(index2, 1);
          break;
        }
      }
      if (values.length > 0 && (validator.isListStyleTypeKeyword(values[0][1]) || validator.isIdentifier(values[0][1]))) {
        type.value = [values[0]];
      }
      return components;
    }
    function transition(property, configuration, validator) {
      var prop = _wrapDefault(property.name + "-property", property, configuration);
      var duration = _wrapDefault(property.name + "-duration", property, configuration);
      var timing = _wrapDefault(property.name + "-timing-function", property, configuration);
      var delay = _wrapDefault(property.name + "-delay", property, configuration);
      var components = [prop, duration, timing, delay];
      var values = property.value;
      var value;
      var durationSet = false;
      var delaySet = false;
      var propSet = false;
      var timingSet = false;
      var i;
      var l;
      if (property.value.length == 1 && property.value[0][1] == "inherit") {
        prop.value = duration.value = timing.value = delay.value = property.value;
        return components;
      }
      if (values.length > 1 && _anyIsInherit(values)) {
        throw new InvalidPropertyError("Invalid animation values at " + formatPosition(values[0][2][0]) + ". Ignoring.");
      }
      for (i = 0, l = values.length; i < l; i++) {
        value = values[i];
        if (validator.isTime(value[1]) && !durationSet) {
          duration.value = [value];
          durationSet = true;
        } else if (validator.isTime(value[1]) && !delaySet) {
          delay.value = [value];
          delaySet = true;
        } else if ((validator.isGlobal(value[1]) || validator.isTimingFunction(value[1])) && !timingSet) {
          timing.value = [value];
          timingSet = true;
        } else if (validator.isIdentifier(value[1]) && !propSet) {
          prop.value = [value];
          propSet = true;
        } else {
          throw new InvalidPropertyError("Invalid animation value at " + formatPosition(value[2][0]) + ". Ignoring.");
        }
      }
      return components;
    }
    function widthStyleColor(property, configuration, validator) {
      var descriptor = configuration[property.name];
      var components = [
        _wrapDefault(descriptor.components[0], property, configuration),
        _wrapDefault(descriptor.components[1], property, configuration),
        _wrapDefault(descriptor.components[2], property, configuration)
      ];
      var color, style, width;
      for (var i = 0; i < 3; i++) {
        var component = components[i];
        if (component.name.indexOf("color") > 0) {
          color = component;
        } else if (component.name.indexOf("style") > 0) {
          style = component;
        } else {
          width = component;
        }
      }
      if (property.value.length == 1 && property.value[0][1] == "inherit" || property.value.length == 3 && property.value[0][1] == "inherit" && property.value[1][1] == "inherit" && property.value[2][1] == "inherit") {
        color.value = style.value = width.value = [property.value[0]];
        return components;
      }
      var values = property.value.slice(0);
      var match, matches;
      if (values.length > 0) {
        matches = values.filter(_widthFilter(validator));
        match = matches.length > 1 && (matches[0][1] == "none" || matches[0][1] == "auto") ? matches[1] : matches[0];
        if (match) {
          width.value = [match];
          values.splice(values.indexOf(match), 1);
        }
      }
      if (values.length > 0) {
        match = values.filter(_styleFilter(validator))[0];
        if (match) {
          style.value = [match];
          values.splice(values.indexOf(match), 1);
        }
      }
      if (values.length > 0) {
        match = values.filter(_colorFilter(validator))[0];
        if (match) {
          color.value = [match];
          values.splice(values.indexOf(match), 1);
        }
      }
      return components;
    }
    module2.exports = {
      animation,
      background,
      border: widthStyleColor,
      borderRadius,
      font,
      fourValues,
      listStyle,
      multiplex,
      outline: widthStyleColor,
      transition
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/vendor-prefixes.js
var require_vendor_prefixes = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/vendor-prefixes.js"(exports, module2) {
    init_cjs_shims();
    var VENDOR_PREFIX_PATTERN = /(?:^|\W)(-\w+-)/g;
    function unique(value) {
      var prefixes = [];
      var match;
      while ((match = VENDOR_PREFIX_PATTERN.exec(value)) !== null) {
        if (prefixes.indexOf(match[0]) == -1) {
          prefixes.push(match[0]);
        }
      }
      return prefixes;
    }
    function same(value1, value2) {
      return unique(value1).sort().join(",") == unique(value2).sort().join(",");
    }
    module2.exports = {
      unique,
      same
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration/properties/understandable.js
var require_understandable = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration/properties/understandable.js"(exports, module2) {
    init_cjs_shims();
    var sameVendorPrefixes = require_vendor_prefixes().same;
    function understandable(validator, value1, value2, _position, isPaired) {
      if (!sameVendorPrefixes(value1, value2)) {
        return false;
      }
      if (isPaired && validator.isVariable(value1) !== validator.isVariable(value2)) {
        return false;
      }
      return true;
    }
    module2.exports = understandable;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration/can-override.js
var require_can_override = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration/can-override.js"(exports, module2) {
    init_cjs_shims();
    var understandable = require_understandable();
    function animationIterationCount(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !(validator.isAnimationIterationCountKeyword(value2) || validator.isPositiveNumber(value2))) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      return validator.isAnimationIterationCountKeyword(value2) || validator.isPositiveNumber(value2);
    }
    function animationName(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !(validator.isAnimationNameKeyword(value2) || validator.isIdentifier(value2))) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      return validator.isAnimationNameKeyword(value2) || validator.isIdentifier(value2);
    }
    function areSameFunction(validator, value1, value2) {
      if (!validator.isFunction(value1) || !validator.isFunction(value2)) {
        return false;
      }
      var function1Name = value1.substring(0, value1.indexOf("("));
      var function2Name = value2.substring(0, value2.indexOf("("));
      var function1Value = value1.substring(function1Name.length + 1, value1.length - 1);
      var function2Value = value2.substring(function2Name.length + 1, value2.length - 1);
      if (validator.isFunction(function1Value) || validator.isFunction(function2Value)) {
        return function1Name === function2Name && areSameFunction(validator, function1Value, function2Value);
      }
      return function1Name === function2Name;
    }
    function backgroundPosition(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !(validator.isBackgroundPositionKeyword(value2) || validator.isGlobal(value2))) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      if (validator.isBackgroundPositionKeyword(value2) || validator.isGlobal(value2)) {
        return true;
      }
      return unit(validator, value1, value2);
    }
    function backgroundSize(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !(validator.isBackgroundSizeKeyword(value2) || validator.isGlobal(value2))) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      if (validator.isBackgroundSizeKeyword(value2) || validator.isGlobal(value2)) {
        return true;
      }
      return unit(validator, value1, value2);
    }
    function color(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !validator.isColor(value2)) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      if (!validator.colorOpacity && (validator.isRgbColor(value1) || validator.isHslColor(value1))) {
        return false;
      }
      if (!validator.colorOpacity && (validator.isRgbColor(value2) || validator.isHslColor(value2))) {
        return false;
      }
      if (!validator.colorHexAlpha && (validator.isHexAlphaColor(value1) || validator.isHexAlphaColor(value2))) {
        return false;
      }
      if (validator.isColor(value1) && validator.isColor(value2)) {
        return true;
      }
      return sameFunctionOrValue(validator, value1, value2);
    }
    function components(overrideCheckers) {
      return function(validator, value1, value2, position) {
        return overrideCheckers[position](validator, value1, value2);
      };
    }
    function fontFamily(validator, value1, value2) {
      return understandable(validator, value1, value2, 0, true);
    }
    function image(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !validator.isImage(value2)) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      if (validator.isImage(value2)) {
        return true;
      }
      if (validator.isImage(value1)) {
        return false;
      }
      return sameFunctionOrValue(validator, value1, value2);
    }
    function keyword(propertyName2) {
      return function(validator, value1, value2) {
        if (!understandable(validator, value1, value2, 0, true) && !validator.isKeyword(propertyName2)(value2)) {
          return false;
        }
        if (validator.isVariable(value1) && validator.isVariable(value2)) {
          return true;
        }
        return validator.isKeyword(propertyName2)(value2);
      };
    }
    function keywordWithGlobal(propertyName2) {
      return function(validator, value1, value2) {
        if (!understandable(validator, value1, value2, 0, true) && !(validator.isKeyword(propertyName2)(value2) || validator.isGlobal(value2))) {
          return false;
        }
        if (validator.isVariable(value1) && validator.isVariable(value2)) {
          return true;
        }
        return validator.isKeyword(propertyName2)(value2) || validator.isGlobal(value2);
      };
    }
    function propertyName(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !validator.isIdentifier(value2)) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      return validator.isIdentifier(value2);
    }
    function sameFunctionOrValue(validator, value1, value2) {
      return areSameFunction(validator, value1, value2) ? true : value1 === value2;
    }
    function textShadow(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !(validator.isUnit(value2) || validator.isColor(value2) || validator.isGlobal(value2))) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      return validator.isUnit(value2) || validator.isColor(value2) || validator.isGlobal(value2);
    }
    function time(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !validator.isTime(value2)) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      if (validator.isTime(value1) && !validator.isTime(value2)) {
        return false;
      }
      if (validator.isTime(value2)) {
        return true;
      }
      if (validator.isTime(value1)) {
        return false;
      }
      if (validator.isFunction(value1) && !validator.isPrefixed(value1) && validator.isFunction(value2) && !validator.isPrefixed(value2)) {
        return true;
      }
      return sameFunctionOrValue(validator, value1, value2);
    }
    function timingFunction(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !(validator.isTimingFunction(value2) || validator.isGlobal(value2))) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      return validator.isTimingFunction(value2) || validator.isGlobal(value2);
    }
    function unit(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !validator.isUnit(value2)) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      if (validator.isUnit(value1) && !validator.isUnit(value2)) {
        return false;
      }
      if (validator.isUnit(value2)) {
        return true;
      }
      if (validator.isUnit(value1)) {
        return false;
      }
      if (validator.isFunction(value1) && !validator.isPrefixed(value1) && validator.isFunction(value2) && !validator.isPrefixed(value2)) {
        return true;
      }
      return sameFunctionOrValue(validator, value1, value2);
    }
    function unitOrKeywordWithGlobal(propertyName2) {
      var byKeyword = keywordWithGlobal(propertyName2);
      return function(validator, value1, value2) {
        return unit(validator, value1, value2) || byKeyword(validator, value1, value2);
      };
    }
    function unitOrNumber(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !(validator.isUnit(value2) || validator.isNumber(value2))) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      if ((validator.isUnit(value1) || validator.isNumber(value1)) && !(validator.isUnit(value2) || validator.isNumber(value2))) {
        return false;
      }
      if (validator.isUnit(value2) || validator.isNumber(value2)) {
        return true;
      }
      if (validator.isUnit(value1) || validator.isNumber(value1)) {
        return false;
      }
      if (validator.isFunction(value1) && !validator.isPrefixed(value1) && validator.isFunction(value2) && !validator.isPrefixed(value2)) {
        return true;
      }
      return sameFunctionOrValue(validator, value1, value2);
    }
    function zIndex(validator, value1, value2) {
      if (!understandable(validator, value1, value2, 0, true) && !validator.isZIndex(value2)) {
        return false;
      }
      if (validator.isVariable(value1) && validator.isVariable(value2)) {
        return true;
      }
      return validator.isZIndex(value2);
    }
    module2.exports = {
      generic: {
        color,
        components,
        image,
        propertyName,
        time,
        timingFunction,
        unit,
        unitOrNumber
      },
      property: {
        animationDirection: keywordWithGlobal("animation-direction"),
        animationFillMode: keyword("animation-fill-mode"),
        animationIterationCount,
        animationName,
        animationPlayState: keywordWithGlobal("animation-play-state"),
        backgroundAttachment: keyword("background-attachment"),
        backgroundClip: keywordWithGlobal("background-clip"),
        backgroundOrigin: keyword("background-origin"),
        backgroundPosition,
        backgroundRepeat: keyword("background-repeat"),
        backgroundSize,
        bottom: unitOrKeywordWithGlobal("bottom"),
        borderCollapse: keyword("border-collapse"),
        borderStyle: keywordWithGlobal("*-style"),
        clear: keywordWithGlobal("clear"),
        cursor: keywordWithGlobal("cursor"),
        display: keywordWithGlobal("display"),
        float: keywordWithGlobal("float"),
        left: unitOrKeywordWithGlobal("left"),
        fontFamily,
        fontStretch: keywordWithGlobal("font-stretch"),
        fontStyle: keywordWithGlobal("font-style"),
        fontVariant: keywordWithGlobal("font-variant"),
        fontWeight: keywordWithGlobal("font-weight"),
        listStyleType: keywordWithGlobal("list-style-type"),
        listStylePosition: keywordWithGlobal("list-style-position"),
        outlineStyle: keywordWithGlobal("*-style"),
        overflow: keywordWithGlobal("overflow"),
        position: keywordWithGlobal("position"),
        right: unitOrKeywordWithGlobal("right"),
        textAlign: keywordWithGlobal("text-align"),
        textDecoration: keywordWithGlobal("text-decoration"),
        textOverflow: keywordWithGlobal("text-overflow"),
        textShadow,
        top: unitOrKeywordWithGlobal("top"),
        transform: sameFunctionOrValue,
        verticalAlign: unitOrKeywordWithGlobal("vertical-align"),
        visibility: keywordWithGlobal("visibility"),
        whiteSpace: keywordWithGlobal("white-space"),
        zIndex
      }
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/clone.js
var require_clone = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/clone.js"(exports, module2) {
    init_cjs_shims();
    var wrapSingle = require_wrap_for_optimizing().single;
    var Token = require_token();
    function deep(property) {
      var cloned = shallow(property);
      for (var i = property.components.length - 1; i >= 0; i--) {
        var component = shallow(property.components[i]);
        component.value = property.components[i].value.slice(0);
        cloned.components.unshift(component);
      }
      cloned.dirty = true;
      cloned.value = property.value.slice(0);
      return cloned;
    }
    function shallow(property) {
      var cloned = wrapSingle([
        Token.PROPERTY,
        [Token.PROPERTY_NAME, property.name]
      ]);
      cloned.important = property.important;
      cloned.hack = property.hack;
      cloned.unused = false;
      return cloned;
    }
    module2.exports = {
      deep,
      shallow
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration/restore.js
var require_restore = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration/restore.js"(exports, module2) {
    init_cjs_shims();
    var shallowClone = require_clone().shallow;
    var Token = require_token();
    var Marker = require_marker();
    function isInheritOnly(values) {
      for (var i = 0, l = values.length; i < l; i++) {
        var value = values[i][1];
        if (value != "inherit" && value != Marker.COMMA && value != Marker.FORWARD_SLASH) {
          return false;
        }
      }
      return true;
    }
    function background(property, configuration, lastInMultiplex) {
      var components = property.components;
      var restored = [];
      var needsOne, needsBoth;
      function restoreValue(component2) {
        Array.prototype.unshift.apply(restored, component2.value);
      }
      function isDefaultValue(component2) {
        var descriptor = configuration[component2.name];
        if (descriptor.doubleValues && descriptor.defaultValue.length == 1) {
          return component2.value[0][1] == descriptor.defaultValue[0] && (component2.value[1] ? component2.value[1][1] == descriptor.defaultValue[0] : true);
        }
        if (descriptor.doubleValues && descriptor.defaultValue.length != 1) {
          return component2.value[0][1] == descriptor.defaultValue[0] && (component2.value[1] ? component2.value[1][1] : component2.value[0][1]) == descriptor.defaultValue[1];
        }
        return component2.value[0][1] == descriptor.defaultValue;
      }
      for (var i = components.length - 1; i >= 0; i--) {
        var component = components[i];
        var isDefault2 = isDefaultValue(component);
        if (component.name == "background-clip") {
          var originComponent = components[i - 1];
          var isOriginDefault = isDefaultValue(originComponent);
          needsOne = component.value[0][1] == originComponent.value[0][1];
          needsBoth = !needsOne && (isOriginDefault && !isDefault2 || !isOriginDefault && !isDefault2 || !isOriginDefault && isDefault2 && component.value[0][1] != originComponent.value[0][1]);
          if (needsOne) {
            restoreValue(originComponent);
          } else if (needsBoth) {
            restoreValue(component);
            restoreValue(originComponent);
          }
          i--;
        } else if (component.name == "background-size") {
          var positionComponent = components[i - 1];
          var isPositionDefault = isDefaultValue(positionComponent);
          needsOne = !isPositionDefault && isDefault2;
          needsBoth = !needsOne && (isPositionDefault && !isDefault2 || !isPositionDefault && !isDefault2);
          if (needsOne) {
            restoreValue(positionComponent);
          } else if (needsBoth) {
            restoreValue(component);
            restored.unshift([Token.PROPERTY_VALUE, Marker.FORWARD_SLASH]);
            restoreValue(positionComponent);
          } else if (positionComponent.value.length == 1) {
            restoreValue(positionComponent);
          }
          i--;
        } else {
          if (isDefault2 || configuration[component.name].multiplexLastOnly && !lastInMultiplex) {
            continue;
          }
          restoreValue(component);
        }
      }
      if (restored.length === 0 && property.value.length == 1 && property.value[0][1] == "0") {
        restored.push(property.value[0]);
      }
      if (restored.length === 0) {
        restored.push([Token.PROPERTY_VALUE, configuration[property.name].defaultValue]);
      }
      if (isInheritOnly(restored)) {
        return [restored[0]];
      }
      return restored;
    }
    function borderRadius(property) {
      if (property.multiplex) {
        var horizontal = shallowClone(property);
        var vertical = shallowClone(property);
        for (var i = 0; i < 4; i++) {
          var component = property.components[i];
          var horizontalComponent = shallowClone(property);
          horizontalComponent.value = [component.value[0]];
          horizontal.components.push(horizontalComponent);
          var verticalComponent = shallowClone(property);
          verticalComponent.value = [component.value[1] || component.value[0]];
          vertical.components.push(verticalComponent);
        }
        var horizontalValues = fourValues(horizontal);
        var verticalValues = fourValues(vertical);
        if (horizontalValues.length == verticalValues.length && horizontalValues[0][1] == verticalValues[0][1] && (horizontalValues.length > 1 ? horizontalValues[1][1] == verticalValues[1][1] : true) && (horizontalValues.length > 2 ? horizontalValues[2][1] == verticalValues[2][1] : true) && (horizontalValues.length > 3 ? horizontalValues[3][1] == verticalValues[3][1] : true)) {
          return horizontalValues;
        }
        return horizontalValues.concat([[Token.PROPERTY_VALUE, Marker.FORWARD_SLASH]]).concat(verticalValues);
      }
      return fourValues(property);
    }
    function font(property, configuration) {
      var components = property.components;
      var restored = [];
      var component;
      var componentIndex = 0;
      var fontFamilyIndex = 0;
      if (property.value[0][1].indexOf(Marker.INTERNAL) === 0) {
        property.value[0][1] = property.value[0][1].substring(Marker.INTERNAL.length);
        return property.value;
      }
      while (componentIndex < 4) {
        component = components[componentIndex];
        if (component.value[0][1] != configuration[component.name].defaultValue) {
          Array.prototype.push.apply(restored, component.value);
        }
        componentIndex++;
      }
      Array.prototype.push.apply(restored, components[componentIndex].value);
      componentIndex++;
      if (components[componentIndex].value[0][1] != configuration[components[componentIndex].name].defaultValue) {
        Array.prototype.push.apply(restored, [[Token.PROPERTY_VALUE, Marker.FORWARD_SLASH]]);
        Array.prototype.push.apply(restored, components[componentIndex].value);
      }
      componentIndex++;
      while (components[componentIndex].value[fontFamilyIndex]) {
        restored.push(components[componentIndex].value[fontFamilyIndex]);
        if (components[componentIndex].value[fontFamilyIndex + 1]) {
          restored.push([Token.PROPERTY_VALUE, Marker.COMMA]);
        }
        fontFamilyIndex++;
      }
      if (isInheritOnly(restored)) {
        return [restored[0]];
      }
      return restored;
    }
    function fourValues(property) {
      var components = property.components;
      var value1 = components[0].value[0];
      var value2 = components[1].value[0];
      var value3 = components[2].value[0];
      var value4 = components[3].value[0];
      if (value1[1] == value2[1] && value1[1] == value3[1] && value1[1] == value4[1]) {
        return [value1];
      }
      if (value1[1] == value3[1] && value2[1] == value4[1]) {
        return [value1, value2];
      }
      if (value2[1] == value4[1]) {
        return [value1, value2, value3];
      }
      return [value1, value2, value3, value4];
    }
    function multiplex(restoreWith) {
      return function(property, configuration) {
        if (!property.multiplex) {
          return restoreWith(property, configuration, true);
        }
        var multiplexSize = 0;
        var restored = [];
        var componentMultiplexSoFar = {};
        var i, l;
        for (i = 0, l = property.components[0].value.length; i < l; i++) {
          if (property.components[0].value[i][1] == Marker.COMMA) {
            multiplexSize++;
          }
        }
        for (i = 0; i <= multiplexSize; i++) {
          var _property = shallowClone(property);
          for (var j = 0, m = property.components.length; j < m; j++) {
            var componentToClone = property.components[j];
            var _component = shallowClone(componentToClone);
            _property.components.push(_component);
            for (var k = componentMultiplexSoFar[_component.name] || 0, n = componentToClone.value.length; k < n; k++) {
              if (componentToClone.value[k][1] == Marker.COMMA) {
                componentMultiplexSoFar[_component.name] = k + 1;
                break;
              }
              _component.value.push(componentToClone.value[k]);
            }
          }
          var lastInMultiplex = i == multiplexSize;
          var _restored = restoreWith(_property, configuration, lastInMultiplex);
          Array.prototype.push.apply(restored, _restored);
          if (i < multiplexSize) {
            restored.push([Token.PROPERTY_VALUE, Marker.COMMA]);
          }
        }
        return restored;
      };
    }
    function withoutDefaults(property, configuration) {
      var components = property.components;
      var restored = [];
      for (var i = components.length - 1; i >= 0; i--) {
        var component = components[i];
        var descriptor = configuration[component.name];
        if (component.value[0][1] != descriptor.defaultValue || "keepUnlessDefault" in descriptor && !isDefault(components, configuration, descriptor.keepUnlessDefault)) {
          restored.unshift(component.value[0]);
        }
      }
      if (restored.length === 0) {
        restored.push([Token.PROPERTY_VALUE, configuration[property.name].defaultValue]);
      }
      if (isInheritOnly(restored)) {
        return [restored[0]];
      }
      return restored;
    }
    function isDefault(components, configuration, propertyName) {
      var component;
      var i, l;
      for (i = 0, l = components.length; i < l; i++) {
        component = components[i];
        if (component.name == propertyName && component.value[0][1] == configuration[propertyName].defaultValue) {
          return true;
        }
      }
      return false;
    }
    module2.exports = {
      background,
      borderRadius,
      font,
      fourValues,
      multiplex,
      withoutDefaults
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/rounding-precision.js
var require_rounding_precision = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/rounding-precision.js"(exports, module2) {
    init_cjs_shims();
    var override = require_override();
    var INTEGER_PATTERN = /^\d+$/;
    var ALL_UNITS = ["*", "all"];
    var DEFAULT_PRECISION = "off";
    var DIRECTIVES_SEPARATOR = ",";
    var DIRECTIVE_VALUE_SEPARATOR = "=";
    function roundingPrecisionFrom(source) {
      return override(defaults(DEFAULT_PRECISION), buildPrecisionFrom(source));
    }
    function defaults(value) {
      return {
        ch: value,
        cm: value,
        em: value,
        ex: value,
        in: value,
        mm: value,
        pc: value,
        pt: value,
        px: value,
        q: value,
        rem: value,
        vh: value,
        vmax: value,
        vmin: value,
        vw: value,
        "%": value
      };
    }
    function buildPrecisionFrom(source) {
      if (source === null || source === void 0) {
        return {};
      }
      if (typeof source == "boolean") {
        return {};
      }
      if (typeof source == "number" && source == -1) {
        return defaults(DEFAULT_PRECISION);
      }
      if (typeof source == "number") {
        return defaults(source);
      }
      if (typeof source == "string" && INTEGER_PATTERN.test(source)) {
        return defaults(parseInt(source));
      }
      if (typeof source == "string" && source == DEFAULT_PRECISION) {
        return defaults(DEFAULT_PRECISION);
      }
      if (typeof source == "object") {
        return source;
      }
      return source.split(DIRECTIVES_SEPARATOR).reduce(function(accumulator, directive) {
        var directiveParts = directive.split(DIRECTIVE_VALUE_SEPARATOR);
        var name = directiveParts[0];
        var value = parseInt(directiveParts[1]);
        if (Number.isNaN(value) || value == -1) {
          value = DEFAULT_PRECISION;
        }
        if (ALL_UNITS.indexOf(name) > -1) {
          accumulator = override(accumulator, defaults(value));
        } else {
          accumulator[name] = value;
        }
        return accumulator;
      }, {});
    }
    module2.exports = {
      DEFAULT: DEFAULT_PRECISION,
      roundingPrecisionFrom
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/optimization-level.js
var require_optimization_level = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/optimization-level.js"(exports, module2) {
    init_cjs_shims();
    var roundingPrecisionFrom = require_rounding_precision().roundingPrecisionFrom;
    var override = require_override();
    var OptimizationLevel = {
      Zero: "0",
      One: "1",
      Two: "2"
    };
    var DEFAULTS = {};
    DEFAULTS[OptimizationLevel.Zero] = {};
    DEFAULTS[OptimizationLevel.One] = {
      cleanupCharsets: true,
      normalizeUrls: true,
      optimizeBackground: true,
      optimizeBorderRadius: true,
      optimizeFilter: true,
      optimizeFontWeight: true,
      optimizeOutline: true,
      removeEmpty: true,
      removeNegativePaddings: true,
      removeQuotes: true,
      removeWhitespace: true,
      replaceMultipleZeros: true,
      replaceTimeUnits: true,
      replaceZeroUnits: true,
      roundingPrecision: roundingPrecisionFrom(void 0),
      selectorsSortingMethod: "standard",
      specialComments: "all",
      tidyAtRules: true,
      tidyBlockScopes: true,
      tidySelectors: true,
      variableValueOptimizers: []
    };
    DEFAULTS[OptimizationLevel.Two] = {
      mergeAdjacentRules: true,
      mergeIntoShorthands: true,
      mergeMedia: true,
      mergeNonAdjacentRules: true,
      mergeSemantically: false,
      overrideProperties: true,
      removeEmpty: true,
      reduceNonAdjacentRules: true,
      removeDuplicateFontRules: true,
      removeDuplicateMediaBlocks: true,
      removeDuplicateRules: true,
      removeUnusedAtRules: false,
      restructureRules: false,
      skipProperties: []
    };
    var ALL_KEYWORD_1 = "*";
    var ALL_KEYWORD_2 = "all";
    var FALSE_KEYWORD_1 = "false";
    var FALSE_KEYWORD_2 = "off";
    var TRUE_KEYWORD_1 = "true";
    var TRUE_KEYWORD_2 = "on";
    var LIST_VALUE_SEPARATOR = ",";
    var OPTION_SEPARATOR = ";";
    var OPTION_VALUE_SEPARATOR = ":";
    function optimizationLevelFrom(source) {
      var level = override(DEFAULTS, {});
      var Zero = OptimizationLevel.Zero;
      var One = OptimizationLevel.One;
      var Two = OptimizationLevel.Two;
      if (source === void 0) {
        delete level[Two];
        return level;
      }
      if (typeof source == "string") {
        source = parseInt(source);
      }
      if (typeof source == "number" && source === parseInt(Two)) {
        return level;
      }
      if (typeof source == "number" && source === parseInt(One)) {
        delete level[Two];
        return level;
      }
      if (typeof source == "number" && source === parseInt(Zero)) {
        delete level[Two];
        delete level[One];
        return level;
      }
      if (typeof source == "object") {
        source = covertValuesToHashes(source);
      }
      if (One in source && "roundingPrecision" in source[One]) {
        source[One].roundingPrecision = roundingPrecisionFrom(source[One].roundingPrecision);
      }
      if (Two in source && "skipProperties" in source[Two] && typeof source[Two].skipProperties == "string") {
        source[Two].skipProperties = source[Two].skipProperties.split(LIST_VALUE_SEPARATOR);
      }
      if (Zero in source || One in source || Two in source) {
        level[Zero] = override(level[Zero], source[Zero]);
      }
      if (One in source && ALL_KEYWORD_1 in source[One]) {
        level[One] = override(level[One], defaults(One, normalizeValue(source[One][ALL_KEYWORD_1])));
        delete source[One][ALL_KEYWORD_1];
      }
      if (One in source && ALL_KEYWORD_2 in source[One]) {
        level[One] = override(level[One], defaults(One, normalizeValue(source[One][ALL_KEYWORD_2])));
        delete source[One][ALL_KEYWORD_2];
      }
      if (One in source || Two in source) {
        level[One] = override(level[One], source[One]);
      } else {
        delete level[One];
      }
      if (Two in source && ALL_KEYWORD_1 in source[Two]) {
        level[Two] = override(level[Two], defaults(Two, normalizeValue(source[Two][ALL_KEYWORD_1])));
        delete source[Two][ALL_KEYWORD_1];
      }
      if (Two in source && ALL_KEYWORD_2 in source[Two]) {
        level[Two] = override(level[Two], defaults(Two, normalizeValue(source[Two][ALL_KEYWORD_2])));
        delete source[Two][ALL_KEYWORD_2];
      }
      if (Two in source) {
        level[Two] = override(level[Two], source[Two]);
      } else {
        delete level[Two];
      }
      return level;
    }
    function defaults(level, value) {
      var options = override(DEFAULTS[level], {});
      var key;
      for (key in options) {
        if (typeof options[key] == "boolean") {
          options[key] = value;
        }
      }
      return options;
    }
    function normalizeValue(value) {
      switch (value) {
        case FALSE_KEYWORD_1:
        case FALSE_KEYWORD_2:
          return false;
        case TRUE_KEYWORD_1:
        case TRUE_KEYWORD_2:
          return true;
        default:
          return value;
      }
    }
    function covertValuesToHashes(source) {
      var clonedSource = override(source, {});
      var level;
      var i;
      for (i = 0; i <= 2; i++) {
        level = "" + i;
        if (level in clonedSource && (clonedSource[level] === void 0 || clonedSource[level] === false)) {
          delete clonedSource[level];
        }
        if (level in clonedSource && clonedSource[level] === true) {
          clonedSource[level] = {};
        }
        if (level in clonedSource && typeof clonedSource[level] == "string") {
          clonedSource[level] = covertToHash(clonedSource[level], level);
        }
      }
      return clonedSource;
    }
    function covertToHash(asString, level) {
      return asString.split(OPTION_SEPARATOR).reduce(function(accumulator, directive) {
        var parts = directive.split(OPTION_VALUE_SEPARATOR);
        var name = parts[0];
        var value = parts[1];
        var normalizedValue = normalizeValue(value);
        if (ALL_KEYWORD_1 == name || ALL_KEYWORD_2 == name) {
          accumulator = override(accumulator, defaults(level, normalizedValue));
        } else {
          accumulator[name] = normalizedValue;
        }
        return accumulator;
      }, {});
    }
    module2.exports = {
      OptimizationLevel,
      optimizationLevelFrom
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/background.js
var require_background = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/background.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var plugin = {
      level1: {
        property: function background(_rule, property, options) {
          var values = property.value;
          if (!options.level[OptimizationLevel.One].optimizeBackground) {
            return;
          }
          if (values.length == 1 && values[0][1] == "none") {
            values[0][1] = "0 0";
          }
          if (values.length == 1 && values[0][1] == "transparent") {
            values[0][1] = "0 0";
          }
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/box-shadow.js
var require_box_shadow = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/box-shadow.js"(exports, module2) {
    init_cjs_shims();
    var plugin = {
      level1: {
        property: function boxShadow(_rule, property) {
          var values = property.value;
          if (values.length == 4 && values[0][1] === "0" && values[1][1] === "0" && values[2][1] === "0" && values[3][1] === "0") {
            property.value.splice(2);
            property.dirty = true;
          }
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/border-radius.js
var require_border_radius = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/border-radius.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var plugin = {
      level1: {
        property: function borderRadius(_rule, property, options) {
          var values = property.value;
          if (!options.level[OptimizationLevel.One].optimizeBorderRadius) {
            return;
          }
          if (values.length == 3 && values[1][1] == "/" && values[0][1] == values[2][1]) {
            property.value.splice(1);
            property.dirty = true;
          } else if (values.length == 5 && values[2][1] == "/" && values[0][1] == values[3][1] && values[1][1] == values[4][1]) {
            property.value.splice(2);
            property.dirty = true;
          } else if (values.length == 7 && values[3][1] == "/" && values[0][1] == values[4][1] && values[1][1] == values[5][1] && values[2][1] == values[6][1]) {
            property.value.splice(3);
            property.dirty = true;
          } else if (values.length == 9 && values[4][1] == "/" && values[0][1] == values[5][1] && values[1][1] == values[6][1] && values[2][1] == values[7][1] && values[3][1] == values[8][1]) {
            property.value.splice(4);
            property.dirty = true;
          }
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/filter.js
var require_filter = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/filter.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var ALPHA_OR_CHROMA_FILTER_PATTERN = /progid:DXImageTransform\.Microsoft\.(Alpha|Chroma)(\W)/;
    var NO_SPACE_AFTER_COMMA_PATTERN = /,(\S)/g;
    var WHITESPACE_AROUND_EQUALS_PATTERN = / ?= ?/g;
    var plugin = {
      level1: {
        property: function filter(_rule, property, options) {
          if (!options.compatibility.properties.ieFilters) {
            return;
          }
          if (!options.level[OptimizationLevel.One].optimizeFilter) {
            return;
          }
          if (property.value.length == 1) {
            property.value[0][1] = property.value[0][1].replace(ALPHA_OR_CHROMA_FILTER_PATTERN, function(match, filter2, suffix) {
              return filter2.toLowerCase() + suffix;
            });
          }
          property.value[0][1] = property.value[0][1].replace(NO_SPACE_AFTER_COMMA_PATTERN, ", $1").replace(WHITESPACE_AROUND_EQUALS_PATTERN, "=");
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/font-weight.js
var require_font_weight = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/font-weight.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var plugin = {
      level1: {
        property: function fontWeight(_rule, property, options) {
          var value = property.value[0][1];
          if (!options.level[OptimizationLevel.One].optimizeFontWeight) {
            return;
          }
          if (value == "normal") {
            value = "400";
          } else if (value == "bold") {
            value = "700";
          }
          property.value[0][1] = value;
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/margin.js
var require_margin = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/margin.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var plugin = {
      level1: {
        property: function margin(_rule, property, options) {
          var values = property.value;
          if (!options.level[OptimizationLevel.One].replaceMultipleZeros) {
            return;
          }
          if (values.length == 4 && values[0][1] === "0" && values[1][1] === "0" && values[2][1] === "0" && values[3][1] === "0") {
            property.value.splice(1);
            property.dirty = true;
          }
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/outline.js
var require_outline = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/outline.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var plugin = {
      level1: {
        property: function outline(_rule, property, options) {
          var values = property.value;
          if (!options.level[OptimizationLevel.One].optimizeOutline) {
            return;
          }
          if (values.length == 1 && values[0][1] == "none") {
            values[0][1] = "0";
          }
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/padding.js
var require_padding = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/padding.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    function isNegative(value) {
      return value && value[1][0] == "-" && parseFloat(value[1]) < 0;
    }
    var plugin = {
      level1: {
        property: function padding(_rule, property, options) {
          var values = property.value;
          if (values.length == 4 && values[0][1] === "0" && values[1][1] === "0" && values[2][1] === "0" && values[3][1] === "0") {
            property.value.splice(1);
            property.dirty = true;
          }
          if (options.level[OptimizationLevel.One].removeNegativePaddings && (isNegative(property.value[0]) || isNegative(property.value[1]) || isNegative(property.value[2]) || isNegative(property.value[3]))) {
            property.unused = true;
          }
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers.js
var require_property_optimizers = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/property-optimizers.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = {
      background: require_background().level1.property,
      boxShadow: require_box_shadow().level1.property,
      borderRadius: require_border_radius().level1.property,
      filter: require_filter().level1.property,
      fontWeight: require_font_weight().level1.property,
      margin: require_margin().level1.property,
      outline: require_outline().level1.property,
      padding: require_padding().level1.property
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-hex.js
var require_shorten_hex = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-hex.js"(exports, module2) {
    init_cjs_shims();
    var COLORS = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#0ff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000",
      blanchedalmond: "#ffebcd",
      blue: "#00f",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#0ff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#f0f",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#0f0",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#f00",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#fff",
      whitesmoke: "#f5f5f5",
      yellow: "#ff0",
      yellowgreen: "#9acd32"
    };
    var toHex = {};
    var toName = {};
    for (name in COLORS) {
      hex = COLORS[name];
      if (name.length < hex.length) {
        toName[hex] = name;
      } else {
        toHex[name] = hex;
      }
    }
    var hex;
    var name;
    var toHexPattern = new RegExp("(^| |,|\\))(" + Object.keys(toHex).join("|") + ")( |,|\\)|$)", "ig");
    var toNamePattern = new RegExp("(" + Object.keys(toName).join("|") + ")([^a-f0-9]|$)", "ig");
    function hexConverter(match, prefix, colorValue, suffix) {
      return prefix + toHex[colorValue.toLowerCase()] + suffix;
    }
    function nameConverter(match, colorValue, suffix) {
      return toName[colorValue.toLowerCase()] + suffix;
    }
    function shortenHex(value) {
      var hasHex = value.indexOf("#") > -1;
      var shortened = value.replace(toHexPattern, hexConverter);
      if (shortened != value) {
        shortened = shortened.replace(toHexPattern, hexConverter);
      }
      return hasHex ? shortened.replace(toNamePattern, nameConverter) : shortened;
    }
    module2.exports = shortenHex;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-hsl.js
var require_shorten_hsl = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-hsl.js"(exports, module2) {
    init_cjs_shims();
    function hslToRgb(h, s, l) {
      var r, g, b;
      h %= 360;
      if (h < 0) {
        h += 360;
      }
      h = ~~h / 360;
      if (s < 0) {
        s = 0;
      } else if (s > 100) {
        s = 100;
      }
      s = ~~s / 100;
      if (l < 0) {
        l = 0;
      } else if (l > 100) {
        l = 100;
      }
      l = ~~l / 100;
      if (s === 0) {
        r = g = b = l;
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
      }
      return [~~(r * 255), ~~(g * 255), ~~(b * 255)];
    }
    function hueToRgb(p, q, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    }
    function shortenHsl(hue, saturation, lightness) {
      var asRgb = hslToRgb(hue, saturation, lightness);
      var redAsHex = asRgb[0].toString(16);
      var greenAsHex = asRgb[1].toString(16);
      var blueAsHex = asRgb[2].toString(16);
      return "#" + ((redAsHex.length == 1 ? "0" : "") + redAsHex) + ((greenAsHex.length == 1 ? "0" : "") + greenAsHex) + ((blueAsHex.length == 1 ? "0" : "") + blueAsHex);
    }
    module2.exports = shortenHsl;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-rgb.js
var require_shorten_rgb = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-rgb.js"(exports, module2) {
    init_cjs_shims();
    function shortenRgb(red, green, blue) {
      var normalizedRed = Math.max(0, Math.min(parseInt(red), 255));
      var normalizedGreen = Math.max(0, Math.min(parseInt(green), 255));
      var normalizedBlue = Math.max(0, Math.min(parseInt(blue), 255));
      return "#" + ("00000" + (normalizedRed << 16 | normalizedGreen << 8 | normalizedBlue).toString(16)).slice(-6);
    }
    module2.exports = shortenRgb;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/split.js
var require_split = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/split.js"(exports, module2) {
    init_cjs_shims();
    var Marker = require_marker();
    function is(value, separator, isSeparatorRegex) {
      return isSeparatorRegex ? separator.test(value) : value === separator;
    }
    function split(value, separator) {
      var openLevel = Marker.OPEN_ROUND_BRACKET;
      var closeLevel = Marker.CLOSE_ROUND_BRACKET;
      var level = 0;
      var cursor = 0;
      var lastStart = 0;
      var lastValue;
      var lastCharacter;
      var len = value.length;
      var parts = [];
      var isSeparatorRegex = typeof separator == "object" && "exec" in separator;
      if (!isSeparatorRegex && value.indexOf(separator) == -1) {
        return [value];
      }
      if (value.indexOf(openLevel) == -1) {
        return value.split(separator);
      }
      while (cursor < len) {
        if (value[cursor] == openLevel) {
          level++;
        } else if (value[cursor] == closeLevel) {
          level--;
        }
        if (level === 0 && cursor > 0 && cursor + 1 < len && is(value[cursor], separator, isSeparatorRegex)) {
          parts.push(value.substring(lastStart, cursor));
          if (isSeparatorRegex && separator.exec(value[cursor]).length > 1) {
            parts.push(value[cursor]);
          }
          lastStart = cursor + 1;
        }
        cursor++;
      }
      if (lastStart < cursor + 1) {
        lastValue = value.substring(lastStart);
        lastCharacter = lastValue[lastValue.length - 1];
        if (is(lastCharacter, separator, isSeparatorRegex)) {
          lastValue = lastValue.substring(0, lastValue.length - 1);
        }
        parts.push(lastValue);
      }
      return parts;
    }
    module2.exports = split;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color.js
var require_color = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color.js"(exports, module2) {
    init_cjs_shims();
    var shortenHex = require_shorten_hex();
    var shortenHsl = require_shorten_hsl();
    var shortenRgb = require_shorten_rgb();
    var split = require_split();
    var ANY_COLOR_FUNCTION_PATTERN = /(rgb|rgba|hsl|hsla)\(([^()]+)\)/gi;
    var COLOR_PREFIX_PATTERN = /#|rgb|hsl/gi;
    var HEX_LONG_PATTERN = /(^|[^='"])#([0-9a-f]{6})/gi;
    var HEX_SHORT_PATTERN = /(^|[^='"])#([0-9a-f]{3})/gi;
    var HEX_VALUE_PATTERN = /[0-9a-f]/i;
    var HSL_PATTERN = /hsl\((-?\d+),(-?\d+)%?,(-?\d+)%?\)/gi;
    var RGBA_HSLA_PATTERN = /(rgb|hsl)a?\((-?\d+),(-?\d+%?),(-?\d+%?),(0*[1-9]+[0-9]*(\.?\d*)?)\)/gi;
    var RGB_PATTERN = /rgb\((-?\d+),(-?\d+),(-?\d+)\)/gi;
    var TRANSPARENT_FUNCTION_PATTERN = /(?:rgba|hsla)\(0,0%?,0%?,0\)/g;
    var plugin = {
      level1: {
        value: function color(name, value, options) {
          if (!options.compatibility.properties.colors) {
            return value;
          }
          if (!value.match(COLOR_PREFIX_PATTERN)) {
            return shortenHex(value);
          }
          value = value.replace(RGBA_HSLA_PATTERN, function(match, colorFn, p1, p2, p3, alpha) {
            return parseInt(alpha) >= 1 ? colorFn + "(" + [p1, p2, p3].join(",") + ")" : match;
          }).replace(RGB_PATTERN, function(match, red, green, blue) {
            return shortenRgb(red, green, blue);
          }).replace(HSL_PATTERN, function(match, hue, saturation, lightness) {
            return shortenHsl(hue, saturation, lightness);
          }).replace(HEX_LONG_PATTERN, function(match, prefix, color2, at, inputValue) {
            var suffix = inputValue[at + match.length];
            if (suffix && HEX_VALUE_PATTERN.test(suffix)) {
              return match;
            }
            if (color2[0] == color2[1] && color2[2] == color2[3] && color2[4] == color2[5]) {
              return (prefix + "#" + color2[0] + color2[2] + color2[4]).toLowerCase();
            }
            return (prefix + "#" + color2).toLowerCase();
          }).replace(HEX_SHORT_PATTERN, function(match, prefix, color2) {
            return prefix + "#" + color2.toLowerCase();
          }).replace(ANY_COLOR_FUNCTION_PATTERN, function(match, colorFunction, colorDef) {
            var tokens2 = colorDef.split(",");
            var colorFnLowercase = colorFunction && colorFunction.toLowerCase();
            var applies = colorFnLowercase == "hsl" && tokens2.length == 3 || colorFnLowercase == "hsla" && tokens2.length == 4 || colorFnLowercase == "rgb" && tokens2.length === 3 && colorDef.indexOf("%") > 0 || colorFnLowercase == "rgba" && tokens2.length == 4 && colorDef.indexOf("%") > 0;
            if (!applies) {
              return match;
            }
            if (tokens2[1].indexOf("%") == -1) {
              tokens2[1] += "%";
            }
            if (tokens2[2].indexOf("%") == -1) {
              tokens2[2] += "%";
            }
            return colorFunction + "(" + tokens2.join(",") + ")";
          });
          if (options.compatibility.colors.opacity && name.indexOf("background") == -1) {
            value = value.replace(TRANSPARENT_FUNCTION_PATTERN, function(match) {
              if (split(value, ",").pop().indexOf("gradient(") > -1) {
                return match;
              }
              return "transparent";
            });
          }
          return shortenHex(value);
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/degrees.js
var require_degrees = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/degrees.js"(exports, module2) {
    init_cjs_shims();
    var ZERO_DEG_PATTERN = /\(0deg\)/g;
    var plugin = {
      level1: {
        value: function degrees(_name, value, options) {
          if (!options.compatibility.properties.zeroUnits) {
            return value;
          }
          if (value.indexOf("0deg") == -1) {
            return value;
          }
          return value.replace(ZERO_DEG_PATTERN, "(0)");
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/starts-as-url.js
var require_starts_as_url = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/starts-as-url.js"(exports, module2) {
    init_cjs_shims();
    var URL_PREFIX_PATTERN = /^url\(/i;
    function startsAsUrl(value) {
      return URL_PREFIX_PATTERN.test(value);
    }
    module2.exports = startsAsUrl;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/fraction.js
var require_fraction = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/fraction.js"(exports, module2) {
    init_cjs_shims();
    var split = require_split();
    var startsAsUrl = require_starts_as_url();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var EXPRESSION_PATTERN = /^expression\(.*\)$/;
    var ANY_FUNCTION_PATTERN = /^(-(?:moz|ms|o|webkit)-[a-z-]+|[a-z-]+)\((.+)\)$/;
    var TOKEN_SEPARATOR_PATTERN = /([\s,/])/;
    var DOT_ZERO_PATTERN = /(^|\D)\.0+(\D|$)/g;
    var FRACTION_PATTERN = /\.([1-9]*)0+(\D|$)/g;
    var LEADING_ZERO_FRACTION_PATTERN = /(^|\D)0\.(\d)/g;
    var MINUS_ZERO_FRACTION_PATTERN = /([^\w\d-]|^)-0([^.]|$)/g;
    var ZERO_PREFIXED_UNIT_PATTERN = /(^|\s)0+([1-9])/g;
    function optimizeRecursively(value) {
      var functionTokens;
      var tokens2;
      if (startsAsUrl(value)) {
        return value;
      }
      if (EXPRESSION_PATTERN.test(value)) {
        return value;
      }
      functionTokens = ANY_FUNCTION_PATTERN.exec(value);
      if (!functionTokens) {
        return optimizeFractions(value);
      }
      tokens2 = split(functionTokens[2], TOKEN_SEPARATOR_PATTERN).map(function(token2) {
        return optimizeRecursively(token2);
      });
      return functionTokens[1] + "(" + tokens2.join("") + ")";
    }
    function optimizeFractions(value) {
      if (value.indexOf("0") == -1) {
        return value;
      }
      if (value.indexOf("-") > -1) {
        value = value.replace(MINUS_ZERO_FRACTION_PATTERN, "$10$2").replace(MINUS_ZERO_FRACTION_PATTERN, "$10$2");
      }
      return value.replace(ZERO_PREFIXED_UNIT_PATTERN, "$1$2").replace(DOT_ZERO_PATTERN, "$10$2").replace(FRACTION_PATTERN, function(match, nonZeroPart, suffix) {
        return (nonZeroPart.length > 0 ? "." : "") + nonZeroPart + suffix;
      }).replace(LEADING_ZERO_FRACTION_PATTERN, "$1.$2");
    }
    var plugin = {
      level1: {
        value: function fraction(name, value, options) {
          if (!options.level[OptimizationLevel.One].replaceZeroUnits) {
            return value;
          }
          return optimizeRecursively(value);
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/precision.js
var require_precision = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/precision.js"(exports, module2) {
    init_cjs_shims();
    var plugin = {
      level1: {
        value: function precision(_name, value, options) {
          if (!options.precision.enabled || value.indexOf(".") === -1) {
            return value;
          }
          return value.replace(options.precision.decimalPointMatcher, "$1$2$3").replace(options.precision.zeroMatcher, function(match, integerPart, fractionPart, unit) {
            var multiplier = options.precision.units[unit].multiplier;
            var parsedInteger = parseInt(integerPart);
            var integer = Number.isNaN(parsedInteger) ? 0 : parsedInteger;
            var fraction = parseFloat(fractionPart);
            return Math.round((integer + fraction) * multiplier) / multiplier + unit;
          });
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/text-quotes.js
var require_text_quotes = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/text-quotes.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var LOCAL_PREFIX_PATTERN = /^local\(/i;
    var QUOTED_PATTERN = /^('.*'|".*")$/;
    var QUOTED_BUT_SAFE_PATTERN = /^['"][a-zA-Z][a-zA-Z\d\-_]+['"]$/;
    var GENERIC_FONT_FAMILY_PATTERN = /^['"](?:cursive|default|emoji|fangsong|fantasy|inherit|initial|math|monospace|revert|revert-layer|sans-serif|serif|system-ui|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|unset)['"]$/;
    var plugin = {
      level1: {
        value: function textQuotes(name, value, options) {
          if ((name == "font-family" || name == "font") && GENERIC_FONT_FAMILY_PATTERN.test(value)) {
            return value;
          }
          if (!options.level[OptimizationLevel.One].removeQuotes) {
            return value;
          }
          if (!QUOTED_PATTERN.test(value) && !LOCAL_PREFIX_PATTERN.test(value)) {
            return value;
          }
          return QUOTED_BUT_SAFE_PATTERN.test(value) ? value.substring(1, value.length - 1) : value;
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/time.js
var require_time = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/time.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var TIME_VALUE = /^(-?[\d.]+)(m?s)$/;
    var plugin = {
      level1: {
        value: function time(name, value, options) {
          if (!options.level[OptimizationLevel.One].replaceTimeUnits) {
            return value;
          }
          if (!TIME_VALUE.test(value)) {
            return value;
          }
          return value.replace(TIME_VALUE, function(match, val, unit) {
            var newValue;
            if (unit == "ms") {
              newValue = parseInt(val) / 1e3 + "s";
            } else if (unit == "s") {
              newValue = parseFloat(val) * 1e3 + "ms";
            }
            return newValue.length < match.length ? newValue : match;
          });
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/unit.js
var require_unit = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/unit.js"(exports, module2) {
    init_cjs_shims();
    var WHOLE_PIXEL_VALUE = /(?:^|\s|\()(-?\d+)px/;
    var plugin = {
      level1: {
        value: function unit(_name, value, options) {
          if (!WHOLE_PIXEL_VALUE.test(value)) {
            return value;
          }
          return value.replace(WHOLE_PIXEL_VALUE, function(match, val) {
            var newValue;
            var intVal = parseInt(val);
            if (intVal === 0) {
              return match;
            }
            if (options.compatibility.properties.shorterLengthUnits && options.compatibility.units.pt && intVal * 3 % 4 === 0) {
              newValue = intVal * 3 / 4 + "pt";
            }
            if (options.compatibility.properties.shorterLengthUnits && options.compatibility.units.pc && intVal % 16 === 0) {
              newValue = intVal / 16 + "pc";
            }
            if (options.compatibility.properties.shorterLengthUnits && options.compatibility.units.in && intVal % 96 === 0) {
              newValue = intVal / 96 + "in";
            }
            if (newValue) {
              newValue = match.substring(0, match.indexOf(val)) + newValue;
            }
            return newValue && newValue.length < match.length ? newValue : match;
          });
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-prefix.js
var require_url_prefix = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-prefix.js"(exports, module2) {
    init_cjs_shims();
    var startsAsUrl = require_starts_as_url();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var URL_PREFIX_PATTERN = /^url\(/i;
    var plugin = {
      level1: {
        value: function urlPrefix(_name, value, options) {
          if (!options.level[OptimizationLevel.One].normalizeUrls) {
            return value;
          }
          if (!startsAsUrl(value)) {
            return value;
          }
          return value.replace(URL_PREFIX_PATTERN, "url(");
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-quotes.js
var require_url_quotes = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-quotes.js"(exports, module2) {
    init_cjs_shims();
    var QUOTED_URL_PATTERN = /^url\(['"].+['"]\)$/;
    var QUOTED_URL_WITH_WHITESPACE_PATTERN = /^url\(['"].*[*\s()'"].*['"]\)$/;
    var QUOTES_PATTERN = /["']/g;
    var URL_DATA_PATTERN = /^url\(['"]data:[^;]+;charset/;
    var plugin = {
      level1: {
        value: function urlQuotes(_name, value, options) {
          if (options.compatibility.properties.urlQuotes) {
            return value;
          }
          return QUOTED_URL_PATTERN.test(value) && !QUOTED_URL_WITH_WHITESPACE_PATTERN.test(value) && !URL_DATA_PATTERN.test(value) ? value.replace(QUOTES_PATTERN, "") : value;
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-whitespace.js
var require_url_whitespace = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-whitespace.js"(exports, module2) {
    init_cjs_shims();
    var startsAsUrl = require_starts_as_url();
    var WHITESPACE_PATTERN = /\\?\n|\\?\r\n/g;
    var WHITESPACE_PREFIX_PATTERN = /(\()\s+/g;
    var WHITESPACE_SUFFIX_PATTERN = /\s+(\))/g;
    var plugin = {
      level1: {
        value: function urlWhitespace(_name, value) {
          if (!startsAsUrl(value)) {
            return value;
          }
          return value.replace(WHITESPACE_PATTERN, "").replace(WHITESPACE_PREFIX_PATTERN, "$1").replace(WHITESPACE_SUFFIX_PATTERN, "$1");
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/whitespace.js
var require_whitespace = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/whitespace.js"(exports, module2) {
    init_cjs_shims();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var Marker = require_marker();
    var CALC_DIVISION_WHITESPACE_PATTERN = /\) ?\/ ?/g;
    var COMMA_AND_SPACE_PATTERN = /, /g;
    var LINE_BREAK_PATTERN = /\r?\n/g;
    var MULTI_WHITESPACE_PATTERN = /\s+/g;
    var FUNCTION_CLOSING_BRACE_WHITESPACE_PATTERN = /\s+(;?\))/g;
    var FUNCTION_OPENING_BRACE_WHITESPACE_PATTERN = /(\(;?)\s+/g;
    var VARIABLE_NAME_PATTERN = /^--\S+$/;
    var VARIABLE_VALUE_PATTERN = /^var\(\s*--\S+\s*\)$/;
    var plugin = {
      level1: {
        value: function whitespace(name, value, options) {
          if (!options.level[OptimizationLevel.One].removeWhitespace) {
            return value;
          }
          if (VARIABLE_NAME_PATTERN.test(name) && !VARIABLE_VALUE_PATTERN.test(value)) {
            return value;
          }
          if (value.indexOf(" ") == -1 && value.indexOf("\n") == -1 || value.indexOf("expression") === 0) {
            return value;
          }
          if (value.indexOf(Marker.SINGLE_QUOTE) > -1 || value.indexOf(Marker.DOUBLE_QUOTE) > -1) {
            return value;
          }
          value = value.replace(LINE_BREAK_PATTERN, "");
          value = value.replace(MULTI_WHITESPACE_PATTERN, " ");
          if (value.indexOf("calc") > -1) {
            value = value.replace(CALC_DIVISION_WHITESPACE_PATTERN, ")/ ");
          }
          return value.replace(FUNCTION_OPENING_BRACE_WHITESPACE_PATTERN, "$1").replace(FUNCTION_CLOSING_BRACE_WHITESPACE_PATTERN, "$1").replace(COMMA_AND_SPACE_PATTERN, ",");
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/zero.js
var require_zero = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/zero.js"(exports, module2) {
    init_cjs_shims();
    var split = require_split();
    var ANY_FUNCTION_PATTERN = /^(-(?:moz|ms|o|webkit)-[a-z-]+|[a-z-]+)\((.+)\)$/;
    var SKIP_FUNCTION_PATTERN = /^(?:-moz-calc|-webkit-calc|calc|rgb|hsl|rgba|hsla|min|max|clamp|expression)\(/;
    var TOKEN_SEPARATOR_PATTERN = /([\s,/])/;
    function removeRecursively(value, options) {
      var functionTokens;
      var tokens2;
      if (SKIP_FUNCTION_PATTERN.test(value)) {
        return value;
      }
      functionTokens = ANY_FUNCTION_PATTERN.exec(value);
      if (!functionTokens) {
        return removeZeros(value, options);
      }
      tokens2 = split(functionTokens[2], TOKEN_SEPARATOR_PATTERN).map(function(token2) {
        return removeRecursively(token2, options);
      });
      return functionTokens[1] + "(" + tokens2.join("") + ")";
    }
    function removeZeros(value, options) {
      return value.replace(options.unitsRegexp, "$10$2").replace(options.unitsRegexp, "$10$2");
    }
    var plugin = {
      level1: {
        value: function zero(name, value, options) {
          if (!options.compatibility.properties.zeroUnits) {
            return value;
          }
          if (value.indexOf("%") > 0 && (name == "height" || name == "max-height" || name == "width" || name == "max-width")) {
            return value;
          }
          return removeRecursively(value, options);
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers.js
var require_value_optimizers = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/value-optimizers.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = {
      color: require_color().level1.value,
      degrees: require_degrees().level1.value,
      fraction: require_fraction().level1.value,
      precision: require_precision().level1.value,
      textQuotes: require_text_quotes().level1.value,
      time: require_time().level1.value,
      unit: require_unit().level1.value,
      urlPrefix: require_url_prefix().level1.value,
      urlQuotes: require_url_quotes().level1.value,
      urlWhiteSpace: require_url_whitespace().level1.value,
      whiteSpace: require_whitespace().level1.value,
      zero: require_zero().level1.value
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration.js
var require_configuration = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/configuration.js"(exports, module2) {
    init_cjs_shims();
    var breakUp = require_break_up();
    var canOverride = require_can_override();
    var restore = require_restore();
    var propertyOptimizers = require_property_optimizers();
    var valueOptimizers = require_value_optimizers();
    var override = require_override();
    var configuration = {
      animation: {
        canOverride: canOverride.generic.components([
          canOverride.generic.time,
          canOverride.generic.timingFunction,
          canOverride.generic.time,
          canOverride.property.animationIterationCount,
          canOverride.property.animationDirection,
          canOverride.property.animationFillMode,
          canOverride.property.animationPlayState,
          canOverride.property.animationName
        ]),
        components: [
          "animation-duration",
          "animation-timing-function",
          "animation-delay",
          "animation-iteration-count",
          "animation-direction",
          "animation-fill-mode",
          "animation-play-state",
          "animation-name"
        ],
        breakUp: breakUp.multiplex(breakUp.animation),
        defaultValue: "none",
        restore: restore.multiplex(restore.withoutDefaults),
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.textQuotes,
          valueOptimizers.time,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ],
        vendorPrefixes: [
          "-moz-",
          "-o-",
          "-webkit-"
        ]
      },
      "animation-delay": {
        canOverride: canOverride.generic.time,
        componentOf: [
          "animation"
        ],
        defaultValue: "0s",
        intoMultiplexMode: "real",
        valueOptimizers: [
          valueOptimizers.time,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ],
        vendorPrefixes: [
          "-moz-",
          "-o-",
          "-webkit-"
        ]
      },
      "animation-direction": {
        canOverride: canOverride.property.animationDirection,
        componentOf: [
          "animation"
        ],
        defaultValue: "normal",
        intoMultiplexMode: "real",
        vendorPrefixes: [
          "-moz-",
          "-o-",
          "-webkit-"
        ]
      },
      "animation-duration": {
        canOverride: canOverride.generic.time,
        componentOf: [
          "animation"
        ],
        defaultValue: "0s",
        intoMultiplexMode: "real",
        keepUnlessDefault: "animation-delay",
        valueOptimizers: [
          valueOptimizers.time,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ],
        vendorPrefixes: [
          "-moz-",
          "-o-",
          "-webkit-"
        ]
      },
      "animation-fill-mode": {
        canOverride: canOverride.property.animationFillMode,
        componentOf: [
          "animation"
        ],
        defaultValue: "none",
        intoMultiplexMode: "real",
        vendorPrefixes: [
          "-moz-",
          "-o-",
          "-webkit-"
        ]
      },
      "animation-iteration-count": {
        canOverride: canOverride.property.animationIterationCount,
        componentOf: [
          "animation"
        ],
        defaultValue: "1",
        intoMultiplexMode: "real",
        vendorPrefixes: [
          "-moz-",
          "-o-",
          "-webkit-"
        ]
      },
      "animation-name": {
        canOverride: canOverride.property.animationName,
        componentOf: [
          "animation"
        ],
        defaultValue: "none",
        intoMultiplexMode: "real",
        valueOptimizers: [
          valueOptimizers.textQuotes
        ],
        vendorPrefixes: [
          "-moz-",
          "-o-",
          "-webkit-"
        ]
      },
      "animation-play-state": {
        canOverride: canOverride.property.animationPlayState,
        componentOf: [
          "animation"
        ],
        defaultValue: "running",
        intoMultiplexMode: "real",
        vendorPrefixes: [
          "-moz-",
          "-o-",
          "-webkit-"
        ]
      },
      "animation-timing-function": {
        canOverride: canOverride.generic.timingFunction,
        componentOf: [
          "animation"
        ],
        defaultValue: "ease",
        intoMultiplexMode: "real",
        vendorPrefixes: [
          "-moz-",
          "-o-",
          "-webkit-"
        ]
      },
      background: {
        canOverride: canOverride.generic.components([
          canOverride.generic.image,
          canOverride.property.backgroundPosition,
          canOverride.property.backgroundSize,
          canOverride.property.backgroundRepeat,
          canOverride.property.backgroundAttachment,
          canOverride.property.backgroundOrigin,
          canOverride.property.backgroundClip,
          canOverride.generic.color
        ]),
        components: [
          "background-image",
          "background-position",
          "background-size",
          "background-repeat",
          "background-attachment",
          "background-origin",
          "background-clip",
          "background-color"
        ],
        breakUp: breakUp.multiplex(breakUp.background),
        defaultValue: "0 0",
        propertyOptimizer: propertyOptimizers.background,
        restore: restore.multiplex(restore.background),
        shortestValue: "0",
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.urlWhiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.zero,
          valueOptimizers.color,
          valueOptimizers.urlPrefix,
          valueOptimizers.urlQuotes
        ]
      },
      "background-attachment": {
        canOverride: canOverride.property.backgroundAttachment,
        componentOf: [
          "background"
        ],
        defaultValue: "scroll",
        intoMultiplexMode: "real"
      },
      "background-clip": {
        canOverride: canOverride.property.backgroundClip,
        componentOf: [
          "background"
        ],
        defaultValue: "border-box",
        intoMultiplexMode: "real",
        shortestValue: "border-box"
      },
      "background-color": {
        canOverride: canOverride.generic.color,
        componentOf: [
          "background"
        ],
        defaultValue: "transparent",
        intoMultiplexMode: "real",
        multiplexLastOnly: true,
        nonMergeableValue: "none",
        shortestValue: "red",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.color
        ]
      },
      "background-image": {
        canOverride: canOverride.generic.image,
        componentOf: [
          "background"
        ],
        defaultValue: "none",
        intoMultiplexMode: "default",
        valueOptimizers: [
          valueOptimizers.urlWhiteSpace,
          valueOptimizers.urlPrefix,
          valueOptimizers.urlQuotes,
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero,
          valueOptimizers.color
        ]
      },
      "background-origin": {
        canOverride: canOverride.property.backgroundOrigin,
        componentOf: [
          "background"
        ],
        defaultValue: "padding-box",
        intoMultiplexMode: "real",
        shortestValue: "border-box"
      },
      "background-position": {
        canOverride: canOverride.property.backgroundPosition,
        componentOf: [
          "background"
        ],
        defaultValue: ["0", "0"],
        doubleValues: true,
        intoMultiplexMode: "real",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "background-repeat": {
        canOverride: canOverride.property.backgroundRepeat,
        componentOf: [
          "background"
        ],
        defaultValue: ["repeat"],
        doubleValues: true,
        intoMultiplexMode: "real"
      },
      "background-size": {
        canOverride: canOverride.property.backgroundSize,
        componentOf: [
          "background"
        ],
        defaultValue: ["auto"],
        doubleValues: true,
        intoMultiplexMode: "real",
        shortestValue: "0 0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      bottom: {
        canOverride: canOverride.property.bottom,
        defaultValue: "auto",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      border: {
        breakUp: breakUp.border,
        canOverride: canOverride.generic.components([
          canOverride.generic.unit,
          canOverride.property.borderStyle,
          canOverride.generic.color
        ]),
        components: [
          "border-width",
          "border-style",
          "border-color"
        ],
        defaultValue: "none",
        overridesShorthands: [
          "border-bottom",
          "border-left",
          "border-right",
          "border-top"
        ],
        restore: restore.withoutDefaults,
        shorthand: true,
        shorthandComponents: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.zero,
          valueOptimizers.color
        ]
      },
      "border-bottom": {
        breakUp: breakUp.border,
        canOverride: canOverride.generic.components([
          canOverride.generic.unit,
          canOverride.property.borderStyle,
          canOverride.generic.color
        ]),
        components: [
          "border-bottom-width",
          "border-bottom-style",
          "border-bottom-color"
        ],
        defaultValue: "none",
        restore: restore.withoutDefaults,
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.zero,
          valueOptimizers.color
        ]
      },
      "border-bottom-color": {
        canOverride: canOverride.generic.color,
        componentOf: [
          "border-bottom",
          "border-color"
        ],
        defaultValue: "none",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.color
        ]
      },
      "border-bottom-left-radius": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "border-radius"
        ],
        defaultValue: "0",
        propertyOptimizer: propertyOptimizers.borderRadius,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ],
        vendorPrefixes: [
          "-moz-",
          "-o-"
        ]
      },
      "border-bottom-right-radius": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "border-radius"
        ],
        defaultValue: "0",
        propertyOptimizer: propertyOptimizers.borderRadius,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ],
        vendorPrefixes: [
          "-moz-",
          "-o-"
        ]
      },
      "border-bottom-style": {
        canOverride: canOverride.property.borderStyle,
        componentOf: [
          "border-bottom",
          "border-style"
        ],
        defaultValue: "none"
      },
      "border-bottom-width": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "border-bottom",
          "border-width"
        ],
        defaultValue: "medium",
        oppositeTo: "border-top-width",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "border-collapse": {
        canOverride: canOverride.property.borderCollapse,
        defaultValue: "separate"
      },
      "border-color": {
        breakUp: breakUp.fourValues,
        canOverride: canOverride.generic.components([
          canOverride.generic.color,
          canOverride.generic.color,
          canOverride.generic.color,
          canOverride.generic.color
        ]),
        componentOf: [
          "border"
        ],
        components: [
          "border-top-color",
          "border-right-color",
          "border-bottom-color",
          "border-left-color"
        ],
        defaultValue: "none",
        restore: restore.fourValues,
        shortestValue: "red",
        shorthand: true,
        singleTypeComponents: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.color
        ]
      },
      "border-left": {
        breakUp: breakUp.border,
        canOverride: canOverride.generic.components([
          canOverride.generic.unit,
          canOverride.property.borderStyle,
          canOverride.generic.color
        ]),
        components: [
          "border-left-width",
          "border-left-style",
          "border-left-color"
        ],
        defaultValue: "none",
        restore: restore.withoutDefaults,
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.zero,
          valueOptimizers.color
        ]
      },
      "border-left-color": {
        canOverride: canOverride.generic.color,
        componentOf: [
          "border-color",
          "border-left"
        ],
        defaultValue: "none",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.color
        ]
      },
      "border-left-style": {
        canOverride: canOverride.property.borderStyle,
        componentOf: [
          "border-left",
          "border-style"
        ],
        defaultValue: "none"
      },
      "border-left-width": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "border-left",
          "border-width"
        ],
        defaultValue: "medium",
        oppositeTo: "border-right-width",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "border-radius": {
        breakUp: breakUp.borderRadius,
        canOverride: canOverride.generic.components([
          canOverride.generic.unit,
          canOverride.generic.unit,
          canOverride.generic.unit,
          canOverride.generic.unit
        ]),
        components: [
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-bottom-left-radius"
        ],
        defaultValue: "0",
        propertyOptimizer: propertyOptimizers.borderRadius,
        restore: restore.borderRadius,
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ],
        vendorPrefixes: [
          "-moz-",
          "-o-"
        ]
      },
      "border-right": {
        breakUp: breakUp.border,
        canOverride: canOverride.generic.components([
          canOverride.generic.unit,
          canOverride.property.borderStyle,
          canOverride.generic.color
        ]),
        components: [
          "border-right-width",
          "border-right-style",
          "border-right-color"
        ],
        defaultValue: "none",
        restore: restore.withoutDefaults,
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.color
        ]
      },
      "border-right-color": {
        canOverride: canOverride.generic.color,
        componentOf: [
          "border-color",
          "border-right"
        ],
        defaultValue: "none",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.color
        ]
      },
      "border-right-style": {
        canOverride: canOverride.property.borderStyle,
        componentOf: [
          "border-right",
          "border-style"
        ],
        defaultValue: "none"
      },
      "border-right-width": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "border-right",
          "border-width"
        ],
        defaultValue: "medium",
        oppositeTo: "border-left-width",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "border-style": {
        breakUp: breakUp.fourValues,
        canOverride: canOverride.generic.components([
          canOverride.property.borderStyle,
          canOverride.property.borderStyle,
          canOverride.property.borderStyle,
          canOverride.property.borderStyle
        ]),
        componentOf: [
          "border"
        ],
        components: [
          "border-top-style",
          "border-right-style",
          "border-bottom-style",
          "border-left-style"
        ],
        defaultValue: "none",
        restore: restore.fourValues,
        shorthand: true,
        singleTypeComponents: true
      },
      "border-top": {
        breakUp: breakUp.border,
        canOverride: canOverride.generic.components([
          canOverride.generic.unit,
          canOverride.property.borderStyle,
          canOverride.generic.color
        ]),
        components: [
          "border-top-width",
          "border-top-style",
          "border-top-color"
        ],
        defaultValue: "none",
        restore: restore.withoutDefaults,
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.zero,
          valueOptimizers.color,
          valueOptimizers.unit
        ]
      },
      "border-top-color": {
        canOverride: canOverride.generic.color,
        componentOf: [
          "border-color",
          "border-top"
        ],
        defaultValue: "none",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.color
        ]
      },
      "border-top-left-radius": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "border-radius"
        ],
        defaultValue: "0",
        propertyOptimizer: propertyOptimizers.borderRadius,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ],
        vendorPrefixes: [
          "-moz-",
          "-o-"
        ]
      },
      "border-top-right-radius": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "border-radius"
        ],
        defaultValue: "0",
        propertyOptimizer: propertyOptimizers.borderRadius,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ],
        vendorPrefixes: [
          "-moz-",
          "-o-"
        ]
      },
      "border-top-style": {
        canOverride: canOverride.property.borderStyle,
        componentOf: [
          "border-style",
          "border-top"
        ],
        defaultValue: "none"
      },
      "border-top-width": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "border-top",
          "border-width"
        ],
        defaultValue: "medium",
        oppositeTo: "border-bottom-width",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "border-width": {
        breakUp: breakUp.fourValues,
        canOverride: canOverride.generic.components([
          canOverride.generic.unit,
          canOverride.generic.unit,
          canOverride.generic.unit,
          canOverride.generic.unit
        ]),
        componentOf: [
          "border"
        ],
        components: [
          "border-top-width",
          "border-right-width",
          "border-bottom-width",
          "border-left-width"
        ],
        defaultValue: "medium",
        restore: restore.fourValues,
        shortestValue: "0",
        shorthand: true,
        singleTypeComponents: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "box-shadow": {
        propertyOptimizer: propertyOptimizers.boxShadow,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero,
          valueOptimizers.color
        ],
        vendorPrefixes: [
          "-moz-",
          "-ms-",
          "-o-",
          "-webkit-"
        ]
      },
      clear: {
        canOverride: canOverride.property.clear,
        defaultValue: "none"
      },
      clip: {
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      color: {
        canOverride: canOverride.generic.color,
        defaultValue: "transparent",
        shortestValue: "red",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.color
        ]
      },
      "column-gap": {
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      cursor: {
        canOverride: canOverride.property.cursor,
        defaultValue: "auto"
      },
      display: { canOverride: canOverride.property.display },
      filter: {
        propertyOptimizer: propertyOptimizers.filter,
        valueOptimizers: [
          valueOptimizers.fraction
        ]
      },
      float: {
        canOverride: canOverride.property.float,
        defaultValue: "none"
      },
      font: {
        breakUp: breakUp.font,
        canOverride: canOverride.generic.components([
          canOverride.property.fontStyle,
          canOverride.property.fontVariant,
          canOverride.property.fontWeight,
          canOverride.property.fontStretch,
          canOverride.generic.unit,
          canOverride.generic.unit,
          canOverride.property.fontFamily
        ]),
        components: [
          "font-style",
          "font-variant",
          "font-weight",
          "font-stretch",
          "font-size",
          "line-height",
          "font-family"
        ],
        restore: restore.font,
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.textQuotes
        ]
      },
      "font-family": {
        canOverride: canOverride.property.fontFamily,
        defaultValue: "user|agent|specific",
        valueOptimizers: [
          valueOptimizers.textQuotes
        ]
      },
      "font-size": {
        canOverride: canOverride.generic.unit,
        defaultValue: "medium",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.fraction
        ]
      },
      "font-stretch": {
        canOverride: canOverride.property.fontStretch,
        defaultValue: "normal"
      },
      "font-style": {
        canOverride: canOverride.property.fontStyle,
        defaultValue: "normal"
      },
      "font-variant": {
        canOverride: canOverride.property.fontVariant,
        defaultValue: "normal"
      },
      "font-weight": {
        canOverride: canOverride.property.fontWeight,
        defaultValue: "normal",
        propertyOptimizer: propertyOptimizers.fontWeight,
        shortestValue: "400"
      },
      gap: {
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      height: {
        canOverride: canOverride.generic.unit,
        defaultValue: "auto",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      left: {
        canOverride: canOverride.property.left,
        defaultValue: "auto",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "letter-spacing": {
        valueOptimizers: [
          valueOptimizers.fraction,
          valueOptimizers.zero
        ]
      },
      "line-height": {
        canOverride: canOverride.generic.unitOrNumber,
        defaultValue: "normal",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.fraction,
          valueOptimizers.zero
        ]
      },
      "list-style": {
        canOverride: canOverride.generic.components([
          canOverride.property.listStyleType,
          canOverride.property.listStylePosition,
          canOverride.property.listStyleImage
        ]),
        components: [
          "list-style-type",
          "list-style-position",
          "list-style-image"
        ],
        breakUp: breakUp.listStyle,
        restore: restore.withoutDefaults,
        defaultValue: "outside",
        shortestValue: "none",
        shorthand: true
      },
      "list-style-image": {
        canOverride: canOverride.generic.image,
        componentOf: [
          "list-style"
        ],
        defaultValue: "none"
      },
      "list-style-position": {
        canOverride: canOverride.property.listStylePosition,
        componentOf: [
          "list-style"
        ],
        defaultValue: "outside",
        shortestValue: "inside"
      },
      "list-style-type": {
        canOverride: canOverride.property.listStyleType,
        componentOf: [
          "list-style"
        ],
        defaultValue: "decimal|disc",
        shortestValue: "none"
      },
      margin: {
        breakUp: breakUp.fourValues,
        canOverride: canOverride.generic.components([
          canOverride.generic.unit,
          canOverride.generic.unit,
          canOverride.generic.unit,
          canOverride.generic.unit
        ]),
        components: [
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left"
        ],
        defaultValue: "0",
        propertyOptimizer: propertyOptimizers.margin,
        restore: restore.fourValues,
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "margin-bottom": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "margin"
        ],
        defaultValue: "0",
        oppositeTo: "margin-top",
        propertyOptimizer: propertyOptimizers.margin,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "margin-inline-end": {
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "margin-inline-start": {
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "margin-left": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "margin"
        ],
        defaultValue: "0",
        oppositeTo: "margin-right",
        propertyOptimizer: propertyOptimizers.margin,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "margin-right": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "margin"
        ],
        defaultValue: "0",
        oppositeTo: "margin-left",
        propertyOptimizer: propertyOptimizers.margin,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "margin-top": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "margin"
        ],
        defaultValue: "0",
        oppositeTo: "margin-bottom",
        propertyOptimizer: propertyOptimizers.margin,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "max-height": {
        canOverride: canOverride.generic.unit,
        defaultValue: "none",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "max-width": {
        canOverride: canOverride.generic.unit,
        defaultValue: "none",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "min-height": {
        canOverride: canOverride.generic.unit,
        defaultValue: "0",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "min-width": {
        canOverride: canOverride.generic.unit,
        defaultValue: "0",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      opacity: {
        valueOptimizers: [
          valueOptimizers.fraction,
          valueOptimizers.precision
        ]
      },
      outline: {
        canOverride: canOverride.generic.components([
          canOverride.generic.color,
          canOverride.property.outlineStyle,
          canOverride.generic.unit
        ]),
        components: [
          "outline-color",
          "outline-style",
          "outline-width"
        ],
        breakUp: breakUp.outline,
        restore: restore.withoutDefaults,
        defaultValue: "0",
        propertyOptimizer: propertyOptimizers.outline,
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "outline-color": {
        canOverride: canOverride.generic.color,
        componentOf: [
          "outline"
        ],
        defaultValue: "invert",
        shortestValue: "red",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.color
        ]
      },
      "outline-style": {
        canOverride: canOverride.property.outlineStyle,
        componentOf: [
          "outline"
        ],
        defaultValue: "none"
      },
      "outline-width": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "outline"
        ],
        defaultValue: "medium",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      overflow: {
        canOverride: canOverride.property.overflow,
        defaultValue: "visible"
      },
      "overflow-x": {
        canOverride: canOverride.property.overflow,
        defaultValue: "visible"
      },
      "overflow-y": {
        canOverride: canOverride.property.overflow,
        defaultValue: "visible"
      },
      padding: {
        breakUp: breakUp.fourValues,
        canOverride: canOverride.generic.components([
          canOverride.generic.unit,
          canOverride.generic.unit,
          canOverride.generic.unit,
          canOverride.generic.unit
        ]),
        components: [
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left"
        ],
        defaultValue: "0",
        propertyOptimizer: propertyOptimizers.padding,
        restore: restore.fourValues,
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "padding-bottom": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "padding"
        ],
        defaultValue: "0",
        oppositeTo: "padding-top",
        propertyOptimizer: propertyOptimizers.padding,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "padding-left": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "padding"
        ],
        defaultValue: "0",
        oppositeTo: "padding-right",
        propertyOptimizer: propertyOptimizers.padding,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "padding-right": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "padding"
        ],
        defaultValue: "0",
        oppositeTo: "padding-left",
        propertyOptimizer: propertyOptimizers.padding,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "padding-top": {
        canOverride: canOverride.generic.unit,
        componentOf: [
          "padding"
        ],
        defaultValue: "0",
        oppositeTo: "padding-bottom",
        propertyOptimizer: propertyOptimizers.padding,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      position: {
        canOverride: canOverride.property.position,
        defaultValue: "static"
      },
      right: {
        canOverride: canOverride.property.right,
        defaultValue: "auto",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "row-gap": {
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      src: {
        valueOptimizers: [
          valueOptimizers.urlWhiteSpace,
          valueOptimizers.urlPrefix,
          valueOptimizers.urlQuotes
        ]
      },
      "stroke-width": {
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "text-align": {
        canOverride: canOverride.property.textAlign,
        defaultValue: "left|right"
      },
      "text-decoration": {
        canOverride: canOverride.property.textDecoration,
        defaultValue: "none"
      },
      "text-indent": {
        canOverride: canOverride.property.textOverflow,
        defaultValue: "none",
        valueOptimizers: [
          valueOptimizers.fraction,
          valueOptimizers.zero
        ]
      },
      "text-overflow": {
        canOverride: canOverride.property.textOverflow,
        defaultValue: "none"
      },
      "text-shadow": {
        canOverride: canOverride.property.textShadow,
        defaultValue: "none",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.zero,
          valueOptimizers.color
        ]
      },
      top: {
        canOverride: canOverride.property.top,
        defaultValue: "auto",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      transform: {
        canOverride: canOverride.property.transform,
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.degrees,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ],
        vendorPrefixes: [
          "-moz-",
          "-ms-",
          "-o-",
          "-webkit-"
        ]
      },
      transition: {
        breakUp: breakUp.multiplex(breakUp.transition),
        canOverride: canOverride.generic.components([
          canOverride.property.transitionProperty,
          canOverride.generic.time,
          canOverride.generic.timingFunction,
          canOverride.generic.time
        ]),
        components: [
          "transition-property",
          "transition-duration",
          "transition-timing-function",
          "transition-delay"
        ],
        defaultValue: "none",
        restore: restore.multiplex(restore.withoutDefaults),
        shorthand: true,
        valueOptimizers: [
          valueOptimizers.time,
          valueOptimizers.fraction
        ],
        vendorPrefixes: [
          "-moz-",
          "-ms-",
          "-o-",
          "-webkit-"
        ]
      },
      "transition-delay": {
        canOverride: canOverride.generic.time,
        componentOf: [
          "transition"
        ],
        defaultValue: "0s",
        intoMultiplexMode: "real",
        valueOptimizers: [
          valueOptimizers.time
        ],
        vendorPrefixes: [
          "-moz-",
          "-ms-",
          "-o-",
          "-webkit-"
        ]
      },
      "transition-duration": {
        canOverride: canOverride.generic.time,
        componentOf: [
          "transition"
        ],
        defaultValue: "0s",
        intoMultiplexMode: "real",
        keepUnlessDefault: "transition-delay",
        valueOptimizers: [
          valueOptimizers.time,
          valueOptimizers.fraction
        ],
        vendorPrefixes: [
          "-moz-",
          "-ms-",
          "-o-",
          "-webkit-"
        ]
      },
      "transition-property": {
        canOverride: canOverride.generic.propertyName,
        componentOf: [
          "transition"
        ],
        defaultValue: "all",
        intoMultiplexMode: "placeholder",
        placeholderValue: "_",
        vendorPrefixes: [
          "-moz-",
          "-ms-",
          "-o-",
          "-webkit-"
        ]
      },
      "transition-timing-function": {
        canOverride: canOverride.generic.timingFunction,
        componentOf: [
          "transition"
        ],
        defaultValue: "ease",
        intoMultiplexMode: "real",
        vendorPrefixes: [
          "-moz-",
          "-ms-",
          "-o-",
          "-webkit-"
        ]
      },
      "vertical-align": {
        canOverride: canOverride.property.verticalAlign,
        defaultValue: "baseline",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      visibility: {
        canOverride: canOverride.property.visibility,
        defaultValue: "visible"
      },
      "-webkit-tap-highlight-color": {
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.color
        ]
      },
      "-webkit-margin-end": {
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "white-space": {
        canOverride: canOverride.property.whiteSpace,
        defaultValue: "normal"
      },
      width: {
        canOverride: canOverride.generic.unit,
        defaultValue: "auto",
        shortestValue: "0",
        valueOptimizers: [
          valueOptimizers.whiteSpace,
          valueOptimizers.fraction,
          valueOptimizers.precision,
          valueOptimizers.unit,
          valueOptimizers.zero
        ]
      },
      "z-index": {
        canOverride: canOverride.property.zIndex,
        defaultValue: "auto"
      }
    };
    var vendorPrefixedConfiguration = {};
    function cloneDescriptor(propertyName2, prefix2) {
      var clonedDescriptor2 = override(configuration[propertyName2], {});
      if ("componentOf" in clonedDescriptor2) {
        clonedDescriptor2.componentOf = clonedDescriptor2.componentOf.map(function(shorthandName) {
          return prefix2 + shorthandName;
        });
      }
      if ("components" in clonedDescriptor2) {
        clonedDescriptor2.components = clonedDescriptor2.components.map(function(longhandName) {
          return prefix2 + longhandName;
        });
      }
      if ("keepUnlessDefault" in clonedDescriptor2) {
        clonedDescriptor2.keepUnlessDefault = prefix2 + clonedDescriptor2.keepUnlessDefault;
      }
      return clonedDescriptor2;
    }
    for (propertyName in configuration) {
      descriptor = configuration[propertyName];
      if (!("vendorPrefixes" in descriptor)) {
        continue;
      }
      for (i = 0; i < descriptor.vendorPrefixes.length; i++) {
        prefix = descriptor.vendorPrefixes[i];
        clonedDescriptor = cloneDescriptor(propertyName, prefix);
        delete clonedDescriptor.vendorPrefixes;
        vendorPrefixedConfiguration[prefix + propertyName] = clonedDescriptor;
      }
      delete descriptor.vendorPrefixes;
    }
    var descriptor;
    var prefix;
    var clonedDescriptor;
    var i;
    var propertyName;
    module2.exports = override(configuration, vendorPrefixedConfiguration);
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/writer/helpers.js
var require_helpers = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/writer/helpers.js"(exports, module2) {
    init_cjs_shims();
    var emptyCharacter = "";
    var Breaks = require_format().Breaks;
    var Spaces = require_format().Spaces;
    var Marker = require_marker();
    var Token = require_token();
    function supportsAfterClosingBrace(token2) {
      return token2[1][1] == "background" || token2[1][1] == "transform" || token2[1][1] == "src";
    }
    function afterClosingBrace(token2, valueIndex) {
      return token2[valueIndex][1][token2[valueIndex][1].length - 1] == Marker.CLOSE_ROUND_BRACKET;
    }
    function afterComma(token2, valueIndex) {
      return token2[valueIndex][1] == Marker.COMMA;
    }
    function afterSlash(token2, valueIndex) {
      return token2[valueIndex][1] == Marker.FORWARD_SLASH;
    }
    function beforeComma(token2, valueIndex) {
      return token2[valueIndex + 1] && token2[valueIndex + 1][1] == Marker.COMMA;
    }
    function beforeSlash(token2, valueIndex) {
      return token2[valueIndex + 1] && token2[valueIndex + 1][1] == Marker.FORWARD_SLASH;
    }
    function inFilter(token2) {
      return token2[1][1] == "filter" || token2[1][1] == "-ms-filter";
    }
    function disallowsSpace(context, token2, valueIndex) {
      return !context.spaceAfterClosingBrace && supportsAfterClosingBrace(token2) && afterClosingBrace(token2, valueIndex) || beforeSlash(token2, valueIndex) || afterSlash(token2, valueIndex) || beforeComma(token2, valueIndex) || afterComma(token2, valueIndex);
    }
    function rules(context, tokens2) {
      var store = context.store;
      for (var i = 0, l = tokens2.length; i < l; i++) {
        store(context, tokens2[i]);
        if (i < l - 1) {
          store(context, comma(context));
        }
      }
    }
    function body(context, tokens2) {
      var lastPropertyAt = lastPropertyIndex(tokens2);
      for (var i = 0, l = tokens2.length; i < l; i++) {
        property(context, tokens2, i, lastPropertyAt);
      }
    }
    function lastPropertyIndex(tokens2) {
      var index2 = tokens2.length - 1;
      for (; index2 >= 0; index2--) {
        if (tokens2[index2][0] != Token.COMMENT) {
          break;
        }
      }
      return index2;
    }
    function property(context, tokens2, position, lastPropertyAt) {
      var store = context.store;
      var token2 = tokens2[position];
      var propertyValue = token2[2];
      var isPropertyBlock = propertyValue && propertyValue[0] === Token.PROPERTY_BLOCK;
      var needsSemicolon;
      if (context.format) {
        if (context.format.semicolonAfterLastProperty || isPropertyBlock) {
          needsSemicolon = true;
        } else if (position < lastPropertyAt) {
          needsSemicolon = true;
        } else {
          needsSemicolon = false;
        }
      } else {
        needsSemicolon = position < lastPropertyAt || isPropertyBlock;
      }
      var isLast = position === lastPropertyAt;
      switch (token2[0]) {
        case Token.AT_RULE:
          store(context, token2);
          store(context, semicolon(context, Breaks.AfterProperty, false));
          break;
        case Token.AT_RULE_BLOCK:
          rules(context, token2[1]);
          store(context, openBrace(context, Breaks.AfterRuleBegins, true));
          body(context, token2[2]);
          store(context, closeBrace(context, Breaks.AfterRuleEnds, false, isLast));
          break;
        case Token.COMMENT:
          store(context, token2);
          store(context, breakFor(context, Breaks.AfterComment) + context.indentWith);
          break;
        case Token.PROPERTY:
          store(context, token2[1]);
          store(context, colon(context));
          if (propertyValue) {
            value(context, token2);
          }
          store(context, needsSemicolon ? semicolon(context, Breaks.AfterProperty, isLast) : emptyCharacter);
          break;
        case Token.RAW:
          store(context, token2);
      }
    }
    function value(context, token2) {
      var store = context.store;
      var j, m;
      if (token2[2][0] == Token.PROPERTY_BLOCK) {
        store(context, openBrace(context, Breaks.AfterBlockBegins, false));
        body(context, token2[2][1]);
        store(context, closeBrace(context, Breaks.AfterBlockEnds, false, true));
      } else {
        for (j = 2, m = token2.length; j < m; j++) {
          store(context, token2[j]);
          if (j < m - 1 && (inFilter(token2) || !disallowsSpace(context, token2, j))) {
            store(context, Marker.SPACE);
          }
        }
      }
    }
    function breakFor(context, where) {
      return context.format ? context.format.breaks[where] : emptyCharacter;
    }
    function allowsSpace(context, where) {
      return context.format && context.format.spaces[where];
    }
    function openBrace(context, where, needsPrefixSpace) {
      if (context.format) {
        context.indentBy += context.format.indentBy;
        context.indentWith = context.format.indentWith.repeat(context.indentBy);
        return (needsPrefixSpace && allowsSpace(context, Spaces.BeforeBlockBegins) ? Marker.SPACE : emptyCharacter) + Marker.OPEN_CURLY_BRACKET + breakFor(context, where) + context.indentWith;
      }
      return Marker.OPEN_CURLY_BRACKET;
    }
    function closeBrace(context, where, beforeBlockEnd, isLast) {
      if (context.format) {
        context.indentBy -= context.format.indentBy;
        context.indentWith = context.format.indentWith.repeat(context.indentBy);
        return (beforeBlockEnd ? breakFor(context, Breaks.BeforeBlockEnds) : breakFor(context, Breaks.AfterProperty)) + context.indentWith + Marker.CLOSE_CURLY_BRACKET + (isLast ? emptyCharacter : breakFor(context, where) + context.indentWith);
      }
      return Marker.CLOSE_CURLY_BRACKET;
    }
    function colon(context) {
      return context.format ? Marker.COLON + (allowsSpace(context, Spaces.BeforeValue) ? Marker.SPACE : emptyCharacter) : Marker.COLON;
    }
    function semicolon(context, where, isLast) {
      return context.format ? Marker.SEMICOLON + (isLast ? emptyCharacter : breakFor(context, where) + context.indentWith) : Marker.SEMICOLON;
    }
    function comma(context) {
      return context.format ? Marker.COMMA + breakFor(context, Breaks.BetweenSelectors) + context.indentWith : Marker.COMMA;
    }
    function all(context, tokens2) {
      var store = context.store;
      var token2;
      var isLast;
      var i, l;
      for (i = 0, l = tokens2.length; i < l; i++) {
        token2 = tokens2[i];
        isLast = i == l - 1;
        switch (token2[0]) {
          case Token.AT_RULE:
            store(context, token2);
            store(context, semicolon(context, Breaks.AfterAtRule, isLast));
            break;
          case Token.AT_RULE_BLOCK:
            rules(context, token2[1]);
            store(context, openBrace(context, Breaks.AfterRuleBegins, true));
            body(context, token2[2]);
            store(context, closeBrace(context, Breaks.AfterRuleEnds, false, isLast));
            break;
          case Token.NESTED_BLOCK:
            rules(context, token2[1]);
            store(context, openBrace(context, Breaks.AfterBlockBegins, true));
            all(context, token2[2]);
            store(context, closeBrace(context, Breaks.AfterBlockEnds, true, isLast));
            break;
          case Token.COMMENT:
            store(context, token2);
            store(context, breakFor(context, Breaks.AfterComment) + context.indentWith);
            break;
          case Token.RAW:
            store(context, token2);
            break;
          case Token.RULE:
            rules(context, token2[1]);
            store(context, openBrace(context, Breaks.AfterRuleBegins, true));
            body(context, token2[2]);
            store(context, closeBrace(context, Breaks.AfterRuleEnds, false, isLast));
            break;
        }
      }
    }
    module2.exports = {
      all,
      body,
      property,
      rules,
      value
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/writer/one-time.js
var require_one_time = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/writer/one-time.js"(exports, module2) {
    init_cjs_shims();
    var helpers = require_helpers();
    function store(serializeContext, token2) {
      serializeContext.output.push(typeof token2 == "string" ? token2 : token2[1]);
    }
    function context() {
      var newContext = {
        output: [],
        store
      };
      return newContext;
    }
    function all(tokens2) {
      var oneTimeContext = context();
      helpers.all(oneTimeContext, tokens2);
      return oneTimeContext.output.join("");
    }
    function body(tokens2) {
      var oneTimeContext = context();
      helpers.body(oneTimeContext, tokens2);
      return oneTimeContext.output.join("");
    }
    function property(tokens2, position) {
      var oneTimeContext = context();
      helpers.property(oneTimeContext, tokens2, position, true);
      return oneTimeContext.output.join("");
    }
    function rules(tokens2) {
      var oneTimeContext = context();
      helpers.rules(oneTimeContext, tokens2);
      return oneTimeContext.output.join("");
    }
    function value(tokens2) {
      var oneTimeContext = context();
      helpers.value(oneTimeContext, tokens2);
      return oneTimeContext.output.join("");
    }
    module2.exports = {
      all,
      body,
      property,
      rules,
      value
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/optimize.js
var require_optimize2 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-1/optimize.js"(exports, module2) {
    init_cjs_shims();
    var sortSelectors = require_sort_selectors();
    var tidyRules = require_tidy_rules();
    var tidyBlock = require_tidy_block();
    var tidyAtRule = require_tidy_at_rule();
    var Hack = require_hack();
    var removeUnused = require_remove_unused();
    var restoreFromOptimizing = require_restore_from_optimizing();
    var wrapForOptimizing = require_wrap_for_optimizing().all;
    var configuration = require_configuration();
    var optimizers = require_value_optimizers();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var Token = require_token();
    var Marker = require_marker();
    var formatPosition = require_format_position();
    var serializeRules = require_one_time().rules;
    var CHARSET_TOKEN = "@charset";
    var CHARSET_REGEXP = new RegExp("^" + CHARSET_TOKEN, "i");
    var DEFAULT_ROUNDING_PRECISION = require_rounding_precision().DEFAULT;
    var VARIABLE_PROPERTY_NAME_PATTERN = /^--\S+$/;
    var PROPERTY_NAME_PATTERN = /^(?:-chrome-|-[\w-]+\w|\w[\w-]+\w|\w{1,})$/;
    var IMPORT_PREFIX_PATTERN = /^@import/i;
    var URL_PREFIX_PATTERN = /^url\(/i;
    function startsAsUrl(value) {
      return URL_PREFIX_PATTERN.test(value);
    }
    function isImport(token2) {
      return IMPORT_PREFIX_PATTERN.test(token2[1]);
    }
    function isLegacyFilter(property) {
      var value;
      if (property.name == "filter" || property.name == "-ms-filter") {
        value = property.value[0][1];
        return value.indexOf("progid") > -1 || value.indexOf("alpha") === 0 || value.indexOf("chroma") === 0;
      }
      return false;
    }
    function noop() {
    }
    function noopValueOptimizer(_name, value, _options) {
      return value;
    }
    function optimizeBody(rule, properties, context) {
      var options = context.options;
      var valueOptimizers;
      var property, name, type, value;
      var propertyToken;
      var propertyOptimizer;
      var serializedRule = serializeRules(rule);
      var _properties = wrapForOptimizing(properties);
      var pluginValueOptimizers = context.options.plugins.level1Value;
      var pluginPropertyOptimizers = context.options.plugins.level1Property;
      var isVariable;
      var i, l;
      for (i = 0, l = _properties.length; i < l; i++) {
        var j, k, m, n;
        property = _properties[i];
        name = property.name;
        propertyOptimizer = configuration[name] && configuration[name].propertyOptimizer || noop;
        valueOptimizers = configuration[name] && configuration[name].valueOptimizers || [optimizers.whiteSpace];
        isVariable = VARIABLE_PROPERTY_NAME_PATTERN.test(name);
        if (isVariable) {
          valueOptimizers = options.variableOptimizers.length > 0 ? options.variableOptimizers : [optimizers.whiteSpace];
        }
        if (!isVariable && !PROPERTY_NAME_PATTERN.test(name)) {
          propertyToken = property.all[property.position];
          context.warnings.push("Invalid property name '" + name + "' at " + formatPosition(propertyToken[1][2][0]) + ". Ignoring.");
          property.unused = true;
          continue;
        }
        if (property.value.length === 0) {
          propertyToken = property.all[property.position];
          context.warnings.push("Empty property '" + name + "' at " + formatPosition(propertyToken[1][2][0]) + ". Ignoring.");
          property.unused = true;
          continue;
        }
        if (property.hack && ((property.hack[0] == Hack.ASTERISK || property.hack[0] == Hack.UNDERSCORE) && !options.compatibility.properties.iePrefixHack || property.hack[0] == Hack.BACKSLASH && !options.compatibility.properties.ieSuffixHack || property.hack[0] == Hack.BANG && !options.compatibility.properties.ieBangHack)) {
          property.unused = true;
          continue;
        }
        if (!options.compatibility.properties.ieFilters && isLegacyFilter(property)) {
          property.unused = true;
          continue;
        }
        if (property.block) {
          optimizeBody(rule, property.value[0][1], context);
          continue;
        }
        for (j = 0, m = property.value.length; j < m; j++) {
          type = property.value[j][0];
          value = property.value[j][1];
          if (type == Token.PROPERTY_BLOCK) {
            property.unused = true;
            context.warnings.push("Invalid value token at " + formatPosition(value[0][1][2][0]) + ". Ignoring.");
            break;
          }
          if (startsAsUrl(value) && !context.validator.isUrl(value)) {
            property.unused = true;
            context.warnings.push("Broken URL '" + value + "' at " + formatPosition(property.value[j][2][0]) + ". Ignoring.");
            break;
          }
          for (k = 0, n = valueOptimizers.length; k < n; k++) {
            value = valueOptimizers[k](name, value, options);
          }
          for (k = 0, n = pluginValueOptimizers.length; k < n; k++) {
            value = pluginValueOptimizers[k](name, value, options);
          }
          property.value[j][1] = value;
        }
        propertyOptimizer(serializedRule, property, options);
        for (j = 0, m = pluginPropertyOptimizers.length; j < m; j++) {
          pluginPropertyOptimizers[j](serializedRule, property, options);
        }
      }
      restoreFromOptimizing(_properties);
      removeUnused(_properties);
      removeComments(properties, options);
    }
    function removeComments(tokens2, options) {
      var token2;
      var i;
      for (i = 0; i < tokens2.length; i++) {
        token2 = tokens2[i];
        if (token2[0] != Token.COMMENT) {
          continue;
        }
        optimizeComment(token2, options);
        if (token2[1].length === 0) {
          tokens2.splice(i, 1);
          i--;
        }
      }
    }
    function optimizeComment(token2, options) {
      if (token2[1][2] == Marker.EXCLAMATION && (options.level[OptimizationLevel.One].specialComments == "all" || options.commentsKept < options.level[OptimizationLevel.One].specialComments)) {
        options.commentsKept++;
        return;
      }
      token2[1] = [];
    }
    function cleanupCharsets(tokens2) {
      var hasCharset = false;
      for (var i = 0, l = tokens2.length; i < l; i++) {
        var token2 = tokens2[i];
        if (token2[0] != Token.AT_RULE) {
          continue;
        }
        if (!CHARSET_REGEXP.test(token2[1])) {
          continue;
        }
        if (hasCharset || token2[1].indexOf(CHARSET_TOKEN) == -1) {
          tokens2.splice(i, 1);
          i--;
          l--;
        } else {
          hasCharset = true;
          tokens2.splice(i, 1);
          tokens2.unshift([Token.AT_RULE, token2[1].replace(CHARSET_REGEXP, CHARSET_TOKEN)]);
        }
      }
    }
    function buildUnitRegexp(options) {
      var units = ["px", "em", "ex", "cm", "mm", "in", "pt", "pc", "%"];
      var otherUnits = ["ch", "rem", "vh", "vm", "vmax", "vmin", "vw"];
      otherUnits.forEach(function(unit) {
        if (options.compatibility.units[unit]) {
          units.push(unit);
        }
      });
      return new RegExp("(^|\\s|\\(|,)0(?:" + units.join("|") + ")(\\W|$)", "g");
    }
    function buildPrecisionOptions(roundingPrecision) {
      var precisionOptions = {
        matcher: null,
        units: {}
      };
      var optimizable = [];
      var unit;
      var value;
      for (unit in roundingPrecision) {
        value = roundingPrecision[unit];
        if (value != DEFAULT_ROUNDING_PRECISION) {
          precisionOptions.units[unit] = {};
          precisionOptions.units[unit].value = value;
          precisionOptions.units[unit].multiplier = 10 ** value;
          optimizable.push(unit);
        }
      }
      if (optimizable.length > 0) {
        precisionOptions.enabled = true;
        precisionOptions.decimalPointMatcher = new RegExp("(\\d)\\.($|" + optimizable.join("|") + ")($|\\W)", "g");
        precisionOptions.zeroMatcher = new RegExp("(\\d*)(\\.\\d+)(" + optimizable.join("|") + ")", "g");
      }
      return precisionOptions;
    }
    function buildVariableOptimizers(options) {
      return options.level[OptimizationLevel.One].variableValueOptimizers.map(function(optimizer) {
        if (typeof optimizer == "string") {
          return optimizers[optimizer] || noopValueOptimizer;
        }
        return optimizer;
      });
    }
    function level1Optimize(tokens2, context) {
      var options = context.options;
      var levelOptions = options.level[OptimizationLevel.One];
      var ie7Hack = options.compatibility.selectors.ie7Hack;
      var adjacentSpace = options.compatibility.selectors.adjacentSpace;
      var spaceAfterClosingBrace = options.compatibility.properties.spaceAfterClosingBrace;
      var format = options.format;
      var mayHaveCharset = false;
      var afterRules = false;
      options.unitsRegexp = options.unitsRegexp || buildUnitRegexp(options);
      options.precision = options.precision || buildPrecisionOptions(levelOptions.roundingPrecision);
      options.commentsKept = options.commentsKept || 0;
      options.variableOptimizers = options.variableOptimizers || buildVariableOptimizers(options);
      for (var i = 0, l = tokens2.length; i < l; i++) {
        var token2 = tokens2[i];
        switch (token2[0]) {
          case Token.AT_RULE:
            token2[1] = isImport(token2) && afterRules ? "" : token2[1];
            token2[1] = levelOptions.tidyAtRules ? tidyAtRule(token2[1]) : token2[1];
            mayHaveCharset = true;
            break;
          case Token.AT_RULE_BLOCK:
            optimizeBody(token2[1], token2[2], context);
            afterRules = true;
            break;
          case Token.NESTED_BLOCK:
            token2[1] = levelOptions.tidyBlockScopes ? tidyBlock(token2[1], spaceAfterClosingBrace) : token2[1];
            level1Optimize(token2[2], context);
            afterRules = true;
            break;
          case Token.COMMENT:
            optimizeComment(token2, options);
            break;
          case Token.RULE:
            token2[1] = levelOptions.tidySelectors ? tidyRules(token2[1], !ie7Hack, adjacentSpace, format, context.warnings) : token2[1];
            token2[1] = token2[1].length > 1 ? sortSelectors(token2[1], levelOptions.selectorsSortingMethod) : token2[1];
            optimizeBody(token2[1], token2[2], context);
            afterRules = true;
            break;
        }
        if (token2[0] == Token.COMMENT && token2[1].length === 0 || levelOptions.removeEmpty && (token2[1].length === 0 || token2[2] && token2[2].length === 0)) {
          tokens2.splice(i, 1);
          i--;
          l--;
        }
      }
      if (levelOptions.cleanupCharsets && mayHaveCharset) {
        cleanupCharsets(tokens2);
      }
      return tokens2;
    }
    module2.exports = level1Optimize;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/is-mergeable.js
var require_is_mergeable = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/is-mergeable.js"(exports, module2) {
    init_cjs_shims();
    var Marker = require_marker();
    var split = require_split();
    var DEEP_SELECTOR_PATTERN = /\/deep\//;
    var DOUBLE_COLON_PATTERN = /^::/;
    var VENDOR_PREFIXED_PATTERN = /:(-moz-|-ms-|-o-|-webkit-)/;
    var NOT_PSEUDO = ":not";
    var PSEUDO_CLASSES_WITH_ARGUMENTS = [
      ":dir",
      ":lang",
      ":not",
      ":nth-child",
      ":nth-last-child",
      ":nth-last-of-type",
      ":nth-of-type"
    ];
    var RELATION_PATTERN = /[>+~]/;
    var UNMIXABLE_PSEUDO_CLASSES = [
      ":after",
      ":before",
      ":first-letter",
      ":first-line",
      ":lang"
    ];
    var UNMIXABLE_PSEUDO_ELEMENTS = [
      "::after",
      "::before",
      "::first-letter",
      "::first-line"
    ];
    var Level = {
      DOUBLE_QUOTE: "double-quote",
      SINGLE_QUOTE: "single-quote",
      ROOT: "root"
    };
    function isMergeable(selector, mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging) {
      var singleSelectors = split(selector, Marker.COMMA);
      var singleSelector;
      var i, l;
      for (i = 0, l = singleSelectors.length; i < l; i++) {
        singleSelector = singleSelectors[i];
        if (singleSelector.length === 0 || isDeepSelector(singleSelector) || isVendorPrefixed(singleSelector) || singleSelector.indexOf(Marker.COLON) > -1 && !areMergeable(singleSelector, extractPseudoFrom(singleSelector), mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging)) {
          return false;
        }
      }
      return true;
    }
    function isDeepSelector(selector) {
      return DEEP_SELECTOR_PATTERN.test(selector);
    }
    function isVendorPrefixed(selector) {
      return VENDOR_PREFIXED_PATTERN.test(selector);
    }
    function extractPseudoFrom(selector) {
      var list = [];
      var character;
      var buffer = [];
      var level = Level.ROOT;
      var roundBracketLevel = 0;
      var isQuoted;
      var isEscaped;
      var isPseudo = false;
      var isRelation;
      var wasColon = false;
      var index2;
      var len;
      for (index2 = 0, len = selector.length; index2 < len; index2++) {
        character = selector[index2];
        isRelation = !isEscaped && RELATION_PATTERN.test(character);
        isQuoted = level == Level.DOUBLE_QUOTE || level == Level.SINGLE_QUOTE;
        if (isEscaped) {
          buffer.push(character);
        } else if (character == Marker.DOUBLE_QUOTE && level == Level.ROOT) {
          buffer.push(character);
          level = Level.DOUBLE_QUOTE;
        } else if (character == Marker.DOUBLE_QUOTE && level == Level.DOUBLE_QUOTE) {
          buffer.push(character);
          level = Level.ROOT;
        } else if (character == Marker.SINGLE_QUOTE && level == Level.ROOT) {
          buffer.push(character);
          level = Level.SINGLE_QUOTE;
        } else if (character == Marker.SINGLE_QUOTE && level == Level.SINGLE_QUOTE) {
          buffer.push(character);
          level = Level.ROOT;
        } else if (isQuoted) {
          buffer.push(character);
        } else if (character == Marker.OPEN_ROUND_BRACKET) {
          buffer.push(character);
          roundBracketLevel++;
        } else if (character == Marker.CLOSE_ROUND_BRACKET && roundBracketLevel == 1 && isPseudo) {
          buffer.push(character);
          list.push(buffer.join(""));
          roundBracketLevel--;
          buffer = [];
          isPseudo = false;
        } else if (character == Marker.CLOSE_ROUND_BRACKET) {
          buffer.push(character);
          roundBracketLevel--;
        } else if (character == Marker.COLON && roundBracketLevel === 0 && isPseudo && !wasColon) {
          list.push(buffer.join(""));
          buffer = [];
          buffer.push(character);
        } else if (character == Marker.COLON && roundBracketLevel === 0 && !wasColon) {
          buffer = [];
          buffer.push(character);
          isPseudo = true;
        } else if (character == Marker.SPACE && roundBracketLevel === 0 && isPseudo) {
          list.push(buffer.join(""));
          buffer = [];
          isPseudo = false;
        } else if (isRelation && roundBracketLevel === 0 && isPseudo) {
          list.push(buffer.join(""));
          buffer = [];
          isPseudo = false;
        } else {
          buffer.push(character);
        }
        isEscaped = character == Marker.BACK_SLASH;
        wasColon = character == Marker.COLON;
      }
      if (buffer.length > 0 && isPseudo) {
        list.push(buffer.join(""));
      }
      return list;
    }
    function areMergeable(selector, matches, mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging) {
      return areAllowed(matches, mergeablePseudoClasses, mergeablePseudoElements) && needArguments(matches) && (matches.length < 2 || !someIncorrectlyChained(selector, matches)) && (matches.length < 2 || multiplePseudoMerging && allMixable(matches));
    }
    function areAllowed(matches, mergeablePseudoClasses, mergeablePseudoElements) {
      var match;
      var name;
      var i, l;
      for (i = 0, l = matches.length; i < l; i++) {
        match = matches[i];
        name = match.indexOf(Marker.OPEN_ROUND_BRACKET) > -1 ? match.substring(0, match.indexOf(Marker.OPEN_ROUND_BRACKET)) : match;
        if (mergeablePseudoClasses.indexOf(name) === -1 && mergeablePseudoElements.indexOf(name) === -1) {
          return false;
        }
      }
      return true;
    }
    function needArguments(matches) {
      var match;
      var name;
      var bracketOpensAt;
      var hasArguments;
      var i, l;
      for (i = 0, l = matches.length; i < l; i++) {
        match = matches[i];
        bracketOpensAt = match.indexOf(Marker.OPEN_ROUND_BRACKET);
        hasArguments = bracketOpensAt > -1;
        name = hasArguments ? match.substring(0, bracketOpensAt) : match;
        if (hasArguments && PSEUDO_CLASSES_WITH_ARGUMENTS.indexOf(name) == -1) {
          return false;
        }
        if (!hasArguments && PSEUDO_CLASSES_WITH_ARGUMENTS.indexOf(name) > -1) {
          return false;
        }
      }
      return true;
    }
    function someIncorrectlyChained(selector, matches) {
      var positionInSelector = 0;
      var match;
      var matchAt;
      var nextMatch;
      var nextMatchAt;
      var name;
      var nextName;
      var areChained;
      var i, l;
      for (i = 0, l = matches.length; i < l; i++) {
        match = matches[i];
        nextMatch = matches[i + 1];
        if (!nextMatch) {
          break;
        }
        matchAt = selector.indexOf(match, positionInSelector);
        nextMatchAt = selector.indexOf(match, matchAt + 1);
        positionInSelector = nextMatchAt;
        areChained = matchAt + match.length == nextMatchAt;
        if (areChained) {
          name = match.indexOf(Marker.OPEN_ROUND_BRACKET) > -1 ? match.substring(0, match.indexOf(Marker.OPEN_ROUND_BRACKET)) : match;
          nextName = nextMatch.indexOf(Marker.OPEN_ROUND_BRACKET) > -1 ? nextMatch.substring(0, nextMatch.indexOf(Marker.OPEN_ROUND_BRACKET)) : nextMatch;
          if (name != NOT_PSEUDO || nextName != NOT_PSEUDO) {
            return true;
          }
        }
      }
      return false;
    }
    function allMixable(matches) {
      var unmixableMatches = 0;
      var match;
      var i, l;
      for (i = 0, l = matches.length; i < l; i++) {
        match = matches[i];
        if (isPseudoElement(match)) {
          unmixableMatches += UNMIXABLE_PSEUDO_ELEMENTS.indexOf(match) > -1 ? 1 : 0;
        } else {
          unmixableMatches += UNMIXABLE_PSEUDO_CLASSES.indexOf(match) > -1 ? 1 : 0;
        }
        if (unmixableMatches > 1) {
          return false;
        }
      }
      return true;
    }
    function isPseudoElement(pseudo) {
      return DOUBLE_COLON_PATTERN.test(pseudo);
    }
    module2.exports = isMergeable;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/every-values-pair.js
var require_every_values_pair = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/every-values-pair.js"(exports, module2) {
    init_cjs_shims();
    var Marker = require_marker();
    function everyValuesPair(fn, left, right) {
      var leftSize = left.value.length;
      var rightSize = right.value.length;
      var total = Math.max(leftSize, rightSize);
      var lowerBound = Math.min(leftSize, rightSize) - 1;
      var leftValue;
      var rightValue;
      var position;
      for (position = 0; position < total; position++) {
        leftValue = left.value[position] && left.value[position][1] || leftValue;
        rightValue = right.value[position] && right.value[position][1] || rightValue;
        if (leftValue == Marker.COMMA || rightValue == Marker.COMMA) {
          continue;
        }
        if (!fn(leftValue, rightValue, position, position <= lowerBound)) {
          return false;
        }
      }
      return true;
    }
    module2.exports = everyValuesPair;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/has-inherit.js
var require_has_inherit = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/has-inherit.js"(exports, module2) {
    init_cjs_shims();
    function hasInherit(property) {
      for (var i = property.value.length - 1; i >= 0; i--) {
        if (property.value[i][1] == "inherit") {
          return true;
        }
      }
      return false;
    }
    module2.exports = hasInherit;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/has-same-values.js
var require_has_same_values = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/has-same-values.js"(exports, module2) {
    init_cjs_shims();
    function hasSameValues(property) {
      var firstValue = property.value[0][1];
      var i, l;
      for (i = 1, l = property.value.length; i < l; i++) {
        if (property.value[i][1] != firstValue) {
          return false;
        }
      }
      return true;
    }
    module2.exports = hasSameValues;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/populate-components.js
var require_populate_components = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/populate-components.js"(exports, module2) {
    init_cjs_shims();
    var configuration = require_configuration();
    var InvalidPropertyError = require_invalid_property_error();
    function populateComponents(properties, validator, warnings) {
      var component;
      var j, m;
      for (var i = properties.length - 1; i >= 0; i--) {
        var property = properties[i];
        var descriptor = configuration[property.name];
        if (!property.dynamic && descriptor && descriptor.shorthand) {
          if (onlyValueIsVariable(property, validator) || moreThanOneValueIsVariable(property, validator)) {
            property.optimizable = false;
            continue;
          }
          property.shorthand = true;
          property.dirty = true;
          try {
            property.components = descriptor.breakUp(property, configuration, validator);
            if (descriptor.shorthandComponents) {
              for (j = 0, m = property.components.length; j < m; j++) {
                component = property.components[j];
                component.components = configuration[component.name].breakUp(component, configuration, validator);
              }
            }
          } catch (e) {
            if (e instanceof InvalidPropertyError) {
              property.components = [];
              warnings.push(e.message);
            } else {
              throw e;
            }
          }
          if (property.components.length > 0) {
            property.multiplex = property.components[0].multiplex;
          } else {
            property.unused = true;
          }
        }
      }
    }
    function onlyValueIsVariable(property, validator) {
      return property.value.length == 1 && validator.isVariable(property.value[0][1]);
    }
    function moreThanOneValueIsVariable(property, validator) {
      return property.value.length > 1 && property.value.filter(function(value) {
        return validator.isVariable(value[1]);
      }).length > 1;
    }
    module2.exports = populateComponents;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/restore-with-components.js
var require_restore_with_components = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/restore-with-components.js"(exports, module2) {
    init_cjs_shims();
    var configuration = require_configuration();
    function restoreWithComponents(property) {
      var descriptor = configuration[property.name];
      if (descriptor && descriptor.shorthand) {
        return descriptor.restore(property, configuration);
      }
      return property.value;
    }
    module2.exports = restoreWithComponents;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/merge-into-shorthands.js
var require_merge_into_shorthands = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/merge-into-shorthands.js"(exports, module2) {
    init_cjs_shims();
    var everyValuesPair = require_every_values_pair();
    var hasInherit = require_has_inherit();
    var hasSameValues = require_has_same_values();
    var populateComponents = require_populate_components();
    var configuration = require_configuration();
    var deepClone = require_clone().deep;
    var restoreWithComponents = require_restore_with_components();
    var restoreFromOptimizing = require_restore_from_optimizing();
    var wrapSingle = require_wrap_for_optimizing().single;
    var serializeBody = require_one_time().body;
    var Token = require_token();
    function mergeIntoShorthands(properties, validator) {
      var candidates = {};
      var descriptor;
      var componentOf;
      var property;
      var i, l;
      var j, m;
      if (properties.length < 3) {
        return;
      }
      for (i = 0, l = properties.length; i < l; i++) {
        property = properties[i];
        descriptor = configuration[property.name];
        if (property.dynamic) {
          continue;
        }
        if (property.unused) {
          continue;
        }
        if (property.hack) {
          continue;
        }
        if (property.block) {
          continue;
        }
        if (descriptor && descriptor.singleTypeComponents && !hasSameValues(property)) {
          continue;
        }
        invalidateOrCompact(properties, i, candidates, validator);
        if (descriptor && descriptor.componentOf) {
          for (j = 0, m = descriptor.componentOf.length; j < m; j++) {
            componentOf = descriptor.componentOf[j];
            candidates[componentOf] = candidates[componentOf] || {};
            candidates[componentOf][property.name] = property;
          }
        }
      }
      invalidateOrCompact(properties, i, candidates, validator);
    }
    function invalidateOrCompact(properties, position, candidates, validator) {
      var invalidatedBy = properties[position];
      var shorthandName;
      var shorthandDescriptor;
      var candidateComponents;
      var replacedCandidates = [];
      var i;
      for (shorthandName in candidates) {
        if (invalidatedBy !== void 0 && shorthandName == invalidatedBy.name) {
          continue;
        }
        shorthandDescriptor = configuration[shorthandName];
        candidateComponents = candidates[shorthandName];
        if (invalidatedBy && invalidates(candidates, shorthandName, invalidatedBy)) {
          delete candidates[shorthandName];
          continue;
        }
        if (shorthandDescriptor.components.length > Object.keys(candidateComponents).length) {
          continue;
        }
        if (mixedImportance(candidateComponents)) {
          continue;
        }
        if (!overridable(candidateComponents, shorthandName, validator)) {
          continue;
        }
        if (!mergeable(candidateComponents)) {
          continue;
        }
        if (mixedInherit(candidateComponents)) {
          replaceWithInheritBestFit(properties, candidateComponents, shorthandName, validator);
        } else {
          replaceWithShorthand(properties, candidateComponents, shorthandName, validator);
        }
        replacedCandidates.push(shorthandName);
      }
      for (i = replacedCandidates.length - 1; i >= 0; i--) {
        delete candidates[replacedCandidates[i]];
      }
    }
    function invalidates(candidates, shorthandName, invalidatedBy) {
      var shorthandDescriptor = configuration[shorthandName];
      var invalidatedByDescriptor = configuration[invalidatedBy.name];
      var componentName;
      if ("overridesShorthands" in shorthandDescriptor && shorthandDescriptor.overridesShorthands.indexOf(invalidatedBy.name) > -1) {
        return true;
      }
      if (invalidatedByDescriptor && "componentOf" in invalidatedByDescriptor) {
        for (componentName in candidates[shorthandName]) {
          if (invalidatedByDescriptor.componentOf.indexOf(componentName) > -1) {
            return true;
          }
        }
      }
      return false;
    }
    function mixedImportance(components) {
      var important;
      var componentName;
      for (componentName in components) {
        if (important !== void 0 && components[componentName].important != important) {
          return true;
        }
        important = components[componentName].important;
      }
      return false;
    }
    function overridable(components, shorthandName, validator) {
      var descriptor = configuration[shorthandName];
      var newValuePlaceholder = [
        Token.PROPERTY,
        [Token.PROPERTY_NAME, shorthandName],
        [Token.PROPERTY_VALUE, descriptor.defaultValue]
      ];
      var newProperty = wrapSingle(newValuePlaceholder);
      var component;
      var mayOverride;
      var i, l;
      populateComponents([newProperty], validator, []);
      for (i = 0, l = descriptor.components.length; i < l; i++) {
        component = components[descriptor.components[i]];
        mayOverride = configuration[component.name].canOverride || sameValue;
        if (!everyValuesPair(mayOverride.bind(null, validator), newProperty.components[i], component)) {
          return false;
        }
      }
      return true;
    }
    function sameValue(_validator, value1, value2) {
      return value1 === value2;
    }
    function mergeable(components) {
      var lastCount = null;
      var currentCount;
      var componentName;
      var component;
      var descriptor;
      var values;
      for (componentName in components) {
        component = components[componentName];
        descriptor = configuration[componentName];
        if (!("restore" in descriptor)) {
          continue;
        }
        restoreFromOptimizing([component.all[component.position]], restoreWithComponents);
        values = descriptor.restore(component, configuration);
        currentCount = values.length;
        if (lastCount !== null && currentCount !== lastCount) {
          return false;
        }
        lastCount = currentCount;
      }
      return true;
    }
    function mixedInherit(components) {
      var componentName;
      var lastValue = null;
      var currentValue;
      for (componentName in components) {
        currentValue = hasInherit(components[componentName]);
        if (lastValue !== null && lastValue !== currentValue) {
          return true;
        }
        lastValue = currentValue;
      }
      return false;
    }
    function replaceWithInheritBestFit(properties, candidateComponents, shorthandName, validator) {
      var viaLonghands = buildSequenceWithInheritLonghands(candidateComponents, shorthandName, validator);
      var viaShorthand = buildSequenceWithInheritShorthand(candidateComponents, shorthandName, validator);
      var longhandTokensSequence = viaLonghands[0];
      var shorthandTokensSequence = viaShorthand[0];
      var isLonghandsShorter = serializeBody(longhandTokensSequence).length < serializeBody(shorthandTokensSequence).length;
      var newTokensSequence = isLonghandsShorter ? longhandTokensSequence : shorthandTokensSequence;
      var newProperty = isLonghandsShorter ? viaLonghands[1] : viaShorthand[1];
      var newComponents = isLonghandsShorter ? viaLonghands[2] : viaShorthand[2];
      var lastComponent = candidateComponents[Object.keys(candidateComponents).pop()];
      var all = lastComponent.all;
      var insertAt = lastComponent.position;
      var componentName;
      var oldComponent;
      var newComponent;
      var newToken;
      newProperty.position = insertAt;
      newProperty.shorthand = true;
      newProperty.important = lastComponent.important;
      newProperty.multiplex = false;
      newProperty.dirty = true;
      newProperty.all = all;
      newProperty.all[insertAt] = newTokensSequence[0];
      properties.splice(insertAt, 1, newProperty);
      for (componentName in candidateComponents) {
        oldComponent = candidateComponents[componentName];
        oldComponent.unused = true;
        newProperty.multiplex = newProperty.multiplex || oldComponent.multiplex;
        if (oldComponent.name in newComponents) {
          newComponent = newComponents[oldComponent.name];
          newToken = findTokenIn(newTokensSequence, componentName);
          newComponent.position = all.length;
          newComponent.all = all;
          newComponent.all.push(newToken);
          properties.push(newComponent);
        }
      }
    }
    function buildSequenceWithInheritLonghands(components, shorthandName, validator) {
      var tokensSequence = [];
      var inheritComponents = {};
      var nonInheritComponents = {};
      var descriptor = configuration[shorthandName];
      var shorthandToken = [
        Token.PROPERTY,
        [Token.PROPERTY_NAME, shorthandName],
        [Token.PROPERTY_VALUE, descriptor.defaultValue]
      ];
      var newProperty = wrapSingle(shorthandToken);
      var component;
      var longhandToken;
      var newComponent;
      var nameMetadata;
      var i, l;
      populateComponents([newProperty], validator, []);
      for (i = 0, l = descriptor.components.length; i < l; i++) {
        component = components[descriptor.components[i]];
        if (hasInherit(component)) {
          longhandToken = component.all[component.position].slice(0, 2);
          Array.prototype.push.apply(longhandToken, component.value);
          tokensSequence.push(longhandToken);
          newComponent = deepClone(component);
          newComponent.value = inferComponentValue(components, newComponent.name);
          newProperty.components[i] = newComponent;
          inheritComponents[component.name] = deepClone(component);
        } else {
          newComponent = deepClone(component);
          newComponent.all = component.all;
          newProperty.components[i] = newComponent;
          nonInheritComponents[component.name] = component;
        }
      }
      newProperty.important = components[Object.keys(components).pop()].important;
      nameMetadata = joinMetadata(nonInheritComponents, 1);
      shorthandToken[1].push(nameMetadata);
      restoreFromOptimizing([newProperty], restoreWithComponents);
      shorthandToken = shorthandToken.slice(0, 2);
      Array.prototype.push.apply(shorthandToken, newProperty.value);
      tokensSequence.unshift(shorthandToken);
      return [tokensSequence, newProperty, inheritComponents];
    }
    function inferComponentValue(components, propertyName) {
      var descriptor = configuration[propertyName];
      if ("oppositeTo" in descriptor) {
        return components[descriptor.oppositeTo].value;
      }
      return [[Token.PROPERTY_VALUE, descriptor.defaultValue]];
    }
    function joinMetadata(components, at) {
      var metadata = [];
      var component;
      var originalValue;
      var componentMetadata;
      var componentName;
      for (componentName in components) {
        component = components[componentName];
        originalValue = component.all[component.position];
        componentMetadata = originalValue[at][originalValue[at].length - 1];
        Array.prototype.push.apply(metadata, componentMetadata);
      }
      return metadata.sort(metadataSorter);
    }
    function metadataSorter(metadata1, metadata2) {
      var line1 = metadata1[0];
      var line2 = metadata2[0];
      var column1 = metadata1[1];
      var column2 = metadata2[1];
      if (line1 < line2) {
        return -1;
      }
      if (line1 === line2) {
        return column1 < column2 ? -1 : 1;
      }
      return 1;
    }
    function buildSequenceWithInheritShorthand(components, shorthandName, validator) {
      var tokensSequence = [];
      var inheritComponents = {};
      var nonInheritComponents = {};
      var descriptor = configuration[shorthandName];
      var shorthandToken = [
        Token.PROPERTY,
        [Token.PROPERTY_NAME, shorthandName],
        [Token.PROPERTY_VALUE, "inherit"]
      ];
      var newProperty = wrapSingle(shorthandToken);
      var component;
      var longhandToken;
      var nameMetadata;
      var valueMetadata;
      var i, l;
      populateComponents([newProperty], validator, []);
      for (i = 0, l = descriptor.components.length; i < l; i++) {
        component = components[descriptor.components[i]];
        if (hasInherit(component)) {
          inheritComponents[component.name] = component;
        } else {
          longhandToken = component.all[component.position].slice(0, 2);
          Array.prototype.push.apply(longhandToken, component.value);
          tokensSequence.push(longhandToken);
          nonInheritComponents[component.name] = deepClone(component);
        }
      }
      nameMetadata = joinMetadata(inheritComponents, 1);
      shorthandToken[1].push(nameMetadata);
      valueMetadata = joinMetadata(inheritComponents, 2);
      shorthandToken[2].push(valueMetadata);
      tokensSequence.unshift(shorthandToken);
      return [tokensSequence, newProperty, nonInheritComponents];
    }
    function findTokenIn(tokens2, componentName) {
      var i, l;
      for (i = 0, l = tokens2.length; i < l; i++) {
        if (tokens2[i][1][1] == componentName) {
          return tokens2[i];
        }
      }
    }
    function replaceWithShorthand(properties, candidateComponents, shorthandName, validator) {
      var descriptor = configuration[shorthandName];
      var nameMetadata;
      var valueMetadata;
      var newValuePlaceholder = [
        Token.PROPERTY,
        [Token.PROPERTY_NAME, shorthandName],
        [Token.PROPERTY_VALUE, descriptor.defaultValue]
      ];
      var all;
      var insertAt = inferInsertAtFrom(properties, candidateComponents, shorthandName);
      var newProperty = wrapSingle(newValuePlaceholder);
      newProperty.shorthand = true;
      newProperty.dirty = true;
      newProperty.multiplex = false;
      populateComponents([newProperty], validator, []);
      for (var i = 0, l = descriptor.components.length; i < l; i++) {
        var component = candidateComponents[descriptor.components[i]];
        newProperty.components[i] = deepClone(component);
        newProperty.important = component.important;
        newProperty.multiplex = newProperty.multiplex || component.multiplex;
        all = component.all;
      }
      for (var componentName in candidateComponents) {
        candidateComponents[componentName].unused = true;
      }
      nameMetadata = joinMetadata(candidateComponents, 1);
      newValuePlaceholder[1].push(nameMetadata);
      valueMetadata = joinMetadata(candidateComponents, 2);
      newValuePlaceholder[2].push(valueMetadata);
      newProperty.position = insertAt;
      newProperty.all = all;
      newProperty.all[insertAt] = newValuePlaceholder;
      properties.splice(insertAt, 1, newProperty);
    }
    function inferInsertAtFrom(properties, candidateComponents, shorthandName) {
      var candidateComponentNames = Object.keys(candidateComponents);
      var firstCandidatePosition = candidateComponents[candidateComponentNames[0]].position;
      var lastCandidatePosition = candidateComponents[candidateComponentNames[candidateComponentNames.length - 1]].position;
      if (shorthandName == "border" && traversesVia(properties.slice(firstCandidatePosition, lastCandidatePosition), "border-image")) {
        return firstCandidatePosition;
      }
      return lastCandidatePosition;
    }
    function traversesVia(properties, propertyName) {
      for (var i = properties.length - 1; i >= 0; i--) {
        if (properties[i].name == propertyName) {
          return true;
        }
      }
      return false;
    }
    module2.exports = mergeIntoShorthands;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/has-unset.js
var require_has_unset = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/has-unset.js"(exports, module2) {
    init_cjs_shims();
    function hasUnset(property) {
      for (var i = property.value.length - 1; i >= 0; i--) {
        if (property.value[i][1] == "unset") {
          return true;
        }
      }
      return false;
    }
    module2.exports = hasUnset;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/find-component-in.js
var require_find_component_in = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/find-component-in.js"(exports, module2) {
    init_cjs_shims();
    var configuration = require_configuration();
    function findComponentIn(shorthand, longhand) {
      var comparator = nameComparator(longhand);
      return findInDirectComponents(shorthand, comparator) || findInSubComponents(shorthand, comparator);
    }
    function nameComparator(to) {
      return function(property) {
        return to.name === property.name;
      };
    }
    function findInDirectComponents(shorthand, comparator) {
      return shorthand.components.filter(comparator)[0];
    }
    function findInSubComponents(shorthand, comparator) {
      var shorthandComponent;
      var longhandMatch;
      var i, l;
      if (!configuration[shorthand.name].shorthandComponents) {
        return;
      }
      for (i = 0, l = shorthand.components.length; i < l; i++) {
        shorthandComponent = shorthand.components[i];
        longhandMatch = findInDirectComponents(shorthandComponent, comparator);
        if (longhandMatch) {
          return longhandMatch;
        }
      }
    }
    module2.exports = findComponentIn;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/is-component-of.js
var require_is_component_of = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/is-component-of.js"(exports, module2) {
    init_cjs_shims();
    var configuration = require_configuration();
    function isComponentOf(property1, property2, shallow) {
      return isDirectComponentOf(property1, property2) || !shallow && !!configuration[property1.name].shorthandComponents && isSubComponentOf(property1, property2);
    }
    function isDirectComponentOf(property1, property2) {
      var descriptor = configuration[property1.name];
      return "components" in descriptor && descriptor.components.indexOf(property2.name) > -1;
    }
    function isSubComponentOf(property1, property2) {
      return property1.components.some(function(component) {
        return isDirectComponentOf(component, property2);
      });
    }
    module2.exports = isComponentOf;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/is-mergeable-shorthand.js
var require_is_mergeable_shorthand = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/is-mergeable-shorthand.js"(exports, module2) {
    init_cjs_shims();
    var Marker = require_marker();
    function isMergeableShorthand(shorthand) {
      if (shorthand.name != "font") {
        return true;
      }
      return shorthand.value[0][1].indexOf(Marker.INTERNAL) == -1;
    }
    module2.exports = isMergeableShorthand;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/overrides-non-component-shorthand.js
var require_overrides_non_component_shorthand = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/overrides-non-component-shorthand.js"(exports, module2) {
    init_cjs_shims();
    var configuration = require_configuration();
    function overridesNonComponentShorthand(property1, property2) {
      return property1.name in configuration && "overridesShorthands" in configuration[property1.name] && configuration[property1.name].overridesShorthands.indexOf(property2.name) > -1;
    }
    module2.exports = overridesNonComponentShorthand;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/override-properties.js
var require_override_properties = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/override-properties.js"(exports, module2) {
    init_cjs_shims();
    var hasInherit = require_has_inherit();
    var hasUnset = require_has_unset();
    var everyValuesPair = require_every_values_pair();
    var findComponentIn = require_find_component_in();
    var isComponentOf = require_is_component_of();
    var isMergeableShorthand = require_is_mergeable_shorthand();
    var overridesNonComponentShorthand = require_overrides_non_component_shorthand();
    var sameVendorPrefixesIn = require_vendor_prefixes().same;
    var configuration = require_configuration();
    var deepClone = require_clone().deep;
    var restoreWithComponents = require_restore_with_components();
    var shallowClone = require_clone().shallow;
    var restoreFromOptimizing = require_restore_from_optimizing();
    var Token = require_token();
    var Marker = require_marker();
    var serializeProperty = require_one_time().property;
    function sameValue(_validator, value1, value2) {
      return value1 === value2;
    }
    function wouldBreakCompatibility(property, validator) {
      for (var i = 0; i < property.components.length; i++) {
        var component = property.components[i];
        var descriptor = configuration[component.name];
        var canOverride = descriptor && descriptor.canOverride || sameValue;
        var _component = shallowClone(component);
        _component.value = [[Token.PROPERTY_VALUE, descriptor.defaultValue]];
        if (!everyValuesPair(canOverride.bind(null, validator), _component, component)) {
          return true;
        }
      }
      return false;
    }
    function overrideIntoMultiplex(property, by) {
      by.unused = true;
      turnIntoMultiplex(by, multiplexSize(property));
      property.value = by.value;
    }
    function overrideByMultiplex(property, by) {
      by.unused = true;
      property.multiplex = true;
      property.value = by.value;
    }
    function overrideSimple(property, by) {
      by.unused = true;
      property.value = by.value;
    }
    function override(property, by) {
      if (by.multiplex) {
        overrideByMultiplex(property, by);
      } else if (property.multiplex) {
        overrideIntoMultiplex(property, by);
      } else {
        overrideSimple(property, by);
      }
    }
    function overrideShorthand(property, by) {
      by.unused = true;
      for (var i = 0, l = property.components.length; i < l; i++) {
        override(property.components[i], by.components[i]);
      }
    }
    function turnIntoMultiplex(property, size) {
      property.multiplex = true;
      if (configuration[property.name].shorthand) {
        turnShorthandValueIntoMultiplex(property, size);
      } else {
        turnLonghandValueIntoMultiplex(property, size);
      }
    }
    function turnShorthandValueIntoMultiplex(property, size) {
      var component;
      var i, l;
      for (i = 0, l = property.components.length; i < l; i++) {
        component = property.components[i];
        if (!component.multiplex) {
          turnLonghandValueIntoMultiplex(component, size);
        }
      }
    }
    function turnLonghandValueIntoMultiplex(property, size) {
      var descriptor = configuration[property.name];
      var withRealValue = descriptor.intoMultiplexMode == "real";
      var withValue = descriptor.intoMultiplexMode == "real" ? property.value.slice(0) : descriptor.intoMultiplexMode == "placeholder" ? descriptor.placeholderValue : descriptor.defaultValue;
      var i = multiplexSize(property);
      var j;
      var m = withValue.length;
      for (; i < size; i++) {
        property.value.push([Token.PROPERTY_VALUE, Marker.COMMA]);
        if (Array.isArray(withValue)) {
          for (j = 0; j < m; j++) {
            property.value.push(withRealValue ? withValue[j] : [Token.PROPERTY_VALUE, withValue[j]]);
          }
        } else {
          property.value.push(withRealValue ? withValue : [Token.PROPERTY_VALUE, withValue]);
        }
      }
    }
    function multiplexSize(component) {
      var size = 0;
      for (var i = 0, l = component.value.length; i < l; i++) {
        if (component.value[i][1] == Marker.COMMA) {
          size++;
        }
      }
      return size + 1;
    }
    function lengthOf(property) {
      var fakeAsArray = [
        Token.PROPERTY,
        [Token.PROPERTY_NAME, property.name]
      ].concat(property.value);
      return serializeProperty([fakeAsArray], 0).length;
    }
    function moreSameShorthands(properties, startAt, name) {
      var count = 0;
      for (var i = startAt; i >= 0; i--) {
        if (properties[i].name == name && !properties[i].unused) {
          count++;
        }
        if (count > 1) {
          break;
        }
      }
      return count > 1;
    }
    function overridingFunction(shorthand, validator) {
      for (var i = 0, l = shorthand.components.length; i < l; i++) {
        if (!anyValue(validator.isUrl, shorthand.components[i]) && anyValue(validator.isFunction, shorthand.components[i])) {
          return true;
        }
      }
      return false;
    }
    function anyValue(fn, property) {
      for (var i = 0, l = property.value.length; i < l; i++) {
        if (property.value[i][1] == Marker.COMMA) {
          continue;
        }
        if (fn(property.value[i][1])) {
          return true;
        }
      }
      return false;
    }
    function wouldResultInLongerValue(left, right) {
      if (!left.multiplex && !right.multiplex || left.multiplex && right.multiplex) {
        return false;
      }
      var multiplex = left.multiplex ? left : right;
      var simple = left.multiplex ? right : left;
      var component;
      var multiplexClone = deepClone(multiplex);
      restoreFromOptimizing([multiplexClone], restoreWithComponents);
      var simpleClone = deepClone(simple);
      restoreFromOptimizing([simpleClone], restoreWithComponents);
      var lengthBefore = lengthOf(multiplexClone) + 1 + lengthOf(simpleClone);
      if (left.multiplex) {
        component = findComponentIn(multiplexClone, simpleClone);
        overrideIntoMultiplex(component, simpleClone);
      } else {
        component = findComponentIn(simpleClone, multiplexClone);
        turnIntoMultiplex(simpleClone, multiplexSize(multiplexClone));
        overrideByMultiplex(component, multiplexClone);
      }
      restoreFromOptimizing([simpleClone], restoreWithComponents);
      var lengthAfter = lengthOf(simpleClone);
      return lengthBefore <= lengthAfter;
    }
    function isCompactable(property) {
      return property.name in configuration;
    }
    function noneOverrideHack(left, right) {
      return !left.multiplex && (left.name == "background" || left.name == "background-image") && right.multiplex && (right.name == "background" || right.name == "background-image") && anyLayerIsNone(right.value);
    }
    function anyLayerIsNone(values) {
      var layers = intoLayers(values);
      for (var i = 0, l = layers.length; i < l; i++) {
        if (layers[i].length == 1 && layers[i][0][1] == "none") {
          return true;
        }
      }
      return false;
    }
    function intoLayers(values) {
      var layers = [];
      for (var i = 0, layer = [], l = values.length; i < l; i++) {
        var value = values[i];
        if (value[1] == Marker.COMMA) {
          layers.push(layer);
          layer = [];
        } else {
          layer.push(value);
        }
      }
      layers.push(layer);
      return layers;
    }
    function overrideProperties(properties, withMerging, compatibility, validator) {
      var mayOverride, right, left, component;
      var overriddenComponents;
      var overriddenComponent;
      var overridingComponent;
      var overridable;
      var i, j, k;
      propertyLoop:
        for (i = properties.length - 1; i >= 0; i--) {
          right = properties[i];
          if (!isCompactable(right)) {
            continue;
          }
          if (right.block) {
            continue;
          }
          mayOverride = configuration[right.name].canOverride || sameValue;
          traverseLoop:
            for (j = i - 1; j >= 0; j--) {
              left = properties[j];
              if (!isCompactable(left)) {
                continue;
              }
              if (left.block) {
                continue;
              }
              if (left.dynamic || right.dynamic) {
                continue;
              }
              if (left.unused || right.unused) {
                continue;
              }
              if (left.hack && !right.hack && !right.important || !left.hack && !left.important && right.hack) {
                continue;
              }
              if (left.important == right.important && left.hack[0] != right.hack[0]) {
                continue;
              }
              if (left.important == right.important && (left.hack[0] != right.hack[0] || left.hack[1] && left.hack[1] != right.hack[1])) {
                continue;
              }
              if (hasInherit(right)) {
                continue;
              }
              if (noneOverrideHack(left, right)) {
                continue;
              }
              if (right.shorthand && isComponentOf(right, left)) {
                if (!right.important && left.important) {
                  continue;
                }
                if (!sameVendorPrefixesIn([left], right.components)) {
                  continue;
                }
                if (!anyValue(validator.isFunction, left) && overridingFunction(right, validator)) {
                  continue;
                }
                if (!isMergeableShorthand(right)) {
                  left.unused = true;
                  continue;
                }
                component = findComponentIn(right, left);
                mayOverride = configuration[left.name].canOverride || sameValue;
                if (everyValuesPair(mayOverride.bind(null, validator), left, component)) {
                  left.unused = true;
                }
              } else if (right.shorthand && overridesNonComponentShorthand(right, left)) {
                if (!right.important && left.important) {
                  continue;
                }
                if (!sameVendorPrefixesIn([left], right.components)) {
                  continue;
                }
                if (!anyValue(validator.isFunction, left) && overridingFunction(right, validator)) {
                  continue;
                }
                overriddenComponents = left.shorthand ? left.components : [left];
                for (k = overriddenComponents.length - 1; k >= 0; k--) {
                  overriddenComponent = overriddenComponents[k];
                  overridingComponent = findComponentIn(right, overriddenComponent);
                  mayOverride = configuration[overriddenComponent.name].canOverride || sameValue;
                  if (!everyValuesPair(mayOverride.bind(null, validator), left, overridingComponent)) {
                    continue traverseLoop;
                  }
                }
                left.unused = true;
              } else if (withMerging && left.shorthand && !right.shorthand && isComponentOf(left, right, true)) {
                if (right.important && !left.important) {
                  continue;
                }
                if (!right.important && left.important) {
                  right.unused = true;
                  continue;
                }
                if (moreSameShorthands(properties, i - 1, left.name)) {
                  continue;
                }
                if (overridingFunction(left, validator)) {
                  continue;
                }
                if (!isMergeableShorthand(left)) {
                  continue;
                }
                if (hasUnset(left) || hasUnset(right)) {
                  continue;
                }
                component = findComponentIn(left, right);
                if (everyValuesPair(mayOverride.bind(null, validator), component, right)) {
                  var disabledBackgroundMerging = !compatibility.properties.backgroundClipMerging && component.name.indexOf("background-clip") > -1 || !compatibility.properties.backgroundOriginMerging && component.name.indexOf("background-origin") > -1 || !compatibility.properties.backgroundSizeMerging && component.name.indexOf("background-size") > -1;
                  var nonMergeableValue = configuration[right.name].nonMergeableValue === right.value[0][1];
                  if (disabledBackgroundMerging || nonMergeableValue) {
                    continue;
                  }
                  if (!compatibility.properties.merging && wouldBreakCompatibility(left, validator)) {
                    continue;
                  }
                  if (component.value[0][1] != right.value[0][1] && (hasInherit(left) || hasInherit(right))) {
                    continue;
                  }
                  if (wouldResultInLongerValue(left, right)) {
                    continue;
                  }
                  if (!left.multiplex && right.multiplex) {
                    turnIntoMultiplex(left, multiplexSize(right));
                  }
                  override(component, right);
                  left.dirty = true;
                }
              } else if (withMerging && left.shorthand && right.shorthand && left.name == right.name) {
                if (!left.multiplex && right.multiplex) {
                  continue;
                }
                if (!right.important && left.important) {
                  right.unused = true;
                  continue propertyLoop;
                }
                if (right.important && !left.important) {
                  left.unused = true;
                  continue;
                }
                if (!isMergeableShorthand(right)) {
                  left.unused = true;
                  continue;
                }
                for (k = left.components.length - 1; k >= 0; k--) {
                  var leftComponent = left.components[k];
                  var rightComponent = right.components[k];
                  mayOverride = configuration[leftComponent.name].canOverride || sameValue;
                  if (!everyValuesPair(mayOverride.bind(null, validator), leftComponent, rightComponent)) {
                    continue propertyLoop;
                  }
                }
                overrideShorthand(left, right);
                left.dirty = true;
              } else if (withMerging && left.shorthand && right.shorthand && isComponentOf(left, right)) {
                if (!left.important && right.important) {
                  continue;
                }
                component = findComponentIn(left, right);
                mayOverride = configuration[right.name].canOverride || sameValue;
                if (!everyValuesPair(mayOverride.bind(null, validator), component, right)) {
                  continue;
                }
                if (left.important && !right.important) {
                  right.unused = true;
                  continue;
                }
                var rightRestored = configuration[right.name].restore(right, configuration);
                if (rightRestored.length > 1) {
                  continue;
                }
                component = findComponentIn(left, right);
                override(component, right);
                right.dirty = true;
              } else if (left.name == right.name) {
                overridable = true;
                if (right.shorthand) {
                  for (k = right.components.length - 1; k >= 0 && overridable; k--) {
                    overriddenComponent = left.components[k];
                    overridingComponent = right.components[k];
                    mayOverride = configuration[overridingComponent.name].canOverride || sameValue;
                    overridable = everyValuesPair(mayOverride.bind(null, validator), overriddenComponent, overridingComponent);
                  }
                } else {
                  mayOverride = configuration[right.name].canOverride || sameValue;
                  overridable = everyValuesPair(mayOverride.bind(null, validator), left, right);
                }
                if (left.important && !right.important && overridable) {
                  right.unused = true;
                  continue;
                }
                if (!left.important && right.important && overridable) {
                  left.unused = true;
                  continue;
                }
                if (!overridable) {
                  continue;
                }
                left.unused = true;
              }
            }
        }
    }
    module2.exports = overrideProperties;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/optimize.js
var require_optimize3 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/properties/optimize.js"(exports, module2) {
    init_cjs_shims();
    var mergeIntoShorthands = require_merge_into_shorthands();
    var overrideProperties = require_override_properties();
    var populateComponents = require_populate_components();
    var restoreWithComponents = require_restore_with_components();
    var wrapForOptimizing = require_wrap_for_optimizing().all;
    var removeUnused = require_remove_unused();
    var restoreFromOptimizing = require_restore_from_optimizing();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    function optimizeProperties(properties, withOverriding, withMerging, context) {
      var levelOptions = context.options.level[OptimizationLevel.Two];
      var _properties = wrapForOptimizing(properties, levelOptions.skipProperties);
      var _property;
      var i, l;
      populateComponents(_properties, context.validator, context.warnings);
      for (i = 0, l = _properties.length; i < l; i++) {
        _property = _properties[i];
        if (_property.block) {
          optimizeProperties(_property.value[0][1], withOverriding, withMerging, context);
        }
      }
      if (withMerging && levelOptions.mergeIntoShorthands) {
        mergeIntoShorthands(_properties, context.validator);
      }
      if (withOverriding && levelOptions.overrideProperties) {
        overrideProperties(_properties, withMerging, context.options.compatibility, context.validator);
      }
      restoreFromOptimizing(_properties, restoreWithComponents);
      removeUnused(_properties);
    }
    module2.exports = optimizeProperties;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/merge-adjacent.js
var require_merge_adjacent = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/merge-adjacent.js"(exports, module2) {
    init_cjs_shims();
    var isMergeable = require_is_mergeable();
    var optimizeProperties = require_optimize3();
    var sortSelectors = require_sort_selectors();
    var tidyRules = require_tidy_rules();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var serializeBody = require_one_time().body;
    var serializeRules = require_one_time().rules;
    var Token = require_token();
    function mergeAdjacent(tokens2, context) {
      var lastToken = [null, [], []];
      var options = context.options;
      var adjacentSpace = options.compatibility.selectors.adjacentSpace;
      var selectorsSortingMethod = options.level[OptimizationLevel.One].selectorsSortingMethod;
      var mergeablePseudoClasses = options.compatibility.selectors.mergeablePseudoClasses;
      var mergeablePseudoElements = options.compatibility.selectors.mergeablePseudoElements;
      var mergeLimit = options.compatibility.selectors.mergeLimit;
      var multiplePseudoMerging = options.compatibility.selectors.multiplePseudoMerging;
      for (var i = 0, l = tokens2.length; i < l; i++) {
        var token2 = tokens2[i];
        if (token2[0] != Token.RULE) {
          lastToken = [null, [], []];
          continue;
        }
        if (lastToken[0] == Token.RULE && serializeRules(token2[1]) == serializeRules(lastToken[1])) {
          Array.prototype.push.apply(lastToken[2], token2[2]);
          optimizeProperties(lastToken[2], true, true, context);
          token2[2] = [];
        } else if (lastToken[0] == Token.RULE && serializeBody(token2[2]) == serializeBody(lastToken[2]) && isMergeable(serializeRules(token2[1]), mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging) && isMergeable(serializeRules(lastToken[1]), mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging) && lastToken[1].length < mergeLimit) {
          lastToken[1] = tidyRules(lastToken[1].concat(token2[1]), false, adjacentSpace, false, context.warnings);
          lastToken[1] = lastToken.length > 1 ? sortSelectors(lastToken[1], selectorsSortingMethod) : lastToken[1];
          token2[2] = [];
        } else {
          lastToken = token2;
        }
      }
    }
    module2.exports = mergeAdjacent;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/rules-overlap.js
var require_rules_overlap = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/rules-overlap.js"(exports, module2) {
    init_cjs_shims();
    var MODIFIER_PATTERN = /--.+$/;
    function rulesOverlap(rule1, rule2, bemMode) {
      var scope1;
      var scope2;
      var i, l;
      var j, m;
      for (i = 0, l = rule1.length; i < l; i++) {
        scope1 = rule1[i][1];
        for (j = 0, m = rule2.length; j < m; j++) {
          scope2 = rule2[j][1];
          if (scope1 == scope2) {
            return true;
          }
          if (bemMode && withoutModifiers(scope1) == withoutModifiers(scope2)) {
            return true;
          }
        }
      }
      return false;
    }
    function withoutModifiers(scope) {
      return scope.replace(MODIFIER_PATTERN, "");
    }
    module2.exports = rulesOverlap;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/specificity.js
var require_specificity = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/specificity.js"(exports, module2) {
    init_cjs_shims();
    var Marker = require_marker();
    var Selector = {
      ADJACENT_SIBLING: "+",
      DESCENDANT: ">",
      DOT: ".",
      HASH: "#",
      NON_ADJACENT_SIBLING: "~",
      PSEUDO: ":"
    };
    var LETTER_PATTERN = /[a-zA-Z]/;
    var NOT_PREFIX = ":not(";
    var SEPARATOR_PATTERN = /[\s,(>~+]/;
    function specificity(selector) {
      var result = [0, 0, 0];
      var character;
      var isEscaped;
      var isSingleQuoted;
      var isDoubleQuoted;
      var roundBracketLevel = 0;
      var couldIntroduceNewTypeSelector;
      var withinNotPseudoClass = false;
      var wasPseudoClass = false;
      var i, l;
      for (i = 0, l = selector.length; i < l; i++) {
        character = selector[i];
        if (isEscaped) {
        } else if (character == Marker.SINGLE_QUOTE && !isDoubleQuoted && !isSingleQuoted) {
          isSingleQuoted = true;
        } else if (character == Marker.SINGLE_QUOTE && !isDoubleQuoted && isSingleQuoted) {
          isSingleQuoted = false;
        } else if (character == Marker.DOUBLE_QUOTE && !isDoubleQuoted && !isSingleQuoted) {
          isDoubleQuoted = true;
        } else if (character == Marker.DOUBLE_QUOTE && isDoubleQuoted && !isSingleQuoted) {
          isDoubleQuoted = false;
        } else if (isSingleQuoted || isDoubleQuoted) {
          continue;
        } else if (roundBracketLevel > 0 && !withinNotPseudoClass) {
        } else if (character == Marker.OPEN_ROUND_BRACKET) {
          roundBracketLevel++;
        } else if (character == Marker.CLOSE_ROUND_BRACKET && roundBracketLevel == 1) {
          roundBracketLevel--;
          withinNotPseudoClass = false;
        } else if (character == Marker.CLOSE_ROUND_BRACKET) {
          roundBracketLevel--;
        } else if (character == Selector.HASH) {
          result[0]++;
        } else if (character == Selector.DOT || character == Marker.OPEN_SQUARE_BRACKET) {
          result[1]++;
        } else if (character == Selector.PSEUDO && !wasPseudoClass && !isNotPseudoClass(selector, i)) {
          result[1]++;
          withinNotPseudoClass = false;
        } else if (character == Selector.PSEUDO) {
          withinNotPseudoClass = true;
        } else if ((i === 0 || couldIntroduceNewTypeSelector) && LETTER_PATTERN.test(character)) {
          result[2]++;
        }
        isEscaped = character == Marker.BACK_SLASH;
        wasPseudoClass = character == Selector.PSEUDO;
        couldIntroduceNewTypeSelector = !isEscaped && SEPARATOR_PATTERN.test(character);
      }
      return result;
    }
    function isNotPseudoClass(selector, index2) {
      return selector.indexOf(NOT_PREFIX, index2) === index2;
    }
    module2.exports = specificity;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/specificities-overlap.js
var require_specificities_overlap = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/specificities-overlap.js"(exports, module2) {
    init_cjs_shims();
    var specificity = require_specificity();
    function specificitiesOverlap(selector1, selector2, cache) {
      var specificity1;
      var specificity2;
      var i, l;
      var j, m;
      for (i = 0, l = selector1.length; i < l; i++) {
        specificity1 = findSpecificity(selector1[i][1], cache);
        for (j = 0, m = selector2.length; j < m; j++) {
          specificity2 = findSpecificity(selector2[j][1], cache);
          if (specificity1[0] === specificity2[0] && specificity1[1] === specificity2[1] && specificity1[2] === specificity2[2]) {
            return true;
          }
        }
      }
      return false;
    }
    function findSpecificity(selector, cache) {
      var value;
      if (!(selector in cache)) {
        cache[selector] = value = specificity(selector);
      }
      return value || cache[selector];
    }
    module2.exports = specificitiesOverlap;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/reorderable.js
var require_reorderable = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/reorderable.js"(exports, module2) {
    init_cjs_shims();
    var rulesOverlap = require_rules_overlap();
    var specificitiesOverlap = require_specificities_overlap();
    var FLEX_PROPERTIES = /align-items|box-align|box-pack|flex|justify/;
    var BORDER_PROPERTIES = /^border-(top|right|bottom|left|color|style|width|radius)/;
    function canReorder(left, right, cache) {
      for (var i = right.length - 1; i >= 0; i--) {
        for (var j = left.length - 1; j >= 0; j--) {
          if (!canReorderSingle(left[j], right[i], cache)) {
            return false;
          }
        }
      }
      return true;
    }
    function canReorderSingle(left, right, cache) {
      var leftName = left[0];
      var leftValue = left[1];
      var leftNameRoot = left[2];
      var leftSelector = left[5];
      var leftInSpecificSelector = left[6];
      var rightName = right[0];
      var rightValue = right[1];
      var rightNameRoot = right[2];
      var rightSelector = right[5];
      var rightInSpecificSelector = right[6];
      if (leftName == "font" && rightName == "line-height" || rightName == "font" && leftName == "line-height") {
        return false;
      }
      if (FLEX_PROPERTIES.test(leftName) && FLEX_PROPERTIES.test(rightName)) {
        return false;
      }
      if (leftNameRoot == rightNameRoot && unprefixed(leftName) == unprefixed(rightName) && vendorPrefixed(leftName) ^ vendorPrefixed(rightName)) {
        return false;
      }
      if (leftNameRoot == "border" && BORDER_PROPERTIES.test(rightNameRoot) && (leftName == "border" || leftName == rightNameRoot || leftValue != rightValue && sameBorderComponent(leftName, rightName))) {
        return false;
      }
      if (rightNameRoot == "border" && BORDER_PROPERTIES.test(leftNameRoot) && (rightName == "border" || rightName == leftNameRoot || leftValue != rightValue && sameBorderComponent(leftName, rightName))) {
        return false;
      }
      if (leftNameRoot == "border" && rightNameRoot == "border" && leftName != rightName && (isSideBorder(leftName) && isStyleBorder(rightName) || isStyleBorder(leftName) && isSideBorder(rightName))) {
        return false;
      }
      if (leftNameRoot != rightNameRoot) {
        return true;
      }
      if (leftName == rightName && leftNameRoot == rightNameRoot && (leftValue == rightValue || withDifferentVendorPrefix(leftValue, rightValue))) {
        return true;
      }
      if (leftName != rightName && leftNameRoot == rightNameRoot && leftName != leftNameRoot && rightName != rightNameRoot) {
        return true;
      }
      if (leftName != rightName && leftNameRoot == rightNameRoot && leftValue == rightValue) {
        return true;
      }
      if (rightInSpecificSelector && leftInSpecificSelector && !inheritable(leftNameRoot) && !inheritable(rightNameRoot) && !rulesOverlap(rightSelector, leftSelector, false)) {
        return true;
      }
      if (!specificitiesOverlap(leftSelector, rightSelector, cache)) {
        return true;
      }
      return false;
    }
    function vendorPrefixed(name) {
      return /^-(?:moz|webkit|ms|o)-/.test(name);
    }
    function unprefixed(name) {
      return name.replace(/^-(?:moz|webkit|ms|o)-/, "");
    }
    function sameBorderComponent(name1, name2) {
      return name1.split("-").pop() == name2.split("-").pop();
    }
    function isSideBorder(name) {
      return name == "border-top" || name == "border-right" || name == "border-bottom" || name == "border-left";
    }
    function isStyleBorder(name) {
      return name == "border-color" || name == "border-style" || name == "border-width";
    }
    function withDifferentVendorPrefix(value1, value2) {
      return vendorPrefixed(value1) && vendorPrefixed(value2) && value1.split("-")[1] != value2.split("-")[2];
    }
    function inheritable(name) {
      return name == "font" || name == "line-height" || name == "list-style";
    }
    module2.exports = {
      canReorder,
      canReorderSingle
    };
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/extract-properties.js
var require_extract_properties = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/extract-properties.js"(exports, module2) {
    init_cjs_shims();
    var Token = require_token();
    var serializeRules = require_one_time().rules;
    var serializeValue = require_one_time().value;
    function extractProperties(token2) {
      var properties = [];
      var inSpecificSelector;
      var property;
      var name;
      var value;
      var i, l;
      if (token2[0] == Token.RULE) {
        inSpecificSelector = !/[.+>~]/.test(serializeRules(token2[1]));
        for (i = 0, l = token2[2].length; i < l; i++) {
          property = token2[2][i];
          if (property[0] != Token.PROPERTY) {
            continue;
          }
          name = property[1][1];
          if (name.length === 0) {
            continue;
          }
          value = serializeValue(property, i);
          properties.push([
            name,
            value,
            findNameRoot(name),
            token2[2][i],
            name + ":" + value,
            token2[1],
            inSpecificSelector
          ]);
        }
      } else if (token2[0] == Token.NESTED_BLOCK) {
        for (i = 0, l = token2[2].length; i < l; i++) {
          properties = properties.concat(extractProperties(token2[2][i]));
        }
      }
      return properties;
    }
    function findNameRoot(name) {
      if (name == "list-style") {
        return name;
      }
      if (name.indexOf("-radius") > 0) {
        return "border-radius";
      }
      if (name == "border-collapse" || name == "border-spacing" || name == "border-image") {
        return name;
      }
      if (name.indexOf("border-") === 0 && /^border-\w+-\w+$/.test(name)) {
        return name.match(/border-\w+/)[0];
      }
      if (name.indexOf("border-") === 0 && /^border-\w+$/.test(name)) {
        return "border";
      }
      if (name.indexOf("text-") === 0) {
        return name;
      }
      if (name == "-chrome-") {
        return name;
      }
      return name.replace(/^-\w+-/, "").match(/([a-zA-Z]+)/)[0].toLowerCase();
    }
    module2.exports = extractProperties;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/merge-media-queries.js
var require_merge_media_queries = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/merge-media-queries.js"(exports, module2) {
    init_cjs_shims();
    var canReorder = require_reorderable().canReorder;
    var canReorderSingle = require_reorderable().canReorderSingle;
    var extractProperties = require_extract_properties();
    var rulesOverlap = require_rules_overlap();
    var serializeRules = require_one_time().rules;
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var Token = require_token();
    function mergeMediaQueries(tokens2, context) {
      var mergeSemantically = context.options.level[OptimizationLevel.Two].mergeSemantically;
      var specificityCache = context.cache.specificity;
      var candidates = {};
      var reduced = [];
      for (var i = tokens2.length - 1; i >= 0; i--) {
        var token2 = tokens2[i];
        if (token2[0] != Token.NESTED_BLOCK) {
          continue;
        }
        var key = serializeRules(token2[1]);
        var candidate = candidates[key];
        if (!candidate) {
          candidate = [];
          candidates[key] = candidate;
        }
        candidate.push(i);
      }
      for (var name in candidates) {
        var positions = candidates[name];
        positionLoop:
          for (var j = positions.length - 1; j > 0; j--) {
            var positionOne = positions[j];
            var tokenOne = tokens2[positionOne];
            var positionTwo = positions[j - 1];
            var tokenTwo = tokens2[positionTwo];
            directionLoop:
              for (var direction = 1; direction >= -1; direction -= 2) {
                var topToBottom = direction == 1;
                var from = topToBottom ? positionOne + 1 : positionTwo - 1;
                var to = topToBottom ? positionTwo : positionOne;
                var delta = topToBottom ? 1 : -1;
                var source = topToBottom ? tokenOne : tokenTwo;
                var target = topToBottom ? tokenTwo : tokenOne;
                var movedProperties = extractProperties(source);
                while (from != to) {
                  var traversedProperties = extractProperties(tokens2[from]);
                  from += delta;
                  if (mergeSemantically && allSameRulePropertiesCanBeReordered(movedProperties, traversedProperties, specificityCache)) {
                    continue;
                  }
                  if (!canReorder(movedProperties, traversedProperties, specificityCache)) {
                    continue directionLoop;
                  }
                }
                target[2] = topToBottom ? source[2].concat(target[2]) : target[2].concat(source[2]);
                source[2] = [];
                reduced.push(target);
                continue positionLoop;
              }
          }
      }
      return reduced;
    }
    function allSameRulePropertiesCanBeReordered(movedProperties, traversedProperties, specificityCache) {
      var movedProperty;
      var movedRule;
      var traversedProperty;
      var traversedRule;
      var i, l;
      var j, m;
      for (i = 0, l = movedProperties.length; i < l; i++) {
        movedProperty = movedProperties[i];
        movedRule = movedProperty[5];
        for (j = 0, m = traversedProperties.length; j < m; j++) {
          traversedProperty = traversedProperties[j];
          traversedRule = traversedProperty[5];
          if (rulesOverlap(movedRule, traversedRule, true) && !canReorderSingle(movedProperty, traversedProperty, specificityCache)) {
            return false;
          }
        }
      }
      return true;
    }
    module2.exports = mergeMediaQueries;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/merge-non-adjacent-by-body.js
var require_merge_non_adjacent_by_body = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/merge-non-adjacent-by-body.js"(exports, module2) {
    init_cjs_shims();
    var isMergeable = require_is_mergeable();
    var sortSelectors = require_sort_selectors();
    var tidyRules = require_tidy_rules();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var serializeBody = require_one_time().body;
    var serializeRules = require_one_time().rules;
    var Token = require_token();
    function unsafeSelector(value) {
      return /\.|\*| :/.test(value);
    }
    function isBemElement(token2) {
      var asString = serializeRules(token2[1]);
      return asString.indexOf("__") > -1 || asString.indexOf("--") > -1;
    }
    function withoutModifier(selector) {
      return selector.replace(/--[^ ,>+~:]+/g, "");
    }
    function removeAnyUnsafeElements(left, candidates) {
      var leftSelector = withoutModifier(serializeRules(left[1]));
      for (var body in candidates) {
        var right = candidates[body];
        var rightSelector = withoutModifier(serializeRules(right[1]));
        if (rightSelector.indexOf(leftSelector) > -1 || leftSelector.indexOf(rightSelector) > -1) {
          delete candidates[body];
        }
      }
    }
    function mergeNonAdjacentByBody(tokens2, context) {
      var options = context.options;
      var mergeSemantically = options.level[OptimizationLevel.Two].mergeSemantically;
      var adjacentSpace = options.compatibility.selectors.adjacentSpace;
      var selectorsSortingMethod = options.level[OptimizationLevel.One].selectorsSortingMethod;
      var mergeablePseudoClasses = options.compatibility.selectors.mergeablePseudoClasses;
      var mergeablePseudoElements = options.compatibility.selectors.mergeablePseudoElements;
      var multiplePseudoMerging = options.compatibility.selectors.multiplePseudoMerging;
      var candidates = {};
      for (var i = tokens2.length - 1; i >= 0; i--) {
        var token2 = tokens2[i];
        if (token2[0] != Token.RULE) {
          continue;
        }
        if (token2[2].length > 0 && (!mergeSemantically && unsafeSelector(serializeRules(token2[1])))) {
          candidates = {};
        }
        if (token2[2].length > 0 && mergeSemantically && isBemElement(token2)) {
          removeAnyUnsafeElements(token2, candidates);
        }
        var candidateBody = serializeBody(token2[2]);
        var oldToken = candidates[candidateBody];
        if (oldToken && isMergeable(serializeRules(token2[1]), mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging) && isMergeable(serializeRules(oldToken[1]), mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging)) {
          if (token2[2].length > 0) {
            token2[1] = tidyRules(oldToken[1].concat(token2[1]), false, adjacentSpace, false, context.warnings);
            token2[1] = token2[1].length > 1 ? sortSelectors(token2[1], selectorsSortingMethod) : token2[1];
          } else {
            token2[1] = oldToken[1].concat(token2[1]);
          }
          oldToken[2] = [];
          candidates[candidateBody] = null;
        }
        candidates[serializeBody(token2[2])] = token2;
      }
    }
    module2.exports = mergeNonAdjacentByBody;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/merge-non-adjacent-by-selector.js
var require_merge_non_adjacent_by_selector = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/merge-non-adjacent-by-selector.js"(exports, module2) {
    init_cjs_shims();
    var canReorder = require_reorderable().canReorder;
    var extractProperties = require_extract_properties();
    var optimizeProperties = require_optimize3();
    var serializeRules = require_one_time().rules;
    var Token = require_token();
    function mergeNonAdjacentBySelector(tokens2, context) {
      var specificityCache = context.cache.specificity;
      var allSelectors = {};
      var repeatedSelectors = [];
      var i;
      for (i = tokens2.length - 1; i >= 0; i--) {
        if (tokens2[i][0] != Token.RULE) {
          continue;
        }
        if (tokens2[i][2].length === 0) {
          continue;
        }
        var selector = serializeRules(tokens2[i][1]);
        allSelectors[selector] = [i].concat(allSelectors[selector] || []);
        if (allSelectors[selector].length == 2) {
          repeatedSelectors.push(selector);
        }
      }
      for (i = repeatedSelectors.length - 1; i >= 0; i--) {
        var positions = allSelectors[repeatedSelectors[i]];
        selectorIterator:
          for (var j = positions.length - 1; j > 0; j--) {
            var positionOne = positions[j - 1];
            var tokenOne = tokens2[positionOne];
            var positionTwo = positions[j];
            var tokenTwo = tokens2[positionTwo];
            directionIterator:
              for (var direction = 1; direction >= -1; direction -= 2) {
                var topToBottom = direction == 1;
                var from = topToBottom ? positionOne + 1 : positionTwo - 1;
                var to = topToBottom ? positionTwo : positionOne;
                var delta = topToBottom ? 1 : -1;
                var moved = topToBottom ? tokenOne : tokenTwo;
                var target = topToBottom ? tokenTwo : tokenOne;
                var movedProperties = extractProperties(moved);
                while (from != to) {
                  var traversedProperties = extractProperties(tokens2[from]);
                  from += delta;
                  var reorderable = topToBottom ? canReorder(movedProperties, traversedProperties, specificityCache) : canReorder(traversedProperties, movedProperties, specificityCache);
                  if (!reorderable && !topToBottom) {
                    continue selectorIterator;
                  }
                  if (!reorderable && topToBottom) {
                    continue directionIterator;
                  }
                }
                if (topToBottom) {
                  Array.prototype.push.apply(moved[2], target[2]);
                  target[2] = moved[2];
                } else {
                  Array.prototype.push.apply(target[2], moved[2]);
                }
                optimizeProperties(target[2], true, true, context);
                moved[2] = [];
              }
          }
      }
    }
    module2.exports = mergeNonAdjacentBySelector;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/clone-array.js
var require_clone_array = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/clone-array.js"(exports, module2) {
    init_cjs_shims();
    function cloneArray(array) {
      var cloned = array.slice(0);
      for (var i = 0, l = cloned.length; i < l; i++) {
        if (Array.isArray(cloned[i])) {
          cloned[i] = cloneArray(cloned[i]);
        }
      }
      return cloned;
    }
    module2.exports = cloneArray;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/reduce-non-adjacent.js
var require_reduce_non_adjacent = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/reduce-non-adjacent.js"(exports, module2) {
    init_cjs_shims();
    var isMergeable = require_is_mergeable();
    var optimizeProperties = require_optimize3();
    var cloneArray = require_clone_array();
    var Token = require_token();
    var serializeBody = require_one_time().body;
    var serializeRules = require_one_time().rules;
    function reduceNonAdjacent(tokens2, context) {
      var options = context.options;
      var mergeablePseudoClasses = options.compatibility.selectors.mergeablePseudoClasses;
      var mergeablePseudoElements = options.compatibility.selectors.mergeablePseudoElements;
      var multiplePseudoMerging = options.compatibility.selectors.multiplePseudoMerging;
      var candidates = {};
      var repeated = [];
      for (var i = tokens2.length - 1; i >= 0; i--) {
        var token2 = tokens2[i];
        if (token2[0] != Token.RULE) {
          continue;
        } else if (token2[2].length === 0) {
          continue;
        }
        var selectorAsString = serializeRules(token2[1]);
        var isComplexAndNotSpecial = token2[1].length > 1 && isMergeable(selectorAsString, mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging);
        var wrappedSelectors = wrappedSelectorsFrom(token2[1]);
        var selectors = isComplexAndNotSpecial ? [selectorAsString].concat(wrappedSelectors) : [selectorAsString];
        for (var j = 0, m = selectors.length; j < m; j++) {
          var selector = selectors[j];
          if (!candidates[selector]) {
            candidates[selector] = [];
          } else {
            repeated.push(selector);
          }
          candidates[selector].push({
            where: i,
            list: wrappedSelectors,
            isPartial: isComplexAndNotSpecial && j > 0,
            isComplex: isComplexAndNotSpecial && j === 0
          });
        }
      }
      reduceSimpleNonAdjacentCases(tokens2, repeated, candidates, options, context);
      reduceComplexNonAdjacentCases(tokens2, candidates, options, context);
    }
    function wrappedSelectorsFrom(list) {
      var wrapped = [];
      for (var i = 0; i < list.length; i++) {
        wrapped.push([list[i][1]]);
      }
      return wrapped;
    }
    function reduceSimpleNonAdjacentCases(tokens2, repeated, candidates, options, context) {
      function filterOut(idx, bodies) {
        return data[idx].isPartial && bodies.length === 0;
      }
      function reduceBody(token2, newBody, processedCount, tokenIdx) {
        if (!data[processedCount - tokenIdx - 1].isPartial) {
          token2[2] = newBody;
        }
      }
      for (var i = 0, l = repeated.length; i < l; i++) {
        var selector = repeated[i];
        var data = candidates[selector];
        reduceSelector(tokens2, data, {
          filterOut,
          callback: reduceBody
        }, options, context);
      }
    }
    function reduceComplexNonAdjacentCases(tokens2, candidates, options, context) {
      var mergeablePseudoClasses = options.compatibility.selectors.mergeablePseudoClasses;
      var mergeablePseudoElements = options.compatibility.selectors.mergeablePseudoElements;
      var multiplePseudoMerging = options.compatibility.selectors.multiplePseudoMerging;
      var localContext = {};
      function filterOut(idx) {
        return localContext.data[idx].where < localContext.intoPosition;
      }
      function collectReducedBodies(token2, newBody, processedCount, tokenIdx) {
        if (tokenIdx === 0) {
          localContext.reducedBodies.push(newBody);
        }
      }
      allSelectors:
        for (var complexSelector in candidates) {
          var into = candidates[complexSelector];
          if (!into[0].isComplex) {
            continue;
          }
          var intoPosition = into[into.length - 1].where;
          var intoToken = tokens2[intoPosition];
          var reducedBodies = [];
          var selectors = isMergeable(complexSelector, mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging) ? into[0].list : [complexSelector];
          localContext.intoPosition = intoPosition;
          localContext.reducedBodies = reducedBodies;
          for (var j = 0, m = selectors.length; j < m; j++) {
            var selector = selectors[j];
            var data = candidates[selector];
            if (data.length < 2) {
              continue allSelectors;
            }
            localContext.data = data;
            reduceSelector(tokens2, data, {
              filterOut,
              callback: collectReducedBodies
            }, options, context);
            if (serializeBody(reducedBodies[reducedBodies.length - 1]) != serializeBody(reducedBodies[0])) {
              continue allSelectors;
            }
          }
          intoToken[2] = reducedBodies[0];
        }
    }
    function reduceSelector(tokens2, data, context, options, outerContext) {
      var bodies = [];
      var bodiesAsList = [];
      var processedTokens = [];
      for (var j = data.length - 1; j >= 0; j--) {
        if (context.filterOut(j, bodies)) {
          continue;
        }
        var where = data[j].where;
        var token2 = tokens2[where];
        var clonedBody = cloneArray(token2[2]);
        bodies = bodies.concat(clonedBody);
        bodiesAsList.push(clonedBody);
        processedTokens.push(where);
      }
      optimizeProperties(bodies, true, false, outerContext);
      var processedCount = processedTokens.length;
      var propertyIdx = bodies.length - 1;
      var tokenIdx = processedCount - 1;
      while (tokenIdx >= 0) {
        if ((tokenIdx === 0 || bodies[propertyIdx] && bodiesAsList[tokenIdx].indexOf(bodies[propertyIdx]) > -1) && propertyIdx > -1) {
          propertyIdx--;
          continue;
        }
        var newBody = bodies.splice(propertyIdx + 1);
        context.callback(tokens2[processedTokens[tokenIdx]], newBody, processedCount, tokenIdx);
        tokenIdx--;
      }
    }
    module2.exports = reduceNonAdjacent;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/remove-duplicate-font-at-rules.js
var require_remove_duplicate_font_at_rules = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/remove-duplicate-font-at-rules.js"(exports, module2) {
    init_cjs_shims();
    var Token = require_token();
    var serializeAll = require_one_time().all;
    var FONT_FACE_SCOPE = "@font-face";
    function removeDuplicateFontAtRules(tokens2) {
      var fontAtRules = [];
      var token2;
      var key;
      var i, l;
      for (i = 0, l = tokens2.length; i < l; i++) {
        token2 = tokens2[i];
        if (token2[0] != Token.AT_RULE_BLOCK && token2[1][0][1] != FONT_FACE_SCOPE) {
          continue;
        }
        key = serializeAll([token2]);
        if (fontAtRules.indexOf(key) > -1) {
          token2[2] = [];
        } else {
          fontAtRules.push(key);
        }
      }
    }
    module2.exports = removeDuplicateFontAtRules;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/remove-duplicate-media-queries.js
var require_remove_duplicate_media_queries = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/remove-duplicate-media-queries.js"(exports, module2) {
    init_cjs_shims();
    var Token = require_token();
    var serializeAll = require_one_time().all;
    var serializeRules = require_one_time().rules;
    function removeDuplicateMediaQueries(tokens2) {
      var candidates = {};
      var candidate;
      var token2;
      var key;
      var i, l;
      for (i = 0, l = tokens2.length; i < l; i++) {
        token2 = tokens2[i];
        if (token2[0] != Token.NESTED_BLOCK) {
          continue;
        }
        key = serializeRules(token2[1]) + "%" + serializeAll(token2[2]);
        candidate = candidates[key];
        if (candidate) {
          candidate[2] = [];
        }
        candidates[key] = token2;
      }
    }
    module2.exports = removeDuplicateMediaQueries;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/remove-duplicates.js
var require_remove_duplicates = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/remove-duplicates.js"(exports, module2) {
    init_cjs_shims();
    var Token = require_token();
    var serializeBody = require_one_time().body;
    var serializeRules = require_one_time().rules;
    function removeDuplicates(tokens2) {
      var matched = {};
      var moreThanOnce = [];
      var id, token2;
      var body, bodies;
      for (var i = 0, l = tokens2.length; i < l; i++) {
        token2 = tokens2[i];
        if (token2[0] != Token.RULE) {
          continue;
        }
        id = serializeRules(token2[1]);
        if (matched[id] && matched[id].length == 1) {
          moreThanOnce.push(id);
        } else {
          matched[id] = matched[id] || [];
        }
        matched[id].push(i);
      }
      for (i = 0, l = moreThanOnce.length; i < l; i++) {
        id = moreThanOnce[i];
        bodies = [];
        for (var j = matched[id].length - 1; j >= 0; j--) {
          token2 = tokens2[matched[id][j]];
          body = serializeBody(token2[2]);
          if (bodies.indexOf(body) > -1) {
            token2[2] = [];
          } else {
            bodies.push(body);
          }
        }
      }
    }
    module2.exports = removeDuplicates;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/remove-unused-at-rules.js
var require_remove_unused_at_rules = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/remove-unused-at-rules.js"(exports, module2) {
    init_cjs_shims();
    var populateComponents = require_populate_components();
    var wrapForOptimizing = require_wrap_for_optimizing().single;
    var restoreFromOptimizing = require_restore_from_optimizing();
    var Token = require_token();
    var animationNameRegex = /^(-moz-|-o-|-webkit-)?animation-name$/;
    var animationRegex = /^(-moz-|-o-|-webkit-)?animation$/;
    var keyframeRegex = /^@(-moz-|-o-|-webkit-)?keyframes /;
    var importantRegex = /\s{0,31}!important$/;
    var optionalMatchingQuotesRegex = /^(['"]?)(.*)\1$/;
    function normalize(value) {
      return value.replace(optionalMatchingQuotesRegex, "$2").replace(importantRegex, "");
    }
    function removeUnusedAtRules(tokens2, context) {
      removeUnusedAtRule(tokens2, matchCounterStyle, markCounterStylesAsUsed, context);
      removeUnusedAtRule(tokens2, matchFontFace, markFontFacesAsUsed, context);
      removeUnusedAtRule(tokens2, matchKeyframe, markKeyframesAsUsed, context);
      removeUnusedAtRule(tokens2, matchNamespace, markNamespacesAsUsed, context);
    }
    function removeUnusedAtRule(tokens2, matchCallback, markCallback, context) {
      var atRules = {};
      var atRule;
      var atRuleTokens;
      var atRuleToken;
      var zeroAt;
      var i, l;
      for (i = 0, l = tokens2.length; i < l; i++) {
        matchCallback(tokens2[i], atRules);
      }
      if (Object.keys(atRules).length === 0) {
        return;
      }
      markUsedAtRules(tokens2, markCallback, atRules, context);
      for (atRule in atRules) {
        atRuleTokens = atRules[atRule];
        for (i = 0, l = atRuleTokens.length; i < l; i++) {
          atRuleToken = atRuleTokens[i];
          zeroAt = atRuleToken[0] == Token.AT_RULE ? 1 : 2;
          atRuleToken[zeroAt] = [];
        }
      }
    }
    function markUsedAtRules(tokens2, markCallback, atRules, context) {
      var boundMarkCallback = markCallback(atRules);
      var i, l;
      for (i = 0, l = tokens2.length; i < l; i++) {
        switch (tokens2[i][0]) {
          case Token.RULE:
            boundMarkCallback(tokens2[i], context);
            break;
          case Token.NESTED_BLOCK:
            markUsedAtRules(tokens2[i][2], markCallback, atRules, context);
        }
      }
    }
    function matchCounterStyle(token2, atRules) {
      var match;
      if (token2[0] == Token.AT_RULE_BLOCK && token2[1][0][1].indexOf("@counter-style") === 0) {
        match = token2[1][0][1].split(" ")[1];
        atRules[match] = atRules[match] || [];
        atRules[match].push(token2);
      }
    }
    function markCounterStylesAsUsed(atRules) {
      return function(token2, context) {
        var property;
        var wrappedProperty;
        var i, l;
        for (i = 0, l = token2[2].length; i < l; i++) {
          property = token2[2][i];
          if (property[1][1] == "list-style") {
            wrappedProperty = wrapForOptimizing(property);
            populateComponents([wrappedProperty], context.validator, context.warnings);
            if (wrappedProperty.components[0].value[0][1] in atRules) {
              delete atRules[property[2][1]];
            }
            restoreFromOptimizing([wrappedProperty]);
          }
          if (property[1][1] == "list-style-type" && property[2][1] in atRules) {
            delete atRules[property[2][1]];
          }
        }
      };
    }
    function matchFontFace(token2, atRules) {
      var property;
      var match;
      var i, l;
      if (token2[0] == Token.AT_RULE_BLOCK && token2[1][0][1] == "@font-face") {
        for (i = 0, l = token2[2].length; i < l; i++) {
          property = token2[2][i];
          if (property[1][1] == "font-family") {
            match = normalize(property[2][1].toLowerCase());
            atRules[match] = atRules[match] || [];
            atRules[match].push(token2);
            break;
          }
        }
      }
    }
    function markFontFacesAsUsed(atRules) {
      return function(token2, context) {
        var property;
        var wrappedProperty;
        var component;
        var normalizedMatch;
        var i, l;
        var j, m;
        for (i = 0, l = token2[2].length; i < l; i++) {
          property = token2[2][i];
          if (property[1][1] == "font") {
            wrappedProperty = wrapForOptimizing(property);
            populateComponents([wrappedProperty], context.validator, context.warnings);
            component = wrappedProperty.components[6];
            for (j = 0, m = component.value.length; j < m; j++) {
              normalizedMatch = normalize(component.value[j][1].toLowerCase());
              if (normalizedMatch in atRules) {
                delete atRules[normalizedMatch];
              }
            }
            restoreFromOptimizing([wrappedProperty]);
          }
          if (property[1][1] == "font-family") {
            for (j = 2, m = property.length; j < m; j++) {
              normalizedMatch = normalize(property[j][1].toLowerCase());
              if (normalizedMatch in atRules) {
                delete atRules[normalizedMatch];
              }
            }
          }
        }
      };
    }
    function matchKeyframe(token2, atRules) {
      var match;
      if (token2[0] == Token.NESTED_BLOCK && keyframeRegex.test(token2[1][0][1])) {
        match = token2[1][0][1].split(" ")[1];
        atRules[match] = atRules[match] || [];
        atRules[match].push(token2);
      }
    }
    function markKeyframesAsUsed(atRules) {
      return function(token2, context) {
        var property;
        var wrappedProperty;
        var component;
        var i, l;
        var j, m;
        for (i = 0, l = token2[2].length; i < l; i++) {
          property = token2[2][i];
          if (animationRegex.test(property[1][1])) {
            wrappedProperty = wrapForOptimizing(property);
            populateComponents([wrappedProperty], context.validator, context.warnings);
            component = wrappedProperty.components[7];
            for (j = 0, m = component.value.length; j < m; j++) {
              if (component.value[j][1] in atRules) {
                delete atRules[component.value[j][1]];
              }
            }
            restoreFromOptimizing([wrappedProperty]);
          }
          if (animationNameRegex.test(property[1][1])) {
            for (j = 2, m = property.length; j < m; j++) {
              if (property[j][1] in atRules) {
                delete atRules[property[j][1]];
              }
            }
          }
        }
      };
    }
    function matchNamespace(token2, atRules) {
      var match;
      if (token2[0] == Token.AT_RULE && token2[1].indexOf("@namespace") === 0) {
        match = token2[1].split(" ")[1];
        atRules[match] = atRules[match] || [];
        atRules[match].push(token2);
      }
    }
    function markNamespacesAsUsed(atRules) {
      var namespaceRegex = new RegExp(Object.keys(atRules).join("\\||") + "\\|", "g");
      return function(token2) {
        var match;
        var scope;
        var normalizedMatch;
        var i, l;
        var j, m;
        for (i = 0, l = token2[1].length; i < l; i++) {
          scope = token2[1][i];
          match = scope[1].match(namespaceRegex);
          for (j = 0, m = match.length; j < m; j++) {
            normalizedMatch = match[j].substring(0, match[j].length - 1);
            if (normalizedMatch in atRules) {
              delete atRules[normalizedMatch];
            }
          }
        }
      };
    }
    module2.exports = removeUnusedAtRules;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/tidy-rule-duplicates.js
var require_tidy_rule_duplicates = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/tidy-rule-duplicates.js"(exports, module2) {
    init_cjs_shims();
    function ruleSorter(s1, s2) {
      return s1[1] > s2[1] ? 1 : -1;
    }
    function tidyRuleDuplicates(rules) {
      var list = [];
      var repeated = [];
      for (var i = 0, l = rules.length; i < l; i++) {
        var rule = rules[i];
        if (repeated.indexOf(rule[1]) == -1) {
          repeated.push(rule[1]);
          list.push(rule);
        }
      }
      return list.sort(ruleSorter);
    }
    module2.exports = tidyRuleDuplicates;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/restructure.js
var require_restructure = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/restructure.js"(exports, module2) {
    init_cjs_shims();
    var canReorderSingle = require_reorderable().canReorderSingle;
    var extractProperties = require_extract_properties();
    var isMergeable = require_is_mergeable();
    var tidyRuleDuplicates = require_tidy_rule_duplicates();
    var Token = require_token();
    var cloneArray = require_clone_array();
    var serializeBody = require_one_time().body;
    var serializeRules = require_one_time().rules;
    function naturalSorter(a, b) {
      return a > b ? 1 : -1;
    }
    function cloneAndMergeSelectors(propertyA, propertyB) {
      var cloned = cloneArray(propertyA);
      cloned[5] = cloned[5].concat(propertyB[5]);
      return cloned;
    }
    function restructure(tokens2, context) {
      var options = context.options;
      var mergeablePseudoClasses = options.compatibility.selectors.mergeablePseudoClasses;
      var mergeablePseudoElements = options.compatibility.selectors.mergeablePseudoElements;
      var mergeLimit = options.compatibility.selectors.mergeLimit;
      var multiplePseudoMerging = options.compatibility.selectors.multiplePseudoMerging;
      var specificityCache = context.cache.specificity;
      var movableTokens = {};
      var movedProperties = [];
      var multiPropertyMoveCache = {};
      var movedToBeDropped = [];
      var maxCombinationsLevel = 2;
      var ID_JOIN_CHARACTER = "%";
      function sendToMultiPropertyMoveCache(position2, movedProperty2, allFits) {
        for (var i2 = allFits.length - 1; i2 >= 0; i2--) {
          var fit = allFits[i2][0];
          var id = addToCache(movedProperty2, fit);
          if (multiPropertyMoveCache[id].length > 1 && processMultiPropertyMove(position2, multiPropertyMoveCache[id])) {
            removeAllMatchingFromCache(id);
            break;
          }
        }
      }
      function addToCache(movedProperty2, fit) {
        var id = cacheId(fit);
        multiPropertyMoveCache[id] = multiPropertyMoveCache[id] || [];
        multiPropertyMoveCache[id].push([movedProperty2, fit]);
        return id;
      }
      function removeAllMatchingFromCache(matchId) {
        var matchSelectors = matchId.split(ID_JOIN_CHARACTER);
        var forRemoval = [];
        var i2;
        for (var id in multiPropertyMoveCache) {
          var selectors = id.split(ID_JOIN_CHARACTER);
          for (i2 = selectors.length - 1; i2 >= 0; i2--) {
            if (matchSelectors.indexOf(selectors[i2]) > -1) {
              forRemoval.push(id);
              break;
            }
          }
        }
        for (i2 = forRemoval.length - 1; i2 >= 0; i2--) {
          delete multiPropertyMoveCache[forRemoval[i2]];
        }
      }
      function cacheId(cachedTokens) {
        var id = [];
        for (var i2 = 0, l = cachedTokens.length; i2 < l; i2++) {
          id.push(serializeRules(cachedTokens[i2][1]));
        }
        return id.join(ID_JOIN_CHARACTER);
      }
      function tokensToMerge(sourceTokens) {
        var uniqueTokensWithBody = [];
        var mergeableTokens = [];
        for (var i2 = sourceTokens.length - 1; i2 >= 0; i2--) {
          if (!isMergeable(serializeRules(sourceTokens[i2][1]), mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging)) {
            continue;
          }
          mergeableTokens.unshift(sourceTokens[i2]);
          if (sourceTokens[i2][2].length > 0 && uniqueTokensWithBody.indexOf(sourceTokens[i2]) == -1) {
            uniqueTokensWithBody.push(sourceTokens[i2]);
          }
        }
        return uniqueTokensWithBody.length > 1 ? mergeableTokens : [];
      }
      function shortenIfPossible(position2, movedProperty2) {
        var name = movedProperty2[0];
        var value = movedProperty2[1];
        var key2 = movedProperty2[4];
        var valueSize = name.length + value.length + 1;
        var allSelectors = [];
        var qualifiedTokens = [];
        var mergeableTokens = tokensToMerge(movableTokens[key2]);
        if (mergeableTokens.length < 2) {
          return;
        }
        var allFits = findAllFits(mergeableTokens, valueSize, 1);
        var bestFit = allFits[0];
        if (bestFit[1] > 0) {
          return sendToMultiPropertyMoveCache(position2, movedProperty2, allFits);
        }
        for (var i2 = bestFit[0].length - 1; i2 >= 0; i2--) {
          allSelectors = bestFit[0][i2][1].concat(allSelectors);
          qualifiedTokens.unshift(bestFit[0][i2]);
        }
        allSelectors = tidyRuleDuplicates(allSelectors);
        dropAsNewTokenAt(position2, [movedProperty2], allSelectors, qualifiedTokens);
      }
      function fitSorter(fit1, fit2) {
        return fit1[1] > fit2[1] ? 1 : fit1[1] == fit2[1] ? 0 : -1;
      }
      function findAllFits(mergeableTokens, propertySize, propertiesCount) {
        var combinations = allCombinations(mergeableTokens, propertySize, propertiesCount, maxCombinationsLevel - 1);
        return combinations.sort(fitSorter);
      }
      function allCombinations(tokensVariant, propertySize, propertiesCount, level) {
        var differenceVariants = [[tokensVariant, sizeDifference(tokensVariant, propertySize, propertiesCount)]];
        if (tokensVariant.length > 2 && level > 0) {
          for (var i2 = tokensVariant.length - 1; i2 >= 0; i2--) {
            var subVariant = Array.prototype.slice.call(tokensVariant, 0);
            subVariant.splice(i2, 1);
            differenceVariants = differenceVariants.concat(allCombinations(subVariant, propertySize, propertiesCount, level - 1));
          }
        }
        return differenceVariants;
      }
      function sizeDifference(tokensVariant, propertySize, propertiesCount) {
        var allSelectorsSize = 0;
        for (var i2 = tokensVariant.length - 1; i2 >= 0; i2--) {
          allSelectorsSize += tokensVariant[i2][2].length > propertiesCount ? serializeRules(tokensVariant[i2][1]).length : -1;
        }
        return allSelectorsSize - (tokensVariant.length - 1) * propertySize + 1;
      }
      function dropAsNewTokenAt(position2, properties2, allSelectors, mergeableTokens) {
        var i2, j2, k2, m2;
        var allProperties = [];
        for (i2 = mergeableTokens.length - 1; i2 >= 0; i2--) {
          var mergeableToken = mergeableTokens[i2];
          for (j2 = mergeableToken[2].length - 1; j2 >= 0; j2--) {
            var mergeableProperty = mergeableToken[2][j2];
            for (k2 = 0, m2 = properties2.length; k2 < m2; k2++) {
              var property2 = properties2[k2];
              var mergeablePropertyName = mergeableProperty[1][1];
              var propertyName = property2[0];
              var propertyBody = property2[4];
              if (mergeablePropertyName == propertyName && serializeBody([mergeableProperty]) == propertyBody) {
                mergeableToken[2].splice(j2, 1);
                break;
              }
            }
          }
        }
        for (i2 = properties2.length - 1; i2 >= 0; i2--) {
          allProperties.unshift(properties2[i2][3]);
        }
        var newToken = [Token.RULE, allSelectors, allProperties];
        tokens2.splice(position2, 0, newToken);
      }
      function dropPropertiesAt(position2, movedProperty2) {
        var key2 = movedProperty2[4];
        var toMove = movableTokens[key2];
        if (toMove && toMove.length > 1) {
          if (!shortenMultiMovesIfPossible(position2, movedProperty2)) {
            shortenIfPossible(position2, movedProperty2);
          }
        }
      }
      function shortenMultiMovesIfPossible(position2, movedProperty2) {
        var candidates = [];
        var propertiesAndMergableTokens = [];
        var key2 = movedProperty2[4];
        var j2, k2;
        var mergeableTokens = tokensToMerge(movableTokens[key2]);
        if (mergeableTokens.length < 2) {
          return;
        }
        movableLoop:
          for (var value in movableTokens) {
            var tokensList = movableTokens[value];
            for (j2 = mergeableTokens.length - 1; j2 >= 0; j2--) {
              if (tokensList.indexOf(mergeableTokens[j2]) == -1) {
                continue movableLoop;
              }
            }
            candidates.push(value);
          }
        if (candidates.length < 2) {
          return false;
        }
        for (j2 = candidates.length - 1; j2 >= 0; j2--) {
          for (k2 = movedProperties.length - 1; k2 >= 0; k2--) {
            if (movedProperties[k2][4] == candidates[j2]) {
              propertiesAndMergableTokens.unshift([movedProperties[k2], mergeableTokens]);
              break;
            }
          }
        }
        return processMultiPropertyMove(position2, propertiesAndMergableTokens);
      }
      function processMultiPropertyMove(position2, propertiesAndMergableTokens) {
        var valueSize = 0;
        var properties2 = [];
        var property2;
        for (var i2 = propertiesAndMergableTokens.length - 1; i2 >= 0; i2--) {
          property2 = propertiesAndMergableTokens[i2][0];
          var fullValue = property2[4];
          valueSize += fullValue.length + (i2 > 0 ? 1 : 0);
          properties2.push(property2);
        }
        var mergeableTokens = propertiesAndMergableTokens[0][1];
        var bestFit = findAllFits(mergeableTokens, valueSize, properties2.length)[0];
        if (bestFit[1] > 0) {
          return false;
        }
        var allSelectors = [];
        var qualifiedTokens = [];
        for (i2 = bestFit[0].length - 1; i2 >= 0; i2--) {
          allSelectors = bestFit[0][i2][1].concat(allSelectors);
          qualifiedTokens.unshift(bestFit[0][i2]);
        }
        allSelectors = tidyRuleDuplicates(allSelectors);
        dropAsNewTokenAt(position2, properties2, allSelectors, qualifiedTokens);
        for (i2 = properties2.length - 1; i2 >= 0; i2--) {
          property2 = properties2[i2];
          var index2 = movedProperties.indexOf(property2);
          delete movableTokens[property2[4]];
          if (index2 > -1 && movedToBeDropped.indexOf(index2) == -1) {
            movedToBeDropped.push(index2);
          }
        }
        return true;
      }
      function boundToAnotherPropertyInCurrrentToken(property2, movedProperty2, token3) {
        var propertyName = property2[0];
        var movedPropertyName = movedProperty2[0];
        if (propertyName != movedPropertyName) {
          return false;
        }
        var key2 = movedProperty2[4];
        var toMove = movableTokens[key2];
        return toMove && toMove.indexOf(token3) > -1;
      }
      for (var i = tokens2.length - 1; i >= 0; i--) {
        var token2 = tokens2[i];
        var isRule;
        var j, k, m;
        var samePropertyAt;
        if (token2[0] == Token.RULE) {
          isRule = true;
        } else if (token2[0] == Token.NESTED_BLOCK) {
          isRule = false;
        } else {
          continue;
        }
        var movedCount = movedProperties.length;
        var properties = extractProperties(token2);
        movedToBeDropped = [];
        var unmovableInCurrentToken = [];
        for (j = properties.length - 1; j >= 0; j--) {
          for (k = j - 1; k >= 0; k--) {
            if (!canReorderSingle(properties[j], properties[k], specificityCache)) {
              unmovableInCurrentToken.push(j);
              break;
            }
          }
        }
        for (j = properties.length - 1; j >= 0; j--) {
          var property = properties[j];
          var movedSameProperty = false;
          for (k = 0; k < movedCount; k++) {
            var movedProperty = movedProperties[k];
            if (movedToBeDropped.indexOf(k) == -1 && (!canReorderSingle(property, movedProperty, specificityCache) && !boundToAnotherPropertyInCurrrentToken(property, movedProperty, token2) || movableTokens[movedProperty[4]] && movableTokens[movedProperty[4]].length === mergeLimit)) {
              dropPropertiesAt(i + 1, movedProperty);
              if (movedToBeDropped.indexOf(k) == -1) {
                movedToBeDropped.push(k);
                delete movableTokens[movedProperty[4]];
              }
            }
            if (!movedSameProperty) {
              movedSameProperty = property[0] == movedProperty[0] && property[1] == movedProperty[1];
              if (movedSameProperty) {
                samePropertyAt = k;
              }
            }
          }
          if (!isRule || unmovableInCurrentToken.indexOf(j) > -1) {
            continue;
          }
          var key = property[4];
          if (movedSameProperty && movedProperties[samePropertyAt][5].length + property[5].length > mergeLimit) {
            dropPropertiesAt(i + 1, movedProperties[samePropertyAt]);
            movedProperties.splice(samePropertyAt, 1);
            movableTokens[key] = [token2];
            movedSameProperty = false;
          } else {
            movableTokens[key] = movableTokens[key] || [];
            movableTokens[key].push(token2);
          }
          if (movedSameProperty) {
            movedProperties[samePropertyAt] = cloneAndMergeSelectors(movedProperties[samePropertyAt], property);
          } else {
            movedProperties.push(property);
          }
        }
        movedToBeDropped = movedToBeDropped.sort(naturalSorter);
        for (j = 0, m = movedToBeDropped.length; j < m; j++) {
          var dropAt = movedToBeDropped[j] - j;
          movedProperties.splice(dropAt, 1);
        }
      }
      var position = tokens2[0] && tokens2[0][0] == Token.AT_RULE && tokens2[0][1].indexOf("@charset") === 0 ? 1 : 0;
      for (; position < tokens2.length - 1; position++) {
        var isImportRule = tokens2[position][0] === Token.AT_RULE && tokens2[position][1].indexOf("@import") === 0;
        var isComment = tokens2[position][0] === Token.COMMENT;
        if (!(isImportRule || isComment)) {
          break;
        }
      }
      for (i = 0; i < movedProperties.length; i++) {
        dropPropertiesAt(position, movedProperties[i]);
      }
    }
    module2.exports = restructure;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/optimize.js
var require_optimize4 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/level-2/optimize.js"(exports, module2) {
    init_cjs_shims();
    var mergeAdjacent = require_merge_adjacent();
    var mergeMediaQueries = require_merge_media_queries();
    var mergeNonAdjacentByBody = require_merge_non_adjacent_by_body();
    var mergeNonAdjacentBySelector = require_merge_non_adjacent_by_selector();
    var reduceNonAdjacent = require_reduce_non_adjacent();
    var removeDuplicateFontAtRules = require_remove_duplicate_font_at_rules();
    var removeDuplicateMediaQueries = require_remove_duplicate_media_queries();
    var removeDuplicates = require_remove_duplicates();
    var removeUnusedAtRules = require_remove_unused_at_rules();
    var restructure = require_restructure();
    var optimizeProperties = require_optimize3();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var Token = require_token();
    function removeEmpty(tokens2) {
      for (var i = 0, l = tokens2.length; i < l; i++) {
        var token2 = tokens2[i];
        var isEmpty = false;
        switch (token2[0]) {
          case Token.RULE:
            isEmpty = token2[1].length === 0 || token2[2].length === 0;
            break;
          case Token.NESTED_BLOCK:
            removeEmpty(token2[2]);
            isEmpty = token2[2].length === 0;
            break;
          case Token.AT_RULE:
            isEmpty = token2[1].length === 0;
            break;
          case Token.AT_RULE_BLOCK:
            isEmpty = token2[2].length === 0;
        }
        if (isEmpty) {
          tokens2.splice(i, 1);
          i--;
          l--;
        }
      }
    }
    function recursivelyOptimizeBlocks(tokens2, context) {
      for (var i = 0, l = tokens2.length; i < l; i++) {
        var token2 = tokens2[i];
        if (token2[0] == Token.NESTED_BLOCK) {
          var isKeyframes = /@(-moz-|-o-|-webkit-)?keyframes/.test(token2[1][0][1]);
          level2Optimize(token2[2], context, !isKeyframes);
        }
      }
    }
    function recursivelyOptimizeProperties(tokens2, context) {
      for (var i = 0, l = tokens2.length; i < l; i++) {
        var token2 = tokens2[i];
        switch (token2[0]) {
          case Token.RULE:
            optimizeProperties(token2[2], true, true, context);
            break;
          case Token.NESTED_BLOCK:
            recursivelyOptimizeProperties(token2[2], context);
        }
      }
    }
    function level2Optimize(tokens2, context, withRestructuring) {
      var levelOptions = context.options.level[OptimizationLevel.Two];
      var level2Plugins = context.options.plugins.level2Block;
      var reduced;
      var i;
      recursivelyOptimizeBlocks(tokens2, context);
      recursivelyOptimizeProperties(tokens2, context);
      if (levelOptions.removeDuplicateRules) {
        removeDuplicates(tokens2, context);
      }
      if (levelOptions.mergeAdjacentRules) {
        mergeAdjacent(tokens2, context);
      }
      if (levelOptions.reduceNonAdjacentRules) {
        reduceNonAdjacent(tokens2, context);
      }
      if (levelOptions.mergeNonAdjacentRules && levelOptions.mergeNonAdjacentRules != "body") {
        mergeNonAdjacentBySelector(tokens2, context);
      }
      if (levelOptions.mergeNonAdjacentRules && levelOptions.mergeNonAdjacentRules != "selector") {
        mergeNonAdjacentByBody(tokens2, context);
      }
      if (levelOptions.restructureRules && levelOptions.mergeAdjacentRules && withRestructuring) {
        restructure(tokens2, context);
        mergeAdjacent(tokens2, context);
      }
      if (levelOptions.restructureRules && !levelOptions.mergeAdjacentRules && withRestructuring) {
        restructure(tokens2, context);
      }
      if (levelOptions.removeDuplicateFontRules) {
        removeDuplicateFontAtRules(tokens2, context);
      }
      if (levelOptions.removeDuplicateMediaBlocks) {
        removeDuplicateMediaQueries(tokens2, context);
      }
      if (levelOptions.removeUnusedAtRules) {
        removeUnusedAtRules(tokens2, context);
      }
      if (levelOptions.mergeMedia) {
        reduced = mergeMediaQueries(tokens2, context);
        for (i = reduced.length - 1; i >= 0; i--) {
          level2Optimize(reduced[i][2], context, false);
        }
      }
      for (i = 0; i < level2Plugins.length; i++) {
        level2Plugins[i](tokens2);
      }
      if (levelOptions.removeEmpty) {
        removeEmpty(tokens2);
      }
      return tokens2;
    }
    module2.exports = level2Optimize;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/validator.js
var require_validator = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/optimizer/validator.js"(exports, module2) {
    init_cjs_shims();
    var functionNoVendorRegexStr = "[A-Z]+(\\-|[A-Z]|[0-9])+\\(.*?\\)";
    var functionVendorRegexStr = "\\-(\\-|[A-Z]|[0-9])+\\(.*?\\)";
    var variableRegexStr = "var\\(\\-\\-[^\\)]+\\)";
    var functionAnyRegexStr = "(" + variableRegexStr + "|" + functionNoVendorRegexStr + "|" + functionVendorRegexStr + ")";
    var calcRegex = new RegExp("^(\\-moz\\-|\\-webkit\\-)?calc\\([^\\)]+\\)$", "i");
    var decimalRegex = /[0-9]/;
    var functionAnyRegex = new RegExp("^" + functionAnyRegexStr + "$", "i");
    var hexAlphaColorRegex = /^#(?:[0-9a-f]{4}|[0-9a-f]{8})$/i;
    var hslColorRegex = /^hsl\(\s{0,31}[-.]?\d+\s{0,31},\s{0,31}\d*\.?\d+%\s{0,31},\s{0,31}\d*\.?\d+%\s{0,31}\)|hsla\(\s{0,31}[-.]?\d+\s{0,31},\s{0,31}\d*\.?\d+%\s{0,31},\s{0,31}\d*\.?\d+%\s{0,31},\s{0,31}\.?\d+\s{0,31}\)$/;
    var hslColorWithSpacesRegex = /^hsl\(\s{0,31}[-.]?\d+(deg)?\s{1,31}\d*\.?\d+%\s{1,31}\d*\.?\d+%\s{0,31}\)|hsla\(\s{0,31}[-.]?\d+(deg)?\s{1,31}\d*\.?\d+%\s{1,31}\d*\.?\d+%\s{1,31}\/\s{1,31}\d*\.?\d+%?\s{0,31}\)$/;
    var identifierRegex = /^(-[a-z0-9_][a-z0-9\-_]*|[a-z_][a-z0-9\-_]*)$/i;
    var namedEntityRegex = /^[a-z]+$/i;
    var prefixRegex = /^-([a-z0-9]|-)*$/i;
    var quotedTextRegex = /^("[^"]*"|'[^']*')$/i;
    var rgbColorRegex = /^rgb\(\s{0,31}[\d]{1,3}\s{0,31},\s{0,31}[\d]{1,3}\s{0,31},\s{0,31}[\d]{1,3}\s{0,31}\)|rgba\(\s{0,31}[\d]{1,3}\s{0,31},\s{0,31}[\d]{1,3}\s{0,31},\s{0,31}[\d]{1,3}\s{0,31},\s{0,31}[.\d]+\s{0,31}\)$/i;
    var rgbColorWithSpacesRegex = /^rgb\(\s{0,31}[\d]{1,3}\s{1,31}[\d]{1,3}\s{1,31}[\d]{1,3}\s{0,31}\)|rgba\(\s{0,31}[\d]{1,3}\s{1,31}[\d]{1,3}\s{1,31}[\d]{1,3}\s{1,31}\/\s{1,31}[\d]*\.?[.\d]+%?\s{0,31}\)$/i;
    var timeUnitPattern = /\d+(s|ms)/;
    var timingFunctionRegex = /^(cubic-bezier|steps)\([^)]+\)$/;
    var validTimeUnits = ["ms", "s"];
    var urlRegex = /^url\([\s\S]+\)$/i;
    var variableRegex = new RegExp("^" + variableRegexStr + "$", "i");
    var eightValueColorRegex = /^#[0-9a-f]{8}$/i;
    var fourValueColorRegex = /^#[0-9a-f]{4}$/i;
    var sixValueColorRegex = /^#[0-9a-f]{6}$/i;
    var threeValueColorRegex = /^#[0-9a-f]{3}$/i;
    var DECIMAL_DOT = ".";
    var MINUS_SIGN = "-";
    var PLUS_SIGN = "+";
    var Keywords = {
      "^": [
        "inherit",
        "initial",
        "unset"
      ],
      "*-style": [
        "auto",
        "dashed",
        "dotted",
        "double",
        "groove",
        "hidden",
        "inset",
        "none",
        "outset",
        "ridge",
        "solid"
      ],
      "*-timing-function": [
        "ease",
        "ease-in",
        "ease-in-out",
        "ease-out",
        "linear",
        "step-end",
        "step-start"
      ],
      "animation-direction": [
        "alternate",
        "alternate-reverse",
        "normal",
        "reverse"
      ],
      "animation-fill-mode": [
        "backwards",
        "both",
        "forwards",
        "none"
      ],
      "animation-iteration-count": [
        "infinite"
      ],
      "animation-name": [
        "none"
      ],
      "animation-play-state": [
        "paused",
        "running"
      ],
      "background-attachment": [
        "fixed",
        "inherit",
        "local",
        "scroll"
      ],
      "background-clip": [
        "border-box",
        "content-box",
        "inherit",
        "padding-box",
        "text"
      ],
      "background-origin": [
        "border-box",
        "content-box",
        "inherit",
        "padding-box"
      ],
      "background-position": [
        "bottom",
        "center",
        "left",
        "right",
        "top"
      ],
      "background-repeat": [
        "no-repeat",
        "inherit",
        "repeat",
        "repeat-x",
        "repeat-y",
        "round",
        "space"
      ],
      "background-size": [
        "auto",
        "cover",
        "contain"
      ],
      "border-collapse": [
        "collapse",
        "inherit",
        "separate"
      ],
      bottom: [
        "auto"
      ],
      clear: [
        "both",
        "left",
        "none",
        "right"
      ],
      color: [
        "transparent"
      ],
      cursor: [
        "all-scroll",
        "auto",
        "col-resize",
        "crosshair",
        "default",
        "e-resize",
        "help",
        "move",
        "n-resize",
        "ne-resize",
        "no-drop",
        "not-allowed",
        "nw-resize",
        "pointer",
        "progress",
        "row-resize",
        "s-resize",
        "se-resize",
        "sw-resize",
        "text",
        "vertical-text",
        "w-resize",
        "wait"
      ],
      display: [
        "block",
        "inline",
        "inline-block",
        "inline-table",
        "list-item",
        "none",
        "table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row",
        "table-row-group"
      ],
      float: [
        "left",
        "none",
        "right"
      ],
      left: [
        "auto"
      ],
      font: [
        "caption",
        "icon",
        "menu",
        "message-box",
        "small-caption",
        "status-bar",
        "unset"
      ],
      "font-size": [
        "large",
        "larger",
        "medium",
        "small",
        "smaller",
        "x-large",
        "x-small",
        "xx-large",
        "xx-small"
      ],
      "font-stretch": [
        "condensed",
        "expanded",
        "extra-condensed",
        "extra-expanded",
        "normal",
        "semi-condensed",
        "semi-expanded",
        "ultra-condensed",
        "ultra-expanded"
      ],
      "font-style": [
        "italic",
        "normal",
        "oblique"
      ],
      "font-variant": [
        "normal",
        "small-caps"
      ],
      "font-weight": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "bold",
        "bolder",
        "lighter",
        "normal"
      ],
      "line-height": [
        "normal"
      ],
      "list-style-position": [
        "inside",
        "outside"
      ],
      "list-style-type": [
        "armenian",
        "circle",
        "decimal",
        "decimal-leading-zero",
        "disc",
        "decimal|disc",
        "georgian",
        "lower-alpha",
        "lower-greek",
        "lower-latin",
        "lower-roman",
        "none",
        "square",
        "upper-alpha",
        "upper-latin",
        "upper-roman"
      ],
      overflow: [
        "auto",
        "hidden",
        "scroll",
        "visible"
      ],
      position: [
        "absolute",
        "fixed",
        "relative",
        "static"
      ],
      right: [
        "auto"
      ],
      "text-align": [
        "center",
        "justify",
        "left",
        "left|right",
        "right"
      ],
      "text-decoration": [
        "line-through",
        "none",
        "overline",
        "underline"
      ],
      "text-overflow": [
        "clip",
        "ellipsis"
      ],
      top: [
        "auto"
      ],
      "vertical-align": [
        "baseline",
        "bottom",
        "middle",
        "sub",
        "super",
        "text-bottom",
        "text-top",
        "top"
      ],
      visibility: [
        "collapse",
        "hidden",
        "visible"
      ],
      "white-space": [
        "normal",
        "nowrap",
        "pre"
      ],
      width: [
        "inherit",
        "initial",
        "medium",
        "thick",
        "thin"
      ]
    };
    var Units = [
      "%",
      "ch",
      "cm",
      "em",
      "ex",
      "in",
      "mm",
      "pc",
      "pt",
      "px",
      "rem",
      "vh",
      "vm",
      "vmax",
      "vmin",
      "vw"
    ];
    function isColor(value) {
      return value != "auto" && (isKeyword("color")(value) || isHexColor(value) || isColorFunction(value) || isNamedEntity(value));
    }
    function isColorFunction(value) {
      return isRgbColor(value) || isHslColor(value);
    }
    function isDynamicUnit(value) {
      return calcRegex.test(value);
    }
    function isFunction(value) {
      return functionAnyRegex.test(value);
    }
    function isHexColor(value) {
      return threeValueColorRegex.test(value) || fourValueColorRegex.test(value) || sixValueColorRegex.test(value) || eightValueColorRegex.test(value);
    }
    function isHslColor(value) {
      return hslColorRegex.test(value) || hslColorWithSpacesRegex.test(value);
    }
    function isHexAlphaColor(value) {
      return hexAlphaColorRegex.test(value);
    }
    function isIdentifier(value) {
      return identifierRegex.test(value);
    }
    function isQuotedText(value) {
      return quotedTextRegex.test(value);
    }
    function isImage(value) {
      return value == "none" || value == "inherit" || isUrl(value);
    }
    function isKeyword(propertyName) {
      return function(value) {
        return Keywords[propertyName].indexOf(value) > -1;
      };
    }
    function isNamedEntity(value) {
      return namedEntityRegex.test(value);
    }
    function isNumber(value) {
      return scanForNumber(value) == value.length;
    }
    function isRgbColor(value) {
      return rgbColorRegex.test(value) || rgbColorWithSpacesRegex.test(value);
    }
    function isPrefixed(value) {
      return prefixRegex.test(value);
    }
    function isPositiveNumber(value) {
      return isNumber(value) && parseFloat(value) >= 0;
    }
    function isVariable(value) {
      return variableRegex.test(value);
    }
    function isTime(value) {
      var numberUpTo = scanForNumber(value);
      return numberUpTo == value.length && parseInt(value) === 0 || numberUpTo > -1 && validTimeUnits.indexOf(value.slice(numberUpTo + 1)) > -1 || isCalculatedTime(value);
    }
    function isCalculatedTime(value) {
      return isFunction(value) && timeUnitPattern.test(value);
    }
    function isTimingFunction() {
      var isTimingFunctionKeyword = isKeyword("*-timing-function");
      return function(value) {
        return isTimingFunctionKeyword(value) || timingFunctionRegex.test(value);
      };
    }
    function isUnit(validUnits, value) {
      var numberUpTo = scanForNumber(value);
      return numberUpTo == value.length && parseInt(value) === 0 || numberUpTo > -1 && validUnits.indexOf(value.slice(numberUpTo + 1).toLowerCase()) > -1 || value == "auto" || value == "inherit";
    }
    function isUrl(value) {
      return urlRegex.test(value);
    }
    function isZIndex(value) {
      return value == "auto" || isNumber(value) || isKeyword("^")(value);
    }
    function scanForNumber(value) {
      var hasDot = false;
      var hasSign = false;
      var character;
      var i, l;
      for (i = 0, l = value.length; i < l; i++) {
        character = value[i];
        if (i === 0 && (character == PLUS_SIGN || character == MINUS_SIGN)) {
          hasSign = true;
        } else if (i > 0 && hasSign && (character == PLUS_SIGN || character == MINUS_SIGN)) {
          return i - 1;
        } else if (character == DECIMAL_DOT && !hasDot) {
          hasDot = true;
        } else if (character == DECIMAL_DOT && hasDot) {
          return i - 1;
        } else if (decimalRegex.test(character)) {
          continue;
        } else {
          return i - 1;
        }
      }
      return i;
    }
    function validator(compatibility) {
      var validUnits = Units.slice(0).filter(function(value) {
        return !(value in compatibility.units) || compatibility.units[value] === true;
      });
      if (compatibility.customUnits.rpx) {
        validUnits.push("rpx");
      }
      return {
        colorOpacity: compatibility.colors.opacity,
        colorHexAlpha: compatibility.colors.hexAlpha,
        isAnimationDirectionKeyword: isKeyword("animation-direction"),
        isAnimationFillModeKeyword: isKeyword("animation-fill-mode"),
        isAnimationIterationCountKeyword: isKeyword("animation-iteration-count"),
        isAnimationNameKeyword: isKeyword("animation-name"),
        isAnimationPlayStateKeyword: isKeyword("animation-play-state"),
        isTimingFunction: isTimingFunction(),
        isBackgroundAttachmentKeyword: isKeyword("background-attachment"),
        isBackgroundClipKeyword: isKeyword("background-clip"),
        isBackgroundOriginKeyword: isKeyword("background-origin"),
        isBackgroundPositionKeyword: isKeyword("background-position"),
        isBackgroundRepeatKeyword: isKeyword("background-repeat"),
        isBackgroundSizeKeyword: isKeyword("background-size"),
        isColor,
        isColorFunction,
        isDynamicUnit,
        isFontKeyword: isKeyword("font"),
        isFontSizeKeyword: isKeyword("font-size"),
        isFontStretchKeyword: isKeyword("font-stretch"),
        isFontStyleKeyword: isKeyword("font-style"),
        isFontVariantKeyword: isKeyword("font-variant"),
        isFontWeightKeyword: isKeyword("font-weight"),
        isFunction,
        isGlobal: isKeyword("^"),
        isHexAlphaColor,
        isHslColor,
        isIdentifier,
        isImage,
        isKeyword,
        isLineHeightKeyword: isKeyword("line-height"),
        isListStylePositionKeyword: isKeyword("list-style-position"),
        isListStyleTypeKeyword: isKeyword("list-style-type"),
        isNumber,
        isPrefixed,
        isPositiveNumber,
        isQuotedText,
        isRgbColor,
        isStyleKeyword: isKeyword("*-style"),
        isTime,
        isUnit: isUnit.bind(null, validUnits),
        isUrl,
        isVariable,
        isWidth: isKeyword("width"),
        isZIndex
      };
    }
    module2.exports = validator;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/compatibility.js
var require_compatibility = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/compatibility.js"(exports, module2) {
    init_cjs_shims();
    var DEFAULTS = {
      "*": {
        colors: {
          hexAlpha: false,
          opacity: true
        },
        customUnits: { rpx: false },
        properties: {
          backgroundClipMerging: true,
          backgroundOriginMerging: true,
          backgroundSizeMerging: true,
          colors: true,
          ieBangHack: false,
          ieFilters: false,
          iePrefixHack: false,
          ieSuffixHack: false,
          merging: true,
          shorterLengthUnits: false,
          spaceAfterClosingBrace: true,
          urlQuotes: true,
          zeroUnits: true
        },
        selectors: {
          adjacentSpace: false,
          ie7Hack: false,
          mergeablePseudoClasses: [
            ":active",
            ":after",
            ":before",
            ":empty",
            ":checked",
            ":disabled",
            ":empty",
            ":enabled",
            ":first-child",
            ":first-letter",
            ":first-line",
            ":first-of-type",
            ":focus",
            ":hover",
            ":lang",
            ":last-child",
            ":last-of-type",
            ":link",
            ":not",
            ":nth-child",
            ":nth-last-child",
            ":nth-last-of-type",
            ":nth-of-type",
            ":only-child",
            ":only-of-type",
            ":root",
            ":target",
            ":visited"
          ],
          mergeablePseudoElements: [
            "::after",
            "::before",
            "::first-letter",
            "::first-line"
          ],
          mergeLimit: 8191,
          multiplePseudoMerging: true
        },
        units: {
          ch: true,
          in: true,
          pc: true,
          pt: true,
          rem: true,
          vh: true,
          vm: true,
          vmax: true,
          vmin: true,
          vw: true
        }
      }
    };
    DEFAULTS.ie11 = merge(DEFAULTS["*"], { properties: { ieSuffixHack: true } });
    DEFAULTS.ie10 = merge(DEFAULTS["*"], { properties: { ieSuffixHack: true } });
    DEFAULTS.ie9 = merge(DEFAULTS["*"], {
      properties: {
        ieFilters: true,
        ieSuffixHack: true
      }
    });
    DEFAULTS.ie8 = merge(DEFAULTS.ie9, {
      colors: { opacity: false },
      properties: {
        backgroundClipMerging: false,
        backgroundOriginMerging: false,
        backgroundSizeMerging: false,
        iePrefixHack: true,
        merging: false
      },
      selectors: {
        mergeablePseudoClasses: [
          ":after",
          ":before",
          ":first-child",
          ":first-letter",
          ":focus",
          ":hover",
          ":visited"
        ],
        mergeablePseudoElements: []
      },
      units: {
        ch: false,
        rem: false,
        vh: false,
        vm: false,
        vmax: false,
        vmin: false,
        vw: false
      }
    });
    DEFAULTS.ie7 = merge(DEFAULTS.ie8, {
      properties: { ieBangHack: true },
      selectors: {
        ie7Hack: true,
        mergeablePseudoClasses: [
          ":first-child",
          ":first-letter",
          ":hover",
          ":visited"
        ]
      }
    });
    function compatibilityFrom(source) {
      return merge(DEFAULTS["*"], calculateSource(source));
    }
    function merge(source, target) {
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          var value = source[key];
          if (Object.prototype.hasOwnProperty.call(target, key) && typeof value === "object" && !Array.isArray(value)) {
            target[key] = merge(value, target[key] || {});
          } else {
            target[key] = key in target ? target[key] : value;
          }
        }
      }
      return target;
    }
    function calculateSource(source) {
      if (typeof source == "object") {
        return source;
      }
      if (!/[,+-]/.test(source)) {
        return DEFAULTS[source] || DEFAULTS["*"];
      }
      var parts = source.split(",");
      var template = parts[0] in DEFAULTS ? DEFAULTS[parts.shift()] : DEFAULTS["*"];
      source = {};
      parts.forEach(function(part) {
        var isAdd = part[0] == "+";
        var key = part.substring(1).split(".");
        var group = key[0];
        var option = key[1];
        source[group] = source[group] || {};
        source[group][option] = isAdd;
      });
      return merge(template, source);
    }
    module2.exports = compatibilityFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-http-resource.js
var require_is_http_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-http-resource.js"(exports, module2) {
    init_cjs_shims();
    var HTTP_RESOURCE_PATTERN = /^http:\/\//;
    function isHttpResource(uri) {
      return HTTP_RESOURCE_PATTERN.test(uri);
    }
    module2.exports = isHttpResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-https-resource.js
var require_is_https_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-https-resource.js"(exports, module2) {
    init_cjs_shims();
    var HTTPS_RESOURCE_PATTERN = /^https:\/\//;
    function isHttpsResource(uri) {
      return HTTPS_RESOURCE_PATTERN.test(uri);
    }
    module2.exports = isHttpsResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/load-remote-resource.js
var require_load_remote_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/load-remote-resource.js"(exports, module2) {
    init_cjs_shims();
    var http = require("http");
    var https = require("https");
    var url = require("url");
    var isHttpResource = require_is_http_resource();
    var isHttpsResource = require_is_https_resource();
    var override = require_override();
    var HTTP_PROTOCOL = "http:";
    function loadRemoteResource(uri, inlineRequest, inlineTimeout, callback) {
      var proxyProtocol = inlineRequest.protocol || inlineRequest.hostname;
      var errorHandled = false;
      var requestOptions;
      var fetch;
      requestOptions = override(url.parse(uri), inlineRequest || {});
      if (inlineRequest.hostname !== void 0) {
        requestOptions.protocol = inlineRequest.protocol || HTTP_PROTOCOL;
        requestOptions.path = requestOptions.href;
      }
      fetch = proxyProtocol && !isHttpsResource(proxyProtocol) || isHttpResource(uri) ? http.get : https.get;
      fetch(requestOptions, function(res) {
        var chunks = [];
        var movedUri;
        if (errorHandled) {
          return;
        }
        if (res.statusCode < 200 || res.statusCode > 399) {
          return callback(res.statusCode, null);
        }
        if (res.statusCode > 299) {
          movedUri = url.resolve(uri, res.headers.location);
          return loadRemoteResource(movedUri, inlineRequest, inlineTimeout, callback);
        }
        res.on("data", function(chunk) {
          chunks.push(chunk.toString());
        });
        res.on("end", function() {
          var body = chunks.join("");
          callback(null, body);
        });
      }).on("error", function(res) {
        if (errorHandled) {
          return;
        }
        errorHandled = true;
        callback(res.message, null);
      }).on("timeout", function() {
        if (errorHandled) {
          return;
        }
        errorHandled = true;
        callback("timeout", null);
      }).setTimeout(inlineTimeout);
    }
    module2.exports = loadRemoteResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/fetch.js
var require_fetch = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/fetch.js"(exports, module2) {
    init_cjs_shims();
    var loadRemoteResource = require_load_remote_resource();
    function fetchFrom(callback) {
      return callback || loadRemoteResource;
    }
    module2.exports = fetchFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/inline.js
var require_inline = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/inline.js"(exports, module2) {
    init_cjs_shims();
    function inlineOptionsFrom(rules) {
      if (Array.isArray(rules)) {
        return rules;
      }
      if (rules === false) {
        return ["none"];
      }
      return rules === void 0 ? ["local"] : rules.split(",");
    }
    module2.exports = inlineOptionsFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/inline-request.js
var require_inline_request = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/inline-request.js"(exports, module2) {
    init_cjs_shims();
    var url = require("url");
    var override = require_override();
    function inlineRequestFrom(option) {
      return override(proxyOptionsFrom(process.env.HTTP_PROXY || process.env.http_proxy), option || {});
    }
    function proxyOptionsFrom(httpProxy) {
      return httpProxy ? {
        hostname: url.parse(httpProxy).hostname,
        port: parseInt(url.parse(httpProxy).port)
      } : {};
    }
    module2.exports = inlineRequestFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/inline-timeout.js
var require_inline_timeout = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/inline-timeout.js"(exports, module2) {
    init_cjs_shims();
    var DEFAULT_TIMEOUT = 5e3;
    function inlineTimeoutFrom(option) {
      return option || DEFAULT_TIMEOUT;
    }
    module2.exports = inlineTimeoutFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/plugins.js
var require_plugins = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/plugins.js"(exports, module2) {
    init_cjs_shims();
    function pluginsFrom(plugins) {
      var flatPlugins = {
        level1Value: [],
        level1Property: [],
        level2Block: []
      };
      plugins = plugins || [];
      flatPlugins.level1Value = plugins.map(function(plugin) {
        return plugin.level1 && plugin.level1.value;
      }).filter(function(plugin) {
        return plugin != null;
      });
      flatPlugins.level1Property = plugins.map(function(plugin) {
        return plugin.level1 && plugin.level1.property;
      }).filter(function(plugin) {
        return plugin != null;
      });
      flatPlugins.level2Block = plugins.map(function(plugin) {
        return plugin.level2 && plugin.level2.block;
      }).filter(function(plugin) {
        return plugin != null;
      });
      return flatPlugins;
    }
    module2.exports = pluginsFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/rebase.js
var require_rebase = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/rebase.js"(exports, module2) {
    init_cjs_shims();
    function rebaseFrom(rebaseOption, rebaseToOption) {
      if (rebaseToOption !== void 0) {
        return true;
      }
      if (rebaseOption === void 0) {
        return false;
      }
      return !!rebaseOption;
    }
    module2.exports = rebaseFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/rebase-to.js
var require_rebase_to = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/options/rebase-to.js"(exports, module2) {
    init_cjs_shims();
    var path2 = require("path");
    function rebaseToFrom(option) {
      return option ? path2.resolve(option) : process.cwd();
    }
    module2.exports = rebaseToFrom;
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64.js
var require_base64 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64.js"(exports) {
    init_cjs_shims();
    var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    exports.encode = function(number) {
      if (0 <= number && number < intToCharMap.length) {
        return intToCharMap[number];
      }
      throw new TypeError("Must be between 0 and 63: " + number);
    };
    exports.decode = function(charCode) {
      var bigA = 65;
      var bigZ = 90;
      var littleA = 97;
      var littleZ = 122;
      var zero = 48;
      var nine = 57;
      var plus = 43;
      var slash = 47;
      var littleOffset = 26;
      var numberOffset = 52;
      if (bigA <= charCode && charCode <= bigZ) {
        return charCode - bigA;
      }
      if (littleA <= charCode && charCode <= littleZ) {
        return charCode - littleA + littleOffset;
      }
      if (zero <= charCode && charCode <= nine) {
        return charCode - zero + numberOffset;
      }
      if (charCode == plus) {
        return 62;
      }
      if (charCode == slash) {
        return 63;
      }
      return -1;
    };
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64-vlq.js
var require_base64_vlq = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64-vlq.js"(exports) {
    init_cjs_shims();
    var base64 = require_base64();
    var VLQ_BASE_SHIFT = 5;
    var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
    var VLQ_BASE_MASK = VLQ_BASE - 1;
    var VLQ_CONTINUATION_BIT = VLQ_BASE;
    function toVLQSigned(aValue) {
      return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
    }
    function fromVLQSigned(aValue) {
      var isNegative = (aValue & 1) === 1;
      var shifted = aValue >> 1;
      return isNegative ? -shifted : shifted;
    }
    exports.encode = function base64VLQ_encode(aValue) {
      var encoded = "";
      var digit;
      var vlq = toVLQSigned(aValue);
      do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
          digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
      } while (vlq > 0);
      return encoded;
    };
    exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
      var strLen = aStr.length;
      var result = 0;
      var shift = 0;
      var continuation, digit;
      do {
        if (aIndex >= strLen) {
          throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) {
          throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        }
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
      } while (continuation);
      aOutParam.value = fromVLQSigned(result);
      aOutParam.rest = aIndex;
    };
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/util.js
var require_util = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/util.js"(exports) {
    init_cjs_shims();
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = "";
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ":";
      }
      url += "//";
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports.urlGenerate = urlGenerate;
    function normalize(aPath) {
      var path2 = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path2 = url.path;
      }
      var isAbsolute = exports.isAbsolute(path2);
      var parts = path2.split(/\/+/);
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path2 = parts.join("/");
      if (path2 === "") {
        path2 = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path2;
        return urlGenerate(url);
      }
      return path2;
    }
    exports.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports.join = join;
    exports.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index2 = aRoot.lastIndexOf("/");
        if (index2 < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index2);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports.relative = relative;
    var supportsNullProto = function() {
      var obj = Object.create(null);
      return !("__proto__" in obj);
    }();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 === null) {
        return 1;
      }
      if (aStr2 === null) {
        return -1;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
      return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
      sourceURL = sourceURL || "";
      if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
          sourceRoot += "/";
        }
        sourceURL = sourceRoot + sourceURL;
      }
      if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
          throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
          var index2 = parsed.path.lastIndexOf("/");
          if (index2 >= 0) {
            parsed.path = parsed.path.substring(0, index2 + 1);
          }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
      }
      return normalize(sourceURL);
    }
    exports.computeSourceURL = computeSourceURL;
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/array-set.js
var require_array_set = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/array-set.js"(exports) {
    init_cjs_shims();
    var util = require_util();
    var has = Object.prototype.hasOwnProperty;
    var hasNativeMap = typeof Map !== "undefined";
    function ArraySet() {
      this._array = [];
      this._set = hasNativeMap ? /* @__PURE__ */ new Map() : Object.create(null);
    }
    ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
      var set = new ArraySet();
      for (var i = 0, len = aArray.length; i < len; i++) {
        set.add(aArray[i], aAllowDuplicates);
      }
      return set;
    };
    ArraySet.prototype.size = function ArraySet_size() {
      return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    };
    ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
      var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
      var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
      var idx = this._array.length;
      if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
      }
      if (!isDuplicate) {
        if (hasNativeMap) {
          this._set.set(aStr, idx);
        } else {
          this._set[sStr] = idx;
        }
      }
    };
    ArraySet.prototype.has = function ArraySet_has(aStr) {
      if (hasNativeMap) {
        return this._set.has(aStr);
      } else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
      }
    };
    ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
      if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) {
          return idx;
        }
      } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) {
          return this._set[sStr];
        }
      }
      throw new Error('"' + aStr + '" is not in the set.');
    };
    ArraySet.prototype.at = function ArraySet_at(aIdx) {
      if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
      }
      throw new Error("No element indexed by " + aIdx);
    };
    ArraySet.prototype.toArray = function ArraySet_toArray() {
      return this._array.slice();
    };
    exports.ArraySet = ArraySet;
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/mapping-list.js
var require_mapping_list = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/mapping-list.js"(exports) {
    init_cjs_shims();
    var util = require_util();
    function generatedPositionAfter(mappingA, mappingB) {
      var lineA = mappingA.generatedLine;
      var lineB = mappingB.generatedLine;
      var columnA = mappingA.generatedColumn;
      var columnB = mappingB.generatedColumn;
      return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
    }
    function MappingList() {
      this._array = [];
      this._sorted = true;
      this._last = { generatedLine: -1, generatedColumn: 0 };
    }
    MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };
    MappingList.prototype.add = function MappingList_add(aMapping) {
      if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
      } else {
        this._sorted = false;
        this._array.push(aMapping);
      }
    };
    MappingList.prototype.toArray = function MappingList_toArray() {
      if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
      }
      return this._array;
    };
    exports.MappingList = MappingList;
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-map-generator.js
var require_source_map_generator = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-map-generator.js"(exports) {
    init_cjs_shims();
    var base64VLQ = require_base64_vlq();
    var util = require_util();
    var ArraySet = require_array_set().ArraySet;
    var MappingList = require_mapping_list().MappingList;
    function SourceMapGenerator(aArgs) {
      if (!aArgs) {
        aArgs = {};
      }
      this._file = util.getArg(aArgs, "file", null);
      this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
      this._skipValidation = util.getArg(aArgs, "skipValidation", false);
      this._sources = new ArraySet();
      this._names = new ArraySet();
      this._mappings = new MappingList();
      this._sourcesContents = null;
    }
    SourceMapGenerator.prototype._version = 3;
    SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot
      });
      aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };
        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }
          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };
          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }
        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) {
          sourceRelative = util.relative(sourceRoot, sourceFile);
        }
        if (!generator._sources.has(sourceRelative)) {
          generator._sources.add(sourceRelative);
        }
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };
    SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, "generated");
      var original = util.getArg(aArgs, "original", null);
      var source = util.getArg(aArgs, "source", null);
      var name = util.getArg(aArgs, "name", null);
      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }
      if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) {
          this._sources.add(source);
        }
      }
      if (name != null) {
        name = String(name);
        if (!this._names.has(name)) {
          this._names.add(name);
        }
      }
      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source,
        name
      });
    };
    SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
      }
      if (aSourceContent != null) {
        if (!this._sourcesContents) {
          this._sourcesContents = Object.create(null);
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };
    SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }
      var newSources = new ArraySet();
      var newNames = new ArraySet();
      this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util.join(aSourceMapPath, mapping.source);
            }
            if (sourceRoot != null) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }
      }, this);
      this._sources = newSources;
      this._names = newNames;
      aSourceMapConsumer.sources.forEach(function(sourceFile2) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile2 = util.join(aSourceMapPath, sourceFile2);
          }
          if (sourceRoot != null) {
            sourceFile2 = util.relative(sourceRoot, sourceFile2);
          }
          this.setSourceContent(sourceFile2, content);
        }
      }, this);
    };
    SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
      if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
        throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
      }
      if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
      } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
      } else {
        throw new Error("Invalid mapping: " + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };
    SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = "";
      var next2;
      var mapping;
      var nameIdx;
      var sourceIdx;
      var mappings = this._mappings.toArray();
      for (var i = 0, len = mappings.length; i < len; i++) {
        mapping = mappings[i];
        next2 = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            next2 += ";";
            previousGeneratedLine++;
          }
        } else {
          if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
              continue;
            }
            next2 += ",";
          }
        }
        next2 += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
          sourceIdx = this._sources.indexOf(mapping.source);
          next2 += base64VLQ.encode(sourceIdx - previousSource);
          previousSource = sourceIdx;
          next2 += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;
          next2 += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;
          if (mapping.name != null) {
            nameIdx = this._names.indexOf(mapping.name);
            next2 += base64VLQ.encode(nameIdx - previousName);
            previousName = nameIdx;
          }
        }
        result += next2;
      }
      return result;
    };
    SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function(source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
      }, this);
    };
    SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }
      return map;
    };
    SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
      return JSON.stringify(this.toJSON());
    };
    exports.SourceMapGenerator = SourceMapGenerator;
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/binary-search.js
var require_binary_search = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/binary-search.js"(exports) {
    init_cjs_shims();
    exports.GREATEST_LOWER_BOUND = 1;
    exports.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index2 = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
      if (index2 < 0) {
        return -1;
      }
      while (index2 - 1 >= 0) {
        if (aCompare(aHaystack[index2], aHaystack[index2 - 1], true) !== 0) {
          break;
        }
        --index2;
      }
      return index2;
    };
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/quick-sort.js
var require_quick_sort = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/quick-sort.js"(exports) {
    init_cjs_shims();
    function swap(ary, x, y) {
      var temp = ary[x];
      ary[x] = ary[y];
      ary[y] = temp;
    }
    function randomIntInRange(low, high) {
      return Math.round(low + Math.random() * (high - low));
    }
    function doQuickSort(ary, comparator, p, r) {
      if (p < r) {
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        for (var j = p; j < r; j++) {
          if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
          }
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
      }
    }
    exports.quickSort = function(ary, comparator) {
      doQuickSort(ary, comparator, 0, ary.length - 1);
    };
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-map-consumer.js
var require_source_map_consumer = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-map-consumer.js"(exports) {
    init_cjs_shims();
    var util = require_util();
    var binarySearch = require_binary_search();
    var ArraySet = require_array_set().ArraySet;
    var base64VLQ = require_base64_vlq();
    var quickSort = require_quick_sort().quickSort;
    function SourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
    }
    SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
      return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
    };
    SourceMapConsumer.prototype._version = 3;
    SourceMapConsumer.prototype.__generatedMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__generatedMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
      }
    });
    SourceMapConsumer.prototype.__originalMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__originalMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
      }
    });
    SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index2) {
      var c = aStr.charAt(index2);
      return c === ";" || c === ",";
    };
    SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };
    SourceMapConsumer.GENERATED_ORDER = 1;
    SourceMapConsumer.ORIGINAL_ORDER = 2;
    SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
    SourceMapConsumer.LEAST_UPPER_BOUND = 2;
    SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
      var mappings;
      switch (order) {
        case SourceMapConsumer.GENERATED_ORDER:
          mappings = this._generatedMappings;
          break;
        case SourceMapConsumer.ORIGINAL_ORDER:
          mappings = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var sourceRoot = this.sourceRoot;
      mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
          source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name === null ? null : this._names.at(mapping.name)
        };
      }, this).forEach(aCallback, context);
    };
    SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var line = util.getArg(aArgs, "line");
      var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
      };
      needle.source = this._findSourceIndex(needle.source);
      if (needle.source < 0) {
        return [];
      }
      var mappings = [];
      var index2 = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
      if (index2 >= 0) {
        var mapping = this._originalMappings[index2];
        if (aArgs.column === void 0) {
          var originalLine = mapping.originalLine;
          while (mapping && mapping.originalLine === originalLine) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index2];
          }
        } else {
          var originalColumn = mapping.originalColumn;
          while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index2];
          }
        }
      }
      return mappings;
    };
    exports.SourceMapConsumer = SourceMapConsumer;
    function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sources = util.getArg(sourceMap, "sources");
      var names = util.getArg(sourceMap, "names", []);
      var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
      var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
      var mappings = util.getArg(sourceMap, "mappings");
      var file = util.getArg(sourceMap, "file", null);
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      if (sourceRoot) {
        sourceRoot = util.normalize(sourceRoot);
      }
      sources = sources.map(String).map(util.normalize).map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
      });
      this._names = ArraySet.fromArray(names.map(String), true);
      this._sources = ArraySet.fromArray(sources, true);
      this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
      });
      this.sourceRoot = sourceRoot;
      this.sourcesContent = sourcesContent;
      this._mappings = mappings;
      this._sourceMapURL = aSourceMapURL;
      this.file = file;
    }
    BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
    BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      if (this._sources.has(relativeSource)) {
        return this._sources.indexOf(relativeSource);
      }
      var i;
      for (i = 0; i < this._absoluteSources.length; ++i) {
        if (this._absoluteSources[i] == aSource) {
          return i;
        }
      }
      return -1;
    };
    BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);
      var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
      smc.file = aSourceMap._file;
      smc._sourceMapURL = aSourceMapURL;
      smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
      });
      var generatedMappings = aSourceMap._mappings.toArray().slice();
      var destGeneratedMappings = smc.__generatedMappings = [];
      var destOriginalMappings = smc.__originalMappings = [];
      for (var i = 0, length = generatedMappings.length; i < length; i++) {
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping();
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
          destMapping.source = sources.indexOf(srcMapping.source);
          destMapping.originalLine = srcMapping.originalLine;
          destMapping.originalColumn = srcMapping.originalColumn;
          if (srcMapping.name) {
            destMapping.name = names.indexOf(srcMapping.name);
          }
          destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
      }
      quickSort(smc.__originalMappings, util.compareByOriginalPositions);
      return smc;
    };
    BasicSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
      get: function() {
        return this._absoluteSources.slice();
      }
    });
    function Mapping() {
      this.generatedLine = 0;
      this.generatedColumn = 0;
      this.source = null;
      this.originalLine = null;
      this.originalColumn = null;
      this.name = null;
    }
    BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var length = aStr.length;
      var index2 = 0;
      var cachedSegments = {};
      var temp = {};
      var originalMappings = [];
      var generatedMappings = [];
      var mapping, str, segment, end, value;
      while (index2 < length) {
        if (aStr.charAt(index2) === ";") {
          generatedLine++;
          index2++;
          previousGeneratedColumn = 0;
        } else if (aStr.charAt(index2) === ",") {
          index2++;
        } else {
          mapping = new Mapping();
          mapping.generatedLine = generatedLine;
          for (end = index2; end < length; end++) {
            if (this._charIsMappingSeparator(aStr, end)) {
              break;
            }
          }
          str = aStr.slice(index2, end);
          segment = cachedSegments[str];
          if (segment) {
            index2 += str.length;
          } else {
            segment = [];
            while (index2 < end) {
              base64VLQ.decode(aStr, index2, temp);
              value = temp.value;
              index2 = temp.rest;
              segment.push(value);
            }
            if (segment.length === 2) {
              throw new Error("Found a source, but no line and column");
            }
            if (segment.length === 3) {
              throw new Error("Found a source and line, but no column");
            }
            cachedSegments[str] = segment;
          }
          mapping.generatedColumn = previousGeneratedColumn + segment[0];
          previousGeneratedColumn = mapping.generatedColumn;
          if (segment.length > 1) {
            mapping.source = previousSource + segment[1];
            previousSource += segment[1];
            mapping.originalLine = previousOriginalLine + segment[2];
            previousOriginalLine = mapping.originalLine;
            mapping.originalLine += 1;
            mapping.originalColumn = previousOriginalColumn + segment[3];
            previousOriginalColumn = mapping.originalColumn;
            if (segment.length > 4) {
              mapping.name = previousName + segment[4];
              previousName += segment[4];
            }
          }
          generatedMappings.push(mapping);
          if (typeof mapping.originalLine === "number") {
            originalMappings.push(mapping);
          }
        }
      }
      quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
      this.__generatedMappings = generatedMappings;
      quickSort(originalMappings, util.compareByOriginalPositions);
      this.__originalMappings = originalMappings;
    };
    BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
      if (aNeedle[aLineName] <= 0) {
        throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
      }
      return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
    };
    BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
      for (var index2 = 0; index2 < this._generatedMappings.length; ++index2) {
        var mapping = this._generatedMappings[index2];
        if (index2 + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index2 + 1];
          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }
        mapping.lastGeneratedColumn = Infinity;
      }
    };
    BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var index2 = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
      if (index2 >= 0) {
        var mapping = this._generatedMappings[index2];
        if (mapping.generatedLine === needle.generatedLine) {
          var source = util.getArg(mapping, "source", null);
          if (source !== null) {
            source = this._sources.at(source);
            source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
          }
          var name = util.getArg(mapping, "name", null);
          if (name !== null) {
            name = this._names.at(name);
          }
          return {
            source,
            line: util.getArg(mapping, "originalLine", null),
            column: util.getArg(mapping, "originalColumn", null),
            name
          };
        }
      }
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };
    BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
      if (!this.sourcesContent) {
        return false;
      }
      return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
      });
    };
    BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }
      var index2 = this._findSourceIndex(aSource);
      if (index2 >= 0) {
        return this.sourcesContent[index2];
      }
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      var url;
      if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + relativeSource + '" is not in the SourceMap.');
      }
    };
    BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
      var source = util.getArg(aArgs, "source");
      source = this._findSourceIndex(source);
      if (source < 0) {
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      }
      var needle = {
        source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
      };
      var index2 = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
      if (index2 >= 0) {
        var mapping = this._originalMappings[index2];
        if (mapping.source === needle.source) {
          return {
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
          };
        }
      }
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };
    exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
    function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sections = util.getArg(sourceMap, "sections");
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      this._sources = new ArraySet();
      this._names = new ArraySet();
      var lastOffset = {
        line: -1,
        column: 0
      };
      this._sections = sections.map(function(s) {
        if (s.url) {
          throw new Error("Support for url field in sections not implemented.");
        }
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
          throw new Error("Section offsets must be ordered and non-overlapping.");
        }
        lastOffset = offset;
        return {
          generatedOffset: {
            generatedLine: offsetLine + 1,
            generatedColumn: offsetColumn + 1
          },
          consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
        };
      });
    }
    IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
    IndexedSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
      get: function() {
        var sources = [];
        for (var i = 0; i < this._sections.length; i++) {
          for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
            sources.push(this._sections[i].consumer.sources[j]);
          }
        }
        return sources;
      }
    });
    IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var sectionIndex = binarySearch.search(needle, this._sections, function(needle2, section2) {
        var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }
        return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
      });
      var section = this._sections[sectionIndex];
      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }
      return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
      });
    };
    IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
      return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
      });
    };
    IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
          };
          return ret;
        }
      }
      return {
        line: null,
        column: null
      };
    };
    IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[j];
          var source = section.consumer._sources.at(mapping.source);
          source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
          this._sources.add(source);
          source = this._sources.indexOf(source);
          var name = null;
          if (mapping.name) {
            name = section.consumer._names.at(mapping.name);
            this._names.add(name);
            name = this._names.indexOf(name);
          }
          var adjustedMapping = {
            source,
            generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name
          };
          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === "number") {
            this.__originalMappings.push(adjustedMapping);
          }
        }
      }
      quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
      quickSort(this.__originalMappings, util.compareByOriginalPositions);
    };
    exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-node.js
var require_source_node = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-node.js"(exports) {
    init_cjs_shims();
    var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    var util = require_util();
    var REGEX_NEWLINE = /(\r?\n)/;
    var NEWLINE_CODE = 10;
    var isSourceNode = "$$$isSourceNode$$$";
    function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
      this.children = [];
      this.sourceContents = {};
      this.line = aLine == null ? null : aLine;
      this.column = aColumn == null ? null : aColumn;
      this.source = aSource == null ? null : aSource;
      this.name = aName == null ? null : aName;
      this[isSourceNode] = true;
      if (aChunks != null)
        this.add(aChunks);
    }
    SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      var node = new SourceNode();
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var remainingLinesIndex = 0;
      var shiftNextLine = function() {
        var lineContents = getNextLine();
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
          return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
        }
      };
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;
      var lastMapping = null;
      aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
          if (lastGeneratedLine < mapping.generatedLine) {
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
          } else {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            lastMapping = mapping;
            return;
          }
        }
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) {
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
      }
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });
      return node;
      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === void 0) {
          node.add(code);
        } else {
          var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
          node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
      }
    };
    SourceNode.prototype.add = function SourceNode_add(aChunk) {
      if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
          this.add(chunk);
        }, this);
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
          this.children.push(aChunk);
        }
      } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
      }
      return this;
    };
    SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
      if (Array.isArray(aChunk)) {
        for (var i = aChunk.length - 1; i >= 0; i--) {
          this.prepend(aChunk[i]);
        }
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
      } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
      }
      return this;
    };
    SourceNode.prototype.walk = function SourceNode_walk(aFn) {
      var chunk;
      for (var i = 0, len = this.children.length; i < len; i++) {
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
          chunk.walk(aFn);
        } else {
          if (chunk !== "") {
            aFn(chunk, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
          }
        }
      }
    };
    SourceNode.prototype.join = function SourceNode_join(aSep) {
      var newChildren;
      var i;
      var len = this.children.length;
      if (len > 0) {
        newChildren = [];
        for (i = 0; i < len - 1; i++) {
          newChildren.push(this.children[i]);
          newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
      }
      return this;
    };
    SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
      var lastChild = this.children[this.children.length - 1];
      if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
      } else if (typeof lastChild === "string") {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
      } else {
        this.children.push("".replace(aPattern, aReplacement));
      }
      return this;
    };
    SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };
    SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }
      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };
    SourceNode.prototype.toString = function SourceNode_toString() {
      var str = "";
      this.walk(function(chunk) {
        str += chunk;
      });
      return str;
    };
    SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
      var generated = {
        code: "",
        line: 1,
        column: 0
      };
      var map = new SourceMapGenerator(aArgs);
      var sourceMappingActive = false;
      var lastOriginalSource = null;
      var lastOriginalLine = null;
      var lastOriginalColumn = null;
      var lastOriginalName = null;
      this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
          if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
          lastOriginalSource = original.source;
          lastOriginalLine = original.line;
          lastOriginalColumn = original.column;
          lastOriginalName = original.name;
          sourceMappingActive = true;
        } else if (sourceMappingActive) {
          map.addMapping({
            generated: {
              line: generated.line,
              column: generated.column
            }
          });
          lastOriginalSource = null;
          sourceMappingActive = false;
        }
        for (var idx = 0, length = chunk.length; idx < length; idx++) {
          if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            if (idx + 1 === length) {
              lastOriginalSource = null;
              sourceMappingActive = false;
            } else if (sourceMappingActive) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
          } else {
            generated.column++;
          }
        }
      });
      this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
      });
      return { code: generated.code, map };
    };
    exports.SourceNode = SourceNode;
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/source-map.js
var require_source_map = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/source-map.js"(exports) {
    init_cjs_shims();
    exports.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    exports.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
    exports.SourceNode = require_source_node().SourceNode;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/input-source-map-tracker.js
var require_input_source_map_tracker = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/input-source-map-tracker.js"(exports, module2) {
    init_cjs_shims();
    var SourceMapConsumer = require_source_map().SourceMapConsumer;
    function inputSourceMapTracker() {
      var maps = {};
      return {
        all: all.bind(null, maps),
        isTracking: isTracking.bind(null, maps),
        originalPositionFor: originalPositionFor.bind(null, maps),
        track: track.bind(null, maps)
      };
    }
    function all(maps) {
      return maps;
    }
    function isTracking(maps, source) {
      return source in maps;
    }
    function originalPositionFor(maps, metadata, range, selectorFallbacks) {
      var line = metadata[0];
      var column = metadata[1];
      var source = metadata[2];
      var position = {
        line,
        column: column + range
      };
      var originalPosition;
      while (!originalPosition && position.column > column) {
        position.column--;
        originalPosition = maps[source].originalPositionFor(position);
      }
      if (!originalPosition || originalPosition.column < 0) {
        return metadata;
      }
      if (originalPosition.line === null && line > 1 && selectorFallbacks > 0) {
        return originalPositionFor(maps, [line - 1, column, source], range, selectorFallbacks - 1);
      }
      return originalPosition.line !== null ? toMetadata(originalPosition) : metadata;
    }
    function toMetadata(asHash) {
      return [asHash.line, asHash.column, asHash.source];
    }
    function track(maps, source, data) {
      maps[source] = new SourceMapConsumer(data);
    }
    module2.exports = inputSourceMapTracker;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-remote-resource.js
var require_is_remote_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-remote-resource.js"(exports, module2) {
    init_cjs_shims();
    var REMOTE_RESOURCE_PATTERN = /^(\w+:\/\/|\/\/)/;
    var FILE_RESOURCE_PATTERN = /^file:\/\//;
    function isRemoteResource(uri) {
      return REMOTE_RESOURCE_PATTERN.test(uri) && !FILE_RESOURCE_PATTERN.test(uri);
    }
    module2.exports = isRemoteResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/has-protocol.js
var require_has_protocol = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/has-protocol.js"(exports, module2) {
    init_cjs_shims();
    var NO_PROTOCOL_RESOURCE_PATTERN = /^\/\//;
    function hasProtocol(uri) {
      return !NO_PROTOCOL_RESOURCE_PATTERN.test(uri);
    }
    module2.exports = hasProtocol;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/is-allowed-resource.js
var require_is_allowed_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/is-allowed-resource.js"(exports, module2) {
    init_cjs_shims();
    var path2 = require("path");
    var url = require("url");
    var isRemoteResource = require_is_remote_resource();
    var hasProtocol = require_has_protocol();
    var HTTP_PROTOCOL = "http:";
    function isAllowedResource(uri, isRemote, rules) {
      var match;
      var absoluteUri;
      var allowed = !isRemote;
      var rule;
      var isNegated;
      var normalizedRule;
      var i;
      if (rules.length === 0) {
        return false;
      }
      if (isRemote && !hasProtocol(uri)) {
        uri = HTTP_PROTOCOL + uri;
      }
      match = isRemote ? url.parse(uri).host : uri;
      absoluteUri = isRemote ? uri : path2.resolve(uri);
      for (i = 0; i < rules.length; i++) {
        rule = rules[i];
        isNegated = rule[0] == "!";
        normalizedRule = rule.substring(1);
        if (isNegated && isRemote && isRemoteRule(normalizedRule)) {
          allowed = allowed && !isAllowedResource(uri, true, [normalizedRule]);
        } else if (isNegated && !isRemote && !isRemoteRule(normalizedRule)) {
          allowed = allowed && !isAllowedResource(uri, false, [normalizedRule]);
        } else if (isNegated) {
          allowed = allowed && true;
        } else if (rule == "all") {
          allowed = true;
        } else if (isRemote && rule == "local") {
          allowed = allowed || false;
        } else if (isRemote && rule == "remote") {
          allowed = true;
        } else if (!isRemote && rule == "remote") {
          allowed = false;
        } else if (!isRemote && rule == "local") {
          allowed = true;
        } else if (rule === match) {
          allowed = true;
        } else if (rule === uri) {
          allowed = true;
        } else if (isRemote && absoluteUri.indexOf(rule) === 0) {
          allowed = true;
        } else if (!isRemote && absoluteUri.indexOf(path2.resolve(rule)) === 0) {
          allowed = true;
        } else if (isRemote != isRemoteRule(normalizedRule)) {
          allowed = allowed && true;
        } else {
          allowed = false;
        }
      }
      return allowed;
    }
    function isRemoteRule(rule) {
      return isRemoteResource(rule) || url.parse(HTTP_PROTOCOL + "//" + rule).host == rule;
    }
    module2.exports = isAllowedResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/match-data-uri.js
var require_match_data_uri = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/match-data-uri.js"(exports, module2) {
    init_cjs_shims();
    var DATA_URI_PATTERN = /^data:(\S*?)?(;charset=(?:(?!;charset=)[^;])+)?(;[^,]+?)?,(.+)/;
    function matchDataUri(uri) {
      return DATA_URI_PATTERN.exec(uri);
    }
    module2.exports = matchDataUri;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/rebase-local-map.js
var require_rebase_local_map = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/rebase-local-map.js"(exports, module2) {
    init_cjs_shims();
    var path2 = require("path");
    function rebaseLocalMap(sourceMap, sourceUri, rebaseTo) {
      var currentPath = path2.resolve("");
      var absoluteUri = path2.resolve(currentPath, sourceUri);
      var absoluteUriDirectory = path2.dirname(absoluteUri);
      sourceMap.sources = sourceMap.sources.map(function(source) {
        return path2.relative(rebaseTo, path2.resolve(absoluteUriDirectory, source));
      });
      return sourceMap;
    }
    module2.exports = rebaseLocalMap;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/rebase-remote-map.js
var require_rebase_remote_map = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/rebase-remote-map.js"(exports, module2) {
    init_cjs_shims();
    var path2 = require("path");
    var url = require("url");
    function rebaseRemoteMap(sourceMap, sourceUri) {
      var sourceDirectory = path2.dirname(sourceUri);
      sourceMap.sources = sourceMap.sources.map(function(source) {
        return url.resolve(sourceDirectory, source);
      });
      return sourceMap;
    }
    module2.exports = rebaseRemoteMap;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-data-uri-resource.js
var require_is_data_uri_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-data-uri-resource.js"(exports, module2) {
    init_cjs_shims();
    var DATA_URI_PATTERN = /^data:(\S{0,31}?)?(;charset=(?:(?!;charset=)[^;])+)?(;[^,]+?)?,(.+)/;
    function isDataUriResource(uri) {
      return DATA_URI_PATTERN.test(uri);
    }
    module2.exports = isDataUriResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/apply-source-maps.js
var require_apply_source_maps = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/apply-source-maps.js"(exports, module2) {
    init_cjs_shims();
    var fs2 = require("fs");
    var path2 = require("path");
    var isAllowedResource = require_is_allowed_resource();
    var matchDataUri = require_match_data_uri();
    var rebaseLocalMap = require_rebase_local_map();
    var rebaseRemoteMap = require_rebase_remote_map();
    var Token = require_token();
    var hasProtocol = require_has_protocol();
    var isDataUriResource = require_is_data_uri_resource();
    var isRemoteResource = require_is_remote_resource();
    var MAP_MARKER_PATTERN = /^\/\*# sourceMappingURL=(\S+) \*\/$/;
    function applySourceMaps(tokens2, context, callback) {
      var applyContext = {
        callback,
        fetch: context.options.fetch,
        index: 0,
        inline: context.options.inline,
        inlineRequest: context.options.inlineRequest,
        inlineTimeout: context.options.inlineTimeout,
        inputSourceMapTracker: context.inputSourceMapTracker,
        localOnly: context.localOnly,
        processedTokens: [],
        rebaseTo: context.options.rebaseTo,
        sourceTokens: tokens2,
        warnings: context.warnings
      };
      return context.options.sourceMap && tokens2.length > 0 ? doApplySourceMaps(applyContext) : callback(tokens2);
    }
    function doApplySourceMaps(applyContext) {
      var singleSourceTokens = [];
      var lastSource = findTokenSource(applyContext.sourceTokens[0]);
      var source;
      var token2;
      var l;
      for (l = applyContext.sourceTokens.length; applyContext.index < l; applyContext.index++) {
        token2 = applyContext.sourceTokens[applyContext.index];
        source = findTokenSource(token2);
        if (source != lastSource) {
          singleSourceTokens = [];
          lastSource = source;
        }
        singleSourceTokens.push(token2);
        applyContext.processedTokens.push(token2);
        if (token2[0] == Token.COMMENT && MAP_MARKER_PATTERN.test(token2[1])) {
          return fetchAndApplySourceMap(token2[1], source, singleSourceTokens, applyContext);
        }
      }
      return applyContext.callback(applyContext.processedTokens);
    }
    function findTokenSource(token2) {
      var scope;
      var metadata;
      if (token2[0] == Token.AT_RULE || token2[0] == Token.COMMENT || token2[0] == Token.RAW) {
        metadata = token2[2][0];
      } else {
        scope = token2[1][0];
        metadata = scope[2][0];
      }
      return metadata[2];
    }
    function fetchAndApplySourceMap(sourceMapComment, source, singleSourceTokens, applyContext) {
      return extractInputSourceMapFrom(sourceMapComment, applyContext, function(inputSourceMap) {
        if (inputSourceMap) {
          applyContext.inputSourceMapTracker.track(source, inputSourceMap);
          applySourceMapRecursively(singleSourceTokens, applyContext.inputSourceMapTracker);
        }
        applyContext.index++;
        return doApplySourceMaps(applyContext);
      });
    }
    function extractInputSourceMapFrom(sourceMapComment, applyContext, whenSourceMapReady) {
      var uri = MAP_MARKER_PATTERN.exec(sourceMapComment)[1];
      var absoluteUri;
      var sourceMap;
      var rebasedMap;
      if (isDataUriResource(uri)) {
        sourceMap = extractInputSourceMapFromDataUri(uri);
        return whenSourceMapReady(sourceMap);
      }
      if (isRemoteResource(uri)) {
        return loadInputSourceMapFromRemoteUri(uri, applyContext, function(sourceMap2) {
          var parsedMap;
          if (sourceMap2) {
            parsedMap = JSON.parse(sourceMap2);
            rebasedMap = rebaseRemoteMap(parsedMap, uri);
            whenSourceMapReady(rebasedMap);
          } else {
            whenSourceMapReady(null);
          }
        });
      }
      absoluteUri = path2.resolve(applyContext.rebaseTo, uri);
      sourceMap = loadInputSourceMapFromLocalUri(absoluteUri, applyContext);
      if (sourceMap) {
        rebasedMap = rebaseLocalMap(sourceMap, absoluteUri, applyContext.rebaseTo);
        return whenSourceMapReady(rebasedMap);
      }
      return whenSourceMapReady(null);
    }
    function extractInputSourceMapFromDataUri(uri) {
      var dataUriMatch = matchDataUri(uri);
      var charset = dataUriMatch[2] ? dataUriMatch[2].split(/[=;]/)[2] : "us-ascii";
      var encoding = dataUriMatch[3] ? dataUriMatch[3].split(";")[1] : "utf8";
      var data = encoding == "utf8" ? global.unescape(dataUriMatch[4]) : dataUriMatch[4];
      var buffer = Buffer.from(data, encoding);
      buffer.charset = charset;
      return JSON.parse(buffer.toString());
    }
    function loadInputSourceMapFromRemoteUri(uri, applyContext, whenLoaded) {
      var isAllowed = isAllowedResource(uri, true, applyContext.inline);
      var isRuntimeResource = !hasProtocol(uri);
      if (applyContext.localOnly) {
        applyContext.warnings.push('Cannot fetch remote resource from "' + uri + '" as no callback given.');
        return whenLoaded(null);
      }
      if (isRuntimeResource) {
        applyContext.warnings.push('Cannot fetch "' + uri + '" as no protocol given.');
        return whenLoaded(null);
      }
      if (!isAllowed) {
        applyContext.warnings.push('Cannot fetch "' + uri + '" as resource is not allowed.');
        return whenLoaded(null);
      }
      applyContext.fetch(uri, applyContext.inlineRequest, applyContext.inlineTimeout, function(error, body) {
        if (error) {
          applyContext.warnings.push('Missing source map at "' + uri + '" - ' + error);
          return whenLoaded(null);
        }
        whenLoaded(body);
      });
    }
    function loadInputSourceMapFromLocalUri(uri, applyContext) {
      var isAllowed = isAllowedResource(uri, false, applyContext.inline);
      var sourceMap;
      if (!fs2.existsSync(uri) || !fs2.statSync(uri).isFile()) {
        applyContext.warnings.push('Ignoring local source map at "' + uri + '" as resource is missing.');
        return null;
      }
      if (!isAllowed) {
        applyContext.warnings.push('Cannot fetch "' + uri + '" as resource is not allowed.');
        return null;
      }
      if (!fs2.statSync(uri).size) {
        applyContext.warnings.push('Cannot fetch "' + uri + '" as resource is empty.');
        return null;
      }
      sourceMap = fs2.readFileSync(uri, "utf-8");
      return JSON.parse(sourceMap);
    }
    function applySourceMapRecursively(tokens2, inputSourceMapTracker) {
      var token2;
      var i, l;
      for (i = 0, l = tokens2.length; i < l; i++) {
        token2 = tokens2[i];
        switch (token2[0]) {
          case Token.AT_RULE:
            applySourceMapTo(token2, inputSourceMapTracker);
            break;
          case Token.AT_RULE_BLOCK:
            applySourceMapRecursively(token2[1], inputSourceMapTracker);
            applySourceMapRecursively(token2[2], inputSourceMapTracker);
            break;
          case Token.AT_RULE_BLOCK_SCOPE:
            applySourceMapTo(token2, inputSourceMapTracker);
            break;
          case Token.NESTED_BLOCK:
            applySourceMapRecursively(token2[1], inputSourceMapTracker);
            applySourceMapRecursively(token2[2], inputSourceMapTracker);
            break;
          case Token.NESTED_BLOCK_SCOPE:
            applySourceMapTo(token2, inputSourceMapTracker);
            break;
          case Token.COMMENT:
            applySourceMapTo(token2, inputSourceMapTracker);
            break;
          case Token.PROPERTY:
            applySourceMapRecursively(token2, inputSourceMapTracker);
            break;
          case Token.PROPERTY_BLOCK:
            applySourceMapRecursively(token2[1], inputSourceMapTracker);
            break;
          case Token.PROPERTY_NAME:
            applySourceMapTo(token2, inputSourceMapTracker);
            break;
          case Token.PROPERTY_VALUE:
            applySourceMapTo(token2, inputSourceMapTracker);
            break;
          case Token.RULE:
            applySourceMapRecursively(token2[1], inputSourceMapTracker);
            applySourceMapRecursively(token2[2], inputSourceMapTracker);
            break;
          case Token.RULE_SCOPE:
            applySourceMapTo(token2, inputSourceMapTracker);
        }
      }
      return tokens2;
    }
    function applySourceMapTo(token2, inputSourceMapTracker) {
      var value = token2[1];
      var metadata = token2[2];
      var newMetadata = [];
      var i, l;
      for (i = 0, l = metadata.length; i < l; i++) {
        newMetadata.push(inputSourceMapTracker.originalPositionFor(metadata[i], value.length));
      }
      token2[2] = newMetadata;
    }
    module2.exports = applySourceMaps;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/extract-import-url-and-media.js
var require_extract_import_url_and_media = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/extract-import-url-and-media.js"(exports, module2) {
    init_cjs_shims();
    var split = require_split();
    var BRACE_PREFIX = /^\(/;
    var BRACE_SUFFIX = /\)$/;
    var IMPORT_PREFIX_PATTERN = /^@import/i;
    var QUOTE_PREFIX_PATTERN = /['"]\s{0,31}/;
    var QUOTE_SUFFIX_PATTERN = /\s{0,31}['"]/;
    var URL_PREFIX_PATTERN = /^url\(\s{0,31}/i;
    var URL_SUFFIX_PATTERN = /\s{0,31}\)/i;
    function extractImportUrlAndMedia(atRuleValue) {
      var uri;
      var mediaQuery;
      var stripped;
      var parts;
      stripped = atRuleValue.replace(IMPORT_PREFIX_PATTERN, "").trim().replace(URL_PREFIX_PATTERN, "(").replace(URL_SUFFIX_PATTERN, ")").replace(QUOTE_PREFIX_PATTERN, "").replace(QUOTE_SUFFIX_PATTERN, "");
      parts = split(stripped, " ");
      uri = parts[0].replace(BRACE_PREFIX, "").replace(BRACE_SUFFIX, "");
      mediaQuery = parts.slice(1).join(" ");
      return [uri, mediaQuery];
    }
    module2.exports = extractImportUrlAndMedia;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/load-original-sources.js
var require_load_original_sources = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/load-original-sources.js"(exports, module2) {
    init_cjs_shims();
    var fs2 = require("fs");
    var path2 = require("path");
    var isAllowedResource = require_is_allowed_resource();
    var hasProtocol = require_has_protocol();
    var isRemoteResource = require_is_remote_resource();
    function loadOriginalSources(context, callback) {
      var loadContext = {
        callback,
        fetch: context.options.fetch,
        index: 0,
        inline: context.options.inline,
        inlineRequest: context.options.inlineRequest,
        inlineTimeout: context.options.inlineTimeout,
        localOnly: context.localOnly,
        rebaseTo: context.options.rebaseTo,
        sourcesContent: context.sourcesContent,
        uriToSource: uriToSourceMapping(context.inputSourceMapTracker.all()),
        warnings: context.warnings
      };
      return context.options.sourceMap && context.options.sourceMapInlineSources ? doLoadOriginalSources(loadContext) : callback();
    }
    function uriToSourceMapping(allSourceMapConsumers) {
      var mapping = {};
      var consumer;
      var uri;
      var source;
      var i, l;
      for (source in allSourceMapConsumers) {
        consumer = allSourceMapConsumers[source];
        for (i = 0, l = consumer.sources.length; i < l; i++) {
          uri = consumer.sources[i];
          source = consumer.sourceContentFor(uri, true);
          mapping[uri] = source;
        }
      }
      return mapping;
    }
    function doLoadOriginalSources(loadContext) {
      var uris = Object.keys(loadContext.uriToSource);
      var uri;
      var source;
      var total;
      for (total = uris.length; loadContext.index < total; loadContext.index++) {
        uri = uris[loadContext.index];
        source = loadContext.uriToSource[uri];
        if (source) {
          loadContext.sourcesContent[uri] = source;
        } else {
          return loadOriginalSource(uri, loadContext);
        }
      }
      return loadContext.callback();
    }
    function loadOriginalSource(uri, loadContext) {
      var content;
      if (isRemoteResource(uri)) {
        return loadOriginalSourceFromRemoteUri(uri, loadContext, function(content2) {
          loadContext.index++;
          loadContext.sourcesContent[uri] = content2;
          return doLoadOriginalSources(loadContext);
        });
      }
      content = loadOriginalSourceFromLocalUri(uri, loadContext);
      loadContext.index++;
      loadContext.sourcesContent[uri] = content;
      return doLoadOriginalSources(loadContext);
    }
    function loadOriginalSourceFromRemoteUri(uri, loadContext, whenLoaded) {
      var isAllowed = isAllowedResource(uri, true, loadContext.inline);
      var isRuntimeResource = !hasProtocol(uri);
      if (loadContext.localOnly) {
        loadContext.warnings.push('Cannot fetch remote resource from "' + uri + '" as no callback given.');
        return whenLoaded(null);
      }
      if (isRuntimeResource) {
        loadContext.warnings.push('Cannot fetch "' + uri + '" as no protocol given.');
        return whenLoaded(null);
      }
      if (!isAllowed) {
        loadContext.warnings.push('Cannot fetch "' + uri + '" as resource is not allowed.');
        return whenLoaded(null);
      }
      loadContext.fetch(uri, loadContext.inlineRequest, loadContext.inlineTimeout, function(error, content) {
        if (error) {
          loadContext.warnings.push('Missing original source at "' + uri + '" - ' + error);
        }
        whenLoaded(content);
      });
    }
    function loadOriginalSourceFromLocalUri(relativeUri, loadContext) {
      var isAllowed = isAllowedResource(relativeUri, false, loadContext.inline);
      var absoluteUri = path2.resolve(loadContext.rebaseTo, relativeUri);
      if (!fs2.existsSync(absoluteUri) || !fs2.statSync(absoluteUri).isFile()) {
        loadContext.warnings.push('Ignoring local source map at "' + absoluteUri + '" as resource is missing.');
        return null;
      }
      if (!isAllowed) {
        loadContext.warnings.push('Cannot fetch "' + absoluteUri + '" as resource is not allowed.');
        return null;
      }
      return fs2.readFileSync(absoluteUri, "utf8");
    }
    module2.exports = loadOriginalSources;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/normalize-path.js
var require_normalize_path2 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/normalize-path.js"(exports, module2) {
    init_cjs_shims();
    var UNIX_SEPARATOR = "/";
    var WINDOWS_SEPARATOR_PATTERN = /\\/g;
    function normalizePath(path2) {
      return path2.replace(WINDOWS_SEPARATOR_PATTERN, UNIX_SEPARATOR);
    }
    module2.exports = normalizePath;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/restore-import.js
var require_restore_import = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/restore-import.js"(exports, module2) {
    init_cjs_shims();
    function restoreImport(uri, mediaQuery) {
      return ("@import " + uri + " " + mediaQuery).trim();
    }
    module2.exports = restoreImport;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/rewrite-url.js
var require_rewrite_url = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/rewrite-url.js"(exports, module2) {
    init_cjs_shims();
    var path2 = require("path");
    var url = require("url");
    var isDataUriResource = require_is_data_uri_resource();
    var DOUBLE_QUOTE = '"';
    var SINGLE_QUOTE = "'";
    var URL_PREFIX = "url(";
    var URL_SUFFIX = ")";
    var PROTOCOL_LESS_PREFIX_PATTERN = /^[^\w\d]*\/\//;
    var QUOTE_PREFIX_PATTERN = /^["']/;
    var QUOTE_SUFFIX_PATTERN = /["']$/;
    var ROUND_BRACKETS_PATTERN = /[()]/;
    var URL_PREFIX_PATTERN = /^url\(/i;
    var URL_SUFFIX_PATTERN = /\)$/;
    var WHITESPACE_PATTERN = /\s/;
    var isWindows = process.platform == "win32";
    function rebase(uri, rebaseConfig) {
      if (!rebaseConfig) {
        return uri;
      }
      if (isAbsolute(uri) && !isRemote(rebaseConfig.toBase)) {
        return uri;
      }
      if (isRemote(uri) || isSVGMarker(uri) || isInternal(uri) || isDataUriResource(uri)) {
        return uri;
      }
      if (isRemote(rebaseConfig.toBase)) {
        return url.resolve(rebaseConfig.toBase, uri);
      }
      return rebaseConfig.absolute ? normalize(absolute(uri, rebaseConfig)) : normalize(relative(uri, rebaseConfig));
    }
    function isAbsolute(uri) {
      return path2.isAbsolute(uri);
    }
    function isSVGMarker(uri) {
      return uri[0] == "#";
    }
    function isInternal(uri) {
      return /^\w+:\w+/.test(uri);
    }
    function isRemote(uri) {
      return /^[^:]+?:\/\//.test(uri) || PROTOCOL_LESS_PREFIX_PATTERN.test(uri);
    }
    function absolute(uri, rebaseConfig) {
      return path2.resolve(path2.join(rebaseConfig.fromBase || "", uri)).replace(rebaseConfig.toBase, "");
    }
    function relative(uri, rebaseConfig) {
      return path2.relative(rebaseConfig.toBase, path2.join(rebaseConfig.fromBase || "", uri));
    }
    function normalize(uri) {
      return isWindows ? uri.replace(/\\/g, "/") : uri;
    }
    function quoteFor(unquotedUrl) {
      if (unquotedUrl.indexOf(SINGLE_QUOTE) > -1) {
        return DOUBLE_QUOTE;
      }
      if (unquotedUrl.indexOf(DOUBLE_QUOTE) > -1) {
        return SINGLE_QUOTE;
      }
      if (hasWhitespace(unquotedUrl) || hasRoundBrackets(unquotedUrl)) {
        return SINGLE_QUOTE;
      }
      return "";
    }
    function hasWhitespace(url2) {
      return WHITESPACE_PATTERN.test(url2);
    }
    function hasRoundBrackets(url2) {
      return ROUND_BRACKETS_PATTERN.test(url2);
    }
    function rewriteUrl(originalUrl, rebaseConfig, pathOnly) {
      var strippedUrl = originalUrl.replace(URL_PREFIX_PATTERN, "").replace(URL_SUFFIX_PATTERN, "").trim();
      var unquotedUrl = strippedUrl.replace(QUOTE_PREFIX_PATTERN, "").replace(QUOTE_SUFFIX_PATTERN, "").trim();
      var quote = strippedUrl[0] == SINGLE_QUOTE || strippedUrl[0] == DOUBLE_QUOTE ? strippedUrl[0] : quoteFor(unquotedUrl);
      return pathOnly ? rebase(unquotedUrl, rebaseConfig) : URL_PREFIX + quote + rebase(unquotedUrl, rebaseConfig) + quote + URL_SUFFIX;
    }
    module2.exports = rewriteUrl;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-import.js
var require_is_import = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/utils/is-import.js"(exports, module2) {
    init_cjs_shims();
    var IMPORT_PREFIX_PATTERN = /^@import/i;
    function isImport(value) {
      return IMPORT_PREFIX_PATTERN.test(value);
    }
    module2.exports = isImport;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/rebase.js
var require_rebase2 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/rebase.js"(exports, module2) {
    init_cjs_shims();
    var extractImportUrlAndMedia = require_extract_import_url_and_media();
    var restoreImport = require_restore_import();
    var rewriteUrl = require_rewrite_url();
    var Token = require_token();
    var isImport = require_is_import();
    var SOURCE_MAP_COMMENT_PATTERN = /^\/\*# sourceMappingURL=(\S+) \*\/$/;
    function rebase(tokens2, rebaseAll, validator, rebaseConfig) {
      return rebaseAll ? rebaseEverything(tokens2, validator, rebaseConfig) : rebaseAtRules(tokens2, validator, rebaseConfig);
    }
    function rebaseEverything(tokens2, validator, rebaseConfig) {
      var token2;
      var i, l;
      for (i = 0, l = tokens2.length; i < l; i++) {
        token2 = tokens2[i];
        switch (token2[0]) {
          case Token.AT_RULE:
            rebaseAtRule(token2, validator, rebaseConfig);
            break;
          case Token.AT_RULE_BLOCK:
            rebaseProperties(token2[2], validator, rebaseConfig);
            break;
          case Token.COMMENT:
            rebaseSourceMapComment(token2, rebaseConfig);
            break;
          case Token.NESTED_BLOCK:
            rebaseEverything(token2[2], validator, rebaseConfig);
            break;
          case Token.RULE:
            rebaseProperties(token2[2], validator, rebaseConfig);
            break;
        }
      }
      return tokens2;
    }
    function rebaseAtRules(tokens2, validator, rebaseConfig) {
      var token2;
      var i, l;
      for (i = 0, l = tokens2.length; i < l; i++) {
        token2 = tokens2[i];
        switch (token2[0]) {
          case Token.AT_RULE:
            rebaseAtRule(token2, validator, rebaseConfig);
            break;
        }
      }
      return tokens2;
    }
    function rebaseAtRule(token2, validator, rebaseConfig) {
      if (!isImport(token2[1])) {
        return;
      }
      var uriAndMediaQuery = extractImportUrlAndMedia(token2[1]);
      var newUrl = rewriteUrl(uriAndMediaQuery[0], rebaseConfig);
      var mediaQuery = uriAndMediaQuery[1];
      token2[1] = restoreImport(newUrl, mediaQuery);
    }
    function rebaseSourceMapComment(token2, rebaseConfig) {
      var matches = SOURCE_MAP_COMMENT_PATTERN.exec(token2[1]);
      if (matches && matches[1].indexOf("data:") === -1) {
        token2[1] = token2[1].replace(matches[1], rewriteUrl(matches[1], rebaseConfig, true));
      }
    }
    function rebaseProperties(properties, validator, rebaseConfig) {
      var property;
      var value;
      var i, l;
      var j, m;
      for (i = 0, l = properties.length; i < l; i++) {
        property = properties[i];
        for (j = 2, m = property.length; j < m; j++) {
          value = property[j][1];
          if (validator.isUrl(value)) {
            property[j][1] = rewriteUrl(value, rebaseConfig);
          }
        }
      }
    }
    module2.exports = rebase;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/tokenizer/tokenize.js
var require_tokenize = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/tokenizer/tokenize.js"(exports, module2) {
    init_cjs_shims();
    var Marker = require_marker();
    var Token = require_token();
    var formatPosition = require_format_position();
    var Level = {
      BLOCK: "block",
      COMMENT: "comment",
      DOUBLE_QUOTE: "double-quote",
      RULE: "rule",
      SINGLE_QUOTE: "single-quote"
    };
    var AT_RULES = [
      "@charset",
      "@import"
    ];
    var BLOCK_RULES = [
      "@-moz-document",
      "@document",
      "@-moz-keyframes",
      "@-ms-keyframes",
      "@-o-keyframes",
      "@-webkit-keyframes",
      "@keyframes",
      "@media",
      "@supports"
    ];
    var IGNORE_END_COMMENT_PATTERN = /\/\* clean-css ignore:end \*\/$/;
    var IGNORE_START_COMMENT_PATTERN = /^\/\* clean-css ignore:start \*\//;
    var PAGE_MARGIN_BOXES = [
      "@bottom-center",
      "@bottom-left",
      "@bottom-left-corner",
      "@bottom-right",
      "@bottom-right-corner",
      "@left-bottom",
      "@left-middle",
      "@left-top",
      "@right-bottom",
      "@right-middle",
      "@right-top",
      "@top-center",
      "@top-left",
      "@top-left-corner",
      "@top-right",
      "@top-right-corner"
    ];
    var EXTRA_PAGE_BOXES = [
      "@footnote",
      "@footnotes",
      "@left",
      "@page-float-bottom",
      "@page-float-top",
      "@right"
    ];
    var REPEAT_PATTERN = /^\[\s{0,31}\d+\s{0,31}\]$/;
    var TAIL_BROKEN_VALUE_PATTERN = /([^}])\}*$/;
    var RULE_WORD_SEPARATOR_PATTERN = /[\s(]/;
    function tokenize2(source, externalContext) {
      var internalContext = {
        level: Level.BLOCK,
        position: {
          source: externalContext.source || void 0,
          line: 1,
          column: 0,
          index: 0
        }
      };
      return intoTokens(source, externalContext, internalContext, false);
    }
    function intoTokens(source, externalContext, internalContext, isNested) {
      var allTokens = [];
      var newTokens = allTokens;
      var lastToken;
      var ruleToken;
      var ruleTokens = [];
      var propertyToken;
      var metadata;
      var metadatas = [];
      var level = internalContext.level;
      var levels = [];
      var buffer = [];
      var buffers = [];
      var isBufferEmpty = true;
      var serializedBuffer;
      var serializedBufferPart;
      var roundBracketLevel = 0;
      var isQuoted;
      var isSpace;
      var isNewLineNix;
      var isNewLineWin;
      var isCarriageReturn;
      var isCommentStart;
      var wasCommentStart = false;
      var isCommentEnd;
      var wasCommentEnd = false;
      var isCommentEndMarker;
      var isEscaped;
      var wasEscaped = false;
      var characterWithNoSpecialMeaning;
      var isPreviousDash = false;
      var isVariable = false;
      var isRaw = false;
      var seekingValue = false;
      var seekingPropertyBlockClosing = false;
      var position = internalContext.position;
      var lastCommentStartAt;
      for (; position.index < source.length; position.index++) {
        var character = source[position.index];
        isQuoted = level == Level.SINGLE_QUOTE || level == Level.DOUBLE_QUOTE;
        isSpace = character == Marker.SPACE || character == Marker.TAB;
        isNewLineNix = character == Marker.NEW_LINE_NIX;
        isNewLineWin = character == Marker.NEW_LINE_NIX && source[position.index - 1] == Marker.CARRIAGE_RETURN;
        isCarriageReturn = character == Marker.CARRIAGE_RETURN && source[position.index + 1] && source[position.index + 1] != Marker.NEW_LINE_NIX;
        isCommentStart = !wasCommentEnd && level != Level.COMMENT && !isQuoted && character == Marker.ASTERISK && source[position.index - 1] == Marker.FORWARD_SLASH;
        isCommentEndMarker = !wasCommentStart && !isQuoted && character == Marker.FORWARD_SLASH && source[position.index - 1] == Marker.ASTERISK;
        isCommentEnd = level == Level.COMMENT && isCommentEndMarker;
        characterWithNoSpecialMeaning = !isSpace && !isCarriageReturn && (character >= "A" && character <= "Z" || character >= "a" && character <= "z" || character >= "0" && character <= "9" || character == "-");
        isVariable = isVariable || level != Level.COMMENT && !seekingValue && isPreviousDash && character === "-";
        isPreviousDash = character === "-";
        roundBracketLevel = Math.max(roundBracketLevel, 0);
        metadata = isBufferEmpty ? [position.line, position.column, position.source] : metadata;
        if (isEscaped) {
          buffer.push(character);
          isBufferEmpty = false;
        } else if (characterWithNoSpecialMeaning) {
          buffer.push(character);
          isBufferEmpty = false;
        } else if ((isSpace || isNewLineNix && !isNewLineWin) && (isQuoted || level == Level.COMMENT)) {
          buffer.push(character);
          isBufferEmpty = false;
        } else if ((isSpace || isNewLineNix && !isNewLineWin) && isBufferEmpty) {
        } else if (!isCommentEnd && level == Level.COMMENT) {
          buffer.push(character);
          isBufferEmpty = false;
        } else if (!isCommentStart && !isCommentEnd && isRaw) {
          buffer.push(character);
          isBufferEmpty = false;
        } else if (isCommentStart && isVariable && (level == Level.BLOCK || level == Level.RULE) && buffer.length > 1) {
          buffer.push(character);
          isBufferEmpty = false;
          levels.push(level);
          level = Level.COMMENT;
        } else if (isCommentStart && (level == Level.BLOCK || level == Level.RULE) && buffer.length > 1) {
          metadatas.push(metadata);
          buffer.push(character);
          buffers.push(buffer.slice(0, -2));
          isBufferEmpty = false;
          buffer = buffer.slice(-2);
          metadata = [position.line, position.column - 1, position.source];
          levels.push(level);
          level = Level.COMMENT;
        } else if (isCommentStart) {
          levels.push(level);
          level = Level.COMMENT;
          buffer.push(character);
          isBufferEmpty = false;
        } else if (isCommentEnd && isVariable) {
          buffer.push(character);
          level = levels.pop();
        } else if (isCommentEnd && isIgnoreStartComment(buffer)) {
          serializedBuffer = buffer.join("").trim() + character;
          lastToken = [
            Token.COMMENT,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ];
          newTokens.push(lastToken);
          isRaw = true;
          metadata = metadatas.pop() || null;
          buffer = buffers.pop() || [];
          isBufferEmpty = buffer.length === 0;
        } else if (isCommentEnd && isIgnoreEndComment(buffer)) {
          serializedBuffer = buffer.join("") + character;
          lastCommentStartAt = serializedBuffer.lastIndexOf(Marker.FORWARD_SLASH + Marker.ASTERISK);
          serializedBufferPart = serializedBuffer.substring(0, lastCommentStartAt);
          lastToken = [
            Token.RAW,
            serializedBufferPart,
            [originalMetadata(metadata, serializedBufferPart, externalContext)]
          ];
          newTokens.push(lastToken);
          serializedBufferPart = serializedBuffer.substring(lastCommentStartAt);
          metadata = [position.line, position.column - serializedBufferPart.length + 1, position.source];
          lastToken = [
            Token.COMMENT,
            serializedBufferPart,
            [originalMetadata(metadata, serializedBufferPart, externalContext)]
          ];
          newTokens.push(lastToken);
          isRaw = false;
          level = levels.pop();
          metadata = metadatas.pop() || null;
          buffer = buffers.pop() || [];
          isBufferEmpty = buffer.length === 0;
        } else if (isCommentEnd) {
          serializedBuffer = buffer.join("").trim() + character;
          lastToken = [
            Token.COMMENT,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ];
          newTokens.push(lastToken);
          level = levels.pop();
          metadata = metadatas.pop() || null;
          buffer = buffers.pop() || [];
          isBufferEmpty = buffer.length === 0;
        } else if (isCommentEndMarker && source[position.index + 1] != Marker.ASTERISK) {
          externalContext.warnings.push("Unexpected '*/' at " + formatPosition([position.line, position.column, position.source]) + ".");
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.SINGLE_QUOTE && !isQuoted) {
          levels.push(level);
          level = Level.SINGLE_QUOTE;
          buffer.push(character);
          isBufferEmpty = false;
        } else if (character == Marker.SINGLE_QUOTE && level == Level.SINGLE_QUOTE) {
          level = levels.pop();
          buffer.push(character);
          isBufferEmpty = false;
        } else if (character == Marker.DOUBLE_QUOTE && !isQuoted) {
          levels.push(level);
          level = Level.DOUBLE_QUOTE;
          buffer.push(character);
          isBufferEmpty = false;
        } else if (character == Marker.DOUBLE_QUOTE && level == Level.DOUBLE_QUOTE) {
          level = levels.pop();
          buffer.push(character);
          isBufferEmpty = false;
        } else if (character != Marker.CLOSE_ROUND_BRACKET && character != Marker.OPEN_ROUND_BRACKET && level != Level.COMMENT && !isQuoted && roundBracketLevel > 0) {
          buffer.push(character);
          isBufferEmpty = false;
        } else if (character == Marker.OPEN_ROUND_BRACKET && !isQuoted && level != Level.COMMENT && !seekingValue) {
          buffer.push(character);
          isBufferEmpty = false;
          roundBracketLevel++;
        } else if (character == Marker.CLOSE_ROUND_BRACKET && !isQuoted && level != Level.COMMENT && !seekingValue) {
          buffer.push(character);
          isBufferEmpty = false;
          roundBracketLevel--;
        } else if (character == Marker.SEMICOLON && level == Level.BLOCK && buffer[0] == Marker.AT) {
          serializedBuffer = buffer.join("").trim();
          allTokens.push([
            Token.AT_RULE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.COMMA && level == Level.BLOCK && ruleToken) {
          serializedBuffer = buffer.join("").trim();
          ruleToken[1].push([
            tokenScopeFrom(ruleToken[0]),
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext, ruleToken[1].length)]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.COMMA && level == Level.BLOCK && tokenTypeFrom(buffer) == Token.AT_RULE) {
          buffer.push(character);
          isBufferEmpty = false;
        } else if (character == Marker.COMMA && level == Level.BLOCK) {
          ruleToken = [tokenTypeFrom(buffer), [], []];
          serializedBuffer = buffer.join("").trim();
          ruleToken[1].push([
            tokenScopeFrom(ruleToken[0]),
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext, 0)]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.OPEN_CURLY_BRACKET && level == Level.BLOCK && ruleToken && ruleToken[0] == Token.NESTED_BLOCK) {
          serializedBuffer = buffer.join("").trim();
          ruleToken[1].push([
            Token.NESTED_BLOCK_SCOPE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          allTokens.push(ruleToken);
          levels.push(level);
          position.column++;
          position.index++;
          buffer = [];
          isBufferEmpty = true;
          ruleToken[2] = intoTokens(source, externalContext, internalContext, true);
          ruleToken = null;
        } else if (character == Marker.OPEN_CURLY_BRACKET && level == Level.BLOCK && tokenTypeFrom(buffer) == Token.NESTED_BLOCK) {
          serializedBuffer = buffer.join("").trim();
          ruleToken = ruleToken || [Token.NESTED_BLOCK, [], []];
          ruleToken[1].push([
            Token.NESTED_BLOCK_SCOPE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          allTokens.push(ruleToken);
          levels.push(level);
          position.column++;
          position.index++;
          buffer = [];
          isBufferEmpty = true;
          isVariable = false;
          ruleToken[2] = intoTokens(source, externalContext, internalContext, true);
          ruleToken = null;
        } else if (character == Marker.OPEN_CURLY_BRACKET && level == Level.BLOCK) {
          serializedBuffer = buffer.join("").trim();
          ruleToken = ruleToken || [tokenTypeFrom(buffer), [], []];
          ruleToken[1].push([
            tokenScopeFrom(ruleToken[0]),
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext, ruleToken[1].length)]
          ]);
          newTokens = ruleToken[2];
          allTokens.push(ruleToken);
          levels.push(level);
          level = Level.RULE;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.OPEN_CURLY_BRACKET && level == Level.RULE && seekingValue) {
          ruleTokens.push(ruleToken);
          ruleToken = [Token.PROPERTY_BLOCK, []];
          propertyToken.push(ruleToken);
          newTokens = ruleToken[1];
          levels.push(level);
          level = Level.RULE;
          seekingValue = false;
        } else if (character == Marker.OPEN_CURLY_BRACKET && level == Level.RULE && isPageMarginBox(buffer)) {
          serializedBuffer = buffer.join("").trim();
          ruleTokens.push(ruleToken);
          ruleToken = [Token.AT_RULE_BLOCK, [], []];
          ruleToken[1].push([
            Token.AT_RULE_BLOCK_SCOPE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          newTokens.push(ruleToken);
          newTokens = ruleToken[2];
          levels.push(level);
          level = Level.RULE;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.COLON && level == Level.RULE && !seekingValue) {
          serializedBuffer = buffer.join("").trim();
          propertyToken = [
            Token.PROPERTY,
            [
              Token.PROPERTY_NAME,
              serializedBuffer,
              [originalMetadata(metadata, serializedBuffer, externalContext)]
            ]
          ];
          newTokens.push(propertyToken);
          seekingValue = true;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.SEMICOLON && level == Level.RULE && propertyToken && ruleTokens.length > 0 && !isBufferEmpty && buffer[0] == Marker.AT) {
          serializedBuffer = buffer.join("").trim();
          ruleToken[1].push([
            Token.AT_RULE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.SEMICOLON && level == Level.RULE && propertyToken && !isBufferEmpty) {
          serializedBuffer = buffer.join("").trim();
          propertyToken.push([
            Token.PROPERTY_VALUE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          propertyToken = null;
          seekingValue = false;
          buffer = [];
          isBufferEmpty = true;
          isVariable = false;
        } else if (character == Marker.SEMICOLON && level == Level.RULE && propertyToken && isBufferEmpty && isVariable && !propertyToken[2]) {
          propertyToken.push([Token.PROPERTY_VALUE, " ", [originalMetadata(metadata, " ", externalContext)]]);
          isVariable = false;
          propertyToken = null;
          seekingValue = false;
        } else if (character == Marker.SEMICOLON && level == Level.RULE && propertyToken && isBufferEmpty) {
          propertyToken = null;
          seekingValue = false;
        } else if (character == Marker.SEMICOLON && level == Level.RULE && !isBufferEmpty && buffer[0] == Marker.AT) {
          serializedBuffer = buffer.join("");
          newTokens.push([
            Token.AT_RULE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          seekingValue = false;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.SEMICOLON && level == Level.RULE && seekingPropertyBlockClosing) {
          seekingPropertyBlockClosing = false;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.SEMICOLON && level == Level.RULE && isBufferEmpty) {
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.RULE && propertyToken && seekingValue && !isBufferEmpty && ruleTokens.length > 0) {
          serializedBuffer = buffer.join("");
          propertyToken.push([
            Token.PROPERTY_VALUE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          propertyToken = null;
          ruleToken = ruleTokens.pop();
          newTokens = ruleToken[2];
          level = levels.pop();
          seekingValue = false;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.RULE && propertyToken && !isBufferEmpty && buffer[0] == Marker.AT && ruleTokens.length > 0) {
          serializedBuffer = buffer.join("");
          ruleToken[1].push([
            Token.AT_RULE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          propertyToken = null;
          ruleToken = ruleTokens.pop();
          newTokens = ruleToken[2];
          level = levels.pop();
          seekingValue = false;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.RULE && propertyToken && ruleTokens.length > 0) {
          propertyToken = null;
          ruleToken = ruleTokens.pop();
          newTokens = ruleToken[2];
          level = levels.pop();
          seekingValue = false;
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.RULE && propertyToken && !isBufferEmpty) {
          serializedBuffer = buffer.join("");
          propertyToken.push([
            Token.PROPERTY_VALUE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          propertyToken = null;
          ruleToken = ruleTokens.pop();
          newTokens = allTokens;
          level = levels.pop();
          seekingValue = false;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.RULE && !isBufferEmpty && buffer[0] == Marker.AT) {
          propertyToken = null;
          ruleToken = null;
          serializedBuffer = buffer.join("").trim();
          newTokens.push([
            Token.AT_RULE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          newTokens = allTokens;
          level = levels.pop();
          seekingValue = false;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.RULE && levels[levels.length - 1] == Level.RULE) {
          propertyToken = null;
          ruleToken = ruleTokens.pop();
          newTokens = ruleToken[2];
          level = levels.pop();
          seekingValue = false;
          seekingPropertyBlockClosing = true;
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.RULE && isVariable && propertyToken && !propertyToken[2]) {
          propertyToken.push([Token.PROPERTY_VALUE, " ", [originalMetadata(metadata, " ", externalContext)]]);
          isVariable = false;
          propertyToken = null;
          ruleToken = null;
          newTokens = allTokens;
          level = levels.pop();
          seekingValue = false;
          isVariable = false;
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.RULE) {
          propertyToken = null;
          ruleToken = null;
          newTokens = allTokens;
          level = levels.pop();
          seekingValue = false;
          isVariable = false;
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.BLOCK && !isNested && position.index <= source.length - 1) {
          externalContext.warnings.push("Unexpected '}' at " + formatPosition([position.line, position.column, position.source]) + ".");
          buffer.push(character);
          isBufferEmpty = false;
        } else if (character == Marker.CLOSE_CURLY_BRACKET && level == Level.BLOCK) {
          break;
        } else if (character == Marker.OPEN_ROUND_BRACKET && level == Level.RULE && seekingValue) {
          buffer.push(character);
          isBufferEmpty = false;
          roundBracketLevel++;
        } else if (character == Marker.CLOSE_ROUND_BRACKET && level == Level.RULE && seekingValue && roundBracketLevel == 1) {
          buffer.push(character);
          isBufferEmpty = false;
          serializedBuffer = buffer.join("").trim();
          propertyToken.push([
            Token.PROPERTY_VALUE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          roundBracketLevel--;
          buffer = [];
          isBufferEmpty = true;
          isVariable = false;
        } else if (character == Marker.CLOSE_ROUND_BRACKET && level == Level.RULE && seekingValue) {
          buffer.push(character);
          isBufferEmpty = false;
          isVariable = false;
          roundBracketLevel--;
        } else if (character == Marker.FORWARD_SLASH && source[position.index + 1] != Marker.ASTERISK && level == Level.RULE && seekingValue && !isBufferEmpty) {
          serializedBuffer = buffer.join("").trim();
          propertyToken.push([
            Token.PROPERTY_VALUE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          propertyToken.push([
            Token.PROPERTY_VALUE,
            character,
            [[position.line, position.column, position.source]]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.FORWARD_SLASH && source[position.index + 1] != Marker.ASTERISK && level == Level.RULE && seekingValue) {
          propertyToken.push([
            Token.PROPERTY_VALUE,
            character,
            [[position.line, position.column, position.source]]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.COMMA && level == Level.RULE && seekingValue && !isBufferEmpty) {
          serializedBuffer = buffer.join("").trim();
          propertyToken.push([
            Token.PROPERTY_VALUE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          propertyToken.push([
            Token.PROPERTY_VALUE,
            character,
            [[position.line, position.column, position.source]]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.COMMA && level == Level.RULE && seekingValue) {
          propertyToken.push([
            Token.PROPERTY_VALUE,
            character,
            [[position.line, position.column, position.source]]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (character == Marker.CLOSE_SQUARE_BRACKET && propertyToken && propertyToken.length > 1 && !isBufferEmpty && isRepeatToken(buffer)) {
          buffer.push(character);
          serializedBuffer = buffer.join("").trim();
          propertyToken[propertyToken.length - 1][1] += serializedBuffer;
          buffer = [];
          isBufferEmpty = true;
        } else if ((isSpace || isNewLineNix && !isNewLineWin) && level == Level.RULE && seekingValue && propertyToken && !isBufferEmpty) {
          serializedBuffer = buffer.join("").trim();
          propertyToken.push([
            Token.PROPERTY_VALUE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (isNewLineWin && level == Level.RULE && seekingValue && propertyToken && buffer.length > 1) {
          serializedBuffer = buffer.join("").trim();
          propertyToken.push([
            Token.PROPERTY_VALUE,
            serializedBuffer,
            [originalMetadata(metadata, serializedBuffer, externalContext)]
          ]);
          buffer = [];
          isBufferEmpty = true;
        } else if (isNewLineWin && level == Level.RULE && seekingValue) {
          buffer = [];
          isBufferEmpty = true;
        } else if (isNewLineWin && buffer.length == 1) {
          buffer.pop();
          isBufferEmpty = buffer.length === 0;
        } else if (!isBufferEmpty || !isSpace && !isNewLineNix && !isNewLineWin && !isCarriageReturn) {
          buffer.push(character);
          isBufferEmpty = false;
        }
        wasEscaped = isEscaped;
        isEscaped = !wasEscaped && character == Marker.BACK_SLASH;
        wasCommentStart = isCommentStart;
        wasCommentEnd = isCommentEnd;
        position.line = isNewLineWin || isNewLineNix || isCarriageReturn ? position.line + 1 : position.line;
        position.column = isNewLineWin || isNewLineNix || isCarriageReturn ? 0 : position.column + 1;
      }
      if (seekingValue) {
        externalContext.warnings.push("Missing '}' at " + formatPosition([position.line, position.column, position.source]) + ".");
      }
      if (seekingValue && buffer.length > 0) {
        serializedBuffer = buffer.join("").trimRight().replace(TAIL_BROKEN_VALUE_PATTERN, "$1").trimRight();
        propertyToken.push([
          Token.PROPERTY_VALUE,
          serializedBuffer,
          [originalMetadata(metadata, serializedBuffer, externalContext)]
        ]);
        buffer = [];
      }
      if (buffer.length > 0) {
        externalContext.warnings.push("Invalid character(s) '" + buffer.join("") + "' at " + formatPosition(metadata) + ". Ignoring.");
      }
      return allTokens;
    }
    function isIgnoreStartComment(buffer) {
      return IGNORE_START_COMMENT_PATTERN.test(buffer.join("") + Marker.FORWARD_SLASH);
    }
    function isIgnoreEndComment(buffer) {
      return IGNORE_END_COMMENT_PATTERN.test(buffer.join("") + Marker.FORWARD_SLASH);
    }
    function originalMetadata(metadata, value, externalContext, selectorFallbacks) {
      var source = metadata[2];
      return externalContext.inputSourceMapTracker.isTracking(source) ? externalContext.inputSourceMapTracker.originalPositionFor(metadata, value.length, selectorFallbacks) : metadata;
    }
    function tokenTypeFrom(buffer) {
      var isAtRule = buffer[0] == Marker.AT || buffer[0] == Marker.UNDERSCORE;
      var ruleWord = buffer.join("").split(RULE_WORD_SEPARATOR_PATTERN)[0];
      if (isAtRule && BLOCK_RULES.indexOf(ruleWord) > -1) {
        return Token.NESTED_BLOCK;
      }
      if (isAtRule && AT_RULES.indexOf(ruleWord) > -1) {
        return Token.AT_RULE;
      }
      if (isAtRule) {
        return Token.AT_RULE_BLOCK;
      }
      return Token.RULE;
    }
    function tokenScopeFrom(tokenType) {
      if (tokenType == Token.RULE) {
        return Token.RULE_SCOPE;
      }
      if (tokenType == Token.NESTED_BLOCK) {
        return Token.NESTED_BLOCK_SCOPE;
      }
      if (tokenType == Token.AT_RULE_BLOCK) {
        return Token.AT_RULE_BLOCK_SCOPE;
      }
    }
    function isPageMarginBox(buffer) {
      var serializedBuffer = buffer.join("").trim();
      return PAGE_MARGIN_BOXES.indexOf(serializedBuffer) > -1 || EXTRA_PAGE_BOXES.indexOf(serializedBuffer) > -1;
    }
    function isRepeatToken(buffer) {
      return REPEAT_PATTERN.test(buffer.join("") + Marker.CLOSE_SQUARE_BRACKET);
    }
    module2.exports = tokenize2;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/read-sources.js
var require_read_sources = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/reader/read-sources.js"(exports, module2) {
    init_cjs_shims();
    var fs2 = require("fs");
    var path2 = require("path");
    var applySourceMaps = require_apply_source_maps();
    var extractImportUrlAndMedia = require_extract_import_url_and_media();
    var isAllowedResource = require_is_allowed_resource();
    var loadOriginalSources = require_load_original_sources();
    var normalizePath = require_normalize_path2();
    var rebase = require_rebase2();
    var rebaseLocalMap = require_rebase_local_map();
    var rebaseRemoteMap = require_rebase_remote_map();
    var restoreImport = require_restore_import();
    var tokenize2 = require_tokenize();
    var Token = require_token();
    var Marker = require_marker();
    var hasProtocol = require_has_protocol();
    var isImport = require_is_import();
    var isRemoteResource = require_is_remote_resource();
    var UNKNOWN_URI = "uri:unknown";
    var FILE_RESOURCE_PROTOCOL = "file://";
    function readSources(input, context, callback) {
      return doReadSources(input, context, function(tokens2) {
        return applySourceMaps(tokens2, context, function() {
          return loadOriginalSources(context, function() {
            return callback(tokens2);
          });
        });
      });
    }
    function doReadSources(input, context, callback) {
      if (typeof input == "string") {
        return fromString(input, context, callback);
      }
      if (Buffer.isBuffer(input)) {
        return fromString(input.toString(), context, callback);
      }
      if (Array.isArray(input)) {
        return fromArray(input, context, callback);
      }
      if (typeof input == "object") {
        return fromHash(input, context, callback);
      }
    }
    function fromString(input, context, callback) {
      context.source = void 0;
      context.sourcesContent[void 0] = input;
      context.stats.originalSize += input.length;
      return fromStyles(input, context, { inline: context.options.inline }, callback);
    }
    function fromArray(input, context, callback) {
      var inputAsImports = input.reduce(function(accumulator, uriOrHash) {
        if (typeof uriOrHash === "string") {
          return addStringSource(uriOrHash, accumulator);
        }
        return addHashSource(uriOrHash, context, accumulator);
      }, []);
      return fromStyles(inputAsImports.join(""), context, { inline: ["all"] }, callback);
    }
    function fromHash(input, context, callback) {
      var inputAsImports = addHashSource(input, context, []);
      return fromStyles(inputAsImports.join(""), context, { inline: ["all"] }, callback);
    }
    function addStringSource(input, imports) {
      imports.push(restoreAsImport(normalizeUri(input)));
      return imports;
    }
    function addHashSource(input, context, imports) {
      var uri;
      var normalizedUri;
      var source;
      for (uri in input) {
        source = input[uri];
        normalizedUri = normalizeUri(uri);
        imports.push(restoreAsImport(normalizedUri));
        context.sourcesContent[normalizedUri] = source.styles;
        if (source.sourceMap) {
          trackSourceMap(source.sourceMap, normalizedUri, context);
        }
      }
      return imports;
    }
    function normalizeUri(uri) {
      var currentPath = path2.resolve("");
      var absoluteUri;
      var relativeToCurrentPath;
      var normalizedUri;
      if (isRemoteResource(uri)) {
        return uri;
      }
      absoluteUri = path2.isAbsolute(uri) ? uri : path2.resolve(uri);
      relativeToCurrentPath = path2.relative(currentPath, absoluteUri);
      normalizedUri = normalizePath(relativeToCurrentPath);
      return normalizedUri;
    }
    function trackSourceMap(sourceMap, uri, context) {
      var parsedMap = typeof sourceMap == "string" ? JSON.parse(sourceMap) : sourceMap;
      var rebasedMap = isRemoteResource(uri) ? rebaseRemoteMap(parsedMap, uri) : rebaseLocalMap(parsedMap, uri || UNKNOWN_URI, context.options.rebaseTo);
      context.inputSourceMapTracker.track(uri, rebasedMap);
    }
    function restoreAsImport(uri) {
      return restoreImport("url(" + uri + ")", "") + Marker.SEMICOLON;
    }
    function fromStyles(styles, context, parentInlinerContext, callback) {
      var tokens2;
      var rebaseConfig = {};
      if (!context.source) {
        rebaseConfig.fromBase = path2.resolve("");
        rebaseConfig.toBase = context.options.rebaseTo;
      } else if (isRemoteResource(context.source)) {
        rebaseConfig.fromBase = context.source;
        rebaseConfig.toBase = context.source;
      } else if (path2.isAbsolute(context.source)) {
        rebaseConfig.fromBase = path2.dirname(context.source);
        rebaseConfig.toBase = context.options.rebaseTo;
      } else {
        rebaseConfig.fromBase = path2.dirname(path2.resolve(context.source));
        rebaseConfig.toBase = context.options.rebaseTo;
      }
      tokens2 = tokenize2(styles, context);
      tokens2 = rebase(tokens2, context.options.rebase, context.validator, rebaseConfig);
      return allowsAnyImports(parentInlinerContext.inline) ? inline(tokens2, context, parentInlinerContext, callback) : callback(tokens2);
    }
    function allowsAnyImports(inline2) {
      return !(inline2.length == 1 && inline2[0] == "none");
    }
    function inline(tokens2, externalContext, parentInlinerContext, callback) {
      var inlinerContext = {
        afterContent: false,
        callback,
        errors: externalContext.errors,
        externalContext,
        fetch: externalContext.options.fetch,
        inlinedStylesheets: parentInlinerContext.inlinedStylesheets || externalContext.inlinedStylesheets,
        inline: parentInlinerContext.inline,
        inlineRequest: externalContext.options.inlineRequest,
        inlineTimeout: externalContext.options.inlineTimeout,
        isRemote: parentInlinerContext.isRemote || false,
        localOnly: externalContext.localOnly,
        outputTokens: [],
        rebaseTo: externalContext.options.rebaseTo,
        sourceTokens: tokens2,
        warnings: externalContext.warnings
      };
      return doInlineImports(inlinerContext);
    }
    function doInlineImports(inlinerContext) {
      var token2;
      var i, l;
      for (i = 0, l = inlinerContext.sourceTokens.length; i < l; i++) {
        token2 = inlinerContext.sourceTokens[i];
        if (token2[0] == Token.AT_RULE && isImport(token2[1])) {
          inlinerContext.sourceTokens.splice(0, i);
          return inlineStylesheet(token2, inlinerContext);
        }
        if (token2[0] == Token.AT_RULE || token2[0] == Token.COMMENT) {
          inlinerContext.outputTokens.push(token2);
        } else {
          inlinerContext.outputTokens.push(token2);
          inlinerContext.afterContent = true;
        }
      }
      inlinerContext.sourceTokens = [];
      return inlinerContext.callback(inlinerContext.outputTokens);
    }
    function inlineStylesheet(token2, inlinerContext) {
      var uriAndMediaQuery = extractImportUrlAndMedia(token2[1]);
      var uri = uriAndMediaQuery[0];
      var mediaQuery = uriAndMediaQuery[1];
      var metadata = token2[2];
      return isRemoteResource(uri) ? inlineRemoteStylesheet(uri, mediaQuery, metadata, inlinerContext) : inlineLocalStylesheet(uri, mediaQuery, metadata, inlinerContext);
    }
    function inlineRemoteStylesheet(uri, mediaQuery, metadata, inlinerContext) {
      var isAllowed = isAllowedResource(uri, true, inlinerContext.inline);
      var originalUri = uri;
      var isLoaded = uri in inlinerContext.externalContext.sourcesContent;
      var isRuntimeResource = !hasProtocol(uri);
      if (inlinerContext.inlinedStylesheets.indexOf(uri) > -1) {
        inlinerContext.warnings.push('Ignoring remote @import of "' + uri + '" as it has already been imported.');
        inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
        return doInlineImports(inlinerContext);
      }
      if (inlinerContext.localOnly && inlinerContext.afterContent) {
        inlinerContext.warnings.push('Ignoring remote @import of "' + uri + '" as no callback given and after other content.');
        inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
        return doInlineImports(inlinerContext);
      }
      if (isRuntimeResource) {
        inlinerContext.warnings.push('Skipping remote @import of "' + uri + '" as no protocol given.');
        inlinerContext.outputTokens = inlinerContext.outputTokens.concat(inlinerContext.sourceTokens.slice(0, 1));
        inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
        return doInlineImports(inlinerContext);
      }
      if (inlinerContext.localOnly && !isLoaded) {
        inlinerContext.warnings.push('Skipping remote @import of "' + uri + '" as no callback given.');
        inlinerContext.outputTokens = inlinerContext.outputTokens.concat(inlinerContext.sourceTokens.slice(0, 1));
        inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
        return doInlineImports(inlinerContext);
      }
      if (!isAllowed && inlinerContext.afterContent) {
        inlinerContext.warnings.push('Ignoring remote @import of "' + uri + '" as resource is not allowed and after other content.');
        inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
        return doInlineImports(inlinerContext);
      }
      if (!isAllowed) {
        inlinerContext.warnings.push('Skipping remote @import of "' + uri + '" as resource is not allowed.');
        inlinerContext.outputTokens = inlinerContext.outputTokens.concat(inlinerContext.sourceTokens.slice(0, 1));
        inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
        return doInlineImports(inlinerContext);
      }
      inlinerContext.inlinedStylesheets.push(uri);
      function whenLoaded(error, importedStyles) {
        if (error) {
          inlinerContext.errors.push('Broken @import declaration of "' + uri + '" - ' + error);
          return process.nextTick(function() {
            inlinerContext.outputTokens = inlinerContext.outputTokens.concat(inlinerContext.sourceTokens.slice(0, 1));
            inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
            doInlineImports(inlinerContext);
          });
        }
        inlinerContext.inline = inlinerContext.externalContext.options.inline;
        inlinerContext.isRemote = true;
        inlinerContext.externalContext.source = originalUri;
        inlinerContext.externalContext.sourcesContent[uri] = importedStyles;
        inlinerContext.externalContext.stats.originalSize += importedStyles.length;
        return fromStyles(importedStyles, inlinerContext.externalContext, inlinerContext, function(importedTokens) {
          importedTokens = wrapInMedia(importedTokens, mediaQuery, metadata);
          inlinerContext.outputTokens = inlinerContext.outputTokens.concat(importedTokens);
          inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
          return doInlineImports(inlinerContext);
        });
      }
      return isLoaded ? whenLoaded(null, inlinerContext.externalContext.sourcesContent[uri]) : inlinerContext.fetch(uri, inlinerContext.inlineRequest, inlinerContext.inlineTimeout, whenLoaded);
    }
    function inlineLocalStylesheet(uri, mediaQuery, metadata, inlinerContext) {
      var protocolLessUri = uri.replace(FILE_RESOURCE_PROTOCOL, "");
      var currentPath = path2.resolve("");
      var absoluteUri = path2.isAbsolute(protocolLessUri) ? path2.resolve(currentPath, protocolLessUri[0] == "/" ? protocolLessUri.substring(1) : protocolLessUri) : path2.resolve(inlinerContext.rebaseTo, protocolLessUri);
      var relativeToCurrentPath = path2.relative(currentPath, absoluteUri);
      var importedStyles;
      var isAllowed = isAllowedResource(protocolLessUri, false, inlinerContext.inline);
      var normalizedPath = normalizePath(relativeToCurrentPath);
      var isLoaded = normalizedPath in inlinerContext.externalContext.sourcesContent;
      if (inlinerContext.inlinedStylesheets.indexOf(absoluteUri) > -1) {
        inlinerContext.warnings.push('Ignoring local @import of "' + protocolLessUri + '" as it has already been imported.');
      } else if (isAllowed && !isLoaded && (!fs2.existsSync(absoluteUri) || !fs2.statSync(absoluteUri).isFile())) {
        inlinerContext.errors.push('Ignoring local @import of "' + protocolLessUri + '" as resource is missing.');
      } else if (!isAllowed && inlinerContext.afterContent) {
        inlinerContext.warnings.push('Ignoring local @import of "' + protocolLessUri + '" as resource is not allowed and after other content.');
      } else if (inlinerContext.afterContent) {
        inlinerContext.warnings.push('Ignoring local @import of "' + protocolLessUri + '" as after other content.');
      } else if (!isAllowed) {
        inlinerContext.warnings.push('Skipping local @import of "' + protocolLessUri + '" as resource is not allowed.');
        inlinerContext.outputTokens = inlinerContext.outputTokens.concat(inlinerContext.sourceTokens.slice(0, 1));
      } else {
        importedStyles = isLoaded ? inlinerContext.externalContext.sourcesContent[normalizedPath] : fs2.readFileSync(absoluteUri, "utf-8");
        inlinerContext.inlinedStylesheets.push(absoluteUri);
        inlinerContext.inline = inlinerContext.externalContext.options.inline;
        inlinerContext.externalContext.source = normalizedPath;
        inlinerContext.externalContext.sourcesContent[normalizedPath] = importedStyles;
        inlinerContext.externalContext.stats.originalSize += importedStyles.length;
        return fromStyles(importedStyles, inlinerContext.externalContext, inlinerContext, function(importedTokens) {
          importedTokens = wrapInMedia(importedTokens, mediaQuery, metadata);
          inlinerContext.outputTokens = inlinerContext.outputTokens.concat(importedTokens);
          inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
          return doInlineImports(inlinerContext);
        });
      }
      inlinerContext.sourceTokens = inlinerContext.sourceTokens.slice(1);
      return doInlineImports(inlinerContext);
    }
    function wrapInMedia(tokens2, mediaQuery, metadata) {
      if (mediaQuery) {
        return [[Token.NESTED_BLOCK, [[Token.NESTED_BLOCK_SCOPE, "@media " + mediaQuery, metadata]], tokens2]];
      }
      return tokens2;
    }
    module2.exports = readSources;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/writer/simple.js
var require_simple = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/writer/simple.js"(exports, module2) {
    init_cjs_shims();
    var all = require_helpers().all;
    function store(serializeContext, token2) {
      var value = typeof token2 == "string" ? token2 : token2[1];
      var wrap2 = serializeContext.wrap;
      wrap2(serializeContext, value);
      track(serializeContext, value);
      serializeContext.output.push(value);
    }
    function wrap(serializeContext, value) {
      if (serializeContext.column + value.length > serializeContext.format.wrapAt) {
        track(serializeContext, serializeContext.format.breakWith);
        serializeContext.output.push(serializeContext.format.breakWith);
      }
    }
    function track(serializeContext, value) {
      var parts = value.split("\n");
      serializeContext.line += parts.length - 1;
      serializeContext.column = parts.length > 1 ? 0 : serializeContext.column + parts.pop().length;
    }
    function serializeStyles(tokens2, context) {
      var serializeContext = {
        column: 0,
        format: context.options.format,
        indentBy: 0,
        indentWith: "",
        line: 1,
        output: [],
        spaceAfterClosingBrace: context.options.compatibility.properties.spaceAfterClosingBrace,
        store,
        wrap: context.options.format.wrapAt ? wrap : function() {
        }
      };
      all(serializeContext, tokens2);
      return { styles: serializeContext.output.join("") };
    }
    module2.exports = serializeStyles;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/writer/source-maps.js
var require_source_maps = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/writer/source-maps.js"(exports, module2) {
    init_cjs_shims();
    var SourceMapGenerator = require_source_map().SourceMapGenerator;
    var all = require_helpers().all;
    var isRemoteResource = require_is_remote_resource();
    var isWindows = process.platform == "win32";
    var NIX_SEPARATOR_PATTERN = /\//g;
    var UNKNOWN_SOURCE = "$stdin";
    var WINDOWS_SEPARATOR = "\\";
    function store(serializeContext, element) {
      var fromString = typeof element == "string";
      var value = fromString ? element : element[1];
      var mappings = fromString ? null : element[2];
      var wrap2 = serializeContext.wrap;
      wrap2(serializeContext, value);
      track(serializeContext, value, mappings);
      serializeContext.output.push(value);
    }
    function wrap(serializeContext, value) {
      if (serializeContext.column + value.length > serializeContext.format.wrapAt) {
        track(serializeContext, serializeContext.format.breakWith, false);
        serializeContext.output.push(serializeContext.format.breakWith);
      }
    }
    function track(serializeContext, value, mappings) {
      var parts = value.split("\n");
      if (mappings) {
        trackAllMappings(serializeContext, mappings);
      }
      serializeContext.line += parts.length - 1;
      serializeContext.column = parts.length > 1 ? 0 : serializeContext.column + parts.pop().length;
    }
    function trackAllMappings(serializeContext, mappings) {
      for (var i = 0, l = mappings.length; i < l; i++) {
        trackMapping(serializeContext, mappings[i]);
      }
    }
    function trackMapping(serializeContext, mapping) {
      var line = mapping[0];
      var column = mapping[1];
      var originalSource = mapping[2];
      var source = originalSource;
      var storedSource = source || UNKNOWN_SOURCE;
      if (isWindows && source && !isRemoteResource(source)) {
        storedSource = source.replace(NIX_SEPARATOR_PATTERN, WINDOWS_SEPARATOR);
      }
      serializeContext.outputMap.addMapping({
        generated: {
          line: serializeContext.line,
          column: serializeContext.column
        },
        source: storedSource,
        original: {
          line,
          column
        }
      });
      if (serializeContext.inlineSources && originalSource in serializeContext.sourcesContent) {
        serializeContext.outputMap.setSourceContent(storedSource, serializeContext.sourcesContent[originalSource]);
      }
    }
    function serializeStylesAndSourceMap(tokens2, context) {
      var serializeContext = {
        column: 0,
        format: context.options.format,
        indentBy: 0,
        indentWith: "",
        inlineSources: context.options.sourceMapInlineSources,
        line: 1,
        output: [],
        outputMap: new SourceMapGenerator(),
        sourcesContent: context.sourcesContent,
        spaceAfterClosingBrace: context.options.compatibility.properties.spaceAfterClosingBrace,
        store,
        wrap: context.options.format.wrapAt ? wrap : function() {
        }
      };
      all(serializeContext, tokens2);
      return {
        sourceMap: serializeContext.outputMap,
        styles: serializeContext.output.join("")
      };
    }
    module2.exports = serializeStylesAndSourceMap;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/clean.js
var require_clean = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/lib/clean.js"(exports, module2) {
    init_cjs_shims();
    var level0Optimize = require_optimize();
    var level1Optimize = require_optimize2();
    var level2Optimize = require_optimize4();
    var validator = require_validator();
    var compatibilityFrom = require_compatibility();
    var fetchFrom = require_fetch();
    var formatFrom = require_format().formatFrom;
    var inlineFrom = require_inline();
    var inlineRequestFrom = require_inline_request();
    var inlineTimeoutFrom = require_inline_timeout();
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var optimizationLevelFrom = require_optimization_level().optimizationLevelFrom;
    var pluginsFrom = require_plugins();
    var rebaseFrom = require_rebase();
    var rebaseToFrom = require_rebase_to();
    var inputSourceMapTracker = require_input_source_map_tracker();
    var readSources = require_read_sources();
    var serializeStyles = require_simple();
    var serializeStylesAndSourceMap = require_source_maps();
    var CleanCSS2 = module2.exports = function CleanCSS3(options) {
      options = options || {};
      this.options = {
        batch: !!options.batch,
        compatibility: compatibilityFrom(options.compatibility),
        explicitRebaseTo: "rebaseTo" in options,
        fetch: fetchFrom(options.fetch),
        format: formatFrom(options.format),
        inline: inlineFrom(options.inline),
        inlineRequest: inlineRequestFrom(options.inlineRequest),
        inlineTimeout: inlineTimeoutFrom(options.inlineTimeout),
        level: optimizationLevelFrom(options.level),
        plugins: pluginsFrom(options.plugins),
        rebase: rebaseFrom(options.rebase, options.rebaseTo),
        rebaseTo: rebaseToFrom(options.rebaseTo),
        returnPromise: !!options.returnPromise,
        sourceMap: !!options.sourceMap,
        sourceMapInlineSources: !!options.sourceMapInlineSources
      };
    };
    CleanCSS2.process = function(input, opts) {
      var cleanCss;
      var optsTo = opts.to;
      delete opts.to;
      cleanCss = new CleanCSS2(Object.assign({
        returnPromise: true,
        rebaseTo: optsTo
      }, opts));
      return cleanCss.minify(input).then(function(output) {
        return { css: output.styles };
      });
    };
    CleanCSS2.prototype.minify = function(input, maybeSourceMap, maybeCallback) {
      var options = this.options;
      if (options.returnPromise) {
        return new Promise(function(resolve, reject) {
          minifyAll(input, options, maybeSourceMap, function(errors, output) {
            return errors ? reject(errors) : resolve(output);
          });
        });
      }
      return minifyAll(input, options, maybeSourceMap, maybeCallback);
    };
    function minifyAll(input, options, maybeSourceMap, maybeCallback) {
      if (options.batch && Array.isArray(input)) {
        return minifyInBatchesFromArray(input, options, maybeSourceMap, maybeCallback);
      }
      if (options.batch && typeof input == "object") {
        return minifyInBatchesFromHash(input, options, maybeSourceMap, maybeCallback);
      }
      return minify(input, options, maybeSourceMap, maybeCallback);
    }
    function minifyInBatchesFromArray(input, options, maybeSourceMap, maybeCallback) {
      var callback = typeof maybeCallback == "function" ? maybeCallback : typeof maybeSourceMap == "function" ? maybeSourceMap : null;
      var errors = [];
      var outputAsHash = {};
      var inputValue;
      var i, l;
      function whenHashBatchDone(innerErrors, output) {
        outputAsHash = Object.assign(outputAsHash, output);
        if (innerErrors !== null) {
          errors = errors.concat(innerErrors);
        }
      }
      for (i = 0, l = input.length; i < l; i++) {
        if (typeof input[i] == "object") {
          minifyInBatchesFromHash(input[i], options, whenHashBatchDone);
        } else {
          inputValue = input[i];
          outputAsHash[inputValue] = minify([inputValue], options);
          errors = errors.concat(outputAsHash[inputValue].errors);
        }
      }
      return callback ? callback(errors.length > 0 ? errors : null, outputAsHash) : outputAsHash;
    }
    function minifyInBatchesFromHash(input, options, maybeSourceMap, maybeCallback) {
      var callback = typeof maybeCallback == "function" ? maybeCallback : typeof maybeSourceMap == "function" ? maybeSourceMap : null;
      var errors = [];
      var outputAsHash = {};
      var inputKey;
      var inputValue;
      for (inputKey in input) {
        inputValue = input[inputKey];
        outputAsHash[inputKey] = minify(inputValue.styles, options, inputValue.sourceMap);
        errors = errors.concat(outputAsHash[inputKey].errors);
      }
      return callback ? callback(errors.length > 0 ? errors : null, outputAsHash) : outputAsHash;
    }
    function minify(input, options, maybeSourceMap, maybeCallback) {
      var sourceMap = typeof maybeSourceMap != "function" ? maybeSourceMap : null;
      var callback = typeof maybeCallback == "function" ? maybeCallback : typeof maybeSourceMap == "function" ? maybeSourceMap : null;
      var context = {
        stats: {
          efficiency: 0,
          minifiedSize: 0,
          originalSize: 0,
          startedAt: Date.now(),
          timeSpent: 0
        },
        cache: { specificity: {} },
        errors: [],
        inlinedStylesheets: [],
        inputSourceMapTracker: inputSourceMapTracker(),
        localOnly: !callback,
        options,
        source: null,
        sourcesContent: {},
        validator: validator(options.compatibility),
        warnings: []
      };
      var implicitRebaseToWarning;
      if (sourceMap) {
        context.inputSourceMapTracker.track(void 0, sourceMap);
      }
      if (options.rebase && !options.explicitRebaseTo) {
        implicitRebaseToWarning = "You have set `rebase: true` without giving `rebaseTo` option, which, in this case, defaults to the current working directory. You are then warned this can lead to unexpected URL rebasing (aka here be dragons)! If you are OK with the clean-css output, then you can get rid of this warning by giving clean-css a `rebaseTo: process.cwd()` option.";
        context.warnings.push(implicitRebaseToWarning);
      }
      return runner(context.localOnly)(function() {
        return readSources(input, context, function(tokens2) {
          var serialize = context.options.sourceMap ? serializeStylesAndSourceMap : serializeStyles;
          var optimizedTokens = optimize(tokens2, context);
          var optimizedStyles = serialize(optimizedTokens, context);
          var output = withMetadata(optimizedStyles, context);
          return callback ? callback(context.errors.length > 0 ? context.errors : null, output) : output;
        });
      });
    }
    function runner(localOnly) {
      return localOnly ? function(callback) {
        return callback();
      } : process.nextTick;
    }
    function optimize(tokens2, context) {
      var optimized = level0Optimize(tokens2, context);
      optimized = OptimizationLevel.One in context.options.level ? level1Optimize(tokens2, context) : tokens2;
      optimized = OptimizationLevel.Two in context.options.level ? level2Optimize(tokens2, context, true) : optimized;
      return optimized;
    }
    function withMetadata(output, context) {
      output.stats = calculateStatsFrom(output.styles, context);
      output.errors = context.errors;
      output.inlinedStylesheets = context.inlinedStylesheets;
      output.warnings = context.warnings;
      return output;
    }
    function calculateStatsFrom(styles, context) {
      var finishedAt = Date.now();
      var timeSpent = finishedAt - context.stats.startedAt;
      delete context.stats.startedAt;
      context.stats.timeSpent = timeSpent;
      context.stats.efficiency = 1 - styles.length / context.stats.originalSize;
      context.stats.minifiedSize = styles.length;
      return context.stats;
    }
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/index.js
var require_clean_css = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.1/node_modules/clean-css/index.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = require_clean();
  }
});

// ../../node_modules/.pnpm/fs.realpath@1.0.0/node_modules/fs.realpath/old.js
var require_old = __commonJS({
  "../../node_modules/.pnpm/fs.realpath@1.0.0/node_modules/fs.realpath/old.js"(exports) {
    init_cjs_shims();
    var pathModule = require("path");
    var isWindows = process.platform === "win32";
    var fs2 = require("fs");
    var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
    function rethrow() {
      var callback;
      if (DEBUG) {
        var backtrace = new Error();
        callback = debugCallback;
      } else
        callback = missingCallback;
      return callback;
      function debugCallback(err) {
        if (err) {
          backtrace.message = err.message;
          err = backtrace;
          missingCallback(err);
        }
      }
      function missingCallback(err) {
        if (err) {
          if (process.throwDeprecation)
            throw err;
          else if (!process.noDeprecation) {
            var msg = "fs: missing callback " + (err.stack || err.message);
            if (process.traceDeprecation)
              console.trace(msg);
            else
              console.error(msg);
          }
        }
      }
    }
    function maybeCallback(cb) {
      return typeof cb === "function" ? cb : rethrow();
    }
    var normalize = pathModule.normalize;
    if (isWindows) {
      nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
    } else {
      nextPartRe = /(.*?)(?:[\/]+|$)/g;
    }
    var nextPartRe;
    if (isWindows) {
      splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    } else {
      splitRootRe = /^[\/]*/;
    }
    var splitRootRe;
    exports.realpathSync = function realpathSync(p, cache) {
      p = pathModule.resolve(p);
      if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return cache[p];
      }
      var original = p, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        if (isWindows && !knownHard[base]) {
          fs2.lstatSync(base);
          knownHard[base] = true;
        }
      }
      while (pos < p.length) {
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache && cache[base] === base) {
          continue;
        }
        var resolvedLink;
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
          resolvedLink = cache[base];
        } else {
          var stat = fs2.lstatSync(base);
          if (!stat.isSymbolicLink()) {
            knownHard[base] = true;
            if (cache)
              cache[base] = base;
            continue;
          }
          var linkTarget = null;
          if (!isWindows) {
            var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
            if (seenLinks.hasOwnProperty(id)) {
              linkTarget = seenLinks[id];
            }
          }
          if (linkTarget === null) {
            fs2.statSync(base);
            linkTarget = fs2.readlinkSync(base);
          }
          resolvedLink = pathModule.resolve(previous, linkTarget);
          if (cache)
            cache[base] = resolvedLink;
          if (!isWindows)
            seenLinks[id] = linkTarget;
        }
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
      }
      if (cache)
        cache[original] = p;
      return p;
    };
    exports.realpath = function realpath(p, cache, cb) {
      if (typeof cb !== "function") {
        cb = maybeCallback(cache);
        cache = null;
      }
      p = pathModule.resolve(p);
      if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return process.nextTick(cb.bind(null, null, cache[p]));
      }
      var original = p, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        if (isWindows && !knownHard[base]) {
          fs2.lstat(base, function(err) {
            if (err)
              return cb(err);
            knownHard[base] = true;
            LOOP();
          });
        } else {
          process.nextTick(LOOP);
        }
      }
      function LOOP() {
        if (pos >= p.length) {
          if (cache)
            cache[original] = p;
          return cb(null, p);
        }
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache && cache[base] === base) {
          return process.nextTick(LOOP);
        }
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
          return gotResolvedLink(cache[base]);
        }
        return fs2.lstat(base, gotStat);
      }
      function gotStat(err, stat) {
        if (err)
          return cb(err);
        if (!stat.isSymbolicLink()) {
          knownHard[base] = true;
          if (cache)
            cache[base] = base;
          return process.nextTick(LOOP);
        }
        if (!isWindows) {
          var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
          if (seenLinks.hasOwnProperty(id)) {
            return gotTarget(null, seenLinks[id], base);
          }
        }
        fs2.stat(base, function(err2) {
          if (err2)
            return cb(err2);
          fs2.readlink(base, function(err3, target) {
            if (!isWindows)
              seenLinks[id] = target;
            gotTarget(err3, target);
          });
        });
      }
      function gotTarget(err, target, base2) {
        if (err)
          return cb(err);
        var resolvedLink = pathModule.resolve(previous, target);
        if (cache)
          cache[base2] = resolvedLink;
        gotResolvedLink(resolvedLink);
      }
      function gotResolvedLink(resolvedLink) {
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
      }
    };
  }
});

// ../../node_modules/.pnpm/fs.realpath@1.0.0/node_modules/fs.realpath/index.js
var require_fs = __commonJS({
  "../../node_modules/.pnpm/fs.realpath@1.0.0/node_modules/fs.realpath/index.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = realpath;
    realpath.realpath = realpath;
    realpath.sync = realpathSync;
    realpath.realpathSync = realpathSync;
    realpath.monkeypatch = monkeypatch;
    realpath.unmonkeypatch = unmonkeypatch;
    var fs2 = require("fs");
    var origRealpath = fs2.realpath;
    var origRealpathSync = fs2.realpathSync;
    var version = process.version;
    var ok = /^v[0-5]\./.test(version);
    var old = require_old();
    function newError(er) {
      return er && er.syscall === "realpath" && (er.code === "ELOOP" || er.code === "ENOMEM" || er.code === "ENAMETOOLONG");
    }
    function realpath(p, cache, cb) {
      if (ok) {
        return origRealpath(p, cache, cb);
      }
      if (typeof cache === "function") {
        cb = cache;
        cache = null;
      }
      origRealpath(p, cache, function(er, result) {
        if (newError(er)) {
          old.realpath(p, cache, cb);
        } else {
          cb(er, result);
        }
      });
    }
    function realpathSync(p, cache) {
      if (ok) {
        return origRealpathSync(p, cache);
      }
      try {
        return origRealpathSync(p, cache);
      } catch (er) {
        if (newError(er)) {
          return old.realpathSync(p, cache);
        } else {
          throw er;
        }
      }
    }
    function monkeypatch() {
      fs2.realpath = realpath;
      fs2.realpathSync = realpathSync;
    }
    function unmonkeypatch() {
      fs2.realpath = origRealpath;
      fs2.realpathSync = origRealpathSync;
    }
  }
});

// ../../node_modules/.pnpm/minimatch@5.1.0/node_modules/minimatch/lib/path.js
var require_path = __commonJS({
  "../../node_modules/.pnpm/minimatch@5.1.0/node_modules/minimatch/lib/path.js"(exports, module2) {
    init_cjs_shims();
    var isWindows = typeof process === "object" && process && process.platform === "win32";
    module2.exports = isWindows ? { sep: "\\" } : { sep: "/" };
  }
});

// ../../node_modules/.pnpm/balanced-match@1.0.2/node_modules/balanced-match/index.js
var require_balanced_match = __commonJS({
  "../../node_modules/.pnpm/balanced-match@1.0.2/node_modules/balanced-match/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = balanced;
    function balanced(a, b, str) {
      if (a instanceof RegExp)
        a = maybeMatch(a, str);
      if (b instanceof RegExp)
        b = maybeMatch(b, str);
      var r = range(a, b, str);
      return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
      };
    }
    function maybeMatch(reg, str) {
      var m = str.match(reg);
      return m ? m[0] : null;
    }
    balanced.range = range;
    function range(a, b, str) {
      var begs, beg, left, right, result;
      var ai = str.indexOf(a);
      var bi = str.indexOf(b, ai + 1);
      var i = ai;
      if (ai >= 0 && bi > 0) {
        if (a === b) {
          return [ai, bi];
        }
        begs = [];
        left = str.length;
        while (i >= 0 && !result) {
          if (i == ai) {
            begs.push(i);
            ai = str.indexOf(a, i + 1);
          } else if (begs.length == 1) {
            result = [begs.pop(), bi];
          } else {
            beg = begs.pop();
            if (beg < left) {
              left = beg;
              right = bi;
            }
            bi = str.indexOf(b, i + 1);
          }
          i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
          result = [left, right];
        }
      }
      return result;
    }
  }
});

// ../../node_modules/.pnpm/brace-expansion@2.0.1/node_modules/brace-expansion/index.js
var require_brace_expansion = __commonJS({
  "../../node_modules/.pnpm/brace-expansion@2.0.1/node_modules/brace-expansion/index.js"(exports, module2) {
    init_cjs_shims();
    var balanced = require_balanced_match();
    module2.exports = expandTop;
    var escSlash = "\0SLASH" + Math.random() + "\0";
    var escOpen = "\0OPEN" + Math.random() + "\0";
    var escClose = "\0CLOSE" + Math.random() + "\0";
    var escComma = "\0COMMA" + Math.random() + "\0";
    var escPeriod = "\0PERIOD" + Math.random() + "\0";
    function numeric(str) {
      return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
    }
    function escapeBraces(str) {
      return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
    }
    function unescapeBraces(str) {
      return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
    }
    function parseCommaParts(str) {
      if (!str)
        return [""];
      var parts = [];
      var m = balanced("{", "}", str);
      if (!m)
        return str.split(",");
      var pre = m.pre;
      var body = m.body;
      var post = m.post;
      var p = pre.split(",");
      p[p.length - 1] += "{" + body + "}";
      var postParts = parseCommaParts(post);
      if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
      }
      parts.push.apply(parts, p);
      return parts;
    }
    function expandTop(str) {
      if (!str)
        return [];
      if (str.substr(0, 2) === "{}") {
        str = "\\{\\}" + str.substr(2);
      }
      return expand(escapeBraces(str), true).map(unescapeBraces);
    }
    function embrace(str) {
      return "{" + str + "}";
    }
    function isPadded(el) {
      return /^-?0\d/.test(el);
    }
    function lte(i, y) {
      return i <= y;
    }
    function gte(i, y) {
      return i >= y;
    }
    function expand(str, isTop) {
      var expansions = [];
      var m = balanced("{", "}", str);
      if (!m)
        return [str];
      var pre = m.pre;
      var post = m.post.length ? expand(m.post, false) : [""];
      if (/\$$/.test(m.pre)) {
        for (var k = 0; k < post.length; k++) {
          var expansion = pre + "{" + m.body + "}" + post[k];
          expansions.push(expansion);
        }
      } else {
        var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
        var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
        var isSequence = isNumericSequence || isAlphaSequence;
        var isOptions = m.body.indexOf(",") >= 0;
        if (!isSequence && !isOptions) {
          if (m.post.match(/,.*\}/)) {
            str = m.pre + "{" + m.body + escClose + m.post;
            return expand(str);
          }
          return [str];
        }
        var n;
        if (isSequence) {
          n = m.body.split(/\.\./);
        } else {
          n = parseCommaParts(m.body);
          if (n.length === 1) {
            n = expand(n[0], false).map(embrace);
            if (n.length === 1) {
              return post.map(function(p) {
                return m.pre + n[0] + p;
              });
            }
          }
        }
        var N;
        if (isSequence) {
          var x = numeric(n[0]);
          var y = numeric(n[1]);
          var width = Math.max(n[0].length, n[1].length);
          var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
          var test = lte;
          var reverse = y < x;
          if (reverse) {
            incr *= -1;
            test = gte;
          }
          var pad = n.some(isPadded);
          N = [];
          for (var i = x; test(i, y); i += incr) {
            var c;
            if (isAlphaSequence) {
              c = String.fromCharCode(i);
              if (c === "\\")
                c = "";
            } else {
              c = String(i);
              if (pad) {
                var need = width - c.length;
                if (need > 0) {
                  var z = new Array(need + 1).join("0");
                  if (i < 0)
                    c = "-" + z + c.slice(1);
                  else
                    c = z + c;
                }
              }
            }
            N.push(c);
          }
        } else {
          N = [];
          for (var j = 0; j < n.length; j++) {
            N.push.apply(N, expand(n[j], false));
          }
        }
        for (var j = 0; j < N.length; j++) {
          for (var k = 0; k < post.length; k++) {
            var expansion = pre + N[j] + post[k];
            if (!isTop || isSequence || expansion)
              expansions.push(expansion);
          }
        }
      }
      return expansions;
    }
  }
});

// ../../node_modules/.pnpm/minimatch@5.1.0/node_modules/minimatch/minimatch.js
var require_minimatch = __commonJS({
  "../../node_modules/.pnpm/minimatch@5.1.0/node_modules/minimatch/minimatch.js"(exports, module2) {
    init_cjs_shims();
    var minimatch = module2.exports = (p, pattern, options = {}) => {
      assertValidPattern(pattern);
      if (!options.nocomment && pattern.charAt(0) === "#") {
        return false;
      }
      return new Minimatch(pattern, options).match(p);
    };
    module2.exports = minimatch;
    var path2 = require_path();
    minimatch.sep = path2.sep;
    var GLOBSTAR = Symbol("globstar **");
    minimatch.GLOBSTAR = GLOBSTAR;
    var expand = require_brace_expansion();
    var plTypes = {
      "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
      "?": { open: "(?:", close: ")?" },
      "+": { open: "(?:", close: ")+" },
      "*": { open: "(?:", close: ")*" },
      "@": { open: "(?:", close: ")" }
    };
    var qmark = "[^/]";
    var star = qmark + "*?";
    var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
    var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
    var charSet = (s) => s.split("").reduce((set, c) => {
      set[c] = true;
      return set;
    }, {});
    var reSpecials = charSet("().*{}+?[]^$\\!");
    var addPatternStartSet = charSet("[.(");
    var slashSplit = /\/+/;
    minimatch.filter = (pattern, options = {}) => (p, i, list) => minimatch(p, pattern, options);
    var ext = (a, b = {}) => {
      const t = {};
      Object.keys(a).forEach((k) => t[k] = a[k]);
      Object.keys(b).forEach((k) => t[k] = b[k]);
      return t;
    };
    minimatch.defaults = (def) => {
      if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return minimatch;
      }
      const orig = minimatch;
      const m = (p, pattern, options) => orig(p, pattern, ext(def, options));
      m.Minimatch = class Minimatch extends orig.Minimatch {
        constructor(pattern, options) {
          super(pattern, ext(def, options));
        }
      };
      m.Minimatch.defaults = (options) => orig.defaults(ext(def, options)).Minimatch;
      m.filter = (pattern, options) => orig.filter(pattern, ext(def, options));
      m.defaults = (options) => orig.defaults(ext(def, options));
      m.makeRe = (pattern, options) => orig.makeRe(pattern, ext(def, options));
      m.braceExpand = (pattern, options) => orig.braceExpand(pattern, ext(def, options));
      m.match = (list, pattern, options) => orig.match(list, pattern, ext(def, options));
      return m;
    };
    minimatch.braceExpand = (pattern, options) => braceExpand(pattern, options);
    var braceExpand = (pattern, options = {}) => {
      assertValidPattern(pattern);
      if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        return [pattern];
      }
      return expand(pattern);
    };
    var MAX_PATTERN_LENGTH = 1024 * 64;
    var assertValidPattern = (pattern) => {
      if (typeof pattern !== "string") {
        throw new TypeError("invalid pattern");
      }
      if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError("pattern is too long");
      }
    };
    var SUBPARSE = Symbol("subparse");
    minimatch.makeRe = (pattern, options) => new Minimatch(pattern, options || {}).makeRe();
    minimatch.match = (list, pattern, options = {}) => {
      const mm = new Minimatch(pattern, options);
      list = list.filter((f) => mm.match(f));
      if (mm.options.nonull && !list.length) {
        list.push(pattern);
      }
      return list;
    };
    var globUnescape = (s) => s.replace(/\\(.)/g, "$1");
    var regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    var Minimatch = class {
      constructor(pattern, options) {
        assertValidPattern(pattern);
        if (!options)
          options = {};
        this.options = options;
        this.set = [];
        this.pattern = pattern;
        this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
          this.pattern = this.pattern.replace(/\\/g, "/");
        }
        this.regexp = null;
        this.negate = false;
        this.comment = false;
        this.empty = false;
        this.partial = !!options.partial;
        this.make();
      }
      debug() {
      }
      make() {
        const pattern = this.pattern;
        const options = this.options;
        if (!options.nocomment && pattern.charAt(0) === "#") {
          this.comment = true;
          return;
        }
        if (!pattern) {
          this.empty = true;
          return;
        }
        this.parseNegate();
        let set = this.globSet = this.braceExpand();
        if (options.debug)
          this.debug = (...args) => console.error(...args);
        this.debug(this.pattern, set);
        set = this.globParts = set.map((s) => s.split(slashSplit));
        this.debug(this.pattern, set);
        set = set.map((s, si, set2) => s.map(this.parse, this));
        this.debug(this.pattern, set);
        set = set.filter((s) => s.indexOf(false) === -1);
        this.debug(this.pattern, set);
        this.set = set;
      }
      parseNegate() {
        if (this.options.nonegate)
          return;
        const pattern = this.pattern;
        let negate = false;
        let negateOffset = 0;
        for (let i = 0; i < pattern.length && pattern.charAt(i) === "!"; i++) {
          negate = !negate;
          negateOffset++;
        }
        if (negateOffset)
          this.pattern = pattern.substr(negateOffset);
        this.negate = negate;
      }
      matchOne(file, pattern, partial) {
        var options = this.options;
        this.debug("matchOne", { "this": this, file, pattern });
        this.debug("matchOne", file.length, pattern.length);
        for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
          this.debug("matchOne loop");
          var p = pattern[pi];
          var f = file[fi];
          this.debug(pattern, p, f);
          if (p === false)
            return false;
          if (p === GLOBSTAR) {
            this.debug("GLOBSTAR", [pattern, p, f]);
            var fr = fi;
            var pr = pi + 1;
            if (pr === pl) {
              this.debug("** at the end");
              for (; fi < fl; fi++) {
                if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
                  return false;
              }
              return true;
            }
            while (fr < fl) {
              var swallowee = file[fr];
              this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
              if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                this.debug("globstar found match!", fr, fl, swallowee);
                return true;
              } else {
                if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                  this.debug("dot detected!", file, fr, pattern, pr);
                  break;
                }
                this.debug("globstar swallow a segment, and continue");
                fr++;
              }
            }
            if (partial) {
              this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
              if (fr === fl)
                return true;
            }
            return false;
          }
          var hit;
          if (typeof p === "string") {
            hit = f === p;
            this.debug("string match", p, f, hit);
          } else {
            hit = f.match(p);
            this.debug("pattern match", p, f, hit);
          }
          if (!hit)
            return false;
        }
        if (fi === fl && pi === pl) {
          return true;
        } else if (fi === fl) {
          return partial;
        } else if (pi === pl) {
          return fi === fl - 1 && file[fi] === "";
        }
        throw new Error("wtf?");
      }
      braceExpand() {
        return braceExpand(this.pattern, this.options);
      }
      parse(pattern, isSub) {
        assertValidPattern(pattern);
        const options = this.options;
        if (pattern === "**") {
          if (!options.noglobstar)
            return GLOBSTAR;
          else
            pattern = "*";
        }
        if (pattern === "")
          return "";
        let re = "";
        let hasMagic = !!options.nocase;
        let escaping = false;
        const patternListStack = [];
        const negativeLists = [];
        let stateChar;
        let inClass = false;
        let reClassStart = -1;
        let classStart = -1;
        let cs;
        let pl;
        let sp;
        const patternStart = pattern.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
        const clearStateChar = () => {
          if (stateChar) {
            switch (stateChar) {
              case "*":
                re += star;
                hasMagic = true;
                break;
              case "?":
                re += qmark;
                hasMagic = true;
                break;
              default:
                re += "\\" + stateChar;
                break;
            }
            this.debug("clearStateChar %j %j", stateChar, re);
            stateChar = false;
          }
        };
        for (let i = 0, c; i < pattern.length && (c = pattern.charAt(i)); i++) {
          this.debug("%s	%s %s %j", pattern, i, re, c);
          if (escaping) {
            if (c === "/") {
              return false;
            }
            if (reSpecials[c]) {
              re += "\\";
            }
            re += c;
            escaping = false;
            continue;
          }
          switch (c) {
            case "/": {
              return false;
            }
            case "\\":
              clearStateChar();
              escaping = true;
              continue;
            case "?":
            case "*":
            case "+":
            case "@":
            case "!":
              this.debug("%s	%s %s %j <-- stateChar", pattern, i, re, c);
              if (inClass) {
                this.debug("  in class");
                if (c === "!" && i === classStart + 1)
                  c = "^";
                re += c;
                continue;
              }
              this.debug("call clearStateChar %j", stateChar);
              clearStateChar();
              stateChar = c;
              if (options.noext)
                clearStateChar();
              continue;
            case "(":
              if (inClass) {
                re += "(";
                continue;
              }
              if (!stateChar) {
                re += "\\(";
                continue;
              }
              patternListStack.push({
                type: stateChar,
                start: i - 1,
                reStart: re.length,
                open: plTypes[stateChar].open,
                close: plTypes[stateChar].close
              });
              re += stateChar === "!" ? "(?:(?!(?:" : "(?:";
              this.debug("plType %j %j", stateChar, re);
              stateChar = false;
              continue;
            case ")":
              if (inClass || !patternListStack.length) {
                re += "\\)";
                continue;
              }
              clearStateChar();
              hasMagic = true;
              pl = patternListStack.pop();
              re += pl.close;
              if (pl.type === "!") {
                negativeLists.push(pl);
              }
              pl.reEnd = re.length;
              continue;
            case "|":
              if (inClass || !patternListStack.length) {
                re += "\\|";
                continue;
              }
              clearStateChar();
              re += "|";
              continue;
            case "[":
              clearStateChar();
              if (inClass) {
                re += "\\" + c;
                continue;
              }
              inClass = true;
              classStart = i;
              reClassStart = re.length;
              re += c;
              continue;
            case "]":
              if (i === classStart + 1 || !inClass) {
                re += "\\" + c;
                continue;
              }
              cs = pattern.substring(classStart + 1, i);
              try {
                RegExp("[" + cs + "]");
              } catch (er) {
                sp = this.parse(cs, SUBPARSE);
                re = re.substr(0, reClassStart) + "\\[" + sp[0] + "\\]";
                hasMagic = hasMagic || sp[1];
                inClass = false;
                continue;
              }
              hasMagic = true;
              inClass = false;
              re += c;
              continue;
            default:
              clearStateChar();
              if (reSpecials[c] && !(c === "^" && inClass)) {
                re += "\\";
              }
              re += c;
              break;
          }
        }
        if (inClass) {
          cs = pattern.substr(classStart + 1);
          sp = this.parse(cs, SUBPARSE);
          re = re.substr(0, reClassStart) + "\\[" + sp[0];
          hasMagic = hasMagic || sp[1];
        }
        for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
          let tail;
          tail = re.slice(pl.reStart + pl.open.length);
          this.debug("setting tail", re, pl);
          tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_, $1, $2) => {
            if (!$2) {
              $2 = "\\";
            }
            return $1 + $1 + $2 + "|";
          });
          this.debug("tail=%j\n   %s", tail, tail, pl, re);
          const t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
          hasMagic = true;
          re = re.slice(0, pl.reStart) + t + "\\(" + tail;
        }
        clearStateChar();
        if (escaping) {
          re += "\\\\";
        }
        const addPatternStart = addPatternStartSet[re.charAt(0)];
        for (let n = negativeLists.length - 1; n > -1; n--) {
          const nl = negativeLists[n];
          const nlBefore = re.slice(0, nl.reStart);
          const nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
          let nlAfter = re.slice(nl.reEnd);
          const nlLast = re.slice(nl.reEnd - 8, nl.reEnd) + nlAfter;
          const openParensBefore = nlBefore.split("(").length - 1;
          let cleanAfter = nlAfter;
          for (let i = 0; i < openParensBefore; i++) {
            cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
          }
          nlAfter = cleanAfter;
          const dollar = nlAfter === "" && isSub !== SUBPARSE ? "$" : "";
          re = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        }
        if (re !== "" && hasMagic) {
          re = "(?=.)" + re;
        }
        if (addPatternStart) {
          re = patternStart + re;
        }
        if (isSub === SUBPARSE) {
          return [re, hasMagic];
        }
        if (!hasMagic) {
          return globUnescape(pattern);
        }
        const flags = options.nocase ? "i" : "";
        try {
          return Object.assign(new RegExp("^" + re + "$", flags), {
            _glob: pattern,
            _src: re
          });
        } catch (er) {
          return new RegExp("$.");
        }
      }
      makeRe() {
        if (this.regexp || this.regexp === false)
          return this.regexp;
        const set = this.set;
        if (!set.length) {
          this.regexp = false;
          return this.regexp;
        }
        const options = this.options;
        const twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
        const flags = options.nocase ? "i" : "";
        let re = set.map((pattern) => {
          pattern = pattern.map((p) => typeof p === "string" ? regExpEscape(p) : p === GLOBSTAR ? GLOBSTAR : p._src).reduce((set2, p) => {
            if (!(set2[set2.length - 1] === GLOBSTAR && p === GLOBSTAR)) {
              set2.push(p);
            }
            return set2;
          }, []);
          pattern.forEach((p, i) => {
            if (p !== GLOBSTAR || pattern[i - 1] === GLOBSTAR) {
              return;
            }
            if (i === 0) {
              if (pattern.length > 1) {
                pattern[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + pattern[i + 1];
              } else {
                pattern[i] = twoStar;
              }
            } else if (i === pattern.length - 1) {
              pattern[i - 1] += "(?:\\/|" + twoStar + ")?";
            } else {
              pattern[i - 1] += "(?:\\/|\\/" + twoStar + "\\/)" + pattern[i + 1];
              pattern[i + 1] = GLOBSTAR;
            }
          });
          return pattern.filter((p) => p !== GLOBSTAR).join("/");
        }).join("|");
        re = "^(?:" + re + ")$";
        if (this.negate)
          re = "^(?!" + re + ").*$";
        try {
          this.regexp = new RegExp(re, flags);
        } catch (ex) {
          this.regexp = false;
        }
        return this.regexp;
      }
      match(f, partial = this.partial) {
        this.debug("match", f, this.pattern);
        if (this.comment)
          return false;
        if (this.empty)
          return f === "";
        if (f === "/" && partial)
          return true;
        const options = this.options;
        if (path2.sep !== "/") {
          f = f.split(path2.sep).join("/");
        }
        f = f.split(slashSplit);
        this.debug(this.pattern, "split", f);
        const set = this.set;
        this.debug(this.pattern, "set", set);
        let filename;
        for (let i = f.length - 1; i >= 0; i--) {
          filename = f[i];
          if (filename)
            break;
        }
        for (let i = 0; i < set.length; i++) {
          const pattern = set[i];
          let file = f;
          if (options.matchBase && pattern.length === 1) {
            file = [filename];
          }
          const hit = this.matchOne(file, pattern, partial);
          if (hit) {
            if (options.flipNegate)
              return true;
            return !this.negate;
          }
        }
        if (options.flipNegate)
          return false;
        return this.negate;
      }
      static defaults(def) {
        return minimatch.defaults(def).Minimatch;
      }
    };
    minimatch.Minimatch = Minimatch;
  }
});

// ../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js"(exports, module2) {
    init_cjs_shims();
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// ../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits.js"(exports, module2) {
    init_cjs_shims();
    try {
      util = require("util");
      if (typeof util.inherits !== "function")
        throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// ../../node_modules/.pnpm/glob@8.0.3/node_modules/glob/common.js
var require_common = __commonJS({
  "../../node_modules/.pnpm/glob@8.0.3/node_modules/glob/common.js"(exports) {
    init_cjs_shims();
    exports.setopts = setopts;
    exports.ownProp = ownProp;
    exports.makeAbs = makeAbs;
    exports.finish = finish;
    exports.mark = mark;
    exports.isIgnored = isIgnored;
    exports.childrenIgnored = childrenIgnored;
    function ownProp(obj, field) {
      return Object.prototype.hasOwnProperty.call(obj, field);
    }
    var fs2 = require("fs");
    var path2 = require("path");
    var minimatch = require_minimatch();
    var isAbsolute = require("path").isAbsolute;
    var Minimatch = minimatch.Minimatch;
    function alphasort(a, b) {
      return a.localeCompare(b, "en");
    }
    function setupIgnores(self, options) {
      self.ignore = options.ignore || [];
      if (!Array.isArray(self.ignore))
        self.ignore = [self.ignore];
      if (self.ignore.length) {
        self.ignore = self.ignore.map(ignoreMap);
      }
    }
    function ignoreMap(pattern) {
      var gmatcher = null;
      if (pattern.slice(-3) === "/**") {
        var gpattern = pattern.replace(/(\/\*\*)+$/, "");
        gmatcher = new Minimatch(gpattern, { dot: true });
      }
      return {
        matcher: new Minimatch(pattern, { dot: true }),
        gmatcher
      };
    }
    function setopts(self, pattern, options) {
      if (!options)
        options = {};
      if (options.matchBase && pattern.indexOf("/") === -1) {
        if (options.noglobstar) {
          throw new Error("base matching requires globstar");
        }
        pattern = "**/" + pattern;
      }
      self.silent = !!options.silent;
      self.pattern = pattern;
      self.strict = options.strict !== false;
      self.realpath = !!options.realpath;
      self.realpathCache = options.realpathCache || Object.create(null);
      self.follow = !!options.follow;
      self.dot = !!options.dot;
      self.mark = !!options.mark;
      self.nodir = !!options.nodir;
      if (self.nodir)
        self.mark = true;
      self.sync = !!options.sync;
      self.nounique = !!options.nounique;
      self.nonull = !!options.nonull;
      self.nosort = !!options.nosort;
      self.nocase = !!options.nocase;
      self.stat = !!options.stat;
      self.noprocess = !!options.noprocess;
      self.absolute = !!options.absolute;
      self.fs = options.fs || fs2;
      self.maxLength = options.maxLength || Infinity;
      self.cache = options.cache || Object.create(null);
      self.statCache = options.statCache || Object.create(null);
      self.symlinks = options.symlinks || Object.create(null);
      setupIgnores(self, options);
      self.changedCwd = false;
      var cwd = process.cwd();
      if (!ownProp(options, "cwd"))
        self.cwd = path2.resolve(cwd);
      else {
        self.cwd = path2.resolve(options.cwd);
        self.changedCwd = self.cwd !== cwd;
      }
      self.root = options.root || path2.resolve(self.cwd, "/");
      self.root = path2.resolve(self.root);
      self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd);
      self.nomount = !!options.nomount;
      if (process.platform === "win32") {
        self.root = self.root.replace(/\\/g, "/");
        self.cwd = self.cwd.replace(/\\/g, "/");
        self.cwdAbs = self.cwdAbs.replace(/\\/g, "/");
      }
      options.nonegate = true;
      options.nocomment = true;
      options.allowWindowsEscape = true;
      self.minimatch = new Minimatch(pattern, options);
      self.options = self.minimatch.options;
    }
    function finish(self) {
      var nou = self.nounique;
      var all = nou ? [] : Object.create(null);
      for (var i = 0, l = self.matches.length; i < l; i++) {
        var matches = self.matches[i];
        if (!matches || Object.keys(matches).length === 0) {
          if (self.nonull) {
            var literal = self.minimatch.globSet[i];
            if (nou)
              all.push(literal);
            else
              all[literal] = true;
          }
        } else {
          var m = Object.keys(matches);
          if (nou)
            all.push.apply(all, m);
          else
            m.forEach(function(m2) {
              all[m2] = true;
            });
        }
      }
      if (!nou)
        all = Object.keys(all);
      if (!self.nosort)
        all = all.sort(alphasort);
      if (self.mark) {
        for (var i = 0; i < all.length; i++) {
          all[i] = self._mark(all[i]);
        }
        if (self.nodir) {
          all = all.filter(function(e) {
            var notDir = !/\/$/.test(e);
            var c = self.cache[e] || self.cache[makeAbs(self, e)];
            if (notDir && c)
              notDir = c !== "DIR" && !Array.isArray(c);
            return notDir;
          });
        }
      }
      if (self.ignore.length)
        all = all.filter(function(m2) {
          return !isIgnored(self, m2);
        });
      self.found = all;
    }
    function mark(self, p) {
      var abs = makeAbs(self, p);
      var c = self.cache[abs];
      var m = p;
      if (c) {
        var isDir = c === "DIR" || Array.isArray(c);
        var slash = p.slice(-1) === "/";
        if (isDir && !slash)
          m += "/";
        else if (!isDir && slash)
          m = m.slice(0, -1);
        if (m !== p) {
          var mabs = makeAbs(self, m);
          self.statCache[mabs] = self.statCache[abs];
          self.cache[mabs] = self.cache[abs];
        }
      }
      return m;
    }
    function makeAbs(self, f) {
      var abs = f;
      if (f.charAt(0) === "/") {
        abs = path2.join(self.root, f);
      } else if (isAbsolute(f) || f === "") {
        abs = f;
      } else if (self.changedCwd) {
        abs = path2.resolve(self.cwd, f);
      } else {
        abs = path2.resolve(f);
      }
      if (process.platform === "win32")
        abs = abs.replace(/\\/g, "/");
      return abs;
    }
    function isIgnored(self, path3) {
      if (!self.ignore.length)
        return false;
      return self.ignore.some(function(item) {
        return item.matcher.match(path3) || !!(item.gmatcher && item.gmatcher.match(path3));
      });
    }
    function childrenIgnored(self, path3) {
      if (!self.ignore.length)
        return false;
      return self.ignore.some(function(item) {
        return !!(item.gmatcher && item.gmatcher.match(path3));
      });
    }
  }
});

// ../../node_modules/.pnpm/glob@8.0.3/node_modules/glob/sync.js
var require_sync = __commonJS({
  "../../node_modules/.pnpm/glob@8.0.3/node_modules/glob/sync.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = globSync;
    globSync.GlobSync = GlobSync;
    var rp = require_fs();
    var minimatch = require_minimatch();
    var Minimatch = minimatch.Minimatch;
    var Glob = require_glob().Glob;
    var util = require("util");
    var path2 = require("path");
    var assert = require("assert");
    var isAbsolute = require("path").isAbsolute;
    var common = require_common();
    var setopts = common.setopts;
    var ownProp = common.ownProp;
    var childrenIgnored = common.childrenIgnored;
    var isIgnored = common.isIgnored;
    function globSync(pattern, options) {
      if (typeof options === "function" || arguments.length === 3)
        throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
      return new GlobSync(pattern, options).found;
    }
    function GlobSync(pattern, options) {
      if (!pattern)
        throw new Error("must provide pattern");
      if (typeof options === "function" || arguments.length === 3)
        throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
      if (!(this instanceof GlobSync))
        return new GlobSync(pattern, options);
      setopts(this, pattern, options);
      if (this.noprocess)
        return this;
      var n = this.minimatch.set.length;
      this.matches = new Array(n);
      for (var i = 0; i < n; i++) {
        this._process(this.minimatch.set[i], i, false);
      }
      this._finish();
    }
    GlobSync.prototype._finish = function() {
      assert.ok(this instanceof GlobSync);
      if (this.realpath) {
        var self = this;
        this.matches.forEach(function(matchset, index2) {
          var set = self.matches[index2] = Object.create(null);
          for (var p in matchset) {
            try {
              p = self._makeAbs(p);
              var real = rp.realpathSync(p, self.realpathCache);
              set[real] = true;
            } catch (er) {
              if (er.syscall === "stat")
                set[self._makeAbs(p)] = true;
              else
                throw er;
            }
          }
        });
      }
      common.finish(this);
    };
    GlobSync.prototype._process = function(pattern, index2, inGlobStar) {
      assert.ok(this instanceof GlobSync);
      var n = 0;
      while (typeof pattern[n] === "string") {
        n++;
      }
      var prefix;
      switch (n) {
        case pattern.length:
          this._processSimple(pattern.join("/"), index2);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n).join("/");
          break;
      }
      var remain = pattern.slice(n);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return;
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index2, inGlobStar);
      else
        this._processReaddir(prefix, read, abs, remain, index2, inGlobStar);
    };
    GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index2, inGlobStar) {
      var entries = this._readdir(abs, inGlobStar);
      if (!entries)
        return;
      var pn = remain[0];
      var negate = !!this.minimatch.negate;
      var rawGlob = pn._glob;
      var dotOk = this.dot || rawGlob.charAt(0) === ".";
      var matchedEntries = [];
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
          var m;
          if (negate && !prefix) {
            m = !e.match(pn);
          } else {
            m = e.match(pn);
          }
          if (m)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return;
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index2])
          this.matches[index2] = Object.create(null);
        for (var i = 0; i < len; i++) {
          var e = matchedEntries[i];
          if (prefix) {
            if (prefix.slice(-1) !== "/")
              e = prefix + "/" + e;
            else
              e = prefix + e;
          }
          if (e.charAt(0) === "/" && !this.nomount) {
            e = path2.join(this.root, e);
          }
          this._emitMatch(index2, e);
        }
        return;
      }
      remain.shift();
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix)
          newPattern = [prefix, e];
        else
          newPattern = [e];
        this._process(newPattern.concat(remain), index2, inGlobStar);
      }
    };
    GlobSync.prototype._emitMatch = function(index2, e) {
      if (isIgnored(this, e))
        return;
      var abs = this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute) {
        e = abs;
      }
      if (this.matches[index2][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index2][e] = true;
      if (this.stat)
        this._stat(e);
    };
    GlobSync.prototype._readdirInGlobStar = function(abs) {
      if (this.follow)
        return this._readdir(abs, false);
      var entries;
      var lstat;
      var stat;
      try {
        lstat = this.fs.lstatSync(abs);
      } catch (er) {
        if (er.code === "ENOENT") {
          return null;
        }
      }
      var isSym = lstat && lstat.isSymbolicLink();
      this.symlinks[abs] = isSym;
      if (!isSym && lstat && !lstat.isDirectory())
        this.cache[abs] = "FILE";
      else
        entries = this._readdir(abs, false);
      return entries;
    };
    GlobSync.prototype._readdir = function(abs, inGlobStar) {
      var entries;
      if (inGlobStar && !ownProp(this.symlinks, abs))
        return this._readdirInGlobStar(abs);
      if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE")
          return null;
        if (Array.isArray(c))
          return c;
      }
      try {
        return this._readdirEntries(abs, this.fs.readdirSync(abs));
      } catch (er) {
        this._readdirError(abs, er);
        return null;
      }
    };
    GlobSync.prototype._readdirEntries = function(abs, entries) {
      if (!this.mark && !this.stat) {
        for (var i = 0; i < entries.length; i++) {
          var e = entries[i];
          if (abs === "/")
            e = abs + e;
          else
            e = abs + "/" + e;
          this.cache[e] = true;
        }
      }
      this.cache[abs] = entries;
      return entries;
    };
    GlobSync.prototype._readdirError = function(f, er) {
      switch (er.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var abs = this._makeAbs(f);
          this.cache[abs] = "FILE";
          if (abs === this.cwdAbs) {
            var error = new Error(er.code + " invalid cwd " + this.cwd);
            error.path = this.cwd;
            error.code = er.code;
            throw error;
          }
          break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(f)] = false;
          break;
        default:
          this.cache[this._makeAbs(f)] = false;
          if (this.strict)
            throw er;
          if (!this.silent)
            console.error("glob error", er);
          break;
      }
    };
    GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index2, inGlobStar) {
      var entries = this._readdir(abs, inGlobStar);
      if (!entries)
        return;
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index2, false);
      var len = entries.length;
      var isSym = this.symlinks[abs];
      if (isSym && inGlobStar)
        return;
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index2, true);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index2, true);
      }
    };
    GlobSync.prototype._processSimple = function(prefix, index2) {
      var exists = this._stat(prefix);
      if (!this.matches[index2])
        this.matches[index2] = Object.create(null);
      if (!exists)
        return;
      if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") {
          prefix = path2.join(this.root, prefix);
        } else {
          prefix = path2.resolve(this.root, prefix);
          if (trail)
            prefix += "/";
        }
      }
      if (process.platform === "win32")
        prefix = prefix.replace(/\\/g, "/");
      this._emitMatch(index2, prefix);
    };
    GlobSync.prototype._stat = function(f) {
      var abs = this._makeAbs(f);
      var needDir = f.slice(-1) === "/";
      if (f.length > this.maxLength)
        return false;
      if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c))
          c = "DIR";
        if (!needDir || c === "DIR")
          return c;
        if (needDir && c === "FILE")
          return false;
      }
      var exists;
      var stat = this.statCache[abs];
      if (!stat) {
        var lstat;
        try {
          lstat = this.fs.lstatSync(abs);
        } catch (er) {
          if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
            this.statCache[abs] = false;
            return false;
          }
        }
        if (lstat && lstat.isSymbolicLink()) {
          try {
            stat = this.fs.statSync(abs);
          } catch (er) {
            stat = lstat;
          }
        } else {
          stat = lstat;
        }
      }
      this.statCache[abs] = stat;
      var c = true;
      if (stat)
        c = stat.isDirectory() ? "DIR" : "FILE";
      this.cache[abs] = this.cache[abs] || c;
      if (needDir && c === "FILE")
        return false;
      return c;
    };
    GlobSync.prototype._mark = function(p) {
      return common.mark(this, p);
    };
    GlobSync.prototype._makeAbs = function(f) {
      return common.makeAbs(this, f);
    };
  }
});

// ../../node_modules/.pnpm/wrappy@1.0.2/node_modules/wrappy/wrappy.js
var require_wrappy = __commonJS({
  "../../node_modules/.pnpm/wrappy@1.0.2/node_modules/wrappy/wrappy.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = wrappy;
    function wrappy(fn, cb) {
      if (fn && cb)
        return wrappy(fn)(cb);
      if (typeof fn !== "function")
        throw new TypeError("need wrapper function");
      Object.keys(fn).forEach(function(k) {
        wrapper[k] = fn[k];
      });
      return wrapper;
      function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb2 = args[args.length - 1];
        if (typeof ret === "function" && ret !== cb2) {
          Object.keys(cb2).forEach(function(k) {
            ret[k] = cb2[k];
          });
        }
        return ret;
      }
    }
  }
});

// ../../node_modules/.pnpm/once@1.4.0/node_modules/once/once.js
var require_once = __commonJS({
  "../../node_modules/.pnpm/once@1.4.0/node_modules/once/once.js"(exports, module2) {
    init_cjs_shims();
    var wrappy = require_wrappy();
    module2.exports = wrappy(once);
    module2.exports.strict = wrappy(onceStrict);
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, "once", {
        value: function() {
          return once(this);
        },
        configurable: true
      });
      Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
          return onceStrict(this);
        },
        configurable: true
      });
    });
    function once(fn) {
      var f = function() {
        if (f.called)
          return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      f.called = false;
      return f;
    }
    function onceStrict(fn) {
      var f = function() {
        if (f.called)
          throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      var name = fn.name || "Function wrapped with `once`";
      f.onceError = name + " shouldn't be called more than once";
      f.called = false;
      return f;
    }
  }
});

// ../../node_modules/.pnpm/inflight@1.0.6/node_modules/inflight/inflight.js
var require_inflight = __commonJS({
  "../../node_modules/.pnpm/inflight@1.0.6/node_modules/inflight/inflight.js"(exports, module2) {
    init_cjs_shims();
    var wrappy = require_wrappy();
    var reqs = Object.create(null);
    var once = require_once();
    module2.exports = wrappy(inflight);
    function inflight(key, cb) {
      if (reqs[key]) {
        reqs[key].push(cb);
        return null;
      } else {
        reqs[key] = [cb];
        return makeres(key);
      }
    }
    function makeres(key) {
      return once(function RES() {
        var cbs = reqs[key];
        var len = cbs.length;
        var args = slice(arguments);
        try {
          for (var i = 0; i < len; i++) {
            cbs[i].apply(null, args);
          }
        } finally {
          if (cbs.length > len) {
            cbs.splice(0, len);
            process.nextTick(function() {
              RES.apply(null, args);
            });
          } else {
            delete reqs[key];
          }
        }
      });
    }
    function slice(args) {
      var length = args.length;
      var array = [];
      for (var i = 0; i < length; i++)
        array[i] = args[i];
      return array;
    }
  }
});

// ../../node_modules/.pnpm/glob@8.0.3/node_modules/glob/glob.js
var require_glob = __commonJS({
  "../../node_modules/.pnpm/glob@8.0.3/node_modules/glob/glob.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = glob2;
    var rp = require_fs();
    var minimatch = require_minimatch();
    var Minimatch = minimatch.Minimatch;
    var inherits = require_inherits();
    var EE = require("events").EventEmitter;
    var path2 = require("path");
    var assert = require("assert");
    var isAbsolute = require("path").isAbsolute;
    var globSync = require_sync();
    var common = require_common();
    var setopts = common.setopts;
    var ownProp = common.ownProp;
    var inflight = require_inflight();
    var util = require("util");
    var childrenIgnored = common.childrenIgnored;
    var isIgnored = common.isIgnored;
    var once = require_once();
    function glob2(pattern, options, cb) {
      if (typeof options === "function")
        cb = options, options = {};
      if (!options)
        options = {};
      if (options.sync) {
        if (cb)
          throw new TypeError("callback provided to sync glob");
        return globSync(pattern, options);
      }
      return new Glob(pattern, options, cb);
    }
    glob2.sync = globSync;
    var GlobSync = glob2.GlobSync = globSync.GlobSync;
    glob2.glob = glob2;
    function extend(origin, add) {
      if (add === null || typeof add !== "object") {
        return origin;
      }
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    }
    glob2.hasMagic = function(pattern, options_) {
      var options = extend({}, options_);
      options.noprocess = true;
      var g = new Glob(pattern, options);
      var set = g.minimatch.set;
      if (!pattern)
        return false;
      if (set.length > 1)
        return true;
      for (var j = 0; j < set[0].length; j++) {
        if (typeof set[0][j] !== "string")
          return true;
      }
      return false;
    };
    glob2.Glob = Glob;
    inherits(Glob, EE);
    function Glob(pattern, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = null;
      }
      if (options && options.sync) {
        if (cb)
          throw new TypeError("callback provided to sync glob");
        return new GlobSync(pattern, options);
      }
      if (!(this instanceof Glob))
        return new Glob(pattern, options, cb);
      setopts(this, pattern, options);
      this._didRealPath = false;
      var n = this.minimatch.set.length;
      this.matches = new Array(n);
      if (typeof cb === "function") {
        cb = once(cb);
        this.on("error", cb);
        this.on("end", function(matches) {
          cb(null, matches);
        });
      }
      var self = this;
      this._processing = 0;
      this._emitQueue = [];
      this._processQueue = [];
      this.paused = false;
      if (this.noprocess)
        return this;
      if (n === 0)
        return done();
      var sync = true;
      for (var i = 0; i < n; i++) {
        this._process(this.minimatch.set[i], i, false, done);
      }
      sync = false;
      function done() {
        --self._processing;
        if (self._processing <= 0) {
          if (sync) {
            process.nextTick(function() {
              self._finish();
            });
          } else {
            self._finish();
          }
        }
      }
    }
    Glob.prototype._finish = function() {
      assert(this instanceof Glob);
      if (this.aborted)
        return;
      if (this.realpath && !this._didRealpath)
        return this._realpath();
      common.finish(this);
      this.emit("end", this.found);
    };
    Glob.prototype._realpath = function() {
      if (this._didRealpath)
        return;
      this._didRealpath = true;
      var n = this.matches.length;
      if (n === 0)
        return this._finish();
      var self = this;
      for (var i = 0; i < this.matches.length; i++)
        this._realpathSet(i, next2);
      function next2() {
        if (--n === 0)
          self._finish();
      }
    };
    Glob.prototype._realpathSet = function(index2, cb) {
      var matchset = this.matches[index2];
      if (!matchset)
        return cb();
      var found = Object.keys(matchset);
      var self = this;
      var n = found.length;
      if (n === 0)
        return cb();
      var set = this.matches[index2] = Object.create(null);
      found.forEach(function(p, i) {
        p = self._makeAbs(p);
        rp.realpath(p, self.realpathCache, function(er, real) {
          if (!er)
            set[real] = true;
          else if (er.syscall === "stat")
            set[p] = true;
          else
            self.emit("error", er);
          if (--n === 0) {
            self.matches[index2] = set;
            cb();
          }
        });
      });
    };
    Glob.prototype._mark = function(p) {
      return common.mark(this, p);
    };
    Glob.prototype._makeAbs = function(f) {
      return common.makeAbs(this, f);
    };
    Glob.prototype.abort = function() {
      this.aborted = true;
      this.emit("abort");
    };
    Glob.prototype.pause = function() {
      if (!this.paused) {
        this.paused = true;
        this.emit("pause");
      }
    };
    Glob.prototype.resume = function() {
      if (this.paused) {
        this.emit("resume");
        this.paused = false;
        if (this._emitQueue.length) {
          var eq = this._emitQueue.slice(0);
          this._emitQueue.length = 0;
          for (var i = 0; i < eq.length; i++) {
            var e = eq[i];
            this._emitMatch(e[0], e[1]);
          }
        }
        if (this._processQueue.length) {
          var pq = this._processQueue.slice(0);
          this._processQueue.length = 0;
          for (var i = 0; i < pq.length; i++) {
            var p = pq[i];
            this._processing--;
            this._process(p[0], p[1], p[2], p[3]);
          }
        }
      }
    };
    Glob.prototype._process = function(pattern, index2, inGlobStar, cb) {
      assert(this instanceof Glob);
      assert(typeof cb === "function");
      if (this.aborted)
        return;
      this._processing++;
      if (this.paused) {
        this._processQueue.push([pattern, index2, inGlobStar, cb]);
        return;
      }
      var n = 0;
      while (typeof pattern[n] === "string") {
        n++;
      }
      var prefix;
      switch (n) {
        case pattern.length:
          this._processSimple(pattern.join("/"), index2, cb);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n).join("/");
          break;
      }
      var remain = pattern.slice(n);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return cb();
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index2, inGlobStar, cb);
      else
        this._processReaddir(prefix, read, abs, remain, index2, inGlobStar, cb);
    };
    Glob.prototype._processReaddir = function(prefix, read, abs, remain, index2, inGlobStar, cb) {
      var self = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        return self._processReaddir2(prefix, read, abs, remain, index2, inGlobStar, entries, cb);
      });
    };
    Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index2, inGlobStar, entries, cb) {
      if (!entries)
        return cb();
      var pn = remain[0];
      var negate = !!this.minimatch.negate;
      var rawGlob = pn._glob;
      var dotOk = this.dot || rawGlob.charAt(0) === ".";
      var matchedEntries = [];
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
          var m;
          if (negate && !prefix) {
            m = !e.match(pn);
          } else {
            m = e.match(pn);
          }
          if (m)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return cb();
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index2])
          this.matches[index2] = Object.create(null);
        for (var i = 0; i < len; i++) {
          var e = matchedEntries[i];
          if (prefix) {
            if (prefix !== "/")
              e = prefix + "/" + e;
            else
              e = prefix + e;
          }
          if (e.charAt(0) === "/" && !this.nomount) {
            e = path2.join(this.root, e);
          }
          this._emitMatch(index2, e);
        }
        return cb();
      }
      remain.shift();
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix) {
          if (prefix !== "/")
            e = prefix + "/" + e;
          else
            e = prefix + e;
        }
        this._process([e].concat(remain), index2, inGlobStar, cb);
      }
      cb();
    };
    Glob.prototype._emitMatch = function(index2, e) {
      if (this.aborted)
        return;
      if (isIgnored(this, e))
        return;
      if (this.paused) {
        this._emitQueue.push([index2, e]);
        return;
      }
      var abs = isAbsolute(e) ? e : this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute)
        e = abs;
      if (this.matches[index2][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index2][e] = true;
      var st = this.statCache[abs];
      if (st)
        this.emit("stat", e, st);
      this.emit("match", e);
    };
    Glob.prototype._readdirInGlobStar = function(abs, cb) {
      if (this.aborted)
        return;
      if (this.follow)
        return this._readdir(abs, false, cb);
      var lstatkey = "lstat\0" + abs;
      var self = this;
      var lstatcb = inflight(lstatkey, lstatcb_);
      if (lstatcb)
        self.fs.lstat(abs, lstatcb);
      function lstatcb_(er, lstat) {
        if (er && er.code === "ENOENT")
          return cb();
        var isSym = lstat && lstat.isSymbolicLink();
        self.symlinks[abs] = isSym;
        if (!isSym && lstat && !lstat.isDirectory()) {
          self.cache[abs] = "FILE";
          cb();
        } else
          self._readdir(abs, false, cb);
      }
    };
    Glob.prototype._readdir = function(abs, inGlobStar, cb) {
      if (this.aborted)
        return;
      cb = inflight("readdir\0" + abs + "\0" + inGlobStar, cb);
      if (!cb)
        return;
      if (inGlobStar && !ownProp(this.symlinks, abs))
        return this._readdirInGlobStar(abs, cb);
      if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE")
          return cb();
        if (Array.isArray(c))
          return cb(null, c);
      }
      var self = this;
      self.fs.readdir(abs, readdirCb(this, abs, cb));
    };
    function readdirCb(self, abs, cb) {
      return function(er, entries) {
        if (er)
          self._readdirError(abs, er, cb);
        else
          self._readdirEntries(abs, entries, cb);
      };
    }
    Glob.prototype._readdirEntries = function(abs, entries, cb) {
      if (this.aborted)
        return;
      if (!this.mark && !this.stat) {
        for (var i = 0; i < entries.length; i++) {
          var e = entries[i];
          if (abs === "/")
            e = abs + e;
          else
            e = abs + "/" + e;
          this.cache[e] = true;
        }
      }
      this.cache[abs] = entries;
      return cb(null, entries);
    };
    Glob.prototype._readdirError = function(f, er, cb) {
      if (this.aborted)
        return;
      switch (er.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var abs = this._makeAbs(f);
          this.cache[abs] = "FILE";
          if (abs === this.cwdAbs) {
            var error = new Error(er.code + " invalid cwd " + this.cwd);
            error.path = this.cwd;
            error.code = er.code;
            this.emit("error", error);
            this.abort();
          }
          break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(f)] = false;
          break;
        default:
          this.cache[this._makeAbs(f)] = false;
          if (this.strict) {
            this.emit("error", er);
            this.abort();
          }
          if (!this.silent)
            console.error("glob error", er);
          break;
      }
      return cb();
    };
    Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index2, inGlobStar, cb) {
      var self = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        self._processGlobStar2(prefix, read, abs, remain, index2, inGlobStar, entries, cb);
      });
    };
    Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index2, inGlobStar, entries, cb) {
      if (!entries)
        return cb();
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index2, false, cb);
      var isSym = this.symlinks[abs];
      var len = entries.length;
      if (isSym && inGlobStar)
        return cb();
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index2, true, cb);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index2, true, cb);
      }
      cb();
    };
    Glob.prototype._processSimple = function(prefix, index2, cb) {
      var self = this;
      this._stat(prefix, function(er, exists) {
        self._processSimple2(prefix, index2, er, exists, cb);
      });
    };
    Glob.prototype._processSimple2 = function(prefix, index2, er, exists, cb) {
      if (!this.matches[index2])
        this.matches[index2] = Object.create(null);
      if (!exists)
        return cb();
      if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") {
          prefix = path2.join(this.root, prefix);
        } else {
          prefix = path2.resolve(this.root, prefix);
          if (trail)
            prefix += "/";
        }
      }
      if (process.platform === "win32")
        prefix = prefix.replace(/\\/g, "/");
      this._emitMatch(index2, prefix);
      cb();
    };
    Glob.prototype._stat = function(f, cb) {
      var abs = this._makeAbs(f);
      var needDir = f.slice(-1) === "/";
      if (f.length > this.maxLength)
        return cb();
      if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c))
          c = "DIR";
        if (!needDir || c === "DIR")
          return cb(null, c);
        if (needDir && c === "FILE")
          return cb();
      }
      var exists;
      var stat = this.statCache[abs];
      if (stat !== void 0) {
        if (stat === false)
          return cb(null, stat);
        else {
          var type = stat.isDirectory() ? "DIR" : "FILE";
          if (needDir && type === "FILE")
            return cb();
          else
            return cb(null, type, stat);
        }
      }
      var self = this;
      var statcb = inflight("stat\0" + abs, lstatcb_);
      if (statcb)
        self.fs.lstat(abs, statcb);
      function lstatcb_(er, lstat) {
        if (lstat && lstat.isSymbolicLink()) {
          return self.fs.stat(abs, function(er2, stat2) {
            if (er2)
              self._stat2(f, abs, null, lstat, cb);
            else
              self._stat2(f, abs, er2, stat2, cb);
          });
        } else {
          self._stat2(f, abs, er, lstat, cb);
        }
      }
    };
    Glob.prototype._stat2 = function(f, abs, er, stat, cb) {
      if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
        this.statCache[abs] = false;
        return cb();
      }
      var needDir = f.slice(-1) === "/";
      this.statCache[abs] = stat;
      if (abs.slice(-1) === "/" && stat && !stat.isDirectory())
        return cb(null, false, stat);
      var c = true;
      if (stat)
        c = stat.isDirectory() ? "DIR" : "FILE";
      this.cache[abs] = this.cache[abs] || c;
      if (needDir && c === "FILE")
        return cb();
      return cb(null, c, stat);
    };
  }
});

// src/node/cli.ts
var cli_exports = {};
__export(cli_exports, {
  VERSION_CLI: () => VERSION_CLI,
  default: () => cli_default
});
init_cjs_shims();

// ../../node_modules/.pnpm/cac@6.7.14/node_modules/cac/dist/index.mjs
init_cjs_shims();
var import_events = __toESM(require("events"), 1);
function toArr(any) {
  return any == null ? [] : Array.isArray(any) ? any : [any];
}
function toVal(out, key, val, opts) {
  var x, old = out[key], nxt = !!~opts.string.indexOf(key) ? val == null || val === true ? "" : String(val) : typeof val === "boolean" ? val : !!~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x = +val, x * 0 === 0) ? x : val), !!val) : (x = +val, x * 0 === 0) ? x : val;
  out[key] = old == null ? nxt : Array.isArray(old) ? old.concat(nxt) : [old, nxt];
}
function mri2(args, opts) {
  args = args || [];
  opts = opts || {};
  var k, arr, arg, name, val, out = { _: [] };
  var i = 0, j = 0, idx = 0, len = args.length;
  const alibi = opts.alias !== void 0;
  const strict = opts.unknown !== void 0;
  const defaults = opts.default !== void 0;
  opts.alias = opts.alias || {};
  opts.string = toArr(opts.string);
  opts.boolean = toArr(opts.boolean);
  if (alibi) {
    for (k in opts.alias) {
      arr = opts.alias[k] = toArr(opts.alias[k]);
      for (i = 0; i < arr.length; i++) {
        (opts.alias[arr[i]] = arr.concat(k)).splice(i, 1);
      }
    }
  }
  for (i = opts.boolean.length; i-- > 0; ) {
    arr = opts.alias[opts.boolean[i]] || [];
    for (j = arr.length; j-- > 0; )
      opts.boolean.push(arr[j]);
  }
  for (i = opts.string.length; i-- > 0; ) {
    arr = opts.alias[opts.string[i]] || [];
    for (j = arr.length; j-- > 0; )
      opts.string.push(arr[j]);
  }
  if (defaults) {
    for (k in opts.default) {
      name = typeof opts.default[k];
      arr = opts.alias[k] = opts.alias[k] || [];
      if (opts[name] !== void 0) {
        opts[name].push(k);
        for (i = 0; i < arr.length; i++) {
          opts[name].push(arr[i]);
        }
      }
    }
  }
  const keys = strict ? Object.keys(opts.alias) : [];
  for (i = 0; i < len; i++) {
    arg = args[i];
    if (arg === "--") {
      out._ = out._.concat(args.slice(++i));
      break;
    }
    for (j = 0; j < arg.length; j++) {
      if (arg.charCodeAt(j) !== 45)
        break;
    }
    if (j === 0) {
      out._.push(arg);
    } else if (arg.substring(j, j + 3) === "no-") {
      name = arg.substring(j + 3);
      if (strict && !~keys.indexOf(name)) {
        return opts.unknown(arg);
      }
      out[name] = false;
    } else {
      for (idx = j + 1; idx < arg.length; idx++) {
        if (arg.charCodeAt(idx) === 61)
          break;
      }
      name = arg.substring(j, idx);
      val = arg.substring(++idx) || (i + 1 === len || ("" + args[i + 1]).charCodeAt(0) === 45 || args[++i]);
      arr = j === 2 ? [name] : name;
      for (idx = 0; idx < arr.length; idx++) {
        name = arr[idx];
        if (strict && !~keys.indexOf(name))
          return opts.unknown("-".repeat(j) + name);
        toVal(out, name, idx + 1 < arr.length || val, opts);
      }
    }
  }
  if (defaults) {
    for (k in opts.default) {
      if (out[k] === void 0) {
        out[k] = opts.default[k];
      }
    }
  }
  if (alibi) {
    for (k in out) {
      arr = opts.alias[k] || [];
      while (arr.length > 0) {
        out[arr.shift()] = out[k];
      }
    }
  }
  return out;
}
var removeBrackets = (v) => v.replace(/[<[].+/, "").trim();
var findAllBrackets = (v) => {
  const ANGLED_BRACKET_RE_GLOBAL = /<([^>]+)>/g;
  const SQUARE_BRACKET_RE_GLOBAL = /\[([^\]]+)\]/g;
  const res = [];
  const parse = (match) => {
    let variadic = false;
    let value = match[1];
    if (value.startsWith("...")) {
      value = value.slice(3);
      variadic = true;
    }
    return {
      required: match[0].startsWith("<"),
      value,
      variadic
    };
  };
  let angledMatch;
  while (angledMatch = ANGLED_BRACKET_RE_GLOBAL.exec(v)) {
    res.push(parse(angledMatch));
  }
  let squareMatch;
  while (squareMatch = SQUARE_BRACKET_RE_GLOBAL.exec(v)) {
    res.push(parse(squareMatch));
  }
  return res;
};
var getMriOptions = (options) => {
  const result = { alias: {}, boolean: [] };
  for (const [index2, option] of options.entries()) {
    if (option.names.length > 1) {
      result.alias[option.names[0]] = option.names.slice(1);
    }
    if (option.isBoolean) {
      if (option.negated) {
        const hasStringTypeOption = options.some((o, i) => {
          return i !== index2 && o.names.some((name) => option.names.includes(name)) && typeof o.required === "boolean";
        });
        if (!hasStringTypeOption) {
          result.boolean.push(option.names[0]);
        }
      } else {
        result.boolean.push(option.names[0]);
      }
    }
  }
  return result;
};
var findLongest = (arr) => {
  return arr.sort((a, b) => {
    return a.length > b.length ? -1 : 1;
  })[0];
};
var padRight = (str, length) => {
  return str.length >= length ? str : `${str}${" ".repeat(length - str.length)}`;
};
var camelcase = (input) => {
  return input.replace(/([a-z])-([a-z])/g, (_, p1, p2) => {
    return p1 + p2.toUpperCase();
  });
};
var setDotProp = (obj, keys, val) => {
  let i = 0;
  let length = keys.length;
  let t = obj;
  let x;
  for (; i < length; ++i) {
    x = t[keys[i]];
    t = t[keys[i]] = i === length - 1 ? val : x != null ? x : !!~keys[i + 1].indexOf(".") || !(+keys[i + 1] > -1) ? {} : [];
  }
};
var setByType = (obj, transforms) => {
  for (const key of Object.keys(transforms)) {
    const transform = transforms[key];
    if (transform.shouldTransform) {
      obj[key] = Array.prototype.concat.call([], obj[key]);
      if (typeof transform.transformFunction === "function") {
        obj[key] = obj[key].map(transform.transformFunction);
      }
    }
  }
};
var getFileName = (input) => {
  const m = /([^\\\/]+)$/.exec(input);
  return m ? m[1] : "";
};
var camelcaseOptionName = (name) => {
  return name.split(".").map((v, i) => {
    return i === 0 ? camelcase(v) : v;
  }).join(".");
};
var CACError = class extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
};
var Option = class {
  constructor(rawName, description, config) {
    this.rawName = rawName;
    this.description = description;
    this.config = Object.assign({}, config);
    rawName = rawName.replace(/\.\*/g, "");
    this.negated = false;
    this.names = removeBrackets(rawName).split(",").map((v) => {
      let name = v.trim().replace(/^-{1,2}/, "");
      if (name.startsWith("no-")) {
        this.negated = true;
        name = name.replace(/^no-/, "");
      }
      return camelcaseOptionName(name);
    }).sort((a, b) => a.length > b.length ? 1 : -1);
    this.name = this.names[this.names.length - 1];
    if (this.negated && this.config.default == null) {
      this.config.default = true;
    }
    if (rawName.includes("<")) {
      this.required = true;
    } else if (rawName.includes("[")) {
      this.required = false;
    } else {
      this.isBoolean = true;
    }
  }
};
var processArgs = process.argv;
var platformInfo = `${process.platform}-${process.arch} node-${process.version}`;
var Command = class {
  constructor(rawName, description, config = {}, cli2) {
    this.rawName = rawName;
    this.description = description;
    this.config = config;
    this.cli = cli2;
    this.options = [];
    this.aliasNames = [];
    this.name = removeBrackets(rawName);
    this.args = findAllBrackets(rawName);
    this.examples = [];
  }
  usage(text) {
    this.usageText = text;
    return this;
  }
  allowUnknownOptions() {
    this.config.allowUnknownOptions = true;
    return this;
  }
  ignoreOptionDefaultValue() {
    this.config.ignoreOptionDefaultValue = true;
    return this;
  }
  version(version, customFlags = "-v, --version") {
    this.versionNumber = version;
    this.option(customFlags, "Display version number");
    return this;
  }
  example(example) {
    this.examples.push(example);
    return this;
  }
  option(rawName, description, config) {
    const option = new Option(rawName, description, config);
    this.options.push(option);
    return this;
  }
  alias(name) {
    this.aliasNames.push(name);
    return this;
  }
  action(callback) {
    this.commandAction = callback;
    return this;
  }
  isMatched(name) {
    return this.name === name || this.aliasNames.includes(name);
  }
  get isDefaultCommand() {
    return this.name === "" || this.aliasNames.includes("!");
  }
  get isGlobalCommand() {
    return this instanceof GlobalCommand;
  }
  hasOption(name) {
    name = name.split(".")[0];
    return this.options.find((option) => {
      return option.names.includes(name);
    });
  }
  outputHelp() {
    const { name, commands } = this.cli;
    const {
      versionNumber,
      options: globalOptions,
      helpCallback
    } = this.cli.globalCommand;
    let sections = [
      {
        body: `${name}${versionNumber ? `/${versionNumber}` : ""}`
      }
    ];
    sections.push({
      title: "Usage",
      body: `  $ ${name} ${this.usageText || this.rawName}`
    });
    const showCommands = (this.isGlobalCommand || this.isDefaultCommand) && commands.length > 0;
    if (showCommands) {
      const longestCommandName = findLongest(commands.map((command) => command.rawName));
      sections.push({
        title: "Commands",
        body: commands.map((command) => {
          return `  ${padRight(command.rawName, longestCommandName.length)}  ${command.description}`;
        }).join("\n")
      });
      sections.push({
        title: `For more info, run any command with the \`--help\` flag`,
        body: commands.map((command) => `  $ ${name}${command.name === "" ? "" : ` ${command.name}`} --help`).join("\n")
      });
    }
    let options = this.isGlobalCommand ? globalOptions : [...this.options, ...globalOptions || []];
    if (!this.isGlobalCommand && !this.isDefaultCommand) {
      options = options.filter((option) => option.name !== "version");
    }
    if (options.length > 0) {
      const longestOptionName = findLongest(options.map((option) => option.rawName));
      sections.push({
        title: "Options",
        body: options.map((option) => {
          return `  ${padRight(option.rawName, longestOptionName.length)}  ${option.description} ${option.config.default === void 0 ? "" : `(default: ${option.config.default})`}`;
        }).join("\n")
      });
    }
    if (this.examples.length > 0) {
      sections.push({
        title: "Examples",
        body: this.examples.map((example) => {
          if (typeof example === "function") {
            return example(name);
          }
          return example;
        }).join("\n")
      });
    }
    if (helpCallback) {
      sections = helpCallback(sections) || sections;
    }
    console.log(sections.map((section) => {
      return section.title ? `${section.title}:
${section.body}` : section.body;
    }).join("\n\n"));
  }
  outputVersion() {
    const { name } = this.cli;
    const { versionNumber } = this.cli.globalCommand;
    if (versionNumber) {
      console.log(`${name}/${versionNumber} ${platformInfo}`);
    }
  }
  checkRequiredArgs() {
    const minimalArgsCount = this.args.filter((arg) => arg.required).length;
    if (this.cli.args.length < minimalArgsCount) {
      throw new CACError(`missing required args for command \`${this.rawName}\``);
    }
  }
  checkUnknownOptions() {
    const { options, globalCommand } = this.cli;
    if (!this.config.allowUnknownOptions) {
      for (const name of Object.keys(options)) {
        if (name !== "--" && !this.hasOption(name) && !globalCommand.hasOption(name)) {
          throw new CACError(`Unknown option \`${name.length > 1 ? `--${name}` : `-${name}`}\``);
        }
      }
    }
  }
  checkOptionValue() {
    const { options: parsedOptions, globalCommand } = this.cli;
    const options = [...globalCommand.options, ...this.options];
    for (const option of options) {
      const value = parsedOptions[option.name.split(".")[0]];
      if (option.required) {
        const hasNegated = options.some((o) => o.negated && o.names.includes(option.name));
        if (value === true || value === false && !hasNegated) {
          throw new CACError(`option \`${option.rawName}\` value is missing`);
        }
      }
    }
  }
};
var GlobalCommand = class extends Command {
  constructor(cli2) {
    super("@@global@@", "", {}, cli2);
  }
};
var __assign = Object.assign;
var CAC = class extends import_events.EventEmitter {
  constructor(name = "") {
    super();
    this.name = name;
    this.commands = [];
    this.rawArgs = [];
    this.args = [];
    this.options = {};
    this.globalCommand = new GlobalCommand(this);
    this.globalCommand.usage("<command> [options]");
  }
  usage(text) {
    this.globalCommand.usage(text);
    return this;
  }
  command(rawName, description, config) {
    const command = new Command(rawName, description || "", config, this);
    command.globalCommand = this.globalCommand;
    this.commands.push(command);
    return command;
  }
  option(rawName, description, config) {
    this.globalCommand.option(rawName, description, config);
    return this;
  }
  help(callback) {
    this.globalCommand.option("-h, --help", "Display this message");
    this.globalCommand.helpCallback = callback;
    this.showHelpOnExit = true;
    return this;
  }
  version(version, customFlags = "-v, --version") {
    this.globalCommand.version(version, customFlags);
    this.showVersionOnExit = true;
    return this;
  }
  example(example) {
    this.globalCommand.example(example);
    return this;
  }
  outputHelp() {
    if (this.matchedCommand) {
      this.matchedCommand.outputHelp();
    } else {
      this.globalCommand.outputHelp();
    }
  }
  outputVersion() {
    this.globalCommand.outputVersion();
  }
  setParsedInfo({ args, options }, matchedCommand, matchedCommandName) {
    this.args = args;
    this.options = options;
    if (matchedCommand) {
      this.matchedCommand = matchedCommand;
    }
    if (matchedCommandName) {
      this.matchedCommandName = matchedCommandName;
    }
    return this;
  }
  unsetMatchedCommand() {
    this.matchedCommand = void 0;
    this.matchedCommandName = void 0;
  }
  parse(argv = processArgs, {
    run = true
  } = {}) {
    this.rawArgs = argv;
    if (!this.name) {
      this.name = argv[1] ? getFileName(argv[1]) : "cli";
    }
    let shouldParse = true;
    for (const command of this.commands) {
      const parsed = this.mri(argv.slice(2), command);
      const commandName = parsed.args[0];
      if (command.isMatched(commandName)) {
        shouldParse = false;
        const parsedInfo = __assign(__assign({}, parsed), {
          args: parsed.args.slice(1)
        });
        this.setParsedInfo(parsedInfo, command, commandName);
        this.emit(`command:${commandName}`, command);
      }
    }
    if (shouldParse) {
      for (const command of this.commands) {
        if (command.name === "") {
          shouldParse = false;
          const parsed = this.mri(argv.slice(2), command);
          this.setParsedInfo(parsed, command);
          this.emit(`command:!`, command);
        }
      }
    }
    if (shouldParse) {
      const parsed = this.mri(argv.slice(2));
      this.setParsedInfo(parsed);
    }
    if (this.options.help && this.showHelpOnExit) {
      this.outputHelp();
      run = false;
      this.unsetMatchedCommand();
    }
    if (this.options.version && this.showVersionOnExit && this.matchedCommandName == null) {
      this.outputVersion();
      run = false;
      this.unsetMatchedCommand();
    }
    const parsedArgv = { args: this.args, options: this.options };
    if (run) {
      this.runMatchedCommand();
    }
    if (!this.matchedCommand && this.args[0]) {
      this.emit("command:*");
    }
    return parsedArgv;
  }
  mri(argv, command) {
    const cliOptions = [
      ...this.globalCommand.options,
      ...command ? command.options : []
    ];
    const mriOptions = getMriOptions(cliOptions);
    let argsAfterDoubleDashes = [];
    const doubleDashesIndex = argv.indexOf("--");
    if (doubleDashesIndex > -1) {
      argsAfterDoubleDashes = argv.slice(doubleDashesIndex + 1);
      argv = argv.slice(0, doubleDashesIndex);
    }
    let parsed = mri2(argv, mriOptions);
    parsed = Object.keys(parsed).reduce((res, name) => {
      return __assign(__assign({}, res), {
        [camelcaseOptionName(name)]: parsed[name]
      });
    }, { _: [] });
    const args = parsed._;
    const options = {
      "--": argsAfterDoubleDashes
    };
    const ignoreDefault = command && command.config.ignoreOptionDefaultValue ? command.config.ignoreOptionDefaultValue : this.globalCommand.config.ignoreOptionDefaultValue;
    let transforms = Object.create(null);
    for (const cliOption of cliOptions) {
      if (!ignoreDefault && cliOption.config.default !== void 0) {
        for (const name of cliOption.names) {
          options[name] = cliOption.config.default;
        }
      }
      if (Array.isArray(cliOption.config.type)) {
        if (transforms[cliOption.name] === void 0) {
          transforms[cliOption.name] = Object.create(null);
          transforms[cliOption.name]["shouldTransform"] = true;
          transforms[cliOption.name]["transformFunction"] = cliOption.config.type[0];
        }
      }
    }
    for (const key of Object.keys(parsed)) {
      if (key !== "_") {
        const keys = key.split(".");
        setDotProp(options, keys, parsed[key]);
        setByType(options, transforms);
      }
    }
    return {
      args,
      options
    };
  }
  runMatchedCommand() {
    const { args, options, matchedCommand: command } = this;
    if (!command || !command.commandAction)
      return;
    command.checkUnknownOptions();
    command.checkOptionValue();
    command.checkRequiredArgs();
    const actionArgs = [];
    command.args.forEach((arg, index2) => {
      if (arg.variadic) {
        actionArgs.push(args.slice(index2));
      } else {
        actionArgs.push(args[index2]);
      }
    });
    actionArgs.push(options);
    return command.commandAction.apply(this, actionArgs);
  }
};
var cac = (name = "") => new CAC(name);

// src/node/build.ts
init_cjs_shims();

// src/core/atomizer.ts
init_cjs_shims();

// src/core/const.ts
init_cjs_shims();
var ALL_PROPERTIES = {
  "--*": 1,
  "-ms-accelerator": 1,
  "-ms-block-progression": 1,
  "-ms-content-zoom-chaining": 1,
  "-ms-content-zooming": 1,
  "-ms-content-zoom-limit": 1,
  "-ms-content-zoom-limit-max": 1,
  "-ms-content-zoom-limit-min": 1,
  "-ms-content-zoom-snap": 1,
  "-ms-content-zoom-snap-points": 1,
  "-ms-content-zoom-snap-type": 1,
  "-ms-filter": 1,
  "-ms-flow-from": 1,
  "-ms-flow-into": 1,
  "-ms-grid-columns": 1,
  "-ms-grid-rows": 1,
  "-ms-high-contrast-adjust": 1,
  "-ms-hyphenate-limit-chars": 1,
  "-ms-hyphenate-limit-lines": 1,
  "-ms-hyphenate-limit-zone": 1,
  "-ms-ime-align": 1,
  "-ms-overflow-style": 1,
  "-ms-scrollbar-3dlight-color": 1,
  "-ms-scrollbar-arrow-color": 1,
  "-ms-scrollbar-base-color": 1,
  "-ms-scrollbar-darkshadow-color": 1,
  "-ms-scrollbar-face-color": 1,
  "-ms-scrollbar-highlight-color": 1,
  "-ms-scrollbar-shadow-color": 1,
  "-ms-scrollbar-track-color": 1,
  "-ms-scroll-chaining": 1,
  "-ms-scroll-limit": 1,
  "-ms-scroll-limit-x-max": 1,
  "-ms-scroll-limit-x-min": 1,
  "-ms-scroll-limit-y-max": 1,
  "-ms-scroll-limit-y-min": 1,
  "-ms-scroll-rails": 1,
  "-ms-scroll-snap-points-x": 1,
  "-ms-scroll-snap-points-y": 1,
  "-ms-scroll-snap-type": 1,
  "-ms-scroll-snap-x": 1,
  "-ms-scroll-snap-y": 1,
  "-ms-scroll-translation": 1,
  "-ms-text-autospace": 1,
  "-ms-touch-select": 1,
  "-ms-user-select": 1,
  "-ms-wrap-flow": 1,
  "-ms-wrap-margin": 1,
  "-ms-wrap-through": 1,
  "-moz-appearance": 1,
  "-moz-binding": 1,
  "-moz-border-bottom-colors": 1,
  "-moz-border-left-colors": 1,
  "-moz-border-right-colors": 1,
  "-moz-border-top-colors": 1,
  "-moz-context-properties": 1,
  "-moz-float-edge": 1,
  "-moz-force-broken-image-icon": 1,
  "-moz-image-region": 1,
  "-moz-orient": 1,
  "-moz-outline-radius": 1,
  "-moz-outline-radius-bottomleft": 1,
  "-moz-outline-radius-bottomright": 1,
  "-moz-outline-radius-topleft": 1,
  "-moz-outline-radius-topright": 1,
  "-moz-stack-sizing": 1,
  "-moz-text-blink": 1,
  "-moz-user-focus": 1,
  "-moz-user-input": 1,
  "-moz-user-modify": 1,
  "-moz-window-dragging": 1,
  "-moz-window-shadow": 1,
  "-webkit-appearance": 1,
  "-webkit-border-before": 1,
  "-webkit-border-before-color": 1,
  "-webkit-border-before-style": 1,
  "-webkit-border-before-width": 1,
  "-webkit-box-reflect": 1,
  "-webkit-line-clamp": 1,
  "-webkit-mask": 1,
  "-webkit-mask-attachment": 1,
  "-webkit-mask-clip": 1,
  "-webkit-mask-composite": 1,
  "-webkit-mask-image": 1,
  "-webkit-mask-origin": 1,
  "-webkit-mask-position": 1,
  "-webkit-mask-position-x": 1,
  "-webkit-mask-position-y": 1,
  "-webkit-mask-repeat": 1,
  "-webkit-mask-repeat-x": 1,
  "-webkit-mask-repeat-y": 1,
  "-webkit-mask-size": 1,
  "-webkit-overflow-scrolling": 1,
  "-webkit-tap-highlight-color": 1,
  "-webkit-text-fill-color": 1,
  "-webkit-text-stroke": 1,
  "-webkit-text-stroke-color": 1,
  "-webkit-text-stroke-width": 1,
  "-webkit-touch-callout": 1,
  "-webkit-user-modify": 1,
  "accent-color": 1,
  "align-content": 1,
  "align-items": 1,
  "align-self": 1,
  "align-tracks": 1,
  "all": 1,
  "animation": 1,
  "animation-delay": 1,
  "animation-direction": 1,
  "animation-duration": 1,
  "animation-fill-mode": 1,
  "animation-iteration-count": 1,
  "animation-name": 1,
  "animation-play-state": 1,
  "animation-timing-function": 1,
  "appearance": 1,
  "aspect-ratio": 1,
  "azimuth": 1,
  "backdrop-filter": 1,
  "backface-visibility": 1,
  "background": 1,
  "background-attachment": 1,
  "background-blend-mode": 1,
  "background-clip": 1,
  "background-color": 1,
  "background-image": 1,
  "background-origin": 1,
  "background-position": 1,
  "background-position-x": 1,
  "background-position-y": 1,
  "background-repeat": 1,
  "background-size": 1,
  "block-overflow": 1,
  "block-size": 1,
  "border": 1,
  "border-block": 1,
  "border-block-color": 1,
  "border-block-style": 1,
  "border-block-width": 1,
  "border-block-end": 1,
  "border-block-end-color": 1,
  "border-block-end-style": 1,
  "border-block-end-width": 1,
  "border-block-start": 1,
  "border-block-start-color": 1,
  "border-block-start-style": 1,
  "border-block-start-width": 1,
  "border-bottom": 1,
  "border-bottom-color": 1,
  "border-bottom-left-radius": 1,
  "border-bottom-right-radius": 1,
  "border-bottom-style": 1,
  "border-bottom-width": 1,
  "border-collapse": 1,
  "border-color": 1,
  "border-end-end-radius": 1,
  "border-end-start-radius": 1,
  "border-image": 1,
  "border-image-outset": 1,
  "border-image-repeat": 1,
  "border-image-slice": 1,
  "border-image-source": 1,
  "border-image-width": 1,
  "border-inline": 1,
  "border-inline-end": 1,
  "border-inline-color": 1,
  "border-inline-style": 1,
  "border-inline-width": 1,
  "border-inline-end-color": 1,
  "border-inline-end-style": 1,
  "border-inline-end-width": 1,
  "border-inline-start": 1,
  "border-inline-start-color": 1,
  "border-inline-start-style": 1,
  "border-inline-start-width": 1,
  "border-left": 1,
  "border-left-color": 1,
  "border-left-style": 1,
  "border-left-width": 1,
  "border-radius": 1,
  "border-right": 1,
  "border-right-color": 1,
  "border-right-style": 1,
  "border-right-width": 1,
  "border-spacing": 1,
  "border-start-end-radius": 1,
  "border-start-start-radius": 1,
  "border-style": 1,
  "border-top": 1,
  "border-top-color": 1,
  "border-top-left-radius": 1,
  "border-top-right-radius": 1,
  "border-top-style": 1,
  "border-top-width": 1,
  "border-width": 1,
  "bottom": 1,
  "box-align": 1,
  "box-decoration-break": 1,
  "box-direction": 1,
  "box-flex": 1,
  "box-flex-group": 1,
  "box-lines": 1,
  "box-ordinal-group": 1,
  "box-orient": 1,
  "box-pack": 1,
  "box-shadow": 1,
  "box-sizing": 1,
  "break-after": 1,
  "break-before": 1,
  "break-inside": 1,
  "caption-side": 1,
  "caret-color": 1,
  "clear": 1,
  "clip": 1,
  "clip-path": 1,
  "color": 1,
  "color-adjust": 1,
  "color-scheme": 1,
  "column-count": 1,
  "column-fill": 1,
  "column-gap": 1,
  "column-rule": 1,
  "column-rule-color": 1,
  "column-rule-style": 1,
  "column-rule-width": 1,
  "column-span": 1,
  "column-width": 1,
  "columns": 1,
  "contain": 1,
  "content": 1,
  "content-visibility": 1,
  "counter-increment": 1,
  "counter-reset": 1,
  "counter-set": 1,
  "cursor": 1,
  "direction": 1,
  "display": 1,
  "empty-cells": 1,
  "filter": 1,
  "flex": 1,
  "flex-basis": 1,
  "flex-direction": 1,
  "flex-flow": 1,
  "flex-grow": 1,
  "flex-shrink": 1,
  "flex-wrap": 1,
  "float": 1,
  "font": 1,
  "font-family": 1,
  "font-feature-settings": 1,
  "font-kerning": 1,
  "font-language-override": 1,
  "font-optical-sizing": 1,
  "font-variation-settings": 1,
  "font-size": 1,
  "font-size-adjust": 1,
  "font-smooth": 1,
  "font-stretch": 1,
  "font-style": 1,
  "font-synthesis": 1,
  "font-variant": 1,
  "font-variant-alternates": 1,
  "font-variant-caps": 1,
  "font-variant-east-asian": 1,
  "font-variant-ligatures": 1,
  "font-variant-numeric": 1,
  "font-variant-position": 1,
  "font-weight": 1,
  "forced-color-adjust": 1,
  "gap": 1,
  "grid": 1,
  "grid-area": 1,
  "grid-auto-columns": 1,
  "grid-auto-flow": 1,
  "grid-auto-rows": 1,
  "grid-column": 1,
  "grid-column-end": 1,
  "grid-column-gap": 1,
  "grid-column-start": 1,
  "grid-gap": 1,
  "grid-row": 1,
  "grid-row-end": 1,
  "grid-row-gap": 1,
  "grid-row-start": 1,
  "grid-template": 1,
  "grid-template-areas": 1,
  "grid-template-columns": 1,
  "grid-template-rows": 1,
  "hanging-punctuation": 1,
  "height": 1,
  "hyphens": 1,
  "image-orientation": 1,
  "image-rendering": 1,
  "image-resolution": 1,
  "ime-mode": 1,
  "initial-letter": 1,
  "initial-letter-align": 1,
  "inline-size": 1,
  "input-security": 1,
  "inset": 1,
  "inset-block": 1,
  "inset-block-end": 1,
  "inset-block-start": 1,
  "inset-inline": 1,
  "inset-inline-end": 1,
  "inset-inline-start": 1,
  "isolation": 1,
  "justify-content": 1,
  "justify-items": 1,
  "justify-self": 1,
  "justify-tracks": 1,
  "left": 1,
  "letter-spacing": 1,
  "line-break": 1,
  "line-clamp": 1,
  "line-height": 1,
  "line-height-step": 1,
  "list-style": 1,
  "list-style-image": 1,
  "list-style-position": 1,
  "list-style-type": 1,
  "margin": 1,
  "margin-block": 1,
  "margin-block-end": 1,
  "margin-block-start": 1,
  "margin-bottom": 1,
  "margin-inline": 1,
  "margin-inline-end": 1,
  "margin-inline-start": 1,
  "margin-left": 1,
  "margin-right": 1,
  "margin-top": 1,
  "margin-trim": 1,
  "mask": 1,
  "mask-border": 1,
  "mask-border-mode": 1,
  "mask-border-outset": 1,
  "mask-border-repeat": 1,
  "mask-border-slice": 1,
  "mask-border-source": 1,
  "mask-border-width": 1,
  "mask-clip": 1,
  "mask-composite": 1,
  "mask-image": 1,
  "mask-mode": 1,
  "mask-origin": 1,
  "mask-position": 1,
  "mask-repeat": 1,
  "mask-size": 1,
  "mask-type": 1,
  "masonry-auto-flow": 1,
  "math-style": 1,
  "max-block-size": 1,
  "max-height": 1,
  "max-inline-size": 1,
  "max-lines": 1,
  "max-width": 1,
  "min-block-size": 1,
  "min-height": 1,
  "min-inline-size": 1,
  "min-width": 1,
  "mix-blend-mode": 1,
  "object-fit": 1,
  "object-position": 1,
  "offset": 1,
  "offset-anchor": 1,
  "offset-distance": 1,
  "offset-path": 1,
  "offset-position": 1,
  "offset-rotate": 1,
  "opacity": 1,
  "order": 1,
  "orphans": 1,
  "outline": 1,
  "outline-color": 1,
  "outline-offset": 1,
  "outline-style": 1,
  "outline-width": 1,
  "overflow": 1,
  "overflow-anchor": 1,
  "overflow-block": 1,
  "overflow-clip-box": 1,
  "overflow-clip-margin": 1,
  "overflow-inline": 1,
  "overflow-wrap": 1,
  "overflow-x": 1,
  "overflow-y": 1,
  "overscroll-behavior": 1,
  "overscroll-behavior-block": 1,
  "overscroll-behavior-inline": 1,
  "overscroll-behavior-x": 1,
  "overscroll-behavior-y": 1,
  "padding": 1,
  "padding-block": 1,
  "padding-block-end": 1,
  "padding-block-start": 1,
  "padding-bottom": 1,
  "padding-inline": 1,
  "padding-inline-end": 1,
  "padding-inline-start": 1,
  "padding-left": 1,
  "padding-right": 1,
  "padding-top": 1,
  "page-break-after": 1,
  "page-break-before": 1,
  "page-break-inside": 1,
  "paint-order": 1,
  "perspective": 1,
  "perspective-origin": 1,
  "place-content": 1,
  "place-items": 1,
  "place-self": 1,
  "pointer-events": 1,
  "position": 1,
  "quotes": 1,
  "resize": 1,
  "right": 1,
  "rotate": 1,
  "row-gap": 1,
  "ruby-align": 1,
  "ruby-merge": 1,
  "ruby-position": 1,
  "scale": 1,
  "scrollbar-color": 1,
  "scrollbar-gutter": 1,
  "scrollbar-width": 1,
  "scroll-behavior": 1,
  "scroll-margin": 1,
  "scroll-margin-block": 1,
  "scroll-margin-block-start": 1,
  "scroll-margin-block-end": 1,
  "scroll-margin-bottom": 1,
  "scroll-margin-inline": 1,
  "scroll-margin-inline-start": 1,
  "scroll-margin-inline-end": 1,
  "scroll-margin-left": 1,
  "scroll-margin-right": 1,
  "scroll-margin-top": 1,
  "scroll-padding": 1,
  "scroll-padding-block": 1,
  "scroll-padding-block-start": 1,
  "scroll-padding-block-end": 1,
  "scroll-padding-bottom": 1,
  "scroll-padding-inline": 1,
  "scroll-padding-inline-start": 1,
  "scroll-padding-inline-end": 1,
  "scroll-padding-left": 1,
  "scroll-padding-right": 1,
  "scroll-padding-top": 1,
  "scroll-snap-align": 1,
  "scroll-snap-coordinate": 1,
  "scroll-snap-destination": 1,
  "scroll-snap-points-x": 1,
  "scroll-snap-points-y": 1,
  "scroll-snap-stop": 1,
  "scroll-snap-type": 1,
  "scroll-snap-type-x": 1,
  "scroll-snap-type-y": 1,
  "shape-image-threshold": 1,
  "shape-margin": 1,
  "shape-outside": 1,
  "tab-size": 1,
  "table-layout": 1,
  "text-align": 1,
  "text-align-last": 1,
  "text-combine-upright": 1,
  "text-decoration": 1,
  "text-decoration-color": 1,
  "text-decoration-line": 1,
  "text-decoration-skip": 1,
  "text-decoration-skip-ink": 1,
  "text-decoration-style": 1,
  "text-decoration-thickness": 1,
  "text-emphasis": 1,
  "text-emphasis-color": 1,
  "text-emphasis-position": 1,
  "text-emphasis-style": 1,
  "text-indent": 1,
  "text-justify": 1,
  "text-orientation": 1,
  "text-overflow": 1,
  "text-rendering": 1,
  "text-shadow": 1,
  "text-size-adjust": 1,
  "text-transform": 1,
  "text-underline-offset": 1,
  "text-underline-position": 1,
  "top": 1,
  "touch-action": 1,
  "transform": 1,
  "transform-box": 1,
  "transform-origin": 1,
  "transform-style": 1,
  "transition": 1,
  "transition-delay": 1,
  "transition-duration": 1,
  "transition-property": 1,
  "transition-timing-function": 1,
  "translate": 1,
  "unicode-bidi": 1,
  "user-select": 1,
  "vertical-align": 1,
  "visibility": 1,
  "white-space": 1,
  "widows": 1,
  "width": 1,
  "will-change": 1,
  "word-break": 1,
  "word-spacing": 1,
  "word-wrap": 1,
  "writing-mode": 1,
  "z-index": 1,
  "zoom": 1
};

// src/core/cssEscape.ts
init_cjs_shims();
var cssEscape = (string) => {
  const length = string.length;
  const firstCodeUnit = string.charCodeAt(0);
  let index2 = -1;
  let codeUnit;
  let result = "";
  while (++index2 < length) {
    codeUnit = string.charCodeAt(index2);
    if (codeUnit == 0) {
      result += "\uFFFD";
      continue;
    }
    if (codeUnit >= 1 && codeUnit <= 31 || codeUnit == 127 || index2 == 0 && codeUnit >= 48 && codeUnit <= 57 || index2 == 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit == 45) {
      result += "\\" + codeUnit.toString(16) + " ";
      continue;
    }
    if (index2 == 0 && length == 1 && codeUnit == 45) {
      result += "\\" + string.charAt(index2);
      continue;
    }
    if (codeUnit >= 128 || codeUnit == 45 || codeUnit == 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) {
      result += string.charAt(index2);
      continue;
    }
    result += "\\" + string.charAt(index2);
  }
  return result;
};

// src/core/makeValue.ts
init_cjs_shims();
var makeNumber = (num) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0";
var cssvar = (value) => String(value).startsWith("--") ? `var(${value})` : value;
var px = (value) => {
  if (value === void 0 || value === null)
    throw new Error("px: value is undefined");
  if (value === 0 || value === "0")
    return 0;
  if (String(value).startsWith("--"))
    return cssvar("" + value);
  const [n, m] = String(value).split("/");
  if (+n > 0 && +m > 0)
    return makeNumber(+n / +m * 100) + "%";
  if (/.[-+*/]/.test(String(value))) {
    return "calc(" + String(value).replace(/[-+]/g, (a) => ` ${a} `) + ")";
  }
  return +value === +value ? value + "px" : value;
};
var percentToEm = (value) => {
  if (value.endsWith("%"))
    return +value.slice(0, -1) / 100 + "em";
  return px(value);
};
var makeHEX = (value) => {
  const [rgb, a] = value.split(".");
  if (a && rgb.length === 4)
    return "rgba(" + rgb.slice(1).split("").map((value2) => parseInt(value2 + value2, 16)).join(",") + ",." + a + ")";
  if (a)
    return "rgba(" + [rgb.slice(1, 3), rgb.slice(3, 5), rgb.slice(5, 7)].map((value2) => parseInt(value2, 16)).join(",") + ",." + a + ")";
  return value;
};
var makeHLS = (value) => {
  const [h, s, l, a] = value.split(",");
  return "hsl" + (a ? "a" : "") + "(" + [h, s, l, a].filter(Boolean).map(cssvar).join() + ")";
};
var makeRGB = (value) => {
  const [r, g, b, a] = value.split(",");
  return "rgb" + (a ? "a" : "") + "(" + [r, g, b, a].filter(Boolean).map(cssvar).join() + ")";
};
var makeColor = (value = "transparent") => {
  if (value === "-")
    return "transparent";
  if (value === "transparent")
    return "transparent";
  if (value.startsWith("--"))
    return `var(${value})`;
  if (value.split(",").every((v) => parseFloat(v) >= 0)) {
    if (value.includes("%")) {
      return makeHLS(value);
    }
    return makeRGB(value);
  }
  return value;
};
var makeFont = (value) => {
  if (!value)
    throw new Error("makeFont: value is undefined");
  return (value || "").split("/").map((value2, index2) => {
    if (value2 === "-")
      return;
    if (String(value2).startsWith("--"))
      return `var(${value2});`;
    switch (index2) {
      case 0: {
        return `font-size:${px(value2)};`;
      }
      case 1: {
        return `line-height:${+value2 < 4 ? makeNumber(+value2) : px(value2)};`;
      }
      case 2: {
        return `letter-spacing:${px(percentToEm(value2))};`;
      }
    }
  }).filter(Boolean).join("");
};
var makeFontFamily = (value) => `font-family:${value};font-family:var(--${value}, ${value});`;
var makeBorder = (value) => {
  if (!value || value === "none" || value === "0" || value === "-")
    return "none";
  const borderStyles = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
  let hasWidth = false;
  let hasStyle = false;
  const values = value.split("/").map((value2) => {
    if (parseInt(value2) > 0) {
      hasWidth = true;
      return value2.includes(",") ? makeColor(value2) : px(value2);
    }
    if (borderStyles.includes(value2)) {
      hasStyle = true;
      return value2;
    }
    return makeColor(value2);
  });
  if (!hasWidth)
    values.unshift("1px");
  if (!hasStyle)
    values.unshift("solid");
  return values.join(" ");
};
var makeValues = (value, project = cssvar) => value.split("/").map(project).join(" ");
var makeCommaValues = (value, project = cssvar) => value.split(",").map(project).join(",");
var makeSide = (value) => makeValues(value, px);
var makeRatio = (value) => {
  const [w, h] = value.split(":");
  return (+h / +w * 100).toFixed(2) + "%";
};
var makeHBox = (value = "") => {
  const values = value.split("+");
  const result = values.map((v) => {
    switch (v) {
      case "top": {
        return "align-items:flex-start;";
      }
      case "middle": {
        return "align-items:center;";
      }
      case "bottom": {
        return "align-items:flex-end;";
      }
      case "fill": {
        return "align-items:stretch;";
      }
      case "stretch": {
        return "align-items:stretch;";
      }
      case "left": {
        return values.includes("reverse") ? "justify-content:flex-end;" : "";
      }
      case "right": {
        return !values.includes("reverse") ? "justify-content:flex-end;" : "";
      }
      case "reverse": {
        return "flex-direction:row-reverse;";
      }
      case "center": {
        return "justify-content:center;";
      }
    }
    return "";
  });
  if (!result.find((r) => r.startsWith("align-items:"))) {
    result.unshift("align-items:center;");
  }
  return [...new Set(result)].join("");
};
var makeVBox = (value = "") => {
  const values = value.split("+");
  const result = values.map((v) => {
    switch (v) {
      case "left": {
        return "align-items:flex-start;";
      }
      case "center": {
        return "align-items:center;";
      }
      case "right": {
        return "align-items:flex-end;";
      }
      case "fill": {
        return "align-items:stretch;";
      }
      case "top": {
        return values.includes("reverse") ? "justify-content:flex-end;" : "";
      }
      case "middle": {
        return "justify-content:center;";
      }
      case "bottom": {
        return !values.includes("reverse") ? "justify-content:flex-end;" : "";
      }
      case "reverse": {
        return "flex-direction:column-reverse;";
      }
    }
    return "";
  });
  if (!result.find((r) => r.startsWith("align-items:"))) {
    result.unshift("align-items:stretch;");
  }
  return [...new Set(result)].join("");
};
var makeTransition = (value) => {
  if (!/\d/.test(value))
    return value;
  if (!value.includes("="))
    return `all ${value}`;
  return value.split("/").map((item) => item.replace("=", " ")).join(",");
};
var makePosition = (value) => {
  if (!value)
    return "";
  return value.includes(",") ? makePosition2(value) : makePosition1(value);
};
var makePosition1 = (value) => {
  const values = value.split(" ").map(px);
  values[1] = values[1] || values[0];
  values[2] = values[2] || values[0];
  values[3] = values[3] || values[1] || values[0];
  return ["top", "right", "bottom", "left"].map((prop, index2) => {
    const value2 = values[index2];
    if (!value2 || value2 === "-")
      return;
    return `${prop}:${px(value2)};`;
  }).filter(Boolean).join("");
};
var makePosition2 = (value) => {
  const [x, y] = value.split(",");
  const res = [];
  res.push(x.startsWith("~") ? `right:${px(x.slice(1))};` : `left:${px(x)};`);
  res.push(y.startsWith("~") ? `bottom:${px(y.slice(1))};` : `top:${px(y)};`);
  return res.join("");
};

// src/core/rules.ts
init_cjs_shims();
var reset = `*{margin:0;padding:0;font:inherit;color:inherit;}
*,:after,:before{box-sizing:border-box;flex-shrink:0;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2}
html,body{height:100%;}
img,picture,video,canvas{display:block;max-width:100%;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}
`;
var RULES = {
  "c": (value) => `color:${makeColor(value)};`,
  "color": (value) => RULES.c(value),
  "caret": (value) => `caret-color:${makeColor(value)};`,
  "caret-current": () => `color:currentColor`,
  "font": (value) => makeFont(value),
  "font-size": (value) => `font-size:${px(value)};`,
  "line-height": (value) => `line-height:${+value < 4 ? makeNumber(+value) : px(value)}`,
  "letter-spacing": (value) => `letter-spacing:${percentToEm(value)};`,
  "word-spacing": (value) => `word-spacing:${px(value)};`,
  "sans": () => makeFontFamily("sans-serif"),
  "sans-serif": () => makeFontFamily("sans-serif"),
  "serif": () => makeFontFamily("serif"),
  "cursive": () => makeFontFamily("cursive"),
  "fantasy": () => makeFontFamily("fantasy"),
  "system-ui": () => makeFontFamily("system-ui"),
  "monospace": (value) => {
    if (value === "number")
      return `font-variant-numeric:tabular-nums;`;
    return makeFontFamily("monospace");
  },
  "AppleSD": () => `font-family:"Apple SD Gothic Neo";`,
  "Roboto": () => makeFontFamily("Roboto"),
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
  "thicker": (value = "1") => `text-shadow:0 0 ${px(value)} currentColor;`,
  "italic": () => `font-style:italic;`,
  "overline": () => `text-decoration:overline;`,
  "underline": () => `text-decoration:underline;`,
  "line-through": () => `text-decoration:line-through;`,
  "strike": () => `text-decoration:line-through;`,
  "del": () => `text-decoration:line-through;`,
  "small-caps": () => `font-variant-caps:small-caps;`,
  "all-small-caps": () => `font-variant-caps:all-small-caps;`,
  "slashed-zero": () => `font-variant-numeric:slashed-zero;`,
  "tabular-nums": () => `font-variant-numeric:tabular-nums;`,
  "lowercase": () => `text-transform:lowercase;`,
  "uppercase": () => `text-transform:uppercase;`,
  "capitalize": () => `text-transform:capitalize;`,
  "text-justify": () => `text-align:justify;`,
  "text-center": () => `text-align:center;`,
  "text-right": () => `text-align:right;`,
  "text-left": () => `text-align:left;`,
  "vertical-top": () => `vertical-align:top;`,
  "vertical-middle": () => `vertical-align:middle;`,
  "vertical-bottom": () => `vertical-align:bottom;`,
  "sub": () => `vertical-align:sub;`,
  "super": () => `vertical-align:super;`,
  "text-top": () => `vertical-align:text-top;`,
  "text-bottom": () => `vertical-align:text-bottom;`,
  "break-all": () => `word-break:break-all;`,
  "break-word": () => `overflow-wrap:break-word;`,
  "keep-all": () => `word-break:keep-all;`,
  "hyphens": (value = "auto") => `hyphens:${value};`,
  "block": () => "display:block;",
  "inline-block": () => "display:inline-block;",
  "inline": () => "display:inline;",
  "inline-flex": () => "display:inline-flex;",
  "table": () => "display:table;",
  "inline-table": () => "display:inline-table;",
  "table-caption": () => "display:table-caption;",
  "table-cell": () => "display:table-cell;",
  "table-column": () => "display:table-column;",
  "table-column-group": () => "display:table-column-group;",
  "table-footer-group": () => "display:table-footer-group;",
  "table-header-group": () => "display:table-header-group;",
  "table-row-group": () => "display:table-row-group;",
  "table-row": () => "display:table-row;",
  "flow-root": () => "display:flow-root;",
  "contents": () => "display:contents;",
  "list-item": () => "display:list-item;",
  "grid": (value) => {
    const css = ["display:grid;"];
    if (+value === +value)
      css.push(`grid-template-columns:repeat(${value},1fr);`);
    else if (value)
      css.push(`grid-template-columns:${value};`);
    return css.join("");
  },
  "grid-cols": (value) => {
    const css = ["display:grid;"];
    if (+value === +value)
      css.push(`grid-template-columns:repeat(${value},1fr);`);
    else if (value)
      css.push(`grid-template-columns:${value};`);
    return css.join("");
  },
  "inline-grid": () => "display:inline-grid;",
  "hbox": (value = "") => `display:flex;flex-flow:row;${makeHBox(value)}`,
  "vbox": (value = "") => `display:flex;flex-flow:column;${makeVBox(value)}`,
  "pack": () => `display:flex;align-items:center;justify-content:center;`,
  "hpack": () => `display:flex;flex-flow:row;align-items:center;justify-content:center;`,
  "vpack": () => `display:flex;flex-flow:column;align-items:center;justify-content:center;`,
  "hbox(": () => ``,
  "vbox(": () => ``,
  "subbox": () => `display:flex;flex-flow:inherit;align-items:inherit;justify-content:inherit;`,
  "gap": (value) => `gap:${makeSide(value)};grid-gap:${makeSide(value)};`,
  "hgap": (value) => `&>*+* {margin-left:${px(value)};}`,
  "hgap-reverse": (value) => `&>*+* {margin-right:${px(value)};}`,
  "vgap": (value) => `&>*+* {margin-top:${px(value)};}`,
  "vgap-reverse": (value) => `&>*+* {margin-bottom:${px(value)};}`,
  "space-between": () => `justify-content:space-between;`,
  "space-around": () => `justify-content:space-around;`,
  "space-evenly": () => `justify-content:space-evenly;`,
  "flex": (value = "1") => `flex:${makeValues(value)};`,
  "space": (value) => `[class*="hbox"]>& {width:${px(value)};} [class*="vbox"]>& {height:${px(value)};}`,
  "flex-grow": (value = "1") => `flex-grow:${cssvar(value)};`,
  "flex-shrink": (value = "1") => `flex-shrink:${cssvar(value)};`,
  "flex-basis": (value) => `flex-basis:${px(value)};`,
  "flex-wrap": () => "&{flex-wrap:wrap;}&>*{max-width:100%;max-height:100%;}",
  "flex-wrap-reverse": () => "&{flex-wrap:wrap-reverse;}&>*{max-width:100%;max-height:100%;}",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value) => `order:${cssvar(value)};`,
  "border-box": () => `box-sizing:border-box`,
  "content-box": () => `box-sizing:content-box`,
  "w": (value) => {
    if (value.includes("~")) {
      const result = [];
      const values = value.split("~");
      if (values.length <= 2) {
        const [min2, max2] = values;
        min2 && result.push(`min-width:${px(min2)};`);
        max2 && result.push(`max-width:${px(max2)};`);
        return result.join("");
      }
      const [min, width, max] = values;
      min && result.push(`min-width:${px(min)};`);
      result.push(`width:${px(width)};`);
      max && result.push(`max-width:${px(max)};`);
      return result.join("");
    }
    return value === "stretch" || value === "fill" ? `align-self:stretch` : `width:${px(value)};`;
  },
  "h": (value) => {
    if (value.includes("~")) {
      const result = [];
      const values = value.split("~");
      if (values.length <= 2) {
        const [min2, max2] = value.split("~");
        min2 && result.push(`min-height:${px(min2)};`);
        max2 && result.push(`max-height:${px(max2)};`);
        return result.join("");
      }
      const [min, height, max] = values;
      min && result.push(`min-height:${px(min)};`);
      result.push(`height:${px(height)};`);
      max && result.push(`max-height:${px(max)};`);
      return result.join("");
    }
    return value === "stretch" || value === "fill" ? `align-self:stretch` : `height:${px(value)};`;
  },
  "m": (value) => `margin:${makeSide(value)};`,
  "mt": (value) => `margin-top:${px(value)};`,
  "mr": (value) => `margin-right:${px(value)};`,
  "mb": (value) => `margin-bottom:${px(value)};`,
  "ml": (value) => `margin-left:${px(value)};`,
  "p": (value) => `padding:${makeSide(value)};`,
  "pt": (value) => `padding-top:${px(value)};`,
  "pr": (value) => `padding-right:${px(value)};`,
  "pb": (value) => `padding-bottom:${px(value)};`,
  "pl": (value) => `padding-left:${px(value)};`,
  "b": (value) => `border:${makeBorder(value)};`,
  "bt": (value) => `border-top:${makeBorder(value)};`,
  "br": (value) => `border-right:${makeBorder(value)};`,
  "bb": (value) => `border-bottom:${makeBorder(value)};`,
  "bl": (value) => `border-left:${makeBorder(value)};`,
  "bw": (value) => `border-width:${px(value)};`,
  "btw": (value) => `border-top-width:${px(value)};`,
  "brw": (value) => `border-right-width:${px(value)};`,
  "bbw": (value) => `border-bottom-width:${px(value)};`,
  "blw": (value) => `border-left-width:${px(value)};`,
  "bs": (value) => `border-style:${cssvar(value)};`,
  "bts": (value) => `border-top-style:${cssvar(value)};`,
  "brs": (value) => `border-right-style:${cssvar(value)};`,
  "bbs": (value) => `border-bottom-style:${cssvar(value)};`,
  "bls": (value) => `border-left-style:${cssvar(value)};`,
  "bc": (value) => `border-color:${makeColor(value)};`,
  "btc": (value) => `border-top-color:${makeColor(value)};`,
  "brc": (value) => `border-right-color:${makeColor(value)};`,
  "bbc": (value) => `border-bottom-color:${makeColor(value)};`,
  "blc": (value) => `border-left-color:${makeColor(value)};`,
  "r": (value) => `border-radius:${makeSide(value)};`,
  "rt": (value) => `border-top-left-radius:${px(value)};border-top-right-radius:${px(value)};`,
  "rr": (value) => `border-top-right-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  "rb": (value) => `border-bottom-left-radius:${px(value)};border-bottom-right-radius:${px(value)};`,
  "rl": (value) => `border-top-left-radius:${px(value)};border-bottom-left-radius:${px(value)};`,
  "rtl": (value) => `border-top-left-radius:${px(value)};`,
  "rtr": (value) => `border-top-right-radius:${px(value)};`,
  "rbr": (value) => `border-bottom-right-radius:${px(value)};`,
  "rbl": (value) => `border-bottom-left-radius:${px(value)};`,
  "ring": (value) => {
    const [color, size = 1] = value.split("/");
    return `box-shadow:0 0 0 ${px(size)} ${makeColor(color)};`;
  },
  "box-shadow": (value) => `box-shadow:${makeValues(value, (v) => Number.isInteger(+v) ? px(v) : cssvar(v))}`,
  "outline": (value) => `outline:${makeBorder(value)};`,
  "guide": (value = "#4f80ff") => `&,&>*{ outline:1px solid ${makeColor(value)};}`,
  "bg": (value) => {
    if (value.startsWith("linear-gradient"))
      return `background:${value.replace(/\//g, " ")};`;
    if (value.startsWith("radial-gradient"))
      return `background:${value.replace(/\//g, " ")};`;
    if (value.startsWith("url"))
      return `background-image:${value};`;
    if (/^(http|[./])/.test(value))
      return `background-image:url(${value});`;
    if (value === "transparent")
      return `background-color:transparent;`;
    return `background-color:${makeColor(value)};`;
  },
  "bg-image": (value) => {
    if (value.startsWith("url"))
      return `background-image:${value};`;
    return `background-image:url(${value});`;
  },
  "background-image": (value) => RULES["bg-image"](value),
  "bg-position": (value) => `background-position:${makeValues(value)};`,
  "bg-repeat-x": () => `background-repeat:repeat-x;`,
  "bg-repeat-y": () => `background-repeat:repeat-y;`,
  "bg-no-repeat": () => `background-repeat:no-repeat;`,
  "bg-fixed": () => `background-attachment:fixed;`,
  "bg-scroll": () => `background-attachment:scroll;`,
  "contain": () => `background-size:contain;background-position:center;background-repeat:no-repeat;object-fit:contain;`,
  "cover": () => `background-size:cover;background-position:center;background-repeat:no-repeat;object-fit:cover;`,
  "overflow": (value) => `overflow:${value};`,
  "overflow-x": (value) => `overflow-x:${value};`,
  "overflow-y": (value) => `overflow-y:${value};`,
  "clip": () => `overflow:hidden;`,
  "scroll": () => `overflow:auto;`,
  "scroll-x": () => `overflow-x:auto;overflow-y:hidden;`,
  "scroll-y": () => `overflow-x:hidden;overflow-y:auto;`,
  "scrollbar": () => `&{overflow:scroll;}&.scroll{overflow:scroll;}&.scroll-x{overflow-x:scroll;}&.scroll-y{overflow-y:scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar{display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal{display:none;}`,
  "scroll-m": (value) => `scroll-margin:${makeSide(value)};`,
  "scroll-mt": (value) => `scroll-margin-top:${px(value)};`,
  "scroll-mr": (value) => `scroll-margin-right:${px(value)};`,
  "scroll-mb": (value) => `scroll-margin-bottom:${px(value)};`,
  "scroll-ml": (value) => `scroll-margin-left:${px(value)};`,
  "scroll-p": (value) => `scroll-padding:${makeSide(value)};`,
  "scroll-pt": (value) => `scroll-padding-top:${px(value)};`,
  "scroll-pr": (value) => `scroll-padding-right:${px(value)};`,
  "scroll-pb": (value) => `scroll-padding-bottom:${px(value)};`,
  "scroll-pl": (value) => `scroll-padding-left:${px(value)};`,
  "snap": (value) => `scroll-snap-align:${cssvar(value)};`,
  "snap-start": () => `scroll-snap-align:start;`,
  "snap-end": () => `scroll-snap-align:end;`,
  "snap-center": () => `scroll-snap-align:center;`,
  "snap-align-none": () => `scroll-snap-align:none;`,
  "snap-none": () => `scroll-snap-type:none;`,
  "snap-x": () => `scroll-snap-type:x var(--a-scroll-snap-strictness, mandatory);`,
  "snap-x-proximity": () => `scroll-snap-type:x proximity;`,
  "snap-y": () => `scroll-snap-type:y var(--a-scroll-snap-strictness, mandatory);`,
  "snap-y-proximity": () => `scroll-snap-type:y proximity;`,
  "snap-both": () => `scroll-snap-type:both var(--a-scroll-snap-strictness, mandatory);`,
  "snap-both-proximity": () => `scroll-snap-type:both proximity;`,
  "snap-mandatory": () => `--a-scroll-snap-strictness:mandatory;`,
  "snap-proximity": () => `--a-scroll-snap-strictness:proximity;`,
  "snap-normal": () => `scroll-snap-stop:normal;`,
  "snap-always": () => `scroll-snap-stop:always;`,
  "overscroll": (value) => `overscroll-behavior:${value};`,
  "overscroll-x": (value) => `overscroll-behavior-x:${value};`,
  "overscroll-y": (value) => `overscroll-behavior-y:${value};`,
  "no-bouncing": () => "",
  "no-overscroll": () => "",
  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "nowrap": () => `white-space:nowrap;flex-shrink:0;`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;`,
  "line-clamp": (value) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "max-lines": (value) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "text-indent": (value) => `text-indent:${px(value)};`,
  "layer": (value = "") => {
    const pos = { top: "0", right: "0", bottom: "0", left: "0" };
    const outsides = [];
    let outside = false;
    value.split("+").forEach((v) => {
      const [direction, value2 = "0"] = v.split(":");
      switch (direction) {
        case "top": {
          pos.top = value2;
          delete pos.bottom;
          outsides.push("top");
          return;
        }
        case "right": {
          pos.right = value2;
          delete pos.left;
          outsides.push("right");
          return;
        }
        case "bottom": {
          pos.bottom = value2;
          delete pos.top;
          outsides.push("bottom");
          return;
        }
        case "left": {
          pos.left = value2;
          delete pos.right;
          outsides.push("left");
          return;
        }
        case "outside": {
          outside = true;
          return;
        }
      }
    });
    if (outside) {
      const revert = (b, a) => {
        pos[a] = pos[b] === "0" ? "100%" : `calc(100% + ${px(pos[b])})`;
        delete pos[b];
      };
      outsides.forEach((direction) => {
        switch (direction) {
          case "top":
            return revert("top", "bottom");
          case "right":
            return revert("right", "left");
          case "bottom":
            return revert("bottom", "top");
          case "left":
            return revert("left", "right");
        }
      });
    }
    return `position:absolute;` + Object.keys(pos).map((value2) => `${value2}:${px(pos[value2])};`).join("");
  },
  "absolute": (value) => `position:absolute;${makePosition(value)}`,
  "relative": (value) => `position:relative;${makePosition(value)}`,
  "sticky": (value) => `position:sticky;${makePosition(value)}`,
  "sticky-top": (value = "0") => `position:sticky;top:${px(value)};`,
  "sticky-right": (value = "0") => `position:sticky;right:${px(value)};`,
  "sticky-bottom": (value = "0") => `position:sticky;bottom:${px(value)};`,
  "sticky-left": (value = "0") => `position:sticky;left:${px(value)};`,
  "fixed": (value) => `position:fixed;${makePosition(value)}`,
  "static": () => `position:static;`,
  "x": (value) => `left:${px(value)};`,
  "y": (value) => `top:${px(value)};`,
  "z": (value) => `z-index:${cssvar(value)};`,
  "top": (value) => `top:${px(value)};`,
  "left": (value) => `left:${px(value)};`,
  "right": (value) => `right:${px(value)};`,
  "bottom": (value) => `bottom:${px(value)};`,
  "none": () => `display:none;`,
  "hidden": () => `visibility:hidden;`,
  "invisible": () => `visibility:hidden;`,
  "gone": () => `position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);`,
  "opacity": (value) => `opacity:${cssvar(value)};`,
  "visible": () => `visibility:visible;`,
  "col-resize": () => `cursor: col-resize;`,
  "crosshair": () => `cursor: crosshair;`,
  "e-resize": () => `cursor: e-resize;`,
  "ew-resize": () => `cursor: ew-resize;`,
  "grab": () => `&{cursor:grab;}&:active{cursor:grabbing;}`,
  "grabbing": () => `cursor: grabbing;`,
  "n-resize": () => `cursor: n-resize;`,
  "ne-resize": () => `cursor: ne-resize;`,
  "nesw-resize": () => `cursor: nesw-resize;`,
  "ns-resize": () => `cursor: ns-resize;`,
  "nw-resize": () => `cursor: nw-resize;`,
  "nwse-resize": () => `cursor: nwse-resize;`,
  "not-allowed": () => `cursor: not-allowed;`,
  "pointer": () => `cursor: pointer;`,
  "progress": () => `cursor: progress;`,
  "row-resize": () => `cursor: row-resize;`,
  "s-resize": () => `cursor: s-resize;`,
  "se-resize": () => `cursor: se-resize;`,
  "sw-resize": () => `cursor: sw-resize;`,
  "w-resize": () => `cursor: w-resize;`,
  "zoom-in": () => `cursor: zoom-in;`,
  "zoom-out": () => `cursor: zoom-out;`,
  "cursor": (value) => `cursor:${value};`,
  "user-select-none": () => "user-select:none;-webkit-user-select:none;",
  "user-select-all": () => "user-select:all;-webkit-user-select:all;",
  "user-select-auto": () => "user-select:auto;-webkit-user-select:auto;",
  "user-select-text": () => "user-select:text;-webkit-user-select:text;",
  "user-select": (value) => `user-select:${cssvar(value)};-webkit-user-select:${cssvar(value)};`,
  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",
  "transition": (value) => `transition:${makeTransition(value)};`,
  "translate": (value) => `transform:translate(${makeCommaValues(value)});`,
  "translateX": (value) => `transform:translateX(${cssvar(value)});`,
  "translateY": (value) => `transform:translateY(${cssvar(value)});`,
  "translateZ": (value) => `transform:translateZ(${cssvar(value)});`,
  "translate3d": (value) => `transform:translate3d(${makeCommaValues(value)});`,
  "rotate": (value) => `transform:rotate(${makeCommaValues(value)});`,
  "rotateX": (value) => `transform:rotateX(${cssvar(value)});`,
  "rotateY": (value) => `transform:rotateY(${cssvar(value)});`,
  "rotateZ": (value) => `transform:rotateZ(${cssvar(value)});`,
  "rotate3d": (value) => `transform:rotateZ(${makeCommaValues(value)});`,
  "scale": (value) => `transform:scale(${makeCommaValues(value)});`,
  "scaleX": (value) => `transform:scaleX(${makeCommaValues(value)});`,
  "scaleY": (value) => `transform:scaleY(${makeCommaValues(value)});`,
  "scaleZ": (value) => `transform:scaleZ(${makeCommaValues(value)});`,
  "skew": (value) => `transform:skew(${makeCommaValues(value)});`,
  "skewX": (value) => `transform:skewX(${makeCommaValues(value)});`,
  "skewY": (value) => `transform:skewY(${makeCommaValues(value)});`,
  "skewZ": (value) => `transform:skewZ(${makeCommaValues(value)});`,
  "ratio": (value) => `&{position:relative;}&:before{content:"";display:block;width:100%;padding-top:${makeRatio(value)};}&>*{position:absolute;top:0;left:0;width:100%;height:100%;}`,
  "gpu": () => `transform:translateZ(0.1px);`,
  "no-border": () => `border:none;outline:none;`,
  "app-region": (value) => `-webkit-app-region:${value};`,
  "content": (value = "''") => `content:${cssvar(value)}`,
  "clip-path": (value) => `clip-path:${cssvar(value)};-webkit-clip-path:${cssvar(value)};`,
  "table-layout-fixed": () => `table-layout:fixed;`,
  "table-layout-auto": () => `table-layout:auto;`,
  "aspect-ratio": (value) => `aspect-ratio:${cssvar(value.replace(/:/g, "/"))}`,
  "float": (value) => `float:${cssvar(value)};`,
  "clear": (value) => `clear:${cssvar(value)};`,
  "blur": (value) => `filter:blur(${px(value)})`,
  "brightness": (value) => `filter:brightness(${cssvar(value)})`,
  "contrast": (value) => `filter:contrast(${cssvar(value)})`,
  "drop-shadow": (value) => `filter:drop-shadow(${makeValues(value, px)})`,
  "grayscale": (value) => `filter:grayscale(${cssvar(value)})`,
  "hue-rotate": (value) => `filter:hue-rotate(${cssvar(value)})`,
  "invert": (value) => `filter:invert(${cssvar(value)})`,
  "sepia": (value) => `filter:sepia(${cssvar(value)})`,
  "saturate": (value) => `filter:saturate(${cssvar(value)})`,
  "backdrop-blur": (value) => `backdrop-filter:blur(${px(value)})`,
  "backdrop-brightness": (value) => `backdrop-filter:brightness(${cssvar(value)})`,
  "backdrop-contrast": (value) => `backdrop-filter:contrast(${cssvar(value)})`,
  "backdrop-drop-shadow": (value) => `backdrop-filter:drop-shadow(${makeValues(value, px)})`,
  "backdrop-grayscale": (value) => `backdrop-filter:grayscale(${cssvar(value)})`,
  "backdrop-hue-rotate": (value) => `backdrop-filter:hue-rotate(${cssvar(value)})`,
  "backdrop-invert": (value) => `backdrop-filter:invert(${cssvar(value)})`,
  "backdrop-sepia": (value) => `backdrop-filter:sepia(${cssvar(value)})`,
  "backdrop-saturate": (value) => `backdrop-filter:saturate(${cssvar(value)})`,
  "triangle": (value) => {
    const [direction, size, angle = 0] = value.split("/");
    const bd = ["top", "right", "bottom", "left", "top", "right", "bottom", "left"];
    const bdr = bd.slice(bd.indexOf(direction));
    const height = 0.5;
    let css = `width:0;height:0;border:0 solid transparent;`;
    css += "border-" + bdr[1] + "-width:" + Math.round(+size * (-angle + 1) / 2) + "px;";
    css += "border-" + bdr[3] + "-width:" + Math.round(+size * (+angle + 1) / 2) + "px;";
    css += "border-" + bdr[2] + ":" + Math.round(+size * height) + "px solid black;";
    return css;
  },
  "elevation": (value) => {
    const dp = +value;
    if (!dp) {
      return `box-shadow:none;`;
    }
    const blur = dp == 1 ? 3 : dp * 2;
    const amba = (dp + 10 + dp / 9.38) / 100;
    const diry = dp < 10 ? dp % 2 == 0 ? dp - (dp / 2 - 1) : dp - (dp - 1) / 2 : dp - 4;
    const dira = (24 - Math.round(dp / 10)) / 100;
    return `box-shadow:0px ${px(dp)} ${px(blur)} rgba(0,0,0,${amba}),0px ${px(diry)} ${px(blur)} rgba(0,0,0,${dira});`;
  }
};
var PREFIX_PSEUDO_CLASS = {
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
  "group-disabled:": { selector: `html body .group:disabled &,html body .group[disabled] &,html body .group.disabled &` },
  "placeholder:": { selector: `&::placeholder` },
  "odd:": { selector: `&:nth-child(2n+1)` },
  "even:": { selector: `&:nth-child(2n)` },
  "first:": { selector: `&:first-child` },
  "last:": { selector: `&:last-child` },
  "after:": { selector: `&::after` },
  "before:": { selector: `&::before` },
  "selection::": { selector: `&::selection,& *::selection` }
};
var PREFIX_MEDIA_QUERY = {
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
  "tablet:": { media: `(min-device-width:768px) and (max-device-width:1023.98px)`, selector: `html &` },
  "desktop:": { media: `(min-device-width:1024px)`, selector: `html &` },
  "!mobile:": { media: `(min-device-width:768px)`, selector: `html &` },
  "!desktop:": { media: `(max-device-width:1023.98px)`, selector: `html &` },
  "touch:": { media: `(max-device-width:1023.98px)`, selector: `html &` },
  "!touch:": { media: `(min-device-width:1024px)`, selector: `html &` },
  "portrait:": { media: `(orientation:portrait)`, selector: `html &` },
  "landscape:": { media: `(orientation:landscape)`, selector: `html &` },
  "print:": { media: `print`, selector: `html &` },
  "screen:": { media: `screen`, selector: `html &` },
  "speech:": { media: `speech`, selector: `html &` },
  "dark:": { selector: `html.dark &` }
};
var AT_RULE = {
  "@w": (ident, tokens2) => {
    var _a, _b;
    if (((_a = tokens2[2]) == null ? void 0 : _a.value) !== "(" || ((_b = tokens2[tokens2.length - 1]) == null ? void 0 : _b.value) !== ")") {
      throw Error("invalid syntax!");
    }
    const value = tokens2.slice(3, -1).map((t) => t.value).join("");
    if (!value.includes("~")) {
      throw Error("invalid syntax! required '~'.");
    }
    let [min, max] = value.split("~");
    if (min)
      min = `(min-width:${px(+min)})`;
    if (max)
      max = `(max-width:${px(+max - 0.02)})`;
    const rule = [min, max].filter(Boolean).join(" and ");
    return { media: ` only screen and ${rule}`, selector: `html &` };
  }
};
var PREFIX_SELECTOR = {
  ">>": (selector) => `& ${selector.slice(2)}`,
  "&:": (selector) => `${selector}`,
  "&.": (selector) => `${selector}`,
  "&[": (selector) => `${selector}`,
  ".": (selector) => `&${selector},${selector} &`,
  "[": (selector) => `&${selector},${selector} &`,
  ">": (selector) => `&${selector}`,
  "+": (selector) => `&${selector}`,
  "#": (selector) => `&${selector}`
};

// src/core/atomizer.ts
var PREFIX_RULES = __spreadValues(__spreadValues({}, PREFIX_PSEUDO_CLASS), PREFIX_MEDIA_QUERY);
var parseAtoms = (code) => {
  const delimiter = /["'`]|\s+/g;
  const atoms = /* @__PURE__ */ new Set();
  let lastIndex = 0;
  code += " ";
  code.replace(delimiter, (a, index2) => {
    if (code[index2 - 1] === "(" || code[index2 + 1] === ")") {
      return a;
    }
    let token2 = code.slice(lastIndex, index2);
    if (token2.startsWith("class:")) {
      token2 = token2.slice("class:".length).split("=")[0];
    }
    if (token2) {
      atoms.add(token2);
    }
    lastIndex = index2 + a.length;
    return a;
  });
  return [...atoms];
};
var lex = [
  ["(hexcolor)", /(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/],
  ["(important)", /(!+$|!+\+)/],
  ["(string)", /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],
  ["(operator)", /(::|>>|&:|&\.|&\[|[-+~|*/%!#@?:;.,<>=[\](){}])/],
  ["(ident)", /((?:\\.|[^!'":+[\](){}#])+)/],
  ["(unknown)", /./]
];
var regex = new RegExp(lex.map((v) => v[1].source).join("|"), "g");
var tokens = [];
var token;
var index = 0;
var next = (id) => {
  if (id && token && token.id && token.id !== id) {
    throw new Error("Unexpected token: " + token.id + " expected: " + id);
  }
  const t = token;
  token = tokens[index++];
  return t;
};
var tokenize = (script) => {
  tokens = [];
  index = 0;
  script.replace(regex, (value, ...args) => {
    const index2 = args[args.length - 2];
    const type = lex[args.findIndex((v) => v !== void 0)][0];
    const id = type === "(operator)" ? value : type;
    value = type === "(hexcolor)" ? makeHEX(value) : value;
    tokens.push({ type, id, value, index: index2 });
    return value;
  });
  next();
  return tokens;
};
var expr = () => {
  const args = [];
  const push = (v) => args.push(v);
  const stack = [];
  while (token) {
    if (token.id === "(" || token.id === "[" || token.id === "{") {
      stack.push(token.id);
    } else if (token.id === ")" || token.id === "]" || token.id === "}") {
      const prev = stack.pop();
      if (prev === "(" && token.id === ")") {
      } else if (prev === "[" && token.id === "]") {
      } else if (prev === "{" && token.id === "}") {
      } else
        throw new Error("Unexpected:" + token.id);
    } else if (stack.length === 0 && (token.id === ":" || token.id === "::" || token.id === "(important)" || token.id === "+")) {
      break;
    }
    push(next());
  }
  if (stack.length > 0)
    throw new Error("Unexpected end of input");
  return args;
};
var parsePrefix = (prefixRules, e) => {
  const type = e[0].value;
  const selector = e.map((e2) => e2.value).join("");
  const makePseudo = prefixRules[selector + token.id];
  if (makePseudo) {
    return makePseudo;
  }
  const makeSelector = PREFIX_SELECTOR[type];
  if (makeSelector) {
    return { selector: makeSelector(selector).replace(/>>/g, " ") };
  }
  const value = e.slice(0, 2).map((r) => r.value).join("");
  const makeAtRule = AT_RULE[value];
  if (makeAtRule) {
    return makeAtRule(selector, e);
  }
  if (/^[-a-z]+$/.test(type)) {
    return { selector: `&${token.id}${selector}` };
  }
  throw new Error("Invalid Prefix Syntax:" + token.id);
};
var generateAtomicCss = (rules, prefixRules) => {
  const priorityTable = Object.fromEntries(Object.keys(rules).map((key, index2) => [key, index2 + 1]));
  return (script) => {
    try {
      tokenize(script);
      const selectors = [];
      const declarations = [];
      while (token) {
        const e = expr();
        if (e.find((e2) => e2.id === "(") && e[e.length - 1].id !== ")") {
          throw new Error("Invalid Syntax!");
        }
        if (token && (token.id === ":" || token.id === "::")) {
          const rule = parsePrefix(prefixRules, e);
          selectors.push(rule);
          next();
          continue;
        }
        if (!token || token.id === "(important)" || token.id === "+") {
          let property = e[0].value;
          if (property === ">>") {
            selectors.push({ selector: "& *" });
            e.shift();
            property = e[0].value;
          } else if (property === ">") {
            selectors.push({ selector: "&>*" });
            e.shift();
            property = e[0].value;
          }
          const value = e.slice(2, -1).map((r) => r.value).join("");
          const rule = rules[property];
          let priority = priorityTable[property + property.includes("(") ? "(" : ""] || priorityTable[property] || 0;
          let declaration = (() => {
            if (rule)
              return value === "" ? rule() : rule(value);
            if (value && ALL_PROPERTIES[property])
              return `${property}:${makeValues(value)};`;
            throw new Error("Not defined property: " + property);
          })();
          if (declaration.search("undefined") >= 0) {
            throw new Error("Not defined property: " + property);
          }
          if (token && token.id === "(important)") {
            declaration = declaration.replace(/;/g, (a, b, c) => c.charAt(b - 1) !== "\\" ? "!important;" : a);
            priority = 9999 + token.value.length;
          }
          declarations.push({ declaration, priority });
        }
        next();
      }
      const mediaQuery = selectors.map((a) => a.media).filter(Boolean);
      const media = mediaQuery.length ? "@media" + mediaQuery.join(" and ") : "";
      const atom = "." + cssEscape(script);
      const selector = selectors.map((a) => a.selector).filter(Boolean).map((selector2) => selector2.split(",")).reduce((prev, curr) => {
        return prev.map((prev2) => curr.map((selector2) => selector2.replace(/&/g, prev2))).flat();
      }, [atom]).join(",");
      return declarations.map(({ declaration, priority }) => {
        if (!declaration) {
          throw new Error("no declaration");
        }
        const rule = declaration.includes("&") ? declaration.replace(/&/g, selector) : selector + "{" + declaration + "}";
        const rule2 = selectors.length ? rule + "{}" : rule;
        return [media ? media + "{" + rule2 + "}" : rule2, priority];
      });
    } catch (e) {
    }
  };
};
var sortByRule = (a, b) => a[1] - b[1];
var createGenerateCss = (rules = {}, prefixRules = {}) => {
  rules = __spreadValues(__spreadValues({}, RULES), rules);
  prefixRules = __spreadValues(__spreadValues({}, PREFIX_RULES), prefixRules);
  return (classList) => classList.flatMap(generateAtomicCss(rules, prefixRules)).filter(Boolean).sort(sortByRule).map((a) => a[0]);
};
var generateCss = createGenerateCss();

// src/node/build.ts
var import_chokidar = __toESM(require_chokidar());
var import_promises = __toESM(require("fs/promises"));
var import_path = __toESM(require("path"));
var import_clean_css = __toESM(require_clean_css());
var import_glob = __toESM(require_glob());
var minifier = new import_clean_css.default();
var supportedExts = ["svelte", "tsx", "jsx", "vue", "mdx", "svx", "html"];
function build(root, options) {
  const context = __spreadProps(__spreadValues({}, resolveBuildContext(root, options)), {
    resolver: writeToFile
  });
  if (!context.watch) {
    return buildOnce(context);
  } else {
    return watch(context);
  }
  async function writeToFile(style) {
    await import_promises.default.mkdir(import_path.default.dirname(context.out), { recursive: true });
    await import_promises.default.writeFile(context.out, style, { encoding: "utf-8" });
  }
}
function resolveBuildContext(root, options) {
  return {
    "root": root != null ? root : ".",
    "out": options.out,
    "watch": options.watch,
    "minify": options.minify,
    "verbose": options.verbose,
    "reset": options["reset"]
  };
}
function buildOnce(context) {
  const pattern = import_path.default.join(context.root, "**", `?(${supportedExts.map((ext) => `*.${ext}`)})`);
  (0, import_glob.default)(pattern, async (_, matches) => {
    const entry = await filesToEntry(matches);
    const style = entryToStyle(context, entry);
    context.resolver(style);
  });
}
function watch(context) {
  let entry = {};
  const notify = () => {
    context.resolver(entryToStyle(context, entry));
  };
  const pattern = import_path.default.join(context.root, "**", `*.{${supportedExts.join(",")}}`);
  const watcher = import_chokidar.default.watch(pattern, {
    ignored: (path2) => path2.includes("node_modules")
  });
  watcher.on("change", async (filepath) => {
    log(context, `File changed : [1m${filepath}[0m`);
    entry[filepath] = await parseAtomsFromFile(filepath);
    notify();
  });
  watcher.on("ready", async () => {
    const watchedPaths = watcher.getWatched();
    log(context, "Watching files under :", `[1m${context.root}[0m`);
    const files = Object.entries(watchedPaths).flatMap(([filepath, files2]) => files2.flatMap((file) => import_path.default.join(filepath, file)));
    entry = await filesToEntry(files);
    notify();
  });
}
async function filesToEntry(files) {
  const entry = {};
  const promises = files.map(async (file) => {
    const atoms = await parseAtomsFromFile(file);
    if (atoms) {
      entry[file] = atoms;
    }
  });
  await Promise.all(promises);
  return entry;
}
async function parseAtomsFromFile(file) {
  if (!(await import_promises.default.lstat(file)).isFile()) {
    return void 0;
  }
  const data = await import_promises.default.readFile(file, "utf-8");
  return parseAtoms(data);
}
function entryToStyle(context, entry) {
  const allAtoms = Object.values(entry).flat();
  const styles = generateCss([...new Set(allAtoms)]);
  const css = (context["reset"] && styles || [reset, ...styles]).join("\n");
  return context.minify && minifier.minify(css).styles || css;
}
function log(context, ...msg) {
  if (context.verbose) {
    console.log("[adorable-css]", ...msg);
  }
}

// src/node/cli.ts
var VERSION_CLI = "0.1.0";
var cli = cac("adorable-css");
cli.command("[root]", "build for production").alias("build").option("-o, --out <dir>", "[string] output Directory", {
  default: "adorable.css"
}).option("-w, --watch", "rebuilds when modules have changed on disk", {
  default: false
}).option("-m, --minify", "minify output css", {
  default: false
}).option("-v, --verbose", "verbose build output", {
  default: false
}).option("--no-reset", "exclude reset css from output").action(build);
cli.help();
cli.version(VERSION_CLI);
if (require.main === module) {
  cli.parse(process.argv, { run: true });
}
var cli_default = cli;
module.exports = __toCommonJS(cli_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VERSION_CLI
});
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
