export const TURORIAL_0_Hello = `
<!--
# What is AdorableCSS?
- Rapid On-Demand Atomic CSS framework

더 이상 새로운 css를 작성하는 데 힘빼지 마세요. 거의 모든 class는 이미 만들어져있습니다. 쓰기만 하세요.
class="font(20) c(red)"와 같이 함수형으로 정의된 형식으로 입력해보세요.
모든 수치와 색상을 지원하며, 필요한 만큼의 CSS만 만들어 냅니다.

# Why Use AdorableCSS?

Easy!
: 디자인을 위해 이름을 짓는 수고가 사라지며, 한번 외운 이름은 계속 사용할 수 있습니다.

Write less do more!
: 기존 css문법보다 훨씬 더 간결하면서도 더 많은 작업을 할 수 있습니다.

Fast Writing and No switching!
: html, jsx에 바로 디자인을 적용할 수 있어 매우 빠른 디자인 개발 속도를 가집니다.

Portable!
: css 없이 HTML만으로 UI를 만들 수 있어 이동과 리팩토링에서 자유롭습니다.

Compact!
: 기존 css 방식보다 훨씬 더 적은 라인의 최적화된 css를 생산합니다.

Great for Auto Design HandOff!
: 이름이 필요없기에 figma등의 HandOff에서 변환하기에 최적화된 형태입니다.

-->
<div class="layer pack">
  <div class="vbox bg(#fff) w(400) r(12) p(32) elevation(6)">

    <div class="vbox gap(10)">
      <div class="font(30/-/-1%) bold">🐳 Hello Adorable!</div>
      <div class="font(16) c(#999)">Rapid On-Demand Atomic CSS Framework</div>
    </div>

    <div class="space(40)"></div>

    <div class="hbox(right) gap(10)">
      <button class="pack bg(#fff) b(none) c(#000) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#eee)">Cancel</button>

      <button class="pack bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000) active:b(#000.2)">OK</button>
    </div>
  </div>
</div>
`.trim()