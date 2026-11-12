<script lang="ts">
	import CtaBtn from './CTABtn.svelte';
	import Section from './Section.svelte';
	import Seo from './Seo.svelte';
	import { site } from '$lib/config';
	import { engagements, services, type Service } from '$lib/content/site';

	let { service }: { service: Service } = $props();

	const other = $derived(services.find((s) => s.slug !== service.slug));

	const jsonLd = $derived([
		{
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: service.name,
			description: service.metaDescription,
			url: `${site.url}/${service.slug}`,
			areaServed: { '@type': 'Country', name: 'Australia' },
			provider: { '@type': 'ProfessionalService', name: site.name, url: site.url }
		}
	]);
</script>

<Seo
	title={service.metaTitle}
	description={service.metaDescription}
	path="/{service.slug}"
	{jsonLd}
/>

<!-- Hero -->
<section class="border-b border-base-300 bg-base-100">
	<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
		<nav aria-label="Breadcrumb" class="text-sm text-muted">
			<a href="/" class="hover:text-base-content">Home</a>
			<span aria-hidden="true" class="mx-2">/</span>
			<span aria-current="page">{service.name}</span>
		</nav>
		<p class="mt-8 text-sm font-semibold tracking-wider text-primary uppercase">
			{service.question}
		</p>
		<h1
			class="mt-4 max-w-4xl text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl md:text-6xl"
		>
			{service.proposition}
		</h1>
		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{service.summary}</p>
		<p class="mt-4 max-w-2xl leading-relaxed text-muted">{service.audience}</p>
		<div class="mt-10">
			<CtaBtn btnText={service.cta} topic={service.topic} size="lg" />
		</div>
	</div>
</section>

<!-- Situations -->
<Section id="situations" eyebrow={service.name} title={service.signsTitle}>
	<ul class="grid gap-x-10 gap-y-5 md:grid-cols-2">
		{#each service.signs as sign (sign)}
			<li class="flex gap-4 border-t border-base-300 pt-5 text-lg leading-relaxed">
				<span class="mt-3 h-1 w-3 flex-none rounded-full bg-secondary" aria-hidden="true"></span>
				<span>{sign}</span>
			</li>
		{/each}
	</ul>
</Section>

<!-- What I help with -->
<Section
	id="help"
	tone="muted"
	eyebrow="What I help with"
	title="Practical support where it matters most"
>
	<div class="grid gap-6 lg:grid-cols-3">
		{#each service.groups as group (group.title)}
			<article class="rounded-box border border-base-300 bg-base-100 p-6 sm:p-8">
				<h3 class="text-lg font-semibold tracking-tight">{group.title}</h3>
				<ul class="mt-5 space-y-3">
					{#each group.items as item (item)}
						<li class="flex gap-3 leading-relaxed">
							<svg
								class="mt-1.5 h-4 w-4 flex-none text-primary"
								viewBox="0 0 16 16"
								fill="none"
								aria-hidden="true"
							>
								<path
									d="M3 8.5l3 3 7-7"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>

	<div class="mt-10 rounded-box border-l-4 border-primary bg-base-100 p-6 sm:p-8">
		<p class="text-sm font-semibold tracking-wider text-muted uppercase">The outcome</p>
		<p class="mt-2 text-xl leading-snug font-semibold tracking-tight sm:text-2xl">
			{service.outcome}
		</p>
	</div>
	<p class="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{service.scopeNote}</p>
</Section>

<!-- Approach -->
<Section id="how" tone="dark" eyebrow="How I work" title="What you can expect">
	<ul class="grid gap-10 md:grid-cols-3">
		{#each service.approach as point, i (point.title)}
			<li class="border-t border-neutral-content/20 pt-6">
				<span class="font-mono text-sm text-secondary">0{i + 1}</span>
				<h3 class="mt-2 text-xl font-semibold tracking-tight">{point.title}</h3>
				<p class="mt-3 leading-relaxed text-neutral-content/75">{point.body}</p>
			</li>
		{/each}
	</ul>
</Section>

<!-- Ways to engage -->
<Section
	id="engage"
	eyebrow="Ways to engage"
	title="Start with a focused problem or ongoing support"
	intro="Every engagement is scoped with you. These are the most common ways to work together."
>
	<div class="grid gap-6 lg:grid-cols-3">
		{#each engagements as engagement (engagement.title)}
			<article class="rounded-box border border-base-300 p-6 sm:p-8">
				<h3 class="text-lg font-semibold tracking-tight">{engagement.title}</h3>
				<p class="mt-3 leading-relaxed">{engagement.summary}</p>
				<p class="mt-3 text-sm leading-relaxed text-muted">{engagement.suits}</p>
			</article>
		{/each}
	</div>
</Section>

<!-- Contact -->
<section class="bg-neutral text-neutral-content" aria-labelledby="service-contact-heading">
	<div
		class="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:px-8"
	>
		<div>
			<h2
				id="service-contact-heading"
				class="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
			>
				Tell me what you’re working through
			</h2>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-content/80">
				A short conversation is usually enough to work out whether I can help and what a sensible
				first step would be.
			</p>
			<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
				<CtaBtn btnText={service.cta} topic={service.topic} variant="light" size="lg" />
				<p class="text-neutral-content/80">
					Or email <a
						class="font-medium text-neutral-content underline decoration-secondary underline-offset-4 hover:decoration-2"
						href="mailto:{site.email}">{site.email}</a
					>
				</p>
			</div>
		</div>
		{#if other}
			<a
				href="/{other.slug}"
				class="group block rounded-box border border-neutral-content/20 p-6 transition-colors hover:border-secondary"
			>
				<p class="text-sm text-neutral-content/70">{other.question}</p>
				<p class="mt-2 text-lg font-semibold">
					{other.name}
					<span
						aria-hidden="true"
						class="inline-block transition-transform group-hover:translate-x-1">→</span
					>
				</p>
			</a>
		{/if}
	</div>
</section>
