<script lang="ts">
	import CtaBtn from '$lib/components/CTABtn.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
	import { engagements, faqs, outcomes, principles, services, steps } from '$lib/content/site';

	const strengths = [
		'Hands-on software engineering and delivery',
		'Solution architecture and system design',
		'Technical leadership and decision-making',
		'Working with business stakeholders and suppliers',
		'Improving engineering and delivery practices',
		'Mentoring and enabling teams'
	];

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'ProfessionalService',
			name: site.name,
			url: site.url,
			logo: `${site.url}/icon.png`,
			image: site.ogImage,
			email: site.email,
			description: site.description,
			areaServed: { '@type': 'Country', name: 'Australia' },
			...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
			makesOffer: services.map((service) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: service.name,
					description: service.metaDescription,
					url: `${site.url}/${service.slug}`
				}
			}))
		},
		{
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faqs.map((faq) => ({
				'@type': 'Question',
				name: faq.question,
				acceptedAnswer: { '@type': 'Answer', text: faq.answer.join(' ') }
			}))
		}
	];
</script>

<Seo
	title="Technology Leadership & Independent Advice | WeBe Solutions"
	description={site.description}
	path="/"
	{jsonLd}
/>

<!-- Hero + find the right support -->
<section class="relative overflow-hidden border-b border-base-300 bg-base-100">
	<div
		class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-base-300)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-base-300)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_top_right,black_10%,transparent_65%)] bg-size-[48px_48px] opacity-60"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-24 lg:px-8">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold tracking-wider text-primary uppercase">
				Technology leadership and advisory
			</p>
			<h1 class="mt-4 text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl md:text-6xl">
				Better technology decisions. Stronger teams.
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-muted md:text-xl">
				Practical technology leadership and independent advice for businesses that want to get more
				from their technology.
			</p>
			<p class="mt-4 leading-relaxed text-muted">
				Whether you have an engineering team or need someone in your corner, WeBe provides the
				technical expertise to help you move forward with confidence.
			</p>
			<div class="mt-8">
				<CtaBtn btnText="Let’s talk" size="lg" />
			</div>
		</div>

		<div id="services" class="mt-16 md:mt-20">
			<h2 class="text-sm font-semibold tracking-wider text-muted uppercase">
				Find the right support
			</h2>
			<div class="mt-5 grid gap-6 md:grid-cols-2">
				{#each services as service (service.slug)}
					<a
						href="/{service.slug}"
						class="group flex flex-col rounded-box border border-base-300 bg-base-100 p-6 transition-colors hover:border-primary sm:p-8"
					>
						<p class="font-medium text-muted">{service.question}</p>
						<h3 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{service.name}</h3>
						<p class="mt-3 text-lg leading-relaxed">{service.proposition}</p>
						<p class="mt-3 flex-grow leading-relaxed text-muted">{service.audience}</p>
						<span
							class="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
							aria-hidden="true"
						>
							{service.cta}
							<span class="transition-transform group-hover:translate-x-1">→</span>
						</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Outcomes -->
<Section
	id="outcomes"
	eyebrow="What I help you achieve"
	title="Technology that serves the business"
	intro="Whichever way we work together, the aim is the same: better decisions, more capable people and fewer surprises."
>
	<ul
		class="grid gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each outcomes as outcome (outcome.title)}
			<li class="bg-base-100 p-6 sm:p-8">
				<h3 class="text-lg font-semibold tracking-tight">{outcome.title}</h3>
				<p class="mt-2 leading-relaxed text-muted">{outcome.body}</p>
			</li>
		{/each}
	</ul>
</Section>

<!-- Principles -->
<Section
	id="principles"
	tone="dark"
	eyebrow="Principles"
	title="Capability that stays with your business"
	intro="Both services are built on the same principles. The goal is for you to need outside help less over time, not more."
>
	<ol class="grid gap-x-10 gap-y-6 md:grid-cols-2">
		{#each principles as principle, i (principle)}
			<li class="flex gap-5 border-t border-neutral-content/20 pt-5">
				<span class="font-mono text-sm leading-7 text-secondary">0{i + 1}</span>
				<span class="text-lg leading-relaxed">{principle}</span>
			</li>
		{/each}
	</ol>
</Section>

<!-- How I work -->
<Section
	id="approach"
	eyebrow="How I work"
	title="A simple, repeatable approach"
	intro="The same four steps apply whether we’re strengthening a team or working through a single decision."
>
	<div class="relative">
		<div
			class="absolute top-5 right-[12.5%] left-[12.5%] hidden h-px bg-base-300 md:block"
			aria-hidden="true"
		></div>
		<ol class="relative grid gap-10 md:grid-cols-4 md:gap-6">
			{#each steps as step, i (step.title)}
				<li class="relative flex gap-5 md:block md:text-center">
					<span
						class="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-primary/30 bg-base-100 font-semibold text-primary md:mx-auto"
						aria-hidden="true">{i + 1}</span
					>
					<div>
						<h3 class="text-lg font-semibold tracking-tight md:mt-5">
							<span class="sr-only">Step {i + 1}: </span>{step.title}
						</h3>
						<p class="mt-2 leading-relaxed text-muted md:mx-auto md:max-w-60">{step.body}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</Section>

<!-- Ways to engage -->
<Section
	id="engage"
	tone="muted"
	eyebrow="Ways to engage"
	title="A focused problem or ongoing support"
	intro="Every engagement is scoped with you, based on what you need. These are the most common ways to work together."
>
	<div class="grid gap-6 lg:grid-cols-3">
		{#each engagements as engagement (engagement.title)}
			<article class="flex flex-col rounded-box border border-base-300 bg-base-100 p-6 sm:p-8">
				<h3 class="text-xl font-semibold tracking-tight">{engagement.title}</h3>
				<p class="mt-3 flex-grow leading-relaxed">{engagement.summary}</p>
				<p class="mt-4 border-t border-base-300 pt-4 text-sm leading-relaxed text-muted">
					{engagement.suits}
				</p>
			</article>
		{/each}
	</div>
	<div class="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
		<CtaBtn btnText="Let’s talk" />
		<p class="text-sm text-muted">
			Not sure which fits? That’s what the first conversation is for.
		</p>
	</div>
</Section>

<!-- About -->
<Section id="about" eyebrow="About WeBe" title="Hi, I’m Brett">
	<div class="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
		<div class="max-w-2xl space-y-5 text-lg leading-relaxed">
			<p>
				I’m the Principal Technology Consultant at WeBe Solutions, and an experienced software
				engineer with a background in technical leadership and solution architecture.
			</p>
			<p>
				My experience is hands-on. I’ve designed and delivered software, led technical decisions,
				worked with stakeholders to turn business needs into workable systems, improved how teams
				build and ship, and helped developers grow along the way.
			</p>
			<p>
				WeBe is deliberately small. When you work with WeBe, you work with me. I’m not there to take
				over or to sell you a project. I’m there to help you see your options clearly, make sound
				decisions, and leave your people better equipped than when I arrived.
			</p>
		</div>

		<aside class="self-start rounded-box border border-base-300 bg-base-200 p-6 sm:p-8">
			<h3 class="text-sm font-semibold tracking-wider text-muted uppercase">What I bring</h3>
			<ul class="mt-5 space-y-3">
				{#each strengths as strength (strength)}
					<li class="flex gap-3">
						<span class="mt-2.5 h-1 w-3 flex-none rounded-full bg-secondary" aria-hidden="true"
						></span>
						<span>{strength}</span>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</Section>

<!-- FAQ -->
<Section id="faq" tone="muted" eyebrow="FAQ" title="Common questions">
	<div class="max-w-3xl divide-y divide-base-300 border-y border-base-300">
		{#each faqs as faq (faq.question)}
			<details class="group py-2">
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-medium [&::-webkit-details-marker]:hidden"
				>
					{faq.question}
					<svg
						class="h-5 w-5 flex-none text-muted transition-transform group-open:rotate-45"
						viewBox="0 0 20 20"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="M10 4v12M4 10h12"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
					</svg>
				</summary>
				<div class="space-y-3 pr-10 pb-5 leading-relaxed text-muted">
					{#each faq.answer as paragraph (paragraph)}
						<p>{paragraph}</p>
					{/each}
				</div>
			</details>
		{/each}
	</div>
</Section>

<!-- Contact -->
<section id="contact" class="bg-neutral text-neutral-content" aria-labelledby="contact-heading">
	<div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
		<div class="max-w-3xl">
			<h2
				id="contact-heading"
				class="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
			>
				Tell me what you’re working through
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-neutral-content/80">
				A short conversation is usually enough to work out whether I can help. It might be:
			</p>
			<ul class="mt-5 space-y-3 text-lg">
				<li class="flex gap-3">
					<span class="mt-3 h-1 w-3 flex-none rounded-full bg-secondary" aria-hidden="true"></span>
					<span>a technical team you want to strengthen, or</span>
				</li>
				<li class="flex gap-3">
					<span class="mt-3 h-1 w-3 flex-none rounded-full bg-secondary" aria-hidden="true"></span>
					<span>a technology decision or challenge you need guidance with.</span>
				</li>
			</ul>
			<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
				<CtaBtn btnText="Let’s talk" variant="light" size="lg" />
				<p class="text-neutral-content/80">
					Or email <a
						class="font-medium text-neutral-content underline decoration-secondary underline-offset-4 hover:decoration-2"
						href="mailto:{site.email}">{site.email}</a
					>
				</p>
			</div>
		</div>
	</div>
</section>
