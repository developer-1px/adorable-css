# Adorable CSS

> ✨ atomic dynamic responsive css generator.


## Usage

```
import "@adorable.css"

<button class="w(240) h(38) r(16) p(20) m(10) pack">click me</button>


@adorable.css
/* auto generated */
.w\(240\){width: 240px;}
.h\(38\){height: 38px;}
.r\(16\){border-radius: 16px;}
.p\(20\){padding: 20px;}
.m\(10\){margin: 10px;}
.pack{display: flex; align-items: center; justify-content: center;}
```


## What is Adorable CSS?

- "Utility First CSS" 패러다임
- tailwind css를 영감을 받아 만들게 되었습니다.
- tailwind css의 컨셉과 제안은 매력적이었나 현업에서는 사용하기 힘들다는 것을 깨달았습니다.
- 이미 만들어진 혹은 새롭게 만들어야 하는 디자이너에게 미리 협의를 해야만 서로 사용이 가능합니다.
- purgeCSS가 있다고 하지만 사용하지 않을 많은 class를 만들 필요가 없습니다.
- 반대로 미리 정의되지 않은 수치나 색상등은 사용할 수가 없었습니다.


## Why?

- Portable: css 없이 HTML만으로 UI를 만들 수 있어 이동과 보관이 자유롭습니다.
- Fast Writing 
- Compact
- Easy for Auto HandOff generator
- JS 플러그인을 직접 개발할 수 있어 유연한 확장성을 가진다.


## How?
- 반대로 class에 정의할때마다 필요한 css를 자동으로 생성하는 방식으로 동작합니다.
- acss.io에 영감을 받았습니다.  




## Syntax

```
property -> hbox, absolute, bold, none, ...
property! -> none!, fixed!
property(value) -> w(240) h(100) c(#fff.3)
property(value/value) -> p(10/20) font(12/18/-1%) m(10/20/30/40)
selector:property(value1/value2) -> hover:bg(#000.04), sm:none, !mobile:none 

selector:
property
(value)
!
```


## Ground Rule!

- 가능한 property를 축양해서 쓰도록 한다.
- 단, 축약어를 통해 유추가 되지 않을 경우에는 풀어쓰는 것을 원칙으로 한다.
- 가급적 bootstrap이나 tailwind 등에서 이미 쓰고 있는 이름을 가급적 사용한다.
- *figma의 속성과 1:1이 될 수 있도록 한다.