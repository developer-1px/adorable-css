<script lang="ts">
	import '@wave.css';
	import UIVersion from '../screens/UIVersion.svelte';
	import '../style.css';
	import Navbar from 'src/lib/navbar.svelte';
</script>

<div class="vbox">
	<Navbar />

	<slot />
</div>

<UIVersion />
