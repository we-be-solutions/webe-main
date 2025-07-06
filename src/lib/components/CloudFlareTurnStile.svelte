<script lang="ts">
	import { env } from '$env/dynamic/public';

	let { handleToken } = $props();

	let container: HTMLElement | undefined = $state();

	$effect(() => {
		const renderTurnstile = () => {
			//@ts-ignore
			if (window.turnstile && container) {
				//@ts-ignore
				window.turnstile.render(container, {
					sitekey: env.PUBLIC_CF_TS_SITE_KEY,
					callback: handleToken
				});
			}
		};

		renderTurnstile();
		let retry: NodeJS.Timeout;
		if (!container) {
			retry = setTimeout(renderTurnstile, 100);
		}

		return () => clearTimeout(retry);
	});
</script>

<div bind:this={container}></div>

<style>
	div {
		align-self: center;
		justify-self: center;
		margin: 5px;
	}
</style>
