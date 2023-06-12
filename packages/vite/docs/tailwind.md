# 어쩌다 AdorableCSS를 만들게 되었나요?

1. TailwindCSS를 현업에서 사용하지 못했던 이유
2. 그래서 이렇게 만들었습니다.

---

### TailwindCSS를 현업에서 사용하지 못했던 이유

TailwindCSS를 현업에서 쓰기위해 적용을 해보니 당시에는 몇가지 문제들이 있었습니다.
TailwindCSS는 아래와 같이 크기와 색상을 미리 만들어서 제공을 하였습니다.

![](https://velog.velcdn.com/images/teo/post/df3e1c91-52b6-4319-bea9-9d77630a1e0a/image.png)

![](https://velog.velcdn.com/images/teo/post/24dc0f4b-0640-4e70-82b1-78c7061b9395/image.png)

하지만 저는 대부분 실전에서 디자이너가 만들어 달라는대로 작업을 해야했기에 **미리 지정된 크기와 색상으로만 작업 할 수는 없었습니다.** 

**TailwindCSS는 미리 정해둔 색상과 정해진 규격에 맞춰서 개발을 하는 것이 좋은 것** 이라고 설명을 하고 있었지만
실전에서는 디자인의 수정과 개발의 작업을 불편하게 만들어 줄 뿐이었습니다.

TailwindCSS가 주장하는 바가 곧 디자인 시스템이고 이는 틀린말은 아니었으나, 실제로 디자인 시스템이 갖춰지기까지에는 상당한 시간이 걸리고,
그 시간동안은 디자인 시스템이 갖춰지지 않은 상태에서 개발을 해야하는데 TailwindCSS는 이러한 상황에서는 적합하지 않았습니다.

뿐만 아니라 w-12는 12px이 아니라 48px로 당시 머터리얼 디자인에서 사용하던 4px grid 기반의 체계는 내가 원하는 크기를 만들기 위해서 계속 계산을 해서 개발 과정을 멈칫거리게 만들었습니다.

**내가 원하는 수치와 색상을 그대로 사용할 수 있으면 좋겠다**라는 생각이 들었고 이것이 AdorableCSS를 만들어야겠다는 생각이 들게 만들었습니다.

> Tailwind도 현재는 3.0 이후로 **JIT(Just-In-Time)이라는 방식**이 나오면서 이러한 부분을 해결을 하고 있습니다만, 여전히 w-12는 12px이 아니며 복잡해지는 문법으로 인해 러닝커브가 발생하고 있습니다.

대부분의 inline class이름은 직관적이었으나, 몇몇 이름들은 - 특히 flexbox는 - CSS 스펙과 이름이 미묘하게 달라서 매번 문서를 찾아 봐야했어요.
CSS를 많이했던 저의 개발 경험과는 조금 어긋남을 느꼈습니다.
 
무엇보다 **tailwindCSS는 내가 알고 있는 CSS의 모든 기능을 다 제공하는 것은 아니었어요.** 조건부 class 서식이나, Child Selector를 쓸 수도 없었습니다.
코드 가독성이 떨어지는 부분들은 inline이라서가 아니라 이렇게 조건부 class들이라는 것들도 알게 되었습니다.

결국 TailwindCSS가 **기존 CSS 개발경험을 완전히 대체를 할 수 없다보니** 디자인이 없는 프로토타입에는 유리하나
디자이너와 주로 협업을 하는 현업환경에서 쓰기에는 상당히 부담이 되었습니다.
 
그렇다고 TailwindCSS가 완전히 싫은 것은 아니었습니다. 어떤 부분에는 꽤 괜찮은 점들도 있었고, Atomic CSS 패러다임 자체는 괜찮은 것 같았습니다. 

> **'TailwindCSS가 컨셉과 패러다임은 참 좋은 것 같은데 나한테는 맞지 않는 옷인듯 하다. 이 참에 나한테 맞는 AtomicCSS 프레임워크를 만들수 있지 않을까?'**
라는 생각에 "내가 현업에서 쓸 수 있는 CSS 프레임워크" 라는 컨셉으로 한번 만들어보기로 하였습니다!

---

## AdorableCSS는 뭐가 다를까?

Atomic CSS 패러다임은 사실 괜찮은건데 TailwindCSS가 아쉬운거라면 더 괜찮은 AtomicCSS 라이브러리를 만들 수 있지 않을까?

> #### TailwindCSS의 아쉬운 점 정리
1. ~~내가 원하는 색상과 수치를 직접 입력 할 수가 없다.~~ (JIT 3.0 출시) 
2. ~~용량이 크다. purge를 하면 되지만 속도가 느리다.~~ (JIT 3.0 출시) 
3. w-16은 16px이 아니다. 4배수 계산 이슈.
4. 미묘하게 아쉬운 스펙과 문법 = 러닝커브 발생 (특히 flexbox)
5. 조건부 서식등으로 HTML이 복잡해진다.
6. CSS 기능이 부족하다.

최초 제일 핵심 차별화가 될거라고 기대했던 부분은 지금은 tailwind에서 JIT를 쓰면서 해결이 되었습니다. 그럼에도 tailwindCSS를 쓰다보면 뭔가 멈칫멈칫 거리게 되는 부분들이 있었습니다.

그 이유가 무엇일지 생각해보니 내가 CSS와 HTML와 JS를 코딩하던 습관들과 미묘하게 다른 구성들이 있었기에 최대한 **직관적이고 더 간결한 문법을 가질 수 있도록** 만들어보고 싶었습니다.

또한 두번 배우지 않고 내가 알고 있는 CSS 지식을 가급적 그대로 쓸 수 있도록 하기 위해서 CSS의 모든 기능을 제공하고 싶었습니다.

### 🤔 내가 원하는 CSS는 어떤 CSS일까?

- 러닝커브를 더 낮추고 싶었다.
- 수치나 값이 눈에 잘 보였으면 좋겠다. 
- 타이핑은 많이 하지 않았으면 좋겠다.
- 가독성이 더 높았으면 좋겠다.
- 손에 익은 타이핑 방식이면 좋겠다.
- px이 근본이었으면 좋겠다.

이러한 생각들을 바탕으로 새로운 문법을 가진 CSS Framework를 만들어 보았습니다. 
AdorableCSS의 문법이 탄생하게 된 배경과 생각을 따라가면서 아주 쉽게 문법을 배울 수 있게 되기를 바랍니다.

### 어떻게 해서 지금의 문법이 탄생했는가?

러닝커브를 최소화하기 위해서는 CSS의 문법과 최대한 유사하게 만드는 게 좋겠다고 생각을 했습니다. 그래서 처음에는 inline-style을 쓰는 것과 비슷한 형태로 만들어보고자 했습니다.

#### 1

`style="font: 18px/1.5 bold; position: absolute; top: 0; margin: 0 20px; color: red;"`

class이름은 띄어쓰기를 분리가 되므로 하나의 속성을 나타내기 위해서 띄어쓰기를 하면 안되기 때문에 

- `;`를 대신 띄어쓰기로 구분을 하고, 기존 띄어쓰기는 `/`로 대체하였습니다. 
- 그리고 `px단위는 생략`을 할 수 있도록 해서 조금 더 간결하게 쓸 수 있도록 해보았습니다.

#### 2

`class="font:18/1.5 bold position:absolute top:0 margin:0/20 color:red"` 

위와 같이 작성을 해보니 2가지가 눈에 밟혔습니다.

- `:` 다음에 습관적으로 스페이스를 누르는 경우가 빈번했습니다. `font: 18` (X)
- 숫자나 값이 눈에 잘 들어오지 않는다. `top:0 margin:0/20` 

#### 3

그래서 `()표기법`을 통해 값을 조금 더 잘보이게 하면서 띄어쓰기 습관에 문제가 되지 않던 문법을 선택하였습니다.

`class="font(18/1.5) bold position(absolute) top(0) margin(0/20) color(red)"` 



#### 4

class명이 너무 길어지는 것 같아서 이름들을 최대한 줄여서 작성을 해보았습니다. 

`class="f(18/1.5) b abs t(0) m(0/20) c(red)"`

1~2글자로 줄여도 `m(20) c(red)`와 같이 가독성 측면에서도 더 나아지는 것이 있는가 하면, 반대로 `f(18) t(0)` `abs`와 같이 글자수를 줄이면 의미파악이 잘 되지 않는 것 등이 있었습니다.

타이핑을 줄이면서도 CSS를 새로 배운지 않게 할 수 있도록 중간점을 찾는 고민을 많이 하면서 다음과 같은 규칙을 선정하였습니다.

1. 이미 1~2글자로 줄여서 부르고 있어서 **짧게 축약해도 그 속성이 바로 떠오르는 것들은 줄여서 쓴다.** 그 외에는 그대로 쓴다. 

`class="w(32) h(32) r(8) p(10/16) m(4/8/10/12) z(9999) bg(#000) c(#fff) b(#480ff)"`

- w = width
- h = height
- r = border-radius
- m = margin
- b = border
- p = padding
- z = z-index 
- bg = background
- c = color
- mt = margin-top
- bbw = border-bottom-width
- pr = padding-right

2. **유니크한 CSS value거나 속성을 유추할 수 있는 값이라면 값만 쓴다.**

ex) `.inline` `.block` `.none` `.visible` `.hidden` `.bold` `.underline` `.100` `.200` `.absolute` `.relative` `.sticky` `.fixed` `.border-box` `.content-box` `.space-between` `.space-around` `.pointer`



#### 5

CSS의 모든 다른 모든 기능들인 Selector와 Pseudo-class, Pseudo-element, Media Query, Keyframes, Variables 등을 모두 쓸 수 있도록 제공하고 싶었습니다.
그래서 조금 더 복잡한 CSS 구문들을 고민해보았습니다.

`div.selected:hover { background: rgba(255,170,0,.5) !important; color: var(--primary);}`

위와 같은 구문을 최대한 구조는 유지하면서도 간결하게 쓸 수 있도록 해보았습니다.

`<div class=".selected:hover:bg(#fa0.5)! c(--primary)">`

이러한 전개를 통해서 현재의 AdorableCSS의 기본적인 큰 문법의 틀이 완성되었습니다.

![](https://velog.velcdn.com/images/teo/post/3a5b06a8-45a4-4613-9d22-6920cc62d2df/image.png)

최대한 내가 쓰고 있던 CSS의 큰 틀을 흔들지 않고 몇가지 추론 가능한 문법을 통해서 문법이 완전히 같지 않지만 충분히 유추가 가능하도록 만들어보았습니다. 


### 가장 많이 쓰는 flexbox는 편하게 쓰게 해주자!

tailwindCSS를 쓰면서 또 아쉬웠던 부분은 flexbox 및 layout 관련 문법들이었습니다. CSS에서 가장 많이 쓰이는 속성들인데 직관적이지 못한 방식들과 길어지는 타이핑으로 인해 복잡하게 보이게 만드는 주범이라고 생각을 했습니다.

> `items-*` `content-*` `justify-content-*` `justify-*`
align-items? align-content? justify-content? justify-items?
flexbox를 다루다보면 정말 헷가리는 속성들! 조금더 쉽게 다룰 수는 없을까?

이러한 문법은 가장 많이쓰는 디자인 핸드오프 툴인 figma에서 영감을 받아 AutoLayout과 유사한 형태로 작성할 수 있게 하여 간결함과 생산성을 높였습니다.

> #### flexbox와 figma의 AutoLayout 
> 1. 방향 2. gap, 3. padding, 4. 배치
> ![](https://velog.velcdn.com/images%2Fteo%2Fpost%2F167167a9-da4b-4063-a6dc-e34a69c59f10%2F%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%202021-12-05%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.48.44.mov.gif)

![](https://velog.velcdn.com/images/teo/post/8a00bb36-16d7-4d23-bd03-ae26f70838c4/image.png)

### 편리한 Positioning Layer

뿐만 아니라 absolute나 fixed를 이용한 배치의 경우도 빈번이 일어나는데 `top:0; left:0; right:0; bottom:0; width:100%; height:100%` 와 같은 배치구문들도 보다 직관적인 방식을 제공하여 훨씬 던 간결하면서도 생산성 있는 문법을 제공하였습니다.

![](https://velog.velcdn.com/images/teo/post/f1066bd9-00da-4c2f-b12f-924bafae69a8/image.png)


### 그밖에 더 많은 기능들

그밖에도 여러가지 진보된 AtomicCSS의 기조를 따르면서도 불편했었던 많은 부분들을 수정, 보완하는 방법들을 추가하였습니다.

TailwindCSS를 하다보면 TailwindCSS로 할 수 없는 상황이 나오곤 했습니다. class선택자나 자식 선택자나 복잡한 셀렉터를 써야 하는 경우도 마찬가지였습니다. 기본적으로 CSS에서 제공하는 모든 기능들을 제공하려고 하였습니다.

> #### All-in-one package!
> 1. 모든 CSS Property 사용 가능
> 2. :nth-child, ::after등 모든 pseudo 사용 가능
> 3. 모든 Selector 사용 가능
> 4. 모든 Media Query 사용 가능 (예정, 현재는 width만 제공하고 있습니다.)

뿐만 아니라 적게쓰고 짧게 축약하면서도 직관적으로 다 담을 수 있도록 만들어 보았습니다.

> #### 기타 센스 있는 문법들
> - `w(32~100%)` = min-width: 32px; max-width: 100%;
> - `font(16/1.5/-1%)` = font-size, line-height, letter-spacing
> - `c(--primary)` = color: var(--primary)
> - `@w(~768)`: `@media max-width(768) { ... }`
> - `nowarp...` = 말줄임...

### 내가 편하면 남들도 편하다!

라는 생각으로 만들어진 AdorableCSS는 누구나 쉽게 쓸 수 있도록 만들어졌습니다.

사용헤본 사람은 알겠지만 tailwindCSS는 사용하기 쉽지만 익숙해지기까지는 시간이 필요합니다. 

그러나 AdorableCSS는 tailwindCSS와 비슷한 문법을 제공하면서도 더 직관적이고 익숙한 문법을 제공하고 있습니다.

tailwindCSS보다 할 수 있는 것이 더 많으면서도 훨씬 더 직관적이며 손이 덜 가는 문법을 제공하고 있습니다.

AdorableCSS와 함께 '이렇게도 CSS를 편하게 사용할 수 있구나!' 하는 멋진 경험을 한번 해보시기 바랍니다.

감사합니다.