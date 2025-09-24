<script lang="ts">
	import CtaBtn from '$lib/components/CTABtn.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<link rel="preload" as="video" href="/laser.webm" type="video/webm" />
	<title>Custom Software & Automations That Just Work | WeBe</title>
	<meta
		name="description"
		content="Scripts, APIs, and integrations that kill busywork and connect your tools. $0 risk: only pay when it works as promised."
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
		<!-- Left: Text -->
		<div class="text-left">
			<h1
				class="text-5xl md:text-6xl font-extrabold tracking-tight text-base-content drop-shadow-lg"
			>
				Business Systems Made Easy
			</h1>
			<p class="mt-6 text-xl md:text-2xl text-base-content/90 max-w-xl">
				We help SMEs cut busywork, connect tools, and grow with confidence. Our 4 pillars keep it
				simple:
			</p>

			<div class="mt-8 grid gap-4 text-lg text-base-content/90">
				<div>
					✅ <strong>Websites & Apps</strong> — modern, practical tools that bring in leads and support
					your team.
				</div>
				<div>
					✅ <strong>Automations</strong> — kill double entry and free staff from repetitive tasks.
				</div>
				<div>
					✅ <strong>Integrations</strong> — make your systems talk so reports and workflows just work.
				</div>
				<div>
					✅ <strong>Cloud Consulting</strong> — design clear, scalable platforms that give you visibility
					and control.
				</div>
			</div>

			<div class="mt-10 flex flex-wrap gap-4">
				<CtaBtn btnText="Book your free Diagnosis call" />
				<a href="#offer" class="btn btn-ghost">See the $0 Risk Offer</a>
			</div>

			<p class="mt-6 text-lg font-semibold text-blue-600">
				Start with a <span class="text-black">free Diagnose call</span>. We’ll map your biggest
				bottleneck and show you your first quick win.
			</p>
			<p class="mt-6 text-lg font-semibold text-black-600">
				100% risk-free: If the software doesn’t deliver, you don’t pay. Ever.
			</p>

			<!-- Trust Badges -->
			<div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-base-content/70">
				<div class="badge badge-outline">Money-Back Guarantee</div>
				<div class="badge badge-outline">Fair, Flat Pricing</div>
				<div class="badge badge-outline">Fast Turnaround</div>
				<div class="badge badge-outline">Simple Tech Stack</div>
			</div>
		</div>

		<!-- Right: Pains -->
		<div class="bg-white/90 p-8 rounded-xl shadow-xl">
			<h3 class="text-2xl font-bold mb-4 text-blue-600">
				If this sounds familiar, we should talk:
			</h3>
			<ul class="space-y-3 text-base-content/90 leading-relaxed">
				<!-- Websites & Apps -->
				<li>✔ Your website looks like it’s from 2008 and scares off customers</li>
				<li>✔ You’ve got “apps from the before times” that nobody wants to use</li>

				<!-- Automations -->
				<li>✔ Staff waste hours copying data between spreadsheets</li>
				<li>✔ Key steps get missed because everything relies on memory</li>

				<!-- Integrations -->
				<li>✔ Tools don’t talk: invoices in one system, jobs in another, nothing matches</li>
				<li>✔ Reports take half a day to cobble together (and still feel wrong)</li>

				<!-- Cloud Consulting -->
				<li>✔ Growth feels messy: too many systems, no clear plan</li>
				<li>✔ You’ve outgrown “starter” tools but don’t know the next step</li>
			</ul>
			<div class="mt-6">
				<CtaBtn btnText="Kill the Busywork" />
			</div>
		</div>
	</div>

	<!-- Bottom Fade -->
	<div
		class="absolute bottom-0 w-full h-28 bg-gradient-to-t from-base-100 to-transparent z-10"
	></div>
</header>

<!-- =========================
  PLAIN ENGLISH SERVICES
========================= -->
<section id="services" class="py-16 bg-white">
	<div class="container mx-auto px-6 max-w-4xl text-center">
		<h2 class="text-4xl sm:text-5xl font-bold text-base-content">Business Systems Made Easy</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>

		<p class="text-lg md:text-xl text-base-content/80 mb-10">
			If your team is wasting hours on clunky systems, chasing spreadsheets, or double-handling
			data, we fix that. We build simple, connected software that saves time, cuts stress, and keeps
			your business moving.
		</p>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
			<div class="p-6 bg-base-100 rounded-xl shadow">
				<h3 class="text-xl font-bold mb-2">Websites & Apps</h3>
				<p class="text-base-content/80">
					Sick of a site that looks dated or doesn’t deliver? We build websites and apps that bring
					in leads, support your staff, and actually make business easier.
				</p>
			</div>

			<div class="p-6 bg-base-100 rounded-xl shadow">
				<h3 class="text-xl font-bold mb-2">Automations</h3>
				<p class="text-base-content/80">
					Still copying the same info between systems? We create automations that take care of
					repetitive work so your team can focus on what matters.
				</p>
			</div>

			<div class="p-6 bg-base-100 rounded-xl shadow">
				<h3 class="text-xl font-bold mb-2">System Integrations</h3>
				<p class="text-base-content/80">
					Tired of tools that don’t talk to each other? We connect your accounting, CRM, and job
					systems so everything flows without spreadsheets or guesswork.
				</p>
			</div>

			<div class="p-6 bg-base-100 rounded-xl shadow">
				<h3 class="text-xl font-bold mb-2">Cloud Consulting</h3>
				<p class="text-base-content/80">
					Growth feels messy without clear systems. We design and set up cloud-based business
					platforms that give you visibility, control, and confidence.
				</p>
			</div>
		</div>

		<div class="mt-10">
			<CtaBtn btnText="Book your free Diagnosis call" />
		</div>
	</div>
</section>

<!-- =========================
	OUR 4 PILLARS
========================= -->
<section id="solutions" class="py-20 bg-base-200">
	<div class="container mx-auto px-6 max-w-6xl">
		<h2 class="text-4xl sm:text-5xl font-bold text-center">
			Our 4 Pillars of Simple Business Systems
		</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Websites & Apps -->
			<div class="card bg-base-100 p-6 shadow">
				<h3 class="text-2xl font-bold mb-4 text-blue-600">Websites & Apps</h3>
				<div class="mb-4">
					<h4 class="text-sm font-semibold uppercase tracking-wide text-base-content/70 mb-2">
						Common Problems
					</h4>
					<ul class="list-disc list-inside text-base-content/80 space-y-1">
						<li>Outdated site that drives customers away</li>
						<li>Old, clunky apps staff avoid using</li>
					</ul>
				</div>
				<div>
					<h4 class="text-sm font-semibold uppercase tracking-wide text-base-content/70 mb-2">
						Our Solution
					</h4>
					<p class="text-base-content/90">
						Modern, practical tools that look sharp, work smoothly, and win business.
					</p>
				</div>
			</div>

			<!-- Automations -->
			<div class="card bg-base-100 p-6 shadow">
				<h3 class="text-2xl font-bold mb-4 text-blue-600">Automations</h3>
				<div class="mb-4">
					<h4 class="text-sm font-semibold uppercase tracking-wide text-base-content/70 mb-2">
						Common Problems
					</h4>
					<ul class="list-disc list-inside text-base-content/80 space-y-1">
						<li>Staff wasting hours copying data</li>
						<li>Missed steps causing costly errors</li>
					</ul>
				</div>
				<div>
					<h4 class="text-sm font-semibold uppercase tracking-wide text-base-content/70 mb-2">
						Our Solution
					</h4>
					<p class="text-base-content/90">
						Automations that remove busywork so your team can focus on what matters.
					</p>
				</div>
			</div>

			<!-- Integrations -->
			<div class="card bg-base-100 p-6 shadow">
				<h3 class="text-2xl font-bold mb-4 text-blue-600">Integrations</h3>
				<div class="mb-4">
					<h4 class="text-sm font-semibold uppercase tracking-wide text-base-content/70 mb-2">
						Common Problems
					</h4>
					<ul class="list-disc list-inside text-base-content/80 space-y-1">
						<li>Tools that don’t talk to each other</li>
						<li>Reports that take hours and don’t match</li>
					</ul>
				</div>
				<div>
					<h4 class="text-sm font-semibold uppercase tracking-wide text-base-content/70 mb-2">
						Our Solution
					</h4>
					<p class="text-base-content/90">
						Connected systems where information flows and reports are instant.
					</p>
				</div>
			</div>

			<!-- Cloud Consulting -->
			<div class="card bg-base-100 p-6 shadow">
				<h3 class="text-2xl font-bold mb-4 text-blue-600">Cloud Consulting</h3>
				<div class="mb-4">
					<h4 class="text-sm font-semibold uppercase tracking-wide text-base-content/70 mb-2">
						Common Problems
					</h4>
					<ul class="list-disc list-inside text-base-content/80 space-y-1">
						<li>Growth feels messy with too many tools</li>
						<li>Outgrown starter software with no clear next step</li>
					</ul>
				</div>
				<div>
					<h4 class="text-sm font-semibold uppercase tracking-wide text-base-content/70 mb-2">
						Our Solution
					</h4>
					<p class="text-base-content/90">
						Clear, scalable cloud systems that give you visibility and control as you grow.
					</p>
				</div>
			</div>
		</div>

		<div class="mt-12 text-center">
			<CtaBtn btnText="Book your free Diagnosis call" />
		</div>
	</div>
</section>
<!-- =========================
	HORMOZI OFFER - VALUE LADDER
========================= -->
<section id="offer" class="py-20 bg-base-100">
	<div class="container mx-auto px-6 max-w-6xl text-center">
		<h2 class="text-4xl sm:text-5xl font-bold">
			The <span class="text-blue-600">$0 Risk</span> Growth Ladder
		</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>

		<p class="text-xl max-w-3xl mx-auto leading-relaxed">
			Start free, grow step by step. Each rung adds more leverage — from a quick website fix to a
			full business system redesign. <strong
				>Get your money back and keep the work done if we don't deliver results.</strong
			>
		</p>

		<!-- Ladder Stack -->
		<div class="mt-16 relative">
			<div class="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 -translate-x-1/2"></div>

			<!-- Free Call -->
			<div class="relative z-10 mb-12">
				<div
					class="card bg-green-50 border border-green-300 p-8 rounded-xl shadow-lg max-w-xl mx-auto"
				>
					<h3 class="text-2xl font-bold mb-2 text-green-600">
						Free Diagnose Call – Only 3 available monthly
					</h3>
					<p class="mb-4 text-base-content/80">
						30–45 minutes to map your operations, spot the biggest bottleneck, and identify your
						first quick win — whether it’s a site update, automation, or integration.
					</p>
					<p class="mb-4 text-base-content/80">
						You’ll walk away with a process map, a clear problem defined, and a written
						recommendation for the first improvement.
					</p>
					<p class="text-4xl font-extrabold text-green-600">FREE</p>
					<CtaBtn btnText="Book your free Diagnosis call" />
				</div>
			</div>

			<!-- Starter -->
			<div class="relative mb-12">
				<div class="card bg-base-200 p-8 rounded-xl shadow-lg max-w-xl mx-auto">
					<h3 class="text-2xl font-bold mb-2 text-blue-600">Starter</h3>
					<p class="mb-4 text-base-content/80">
						A focused quick win: a landing page refresh, a small automation, or a simple system link
						that saves hours each week.
					</p>
					<p class="text-4xl font-extrabold text-base-content">$500–$1k</p>
					<p class="text-sm text-base-content/60 mb-6">Flat, outcome-based</p>
					<CtaBtn btnText="Start Small" />
				</div>
			</div>

			<!-- Growth -->
			<div class="relative mb-12">
				<div
					class="card bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600 max-w-xl mx-auto"
				>
					<h3 class="text-2xl font-bold mb-2 text-blue-600">Growth</h3>
					<p class="mb-4 text-base-content/80">
						Custom websites, integrations, or internal tools that connect multiple systems and scale
						with your business. Build once, use forever.
					</p>
					<p class="text-4xl font-extrabold text-base-content">from $2.5k</p>
					<p class="text-sm text-base-content/60 mb-6">Project-based</p>
					<CtaBtn btnText="Build Systems That Talk" />
				</div>
			</div>

			<!-- Scale -->
			<div class="relative">
				<div class="card bg-base-200 p-8 rounded-xl shadow-lg max-w-xl mx-auto">
					<h3 class="text-2xl font-bold mb-2 text-blue-600">Scale</h3>
					<p class="mb-4 text-base-content/80">
						Full business system design across your 4 pillars: a modern site and apps, smart
						automations, integrated tools, and a scalable cloud platform for real visibility and
						control.
					</p>
					<p class="text-4xl font-extrabold text-base-content">Custom</p>
					<p class="text-sm text-base-content/60 mb-6">Quoted after scope</p>
					<CtaBtn btnText="Discuss a Big Build" />
				</div>
			</div>
		</div>

		<!-- Risk Reversal Card -->
		<div class="mt-16 bg-white border border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
			<h3 class="text-2xl font-semibold">Simple, Strong Guarantee</h3>
			<p class="mt-3 text-base-content/80">
				If you’re not thrilled, I refund you. If it fails to deliver the promised outcome, you keep
				it free. No risk. No excuses.
			</p>
		</div>
	</div>
</section>

<!-- =========================
	PROCESS
========================= -->
<section id="process" class="py-20 bg-base-200">
	<div class="container mx-auto px-6 max-w-5xl text-center">
		<h2 class="text-4xl font-bold">Our 4D Process</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>
		<ol class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
			<li class="card bg-base-100 p-6 shadow">
				<h3 class="font-bold text-lg mb-1">1) Diagnose</h3>
				<p class="text-base-content/80">
					We start with a free call to uncover where your systems are holding you back — whether
					it’s an outdated website, clunky apps, manual processes, tools that don’t connect, or
					confusing data. You’ll leave with clarity and a plan.
				</p>
			</li>
			<li class="card bg-base-100 p-6 shadow">
				<h3 class="font-bold text-lg mb-1">2) Design</h3>
				<p class="text-base-content/80">
					We sketch the simplest, smartest way forward. That might mean a modern website, automation
					to cut busywork, integrations to make tools talk, or a cloud setup that scales. Always
					practical, always business-first.
				</p>
			</li>
			<li class="card bg-base-100 p-6 shadow">
				<h3 class="font-bold text-lg mb-1">3) Deploy</h3>
				<p class="text-base-content/80">
					We build and launch quickly. Whether it’s a new site, a key automation, connected systems,
					or a full cloud platform — we implement, test with real data, and make sure it works from
					day one.
				</p>
			</li>
			<li class="card bg-base-100 p-6 shadow">
				<h3 class="font-bold text-lg mb-1">4) Drive</h3>
				<p class="text-base-content/80">
					Once live, we measure results and fine-tune. From website conversions to time saved by
					automation, from clean reports to cloud visibility — small tweaks compound into big
					long-term gains.
				</p>
			</li>
		</ol>
		<div class="mt-10">
			<CtaBtn btnText="Book your free Diagnosis call" />
		</div>
	</div>
</section>

<!-- =========================
	RESULTS / SOCIAL PROOF PLACEHOLDERS
========================= -->
<section id="proof" class="py-20 bg-base-100 hidden">
	<div class="container mx-auto px-6 max-w-6xl">
		<h2 class="text-4xl font-bold text-center">Recent Wins & Case Studies</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>

		<!-- Replace placeholders with real cases as they come in -->
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<article class="card bg-base-200 p-6 shadow">
				<h3 class="font-bold text-lg">[Placeholder] Ops Automation</h3>
				<p class="text-base-content/80">
					Cut manual admin by 8 hours/week via CRM ↔ invoicing sync.
				</p>
			</article>
			<article class="card bg-base-200 p-6 shadow">
				<h3 class="font-bold text-lg">[Placeholder] API Integration</h3>
				<p class="text-base-content/80">
					Eliminated duplicate data entry across ERP and warehouse app.
				</p>
			</article>
			<article class="card bg-base-200 p-6 shadow">
				<h3 class="font-bold text-lg">[Placeholder] Dashboards</h3>
				<p class="text-base-content/80">Live KPIs improved on-time delivery by 14% in 6 weeks.</p>
			</article>
		</div>

		<!-- Logos / badges row (optional) -->
		<div class="mt-10 flex flex-wrap items-center justify-center gap-4 opacity-70">
			<div class="badge">Go</div>
			<div class="badge">TypeScript</div>
			<div class="badge">Svelte</div>
			<div class="badge">Postgres</div>
			<div class="badge">Azure</div>
			<div class="badge">Stripe</div>
			<div class="badge">Notion</div>
			<div class="badge">Zapier</div>
		</div>

		<div class="mt-10 text-center">
			<CtaBtn btnText="Book your free Diagnosis call" />
		</div>
	</div>
</section>

<!-- =========================
	REVIEWS / TESTIMONIALS PLACEHOLDER
========================= -->
<section id="reviews" class="py-20 bg-base-200 hidden">
	<div class="container mx-auto px-6 max-w-5xl text-center">
		<h2 class="text-4xl font-bold">What Clients Say</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<div class="card bg-base-100 p-6 shadow">
				<p class="italic text-base-content/80">
					“[Add review] Delivered exactly what we needed, no fluff.”
				</p>
				<p class="mt-3 font-semibold">— Client Name, Role</p>
			</div>
			<div class="card bg-base-100 p-6 shadow">
				<p class="italic text-base-content/80">
					“[Add review] Saved our ops team hours every week.”
				</p>
				<p class="mt-3 font-semibold">— Client Name, Role</p>
			</div>
			<div class="card bg-base-100 p-6 shadow">
				<p class="italic text-base-content/80">
					“[Add review] Clear plan, fast delivery, rock-solid.”
				</p>
				<p class="mt-3 font-semibold">— Client Name, Role</p>
			</div>
		</div>

		<div class="mt-10">
			<CtaBtn btnText="Book your free Diagnosis call" />
		</div>
	</div>
</section>

<!-- =========================
	FAQ
========================= -->
<section id="faq" class="py-20 bg-base-100">
	<div class="container mx-auto px-6 max-w-3xl">
		<h2 class="text-4xl font-bold text-center">Frequently Asked Questions</h2>
		<div class="mx-auto mb-10 mt-4 h-1 w-24 bg-blue-600 rounded"></div>

		<div class="space-y-4">
			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">
					Why is this more affordable than a big agency?
				</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						We keep things lean: no bloated teams or fancy offices. You get direct access to a
						senior consultant and a small delivery team focused on outcomes. That means you pay for
						working solutions, not overhead.
					</p>
				</div>
			</div>

			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">
					Do you just advise, or do you build as well?
				</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						Both. We don’t just hand you a strategy and walk away. We design and build what’s needed
						— that could be a new website, an automation, integrations to connect your tools, or a
						scalable cloud setup. Always practical, always delivered.
					</p>
				</div>
			</div>

			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">How do we know if it’s working?</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						We agree upfront on what success looks like — more leads from your website, hours saved
						by automation, cleaner reports from integrations, or better visibility in the cloud. If
						the result isn’t delivered, you don’t pay. Simple.
					</p>
				</div>
			</div>

			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">
					What happens if something breaks later?
				</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						Every project comes with a handover pack and built-in hardening. We also offer optional
						ongoing support so we can tweak, update, and scale your systems as your business grows.
					</p>
				</div>
			</div>

			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-lg font-medium">Do you only work with certain tech?</div>
				<div class="collapse-content">
					<p class="text-base-content/80">
						No — we use what’s best for your business. Sometimes that’s a custom build, sometimes a
						no-code tool, sometimes connecting what you already have. The goal is always the same:
						websites, apps, automations, integrations, and cloud platforms that just work.
					</p>
				</div>
			</div>
		</div>

		<div class="mt-10 text-center">
			<CtaBtn btnText="Ask a Specific Question" />
		</div>
	</div>
</section>

<!-- =========================
	SECONDARY CTA
========================= -->
<section id="contact" class="py-20 bg-slate-900 text-white text-center">
	<div class="container mx-auto px-6 max-w-3xl">
		<h2 class="text-4xl font-extrabold mb-4 tracking-tight">Let’s Make Your Systems Click</h2>
		<p class="text-xl mb-8 opacity-90 leading-relaxed">
			Book a quick call. We’ll find your biggest bottleneck and map the fastest path forward —
			whether that’s a sharper website, time-saving automation, connected tools, or a scalable cloud
			setup.
		</p>

		<div
			class="bg-white text-gray-900 border border-blue-100 rounded-2xl shadow-lg p-10 max-w-2xl mx-auto text-center"
		>
			<h3 class="text-3xl font-bold mb-4 text-blue-600">Your First Win, This Month</h3>
			<ol class="text-left text-lg space-y-4 list-decimal list-inside">
				<li><strong>Diagnose:</strong> Find where your website, tools, or systems hold you back</li>
				<li>
					<strong>Design:</strong> Sketch the simplest solution — site, automation, integration, or cloud
				</li>
				<li><strong>Deploy:</strong> Build it fast, test with real data, and hand it over</li>
				<li><strong>Drive:</strong> Track results and fine-tune so improvements stick</li>
			</ol>
			<p class="mt-6 text-sm opacity-80">⚡ Limited onboarding to keep quality high.</p>
			<div class="mt-8">
				<CtaBtn btnText="Book your free Diagnosis call" />
			</div>
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
