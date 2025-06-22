# AdorableCSS v2

> A Figma-first CSS framework for seamless design-code synchronization

AdorableCSS v2 brings Figma's design paradigms directly to your code with intuitive, design-friendly syntax.

## ✨ Features

- **Figma-First Syntax**: Direct mapping with Figma Auto Layout concepts
- **Zero Configuration**: Just include the script and start using
- **Automatic Detection**: Watches DOM changes and generates CSS on-demand
- **TypeScript Support**: Full type definitions included
- **Multiple Formats**: ESM, CommonJS, and IIFE builds available

## 🚀 Quick Start

### CDN Usage

```html
<!-- Via CDN (Auto-initializes) -->
<script src="https://unpkg.com/adorable-css-v2@latest/dist/adorable-css-v2.min.js"></script>

<!-- Or via jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/adorable-css-v2@latest/dist/adorable-css-v2.min.js"></script>
```

### NPM Installation

```bash
npm install adorable-css-v2
```

```javascript
// ES Module
import AdorableCSSV2 from 'adorable-css-v2'

// Initialize manually
AdorableCSSV2.init()

// Generate CSS for specific classes
const css = AdorableCSSV2.generate(['hbox(center)', 'w(300)', 'bg(#007bff)'])
```

## 📖 Syntax Guide

### Layout (Auto Layout)

```html
<!-- Horizontal layout with center alignment -->
<div class="hbox(center)">Content</div>

<!-- Vertical layout -->
<div class="vbox">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Perfect center -->
<div class="pack">Centered content</div>
```

### Sizing

```html
<!-- Fixed dimensions -->
<div class="400x300">Fixed size</div>

<!-- Responsive sizing -->
<div class="w(hug)">Fit content width</div>
<div class="w(fill)">Fill container width</div>
<div class="h(200)">Fixed height</div>

<!-- Aspect ratio -->
<div class="16:9">16:9 aspect ratio</div>
```

### Positioning

```html
<!-- Position types -->
<div class="absolute">Absolute position</div>
<div class="relative">Relative position</div>
<div class="fixed">Fixed position</div>

<!-- Coordinates -->
<div class="x(100) y(50)">Position at 100px, 50px</div>
<div class="z(10)">Z-index 10</div>
```

### Spacing

```html
<!-- Padding -->
<div class="p(16)">16px all sides</div>
<div class="p(16/24)">16px vertical, 24px horizontal</div>

<!-- Margin -->
<div class="m(8)">8px margin</div>

<!-- Gap -->
<div class="hbox gap(12)">Items with 12px gap</div>
```

### Visual Properties

```html
<!-- Background -->
<div class="bg(#007bff)">Blue background</div>
<div class="bg(#000.5)">Black with 50% opacity</div>

<!-- Border -->
<div class="b(1/#ccc)">1px gray border</div>
<div class="r(8)">8px border radius</div>

<!-- Colors -->
<span class="c(#333)">Dark text</span>
```

### Typography

```html
<!-- Font sizing -->
<h1 class="font(24/1.2/-1%/700)">Size/Line-height/Letter-spacing/Weight</h1>
<p class="font(16)">Just font size</p>

<!-- Text styles -->
<span class="bold">Bold text</span>
<span class="italic">Italic text</span>
<span class="underline">Underlined text</span>

<!-- Text alignment -->
<p class="text(center)">Centered text</p>
<p class="text(right)">Right aligned</p>

<!-- Text transform -->
<span class="uppercase">UPPERCASE</span>
<span class="lowercase">lowercase</span>
```

### Effects

```html
<!-- Shadows -->
<div class="shadow(sm)">Small shadow</div>
<div class="shadow(md)">Medium shadow</div>
<div class="shadow(lg)">Large shadow</div>

<!-- Opacity -->
<div class="opacity(.5)">50% opacity</div>

<!-- Blur -->
<div class="blur(4)">Blurred content</div>
```

### Complex Examples

```html
<!-- Figma-style card component -->
<div class="vbox w(300) p(24) r(12) bg(#fff) shadow(md) gap(16)">
  <img class="w(fill) h(200) r(8) cover" src="image.jpg" />
  <div class="vbox gap(8)">
    <h3 class="font(18/1.4/600) c(#000)">Card Title</h3>
    <p class="font(14/1.5) c(#666)">Card description text</p>
  </div>
  <button class="hbox(center) w(fill) h(48) r(8) bg(#007bff) c(#fff)">
    Click me
  </button>
</div>

<!-- Navigation bar -->
<nav class="hbox w(fill) h(64) px(32) bg(#fff) shadow(sm) gap(auto)">
  <div class="hbox gap(24)">
    <a href="#" class="font(16/500) c(#333)">Home</a>
    <a href="#" class="font(16/500) c(#333)">About</a>
  </div>
  <div class="hbox gap(16)">
    <button class="hbox(center) px(16) h(36) r(6) bg(#007bff) c(#fff)">
      Sign In
    </button>
  </div>
</nav>
```

## ⚙️ Configuration

### Manual Initialization

```javascript
// Disable auto-initialization
<script src="adorable-css-v2.min.js" data-auto-init="false"></script>

// Initialize with options
AdorableCSSV2.init({
  watch: true,        // Watch for DOM changes (default: true)
  target: '#app',     // Target element to watch (default: document)
  debug: false        // Enable debug logging (default: false)
})
```

### API Methods

```javascript
// Initialize the framework
AdorableCSSV2.init(options)

// Generate CSS for specific classes
const css = AdorableCSSV2.generate(['hbox', 'w(300)', 'bg(#007bff)'])

// Clean up and remove all styles
AdorableCSSV2.destroy()

// Get version
console.log(AdorableCSSV2.version) // "2.0.0-beta.1"
```

## 📦 Build Sizes

- **IIFE (CDN)**: ~6KB minified
- **ESM**: ~5KB minified  
- **CommonJS**: ~6KB minified

## 🆚 Comparison with v1

| Feature | v1 | v2 |
|---------|----|----|
| Figma Integration | ✓ | ✓✓ Enhanced |
| Auto Layout | ✓ | ✓✓ Native |
| CDN Support | ✓ | ✓✓ Improved |
| TypeScript | ✗ | ✓ |
| Bundle Size | ~8KB | ~6KB |
| Browser Support | ES5+ | ES2015+ |

## 🔧 Migration from v1

AdorableCSS v2 maintains compatibility with most v1 syntax while adding new Figma-inspired features:

```html
<!-- v1 syntax (still works) -->
<div class="w-300 h-200 bg-blue">

<!-- v2 syntax (recommended) -->
<div class="w(300) h(200) bg(#007bff)">
```

## 📋 Browser Support

- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 15+

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting PRs.

## 📞 Support

- 📖 [Documentation](https://developer-1px.github.io/adorable-css/)
- 🐛 [Issues](https://github.com/developer-1px/adorable-css/issues)
- 💬 [Discussions](https://github.com/developer-1px/adorable-css/discussions)

---

Made with ❤️ by the AdorableCSS team