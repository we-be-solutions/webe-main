<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	let { children, data } = $props();
</script>

<main>
	<NavBar />
	{@render children?.()}
</main>
<Footer />
