<script lang="ts">
	import '../../app.css';
	import { onMount } from 'svelte';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	onMount(() => {
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
	});
</script>

<GoogleAnalytics />

<div class="min-h-screen flex flex-col">
	<NavBar ctaVisible={false} />

	<main class="flex-grow">
		{@render children?.()}
	</main>

	<Footer ctaVisible={false} />
</div>
