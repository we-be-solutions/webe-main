<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';

	const notFound = $derived(page.status === 404);
</script>

<Seo
	title={notFound ? 'Page not found | WeBe Solutions' : 'Something went wrong | WeBe Solutions'}
	path={page.url.pathname}
/>
<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:py-32">
	<p class="text-sm font-semibold tracking-wider text-primary uppercase">{page.status}</p>
	<h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
		{notFound ? 'This page isn’t here' : 'Something went wrong'}
	</h1>
	<p class="mt-5 text-lg leading-relaxed text-muted">
		{notFound
			? 'The page you’re looking for has moved or no longer exists.'
			: 'Please try again in a moment.'}
	</p>
	<a href="/" class="btn btn-primary mt-8">Back to the homepage</a>
</section>
