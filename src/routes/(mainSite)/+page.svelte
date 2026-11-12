<script lang="ts">
	import CtaBtn from '$lib/components/CTABtn.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
	import { engagements, faqs, pillars, principles, problems, steps } from '$lib/content/site';

	const outcomes = [
		'Better technical decisions',
		'Stronger, more autonomous teams',
		'More predictable delivery',
		'A clearer understanding of risk',
		'Sustainable engineering practices',
		'Capability that stays after the engagement'
	];

	const strengths = [
		'Hands-on software delivery',
		'Technical leadership and decision-making',
		'Solution architecture and system design',
		'Working with business stakeholders',
		'Improving engineering practices',
		'Mentoring developers and technical leads'
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
			sameAs: [site.linkedin],
			knowsAbout: [
				'Fractional engineering leadership',
				'Solution architecture',
				'Software delivery improvement',
				'Engineering risk and quality',
				'Software development lifecycle'
			]
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
	title="Fractional Engineering Leadership for Software Teams | WeBe Solutions"
	description={site.description}
	path="/"
	{jsonLd}
/>

<!-- Hero -->
<section class="relative overflow-hidden border-b border-base-300 bg-base-100">
	<div
		class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-base-300)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-base-300)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_65%)] bg-[size:48px_48px] opacity-60"
		aria-hidden="true"
	></div>

	<div
		class="relative mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-32"
	>
		<div>
			<p class="text-sm font-semibold tracking-wider text-primary uppercase">
				Fractional engineering leadership
			</p>
			<h1 class="mt-4 text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl md:text-6xl">
				Build a stronger engineering team.
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
				Practical engineering leadership, solution architecture and delivery improvement for
				businesses that want to get more from the teams they already have.
			</p>
			<p class="mt-4 max-w-2xl leading-relaxed text-muted">
				For Australian businesses with an in-house development team that needs experienced technical
				leadership, without hiring a full-time engineering executive.
			</p>
			<div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
				<CtaBtn btnText="Discuss your engineering challenges" size="lg" />
				<a
					href="#services"
					class="btn btn-ghost h-13 px-5 text-base font-medium text-base-content/80"
				>
					See how I can help
					<span aria-hidden="true">→</span>
				</a>
			</div>
		</div>

		<aside
			class="rounded-box border border-base-300 bg-base-100/80 p-6 backdrop-blur-sm sm:p-8"
			aria-labelledby="outcomes-heading"
		>
			<h2 id="outcomes-heading" class="text-sm font-semibold tracking-wider text-muted uppercase">
				What changes
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
	id="challenges"
	eyebrow="The challenge"
	title="As the software grows, the team needs more than more code"
	intro="Most growing businesses reach a point where the engineering team is capable, but the way it’s led and organised hasn’t kept pace. It rarely shows up as one big failure. It shows up like this:"
>
	<ul
		class="grid gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each problems as problem (problem.title)}
			<li class="bg-base-100 p-6 sm:p-8">
				<h3 class="text-lg font-semibold tracking-tight">{problem.title}</h3>
				<p class="mt-2 leading-relaxed text-muted">{problem.body}</p>
			</li>
		{/each}
	</ul>
	<p class="mt-10 max-w-3xl text-lg leading-relaxed">
		None of this means the team is doing a poor job. It usually means they need experienced
		leadership and room to step up, without the business committing to a full-time executive before
		it’s ready.
	</p>
</Section>

<!-- Differentiator -->
<Section
	id="philosophy"
	tone="dark"
	eyebrow="The approach"
	title="Strengthen the team you have"
	intro="This isn’t outsourcing, staff augmentation or a consultant who becomes a permanent dependency. The aim is to improve how your team thinks, decides, designs and delivers, so the capability stays when the engagement ends."
>
	<ul class="grid gap-10 md:grid-cols-3">
		{#each principles as principle, i (principle.title)}
			<li class="border-t border-neutral-content/20 pt-6">
				<span class="font-mono text-sm text-secondary">0{i + 1}</span>
				<h3 class="mt-2 text-xl font-semibold tracking-tight">{principle.title}</h3>
				<p class="mt-3 leading-relaxed text-neutral-content/75">{principle.body}</p>
			</li>
		{/each}
	</ul>
</Section>

<!-- Services -->
<Section
	id="services"
	eyebrow="Services"
	title="Where I can help"
	intro="Four areas of focus, usually combined to suit the team. Each one starts with the outcome your business needs."
>
	<div class="grid gap-6 md:grid-cols-2">
		{#each pillars as pillar (pillar.id)}
			<article
				id="service-{pillar.id}"
				class="flex flex-col rounded-box border border-base-300 bg-base-100 p-6 transition-colors hover:border-primary/40 sm:p-8"
			>
				<h3 class="text-sm font-semibold tracking-wide text-primary">{pillar.title}</h3>
				<p class="mt-3 text-2xl leading-snug font-semibold tracking-tight">{pillar.outcome}</p>
				<p class="mt-3 leading-relaxed text-muted">{pillar.body}</p>
				<ul class="mt-6 space-y-2 border-t border-base-300 pt-6 text-[0.95rem]">
					{#each pillar.points as point (point)}
						<li class="flex gap-3">
							<span class="mt-2.5 h-1 w-3 flex-none rounded-full bg-secondary" aria-hidden="true"
							></span>
							<span>{point}</span>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
	<p class="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
		Engineering risk work focuses on architecture, operations and delivery. It isn’t a formal
		cybersecurity audit, certification or regulatory assurance.
	</p>
</Section>

<!-- Engagements -->
<Section
	id="engagements"
	tone="muted"
	eyebrow="Ways to work together"
	title="Start where it’s most useful"
	intro="Every engagement is scoped with you, based on your team and what you need. These are the three most common starting points."
>
	<div class="grid gap-6 lg:grid-cols-3">
		{#each engagements as engagement (engagement.title)}
			<article class="flex flex-col rounded-box border border-base-300 bg-base-100 p-6 sm:p-8">
				<h3 class="text-xl font-semibold tracking-tight">{engagement.title}</h3>
				<p class="mt-3 leading-relaxed">{engagement.summary}</p>
				<p class="mt-3 text-sm leading-relaxed text-muted">{engagement.suits}</p>
				<h4 class="mt-6 text-xs font-semibold tracking-wider text-muted uppercase">
					What it involves
				</h4>
				<ul class="mt-3 space-y-2.5 text-[0.95rem]">
					{#each engagement.includes as item (item)}
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
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
	<div class="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
		<CtaBtn btnText="Discuss your engineering challenges" />
		<p class="text-sm text-muted">
			Not sure which fits? That’s what the first conversation is for.
		</p>
	</div>
</Section>

<!-- How I work -->
<Section
	id="approach"
	eyebrow="How I work"
	title="A simple, repeatable approach"
	intro="The same four steps apply whether we’re looking at the whole engineering function or one specific problem."
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
						<p class="mt-2 leading-relaxed text-muted md:mx-auto md:max-w-[15rem]">{step.body}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
	<p class="mx-auto mt-12 max-w-2xl text-center leading-relaxed text-muted">
		Over time, the cycle repeats with your team leading more of each step. That’s how you know the
		capability is staying.
	</p>
</Section>

<!-- About -->
<Section id="about" tone="muted" eyebrow="About" title="Hi, I’m Brett">
	<div class="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
		<div class="max-w-2xl space-y-5 text-lg leading-relaxed">
			<p>
				I’m a senior software engineer with experience in technical leadership and solution
				architecture, and the person behind WeBe Solutions.
			</p>
			<p>
				My background is hands-on. I’ve delivered software, led technical decisions, worked with
				stakeholders to turn business needs into workable systems, improved how teams build and
				ship, and mentored developers along the way.
			</p>
			<p>
				That shapes how I work with clients. I’m not there to take over or to tell your team they’ve
				been doing it wrong. Most teams already have capable people. What they often lack is time,
				perspective and someone who has worked through similar problems before.
			</p>
			<p>I’d rather your team needs me less over time, not more.</p>
		</div>

		<aside class="self-start rounded-box border border-base-300 bg-base-100 p-6 sm:p-8">
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

<!-- Contact -->
<section id="contact" class="bg-neutral text-neutral-content" aria-labelledby="contact-heading">
	<div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
		<div class="max-w-3xl">
			<h2
				id="contact-heading"
				class="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
			>
				Let’s talk about your team
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-neutral-content/80">
				If your team is capable but stretched, or you’re not sure where to start, a conversation is
				a good first step. Tell me what’s going on and we’ll work out together whether I can help.
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
