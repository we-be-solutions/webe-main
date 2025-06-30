<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	let { children, data } = $props();
</script>

<main>
	{@render children?.()}
</main>
<Footer />
