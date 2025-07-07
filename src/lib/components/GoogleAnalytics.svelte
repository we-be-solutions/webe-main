<script lang="ts">
	import { browser } from '$app/environment';
	const id = 'G-2S5LJ8KQ4L';

	if (browser) {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function gtag(): void {
			window.dataLayer.push(arguments);
		};
		window.gtag('js', new Date());
		window.gtag('config', id);
	}
</script>

<svelte:head>
	{@html `<script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>`}
</svelte:head>
