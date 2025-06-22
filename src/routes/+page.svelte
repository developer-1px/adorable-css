<script lang="ts">
	// Figma-first homepage using only Auto Layout principles
	// No x(), y(), z() positioning - only typography and layout
	
	// Navigation
	const nav = "hbox gap(auto) w(fill) h(80) p(24) bg(#fff/.95) backdrop(20) b(bottom/1/#e2e8f0)"
	const navBrand = "hbox gap(12) font(24) 800 c(#667eea) hover:c(#5a67d8) transition(.3s)"
	const navMenu = "hbox gap(40) font(16) 600 c(#4a5568) hover:c(#2d3748)"
	const navCta = "hbox gap(12) p(12/24) bg(#667eea) c(#fff) r(8) font(16) 700 hover:bg(#5a67d8) transition(.3s)"
	
	// Hero Section
	const hero = "vbox gap(48) w(fill) p(120/40) bg(gradient(135deg/#667eea/#764ba2)) text(center)"
	const heroTitle = "font(72/1.1) 800 c(#fff) opacity(.95)"
	const heroSubtitle = "font(24/1.6) c(#fff) opacity(.9) w(800)"
	const heroActions = "hbox gap(24)"
	const primaryBtn = "hbox gap(12) p(20/40) bg(#fff) c(#667eea) r(12) font(18) 700 shadow(xl) hover:shadow(2xl) hover:scale(1.05) transition(.4s)"
	const secondaryBtn = "hbox gap(12) p(20/40) b(2/#fff) c(#fff) r(12) font(18) 700 hover:bg(#fff/.1) transition(.4s)"
	
	// Features Grid
	const featuresSection = "vbox gap(80) w(fill) p(120/40) bg(#f8fafc)"
	const sectionTitle = "vbox gap(16) text(center)"
	const featuresGrid = "hbox gap(40) w(fill)"
	const featureCard = "vbox gap(32) w(fill) p(48) bg(#fff) r(16) shadow(lg) hover:shadow(xl) hover:scale(1.02) transition(.4s)"
	const featureIcon = "hbox w(80) h(80) r(16) font(40) shadow(md)"
	const featureTitle = "font(24/1.2) 700 c(#2d3748)"
	const featureDesc = "font(16/1.6) c(#718096)"
	
	// Syntax Showcase
	const syntaxSection = "vbox gap(80) w(fill) p(120/40) bg(#fff)"
	const syntaxDemo = "hbox gap(48) w(fill)"
	const codeBlock = "vbox gap(24) w(fill) p(32) bg(#1a202c) r(16) font(15/1.6) c(#e2e8f0)"
	const codeTitle = "font(18) 700 c(#4fd1c7)"
	
	// Comparison
	const comparisonSection = "vbox gap(80) w(fill) p(120/40) bg(#f8fafc)"
	const comparisonGrid = "hbox gap(48) w(fill)"
	const comparisonCard = "vbox gap(32) w(fill) p(40) r(16) b(2) shadow(lg)"
	const oldWay = "bg(#fef5e7) b(2/#f6ad55)"
	const newWay = "bg(#e6fffa) b(2/#38b2ac)"
	
	// Get Started
	const getStartedSection = "vbox gap(80) w(fill) p(120/40) bg(#667eea) text(center)"
	const getStartedTitle = "font(48/1.1) 800 c(#fff)"
	const getStartedSubtitle = "font(20/1.6) c(#fff) opacity(.9) w(700)"
	const installCode = "hbox gap(24) p(24) bg(#2d3748) r(12) font(16/1.4) c(#e2e8f0) w(600)"
	const copyBtn = "hbox p(12) bg(#4a5568) c(#fff) r(8) font(14) 600 hover:bg(#2d3748) transition(.3s)"
	
	// Footer
	const footer = "vbox gap(48) w(fill) p(80/40) bg(#2d3748) c(#a0aec0)"
	const footerContent = "hbox gap(auto) w(fill)"
	const footerBrand = "vbox gap(16)"
	const footerLinks = "hbox gap(48)"
	const footerColumn = "vbox gap(16)"
	const footerLink = "font(16) c(#a0aec0) hover:c(#fff) transition(.3s)"
	const footerBottom = "hbox gap(auto) w(fill) p(top/32) b(top/1/#4a5568)"
</script>

<svelte:head>
	<title>AdorableCSS v2 - Figma-first CSS Framework</title>
	<meta name="description" content="세상에서 가장 Figma스러운 CSS 프레임워크. Figma Auto Layout을 그대로 CSS로 구현하세요." />
</svelte:head>

<!-- Navigation -->
<nav class="{nav} fixed top(0) z(100)">
	<div class={navBrand}>
		<span class="font(28) c(#667eea)">🎨</span>
		<span>AdorableCSS</span>
		<span class="font(14) 600 c(#fff) bg(#48bb78) p(4/8) r(6)">v2.0</span>
	</div>
	
	<div class="hbox gap(40)">
		<a href="#features" class={navMenu}>Features</a>
		<a href="#syntax" class={navMenu}>Syntax</a>
		<a href="#comparison" class={navMenu}>Comparison</a>
		<a href="#docs" class={navMenu}>Docs</a>
	</div>
	
	<div class="hbox gap(16)">
		<a href="https://github.com/developer-1px/adorable-css" class="hbox gap(8) p(12/20) c(#4a5568) hover:c(#2d3748) transition(.3s)">
			<span class="font(18)">⭐</span>
			<span class="font(16) 600">GitHub</span>
		</a>
		<button class={navCta}>
			<span class="font(18)">🚀</span>
			<span>Get Started</span>
		</button>
	</div>
</nav>

<!-- Hero Section -->
<section class={hero}>
	<div class="vbox gap(48) p(top/80)">
		<div class="vbox gap(24)">
			<h1 class={heroTitle}>
				세상에서 가장<br/>
				<span class="c(#ffd89b)">Figma스러운</span><br/>
				CSS 프레임워크
			</h1>
			<p class={heroSubtitle}>
				Figma Auto Layout을 그대로 CSS로. 디자이너가 만든 그대로, 개발자가 구현한 그대로.
				더 이상 두 개의 다른 언어를 배울 필요가 없습니다.
			</p>
		</div>
		
		<div class={heroActions}>
			<button class={primaryBtn}>
				<span class="font(20)">🎯</span>
				<span>지금 시작하기</span>
			</button>
			<button class={secondaryBtn}>
				<span class="font(20)">📚</span>
				<span>문서 보기</span>
			</button>
		</div>
		
		<!-- Live Preview -->
		<div class="vbox gap(24) w(800) p(32) bg(#fff/.1) r(16) backdrop(15)">
			<div class="font(16) 700 c(#fff) opacity(.9)">Live Example:</div>
			<div class="hbox gap(32) w(fill)">
				<div class="vbox gap(16) w(fill) p(24) bg(#2d3748) r(12) font(14/1.4) c(#e2e8f0)">
					<div class="c(#4fd1c7) font(16) 700">HTML</div>
					<pre class="c(#e2e8f0)"><code>{`<div class="vbox gap(16) p(24) bg(#fff) r(12)">
  <h3 class="font(20) 600">Hello Figma!</h3>
  <p class="font(16) c(#666)">Perfect sync</p>
</div>`}</code></pre>
				</div>
				<div class="vbox gap(16) w(fill) p(24) bg(#fff) r(12) shadow(lg)">
					<h3 class="font(20) 600 c(#2d3748)">Hello Figma!</h3>
					<p class="font(16) c(#666)">Perfect sync</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class={featuresSection}>
	<div class={sectionTitle}>
		<h2 class="font(56/1.1) 800 c(#2d3748)">Why AdorableCSS v2?</h2>
		<p class="font(22/1.5) c(#4a5568) w(700)">Figma-first 접근으로 디자인과 개발을 완벽하게 동기화</p>
	</div>
	
	<div class={featuresGrid}>
		<div class={featureCard}>
			<div class="{featureIcon} bg(#667eea/.1) text(center)">
				<span class="c(#667eea)">🎨</span>
			</div>
			<h3 class={featureTitle}>Figma Auto Layout</h3>
			<p class={featureDesc}>
				hbox, vbox, gap, p() - Figma의 Auto Layout을 그대로 CSS로 구현합니다.
				더 이상 flex, grid를 별도로 배울 필요가 없습니다.
			</p>
		</div>
		
		<div class={featureCard}>
			<div class="{featureIcon} bg(#48bb78/.1) text(center)">
				<span class="c(#48bb78)">⚡</span>
			</div>
			<h3 class={featureTitle}>Zero Config</h3>
			<p class={featureDesc}>
				설정 없이 바로 사용 가능합니다. CDN 링크 하나로 모든 기능을 사용할 수 있으며,
				UnoCSS와 완벽하게 호환됩니다.
			</p>
		</div>
		
		<div class={featureCard}>
			<div class="{featureIcon} bg(#ed8936/.1) text(center)">
				<span class="c(#ed8936)">🚀</span>
			</div>
			<h3 class={featureTitle}>On-Demand</h3>
			<p class={featureDesc}>
				실제 사용하는 클래스만 CSS로 생성합니다. 작은 번들 사이즈로 
				최고의 성능을 제공합니다.
			</p>
		</div>
	</div>
	
	<div class={featuresGrid}>
		<div class={featureCard}>
			<div class="{featureIcon} bg(#9f7aea/.1) text(center)">
				<span class="c(#9f7aea)">💎</span>
			</div>
			<h3 class={featureTitle}>Intuitive Values</h3>
			<p class={featureDesc}>
				w(300), h(200), p(16/24) - 값이 직관적으로 작동합니다.
				복잡한 클래스 이름을 외울 필요가 없습니다.
			</p>
		</div>
		
		<div class={featureCard}>
			<div class="{featureIcon} bg(#38b2ac/.1) text(center)">
				<span class="c(#38b2ac)">🔥</span>
			</div>
			<h3 class={featureTitle}>Modern CSS</h3>
			<p class={featureDesc}>
				gradient(), shadow(), backdrop() - 모던 CSS 기능을 
				Figma Effects 패널과 동일한 방식으로 사용합니다.
			</p>
		</div>
		
		<div class={featureCard}>
			<div class="{featureIcon} bg(#f56565/.1) text(center)">
				<span class="c(#f56565)">🤝</span>
			</div>
			<h3 class={featureTitle}>Designer Friendly</h3>
			<p class={featureDesc}>
				디자이너가 직접 CSS를 작성할 수 있습니다. 
				Figma 플러그인으로 양방향 동기화도 지원합니다.
			</p>
		</div>
	</div>
</section>

<!-- Syntax Showcase -->
<section id="syntax" class={syntaxSection}>
	<div class={sectionTitle}>
		<h2 class="font(56/1.1) 800 c(#2d3748)">Figma-Native Syntax</h2>
		<p class="font(22/1.5) c(#4a5568)">Figma의 언어를 그대로 CSS로</p>
	</div>
	
	<div class={syntaxDemo}>
		<div class="vbox gap(32) w(fill)">
			<div class={codeBlock}>
				<div class={codeTitle}>Auto Layout</div>
				<pre><code>hbox(center)     // Horizontal Auto Layout
vbox(top)        // Vertical Auto Layout  
gap(16)          // Item spacing
p(24)            // Padding</code></pre>
			</div>
			
			<div class={codeBlock}>
				<div class={codeTitle}>Sizing & Constraints</div>
				<pre><code>w(fill)          // Fill container
h(hug)           // Hug contents
300x200          // Fixed size
w(300..600)      // Min/Max width</code></pre>
			</div>
		</div>
		
		<div class="vbox gap(32) w(fill)">
			<div class={codeBlock}>
				<div class={codeTitle}>Visual Effects</div>
				<pre><code>bg(#667eea)      // Background color
r(12)            // Border radius
shadow(lg)       // Drop shadow
backdrop(10)     // Backdrop blur</code></pre>
			</div>
			
			<div class={codeBlock}>
				<div class={codeTitle}>Typography</div>
				<pre><code>font(16/24)      // Size/Line height
font(16/24/-1%/600)  // Size/LH/Spacing/Weight
c(#333)          // Text color
text(center)     // Text alignment</code></pre>
			</div>
		</div>
	</div>
</section>

<!-- Comparison Section -->
<section id="comparison" class={comparisonSection}>
	<div class={sectionTitle}>
		<h2 class="font(56/1.1) 800 c(#2d3748)">기존 방식 vs AdorableCSS</h2>
		<p class="font(22/1.5) c(#4a5568)">더 직관적이고 Figma와 일치하는 방식</p>
	</div>
	
	<div class={comparisonGrid}>
		<div class="{comparisonCard} {oldWay}">
			<div class="vbox gap(16)">
				<h3 class="font(28) 700 c(#c05621)">Traditional CSS</h3>
				<div class="vbox gap(12) font(16/1.6) c(#744210)">
					<div>• display: flex, flex-direction</div>
					<div>• justify-content, align-items</div>
					<div>• margin, padding 계산</div>
					<div>• 복잡한 grid 설정</div>
					<div>• 브라우저별 호환성</div>
				</div>
			</div>
			
			<div class="p(20) bg(#fed7aa) r(8) font(14/1.4) c(#7c2d12)">
				<pre><code>{`.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
}`}</code></pre>
			</div>
		</div>
		
		<div class="{comparisonCard} {newWay}">
			<div class="vbox gap(16)">
				<h3 class="font(28) 700 c(#00a3c4)">AdorableCSS v2</h3>
				<div class="vbox gap(12) font(16/1.6) c(#0d5963)">
					<div>• vbox(center) - 직관적 레이아웃</div>
					<div>• gap(16) - Figma와 동일</div>
					<div>• p(24) - 간단한 패딩</div>
					<div>• 자동 CSS 생성</div>
					<div>• 완벽한 브라우저 호환성</div>
				</div>
			</div>
			
			<div class="p(20) bg(#a5f3fc) r(8) font(14/1.4) c(#164e63)">
				<pre><code>{`<div class="vbox(center) gap(16) p(24)">
  <!-- Figma Auto Layout과 100% 동일 -->
</div>`}</code></pre>
			</div>
		</div>
	</div>
</section>

<!-- Get Started Section -->
<section id="get-started" class={getStartedSection}>
	<div class="vbox gap(48)">
		<div class="vbox gap(24)">
			<h2 class={getStartedTitle}>지금 바로 시작하세요</h2>
			<p class={getStartedSubtitle}>
				설치나 설정 없이 CDN 링크 하나로 바로 사용할 수 있습니다
			</p>
		</div>
		
		<div class="vbox gap(24)">
			<div class={installCode}>
				<pre class="w(fill)"><code>{`<script src="https://cdn.jsdelivr.net/npm/adorable-css@2"></script>`}</code></pre>
				<button class={copyBtn}>Copy</button>
			</div>
			
			<div class="hbox gap(16)">
				<a href="#" class="hbox gap(12) p(16/32) bg(#fff) c(#667eea) r(8) font(16) 700 shadow(lg) hover:shadow(xl) transition(.3s)">
					<span class="font(18)">📖</span>
					<span>문서 보기</span>
				</a>
				<a href="#" class="hbox gap(12) p(16/32) b(2/#fff) c(#fff) r(8) font(16) 700 hover:bg(#fff/.1) transition(.3s)">
					<span class="font(18)">💻</span>
					<span>라이브 데모</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class={footer}>
	<div class={footerContent}>
		<div class={footerBrand}>
			<div class="hbox gap(12) font(24) 800 c(#fff)">
				<span class="font(28) c(#667eea)">🎨</span>
				<span>AdorableCSS</span>
			</div>
			<p class="font(16/1.6) w(300)">
				Figma-first CSS framework for seamless design-code synchronization
			</p>
		</div>
		
		<div class={footerLinks}>
			<div class={footerColumn}>
				<h4 class="font(18) 700 c(#fff)">Product</h4>
				<a href="#" class={footerLink}>Features</a>
				<a href="#" class={footerLink}>Pricing</a>
				<a href="#" class={footerLink}>Changelog</a>
			</div>
			
			<div class={footerColumn}>
				<h4 class="font(18) 700 c(#fff)">Resources</h4>
				<a href="#" class={footerLink}>Documentation</a>
				<a href="#" class={footerLink}>Examples</a>
				<a href="#" class={footerLink}>Blog</a>
			</div>
			
			<div class={footerColumn}>
				<h4 class="font(18) 700 c(#fff)">Community</h4>
				<a href="#" class={footerLink}>GitHub</a>
				<a href="#" class={footerLink}>Discord</a>
				<a href="#" class={footerLink}>Twitter</a>
			</div>
		</div>
	</div>
	
	<div class={footerBottom}>
		<div class="font(14) c(#718096)">© 2024 AdorableCSS. All rights reserved.</div>
		<div class="hbox gap(24) font(14)">
			<a href="#" class="c(#718096) hover:c(#fff) transition(.3s)">Privacy</a>
			<a href="#" class="c(#718096) hover:c(#fff) transition(.3s)">Terms</a>
		</div>
	</div>
</footer>

<style>
	/* Additional styles for animations */
	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
	}
	
	/* Smooth scrolling */
	html { scroll-behavior: smooth; }
	
	/* Custom scrollbar */
	::-webkit-scrollbar { width: 8px; }
	::-webkit-scrollbar-track { background: #f1f1f1; }
	::-webkit-scrollbar-thumb { background: #667eea; border-radius: 4px; }
	::-webkit-scrollbar-thumb:hover { background: #5a67d8; }
</style>