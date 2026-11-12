<script lang="ts">
	import { env } from '$env/dynamic/public';

	type Turnstile = {
		render: (
			el: HTMLElement,
			options: { sitekey?: string; callback: (token: string) => void }
		) => string;
		remove: (widgetId: string) => void;
	};

	let { handleToken }: { handleToken: (token: string) => void } = $props();

	let container: HTMLElement | undefined = $state();

	$effect(() => {
		let widgetId: string | undefined;
		let retry: ReturnType<typeof setTimeout> | undefined;
		let attempts = 0;

		// The Turnstile script is loaded by the layout; wait for it if needed.
		const renderTurnstile = () => {
			const turnstile = (window as unknown as { turnstile?: Turnstile }).turnstile;
			if (turnstile && container) {
				widgetId = turnstile.render(container, {
					sitekey: env.PUBLIC_CF_TS_SITE_KEY,
					callback: handleToken
				});
			} else if (attempts++ < 50) {
				retry = setTimeout(renderTurnstile, 200);
			}
		};

		renderTurnstile();

		return () => {
			clearTimeout(retry);
			const turnstile = (window as unknown as { turnstile?: Turnstile }).turnstile;
			if (widgetId && turnstile) turnstile.remove(widgetId);
		};
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
