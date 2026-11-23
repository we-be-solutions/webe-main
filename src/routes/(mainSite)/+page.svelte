<script lang="ts">
	import CtaBtn from '$lib/components/CTABtn.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
	import {
		cta,
		experience,
		faqs,
		headline,
		problems,
		promise,
		reassurance,
		services,
		steps,
		tagline
	} from '$lib/content/site';

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
					name: service.title,
					description: `${service.outcome} ${service.body}`
				}
			}))
		},
		{
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faqs.map((faq) => ({
				'@type': 'Question',
				name: faq.question,
				acceptedAnswer: { '@type': 'Answer', text: faq.answer }
			}))
		}
	];
</script>

<Seo
	title="Technical Leadership and Technology Consulting | WeBe Solutions"
	description={site.description}
	path="/"
	{jsonLd}
/>

{#snippet tick(className = '')}
	<svg class="h-4 w-4 flex-none {className}" viewBox="0 0 16 16" fill="none" aria-hidden="true">
		<path
			d="M3 8.5l3 3 7-7"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/snippet}

{#snippet reassure(className = '', tickClass = 'text-primary')}
	<ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm {className}" aria-label="What to expect">
		{#each reassurance as item (item)}
			<li class="flex items-center gap-2">
				{@render tick(tickClass)}
				{item}
			</li>
		{/each}
	</ul>
{/snippet}

{#snippet nextStep(lead: string)}
	<div class="mt-12 flex flex-col items-center gap-4 text-center">
		<p class="text-lg font-medium">{lead}</p>
		<CtaBtn btnText={cta} />
	</div>
{/snippet}

<!-- Hero -->
<section class="relative overflow-hidden bg-base-100">
	<div
		class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-base-300)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-base-300)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_top_right,black_5%,transparent_60%)] bg-size-[56px_56px] opacity-50"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6 md:pt-36 md:pb-28 lg:px-8">
		<div class="max-w-4xl">
			<p
				class="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-3.5 py-1.5 text-sm font-medium text-muted"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true"></span>
				Technology consulting for growing businesses
			</p>
			<h1
				class="mt-7 text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl md:text-7xl"
			>
				{headline}
			</h1>
			<p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
				For businesses without a dedicated tech lead. I help you choose the right technology, build
				better systems and grow a team that can do more on its own.
			</p>
			<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
				<CtaBtn btnText={cta} size="lg" />
				<a
					href="#problems"
					class="group inline-flex items-center gap-2 font-semibold text-base-content hover:text-primary"
				>
					See what I can help with
					<span class="transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span>
				</a>
			</div>
			{@render reassure('mt-8 text-muted')}
		</div>
	</div>
</section>

<!-- Problems -->
<Section
	id="problems"
	tone="muted"
	align="center"
	eyebrow="Sound familiar?"
	title="Problems I help businesses solve"
	intro="You don’t need a full-time technical leader or a big consulting firm. You need the right help at the right time."
>
	<ul class="mx-auto max-w-3xl space-y-3">
		{#each problems as item (item.problem)}
			<li
				class="rounded-box border border-base-300 bg-base-100 px-6 py-5 transition-shadow hover:shadow-sm sm:px-8 sm:py-6"
			>
				<p class="text-lg font-semibold tracking-tight sm:text-xl">{item.problem}</p>
				<p class="mt-2 flex items-start gap-2.5 leading-relaxed text-muted">
					<span class="text-primary" aria-hidden="true">→</span>
					<span>{item.fix}</span>
				</p>
			</li>
		{/each}
	</ul>
	{@render nextStep('Recognise one of these?')}
</Section>

<!-- Services -->
<Section
	id="services"
	align="center"
	eyebrow="How I can help"
	title="Two ways to make technology work for you"
	intro="One improves the technology. The other improves the people who use it. Most clients need a bit of both."
>
	<div class="mx-auto max-w-4xl space-y-8">
		{#each services as service, i (service.id)}
			<article
				id={service.id}
				class="scroll-mt-24 rounded-box border border-base-300 bg-base-100 p-7 shadow-[0_1px_2px_rgb(0_0_0/0.03),0_8px_24px_-12px_rgb(0_0_0/0.08)] sm:p-10"
				aria-labelledby="{service.id}-heading"
			>
				<h3
					id="{service.id}-heading"
					class="flex items-center gap-3 text-sm font-semibold text-primary"
				>
					<span
						class="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 font-mono text-xs"
						aria-hidden="true">0{i + 1}</span
					>
					{service.title}
				</h3>
				<p class="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{service.headline}</p>
				<p class="mt-3 text-xl font-medium tracking-tight">{service.outcome}</p>
				<p class="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{service.body}</p>

				<div class="mt-8 border-t border-base-300 pt-6">
					<h4 class="text-sm font-semibold">Helps with</h4>
					<ul class="mt-4 flex flex-wrap gap-2.5">
						{#each service.helpsWith as item (item)}
							<li
								class="inline-flex items-center gap-2 rounded-full bg-base-200 px-3.5 py-2 text-sm font-medium"
							>
								{@render tick('text-primary')}
								{item}
							</li>
						{/each}
					</ul>
				</div>
			</article>
		{/each}
	</div>
	{@render nextStep('Not sure which you need? That’s what the first chat is for.')}
</Section>

<!-- How it works -->
<Section
	id="how-it-works"
	tone="muted"
	align="center"
	eyebrow="How it works"
	title="Simple, from the first message"
	intro="No long sales process. Here’s exactly what happens when you get in touch."
>
	<div class="relative mx-auto max-w-6xl">
		<div
			class="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-base-300 lg:block"
			aria-hidden="true"
		></div>
		<ol class="relative mx-auto grid max-w-md gap-10 lg:max-w-none lg:grid-cols-4 lg:gap-8">
			{#each steps as step, i (step.title)}
				<li class="text-center">
					<span
						class="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-content ring-8 ring-base-200"
						aria-hidden="true">{i + 1}</span
					>
					<h3 class="mt-6 text-xl font-semibold tracking-tight">
						<span class="sr-only">Step {i + 1}: </span>{step.title}
					</h3>
					<p class="mx-auto mt-2 max-w-64 leading-relaxed text-muted">{step.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</Section>

<!-- Philosophy -->
<section
	id="philosophy"
	class="bg-neutral text-neutral-content"
	aria-labelledby="philosophy-heading"
>
	<div class="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
		<p class="text-sm font-semibold tracking-wider text-secondary uppercase">The promise</p>
		<h2
			id="philosophy-heading"
			class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
		>
			{promise}
		</h2>
		<p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-content/75 md:text-xl">
			Good help should leave you stronger. I fix today’s problem and help you handle the next one
			yourself.
		</p>
		<p class="mt-10 font-medium">{tagline}</p>
	</div>
</section>

<!-- About -->
<Section id="about" eyebrow="About WeBe" title="Advice from someone who builds.">
	<div class="max-w-2xl space-y-5 text-lg leading-relaxed">
		<p>
			Hi, I’m Brett. I’m a software engineer, solution architect and technical lead. I’ve spent my
			career building products, designing systems and helping other people grow.
		</p>
		<p class="text-muted">
			So my advice comes from real work, not theory. I don’t just tell you what to do. I can roll up
			my sleeves and help you do it.
		</p>
		<p class="text-muted">
			I started WeBe because many businesses need senior tech help but aren’t ready for a full-time
			technical leader. Now they can get it a few hours at a time.
		</p>
	</div>
	<ul class="mt-10 flex max-w-3xl flex-wrap gap-2.5" aria-label="Background">
		{#each experience as item (item)}
			<li class="rounded-full border border-base-300 px-3.5 py-2 text-sm font-medium text-muted">
				{item}
			</li>
		{/each}
	</ul>
</Section>

<!-- FAQ -->
<Section id="faq" tone="muted" align="center" eyebrow="Questions" title="Good to know">
	<div class="mx-auto max-w-3xl space-y-3">
		{#each faqs as faq (faq.question)}
			<details class="group rounded-box border border-base-300 bg-base-100 px-6 sm:px-8">
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden"
				>
					{faq.question}
					<svg
						class="h-5 w-5 flex-none text-primary transition-transform group-open:rotate-45"
						viewBox="0 0 20 20"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="M10 4v12M4 10h12"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round"
						/>
					</svg>
				</summary>
				<p class="pr-10 pb-6 leading-relaxed text-muted">{faq.answer}</p>
			</details>
		{/each}
	</div>
</Section>

<!-- Final CTA -->
<section
	id="contact"
	class="bg-base-100 px-4 py-20 sm:px-6 md:py-28 lg:px-8"
	aria-labelledby="contact-heading"
>
	<div
		class="relative mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] bg-neutral px-6 py-16 text-center text-neutral-content sm:px-12 md:py-24"
	>
		<div
			class="pointer-events-none absolute -top-32 left-1/2 h-64 w-xl -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl"
			aria-hidden="true"
		></div>
		<div class="relative mx-auto max-w-2xl">
			<p class="text-sm font-semibold tracking-wider text-secondary uppercase">
				Not sure where to start?
			</p>
			<h2
				id="contact-heading"
				class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
			>
				Tell me what’s slowing you down.
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-neutral-content/75">
				Send a few lines about the problem. I’ll reply myself within 1 business day and we’ll set up
				a short chat. You’ll come away with clear next steps, even if we never work together.
			</p>
			<div class="mt-10 flex flex-col items-center gap-6">
				<CtaBtn btnText={cta} variant="light" size="lg" />
				{@render reassure('justify-center text-neutral-content/80', 'text-secondary')}
				<p class="text-sm text-neutral-content/70">
					Prefer email? <a
						class="font-medium text-neutral-content underline decoration-secondary underline-offset-4 hover:decoration-2"
						href="mailto:{site.email}">{site.email}</a
					>
				</p>
			</div>
		</div>
	</div>
</section>
