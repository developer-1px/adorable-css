<script lang="ts">
	const slide = 'text-center vbox pack p(200/32) odd:bg(#fafafa) clip';
	const h1 = 'font(3em/-/-1.5%) bold ~md:font(1.6em)';
	const h2 = 'font(1.2em/-/-1.5%) opacity(75%) ~md:font(1.4em)';
</script>

<div class="{slide} gap(40) max-h(60vh) relative">
	<div class="mb(4rem) text-center">
		<h1 class="font(4rem) underline(#60a5fa/wavy) bold" data-text="WaveCSS">WaveCSS</h1>
		<p class="opacity(75%) font(1.2rem) medium">Rapid on-demand atomic css framework</p>
	</div>

	<code class="bg(#f4f4f5) border(2px/solid/#e4e4e7) p(10/18) border r(12px) copy">
		<span class="font(1.2rem) bold">npm i -D wavecss</span>
	</code>
</div>

<div class={slide}>
	<h1 class={h1}>No more writing your own CSS.</h1>
	<h2 class={h2}>
		We have created almost all the CSS you need. Just write down in your HTML(or JSX).
	</h2>
	<div class="space(2em)" />
	<img
		src="https://images.velog.io/images/teo/post/dde8bc56-15d0-4fc0-a15a-f3c204f50494/AdorableCSS.gif"
	/>
</div>

<div class={slide}>
	<h1 class="{h1} scale(1.05) rotate(5deg) color(--primary) transition(.4s) pointer">[ •́ ‸ •̀ ]</h1>
	<h1 class={h1}>Naming things is hard.</h1>
	<h2 class={h2}>{`.inner-wrapper { position:relative; padding: 10px 20px }`}</h2>
	<p>.inner-wrapper? Don't bother creating meaningless names for formatting.</p>
	<br />
	<h2 class={h2}>{`<div class="relative p(10/10)">`}</h2>
	<p>Just write it in HTML as is. We've already created all the necessary CSS.</p>
	<br />
	<h2 class={h2}>{`<div class="font(10) c(#ff0) bold text-center">`}</h2>
</div>

<div class={slide}>
	<div class="hbox(top+center) flex-wrap gap(60)">
		<div class="vbox(center)">
			<h1 class="font(30/-/-1.5%) bold">When just write down in HTML or JSX</h1>

			<code class="pre text-left bg(#f1f1f1) p(20) r(8) monospace">
				{`<button class="hbox pack gap(6) bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000)! active:b(#000.2)">
    <div>👍</div>
    <div>Like</div>
  </button>
`}
			</code>
		</div>

		<div class="vbox(center)">
			<h1 class="font(30/-/-1.5%) bold">
				... and auto generate CSS on realtime! (and build-time) 😎
			</h1>

			<code class="pre text-left bg(#f1f1f1) p(20) r(8) monospace">
				{`/* @adorable.css */

* {margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}
.c\(\#fff\){color:#fff;}
html .active\:bg\(\#000\)\!:active,html .active\:bg\(\#000\)\!.\:active{background-color:#000!important;}
.bg\(\#333\){background-color:#333;}
@media (hover:hover){.hover\:bg\(\#555\):hover,.hover\:bg\(\#555\).\:hover{background-color:#555;}}
.font\(14\/16\/-1\%\){font-size:14px;line-height:16px;letter-spacing:-0.01em}
.bold{font-weight:700;}
.hbox{display:flex;flex-flow:row;align-items: center;}
.p\(8\/12\){padding:8px 12px;}
.pack{display:flex;align-items:center;justify-content:center;}
.pointer{cursor:pointer;}
html .active\:b\(\#000\.2\):active,html .active\:b\(\#000\.2\).\:active{border:1px solid rgba(0,0,0,.2);}
.b\(\#000\.2\){border:1px solid rgba(0,0,0,.2);}
.r\(6\){border-radius:6px;}
.gap\(6\){gap:6px;}
.layer{position:absolute;top:0;right:0;bottom:0;left:0}
.transition\(\.2s\){transition:all .2s;}
`}
			</code>
		</div>
	</div>
</div>

<div class={slide}>
	<h1 class={h1}>⚡️</h1>
	<h1 class={h1}>Fast Writing without switching!</h1>
	<h2 class={h2}>Stop developing HTML and CSS while switching back and forth.</h2>
	<br />
	<div class="bg(#f1f1f1) r(8) p(20)">
		<p>
			To create cool designs, you need to change the structure and modify the CSS, modify the name,
			and modify the selector, and then modify the HTML again...
		</p>
		<div class="m(20)">👇</div>
		<p>Work while seeing your design change in real time as you edit HTML and JSX!</p>
	</div>
</div>

<div class={slide}>
	<h1 class="{h1} scale(1.05) rotate(-5deg) color(--primary) transition(.4s) pointer">ᕙ(`▿´)ᕗ</h1>
	<h1 class={h1}>Write less do more!</h1>
	<h2 class={h2}>Isn't it 90s-vibe inline-style? No!</h2>

	<div class="vbox gap(40) mt(40)">
		<div>
			<h2 class="font(24) 700 m(10/0)">More extensible Syntax</h2>
			<code class="block pre font(13) w(~800) text-left bg(#f1f1f1) p(20) r(8) monospace">
				{`<div class="font(14/1.5/-1%)"/>
<div class="w(100~200)"/>
<div class="nowrap..."/>
<div class="line-clamp(3)"/>
<div class="hbox(bottom+right)"/>
<div class="layer(right)"/>

.font(14/1.5/-1%){font-size:14px;line-height:1.5;letter-spacing:-0.01em}
.w(100~200){min-width:100px;max-width:200px;}
.hbox(bottom+right){display:flex;flex-flow:row;align-items:flex-end;justify-content:flex-end;}
.nowrap...{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;}
.line-clamp(3){display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
.layer(right){position:absolute;top:0;right:0;bottom:0}
`}
			</code>
		</div>

		<div>
			<h2 class="font(24) 700 m(10/0)">Support Full Pesudo-class/element</h2>
			<code class="block pre font(13) w(~800) text-left bg(#f1f1f1) p(20) r(8) monospace">
				{`<a class="hover:underline active:bg(#000)"/>
<div class="nth-child(3n+1):bg(orange)"/>
<input class="placeholder:c(#ccc)"/>
<div class="after:content(--my-content)" style="--my-content: 'hello adorable'"/>

.placeholder\\:c\\(\\#ccc\\)::placeholder{color:#ccc;}
html .active\\:bg\\(\\#000\\):active,html .active\\:bg\\(\\#000\\).\\:active{background-color:#000;}
.nth-child\\(3n\\+1\\)\\:bg\\(orange\\):nth-child(3n+1){background-color:orange;}
@media (hover:hover){.hover\\:underline:hover,.hover\\:underline.\\:hover{text-decoration:underline;}}
.after\\:content\\(--my-content\\):after{content:'var(--my-content)'}
`}
			</code>
		</div>

		<div>
			<h2 class="font(24) 700 m(10/0)">Selector Support</h2>
			<code class="block pre font(13) w(~800) text-left bg(#f1f1f1) p(20) r(8) monospace">
				{`<div class=".selected:bg(#000) .selected:c(#fff)"/>
<div class=">h1:m(20)"/>
<input class=">>a:c(#4f80ff)"/>

.\\.selected\\:c\\(\\#fff\\).selected,.selected .\\.selected\\:c\\(\\#fff\\){color:#fff;}
.\\>\\>a\\:c\\(\\#4f80ff\\)>>a{color:#4f80ff;}
.\\.selected\\:bg\\(\\#000\\).selected,.selected .\\.selected\\:bg\\(\\#000\\){background-color:#000;}
.\\>h1\\:m\\(20\\)>h1{margin:20px;}
`}
			</code>
		</div>

		<div>
			<h2 class="font(24) 700 m(10/0)">Media Query Support</h2>
			<code class="block pre font(13) w(~800) text-left bg(#f1f1f1) p(20) r(8) monospace">
				{`<div class="@w(320~):c(red)">320 > red</div>

.\\.selected\\:c\\(\\#fff\\).selected,.selected .\\.selected\\:c\\(\\#fff\\){color:#fff;}
.\\>\\>a\\:c\\(\\#4f80ff\\)>>a{color:#4f80ff;}
.\\.selected\\:bg\\(\\#000\\).selected,.selected .\\.selected\\:bg\\(\\#000\\){background-color:#000;}
.\\>h1\\:m\\(20\\)>h1{margin:20px;}
`}
			</code>
		</div>
	</div>
</div>

<div class={slide}>
	<h1 class={h1}>📦</h1>
	<h1 class={h1}>Portable and Compact</h1>
	<h2 class={h2}>
		Are you refactor code? you don't worry about that separated CSS.<br />We don't write CSS. Just
		Cut & Paste!
	</h2>
</div>
