# postcss-adorable-css

[PostCSS] plugin adorable-css.

[PostCSS]: https://github.com/postcss/postcss

## Try It Online
![AdorableCSS](https://images.velog.io/images/teo/post/dde8bc56-15d0-4fc0-a15a-f3c204f50494/AdorableCSS.gif)

- try it online [here](https://developer-1px.github.io/adorable-css/).

#### Don't write your own css. Just write down in HTML.

```tsx
// Button.tsx
export const Button = () =>
  <button class="hbox pack bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000)! active:b(#000.2)">click me</button>
```

#### ... and auto generated css code on realtime! 😎

```css
/* @adorable.css */
*{margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}
.c\(\#fff\){color:#fff;}
.bg\(\#333\){background-color:#333;}
@media (hover:hover){.hover\:bg\(\#555\):hover,.hover\:bg\(\#555\).\:hover{background-color:#555;}}
html .active\:bg\(\#000\)\!:active,html .active\:bg\(\#000\)\!.\:active{background-color:#000!important;}
.font\(14\/16\/-1\%\){font-size:14px;line-height:16px;letter-spacing:-0.01em}
.bold{font-weight:700;}
.p\(8\/12\){padding:8px 12px;}
.b\(\#000\.2\){border:solid 1px rgba(0,0,0,.2);}
html .active\:b\(\#000\.2\):active,html .active\:b\(\#000\.2\).\:active{border:solid 1px rgba(0,0,0,.2);}
.r\(6\){border-radius:6px;}
.hbox{display:flex;flex-flow:row;align-items: center;}
.pack{display:flex;align-items:center;justify-content:center;}
.pointer{cursor:pointer;}
.transition\(\.2s\){transition:all .2s;}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-adorable-css
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs](https://www.npmjs.com/package/adorable-css)
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-adorable-css'),
    require('autoprefixer')
  ]
}
```

**Step 4:** Add the @adorable.css; to your global css file:

```diff
/* globals.css */
+ @adorable.css;

html, body {...}
```


[official docs]: https://github.com/postcss/postcss#usage
