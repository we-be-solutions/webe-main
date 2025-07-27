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

<svelte:head>
	<!-- Meta Pixel Code -->
	<script>
		!(function (f, b, e, v, n, t, s) {
			if (f.fbq) return;
			n = f.fbq = function () {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
			};
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
		})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '1176590537495424');
		fbq('track', 'PageView');
	</script>
	<noscript
		><img
			height="1"
			width="1"
			style="display:none"
			src="https://www.facebook.com/tr?id=1176590537495424&ev=PageView&noscript=1"
			alt="meta pixel"
		/></noscript
	>
	<!-- End Meta Pixel Code -->
</svelte:head>

<GoogleAnalytics />

<div class="min-h-screen flex flex-col">
	<NavBar />

	<main class="flex-grow">
		{@render children?.()}
	</main>

	<Footer />
</div>
