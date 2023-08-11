var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/codegen/adorableCSS.ts
var makeAdorableStyleColor = ({ r, g, b }, opacity = 1) => `#${makeHexColor(r, g, b)}${opacity === 1 ? "" : makeNumber(opacity)}`;
var isReact = false;
var CLASS_NAME = isReact ? "className" : "class";
var COMMENT_START = isReact ? "{/*" : "<!--";
var COMMENT_END = isReact ? "*/}" : "-->";
var createClassBuilder = (cls = []) => {
  function addClass(prop, value) {
    if (arguments.length === 2 && (value === null || value === void 0))
      return;
    cls.push(`${prop}${value ? "(" + value + ")" : ""}`);
  }
  return { addClass, cls };
};
var addClassWidth = (node, addClass) => {
  const { layoutSizingHorizontal, width, minWidth, maxWidth } = node;
  if (layoutSizingHorizontal === "HUG") {
  } else if (layoutSizingHorizontal === "FILL")
    addClass("w", "fill");
  else if (layoutSizingHorizontal === "FIXED")
    addClass("w", makeInt(width));
  if (minWidth !== null || maxWidth !== null) {
    const _minWidth = minWidth !== null ? makeInt(minWidth) : "";
    const _maxWidth = maxWidth !== null ? makeInt(maxWidth) : "";
    addClass("w", _minWidth + "~" + _maxWidth);
  }
};
var addClassHeight = (node, addClass) => {
  const { layoutSizingVertical, height, minHeight, maxHeight } = node;
  if (layoutSizingVertical === "HUG") {
  } else if (layoutSizingVertical === "FILL")
    addClass("h", "fill");
  else if (layoutSizingVertical === "FIXED")
    addClass("h", makeInt(height));
  if (minHeight !== null || maxHeight !== null) {
    const _minHeight = minHeight !== null ? makeInt(minHeight) : "";
    const _maxHeight = maxHeight !== null ? makeInt(maxHeight) : "";
    addClass("h", _minHeight + "~" + _maxHeight);
  }
};
var addClassBorderRadius = (node, addClass) => {
  if (node.type === "ELLIPSE")
    addClass("r", "100%");
  else {
    let { topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = node;
    if (topLeftRadius > 0 || topRightRadius > 0 || bottomRightRadius > 0 || bottomLeftRadius > 0) {
      topLeftRadius = Math.round(topLeftRadius);
      topRightRadius = Math.round(topRightRadius);
      bottomRightRadius = Math.round(bottomRightRadius);
      bottomLeftRadius = Math.round(bottomLeftRadius);
      addClass(`r(${makeFourSideValues(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius)})`);
    }
  }
};
var addClassBorder = (node, addClass) => {
  try {
    const { strokes, strokeAlign, strokeWeight } = node;
    const border = strokes.filter((stroke) => stroke.visible)[0];
    if (border && border.color && strokeWeight > 0) {
      if (strokeAlign === "OUTSIDE") {
        addClass("ring", [strokeWeight > 1 ? strokeWeight : null, makeColor(border.color, border.opacity)].filter(Boolean).join("/"));
      } else {
        addClass("b", `${makeColor(border.color, border.opacity)}`);
        if (strokeWeight > 1) {
          addClass("bw", node.strokeWeight);
        }
      }
    }
  } catch (e) {
  }
};
var addEffectClass = (node, addClass) => {
  node.effects.forEach((effect) => {
    if (!effect.visible)
      return;
    switch (effect.type) {
      case "DROP_SHADOW":
      case "INNER_SHADOW": {
        const { color, offset, radius, spread } = effect;
        const { x, y } = offset;
        const inset = effect.type === "INNER_SHADOW" ? "inset/" : "";
        addClass("box-shadow", `${inset}${x}/${y}/${radius}` + (spread ? "/" + spread : "") + `/${makeColor(color, color.a)}`);
        break;
      }
      case "LAYER_BLUR": {
        addClass("blur", Math.round(effect.radius / 2));
        break;
      }
      case "BACKGROUND_BLUR": {
        addClass("backdrop-blur", Math.round(effect.radius / 2));
        break;
      }
    }
  });
};
var isAbsoluteLayout = (node) => {
  const selection = figma.currentPage.selection;
  if (node === selection[0]) {
    return false;
  }
  if (node.layoutPositioning === "ABSOLUTE") {
    return true;
  }
  if (!node.parent.layoutMode || node.parent.layoutMode === "NONE") {
    return true;
  }
  return false;
};
var addClassPosition = (node, addClass) => {
  var _a;
  if (isAbsoluteLayout(node)) {
    const rect1 = node.parent.absoluteBoundingBox;
    const rect2 = node.absoluteBoundingBox;
    const x = Math.floor(rect2.x - rect1.x);
    const y = Math.floor(rect2.y - rect1.y);
    addClass("absolute");
    const { horizontal = "MIN", vertical = "MIN" } = (_a = node.constraints) != null ? _a : {};
    if (horizontal === "MIN" && vertical === "MIN" && x === 0 && y === 0) {
      return;
    }
    const right = Math.floor(rect1.x + rect1.width - rect2.x - rect2.width);
    const bottom = Math.floor(rect1.y + rect1.height - rect2.y - rect2.height);
    const offsetXFromCenter = Math.floor(rect2.x - rect1.x - (rect1.width / 2 - rect2.width / 2));
    const offsetYFromCenter = Math.floor(rect2.y - rect1.y - (rect1.height / 2 - rect2.height / 2));
    switch (horizontal) {
      case "MIN": {
        addClass("x", x);
        break;
      }
      case "MAX": {
        addClass("x", "~" + right);
        break;
      }
      case "CENTER": {
        if (Math.abs(offsetXFromCenter) <= 1)
          addClass("x", "center");
        else
          addClass("x", "center" + (offsetXFromCenter > 0 ? "+" : "") + px(offsetXFromCenter));
        break;
      }
      case "STRETCH": {
        addClass("x", x + "~" + right);
        break;
      }
      case "SCALE": {
        const percentLeft = Math.round(x / rect1.width * 100);
        const percentRight = Math.round(right / rect1.width * 100);
        addClass("x", percentLeft + "%~" + percentRight + "%");
        break;
      }
    }
    switch (vertical) {
      case "MIN": {
        addClass("y", y);
        break;
      }
      case "MAX": {
        addClass("y", "~" + bottom);
        break;
      }
      case "CENTER": {
        if (Math.abs(offsetYFromCenter) <= 1)
          addClass("y", "center");
        else
          addClass("y", "center" + (offsetYFromCenter > 0 ? "+" : "") + px(offsetYFromCenter));
        break;
      }
      case "STRETCH": {
        addClass("y", y + "~" + bottom);
        break;
      }
      case "SCALE": {
        const percentTop = Math.round(y / rect1.height * 100);
        const percentBottom = Math.round(bottom / rect1.height * 100);
        addClass("y", percentTop + "%~" + percentBottom + "%");
        break;
      }
    }
    return;
  }
  if (node.findChild && node.findChild(isAbsoluteLayout)) {
    addClass("relative");
  }
};
var everyChildrenHasStretchVbox = (node) => {
  var _a;
  return (_a = node.children) == null ? void 0 : _a.every((c) => c.layoutSizingHorizontal === "FILL");
};
var isNumber = (value) => value === +value;
var addClassFlexbox = (node, addClass) => {
  var _a;
  const numChildren = (_a = node.children) == null ? void 0 : _a.filter((child) => child.visible).length;
  const hasChildren = numChildren > 0;
  const hasMoreChildren = numChildren > 1;
  const {
    layoutMode,
    layoutWrap,
    primaryAxisAlignItems,
    counterAxisAlignItems
  } = node;
  if (layoutMode !== "NONE" && hasChildren) {
    if (layoutMode === "HORIZONTAL") {
      if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
        addClass("pack");
      } else {
        const value = [];
        if (counterAxisAlignItems === "MIN")
          value.push("top");
        else if (counterAxisAlignItems === "MAX")
          value.push("bottom");
        if (primaryAxisAlignItems === "CENTER")
          value.push("center");
        else if (primaryAxisAlignItems === "MAX")
          value.push("right");
        addClass("hbox", value.join("+"));
      }
    } else if (layoutMode === "VERTICAL") {
      if (primaryAxisAlignItems === "CENTER" && counterAxisAlignItems === "CENTER") {
        addClass("vpack");
      } else {
        const value = [];
        if (everyChildrenHasStretchVbox(node)) {
        } else if (counterAxisAlignItems === "MIN")
          value.push("left");
        else if (counterAxisAlignItems === "CENTER")
          value.push("center");
        else if (counterAxisAlignItems === "MAX")
          value.push("right");
        if (primaryAxisAlignItems === "CENTER")
          value.push("middle");
        if (primaryAxisAlignItems === "MAX")
          value.push("bottom");
        addClass("vbox", value.join("+"));
      }
    }
    if (layoutWrap === "WRAP") {
      addClass("flex-wrap");
    }
    if (hasMoreChildren) {
      if (primaryAxisAlignItems === "SPACE_BETWEEN") {
        addClass("space-between");
      } else if (isNumber(node.itemSpacing) && node.itemSpacing !== 0) {
        const { itemSpacing } = node;
        if (itemSpacing < 0) {
          layoutMode === "HORIZONTAL" ? addClass("hgap", itemSpacing) : addClass("vgap", itemSpacing);
        } else {
          addClass("gap", itemSpacing);
        }
      }
    }
    const { paddingTop, paddingRight, paddingBottom, paddingLeft } = node;
    if (paddingTop > 0 || paddingRight > 0 || paddingBottom > 0 || paddingLeft > 0) {
      addClass("p", makeFourSideValues(paddingTop, paddingRight, paddingBottom, paddingLeft));
    }
  }
};
var addClassBackground = (node, addClass) => {
  try {
    const fills = [...node.fills].reverse().filter((fill) => fill.visible);
    if (fills.length === 0) {
      return;
    }
    if (fills.length === 1) {
      const fill = fills[0];
      if (fill.type === "SOLID") {
        addClass("bg", makeColor(fill.color, fill.opacity));
      } else if (fill.type === "GRADIENT_LINEAR") {
        addClass("bg", makeGradientLinear(fill));
      }
      return;
    }
    const gradients = fills.map((fill, index, A) => {
      if (fill.type === "SOLID" && index === A.length - 1) {
        return makeColor(fill.color, fill.opacity);
      }
      if (fill.type === "SOLID") {
        return `linear-gradient(0deg,${makeColor(fill.color, fill.opacity)} 0%,${makeColor(fill.color, fill.opacity)} 100%)`;
      }
      if (fill.type === "GRADIENT_LINEAR") {
        return makeGradientLinear(fill);
      }
      return "";
    }).filter(Boolean).join(",");
    addClass("bg", gradients.replace(/\s+/g, "/"));
  } catch (e) {
  }
};
var addClassOverflow = (node, addClass) => {
  if (!node.children)
    return;
  const numChildren = node.children.filter((child) => child.visible).length;
  const hasChildren = numChildren > 0;
  if (hasChildren && node.clipsContent)
    addClass("clip");
  else if (node.findOne((child) => child.type === "TEXT" && child.textTruncation === "ENDING"))
    addClass("clip");
};
var addOpacity = (node, addClass) => {
  if (node.opacity !== 1)
    addClass("opacity", makeNumber(node.opacity));
};
var wrapInstance = (node, code) => {
  var _a;
  const mainComponent = node.mainComponent || node;
  const mainComponentSet = mainComponent.parent && ((_a = mainComponent.parent) == null ? void 0 : _a.type) === "COMPONENT_SET" ? mainComponent.parent : mainComponent;
  const name = capitalize(mainComponentSet.name.trim().replace(/\s*\/\s*/g, "_").replace(/-|\s+/g, "_").replace(/\s+/g, "_"));
  return `
${COMMENT_START} <${name}> ${COMMENT_END}
${code}
${COMMENT_START} </${name}> ${COMMENT_END}
`;
};
var generateChild = (depth, children, callback) => __async(void 0, null, function* () {
  const contents = yield Promise.all((children || []).map((params) => generateCode(params, depth + 1)));
  const content = contents.filter(Boolean).join("\n");
  return callback(content);
});
var generateComponentSet = (node, depth) => __async(void 0, null, function* () {
  const children = yield generateChild(depth, node.children, (content) => content);
  return `<div ${CLASS_NAME}="vbox gap(20)">
${children}
</div>`;
});
var generateInstance = (node, depth) => __async(void 0, null, function* () {
  const code = yield generateFrame(node, depth);
  return wrapInstance(node, code);
});
var generateFrame = (node, depth) => __async(void 0, null, function* () {
  const { addClass, cls } = createClassBuilder();
  addClassPosition(node, addClass);
  addClassWidth(node, addClass);
  addClassHeight(node, addClass);
  addClassFlexbox(node, addClass);
  addClassBackground(node, addClass);
  addClassBorder(node, addClass);
  addClassBorderRadius(node, addClass);
  addClassOverflow(node, addClass);
  addEffectClass(node, addClass);
  addOpacity(node, addClass);
  if (node.itemReverseZIndex) {
    addClass("itemReverseZIndex");
  }
  const className = cls.join(" ");
  return yield generateChild(depth, node.children, (content) => `<div ${CLASS_NAME}="${className}">${indent(content)}</div>`);
});
var addClassFont = (node, addClass) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (node.fontSize) {
    const font = [node.fontSize];
    if (((_a = node.lineHeight) == null ? void 0 : _a.value) && ((_b = node.lineHeight) == null ? void 0 : _b.unit) !== "AUTO") {
      font.push(unitValue(node.lineHeight));
    }
    if ((_c = node.letterSpacing) == null ? void 0 : _c.value) {
      if (font.length === 1)
        font.push("-");
      font.push(unitValue(node.letterSpacing));
    }
    addClass("font", font.filter(Boolean).map((v) => v.toString()).join("/"));
  } else {
    if (((_d = node.lineHeight) == null ? void 0 : _d.value) && ((_e = node.lineHeight) == null ? void 0 : _e.unit) !== "AUTO") {
      addClass("line-height", unitValue(node.lineHeight));
    }
    if ((_f = node.letterSpacing) == null ? void 0 : _f.value) {
      addClass("letter-spacing", unitValue(node.letterSpacing));
    }
  }
  const fontFamilyName = (_g = node.fontFamily) == null ? void 0 : _g.replace(/\s/g, "-");
  if (fontFamilyName) {
    addClass(fontFamilyName);
  }
  if (node.fontWeight) {
    const fontStyleName = node.fontWeight.toLowerCase();
    switch (fontStyleName) {
      case "regular":
        break;
      case "black": {
        addClass("heavy");
        break;
      }
      default: {
        addClass(fontStyleName);
      }
    }
  }
  switch (node.textDecoration) {
    case "UNDERLINE": {
      addClass("underline");
      break;
    }
    case "STRIKETHROUGH": {
      addClass("line-through");
      break;
    }
  }
  const fill = (_h = node.fills) == null ? void 0 : _h.find((fill2) => (fill2 == null ? void 0 : fill2.visible) && (fill2 == null ? void 0 : fill2.type) === "SOLID");
  if (fill) {
    addClass("c", makeColor(fill.color, fill.opacity));
  }
  switch (node.textCase) {
    case "UPPER": {
      addClass("uppercase");
      break;
    }
    case "LOWER": {
      addClass("lowercase");
      break;
    }
    case "TITLE": {
      addClass("capitalize");
      break;
    }
    case "SMALL_CAPS": {
      addClass("small-caps");
      break;
    }
    case "SMALL_CAPS_FORCED": {
      addClass("capitalize small-caps");
      break;
    }
  }
};
var generateText = (node) => __async(void 0, null, function* () {
  const { addClass, cls } = createClassBuilder();
  addClassPosition(node, addClass);
  const { textAutoResize, textTruncation, maxLines, textAlignHorizontal, textAlignVertical } = node;
  switch (textAutoResize) {
    case "WIDTH_AND_HEIGHT":
      break;
    case "HEIGHT":
      addClassWidth(node, addClass);
      break;
    case "NONE":
      addClassWidth(node, addClass);
      addClassHeight(node, addClass);
      break;
  }
  const segments = node.getStyledTextSegments([
    "fontSize",
    "fontName",
    "fontWeight",
    "textDecoration",
    "textCase",
    "lineHeight",
    "letterSpacing",
    "fills",
    "textStyleId",
    "fillStyleId",
    "listOptions",
    "indentation",
    "hyperlink"
    // "openTypeFeatures"
  ]).map((segment) => {
    var _a, _b;
    return __spreadProps(__spreadValues({}, segment), { fontFamily: (_a = segment.fontName) == null ? void 0 : _a.family, fontWeight: (_b = segment.fontName) == null ? void 0 : _b.style });
  });
  const commonFontStyle = segments.reduce((prev, curr) => {
    const style = {};
    Object.keys(prev).forEach((key) => {
      if (JSON.stringify(prev[key]) === JSON.stringify(curr[key]))
        style[key] = prev[key];
    });
    return style;
  });
  addClassFont(commonFontStyle, addClass);
  const HORIZONTAL_ALIGN = {
    // LEFT: "left", // @NOTE: default (don't remove this comment)
    CENTER: "center",
    RIGHT: "right",
    JUSTIFIED: "justify"
  };
  const VERTICAL_ALIGN = {
    // TOP: "top",  // @NOTE: default (don't remove this comment)
    CENTER: "middle",
    BOTTOM: "bottom"
  };
  if (textAutoResize === "NONE") {
    let textClass = [HORIZONTAL_ALIGN[textAlignHorizontal], VERTICAL_ALIGN[textAlignVertical]].filter(Boolean).join("+");
    if (textClass === "center+middle")
      textClass = "pack";
    if (textClass) {
      addClass("text", textClass);
    }
  } else {
    addClass("text", HORIZONTAL_ALIGN[textAlignHorizontal]);
  }
  if (textTruncation === "ENDING") {
    if (maxLines > 1) {
      addClass("line-clamp", maxLines);
    } else {
      addClass("nowrap...");
    }
  }
  if (node.opacity !== 1) {
    addClass("opacity", makeNumber(node.opacity));
  }
  const textContent = segments.length === 1 ? nl2br(node.characters) : segments.map((segment) => {
    const { addClass: addClass2, cls: cls2 } = createClassBuilder();
    Object.keys(commonFontStyle).forEach((key) => {
      if (JSON.stringify(commonFontStyle[key]) === JSON.stringify(segment[key]))
        delete segment[key];
    });
    addClassFont(segment, addClass2);
    const className2 = cls2.join(" ");
    return cls2.length ? `<span ${CLASS_NAME}="${className2}">${nl2br(segment.characters)}</span>` : nl2br(segment.characters);
  }).join("");
  const className = cls.join(" ");
  return `<div ${CLASS_NAME}="${className}">${textContent}</div>`;
});
var isAsset = (node) => {
  if (node.isAsset)
    return true;
  if (node.findChild && node.findChild((child) => child.isMask))
    return true;
  if (node.exportSettings && node.exportSettings.length) {
    if (node.parent.type === "SECTION" || node.parent.type === "PAGE") {
      return false;
    }
    return true;
  }
  return false;
};
var generateAsset = (node) => __async(void 0, null, function* () {
  let code = "";
  const cls = [];
  const { addClass } = createClassBuilder(cls);
  try {
    if (isAbsoluteLayout(node)) {
      addClassPosition(node, addClass);
    }
    addClassWidth(node, addClass);
    addClassHeight(node, addClass);
    if (node.type === "ELLIPSE") {
      addClass("r", "100%");
    }
    if (figma.mode !== "codegen") {
      node.exportAsync({ format: "SVG_STRING", useAbsoluteBounds: true }).then((content) => {
        const inlineSVG = content.replace(/pattern\d/g, (a) => a + node.id.replace(/[^a-zA-z0-9]/g, "-")).replace(/\n/g, "");
        figma.ui.postMessage({ type: "assets", id: node.id, svg: inlineSVG });
      }).catch((e) => {
        console.warn("export failed: ", e);
      });
    }
    const className = cls.join(" ");
    code = `<figure ${CLASS_NAME}="block ${className}" data-asset-id="${node.id}" src="${node.name}"></figure>`;
    if (node.type === "INSTANCE" || node.type === "COMPONENT") {
      code = wrapInstance(node, code);
    } else {
      code = "\n" + code + "\n";
    }
  } catch (e) {
    console.error(e);
    console.error("asset error node:", node);
  }
  return code;
});
var generateCode = (node, depth = 0) => __async(void 0, null, function* () {
  if (node.visible === false)
    return "";
  if (isAsset(node))
    return generateAsset(node);
  else if (node.type === "COMPONENT" || node.type === "INSTANCE")
    return generateInstance(node, depth);
  else if (node.type === "COMPONENT_SET")
    return generateComponentSet(node, depth);
  else if (node.type === "TEXT")
    return generateText(node);
  return generateFrame(node, depth);
});
var getGeneratedCode = (node) => __async(void 0, null, function* () {
  const code = yield generateCode(node, 0);
  return code.replace(/(\n\s*\n)+/g, "\n\n");
});

// src/codegen/tailwindCSS.ts
var makeTailwindStyleColor = ({ r, g, b }, opacity = 1) => `#${makeHexColor(r, g, b, opacity)}${opacity === 1 ? "" : Math.round(+opacity * 255).toString(16)}`;
var makeTailwindValue = (value) => px(value).replace(/\s+/g, "_");
var isReact2 = false;
var CLASS_NAME2 = isReact2 ? "className" : "class";
var COMMENT_START2 = isReact2 ? "{/*" : "<!--";
var COMMENT_END2 = isReact2 ? "*/}" : "-->";
var createClassBuilder2 = (cls = []) => {
  function addClass(prop, value) {
    if (arguments.length === 2 && (value === null || value === void 0))
      return;
    cls.push(`${prop}${value ? "-[" + makeTailwindValue(value) + "]" : ""}`);
  }
  return { addClass, cls };
};
var addClassWidth2 = (node, addClass) => {
  var _a, _b;
  const { layoutSizingHorizontal, width, minWidth, maxWidth } = node;
  if (((_a = node.constraints) == null ? void 0 : _a.horizontal) === "STRETCH" || ((_b = node.constraints) == null ? void 0 : _b.horizontal) === "SCALE") {
  } else if (layoutSizingHorizontal === "HUG") {
  } else if (layoutSizingHorizontal === "FIXED")
    addClass("w", makeInt(width));
  else if (layoutSizingHorizontal === "FILL") {
    if (node.parent.layoutMode === "HORIZONTAL")
      addClass("flex-1");
    else if (node.parent.layoutMode === "VERTICAL")
      addClass("self-stretch");
    else
      addClass("w-full");
  }
  minWidth !== null && addClass("min-w", makeInt(minWidth));
  maxWidth !== null && addClass("max-w", makeInt(maxWidth));
};
var addClassHeight2 = (node, addClass) => {
  var _a, _b;
  const { layoutSizingVertical, height, minHeight, maxHeight } = node;
  if (((_a = node.constraints) == null ? void 0 : _a.vertical) === "STRETCH" || ((_b = node.constraints) == null ? void 0 : _b.vertical) === "SCALE") {
  } else if (layoutSizingVertical === "HUG") {
  } else if (layoutSizingVertical === "FIXED")
    addClass("h", makeInt(height));
  else if (layoutSizingVertical === "FILL") {
    if (node.parent.layoutMode === "VERTICAL")
      addClass("flex-1");
    else if (node.parent.layoutMode === "HORIZONTAL")
      addClass("self-stretch");
    else
      addClass("h-full");
  }
  minHeight !== null && addClass("min-h", makeInt(minHeight));
  minHeight !== null && addClass("max-h", makeInt(minHeight));
};
var addClassBorderRadius2 = (node, addClass) => {
  if (node.type === "ELLIPSE")
    addClass("rounded", "100%");
  else {
    let { topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = node;
    if (topLeftRadius > 0 || topRightRadius > 0 || bottomRightRadius > 0 || bottomLeftRadius > 0) {
      topLeftRadius = Math.round(topLeftRadius);
      topRightRadius = Math.round(topRightRadius);
      bottomRightRadius = Math.round(bottomRightRadius);
      bottomLeftRadius = Math.round(bottomLeftRadius);
      addClass("rounded", topLeftRadius);
    }
  }
};
var addClassBorder2 = (node, addClass) => {
  try {
    const { strokes, strokeAlign, strokeWeight } = node;
    const border = strokes.find((stroke) => stroke.visible);
    if (border && border.color && strokeWeight >= 1) {
      if (strokeAlign === "OUTSIDE") {
        addClass("ring", [strokeWeight > 1 ? strokeWeight : null, makeColor(border.color, border.opacity)].filter(Boolean).join("/"));
      } else {
        addClass("border", `${makeColor(border.color, border.opacity)}`);
        addClass("border", makeInt(node.strokeWeight));
      }
    }
  } catch (e) {
  }
};
var addEffectClass2 = (node, addClass) => {
  node.effects.forEach((effect) => {
    if (!effect.visible)
      return;
    switch (effect.type) {
      case "DROP_SHADOW":
      case "INNER_SHADOW": {
        const { color, offset, radius, spread } = effect;
        const { x, y } = offset;
        const inset = effect.type === "INNER_SHADOW" ? "inset/" : "";
        addClass("box-shadow", `${inset}${x}/${y}/${radius}` + (spread ? "/" + spread : "") + `/${makeColor(color, color.a)}`);
        break;
      }
      case "LAYER_BLUR": {
        addClass("blur", Math.round(effect.radius / 2));
        break;
      }
      case "BACKGROUND_BLUR": {
        addClass("backdrop-blur", Math.round(effect.radius / 2));
        break;
      }
    }
  });
};
var isAbsoluteLayout2 = (node) => {
  const selection = figma.currentPage.selection;
  if (node === selection[0]) {
    return false;
  }
  if (node.layoutPositioning === "ABSOLUTE") {
    return true;
  }
  if (!node.parent.layoutMode || node.parent.layoutMode === "NONE") {
    return true;
  }
  return false;
};
var addClassPosition2 = (node, addClass) => {
  var _a;
  if (isAbsoluteLayout2(node)) {
    const rect1 = node.parent.absoluteBoundingBox;
    const rect2 = node.absoluteBoundingBox;
    const x = Math.floor(rect2.x - rect1.x);
    const y = Math.floor(rect2.y - rect1.y);
    addClass("absolute");
    const { horizontal = "MIN", vertical = "MIN" } = (_a = node.constraints) != null ? _a : {};
    if (horizontal === "MIN" && vertical === "MIN" && x === 0 && y === 0) {
      return;
    }
    const right = Math.floor(rect1.x + rect1.width - rect2.x - rect2.width);
    const bottom = Math.floor(rect1.y + rect1.height - rect2.y - rect2.height);
    const offsetXFromCenter = Math.floor(rect2.x - rect1.x - (rect1.width / 2 - rect2.width / 2));
    const offsetYFromCenter = Math.floor(rect2.y - rect1.y - (rect1.height / 2 - rect2.height / 2));
    const percentLeft = Math.round(x / rect1.width * 100);
    const percentRight = Math.round(right / rect1.width * 100);
    switch (horizontal) {
      case "MIN": {
        addClass("left", x);
        break;
      }
      case "MAX": {
        addClass("right", right);
        break;
      }
      case "CENTER": {
        if (Math.abs(offsetXFromCenter) <= 1)
          addClass("left-1/2");
        else
          addClass("left", "calc(50%" + (offsetXFromCenter > 0 ? "+" : "") + px(offsetXFromCenter) + ")");
        addClass("-translate-x-1/2");
        break;
      }
      case "STRETCH": {
        addClass("left", x);
        addClass("right", right);
        break;
      }
      case "SCALE": {
        addClass("left", percentLeft + "%");
        addClass("right", percentRight + "%");
      }
    }
    switch (vertical) {
      case "MIN": {
        addClass("top", y);
        break;
      }
      case "MAX": {
        addClass("bottom", bottom);
        break;
      }
      case "CENTER": {
        if (Math.abs(offsetYFromCenter) <= 1)
          addClass("top-1/2");
        else
          addClass("top", "calc(50%" + (offsetYFromCenter > 0 ? "+" : "") + px(offsetYFromCenter) + ")");
        addClass("-translate-y-1/2");
        break;
      }
      case "STRETCH": {
        addClass("top", y);
        addClass("bottom", bottom);
        break;
      }
    }
    return;
  }
  if (node.findChild && node.findChild(isAbsoluteLayout2)) {
    addClass("relative");
  }
};
var addClassFlexbox2 = (node, addClass) => {
  var _a;
  const numChildren = (_a = node.children) == null ? void 0 : _a.filter((child) => child.visible).length;
  const hasChildren = numChildren > 0;
  const hasMoreChildren = numChildren > 1;
  const {
    layoutMode,
    layoutWrap,
    primaryAxisAlignItems,
    counterAxisAlignItems
  } = node;
  if (layoutMode !== "NONE" && hasChildren) {
    if (layoutMode === "HORIZONTAL") {
      addClass("flex");
      addClass("flex-row");
      if (layoutWrap === "WRAP") {
        addClass("flex-wrap");
      }
      if (counterAxisAlignItems === "MIN")
        addClass("items-start");
      else if (counterAxisAlignItems === "CENTER")
        addClass("items-center");
      else if (counterAxisAlignItems === "MAX")
        addClass("items-end");
      if (primaryAxisAlignItems === "MIN")
        addClass("justify-start");
      else if (primaryAxisAlignItems === "CENTER")
        addClass("justify-center");
      else if (primaryAxisAlignItems === "MAX")
        addClass("justify-end");
    } else if (layoutMode === "VERTICAL") {
      addClass("flex");
      addClass("flex-col");
      if (layoutWrap === "WRAP") {
        addClass("flex-wrap");
      }
      if (counterAxisAlignItems === "MIN")
        addClass("items-start");
      else if (counterAxisAlignItems === "CENTER")
        addClass("items-center");
      else if (counterAxisAlignItems === "MAX")
        addClass("items-end");
      if (primaryAxisAlignItems === "MIN")
        addClass("justify-start");
      else if (primaryAxisAlignItems === "CENTER")
        addClass("justify-center");
      else if (primaryAxisAlignItems === "MAX")
        addClass("justify-end");
    }
    if (hasMoreChildren) {
      if (primaryAxisAlignItems === "SPACE_BETWEEN") {
        addClass("justify-between");
      } else if (isNumber2(node.itemSpacing) && node.itemSpacing !== 0) {
        const { itemSpacing } = node;
        if (itemSpacing < 0) {
          layoutMode === "HORIZONTAL" ? addClass("space-x", itemSpacing) : addClass("space-y", itemSpacing);
        } else {
          addClass("gap", itemSpacing);
        }
      }
    }
    const { paddingTop, paddingRight, paddingBottom, paddingLeft } = node;
    if (paddingTop > 0 || paddingRight > 0 || paddingBottom > 0 || paddingLeft > 0) {
      if (paddingTop === paddingBottom && paddingRight === paddingLeft && paddingTop === paddingLeft && paddingTop > 0)
        addClass("p", paddingTop);
      else {
        if (paddingTop === paddingBottom && paddingTop > 0)
          addClass("py", paddingTop);
        else {
          if (paddingTop > 0)
            addClass("pt", paddingTop);
          if (paddingBottom > 0)
            addClass("pb", paddingBottom);
        }
        if (paddingRight === paddingLeft && paddingRight > 0)
          addClass("px", paddingRight);
        else {
          if (paddingRight > 0)
            addClass("pr", paddingRight);
          if (paddingLeft > 0)
            addClass("pl", paddingLeft);
        }
      }
    }
  }
};
var addClassBackground2 = (node, addClass) => {
  try {
    const fills = [...node.fills].reverse().filter((fill) => fill.visible);
    if (fills.length === 0) {
      return;
    }
    if (fills.length === 1) {
      const fill = fills[0];
      if (fill.type === "SOLID") {
        addClass("bg", makeColor(fill.color, fill.opacity));
      } else if (fill.type === "GRADIENT_LINEAR") {
        addClass(`[background:${makeGradientLinear(fill)}]`.replace(/\s+/g, "_"));
      }
      return;
    }
    const gradients = fills.map((fill, index, A) => {
      if (fill.type === "SOLID" && index === A.length - 1) {
        return makeColor(fill.color, fill.opacity);
      }
      if (fill.type === "SOLID") {
        return `linear-gradient(0deg,${makeColor(fill.color, fill.opacity)} 0%,${makeColor(fill.color, fill.opacity)} 100%)`;
      }
      if (fill.type === "GRADIENT_LINEAR") {
        return makeGradientLinear(fill);
      }
      return "";
    }).filter(Boolean).join(",");
    addClass(`[background:${gradients}]`.replace(/\s+/g, "_"));
  } catch (e) {
  }
};
var addClassOverflow2 = (node, addClass) => {
  if (!node.children)
    return;
  const numChildren = node.children.filter((child) => child.visible).length;
  const hasChildren = numChildren > 0;
  if (hasChildren && node.clipsContent)
    addClass("overflow-hidden");
  else if (node.findOne((child) => child.type === "TEXT" && child.textTruncation === "ENDING")) {
    addClass("overflow-hidden");
    if (node.parent.layoutMode === "HORIZONTAL" || node.parent.layoutMode === "VERTICAL") {
      addClass("shrink");
    }
  }
};
var addOpacity2 = (node, addClass) => {
  if (node.opacity !== 1)
    addClass("opacity", makeNumber(node.opacity));
};
var wrapInstance2 = (node, code) => {
  var _a;
  const mainComponent = node.mainComponent || node;
  const mainComponentSet = mainComponent.parent && ((_a = mainComponent.parent) == null ? void 0 : _a.type) === "COMPONENT_SET" ? mainComponent.parent : mainComponent;
  const name = capitalize(mainComponentSet.name.trim().replace(/\s*\/\s*/g, "_").replace(/-|\s+/g, "_").replace(/\s+/g, "_"));
  return `
${COMMENT_START2} <${name}> ${COMMENT_END2}
${code}
${COMMENT_START2} </${name}> ${COMMENT_END2}
`;
};
var generateChild2 = (depth, children, callback) => __async(void 0, null, function* () {
  const contents = yield Promise.all((children || []).map((params) => generateCode2(params, depth + 1)));
  const content = contents.filter(Boolean).join("\n");
  return callback(content);
});
var generateComponentSet2 = (node, depth) => __async(void 0, null, function* () {
  const children = yield generateChild2(depth, node.children, (content) => content);
  return `<div ${CLASS_NAME2}="vbox gap(20)">
${children}
</div>`;
});
var generateInstance2 = (node, depth) => __async(void 0, null, function* () {
  const code = yield generateFrame2(node, depth);
  return wrapInstance2(node, code);
});
var generateFrame2 = (node, depth) => __async(void 0, null, function* () {
  const { addClass, cls } = createClassBuilder2();
  addClassPosition2(node, addClass);
  addClassWidth2(node, addClass);
  addClassHeight2(node, addClass);
  addClassFlexbox2(node, addClass);
  addClassBackground2(node, addClass);
  addClassBorder2(node, addClass);
  addClassBorderRadius2(node, addClass);
  addClassOverflow2(node, addClass);
  addEffectClass2(node, addClass);
  addOpacity2(node, addClass);
  if (node.itemReverseZIndex) {
    addClass("itemReverseZIndex");
  }
  const className = cls.join(" ");
  return yield generateChild2(depth, node.children, (content) => `<div ${CLASS_NAME2}="${className}">${indent(content)}</div>`);
});
var addClassFont2 = (node, addClass) => {
  var _a, _b, _c, _d, _e;
  if (node.fontSize) {
    addClass("text", node.fontSize);
  }
  const fill = (_a = node.fills) == null ? void 0 : _a.find((fill2) => (fill2 == null ? void 0 : fill2.visible) && (fill2 == null ? void 0 : fill2.type) === "SOLID");
  if (fill) {
    addClass("text", makeColor(fill.color, fill.opacity));
  }
  if (((_b = node.lineHeight) == null ? void 0 : _b.value) && ((_c = node.lineHeight) == null ? void 0 : _c.unit) !== "AUTO") {
    addClass("leading", unitValue(node.lineHeight));
  }
  if ((_d = node.letterSpacing) == null ? void 0 : _d.value) {
    addClass("tracking", unitValue(node.letterSpacing));
  }
  const fontFamilyName = (_e = node.fontFamily) == null ? void 0 : _e.replace(/\s/g, "-");
  if (fontFamilyName) {
    addClass(fontFamilyName);
  }
  if (node.fontWeight) {
    const fontStyleName = node.fontWeight.toLowerCase();
    switch (fontStyleName) {
      case "regular": {
        break;
      }
      default: {
        addClass("font-" + fontStyleName);
      }
    }
  }
  switch (node.textDecoration) {
    case "UNDERLINE": {
      addClass("underline");
      break;
    }
    case "STRIKETHROUGH": {
      addClass("line-through");
      break;
    }
  }
  switch (node.textCase) {
    case "UPPER": {
      addClass("uppercase");
      break;
    }
    case "LOWER": {
      addClass("lowercase");
      break;
    }
    case "TITLE": {
      addClass("capitalize");
      break;
    }
    case "SMALL_CAPS": {
      addClass("small-caps");
      break;
    }
    case "SMALL_CAPS_FORCED": {
      addClass("capitalize small-caps");
      break;
    }
  }
};
var generateText2 = (node) => __async(void 0, null, function* () {
  const { addClass, cls } = createClassBuilder2();
  addClassPosition2(node, addClass);
  const { textAutoResize, textTruncation, maxLines, textAlignHorizontal, textAlignVertical } = node;
  switch (textAutoResize) {
    case "WIDTH_AND_HEIGHT":
      break;
    case "HEIGHT":
      addClassWidth2(node, addClass);
      break;
    case "NONE":
      addClassWidth2(node, addClass);
      addClassHeight2(node, addClass);
      break;
  }
  const segments = node.getStyledTextSegments([
    "fontSize",
    "fontName",
    "fontWeight",
    "textDecoration",
    "textCase",
    "lineHeight",
    "letterSpacing",
    "fills",
    "textStyleId",
    "fillStyleId",
    "listOptions",
    "indentation",
    "hyperlink"
    // "openTypeFeatures"
  ]).map((segment) => {
    var _a, _b;
    return __spreadProps(__spreadValues({}, segment), { fontFamily: (_a = segment.fontName) == null ? void 0 : _a.family, fontWeight: (_b = segment.fontName) == null ? void 0 : _b.style });
  });
  const commonFontStyle = segments.reduce((prev, curr) => {
    const style = {};
    Object.keys(prev).forEach((key) => {
      if (JSON.stringify(prev[key]) === JSON.stringify(curr[key]))
        style[key] = prev[key];
    });
    return style;
  });
  addClassFont2(commonFontStyle, addClass);
  const HORIZONTAL_ALIGN = {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right",
    JUSTIFIED: "justify"
  };
  if (textAutoResize === "NONE") {
    if (textAlignVertical === "CENTER" || textAlignVertical === "BOTTOM") {
      addClass("flex");
      addClass("flex-col");
      if (textAlignVertical === "CENTER") {
        addClass("justify-center");
      }
      if (textAlignVertical === "BOTTOM") {
        addClass("justify-end");
      }
      addClass(`text-${HORIZONTAL_ALIGN[textAlignHorizontal]}`);
    }
  } else {
    addClass(`text-${HORIZONTAL_ALIGN[textAlignHorizontal]}`);
  }
  if (textTruncation === "ENDING") {
    if (maxLines > 1) {
      if (maxLines <= 6) {
        addClass(`line-clamp-[${maxLines}]`);
      } else {
        addClass(`line-clamp`, maxLines);
      }
    } else {
      addClass("truncate");
    }
  }
  if (node.opacity !== 1) {
    addClass("opacity", makeNumber(node.opacity));
  }
  const textContent = segments.length === 1 ? nl2br(node.characters) : segments.map((segment) => {
    const { addClass: addClass2, cls: cls2 } = createClassBuilder2();
    Object.keys(commonFontStyle).forEach((key) => {
      if (JSON.stringify(commonFontStyle[key]) === JSON.stringify(segment[key]))
        delete segment[key];
    });
    addClassFont2(segment, addClass2);
    const className2 = cls2.join(" ");
    return cls2.length ? `<span ${CLASS_NAME2}="${className2}">${nl2br(segment.characters)}</span>` : nl2br(segment.characters);
  }).join("");
  const className = cls.join(" ");
  return `<div ${CLASS_NAME2}="${className}">${textContent}</div>`;
});
var isAsset2 = (node) => {
  if (node.isAsset)
    return true;
  if (node.findChild && node.findChild((child) => child.isMask))
    return true;
  if (node.exportSettings && node.exportSettings.length) {
    if (node.parent.type === "SECTION" || node.parent.type === "PAGE") {
      return false;
    }
    return true;
  }
  return false;
};
var generateAsset2 = (node) => __async(void 0, null, function* () {
  let code = "";
  const cls = [];
  const { addClass } = createClassBuilder2(cls);
  try {
    if (isAbsoluteLayout2(node)) {
      addClassPosition2(node, addClass);
    }
    addClassWidth2(node, addClass);
    addClassHeight2(node, addClass);
    if (node.type === "ELLIPSE") {
      addClass("r", "100%");
    }
    if (figma.mode !== "codegen") {
      node.exportAsync({ format: "SVG_STRING", useAbsoluteBounds: true }).then((content) => {
        const inlineSVG = content.replace(/pattern\d/g, (a) => a + node.id.replace(/[^a-zA-z0-9]/g, "-")).replace(/\n/g, "");
        figma.ui.postMessage({ type: "assets", id: node.id, svg: inlineSVG });
      }).catch((e) => {
        console.warn("export failed: ", e);
      });
    }
    const className = cls.join(" ");
    code = `<figure ${CLASS_NAME2}="block ${className}" data-asset-id="${node.id}" src="${node.name}"></figure>`;
    if (node.type === "INSTANCE" || node.type === "COMPONENT") {
      code = wrapInstance2(node, code);
    } else {
      code = "\n" + code + "\n";
    }
  } catch (e) {
    console.error(e);
    console.error("asset error node:", node);
  }
  return code;
});
var generateCode2 = (node, depth = 0) => __async(void 0, null, function* () {
  if (node.visible === false)
    return "";
  if (isAsset2(node))
    return generateAsset2(node);
  else if (node.type === "COMPONENT" || node.type === "INSTANCE")
    return generateInstance2(node, depth);
  else if (node.type === "COMPONENT_SET")
    return generateComponentSet2(node, depth);
  else if (node.type === "TEXT")
    return generateText2(node);
  return generateFrame2(node, depth);
});
var getGeneratedCode2 = (node) => __async(void 0, null, function* () {
  const code = yield generateCode2(node, 0);
  return code.replace(/(\n\s*\n)+/g, "\n\n");
});

// src/libs/utils.ts
var OPTIONS2 = {
  "type": "adorablecss"
};
var isNumber2 = (value) => +value === +value;
var px = (value) => isNumber2(value) ? Math.round(value) + "px" : value;
var pad = (s) => s.length === 1 ? "0" + s : s;
var hex = (num) => pad(Math.round(num * 255).toString(16));
var makeInt = (num) => makeNumber(Math.round(num));
var makeNumber = (num) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0";
var makeHexColor = (r, g, b, a = 1) => {
  let hexColor = [r, g, b].map(hex);
  if (a === 1 && hexColor.every((h) => h[0] === h[1]))
    hexColor = hexColor.map((h) => h[0]);
  return hexColor.join("");
};
var makeColor = ({ r, g, b }, opacity = 1) => {
  if (OPTIONS2.type === "adorablecss")
    return makeAdorableStyleColor({ r, g, b }, opacity);
  if (OPTIONS2.type === "tailwindcss")
    return makeTailwindStyleColor({ r, g, b }, opacity);
};
var makeGradientLinear = (paint) => {
  const { gradientTransform, gradientStops } = paint;
  if (!gradientTransform || !gradientStops) {
    return "";
  }
  let gradientTransformData = {
    m00: 1,
    m01: 0,
    m02: 0,
    m10: 0,
    m11: 1,
    m12: 0
  };
  const delta = gradientTransform[0][0] * gradientTransform[1][1] - gradientTransform[0][1] * gradientTransform[1][0];
  if (delta !== 0) {
    const deltaVal = 1 / delta;
    gradientTransformData = {
      m00: gradientTransform[1][1] * deltaVal,
      m01: -gradientTransform[0][1] * deltaVal,
      m02: (gradientTransform[0][1] * gradientTransform[1][2] - gradientTransform[1][1] * gradientTransform[0][2]) * deltaVal,
      m10: -gradientTransform[1][0] * deltaVal,
      m11: gradientTransform[0][0] * deltaVal,
      m12: (gradientTransform[1][0] * gradientTransform[0][2] - gradientTransform[0][0] * gradientTransform[1][2]) * deltaVal
    };
  }
  const rotationTruthy = gradientTransformData.m00 * gradientTransformData.m11 - gradientTransformData.m01 * gradientTransformData.m10 > 0 ? 1 : -1;
  const data = gradientTransformData;
  const param = { x: 0, y: 1 };
  const rotationData = {
    x: data.m00 * param.x + data.m01 * param.y,
    y: data.m10 * param.x + data.m11 * param.y
  };
  const rad = makeNumber(Math.atan2(rotationData.y * rotationTruthy, rotationData.x * rotationTruthy) / Math.PI * 180);
  const gradientColors = gradientStops.map((gradient) => `${makeColor(gradient.color, gradient.color.a)}/${makeNumber(gradient.position * 100)}%`);
  return `linear-gradient(${rad}deg,${gradientColors})`;
};
var fourSideValues = (t, r, b, l) => {
  if (t === r && r === b && b === l)
    return [t];
  if (t === b && r === l)
    return [t, r];
  if (t !== b && r === l)
    return [t, r, b];
  return [t, r, b, l];
};
var makeFourSideValues = (t, r, b, l) => fourSideValues(t, r, b, l).join("/");
var stripZero = (value) => value.startsWith("0.") ? value.slice(1) : value.startsWith("-0.") ? "-" + value.slice(2) : value;
var unitValue = ({ value, unit }) => {
  value = stripZero("" + makeNumber(value));
  switch (unit) {
    case "PERCENT":
      return value + "%";
  }
  return value;
};
var capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
var nl2br = (str) => str.replace(/(\r\n|\n|\r|\u2028|\u2029)/g, "<br/>");
var indent = (code) => code ? "\n" + code.split("\n").map((line) => "  " + line).join("\n") + "\n" : "";

// src/codegen/index.ts
var getGeneratedCode3 = (node) => __async(void 0, null, function* () {
  if (OPTIONS2.type === "adorablecss")
    return getGeneratedCode(node);
  if (OPTIONS2.type === "tailwindcss")
    return getGeneratedCode2(node);
  return "";
});

// src/code.ts
OPTIONS2.type = "adorablecss";
var generateCodeWithUI = () => __async(void 0, null, function* () {
  const selection = figma.currentPage.selection;
  if (!selection.length)
    return;
  const node = selection[0];
  console.log("selectedNode: ", node);
  const code = yield getGeneratedCode3(node);
  const pageBackgroundColor = makeColor(figma.currentPage.backgrounds[0].color);
  const getBackgroundColor = (node2) => {
    var _a;
    return (_a = node2.fills) == null ? void 0 : _a.find((fill) => fill.visible && fill.type === "SOLID");
  };
  let it = node.parent;
  let backgroundColor = pageBackgroundColor;
  while (it) {
    const bg = getBackgroundColor(it);
    if (getBackgroundColor(it)) {
      backgroundColor = makeColor(bg.color, bg.opacity);
      console.log(backgroundColor);
      break;
    }
    it = it.parent;
  }
  const rect = node.absoluteBoundingBox;
  const width = Math.floor(rect.width) || 0;
  const height = Math.floor(rect.height) || 0;
  figma.ui.resize(width, height + 200);
  figma.ui.postMessage({ type: "code", code, backgroundColor, pageBackgroundColor, width, height });
});
if (figma.editorType === "dev" && figma.mode === "codegen") {
  figma.codegen.on("generate", (_0) => __async(void 0, [_0], function* ({ node }) {
    const code = yield getGeneratedCode3(node);
    return [{
      title: "HTML",
      language: "HTML",
      code
    }];
  }));
} else {
  figma.showUI(__html__);
  figma.on("selectionchange", generateCodeWithUI);
  figma.on("documentchange", generateCodeWithUI);
  void generateCodeWithUI();
}
