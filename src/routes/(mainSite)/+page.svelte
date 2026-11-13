<script lang="ts">
	import CtaBtn from '$lib/components/CTABtn.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
	import {
		capabilities,
		engagement,
		engagementFacts,
		experience,
		faqs,
		lowEffort,
		offer,
		outcomes,
		problems,
		steps
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
			makesOffer: {
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: offer.name,
					description: offer.summary
				}
			}
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
	title="Engineering Capability Accelerator: Coaching for Software Engineers | WeBe Solutions"
	description={site.description}
	path="/"
	{jsonLd}
/>

<!-- Hero -->
<section class="relative overflow-hidden border-b border-base-300 bg-base-100">
	<div
		class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-base-300)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-base-300)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_top_right,black_10%,transparent_65%)] bg-size-[48px_48px] opacity-60"
		aria-hidden="true"
	></div>

	<div
		class="relative mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16 lg:px-8"
	>
		<div>
			<p class="text-sm font-semibold tracking-wider text-primary uppercase">{offer.name}</p>
			<h1 class="mt-4 text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl md:text-6xl">
				Help your developers step up.
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
				Build more capable, confident and independent software engineers through personalised
				coaching on real work.
			</p>
			<p class="mt-4 max-w-2xl leading-relaxed text-muted">
				Develop the talent you already have, without taking your team away from the work that
				matters.
			</p>
			<div class="mt-10">
				<CtaBtn btnText="Let’s talk about your team" size="lg" />
			</div>
		</div>

		<aside
			class="rounded-box border border-base-300 bg-base-100/80 p-6 backdrop-blur-sm sm:p-8"
			aria-labelledby="outcomes-heading"
		>
			<h2 id="outcomes-heading" class="text-sm font-semibold tracking-wider text-muted uppercase">
				Developers who
			</h2>
			<ul class="mt-5 space-y-3.5">
				{#each outcomes as outcome (outcome)}
					<li class="flex gap-3">
						<svg
							class="mt-1 h-4 w-4 flex-none text-primary"
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
						<span class="font-medium">{outcome}</span>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</section>

<!-- The problem -->
<Section
	id="problem"
	eyebrow="The problem"
	title="Your team has potential. Help them realise it."
	intro="Most growing teams have capable developers who aren’t yet working at their full potential. It usually looks something like this:"
>
	<div class="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
		<ul class="space-y-px overflow-hidden rounded-box border border-base-300 bg-base-300">
			{#each problems as problem (problem)}
				<li class="flex gap-4 bg-base-100 px-6 py-5 text-lg leading-relaxed">
					<span class="mt-3 h-1 w-3 flex-none rounded-full bg-secondary" aria-hidden="true"></span>
					<span>{problem}</span>
				</li>
			{/each}
		</ul>
		<div class="space-y-5 text-lg leading-relaxed">
			<p class="text-xl font-semibold tracking-tight">
				Hiring another senior developer isn’t always the answer.
			</p>
			<p class="text-muted">
				It’s slow and expensive, and it can deepen the same pattern: more work flowing to fewer
				people.
			</p>
			<p class="text-muted">
				None of this means your developers aren’t good enough. It usually means they haven’t had the
				guidance and opportunity to grow into the next level. The bigger opportunity is to
				strengthen the people already in your business.
			</p>
		</div>
	</div>
</Section>

<!-- The offer -->
<Section
	id="offer"
	tone="muted"
	eyebrow="The {offer.name}"
	title="Real coaching. Real work. Real growth."
	intro="{offer.summary} Each engineer works towards personal goals across four capabilities."
>
	<div class="grid gap-6 md:grid-cols-2">
		{#each capabilities as capability, i (capability.title)}
			<article class="rounded-box border border-base-300 bg-base-100 p-6 sm:p-8">
				<span class="font-mono text-sm text-primary">0{i + 1}</span>
				<h3 class="mt-2 text-2xl font-semibold tracking-tight">{capability.title}</h3>
				<p class="mt-3 text-lg leading-relaxed text-muted">{capability.body}</p>
			</article>
		{/each}
	</div>

	<div
		class="mt-10 flex flex-col gap-5 rounded-box border border-base-300 bg-base-100 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
	>
		<p class="font-semibold">Built to fit around your team:</p>
		<ul class="flex flex-wrap gap-x-8 gap-y-3">
			{#each lowEffort as item (item)}
				<li class="flex items-center gap-2.5 text-muted">
					<svg
						class="h-4 w-4 flex-none text-primary"
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
					{item}
				</li>
			{/each}
		</ul>
	</div>
</Section>

<!-- How it works -->
<Section
	id="how-it-works"
	eyebrow="How it works"
	title="Four steps, applied to each engineer"
	intro="Development starts with the work your engineers are already doing, so it’s put into practice from the first week."
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

<!-- Engagement -->
<Section
	id="engagement"
	tone="muted"
	eyebrow="What an engagement looks like"
	title="Structured development, built around your team."
>
	<dl
		class="grid gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 sm:grid-cols-3"
	>
		{#each engagementFacts as fact (fact.label)}
			<div class="bg-base-100 p-6 sm:p-8">
				<dt class="text-sm text-muted">{fact.label}</dt>
				<dd class="mt-1 text-3xl font-semibold tracking-tight">{fact.value}</dd>
			</div>
		{/each}
	</dl>

	<ol class="mt-10 grid gap-6 lg:grid-cols-3">
		{#each engagement as phase (phase.label)}
			<li class="rounded-box border border-base-300 bg-base-100 p-6 sm:p-8">
				<p class="text-sm font-semibold tracking-wider text-primary uppercase">{phase.label}</p>
				<h3 class="mt-2 text-xl font-semibold tracking-tight">{phase.title}</h3>
				<ul class="mt-4 space-y-2.5">
					{#each phase.items as item (item)}
						<li class="flex gap-3 leading-relaxed">
							<span class="mt-2.5 h-1 w-3 flex-none rounded-full bg-secondary" aria-hidden="true"
							></span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ol>

	<p class="mt-8 max-w-3xl leading-relaxed text-muted">
		Coaching time is agreed with you up front, typically around four hours a week across the group.
		Every team is different, so the programme is shaped to your engineers and goals. Progress
		depends on the people and the work, so I don’t promise promotions or a set level of capability
		by a set date. You’ll see where each engineer is, and where they’re heading, at every review.
	</p>
</Section>

<!-- Why WeBe -->
<Section id="about" eyebrow="Why WeBe" title="Guidance from someone who builds software.">
	<div class="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
		<div class="max-w-2xl space-y-5 text-lg leading-relaxed">
			<p>
				I’m Brett, a senior software engineer, technical lead and solution architect, and the person
				behind WeBe Solutions.
			</p>
			<p>
				My background is hands-on: shipping software to production, designing and improving systems,
				leading technical decisions and helping other developers grow.
			</p>
			<p>
				That’s what the coaching draws on. It comes from doing the work, not from a framework or a
				slide deck. When I sit down with your engineers, we’re working on the same kind of problems
				I deal with myself.
			</p>
		</div>

		<aside class="self-start rounded-box border border-base-300 bg-base-200 p-6 sm:p-8">
			<h3 class="text-sm font-semibold tracking-wider text-muted uppercase">
				Practical experience in
			</h3>
			<ul class="mt-5 space-y-3">
				{#each experience as item (item)}
					<li class="flex gap-3">
						<span class="mt-2.5 h-1 w-3 flex-none rounded-full bg-secondary" aria-hidden="true"
						></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</Section>

<!-- Philosophy -->
<Section
	id="philosophy"
	tone="dark"
	eyebrow="The philosophy"
	title="Build capability, not dependency."
>
	<div class="grid max-w-5xl gap-8 text-lg leading-relaxed text-neutral-content/80 md:grid-cols-2">
		<p>
			The point of the engagement is to grow capability inside your business. I work alongside your
			developers, share what I know, sharpen their judgement and step back as they’re ready.
		</p>
		<p>
			The ideal outcome is a team that can do more on its own, without ongoing outside help. That
			includes help from me.
		</p>
	</div>
</Section>

<!-- FAQ -->
<Section id="faq" eyebrow="FAQ" title="Common questions">
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

<!-- Final CTA -->
<section id="contact" class="bg-neutral text-neutral-content" aria-labelledby="contact-heading">
	<div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
		<div class="max-w-3xl">
			<h2
				id="contact-heading"
				class="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
			>
				What could your team achieve with the right guidance?
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-neutral-content/80">
				Let’s talk about where your developers are today, where you’d like them to be and how
				practical coaching could help close the gap.
			</p>
			<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
				<CtaBtn btnText="Let’s talk about your team" variant="light" size="lg" />
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
