export const TUTORIAL_7_VISIBILITY = `
<!--
Visibility

화면의 표시여부를 결정합니다. 각각의 속성들은 모두 화면에서 사라지게 만듭니다.
그렇지만 각각의 속성들은 다른 방식으로 사라지게 만듭니다.

아래 3가지를 고려하여 사용하세요.
1. 자리차지 여부
2. 사용자 입력 가능
3. 스크린 리더기에 읽히는지 여부

=================

1) .none {display:none}
- 화면에서 사라집니다.
- 자리를 차지하지 않습니다.
- 사용자 입력도 불가능합니다.
- 스크린 리더기에 읽히지 않습니다.

2) .hidden {visibility:hidden}
- 화면에서 보이지 않지만 자리를 차지합니다.
- 사용자 입력은 불가능합니다.
- 스크린 리더기에도 읽히지 않습니다.

참고) invisible도 같은 역할을 합니다. (tailwindCSS 네이밍)
     visible을 사용하면 다시 보이게 됩니다. .visible {visibility:visible}

3) .opacity(0) {opacity:0}
- 투명하게 만들어 화면에서 사라집니다.
- 자리를 차지합니다.
- 사용자 입력은 가능합니다.
- 스크린 리더기에 읽힙니다. 

4) .blind: {position:absolute;width:1px;height:1px;padding:0;border:0;margin:-1px;white-space:nowrap;overflow:hidden;clip-path:inset(100%);}
- 화면에서 사라집니다. (실제로는 1px만큼의 공간을 차지합니다.)
- 자리를 차지하지 않습니다.
- 사용자 입력은 불가능합니다.
- 스크린 리더기에 읽힙니다.

참고) sr-only도 같은 역할을 합니다. (tailwindCSS 네이밍)
     sr-only는 screen reader only의 약자입니다.

-->
<h1>Visibility</h1>
<p>아래 컨텐츠들은 보이지 않는게 맞습니다.</p>

<div class="none">none</div>
<div class="hidden invisible">hidden(=invisible)</div>
<div class="blind sr-only">blind(=sr-only)</div>
<div class="opacity(0)">opacity(0)</div>

`.trim()