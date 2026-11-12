<script lang="ts">
	import { onMount } from 'svelte';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../../app.css';

	let { children } = $props();

	// Load Cloudflare Turnstile for the contact form once, after hydration.
	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
		script.async = true;
		document.body.appendChild(script);
	});
</script>

<GoogleAnalytics />

<a
	href="#main"
	class="sr-only z-[60] rounded-md bg-base-100 px-4 py-2 font-medium shadow focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
	>Skip to content</a
>

<div class="flex min-h-screen flex-col">
	<NavBar />

	<main id="main" class="flex-grow pt-16">
		{@render children?.()}
	</main>

	<Footer />
</div>
