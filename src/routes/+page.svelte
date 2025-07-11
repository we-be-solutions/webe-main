<script lang="ts">
	import CtaBtn from '$lib/components/CTABtn.svelte';
	import { onMount } from 'svelte';
	import GraphIcon from '../components/svg/graph_icon.svelte';
	import LightingIcon from '../components/svg/lighting_icon.svelte';
	import BeakerIcon from '../components/svg/beaker_icon.svelte';
	import CogIcon from '../components/svg/cog_icon.svelte';

	let { data } = $props();

	let videoEl: HTMLVideoElement | null = $state(null);

	onMount(() => {
		if (videoEl) {
			videoEl.playbackRate = 0.8;
			videoEl.play();

			videoEl.addEventListener('ended', () => {
				if (videoEl) {
					videoEl.currentTime = 1.0;
					videoEl.play();
				}
			});
		}
	});
</script>

<svelte:head>
	<link rel="preload" as="video" href="/laser.webm" type="video/webm" />
</svelte:head>
<header
	class="relative hero bg-base-100 h-screen overflow-hidden bg-cover bg-center"
	style="background-image: url('/poster.webp');"
>
	<!-- Background video (desktop only) -->
	<video
		bind:this={videoEl}
		class="absolute top-0 left-0 w-full h-full object-cover z-10"
		muted
		loop
		autoplay
		preload="auto"
		playsinline
	>
		<source src="/laser.webm" type="video/webm" />
		Your browser does not support the video tag.
	</video>

	<!-- Overlay (optional for text readability) -->
	<div class="absolute inset-0 bg-base-300/90 z-10"></div>

	<!-- Hero Content -->
	<div class="relative z-10 container mx-auto px-4 text-center">
		<h2 class="text-5xl font-bold mb-4 text-base-content">Keep Your Business on the Right Track</h2>
		<div class="mx-auto mt-1 mb-6 h-1 w-20 bg-primary rounded"></div>
		<p class="text-2xl text-base-content">
			Helping your business plan, build, and use the right technology the right way. So you can grow
			without the tech headaches.
		</p>
		<div class="mt-32">
			<CtaBtn />
		</div>
	</div>
</header>
<section class="py-16 bg-base-200">
	<div class="container mx-auto my-12 px-4">
		<h2 class="text-3xl font-semibold mb-4">The High-Impact Alternative to Big Tech Firms</h2>
		<div class="mt-1 mb-3 h-1 w-20 bg-primary rounded"></div>
		<p class="text-xl mt-12">
			WeBe Solutions is built for businesses that see technology as a growth engine and not just
			another expense. It's for those ready to invest in <strong>strategic tech</strong> to eliminate
			inefficiencies, make smarter decisions, and accelerate profits.
		</p>
	</div>
</section>

<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-4">Latest News</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<div id="article-container" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#await data.posts then posts}
				{#each posts as p}
					<a
						href="/blog/{p.slug}"
						class="card bg-base-300 shadow-md hover:shadow-xl hover:ring-2 hover:ring-secondary/60 hover:ring-offset-2 transition duration-200"
					>
						<article class="card-body prose prose-xl">
							<h3>{p.title}</h3>
							<h4 class="mt-1">{p.date}</h4>
							<div class="mx-auto mt-1 h-1 w-20 bg-secondary rounded"></div>
							<p>{p.description}</p>
							<div class="flex flex-wrap gap-2 mt-2">
								{#each p.categories as tag}
									<span class="badge badge-outline text-sm">{tag}</span>
								{/each}
							</div>
						</article>
					</a>
				{/each}
			{/await}
		</div>
	</div>
</section>

<section class="py-16 bg-base-200">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-8">The WeBe Solutions Service Guarantee</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
			<div class="card bg-base-100 shadow">
				<div class="card-body">
					<div
						class="ml-auto mr-auto mb-8 mt-8 w-24 h-24 sm:w-18 sm:h-18 md:w-24 md:h-24 text-primary"
					>
						<CogIcon />
					</div>
					<h3 class="card-title">Strategic Expertise, Powered by Insight</h3>
					<p class="prose">
						Your tech journey is guided by a consultant who prioritises your business objectives
						first, technology second.
					</p>
				</div>
			</div>
			<div class="card bg-base-100 shadow">
				<div class="card-body">
					<div
						class="ml-auto mr-auto mb-8 mt-8 w-24 h-24 sm:w-18 sm:h-18 md:w-24 md:h-24 text-primary"
					>
						<BeakerIcon />
					</div>
					<h3 class="card-title">Direct Access To The Decision Maker</h3>
					<p class="prose">
						No middlemen. You work directly with me, ensuring clear communication, fast decisions,
						and a streamlined process.
					</p>
				</div>
			</div>
			<div class="card bg-base-100 shadow">
				<div class="card-body">
					<div
						class="ml-auto mr-auto mb-8 mt-8 w-24 h-24 sm:w-18 sm:h-18 md:w-24 md:h-24 text-primary"
					>
						<LightingIcon />
					</div>
					<h3 class="card-title">Rapid, Results-Driven Guidance</h3>
					<p class="prose">
						An agile approach delivers insights and application in half the time of traditional
						consultancies.
					</p>
				</div>
			</div>
			<div class="card bg-base-100 shadow">
				<div class="card-body">
					<div
						class="ml-auto mr-auto mb-8 mt-8 w-24 h-24 sm:w-18 sm:h-18 md:w-24 md:h-24 text-primary"
					>
						<GraphIcon />
					</div>
					<h3 class="card-title">Measurable Business Outcomes, Not Just Tech</h3>
					<p class="prose">
						My work continues through building and support until you see real results and feel
						confident.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="relative py-16 bg-cover bg-center">
	<!-- Overlay -->
	<div class="absolute inset-0 z-0">
		<div class="absolute inset-0 bg-black/80"></div>
		<img
			src="/red-wall.webp"
			alt=""
			class="w-full h-full object-cover"
			loading="eager"
			fetchpriority="high"
		/>
	</div>
	<div class="container relative mx-auto px-4 z-10">
		<h2 class="text-3xl font-semibold mb-8">
			Strategic Tech Solutions for Confident Business Growth
		</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<ul class="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
			<li class="card bg-base-200 shadow p-8">
				<h3 class="card-title mb-8">Work Smarter with AI</h3>
				<p>Streamline operations and make smarter decisions—without the risk or complexity.</p>
			</li>
			<li class="card bg-base-200 shadow p-8">
				<h3 class="card-title mb-8">Achieve Goals with the Right Tech</h3>
				<p>Uncover how tech directly supports growth—minus the jargon.</p>
			</li>
			<li class="card bg-base-200 shadow p-8">
				<h3 class="card-title mb-8">Free Up Time Through Automation</h3>
				<p>Reclaim hours weekly by turning tasks into automations.</p>
			</li>
			<li class="card bg-base-200 shadow p-8">
				<h3 class="card-title mb-8">Bring Your Ideas to Life</h3>
				<p>See working prototypes that match your goals and budget.</p>
			</li>
			<li class="card bg-base-200 shadow p-8">
				<h3 class="card-title mb-8">Make Confident Tech Decisions</h3>
				<p>Get expert guidance—no second-guessing or wasted time.</p>
			</li>
			<li class="card bg-base-200 shadow p-8">
				<h3 class="card-title mb-8">Turn Plans into Reality</h3>
				<p>Launch with support from system builds to integrations.</p>
			</li>
			<li class="card bg-base-200 shadow p-8">
				<h3 class="card-title mb-8">Get More from Your Tools</h3>
				<p>Boost productivity by simplifying and streamlining workflows.</p>
			</li>
			<li class="card bg-base-200 shadow p-8">
				<h3 class="card-title mb-8">Choose the Right Tools with Confidence</h3>
				<p>Clear, unbiased platform recommendations that fit your needs.</p>
			</li>
		</ul>
	</div>
</section>

<section class="py-16 bg-base-200">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-6">The Investment That Pays for Itself</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<p class="mb-6 mt-8 text-xl">
			My clients don’t measure success by tech features or complexity—they measure it by the impact
			smart tech decisions have on their business:
		</p>
		<ul class="space-y-4 list-disc pl-6 text-xl mt-12">
			<li class="mb-8"><span class="font-bold">Hours saved</span> by streamlining workflows</li>
			<li class="mb-8">
				<span class="font-bold">Eliminate costly mistakes</span> with future-proof tech
			</li>
			<li class="mb-8">
				<span class="font-bold">Effective collaboration</span> through expert guidance
			</li>
			<li class="mb-8">
				<span class="font-bold">Faster delivery</span> via clear plans and support
			</li>
			<li class="mb-8"><span class="font-bold">Less stress</span> from scattered tools</li>
			<li class="mb-8">
				<span class="font-bold">Stronger decision-making</span> with real-world insight
			</li>
			<li class="mb-8">
				<span class="font-bold">More confident teams</span> who understand systems
			</li>
			<li class="mb-8">
				<span class="font-bold">Real business results</span> from well-aligned tech
			</li>
		</ul>
	</div>
</section>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="flex flex-col">
			<h2 class="text-3xl font-semibold mb-4">Focused Attention for Every Client</h2>
			<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
			<!-- Text on the right -->
			<div class="text-xl mt-8">
				<p class="mb-4">
					To ensure each business receives the care it deserves, I work with a small number of
					clients at a time.
				</p>
				<p>
					This ensures your business gets the focus and support needed to use tech to drive growth
					and efficiency.
				</p>
			</div>
		</div>
	</div>
</section>
