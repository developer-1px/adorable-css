![](https://images.velog.io/images/teo/post/0282cd6a-7530-4674-ad56-2cea0b55b773/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-12%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.06.40.png)

# AdorableCSS

> ⚡️ Rapid On-Demand Atomic CSS framework

어떤 CSS가 좋은 CSS인지 모르겠나요?<br/>AdorableCSS를 이용해서 CSS 이름짓기와 좋은 구조에 대한 고민을 날려보세요!

### Why AdorableCSS?

초창기 웹 문서의 서식을 위해 만들어진 CSS는 무엇보다 훌륭한 디자인 도구였습니다.

하지만 웹은 문서가 아니라 아니라 어플리케이션의 형태로 발전했고 페이지가 아니라 이제는 프레임워크와 컴포넌트 기반의 개발 방식으로 변경이 되었습니다.

문서 서식을 위해 만들어진 CSS는 안타깝게도 현대 프레임워크 방식과는 잘 맞지않게 설계되었습니다. CSS는 전역적이며 모듈화되지 않고 Cascade와 상세도에 의해 언제나 부서지기 쉬운 상태가 되었습니다. 그리고
이를 해결하기 위해서 BEM과 같은 CSS 방법론등이 필요하게 되었지만 여전히 CSS개발은 어려운 작업이 되었습니다.

### Naming things is hard.

CSS가 어려운 이유는 뭘까요? 그것은 바로 이름짓기 문제입니다. CSS뿐만 아니라 모든 소프웨어 작업에서 꼭 필요한 좋은 이름을 짓는다는 것은 참 어려운 일입니다. CSS의 방법론이나 CSS를 잘 한다는 것은 이 좋은 이름을 짓는데서 출발하게 됩니다.

하지만 우리는 늘 ```.inner-wraper``` ```.wrap-container``` 와 같은 의미없는 이름들을 지으면서 괴로워합니다.

또한 ```.nav__title``` ```.nav__title--selected``` 어떤 식으로 구조를 짜야하는지 늘 혼란스러워 합니다.

### No more writing own your CSS!

그렇다면 아예 CSS를 작성하지 않는 방법은 어떨까요?

CSS의 잘못된 설계와 어플리케이션 개발방식이 맞지 않는 문제에서 더 이상 고민하지 마세요. 어플리케이션을 만드는 방식처럼 눈에 보이는 서식 그대로 HTML위에서 디자인기반으로 작업을 해보세요.

HTML과 CSS와 화면을 왔다갔다하며 새로고침을 할 필요도 없습니다. 직관적으로 HTML위에서 작성해보세요.

최적화는 걱정마세요! 필요한 CSS는 미리 다 함수로 만들어 두었습니다.

```html
<button class="hbox pack bg(#333) c(#fff) r(6) p(8/12)
               font(14/16/-1%) bold pointer">click me</button>
```

<button class="hbox pack bg(#333) c(#fff) r(6) p(8/12)
font(14/16/-1%) bold pointer">click me</button>

### Portable and Compact

미리 만들었다면 CSS의 용량은 매우 크지 아닐까요? No! 

CSS는 빌드타임에 최적화되어 필요한 양만큼만 생성이 됩니다. 뿐만 아니라 한번 만들어진 CSS는 모든 페이지에서 재사용이 되기에 기존 방식보다 훨씬 더 적는 양의 CSS 파일을 사용하게 됩니다. 웹 서비스의 크기가 늘어다도 CSS의 크기는 더 커지지 않습니다.

또한 HTML과 CSS가 하나의 파일로 관리되기 때문에 리팩토링에서도 자유롭습니다.

---

## Key Feature

> 1. AtomicCSS 방식으로 CSS 작업없이 HTML에서만 개발이 가능합니다.
1. 그러면서도 Selector, Peseduo Class등 CSS의 모든 기능을 사용할 수 있습니다.
1. 변경사항을 추적해서 실시간으로 CSS를 생성해서 최적의 코드를 만들어냅니다.
1. Learning-Curve를 고려하여 문법을 간결하고 직관적이면서도 세련되게 다듬었습니다.

---

## Syntax

```html
property(value) 
  - 가장 기본적인 형태로 프로퍼티(값)의 형태를 가집니다.
  ex) class="w(240) h(100) c(#fff.3)"

property(value/value/...) 
  - 클래스는 띄어쓰기로 구분되므로 기존 css에서 띄어쓰기 구분자들은 '/'로 구분합니다.
  ex) class="p(10/20) m(10/20/30/40)"

property
  - 값이 없는 프로퍼티는 ()를 사용하지 않습니다.
  ex) class="hbox absolute bold none"

prefix:property(value) 
  - 조건부 렌더링 prefix를 통해 상황별로 서식을 다르게 적용할 수 있습니다.
  ex) class="hover:bg(red) focus:ring(blue) .isSelected:underline mobile:vbox"

prefix:property(value)! or property(value)! or property!
  - 마지막에 !를 붙이면 !important 로 만들어줍니다.
  ex) class="active:bg(red)! b(0)! none! fixed!"
```

## Basic Properties

---

## Text

### Color

```c(red)``` ```c(#f00)``` ```c(#f00.5)``` ```c(255,0,0)``` ```c(255,0,0,.3)``` ```c(100%,0,0)```

### font(size/line-height/letter-spacing/word-spacing)

```font(20/1.4/-1%)``` ```font(20/1.4)``` ```font(20/-/-1%)``` 

```font-size(30)```
```line-height(1.5)```
```letter-spacing(-1px)```

```word-spacing(-1px)```

### font-family

```sans-serif``` ```serif``` ```cursive``` ```monospace```

### font-style

```bold``` ```italic``` ```underline``` ```strike```

### font-weight

```100``` ```200``` ```300``` ```400``` ```500``` ```600``` ```700``` ```800``` ```900```

```thin``` ```light``` ```medium``` ```regular``` ```bold``` ```heavy```

### text-align

```text(left)``` ```text(center)``` ```text(right)``` ```text(justify)```

```text(center+bottom)``` ```text(pack)```

### etc

```lowercase``` ```uppercase``` ```small-caps```

```monospace(number)```

### stroke

```text-shadow()```
	
---

## Box

### Size
```w(30)``` ```w(~30)``` ```w(30~)``` ```w(20~30)```

```h(30)``` ```h(~30)``` ```h(30~)``` ```h(20~30)```

### Radius
```r(10)``` ```r(fill)``` ```r(100%)```

### Fill

```bg(#B75959)``` ```bg(linear-gradient(#000,#fff))``` ```bg(/image.png)```

```cover``` ```contain```

### Stroke

```b(#000)``` ```b(1/#000)``` ```b(1/solid/#000)```

```bt(#000)``` ```br()``` ```bb()``` ```bl()```

```outline()```
```ring()```

### Effects

```box-shadow(0/4/4/#000.25)```

```box-shadow(inset/0/4/4/#000.25)```

```blur(4)```

```backdrop-blur(4)```

### Clip content

```clip``` ```overflow(hidden)```

```nowrap...``` ```line-clamp(3)```

### Scroll

```scroll``` ```scroll-x``` ```scroll-y```

---

## Layout

### Flexbox

```hbox``` ```vbox``` ```pack```

### hbox

```hbox(top)``` ```hbox(top+center)``` ```hbox(top+right)```

```hbox(left)``` ```pack``` ```hbox(right)```

```hbox(bottom)``` ```hbox(bottom+center)``` ```hbox(bottom+right)```

```hbox(fill)```

### vbox

```vbox(top)``` ```vbox(top+center)``` ```vbox(top+right)```

```vbox(left)``` ```vbox pack``` ```vbox(right)```

```vbox(bottom+left)``` ```vbox(bottom+center)``` ```vbox(bottom+right)```

### Autolayout (direaction, gap, padding)

```p(10)``` ```p(10/20)``` ```p(10/20/30)``` ```p(10/20/30/40)```

```gap(10)``` ```gap(10/20)```

```flex``` ```flex(1)``` ```flex(2)```

### Position

```static``` ```relative``` ```absolute``` ```fixed``` 

```sticky``` ```sticky-top``` ```sticky-right``` ```sticky-bottom``` ```sticky-left```

```layer()``` ```layer(top)``` ```layer(top+right)```

```top()``` ```right()``` ```bottom()``` ```left()``` ```x()``` ```y()```

```z()```

### Visibility

```none```
```hidden``` 
```visible``` 
```blind```
```opacity(.5)```

---

## Reset CSS

```css
*,:after,:before{margin:0;padding:0;font:inherit;color:inherit;box-sizing:border-box;flex-shrink:0;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
html,body{height:100%;}
img,picture,video,canvas{display:block;max-width:100%;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}
```