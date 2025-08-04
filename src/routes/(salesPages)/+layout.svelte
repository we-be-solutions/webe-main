<script lang="ts">
	import '../../app.css';
	import { onMount } from 'svelte';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	onMount(() => {});
</script>

<svelte:head>
	<script>
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
	</script>
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
	<NavBar ctaVisible={false} />

	<main class="flex-grow">
		{@render children?.()}
	</main>

	<Footer ctaVisible={false} />
</div>
