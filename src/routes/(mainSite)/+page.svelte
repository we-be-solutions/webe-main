<script lang="ts">
	import CtaBtn from '$lib/components/CTABtn.svelte';
	import { onMount } from 'svelte';

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
	</video>
	<div class="absolute inset-0 bg-base-300/80 z-10"></div>
	<div class="relative z-10 container mx-auto px-4 text-center">
		<h2 class="text-5xl font-bold mb-4 text-base-content">
			Smarter Software for Growing Businesses
		</h2>
		<div class="mx-auto mt-1 mb-6 h-1 w-20 bg-primary rounded"></div>
		<p class="text-2xl text-base-content">
			We build internal tools, automate workflows, and create web experiences that scale with you.
		</p>
		<div class="mt-32">
			<CtaBtn />
		</div>
	</div>
</header>

<!-- New Section: Value Proposition -->
<section class="py-16 bg-base-200">
	<div class="container mx-auto my-12 px-4">
		<h2 class="text-3xl font-semibold mb-4">Custom Tools That Fit How You Work</h2>
		<p class="text-xl mt-12">
			Off-the-shelf software rarely fits perfectly. We build and integrate tools that match your
			exact needs—no more workarounds or wasted time.
		</p>
	</div>
</section>

<!-- New Section: Accessibility & Web Focus -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-8">Websites and Web Apps That Deliver</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<ul class="text-xl grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
			<li class="card bg-teal-800 text-white shadow-teal-900 shadow-lg p-8">
				<h3 class="card-title mb-4">Compliant & Accessible</h3>
				<p>
					We build with standards so your tools and sites are inclusive, usable, and future-proof.
				</p>
			</li>
			<li class="card bg-teal-800 text-white shadow-teal-900 shadow-lg p-8">
				<h3 class="card-title mb-4">Smarter Forms & Flows</h3>
				<p>
					Custom forms and logic that connect instantly to your backend or tools—no manual routing
					required.
				</p>
			</li>
			<li class="card bg-teal-800 text-white shadow-teal-900 shadow-lg p-8">
				<h3 class="card-title mb-4">Dashboards & Portals</h3>
				<p>
					Give your team or clients instant visibility over what matters—without platform hopping.
				</p>
			</li>
		</ul>
	</div>
</section>
<!-- Benefits Section -->
<section class="py-16 bg-base-100">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-8">The WeBe Advantage</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-xl">
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Custom Fit Software</strong><br /> Built around your operations—not the other way around.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Connect Your Tools & Systems</strong><br /> Eliminate silos and reduce manual entry
					across platforms.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Automated Reporting & Admin</strong><br /> Cut down on repetitive tasks and compliance
					bottlenecks.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Realtime Insights & Alerts</strong><br /> Stay on top of operations and issues as they
					happen.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>One-Entry Workflows</strong><br /> Enter data once, and see it populate everywhere
					it’s needed.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Effortless Staff Onboarding</strong><br /> Clean interfaces and workflows help your
					team get productive faster.
				</p>
			</li>
		</ul>
	</div>
</section>

<!-- Investment Impact Section -->
<section class="py-16 bg-base-200">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-6">Return on Better Systems</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<p class="mb-6 mt-8 text-xl">
			Smart internal tools and web systems pay for themselves by reducing time waste, improving
			accuracy, and growing with your needs.
		</p>
		<ul class="space-y-4 list-disc pl-6 text-xl mt-12">
			<li><span class="font-bold">10+ hours saved/week</span> with better internal tooling</li>
			<li><span class="font-bold">Fewer manual errors</span> through automation & integrations</li>
			<li><span class="font-bold">Better web experiences</span> for users and staff</li>
			<li><span class="font-bold">Faster team ramp-up</span> with intuitive tools</li>
		</ul>
	</div>
</section>

<!-- Testimonial Section -->
<section class="py-16 bg-base-100 hidden">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-3xl font-semibold mb-6">What Our Clients Say</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded mx-auto"></div>
		<blockquote class="text-xl italic max-w-3xl mx-auto">
			“Finally, someone who works with our budget and delivers results in weeks, not months. Our
			compliance is smoother, and the team is less stressed.”
		</blockquote>
		<p class="mt-4 text-base-content/70">– Nat Noir, Disability Support Coordinator</p>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-teal-800 text-primary-content text-center">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl text-white font-semibold mb-4">Let’s Build What You Actually Need</h2>
		<p class="text-xl text-white mb-8">
			Book a free call to explore how better tools, systems, and web experiences can grow your
			business.
		</p>
		<CtaBtn />
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
