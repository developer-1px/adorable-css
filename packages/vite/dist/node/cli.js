var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    var path3 = require("path");
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
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
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
    };
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
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path3.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win322) {
        return win322 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// ../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path3 = require("path");
    var win322 = process.platform === "win32";
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
      return str.replace(REGEX_REMOVE_BACKSLASH, (match2) => {
        return match2 === "\\" ? "" : match2;
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
      return win322 === true || path3.sep === "\\";
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
    var utils = require_utils();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
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
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens2 = [bos];
      const capture = opts.capture ? "" : "?:";
      const win322 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win322);
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
      let star3 = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star3 = `(${star3})`;
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
            prev.output = star3;
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
        const token2 = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
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
          let extglobStar = star3;
          if (token2.inner && token2.inner.length > 1 && token2.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star3 || eos() || /^\)+$/.test(remaining())) {
            output = token2.close = `)$))${extglobStar}`;
          }
          if (token2.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
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
              return esc + first + (rest ? star3 : "");
            }
            return star3;
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
          const match2 = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match2 && match2[0].length > 2) {
            slashes = match2[0].length;
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
                const posix2 = POSIX_REGEX_SOURCE[rest2];
                if (posix2) {
                  prev.value = pre + posix2;
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
          const match2 = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match2) {
            value += match2[0];
            state.index += match2[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star3;
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
        const token2 = { type: "star", value, output: star3 };
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
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win322 = utils.isWindows(options);
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
      } = constants.globChars(win322);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star3 = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star3 = `(${star3})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true)
          return star3;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star3}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star3}`;
          case "*.*":
            return `${nodot}${star3}${DOT_LITERAL}${ONE_CHAR}${star3}`;
          case "*/*":
            return `${nodot}${star3}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star3}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star3}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star3}${DOT_LITERAL}${ONE_CHAR}${star3}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star3}`;
          default: {
            const match2 = /^(.*?)\.(\w+)$/.exec(str);
            if (!match2)
              return;
            const source2 = create(match2[1]);
            if (!source2)
              return;
            return source2 + DOT_LITERAL + match2[2];
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
    var path3 = require("path");
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
      const posix2 = utils.isWindows(options);
      const regex2 = isState ? picomatch.compileRe(glob2, options) : picomatch.makeRe(glob2, options, false, true);
      const state = regex2.state;
      delete regex2.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match: match2, output } = picomatch.test(input, regex2, options, { glob: glob2, posix: posix2 });
        const result = { glob: glob2, state, regex: regex2, posix: posix2, input, output, match: match2, isMatch };
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
    picomatch.test = (input, regex2, options, { glob: glob2, posix: posix2 } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix2 ? utils.toPosixSlashes : null);
      let match2 = input === glob2;
      let output = match2 && format ? format(input) : input;
      if (match2 === false) {
        output = format ? format(input) : input;
        match2 = output === glob2;
      }
      if (match2 === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match2 = picomatch.matchBase(input, regex2, options, posix2);
        } else {
          match2 = regex2.exec(output);
        }
      }
      return { isMatch: Boolean(match2), match: match2, output };
    };
    picomatch.matchBase = (input, glob2, options, posix2 = utils.isWindows(options)) => {
      const regex2 = glob2 instanceof RegExp ? glob2 : picomatch.makeRe(glob2, options);
      return regex2.test(path3.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern))
        return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
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
    module2.exports = require_picomatch();
  }
});

// ../../node_modules/.pnpm/readdirp@3.6.0/node_modules/readdirp/index.js
var require_readdirp = __commonJS({
  "../../node_modules/.pnpm/readdirp@3.6.0/node_modules/readdirp/index.js"(exports, module2) {
    "use strict";
    var fs2 = require("fs");
    var { Readable } = require("stream");
    var sysPath = require("path");
    var { promisify } = require("util");
    var picomatch = require_picomatch2();
    var readdir2 = promisify(fs2.readdir);
    var stat = promisify(fs2.stat);
    var lstat2 = promisify(fs2.lstat);
    var realpath2 = promisify(fs2.realpath);
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
    var normalizeFilter = (filter2) => {
      if (filter2 === void 0)
        return;
      if (typeof filter2 === "function")
        return filter2;
      if (typeof filter2 === "string") {
        const glob2 = picomatch(filter2.trim());
        return (entry) => glob2(entry.basename);
      }
      if (Array.isArray(filter2)) {
        const positive = [];
        const negative = [];
        for (const item of filter2) {
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
    var ReaddirpStream = class _ReaddirpStream extends Readable {
      static get defaultOptions() {
        return {
          root: ".",
          /* eslint-disable no-unused-vars */
          fileFilter: (path3) => true,
          directoryFilter: (path3) => true,
          /* eslint-enable no-unused-vars */
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
        const opts = { ..._ReaddirpStream.defaultOptions, ...options };
        const { root, type } = opts;
        this._fileFilter = normalizeFilter(opts.fileFilter);
        this._directoryFilter = normalizeFilter(opts.directoryFilter);
        const statMethod = opts.lstat ? lstat2 : stat;
        if (wantBigintFsStats) {
          this._stat = (path3) => statMethod(path3, { bigint: true });
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
            const { path: path3, depth, files = [] } = this.parent || {};
            if (files.length > 0) {
              const slice = files.splice(0, batch).map((dirent) => this._formatEntry(dirent, path3));
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
      async _exploreDir(path3, depth) {
        let files;
        try {
          files = await readdir2(path3, this._rdOptions);
        } catch (error) {
          this._onError(error);
        }
        return { files, depth, path: path3 };
      }
      async _formatEntry(dirent, path3) {
        let entry;
        try {
          const basename = this._isDirent ? dirent.name : dirent;
          const fullPath = sysPath.resolve(sysPath.join(path3, basename));
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
            const entryRealPath = await realpath2(full);
            const entryRealPathStats = await lstat2(entryRealPath);
            if (entryRealPathStats.isFile()) {
              return "file";
            }
            if (entryRealPathStats.isDirectory()) {
              const len = entryRealPath.length;
              if (full.startsWith(entryRealPath) && full.substr(len, 1) === sysPath.sep) {
                const recursiveError = new Error(
                  `Circular symlink detected: "${full}" points to "${entryRealPath}"`
                );
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
    module2.exports = function(path3, stripTrailing) {
      if (typeof path3 !== "string") {
        throw new TypeError("expected path to be a string");
      }
      if (path3 === "\\" || path3 === "/")
        return "/";
      var len = path3.length;
      if (len <= 1)
        return path3;
      var prefix = "";
      if (len > 4 && path3[3] === "\\") {
        var ch = path3[2];
        if ((ch === "?" || ch === ".") && path3.slice(0, 2) === "\\\\") {
          path3 = path3.slice(2);
          prefix = "//";
        }
      }
      var segs = path3.split(/[/\\]+/);
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
      const path3 = normalizePath(_path);
      for (let index2 = 0; index2 < negPatterns.length; index2++) {
        const nglob = negPatterns[index2];
        if (nglob(path3)) {
          return returnIndex ? -1 : false;
        }
      }
      const applied = isList && [path3].concat(args.slice(1));
      for (let index2 = 0; index2 < patterns.length; index2++) {
        const pattern = patterns[index2];
        if (isList ? pattern(...applied) : pattern(path3)) {
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
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match2;
      while (match2 = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match2[2])
          return true;
        str = str.slice(match2.index + match2[0].length);
      }
      return false;
    };
  }
});

// ../../node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "../../node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js"(exports, module2) {
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
      let opts = { relaxZeros: true, ...options };
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
        return toRegexRange(a, b, { wrap: false, ...options });
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
        return step > 1 ? toSequence(parts, options) : toRegex(range, null, { wrap: false, ...options });
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
      let opts = { ...options };
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
          let range = fill(...args, { ...options, wrap: false, toRegex: true });
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
    var expand2 = (ast, options = {}) => {
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
    module2.exports = expand2;
  }
});

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/parse.js
var require_parse2 = __commonJS({
  "../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/parse.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
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
    var stringify = require_stringify();
    var compile = require_compile();
    var expand2 = require_expand();
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
      let result = expand2(input, options);
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
    module2.exports = require_binary_extensions();
  }
});

// ../../node_modules/.pnpm/is-binary-path@2.1.0/node_modules/is-binary-path/index.js
var require_is_binary_path = __commonJS({
  "../../node_modules/.pnpm/is-binary-path@2.1.0/node_modules/is-binary-path/index.js"(exports, module2) {
    "use strict";
    var path3 = require("path");
    var binaryExtensions = require_binary_extensions2();
    var extensions = new Set(binaryExtensions);
    module2.exports = (filePath) => extensions.has(path3.extname(filePath).slice(1).toLowerCase());
  }
});

// ../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/constants.js
var require_constants3 = __commonJS({
  "../../node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/constants.js"(exports) {
    "use strict";
    var { sep: sep2 } = require("path");
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
    exports.DOT_SLASH = `.${sep2}`;
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
    var lstat2 = promisify(fs2.lstat);
    var close = promisify(fs2.close);
    var fsrealpath = promisify(fs2.realpath);
    var statMethods = { lstat: lstat2, stat };
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
    function createFsWatchInstance(path3, options, listener, errHandler, emitRaw) {
      const handleEvent = (rawEvent, evPath) => {
        listener(path3);
        emitRaw(rawEvent, evPath, { watchedPath: path3 });
        if (evPath && path3 !== evPath) {
          fsWatchBroadcast(
            sysPath.resolve(path3, evPath),
            KEY_LISTENERS,
            sysPath.join(path3, evPath)
          );
        }
      };
      try {
        return fs2.watch(path3, options, handleEvent);
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
    var setFsWatchListener = (path3, fullPath, options, handlers) => {
      const { listener, errHandler, rawEmitter } = handlers;
      let cont = FsWatchInstances.get(fullPath);
      let watcher;
      if (!options.persistent) {
        watcher = createFsWatchInstance(
          path3,
          options,
          listener,
          errHandler,
          rawEmitter
        );
        return watcher.close.bind(watcher);
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_ERR, errHandler);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        watcher = createFsWatchInstance(
          path3,
          options,
          fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS),
          errHandler,
          // no need to use broadcast here
          fsWatchBroadcast.bind(null, fullPath, KEY_RAW)
        );
        if (!watcher)
          return;
        watcher.on(EV_ERROR, async (error) => {
          const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
          cont.watcherUnusable = true;
          if (isWindows && error.code === "EPERM") {
            try {
              const fd = await open(path3, "r");
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
    var setFsWatchFileListener = (path3, fullPath, options, handlers) => {
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
              foreach(cont.listeners, (listener2) => listener2(path3, curr));
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
      /**
       * @param {import("../index").FSWatcher} fsW
       */
      constructor(fsW) {
        this.fsw = fsW;
        this._boundHandleError = (error) => fsW._handleError(error);
      }
      /**
       * Watch file for changes with fs_watchFile or fs_watch.
       * @param {String} path to file or dir
       * @param {Function} listener on fs change
       * @returns {Function} closer for the watcher instance
       */
      _watchWithNodeFs(path3, listener) {
        const opts = this.fsw.options;
        const directory = sysPath.dirname(path3);
        const basename = sysPath.basename(path3);
        const parent = this.fsw._getWatchedDir(directory);
        parent.add(basename);
        const absolutePath = sysPath.resolve(path3);
        const options = { persistent: opts.persistent };
        if (!listener)
          listener = EMPTY_FN;
        let closer;
        if (opts.usePolling) {
          options.interval = opts.enableBinaryInterval && isBinaryPath(basename) ? opts.binaryInterval : opts.interval;
          closer = setFsWatchFileListener(path3, absolutePath, options, {
            listener,
            rawEmitter: this.fsw._emitRaw
          });
        } else {
          closer = setFsWatchListener(path3, absolutePath, options, {
            listener,
            errHandler: this._boundHandleError,
            rawEmitter: this.fsw._emitRaw
          });
        }
        return closer;
      }
      /**
       * Watch a file and emit add event if warranted.
       * @param {Path} file Path
       * @param {fs.Stats} stats result of fs_stat
       * @param {Boolean} initialAdd was the file added at watch instantiation?
       * @returns {Function} closer for the watcher instance
       */
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
        const listener = async (path3, newStats) => {
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
                this.fsw._closeFile(path3);
                prevStats = newStats2;
                this.fsw._addPathCloser(path3, this._watchWithNodeFs(file, listener));
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
      /**
       * Handle symlinks encountered while reading a dir.
       * @param {Object} entry returned by readdirp
       * @param {String} directory path of dir being read
       * @param {String} path of this item
       * @param {String} item basename of this item
       * @returns {Promise<Boolean>} true if no more processing is needed for this entry.
       */
      async _handleSymlink(entry, directory, path3, item) {
        if (this.fsw.closed) {
          return;
        }
        const full = entry.fullPath;
        const dir = this.fsw._getWatchedDir(directory);
        if (!this.fsw.options.followSymlinks) {
          this.fsw._incrReadyCount();
          let linkPath;
          try {
            linkPath = await fsrealpath(path3);
          } catch (e) {
            this.fsw._emitReady();
            return true;
          }
          if (this.fsw.closed)
            return;
          if (dir.has(item)) {
            if (this.fsw._symlinkPaths.get(full) !== linkPath) {
              this.fsw._symlinkPaths.set(full, linkPath);
              this.fsw._emit(EV_CHANGE, path3, entry.stats);
            }
          } else {
            dir.add(item);
            this.fsw._symlinkPaths.set(full, linkPath);
            this.fsw._emit(EV_ADD, path3, entry.stats);
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
        let stream2 = this.fsw._readdirp(directory, {
          fileFilter: (entry) => wh.filterPath(entry),
          directoryFilter: (entry) => wh.filterDir(entry),
          depth: 0
        }).on(STR_DATA, async (entry) => {
          if (this.fsw.closed) {
            stream2 = void 0;
            return;
          }
          const item = entry.path;
          let path3 = sysPath.join(directory, item);
          current.add(item);
          if (entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path3, item)) {
            return;
          }
          if (this.fsw.closed) {
            stream2 = void 0;
            return;
          }
          if (item === target || !target && !previous.has(item)) {
            this.fsw._incrReadyCount();
            path3 = sysPath.join(dir, sysPath.relative(dir, path3));
            this._addToNodeFs(path3, initialAdd, wh, depth + 1);
          }
        }).on(EV_ERROR, this._boundHandleError);
        return new Promise(
          (resolve) => stream2.once(STR_END, () => {
            if (this.fsw.closed) {
              stream2 = void 0;
              return;
            }
            const wasThrottled = throttler ? throttler.clear() : false;
            resolve();
            previous.getChildren().filter((item) => {
              return item !== directory && !current.has(item) && // in case of intersecting globs;
              // a path may have been filtered out of this readdir, but
              // shouldn't be removed because it matches a different glob
              (!wh.hasGlob || wh.filterPath({
                fullPath: sysPath.resolve(directory, item)
              }));
            }).forEach((item) => {
              this.fsw._remove(directory, item);
            });
            stream2 = void 0;
            if (wasThrottled)
              this._handleRead(directory, false, wh, target, dir, depth, throttler);
          })
        );
      }
      /**
       * Read directory to add / remove files from `@watched` list and re-read it on change.
       * @param {String} dir fs path
       * @param {fs.Stats} stats
       * @param {Boolean} initialAdd
       * @param {Number} depth relative to user-supplied path
       * @param {String} target child path targeted for watch
       * @param {Object} wh Common watch helpers for this path
       * @param {String} realpath
       * @returns {Promise<Function>} closer for the watcher instance.
       */
      async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath2) {
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
        if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath2)) {
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
      /**
       * Handle added file, directory, or glob pattern.
       * Delegates call to _handleFile / _handleDir after checks.
       * @param {String} path to file or ir
       * @param {Boolean} initialAdd was the file added at watch instantiation?
       * @param {Object} priorWh depth relative to user-supplied path
       * @param {Number} depth Child path actually targeted for watch
       * @param {String=} target Child path actually targeted for watch
       * @returns {Promise}
       */
      async _addToNodeFs(path3, initialAdd, priorWh, depth, target) {
        const ready = this.fsw._emitReady;
        if (this.fsw._isIgnored(path3) || this.fsw.closed) {
          ready();
          return false;
        }
        const wh = this.fsw._getWatchHelpers(path3, depth);
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
          const follow = this.fsw.options.followSymlinks && !path3.includes(STAR) && !path3.includes(BRACE_START);
          let closer;
          if (stats.isDirectory()) {
            const absPath = sysPath.resolve(path3);
            const targetPath = follow ? await fsrealpath(path3) : path3;
            if (this.fsw.closed)
              return;
            closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (absPath !== targetPath && targetPath !== void 0) {
              this.fsw._symlinkPaths.set(absPath, targetPath);
            }
          } else if (stats.isSymbolicLink()) {
            const targetPath = follow ? await fsrealpath(path3) : path3;
            if (this.fsw.closed)
              return;
            const parent = sysPath.dirname(wh.watchPath);
            this.fsw._getWatchedDir(parent).add(wh.watchPath);
            this.fsw._emit(EV_ADD, wh.watchPath, stats);
            closer = await this._handleDir(parent, stats, initialAdd, depth, path3, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (targetPath !== void 0) {
              this.fsw._symlinkPaths.set(sysPath.resolve(path3), targetPath);
            }
          } else {
            closer = this._handleFile(wh.watchPath, stats, initialAdd);
          }
          ready();
          this.fsw._addPathCloser(path3, closer);
          return false;
        } catch (error) {
          if (this.fsw._handleError(error)) {
            ready();
            return path3;
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

// node-file:/Users/kakao/Desktop/@adorable-css/node_modules/.pnpm/fsevents@2.3.2/node_modules/fsevents/fsevents.node
var require_fsevents = __commonJS({
  "node-file:/Users/kakao/Desktop/@adorable-css/node_modules/.pnpm/fsevents@2.3.2/node_modules/fsevents/fsevents.node"(exports, module2) {
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
    if (process.platform !== "darwin") {
      throw new Error(`Module 'fsevents' is not compatible with platform '${process.platform}'`);
    }
    var Native = require_fsevents();
    var events = Native.constants;
    function watch2(path3, since, handler) {
      if (typeof path3 !== "string") {
        throw new TypeError(`fsevents argument 1 must be a string and not a ${typeof path3}`);
      }
      if ("function" === typeof since && "undefined" === typeof handler) {
        handler = since;
        since = Native.flags.SinceNow;
      }
      if (typeof since !== "number") {
        throw new TypeError(`fsevents argument 2 must be a number and not a ${typeof since}`);
      }
      if (typeof handler !== "function") {
        throw new TypeError(`fsevents argument 3 must be a function and not a ${typeof handler}`);
      }
      let instance = Native.start(Native.global, path3, since, handler);
      if (!instance)
        throw new Error(`could not watch: ${path3}`);
      return () => {
        const result = instance ? Promise.resolve(instance).then(Native.stop) : Promise.resolve(void 0);
        instance = void 0;
        return result;
      };
    }
    function getInfo(path3, flags) {
      return {
        path: path3,
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
      // FSEVENT_CLONED,
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
    var lstat2 = promisify(fs2.lstat);
    var realpath2 = promisify(fs2.realpath);
    var statMethods = { stat, lstat: lstat2 };
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
    var createFSEventsInstance = (path3, callback) => {
      const stop = fsevents.watch(path3, callback);
      return { stop };
    };
    function setFSEventsListener(path3, realPath, listener, rawEmitter) {
      let watchPath = sysPath.extname(realPath) ? sysPath.dirname(realPath) : realPath;
      const parentPath = sysPath.dirname(watchPath);
      let cont = FSEventsWatchers.get(watchPath);
      if (couldConsolidate(parentPath)) {
        watchPath = parentPath;
      }
      const resolvedPath = sysPath.resolve(path3);
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
    var couldConsolidate = (path3) => {
      let count = 0;
      for (const watchPath of FSEventsWatchers.keys()) {
        if (watchPath.indexOf(path3) === 0) {
          count++;
          if (count >= consolidateThreshhold) {
            return true;
          }
        }
      }
      return false;
    };
    var canUse = () => fsevents && FSEventsWatchers.size < 128;
    var calcDepth = (path3, root) => {
      let i = 0;
      while (!path3.indexOf(root) && (path3 = sysPath.dirname(path3)) !== root)
        i++;
      return i;
    };
    var sameTypes = (info, stats) => info.type === FSEVENT_TYPE_DIRECTORY && stats.isDirectory() || info.type === FSEVENT_TYPE_SYMLINK && stats.isSymbolicLink() || info.type === FSEVENT_TYPE_FILE && stats.isFile();
    var FsEventsHandler = class {
      /**
       * @param {import('../index').FSWatcher} fsw
       */
      constructor(fsw) {
        this.fsw = fsw;
      }
      checkIgnored(path3, stats) {
        const ipaths = this.fsw._ignoredPaths;
        if (this.fsw._isIgnored(path3, stats)) {
          ipaths.add(path3);
          if (stats && stats.isDirectory()) {
            ipaths.add(path3 + ROOT_GLOBSTAR);
          }
          return true;
        }
        ipaths.delete(path3);
        ipaths.delete(path3 + ROOT_GLOBSTAR);
      }
      addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts) {
        const event = watchedDir.has(item) ? EV_CHANGE : EV_ADD;
        this.handleEvent(event, path3, fullPath, realPath, parent, watchedDir, item, info, opts);
      }
      async checkExists(path3, fullPath, realPath, parent, watchedDir, item, info, opts) {
        try {
          const stats = await stat(path3);
          if (this.fsw.closed)
            return;
          if (sameTypes(info, stats)) {
            this.addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
          } else {
            this.handleEvent(EV_UNLINK, path3, fullPath, realPath, parent, watchedDir, item, info, opts);
          }
        } catch (error) {
          if (error.code === "EACCES") {
            this.addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
          } else {
            this.handleEvent(EV_UNLINK, path3, fullPath, realPath, parent, watchedDir, item, info, opts);
          }
        }
      }
      handleEvent(event, path3, fullPath, realPath, parent, watchedDir, item, info, opts) {
        if (this.fsw.closed || this.checkIgnored(path3))
          return;
        if (event === EV_UNLINK) {
          const isDirectory = info.type === FSEVENT_TYPE_DIRECTORY;
          if (isDirectory || watchedDir.has(item)) {
            this.fsw._remove(parent, item, isDirectory);
          }
        } else {
          if (event === EV_ADD) {
            if (info.type === FSEVENT_TYPE_DIRECTORY)
              this.fsw._getWatchedDir(path3);
            if (info.type === FSEVENT_TYPE_SYMLINK && opts.followSymlinks) {
              const curDepth = opts.depth === void 0 ? void 0 : calcDepth(fullPath, realPath) + 1;
              return this._addToFsEvents(path3, false, true, curDepth);
            }
            this.fsw._getWatchedDir(parent).add(item);
          }
          const eventName = info.type === FSEVENT_TYPE_DIRECTORY ? event + DIR_SUFFIX : event;
          this.fsw._emit(eventName, path3);
          if (eventName === EV_ADD_DIR)
            this._addToFsEvents(path3, false, true);
        }
      }
      /**
       * Handle symlinks encountered during directory scan
       * @param {String} watchPath  - file/dir path to be watched with fsevents
       * @param {String} realPath   - real path (in case of symlinks)
       * @param {Function} transform  - path transformer
       * @param {Function} globFilter - path filter in case a glob pattern was provided
       * @returns {Function} closer for the watcher instance
      */
      _watchWithFsEvents(watchPath, realPath, transform, globFilter) {
        if (this.fsw.closed || this.fsw._isIgnored(watchPath))
          return;
        const opts = this.fsw.options;
        const watchCallback = async (fullPath, flags, info) => {
          if (this.fsw.closed)
            return;
          if (opts.depth !== void 0 && calcDepth(fullPath, realPath) > opts.depth)
            return;
          const path3 = transform(sysPath.join(
            watchPath,
            sysPath.relative(watchPath, fullPath)
          ));
          if (globFilter && !globFilter(path3))
            return;
          const parent = sysPath.dirname(path3);
          const item = sysPath.basename(path3);
          const watchedDir = this.fsw._getWatchedDir(
            info.type === FSEVENT_TYPE_DIRECTORY ? path3 : parent
          );
          if (wrongEventFlags.has(flags) || info.event === FSEVENT_UNKNOWN) {
            if (typeof opts.ignored === FUNCTION_TYPE) {
              let stats;
              try {
                stats = await stat(path3);
              } catch (error) {
              }
              if (this.fsw.closed)
                return;
              if (this.checkIgnored(path3, stats))
                return;
              if (sameTypes(info, stats)) {
                this.addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
              } else {
                this.handleEvent(EV_UNLINK, path3, fullPath, realPath, parent, watchedDir, item, info, opts);
              }
            } else {
              this.checkExists(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          } else {
            switch (info.event) {
              case FSEVENT_CREATED:
              case FSEVENT_MODIFIED:
                return this.addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
              case FSEVENT_DELETED:
              case FSEVENT_MOVED:
                return this.checkExists(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          }
        };
        const closer = setFSEventsListener(
          watchPath,
          realPath,
          watchCallback,
          this.fsw._emitRaw
        );
        this.fsw._emitReady();
        return closer;
      }
      /**
       * Handle symlinks encountered during directory scan
       * @param {String} linkPath path to symlink
       * @param {String} fullPath absolute path to the symlink
       * @param {Function} transform pre-existing path transformer
       * @param {Number} curDepth level of subdirectories traversed to where symlink is
       * @returns {Promise<void>}
       */
      async _handleFsEventsSymlink(linkPath, fullPath, transform, curDepth) {
        if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath))
          return;
        this.fsw._symlinkPaths.set(fullPath, true);
        this.fsw._incrReadyCount();
        try {
          const linkTarget = await realpath2(linkPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(linkTarget)) {
            return this.fsw._emitReady();
          }
          this.fsw._incrReadyCount();
          this._addToFsEvents(linkTarget || linkPath, (path3) => {
            let aliasedPath = linkPath;
            if (linkTarget && linkTarget !== DOT_SLASH) {
              aliasedPath = path3.replace(linkTarget, linkPath);
            } else if (path3 !== DOT_SLASH) {
              aliasedPath = sysPath.join(linkPath, path3);
            }
            return transform(aliasedPath);
          }, false, curDepth);
        } catch (error) {
          if (this.fsw._handleError(error)) {
            return this.fsw._emitReady();
          }
        }
      }
      /**
       *
       * @param {Path} newPath
       * @param {fs.Stats} stats
       */
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
      initWatch(realPath, path3, wh, processPath) {
        if (this.fsw.closed)
          return;
        const closer = this._watchWithFsEvents(
          wh.watchPath,
          sysPath.resolve(realPath || wh.watchPath),
          processPath,
          wh.globFilter
        );
        this.fsw._addPathCloser(path3, closer);
      }
      /**
       * Handle added path with fsevents
       * @param {String} path file/dir path or glob pattern
       * @param {Function|Boolean=} transform converts working path to what the user expects
       * @param {Boolean=} forceAdd ensure add is emitted
       * @param {Number=} priorDepth Level of subdirectories already traversed.
       * @returns {Promise<void>}
       */
      async _addToFsEvents(path3, transform, forceAdd, priorDepth) {
        if (this.fsw.closed) {
          return;
        }
        const opts = this.fsw.options;
        const processPath = typeof transform === FUNCTION_TYPE ? transform : IDENTITY_FN;
        const wh = this.fsw._getWatchHelpers(path3);
        try {
          const stats = await statMethods[wh.statMethod](wh.watchPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(wh.watchPath, stats)) {
            throw null;
          }
          if (stats.isDirectory()) {
            if (!wh.globFilter)
              this.emitAdd(processPath(path3), stats, processPath, opts, forceAdd);
            if (priorDepth && priorDepth > opts.depth)
              return;
            this.fsw._readdirp(wh.watchPath, {
              fileFilter: (entry) => wh.filterPath(entry),
              directoryFilter: (entry) => wh.filterDir(entry),
              ...Depth(opts.depth - (priorDepth || 0))
            }).on(STR_DATA, (entry) => {
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
            this.initWatch(void 0, path3, wh, processPath);
          } else {
            let realPath;
            try {
              realPath = await realpath2(wh.watchPath);
            } catch (e) {
            }
            this.initWatch(realPath, path3, wh, processPath);
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
      GLOBSTAR: GLOBSTAR2,
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
    var readdir2 = promisify(fs2.readdir);
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
    var normalizePathToUnix = (path3) => toUnix(sysPath.normalize(toUnix(path3)));
    var normalizeIgnored = (cwd = EMPTY_STR) => (path3) => {
      if (typeof path3 !== STRING_TYPE)
        return path3;
      return normalizePathToUnix(sysPath.isAbsolute(path3) ? path3 : sysPath.join(cwd, path3));
    };
    var getAbsolutePath = (path3, cwd) => {
      if (sysPath.isAbsolute(path3)) {
        return path3;
      }
      if (path3.startsWith(BANG)) {
        return BANG + sysPath.join(cwd, path3.slice(1));
      }
      return sysPath.join(cwd, path3);
    };
    var undef = (opts, key) => opts[key] === void 0;
    var DirEntry = class {
      /**
       * @param {Path} dir
       * @param {Function} removeWatcher
       */
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
          await readdir2(dir);
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
      /**
       * @returns {Array<String>}
       */
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
      constructor(path3, watchPath, follow, fsw) {
        this.fsw = fsw;
        this.path = path3 = path3.replace(REPLACER_RE, EMPTY_STR);
        this.watchPath = watchPath;
        this.fullWatchPath = sysPath.resolve(watchPath);
        this.hasGlob = watchPath !== path3;
        if (path3 === EMPTY_STR)
          this.hasGlob = false;
        this.globSymlink = this.hasGlob && follow ? void 0 : false;
        this.globFilter = this.hasGlob ? anymatch(path3, void 0, ANYMATCH_OPTS) : false;
        this.dirParts = this.getDirParts(path3);
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
        return sysPath.join(
          this.watchPath,
          sysPath.relative(this.watchPath, this.checkGlobSymlink(entry))
        );
      }
      filterPath(entry) {
        const { stats } = entry;
        if (stats && stats.isSymbolicLink())
          return this.filterDir(entry);
        const resolvedPath = this.entryPath(entry);
        const matchesGlob = this.hasGlob && typeof this.globFilter === FUNCTION_TYPE ? this.globFilter(resolvedPath) : true;
        return matchesGlob && this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
      }
      getDirParts(path3) {
        if (!this.hasGlob)
          return [];
        const parts = [];
        const expandedPath = path3.includes(BRACE_START) ? braces.expand(path3) : [path3];
        expandedPath.forEach((path4) => {
          parts.push(sysPath.relative(this.watchPath, path4).split(SLASH_OR_BACK_SLASH_RE));
        });
        return parts;
      }
      filterDir(entry) {
        if (this.hasGlob) {
          const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
          let globstar = false;
          this.unmatchedGlob = !this.dirParts.some((parts) => {
            return parts.every((part, i) => {
              if (part === GLOBSTAR2)
                globstar = true;
              return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i], ANYMATCH_OPTS);
            });
          });
        }
        return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
      }
    };
    var FSWatcher = class extends EventEmitter2 {
      // Not indenting methods for history sake; for now.
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
      // Public methods
      /**
       * Adds paths to be watched on an existing FSWatcher instance
       * @param {Path|Array<Path>} paths_
       * @param {String=} _origAdd private; for handling non-existent paths to be watched
       * @param {Boolean=} _internal private; indicates a non-user add
       * @returns {FSWatcher} for chaining
       */
      add(paths_, _origAdd, _internal) {
        const { cwd, disableGlobbing } = this.options;
        this.closed = false;
        let paths = unifyPaths(paths_);
        if (cwd) {
          paths = paths.map((path3) => {
            const absPath = getAbsolutePath(path3, cwd);
            if (disableGlobbing || !isGlob(path3)) {
              return absPath;
            }
            return normalizePath(absPath);
          });
        }
        paths = paths.filter((path3) => {
          if (path3.startsWith(BANG)) {
            this._ignoredPaths.add(path3.slice(1));
            return false;
          }
          this._ignoredPaths.delete(path3);
          this._ignoredPaths.delete(path3 + SLASH_GLOBSTAR);
          this._userIgnored = void 0;
          return true;
        });
        if (this.options.useFsEvents && this._fsEventsHandler) {
          if (!this._readyCount)
            this._readyCount = paths.length;
          if (this.options.persistent)
            this._readyCount *= 2;
          paths.forEach((path3) => this._fsEventsHandler._addToFsEvents(path3));
        } else {
          if (!this._readyCount)
            this._readyCount = 0;
          this._readyCount += paths.length;
          Promise.all(
            paths.map(async (path3) => {
              const res = await this._nodeFsHandler._addToNodeFs(path3, !_internal, 0, 0, _origAdd);
              if (res)
                this._emitReady();
              return res;
            })
          ).then((results) => {
            if (this.closed)
              return;
            results.filter((item) => item).forEach((item) => {
              this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
            });
          });
        }
        return this;
      }
      /**
       * Close watchers or start ignoring events from specified paths.
       * @param {Path|Array<Path>} paths_ - string or array of strings, file/directory paths and/or globs
       * @returns {FSWatcher} for chaining
      */
      unwatch(paths_) {
        if (this.closed)
          return this;
        const paths = unifyPaths(paths_);
        const { cwd } = this.options;
        paths.forEach((path3) => {
          if (!sysPath.isAbsolute(path3) && !this._closers.has(path3)) {
            if (cwd)
              path3 = sysPath.join(cwd, path3);
            path3 = sysPath.resolve(path3);
          }
          this._closePath(path3);
          this._ignoredPaths.add(path3);
          if (this._watched.has(path3)) {
            this._ignoredPaths.add(path3 + SLASH_GLOBSTAR);
          }
          this._userIgnored = void 0;
        });
        return this;
      }
      /**
       * Close watchers and remove all listeners from watched paths.
       * @returns {Promise<void>}.
      */
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
        this._streams.forEach((stream2) => stream2.destroy());
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
      /**
       * Expose list of watched paths
       * @returns {Object} for chaining
      */
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
      // Common helpers
      // --------------
      /**
       * Normalize and emit events.
       * Calling _emit DOES NOT MEAN emit() would be called!
       * @param {EventName} event Type of event
       * @param {Path} path File or directory path
       * @param {*=} val1 arguments to be passed with event
       * @param {*=} val2
       * @param {*=} val3
       * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
       */
      async _emit(event, path3, val1, val2, val3) {
        if (this.closed)
          return;
        const opts = this.options;
        if (isWindows)
          path3 = sysPath.normalize(path3);
        if (opts.cwd)
          path3 = sysPath.relative(opts.cwd, path3);
        const args = [event, path3];
        if (val3 !== void 0)
          args.push(val1, val2, val3);
        else if (val2 !== void 0)
          args.push(val1, val2);
        else if (val1 !== void 0)
          args.push(val1);
        const awf = opts.awaitWriteFinish;
        let pw;
        if (awf && (pw = this._pendingWrites.get(path3))) {
          pw.lastChange = /* @__PURE__ */ new Date();
          return this;
        }
        if (opts.atomic) {
          if (event === EV_UNLINK) {
            this._pendingUnlinks.set(path3, args);
            setTimeout(() => {
              this._pendingUnlinks.forEach((entry, path4) => {
                this.emit(...entry);
                this.emit(EV_ALL, ...entry);
                this._pendingUnlinks.delete(path4);
              });
            }, typeof opts.atomic === "number" ? opts.atomic : 100);
            return this;
          }
          if (event === EV_ADD && this._pendingUnlinks.has(path3)) {
            event = args[0] = EV_CHANGE;
            this._pendingUnlinks.delete(path3);
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
          this._awaitWriteFinish(path3, awf.stabilityThreshold, event, awfEmit);
          return this;
        }
        if (event === EV_CHANGE) {
          const isThrottled = !this._throttle(EV_CHANGE, path3, 50);
          if (isThrottled)
            return this;
        }
        if (opts.alwaysStat && val1 === void 0 && (event === EV_ADD || event === EV_ADD_DIR || event === EV_CHANGE)) {
          const fullPath = opts.cwd ? sysPath.join(opts.cwd, path3) : path3;
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
      /**
       * Common handler for errors
       * @param {Error} error
       * @returns {Error|Boolean} The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
       */
      _handleError(error) {
        const code = error && error.code;
        if (error && code !== "ENOENT" && code !== "ENOTDIR" && (!this.options.ignorePermissionErrors || code !== "EPERM" && code !== "EACCES")) {
          this.emit(EV_ERROR, error);
        }
        return error || this.closed;
      }
      /**
       * Helper utility for throttling
       * @param {ThrottleType} actionType type being throttled
       * @param {Path} path being acted upon
       * @param {Number} timeout duration of time to suppress duplicate actions
       * @returns {Object|false} tracking object or false if action should be suppressed
       */
      _throttle(actionType, path3, timeout) {
        if (!this._throttled.has(actionType)) {
          this._throttled.set(actionType, /* @__PURE__ */ new Map());
        }
        const action = this._throttled.get(actionType);
        const actionPath = action.get(path3);
        if (actionPath) {
          actionPath.count++;
          return false;
        }
        let timeoutObject;
        const clear = () => {
          const item = action.get(path3);
          const count = item ? item.count : 0;
          action.delete(path3);
          clearTimeout(timeoutObject);
          if (item)
            clearTimeout(item.timeoutObject);
          return count;
        };
        timeoutObject = setTimeout(clear, timeout);
        const thr = { timeoutObject, clear, count: 0 };
        action.set(path3, thr);
        return thr;
      }
      _incrReadyCount() {
        return this._readyCount++;
      }
      /**
       * Awaits write operation to finish.
       * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
       * @param {Path} path being acted upon
       * @param {Number} threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
       * @param {EventName} event
       * @param {Function} awfEmit Callback to be called when ready for event to be emitted.
       */
      _awaitWriteFinish(path3, threshold, event, awfEmit) {
        let timeoutHandler;
        let fullPath = path3;
        if (this.options.cwd && !sysPath.isAbsolute(path3)) {
          fullPath = sysPath.join(this.options.cwd, path3);
        }
        const now = /* @__PURE__ */ new Date();
        const awaitWriteFinish = (prevStat) => {
          fs2.stat(fullPath, (err, curStat) => {
            if (err || !this._pendingWrites.has(path3)) {
              if (err && err.code !== "ENOENT")
                awfEmit(err);
              return;
            }
            const now2 = Number(/* @__PURE__ */ new Date());
            if (prevStat && curStat.size !== prevStat.size) {
              this._pendingWrites.get(path3).lastChange = now2;
            }
            const pw = this._pendingWrites.get(path3);
            const df = now2 - pw.lastChange;
            if (df >= threshold) {
              this._pendingWrites.delete(path3);
              awfEmit(void 0, curStat);
            } else {
              timeoutHandler = setTimeout(
                awaitWriteFinish,
                this.options.awaitWriteFinish.pollInterval,
                curStat
              );
            }
          });
        };
        if (!this._pendingWrites.has(path3)) {
          this._pendingWrites.set(path3, {
            lastChange: now,
            cancelWait: () => {
              this._pendingWrites.delete(path3);
              clearTimeout(timeoutHandler);
              return event;
            }
          });
          timeoutHandler = setTimeout(
            awaitWriteFinish,
            this.options.awaitWriteFinish.pollInterval
          );
        }
      }
      _getGlobIgnored() {
        return [...this._ignoredPaths.values()];
      }
      /**
       * Determines whether user has asked to ignore this path.
       * @param {Path} path filepath or dir
       * @param {fs.Stats=} stats result of fs.stat
       * @returns {Boolean}
       */
      _isIgnored(path3, stats) {
        if (this.options.atomic && DOT_RE.test(path3))
          return true;
        if (!this._userIgnored) {
          const { cwd } = this.options;
          const ign = this.options.ignored;
          const ignored = ign && ign.map(normalizeIgnored(cwd));
          const paths = arrify(ignored).filter((path4) => typeof path4 === STRING_TYPE && !isGlob(path4)).map((path4) => path4 + SLASH_GLOBSTAR);
          const list = this._getGlobIgnored().map(normalizeIgnored(cwd)).concat(ignored, paths);
          this._userIgnored = anymatch(list, void 0, ANYMATCH_OPTS);
        }
        return this._userIgnored([path3, stats]);
      }
      _isntIgnored(path3, stat2) {
        return !this._isIgnored(path3, stat2);
      }
      /**
       * Provides a set of common helpers and properties relating to symlink and glob handling.
       * @param {Path} path file, directory, or glob pattern being watched
       * @param {Number=} depth at any depth > 0, this isn't a glob
       * @returns {WatchHelper} object containing helpers for this path
       */
      _getWatchHelpers(path3, depth) {
        const watchPath = depth || this.options.disableGlobbing || !isGlob(path3) ? path3 : globParent(path3);
        const follow = this.options.followSymlinks;
        return new WatchHelper(path3, watchPath, follow, this);
      }
      // Directory helpers
      // -----------------
      /**
       * Provides directory tracking objects
       * @param {String} directory path of the directory
       * @returns {DirEntry} the directory's tracking object
       */
      _getWatchedDir(directory) {
        if (!this._boundRemove)
          this._boundRemove = this._remove.bind(this);
        const dir = sysPath.resolve(directory);
        if (!this._watched.has(dir))
          this._watched.set(dir, new DirEntry(dir, this._boundRemove));
        return this._watched.get(dir);
      }
      // File helpers
      // ------------
      /**
       * Check for read permissions.
       * Based on this answer on SO: https://stackoverflow.com/a/11781404/1358405
       * @param {fs.Stats} stats - object, result of fs_stat
       * @returns {Boolean} indicates whether the file can be read
      */
      _hasReadPermissions(stats) {
        if (this.options.ignorePermissionErrors)
          return true;
        const md = stats && Number.parseInt(stats.mode, 10);
        const st = md & 511;
        const it = Number.parseInt(st.toString(8)[0], 10);
        return Boolean(4 & it);
      }
      /**
       * Handles emitting unlink events for
       * files and directories, and via recursion, for
       * files and directories within directories that are unlinked
       * @param {String} directory within which the following item is located
       * @param {String} item      base path of item/directory
       * @returns {void}
      */
      _remove(directory, item, isDirectory) {
        const path3 = sysPath.join(directory, item);
        const fullPath = sysPath.resolve(path3);
        isDirectory = isDirectory != null ? isDirectory : this._watched.has(path3) || this._watched.has(fullPath);
        if (!this._throttle("remove", path3, 100))
          return;
        if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) {
          this.add(directory, item, true);
        }
        const wp = this._getWatchedDir(path3);
        const nestedDirectoryChildren = wp.getChildren();
        nestedDirectoryChildren.forEach((nested) => this._remove(path3, nested));
        const parent = this._getWatchedDir(directory);
        const wasTracked = parent.has(item);
        parent.remove(item);
        if (this._symlinkPaths.has(fullPath)) {
          this._symlinkPaths.delete(fullPath);
        }
        let relPath = path3;
        if (this.options.cwd)
          relPath = sysPath.relative(this.options.cwd, path3);
        if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
          const event = this._pendingWrites.get(relPath).cancelWait();
          if (event === EV_ADD)
            return;
        }
        this._watched.delete(path3);
        this._watched.delete(fullPath);
        const eventName = isDirectory ? EV_UNLINK_DIR : EV_UNLINK;
        if (wasTracked && !this._isIgnored(path3))
          this._emit(eventName, path3);
        if (!this.options.useFsEvents) {
          this._closePath(path3);
        }
      }
      /**
       * Closes all watchers for a path
       * @param {Path} path
       */
      _closePath(path3) {
        this._closeFile(path3);
        const dir = sysPath.dirname(path3);
        this._getWatchedDir(dir).remove(sysPath.basename(path3));
      }
      /**
       * Closes only file-specific watchers
       * @param {Path} path
       */
      _closeFile(path3) {
        const closers = this._closers.get(path3);
        if (!closers)
          return;
        closers.forEach((closer) => closer());
        this._closers.delete(path3);
      }
      /**
       *
       * @param {Path} path
       * @param {Function} closer
       */
      _addPathCloser(path3, closer) {
        if (!closer)
          return;
        let list = this._closers.get(path3);
        if (!list) {
          list = [];
          this._closers.set(path3, list);
        }
        list.push(closer);
      }
      _readdirp(root, opts) {
        if (this.closed)
          return;
        const options = { type: EV_ALL, alwaysStat: true, lstat: true, ...opts };
        let stream2 = readdirp(root, options);
        this._streams.add(stream2);
        stream2.once(STR_CLOSE, () => {
          stream2 = void 0;
        });
        stream2.once(STR_END, () => {
          if (stream2) {
            this._streams.delete(stream2);
            stream2 = void 0;
          }
        });
        return stream2;
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-0/optimize.js
var require_optimize = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-0/optimize.js"(exports, module2) {
    function level0Optimize(tokens2) {
      return tokens2;
    }
    module2.exports = level0Optimize;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/natural-compare.js
var require_natural_compare = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/natural-compare.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/sort-selectors.js
var require_sort_selectors = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/sort-selectors.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/override.js
var require_override = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/override.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/format.js
var require_format = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/format.js"(exports, module2) {
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
        return remapBreaks(
          override(DEFAULTS, {
            breaks: breaks(true),
            indentBy: 2,
            spaces: spaces(true)
          })
        );
      }
      if (typeof source == "string" && source == KEEP_BREAKS_ALIAS) {
        return remapBreaks(
          override(DEFAULTS, {
            breaks: {
              afterAtRule: true,
              afterBlockBegins: true,
              afterBlockEnds: true,
              afterComment: true,
              afterRuleEnds: true,
              beforeBlockEnds: true
            }
          })
        );
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/tokenizer/marker.js
var require_marker = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/tokenizer/marker.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/format-position.js
var require_format_position = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/format-position.js"(exports, module2) {
    function formatPosition(metadata) {
      var line = metadata[0];
      var column = metadata[1];
      var source = metadata[2];
      return source ? source + ":" + line + ":" + column : line + ":" + column;
    }
    module2.exports = formatPosition;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/tidy-rules.js
var require_tidy_rules = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/tidy-rules.js"(exports, module2) {
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
      function removeHTMLComment(rule2, match2) {
        warnings.push("HTML comment '" + match2 + "' at " + formatPosition(rule2[2][0]) + ". Removing.");
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/tidy-block.js
var require_tidy_block = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/tidy-block.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/tidy-at-rule.js
var require_tidy_at_rule = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/tidy-at-rule.js"(exports, module2) {
    function tidyAtRule(value) {
      return value.replace(/\s+/g, " ").replace(/url\(\s+/g, "url(").replace(/\s+\)/g, ")").trim();
    }
    module2.exports = tidyAtRule;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/hack.js
var require_hack = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/hack.js"(exports, module2) {
    var Hack = {
      ASTERISK: "asterisk",
      BANG: "bang",
      BACKSLASH: "backslash",
      UNDERSCORE: "underscore"
    };
    module2.exports = Hack;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/remove-unused.js
var require_remove_unused = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/remove-unused.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/restore-from-optimizing.js
var require_restore_from_optimizing = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/restore-from-optimizing.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/tokenizer/token.js
var require_token = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/tokenizer/token.js"(exports, module2) {
    var Token = {
      AT_RULE: "at-rule",
      // e.g. `@import`, `@charset`
      AT_RULE_BLOCK: "at-rule-block",
      // e.g. `@font-face{...}`
      AT_RULE_BLOCK_SCOPE: "at-rule-block-scope",
      // e.g. `@font-face`
      COMMENT: "comment",
      // e.g. `/* comment */`
      NESTED_BLOCK: "nested-block",
      // e.g. `@media screen{...}`, `@keyframes animation {...}`
      NESTED_BLOCK_SCOPE: "nested-block-scope",
      // e.g. `@media`, `@keyframes`
      PROPERTY: "property",
      // e.g. `color:red`
      PROPERTY_BLOCK: "property-block",
      // e.g. `--var:{color:red}`
      PROPERTY_NAME: "property-name",
      // e.g. `color`
      PROPERTY_VALUE: "property-value",
      // e.g. `red`
      RAW: "raw",
      // e.g. anything between /* clean-css ignore:start */ and /* clean-css ignore:end */ comments
      RULE: "rule",
      // e.g `div > a{...}`
      RULE_SCOPE: "rule-scope"
      // e.g `div > a`
    };
    module2.exports = Token;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/wrap-for-optimizing.js
var require_wrap_for_optimizing = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/wrap-for-optimizing.js"(exports, module2) {
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
      var match2 = false;
      var name = property[1][1];
      var lastValue = property[property.length - 1];
      if (name[0] == Match.UNDERSCORE) {
        match2 = [Hack.UNDERSCORE];
      } else if (name[0] == Match.ASTERISK) {
        match2 = [Hack.ASTERISK];
      } else if (lastValue[1][0] == Match.BANG && !lastValue[1].match(Match.IMPORTANT_WORD_PATTERN)) {
        match2 = [Hack.BANG];
      } else if (lastValue[1].indexOf(Match.BANG) > 0 && !lastValue[1].match(Match.IMPORTANT_WORD_PATTERN) && Match.BANG_SUFFIX_PATTERN.test(lastValue[1])) {
        match2 = [Hack.BANG];
      } else if (lastValue[1].indexOf(Match.BACKSLASH) > 0 && lastValue[1].indexOf(Match.BACKSLASH) == lastValue[1].length - Match.BACKSLASH.length - 1) {
        match2 = [Hack.BACKSLASH, lastValue[1].substring(lastValue[1].indexOf(Match.BACKSLASH) + 1)];
      } else if (lastValue[1].indexOf(Match.BACKSLASH) === 0 && lastValue[1].length == 2) {
        match2 = [Hack.BACKSLASH, lastValue[1].substring(1)];
      }
      return match2;
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/invalid-property-error.js
var require_invalid_property_error = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/invalid-property-error.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration/break-up.js
var require_break_up = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration/break-up.js"(exports, module2) {
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
      var match2, matches;
      if (values.length > 0) {
        matches = values.filter(_widthFilter(validator));
        match2 = matches.length > 1 && (matches[0][1] == "none" || matches[0][1] == "auto") ? matches[1] : matches[0];
        if (match2) {
          width.value = [match2];
          values.splice(values.indexOf(match2), 1);
        }
      }
      if (values.length > 0) {
        match2 = values.filter(_styleFilter(validator))[0];
        if (match2) {
          style.value = [match2];
          values.splice(values.indexOf(match2), 1);
        }
      }
      if (values.length > 0) {
        match2 = values.filter(_colorFilter(validator))[0];
        if (match2) {
          color.value = [match2];
          values.splice(values.indexOf(match2), 1);
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/vendor-prefixes.js
var require_vendor_prefixes = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/vendor-prefixes.js"(exports, module2) {
    var VENDOR_PREFIX_PATTERN = /(?:^|\W)(-\w+-)/g;
    function unique(value) {
      var prefixes = [];
      var match2;
      while ((match2 = VENDOR_PREFIX_PATTERN.exec(value)) !== null) {
        if (prefixes.indexOf(match2[0]) == -1) {
          prefixes.push(match2[0]);
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration/properties/understandable.js
var require_understandable = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration/properties/understandable.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration/can-override.js
var require_can_override = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration/can-override.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/clone.js
var require_clone = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/clone.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration/restore.js
var require_restore = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration/restore.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/rounding-precision.js
var require_rounding_precision = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/rounding-precision.js"(exports, module2) {
    var override = require_override();
    var INTEGER_PATTERN = /^\d+$/;
    var ALL_UNITS = ["*", "all"];
    var DEFAULT_PRECISION = "off";
    var DIRECTIVES_SEPARATOR = ",";
    var DIRECTIVE_VALUE_SEPARATOR = "=";
    function roundingPrecisionFrom(source) {
      return override(defaults2(DEFAULT_PRECISION), buildPrecisionFrom(source));
    }
    function defaults2(value) {
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
        return defaults2(DEFAULT_PRECISION);
      }
      if (typeof source == "number") {
        return defaults2(source);
      }
      if (typeof source == "string" && INTEGER_PATTERN.test(source)) {
        return defaults2(parseInt(source));
      }
      if (typeof source == "string" && source == DEFAULT_PRECISION) {
        return defaults2(DEFAULT_PRECISION);
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
          accumulator = override(accumulator, defaults2(value));
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/optimization-level.js
var require_optimization_level = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/optimization-level.js"(exports, module2) {
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
      if (void 0 === source) {
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
        level[One] = override(level[One], defaults2(One, normalizeValue(source[One][ALL_KEYWORD_1])));
        delete source[One][ALL_KEYWORD_1];
      }
      if (One in source && ALL_KEYWORD_2 in source[One]) {
        level[One] = override(level[One], defaults2(One, normalizeValue(source[One][ALL_KEYWORD_2])));
        delete source[One][ALL_KEYWORD_2];
      }
      if (One in source || Two in source) {
        level[One] = override(level[One], source[One]);
      } else {
        delete level[One];
      }
      if (Two in source && ALL_KEYWORD_1 in source[Two]) {
        level[Two] = override(level[Two], defaults2(Two, normalizeValue(source[Two][ALL_KEYWORD_1])));
        delete source[Two][ALL_KEYWORD_1];
      }
      if (Two in source && ALL_KEYWORD_2 in source[Two]) {
        level[Two] = override(level[Two], defaults2(Two, normalizeValue(source[Two][ALL_KEYWORD_2])));
        delete source[Two][ALL_KEYWORD_2];
      }
      if (Two in source) {
        level[Two] = override(level[Two], source[Two]);
      } else {
        delete level[Two];
      }
      return level;
    }
    function defaults2(level, value) {
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
          accumulator = override(accumulator, defaults2(level, normalizedValue));
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/background.js
var require_background = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/background.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/box-shadow.js
var require_box_shadow = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/box-shadow.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/border-radius.js
var require_border_radius = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/border-radius.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/filter.js
var require_filter = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/filter.js"(exports, module2) {
    var OptimizationLevel = require_optimization_level().OptimizationLevel;
    var ALPHA_OR_CHROMA_FILTER_PATTERN = /progid:DXImageTransform\.Microsoft\.(Alpha|Chroma)(\W)/;
    var NO_SPACE_AFTER_COMMA_PATTERN = /,(\S)/g;
    var WHITESPACE_AROUND_EQUALS_PATTERN = / ?= ?/g;
    var plugin = {
      level1: {
        property: function filter2(_rule, property, options) {
          if (!options.compatibility.properties.ieFilters) {
            return;
          }
          if (!options.level[OptimizationLevel.One].optimizeFilter) {
            return;
          }
          if (property.value.length == 1) {
            property.value[0][1] = property.value[0][1].replace(
              ALPHA_OR_CHROMA_FILTER_PATTERN,
              function(match2, filter3, suffix) {
                return filter3.toLowerCase() + suffix;
              }
            );
          }
          property.value[0][1] = property.value[0][1].replace(NO_SPACE_AFTER_COMMA_PATTERN, ", $1").replace(WHITESPACE_AROUND_EQUALS_PATTERN, "=");
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/font-weight.js
var require_font_weight = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/font-weight.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/margin.js
var require_margin = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/margin.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/outline.js
var require_outline = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/outline.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/padding.js
var require_padding = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers/padding.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers.js
var require_property_optimizers = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/property-optimizers.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-hex.js
var require_shorten_hex = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-hex.js"(exports, module2) {
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
    function hexConverter(match2, prefix, colorValue, suffix) {
      return prefix + toHex[colorValue.toLowerCase()] + suffix;
    }
    function nameConverter(match2, colorValue, suffix) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-hsl.js
var require_shorten_hsl = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-hsl.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-rgb.js
var require_shorten_rgb = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color/shorten-rgb.js"(exports, module2) {
    function shortenRgb(red, green, blue) {
      var normalizedRed = Math.max(0, Math.min(parseInt(red), 255));
      var normalizedGreen = Math.max(0, Math.min(parseInt(green), 255));
      var normalizedBlue = Math.max(0, Math.min(parseInt(blue), 255));
      return "#" + ("00000" + (normalizedRed << 16 | normalizedGreen << 8 | normalizedBlue).toString(16)).slice(-6);
    }
    module2.exports = shortenRgb;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/split.js
var require_split = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/split.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color.js
var require_color = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/color.js"(exports, module2) {
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
          value = value.replace(RGBA_HSLA_PATTERN, function(match2, colorFn, p1, p2, p3, alpha) {
            return parseInt(alpha) >= 1 ? colorFn + "(" + [p1, p2, p3].join(",") + ")" : match2;
          }).replace(RGB_PATTERN, function(match2, red, green, blue) {
            return shortenRgb(red, green, blue);
          }).replace(HSL_PATTERN, function(match2, hue, saturation, lightness) {
            return shortenHsl(hue, saturation, lightness);
          }).replace(HEX_LONG_PATTERN, function(match2, prefix, color2, at, inputValue) {
            var suffix = inputValue[at + match2.length];
            if (suffix && HEX_VALUE_PATTERN.test(suffix)) {
              return match2;
            }
            if (color2[0] == color2[1] && color2[2] == color2[3] && color2[4] == color2[5]) {
              return (prefix + "#" + color2[0] + color2[2] + color2[4]).toLowerCase();
            }
            return (prefix + "#" + color2).toLowerCase();
          }).replace(HEX_SHORT_PATTERN, function(match2, prefix, color2) {
            return prefix + "#" + color2.toLowerCase();
          }).replace(ANY_COLOR_FUNCTION_PATTERN, function(match2, colorFunction, colorDef) {
            var tokens2 = colorDef.split(",");
            var colorFnLowercase = colorFunction && colorFunction.toLowerCase();
            var applies = colorFnLowercase == "hsl" && tokens2.length == 3 || colorFnLowercase == "hsla" && tokens2.length == 4 || colorFnLowercase == "rgb" && tokens2.length === 3 && colorDef.indexOf("%") > 0 || colorFnLowercase == "rgba" && tokens2.length == 4 && tokens2[0].indexOf("%") > 0;
            if (!applies) {
              return match2;
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
            value = value.replace(TRANSPARENT_FUNCTION_PATTERN, function(match2) {
              if (split(value, ",").pop().indexOf("gradient(") > -1) {
                return match2;
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/degrees.js
var require_degrees = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/degrees.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/starts-as-url.js
var require_starts_as_url = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/starts-as-url.js"(exports, module2) {
    var URL_PREFIX_PATTERN = /^url\(/i;
    function startsAsUrl(value) {
      return URL_PREFIX_PATTERN.test(value);
    }
    module2.exports = startsAsUrl;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/fraction.js
var require_fraction = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/fraction.js"(exports, module2) {
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
      return value.replace(ZERO_PREFIXED_UNIT_PATTERN, "$1$2").replace(DOT_ZERO_PATTERN, "$10$2").replace(FRACTION_PATTERN, function(match2, nonZeroPart, suffix) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/precision.js
var require_precision = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/precision.js"(exports, module2) {
    var plugin = {
      level1: {
        value: function precision(_name, value, options) {
          if (!options.precision.enabled || value.indexOf(".") === -1) {
            return value;
          }
          return value.replace(options.precision.decimalPointMatcher, "$1$2$3").replace(options.precision.zeroMatcher, function(match2, integerPart, fractionPart, unit) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/text-quotes.js
var require_text_quotes = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/text-quotes.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/time.js
var require_time = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/time.js"(exports, module2) {
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
          return value.replace(TIME_VALUE, function(match2, val, unit) {
            var newValue;
            if (unit == "ms") {
              newValue = parseInt(val) / 1e3 + "s";
            } else if (unit == "s") {
              newValue = parseFloat(val) * 1e3 + "ms";
            }
            return newValue.length < match2.length ? newValue : match2;
          });
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/unit.js
var require_unit = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/unit.js"(exports, module2) {
    var WHOLE_PIXEL_VALUE = /(?:^|\s|\()(-?\d+)px/;
    var plugin = {
      level1: {
        value: function unit(_name, value, options) {
          if (!WHOLE_PIXEL_VALUE.test(value)) {
            return value;
          }
          return value.replace(WHOLE_PIXEL_VALUE, function(match2, val) {
            var newValue;
            var intVal = parseInt(val);
            if (intVal === 0) {
              return match2;
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
              newValue = match2.substring(0, match2.indexOf(val)) + newValue;
            }
            return newValue && newValue.length < match2.length ? newValue : match2;
          });
        }
      }
    };
    module2.exports = plugin;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-prefix.js
var require_url_prefix = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-prefix.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-quotes.js
var require_url_quotes = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-quotes.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-whitespace.js
var require_url_whitespace = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/url-whitespace.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/whitespace.js
var require_whitespace = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/whitespace.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/zero.js
var require_zero = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers/zero.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers.js
var require_value_optimizers = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/value-optimizers.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration.js
var require_configuration = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/configuration.js"(exports, module2) {
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
        // otherwise real color will turn into default since color appears in last multiplex only
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
        // can't use 'disc' because that'd override default 'decimal' for <ol>
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
        // NOTE: we can't tell the real default value here, it's 'disc' for <ul> and 'decimal' for <ol>
        // this is a hack, but it doesn't matter because this value will be either overridden or
        // it will disappear at the final step anyway
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
        // NOTE: we can't tell the real default value here, as it depends on default text direction
        // this is a hack, but it doesn't matter because this value will be either overridden or
        // it will disappear anyway
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
        // it's a short value that won't match any property and still be a valid `transition-property`
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/writer/helpers.js
var require_helpers = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/writer/helpers.js"(exports, module2) {
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
          store(
            context,
            needsSemicolon ? semicolon(context, Breaks.AfterProperty, isLast) : emptyCharacter
          );
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/writer/one-time.js
var require_one_time = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/writer/one-time.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/optimize.js
var require_optimize2 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-1/optimize.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/is-mergeable.js
var require_is_mergeable = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/is-mergeable.js"(exports, module2) {
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
        if (singleSelector.length === 0 || isDeepSelector(singleSelector) || isVendorPrefixed(singleSelector) || singleSelector.indexOf(Marker.COLON) > -1 && !areMergeable(
          singleSelector,
          extractPseudoFrom(singleSelector),
          mergeablePseudoClasses,
          mergeablePseudoElements,
          multiplePseudoMerging
        )) {
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
      var match2;
      var name;
      var i, l;
      for (i = 0, l = matches.length; i < l; i++) {
        match2 = matches[i];
        name = match2.indexOf(Marker.OPEN_ROUND_BRACKET) > -1 ? match2.substring(0, match2.indexOf(Marker.OPEN_ROUND_BRACKET)) : match2;
        if (mergeablePseudoClasses.indexOf(name) === -1 && mergeablePseudoElements.indexOf(name) === -1) {
          return false;
        }
      }
      return true;
    }
    function needArguments(matches) {
      var match2;
      var name;
      var bracketOpensAt;
      var hasArguments;
      var i, l;
      for (i = 0, l = matches.length; i < l; i++) {
        match2 = matches[i];
        bracketOpensAt = match2.indexOf(Marker.OPEN_ROUND_BRACKET);
        hasArguments = bracketOpensAt > -1;
        name = hasArguments ? match2.substring(0, bracketOpensAt) : match2;
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
      var match2;
      var matchAt;
      var nextMatch;
      var nextMatchAt;
      var name;
      var nextName;
      var areChained;
      var i, l;
      for (i = 0, l = matches.length; i < l; i++) {
        match2 = matches[i];
        nextMatch = matches[i + 1];
        if (!nextMatch) {
          break;
        }
        matchAt = selector.indexOf(match2, positionInSelector);
        nextMatchAt = selector.indexOf(match2, matchAt + 1);
        positionInSelector = nextMatchAt;
        areChained = matchAt + match2.length == nextMatchAt;
        if (areChained) {
          name = match2.indexOf(Marker.OPEN_ROUND_BRACKET) > -1 ? match2.substring(0, match2.indexOf(Marker.OPEN_ROUND_BRACKET)) : match2;
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
      var match2;
      var i, l;
      for (i = 0, l = matches.length; i < l; i++) {
        match2 = matches[i];
        if (isPseudoElement(match2)) {
          unmixableMatches += UNMIXABLE_PSEUDO_ELEMENTS.indexOf(match2) > -1 ? 1 : 0;
        } else {
          unmixableMatches += UNMIXABLE_PSEUDO_CLASSES.indexOf(match2) > -1 ? 1 : 0;
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/every-values-pair.js
var require_every_values_pair = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/every-values-pair.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/has-inherit.js
var require_has_inherit = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/has-inherit.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/has-same-values.js
var require_has_same_values = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/has-same-values.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/populate-components.js
var require_populate_components = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/populate-components.js"(exports, module2) {
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
      return property.value.length > 1 && property.value.filter(
        function(value) {
          return validator.isVariable(value[1]);
        }
      ).length > 1;
    }
    module2.exports = populateComponents;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/restore-with-components.js
var require_restore_with_components = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/restore-with-components.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/merge-into-shorthands.js
var require_merge_into_shorthands = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/merge-into-shorthands.js"(exports, module2) {
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
        if (void 0 !== invalidatedBy && shorthandName == invalidatedBy.name) {
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
        if (void 0 !== important && components[componentName].important != important) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/has-unset.js
var require_has_unset = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/has-unset.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/find-component-in.js
var require_find_component_in = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/find-component-in.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/is-component-of.js
var require_is_component_of = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/is-component-of.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/is-mergeable-shorthand.js
var require_is_mergeable_shorthand = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/is-mergeable-shorthand.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/overrides-non-component-shorthand.js
var require_overrides_non_component_shorthand = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/overrides-non-component-shorthand.js"(exports, module2) {
    var configuration = require_configuration();
    function overridesNonComponentShorthand(property1, property2) {
      return property1.name in configuration && "overridesShorthands" in configuration[property1.name] && configuration[property1.name].overridesShorthands.indexOf(property2.name) > -1;
    }
    module2.exports = overridesNonComponentShorthand;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/override-properties.js
var require_override_properties = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/override-properties.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/optimize.js
var require_optimize3 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/properties/optimize.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/merge-adjacent.js
var require_merge_adjacent = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/merge-adjacent.js"(exports, module2) {
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
        } else if (lastToken[0] == Token.RULE && serializeBody(token2[2]) == serializeBody(lastToken[2]) && isMergeable(serializeRules(token2[1]), mergeablePseudoClasses, mergeablePseudoElements, multiplePseudoMerging) && isMergeable(
          serializeRules(lastToken[1]),
          mergeablePseudoClasses,
          mergeablePseudoElements,
          multiplePseudoMerging
        ) && lastToken[1].length < mergeLimit) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/rules-overlap.js
var require_rules_overlap = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/rules-overlap.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/specificity.js
var require_specificity = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/specificity.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/specificities-overlap.js
var require_specificities_overlap = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/specificities-overlap.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/reorderable.js
var require_reorderable = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/reorderable.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/extract-properties.js
var require_extract_properties = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/extract-properties.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/merge-media-queries.js
var require_merge_media_queries = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/merge-media-queries.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/merge-non-adjacent-by-body.js
var require_merge_non_adjacent_by_body = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/merge-non-adjacent-by-body.js"(exports, module2) {
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
        if (oldToken && isMergeable(
          serializeRules(token2[1]),
          mergeablePseudoClasses,
          mergeablePseudoElements,
          multiplePseudoMerging
        ) && isMergeable(
          serializeRules(oldToken[1]),
          mergeablePseudoClasses,
          mergeablePseudoElements,
          multiplePseudoMerging
        )) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/merge-non-adjacent-by-selector.js
var require_merge_non_adjacent_by_selector = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/merge-non-adjacent-by-selector.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/clone-array.js
var require_clone_array = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/clone-array.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/reduce-non-adjacent.js
var require_reduce_non_adjacent = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/reduce-non-adjacent.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/remove-duplicate-font-at-rules.js
var require_remove_duplicate_font_at_rules = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/remove-duplicate-font-at-rules.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/remove-duplicate-media-queries.js
var require_remove_duplicate_media_queries = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/remove-duplicate-media-queries.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/remove-duplicates.js
var require_remove_duplicates = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/remove-duplicates.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/remove-unused-at-rules.js
var require_remove_unused_at_rules = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/remove-unused-at-rules.js"(exports, module2) {
    var populateComponents = require_populate_components();
    var wrapForOptimizing = require_wrap_for_optimizing().single;
    var restoreFromOptimizing = require_restore_from_optimizing();
    var Token = require_token();
    var animationNameRegex = /^(-moz-|-o-|-webkit-)?animation-name$/;
    var animationRegex = /^(-moz-|-o-|-webkit-)?animation$/;
    var keyframeRegex = /^@(-moz-|-o-|-webkit-)?keyframes /;
    var importantRegex = /\s{0,31}!important$/;
    var optionalMatchingQuotesRegex = /^(['"]?)(.*)\1$/;
    function normalize2(value) {
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
      var match2;
      if (token2[0] == Token.AT_RULE_BLOCK && token2[1][0][1].indexOf("@counter-style") === 0) {
        match2 = token2[1][0][1].split(" ")[1];
        atRules[match2] = atRules[match2] || [];
        atRules[match2].push(token2);
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
      var match2;
      var i, l;
      if (token2[0] == Token.AT_RULE_BLOCK && token2[1][0][1] == "@font-face") {
        for (i = 0, l = token2[2].length; i < l; i++) {
          property = token2[2][i];
          if (property[1][1] == "font-family") {
            match2 = normalize2(property[2][1].toLowerCase());
            atRules[match2] = atRules[match2] || [];
            atRules[match2].push(token2);
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
              normalizedMatch = normalize2(component.value[j][1].toLowerCase());
              if (normalizedMatch in atRules) {
                delete atRules[normalizedMatch];
              }
            }
            restoreFromOptimizing([wrappedProperty]);
          }
          if (property[1][1] == "font-family") {
            for (j = 2, m = property.length; j < m; j++) {
              normalizedMatch = normalize2(property[j][1].toLowerCase());
              if (normalizedMatch in atRules) {
                delete atRules[normalizedMatch];
              }
            }
          }
        }
      };
    }
    function matchKeyframe(token2, atRules) {
      var match2;
      if (token2[0] == Token.NESTED_BLOCK && keyframeRegex.test(token2[1][0][1])) {
        match2 = token2[1][0][1].split(" ")[1];
        atRules[match2] = atRules[match2] || [];
        atRules[match2].push(token2);
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
      var match2;
      if (token2[0] == Token.AT_RULE && token2[1].indexOf("@namespace") === 0) {
        match2 = token2[1].split(" ")[1];
        atRules[match2] = atRules[match2] || [];
        atRules[match2].push(token2);
      }
    }
    function markNamespacesAsUsed(atRules) {
      var namespaceRegex = new RegExp(Object.keys(atRules).join("\\||") + "\\|", "g");
      return function(token2) {
        var match2;
        var scope;
        var normalizedMatch;
        var i, l;
        var j, m;
        for (i = 0, l = token2[1].length; i < l; i++) {
          scope = token2[1][i];
          match2 = scope[1].match(namespaceRegex);
          for (j = 0, m = match2.length; j < m; j++) {
            normalizedMatch = match2[j].substring(0, match2[j].length - 1);
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/tidy-rule-duplicates.js
var require_tidy_rule_duplicates = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/tidy-rule-duplicates.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/restructure.js
var require_restructure = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/restructure.js"(exports, module2) {
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
          if (!isMergeable(
            serializeRules(sourceTokens[i2][1]),
            mergeablePseudoClasses,
            mergeablePseudoElements,
            multiplePseudoMerging
          )) {
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
            differenceVariants = differenceVariants.concat(
              allCombinations(subVariant, propertySize, propertiesCount, level - 1)
            );
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/optimize.js
var require_optimize4 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/level-2/optimize.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/validator.js
var require_validator = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/optimizer/validator.js"(exports, module2) {
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
        // this is the default value of list-style-type, see comment in configuration.js
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
        // this is the default value of list-style-type, see comment in configuration.js
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/compatibility.js
var require_compatibility = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/compatibility.js"(exports, module2) {
    var DEFAULTS = {
      "*": {
        colors: {
          hexAlpha: false,
          // 4- and 8-character hex notation
          opacity: true
          // rgba / hsla
        },
        customUnits: { rpx: false },
        properties: {
          backgroundClipMerging: true,
          // background-clip to shorthand
          backgroundOriginMerging: true,
          // background-origin to shorthand
          backgroundSizeMerging: true,
          // background-size to shorthand
          colors: true,
          // any kind of color transformations, like `#ff00ff` to `#f0f` or `#fff` into `red`
          ieBangHack: false,
          // !ie suffix hacks on IE<8
          ieFilters: false,
          // whether to preserve `filter` and `-ms-filter` properties
          iePrefixHack: false,
          // underscore / asterisk prefix hacks on IE
          ieSuffixHack: false,
          // \9 suffix hacks on IE6-9, \0 suffix hack on IE6-11
          merging: true,
          // merging properties into one
          shorterLengthUnits: false,
          // optimize pixel units into `pt`, `pc` or `in` units
          spaceAfterClosingBrace: true,
          // 'url() no-repeat' to 'url()no-repeat'
          urlQuotes: true,
          // whether to wrap content of `url()` into quotes or not
          zeroUnits: true
          // 0[unit] -> 0
        },
        selectors: {
          adjacentSpace: false,
          // div+ nav Android stock browser hack
          ie7Hack: false,
          // *+html hack
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
          // selectors with these pseudo-classes can be merged as these are universally supported
          mergeablePseudoElements: [
            "::after",
            "::before",
            "::first-letter",
            "::first-line"
          ],
          // selectors with these pseudo-elements can be merged as these are universally supported
          mergeLimit: 8191,
          // number of rules that can be safely merged together
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
          // vm is vmin on IE9+ see https://developer.mozilla.org/en-US/docs/Web/CSS/length
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-http-resource.js
var require_is_http_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-http-resource.js"(exports, module2) {
    var HTTP_RESOURCE_PATTERN = /^http:\/\//;
    function isHttpResource(uri) {
      return HTTP_RESOURCE_PATTERN.test(uri);
    }
    module2.exports = isHttpResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-https-resource.js
var require_is_https_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-https-resource.js"(exports, module2) {
    var HTTPS_RESOURCE_PATTERN = /^https:\/\//;
    function isHttpsResource(uri) {
      return HTTPS_RESOURCE_PATTERN.test(uri);
    }
    module2.exports = isHttpsResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/load-remote-resource.js
var require_load_remote_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/load-remote-resource.js"(exports, module2) {
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
      requestOptions = override(
        url.parse(uri),
        inlineRequest || {}
      );
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/fetch.js
var require_fetch = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/fetch.js"(exports, module2) {
    var loadRemoteResource = require_load_remote_resource();
    function fetchFrom(callback) {
      return callback || loadRemoteResource;
    }
    module2.exports = fetchFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/inline.js
var require_inline = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/inline.js"(exports, module2) {
    function inlineOptionsFrom(rules) {
      if (Array.isArray(rules)) {
        return rules;
      }
      if (rules === false) {
        return ["none"];
      }
      return void 0 === rules ? ["local"] : rules.split(",");
    }
    module2.exports = inlineOptionsFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/inline-request.js
var require_inline_request = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/inline-request.js"(exports, module2) {
    var url = require("url");
    var override = require_override();
    function inlineRequestFrom(option) {
      return override(
        /* jshint camelcase: false */
        proxyOptionsFrom(process.env.HTTP_PROXY || process.env.http_proxy),
        option || {}
      );
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/inline-timeout.js
var require_inline_timeout = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/inline-timeout.js"(exports, module2) {
    var DEFAULT_TIMEOUT = 5e3;
    function inlineTimeoutFrom(option) {
      return option || DEFAULT_TIMEOUT;
    }
    module2.exports = inlineTimeoutFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/plugins.js
var require_plugins = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/plugins.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/rebase.js
var require_rebase = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/rebase.js"(exports, module2) {
    function rebaseFrom(rebaseOption, rebaseToOption) {
      if (void 0 !== rebaseToOption) {
        return true;
      }
      if (void 0 === rebaseOption) {
        return false;
      }
      return !!rebaseOption;
    }
    module2.exports = rebaseFrom;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/rebase-to.js
var require_rebase_to = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/options/rebase-to.js"(exports, module2) {
    var path3 = require("path");
    function rebaseToFrom(option) {
      return option ? path3.resolve(option) : process.cwd();
    }
    module2.exports = rebaseToFrom;
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64.js
var require_base64 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64.js"(exports) {
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
      var match2 = aUrl.match(urlRegexp);
      if (!match2) {
        return null;
      }
      return {
        scheme: match2[1],
        auth: match2[2],
        host: match2[3],
        port: match2[4],
        path: match2[5]
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
    function normalize2(aPath) {
      var path3 = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path3 = url.path;
      }
      var isAbsolute = exports.isAbsolute(path3);
      var parts = path3.split(/\/+/);
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
      path3 = parts.join("/");
      if (path3 === "") {
        path3 = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path3;
        return urlGenerate(url);
      }
      return path3;
    }
    exports.normalize = normalize2;
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
      var joined = aPath.charAt(0) === "/" ? aPath : normalize2(aRoot.replace(/\/+$/, "") + "/" + aPath);
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
      var obj = /* @__PURE__ */ Object.create(null);
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
      return normalize2(sourceURL);
    }
    exports.computeSourceURL = computeSourceURL;
  }
});

// ../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/array-set.js
var require_array_set = __commonJS({
  "../../node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/array-set.js"(exports) {
    var util = require_util();
    var has = Object.prototype.hasOwnProperty;
    var hasNativeMap = typeof Map !== "undefined";
    function ArraySet() {
      this._array = [];
      this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
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
          this._sourcesContents = /* @__PURE__ */ Object.create(null);
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
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
          );
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
        throw new Error(
          "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
        );
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
      var index2 = recursiveSearch(
        -1,
        aHaystack.length,
        aNeedle,
        aHaystack,
        aCompare,
        aBias || exports.GREATEST_LOWER_BOUND
      );
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
      var index2 = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        binarySearch.LEAST_UPPER_BOUND
      );
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
      smc.sourcesContent = aSourceMap._generateSourcesContent(
        smc._sources.toArray(),
        smc.sourceRoot
      );
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
      var index2 = this._findMapping(
        needle,
        this._generatedMappings,
        "generatedLine",
        "generatedColumn",
        util.compareByGeneratedPositionsDeflated,
        util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
      );
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
      var index2 = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
      );
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
            // The offset fields are 0-based, but we use 1-based indices when
            // encoding/decoding from VLQ.
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
      var sectionIndex = binarySearch.search(
        needle,
        this._sections,
        function(needle2, section2) {
          var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
          if (cmp) {
            return cmp;
          }
          return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
        }
      );
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
          node.add(new SourceNode(
            mapping.originalLine,
            mapping.originalColumn,
            source,
            code,
            mapping.name
          ));
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
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
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
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
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
    exports.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    exports.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
    exports.SourceNode = require_source_node().SourceNode;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/input-source-map-tracker.js
var require_input_source_map_tracker = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/input-source-map-tracker.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-remote-resource.js
var require_is_remote_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-remote-resource.js"(exports, module2) {
    var REMOTE_RESOURCE_PATTERN = /^(\w+:\/\/|\/\/)/;
    var FILE_RESOURCE_PATTERN = /^file:\/\//;
    function isRemoteResource(uri) {
      return REMOTE_RESOURCE_PATTERN.test(uri) && !FILE_RESOURCE_PATTERN.test(uri);
    }
    module2.exports = isRemoteResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/has-protocol.js
var require_has_protocol = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/has-protocol.js"(exports, module2) {
    var NO_PROTOCOL_RESOURCE_PATTERN = /^\/\//;
    function hasProtocol(uri) {
      return !NO_PROTOCOL_RESOURCE_PATTERN.test(uri);
    }
    module2.exports = hasProtocol;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/is-allowed-resource.js
var require_is_allowed_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/is-allowed-resource.js"(exports, module2) {
    var path3 = require("path");
    var url = require("url");
    var isRemoteResource = require_is_remote_resource();
    var hasProtocol = require_has_protocol();
    var HTTP_PROTOCOL = "http:";
    function isAllowedResource(uri, isRemote, rules) {
      var match2;
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
      match2 = isRemote ? url.parse(uri).host : uri;
      absoluteUri = isRemote ? uri : path3.resolve(uri);
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
        } else if (rule === match2) {
          allowed = true;
        } else if (rule === uri) {
          allowed = true;
        } else if (isRemote && absoluteUri.indexOf(rule) === 0) {
          allowed = true;
        } else if (!isRemote && absoluteUri.indexOf(path3.resolve(rule)) === 0) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/match-data-uri.js
var require_match_data_uri = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/match-data-uri.js"(exports, module2) {
    var DATA_URI_PATTERN = /^data:(\S*?)?(;charset=(?:(?!;charset=)[^;])+)?(;[^,]+?)?,(.+)/;
    function matchDataUri(uri) {
      return DATA_URI_PATTERN.exec(uri);
    }
    module2.exports = matchDataUri;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/rebase-local-map.js
var require_rebase_local_map = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/rebase-local-map.js"(exports, module2) {
    var path3 = require("path");
    function rebaseLocalMap(sourceMap, sourceUri, rebaseTo) {
      var currentPath = path3.resolve("");
      var absoluteUri = path3.resolve(currentPath, sourceUri);
      var absoluteUriDirectory = path3.dirname(absoluteUri);
      sourceMap.sources = sourceMap.sources.map(function(source) {
        return path3.relative(rebaseTo, path3.resolve(absoluteUriDirectory, source));
      });
      return sourceMap;
    }
    module2.exports = rebaseLocalMap;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/rebase-remote-map.js
var require_rebase_remote_map = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/rebase-remote-map.js"(exports, module2) {
    var path3 = require("path");
    var url = require("url");
    function rebaseRemoteMap(sourceMap, sourceUri) {
      var sourceDirectory = path3.dirname(sourceUri);
      sourceMap.sources = sourceMap.sources.map(function(source) {
        return url.resolve(sourceDirectory, source);
      });
      return sourceMap;
    }
    module2.exports = rebaseRemoteMap;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-data-uri-resource.js
var require_is_data_uri_resource = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-data-uri-resource.js"(exports, module2) {
    var DATA_URI_PATTERN = /^data:(\S{0,31}?)?(;charset=(?:(?!;charset=)[^;])+)?(;[^,]+?)?,(.+)/;
    function isDataUriResource(uri) {
      return DATA_URI_PATTERN.test(uri);
    }
    module2.exports = isDataUriResource;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/apply-source-maps.js
var require_apply_source_maps = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/apply-source-maps.js"(exports, module2) {
    var fs2 = require("fs");
    var path3 = require("path");
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
      absoluteUri = path3.resolve(applyContext.rebaseTo, uri);
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/extract-import-url-and-media.js
var require_extract_import_url_and_media = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/extract-import-url-and-media.js"(exports, module2) {
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
      var normalized;
      var parts;
      normalized = atRuleValue.replace(IMPORT_PREFIX_PATTERN, "").trim().replace(URL_PREFIX_PATTERN, "(").replace(URL_SUFFIX_PATTERN, ") ").replace(QUOTE_PREFIX_PATTERN, "").replace(QUOTE_SUFFIX_PATTERN, "");
      parts = split(normalized, " ");
      uri = parts[0].replace(BRACE_PREFIX, "").replace(BRACE_SUFFIX, "");
      mediaQuery = parts.slice(1).join(" ");
      return [uri, mediaQuery];
    }
    module2.exports = extractImportUrlAndMedia;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/load-original-sources.js
var require_load_original_sources = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/load-original-sources.js"(exports, module2) {
    var fs2 = require("fs");
    var path3 = require("path");
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
      var absoluteUri = path3.resolve(loadContext.rebaseTo, relativeUri);
      if (!fs2.existsSync(absoluteUri) || !fs2.statSync(absoluteUri).isFile()) {
        loadContext.warnings.push('Ignoring local source map at "' + absoluteUri + '" as resource is missing.');
        return null;
      }
      if (!isAllowed) {
        loadContext.warnings.push('Cannot fetch "' + absoluteUri + '" as resource is not allowed.');
        return null;
      }
      var result = fs2.readFileSync(absoluteUri, "utf8");
      if (result.charCodeAt(0) === 65279) {
        result = result.substring(1);
      }
      return result;
    }
    module2.exports = loadOriginalSources;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/normalize-path.js
var require_normalize_path2 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/normalize-path.js"(exports, module2) {
    var UNIX_SEPARATOR = "/";
    var WINDOWS_SEPARATOR_PATTERN = /\\/g;
    function normalizePath(path3) {
      return path3.replace(WINDOWS_SEPARATOR_PATTERN, UNIX_SEPARATOR);
    }
    module2.exports = normalizePath;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/restore-import.js
var require_restore_import = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/restore-import.js"(exports, module2) {
    function restoreImport(uri, mediaQuery) {
      return ("@import " + uri + " " + mediaQuery).trim();
    }
    module2.exports = restoreImport;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/rewrite-url.js
var require_rewrite_url = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/rewrite-url.js"(exports, module2) {
    var path3 = require("path");
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
      return rebaseConfig.absolute ? normalize2(absolute(uri, rebaseConfig)) : normalize2(relative(uri, rebaseConfig));
    }
    function isAbsolute(uri) {
      return path3.isAbsolute(uri);
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
      return path3.resolve(path3.join(rebaseConfig.fromBase || "", uri)).replace(rebaseConfig.toBase, "");
    }
    function relative(uri, rebaseConfig) {
      return path3.relative(rebaseConfig.toBase, path3.join(rebaseConfig.fromBase || "", uri));
    }
    function normalize2(uri) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-import.js
var require_is_import = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/utils/is-import.js"(exports, module2) {
    var IMPORT_PREFIX_PATTERN = /^@import/i;
    function isImport(value) {
      return IMPORT_PREFIX_PATTERN.test(value);
    }
    module2.exports = isImport;
  }
});

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/rebase.js
var require_rebase2 = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/rebase.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/tokenizer/tokenize.js
var require_tokenize = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/tokenizer/tokenize.js"(exports, module2) {
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
      "@supports",
      "@container",
      "@layer"
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
        isVariable = isVariable || level != Level.COMMENT && !seekingValue && isPreviousDash && character === "-" && buffer.length === 1;
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/read-sources.js
var require_read_sources = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/reader/read-sources.js"(exports, module2) {
    var fs2 = require("fs");
    var path3 = require("path");
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
      var currentPath = path3.resolve("");
      var absoluteUri;
      var relativeToCurrentPath;
      var normalizedUri;
      if (isRemoteResource(uri)) {
        return uri;
      }
      absoluteUri = path3.isAbsolute(uri) ? uri : path3.resolve(uri);
      relativeToCurrentPath = path3.relative(currentPath, absoluteUri);
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
        rebaseConfig.fromBase = path3.resolve("");
        rebaseConfig.toBase = context.options.rebaseTo;
      } else if (isRemoteResource(context.source)) {
        rebaseConfig.fromBase = context.source;
        rebaseConfig.toBase = context.source;
      } else if (path3.isAbsolute(context.source)) {
        rebaseConfig.fromBase = path3.dirname(context.source);
        rebaseConfig.toBase = context.options.rebaseTo;
      } else {
        rebaseConfig.fromBase = path3.dirname(path3.resolve(context.source));
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
      var currentPath = path3.resolve("");
      var absoluteUri = path3.isAbsolute(protocolLessUri) ? path3.resolve(currentPath, protocolLessUri[0] == "/" ? protocolLessUri.substring(1) : protocolLessUri) : path3.resolve(inlinerContext.rebaseTo, protocolLessUri);
      var relativeToCurrentPath = path3.relative(currentPath, absoluteUri);
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
        if (importedStyles.charCodeAt(0) === 65279) {
          importedStyles = importedStyles.substring(1);
        }
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/writer/simple.js
var require_simple = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/writer/simple.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/writer/source-maps.js
var require_source_maps = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/writer/source-maps.js"(exports, module2) {
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
        serializeContext.outputMap.setSourceContent(
          storedSource,
          serializeContext.sourcesContent[originalSource]
        );
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/clean.js
var require_clean = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/lib/clean.js"(exports, module2) {
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

// ../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/index.js
var require_clean_css = __commonJS({
  "../../node_modules/.pnpm/clean-css@5.3.2/node_modules/clean-css/index.js"(exports, module2) {
    module2.exports = require_clean();
  }
});

// ../../node_modules/.pnpm/balanced-match@1.0.2/node_modules/balanced-match/index.js
var require_balanced_match = __commonJS({
  "../../node_modules/.pnpm/balanced-match@1.0.2/node_modules/balanced-match/index.js"(exports, module2) {
    "use strict";
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
      return expand2(escapeBraces(str), true).map(unescapeBraces);
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
    function expand2(str, isTop) {
      var expansions = [];
      var m = balanced("{", "}", str);
      if (!m)
        return [str];
      var pre = m.pre;
      var post = m.post.length ? expand2(m.post, false) : [""];
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
            return expand2(str);
          }
          return [str];
        }
        var n;
        if (isSequence) {
          n = m.body.split(/\.\./);
        } else {
          n = parseCommaParts(m.body);
          if (n.length === 1) {
            n = expand2(n[0], false).map(embrace);
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
            N.push.apply(N, expand2(n[j], false));
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

// src/node/cli.ts
var cli_exports = {};
__export(cli_exports, {
  VERSION_CLI: () => VERSION_CLI,
  default: () => cli_default
});
module.exports = __toCommonJS(cli_exports);

// ../../node_modules/.pnpm/cac@6.7.14/node_modules/cac/dist/index.mjs
var import_events = require("events");
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
  const defaults2 = opts.default !== void 0;
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
  if (defaults2) {
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
  if (defaults2) {
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
  const parse = (match2) => {
    let variadic = false;
    let value = match2[1];
    if (value.startsWith("...")) {
      value = value.slice(3);
      variadic = true;
    }
    return {
      required: match2[0].startsWith("<"),
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
    let transforms = /* @__PURE__ */ Object.create(null);
    for (const cliOption of cliOptions) {
      if (!ignoreDefault && cliOption.config.default !== void 0) {
        for (const name of cliOption.names) {
          options[name] = cliOption.config.default;
        }
      }
      if (Array.isArray(cliOption.config.type)) {
        if (transforms[cliOption.name] === void 0) {
          transforms[cliOption.name] = /* @__PURE__ */ Object.create(null);
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

// src/core/const.ts
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
    if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
      codeUnit >= 1 && codeUnit <= 31 || codeUnit == 127 || // If the character is the first character and is in the range [0-9]
      // (U+0030 to U+0039), […]
      index2 == 0 && codeUnit >= 48 && codeUnit <= 57 || // If the character is the second character and is in the range [0-9]
      // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
      index2 == 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit == 45
    ) {
      result += "\\" + codeUnit.toString(16) + " ";
      continue;
    }
    if (
      // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      index2 == 0 && length == 1 && codeUnit == 45
    ) {
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
var splitValues = (value, project = cssvar) => {
  if (value.includes("|"))
    return value.split("|").map(project);
  return value.split("/").map(project);
};
var makeValues = (value, project = cssvar) => splitValues(value, project).join(" ");
var makeCommaValues = (value, project = cssvar) => value.split(",").map(project).join(",");
var makeSide = (value) => makeValues(value, px);
var makeRatio = (value) => {
  const [w, h] = value.split(/[:/]/);
  return (+h / +w * 100).toFixed(2) + "%";
};
var makeNumber = (num) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0";
var cssvar = (value) => String(value).startsWith("--") ? `var(${value})` : value;
var px = (value) => {
  if (value === void 0 || value === null)
    throw new Error("px: value is undefined");
  if (value === 0 || value === "0")
    return 0;
  const v = String(value);
  if (v.startsWith("--"))
    return cssvar("" + value);
  const [n, m] = v.split("/");
  if (+n > 0 && +m > 0)
    return makeNumber(+n / +m * 100) + "%";
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return "calc(" + v.replace(/[-+]/g, (a) => ` ${a} `) + ")";
  }
  return +value === +value ? value + "px" : value;
};
var deg = (value) => {
  if (value === void 0 || value === null)
    throw new Error("deg: value is undefined");
  if (value === 0 || value === "0")
    return 0;
  const v = String(value);
  if (v.startsWith("--"))
    return cssvar("" + value);
  if (/.[-+*/]/.test(v) && /\d/.test(v)) {
    return "calc(" + v.replace(/[-+]/g, (a) => ` ${a} `) + ")";
  }
  return +value === +value ? value + "deg" : value;
};
var rpx = (value) => {
  if (value === "fill")
    return "9999px";
  return px(value);
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
  const values = splitValues(value, (value2) => {
    if (+value2 > 0) {
      hasWidth = true;
      return px(value2);
    }
    if (borderStyles.includes(String(value2))) {
      hasStyle = true;
      return value2;
    }
    return makeColor(String(value2));
  });
  if (!hasWidth)
    values.unshift("1px");
  if (!hasStyle)
    values.unshift("solid");
  return values.join(" ");
};
var makeHBoxWithSemi = (value = "") => {
  const values = value.split(/[+/|]/);
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
    return /^[\d.]+$/.test(v) ? `gap:${px(v)};` : "";
  });
  if (!result.find((r) => r.startsWith("align-items:"))) {
    result.unshift("align-items:center;");
  }
  return [...new Set(result)].join("");
};
var makeVBoxWithSemi = (value = "") => {
  const values = value.split(/[+/|]/);
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
    return /^[\d.]+$/.test(v) ? `gap:${px(v)};` : "";
  });
  if (!result.find((r) => r.startsWith("align-items:"))) {
    result.unshift("align-items:stretch;");
  }
  return [...new Set(result)].join("");
};
var makeHBoxFill = () => ":where(&>*){flex-shrink:0;--w-grow:1;--w-align:initial;--h-grow:initial;--h-align:stretch;}";
var makeVBoxFill = () => ":where(&>*){flex-shrink:0;--w-grow:initial;--w-align:stretch;--h-grow:1;--h-align:initial;}";
var makeBoxFill = (value) => {
  const val = value.split(/\s+/);
  if (val.includes("row"))
    return makeHBoxFill();
  if (val.includes("column"))
    return makeVBoxFill();
  return "";
};
var makeTextBox = (value = "") => {
  const values = value.split("+");
  const result = values.map((v) => {
    switch (v) {
      case "left": {
        return "text-align:left;";
      }
      case "center": {
        return "text-align:center;";
      }
      case "right": {
        return "text-align:right;";
      }
      case "justify": {
        return "text-align:justify;";
      }
      case "top": {
        return "display:flex;flex-flow:column;justify-content:flex-start;";
      }
      case "middle": {
        return "display:flex;flex-flow:column;justify-content:center;";
      }
      case "bottom": {
        return "display:flex;flex-flow:column;justify-content:flex-end;";
      }
      case "pack": {
        return "display:flex;flex-flow:column;align-items:center;justify-content:center;text-align:center;";
      }
    }
    return "";
  });
  return [...new Set(result)].join("");
};
var makeTransition = (value) => {
  if (!/\d/.test(value))
    return value;
  if (!value.includes("="))
    return `all ${value}`;
  return value.split(/[/|]/).map((item) => item.replace("=", " ")).join(",");
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
var makePosition2X = (x) => {
  if (x.startsWith("center")) {
    const left2 = x === "center" ? "50%" : `calc(50% + ${x.slice(6)})`;
    return `left:${left2};--a-translate-x:-50%;transform:var(--a-transform);`;
  }
  const [left, right] = x.split("~");
  const res = [];
  res.push(left ? `left:${px(left)};` : "");
  res.push(right ? `right:${px(right)};` : "");
  return res.join("");
};
var makePosition2Y = (y) => {
  if (y.startsWith("center")) {
    const top2 = y === "center" ? "50%" : `calc(50% + ${y.slice(6)})`;
    return `top:${top2};--a-translate-y:-50%;transform:var(--a-transform);`;
  }
  const [top, bottom] = y.split("~");
  const res = [];
  res.push(top ? `top:${px(top)};` : "");
  res.push(bottom ? `bottom:${px(bottom)};` : "");
  return res.join("");
};
var makePosition2 = (value) => {
  const [x, y] = value.split(",");
  return makePosition2X(x) + makePosition2Y(y);
};
var makePositionWithSemi = (value) => {
  if (!value)
    return "";
  if (value === "pack" || value === "center") {
    return "left:50%;top:50%;transform:translate(-50%,-50%);";
  }
  return (value.includes(",") ? makePosition2(value) : makePosition1(value)) + ";";
};

// src/core/rules.ts
var reset = `
*,:after,:before{margin:0;padding:0;font:inherit;color:inherit;box-sizing:border-box;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
html,body{height:100%;}
img,picture,video,canvas{display:block;max-width:100%;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}
*,:after,:before{--w-grow:initial;--w-align:initial;--h-grow:initial;--h-align:initial;}
*,:after,:before{
--a-translate-x:0;
--a-translate-y:0;
--a-rotate:0;
--a-skew-x:0;
--a-skew-y:0;
--a-scale-x:1;
--a-scale-y:1;
--a-transform:translateX(var(--a-translate-x)) translateY(var(--a-translate-y)) rotate(var(--a-rotate)) skewX(var(--a-skew-x)) skewY(var(--a-skew-y)) scaleX(var(--a-scale-x)) scaleY(var(--a-scale-y));
--a-transform3d:translate3d(var(--a-translate-x),var(--a-translate-y),0) rotate(var(--a-rotate)) skewX(var(--a-skew-x)) skewY(var(--a-skew-y)) scaleX(var(--a-scale-x)) scaleY(var(--a-scale-y));
}
`;
var RULES = {
  // -- Color
  "c": (value) => `color:${makeColor(value)};`,
  "color": (value) => RULES.c(value),
  "caret": (value) => `caret-color:${makeColor(value)};`,
  "caret-current": () => `color:currentColor;`,
  // -- Typography
  "font": (value) => makeFont(value),
  "font-size": (value) => `font-size:${px(value)};`,
  "line-height": (value) => `line-height:${+value < 4 ? makeNumber(+value) : px(value)};`,
  "letter-spacing": (value) => `letter-spacing:${percentToEm(value)};`,
  "word-spacing": (value) => `word-spacing:${px(value)};`,
  // Font-Family @TODO:font-stack은 일반적인 스택 만들어 두기...(L),Roboto,NotoSans와 같은것도 만들까?
  // @TODO: Font-Family Utility
  "AppleSD": () => `font-family:"Apple SD Gothic Neo";`,
  "Roboto": () => makeFontFamily("Roboto"),
  // @TODO:font-family:var(--serif),serif; 이게 먹히나?
  "sans": () => makeFontFamily("sans"),
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
  // Font Weight Utility
  "thicker": (value = "1") => `text-shadow:0 0 ${px(value)} currentColor;`,
  // Font-Style
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
  // Text Align
  "text": (value) => makeTextBox(value),
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
  // Text Indent
  "text-indent": (value) => `text-indent:${px(value)};`,
  // Text Wrap
  "break-all": () => `word-break:break-all;`,
  "break-word": () => `overflow-wrap:break-word;`,
  "keep-all": () => `word-break:keep-all;`,
  "hyphens": (value = "auto") => `hyphens:${value};`,
  // -- Display
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
  // -- Box
  // Box-Sizing
  "border-box": () => `box-sizing:border-box;`,
  "content-box": () => `box-sizing:content-box;`,
  // Box-Model
  "w": (value) => {
    if (value === "hug")
      return "width:max-content;";
    if (value === "stretch" || value === "fill") {
      return `&{flex-grow:var(--w-grow);align-self:var(--w-align);flex-shrink:1;max-width:100%}&.h\\(fill\\),&.h\\(stretch\\){flex-grow:1;align-self:stretch;}`;
    }
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
    return `width:${px(value)};`;
  },
  "h": (value) => {
    if (value === "hug")
      return "height:max-content;";
    if (value === "stretch" || value === "fill")
      return `flex-grow:var(--h-grow);align-self:var(--h-align)`;
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
    return `height:${px(value)};`;
  },
  // BoxModel - Margin
  "m": (value) => `margin:${makeSide(value)};`,
  "mx": (value) => `margin-left:${px(value)};margin-right:${px(value)};`,
  "my": (value) => `margin-top:${px(value)};margin-bottom:${px(value)};`,
  "mt": (value) => `margin-top:${px(value)};`,
  "mr": (value) => `margin-right:${px(value)};`,
  "mb": (value) => `margin-bottom:${px(value)};`,
  "ml": (value) => `margin-left:${px(value)};`,
  // BoxModel - Padding
  "p": (value) => `padding:${makeSide(value)};`,
  "px": (value) => `padding-left:${px(value)};padding-right:${px(value)};`,
  "py": (value) => `padding-top:${px(value)};padding-bottom:${px(value)};`,
  "pt": (value) => `padding-top:${px(value)};`,
  "pr": (value) => `padding-right:${px(value)};`,
  "pb": (value) => `padding-bottom:${px(value)};`,
  "pl": (value) => `padding-left:${px(value)};`,
  // BoxModel - Border
  "no-border": () => `border:none;outline:none;`,
  "b": (value) => `border:${makeBorder(value)};`,
  "bx": (value) => `border-left:${makeBorder(value)};border-right:${makeBorder(value)};`,
  "by": (value) => `border-top:${makeBorder(value)};border-bottom:${makeBorder(value)};`,
  "bt": (value) => `border-top:${makeBorder(value)};`,
  "br": (value) => `border-right:${makeBorder(value)};`,
  "bb": (value) => `border-bottom:${makeBorder(value)};`,
  "bl": (value) => `border-left:${makeBorder(value)};`,
  "bw": (value) => `border-width:${makeValues(value, px)};`,
  "bxw": (value) => `border-left-width:${px(value)};border-right-width:${px(value)};`,
  "byw": (value) => `border-top-width:${px(value)};border-bottom-width:${px(value)};`,
  "btw": (value) => `border-top-width:${px(value)};`,
  "brw": (value) => `border-right-width:${px(value)};`,
  "bbw": (value) => `border-bottom-width:${px(value)};`,
  "blw": (value) => `border-left-width:${px(value)};`,
  "bs": (value) => `border-style:${makeValues(value)};`,
  "bxs": (value) => `border-left-style:${cssvar(value)};border-right-style:${cssvar(value)};`,
  "bys": (value) => `border-top-style:${cssvar(value)};border-bottom-style:${cssvar(value)};`,
  "bts": (value) => `border-top-style:${cssvar(value)};`,
  "brs": (value) => `border-right-style:${cssvar(value)};`,
  "bbs": (value) => `border-bottom-style:${cssvar(value)};`,
  "bls": (value) => `border-left-style:${cssvar(value)};`,
  "bc": (value) => `border-color:${makeValues(value, makeColor)};`,
  "bxc": (value) => `border-left-color:${makeColor(value)};border-right-color:${makeColor(value)};`,
  "byc": (value) => `border-top-color:${makeColor(value)};border-bottom-color:${makeColor(value)};`,
  "btc": (value) => `border-top-color:${makeColor(value)};`,
  "brc": (value) => `border-right-color:${makeColor(value)};`,
  "bbc": (value) => `border-bottom-color:${makeColor(value)};`,
  "blc": (value) => `border-left-color:${makeColor(value)};`,
  // outline
  "outline": (value) => `outline:${makeBorder(value)};`,
  "guide": (value = "#4f80ff") => `&,&>*{outline:1px solid ${makeColor(value)};}`,
  // border-radius
  "r": (value) => `border-radius:${makeValues(value, rpx)};`,
  "rt": (value) => `border-top-left-radius:${rpx(value)};border-top-right-radius:${rpx(value)};`,
  "rr": (value) => `border-top-right-radius:${rpx(value)};border-bottom-right-radius:${rpx(value)};`,
  "rb": (value) => `border-bottom-left-radius:${rpx(value)};border-bottom-right-radius:${rpx(value)};`,
  "rl": (value) => `border-top-left-radius:${rpx(value)};border-bottom-left-radius:${rpx(value)};`,
  "rtl": (value) => `border-top-left-radius:${rpx(value)};`,
  "rtr": (value) => `border-top-right-radius:${rpx(value)};`,
  "rbr": (value) => `border-bottom-right-radius:${rpx(value)};`,
  "rbl": (value) => `border-bottom-left-radius:${rpx(value)};`,
  // box-shadow
  "ring": (value) => {
    const [color, size = 1] = value.split("/");
    return `box-shadow:0 0 0 ${px(size)} ${makeColor(color)};`;
  },
  "box-shadow": (value) => `box-shadow:${makeValues(value, (v) => Number.isInteger(+v) ? px(v) : cssvar(v))};`,
  // -- Background
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
  // @TODO:background 이미지에 대한 세련된 방법이 필요하다!
  "bg-repeat-x": () => `background-repeat:repeat-x;`,
  "bg-repeat-y": () => `background-repeat:repeat-y;`,
  "bg-no-repeat": () => `background-repeat:no-repeat;`,
  "bg-fixed": () => `background-attachment:fixed;`,
  "bg-scroll": () => `background-attachment:scroll;`,
  "contain": () => `background-size:contain;background-position:center;background-repeat:no-repeat;object-fit:contain;`,
  "cover": () => `background-size:cover;background-position:center;background-repeat:no-repeat;object-fit:cover;`,
  /// -- Overflow
  // OverFlow
  "clip": () => `&{overflow:hidden;}&:has(.nowrap\\.\\.\\.){flex-shrink:1;}`,
  "overflow": (value) => `overflow:${value};`,
  "overflow-x": (value) => `overflow-x:${value};`,
  "overflow-y": (value) => `overflow-y:${value};`,
  // Scroll
  "scroll": () => `overflow:auto;`,
  "scroll-x": () => `overflow-x:auto;overflow-y:hidden;`,
  "scroll-y": () => `overflow-x:hidden;overflow-y:auto;`,
  "scrollbar": () => `&{overflow:scroll;}&.scroll{overflow:scroll;}&.scroll-x{overflow-x:scroll;}&.scroll-y{overflow-y:scroll;}`,
  "no-scrollbar": () => `&::-webkit-scrollbar{display:none;}`,
  "no-scrollbar-x": () => `&::-webkit-scrollbar:horizontal{display:none;}`,
  // Scroll Snap
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
  // @TODO:- TBD
  "overscroll": (value) => `overscroll-behavior:${value};`,
  "overscroll-x": (value) => `overscroll-behavior-x:${value};`,
  "overscroll-y": (value) => `overscroll-behavior-y:${value};`,
  // @TODO:- TBD
  "no-bouncing": () => "",
  "no-overscroll": () => "",
  // OverFlow + Text
  "white-space-normal": () => `white-space:normal;`,
  "pre": () => `white-space:pre-wrap;`,
  "pre-wrap": () => `white-space:pre-wrap;`,
  "pre-line": () => `white-space:pre-line;`,
  "break-spaces": () => `white-space:break-spaces;`,
  "nowrap": () => `white-space:nowrap;flex-shrink:0;max-width:100%;`,
  "nowrap...": () => `white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;max-width:100%;`,
  // line-clamp vs max-lines
  // @NOTE:일단 기존 프로퍼티에 의거한다는 원칙에따라 line-clamp를 쓴다. 이후 max-lines가 정식 스펙이 되면 deprecated한다.
  // @NOTE:그냥 둘다 제공한다.
  "line-clamp": (value) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  "max-lines": (value) => `display:-webkit-box;-webkit-line-clamp:${value};-webkit-box-orient:vertical;overflow:hidden;`,
  // -- Flexbox Layout
  "hbox": (value = "") => `&{display:flex;flex-flow:row;${makeHBoxWithSemi(value)}}${makeHBoxFill()}`,
  "vbox": (value = "") => `&{display:flex;flex-flow:column;${makeVBoxWithSemi(value)}}${makeVBoxFill()}`,
  "pack": () => `&{display:flex;align-items:center;justify-content:center;}${makeHBoxFill()}`,
  "hpack": () => `&{display:flex;flex-flow:row;align-items:center;justify-content:center;}${makeHBoxFill()}`,
  "vpack": () => `&{display:flex;flex-flow:column;align-items:center;justify-content:center;}${makeVBoxFill()}`,
  "hbox(": () => ``,
  "vbox(": () => ``,
  "subbox": () => `display:flex;flex-flow:inherit;align-items:inherit;justify-content:inherit;`,
  "flex-flow:": (value) => `&{flex-flow:${value};}${makeBoxFill(value)}`,
  "flex-direction:": (value) => `&{flex-direction:${value};}${makeBoxFill(value)}`,
  "gap": (value) => {
    if (value === "auto")
      return "&{justify-content:space-between;align-content:space-between;}&>:only-child{margin:auto}";
    return `gap:${makeSide(value)};grid-gap:${makeSide(value)};`;
  },
  // @NOTE:IE,safari<=13
  "hgap": (value) => `&>*+*{margin-left:${px(value)};}`,
  "hgap-reverse": (value) => `&>*+*{margin-right:${px(value)};}`,
  "vgap": (value) => `&>*+*{margin-top:${px(value)};}`,
  "vgap-reverse": (value) => `&>*+*{margin-bottom:${px(value)};}`,
  // align-items
  "ai": (value) => `align-items:${value};`,
  "items": (value) => `align-items:${value};`,
  "items-start": () => `align-items:flex-start;`,
  "items-end": () => `align-items:flex-end;`,
  "items-center": () => `align-items:center;`,
  "items-baseline": () => `align-items:baseline;`,
  "items-stretch": () => `align-items:stretch;`,
  // align-content
  "ac": (value) => `align-content:${value};`,
  "content-start": () => `align-content:flex-start;`,
  "content-end": () => `align-content:flex-end;`,
  "content-center": () => `align-content:center;`,
  "content-between": () => `align-content:space-between;`,
  "content-around": () => `align-content:space-around;`,
  "content-evenly": () => `align-content:space-evenly;`,
  "content-stretch": () => `align-content:stretch;`,
  // justify-content
  "jc": (value) => `justify-content:${value};`,
  "justify": (value) => `justify-content:${value};`,
  "justify-start": () => `justify-content:flex-start;`,
  "justify-end": () => `justify-content:flex-end;`,
  "justify-center": () => `justify-content:center;`,
  "justify-between": () => `justify-content:space-between;`,
  "justify-around": () => `justify-content:space-around;`,
  "justify-evenly": () => `justify-content:space-evenly;`,
  "justify-stretch": () => `justify-content:stretch;`,
  "space-between": () => `justify-content:space-between;align-content:space-between;`,
  "space-around": () => `justify-content:space-around;align-content:space-around;`,
  "space-evenly": () => `justify-content:space-evenly;align-content:space-evenly;`,
  // justify-items
  "ji": (value) => `justify-items:${value};`,
  "justify-items": (value) => `justify-items:${value};`,
  "justify-items-start": () => `justify-items:start;`,
  "justify-items-end": () => `justify-items:end;`,
  "justify-items-center": () => `justify-items:center;`,
  "justify-items-stretch": () => `justify-items:stretch;`,
  // flex: @deprecated
  "flex": (value = "1") => `flex:${makeValues(value)};`,
  "space": (value) => `[class*="hbox"]>&{width:${px(value)};}[class*="vbox"]>&{height:${px(value)};}`,
  // flex
  "grow": (value = "1") => `flex-grow:${cssvar(value)};`,
  "grow-0": () => `flex-grow:0;`,
  "no-grow": () => `flex-grow:0;`,
  "shrink": (value = "1") => `flex-shrink:${cssvar(value)};`,
  "no-shrink": () => `flex-shrink:0;`,
  "flex-grow": (value = "1") => `flex-grow:${cssvar(value)};`,
  "flex-shrink": (value = "1") => `flex-shrink:${cssvar(value)};`,
  "flex-basis": (value) => `flex-basis:${px(value)};`,
  "flex-wrap": () => "&{flex-wrap:wrap;}:where(&>*){max-width:100%;max-height:100%;}",
  "flex-wrap-reverse": () => "&{flex-wrap:wrap-reverse;}:where(&>*){max-width:100%;max-height:100%;}",
  "flex-nowrap": () => "flex-wrap:nowrap;",
  "order": (value) => `order:${cssvar(value)};`,
  // -- Grid
  // @TODO:-- GRID TBD
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
  // -- Position Utilities
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
  "absolute": (value) => `position:absolute;${makePositionWithSemi(value)}`,
  "relative": (value) => `position:relative;${makePositionWithSemi(value)}`,
  "sticky": (value) => `position:sticky;${makePositionWithSemi(value)}`,
  "sticky-top": (value = "0") => `position:sticky;top:${px(value)};`,
  "sticky-right": (value = "0") => `position:sticky;right:${px(value)};`,
  "sticky-bottom": (value = "0") => `position:sticky;bottom:${px(value)};`,
  "sticky-left": (value = "0") => `position:sticky;left:${px(value)};`,
  "fixed": (value) => `position:fixed;${makePositionWithSemi(value)}`,
  "static": () => `position:static;`,
  // Position
  "top": (value) => `top:${px(value)};`,
  "left": (value) => `left:${px(value)};`,
  "right": (value) => `right:${px(value)};`,
  "bottom": (value) => `bottom:${px(value)};`,
  "x": (value) => makePosition2X(value),
  "y": (value) => makePosition2Y(value),
  "z": (value) => `z-index:${cssvar(value)};`,
  "isolate": () => `isolation:isolate;`,
  // Visibility
  "none": () => `display:none;`,
  "hidden": () => `visibility:hidden;`,
  "invisible": () => `visibility:hidden;`,
  "blind": () => `position:absolute;width:1px;height:1px;padding:0;border:0;margin:-1px;white-space:nowrap;overflow:hidden;clip-path:inset(100%);`,
  "sr-only": () => `position:absolute;width:1px;height:1px;padding:0;border:0;margin:-1px;white-space:nowrap;overflow:hidden;clip-path:inset(100%);`,
  "gone": () => `position:absolute;width:1px;height:1px;padding:0;border:0;margin:-1px;white-space:nowrap;overflow:hidden;clip-path:inset(100%);`,
  "visible": () => `visibility:visible;`,
  "collapse": () => `visibility:collapse;`,
  "opacity": (value) => `opacity:${cssvar(value)};`,
  // Interactions
  "col-resize": () => `cursor:col-resize;`,
  "crosshair": () => `cursor:crosshair;`,
  "e-resize": () => `cursor:e-resize;`,
  "ew-resize": () => `cursor:ew-resize;`,
  "grab": () => `&{cursor:grab;}&:active{cursor:grabbing;}`,
  "grabbing": () => `cursor:grabbing;`,
  "n-resize": () => `cursor:n-resize;`,
  "ne-resize": () => `cursor:ne-resize;`,
  "nesw-resize": () => `cursor:nesw-resize;`,
  "ns-resize": () => `cursor:ns-resize;`,
  "nw-resize": () => `cursor:nw-resize;`,
  "nwse-resize": () => `cursor:nwse-resize;`,
  "not-allowed": () => `cursor:not-allowed;`,
  "pointer": () => `cursor:pointer;`,
  "progress": () => `cursor:progress;`,
  "row-resize": () => `cursor:row-resize;`,
  "s-resize": () => `cursor:s-resize;`,
  "se-resize": () => `cursor:se-resize;`,
  "sw-resize": () => `cursor:sw-resize;`,
  "w-resize": () => `cursor:w-resize;`,
  "zoom-in": () => `cursor:zoom-in;`,
  "zoom-out": () => `cursor:zoom-out;`,
  "cursor": (value) => `cursor:${value};`,
  "user-select-none": () => "user-select:none;-webkit-user-select:none;",
  "user-select-all": () => "user-select:all;-webkit-user-select:all;",
  "user-select-auto": () => "user-select:auto;-webkit-user-select:auto;",
  "user-select-text": () => "user-select:text;-webkit-user-select:text;",
  "user-select": (value) => `user-select:${cssvar(value)};-webkit-user-select:${cssvar(value)};`,
  "pointer-events-none": () => "pointer-events:none;",
  "pointer-events-auto": () => "pointer-events:auto;",
  // 에니메이션:transition(transform=100s/opacity=2s)
  "transition": (value) => `transition:${makeTransition(value)};`,
  // transform
  "translate": (value) => {
    const [x, y] = makeCommaValues(value, px).split(",");
    return `--a-transform-translate-x:${x};--a-transform-translate-y:${y};transform:var(--a-transform);`;
  },
  "translateX": (value) => `--a-translate-x:${px(value)};transform:var(--a-transform);`,
  "translateY": (value) => `--a-translate-y:${px(value)};transform:var(--a-transform);`,
  "rotate": (value) => {
    let [x, y, z] = makeCommaValues(value, deg).split(",");
    x = x || x;
    y = y || x;
    z = z || x;
    return `--a-rotate:${x};--a-rotate-x:${x};--a-rotate-y:${y};--a-rotate-z:${z};transform:var(--a-transform);`;
  },
  "rotateX": (value) => `--a-rotate-x:${deg(value)};transform:var(--a-transform);`,
  "rotateY": (value) => `--a-rotate-y:${deg(value)};transform:var(--a-transform);`,
  "scale": (value) => {
    let [x, y, z] = makeCommaValues(value).split(",");
    x = x || x;
    y = y || x;
    z = z || x;
    return `--a-scale-x:${x};--a-scale-y:${y};--a-scale-z:${z};transform:var(--a-transform);`;
  },
  "scaleX": (value) => `--a-scale-x:${makeNumber(+value)};transform:var(--a-transform);`,
  "scaleY": (value) => `--a-scale-y:${makeNumber(+value)};transform:var(--a-transform);`,
  "skew": (value) => {
    const [x, y] = makeCommaValues(value, deg).split(",");
    return `--a-skew-x:${x};--a-skew-y:${y};transform:var(--a-transform);`;
  },
  "skewX": (value) => `--a-skew-x:${deg(value)};transform:var(--a-transform);`,
  "skewY": (value) => `--a-skew-y:${deg(value)};transform:var(--a-transform);`,
  // @TODO: 3d transform
  // "translate3d": (value:string) => `--a-translate-x:${px(value)};--a-translate-y:${px(value)};--a-translate-z:${px(value)};transform:var(--a-transform);`,
  // "rotate3d": (value:string) => `--a-rotate-x:${deg(value)};--a-rotate-y:${deg(value)};--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
  // "translateZ": (value:string) => `--a-translate-z:${px(value)};transform:var(--a-transform);`,
  // "rotateZ": (value:string) => `--a-rotate-z:${deg(value)};transform:var(--a-transform);`,
  // "skewZ": (value:string) => `--a-skew-z:${deg(value)};transform:var(--a-transform);`,
  // "scaleZ": (value:string) => `--a-scale-z:${makeCommaValues(value)};transform:var(--a-transform);`,
  // Util
  "ratio": (value) => `&{position:relative;}&:before{content:"";display:block;width:100%;padding-top:${makeRatio(value)};}&>*{position:absolute;top:0;left:0;width:100%;height:100%;}`,
  "aspect": (value) => `aspect-ratio:${cssvar(value.replace(/:/g, "/"))};`,
  "aspect-ratio": (value) => `aspect-ratio:${cssvar(value.replace(/:/g, "/"))};`,
  "gpu": () => `transform:translateZ(0.1px);`,
  // etc
  "content": (value = "''") => `content:${cssvar(value)};`,
  "app-region": (value) => `app-region:${value};-webkit-app-region:${value};`,
  "clip-path": (value) => `clip-path:${makeValues(value)};-webkit-clip-path:${makeValues(value)};`,
  // table
  "table-fixed": () => `table-layout:fixed;`,
  "table-auto": () => `table-layout:auto;`,
  "table-layout-fixed": () => `table-layout:fixed;`,
  "table-layout-auto": () => `table-layout:auto;`,
  // Float & Clear
  "float": (value) => `float:${cssvar(value)};`,
  "clear": (value) => `clear:${cssvar(value)};`,
  // Filter
  "blur": (value) => `filter:blur(${px(value)});-webkit-filter:blur(${px(value)});`,
  "brightness": (value) => `filter:brightness(${cssvar(value)});-webkit-filter:brightness(${cssvar(value)});`,
  "contrast": (value) => `filter:contrast(${cssvar(value)});-webkit-filter:contrast(${cssvar(value)});`,
  "drop-shadow": (value) => `filter:drop-shadow(${makeValues(value, px)});-webkit-filter:drop-shadow(${makeValues(value, px)});`,
  "grayscale": (value) => `filter:grayscale(${cssvar(value)});-webkit-filter:grayscale(${cssvar(value)});`,
  "hue-rotate": (value) => `filter:hue-rotate(${cssvar(value)});-webkit-filter:hue-rotate(${cssvar(value)});`,
  "invert": (value) => `filter:invert(${cssvar(value)});-webkit-filter:invert(${cssvar(value)});`,
  "sepia": (value) => `filter:sepia(${cssvar(value)});-webkit-filter:sepia(${cssvar(value)});`,
  "saturate": (value) => `filter:saturate(${cssvar(value)});-webkit-filter:saturate(${cssvar(value)});`,
  "backdrop-blur": (value) => `backdrop-filter:blur(${px(value)});-webkit-backdrop-filter:blur(${px(value)});`,
  "backdrop-brightness": (value) => `backdrop-filter:brightness(${cssvar(value)});-webkit-backdrop-filter:brightness(${cssvar(value)});`,
  "backdrop-contrast": (value) => `backdrop-filter:contrast(${cssvar(value)});-webkit-backdrop-filter:contrast(${cssvar(value)});`,
  "backdrop-drop-shadow": (value) => `backdrop-filter:drop-shadow(${makeValues(value, px)});-webkit-backdrop-filter:drop-shadow(${makeValues(value, px)});`,
  "backdrop-grayscale": (value) => `backdrop-filter:grayscale(${cssvar(value)});-webkit-backdrop-filter:grayscale(${cssvar(value)});`,
  "backdrop-hue-rotate": (value) => `backdrop-filter:hue-rotate(${cssvar(value)});-webkit-backdrop-filter:hue-rotate(${cssvar(value)});`,
  "backdrop-invert": (value) => `backdrop-filter:invert(${cssvar(value)});-webkit-backdrop-filter:invert(${cssvar(value)});`,
  "backdrop-sepia": (value) => `backdrop-filter:sepia(${cssvar(value)});-webkit-backdrop-filter:sepia(${cssvar(value)});`,
  "backdrop-saturate": (value) => `backdrop-filter:saturate(${cssvar(value)});-webkit-backdrop-filter:saturate(${cssvar(value)});`,
  // @TODO:triangle
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
  // elevation
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
  // "touch:":{media:`(hover:none)`,selector:`html &`},
  // "!touch:":{media:`(hover:hover)`,selector:`html &`},
  "touch:": { media: `(max-device-width:1023.98px)`, selector: `html &` },
  "!touch:": { media: `(min-device-width:1024px)`, selector: `html &` },
  "portrait:": { media: `(orientation:portrait)`, selector: `html &` },
  "landscape:": { media: `(orientation:landscape)`, selector: `html &` },
  "print:": { media: `print`, selector: `html &` },
  "screen:": { media: `screen`, selector: `html &` },
  "speech:": { media: `speech`, selector: `html &` },
  // dark:@TBD
  "dark:": { selector: `html.dark &` }
};
var AT_RULE = {
  "@w": (ident, tokens2) => {
    if (tokens2[2]?.value !== "(" || tokens2[tokens2.length - 1]?.value !== ")") {
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
var PREFIX_RULES = {
  ...PREFIX_PSEUDO_CLASS,
  ...PREFIX_MEDIA_QUERY
};
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
var validateCSS = (s) => {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
    "'": "'",
    '"': '"',
    "`": "`"
  };
  let inString = null;
  let lastChar = null;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (inString) {
      if (char === inString && lastChar !== "\\") {
        if (stack.length === 0 || stack.pop() !== pairs[char]) {
          return false;
        }
        inString = null;
      }
      lastChar = char;
      continue;
    }
    if (char === "(" || char === "{" || char === "[" || char === "'" || char === '"' || char === "`") {
      stack.push(char);
      if (char === "'" || char === '"' || char === "`") {
        inString = char;
      }
    } else if (char === ")" || char === "}" || char === "]" || char === "'" || char === '"' || char === "`") {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
    lastChar = char;
  }
  return stack.length === 0;
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
        const finalRule = media ? media + "{" + rule + "}" : rule;
        if (!validateCSS(finalRule)) {
          throw new Error("no validate css!!");
        }
        return [finalRule, priority];
      });
    } catch (e) {
    }
  };
};
var sortByRule = (a, b) => a[1] - b[1];
var createGenerateCss = (rules = {}, prefixRules = {}) => {
  rules = { ...RULES, ...rules };
  prefixRules = { ...PREFIX_RULES, ...prefixRules };
  return (classList) => classList.flatMap(generateAtomicCss(rules, prefixRules)).filter(Boolean).sort(sortByRule).map((a) => a[0]);
};
var generateCss = createGenerateCss();

// src/node/build.ts
var import_chokidar = __toESM(require_chokidar());
var import_promises2 = __toESM(require("fs/promises"));
var import_path2 = __toESM(require("path"));
var import_clean_css = __toESM(require_clean_css());

// ../../node_modules/.pnpm/minimatch@9.0.1/node_modules/minimatch/dist/mjs/index.js
var import_brace_expansion = __toESM(require_brace_expansion(), 1);

// ../../node_modules/.pnpm/minimatch@9.0.1/node_modules/minimatch/dist/mjs/assert-valid-pattern.js
var MAX_PATTERN_LENGTH = 1024 * 64;
var assertValidPattern = (pattern) => {
  if (typeof pattern !== "string") {
    throw new TypeError("invalid pattern");
  }
  if (pattern.length > MAX_PATTERN_LENGTH) {
    throw new TypeError("pattern is too long");
  }
};

// ../../node_modules/.pnpm/minimatch@9.0.1/node_modules/minimatch/dist/mjs/brace-expressions.js
var posixClasses = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
  "[:alpha:]": ["\\p{L}\\p{Nl}", true],
  "[:ascii:]": ["\\x00-\\x7f", false],
  "[:blank:]": ["\\p{Zs}\\t", true],
  "[:cntrl:]": ["\\p{Cc}", true],
  "[:digit:]": ["\\p{Nd}", true],
  "[:graph:]": ["\\p{Z}\\p{C}", true, true],
  "[:lower:]": ["\\p{Ll}", true],
  "[:print:]": ["\\p{C}", true],
  "[:punct:]": ["\\p{P}", true],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
  "[:upper:]": ["\\p{Lu}", true],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
  "[:xdigit:]": ["A-Fa-f0-9", false]
};
var braceEscape = (s) => s.replace(/[[\]\\-]/g, "\\$&");
var regexpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var rangesToString = (ranges) => ranges.join("");
var parseClass = (glob2, position) => {
  const pos = position;
  if (glob2.charAt(pos) !== "[") {
    throw new Error("not in a brace expression");
  }
  const ranges = [];
  const negs = [];
  let i = pos + 1;
  let sawStart = false;
  let uflag = false;
  let escaping = false;
  let negate = false;
  let endPos = pos;
  let rangeStart = "";
  WHILE:
    while (i < glob2.length) {
      const c = glob2.charAt(i);
      if ((c === "!" || c === "^") && i === pos + 1) {
        negate = true;
        i++;
        continue;
      }
      if (c === "]" && sawStart && !escaping) {
        endPos = i + 1;
        break;
      }
      sawStart = true;
      if (c === "\\") {
        if (!escaping) {
          escaping = true;
          i++;
          continue;
        }
      }
      if (c === "[" && !escaping) {
        for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)) {
          if (glob2.startsWith(cls, i)) {
            if (rangeStart) {
              return ["$.", false, glob2.length - pos, true];
            }
            i += cls.length;
            if (neg)
              negs.push(unip);
            else
              ranges.push(unip);
            uflag = uflag || u;
            continue WHILE;
          }
        }
      }
      escaping = false;
      if (rangeStart) {
        if (c > rangeStart) {
          ranges.push(braceEscape(rangeStart) + "-" + braceEscape(c));
        } else if (c === rangeStart) {
          ranges.push(braceEscape(c));
        }
        rangeStart = "";
        i++;
        continue;
      }
      if (glob2.startsWith("-]", i + 1)) {
        ranges.push(braceEscape(c + "-"));
        i += 2;
        continue;
      }
      if (glob2.startsWith("-", i + 1)) {
        rangeStart = c;
        i += 2;
        continue;
      }
      ranges.push(braceEscape(c));
      i++;
    }
  if (endPos < i) {
    return ["", false, 0, false];
  }
  if (!ranges.length && !negs.length) {
    return ["$.", false, glob2.length - pos, true];
  }
  if (negs.length === 0 && ranges.length === 1 && /^\\?.$/.test(ranges[0]) && !negate) {
    const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
    return [regexpEscape(r), false, endPos - pos, false];
  }
  const sranges = "[" + (negate ? "^" : "") + rangesToString(ranges) + "]";
  const snegs = "[" + (negate ? "" : "^") + rangesToString(negs) + "]";
  const comb = ranges.length && negs.length ? "(" + sranges + "|" + snegs + ")" : ranges.length ? sranges : snegs;
  return [comb, uflag, endPos - pos, true];
};

// ../../node_modules/.pnpm/minimatch@9.0.1/node_modules/minimatch/dist/mjs/unescape.js
var unescape = (s, { windowsPathsNoEscape = false } = {}) => {
  return windowsPathsNoEscape ? s.replace(/\[([^\/\\])\]/g, "$1") : s.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
};

// ../../node_modules/.pnpm/minimatch@9.0.1/node_modules/minimatch/dist/mjs/ast.js
var types = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]);
var isExtglobType = (c) => types.has(c);
var startNoTraversal = "(?!\\.\\.?(?:$|/))";
var startNoDot = "(?!\\.)";
var addPatternStart = /* @__PURE__ */ new Set(["[", "."]);
var justDots = /* @__PURE__ */ new Set(["..", "."]);
var reSpecials = new Set("().*{}+?[]^$\\!");
var regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var qmark = "[^/]";
var star = qmark + "*?";
var starNoEmpty = qmark + "+?";
var AST = class _AST {
  type;
  #root;
  #hasMagic;
  #uflag = false;
  #parts = [];
  #parent;
  #parentIndex;
  #negs;
  #filledNegs = false;
  #options;
  #toString;
  // set to true if it's an extglob with no children
  // (which really means one child of '')
  #emptyExt = false;
  constructor(type, parent, options = {}) {
    this.type = type;
    if (type)
      this.#hasMagic = true;
    this.#parent = parent;
    this.#root = this.#parent ? this.#parent.#root : this;
    this.#options = this.#root === this ? options : this.#root.#options;
    this.#negs = this.#root === this ? [] : this.#root.#negs;
    if (type === "!" && !this.#root.#filledNegs)
      this.#negs.push(this);
    this.#parentIndex = this.#parent ? this.#parent.#parts.length : 0;
  }
  get hasMagic() {
    if (this.#hasMagic !== void 0)
      return this.#hasMagic;
    for (const p of this.#parts) {
      if (typeof p === "string")
        continue;
      if (p.type || p.hasMagic)
        return this.#hasMagic = true;
    }
    return this.#hasMagic;
  }
  // reconstructs the pattern
  toString() {
    if (this.#toString !== void 0)
      return this.#toString;
    if (!this.type) {
      return this.#toString = this.#parts.map((p) => String(p)).join("");
    } else {
      return this.#toString = this.type + "(" + this.#parts.map((p) => String(p)).join("|") + ")";
    }
  }
  #fillNegs() {
    if (this !== this.#root)
      throw new Error("should only call on root");
    if (this.#filledNegs)
      return this;
    this.toString();
    this.#filledNegs = true;
    let n;
    while (n = this.#negs.pop()) {
      if (n.type !== "!")
        continue;
      let p = n;
      let pp = p.#parent;
      while (pp) {
        for (let i = p.#parentIndex + 1; !pp.type && i < pp.#parts.length; i++) {
          for (const part of n.#parts) {
            if (typeof part === "string") {
              throw new Error("string part in extglob AST??");
            }
            part.copyIn(pp.#parts[i]);
          }
        }
        p = pp;
        pp = p.#parent;
      }
    }
    return this;
  }
  push(...parts) {
    for (const p of parts) {
      if (p === "")
        continue;
      if (typeof p !== "string" && !(p instanceof _AST && p.#parent === this)) {
        throw new Error("invalid part: " + p);
      }
      this.#parts.push(p);
    }
  }
  toJSON() {
    const ret = this.type === null ? this.#parts.slice().map((p) => typeof p === "string" ? p : p.toJSON()) : [this.type, ...this.#parts.map((p) => p.toJSON())];
    if (this.isStart() && !this.type)
      ret.unshift([]);
    if (this.isEnd() && (this === this.#root || this.#root.#filledNegs && this.#parent?.type === "!")) {
      ret.push({});
    }
    return ret;
  }
  isStart() {
    if (this.#root === this)
      return true;
    if (!this.#parent?.isStart())
      return false;
    if (this.#parentIndex === 0)
      return true;
    const p = this.#parent;
    for (let i = 0; i < this.#parentIndex; i++) {
      const pp = p.#parts[i];
      if (!(pp instanceof _AST && pp.type === "!")) {
        return false;
      }
    }
    return true;
  }
  isEnd() {
    if (this.#root === this)
      return true;
    if (this.#parent?.type === "!")
      return true;
    if (!this.#parent?.isEnd())
      return false;
    if (!this.type)
      return this.#parent?.isEnd();
    const pl = this.#parent ? this.#parent.#parts.length : 0;
    return this.#parentIndex === pl - 1;
  }
  copyIn(part) {
    if (typeof part === "string")
      this.push(part);
    else
      this.push(part.clone(this));
  }
  clone(parent) {
    const c = new _AST(this.type, parent);
    for (const p of this.#parts) {
      c.copyIn(p);
    }
    return c;
  }
  static #parseAST(str, ast, pos, opt) {
    let escaping = false;
    let inBrace = false;
    let braceStart = -1;
    let braceNeg = false;
    if (ast.type === null) {
      let i2 = pos;
      let acc2 = "";
      while (i2 < str.length) {
        const c = str.charAt(i2++);
        if (escaping || c === "\\") {
          escaping = !escaping;
          acc2 += c;
          continue;
        }
        if (inBrace) {
          if (i2 === braceStart + 1) {
            if (c === "^" || c === "!") {
              braceNeg = true;
            }
          } else if (c === "]" && !(i2 === braceStart + 2 && braceNeg)) {
            inBrace = false;
          }
          acc2 += c;
          continue;
        } else if (c === "[") {
          inBrace = true;
          braceStart = i2;
          braceNeg = false;
          acc2 += c;
          continue;
        }
        if (!opt.noext && isExtglobType(c) && str.charAt(i2) === "(") {
          ast.push(acc2);
          acc2 = "";
          const ext2 = new _AST(c, ast);
          i2 = _AST.#parseAST(str, ext2, i2, opt);
          ast.push(ext2);
          continue;
        }
        acc2 += c;
      }
      ast.push(acc2);
      return i2;
    }
    let i = pos + 1;
    let part = new _AST(null, ast);
    const parts = [];
    let acc = "";
    while (i < str.length) {
      const c = str.charAt(i++);
      if (escaping || c === "\\") {
        escaping = !escaping;
        acc += c;
        continue;
      }
      if (inBrace) {
        if (i === braceStart + 1) {
          if (c === "^" || c === "!") {
            braceNeg = true;
          }
        } else if (c === "]" && !(i === braceStart + 2 && braceNeg)) {
          inBrace = false;
        }
        acc += c;
        continue;
      } else if (c === "[") {
        inBrace = true;
        braceStart = i;
        braceNeg = false;
        acc += c;
        continue;
      }
      if (isExtglobType(c) && str.charAt(i) === "(") {
        part.push(acc);
        acc = "";
        const ext2 = new _AST(c, part);
        part.push(ext2);
        i = _AST.#parseAST(str, ext2, i, opt);
        continue;
      }
      if (c === "|") {
        part.push(acc);
        acc = "";
        parts.push(part);
        part = new _AST(null, ast);
        continue;
      }
      if (c === ")") {
        if (acc === "" && ast.#parts.length === 0) {
          ast.#emptyExt = true;
        }
        part.push(acc);
        acc = "";
        ast.push(...parts, part);
        return i;
      }
      acc += c;
    }
    ast.type = null;
    ast.#hasMagic = void 0;
    ast.#parts = [str.substring(pos - 1)];
    return i;
  }
  static fromGlob(pattern, options = {}) {
    const ast = new _AST(null, void 0, options);
    _AST.#parseAST(pattern, ast, 0, options);
    return ast;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== this.#root)
      return this.#root.toMMPattern();
    const glob2 = this.toString();
    const [re, body, hasMagic2, uflag] = this.toRegExpSource();
    const anyMagic = hasMagic2 || this.#hasMagic || this.#options.nocase && !this.#options.nocaseMagicOnly && glob2.toUpperCase() !== glob2.toLowerCase();
    if (!anyMagic) {
      return body;
    }
    const flags = (this.#options.nocase ? "i" : "") + (uflag ? "u" : "");
    return Object.assign(new RegExp(`^${re}$`, flags), {
      _src: re,
      _glob: glob2
    });
  }
  // returns the string match, the regexp source, whether there's magic
  // in the regexp (so a regular expression is required) and whether or
  // not the uflag is needed for the regular expression (for posix classes)
  // TODO: instead of injecting the start/end at this point, just return
  // the BODY of the regexp, along with the start/end portions suitable
  // for binding the start/end in either a joined full-path makeRe context
  // (where we bind to (^|/), or a standalone matchPart context (where
  // we bind to ^, and not /).  Otherwise slashes get duped!
  //
  // In part-matching mode, the start is:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: ^(?!\.\.?$)
  // - if dots allowed or not possible: ^
  // - if dots possible and not allowed: ^(?!\.)
  // end is:
  // - if not isEnd(): nothing
  // - else: $
  //
  // In full-path matching mode, we put the slash at the START of the
  // pattern, so start is:
  // - if first pattern: same as part-matching mode
  // - if not isStart(): nothing
  // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
  // - if dots allowed or not possible: /
  // - if dots possible and not allowed: /(?!\.)
  // end is:
  // - if last pattern, same as part-matching mode
  // - else nothing
  //
  // Always put the (?:$|/) on negated tails, though, because that has to be
  // there to bind the end of the negated pattern portion, and it's easier to
  // just stick it in now rather than try to inject it later in the middle of
  // the pattern.
  //
  // We can just always return the same end, and leave it up to the caller
  // to know whether it's going to be used joined or in parts.
  // And, if the start is adjusted slightly, can do the same there:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
  // - if dots allowed or not possible: (?:/|^)
  // - if dots possible and not allowed: (?:/|^)(?!\.)
  //
  // But it's better to have a simpler binding without a conditional, for
  // performance, so probably better to return both start options.
  //
  // Then the caller just ignores the end if it's not the first pattern,
  // and the start always gets applied.
  //
  // But that's always going to be $ if it's the ending pattern, or nothing,
  // so the caller can just attach $ at the end of the pattern when building.
  //
  // So the todo is:
  // - better detect what kind of start is needed
  // - return both flavors of starting pattern
  // - attach $ at the end of the pattern when creating the actual RegExp
  //
  // Ah, but wait, no, that all only applies to the root when the first pattern
  // is not an extglob. If the first pattern IS an extglob, then we need all
  // that dot prevention biz to live in the extglob portions, because eg
  // +(*|.x*) can match .xy but not .yx.
  //
  // So, return the two flavors if it's #root and the first child is not an
  // AST, otherwise leave it to the child AST to handle it, and there,
  // use the (?:^|/) style of start binding.
  //
  // Even simplified further:
  // - Since the start for a join is eg /(?!\.) and the start for a part
  // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
  // or start or whatever) and prepend ^ or / at the Regexp construction.
  toRegExpSource() {
    if (this.#root === this)
      this.#fillNegs();
    if (!this.type) {
      const noEmpty = this.isStart() && this.isEnd();
      const src = this.#parts.map((p) => {
        const [re, _, hasMagic2, uflag] = typeof p === "string" ? _AST.#parseGlob(p, this.#hasMagic, noEmpty) : p.toRegExpSource();
        this.#hasMagic = this.#hasMagic || hasMagic2;
        this.#uflag = this.#uflag || uflag;
        return re;
      }).join("");
      let start2 = "";
      if (this.isStart()) {
        if (typeof this.#parts[0] === "string") {
          const dotTravAllowed = this.#parts.length === 1 && justDots.has(this.#parts[0]);
          if (!dotTravAllowed) {
            const aps = addPatternStart;
            const needNoTrav = (
              // dots are allowed, and the pattern starts with [ or .
              this.#options.dot && aps.has(src.charAt(0)) || // the pattern starts with \., and then [ or .
              src.startsWith("\\.") && aps.has(src.charAt(2)) || // the pattern starts with \.\., and then [ or .
              src.startsWith("\\.\\.") && aps.has(src.charAt(4))
            );
            const needNoDot = !this.#options.dot && aps.has(src.charAt(0));
            start2 = needNoTrav ? startNoTraversal : needNoDot ? startNoDot : "";
          }
        }
      }
      let end = "";
      if (this.isEnd() && this.#root.#filledNegs && this.#parent?.type === "!") {
        end = "(?:$|\\/)";
      }
      const final2 = start2 + src + end;
      return [
        final2,
        unescape(src),
        this.#hasMagic = !!this.#hasMagic,
        this.#uflag
      ];
    }
    const start = this.type === "!" ? "(?:(?!(?:" : "(?:";
    const body = this.#parts.map((p) => {
      if (typeof p === "string") {
        throw new Error("string type in extglob ast??");
      }
      const [re, _, _hasMagic, uflag] = p.toRegExpSource();
      this.#uflag = this.#uflag || uflag;
      return re;
    }).filter((p) => !(this.isStart() && this.isEnd()) || !!p).join("|");
    if (this.isStart() && this.isEnd() && !body && this.type !== "!") {
      const s = this.toString();
      this.#parts = [s];
      this.type = null;
      this.#hasMagic = void 0;
      return [s, unescape(this.toString()), false, false];
    }
    let final = "";
    if (this.type === "!" && this.#emptyExt) {
      final = (this.isStart() && !this.#options.dot ? startNoDot : "") + starNoEmpty;
    } else {
      const close = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !this.#options.dot ? startNoDot : "") + star + ")"
      ) : this.type === "@" ? ")" : `)${this.type}`;
      final = start + body + close;
    }
    return [
      final,
      unescape(body),
      this.#hasMagic = !!this.#hasMagic,
      this.#uflag
    ];
  }
  static #parseGlob(glob2, hasMagic2, noEmpty = false) {
    let escaping = false;
    let re = "";
    let uflag = false;
    for (let i = 0; i < glob2.length; i++) {
      const c = glob2.charAt(i);
      if (escaping) {
        escaping = false;
        re += (reSpecials.has(c) ? "\\" : "") + c;
        continue;
      }
      if (c === "\\") {
        if (i === glob2.length - 1) {
          re += "\\\\";
        } else {
          escaping = true;
        }
        continue;
      }
      if (c === "[") {
        const [src, needUflag, consumed, magic] = parseClass(glob2, i);
        if (consumed) {
          re += src;
          uflag = uflag || needUflag;
          i += consumed - 1;
          hasMagic2 = hasMagic2 || magic;
          continue;
        }
      }
      if (c === "*") {
        if (noEmpty && glob2 === "*")
          re += starNoEmpty;
        else
          re += star;
        hasMagic2 = true;
        continue;
      }
      if (c === "?") {
        re += qmark;
        hasMagic2 = true;
        continue;
      }
      re += regExpEscape(c);
    }
    return [re, unescape(glob2), !!hasMagic2, uflag];
  }
};

// ../../node_modules/.pnpm/minimatch@9.0.1/node_modules/minimatch/dist/mjs/escape.js
var escape = (s, { windowsPathsNoEscape = false } = {}) => {
  return windowsPathsNoEscape ? s.replace(/[?*()[\]]/g, "[$&]") : s.replace(/[?*()[\]\\]/g, "\\$&");
};

// ../../node_modules/.pnpm/minimatch@9.0.1/node_modules/minimatch/dist/mjs/index.js
var minimatch = (p, pattern, options = {}) => {
  assertValidPattern(pattern);
  if (!options.nocomment && pattern.charAt(0) === "#") {
    return false;
  }
  return new Minimatch(pattern, options).match(p);
};
var starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
var starDotExtTest = (ext2) => (f) => !f.startsWith(".") && f.endsWith(ext2);
var starDotExtTestDot = (ext2) => (f) => f.endsWith(ext2);
var starDotExtTestNocase = (ext2) => {
  ext2 = ext2.toLowerCase();
  return (f) => !f.startsWith(".") && f.toLowerCase().endsWith(ext2);
};
var starDotExtTestNocaseDot = (ext2) => {
  ext2 = ext2.toLowerCase();
  return (f) => f.toLowerCase().endsWith(ext2);
};
var starDotStarRE = /^\*+\.\*+$/;
var starDotStarTest = (f) => !f.startsWith(".") && f.includes(".");
var starDotStarTestDot = (f) => f !== "." && f !== ".." && f.includes(".");
var dotStarRE = /^\.\*+$/;
var dotStarTest = (f) => f !== "." && f !== ".." && f.startsWith(".");
var starRE = /^\*+$/;
var starTest = (f) => f.length !== 0 && !f.startsWith(".");
var starTestDot = (f) => f.length !== 0 && f !== "." && f !== "..";
var qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
var qmarksTestNocase = ([$0, ext2 = ""]) => {
  const noext = qmarksTestNoExt([$0]);
  if (!ext2)
    return noext;
  ext2 = ext2.toLowerCase();
  return (f) => noext(f) && f.toLowerCase().endsWith(ext2);
};
var qmarksTestNocaseDot = ([$0, ext2 = ""]) => {
  const noext = qmarksTestNoExtDot([$0]);
  if (!ext2)
    return noext;
  ext2 = ext2.toLowerCase();
  return (f) => noext(f) && f.toLowerCase().endsWith(ext2);
};
var qmarksTestDot = ([$0, ext2 = ""]) => {
  const noext = qmarksTestNoExtDot([$0]);
  return !ext2 ? noext : (f) => noext(f) && f.endsWith(ext2);
};
var qmarksTest = ([$0, ext2 = ""]) => {
  const noext = qmarksTestNoExt([$0]);
  return !ext2 ? noext : (f) => noext(f) && f.endsWith(ext2);
};
var qmarksTestNoExt = ([$0]) => {
  const len = $0.length;
  return (f) => f.length === len && !f.startsWith(".");
};
var qmarksTestNoExtDot = ([$0]) => {
  const len = $0.length;
  return (f) => f.length === len && f !== "." && f !== "..";
};
var defaultPlatform = typeof process === "object" && process ? typeof process.env === "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
var path = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
};
var sep = defaultPlatform === "win32" ? path.win32.sep : path.posix.sep;
minimatch.sep = sep;
var GLOBSTAR = Symbol("globstar **");
minimatch.GLOBSTAR = GLOBSTAR;
var qmark2 = "[^/]";
var star2 = qmark2 + "*?";
var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
var filter = (pattern, options = {}) => (p) => minimatch(p, pattern, options);
minimatch.filter = filter;
var ext = (a, b = {}) => Object.assign({}, a, b);
var defaults = (def) => {
  if (!def || typeof def !== "object" || !Object.keys(def).length) {
    return minimatch;
  }
  const orig = minimatch;
  const m = (p, pattern, options = {}) => orig(p, pattern, ext(def, options));
  return Object.assign(m, {
    Minimatch: class Minimatch extends orig.Minimatch {
      constructor(pattern, options = {}) {
        super(pattern, ext(def, options));
      }
      static defaults(options) {
        return orig.defaults(ext(def, options)).Minimatch;
      }
    },
    AST: class AST extends orig.AST {
      /* c8 ignore start */
      constructor(type, parent, options = {}) {
        super(type, parent, ext(def, options));
      }
      /* c8 ignore stop */
      static fromGlob(pattern, options = {}) {
        return orig.AST.fromGlob(pattern, ext(def, options));
      }
    },
    unescape: (s, options = {}) => orig.unescape(s, ext(def, options)),
    escape: (s, options = {}) => orig.escape(s, ext(def, options)),
    filter: (pattern, options = {}) => orig.filter(pattern, ext(def, options)),
    defaults: (options) => orig.defaults(ext(def, options)),
    makeRe: (pattern, options = {}) => orig.makeRe(pattern, ext(def, options)),
    braceExpand: (pattern, options = {}) => orig.braceExpand(pattern, ext(def, options)),
    match: (list, pattern, options = {}) => orig.match(list, pattern, ext(def, options)),
    sep: orig.sep,
    GLOBSTAR
  });
};
minimatch.defaults = defaults;
var braceExpand = (pattern, options = {}) => {
  assertValidPattern(pattern);
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    return [pattern];
  }
  return (0, import_brace_expansion.default)(pattern);
};
minimatch.braceExpand = braceExpand;
var makeRe = (pattern, options = {}) => new Minimatch(pattern, options).makeRe();
minimatch.makeRe = makeRe;
var match = (list, pattern, options = {}) => {
  const mm = new Minimatch(pattern, options);
  list = list.filter((f) => mm.match(f));
  if (mm.options.nonull && !list.length) {
    list.push(pattern);
  }
  return list;
};
minimatch.match = match;
var globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
var regExpEscape2 = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var Minimatch = class {
  options;
  set;
  pattern;
  windowsPathsNoEscape;
  nonegate;
  negate;
  comment;
  empty;
  preserveMultipleSlashes;
  partial;
  globSet;
  globParts;
  nocase;
  isWindows;
  platform;
  windowsNoMagicRoot;
  regexp;
  constructor(pattern, options = {}) {
    assertValidPattern(pattern);
    options = options || {};
    this.options = options;
    this.pattern = pattern;
    this.platform = options.platform || defaultPlatform;
    this.isWindows = this.platform === "win32";
    this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
    if (this.windowsPathsNoEscape) {
      this.pattern = this.pattern.replace(/\\/g, "/");
    }
    this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
    this.regexp = null;
    this.negate = false;
    this.nonegate = !!options.nonegate;
    this.comment = false;
    this.empty = false;
    this.partial = !!options.partial;
    this.nocase = !!this.options.nocase;
    this.windowsNoMagicRoot = options.windowsNoMagicRoot !== void 0 ? options.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
    this.globSet = [];
    this.globParts = [];
    this.set = [];
    this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1) {
      return true;
    }
    for (const pattern of this.set) {
      for (const part of pattern) {
        if (typeof part !== "string")
          return true;
      }
    }
    return false;
  }
  debug(..._) {
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
    this.globSet = [...new Set(this.braceExpand())];
    if (options.debug) {
      this.debug = (...args) => console.error(...args);
    }
    this.debug(this.pattern, this.globSet);
    const rawGlobParts = this.globSet.map((s) => this.slashSplit(s));
    this.globParts = this.preprocess(rawGlobParts);
    this.debug(this.pattern, this.globParts);
    let set = this.globParts.map((s, _, __) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const isUNC = s[0] === "" && s[1] === "" && (s[2] === "?" || !globMagic.test(s[2])) && !globMagic.test(s[3]);
        const isDrive = /^[a-z]:/i.test(s[0]);
        if (isUNC) {
          return [...s.slice(0, 4), ...s.slice(4).map((ss) => this.parse(ss))];
        } else if (isDrive) {
          return [s[0], ...s.slice(1).map((ss) => this.parse(ss))];
        }
      }
      return s.map((ss) => this.parse(ss));
    });
    this.debug(this.pattern, set);
    this.set = set.filter((s) => s.indexOf(false) === -1);
    if (this.isWindows) {
      for (let i = 0; i < this.set.length; i++) {
        const p = this.set[i];
        if (p[0] === "" && p[1] === "" && this.globParts[i][2] === "?" && typeof p[3] === "string" && /^[a-z]:$/i.test(p[3])) {
          p[2] = "?";
        }
      }
    }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(globParts) {
    if (this.options.noglobstar) {
      for (let i = 0; i < globParts.length; i++) {
        for (let j = 0; j < globParts[i].length; j++) {
          if (globParts[i][j] === "**") {
            globParts[i][j] = "*";
          }
        }
      }
    }
    const { optimizationLevel = 1 } = this.options;
    if (optimizationLevel >= 2) {
      globParts = this.firstPhasePreProcess(globParts);
      globParts = this.secondPhasePreProcess(globParts);
    } else if (optimizationLevel >= 1) {
      globParts = this.levelOneOptimize(globParts);
    } else {
      globParts = this.adjascentGlobstarOptimize(globParts);
    }
    return globParts;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(globParts) {
    return globParts.map((parts) => {
      let gs = -1;
      while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
        let i = gs;
        while (parts[i + 1] === "**") {
          i++;
        }
        if (i !== gs) {
          parts.splice(gs, i - gs);
        }
      }
      return parts;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(globParts) {
    return globParts.map((parts) => {
      parts = parts.reduce((set, part) => {
        const prev = set[set.length - 1];
        if (part === "**" && prev === "**") {
          return set;
        }
        if (part === "..") {
          if (prev && prev !== ".." && prev !== "." && prev !== "**") {
            set.pop();
            return set;
          }
        }
        set.push(part);
        return set;
      }, []);
      return parts.length === 0 ? [""] : parts;
    });
  }
  levelTwoFileOptimize(parts) {
    if (!Array.isArray(parts)) {
      parts = this.slashSplit(parts);
    }
    let didSomething = false;
    do {
      didSomething = false;
      if (!this.preserveMultipleSlashes) {
        for (let i = 1; i < parts.length - 1; i++) {
          const p = parts[i];
          if (i === 1 && p === "" && parts[0] === "")
            continue;
          if (p === "." || p === "") {
            didSomething = true;
            parts.splice(i, 1);
            i--;
          }
        }
        if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
          didSomething = true;
          parts.pop();
        }
      }
      let dd = 0;
      while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
        const p = parts[dd - 1];
        if (p && p !== "." && p !== ".." && p !== "**") {
          didSomething = true;
          parts.splice(dd - 1, 2);
          dd -= 2;
        }
      }
    } while (didSomething);
    return parts.length === 0 ? [""] : parts;
  }
  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(globParts) {
    let didSomething = false;
    do {
      didSomething = false;
      for (let parts of globParts) {
        let gs = -1;
        while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
          let gss = gs;
          while (parts[gss + 1] === "**") {
            gss++;
          }
          if (gss > gs) {
            parts.splice(gs + 1, gss - gs);
          }
          let next2 = parts[gs + 1];
          const p = parts[gs + 2];
          const p2 = parts[gs + 3];
          if (next2 !== "..")
            continue;
          if (!p || p === "." || p === ".." || !p2 || p2 === "." || p2 === "..") {
            continue;
          }
          didSomething = true;
          parts.splice(gs, 1);
          const other = parts.slice(0);
          other[gs] = "**";
          globParts.push(other);
          gs--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let i = 1; i < parts.length - 1; i++) {
            const p = parts[i];
            if (i === 1 && p === "" && parts[0] === "")
              continue;
            if (p === "." || p === "") {
              didSomething = true;
              parts.splice(i, 1);
              i--;
            }
          }
          if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
            didSomething = true;
            parts.pop();
          }
        }
        let dd = 0;
        while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
          const p = parts[dd - 1];
          if (p && p !== "." && p !== ".." && p !== "**") {
            didSomething = true;
            const needDot = dd === 1 && parts[dd + 1] === "**";
            const splin = needDot ? ["."] : [];
            parts.splice(dd - 1, 2, ...splin);
            if (parts.length === 0)
              parts.push("");
            dd -= 2;
          }
        }
      }
    } while (didSomething);
    return globParts;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(globParts) {
    for (let i = 0; i < globParts.length - 1; i++) {
      for (let j = i + 1; j < globParts.length; j++) {
        const matched = this.partsMatch(globParts[i], globParts[j], !this.preserveMultipleSlashes);
        if (!matched)
          continue;
        globParts[i] = matched;
        globParts[j] = [];
      }
    }
    return globParts.filter((gs) => gs.length);
  }
  partsMatch(a, b, emptyGSMatch = false) {
    let ai = 0;
    let bi = 0;
    let result = [];
    let which = "";
    while (ai < a.length && bi < b.length) {
      if (a[ai] === b[bi]) {
        result.push(which === "b" ? b[bi] : a[ai]);
        ai++;
        bi++;
      } else if (emptyGSMatch && a[ai] === "**" && b[bi] === a[ai + 1]) {
        result.push(a[ai]);
        ai++;
      } else if (emptyGSMatch && b[bi] === "**" && a[ai] === b[bi + 1]) {
        result.push(b[bi]);
        bi++;
      } else if (a[ai] === "*" && b[bi] && (this.options.dot || !b[bi].startsWith(".")) && b[bi] !== "**") {
        if (which === "b")
          return false;
        which = "a";
        result.push(a[ai]);
        ai++;
        bi++;
      } else if (b[bi] === "*" && a[ai] && (this.options.dot || !a[ai].startsWith(".")) && a[ai] !== "**") {
        if (which === "a")
          return false;
        which = "b";
        result.push(b[bi]);
        ai++;
        bi++;
      } else {
        return false;
      }
    }
    return a.length === b.length && result;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const pattern = this.pattern;
    let negate = false;
    let negateOffset = 0;
    for (let i = 0; i < pattern.length && pattern.charAt(i) === "!"; i++) {
      negate = !negate;
      negateOffset++;
    }
    if (negateOffset)
      this.pattern = pattern.slice(negateOffset);
    this.negate = negate;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(file, pattern, partial = false) {
    const options = this.options;
    if (this.isWindows) {
      const fileDrive = typeof file[0] === "string" && /^[a-z]:$/i.test(file[0]);
      const fileUNC = !fileDrive && file[0] === "" && file[1] === "" && file[2] === "?" && /^[a-z]:$/i.test(file[3]);
      const patternDrive = typeof pattern[0] === "string" && /^[a-z]:$/i.test(pattern[0]);
      const patternUNC = !patternDrive && pattern[0] === "" && pattern[1] === "" && pattern[2] === "?" && typeof pattern[3] === "string" && /^[a-z]:$/i.test(pattern[3]);
      const fdi = fileUNC ? 3 : fileDrive ? 0 : void 0;
      const pdi = patternUNC ? 3 : patternDrive ? 0 : void 0;
      if (typeof fdi === "number" && typeof pdi === "number") {
        const [fd, pd] = [file[fdi], pattern[pdi]];
        if (fd.toLowerCase() === pd.toLowerCase()) {
          pattern[pdi] = fd;
          if (pdi > fdi) {
            pattern = pattern.slice(pdi);
          } else if (fdi > pdi) {
            file = file.slice(fdi);
          }
        }
      }
    }
    const { optimizationLevel = 1 } = this.options;
    if (optimizationLevel >= 2) {
      file = this.levelTwoFileOptimize(file);
    }
    this.debug("matchOne", this, { file, pattern });
    this.debug("matchOne", file.length, pattern.length);
    for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
      this.debug("matchOne loop");
      var p = pattern[pi];
      var f = file[fi];
      this.debug(pattern, p, f);
      if (p === false) {
        return false;
      }
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
          if (fr === fl) {
            return true;
          }
        }
        return false;
      }
      let hit;
      if (typeof p === "string") {
        hit = f === p;
        this.debug("string match", p, f, hit);
      } else {
        hit = p.test(f);
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
    } else {
      throw new Error("wtf?");
    }
  }
  braceExpand() {
    return braceExpand(this.pattern, this.options);
  }
  parse(pattern) {
    assertValidPattern(pattern);
    const options = this.options;
    if (pattern === "**")
      return GLOBSTAR;
    if (pattern === "")
      return "";
    let m;
    let fastTest = null;
    if (m = pattern.match(starRE)) {
      fastTest = options.dot ? starTestDot : starTest;
    } else if (m = pattern.match(starDotExtRE)) {
      fastTest = (options.nocase ? options.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options.dot ? starDotExtTestDot : starDotExtTest)(m[1]);
    } else if (m = pattern.match(qmarksRE)) {
      fastTest = (options.nocase ? options.dot ? qmarksTestNocaseDot : qmarksTestNocase : options.dot ? qmarksTestDot : qmarksTest)(m);
    } else if (m = pattern.match(starDotStarRE)) {
      fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
    } else if (m = pattern.match(dotStarRE)) {
      fastTest = dotStarTest;
    }
    const re = AST.fromGlob(pattern, this.options).toMMPattern();
    return fastTest ? Object.assign(re, { test: fastTest }) : re;
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
    const twoStar = options.noglobstar ? star2 : options.dot ? twoStarDot : twoStarNoDot;
    const flags = new Set(options.nocase ? ["i"] : []);
    let re = set.map((pattern) => {
      const pp = pattern.map((p) => {
        if (p instanceof RegExp) {
          for (const f of p.flags.split(""))
            flags.add(f);
        }
        return typeof p === "string" ? regExpEscape2(p) : p === GLOBSTAR ? GLOBSTAR : p._src;
      });
      pp.forEach((p, i) => {
        const next2 = pp[i + 1];
        const prev = pp[i - 1];
        if (p !== GLOBSTAR || prev === GLOBSTAR) {
          return;
        }
        if (prev === void 0) {
          if (next2 !== void 0 && next2 !== GLOBSTAR) {
            pp[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + next2;
          } else {
            pp[i] = twoStar;
          }
        } else if (next2 === void 0) {
          pp[i - 1] = prev + "(?:\\/|" + twoStar + ")?";
        } else if (next2 !== GLOBSTAR) {
          pp[i - 1] = prev + "(?:\\/|\\/" + twoStar + "\\/)" + next2;
          pp[i + 1] = GLOBSTAR;
        }
      });
      return pp.filter((p) => p !== GLOBSTAR).join("/");
    }).join("|");
    const [open, close] = set.length > 1 ? ["(?:", ")"] : ["", ""];
    re = "^" + open + re + close + "$";
    if (this.negate)
      re = "^(?!" + re + ").+$";
    try {
      this.regexp = new RegExp(re, [...flags].join(""));
    } catch (ex) {
      this.regexp = false;
    }
    return this.regexp;
  }
  slashSplit(p) {
    if (this.preserveMultipleSlashes) {
      return p.split("/");
    } else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
      return ["", ...p.split(/\/+/)];
    } else {
      return p.split(/\/+/);
    }
  }
  match(f, partial = this.partial) {
    this.debug("match", f, this.pattern);
    if (this.comment) {
      return false;
    }
    if (this.empty) {
      return f === "";
    }
    if (f === "/" && partial) {
      return true;
    }
    const options = this.options;
    if (this.isWindows) {
      f = f.split("\\").join("/");
    }
    const ff = this.slashSplit(f);
    this.debug(this.pattern, "split", ff);
    const set = this.set;
    this.debug(this.pattern, "set", set);
    let filename = ff[ff.length - 1];
    if (!filename) {
      for (let i = ff.length - 2; !filename && i >= 0; i--) {
        filename = ff[i];
      }
    }
    for (let i = 0; i < set.length; i++) {
      const pattern = set[i];
      let file = ff;
      if (options.matchBase && pattern.length === 1) {
        file = [filename];
      }
      const hit = this.matchOne(file, pattern, partial);
      if (hit) {
        if (options.flipNegate) {
          return true;
        }
        return !this.negate;
      }
    }
    if (options.flipNegate) {
      return false;
    }
    return this.negate;
  }
  static defaults(def) {
    return minimatch.defaults(def).Minimatch;
  }
};
minimatch.AST = AST;
minimatch.Minimatch = Minimatch;
minimatch.escape = escape;
minimatch.unescape = unescape;

// ../../node_modules/.pnpm/lru-cache@9.1.1/node_modules/lru-cache/dist/mjs/index.js
var perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
var warned = /* @__PURE__ */ new Set();
var PROCESS = typeof process === "object" && !!process ? process : {};
var emitWarning = (msg, type, code, fn) => {
  typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
};
var AC = globalThis.AbortController;
var AS = globalThis.AbortSignal;
if (typeof AC === "undefined") {
  AS = class AbortSignal {
    onabort;
    _onabort = [];
    reason;
    aborted = false;
    addEventListener(_, fn) {
      this._onabort.push(fn);
    }
  };
  AC = class AbortController {
    constructor() {
      warnACPolyfill();
    }
    signal = new AS();
    abort(reason) {
      if (this.signal.aborted)
        return;
      this.signal.reason = reason;
      this.signal.aborted = true;
      for (const fn of this.signal._onabort) {
        fn(reason);
      }
      this.signal.onabort?.(reason);
    }
  };
  let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
  const warnACPolyfill = () => {
    if (!printACPolyfillWarning)
      return;
    printACPolyfillWarning = false;
    emitWarning("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
  };
}
var shouldWarn = (code) => !warned.has(code);
var TYPE = Symbol("type");
var isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
var getUintArray = (max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
var ZeroArray = class extends Array {
  constructor(size) {
    super(size);
    this.fill(0);
  }
};
var Stack = class _Stack {
  heap;
  length;
  // private constructor
  static #constructing = false;
  static create(max) {
    const HeapCls = getUintArray(max);
    if (!HeapCls)
      return [];
    _Stack.#constructing = true;
    const s = new _Stack(max, HeapCls);
    _Stack.#constructing = false;
    return s;
  }
  constructor(max, HeapCls) {
    if (!_Stack.#constructing) {
      throw new TypeError("instantiate Stack using Stack.create(n)");
    }
    this.heap = new HeapCls(max);
    this.length = 0;
  }
  push(n) {
    this.heap[this.length++] = n;
  }
  pop() {
    return this.heap[--this.length];
  }
};
var LRUCache = class _LRUCache {
  // properties coming in from the options of these, only max and maxSize
  // really *need* to be protected. The rest can be modified, as they just
  // set defaults for various methods.
  #max;
  #maxSize;
  #dispose;
  #disposeAfter;
  #fetchMethod;
  /**
   * {@link LRUCache.OptionsBase.ttl}
   */
  ttl;
  /**
   * {@link LRUCache.OptionsBase.ttlResolution}
   */
  ttlResolution;
  /**
   * {@link LRUCache.OptionsBase.ttlAutopurge}
   */
  ttlAutopurge;
  /**
   * {@link LRUCache.OptionsBase.updateAgeOnGet}
   */
  updateAgeOnGet;
  /**
   * {@link LRUCache.OptionsBase.updateAgeOnHas}
   */
  updateAgeOnHas;
  /**
   * {@link LRUCache.OptionsBase.allowStale}
   */
  allowStale;
  /**
   * {@link LRUCache.OptionsBase.noDisposeOnSet}
   */
  noDisposeOnSet;
  /**
   * {@link LRUCache.OptionsBase.noUpdateTTL}
   */
  noUpdateTTL;
  /**
   * {@link LRUCache.OptionsBase.maxEntrySize}
   */
  maxEntrySize;
  /**
   * {@link LRUCache.OptionsBase.sizeCalculation}
   */
  sizeCalculation;
  /**
   * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
   */
  noDeleteOnFetchRejection;
  /**
   * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
   */
  noDeleteOnStaleGet;
  /**
   * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
   */
  allowStaleOnFetchAbort;
  /**
   * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
   */
  allowStaleOnFetchRejection;
  /**
   * {@link LRUCache.OptionsBase.ignoreFetchAbort}
   */
  ignoreFetchAbort;
  // computed properties
  #size;
  #calculatedSize;
  #keyMap;
  #keyList;
  #valList;
  #next;
  #prev;
  #head;
  #tail;
  #free;
  #disposed;
  #sizes;
  #starts;
  #ttls;
  #hasDispose;
  #hasFetchMethod;
  #hasDisposeAfter;
  /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */
  static unsafeExposeInternals(c) {
    return {
      // properties
      starts: c.#starts,
      ttls: c.#ttls,
      sizes: c.#sizes,
      keyMap: c.#keyMap,
      keyList: c.#keyList,
      valList: c.#valList,
      next: c.#next,
      prev: c.#prev,
      get head() {
        return c.#head;
      },
      get tail() {
        return c.#tail;
      },
      free: c.#free,
      // methods
      isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
      backgroundFetch: (k, index2, options, context) => c.#backgroundFetch(k, index2, options, context),
      moveToTail: (index2) => c.#moveToTail(index2),
      indexes: (options) => c.#indexes(options),
      rindexes: (options) => c.#rindexes(options),
      isStale: (index2) => c.#isStale(index2)
    };
  }
  // Protected read-only members
  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max() {
    return this.#max;
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize() {
    return this.#maxSize;
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize() {
    return this.#calculatedSize;
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size() {
    return this.#size;
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return this.#fetchMethod;
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return this.#dispose;
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return this.#disposeAfter;
  }
  constructor(options) {
    const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
    if (max !== 0 && !isPosInt(max)) {
      throw new TypeError("max option must be a nonnegative integer");
    }
    const UintArray = max ? getUintArray(max) : Array;
    if (!UintArray) {
      throw new Error("invalid max value: " + max);
    }
    this.#max = max;
    this.#maxSize = maxSize;
    this.maxEntrySize = maxEntrySize || this.#maxSize;
    this.sizeCalculation = sizeCalculation;
    if (this.sizeCalculation) {
      if (!this.#maxSize && !this.maxEntrySize) {
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      }
      if (typeof this.sizeCalculation !== "function") {
        throw new TypeError("sizeCalculation set to non-function");
      }
    }
    if (fetchMethod !== void 0 && typeof fetchMethod !== "function") {
      throw new TypeError("fetchMethod must be a function if specified");
    }
    this.#fetchMethod = fetchMethod;
    this.#hasFetchMethod = !!fetchMethod;
    this.#keyMap = /* @__PURE__ */ new Map();
    this.#keyList = new Array(max).fill(void 0);
    this.#valList = new Array(max).fill(void 0);
    this.#next = new UintArray(max);
    this.#prev = new UintArray(max);
    this.#head = 0;
    this.#tail = 0;
    this.#free = Stack.create(max);
    this.#size = 0;
    this.#calculatedSize = 0;
    if (typeof dispose === "function") {
      this.#dispose = dispose;
    }
    if (typeof disposeAfter === "function") {
      this.#disposeAfter = disposeAfter;
      this.#disposed = [];
    } else {
      this.#disposeAfter = void 0;
      this.#disposed = void 0;
    }
    this.#hasDispose = !!this.#dispose;
    this.#hasDisposeAfter = !!this.#disposeAfter;
    this.noDisposeOnSet = !!noDisposeOnSet;
    this.noUpdateTTL = !!noUpdateTTL;
    this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
    this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
    this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
    this.ignoreFetchAbort = !!ignoreFetchAbort;
    if (this.maxEntrySize !== 0) {
      if (this.#maxSize !== 0) {
        if (!isPosInt(this.#maxSize)) {
          throw new TypeError("maxSize must be a positive integer if specified");
        }
      }
      if (!isPosInt(this.maxEntrySize)) {
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      }
      this.#initializeSizeTracking();
    }
    this.allowStale = !!allowStale;
    this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
    this.updateAgeOnGet = !!updateAgeOnGet;
    this.updateAgeOnHas = !!updateAgeOnHas;
    this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
    this.ttlAutopurge = !!ttlAutopurge;
    this.ttl = ttl || 0;
    if (this.ttl) {
      if (!isPosInt(this.ttl)) {
        throw new TypeError("ttl must be a positive integer if specified");
      }
      this.#initializeTTLTracking();
    }
    if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    }
    if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
      const code = "LRU_CACHE_UNBOUNDED";
      if (shouldWarn(code)) {
        warned.add(code);
        const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
        emitWarning(msg, "UnboundedCacheWarning", code, _LRUCache);
      }
    }
  }
  /**
   * Return the remaining TTL time for a given entry key
   */
  getRemainingTTL(key) {
    return this.#keyMap.has(key) ? Infinity : 0;
  }
  #initializeTTLTracking() {
    const ttls = new ZeroArray(this.#max);
    const starts = new ZeroArray(this.#max);
    this.#ttls = ttls;
    this.#starts = starts;
    this.#setItemTTL = (index2, ttl, start = perf.now()) => {
      starts[index2] = ttl !== 0 ? start : 0;
      ttls[index2] = ttl;
      if (ttl !== 0 && this.ttlAutopurge) {
        const t = setTimeout(() => {
          if (this.#isStale(index2)) {
            this.delete(this.#keyList[index2]);
          }
        }, ttl + 1);
        if (t.unref) {
          t.unref();
        }
      }
    };
    this.#updateItemAge = (index2) => {
      starts[index2] = ttls[index2] !== 0 ? perf.now() : 0;
    };
    this.#statusTTL = (status, index2) => {
      if (ttls[index2]) {
        const ttl = ttls[index2];
        const start = starts[index2];
        status.ttl = ttl;
        status.start = start;
        status.now = cachedNow || getNow();
        const age = status.now - start;
        status.remainingTTL = ttl - age;
      }
    };
    let cachedNow = 0;
    const getNow = () => {
      const n = perf.now();
      if (this.ttlResolution > 0) {
        cachedNow = n;
        const t = setTimeout(() => cachedNow = 0, this.ttlResolution);
        if (t.unref) {
          t.unref();
        }
      }
      return n;
    };
    this.getRemainingTTL = (key) => {
      const index2 = this.#keyMap.get(key);
      if (index2 === void 0) {
        return 0;
      }
      const ttl = ttls[index2];
      const start = starts[index2];
      if (ttl === 0 || start === 0) {
        return Infinity;
      }
      const age = (cachedNow || getNow()) - start;
      return ttl - age;
    };
    this.#isStale = (index2) => {
      return ttls[index2] !== 0 && starts[index2] !== 0 && (cachedNow || getNow()) - starts[index2] > ttls[index2];
    };
  }
  // conditionally set private methods related to TTL
  #updateItemAge = () => {
  };
  #statusTTL = () => {
  };
  #setItemTTL = () => {
  };
  /* c8 ignore stop */
  #isStale = () => false;
  #initializeSizeTracking() {
    const sizes = new ZeroArray(this.#max);
    this.#calculatedSize = 0;
    this.#sizes = sizes;
    this.#removeItemSize = (index2) => {
      this.#calculatedSize -= sizes[index2];
      sizes[index2] = 0;
    };
    this.#requireSize = (k, v, size, sizeCalculation) => {
      if (this.#isBackgroundFetch(v)) {
        return 0;
      }
      if (!isPosInt(size)) {
        if (sizeCalculation) {
          if (typeof sizeCalculation !== "function") {
            throw new TypeError("sizeCalculation must be a function");
          }
          size = sizeCalculation(v, k);
          if (!isPosInt(size)) {
            throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          }
        } else {
          throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        }
      }
      return size;
    };
    this.#addItemSize = (index2, size, status) => {
      sizes[index2] = size;
      if (this.#maxSize) {
        const maxSize = this.#maxSize - sizes[index2];
        while (this.#calculatedSize > maxSize) {
          this.#evict(true);
        }
      }
      this.#calculatedSize += sizes[index2];
      if (status) {
        status.entrySize = size;
        status.totalCalculatedSize = this.#calculatedSize;
      }
    };
  }
  #removeItemSize = (_i) => {
  };
  #addItemSize = (_i, _s, _st) => {
  };
  #requireSize = (_k, _v, size, sizeCalculation) => {
    if (size || sizeCalculation) {
      throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
    }
    return 0;
  };
  *#indexes({ allowStale = this.allowStale } = {}) {
    if (this.#size) {
      for (let i = this.#tail; true; ) {
        if (!this.#isValidIndex(i)) {
          break;
        }
        if (allowStale || !this.#isStale(i)) {
          yield i;
        }
        if (i === this.#head) {
          break;
        } else {
          i = this.#prev[i];
        }
      }
    }
  }
  *#rindexes({ allowStale = this.allowStale } = {}) {
    if (this.#size) {
      for (let i = this.#head; true; ) {
        if (!this.#isValidIndex(i)) {
          break;
        }
        if (allowStale || !this.#isStale(i)) {
          yield i;
        }
        if (i === this.#tail) {
          break;
        } else {
          i = this.#next[i];
        }
      }
    }
  }
  #isValidIndex(index2) {
    return index2 !== void 0 && this.#keyMap.get(this.#keyList[index2]) === index2;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const i of this.#indexes()) {
      if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
        yield [this.#keyList[i], this.#valList[i]];
      }
    }
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const i of this.#rindexes()) {
      if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
        yield [this.#keyList[i], this.#valList[i]];
      }
    }
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const i of this.#indexes()) {
      const k = this.#keyList[i];
      if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
        yield k;
      }
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const i of this.#rindexes()) {
      const k = this.#keyList[i];
      if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
        yield k;
      }
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const i of this.#indexes()) {
      const v = this.#valList[i];
      if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
        yield this.#valList[i];
      }
    }
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const i of this.#rindexes()) {
      const v = this.#valList[i];
      if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
        yield this.#valList[i];
      }
    }
  }
  /**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to Array.find().  fn is called as fn(value, key, cache).
   */
  find(fn, getOptions = {}) {
    for (const i of this.#indexes()) {
      const v = this.#valList[i];
      const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      if (fn(value, this.#keyList[i], this)) {
        return this.get(this.#keyList[i], getOptions);
      }
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */
  forEach(fn, thisp = this) {
    for (const i of this.#indexes()) {
      const v = this.#valList[i];
      const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      fn.call(thisp, value, this.#keyList[i], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(fn, thisp = this) {
    for (const i of this.#rindexes()) {
      const v = this.#valList[i];
      const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      fn.call(thisp, value, this.#keyList[i], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let deleted = false;
    for (const i of this.#rindexes({ allowStale: true })) {
      if (this.#isStale(i)) {
        this.delete(this.#keyList[i]);
        deleted = true;
      }
    }
    return deleted;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    const arr = [];
    for (const i of this.#indexes({ allowStale: true })) {
      const key = this.#keyList[i];
      const v = this.#valList[i];
      const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === void 0 || key === void 0)
        continue;
      const entry = { value };
      if (this.#ttls && this.#starts) {
        entry.ttl = this.#ttls[i];
        const age = perf.now() - this.#starts[i];
        entry.start = Math.floor(Date.now() - age);
      }
      if (this.#sizes) {
        entry.size = this.#sizes[i];
      }
      arr.unshift([key, entry]);
    }
    return arr;
  }
  /**
   * Reset the cache and load in the items in entries in the order listed.
   * Note that the shape of the resulting cache may be different if the
   * same options are not used in both caches.
   */
  load(arr) {
    this.clear();
    for (const [key, entry] of arr) {
      if (entry.start) {
        const age = Date.now() - entry.start;
        entry.start = perf.now() - age;
      }
      this.set(key, entry.value, entry);
    }
  }
  /**
   * Add a value to the cache.
   *
   * Note: if `undefined` is specified as a value, this is an alias for
   * {@link LRUCache#delete}
   */
  set(k, v, setOptions = {}) {
    if (v === void 0) {
      this.delete(k);
      return this;
    }
    const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
    let { noUpdateTTL = this.noUpdateTTL } = setOptions;
    const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
    if (this.maxEntrySize && size > this.maxEntrySize) {
      if (status) {
        status.set = "miss";
        status.maxEntrySizeExceeded = true;
      }
      this.delete(k);
      return this;
    }
    let index2 = this.#size === 0 ? void 0 : this.#keyMap.get(k);
    if (index2 === void 0) {
      index2 = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
      this.#keyList[index2] = k;
      this.#valList[index2] = v;
      this.#keyMap.set(k, index2);
      this.#next[this.#tail] = index2;
      this.#prev[index2] = this.#tail;
      this.#tail = index2;
      this.#size++;
      this.#addItemSize(index2, size, status);
      if (status)
        status.set = "add";
      noUpdateTTL = false;
    } else {
      this.#moveToTail(index2);
      const oldVal = this.#valList[index2];
      if (v !== oldVal) {
        if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
          oldVal.__abortController.abort(new Error("replaced"));
        } else if (!noDisposeOnSet) {
          if (this.#hasDispose) {
            this.#dispose?.(oldVal, k, "set");
          }
          if (this.#hasDisposeAfter) {
            this.#disposed?.push([oldVal, k, "set"]);
          }
        }
        this.#removeItemSize(index2);
        this.#addItemSize(index2, size, status);
        this.#valList[index2] = v;
        if (status) {
          status.set = "replace";
          const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
          if (oldValue !== void 0)
            status.oldValue = oldValue;
        }
      } else if (status) {
        status.set = "update";
      }
    }
    if (ttl !== 0 && !this.#ttls) {
      this.#initializeTTLTracking();
    }
    if (this.#ttls) {
      if (!noUpdateTTL) {
        this.#setItemTTL(index2, ttl, start);
      }
      if (status)
        this.#statusTTL(status, index2);
    }
    if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
      const dt = this.#disposed;
      let task;
      while (task = dt?.shift()) {
        this.#disposeAfter?.(...task);
      }
    }
    return this;
  }
  /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */
  pop() {
    try {
      while (this.#size) {
        const val = this.#valList[this.#head];
        this.#evict(true);
        if (this.#isBackgroundFetch(val)) {
          if (val.__staleWhileFetching) {
            return val.__staleWhileFetching;
          }
        } else if (val !== void 0) {
          return val;
        }
      }
    } finally {
      if (this.#hasDisposeAfter && this.#disposed) {
        const dt = this.#disposed;
        let task;
        while (task = dt?.shift()) {
          this.#disposeAfter?.(...task);
        }
      }
    }
  }
  #evict(free) {
    const head = this.#head;
    const k = this.#keyList[head];
    const v = this.#valList[head];
    if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
      v.__abortController.abort(new Error("evicted"));
    } else if (this.#hasDispose || this.#hasDisposeAfter) {
      if (this.#hasDispose) {
        this.#dispose?.(v, k, "evict");
      }
      if (this.#hasDisposeAfter) {
        this.#disposed?.push([v, k, "evict"]);
      }
    }
    this.#removeItemSize(head);
    if (free) {
      this.#keyList[head] = void 0;
      this.#valList[head] = void 0;
      this.#free.push(head);
    }
    if (this.#size === 1) {
      this.#head = this.#tail = 0;
      this.#free.length = 0;
    } else {
      this.#head = this.#next[head];
    }
    this.#keyMap.delete(k);
    this.#size--;
    return head;
  }
  /**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */
  has(k, hasOptions = {}) {
    const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
    const index2 = this.#keyMap.get(k);
    if (index2 !== void 0) {
      const v = this.#valList[index2];
      if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === void 0) {
        return false;
      }
      if (!this.#isStale(index2)) {
        if (updateAgeOnHas) {
          this.#updateItemAge(index2);
        }
        if (status) {
          status.has = "hit";
          this.#statusTTL(status, index2);
        }
        return true;
      } else if (status) {
        status.has = "stale";
        this.#statusTTL(status, index2);
      }
    } else if (status) {
      status.has = "miss";
    }
    return false;
  }
  /**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */
  peek(k, peekOptions = {}) {
    const { allowStale = this.allowStale } = peekOptions;
    const index2 = this.#keyMap.get(k);
    if (index2 !== void 0 && (allowStale || !this.#isStale(index2))) {
      const v = this.#valList[index2];
      return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    }
  }
  #backgroundFetch(k, index2, options, context) {
    const v = index2 === void 0 ? void 0 : this.#valList[index2];
    if (this.#isBackgroundFetch(v)) {
      return v;
    }
    const ac = new AC();
    const { signal } = options;
    signal?.addEventListener("abort", () => ac.abort(signal.reason), {
      signal: ac.signal
    });
    const fetchOpts = {
      signal: ac.signal,
      options,
      context
    };
    const cb = (v2, updateCache = false) => {
      const { aborted } = ac.signal;
      const ignoreAbort = options.ignoreFetchAbort && v2 !== void 0;
      if (options.status) {
        if (aborted && !updateCache) {
          options.status.fetchAborted = true;
          options.status.fetchError = ac.signal.reason;
          if (ignoreAbort)
            options.status.fetchAbortIgnored = true;
        } else {
          options.status.fetchResolved = true;
        }
      }
      if (aborted && !ignoreAbort && !updateCache) {
        return fetchFail(ac.signal.reason);
      }
      const bf2 = p;
      if (this.#valList[index2] === p) {
        if (v2 === void 0) {
          if (bf2.__staleWhileFetching) {
            this.#valList[index2] = bf2.__staleWhileFetching;
          } else {
            this.delete(k);
          }
        } else {
          if (options.status)
            options.status.fetchUpdated = true;
          this.set(k, v2, fetchOpts.options);
        }
      }
      return v2;
    };
    const eb = (er) => {
      if (options.status) {
        options.status.fetchRejected = true;
        options.status.fetchError = er;
      }
      return fetchFail(er);
    };
    const fetchFail = (er) => {
      const { aborted } = ac.signal;
      const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
      const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
      const noDelete = allowStale || options.noDeleteOnFetchRejection;
      const bf2 = p;
      if (this.#valList[index2] === p) {
        const del = !noDelete || bf2.__staleWhileFetching === void 0;
        if (del) {
          this.delete(k);
        } else if (!allowStaleAborted) {
          this.#valList[index2] = bf2.__staleWhileFetching;
        }
      }
      if (allowStale) {
        if (options.status && bf2.__staleWhileFetching !== void 0) {
          options.status.returnedStale = true;
        }
        return bf2.__staleWhileFetching;
      } else if (bf2.__returned === bf2) {
        throw er;
      }
    };
    const pcall = (res, rej) => {
      const fmp = this.#fetchMethod?.(k, v, fetchOpts);
      if (fmp && fmp instanceof Promise) {
        fmp.then((v2) => res(v2), rej);
      }
      ac.signal.addEventListener("abort", () => {
        if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
          res();
          if (options.allowStaleOnFetchAbort) {
            res = (v2) => cb(v2, true);
          }
        }
      });
    };
    if (options.status)
      options.status.fetchDispatched = true;
    const p = new Promise(pcall).then(cb, eb);
    const bf = Object.assign(p, {
      __abortController: ac,
      __staleWhileFetching: v,
      __returned: void 0
    });
    if (index2 === void 0) {
      this.set(k, bf, { ...fetchOpts.options, status: void 0 });
      index2 = this.#keyMap.get(k);
    } else {
      this.#valList[index2] = bf;
    }
    return bf;
  }
  #isBackgroundFetch(p) {
    if (!this.#hasFetchMethod)
      return false;
    const b = p;
    return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof AC;
  }
  async fetch(k, fetchOptions = {}) {
    const {
      // get options
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      noDeleteOnStaleGet = this.noDeleteOnStaleGet,
      // set options
      ttl = this.ttl,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
      ignoreFetchAbort = this.ignoreFetchAbort,
      allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
      context,
      forceRefresh = false,
      status,
      signal
    } = fetchOptions;
    if (!this.#hasFetchMethod) {
      if (status)
        status.fetch = "get";
      return this.get(k, {
        allowStale,
        updateAgeOnGet,
        noDeleteOnStaleGet,
        status
      });
    }
    const options = {
      allowStale,
      updateAgeOnGet,
      noDeleteOnStaleGet,
      ttl,
      noDisposeOnSet,
      size,
      sizeCalculation,
      noUpdateTTL,
      noDeleteOnFetchRejection,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort,
      status,
      signal
    };
    let index2 = this.#keyMap.get(k);
    if (index2 === void 0) {
      if (status)
        status.fetch = "miss";
      const p = this.#backgroundFetch(k, index2, options, context);
      return p.__returned = p;
    } else {
      const v = this.#valList[index2];
      if (this.#isBackgroundFetch(v)) {
        const stale = allowStale && v.__staleWhileFetching !== void 0;
        if (status) {
          status.fetch = "inflight";
          if (stale)
            status.returnedStale = true;
        }
        return stale ? v.__staleWhileFetching : v.__returned = v;
      }
      const isStale = this.#isStale(index2);
      if (!forceRefresh && !isStale) {
        if (status)
          status.fetch = "hit";
        this.#moveToTail(index2);
        if (updateAgeOnGet) {
          this.#updateItemAge(index2);
        }
        if (status)
          this.#statusTTL(status, index2);
        return v;
      }
      const p = this.#backgroundFetch(k, index2, options, context);
      const hasStale = p.__staleWhileFetching !== void 0;
      const staleVal = hasStale && allowStale;
      if (status) {
        status.fetch = isStale ? "stale" : "refresh";
        if (staleVal && isStale)
          status.returnedStale = true;
      }
      return staleVal ? p.__staleWhileFetching : p.__returned = p;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(k, getOptions = {}) {
    const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
    const index2 = this.#keyMap.get(k);
    if (index2 !== void 0) {
      const value = this.#valList[index2];
      const fetching = this.#isBackgroundFetch(value);
      if (status)
        this.#statusTTL(status, index2);
      if (this.#isStale(index2)) {
        if (status)
          status.get = "stale";
        if (!fetching) {
          if (!noDeleteOnStaleGet) {
            this.delete(k);
          }
          if (status && allowStale)
            status.returnedStale = true;
          return allowStale ? value : void 0;
        } else {
          if (status && allowStale && value.__staleWhileFetching !== void 0) {
            status.returnedStale = true;
          }
          return allowStale ? value.__staleWhileFetching : void 0;
        }
      } else {
        if (status)
          status.get = "hit";
        if (fetching) {
          return value.__staleWhileFetching;
        }
        this.#moveToTail(index2);
        if (updateAgeOnGet) {
          this.#updateItemAge(index2);
        }
        return value;
      }
    } else if (status) {
      status.get = "miss";
    }
  }
  #connect(p, n) {
    this.#prev[n] = p;
    this.#next[p] = n;
  }
  #moveToTail(index2) {
    if (index2 !== this.#tail) {
      if (index2 === this.#head) {
        this.#head = this.#next[index2];
      } else {
        this.#connect(this.#prev[index2], this.#next[index2]);
      }
      this.#connect(this.#tail, index2);
      this.#tail = index2;
    }
  }
  /**
   * Deletes a key out of the cache.
   * Returns true if the key was deleted, false otherwise.
   */
  delete(k) {
    let deleted = false;
    if (this.#size !== 0) {
      const index2 = this.#keyMap.get(k);
      if (index2 !== void 0) {
        deleted = true;
        if (this.#size === 1) {
          this.clear();
        } else {
          this.#removeItemSize(index2);
          const v = this.#valList[index2];
          if (this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error("deleted"));
          } else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
              this.#dispose?.(v, k, "delete");
            }
            if (this.#hasDisposeAfter) {
              this.#disposed?.push([v, k, "delete"]);
            }
          }
          this.#keyMap.delete(k);
          this.#keyList[index2] = void 0;
          this.#valList[index2] = void 0;
          if (index2 === this.#tail) {
            this.#tail = this.#prev[index2];
          } else if (index2 === this.#head) {
            this.#head = this.#next[index2];
          } else {
            this.#next[this.#prev[index2]] = this.#next[index2];
            this.#prev[this.#next[index2]] = this.#prev[index2];
          }
          this.#size--;
          this.#free.push(index2);
        }
      }
    }
    if (this.#hasDisposeAfter && this.#disposed?.length) {
      const dt = this.#disposed;
      let task;
      while (task = dt?.shift()) {
        this.#disposeAfter?.(...task);
      }
    }
    return deleted;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    for (const index2 of this.#rindexes({ allowStale: true })) {
      const v = this.#valList[index2];
      if (this.#isBackgroundFetch(v)) {
        v.__abortController.abort(new Error("deleted"));
      } else {
        const k = this.#keyList[index2];
        if (this.#hasDispose) {
          this.#dispose?.(v, k, "delete");
        }
        if (this.#hasDisposeAfter) {
          this.#disposed?.push([v, k, "delete"]);
        }
      }
    }
    this.#keyMap.clear();
    this.#valList.fill(void 0);
    this.#keyList.fill(void 0);
    if (this.#ttls && this.#starts) {
      this.#ttls.fill(0);
      this.#starts.fill(0);
    }
    if (this.#sizes) {
      this.#sizes.fill(0);
    }
    this.#head = 0;
    this.#tail = 0;
    this.#free.length = 0;
    this.#calculatedSize = 0;
    this.#size = 0;
    if (this.#hasDisposeAfter && this.#disposed) {
      const dt = this.#disposed;
      let task;
      while (task = dt?.shift()) {
        this.#disposeAfter?.(...task);
      }
    }
  }
};

// ../../node_modules/.pnpm/path-scurry@1.10.1/node_modules/path-scurry/dist/mjs/index.js
var import_path = require("path");
var import_url = require("url");
var actualFS = __toESM(require("fs"), 1);
var import_fs = require("fs");
var import_promises = require("fs/promises");

// ../../node_modules/.pnpm/minipass@6.0.2/node_modules/minipass/index.mjs
var import_events2 = __toESM(require("events"), 1);
var import_stream = __toESM(require("stream"), 1);
var import_string_decoder = __toESM(require("string_decoder"), 1);
var proc = typeof process === "object" && process ? process : {
  stdout: null,
  stderr: null
};
var SD = import_string_decoder.default.StringDecoder;
var EOF = Symbol("EOF");
var MAYBE_EMIT_END = Symbol("maybeEmitEnd");
var EMITTED_END = Symbol("emittedEnd");
var EMITTING_END = Symbol("emittingEnd");
var EMITTED_ERROR = Symbol("emittedError");
var CLOSED = Symbol("closed");
var READ = Symbol("read");
var FLUSH = Symbol("flush");
var FLUSHCHUNK = Symbol("flushChunk");
var ENCODING = Symbol("encoding");
var DECODER = Symbol("decoder");
var FLOWING = Symbol("flowing");
var PAUSED = Symbol("paused");
var RESUME = Symbol("resume");
var BUFFER = Symbol("buffer");
var PIPES = Symbol("pipes");
var BUFFERLENGTH = Symbol("bufferLength");
var BUFFERPUSH = Symbol("bufferPush");
var BUFFERSHIFT = Symbol("bufferShift");
var OBJECTMODE = Symbol("objectMode");
var DESTROYED = Symbol("destroyed");
var ERROR = Symbol("error");
var EMITDATA = Symbol("emitData");
var EMITEND = Symbol("emitEnd");
var EMITEND2 = Symbol("emitEnd2");
var ASYNC = Symbol("async");
var ABORT = Symbol("abort");
var ABORTED = Symbol("aborted");
var SIGNAL = Symbol("signal");
var defer = (fn) => Promise.resolve().then(fn);
var doIter = global._MP_NO_ITERATOR_SYMBOLS_ !== "1";
var ASYNCITERATOR = doIter && Symbol.asyncIterator || Symbol("asyncIterator not implemented");
var ITERATOR = doIter && Symbol.iterator || Symbol("iterator not implemented");
var isEndish = (ev) => ev === "end" || ev === "finish" || ev === "prefinish";
var isArrayBuffer = (b) => b instanceof ArrayBuffer || typeof b === "object" && b.constructor && b.constructor.name === "ArrayBuffer" && b.byteLength >= 0;
var isArrayBufferView = (b) => !Buffer.isBuffer(b) && ArrayBuffer.isView(b);
var Pipe = class {
  constructor(src, dest, opts) {
    this.src = src;
    this.dest = dest;
    this.opts = opts;
    this.ondrain = () => src[RESUME]();
    dest.on("drain", this.ondrain);
  }
  unpipe() {
    this.dest.removeListener("drain", this.ondrain);
  }
  // istanbul ignore next - only here for the prototype
  proxyErrors() {
  }
  end() {
    this.unpipe();
    if (this.opts.end)
      this.dest.end();
  }
};
var PipeProxyErrors = class extends Pipe {
  unpipe() {
    this.src.removeListener("error", this.proxyErrors);
    super.unpipe();
  }
  constructor(src, dest, opts) {
    super(src, dest, opts);
    this.proxyErrors = (er) => dest.emit("error", er);
    src.on("error", this.proxyErrors);
  }
};
var Minipass = class _Minipass extends import_stream.default {
  constructor(options) {
    super();
    this[FLOWING] = false;
    this[PAUSED] = false;
    this[PIPES] = [];
    this[BUFFER] = [];
    this[OBJECTMODE] = options && options.objectMode || false;
    if (this[OBJECTMODE])
      this[ENCODING] = null;
    else
      this[ENCODING] = options && options.encoding || null;
    if (this[ENCODING] === "buffer")
      this[ENCODING] = null;
    this[ASYNC] = options && !!options.async || false;
    this[DECODER] = this[ENCODING] ? new SD(this[ENCODING]) : null;
    this[EOF] = false;
    this[EMITTED_END] = false;
    this[EMITTING_END] = false;
    this[CLOSED] = false;
    this[EMITTED_ERROR] = null;
    this.writable = true;
    this.readable = true;
    this[BUFFERLENGTH] = 0;
    this[DESTROYED] = false;
    if (options && options.debugExposeBuffer === true) {
      Object.defineProperty(this, "buffer", { get: () => this[BUFFER] });
    }
    if (options && options.debugExposePipes === true) {
      Object.defineProperty(this, "pipes", { get: () => this[PIPES] });
    }
    this[SIGNAL] = options && options.signal;
    this[ABORTED] = false;
    if (this[SIGNAL]) {
      this[SIGNAL].addEventListener("abort", () => this[ABORT]());
      if (this[SIGNAL].aborted) {
        this[ABORT]();
      }
    }
  }
  get bufferLength() {
    return this[BUFFERLENGTH];
  }
  get encoding() {
    return this[ENCODING];
  }
  set encoding(enc) {
    if (this[OBJECTMODE])
      throw new Error("cannot set encoding in objectMode");
    if (this[ENCODING] && enc !== this[ENCODING] && (this[DECODER] && this[DECODER].lastNeed || this[BUFFERLENGTH]))
      throw new Error("cannot change encoding");
    if (this[ENCODING] !== enc) {
      this[DECODER] = enc ? new SD(enc) : null;
      if (this[BUFFER].length)
        this[BUFFER] = this[BUFFER].map((chunk) => this[DECODER].write(chunk));
    }
    this[ENCODING] = enc;
  }
  setEncoding(enc) {
    this.encoding = enc;
  }
  get objectMode() {
    return this[OBJECTMODE];
  }
  set objectMode(om) {
    this[OBJECTMODE] = this[OBJECTMODE] || !!om;
  }
  get ["async"]() {
    return this[ASYNC];
  }
  set ["async"](a) {
    this[ASYNC] = this[ASYNC] || !!a;
  }
  // drop everything and get out of the flow completely
  [ABORT]() {
    this[ABORTED] = true;
    this.emit("abort", this[SIGNAL].reason);
    this.destroy(this[SIGNAL].reason);
  }
  get aborted() {
    return this[ABORTED];
  }
  set aborted(_) {
  }
  write(chunk, encoding, cb) {
    if (this[ABORTED])
      return false;
    if (this[EOF])
      throw new Error("write after end");
    if (this[DESTROYED]) {
      this.emit(
        "error",
        Object.assign(
          new Error("Cannot call write after a stream was destroyed"),
          { code: "ERR_STREAM_DESTROYED" }
        )
      );
      return true;
    }
    if (typeof encoding === "function")
      cb = encoding, encoding = "utf8";
    if (!encoding)
      encoding = "utf8";
    const fn = this[ASYNC] ? defer : (f) => f();
    if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
      if (isArrayBufferView(chunk))
        chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
      else if (isArrayBuffer(chunk))
        chunk = Buffer.from(chunk);
      else if (typeof chunk !== "string")
        this.objectMode = true;
    }
    if (this[OBJECTMODE]) {
      if (this.flowing && this[BUFFERLENGTH] !== 0)
        this[FLUSH](true);
      if (this.flowing)
        this.emit("data", chunk);
      else
        this[BUFFERPUSH](chunk);
      if (this[BUFFERLENGTH] !== 0)
        this.emit("readable");
      if (cb)
        fn(cb);
      return this.flowing;
    }
    if (!chunk.length) {
      if (this[BUFFERLENGTH] !== 0)
        this.emit("readable");
      if (cb)
        fn(cb);
      return this.flowing;
    }
    if (typeof chunk === "string" && // unless it is a string already ready for us to use
    !(encoding === this[ENCODING] && !this[DECODER].lastNeed)) {
      chunk = Buffer.from(chunk, encoding);
    }
    if (Buffer.isBuffer(chunk) && this[ENCODING])
      chunk = this[DECODER].write(chunk);
    if (this.flowing && this[BUFFERLENGTH] !== 0)
      this[FLUSH](true);
    if (this.flowing)
      this.emit("data", chunk);
    else
      this[BUFFERPUSH](chunk);
    if (this[BUFFERLENGTH] !== 0)
      this.emit("readable");
    if (cb)
      fn(cb);
    return this.flowing;
  }
  read(n) {
    if (this[DESTROYED])
      return null;
    if (this[BUFFERLENGTH] === 0 || n === 0 || n > this[BUFFERLENGTH]) {
      this[MAYBE_EMIT_END]();
      return null;
    }
    if (this[OBJECTMODE])
      n = null;
    if (this[BUFFER].length > 1 && !this[OBJECTMODE]) {
      if (this.encoding)
        this[BUFFER] = [this[BUFFER].join("")];
      else
        this[BUFFER] = [Buffer.concat(this[BUFFER], this[BUFFERLENGTH])];
    }
    const ret = this[READ](n || null, this[BUFFER][0]);
    this[MAYBE_EMIT_END]();
    return ret;
  }
  [READ](n, chunk) {
    if (n === chunk.length || n === null)
      this[BUFFERSHIFT]();
    else {
      this[BUFFER][0] = chunk.slice(n);
      chunk = chunk.slice(0, n);
      this[BUFFERLENGTH] -= n;
    }
    this.emit("data", chunk);
    if (!this[BUFFER].length && !this[EOF])
      this.emit("drain");
    return chunk;
  }
  end(chunk, encoding, cb) {
    if (typeof chunk === "function")
      cb = chunk, chunk = null;
    if (typeof encoding === "function")
      cb = encoding, encoding = "utf8";
    if (chunk)
      this.write(chunk, encoding);
    if (cb)
      this.once("end", cb);
    this[EOF] = true;
    this.writable = false;
    if (this.flowing || !this[PAUSED])
      this[MAYBE_EMIT_END]();
    return this;
  }
  // don't let the internal resume be overwritten
  [RESUME]() {
    if (this[DESTROYED])
      return;
    this[PAUSED] = false;
    this[FLOWING] = true;
    this.emit("resume");
    if (this[BUFFER].length)
      this[FLUSH]();
    else if (this[EOF])
      this[MAYBE_EMIT_END]();
    else
      this.emit("drain");
  }
  resume() {
    return this[RESUME]();
  }
  pause() {
    this[FLOWING] = false;
    this[PAUSED] = true;
  }
  get destroyed() {
    return this[DESTROYED];
  }
  get flowing() {
    return this[FLOWING];
  }
  get paused() {
    return this[PAUSED];
  }
  [BUFFERPUSH](chunk) {
    if (this[OBJECTMODE])
      this[BUFFERLENGTH] += 1;
    else
      this[BUFFERLENGTH] += chunk.length;
    this[BUFFER].push(chunk);
  }
  [BUFFERSHIFT]() {
    if (this[OBJECTMODE])
      this[BUFFERLENGTH] -= 1;
    else
      this[BUFFERLENGTH] -= this[BUFFER][0].length;
    return this[BUFFER].shift();
  }
  [FLUSH](noDrain) {
    do {
    } while (this[FLUSHCHUNK](this[BUFFERSHIFT]()) && this[BUFFER].length);
    if (!noDrain && !this[BUFFER].length && !this[EOF])
      this.emit("drain");
  }
  [FLUSHCHUNK](chunk) {
    this.emit("data", chunk);
    return this.flowing;
  }
  pipe(dest, opts) {
    if (this[DESTROYED])
      return;
    const ended = this[EMITTED_END];
    opts = opts || {};
    if (dest === proc.stdout || dest === proc.stderr)
      opts.end = false;
    else
      opts.end = opts.end !== false;
    opts.proxyErrors = !!opts.proxyErrors;
    if (ended) {
      if (opts.end)
        dest.end();
    } else {
      this[PIPES].push(
        !opts.proxyErrors ? new Pipe(this, dest, opts) : new PipeProxyErrors(this, dest, opts)
      );
      if (this[ASYNC])
        defer(() => this[RESUME]());
      else
        this[RESUME]();
    }
    return dest;
  }
  unpipe(dest) {
    const p = this[PIPES].find((p2) => p2.dest === dest);
    if (p) {
      this[PIPES].splice(this[PIPES].indexOf(p), 1);
      p.unpipe();
    }
  }
  addListener(ev, fn) {
    return this.on(ev, fn);
  }
  on(ev, fn) {
    const ret = super.on(ev, fn);
    if (ev === "data" && !this[PIPES].length && !this.flowing)
      this[RESUME]();
    else if (ev === "readable" && this[BUFFERLENGTH] !== 0)
      super.emit("readable");
    else if (isEndish(ev) && this[EMITTED_END]) {
      super.emit(ev);
      this.removeAllListeners(ev);
    } else if (ev === "error" && this[EMITTED_ERROR]) {
      if (this[ASYNC])
        defer(() => fn.call(this, this[EMITTED_ERROR]));
      else
        fn.call(this, this[EMITTED_ERROR]);
    }
    return ret;
  }
  get emittedEnd() {
    return this[EMITTED_END];
  }
  [MAYBE_EMIT_END]() {
    if (!this[EMITTING_END] && !this[EMITTED_END] && !this[DESTROYED] && this[BUFFER].length === 0 && this[EOF]) {
      this[EMITTING_END] = true;
      this.emit("end");
      this.emit("prefinish");
      this.emit("finish");
      if (this[CLOSED])
        this.emit("close");
      this[EMITTING_END] = false;
    }
  }
  emit(ev, data, ...extra) {
    if (ev !== "error" && ev !== "close" && ev !== DESTROYED && this[DESTROYED])
      return;
    else if (ev === "data") {
      return !this[OBJECTMODE] && !data ? false : this[ASYNC] ? defer(() => this[EMITDATA](data)) : this[EMITDATA](data);
    } else if (ev === "end") {
      return this[EMITEND]();
    } else if (ev === "close") {
      this[CLOSED] = true;
      if (!this[EMITTED_END] && !this[DESTROYED])
        return;
      const ret2 = super.emit("close");
      this.removeAllListeners("close");
      return ret2;
    } else if (ev === "error") {
      this[EMITTED_ERROR] = data;
      super.emit(ERROR, data);
      const ret2 = !this[SIGNAL] || this.listeners("error").length ? super.emit("error", data) : false;
      this[MAYBE_EMIT_END]();
      return ret2;
    } else if (ev === "resume") {
      const ret2 = super.emit("resume");
      this[MAYBE_EMIT_END]();
      return ret2;
    } else if (ev === "finish" || ev === "prefinish") {
      const ret2 = super.emit(ev);
      this.removeAllListeners(ev);
      return ret2;
    }
    const ret = super.emit(ev, data, ...extra);
    this[MAYBE_EMIT_END]();
    return ret;
  }
  [EMITDATA](data) {
    for (const p of this[PIPES]) {
      if (p.dest.write(data) === false)
        this.pause();
    }
    const ret = super.emit("data", data);
    this[MAYBE_EMIT_END]();
    return ret;
  }
  [EMITEND]() {
    if (this[EMITTED_END])
      return;
    this[EMITTED_END] = true;
    this.readable = false;
    if (this[ASYNC])
      defer(() => this[EMITEND2]());
    else
      this[EMITEND2]();
  }
  [EMITEND2]() {
    if (this[DECODER]) {
      const data = this[DECODER].end();
      if (data) {
        for (const p of this[PIPES]) {
          p.dest.write(data);
        }
        super.emit("data", data);
      }
    }
    for (const p of this[PIPES]) {
      p.end();
    }
    const ret = super.emit("end");
    this.removeAllListeners("end");
    return ret;
  }
  // const all = await stream.collect()
  collect() {
    const buf = [];
    if (!this[OBJECTMODE])
      buf.dataLength = 0;
    const p = this.promise();
    this.on("data", (c) => {
      buf.push(c);
      if (!this[OBJECTMODE])
        buf.dataLength += c.length;
    });
    return p.then(() => buf);
  }
  // const data = await stream.concat()
  concat() {
    return this[OBJECTMODE] ? Promise.reject(new Error("cannot concat in objectMode")) : this.collect().then(
      (buf) => this[OBJECTMODE] ? Promise.reject(new Error("cannot concat in objectMode")) : this[ENCODING] ? buf.join("") : Buffer.concat(buf, buf.dataLength)
    );
  }
  // stream.promise().then(() => done, er => emitted error)
  promise() {
    return new Promise((resolve, reject) => {
      this.on(DESTROYED, () => reject(new Error("stream destroyed")));
      this.on("error", (er) => reject(er));
      this.on("end", () => resolve());
    });
  }
  // for await (let chunk of stream)
  [ASYNCITERATOR]() {
    let stopped = false;
    const stop = () => {
      this.pause();
      stopped = true;
      return Promise.resolve({ done: true });
    };
    const next2 = () => {
      if (stopped)
        return stop();
      const res = this.read();
      if (res !== null)
        return Promise.resolve({ done: false, value: res });
      if (this[EOF])
        return stop();
      let resolve = null;
      let reject = null;
      const onerr = (er) => {
        this.removeListener("data", ondata);
        this.removeListener("end", onend);
        this.removeListener(DESTROYED, ondestroy);
        stop();
        reject(er);
      };
      const ondata = (value) => {
        this.removeListener("error", onerr);
        this.removeListener("end", onend);
        this.removeListener(DESTROYED, ondestroy);
        this.pause();
        resolve({ value, done: !!this[EOF] });
      };
      const onend = () => {
        this.removeListener("error", onerr);
        this.removeListener("data", ondata);
        this.removeListener(DESTROYED, ondestroy);
        stop();
        resolve({ done: true });
      };
      const ondestroy = () => onerr(new Error("stream destroyed"));
      return new Promise((res2, rej) => {
        reject = rej;
        resolve = res2;
        this.once(DESTROYED, ondestroy);
        this.once("error", onerr);
        this.once("end", onend);
        this.once("data", ondata);
      });
    };
    return {
      next: next2,
      throw: stop,
      return: stop,
      [ASYNCITERATOR]() {
        return this;
      }
    };
  }
  // for (let chunk of stream)
  [ITERATOR]() {
    let stopped = false;
    const stop = () => {
      this.pause();
      this.removeListener(ERROR, stop);
      this.removeListener(DESTROYED, stop);
      this.removeListener("end", stop);
      stopped = true;
      return { done: true };
    };
    const next2 = () => {
      if (stopped)
        return stop();
      const value = this.read();
      return value === null ? stop() : { value };
    };
    this.once("end", stop);
    this.once(ERROR, stop);
    this.once(DESTROYED, stop);
    return {
      next: next2,
      throw: stop,
      return: stop,
      [ITERATOR]() {
        return this;
      }
    };
  }
  destroy(er) {
    if (this[DESTROYED]) {
      if (er)
        this.emit("error", er);
      else
        this.emit(DESTROYED);
      return this;
    }
    this[DESTROYED] = true;
    this[BUFFER].length = 0;
    this[BUFFERLENGTH] = 0;
    if (typeof this.close === "function" && !this[CLOSED])
      this.close();
    if (er)
      this.emit("error", er);
    else
      this.emit(DESTROYED);
    return this;
  }
  static isStream(s) {
    return !!s && (s instanceof _Minipass || s instanceof import_stream.default || s instanceof import_events2.default && // readable
    (typeof s.pipe === "function" || // writable
    typeof s.write === "function" && typeof s.end === "function"));
  }
};

// ../../node_modules/.pnpm/path-scurry@1.10.1/node_modules/path-scurry/dist/mjs/index.js
var realpathSync = import_fs.realpathSync.native;
var defaultFS = {
  lstatSync: import_fs.lstatSync,
  readdir: import_fs.readdir,
  readdirSync: import_fs.readdirSync,
  readlinkSync: import_fs.readlinkSync,
  realpathSync,
  promises: {
    lstat: import_promises.lstat,
    readdir: import_promises.readdir,
    readlink: import_promises.readlink,
    realpath: import_promises.realpath
  }
};
var fsFromOption = (fsOption) => !fsOption || fsOption === defaultFS || fsOption === actualFS ? defaultFS : {
  ...defaultFS,
  ...fsOption,
  promises: {
    ...defaultFS.promises,
    ...fsOption.promises || {}
  }
};
var uncDriveRegexp = /^\\\\\?\\([a-z]:)\\?$/i;
var uncToDrive = (rootPath) => rootPath.replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
var eitherSep = /[\\\/]/;
var UNKNOWN = 0;
var IFIFO = 1;
var IFCHR = 2;
var IFDIR = 4;
var IFBLK = 6;
var IFREG = 8;
var IFLNK = 10;
var IFSOCK = 12;
var IFMT = 15;
var IFMT_UNKNOWN = ~IFMT;
var READDIR_CALLED = 16;
var LSTAT_CALLED = 32;
var ENOTDIR = 64;
var ENOENT = 128;
var ENOREADLINK = 256;
var ENOREALPATH = 512;
var ENOCHILD = ENOTDIR | ENOENT | ENOREALPATH;
var TYPEMASK = 1023;
var entToType = (s) => s.isFile() ? IFREG : s.isDirectory() ? IFDIR : s.isSymbolicLink() ? IFLNK : s.isCharacterDevice() ? IFCHR : s.isBlockDevice() ? IFBLK : s.isSocket() ? IFSOCK : s.isFIFO() ? IFIFO : UNKNOWN;
var normalizeCache = /* @__PURE__ */ new Map();
var normalize = (s) => {
  const c = normalizeCache.get(s);
  if (c)
    return c;
  const n = s.normalize("NFKD");
  normalizeCache.set(s, n);
  return n;
};
var normalizeNocaseCache = /* @__PURE__ */ new Map();
var normalizeNocase = (s) => {
  const c = normalizeNocaseCache.get(s);
  if (c)
    return c;
  const n = normalize(s.toLowerCase());
  normalizeNocaseCache.set(s, n);
  return n;
};
var ResolveCache = class extends LRUCache {
  constructor() {
    super({ max: 256 });
  }
};
var ChildrenCache = class extends LRUCache {
  constructor(maxSize = 16 * 1024) {
    super({
      maxSize,
      // parent + children
      sizeCalculation: (a) => a.length + 1
    });
  }
};
var setAsCwd = Symbol("PathScurry setAsCwd");
var PathBase = class {
  /**
   * the basename of this path
   *
   * **Important**: *always* test the path name against any test string
   * usingthe {@link isNamed} method, and not by directly comparing this
   * string. Otherwise, unicode path strings that the system sees as identical
   * will not be properly treated as the same path, leading to incorrect
   * behavior and possible security issues.
   */
  name;
  /**
   * the Path entry corresponding to the path root.
   *
   * @internal
   */
  root;
  /**
   * All roots found within the current PathScurry family
   *
   * @internal
   */
  roots;
  /**
   * a reference to the parent path, or undefined in the case of root entries
   *
   * @internal
   */
  parent;
  /**
   * boolean indicating whether paths are compared case-insensitively
   * @internal
   */
  nocase;
  // potential default fs override
  #fs;
  // Stats fields
  #dev;
  get dev() {
    return this.#dev;
  }
  #mode;
  get mode() {
    return this.#mode;
  }
  #nlink;
  get nlink() {
    return this.#nlink;
  }
  #uid;
  get uid() {
    return this.#uid;
  }
  #gid;
  get gid() {
    return this.#gid;
  }
  #rdev;
  get rdev() {
    return this.#rdev;
  }
  #blksize;
  get blksize() {
    return this.#blksize;
  }
  #ino;
  get ino() {
    return this.#ino;
  }
  #size;
  get size() {
    return this.#size;
  }
  #blocks;
  get blocks() {
    return this.#blocks;
  }
  #atimeMs;
  get atimeMs() {
    return this.#atimeMs;
  }
  #mtimeMs;
  get mtimeMs() {
    return this.#mtimeMs;
  }
  #ctimeMs;
  get ctimeMs() {
    return this.#ctimeMs;
  }
  #birthtimeMs;
  get birthtimeMs() {
    return this.#birthtimeMs;
  }
  #atime;
  get atime() {
    return this.#atime;
  }
  #mtime;
  get mtime() {
    return this.#mtime;
  }
  #ctime;
  get ctime() {
    return this.#ctime;
  }
  #birthtime;
  get birthtime() {
    return this.#birthtime;
  }
  #matchName;
  #depth;
  #fullpath;
  #fullpathPosix;
  #relative;
  #relativePosix;
  #type;
  #children;
  #linkTarget;
  #realpath;
  /**
   * This property is for compatibility with the Dirent class as of
   * Node v20, where Dirent['path'] refers to the path of the directory
   * that was passed to readdir.  So, somewhat counterintuitively, this
   * property refers to the *parent* path, not the path object itself.
   * For root entries, it's the path to the entry itself.
   */
  get path() {
    return (this.parent || this).fullpath();
  }
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
    this.name = name;
    this.#matchName = nocase ? normalizeNocase(name) : normalize(name);
    this.#type = type & TYPEMASK;
    this.nocase = nocase;
    this.roots = roots;
    this.root = root || this;
    this.#children = children;
    this.#fullpath = opts.fullpath;
    this.#relative = opts.relative;
    this.#relativePosix = opts.relativePosix;
    this.parent = opts.parent;
    if (this.parent) {
      this.#fs = this.parent.#fs;
    } else {
      this.#fs = fsFromOption(opts.fs);
    }
  }
  /**
   * Returns the depth of the Path object from its root.
   *
   * For example, a path at `/foo/bar` would have a depth of 2.
   */
  depth() {
    if (this.#depth !== void 0)
      return this.#depth;
    if (!this.parent)
      return this.#depth = 0;
    return this.#depth = this.parent.depth() + 1;
  }
  /**
   * @internal
   */
  childrenCache() {
    return this.#children;
  }
  /**
   * Get the Path object referenced by the string path, resolved from this Path
   */
  resolve(path3) {
    if (!path3) {
      return this;
    }
    const rootPath = this.getRootString(path3);
    const dir = path3.substring(rootPath.length);
    const dirParts = dir.split(this.splitSep);
    const result = rootPath ? this.getRoot(rootPath).#resolveParts(dirParts) : this.#resolveParts(dirParts);
    return result;
  }
  #resolveParts(dirParts) {
    let p = this;
    for (const part of dirParts) {
      p = p.child(part);
    }
    return p;
  }
  /**
   * Returns the cached children Path objects, if still available.  If they
   * have fallen out of the cache, then returns an empty array, and resets the
   * READDIR_CALLED bit, so that future calls to readdir() will require an fs
   * lookup.
   *
   * @internal
   */
  children() {
    const cached = this.#children.get(this);
    if (cached) {
      return cached;
    }
    const children = Object.assign([], { provisional: 0 });
    this.#children.set(this, children);
    this.#type &= ~READDIR_CALLED;
    return children;
  }
  /**
   * Resolves a path portion and returns or creates the child Path.
   *
   * Returns `this` if pathPart is `''` or `'.'`, or `parent` if pathPart is
   * `'..'`.
   *
   * This should not be called directly.  If `pathPart` contains any path
   * separators, it will lead to unsafe undefined behavior.
   *
   * Use `Path.resolve()` instead.
   *
   * @internal
   */
  child(pathPart, opts) {
    if (pathPart === "" || pathPart === ".") {
      return this;
    }
    if (pathPart === "..") {
      return this.parent || this;
    }
    const children = this.children();
    const name = this.nocase ? normalizeNocase(pathPart) : normalize(pathPart);
    for (const p of children) {
      if (p.#matchName === name) {
        return p;
      }
    }
    const s = this.parent ? this.sep : "";
    const fullpath = this.#fullpath ? this.#fullpath + s + pathPart : void 0;
    const pchild = this.newChild(pathPart, UNKNOWN, {
      ...opts,
      parent: this,
      fullpath
    });
    if (!this.canReaddir()) {
      pchild.#type |= ENOENT;
    }
    children.push(pchild);
    return pchild;
  }
  /**
   * The relative path from the cwd. If it does not share an ancestor with
   * the cwd, then this ends up being equivalent to the fullpath()
   */
  relative() {
    if (this.#relative !== void 0) {
      return this.#relative;
    }
    const name = this.name;
    const p = this.parent;
    if (!p) {
      return this.#relative = this.name;
    }
    const pv = p.relative();
    return pv + (!pv || !p.parent ? "" : this.sep) + name;
  }
  /**
   * The relative path from the cwd, using / as the path separator.
   * If it does not share an ancestor with
   * the cwd, then this ends up being equivalent to the fullpathPosix()
   * On posix systems, this is identical to relative().
   */
  relativePosix() {
    if (this.sep === "/")
      return this.relative();
    if (this.#relativePosix !== void 0)
      return this.#relativePosix;
    const name = this.name;
    const p = this.parent;
    if (!p) {
      return this.#relativePosix = this.fullpathPosix();
    }
    const pv = p.relativePosix();
    return pv + (!pv || !p.parent ? "" : "/") + name;
  }
  /**
   * The fully resolved path string for this Path entry
   */
  fullpath() {
    if (this.#fullpath !== void 0) {
      return this.#fullpath;
    }
    const name = this.name;
    const p = this.parent;
    if (!p) {
      return this.#fullpath = this.name;
    }
    const pv = p.fullpath();
    const fp = pv + (!p.parent ? "" : this.sep) + name;
    return this.#fullpath = fp;
  }
  /**
   * On platforms other than windows, this is identical to fullpath.
   *
   * On windows, this is overridden to return the forward-slash form of the
   * full UNC path.
   */
  fullpathPosix() {
    if (this.#fullpathPosix !== void 0)
      return this.#fullpathPosix;
    if (this.sep === "/")
      return this.#fullpathPosix = this.fullpath();
    if (!this.parent) {
      const p2 = this.fullpath().replace(/\\/g, "/");
      if (/^[a-z]:\//i.test(p2)) {
        return this.#fullpathPosix = `//?/${p2}`;
      } else {
        return this.#fullpathPosix = p2;
      }
    }
    const p = this.parent;
    const pfpp = p.fullpathPosix();
    const fpp = pfpp + (!pfpp || !p.parent ? "" : "/") + this.name;
    return this.#fullpathPosix = fpp;
  }
  /**
   * Is the Path of an unknown type?
   *
   * Note that we might know *something* about it if there has been a previous
   * filesystem operation, for example that it does not exist, or is not a
   * link, or whether it has child entries.
   */
  isUnknown() {
    return (this.#type & IFMT) === UNKNOWN;
  }
  isType(type) {
    return this[`is${type}`]();
  }
  getType() {
    return this.isUnknown() ? "Unknown" : this.isDirectory() ? "Directory" : this.isFile() ? "File" : this.isSymbolicLink() ? "SymbolicLink" : this.isFIFO() ? "FIFO" : this.isCharacterDevice() ? "CharacterDevice" : this.isBlockDevice() ? "BlockDevice" : (
      /* c8 ignore start */
      this.isSocket() ? "Socket" : "Unknown"
    );
  }
  /**
   * Is the Path a regular file?
   */
  isFile() {
    return (this.#type & IFMT) === IFREG;
  }
  /**
   * Is the Path a directory?
   */
  isDirectory() {
    return (this.#type & IFMT) === IFDIR;
  }
  /**
   * Is the path a character device?
   */
  isCharacterDevice() {
    return (this.#type & IFMT) === IFCHR;
  }
  /**
   * Is the path a block device?
   */
  isBlockDevice() {
    return (this.#type & IFMT) === IFBLK;
  }
  /**
   * Is the path a FIFO pipe?
   */
  isFIFO() {
    return (this.#type & IFMT) === IFIFO;
  }
  /**
   * Is the path a socket?
   */
  isSocket() {
    return (this.#type & IFMT) === IFSOCK;
  }
  /**
   * Is the path a symbolic link?
   */
  isSymbolicLink() {
    return (this.#type & IFLNK) === IFLNK;
  }
  /**
   * Return the entry if it has been subject of a successful lstat, or
   * undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* simply
   * mean that we haven't called lstat on it.
   */
  lstatCached() {
    return this.#type & LSTAT_CALLED ? this : void 0;
  }
  /**
   * Return the cached link target if the entry has been the subject of a
   * successful readlink, or undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* just mean we
   * don't have any cached data. Only use it if you are very sure that a
   * readlink() has been called at some point.
   */
  readlinkCached() {
    return this.#linkTarget;
  }
  /**
   * Returns the cached realpath target if the entry has been the subject
   * of a successful realpath, or undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* just mean we
   * don't have any cached data. Only use it if you are very sure that a
   * realpath() has been called at some point.
   */
  realpathCached() {
    return this.#realpath;
  }
  /**
   * Returns the cached child Path entries array if the entry has been the
   * subject of a successful readdir(), or [] otherwise.
   *
   * Does not read the filesystem, so an empty array *could* just mean we
   * don't have any cached data. Only use it if you are very sure that a
   * readdir() has been called recently enough to still be valid.
   */
  readdirCached() {
    const children = this.children();
    return children.slice(0, children.provisional);
  }
  /**
   * Return true if it's worth trying to readlink.  Ie, we don't (yet) have
   * any indication that readlink will definitely fail.
   *
   * Returns false if the path is known to not be a symlink, if a previous
   * readlink failed, or if the entry does not exist.
   */
  canReadlink() {
    if (this.#linkTarget)
      return true;
    if (!this.parent)
      return false;
    const ifmt = this.#type & IFMT;
    return !(ifmt !== UNKNOWN && ifmt !== IFLNK || this.#type & ENOREADLINK || this.#type & ENOENT);
  }
  /**
   * Return true if readdir has previously been successfully called on this
   * path, indicating that cachedReaddir() is likely valid.
   */
  calledReaddir() {
    return !!(this.#type & READDIR_CALLED);
  }
  /**
   * Returns true if the path is known to not exist. That is, a previous lstat
   * or readdir failed to verify its existence when that would have been
   * expected, or a parent entry was marked either enoent or enotdir.
   */
  isENOENT() {
    return !!(this.#type & ENOENT);
  }
  /**
   * Return true if the path is a match for the given path name.  This handles
   * case sensitivity and unicode normalization.
   *
   * Note: even on case-sensitive systems, it is **not** safe to test the
   * equality of the `.name` property to determine whether a given pathname
   * matches, due to unicode normalization mismatches.
   *
   * Always use this method instead of testing the `path.name` property
   * directly.
   */
  isNamed(n) {
    return !this.nocase ? this.#matchName === normalize(n) : this.#matchName === normalizeNocase(n);
  }
  /**
   * Return the Path object corresponding to the target of a symbolic link.
   *
   * If the Path is not a symbolic link, or if the readlink call fails for any
   * reason, `undefined` is returned.
   *
   * Result is cached, and thus may be outdated if the filesystem is mutated.
   */
  async readlink() {
    const target = this.#linkTarget;
    if (target) {
      return target;
    }
    if (!this.canReadlink()) {
      return void 0;
    }
    if (!this.parent) {
      return void 0;
    }
    try {
      const read = await this.#fs.promises.readlink(this.fullpath());
      const linkTarget = this.parent.resolve(read);
      if (linkTarget) {
        return this.#linkTarget = linkTarget;
      }
    } catch (er) {
      this.#readlinkFail(er.code);
      return void 0;
    }
  }
  /**
   * Synchronous {@link PathBase.readlink}
   */
  readlinkSync() {
    const target = this.#linkTarget;
    if (target) {
      return target;
    }
    if (!this.canReadlink()) {
      return void 0;
    }
    if (!this.parent) {
      return void 0;
    }
    try {
      const read = this.#fs.readlinkSync(this.fullpath());
      const linkTarget = this.parent.resolve(read);
      if (linkTarget) {
        return this.#linkTarget = linkTarget;
      }
    } catch (er) {
      this.#readlinkFail(er.code);
      return void 0;
    }
  }
  #readdirSuccess(children) {
    this.#type |= READDIR_CALLED;
    for (let p = children.provisional; p < children.length; p++) {
      children[p].#markENOENT();
    }
  }
  #markENOENT() {
    if (this.#type & ENOENT)
      return;
    this.#type = (this.#type | ENOENT) & IFMT_UNKNOWN;
    this.#markChildrenENOENT();
  }
  #markChildrenENOENT() {
    const children = this.children();
    children.provisional = 0;
    for (const p of children) {
      p.#markENOENT();
    }
  }
  #markENOREALPATH() {
    this.#type |= ENOREALPATH;
    this.#markENOTDIR();
  }
  // save the information when we know the entry is not a dir
  #markENOTDIR() {
    if (this.#type & ENOTDIR)
      return;
    let t = this.#type;
    if ((t & IFMT) === IFDIR)
      t &= IFMT_UNKNOWN;
    this.#type = t | ENOTDIR;
    this.#markChildrenENOENT();
  }
  #readdirFail(code = "") {
    if (code === "ENOTDIR" || code === "EPERM") {
      this.#markENOTDIR();
    } else if (code === "ENOENT") {
      this.#markENOENT();
    } else {
      this.children().provisional = 0;
    }
  }
  #lstatFail(code = "") {
    if (code === "ENOTDIR") {
      const p = this.parent;
      p.#markENOTDIR();
    } else if (code === "ENOENT") {
      this.#markENOENT();
    }
  }
  #readlinkFail(code = "") {
    let ter = this.#type;
    ter |= ENOREADLINK;
    if (code === "ENOENT")
      ter |= ENOENT;
    if (code === "EINVAL" || code === "UNKNOWN") {
      ter &= IFMT_UNKNOWN;
    }
    this.#type = ter;
    if (code === "ENOTDIR" && this.parent) {
      this.parent.#markENOTDIR();
    }
  }
  #readdirAddChild(e, c) {
    return this.#readdirMaybePromoteChild(e, c) || this.#readdirAddNewChild(e, c);
  }
  #readdirAddNewChild(e, c) {
    const type = entToType(e);
    const child = this.newChild(e.name, type, { parent: this });
    const ifmt = child.#type & IFMT;
    if (ifmt !== IFDIR && ifmt !== IFLNK && ifmt !== UNKNOWN) {
      child.#type |= ENOTDIR;
    }
    c.unshift(child);
    c.provisional++;
    return child;
  }
  #readdirMaybePromoteChild(e, c) {
    for (let p = c.provisional; p < c.length; p++) {
      const pchild = c[p];
      const name = this.nocase ? normalizeNocase(e.name) : normalize(e.name);
      if (name !== pchild.#matchName) {
        continue;
      }
      return this.#readdirPromoteChild(e, pchild, p, c);
    }
  }
  #readdirPromoteChild(e, p, index2, c) {
    const v = p.name;
    p.#type = p.#type & IFMT_UNKNOWN | entToType(e);
    if (v !== e.name)
      p.name = e.name;
    if (index2 !== c.provisional) {
      if (index2 === c.length - 1)
        c.pop();
      else
        c.splice(index2, 1);
      c.unshift(p);
    }
    c.provisional++;
    return p;
  }
  /**
   * Call lstat() on this Path, and update all known information that can be
   * determined.
   *
   * Note that unlike `fs.lstat()`, the returned value does not contain some
   * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
   * information is required, you will need to call `fs.lstat` yourself.
   *
   * If the Path refers to a nonexistent file, or if the lstat call fails for
   * any reason, `undefined` is returned.  Otherwise the updated Path object is
   * returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   */
  async lstat() {
    if ((this.#type & ENOENT) === 0) {
      try {
        this.#applyStat(await this.#fs.promises.lstat(this.fullpath()));
        return this;
      } catch (er) {
        this.#lstatFail(er.code);
      }
    }
  }
  /**
   * synchronous {@link PathBase.lstat}
   */
  lstatSync() {
    if ((this.#type & ENOENT) === 0) {
      try {
        this.#applyStat(this.#fs.lstatSync(this.fullpath()));
        return this;
      } catch (er) {
        this.#lstatFail(er.code);
      }
    }
  }
  #applyStat(st) {
    const { atime, atimeMs, birthtime, birthtimeMs, blksize, blocks, ctime, ctimeMs, dev, gid, ino, mode, mtime, mtimeMs, nlink, rdev, size, uid } = st;
    this.#atime = atime;
    this.#atimeMs = atimeMs;
    this.#birthtime = birthtime;
    this.#birthtimeMs = birthtimeMs;
    this.#blksize = blksize;
    this.#blocks = blocks;
    this.#ctime = ctime;
    this.#ctimeMs = ctimeMs;
    this.#dev = dev;
    this.#gid = gid;
    this.#ino = ino;
    this.#mode = mode;
    this.#mtime = mtime;
    this.#mtimeMs = mtimeMs;
    this.#nlink = nlink;
    this.#rdev = rdev;
    this.#size = size;
    this.#uid = uid;
    const ifmt = entToType(st);
    this.#type = this.#type & IFMT_UNKNOWN | ifmt | LSTAT_CALLED;
    if (ifmt !== UNKNOWN && ifmt !== IFDIR && ifmt !== IFLNK) {
      this.#type |= ENOTDIR;
    }
  }
  #onReaddirCB = [];
  #readdirCBInFlight = false;
  #callOnReaddirCB(children) {
    this.#readdirCBInFlight = false;
    const cbs = this.#onReaddirCB.slice();
    this.#onReaddirCB.length = 0;
    cbs.forEach((cb) => cb(null, children));
  }
  /**
   * Standard node-style callback interface to get list of directory entries.
   *
   * If the Path cannot or does not contain any children, then an empty array
   * is returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   *
   * @param cb The callback called with (er, entries).  Note that the `er`
   * param is somewhat extraneous, as all readdir() errors are handled and
   * simply result in an empty set of entries being returned.
   * @param allowZalgo Boolean indicating that immediately known results should
   * *not* be deferred with `queueMicrotask`. Defaults to `false`. Release
   * zalgo at your peril, the dark pony lord is devious and unforgiving.
   */
  readdirCB(cb, allowZalgo = false) {
    if (!this.canReaddir()) {
      if (allowZalgo)
        cb(null, []);
      else
        queueMicrotask(() => cb(null, []));
      return;
    }
    const children = this.children();
    if (this.calledReaddir()) {
      const c = children.slice(0, children.provisional);
      if (allowZalgo)
        cb(null, c);
      else
        queueMicrotask(() => cb(null, c));
      return;
    }
    this.#onReaddirCB.push(cb);
    if (this.#readdirCBInFlight) {
      return;
    }
    this.#readdirCBInFlight = true;
    const fullpath = this.fullpath();
    this.#fs.readdir(fullpath, { withFileTypes: true }, (er, entries) => {
      if (er) {
        this.#readdirFail(er.code);
        children.provisional = 0;
      } else {
        for (const e of entries) {
          this.#readdirAddChild(e, children);
        }
        this.#readdirSuccess(children);
      }
      this.#callOnReaddirCB(children.slice(0, children.provisional));
      return;
    });
  }
  #asyncReaddirInFlight;
  /**
   * Return an array of known child entries.
   *
   * If the Path cannot or does not contain any children, then an empty array
   * is returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   */
  async readdir() {
    if (!this.canReaddir()) {
      return [];
    }
    const children = this.children();
    if (this.calledReaddir()) {
      return children.slice(0, children.provisional);
    }
    const fullpath = this.fullpath();
    if (this.#asyncReaddirInFlight) {
      await this.#asyncReaddirInFlight;
    } else {
      let resolve = () => {
      };
      this.#asyncReaddirInFlight = new Promise((res) => resolve = res);
      try {
        for (const e of await this.#fs.promises.readdir(fullpath, {
          withFileTypes: true
        })) {
          this.#readdirAddChild(e, children);
        }
        this.#readdirSuccess(children);
      } catch (er) {
        this.#readdirFail(er.code);
        children.provisional = 0;
      }
      this.#asyncReaddirInFlight = void 0;
      resolve();
    }
    return children.slice(0, children.provisional);
  }
  /**
   * synchronous {@link PathBase.readdir}
   */
  readdirSync() {
    if (!this.canReaddir()) {
      return [];
    }
    const children = this.children();
    if (this.calledReaddir()) {
      return children.slice(0, children.provisional);
    }
    const fullpath = this.fullpath();
    try {
      for (const e of this.#fs.readdirSync(fullpath, {
        withFileTypes: true
      })) {
        this.#readdirAddChild(e, children);
      }
      this.#readdirSuccess(children);
    } catch (er) {
      this.#readdirFail(er.code);
      children.provisional = 0;
    }
    return children.slice(0, children.provisional);
  }
  canReaddir() {
    if (this.#type & ENOCHILD)
      return false;
    const ifmt = IFMT & this.#type;
    if (!(ifmt === UNKNOWN || ifmt === IFDIR || ifmt === IFLNK)) {
      return false;
    }
    return true;
  }
  shouldWalk(dirs, walkFilter) {
    return (this.#type & IFDIR) === IFDIR && !(this.#type & ENOCHILD) && !dirs.has(this) && (!walkFilter || walkFilter(this));
  }
  /**
   * Return the Path object corresponding to path as resolved
   * by realpath(3).
   *
   * If the realpath call fails for any reason, `undefined` is returned.
   *
   * Result is cached, and thus may be outdated if the filesystem is mutated.
   * On success, returns a Path object.
   */
  async realpath() {
    if (this.#realpath)
      return this.#realpath;
    if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
      return void 0;
    try {
      const rp = await this.#fs.promises.realpath(this.fullpath());
      return this.#realpath = this.resolve(rp);
    } catch (_) {
      this.#markENOREALPATH();
    }
  }
  /**
   * Synchronous {@link realpath}
   */
  realpathSync() {
    if (this.#realpath)
      return this.#realpath;
    if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
      return void 0;
    try {
      const rp = this.#fs.realpathSync(this.fullpath());
      return this.#realpath = this.resolve(rp);
    } catch (_) {
      this.#markENOREALPATH();
    }
  }
  /**
   * Internal method to mark this Path object as the scurry cwd,
   * called by {@link PathScurry#chdir}
   *
   * @internal
   */
  [setAsCwd](oldCwd) {
    if (oldCwd === this)
      return;
    const changed = /* @__PURE__ */ new Set([]);
    let rp = [];
    let p = this;
    while (p && p.parent) {
      changed.add(p);
      p.#relative = rp.join(this.sep);
      p.#relativePosix = rp.join("/");
      p = p.parent;
      rp.push("..");
    }
    p = oldCwd;
    while (p && p.parent && !changed.has(p)) {
      p.#relative = void 0;
      p.#relativePosix = void 0;
      p = p.parent;
    }
  }
};
var PathWin32 = class _PathWin32 extends PathBase {
  /**
   * Separator for generating path strings.
   */
  sep = "\\";
  /**
   * Separator for parsing path strings.
   */
  splitSep = eitherSep;
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
    super(name, type, root, roots, nocase, children, opts);
  }
  /**
   * @internal
   */
  newChild(name, type = UNKNOWN, opts = {}) {
    return new _PathWin32(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
  }
  /**
   * @internal
   */
  getRootString(path3) {
    return import_path.win32.parse(path3).root;
  }
  /**
   * @internal
   */
  getRoot(rootPath) {
    rootPath = uncToDrive(rootPath.toUpperCase());
    if (rootPath === this.root.name) {
      return this.root;
    }
    for (const [compare, root] of Object.entries(this.roots)) {
      if (this.sameRoot(rootPath, compare)) {
        return this.roots[rootPath] = root;
      }
    }
    return this.roots[rootPath] = new PathScurryWin32(rootPath, this).root;
  }
  /**
   * @internal
   */
  sameRoot(rootPath, compare = this.root.name) {
    rootPath = rootPath.toUpperCase().replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
    return rootPath === compare;
  }
};
var PathPosix = class _PathPosix extends PathBase {
  /**
   * separator for parsing path strings
   */
  splitSep = "/";
  /**
   * separator for generating path strings
   */
  sep = "/";
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
    super(name, type, root, roots, nocase, children, opts);
  }
  /**
   * @internal
   */
  getRootString(path3) {
    return path3.startsWith("/") ? "/" : "";
  }
  /**
   * @internal
   */
  getRoot(_rootPath) {
    return this.root;
  }
  /**
   * @internal
   */
  newChild(name, type = UNKNOWN, opts = {}) {
    return new _PathPosix(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
  }
};
var PathScurryBase = class {
  /**
   * The root Path entry for the current working directory of this Scurry
   */
  root;
  /**
   * The string path for the root of this Scurry's current working directory
   */
  rootPath;
  /**
   * A collection of all roots encountered, referenced by rootPath
   */
  roots;
  /**
   * The Path entry corresponding to this PathScurry's current working directory.
   */
  cwd;
  #resolveCache;
  #resolvePosixCache;
  #children;
  /**
   * Perform path comparisons case-insensitively.
   *
   * Defaults true on Darwin and Windows systems, false elsewhere.
   */
  nocase;
  #fs;
  /**
   * This class should not be instantiated directly.
   *
   * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
   *
   * @internal
   */
  constructor(cwd = process.cwd(), pathImpl, sep2, { nocase, childrenCacheSize = 16 * 1024, fs: fs2 = defaultFS } = {}) {
    this.#fs = fsFromOption(fs2);
    if (cwd instanceof URL || cwd.startsWith("file://")) {
      cwd = (0, import_url.fileURLToPath)(cwd);
    }
    const cwdPath = pathImpl.resolve(cwd);
    this.roots = /* @__PURE__ */ Object.create(null);
    this.rootPath = this.parseRootPath(cwdPath);
    this.#resolveCache = new ResolveCache();
    this.#resolvePosixCache = new ResolveCache();
    this.#children = new ChildrenCache(childrenCacheSize);
    const split = cwdPath.substring(this.rootPath.length).split(sep2);
    if (split.length === 1 && !split[0]) {
      split.pop();
    }
    if (nocase === void 0) {
      throw new TypeError("must provide nocase setting to PathScurryBase ctor");
    }
    this.nocase = nocase;
    this.root = this.newRoot(this.#fs);
    this.roots[this.rootPath] = this.root;
    let prev = this.root;
    let len = split.length - 1;
    const joinSep = pathImpl.sep;
    let abs = this.rootPath;
    let sawFirst = false;
    for (const part of split) {
      const l = len--;
      prev = prev.child(part, {
        relative: new Array(l).fill("..").join(joinSep),
        relativePosix: new Array(l).fill("..").join("/"),
        fullpath: abs += (sawFirst ? "" : joinSep) + part
      });
      sawFirst = true;
    }
    this.cwd = prev;
  }
  /**
   * Get the depth of a provided path, string, or the cwd
   */
  depth(path3 = this.cwd) {
    if (typeof path3 === "string") {
      path3 = this.cwd.resolve(path3);
    }
    return path3.depth();
  }
  /**
   * Return the cache of child entries.  Exposed so subclasses can create
   * child Path objects in a platform-specific way.
   *
   * @internal
   */
  childrenCache() {
    return this.#children;
  }
  /**
   * Resolve one or more path strings to a resolved string
   *
   * Same interface as require('path').resolve.
   *
   * Much faster than path.resolve() when called multiple times for the same
   * path, because the resolved Path objects are cached.  Much slower
   * otherwise.
   */
  resolve(...paths) {
    let r = "";
    for (let i = paths.length - 1; i >= 0; i--) {
      const p = paths[i];
      if (!p || p === ".")
        continue;
      r = r ? `${p}/${r}` : p;
      if (this.isAbsolute(p)) {
        break;
      }
    }
    const cached = this.#resolveCache.get(r);
    if (cached !== void 0) {
      return cached;
    }
    const result = this.cwd.resolve(r).fullpath();
    this.#resolveCache.set(r, result);
    return result;
  }
  /**
   * Resolve one or more path strings to a resolved string, returning
   * the posix path.  Identical to .resolve() on posix systems, but on
   * windows will return a forward-slash separated UNC path.
   *
   * Same interface as require('path').resolve.
   *
   * Much faster than path.resolve() when called multiple times for the same
   * path, because the resolved Path objects are cached.  Much slower
   * otherwise.
   */
  resolvePosix(...paths) {
    let r = "";
    for (let i = paths.length - 1; i >= 0; i--) {
      const p = paths[i];
      if (!p || p === ".")
        continue;
      r = r ? `${p}/${r}` : p;
      if (this.isAbsolute(p)) {
        break;
      }
    }
    const cached = this.#resolvePosixCache.get(r);
    if (cached !== void 0) {
      return cached;
    }
    const result = this.cwd.resolve(r).fullpathPosix();
    this.#resolvePosixCache.set(r, result);
    return result;
  }
  /**
   * find the relative path from the cwd to the supplied path string or entry
   */
  relative(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.relative();
  }
  /**
   * find the relative path from the cwd to the supplied path string or
   * entry, using / as the path delimiter, even on Windows.
   */
  relativePosix(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.relativePosix();
  }
  /**
   * Return the basename for the provided string or Path object
   */
  basename(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.name;
  }
  /**
   * Return the dirname for the provided string or Path object
   */
  dirname(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return (entry.parent || entry).fullpath();
  }
  async readdir(entry = this.cwd, opts = {
    withFileTypes: true
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes } = opts;
    if (!entry.canReaddir()) {
      return [];
    } else {
      const p = await entry.readdir();
      return withFileTypes ? p : p.map((e) => e.name);
    }
  }
  readdirSync(entry = this.cwd, opts = {
    withFileTypes: true
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true } = opts;
    if (!entry.canReaddir()) {
      return [];
    } else if (withFileTypes) {
      return entry.readdirSync();
    } else {
      return entry.readdirSync().map((e) => e.name);
    }
  }
  /**
   * Call lstat() on the string or Path object, and update all known
   * information that can be determined.
   *
   * Note that unlike `fs.lstat()`, the returned value does not contain some
   * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
   * information is required, you will need to call `fs.lstat` yourself.
   *
   * If the Path refers to a nonexistent file, or if the lstat call fails for
   * any reason, `undefined` is returned.  Otherwise the updated Path object is
   * returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   */
  async lstat(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.lstat();
  }
  /**
   * synchronous {@link PathScurryBase.lstat}
   */
  lstatSync(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.lstatSync();
  }
  async readlink(entry = this.cwd, { withFileTypes } = {
    withFileTypes: false
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      withFileTypes = entry.withFileTypes;
      entry = this.cwd;
    }
    const e = await entry.readlink();
    return withFileTypes ? e : e?.fullpath();
  }
  readlinkSync(entry = this.cwd, { withFileTypes } = {
    withFileTypes: false
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      withFileTypes = entry.withFileTypes;
      entry = this.cwd;
    }
    const e = entry.readlinkSync();
    return withFileTypes ? e : e?.fullpath();
  }
  async realpath(entry = this.cwd, { withFileTypes } = {
    withFileTypes: false
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      withFileTypes = entry.withFileTypes;
      entry = this.cwd;
    }
    const e = await entry.realpath();
    return withFileTypes ? e : e?.fullpath();
  }
  realpathSync(entry = this.cwd, { withFileTypes } = {
    withFileTypes: false
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      withFileTypes = entry.withFileTypes;
      entry = this.cwd;
    }
    const e = entry.realpathSync();
    return withFileTypes ? e : e?.fullpath();
  }
  async walk(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    const results = [];
    if (!filter2 || filter2(entry)) {
      results.push(withFileTypes ? entry : entry.fullpath());
    }
    const dirs = /* @__PURE__ */ new Set();
    const walk = (dir, cb) => {
      dirs.add(dir);
      dir.readdirCB((er, entries) => {
        if (er) {
          return cb(er);
        }
        let len = entries.length;
        if (!len)
          return cb();
        const next2 = () => {
          if (--len === 0) {
            cb();
          }
        };
        for (const e of entries) {
          if (!filter2 || filter2(e)) {
            results.push(withFileTypes ? e : e.fullpath());
          }
          if (follow && e.isSymbolicLink()) {
            e.realpath().then((r) => r?.isUnknown() ? r.lstat() : r).then((r) => r?.shouldWalk(dirs, walkFilter) ? walk(r, next2) : next2());
          } else {
            if (e.shouldWalk(dirs, walkFilter)) {
              walk(e, next2);
            } else {
              next2();
            }
          }
        }
      }, true);
    };
    const start = entry;
    return new Promise((res, rej) => {
      walk(start, (er) => {
        if (er)
          return rej(er);
        res(results);
      });
    });
  }
  walkSync(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    const results = [];
    if (!filter2 || filter2(entry)) {
      results.push(withFileTypes ? entry : entry.fullpath());
    }
    const dirs = /* @__PURE__ */ new Set([entry]);
    for (const dir of dirs) {
      const entries = dir.readdirSync();
      for (const e of entries) {
        if (!filter2 || filter2(e)) {
          results.push(withFileTypes ? e : e.fullpath());
        }
        let r = e;
        if (e.isSymbolicLink()) {
          if (!(follow && (r = e.realpathSync())))
            continue;
          if (r.isUnknown())
            r.lstatSync();
        }
        if (r.shouldWalk(dirs, walkFilter)) {
          dirs.add(r);
        }
      }
    }
    return results;
  }
  /**
   * Support for `for await`
   *
   * Alias for {@link PathScurryBase.iterate}
   *
   * Note: As of Node 19, this is very slow, compared to other methods of
   * walking.  Consider using {@link PathScurryBase.stream} if memory overhead
   * and backpressure are concerns, or {@link PathScurryBase.walk} if not.
   */
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
  iterate(entry = this.cwd, options = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      options = entry;
      entry = this.cwd;
    }
    return this.stream(entry, options)[Symbol.asyncIterator]();
  }
  /**
   * Iterating over a PathScurry performs a synchronous walk.
   *
   * Alias for {@link PathScurryBase.iterateSync}
   */
  [Symbol.iterator]() {
    return this.iterateSync();
  }
  *iterateSync(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    if (!filter2 || filter2(entry)) {
      yield withFileTypes ? entry : entry.fullpath();
    }
    const dirs = /* @__PURE__ */ new Set([entry]);
    for (const dir of dirs) {
      const entries = dir.readdirSync();
      for (const e of entries) {
        if (!filter2 || filter2(e)) {
          yield withFileTypes ? e : e.fullpath();
        }
        let r = e;
        if (e.isSymbolicLink()) {
          if (!(follow && (r = e.realpathSync())))
            continue;
          if (r.isUnknown())
            r.lstatSync();
        }
        if (r.shouldWalk(dirs, walkFilter)) {
          dirs.add(r);
        }
      }
    }
  }
  stream(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    const results = new Minipass({ objectMode: true });
    if (!filter2 || filter2(entry)) {
      results.write(withFileTypes ? entry : entry.fullpath());
    }
    const dirs = /* @__PURE__ */ new Set();
    const queue = [entry];
    let processing = 0;
    const process2 = () => {
      let paused = false;
      while (!paused) {
        const dir = queue.shift();
        if (!dir) {
          if (processing === 0)
            results.end();
          return;
        }
        processing++;
        dirs.add(dir);
        const onReaddir = (er, entries, didRealpaths = false) => {
          if (er)
            return results.emit("error", er);
          if (follow && !didRealpaths) {
            const promises = [];
            for (const e of entries) {
              if (e.isSymbolicLink()) {
                promises.push(e.realpath().then((r) => r?.isUnknown() ? r.lstat() : r));
              }
            }
            if (promises.length) {
              Promise.all(promises).then(() => onReaddir(null, entries, true));
              return;
            }
          }
          for (const e of entries) {
            if (e && (!filter2 || filter2(e))) {
              if (!results.write(withFileTypes ? e : e.fullpath())) {
                paused = true;
              }
            }
          }
          processing--;
          for (const e of entries) {
            const r = e.realpathCached() || e;
            if (r.shouldWalk(dirs, walkFilter)) {
              queue.push(r);
            }
          }
          if (paused && !results.flowing) {
            results.once("drain", process2);
          } else if (!sync2) {
            process2();
          }
        };
        let sync2 = true;
        dir.readdirCB(onReaddir, true);
        sync2 = false;
      }
    };
    process2();
    return results;
  }
  streamSync(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    const results = new Minipass({ objectMode: true });
    const dirs = /* @__PURE__ */ new Set();
    if (!filter2 || filter2(entry)) {
      results.write(withFileTypes ? entry : entry.fullpath());
    }
    const queue = [entry];
    let processing = 0;
    const process2 = () => {
      let paused = false;
      while (!paused) {
        const dir = queue.shift();
        if (!dir) {
          if (processing === 0)
            results.end();
          return;
        }
        processing++;
        dirs.add(dir);
        const entries = dir.readdirSync();
        for (const e of entries) {
          if (!filter2 || filter2(e)) {
            if (!results.write(withFileTypes ? e : e.fullpath())) {
              paused = true;
            }
          }
        }
        processing--;
        for (const e of entries) {
          let r = e;
          if (e.isSymbolicLink()) {
            if (!(follow && (r = e.realpathSync())))
              continue;
            if (r.isUnknown())
              r.lstatSync();
          }
          if (r.shouldWalk(dirs, walkFilter)) {
            queue.push(r);
          }
        }
      }
      if (paused && !results.flowing)
        results.once("drain", process2);
    };
    process2();
    return results;
  }
  chdir(path3 = this.cwd) {
    const oldCwd = this.cwd;
    this.cwd = typeof path3 === "string" ? this.cwd.resolve(path3) : path3;
    this.cwd[setAsCwd](oldCwd);
  }
};
var PathScurryWin32 = class extends PathScurryBase {
  /**
   * separator for generating path strings
   */
  sep = "\\";
  constructor(cwd = process.cwd(), opts = {}) {
    const { nocase = true } = opts;
    super(cwd, import_path.win32, "\\", { ...opts, nocase });
    this.nocase = nocase;
    for (let p = this.cwd; p; p = p.parent) {
      p.nocase = this.nocase;
    }
  }
  /**
   * @internal
   */
  parseRootPath(dir) {
    return import_path.win32.parse(dir).root.toUpperCase();
  }
  /**
   * @internal
   */
  newRoot(fs2) {
    return new PathWin32(this.rootPath, IFDIR, void 0, this.roots, this.nocase, this.childrenCache(), { fs: fs2 });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(p) {
    return p.startsWith("/") || p.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(p);
  }
};
var PathScurryPosix = class extends PathScurryBase {
  /**
   * separator for generating path strings
   */
  sep = "/";
  constructor(cwd = process.cwd(), opts = {}) {
    const { nocase = false } = opts;
    super(cwd, import_path.posix, "/", { ...opts, nocase });
    this.nocase = nocase;
  }
  /**
   * @internal
   */
  parseRootPath(_dir) {
    return "/";
  }
  /**
   * @internal
   */
  newRoot(fs2) {
    return new PathPosix(this.rootPath, IFDIR, void 0, this.roots, this.nocase, this.childrenCache(), { fs: fs2 });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(p) {
    return p.startsWith("/");
  }
};
var PathScurryDarwin = class extends PathScurryPosix {
  constructor(cwd = process.cwd(), opts = {}) {
    const { nocase = true } = opts;
    super(cwd, { ...opts, nocase });
  }
};
var Path = process.platform === "win32" ? PathWin32 : PathPosix;
var PathScurry = process.platform === "win32" ? PathScurryWin32 : process.platform === "darwin" ? PathScurryDarwin : PathScurryPosix;

// ../../node_modules/.pnpm/glob@10.3.3/node_modules/glob/dist/mjs/glob.js
var import_url2 = require("url");

// ../../node_modules/.pnpm/glob@10.3.3/node_modules/glob/dist/mjs/pattern.js
var isPatternList = (pl) => pl.length >= 1;
var isGlobList = (gl) => gl.length >= 1;
var Pattern = class _Pattern {
  #patternList;
  #globList;
  #index;
  length;
  #platform;
  #rest;
  #globString;
  #isDrive;
  #isUNC;
  #isAbsolute;
  #followGlobstar = true;
  constructor(patternList, globList, index2, platform) {
    if (!isPatternList(patternList)) {
      throw new TypeError("empty pattern list");
    }
    if (!isGlobList(globList)) {
      throw new TypeError("empty glob list");
    }
    if (globList.length !== patternList.length) {
      throw new TypeError("mismatched pattern list and glob list lengths");
    }
    this.length = patternList.length;
    if (index2 < 0 || index2 >= this.length) {
      throw new TypeError("index out of range");
    }
    this.#patternList = patternList;
    this.#globList = globList;
    this.#index = index2;
    this.#platform = platform;
    if (this.#index === 0) {
      if (this.isUNC()) {
        const [p0, p1, p2, p3, ...prest] = this.#patternList;
        const [g0, g1, g2, g3, ...grest] = this.#globList;
        if (prest[0] === "") {
          prest.shift();
          grest.shift();
        }
        const p = [p0, p1, p2, p3, ""].join("/");
        const g = [g0, g1, g2, g3, ""].join("/");
        this.#patternList = [p, ...prest];
        this.#globList = [g, ...grest];
        this.length = this.#patternList.length;
      } else if (this.isDrive() || this.isAbsolute()) {
        const [p1, ...prest] = this.#patternList;
        const [g1, ...grest] = this.#globList;
        if (prest[0] === "") {
          prest.shift();
          grest.shift();
        }
        const p = p1 + "/";
        const g = g1 + "/";
        this.#patternList = [p, ...prest];
        this.#globList = [g, ...grest];
        this.length = this.#patternList.length;
      }
    }
  }
  /**
   * The first entry in the parsed list of patterns
   */
  pattern() {
    return this.#patternList[this.#index];
  }
  /**
   * true of if pattern() returns a string
   */
  isString() {
    return typeof this.#patternList[this.#index] === "string";
  }
  /**
   * true of if pattern() returns GLOBSTAR
   */
  isGlobstar() {
    return this.#patternList[this.#index] === GLOBSTAR;
  }
  /**
   * true if pattern() returns a regexp
   */
  isRegExp() {
    return this.#patternList[this.#index] instanceof RegExp;
  }
  /**
   * The /-joined set of glob parts that make up this pattern
   */
  globString() {
    return this.#globString = this.#globString || (this.#index === 0 ? this.isAbsolute() ? this.#globList[0] + this.#globList.slice(1).join("/") : this.#globList.join("/") : this.#globList.slice(this.#index).join("/"));
  }
  /**
   * true if there are more pattern parts after this one
   */
  hasMore() {
    return this.length > this.#index + 1;
  }
  /**
   * The rest of the pattern after this part, or null if this is the end
   */
  rest() {
    if (this.#rest !== void 0)
      return this.#rest;
    if (!this.hasMore())
      return this.#rest = null;
    this.#rest = new _Pattern(this.#patternList, this.#globList, this.#index + 1, this.#platform);
    this.#rest.#isAbsolute = this.#isAbsolute;
    this.#rest.#isUNC = this.#isUNC;
    this.#rest.#isDrive = this.#isDrive;
    return this.#rest;
  }
  /**
   * true if the pattern represents a //unc/path/ on windows
   */
  isUNC() {
    const pl = this.#patternList;
    return this.#isUNC !== void 0 ? this.#isUNC : this.#isUNC = this.#platform === "win32" && this.#index === 0 && pl[0] === "" && pl[1] === "" && typeof pl[2] === "string" && !!pl[2] && typeof pl[3] === "string" && !!pl[3];
  }
  // pattern like C:/...
  // split = ['C:', ...]
  // XXX: would be nice to handle patterns like `c:*` to test the cwd
  // in c: for *, but I don't know of a way to even figure out what that
  // cwd is without actually chdir'ing into it?
  /**
   * True if the pattern starts with a drive letter on Windows
   */
  isDrive() {
    const pl = this.#patternList;
    return this.#isDrive !== void 0 ? this.#isDrive : this.#isDrive = this.#platform === "win32" && this.#index === 0 && this.length > 1 && typeof pl[0] === "string" && /^[a-z]:$/i.test(pl[0]);
  }
  // pattern = '/' or '/...' or '/x/...'
  // split = ['', ''] or ['', ...] or ['', 'x', ...]
  // Drive and UNC both considered absolute on windows
  /**
   * True if the pattern is rooted on an absolute path
   */
  isAbsolute() {
    const pl = this.#patternList;
    return this.#isAbsolute !== void 0 ? this.#isAbsolute : this.#isAbsolute = pl[0] === "" && pl.length > 1 || this.isDrive() || this.isUNC();
  }
  /**
   * consume the root of the pattern, and return it
   */
  root() {
    const p = this.#patternList[0];
    return typeof p === "string" && this.isAbsolute() && this.#index === 0 ? p : "";
  }
  /**
   * Check to see if the current globstar pattern is allowed to follow
   * a symbolic link.
   */
  checkFollowGlobstar() {
    return !(this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar);
  }
  /**
   * Mark that the current globstar pattern is following a symbolic link
   */
  markFollowGlobstar() {
    if (this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar)
      return false;
    this.#followGlobstar = false;
    return true;
  }
};

// ../../node_modules/.pnpm/glob@10.3.3/node_modules/glob/dist/mjs/ignore.js
var defaultPlatform2 = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
var Ignore = class {
  relative;
  relativeChildren;
  absolute;
  absoluteChildren;
  constructor(ignored, { nobrace, nocase, noext, noglobstar, platform = defaultPlatform2 }) {
    this.relative = [];
    this.absolute = [];
    this.relativeChildren = [];
    this.absoluteChildren = [];
    const mmopts = {
      dot: true,
      nobrace,
      nocase,
      noext,
      noglobstar,
      optimizationLevel: 2,
      platform,
      nocomment: true,
      nonegate: true
    };
    for (const ign of ignored) {
      const mm = new Minimatch(ign, mmopts);
      for (let i = 0; i < mm.set.length; i++) {
        const parsed = mm.set[i];
        const globParts = mm.globParts[i];
        const p = new Pattern(parsed, globParts, 0, platform);
        const m = new Minimatch(p.globString(), mmopts);
        const children = globParts[globParts.length - 1] === "**";
        const absolute = p.isAbsolute();
        if (absolute)
          this.absolute.push(m);
        else
          this.relative.push(m);
        if (children) {
          if (absolute)
            this.absoluteChildren.push(m);
          else
            this.relativeChildren.push(m);
        }
      }
    }
  }
  ignored(p) {
    const fullpath = p.fullpath();
    const fullpaths = `${fullpath}/`;
    const relative = p.relative() || ".";
    const relatives = `${relative}/`;
    for (const m of this.relative) {
      if (m.match(relative) || m.match(relatives))
        return true;
    }
    for (const m of this.absolute) {
      if (m.match(fullpath) || m.match(fullpaths))
        return true;
    }
    return false;
  }
  childrenIgnored(p) {
    const fullpath = p.fullpath() + "/";
    const relative = (p.relative() || ".") + "/";
    for (const m of this.relativeChildren) {
      if (m.match(relative))
        return true;
    }
    for (const m of this.absoluteChildren) {
      if (m.match(fullpath))
        true;
    }
    return false;
  }
};

// ../../node_modules/.pnpm/glob@10.3.3/node_modules/glob/dist/mjs/processor.js
var HasWalkedCache = class _HasWalkedCache {
  store;
  constructor(store = /* @__PURE__ */ new Map()) {
    this.store = store;
  }
  copy() {
    return new _HasWalkedCache(new Map(this.store));
  }
  hasWalked(target, pattern) {
    return this.store.get(target.fullpath())?.has(pattern.globString());
  }
  storeWalked(target, pattern) {
    const fullpath = target.fullpath();
    const cached = this.store.get(fullpath);
    if (cached)
      cached.add(pattern.globString());
    else
      this.store.set(fullpath, /* @__PURE__ */ new Set([pattern.globString()]));
  }
};
var MatchRecord = class {
  store = /* @__PURE__ */ new Map();
  add(target, absolute, ifDir) {
    const n = (absolute ? 2 : 0) | (ifDir ? 1 : 0);
    const current = this.store.get(target);
    this.store.set(target, current === void 0 ? n : n & current);
  }
  // match, absolute, ifdir
  entries() {
    return [...this.store.entries()].map(([path3, n]) => [
      path3,
      !!(n & 2),
      !!(n & 1)
    ]);
  }
};
var SubWalks = class {
  store = /* @__PURE__ */ new Map();
  add(target, pattern) {
    if (!target.canReaddir()) {
      return;
    }
    const subs = this.store.get(target);
    if (subs) {
      if (!subs.find((p) => p.globString() === pattern.globString())) {
        subs.push(pattern);
      }
    } else
      this.store.set(target, [pattern]);
  }
  get(target) {
    const subs = this.store.get(target);
    if (!subs) {
      throw new Error("attempting to walk unknown path");
    }
    return subs;
  }
  entries() {
    return this.keys().map((k) => [k, this.store.get(k)]);
  }
  keys() {
    return [...this.store.keys()].filter((t) => t.canReaddir());
  }
};
var Processor = class _Processor {
  hasWalkedCache;
  matches = new MatchRecord();
  subwalks = new SubWalks();
  patterns;
  follow;
  dot;
  opts;
  constructor(opts, hasWalkedCache) {
    this.opts = opts;
    this.follow = !!opts.follow;
    this.dot = !!opts.dot;
    this.hasWalkedCache = hasWalkedCache ? hasWalkedCache.copy() : new HasWalkedCache();
  }
  processPatterns(target, patterns) {
    this.patterns = patterns;
    const processingSet = patterns.map((p) => [target, p]);
    for (let [t, pattern] of processingSet) {
      this.hasWalkedCache.storeWalked(t, pattern);
      const root = pattern.root();
      const absolute = pattern.isAbsolute() && this.opts.absolute !== false;
      if (root) {
        t = t.resolve(root === "/" && this.opts.root !== void 0 ? this.opts.root : root);
        const rest2 = pattern.rest();
        if (!rest2) {
          this.matches.add(t, true, false);
          continue;
        } else {
          pattern = rest2;
        }
      }
      if (t.isENOENT())
        continue;
      let p;
      let rest;
      let changed = false;
      while (typeof (p = pattern.pattern()) === "string" && (rest = pattern.rest())) {
        const c = t.resolve(p);
        if (c.isUnknown() && p !== "..")
          break;
        t = c;
        pattern = rest;
        changed = true;
      }
      p = pattern.pattern();
      rest = pattern.rest();
      if (changed) {
        if (this.hasWalkedCache.hasWalked(t, pattern))
          continue;
        this.hasWalkedCache.storeWalked(t, pattern);
      }
      if (typeof p === "string") {
        if (!rest) {
          const ifDir = p === ".." || p === "" || p === ".";
          this.matches.add(t.resolve(p), absolute, ifDir);
        } else {
          this.subwalks.add(t, pattern);
        }
        continue;
      } else if (p === GLOBSTAR) {
        if (!t.isSymbolicLink() || this.follow || pattern.checkFollowGlobstar()) {
          this.subwalks.add(t, pattern);
        }
        const rp = rest?.pattern();
        const rrest = rest?.rest();
        if (!rest || (rp === "" || rp === ".") && !rrest) {
          this.matches.add(t, absolute, rp === "" || rp === ".");
        } else {
          if (rp === "..") {
            const tp = t.parent || t;
            if (!rrest)
              this.matches.add(tp, absolute, true);
            else if (!this.hasWalkedCache.hasWalked(tp, rrest)) {
              this.subwalks.add(tp, rrest);
            }
          }
        }
      } else if (p instanceof RegExp) {
        this.subwalks.add(t, pattern);
      }
    }
    return this;
  }
  subwalkTargets() {
    return this.subwalks.keys();
  }
  child() {
    return new _Processor(this.opts, this.hasWalkedCache);
  }
  // return a new Processor containing the subwalks for each
  // child entry, and a set of matches, and
  // a hasWalkedCache that's a copy of this one
  // then we're going to call
  filterEntries(parent, entries) {
    const patterns = this.subwalks.get(parent);
    const results = this.child();
    for (const e of entries) {
      for (const pattern of patterns) {
        const absolute = pattern.isAbsolute();
        const p = pattern.pattern();
        const rest = pattern.rest();
        if (p === GLOBSTAR) {
          results.testGlobstar(e, pattern, rest, absolute);
        } else if (p instanceof RegExp) {
          results.testRegExp(e, p, rest, absolute);
        } else {
          results.testString(e, p, rest, absolute);
        }
      }
    }
    return results;
  }
  testGlobstar(e, pattern, rest, absolute) {
    if (this.dot || !e.name.startsWith(".")) {
      if (!pattern.hasMore()) {
        this.matches.add(e, absolute, false);
      }
      if (e.canReaddir()) {
        if (this.follow || !e.isSymbolicLink()) {
          this.subwalks.add(e, pattern);
        } else if (e.isSymbolicLink()) {
          if (rest && pattern.checkFollowGlobstar()) {
            this.subwalks.add(e, rest);
          } else if (pattern.markFollowGlobstar()) {
            this.subwalks.add(e, pattern);
          }
        }
      }
    }
    if (rest) {
      const rp = rest.pattern();
      if (typeof rp === "string" && // dots and empty were handled already
      rp !== ".." && rp !== "" && rp !== ".") {
        this.testString(e, rp, rest.rest(), absolute);
      } else if (rp === "..") {
        const ep = e.parent || e;
        this.subwalks.add(ep, rest);
      } else if (rp instanceof RegExp) {
        this.testRegExp(e, rp, rest.rest(), absolute);
      }
    }
  }
  testRegExp(e, p, rest, absolute) {
    if (!p.test(e.name))
      return;
    if (!rest) {
      this.matches.add(e, absolute, false);
    } else {
      this.subwalks.add(e, rest);
    }
  }
  testString(e, p, rest, absolute) {
    if (!e.isNamed(p))
      return;
    if (!rest) {
      this.matches.add(e, absolute, false);
    } else {
      this.subwalks.add(e, rest);
    }
  }
};

// ../../node_modules/.pnpm/glob@10.3.3/node_modules/glob/dist/mjs/walker.js
var makeIgnore = (ignore, opts) => typeof ignore === "string" ? new Ignore([ignore], opts) : Array.isArray(ignore) ? new Ignore(ignore, opts) : ignore;
var GlobUtil = class {
  path;
  patterns;
  opts;
  seen = /* @__PURE__ */ new Set();
  paused = false;
  aborted = false;
  #onResume = [];
  #ignore;
  #sep;
  signal;
  maxDepth;
  constructor(patterns, path3, opts) {
    this.patterns = patterns;
    this.path = path3;
    this.opts = opts;
    this.#sep = !opts.posix && opts.platform === "win32" ? "\\" : "/";
    if (opts.ignore) {
      this.#ignore = makeIgnore(opts.ignore, opts);
    }
    this.maxDepth = opts.maxDepth || Infinity;
    if (opts.signal) {
      this.signal = opts.signal;
      this.signal.addEventListener("abort", () => {
        this.#onResume.length = 0;
      });
    }
  }
  #ignored(path3) {
    return this.seen.has(path3) || !!this.#ignore?.ignored?.(path3);
  }
  #childrenIgnored(path3) {
    return !!this.#ignore?.childrenIgnored?.(path3);
  }
  // backpressure mechanism
  pause() {
    this.paused = true;
  }
  resume() {
    if (this.signal?.aborted)
      return;
    this.paused = false;
    let fn = void 0;
    while (!this.paused && (fn = this.#onResume.shift())) {
      fn();
    }
  }
  onResume(fn) {
    if (this.signal?.aborted)
      return;
    if (!this.paused) {
      fn();
    } else {
      this.#onResume.push(fn);
    }
  }
  // do the requisite realpath/stat checking, and return the path
  // to add or undefined to filter it out.
  async matchCheck(e, ifDir) {
    if (ifDir && this.opts.nodir)
      return void 0;
    let rpc;
    if (this.opts.realpath) {
      rpc = e.realpathCached() || await e.realpath();
      if (!rpc)
        return void 0;
      e = rpc;
    }
    const needStat = e.isUnknown() || this.opts.stat;
    return this.matchCheckTest(needStat ? await e.lstat() : e, ifDir);
  }
  matchCheckTest(e, ifDir) {
    return e && (this.maxDepth === Infinity || e.depth() <= this.maxDepth) && (!ifDir || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && !this.#ignored(e) ? e : void 0;
  }
  matchCheckSync(e, ifDir) {
    if (ifDir && this.opts.nodir)
      return void 0;
    let rpc;
    if (this.opts.realpath) {
      rpc = e.realpathCached() || e.realpathSync();
      if (!rpc)
        return void 0;
      e = rpc;
    }
    const needStat = e.isUnknown() || this.opts.stat;
    return this.matchCheckTest(needStat ? e.lstatSync() : e, ifDir);
  }
  matchFinish(e, absolute) {
    if (this.#ignored(e))
      return;
    const abs = this.opts.absolute === void 0 ? absolute : this.opts.absolute;
    this.seen.add(e);
    const mark = this.opts.mark && e.isDirectory() ? this.#sep : "";
    if (this.opts.withFileTypes) {
      this.matchEmit(e);
    } else if (abs) {
      const abs2 = this.opts.posix ? e.fullpathPosix() : e.fullpath();
      this.matchEmit(abs2 + mark);
    } else {
      const rel = this.opts.posix ? e.relativePosix() : e.relative();
      const pre = this.opts.dotRelative && !rel.startsWith(".." + this.#sep) ? "." + this.#sep : "";
      this.matchEmit(!rel ? "." + mark : pre + rel + mark);
    }
  }
  async match(e, absolute, ifDir) {
    const p = await this.matchCheck(e, ifDir);
    if (p)
      this.matchFinish(p, absolute);
  }
  matchSync(e, absolute, ifDir) {
    const p = this.matchCheckSync(e, ifDir);
    if (p)
      this.matchFinish(p, absolute);
  }
  walkCB(target, patterns, cb) {
    if (this.signal?.aborted)
      cb();
    this.walkCB2(target, patterns, new Processor(this.opts), cb);
  }
  walkCB2(target, patterns, processor, cb) {
    if (this.#childrenIgnored(target))
      return cb();
    if (this.signal?.aborted)
      cb();
    if (this.paused) {
      this.onResume(() => this.walkCB2(target, patterns, processor, cb));
      return;
    }
    processor.processPatterns(target, patterns);
    let tasks = 1;
    const next2 = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (this.#ignored(m))
        continue;
      tasks++;
      this.match(m, absolute, ifDir).then(() => next2());
    }
    for (const t of processor.subwalkTargets()) {
      if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
        continue;
      }
      tasks++;
      const childrenCached = t.readdirCached();
      if (t.calledReaddir())
        this.walkCB3(t, childrenCached, processor, next2);
      else {
        t.readdirCB((_, entries) => this.walkCB3(t, entries, processor, next2), true);
      }
    }
    next2();
  }
  walkCB3(target, entries, processor, cb) {
    processor = processor.filterEntries(target, entries);
    let tasks = 1;
    const next2 = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (this.#ignored(m))
        continue;
      tasks++;
      this.match(m, absolute, ifDir).then(() => next2());
    }
    for (const [target2, patterns] of processor.subwalks.entries()) {
      tasks++;
      this.walkCB2(target2, patterns, processor.child(), next2);
    }
    next2();
  }
  walkCBSync(target, patterns, cb) {
    if (this.signal?.aborted)
      cb();
    this.walkCB2Sync(target, patterns, new Processor(this.opts), cb);
  }
  walkCB2Sync(target, patterns, processor, cb) {
    if (this.#childrenIgnored(target))
      return cb();
    if (this.signal?.aborted)
      cb();
    if (this.paused) {
      this.onResume(() => this.walkCB2Sync(target, patterns, processor, cb));
      return;
    }
    processor.processPatterns(target, patterns);
    let tasks = 1;
    const next2 = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (this.#ignored(m))
        continue;
      this.matchSync(m, absolute, ifDir);
    }
    for (const t of processor.subwalkTargets()) {
      if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
        continue;
      }
      tasks++;
      const children = t.readdirSync();
      this.walkCB3Sync(t, children, processor, next2);
    }
    next2();
  }
  walkCB3Sync(target, entries, processor, cb) {
    processor = processor.filterEntries(target, entries);
    let tasks = 1;
    const next2 = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (this.#ignored(m))
        continue;
      this.matchSync(m, absolute, ifDir);
    }
    for (const [target2, patterns] of processor.subwalks.entries()) {
      tasks++;
      this.walkCB2Sync(target2, patterns, processor.child(), next2);
    }
    next2();
  }
};
var GlobWalker = class extends GlobUtil {
  matches;
  constructor(patterns, path3, opts) {
    super(patterns, path3, opts);
    this.matches = /* @__PURE__ */ new Set();
  }
  matchEmit(e) {
    this.matches.add(e);
  }
  async walk() {
    if (this.signal?.aborted)
      throw this.signal.reason;
    if (this.path.isUnknown()) {
      await this.path.lstat();
    }
    await new Promise((res, rej) => {
      this.walkCB(this.path, this.patterns, () => {
        if (this.signal?.aborted) {
          rej(this.signal.reason);
        } else {
          res(this.matches);
        }
      });
    });
    return this.matches;
  }
  walkSync() {
    if (this.signal?.aborted)
      throw this.signal.reason;
    if (this.path.isUnknown()) {
      this.path.lstatSync();
    }
    this.walkCBSync(this.path, this.patterns, () => {
      if (this.signal?.aborted)
        throw this.signal.reason;
    });
    return this.matches;
  }
};
var GlobStream = class extends GlobUtil {
  results;
  constructor(patterns, path3, opts) {
    super(patterns, path3, opts);
    this.results = new Minipass({
      signal: this.signal,
      objectMode: true
    });
    this.results.on("drain", () => this.resume());
    this.results.on("resume", () => this.resume());
  }
  matchEmit(e) {
    this.results.write(e);
    if (!this.results.flowing)
      this.pause();
  }
  stream() {
    const target = this.path;
    if (target.isUnknown()) {
      target.lstat().then(() => {
        this.walkCB(target, this.patterns, () => this.results.end());
      });
    } else {
      this.walkCB(target, this.patterns, () => this.results.end());
    }
    return this.results;
  }
  streamSync() {
    if (this.path.isUnknown()) {
      this.path.lstatSync();
    }
    this.walkCBSync(this.path, this.patterns, () => this.results.end());
    return this.results;
  }
};

// ../../node_modules/.pnpm/glob@10.3.3/node_modules/glob/dist/mjs/glob.js
var defaultPlatform3 = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
var Glob = class {
  absolute;
  cwd;
  root;
  dot;
  dotRelative;
  follow;
  ignore;
  magicalBraces;
  mark;
  matchBase;
  maxDepth;
  nobrace;
  nocase;
  nodir;
  noext;
  noglobstar;
  pattern;
  platform;
  realpath;
  scurry;
  stat;
  signal;
  windowsPathsNoEscape;
  withFileTypes;
  /**
   * The options provided to the constructor.
   */
  opts;
  /**
   * An array of parsed immutable {@link Pattern} objects.
   */
  patterns;
  /**
   * All options are stored as properties on the `Glob` object.
   *
   * See {@link GlobOptions} for full options descriptions.
   *
   * Note that a previous `Glob` object can be passed as the
   * `GlobOptions` to another `Glob` instantiation to re-use settings
   * and caches with a new pattern.
   *
   * Traversal functions can be called multiple times to run the walk
   * again.
   */
  constructor(pattern, opts) {
    if (!opts)
      throw new TypeError("glob options required");
    this.withFileTypes = !!opts.withFileTypes;
    this.signal = opts.signal;
    this.follow = !!opts.follow;
    this.dot = !!opts.dot;
    this.dotRelative = !!opts.dotRelative;
    this.nodir = !!opts.nodir;
    this.mark = !!opts.mark;
    if (!opts.cwd) {
      this.cwd = "";
    } else if (opts.cwd instanceof URL || opts.cwd.startsWith("file://")) {
      opts.cwd = (0, import_url2.fileURLToPath)(opts.cwd);
    }
    this.cwd = opts.cwd || "";
    this.root = opts.root;
    this.magicalBraces = !!opts.magicalBraces;
    this.nobrace = !!opts.nobrace;
    this.noext = !!opts.noext;
    this.realpath = !!opts.realpath;
    this.absolute = opts.absolute;
    this.noglobstar = !!opts.noglobstar;
    this.matchBase = !!opts.matchBase;
    this.maxDepth = typeof opts.maxDepth === "number" ? opts.maxDepth : Infinity;
    this.stat = !!opts.stat;
    this.ignore = opts.ignore;
    if (this.withFileTypes && this.absolute !== void 0) {
      throw new Error("cannot set absolute and withFileTypes:true");
    }
    if (typeof pattern === "string") {
      pattern = [pattern];
    }
    this.windowsPathsNoEscape = !!opts.windowsPathsNoEscape || opts.allowWindowsEscape === false;
    if (this.windowsPathsNoEscape) {
      pattern = pattern.map((p) => p.replace(/\\/g, "/"));
    }
    if (this.matchBase) {
      if (opts.noglobstar) {
        throw new TypeError("base matching requires globstar");
      }
      pattern = pattern.map((p) => p.includes("/") ? p : `./**/${p}`);
    }
    this.pattern = pattern;
    this.platform = opts.platform || defaultPlatform3;
    this.opts = { ...opts, platform: this.platform };
    if (opts.scurry) {
      this.scurry = opts.scurry;
      if (opts.nocase !== void 0 && opts.nocase !== opts.scurry.nocase) {
        throw new Error("nocase option contradicts provided scurry option");
      }
    } else {
      const Scurry = opts.platform === "win32" ? PathScurryWin32 : opts.platform === "darwin" ? PathScurryDarwin : opts.platform ? PathScurryPosix : PathScurry;
      this.scurry = new Scurry(this.cwd, {
        nocase: opts.nocase,
        fs: opts.fs
      });
    }
    this.nocase = this.scurry.nocase;
    const nocaseMagicOnly = this.platform === "darwin" || this.platform === "win32";
    const mmo = {
      // default nocase based on platform
      ...opts,
      dot: this.dot,
      matchBase: this.matchBase,
      nobrace: this.nobrace,
      nocase: this.nocase,
      nocaseMagicOnly,
      nocomment: true,
      noext: this.noext,
      nonegate: true,
      optimizationLevel: 2,
      platform: this.platform,
      windowsPathsNoEscape: this.windowsPathsNoEscape,
      debug: !!this.opts.debug
    };
    const mms = this.pattern.map((p) => new Minimatch(p, mmo));
    const [matchSet, globParts] = mms.reduce((set, m) => {
      set[0].push(...m.set);
      set[1].push(...m.globParts);
      return set;
    }, [[], []]);
    this.patterns = matchSet.map((set, i) => {
      return new Pattern(set, globParts[i], 0, this.platform);
    });
  }
  async walk() {
    return [
      ...await new GlobWalker(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
        platform: this.platform,
        nocase: this.nocase
      }).walk()
    ];
  }
  walkSync() {
    return [
      ...new GlobWalker(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
        platform: this.platform,
        nocase: this.nocase
      }).walkSync()
    ];
  }
  stream() {
    return new GlobStream(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
      platform: this.platform,
      nocase: this.nocase
    }).stream();
  }
  streamSync() {
    return new GlobStream(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
      platform: this.platform,
      nocase: this.nocase
    }).streamSync();
  }
  /**
   * Default sync iteration function. Returns a Generator that
   * iterates over the results.
   */
  iterateSync() {
    return this.streamSync()[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.iterateSync();
  }
  /**
   * Default async iteration function. Returns an AsyncGenerator that
   * iterates over the results.
   */
  iterate() {
    return this.stream()[Symbol.asyncIterator]();
  }
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
};

// ../../node_modules/.pnpm/glob@10.3.3/node_modules/glob/dist/mjs/has-magic.js
var hasMagic = (pattern, options = {}) => {
  if (!Array.isArray(pattern)) {
    pattern = [pattern];
  }
  for (const p of pattern) {
    if (new Minimatch(p, options).hasMagic())
      return true;
  }
  return false;
};

// ../../node_modules/.pnpm/glob@10.3.3/node_modules/glob/dist/mjs/index.js
function globStreamSync(pattern, options = {}) {
  return new Glob(pattern, options).streamSync();
}
function globStream(pattern, options = {}) {
  return new Glob(pattern, options).stream();
}
function globSync(pattern, options = {}) {
  return new Glob(pattern, options).walkSync();
}
async function glob_(pattern, options = {}) {
  return new Glob(pattern, options).walk();
}
function globIterateSync(pattern, options = {}) {
  return new Glob(pattern, options).iterateSync();
}
function globIterate(pattern, options = {}) {
  return new Glob(pattern, options).iterate();
}
var streamSync = globStreamSync;
var stream = Object.assign(globStream, { sync: globStreamSync });
var iterateSync = globIterateSync;
var iterate = Object.assign(globIterate, {
  sync: globIterateSync
});
var sync = Object.assign(globSync, {
  stream: globStreamSync,
  iterate: globIterateSync
});
var glob = Object.assign(glob_, {
  glob: glob_,
  globSync,
  sync,
  globStream,
  stream,
  globStreamSync,
  streamSync,
  globIterate,
  iterate,
  globIterateSync,
  iterateSync,
  Glob,
  hasMagic,
  escape,
  unescape
});
glob.glob = glob;

// src/node/build.ts
var minifier = new import_clean_css.default();
var supportedExts = ["svelte", "tsx", "jsx", "vue", "mdx", "svx", "html"];
function build(root, options) {
  const context = {
    ...resolveBuildContext(root, options),
    resolver: writeToFile
  };
  if (!context.watch) {
    return buildOnce(context);
  } else {
    return watch(context);
  }
  async function writeToFile(style) {
    await import_promises2.default.mkdir(import_path2.default.dirname(context.out), { recursive: true });
    await import_promises2.default.writeFile(context.out, style, { encoding: "utf-8" });
  }
}
function resolveBuildContext(root, options) {
  return {
    "root": root ?? ".",
    "out": options.out,
    "watch": options.watch,
    "minify": options.minify,
    "verbose": options.verbose,
    "reset": options["reset"]
  };
}
function buildOnce(context) {
  const pattern = import_path2.default.join(context.root, "**", `?(${supportedExts.map((ext2) => `*.${ext2}`)})`);
  glob(pattern).then(async (matches) => {
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
  const pattern = import_path2.default.join(context.root, "**", `*.{${supportedExts.join(",")}}`);
  const watcher = import_chokidar.default.watch(pattern, {
    ignored: (path3) => path3.includes("node_modules")
  });
  watcher.on("change", async (filepath) => {
    log(context, `File changed : \x1B[1m${filepath}\x1B[0m`);
    entry[filepath] = await parseAtomsFromFile(filepath);
    notify();
  });
  watcher.on("ready", async () => {
    const watchedPaths = watcher.getWatched();
    log(context, "Watching files under :", `\x1B[1m${context.root}\x1B[0m`);
    const files = Object.entries(watchedPaths).flatMap(([filepath, files2]) => files2.flatMap((file) => import_path2.default.join(filepath, file)));
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
  if (!(await import_promises2.default.lstat(file)).isFile()) {
    return void 0;
  }
  const data = await import_promises2.default.readFile(file, "utf-8");
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VERSION_CLI
});
/*! Bundled license information:

normalize-path/index.js:
  (*!
   * normalize-path <https://github.com/jonschlinkert/normalize-path>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extglob/index.js:
  (*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-glob/index.js:
  (*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
*/
