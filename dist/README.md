# Adorable CSS

> ✨ atomic dynamic responsive css generator.

## Why Adorable CSS?

- "Utility First CSS" 패러다임
- tailwind css를 영감을 받아 만들게 되었습니다.
- tailwind css의 컨셉과 제안은 매력적이었나 현업에서는 사용하기 힘들다는 것을 깨달았습니다.
- 이미 만들어진 혹은 새롭게 만들어야 하는 디자이너에게 미리 협의를 해야만 서로 사용이 가능합니다.
- purgeCSS가 있다고 하지만 사용하지 않을 많은 class를 만들 필요가 없습니다.
- 반대로 미리 정의되지 않은 수치나 색상등은 사용할 수가 없었습니다.


## How?
- 반대로 class에 정의할때마다 필요한 css를 자동으로 생성하는 방식으로 동작합니다.
- acss.io에 영감을 받았습니다.  


```
<button class="w(240) h(38) r(16) p(20) m(10) pack">click me</button>

atoms.css
.w\(240\){width: 240px;}
.h\(38\){height: 38px;}
.r\(16\){border-radius: 16px;}
.p\(20\){padding: 20px;}
.m\(10\){margin: 10px;}
.pack{display: flex; align-items: center; justify-content: center;}
```


## Syntax

