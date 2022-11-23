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

// ../../node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/utils.js
var require_utils = __commonJS({
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
    var utils = require_utils();
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
    var utils = require_utils();
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
    var utils = require_utils();
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
var require_constants = __commonJS({
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
var require_parse = __commonJS({
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
    } = require_constants();
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
    var parse = require_parse();
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

// ../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var path = require("path");
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
      SEP: path.sep,
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
var require_utils2 = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    init_cjs_shims();
    var path = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
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
      return win32 === true || path.sep === "\\";
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
    var utils = require_utils2();
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
    } = require_constants2();
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
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob)
          glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
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
var require_parse2 = __commonJS({
  "../../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var constants = require_constants2();
    var utils = require_utils2();
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
    var path = require("path");
    var scan = require_scan();
    var parse = require_parse2();
    var utils = require_utils2();
    var constants = require_constants2();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
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
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex2 = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex2.state;
      delete regex2.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = __spreadProps(__spreadValues({}, options), { ignore: null, onMatch: null, onResult: null });
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex2, options, { glob, posix });
        const result = { glob, state, regex: regex2, posix, input, output, match, isMatch };
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
    picomatch.test = (input, regex2, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
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
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex2 = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex2.test(path.basename(input));
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

// ../../node_modules/.pnpm/micromatch@4.0.5/node_modules/micromatch/index.js
var require_micromatch = __commonJS({
  "../../node_modules/.pnpm/micromatch@4.0.5/node_modules/micromatch/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var util = require("util");
    var braces = require_braces();
    var picomatch = require_picomatch2();
    var utils = require_utils2();
    var isEmptyString = (val) => val === "" || val === "./";
    var micromatch2 = (list, patterns, options) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit = /* @__PURE__ */ new Set();
      let keep = /* @__PURE__ */ new Set();
      let items = /* @__PURE__ */ new Set();
      let negatives = 0;
      let onResult = (state) => {
        items.add(state.output);
        if (options && options.onResult) {
          options.onResult(state);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch(String(patterns[i]), __spreadProps(__spreadValues({}, options), { onResult }), true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated)
          negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match)
            continue;
          if (negated) {
            omit.add(matched.output);
          } else {
            omit.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit.has(item));
      if (options && matches.length === 0) {
        if (options.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
          return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch2.match = micromatch2;
    micromatch2.matcher = (pattern, options) => picomatch(pattern, options);
    micromatch2.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    micromatch2.any = micromatch2.isMatch;
    micromatch2.not = (list, patterns, options = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = /* @__PURE__ */ new Set();
      let items = [];
      let onResult = (state) => {
        if (options.onResult)
          options.onResult(state);
        items.push(state.output);
      };
      let matches = new Set(micromatch2(list, patterns, __spreadProps(__spreadValues({}, options), { onResult })));
      for (let item of items) {
        if (!matches.has(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch2.contains = (str, pattern, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch2.contains(str, p, options));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch2.isMatch(str, pattern, __spreadProps(__spreadValues({}, options), { contains: true }));
    };
    micromatch2.matchKeys = (obj, patterns, options) => {
      if (!utils.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch2(Object.keys(obj), patterns, options);
      let res = {};
      for (let key of keys)
        res[key] = obj[key];
      return res;
    };
    micromatch2.some = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch2.every = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch2.all = (str, patterns, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch(p, options)(str));
    };
    micromatch2.capture = (glob, input, options) => {
      let posix = utils.isWindows(options);
      let regex2 = picomatch.makeRe(String(glob), __spreadProps(__spreadValues({}, options), { capture: true }));
      let match = regex2.exec(posix ? utils.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch2.makeRe = (...args) => picomatch.makeRe(...args);
    micromatch2.scan = (...args) => picomatch.scan(...args);
    micromatch2.parse = (patterns, options) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options)) {
          res.push(picomatch.parse(str, options));
        }
      }
      return res;
    };
    micromatch2.braces = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
        return [pattern];
      }
      return braces(pattern, options);
    };
    micromatch2.braceExpand = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      return micromatch2.braces(pattern, __spreadProps(__spreadValues({}, options), { expand: true }));
    };
    module2.exports = micromatch2;
  }
});

// src/vite/index.ts
var vite_exports = {};
__export(vite_exports, {
  ALL_PROPERTIES: () => ALL_PROPERTIES,
  AT_RULE: () => AT_RULE,
  PREFIX_MEDIA_QUERY: () => PREFIX_MEDIA_QUERY,
  PREFIX_PSEUDO_CLASS: () => PREFIX_PSEUDO_CLASS,
  PREFIX_SELECTOR: () => PREFIX_SELECTOR,
  RULES: () => RULES,
  adorableCSS: () => adorableCSS,
  createGenerateCss: () => createGenerateCss,
  cssString: () => cssString,
  cssvar: () => cssvar,
  generateCss: () => generateCss,
  makeBorder: () => makeBorder,
  makeColor: () => makeColor,
  makeCommaValues: () => makeCommaValues,
  makeFont: () => makeFont,
  makeFontFamily: () => makeFontFamily,
  makeHBox: () => makeHBox,
  makeHEX: () => makeHEX,
  makeHLS: () => makeHLS,
  makeNumber: () => makeNumber,
  makePosition: () => makePosition,
  makePosition1: () => makePosition1,
  makePosition2: () => makePosition2,
  makeRGB: () => makeRGB,
  makeRatio: () => makeRatio,
  makeSide: () => makeSide,
  makeTransition: () => makeTransition,
  makeVBox: () => makeVBox,
  makeValues: () => makeValues,
  parseAtoms: () => parseAtoms,
  percentToEm: () => percentToEm,
  px: () => px,
  reset: () => reset,
  tokenize: () => tokenize
});
init_cjs_shims();

// src/vite/vite-plugin-adorable-css.ts
init_cjs_shims();
var import_micromatch = __toESM(require_micromatch());

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
var cssString = (value) => String(value).startsWith("--") ? `var(${value})` : `"${value}"`;
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
  "snap-normal": () => `scroll-snap-stop: normal;`,
  "snap-always": () => `scroll-snap-stop: always;`,
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
    const pos = { top: 0, right: 0, bottom: 0, left: 0 };
    value.split("+").forEach((v) => {
      switch (v) {
        case "top": {
          return delete pos.bottom;
        }
        case "right": {
          return delete pos.left;
        }
        case "bottom": {
          return delete pos.top;
        }
        case "left": {
          return delete pos.right;
        }
      }
    });
    return `position:absolute;` + Object.keys(pos).map((value2) => `${value2}:0;`).join("");
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
  let lastIndex = 0;
  const atoms = /* @__PURE__ */ new Set();
  const delimiter = /["'`]|\s+/g;
  code += " ";
  code.replace(delimiter, (a, index2, s) => {
    let token2 = s.slice(lastIndex, index2);
    if (code[index2 - 1] === "(")
      return a;
    if (code[index2 + 1] === ")")
      return a;
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
      const ast = [];
      while (token) {
        const e = expr();
        if (e.find((e2) => e2.id === "(") && e[e.length - 1].id !== ")") {
          throw new Error("Invalid Syntax!");
        }
        if (token && (token.id === ":" || token.id === "::")) {
          const rule2 = parsePrefix(prefixRules, e);
          ast.push(rule2);
          next();
          continue;
        }
        if (!token || token.id === "(important)" || token.id === "+") {
          let property = e[0].value;
          if (property === ">>") {
            ast.push({ selector: "& *" });
            e.shift();
            property = e[0].value;
          } else if (property === ">") {
            ast.push({ selector: "&>*" });
            e.shift();
            property = e[0].value;
          }
          const value = e.slice(2, -1).map((r) => r.value).join("");
          const rule2 = rules[property];
          let priority2 = priorityTable[property + property.includes("(") ? "(" : ""] || priorityTable[property] || 0;
          let declaration2 = (() => {
            if (rule2)
              return value === "" ? rule2() : rule2(value);
            if (value && ALL_PROPERTIES[property])
              return `${property}:${makeValues(value)};`;
            throw new Error("Not defined property: " + property);
          })();
          if (declaration2.search("undefined") >= 0) {
            throw new Error("Not defined property: " + property);
          }
          if (token && token.id === "(important)") {
            declaration2 = declaration2.replace(/;/g, (a, b, c) => c.charAt(b - 1) !== "\\" ? "!important;" : a);
            priority2 = 9999 + token.value.length;
          }
          ast.push({ declaration: declaration2, priority: priority2 });
        }
        next();
      }
      const mediaQuery = ast.map((a) => a.media).filter(Boolean);
      const media = mediaQuery.length ? "@media" + mediaQuery.join(" and ") : "";
      const atom = "." + cssEscape(script);
      const selector = ast.map((a) => a.selector).filter(Boolean).map((selector2) => selector2.split(",")).reduce((prev, curr) => {
        return prev.map((prev2) => curr.map((selector2) => selector2.replace(/&/g, prev2))).flat();
      }, [atom]).join(",");
      const declaration = ast.map((a) => a.declaration).filter(Boolean).join("");
      if (!declaration) {
        throw new Error("no declaration");
      }
      let priority = ast.map((a) => a.priority).filter(Boolean).reduce((prev, curr) => Math.max(prev, curr), 0);
      const rule = declaration.includes("&") ? declaration.replace(/&/g, selector) : selector + "{" + declaration + "}";
      return [media ? media + "{" + rule + "}" : rule, priority];
    } catch (e) {
    }
  };
};
var sortByRule = (a, b) => a[1] - b[1];
var createGenerateCss = (rules = {}, prefixRules = {}) => {
  rules = __spreadValues(__spreadValues({}, RULES), rules);
  prefixRules = __spreadValues(__spreadValues({}, PREFIX_RULES), prefixRules);
  return (classList) => classList.map(generateAtomicCss(rules, prefixRules)).filter(Boolean).sort(sortByRule).map((a) => a[0]);
};
var generateCss = createGenerateCss();

// src/vite/vite-plugin-adorable-css.ts
var ADORABLE_CSS = "@adorable.css";
var VIRTUAL_PATH = "/" + ADORABLE_CSS;
var BUILD_PLACEHOLDER = `#--adorable-css--{top:1}`;
var DEBOUNCE_TIMEOUT = 250;
var CONFIG = {
  preLoads: ["**/*.html"],
  include: ["**/*.{svelte,tsx,jsx,vue,mdx,svx,html}"],
  reset,
  rules: {},
  prefixRules: {}
};
var adorableCSS = (config) => {
  config = __spreadValues(__spreadValues({}, CONFIG), config);
  let isHMR = false;
  let timestamp = Date.now();
  let configRoot = "";
  const servers = [];
  const entry = Object.create(null);
  const generateCss2 = createGenerateCss(config.rules, config.prefixRules);
  const checkTargetFile = (id) => {
    var _a;
    if (id.startsWith(configRoot)) {
      id = id.slice(configRoot.length);
    }
    return ((_a = config.include) != null ? _a : []).some((glob) => import_micromatch.default.isMatch(id, glob));
  };
  const makeStyle = () => {
    const allAtoms = Object.values(entry).flat();
    const styles = generateCss2([...new Set(allAtoms)]);
    return config.reset + styles.join("\n");
  };
  const invalidate = () => {
    for (const server of servers) {
      const mod = server.moduleGraph.getModuleById(VIRTUAL_PATH);
      if (!mod) {
        continue;
      }
      server.moduleGraph.invalidateModule(mod);
      server.ws.send({
        type: "update",
        updates: [{
          acceptedPath: VIRTUAL_PATH,
          path: VIRTUAL_PATH,
          timestamp,
          type: "js-update"
        }]
      });
    }
  };
  let timer;
  const debounceInvalidate = () => {
    clearTimeout(timer);
    timer = setTimeout(invalidate, DEBOUNCE_TIMEOUT);
  };
  return [{
    name: `${ADORABLE_CSS}:dev`,
    apply: "serve",
    enforce: "pre",
    configureServer: (_server) => {
      configRoot = _server.config.root + "/";
      servers.push(_server);
      _server.middlewares.use((req, res, next2) => {
        if (!isHMR && req.url && checkTargetFile(req.url)) {
          debounceInvalidate();
        }
        return next2();
      });
    },
    buildStart: () => {
    },
    resolveId: (id) => id === ADORABLE_CSS || id === VIRTUAL_PATH ? VIRTUAL_PATH : void 0,
    load: (id) => {
      if (id === VIRTUAL_PATH) {
        return makeStyle();
      }
    },
    transform(code, id) {
      if (isHMR)
        return code;
      if (id === VIRTUAL_PATH)
        return code;
      if (!checkTargetFile(id))
        return code;
      entry[id] = parseAtoms(code);
      timestamp = Date.now();
    },
    async handleHotUpdate({ file, read }) {
      if (!checkTargetFile(file))
        return;
      isHMR = true;
      entry[file] = parseAtoms(await read());
      timestamp = Date.now();
      invalidate();
    }
  }, {
    name: `${ADORABLE_CSS}:build`,
    apply: "build",
    enforce: "pre",
    resolveId: (id) => id === ADORABLE_CSS || id === VIRTUAL_PATH ? VIRTUAL_PATH : void 0,
    load: (id) => id === VIRTUAL_PATH ? BUILD_PLACEHOLDER : void 0,
    transform(code, id) {
      if (checkTargetFile(id)) {
        entry[id] = parseAtoms(code);
      }
      return void 0;
    },
    generateBundle(options, bundle) {
      const adorableCSS2 = makeStyle();
      for (const chunk of Object.values(bundle)) {
        if (!chunk.fileName.endsWith(".css"))
          continue;
        if (chunk.type === "asset" && typeof chunk.source === "string") {
          chunk.source = chunk.source.replace(BUILD_PLACEHOLDER, adorableCSS2);
        }
      }
    }
  }];
};
module.exports = __toCommonJS(vite_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ALL_PROPERTIES,
  AT_RULE,
  PREFIX_MEDIA_QUERY,
  PREFIX_PSEUDO_CLASS,
  PREFIX_SELECTOR,
  RULES,
  adorableCSS,
  createGenerateCss,
  cssString,
  cssvar,
  generateCss,
  makeBorder,
  makeColor,
  makeCommaValues,
  makeFont,
  makeFontFamily,
  makeHBox,
  makeHEX,
  makeHLS,
  makeNumber,
  makePosition,
  makePosition1,
  makePosition2,
  makeRGB,
  makeRatio,
  makeSide,
  makeTransition,
  makeVBox,
  makeValues,
  parseAtoms,
  percentToEm,
  px,
  reset,
  tokenize
});
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
