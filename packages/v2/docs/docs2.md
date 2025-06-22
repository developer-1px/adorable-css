# AdorableCSS v2의 문법 체계

## 문법 체계 원칙

### 1. 기본 문법 구조

```
property(value)              // 기본 형태
property                     // 값이 고정된 속성
property(val1/val2/...)      // 복수 값 (띄어쓰기 대체)
selector:property(value)     // 조건부 적용
selector:prop1(val)+prop2    // 복합 조건부
property(value)!             // !important
```

### 2. Figma 매핑 원칙

- **Layout** → Figma Auto Layout 그대로
- **Constraints** → Figma Constraints 시스템
- **Effects** → Figma Effects 패널
- **Typography** → Figma Text 속성

---

## 완성된 문법 체계

### Layout (Auto Layout)

#### Direction & Alignment

```
hbox              // Horizontal (default: top+left)
vbox              // Vertical (default: top+left)
wrap              // Wrap enabled

// Alignment combinations
hbox(center)      // center+middle
hbox(left+top)    // 명시적 정렬
vbox(right+bottom)
wrap(middle)

// Figma alignment values
- Main axis: left, center, right
- Cross axis: top, middle, bottom, fill
```

#### Spacing

```
gap(16)           // Item spacing
gap(16/24)        // Row gap / Column gap (wrap 시)
p(16)             // Padding all
p(16/24)          // Vertical / Horizontal
p(16/24/16/24)    // Top / Right / Bottom / Left
```

### Size & Constraints

#### Dimensions

```
// Fixed size
300x200           // width x height
w(300)            // width only
h(200)            // height only

// Responsive sizing (Figma-style)
w(hug)            // Hug contents
w(fill)           // Fill container
h(hug)
h(fill)

// Min/Max constraints
w(300..)          // min-width: 300px
w(..600)          // max-width: 600px
w(300..600)       // min & max
w(fill/300..600)  // fill with constraints

// Aspect ratio
16:9              // aspect-ratio
4:3
1:1
```

#### Position Constraints (Figma Constraints)

```
// Absolute positioning
(0,0)             // left:0, top:0
(..0,..0)         // right:0, bottom:0
(10..10,0)        // left:10, right:10, top:0
(center,center)   // transform centered

// Layer shortcuts
layer             // absolute + inset:0
layer(top)        // absolute + top aligned
layer(top+left)   // absolute + top-left aligned
```

### Visual Properties

#### Background & Border

```
bg(#000)          // Background color
bg(#000.5)        // With opacity
bg(linear/0deg/#000/#fff)     // Gradient
bg(radial/#000/#fff)

b(#000)           // Border all sides
b(1/#000)         // Width + color
b(1/#000/solid)   // Width / color / style
bt(1/#000)        // Border top only
br(1/#000)        // Border right
bb(1/#000)        // Border bottom
bl(1/#000)        // Border left
```

#### Radius

```
r(8)              // All corners
r(8/16)           // Top-bottom / left-right
r(8/16/8/16)      // TL / TR / BR / BL
r()           // border-radius: 9999px
```

#### Effects (Figma Effects Panel)

```
// Shadow
shadow(sm)        // Predefined small
shadow(md)        // Medium
shadow(lg)        // Large
shadow(0/4/16/#000.1)   // x/y/blur/color

// Blur
blur(4)           // Background blur
blur(layer/4)     // Layer blur
blur(bg/4)        // Backdrop blur

// Opacity
opacity(.5)       // Element opacity
opacity(0)        // Hidden but keep space
```

### Typography

#### Font Properties

```
font(16)                    // Size only
font(16/24)                 // Size / Line height
font(16/24/-2%)             // Size / Line height / Letter spacing
font(16/24/-2%/500)         // Size / Line height / Letter spacing / Weight
font(Inter/16/24/-2%/500)   // Family / Size / Line height / Letter spacing / Weight

// Shortcuts
14                 // font-size: 14px
16/24              // font-size + line-height
bold               // font-weight: 700
medium             // font-weight: 500
light              // font-weight: 300
```

#### Text Alignment

```
text(left)         // Text align
text(center)
text(right)
text(justify)

// Vertical alignment (in flexbox)
text(top)          // align-items: flex-start
text(middle)       // align-items: center
text(bottom)       // align-items: flex-end
```

#### Text Decoration

```
underline          // text-decoration
strike             // line-through
italic             // font-style
uppercase          // text-transform
lowercase
capitalize

c(#000)            // Color
c(#000.5)          // Color with opacity
```

#### Text Overflow

```
nowrap             // white-space: nowrap
truncate           // Text ellipsis (1 line)
max-lines(3)       // Line clamp (multi-line ellipsis)
break(word)        // word-break
break(all)
```

### Advanced Features

#### Scroll & Overflow

```
scroll             // overflow: auto
scroll(x)          // overflow-x: auto, overflow-y: hidden
scroll(y)          // overflow-y: auto, overflow-x: hidden
clip               // overflow: hidden
visible            // overflow: visible

// Scroll behavior
scroll(smooth)     // scroll-behavior: smooth
scrollbar(thin)    // Thin scrollbar
scrollbar(none)    // Hide scrollbar

// Scroll snap
snap               // Default snap container
snap(x)            // Horizontal snap
snap(y)            // Vertical snap
snap(mandatory)    // Snap type
snap(proximity)
snap-item          // For child items
```

#### Transform

```
rotate(45)         // Rotation in degrees
rotate(-45)
scale(1.5)         // Scale uniformly
scale(1.5/2)       // Scale X/Y
translate(10/20)   // Translate X/Y

// Transform origin
origin(center)
origin(top+left)
```

#### Interactive States

```
// Pseudo-classes
hover:bg(#f00)
active:scale(.95)
focus:b(2/#000)
disabled:opacity(.5)

// Media queries
sm:vbox            // Mobile: vertical
md:hbox            // Tablet: horizontal
lg:gap(32)         // Desktop: larger gap

// Custom states (via parent class)
.dark:bg(#000)
.selected:b(2/blue)
```

#### Z-Index & Stacking

```
z(1)               // z-index: 1
z(10)
z(auto)
z(top)             // z-index: 9999
```

### Utility Classes

#### Display

```
block
inline
inline-block
none               // display: none
hidden             // visibility: hidden
```

#### Position

```
relative
absolute
fixed
sticky
static
```

#### Cursor

```
cursor(pointer)
cursor(grab)
cursor(not-allowed)
cursor(text)
```

## 사용 예시

```html
<!-- Figma Card Component -->
<div class="vbox(fill) w(fill) p(24) r(12) bg(#fff) shadow(md) gap(16)">
	<img class="w(fill) h(200) r(8) cover" src="..." />
	<div class="vbox gap(8)">
		<h3 class="font(Inter/20/28/-1%/600) c(#000)">Card Title</h3>
		<p class="font(14/20) c(#666) clamp(2)">Description text...</p>
	</div>
	<button class="hbox(center) w(fill) h(48) r(8) bg(blue) c(#fff) hover:bg(darkblue) active:scale(.98)">Click me</button>
</div>

<!-- Figma Auto Layout Examples -->
<nav class="hbox() gap(auto) w(fill) h(64) px(32) bg(#fff) shadow(sm)">
	<div class="hbox gap(32)">...</div>
	<div class="hbox gap(16)">...</div>
</nav>
```

이렇게 정리된 문법은 Figma의 디자인 시스템과 1:1로 매핑되면서도, CSS의 표준을 따르는 일관성 있는 체계를 갖추었습니다. 특히 Auto Layout, Constraints, Effects 등 Figma의 핵심 개념들을 그대로 코드로 옮길 수 있어 디자이너와 개발자 간의 소통이 매우 원활해질 것입니다.
