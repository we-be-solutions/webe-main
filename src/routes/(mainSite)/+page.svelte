<script lang="ts">
	import CtaBtn from '$lib/components/CTABtn.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<link rel="preload" as="video" href="/laser.webm" type="video/webm" />
	<title>Custom Software & Automations That Just Work | WeBe</title>
	<meta
		name="description"
		content="Websites, tools, and automations that save hours. $800/day flat rate. Risk free: only pay when it works."
	/>
</svelte:head>

<!-- =========================
	HERO
========================= -->
<header class="relative min-h-screen flex items-center overflow-hidden bg-base-100">
	<!-- Background Video -->
	<video
		class="absolute inset-0 w-full h-full object-cover z-0"
		muted
		loop
		autoplay
		preload="auto"
		playsinline
	>
		<source src="/laser.webm" type="video/webm" />
	</video>

	<!-- Dark Gradient Overlay -->
	<div
		class="absolute inset-0 bg-gradient-to-b from-base-300/90 via-base-300/80 to-base-100/95 z-10"
	></div>

	<!-- Content Grid -->
	<div
		class="relative z-20 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
	>
		<div class="text-left">
			<h1
				class="text-5xl md:text-6xl font-extrabold tracking-tight text-base-content drop-shadow-lg"
			>
				Business Systems Made Easy
			</h1>
			<p class="mt-4 text-xl md:text-2xl text-blue-600 font-semibold">
				Websites. Automations. Internal tools. All built simple and fast.
			</p>
			<p class="mt-6 text-lg md:text-xl text-base-content/90 max-w-xl">
				Flat rate: <strong>$800 per day</strong>. No surprises. If it doesn’t work, you don’t pay.
			</p>

			<div class="mt-10 flex flex-wrap gap-4">
				<CtaBtn btnText="See Your Next Step (Free)" />
				<a href="#offer" class="btn btn-ghost">See Pricing</a>
			</div>
		</div>
	</div>
</header>

<!-- =========================
	OFFER / PRICING
========================= -->
<section id="offer" class="py-20 bg-white text-center">
	<div class="container mx-auto px-6 max-w-5xl">
		<h2 class="text-4xl sm:text-5xl font-bold">Simple Flat Day Rate</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>

		<p class="text-xl text-base-content/80 max-w-3xl mx-auto mb-12">
			<strong>$800/day.</strong> That’s it. You know the cost, the timeline, and the result — before
			we start.
		</p>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
			<div class="p-6 bg-base-100 rounded-xl shadow">
				<h3 class="text-xl font-bold mb-2">Basic Website</h3>
				<p class="text-base-content/80">1–3 days. A clean site that works on all devices.</p>
			</div>
			<div class="p-6 bg-base-100 rounded-xl shadow">
				<h3 class="text-xl font-bold mb-2">Bigger Website</h3>
				<p class="text-base-content/80">4–6 days. A 5+ page site for growing businesses.</p>
			</div>
			<div class="p-6 bg-base-100 rounded-xl shadow">
				<h3 class="text-xl font-bold mb-2">Internal Tools</h3>
				<p class="text-base-content/80">1+ days. Dashboards and apps that make work easier.</p>
			</div>
			<div class="p-6 bg-base-100 rounded-xl shadow">
				<h3 class="text-xl font-bold mb-2">Automations</h3>
				<p class="text-base-content/80">1+ days. Save hours by cutting repetitive tasks.</p>
			</div>
		</div>

		<div class="mt-12">
			<CtaBtn btnText="See Your Next Step (Free)" />
		</div>

		<div class="mt-16 bg-base-100 border border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
			<h3 class="text-2xl font-semibold">Our Simple Guarantee</h3>
			<p class="mt-3 text-base-content/80">
				If it doesn’t deliver the promised result, you don’t pay. No risk. No excuses.
			</p>
		</div>
	</div>
</section>

<!-- =========================
	PROCESS
========================= -->
<section id="process" class="py-20 bg-base-200">
	<div class="container mx-auto px-6 max-w-5xl text-center">
		<h2 class="text-4xl font-bold">How It Works</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>

		<ol class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
			<li class="card bg-base-100 p-6 shadow">
				<h3 class="font-bold text-lg mb-1">1) Diagnose</h3>
				<p class="text-base-content/80">Free call to find your biggest bottleneck.</p>
			</li>
			<li class="card bg-base-100 p-6 shadow">
				<h3 class="font-bold text-lg mb-1">2) Design</h3>
				<p class="text-base-content/80">We map the fastest, simplest solution.</p>
			</li>
			<li class="card bg-base-100 p-6 shadow">
				<h3 class="font-bold text-lg mb-1">3) Deploy</h3>
				<p class="text-base-content/80">We build, test, and deliver in days — not months.</p>
			</li>
			<li class="card bg-base-100 p-6 shadow">
				<h3 class="font-bold text-lg mb-1">4) Done</h3>
				<p class="text-base-content/80">You get a working system. If it fails, it’s free.</p>
			</li>
		</ol>

		<div class="mt-10">
			<CtaBtn btnText="See Your Next Step (Free)" />
		</div>
	</div>
</section>

<!-- =========================
	FAQ
========================= -->
<section id="faq" class="py-20 bg-white">
	<div class="container mx-auto px-6 max-w-3xl">
		<h2 class="text-4xl font-bold text-center">FAQ</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>

		<div class="space-y-4">
			<!-- Pricing -->
			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">What’s included in $800/day?</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						Full focus on your project. Design, build, test, and delivery. One price covers it all.
					</p>
				</div>
			</div>

			<!-- Scope -->
			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">How do I know how many days I’ll need?</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						We give you a clear estimate on the free call before you commit. No surprises.
					</p>
				</div>
			</div>

			<!-- Guarantee -->
			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">What if it doesn’t work?</div>
				<div class="collapse-content">
					<p class="text-base-content/80">You don’t pay. That’s our risk, not yours.</p>
				</div>
			</div>

			<!-- Ongoing -->
			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">Do you keep helping after delivery?</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						Yes, we offer ongoing support if you want us to maintain and grow your systems.
					</p>
				</div>
			</div>

			<!-- NEW SEO-friendly questions -->

			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">Can you build a full website in a day?</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						Yes, simple sites can be done in 1–3 days. Bigger sites take longer, but we tell you
						upfront how many days you’ll need.
					</p>
				</div>
			</div>

			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">
					Do you set up automations between my tools?
				</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						Yes. We connect your tools so data flows without double entry — saving you hours each
						week.
					</p>
				</div>
			</div>

			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">Do you work with AI tools?</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						Yes. We can set up or tune AI features like chat, search, or reporting to fit your
						business. Always within the $800/day model.
					</p>
				</div>
			</div>

			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">How fast can I see results?</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						Many clients see wins in the first day — like a working automation or a sharper website.
						Bigger builds take a few days more.
					</p>
				</div>
			</div>

			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">
					Do you only work with certain industries?
				</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						No. We help any business that needs a better website, faster systems, or fewer manual
						tasks. From trades to services, the model works the same.
					</p>
				</div>
			</div>
		</div>

		<div class="mt-10 text-center">
			<CtaBtn btnText="See Your Next Step (Free)" />
		</div>
	</div>
</section>

<!-- =========================
	CONTACT
========================= -->
<section id="contact" class="py-20 bg-slate-900 text-white text-center">
	<div class="container mx-auto px-6 max-w-3xl">
		<h2 class="text-4xl font-extrabold mb-4 tracking-tight">Let’s Get Started</h2>
		<p class="text-xl mb-8 opacity-90 leading-relaxed">
			One flat rate. $800/day. Risk-free. Your first win is only days away.
		</p>
		<div
			class="bg-white text-gray-900 border border-blue-100 rounded-2xl shadow-lg p-10 max-w-2xl mx-auto text-center"
		>
			<h3 class="text-3xl font-bold mb-4 text-blue-600">Book Your Free Call</h3>
			<p class="mb-6">We’ll scope your project, give you a day estimate, and lock in your price.</p>
			<CtaBtn btnText="See Your Next Step (Free)" />
		</div>
	</div>
</section>

<!-- =========================
	BLOG / INSIGHTS (OPTIONAL)
========================= -->
<section class="py-16 bg-base-100">
	<div class="container mx-auto px-6 max-w-6xl">
		<h2 class="text-3xl font-semibold mb-4">Latest Insights</h2>
		<div class="mb-6 h-1 w-20 bg-blue-600 rounded"></div>
		<div id="article-container" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#await data?.posts then posts}
				{#each posts as p}
					<a
						href="/blog/{p.slug}"
						class="card bg-base-200 shadow hover:shadow-xl hover:ring-2 hover:ring-blue-500/60 hover:ring-offset-2 transition duration-200"
					>
						<article class="card-body prose">
							<h3>{p.title}</h3>
							<p class="text-sm opacity-70">{p.date}</p>
							<div class="mx-auto mt-1 h-1 w-16 bg-slate-900 rounded"></div>
							<p class="mt-2">{p.description}</p>
							<div class="flex flex-wrap gap-2 mt-3">
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

<style>
	/* Smooth accordion animation */
	.collapse-content {
		transition: all 0.3s ease-in-out;
	}

	@keyframes glowPulse {
		0% {
			transform: scale(1);
			opacity: 0.6;
		}
		100% {
			transform: scale(1.5);
			opacity: 0.3;
		}
	}
</style>
