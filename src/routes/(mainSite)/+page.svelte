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
			Smarter Tech for Disability Support Providers
		</h2>
		<div class="mx-auto mt-1 mb-6 h-1 w-20 bg-primary rounded"></div>
		<p class="text-2xl text-base-content">
			We help providers connect their systems, streamline compliance, and build accessible websites
			that actually work.
		</p>
		<div class="mt-32">
			<CtaBtn />
		</div>
	</div>
</header>

<!-- New Section: Value Proposition -->
<section class="py-16 bg-base-200">
	<div class="container mx-auto my-12 px-4">
		<h2 class="text-3xl font-semibold mb-4">Make Your Existing Tools Work Better</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<p class="text-xl mt-12">
			Your team shouldn't waste hours copying data between systems or struggling with clunky
			processes. We optimise what you already use and only add new tools when they truly help.
		</p>
	</div>
</section>

<!-- New Section: Accessibility & Web Focus -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-8">Websites That Work for Everyone</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<ul class="text-xl grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
			<li class="card bg-teal-800 text-white shadow-teal-900 shadow-lg p-8">
				<h3 class="card-title mb-4">Compliant & Accessible</h3>
				<p>
					We build with WCAG standards so participants, carers, and staff can easily navigate and
					access support.
				</p>
			</li>
			<li class="card bg-teal-800 text-white shadow-teal-900 shadow-lg p-8">
				<h3 class="card-title mb-4">Client Intake & Referral Forms</h3>
				<p>
					Digital forms that route to the right place instantly, reducing admin time and friction.
				</p>
			</li>
			<li class="card bg-teal-800 text-white shadow-teal-900 shadow-lg p-8">
				<h3 class="card-title mb-4">Simple Dashboards & Portals</h3>
				<p>Let participants view support plans, documents, and updates all in one place.</p>
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
					<strong>Connect Your Scheduling, Billing & Documentation</strong><br /> No more siloed systems
					or triple-entry admin.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Automated Compliance Reports</strong><br /> Reduce reporting stress with pre-filled
					templates and instant exports.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Participant Plan Tracking & Budget Alerts</strong><br /> See exactly where support
					funds go and where they’re running low.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>One-Entry Workflows</strong><br /> Enter it once, and it syncs across the tools you
					already use.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Streamlined Staff Training</strong><br /> Easy-to-follow tools and systems reduce onboarding
					time.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Real-Time Insights</strong><br /> See your service data in one place—from anywhere.
				</p>
			</li>
		</ul>
	</div>
</section>

<!-- Investment Impact Section -->
<section class="py-16 bg-base-200">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-6">The ROI of Smarter Tech</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<p class="mb-6 mt-8 text-xl">
			Our clients save thousands in wasted time, stress, and duplication. Smart, affordable
			solutions scale with your growth and don’t drain your budget.
		</p>
		<ul class="space-y-4 list-disc pl-6 text-xl mt-12">
			<li><span class="font-bold">10+ hours saved/week</span> through automation</li>
			<li>
				<span class="font-bold">Up to 90% fewer billing errors</span> with streamlined systems
			</li>
			<li>
				<span class="font-bold">More accessible websites</span> that meet compliance & connect with users
			</li>
			<li><span class="font-bold">Less time onboarding staff</span> thanks to smarter workflows</li>
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
		<h2 class="text-3xl text-white font-semibold mb-4">Let’s Make Tech Work for You</h2>
		<p class="text-xl text-white mb-8">
			Book a free call to see where we can save you time, reduce admin stress, and help you better
			serve your participants.
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

<!-- Keep existing sections for news, testimonials, guarantees, client limits, etc. but adjust language if needed later. -->
