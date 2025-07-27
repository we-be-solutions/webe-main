<script lang="ts">
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';

	import Footer from '$lib/components/Footer.svelte';
	import '../../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	let { children } = $props();

	import { onMount } from 'svelte';

	let turnstileLoaded = false;

	onMount(() => {
		if (typeof window === 'undefined') return;

		const script = document.createElement('script');
		script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
		script.async = true;
		script.onload = () => {
			// Widget will auto-render if div is present
			turnstileLoaded = true;
		};
		document.body.appendChild(script);
	});
</script>

<!-- MailerLite Universal -->
<!-- End MailerLite Universal -->

<GoogleAnalytics />

<div class="min-h-screen flex flex-col">
	<NavBar />

	<main class="flex-grow">
		{@render children?.()}
	</main>

	<Footer />
</div>
