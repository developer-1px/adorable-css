<script lang="ts">
	import { onMount } from "svelte"
	import { createGenerator, type UnoGenerator } from "unocss"
	import { adorableCSS } from "../../../packages/v2/unocss/adorable-css-uno"

	// 모든 테스트 케이스들을 포함한 포괄적인 리스트
	const allTestCases = [
		// Auto Layout
		{ class: 'hbox', group: 'Auto Layout', description: 'Horizontal flexbox' },
		{ class: 'vbox', group: 'Auto Layout', description: 'Vertical flexbox' },
		{ class: 'pack', group: 'Auto Layout', description: 'Center in both directions' },
		{ class: 'wrap', group: 'Auto Layout', description: 'Flex wrap' },
		{ class: 'hbox(center)', group: 'Auto Layout', description: 'Horizontal center alignment' },
		{ class: 'vbox(center)', group: 'Auto Layout', description: 'Vertical center alignment' },
		{ class: 'hbox(left+top)', group: 'Auto Layout', description: 'Left+top alignment' },
		{ class: 'hbox(right+bottom)', group: 'Auto Layout', description: 'Right+bottom alignment' },
		{ class: 'gap(16)', group: 'Auto Layout', description: 'Gap spacing' },
		{ class: 'gap(16/24)', group: 'Auto Layout', description: 'Row/column gap' },

		// Size & Dimensions
		{ class: '300x200', group: 'Size & Dimensions', description: 'Fixed width x height' },
		{ class: 'w(300)', group: 'Size & Dimensions', description: 'Fixed width' },
		{ class: 'h(200)', group: 'Size & Dimensions', description: 'Fixed height' },
		{ class: 'w(hug)', group: 'Size & Dimensions', description: 'Hug content width' },
		{ class: 'w(fill)', group: 'Size & Dimensions', description: 'Fill container width' },
		{ class: 'h(hug)', group: 'Size & Dimensions', description: 'Hug content height' },
		{ class: 'h(fill)', group: 'Size & Dimensions', description: 'Fill container height' },
		{ class: 'w(200..)', group: 'Size & Dimensions', description: 'Min-width constraint' },
		{ class: 'w(..400)', group: 'Size & Dimensions', description: 'Max-width constraint' },
		{ class: 'w(200..400)', group: 'Size & Dimensions', description: 'Min/max width constraints' },
		{ class: 'w(fill/300..600)', group: 'Size & Dimensions', description: 'Fill with constraints' },
		{ class: '16:9', group: 'Size & Dimensions', description: 'Aspect ratio 16:9' },
		{ class: '4:3', group: 'Size & Dimensions', description: 'Aspect ratio 4:3' },
		{ class: '1:1', group: 'Size & Dimensions', description: 'Aspect ratio 1:1' },

		// Spacing
		{ class: 'p(16)', group: 'Spacing', description: 'Padding all sides' },
		{ class: 'p(16/24)', group: 'Spacing', description: 'Vertical/horizontal padding' },
		{ class: 'p(16/24/32)', group: 'Spacing', description: 'Top/horizontal/bottom padding' },
		{ class: 'p(16/24/32/8)', group: 'Spacing', description: 'All four sides padding' },
		{ class: 'px(20)', group: 'Spacing', description: 'Horizontal padding' },
		{ class: 'py(16)', group: 'Spacing', description: 'Vertical padding' },
		{ class: 'pt(12)', group: 'Spacing', description: 'Top padding' },
		{ class: 'pr(12)', group: 'Spacing', description: 'Right padding' },
		{ class: 'pb(12)', group: 'Spacing', description: 'Bottom padding' },
		{ class: 'pl(12)', group: 'Spacing', description: 'Left padding' },
		{ class: 'm(16)', group: 'Spacing', description: 'Margin all sides' },
		{ class: 'mx(20)', group: 'Spacing', description: 'Horizontal margin' },
		{ class: 'my(16)', group: 'Spacing', description: 'Vertical margin' },
		{ class: 'mx(auto)', group: 'Spacing', description: 'Center horizontally' },
		{ class: 'mt(20)', group: 'Spacing', description: 'Top margin' },
		{ class: 'mr(20)', group: 'Spacing', description: 'Right margin' },
		{ class: 'mb(20)', group: 'Spacing', description: 'Bottom margin' },
		{ class: 'ml(20)', group: 'Spacing', description: 'Left margin' },

		// Typography
		{ class: '14', group: 'Typography', description: 'Font size shorthand' },
		{ class: '16/24', group: 'Typography', description: 'Font size/line height shorthand' },
		{ class: 'font(16)', group: 'Typography', description: 'Font size' },
		{ class: 'font(16/24)', group: 'Typography', description: 'Font size and line height' },
		{ class: 'font(16/24/-2%)', group: 'Typography', description: 'Size, line height, letter spacing' },
		{ class: 'font(16/24/-2%/700)', group: 'Typography', description: 'Complete font properties' },
		{ class: 'font(Inter/16/24)', group: 'Typography', description: 'Font family, size, line height' },
		{ class: 'font(Inter/16/24/-2%)', group: 'Typography', description: 'Complete font with family' },
		{ class: 'font(Inter/16/24/-2%/700)', group: 'Typography', description: 'Full font properties with family' },
		{ class: 'font(20/1.5)', group: 'Typography', description: 'Decimal line-height' },
		{ class: 'font(16/24/-2%/600)', group: 'Typography', description: 'Numeric font-weight' },
		{ class: 'font(16/24/-/bold)', group: 'Typography', description: 'Named font-weight' },
		{ class: 'font(28/1.1/800)', group: 'Typography', description: 'Font-weight in 3rd position' },
		{ class: 'bold', group: 'Typography', description: 'Bold font weight' },
		{ class: 'medium', group: 'Typography', description: 'Medium font weight' },
		{ class: 'light', group: 'Typography', description: 'Light font weight' },
		{ class: '100', group: 'Typography', description: 'Font weight 100' },
		{ class: '700', group: 'Typography', description: 'Font weight 700' },
		{ class: 'italic', group: 'Typography', description: 'Italic text' },
		{ class: 'underline', group: 'Typography', description: 'Underlined text' },
		{ class: 'strike', group: 'Typography', description: 'Strikethrough text' },
		{ class: 'uppercase', group: 'Typography', description: 'Uppercase text' },
		{ class: 'lowercase', group: 'Typography', description: 'Lowercase text' },
		{ class: 'capitalize', group: 'Typography', description: 'Capitalize text' },
		{ class: 'text(left)', group: 'Typography', description: 'Left text alignment' },
		{ class: 'text(center)', group: 'Typography', description: 'Center text alignment' },
		{ class: 'text(right)', group: 'Typography', description: 'Right text alignment' },
		{ class: 'text(justify)', group: 'Typography', description: 'Justify text alignment' },
		{ class: 'text(top)', group: 'Typography', description: 'Top vertical alignment' },
		{ class: 'text(middle)', group: 'Typography', description: 'Middle vertical alignment' },
		{ class: 'text(bottom)', group: 'Typography', description: 'Bottom vertical alignment' },
		{ class: 'nowrap', group: 'Typography', description: 'No text wrap' },
		{ class: 'truncate', group: 'Typography', description: 'Text ellipsis' },
		{ class: 'max-lines(3)', group: 'Typography', description: 'Multi-line clamp' },
		{ class: 'break(word)', group: 'Typography', description: 'Break long words' },
		{ class: 'break(all)', group: 'Typography', description: 'Break all characters' },

		// Position & Constraints
		{ class: 'relative', group: 'Position', description: 'Relative positioning' },
		{ class: 'absolute', group: 'Position', description: 'Absolute positioning' },
		{ class: 'fixed', group: 'Position', description: 'Fixed positioning' },
		{ class: 'sticky', group: 'Position', description: 'Sticky positioning' },
		{ class: 'top(10)', group: 'Position', description: 'Top offset' },
		{ class: 'left(20)', group: 'Position', description: 'Left offset' },
		{ class: 'right(30)', group: 'Position', description: 'Right offset' },
		{ class: 'bottom(40)', group: 'Position', description: 'Bottom offset' },
		{ class: '(0,0)', group: 'Position', description: 'Absolute top-left' },
		{ class: '(..0,..0)', group: 'Position', description: 'Absolute bottom-right' },
		{ class: '(10..10,0)', group: 'Position', description: 'Left-right constraints' },
		{ class: '(center,center)', group: 'Position', description: 'Absolute center' },
		{ class: 'layer', group: 'Position', description: 'Full layer positioning' },
		{ class: 'layer(top)', group: 'Position', description: 'Top layer' },
		{ class: 'layer(top+left)', group: 'Position', description: 'Top-left layer' },
		{ class: 'z(1)', group: 'Position', description: 'Z-index 1' },
		{ class: 'z(10)', group: 'Position', description: 'Z-index 10' },
		{ class: 'z(top)', group: 'Position', description: 'Top z-index' },

		// Fill & Stroke
		{ class: 'bg(#667eea)', group: 'Fill & Stroke', description: 'Background color' },
		{ class: 'bg(#000/.5)', group: 'Fill & Stroke', description: 'Background with opacity' },
		{ class: 'bg(linear-gradient(0deg/#000/#fff))', group: 'Fill & Stroke', description: 'Linear gradient' },
		{ class: 'bg(radial/#000/#fff)', group: 'Fill & Stroke', description: 'Radial gradient' },
		{ class: 'bg(url(image.jpg))', group: 'Fill & Stroke', description: 'Background image URL' },
		{ class: 'bg(./image.jpg)', group: 'Fill & Stroke', description: 'Background image path' },
		{ class: 'c(#333)', group: 'Fill & Stroke', description: 'Text color' },
		{ class: 'c(#fff)', group: 'Fill & Stroke', description: 'White text color' },
		{ class: 'c(#000/.5)', group: 'Fill & Stroke', description: 'Text color with opacity' },
		{ class: 'c(linear-gradient(45deg/#ff0000/#00ff00))', group: 'Fill & Stroke', description: 'Gradient text' },
		{ class: 'caret(#667eea)', group: 'Fill & Stroke', description: 'Caret color' },
		{ class: 'b(#e2e8f0)', group: 'Fill & Stroke', description: 'Border default width' },
		{ class: 'b(2/#667eea)', group: 'Fill & Stroke', description: 'Border custom width/color' },
		{ class: 'b(1/#000/dashed)', group: 'Fill & Stroke', description: 'Dashed border' },
		{ class: 'bt(2/#667eea)', group: 'Fill & Stroke', description: 'Top border only' },
		{ class: 'br(2/#667eea)', group: 'Fill & Stroke', description: 'Right border only' },
		{ class: 'bb(2/#667eea)', group: 'Fill & Stroke', description: 'Bottom border only' },
		{ class: 'bl(2/#667eea)', group: 'Fill & Stroke', description: 'Left border only' },
		{ class: 'o(2/#667eea)', group: 'Fill & Stroke', description: 'Outline' },

		// Effects
		{ class: 'shadow(sm)', group: 'Effects', description: 'Small shadow' },
		{ class: 'shadow(md)', group: 'Effects', description: 'Medium shadow' },
		{ class: 'shadow(lg)', group: 'Effects', description: 'Large shadow' },
		{ class: 'shadow(xl)', group: 'Effects', description: 'Extra large shadow' },
		{ class: 'shadow(0/4/16/#000.1)', group: 'Effects', description: 'Custom shadow' },
		{ class: 'blur(4)', group: 'Effects', description: 'Element blur' },
		{ class: 'blur(layer/4)', group: 'Effects', description: 'Layer blur' },
		{ class: 'blur(bg/4)', group: 'Effects', description: 'Background blur' },
		{ class: 'backdrop(10)', group: 'Effects', description: 'Backdrop blur' },
		{ class: 'opacity(.5)', group: 'Effects', description: '50% opacity' },
		{ class: 'opacity(0)', group: 'Effects', description: '0% opacity' },
		{ class: 'brightness(1.2)', group: 'Effects', description: 'Brightness filter' },
		{ class: 'contrast(1.5)', group: 'Effects', description: 'Contrast filter' },
		{ class: 'grayscale(1)', group: 'Effects', description: 'Grayscale filter' },
		{ class: 'hue-rotate(90deg)', group: 'Effects', description: 'Hue rotation filter' },
		{ class: 'invert(1)', group: 'Effects', description: 'Invert filter' },
		{ class: 'saturate(2)', group: 'Effects', description: 'Saturation filter' },
		{ class: 'sepia(.5)', group: 'Effects', description: 'Sepia filter' },
		{ class: 'drop-shadow(0/4/8/rgba(0,0,0,0.1))', group: 'Effects', description: 'Drop shadow filter' },

		// Interactive States
		{ class: 'hover:bg(#667eea)', group: 'Interactive States', description: 'Hover background' },
		{ class: 'hover:scale(1.05)', group: 'Interactive States', description: 'Hover scale' },
		{ class: 'active:bg(#5a6fd8)', group: 'Interactive States', description: 'Active background' },
		{ class: 'active:scale(.95)', group: 'Interactive States', description: 'Active scale' },
		{ class: 'focus:b(2/#667eea)', group: 'Interactive States', description: 'Focus border' },
		{ class: 'focus-visible:outline(2/#667eea)', group: 'Interactive States', description: 'Focus visible outline' },
		{ class: 'focus-within:bg(#f0f0f0)', group: 'Interactive States', description: 'Focus within styling' },
		{ class: 'checked:bg(#667eea)', group: 'Interactive States', description: 'Checked state' },
		{ class: 'disabled:opacity(.5)', group: 'Interactive States', description: 'Disabled state' },
		{ class: 'group-hover:bg(#667eea)', group: 'Interactive States', description: 'Group hover effect' },
		{ class: 'group-focus:scale(1.1)', group: 'Interactive States', description: 'Group focus effect' },
		{ class: 'odd:bg(#f9f9f9)', group: 'Interactive States', description: 'Odd child styling' },
		{ class: 'even:bg(#f0f0f0)', group: 'Interactive States', description: 'Even child styling' },
		{ class: 'first:mt(0)', group: 'Interactive States', description: 'First child styling' },
		{ class: 'last:mb(0)', group: 'Interactive States', description: 'Last child styling' },

		// Transform
		{ class: 'rotate(45)', group: 'Transform', description: 'Rotation 45deg' },
		{ class: 'rotate(-45)', group: 'Transform', description: 'Negative rotation' },
		{ class: 'scale(1.5)', group: 'Transform', description: 'Scale uniform' },
		{ class: 'scale(1.5/2)', group: 'Transform', description: 'Scale X/Y values' },
		{ class: 'translate(10/20)', group: 'Transform', description: 'Translate X/Y' },

		// Overflow & Scroll
		{ class: 'clip', group: 'Overflow', description: 'Overflow hidden' },
		{ class: 'scroll', group: 'Overflow', description: 'Overflow auto' },
		{ class: 'scroll(x)', group: 'Overflow', description: 'Horizontal scroll' },
		{ class: 'scroll(y)', group: 'Overflow', description: 'Vertical scroll' },
		{ class: 'scroll(smooth)', group: 'Overflow', description: 'Smooth scroll' },
		{ class: 'scrollbar(none)', group: 'Overflow', description: 'Hide scrollbar' },
		{ class: 'scrollbar(thin)', group: 'Overflow', description: 'Thin scrollbar' },

		// Gradients & Colors
		{ class: 'gradient(#667eea/#764ba2)', group: 'Gradients', description: 'Linear gradient' },
		{ class: 'gradient(#ff0000/#00ff00/90)', group: 'Gradients', description: 'Linear gradient with angle' },

		// Border Radius
		{ class: 'r(8)', group: 'Border Radius', description: 'Border radius 8px' },
		{ class: 'r(50%)', group: 'Border Radius', description: 'Circular border' },

		// Display
		{ class: 'block', group: 'Display', description: 'Block display' },
		{ class: 'inline', group: 'Display', description: 'Inline display' },
		{ class: 'inline-block', group: 'Display', description: 'Inline-block display' },
		{ class: 'grid', group: 'Display', description: 'Grid display' },
		{ class: 'hidden', group: 'Display', description: 'Hidden display' },

		// Cursor
		{ class: 'pointer', group: 'Cursor', description: 'Pointer cursor' },
		{ class: 'grab', group: 'Cursor', description: 'Grab cursor' },

		// Transition
		{ class: 'transition(.3s)', group: 'Transition', description: 'Transition duration' },

		// Complex Examples from Tests
		{ class: 'vbox(fill) w(fill) p(24) r(12) bg(#fff) shadow(md) gap(16)', group: 'Complex Examples', description: 'Multiple classes combined' },
		{ class: 'hbox(center) w(fill) h(48) r(8) bg(blue) c(#fff)', group: 'Complex Examples', description: 'Figma card component' },
		{ class: 'hbox() gap(auto) w(fill) h(64) px(32) bg(#fff) shadow(sm)', group: 'Complex Examples', description: 'Navigation layout' },
	]

	function groupBy(array: any[], key: string) {
		return array.reduce((result, item) => {
			const group = item[key]
			if (!result[group]) {
				result[group] = []
			}
			result[group].push(item)
			return result
		}, {})
	}

	let groupedTestCases: Record<string, any[]> = {}
	let generatedCSS: Record<string, string> = {}
	let isLoading = true
	let uno: UnoGenerator

	onMount(async () => {
		uno = await createGenerator({
			...(adorableCSS() as any),
		})

		// Group test cases
		groupedTestCases = groupBy(allTestCases, 'group')

		// Generate CSS for all test cases
		for (const testCase of allTestCases) {
			try {
				const { css } = await uno.generate(testCase.class, { preflights: false })
				generatedCSS[testCase.class] = css
			} catch (error: any) {
				generatedCSS[testCase.class] = `/* Error: ${error.message} */`
			}
		}

		isLoading = false
	})
</script>

<svelte:head>
	<title>Test Page</title>
</svelte:head>

<div class="container">
	<h1>AdorableCSS v2 Test Rules - 모든 규칙 검증</h1>
	<p class="subtitle">테스트 코드에서 사용되는 모든 AdorableCSS 규칙과 실제 CSS 출력 결과</p>

	{#if isLoading}
		<div class="loading">CSS 생성 중...</div>
	{:else}
		{#each Object.entries(groupedTestCases) as [groupName, rules]}
			<section class="group">
				<h2 class="group-title">{groupName}</h2>
				<div class="table-container">
					<table class="rules-table">
						<thead>
							<tr>
								<th>Class</th>
								<th>Description</th>
								<th>Generated CSS</th>
							</tr>
						</thead>
						<tbody>
							{#each rules as rule}
								<tr>
									<td class="class-cell">
										<code class="class-code">{rule.class}</code>
									</td>
									<td class="description-cell">{rule.description}</td>
									<td class="css-cell">
										<pre class="css-output">{generatedCSS[rule.class] || '/* No CSS generated */'}</pre>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>
		{/each}
	{/if}
</div>

<style>
	:global(body) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		margin: 0;
		padding: 0;
		background: #f8f9fa;
		color: #333;
		line-height: 1.6;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #2d3748;
		margin-bottom: 0.5rem;
		text-align: center;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #718096;
		text-align: center;
		margin-bottom: 3rem;
	}

	.loading {
		text-align: center;
		font-size: 1.2rem;
		color: #667eea;
		padding: 3rem;
	}

	.group {
		margin-bottom: 3rem;
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		overflow: hidden;
	}

	.group-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: white;
		padding: 1.5rem 2rem;
		margin: 0;
		background: #667eea;
		border-bottom: 1px solid #e2e8f0;
	}

	.table-container {
		overflow-x: auto;
	}

	.rules-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.75rem;
		margin: 0;
	}

	.rules-table th {
		background: #f7fafc;
		padding: 0.75rem;
		text-align: left;
		font-weight: 600;
		color: #4a5568;
		border-bottom: 2px solid #e2e8f0;
		font-size: 0.7rem;
	}

	.rules-table td {
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid #e2e8f0;
		vertical-align: top;
	}

	.class-cell {
		width: 200px;
		min-width: 150px;
	}

	.class-code {
		background: #f1f5f9;
		color: #667eea;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
		font-size: 0.7rem;
		font-weight: 600;
	}

	.description-cell {
		width: 200px;
		color: #718096;
		font-size: 0.7rem;
	}

	.css-cell {
		min-width: 300px;
	}

	.css-output {
		background: #1a202c;
		color: #e2e8f0;
		padding: 0.5rem;
		border-radius: 6px;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
		font-size: 0.65rem;
		line-height: 1.4;
		margin: 0;
		white-space: pre-wrap;
		word-break: break-all;
		max-width: 400px;
		overflow-x: auto;
	}

	.rules-table tr:hover {
		background: #f8f9fa;
	}

	.rules-table th:first-child,
	.rules-table td:first-child {
		padding-left: 2rem;
	}

	.rules-table th:last-child,
	.rules-table td:last-child {
		padding-right: 2rem;
	}

	@media (max-width: 768px) {
		.container {
			padding: 1rem;
		}

		h1 {
			font-size: 2rem;
		}

		.rules-table {
			font-size: 0.7rem;
		}

		.class-cell,
		.description-cell {
			width: auto;
			min-width: 120px;
		}

		.css-output {
			font-size: 0.6rem;
			max-width: 250px;
		}
	}
</style>
