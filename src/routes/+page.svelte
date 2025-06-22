<script lang="ts">
	// Modern hero section with gradient and animations
	const hero = "screen pack vbox gap(32) gradient(#667eea/#764ba2) text(center) relative overflow(hidden)"
	const heroTitle = "font(64/1.1/700) c(#fff) opacity(.95) hover:scale(1.02) transition(.3s)"
	const heroSubtitle = "font(24/1.4) c(#fff) opacity(.8) w(800) m(auto)"
	const heroButton = "hbox(center) gap(12) p(16/32) bg(#fff) c(#333) r(12) font(18/600) shadow(lg) hover:shadow(xl) hover:scale(1.05) transition(.3s) pointer"

	// Feature cards
	const featureCard = "vbox gap(24) p(40) bg(#fff) r(16) shadow(md) hover:shadow(xl) hover:scale(1.02) transition(.3s)"
	const featureIcon = "w(64) h(64) r(16) pack font(32)"
	const featureTitle = "font(24/1.3/600) c(#333)"
	const featureDesc = "font(16/1.6) c(#666) opacity(.9)"

	// Code showcase
	const codeSection = "w(fill) p(80/40) bg(#f8f9ff)"
	const codeCard = "bg(#fff) r(16) shadow(lg) overflow(hidden)"
	const codeHeader = "hbox gap(12) p(20/24) bg(#2d3748) c(#fff)"
	const codeBody = "p(24) font(14/1.6) bg(#1a202c) c(#e2e8f0) overflow(scroll)"

	// Navigation
	const nav = "fixed top(0) w(fill) hbox gap(auto) p(16/40) bg(#fff.9) backdrop(10) z(100) shadow(sm)"
	const navLogo = "font(24/700) c(#333) hover:c(#667eea) transition(.3s)"
	const navLink = "font(16/500) c(#666) hover:c(#333) transition(.3s) p(8/16)"
</script>

<!-- Navigation -->
<nav class={nav}>
	<div class="hbox gap(32)">
		<a href="/" class={navLogo}>AdorableCSS v2</a>
		<div class="hbox gap(24)">
			<a href="#features" class={navLink}>Features</a>
			<a href="#examples" class={navLink}>Examples</a>
			<a href="#docs" class={navLink}>Docs</a>
		</div>
	</div>
	<div class="hbox gap(16)">
		<a href="https://github.com/developer-1px/adorable-css" class="hbox(center) gap(8) p(8/16) c(#666) hover:c(#333) transition(.3s)">
			<span class="font(20)">⭐</span>
			<span class="font(14/500)">GitHub</span>
		</a>
		<button class="hbox(center) p(12/24) bg(#667eea) c(#fff) r(8) font(14/600) hover:bg(#5a6fd8) transition(.3s)"> Get Started </button>
	</div>
</nav>

<!-- Hero Section -->
<section class={hero}>
	<!-- Animated background elements -->
	<div class="absolute top(10%) left(10%) w(200) h(200) bg(#fff/.1) r(50%) blur(100) animate-float"></div>
	<div class="absolute top(60%) right(15%) w(150) h(150) bg(#fff/.1) r(50%) blur(80) animate-float-delay"></div>

	<div class="vbox gap(32) z(10) mt(80)">
		<h1 class={heroTitle}>
			The Future of
			<span class="gradient(#ffd89b/#19547b) bg-clip-text">CSS</span>
		</h1>
		<p class={heroSubtitle}>Write CSS like you design in Figma. No more class names, no more switching between files. Just pure, intuitive styling that works.</p>

		<div class="hbox gap(24) mt(32)">
			<button class={heroButton}>
				<span class="font(20)">🚀</span>
				<span>Try It Now</span>
			</button>
			<button class="hbox(center) gap(12) p(16/32) b(2/#fff) c(#fff) r(12) font(18/600) hover:bg(#fff/.1) transition(.3s) pointer">
				<span class="font(20)">📖</span>
				<span>Learn More</span>
			</button>
		</div>

		<!-- Live demo preview -->
		<div class="vbox gap(16) mt(48) w(600) bg(#fff/.1) r(16) p(24) backdrop(10)">
			<div class="font(14/600) c(#fff) opacity(.8)">Live Example:</div>
			<div class="bg(#2d3748) r(8) p(16) font(14/1.5) c(#e2e8f0) text(left)">
				&lt;div class="hbox gap(16) p(24) bg(#667eea) r(12) shadow(lg)"&gt;<br />
				&nbsp;&nbsp;&lt;span class="font(18/600) c(#fff)"&gt;Hello World&lt;/span&gt;<br />
				&lt;/div&gt;
			</div>
			<div class="hbox gap(16) p(24) bg(#667eea) r(12) shadow(lg)">
				<span class="font(18/600) c(#fff)">Hello World</span>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="w(fill) p(80/40) bg(#fff)">
	<div class="vbox gap(64) w(1200) m(auto)">
		<div class="vbox gap(16) text(center)">
			<h2 class="font(48/1.2/700) c(#333)">Why AdorableCSS v2?</h2>
			<p class="font(20/1.5) c(#666) w(600) m(auto)">Built for the modern web with Figma-first thinking</p>
		</div>

		<div class="hbox gap(32) w(fill)">
			<div class={featureCard}>
				<div class="{featureIcon} bg(#667eea/.1)">
					<span class="c(#667eea)">🎨</span>
				</div>
				<h3 class={featureTitle}>Figma-Native Syntax</h3>
				<p class={featureDesc}>Use the same Auto Layout concepts from Figma. hbox, vbox, gap, padding - it's all exactly what you'd expect.</p>
			</div>

			<div class={featureCard}>
				<div class="{featureIcon} bg(#48bb78/.1)">
					<span class="c(#48bb78)">⚡</span>
				</div>
				<h3 class={featureTitle}>Zero Configuration</h3>
				<p class={featureDesc}>No build setup, no config files. Just add the script tag and start styling. Works with any framework or vanilla HTML.</p>
			</div>

			<div class={featureCard}>
				<div class="{featureIcon} bg(#ed8936/.1)">
					<span class="c(#ed8936)">🔥</span>
				</div>
				<h3 class={featureTitle}>On-Demand Generation</h3>
				<p class={featureDesc}>CSS is generated only for classes you actually use. Tiny bundle size, maximum performance.</p>
			</div>
		</div>

		<div class="hbox gap(32) w(fill)">
			<div class={featureCard}>
				<div class="{featureIcon} bg(#9f7aea/.1)">
					<span class="c(#9f7aea)">🎯</span>
				</div>
				<h3 class={featureTitle}>Intuitive Values</h3>
				<p class={featureDesc}>w(300), h(200), p(16/24) - values work exactly like you think they should. No memorizing arbitrary class names.</p>
			</div>

			<div class={featureCard}>
				<div class="{featureIcon} bg(#38b2ac/.1)">
					<span class="c(#38b2ac)">🚀</span>
				</div>
				<h3 class={featureTitle}>Modern Features</h3>
				<p class={featureDesc}>Built-in support for gradients, shadows, backdrop blur, and all the modern CSS you need.</p>
			</div>

			<div class={featureCard}>
				<div class="{featureIcon} bg(#f56565/.1)">
					<span class="c(#f56565)">💝</span>
				</div>
				<h3 class={featureTitle}>Designer Friendly</h3>
				<p class={featureDesc}>Perfect for design-to-code handoff. Designers can write the CSS that developers will actually use.</p>
			</div>
		</div>
	</div>
</section>

<!-- Code Examples Section -->
<section id="examples" class={codeSection}>
	<div class="vbox gap(64) w(1200) m(auto)">
		<div class="vbox gap(16) text(center)">
			<h2 class="font(48/1.2/700) c(#333)">See the Magic</h2>
			<p class="font(20/1.5) c(#666)">Write HTML that looks like your design tools</p>
		</div>

		<div class="hbox gap(48) w(fill)">
			<!-- HTML Code -->
			<div class="{codeCard} w(fill)">
				<div class={codeHeader}>
					<div class="w(12) h(12) r(50%) bg(#ff5f56)"></div>
					<div class="w(12) h(12) r(50%) bg(#ffbd2e)"></div>
					<div class="w(12) h(12) r(50%) bg(#27ca3f)"></div>
					<span class="font(14/600) ml(12)">HTML</span>
				</div>
				<div class={codeBody}>
					<pre class="c(#e2e8f0)"><code
							>&lt;div class="vbox gap(24) p(32) bg(#fff) r(16) shadow(lg)"&gt;
  &lt;div class="hbox gap(16)"&gt;
    &lt;img class="w(64) h(64) r(12)" src="avatar.jpg" /&gt;
    &lt;div class="vbox gap(4)"&gt;
      &lt;h3 class="font(20/600) c(#333)"&gt;Sarah Chen&lt;/h3&gt;
      &lt;p class="font(14) c(#666)"&gt;Product Designer&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;p class="font(16/1.5) c(#444)"&gt;
    "AdorableCSS v2 changed how I think about 
    styling. It's like Figma for code!"
  &lt;/p&gt;
  
  &lt;div class="hbox gap(8)"&gt;
    &lt;div class="w(24) h(24) bg(#ffd700) r(50%)"&gt;&lt;/div&gt;
    &lt;div class="w(24) h(24) bg(#ffd700) r(50%)"&gt;&lt;/div&gt;
    &lt;div class="w(24) h(24) bg(#ffd700) r(50%)"&gt;&lt;/div&gt;
    &lt;div class="w(24) h(24) bg(#ffd700) r(50%)"&gt;&lt;/div&gt;
    &lt;div class="w(24) h(24) bg(#ffd700) r(50%)"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code
						></pre>
				</div>
			</div>

			<!-- Live Result -->
			<div class="vbox gap(16) w(fill)">
				<h3 class="font(20/600) c(#333)">Live Result:</h3>
				<div class="vbox gap(24) p(32) bg(#fff) r(16) shadow(lg)">
					<div class="hbox gap(16)">
						<div class="w(64) h(64) r(12) bg(gradient(#667eea/#764ba2)) pack">
							<span class="font(24) c(#fff)">SC</span>
						</div>
						<div class="vbox gap(4)">
							<h3 class="font(20/600) c(#333)">Sarah Chen</h3>
							<p class="font(14) c(#666)">Product Designer</p>
						</div>
					</div>

					<p class="font(16/1.5) c(#444)">"AdorableCSS v2 changed how I think about styling. It's like Figma for code!"</p>

					<div class="hbox gap(8)">
						<div class="w(24) h(24) bg(#ffd700) r(50%)"></div>
						<div class="w(24) h(24) bg(#ffd700) r(50%)"></div>
						<div class="w(24) h(24) bg(#ffd700) r(50%)"></div>
						<div class="w(24) h(24) bg(#ffd700) r(50%)"></div>
						<div class="w(24) h(24) bg(#ffd700) r(50%)"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Comparison Section -->
<section class="w(fill) p(80/40) bg(#fff)">
	<div class="vbox gap(64) w(1200) m(auto)">
		<div class="vbox gap(16) text(center)">
			<h2 class="font(48/1.2/700) c(#333)">v1 → v2 Evolution</h2>
			<p class="font(20/1.5) c(#666)">Everything you loved, but better</p>
		</div>

		<div class="hbox gap(48) w(fill)">
			<!-- v1 -->
			<div class="vbox gap(24) w(fill) p(32) bg(#f7fafc) r(16) b(2/#e2e8f0)">
				<div class="hbox gap(12)">
					<span class="font(24/700) c(#4a5568)">v1</span>
					<span class="font(14) c(#718096) bg(#e2e8f0) p(4/8) r(4)">Legacy</span>
				</div>
				<div class="vbox gap(16)">
					<code class="font(14/1.5) c(#4a5568) bg(#edf2f7) p(16) r(8)"> class="hbox pack gap-6 bg-blue-500 p-4 rounded-lg" </code>
					<div class="vbox gap(8) font(14/1.6) c(#4a5568)">
						<span>• Dash-separated syntax</span>
						<span>• Limited color system</span>
						<span>• Basic layout support</span>
						<span>• Fewer responsive options</span>
					</div>
				</div>
			</div>

			<!-- v2 -->
			<div class="vbox gap(24) w(fill) p(32) bg(gradient(#667eea/.05/#764ba2/.05)) r(16) b(2/#667eea)">
				<div class="hbox gap(12)">
					<span class="font(24/700) c(#667eea)">v2</span>
					<span class="font(14) c(#fff) bg(#667eea) p(4/8) r(4)">Current</span>
				</div>
				<div class="vbox gap(16)">
					<code class="font(14/1.5) c(#4338ca) bg(#e0e7ff) p(16) r(8)"> class="vbox p(32) r(12) bg(#fff) shadow(lg)" </code>
					<div class="vbox gap(8) font(14/1.6) c(#4a5568)">
						<span>• Function-based, Figma-like syntax</span>
						<span>• Rich color system with opacity</span>
						<span>• Advanced layout with constraints</span>
						<span>• Fully typed and customizable</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Get Started Section -->
<section class="w(full) p(80/40) bg(#f8f9ff)">
	<div class="vbox gap(64) w(1200) m(auto) text(center)">
		<div class="vbox gap(16)">
			<h2 class="font(48/1.2/700) c(#333)">Get Started in Seconds</h2>
			<p class="font(20/1.5) c(#666)">No build process required. Just a single script tag.</p>
		</div>

		<div class="hbox gap(32) w(fill) text(left)">
			<div class="vbox gap(16) w(fill) p(32) bg(#fff) r(16) shadow(md)">
				<h3 class="font(20/600) c(#333)">1. Add the Script</h3>
				<p class="font(16/1.6) c(#666)">
					Place the following script tag in the <code class="font(14) bg(#e2e8f0) p(2/6) r(4)">&lt;head&gt;</code> of your HTML file. That's it! AdorableCSS will automatically watch for new classes and
					generate CSS on the fly.
				</p>
				<div class="bg(#1a202c) c(#e2e8f0) p(16) r(8) font(14/1.6) overflow(scroll)">
					<pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/adorable-css@2"&gt;&lt;/script&gt;</code></pre>
				</div>
			</div>
			<div class="vbox gap(16) w(fill) p(32) bg(#fff) r(16) shadow(md)">
				<h3 class="font(20/600) c(#333)">2. Start Styling</h3>
				<p class="font(16/1.6) c(#666)">Now you can use AdorableCSS classes directly in your HTML. Here's a simple example to get you started.</p>
				<div class="bg(#1a202c) c(#e2e8f0) p(16) r(8) font(14/1.6) overflow(scroll)">
					<pre><code
							>&lt;div class="pack gap(16) p(24) bg(#667eea) r(12)"&gt;
  &lt;span class="font(18/600) c(#fff)"&gt;Hello Adorable!&lt;/span&gt;
&lt;/div&gt;</code
						></pre>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="w(fill) p(60/40) bg(#2d3748) c(#a0aec0)">
	<div class="hbox gap(auto) w(1200) m(auto)">
		<div class="vbox gap(16)">
			<span class="font(20/600) c(#fff)">AdorableCSS v2</span>
			<span class="font(14)">© 2024. All Rights Reserved.</span>
		</div>
		<div class="hbox gap(24)">
			<a href="https://github.com/developer-1px/adorable-css" class="hover:c(#fff) transition(.3s)">GitHub</a>
			<a href="#" class="hover:c(#fff) transition(.3s)">Docs</a>
			<a href="#" class="hover:c(#fff) transition(.3s)">Twitter</a>
		</div>
	</div>
</footer>

<style>
	/* Additional CSS for animations and gradients not yet in v2 */
	.animate-float {
		animation: float 6s ease-in-out infinite;
	}

	.animate-float-delay {
		animation: float 6s ease-in-out infinite 2s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(180deg);
		}
	}

	.bg-clip-text {
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	/* Smooth scrolling for navigation */
	html {
		scroll-behavior: smooth;
	}

	/* Custom scrollbar */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	::-webkit-scrollbar-thumb {
		background: #667eea;
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #5a6fd8;
	}
</style>
