## 0.6.3
- 🐛️ hidden(구 invisible) vs visible 이 동시에 있을때는 visible이 우선순위가 더 높도록 수정하였습니다.

## 0.6.2
- ✨️ #000.2 와 같은 HEXa 포맷을 구문 전체에서 지원합니다.
- ⚡️ cover, contain에 background-repeat: no-repeat 추가 되었습니다.
- ✨️ --serif, --sans-serif와 같이 css variable을 통해서 기본 폰트를 지정할 수 있도록 수정하였습니다.
- ✨️ @media query 지원 기능을 추가하였습니다. @w(~360), @w(360~), @w(360~720) 

## 0.6.1
- 🚑️ pointer-events-auto! 와 같이 ()가 없는 ! 기능이 동작하지 않던 현상을 수정하였습니다.

## 0.6.0
- 🧑‍💻 flex-shrink === flex-shrink(1), flex-glow === flex-glow(1)로 default 값을 추가헀습니다.

## 0.5.8
- 🎉 홈페이지를 새롭게 단장하였습니다. 1.0.0 정식 오픈을 위해서 열심히 해보곘습니다.
- 🐛 정규식이 있는 경우 CSS가 잘못 분석이 되던 버그를 수정하였습니다.
- ⚡️ 파서 엔진을 교체하여 잘못된 CSS가 생성되는 현상을 수정하였습니다.
- ✨ monospace(number) 기능이 추가되었습니다. https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric

---

## 0.5.7
- ```:after``` ```:before``` ```content``` 기능이 추가되었습니다.
- class는 띄어쓰기를 못하므로 content에 공백이 있다면 css variable를 추천합니다.

```html
<div class="before:content('hello') before:c(red)">world</div>
<div class="before:content(--content) before:c(red)" style="--content:'hello, '">world</div>
```
> @NOTE: ```:after``` vs ```::after``` 정석은 ```::after```가 맞으나 IE8 이후 오랜 관습으로 남아 있는 ```:after```도 사용가능하도록 추가하였습니다. ```:before```도 동일합니다.  


- ::first-line과 같은 pseudo-elements를 지원합니다. https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements

```html
<div class="first-line::c(red)">
  <p>first-line</p>
  <p>second-line</p>
</div>
```
- ::webkit-scrollbar를 적용할 수 있습니다.
```html
<div class="h(100) scroll-y -webkit-scrollbar::w(4) -webkit-scrollbar-thumb::bg(red)">
</div>
```

- reset를 config에서 커스텀이 가능하도록 하였습니다. 
```js
    plugins: [
      adorableCSS({
        reset: `*{margin:0; padding} /* <-- your reset code here */`
      }),
    ],
```

---

## 지난 로그

- 0.5.6 - (beta) bg(linear-gradient) 기능 추가
- 0.5.5 - user-select 사파리에서 동작하지 않는 버그 수정, -webkit- prefix 추가
- 0.5.3 - CSS Reset 보강 https://github.com/developer-1px/adorable-css/blob/master/src%5Badorable-css%5D/src/rules.ts
- 0.5.2 - PostCSS를 사용하는 build 환경에서 에러발생하는 오류 수정함. 
- 0.4.9 - :nth-child를 비롯한 **모든 pseudo class** 지원, 등록되지 않은 모든 css도 일단 지원. ex) touch-action(pan-x)
- 0.4.7 - glob방식의 config.include 추가 ex) ```adorableCSS({include: "src/**/*.{svelte,svx})"```  
- 0.4.5 - attribute selector 기능 추가 ex) [attr='value']:c(red)
- 0.4.4 - build시 sourcemap 포함되면 error나던 현상 수정

## 지금 준비하고 있는 기능들
- transform 결합: ex) translateX(10)+scale(.5)
- more level cascade priority(!important): ex) bg(red) .test:bg(orange)! .test2:bg(red)!!
