<script lang="ts">
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';

	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	let { children } = $props();

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

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

	if (browser) {
		(function (w, d, e, u, f, l, n) {
			(w[f] =
				w[f] ||
				function () {
					(w[f].q = w[f].q || []).push(arguments);
				}),
				(l = d.createElement(e)),
				(l.async = 1),
				(l.src = u),
				(n = d.getElementsByTagName(e)[0]),
				n.parentNode.insertBefore(l, n);
		})(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
		ml('account', '1687166');
	}
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
