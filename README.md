# 🚧 AdorableCSS v2.0.0

> "세상에서 가장 Figma스러운 CSS 프레임워크"
> A Figma-first CSS framework for seamless design-code synchronization

![](https://camo.githubusercontent.com/a5f979d867a80dd11835504b82d631212aaedc473970360f6287b07146154328/68747470733a2f2f696d616765732e76656c6f672e696f2f696d616765732f74656f2f706f73742f30323832636436612d373533302d343637342d616435362d3263656130623535623737332f254531253834253839254531253835254233254531253834253846254531253835254233254531253834253835254531253835254235254531253836254142254531253834253839254531253835254133254531253836254241253230323032322d30312d313225323025453125383425384225453125383525413925453125383425384325453125383525413525453125383625414225323031322e30362e34302e706e67)

## What's New in AdorableCSS 2.0

**Figma-First Approach**
- Direct mapping with Figma Auto Layout
- Designer-friendly syntax
- Real-time sync capabilities

## Core Concept

기존에는 CSS의 사고관을 중심으로 Utiliy class방식과 JIT를 중점으로 만들었지만 이제는 tailwindCSS가 대세가 되었습니다. 단순히 문법이 더 좋다는 이유만으로는 채택을 해야할 이유가 부족합니다.

AdorableCSS v2는 이에 대한 차별화와 브랜딩을 css가 아니라 Figma에 두려고 합니다.
이제 Figma는 디자인을 하기 위한 표준도구로 자리잡았으며 Figma가 정립한 레이아웃과 컴포넌트들을 CSS보다 덜 복잡하지만 충분한 역할을 하고 있습니다.

Figma가 디자인한 내용을 가져오고 또 개발자가 작업한 내용을 Figma에 반영하기 위해서는 figma - tailwindCSS에서는 2개의 언어를 서로 다른 언어를 각기 배워야 합니다.

온전히 Figma의 방식을 그대로 맞추어 디자이너가 작업한 그대로, 개발자가 구현한 그대로 동기화 될 수 있도록 만들고자 기존의 좋은 문법은 계승하고 CSS에 맞춰진 체계없던 문법을 정돈하려고 합니다.

### With UnoCSS

그동안 AdorableCSS가 막혔던 부분은 다앙한 생태계에서 활용하기가 어렵다는 점이었습니다. 핵심 컨셉은 사용하기 편리한 문법과 체계에 있기에 다양한 프레임워크에서 활용할 수 있도록 하고자 Custom Atomic CSS를 만들수 있는 UnoCSS 플러그인 방식으로 만드려고 하고 있습니다. 이제 언제든지 새로운 환경에서 검증받은 방식으로 dev와 production에서 쓸 수 있도록 하려고 합니다.

### no-conflict tailwindCSS

일부 tailwindCSS와는 같은 이름인데 다른 서식을 취하거나 reset등이 겹치면서 함께 혼용하는 경우 문제가 되곤했습니다. tailwindCSS의 대체제나 경쟁자 포지션이 아닌만큼 기존에 이미 사용되고 있는 라이브러리와는 충돌하지 않도록 하려고 합니다.

```
ex) tailwindCSS
flex -> display: flex

ex) adorableCSS
flex -> flex: 1
```


### TBD: VSCODE IDE Plugin, Prettier Plugin...

실제 개발에서 사용할 수 있도록 개발에서 쓸 수 있는 플러그인이나 lint등을 만들어서 활용할 수 있도록 할 예정입니다.


---
# Syntax

```
selector:prop(value)!
```


## Position

```
absolute
fixed

x(100)
y(100)
z(2)

rotate(45)
```

## Auto Layout
```
hbox(center) - Figma의 수평 Auto Layout
vbox(top)    - Figma의 수직 Auto Layout
gap(16)      - Auto Layout spacing
p(16)        - Auto Layout padding
```

## Sizing
```
400x300      - Fixed Size Both

w(300)       - Fixed width
w(hug)       - Hug content
w(fill)      - Fill container
w(fill/max:200) - with min-widhth
w(fill/min:200/max:400) - with min-width, max-width

h(...)       - Height variants
```

## Constraints
```
x(100)				- 왼쪽 정렬
x(center)	        - 중앙 정렬
x(center+40)	    - 중앙기준에서 40px
x(,100)				- 오른쪽 정렬
x(10,100)			- 좌,우 정렬
x(10%,100%)			- Scale

y(...)	        	- x와 동일
```


## Visual
```
r(8)            - Radius
bg(#000)        - Background
b(#000)			- Border (TBD)
o(#000)			- Outline (TBD)
```

## Appearance

```
blur(10)			- Blur effect
box-shadow()		- Shadow effect
opcacity(.5)		- 
clip				- Overflow:hidden
```


---
## Text

```
font(16/1.5/-1%/600)    - Size/LineHeight/LetterSpacing/Weight

bold
italic
underline
strike

lowercase
uppercase

c(#000)  		   	    - Color

text(right)
text(middle)
text(bottom+justify)

nowrap nowrap...
max-lines(3)
```


## Etc (TBD)

### Scroll
```
scroll                // overflow: auto (양방향)
scroll(x)             // overflow-x: auto
scroll(y)             // overflow-y: auto
scroll(smooth)        // scroll-behavior: smooth
clip                 // overflow: clip
```

### ScrollBar
```
scrollbar(none)       // 스크롤바 숨김
scrollbar(auto)       // 스크롤바 기본
scrollbar(always)       // 스크롤바 기본
scrollbar(thin)       // 얇은 스크롤바
```

### Scroll Snap
```
hslide                // 가로 슬라이드 (center + mandatory)
vslide                // 세로 슬라이드 (center + mandatory)

// 정렬
hslide(start)         // 시작점 정렬
hslide(end)           // 끝점 정렬

// 스냅 강도
hslide(soft)          // 부드러운 스냅 (proximity)

// 패딩/마진
hslide(p:20)          // 양쪽 패딩 20px
hslide(p:20/40)       // 좌우 패딩 20px/40px
hslide(m:20)          // 양쪽 마진 20px
hslide(m:20/40)       // 좌우 마진 20px/40px

// 복합 사용
hslide(start/soft/p:20)
```


### TBD (not yet)
translate rotate scale
grid
cursor
inert
disabled