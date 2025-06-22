<script lang="ts">
	import { onMount } from "svelte"
	import { createGenerator, type UnoGenerator } from "unocss"
	import { adorableCSS } from "../../../packages/v2/unocss/adorable-css-uno"

	const figmaHandshakeSamples = [
		"relative w(fill) vbox(center) layoutMode(VERTICAL)",
		"relative",
		"w(296) font(23/27) bold Noto-Sans-CJK-KR c(#141414) text(center)",
		"relative w(fill) h(16) hbox pack hgap(12) layoutMode(HORIZONTAL)",
		"relative hbox pack hgap(6) layoutMode(HORIZONTAL)",
		"relative font(13/16) Noto-Sans-CJK-KR c(#858585)",
		"relative h(40) pack p(0/24) bg(linear-gradient(122.01deg,#31f7fd/23.96%,#95ccfc/50.52%,#f279f9/78.12%)) r(99) layoutMode(HORIZONTAL)",
		"relative font(14) bold Noto-Sans-CJK-KR c(#000)",
	]

	const homepageSamples = [
		"w(100vw) h(100vh) bg(black) white",
		"vbox(center) h(100%) gap(16) gradient(145deg, #182032, #344A6E)",
		"font(64) bold",
		"font(24) c(#adadad)",
		"hbox(center) gap(16)",
		"hbox(center) white p(10/16) r(8) bg(#ffffff.1) b(1/#ffffff.2) backdrop(10) transition(all) hover:bg(#ffffff.2)",
		"vbox(top) gap(16) p(24) w(360) h(320) bg(#ffffff.1) r(12) b(1/#ffffff.2)",
		"font(20) bold",
		"font(16) c(#ddd) pre-wrap",
		"hbox(right) w(fill)",
		"h(48) p(0/24) r(24) bg(#1c1c1c) b(1/#444) white hbox(center) gap(8)",
		"font(14) c(#888)",
		"vbox(center) gap(32) p(64/0)",
		"vbox(center) gap(8)",
		"font(32) bold",
		"font(18) c(#888)",
		"hbox(stretch) gap(16) w(1000)",
		"vbox(center) w(fill) p(24) r(12) bg(#222) gap(12)",
		"font(16) c(#888)",
		"font(14) c(#666)",
		"hbox(center) w(fill) p(12/0) b-t(1/#333)",
		"hbox(center) gap(16) font(14) c(#888)",
	]

	const sampleGroupsRaw = [
		{ title: "Figma Handshake", samples: figmaHandshakeSamples },
		{ title: "Homepage", samples: homepageSamples },
	]

	let sampleGroups: { title: string; samples: { input: string; css: string }[] }[] = []
	let isLoading = true
	let uno: UnoGenerator

	onMount(async () => {
		uno = await createGenerator({
			...(adorableCSS() as any),
		})

		sampleGroups = await Promise.all(
			sampleGroupsRaw.map(async (group) => {
				const samples = await Promise.all(
					group.samples.map(async (input) => {
						const { css } = await uno.generate(input, { preflights: false })
						return { input, css }
					}),
				)
				return { ...group, samples }
			}),
		)
		isLoading = false
	})

	const container = "w(full) p(40) vbox gap(24)"
	const table = "w(full) text(14)"
	const th = "text(left) p(8/12) b-b(1/#eee)"
	const td = "p(8/12) b-b(1/#f6f6f6) font(mono) white-space(pre-wrap) vertical-align(top)"
	const previewBox = "w(160) h(80) pack r(8) b(1/#ddd)"
</script>

<svelte:head>
	<title>Test Page</title>
</svelte:head>

<div class={container}>
	<h1 class="font(32/700) c(#333)">AdorableCSS v2 Spec Review</h1>

	{#if isLoading}
		<p>Generating CSS...</p>
	{:else}
		{#each sampleGroups as group}
			<div>
				<h2 class="font(24/600) c(#333) m(24/0/12)">{group.title}</h2>
				<table class={table}>
					<thead>
						<tr>
							<th class={th}>Input</th>
							<th class={th}>Preview</th>
							<th class={th}>Generated CSS</th>
						</tr>
					</thead>
					<tbody>
						{#each group.samples as sample}
							<tr>
								<td class={td}><code>{sample.input}</code></td>
								<td class={td}>
									<div class="{previewBox} {sample.input}">
										<span class="font(12) c(#888)">Preview</span>
									</div>
								</td>
								<td class={td}>
									<pre class="bg(#f4f6f8) p(8) r(4) font(12) mono"><code>{sample.css || "/* No CSS generated */"}</code></pre>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/each}
	{/if}
</div>

<style>
	:global(body) {
		background-color: #fcfcfc;
	}
	pre {
		margin: 0;
	}
</style>
