# Change Log

### 0.5.7
- :after :before content 기능 추가, class는 띄어쓰기를 못하므로 content에 공백이 있다면 css variable를 추천합니다.
- :after vs ::after 정석은 ::after가 맞으나 :after도 사용이 가능하므로 :after도 사용가능하도록 적용했습니다. 
```html
<div class="before:content('hello') before:c(red)">world</div>
<div class="before:content(--content) before:c(red)" style="--content:'hello, '">world</div>
```
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

Adorable Default Reset CSS
```css
*{margin:0;padding:0;font:inherit;color:inherit;}
*,:after,:before{box-sizing:border-box;flex-shrink:0;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;tab-size:4}
html,body{height:100%;}
img,picture,video,canvas,svg{display:block;max-width:100%;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}
```
---

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
