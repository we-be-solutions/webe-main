<script lang="ts">
	import { site } from '$lib/config';

	type Props = {
		title: string;
		description?: string;
		/** Path of the page, e.g. "/privacy". Used for canonical and og:url. */
		path?: string;
		/** Structured data objects, rendered as JSON-LD. */
		jsonLd?: Record<string, unknown>[];
	};

	let { title, description = site.description, path = '/', jsonLd = [] }: Props = $props();

	const url = $derived(new URL(path, site.url).href);

	// Escape "<" so JSON content can never close the script tag.
	const toScript = (data: Record<string, unknown>) =>
		`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</` +
		'script>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="en_AU" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={site.ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={site.ogImage} />

	{#each jsonLd as data, i (i)}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- static, escaped JSON-LD built from our own data -->
		{@html toScript(data)}
	{/each}
</svelte:head>
