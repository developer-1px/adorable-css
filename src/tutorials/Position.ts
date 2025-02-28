export const TUTORIAL_LAYOUT_POSITION = `
<!--
<Basic Position>

static => position: static;
fixed => position: fixed;
absolute => position: absolute;
relative => position: relative;

sticky => position: sticky
sticky-top => position: sticky; top: 0;
sticky-left => position: sticky; left: 0;
sticky-right => position: sticky; right: 0;
sticky-bottom => position: sticky; bottom: 0;

top(value) => top: value;
right(value) => right: value;
bottom(value) => bottom: value;
left(value) => left: value;

z(value) => z-index: value;


<Advanced Position>

1. x(), y()
- css의 top, right, bottom, left의 값을 조금 더 간단한 표현으로 지정할 수 있습니다.
: x(10) => left:10px;
: x(~10) => right:10px;
: x(10~20) => left:10px; right:20px;

2. x(center), y(center)
- 가운데 정렬을 지정할 수 있습니다.
: x(center) => left:50%; transform:translateX(-50%);

3. absolute(x,y) / reative, fixed, sticky 모두 동일합니다.
- 조금 더 축약된 표현으로 position과 x, y값을 한번에 지정할 수 있습니다. 
: absolute(10,20) => position:absolute; left:10px; top:20px;
: absolute(~10,~20) => position:absolute; right:10px; bottom:20px;
: absolute(10~20,30~40) => position:absolute; left:10px; right:20px; top:30px; bottom:40px;
-->

<div class="relative w(400) h(300) b(#ff6347)">
  <div class="(center,center) bg(yellow)">(center,center)</div>

  <div class="absolute bg(yellow)">absolute</div>
  <div class="absolute(20,20) bg(#ff6347.5)">absolute(20,20)</div>
  <div class="absolute x(5) y(100) bg(blue) c(#fff)">absolute x(5) y(100)</div>
  <div class="absolute x(~5) y(~5) bg(green) c(#fff)">absolute x(~5) y(~5)</div>
  
  <div class="absolute x(center) y(50) bg(aqua) nowrap">absolute x(center) y(50)</div>
  <div class="absolute x(center+50px) y(80) bg(aqua) nowrap">absolute x(center+50px) y(50)</div>
  <div class="absolute(center) bg(tomato)">absolute(center)</div>

  <div class="absolute bottom(0) bg(khaki)">absolute bottom(0)</div>

  <div class="fixed(~0,0) bg(aqua)">fixed(~0,0)</div>
</div>

`.trim()
