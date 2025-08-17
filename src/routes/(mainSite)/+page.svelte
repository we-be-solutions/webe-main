<script lang="ts">
	import CtaBtn from '$lib/components/CTABtn.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<link rel="preload" as="video" href="/laser.webm" type="video/webm" />
</svelte:head>
<header class="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-100">
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

	<!-- Content -->
	<div class="card bg-white p-20 relative z-20 container mx-auto px-16 text-center max-w-4xl">
		<h1 class="text-5xl md:text-6xl font-extrabold tracking-tight text-base-content drop-shadow-lg">
			We Run Your Website So You Can Run Your Business
		</h1>
		<div class="mx-auto mt-4 mb-8 h-1 w-48 bg-blue-600 rounded"></div>

		<p class="text-xl md:text-2xl text-base-content/90 max-w-2xl mx-auto">
			You don’t have time to mess with web headaches. We keep your site fast, secure, and
			worry-free. So you can focus on the real work.
		</p>

		<h3 class="text-3xl mt-5 font-bold mb-6 text-blue-500">
			Your Website Plan
			<span class="block text-gray-800">Risk-Free in 3 Steps</span>
		</h3>

		<ol class="text-lg space-y-5 list-decimal list-inside font-medium text-left max-w-lg mx-auto">
			<li>
				<strong>Click “Book Now” & Schedule</strong> — lock in your call today so we can get moving now.
			</li>
			<li>
				<strong>We Walk You Through It All</strong> — you see the plan, the process, and the price. Love
				it? Sign up. Hate it? Walk away. No cost.
			</li>
			<li>
				<strong>We Build & Deploy While You Relax</strong> — in days, your site is live and working
				for you. Don’t love it in 30 days? Get every cent back <em>and</em> keep 60 days of support.
			</li>
		</ol>

		<!-- Decorative arrow to CTA -->
		<div class="absolute left-1/2 bottom-30 transform -translate-x-1/2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-10 h-10 text-blue-600 animate-bounce"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		</div>
		<!-- CTA -->
		<div class="mt-10 animate-fadeIn delay-400">
			<CtaBtn btnText="Book Now" />
		</div>

		<div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
			<a href="#get-started" class="group flex items-center">
				<span class="text-base-content mr-2 text-sm">Learn More</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</a>
		</div>
	</div>

	<!-- Bottom Fade -->
	<div
		class="absolute bottom-0 w-full h-32 bg-gradient-to-t from-base-100 to-transparent z-10"
	></div>
</header>

<!-- New Section: Value Proposition -->
<section id="get-started" class="py-20 bg-base-200">
	<div class="container mx-auto px-4 max-w-5xl text-center">
		<!-- Headline -->
		<h2 class="text-4xl sm:text-5xl font-bold mb-4">
			Tired of Your <span class="text-blue-500">Website Headaches?</span>
		</h2>
		<div class="mx-auto mb-10 h-1 w-24 bg-blue-500 rounded"></div>

		<!-- Pain Points List -->
		<div class="grid gap-6 sm:gap-8 sm:grid-cols-2 text-left mt-12">
			<div class="flex items-start space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Icon: warning -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6 stroke-blue-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01M5.07 19h13.86a2 2 0 001.74-3l-6.93-12a2 2 0 00-3.48 0l-6.93 12a2 2 0 001.74 3z"
						/>
					</svg>
				</div>
				<p class="text-lg sm:text-xl font-medium">Your slow site is costing you sales</p>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex-shrink-0 text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6 stroke-blue-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<p class="text-lg sm:text-xl font-medium">You’re wasting hours every week managing it</p>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex-shrink-0 text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6 stroke-blue-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<p class="text-lg sm:text-xl font-medium">Broken pages are driving customers away</p>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex-shrink-0 text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6 stroke-blue-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<p class="text-lg sm:text-xl font-medium">Your site is more hassle than help</p>
			</div>
		</div>

		<!-- Subline -->
		<p class="mt-12 text-xl max-w-3xl mx-auto">
			We make websites <span class="text-blue-500 font-semibold">fast</span>, keep them
			<span class="text-blue-500 font-semibold">working</span>, and help you keep your
			<span class="text-blue-500 font-semibold">customers</span>.
		</p>
	</div>
</section>

<!-- New Section: Accessibility & Web Focus -->
<section class="py-16">
	<div class="container flex flex-col justify-center items-center mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-8">Website Management That Frees Your Time</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<ul class="text-xl grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
			<li class="card bg-slate-900 text-white shadow-blue-600 shadow-sm p-8">
				<h3 class="card-title mb-4">Never Worry About Updates</h3>
				<p>
					We handle all website updates, security patches, and backups so your site stays safe and
					running smoothly.
				</p>
			</li>
			<li class="card bg-slate-900 text-white shadow-blue-600 shadow-sm p-8">
				<h3 class="card-title mb-4">Unlimited Edits Without Extra Fees</h3>
				<p>
					Need changes or tweaks? Just ask. We make unlimited edits to keep your website fresh and
					aligned with your business.
				</p>
			</li>
			<li class="card bg-slate-900 text-white shadow-blue-600 shadow-sm p-8">
				<h3 class="card-title mb-4">Fast, Secure, and Online</h3>
				<p>
					We monitor your site 24/7 to ensure it loads quickly, stays secure, and never goes offline
					noticeably. Making your site into an asset not a liability.
				</p>
			</li>
		</ul>
	</div>
</section>
<!-- Benefits Section -->
<section class="py-16 bg-base-100">
	<div class="container flex flex-col justify-center items-center mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-8">The WeBe Advantage</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-xl">
			<div class="grid-card bg-base-200 p-6">
				<p>
					<strong>Fully Managed Websites</strong><br />
					We handle hosting, updates, backups, and security — so you never have to worry about your site.
				</p>
			</div>
			<div class="grid-card bg-base-200 p-6">
				<p>
					<strong>Unlimited Edits Included</strong><br />
					Make changes anytime, no extra fees — keep your site fresh as your business evolves.
				</p>
			</div>
			<div class="grid-card bg-base-200 p-6">
				<p>
					<strong>Fast, Reliable Performance</strong><br />
					We optimise your site for speed and uptime to keep your customers happy and engaged.
				</p>
			</div>
			<div class="grid-card bg-base-200 p-6">
				<p>
					<strong>Proactive Security & Monitoring</strong><br />
					Continuous monitoring and automatic fixes keep your site safe from threats and downtime.
				</p>
			</div>
			<div class="grid-card bg-base-200 p-6">
				<p>
					<strong>SEO and Technical Best Practices</strong><br />
					We build and maintain your site with search engines and accessibility in mind to boost your
					visibility.
				</p>
			</div>
			<div class="grid-card bg-base-200 p-6">
				<p>
					<strong>Annual Full Refresh</strong><br />
					Once a year, we redesign your site to keep it modern and aligned with your brand — included
					in your plan.
				</p>
			</div>
			<div class="grid-card bg-base-200 p-6">
				<p>
					<strong>Transparent, Predictable Pricing</strong><br />
					One simple monthly fee covers everything — no surprise bills or hidden costs.
				</p>
			</div>
			<div class="grid-card bg-base-200 p-6">
				<p>
					<strong>Dedicated Support & Communication</strong><br />
					Responsive email support with clear updates keeps you informed without the stress.
				</p>
			</div>
			<div class="grid-card bg-base-200 p-6">
				<p>
					<strong>Scalable & Future-Proof</strong><br />
					Our solutions grow with your business — no vendor lock-in or outdated templates holding you
					back.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="py-16 bg-base-200">
	<div class="container mx-auto px-4 max-w-6xl">
		<h2 class="text-4xl font-bold mb-6 text-center">Return on a Hassle-Free Website</h2>
		<div class="mx-auto mb-12 h-1 w-24 bg-primary rounded"></div>

		<p class="mb-12 text-center text-xl max-w-3xl mx-auto">
			A website that’s always working, secure, and updated isn’t just peace of mind. It’s a business
			asset that drives growth, saves you time, and protects your reputation.
		</p>

		<!-- Benefits Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-24">
			<div class="flex space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Replace with an icon for “time saved” -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-12 stroke-blue-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-1">Save 5+ hours a week</h3>
					<p>Focus on growing your business while we handle updates, fixes, and downtime.</p>
				</div>
			</div>

			<div class="flex space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Icon for conversion -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-12 stroke-blue-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-1">Convert more visitors</h3>
					<p>Fast, reliable sites with clear calls to action turn visitors into customers.</p>
				</div>
			</div>

			<div class="flex space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Icon for security -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-12 stroke-blue-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-1">Protect your business</h3>
					<p>
						Proactive security and monitoring keep you safe from costly breaches and compliance
						issues.
					</p>
				</div>
			</div>

			<div class="flex space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Icon for refresh/design -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-12 stroke-blue-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-1">Keep your brand fresh</h3>
					<p>
						Annual redesigns keep your site modern and engaging to attract and retain customers.
					</p>
				</div>
			</div>

			<div class="flex space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Icon for edits -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-12 stroke-blue-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-1">Unlimited website edits</h3>
					<p>
						Keep your site up to date with changes, content updates, and new offers — no extra fees.
					</p>
				</div>
			</div>

			<div class="flex space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Icon for pricing -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-12 stroke-blue-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-1">Predictable monthly pricing</h3>
					<p>No surprise bills or hidden fees — easy budgeting that puts you in control.</p>
				</div>
			</div>

			<div class="flex space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Icon for support -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-12 stroke-blue-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-1">Expert support you can trust</h3>
					<p>Fast, jargon-free help that keeps you informed and your site running smoothly.</p>
				</div>
			</div>

			<div class="flex space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Icon for scalability -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-12 stroke-blue-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-1">Scale with ease</h3>
					<p>Your website grows with your business — no vendor lock-ins or costly rebuilds.</p>
				</div>
			</div>
		</div>

		<!-- Value Stack Box -->
		<div class="bg-slate-900 rounded-lg shadow max-w-4xl mx-auto mb-12">
			<h3 class="text-3xl text-white font-semibold mb-8 text-center pt-8">
				What You Get With Your Managed Website
			</h3>
			<section class="bg-gray-100 m-0 p-8 w-full">
				<div class=" grid grid-cols-1 md:grid-cols-1 gap-6 text-lg">
					<p>
						<strong>Custom Coded Website</strong> $2,497 value, included free
					</p>
					<div class="border-b-2 border-blue-400 rounded-full w-full"></div>
					<p><strong>Unlimited Website Edits & Content Updates</strong> $700/month value</p>

					<div class="border-b-2 border-blue-400 rounded-full w-full"></div>
					<p>
						<strong>24/7 Hosting, Security, Monitoring & Backups</strong> $350/month value
					</p>

					<div class="border-b-2 border-blue-400 rounded-full w-full"></div>
					<p><strong>Annual Full Website Redesign & Refresh</strong> $1,500 value</p>

					<div class="border-b-2 border-blue-400 rounded-full w-full"></div>
					<p>
						<strong>Technical SEO & Accessibility Compliance</strong> $400/month ongoing value
					</p>

					<div class="border-b-2 border-blue-400 rounded-full w-full"></div>
					<p>
						<strong>Performance Optimisation & Speed Tuning</strong> $350/month ongoing value
					</p>

					<div class="border-b-2 border-blue-400 rounded-full w-full"></div>
					<p>
						<strong>Dedicated Account Manager & Priority Support</strong> $300/month value
					</p>

					<div class="border-b-2 border-blue-400 rounded-full w-full"></div>
					<p><strong>Advanced Analytics & Conversion Tracking Setup</strong> $250 value</p>

					<div class="border-b-2 border-blue-400 rounded-full w-full"></div>
					<p>
						<strong>Staging Environment & Quality Assurance Testing</strong> $200/month value
					</p>

					<div class="border-b-2 border-blue-400 rounded-full w-full"></div>
				</div>
				<div class="mt-12 text-center space-y-6">
					<!-- Value -->
					<div>
						<p class="text-4xl font-extrabold text-blue-500">Total Value</p>
						<p class="text-5xl font-extrabold text-gray-900 mt-2">
							$16,000<span class="text-2xl text-gray-500">+/year</span>
						</p>
					</div>

					<!-- Price -->
					<div
						class="bg-blue-50 border border-blue-200 rounded-2xl py-6 px-8 inline-block shadow-lg"
					>
						<p class="text-xl text-gray-700">Your Price</p>
						<p class="text-4xl font-extrabold text-blue-600 mt-1">
							$597<span class="text-lg font-semibold text-gray-600">/month</span>
						</p>
						<p>**Only 3 spots available at this price</p>
					</div>

					<!-- Why So Low -->
					<div class="max-w-3xl mx-auto">
						<p class="text-2xl font-bold text-gray-900 mt-10">Why Our Price Is So Low?</p>
						<div class="mt-4 space-y-4 text-lg text-gray-700 leading-relaxed">
							<p>
								We keep costs small. We build smart websites just for you with new, fast tools. We
								don’t use expensive templates or extra stuff you don’t need.
							</p>
							<p>
								We are a small team. Our bills are small. We don’t add big agency fees. That means
								you get a great website for way less money.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>

		<!-- Guarantee -->
		<div class="bg-white border border-blue-400 rounded p-8 max-w-3xl mx-auto">
			<div class="flex justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="size-15 mr-5"
					><path
						d="M598.1 139.4C608.8 131.6 611.2 116.6 603.4 105.9C595.6 95.2 580.6 92.8 569.9 100.6L495.4 154.8L485.5 148.2C465.8 135 442.6 128 418.9 128L359.7 128L359.3 128L215.7 128C189 128 163.2 136.9 142.3 153.1L70.1 100.6C59.4 92.8 44.4 95.2 36.6 105.9C28.8 116.6 31.2 131.6 41.9 139.4L129.9 203.4C139.5 210.3 152.6 209.3 161 201L164.9 197.1C178.4 183.6 196.7 176 215.8 176L262.1 176L170.4 267.7C154.8 283.3 154.8 308.6 170.4 324.3L171.2 325.1C218 372 294 372 340.9 325.1L368 298L465.8 395.8C481.4 411.4 481.4 436.7 465.8 452.4L456 462.2L425 431.2C415.6 421.8 400.4 421.8 391.1 431.2C381.8 440.6 381.7 455.8 391.1 465.1L419.1 493.1C401.6 503.5 381.9 509.8 361.5 511.6L313 463C303.6 453.6 288.4 453.6 279.1 463C269.8 472.4 269.7 487.6 279.1 496.9L294.1 511.9L290.3 511.9C254.2 511.9 219.6 497.6 194.1 472.1L65 343C55.6 333.6 40.4 333.6 31.1 343C21.8 352.4 21.7 367.6 31.1 376.9L160.2 506.1C194.7 540.6 241.5 560 290.3 560L342.1 560L343.1 561L344.1 560L349.8 560C398.6 560 445.4 540.6 479.9 506.1L499.8 486.2C501 485 502.1 483.9 503.2 482.7C503.9 482.2 504.5 481.6 505.1 481L609 377C618.4 367.6 618.4 352.4 609 343.1C599.6 333.8 584.4 333.7 575.1 343.1L521.3 396.9C517.1 384.1 510 372 499.8 361.8L385 247C375.6 237.6 360.4 237.6 351.1 247L307 291.1C280.5 317.6 238.5 319.1 210.3 295.7L309 197C322.4 183.6 340.6 176 359.6 175.9L368.1 175.9L368.3 175.9L419.1 175.9C433.3 175.9 447.2 180.1 459 188L482.7 204C491.1 209.6 502 209.3 510.1 203.4L598.1 139.4z"
					/>
				</svg>
				<h3 class="text-3xl font-semibold mb-4 mt-3">The WeBe Breakup Guarantee</h3>
			</div>
			<p class="text-lg max-w-xl mx-auto">
				If within 30 days you’re not completely satisfied with our service, we’ll give you a full
				refund. No questions asked.<br /><br />
				Plus, we’ll keep your site running for an extra 60 days at no cost. This way you’re never left
				high and dry while you figure out your next move.
			</p>
		</div>
	</div>
</section>

<section class="max-w-3xl mx-auto py-12 px-4">
	<h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

	<div class="space-y-4">
		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-lg font-medium">
				What’s included in the $597/month package?
			</div>
			<div class="collapse-content">
				<p>
					You’ll get a fully managed, custom-coded 3-5 page website, unlimited edits, premium
					hosting, 24/7 monitoring, security updates, performance optimisation, annual redesigns,
					and priority support. All handled for you, so your site is always running at its best.
				</p>
			</div>
		</div>
		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-lg font-medium">Can I upgrade or add features later?</div>
			<div class="collapse-content">
				<p>
					Absolutely. We can add pages, integrations, e-commerce, or automation tools whenever
					you’re ready. Your monthly fee stays predictable. All extras are quoted upfront.
				</p>
			</div>
		</div>
		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-lg font-medium">Do I own my website?</div>
			<div class="collapse-content">
				<p>
					After 12 months, yes the intellectual property (IP) becomes 100% yours. If you cancel
					before 12 months, we retain the IP, but you can choose to buy it out at any time.
				</p>
				<p class="mt-2 mb-2">Buy Out Price to months in:</p>

				<table
					border="2"
					cellpadding="8"
					cellspacing="0"
					style="border-collapse: collapse; max-width: 500px;"
				>
					<thead>
						<tr>
							<th>Month</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<tr><td>1</td><td>$1500 + GST</td></tr>
						<tr><td>2</td><td>$1400 + GST</td></tr>
						<tr><td>3</td><td>$1300 + GST</td></tr>
						<tr><td>4</td><td>$1200 + GST</td></tr>
						<tr><td>5</td><td>$1100 + GST</td></tr>
						<tr><td>6</td><td>$1000 + GST</td></tr>
						<tr><td>7</td><td>$800 + GST</td></tr>
						<tr><td>8</td><td>$600 + GST</td></tr>
						<tr><td>9</td><td>$400 + GST</td></tr>
						<tr><td>10</td><td>$300 + GST</td></tr>
						<tr><td>11</td><td>$200 + GST</td></tr>
						<tr><td>12</td><td>$0 + GST</td></tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-lg font-medium">Is hosting and security included?</div>
			<div class="collapse-content">
				<p>
					Absolutely. Your plan includes premium hosting, SSL certificates, daily backups, uptime
					monitoring, and proactive security updates — with no extra fees.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-lg font-medium">
				Can you make changes whenever I need them?
			</div>
			<div class="collapse-content">
				<p>
					Yes — unlimited content edits and design tweaks are included, so your website is always
					up-to-date without extra invoices or delays.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-lg font-medium">What happens if I cancel?</div>
			<div class="collapse-content">
				<p>
					If you cancel before 12 months, we retain the website’s IP unless you buy it out. After 12
					months, you own the site outright, no strings attached.
				</p>
			</div>
		</div>
		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-lg font-medium">What if I need urgent changes?</div>
			<div class="collapse-content">
				<p>
					We offer 48 hour turn around on updates. Just send a request through and we’ll prioritise
					it as soon as possible.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Testimonial Section -->
<!-- <section class="py-16 bg-base-100 hidden"> -->
<!-- 	<div class="container mx-auto px-4 text-center"> -->
<!-- 		<h2 class="text-3xl font-semibold mb-6">What Our Clients Say</h2> -->
<!-- 		<div class="mb-6 h-1 w-20 bg-primary rounded mx-auto"></div> -->
<!-- 		<blockquote class="text-xl italic max-w-3xl mx-auto"> -->
<!-- 			“Finally, someone who works with our budget and delivers results in weeks, not months. Our -->
<!-- 			compliance is smoother, and the team is less stressed.” -->
<!-- 		</blockquote> -->
<!-- 		<p class="mt-4 text-base-content/70">– Nat Noir, Disability Support Coordinator</p> -->
<!-- 	</div> -->
<!-- </section> -->

<!-- CTA Section -->
<section id="contact" class="py-20 bg-slate-900 text-white text-center">
	<div class="container mx-auto px-6 max-w-3xl">
		<!-- Heading -->
		<h2 class="text-4xl font-extrabold mb-4 tracking-tight">
			Let’s Build What Your Business Really Needs
		</h2>

		<!-- Subtitle -->
		<p class="text-xl mb-8 opacity-90 leading-relaxed">
			Ready to stop struggling with your website? Book a free, no-pressure call to discover how
			managed web solutions can save you time, protect your brand, and help you grow.
		</p>

		<!-- Limited spots note -->
		<p class="text-lg font-semibold mb-12">
			⚡ Limited spots available each month — don’t miss out.
		</p>

		<div
			class="bg-white text-gray-900 border border-blue-100 rounded-2xl shadow-lg p-10 max-w-2xl mx-auto text-center relative"
		>
			<h3 class="text-3xl font-bold mb-6 text-blue-500">
				Your Website Plan
				<span class="block text-gray-800">Risk-Free in 3 Steps</span>
			</h3>

			<ol class="text-lg space-y-5 list-decimal list-inside font-medium text-left max-w-lg mx-auto">
				<li>
					<strong>Click “Let’s Get Started” & Schedule</strong> — lock in your call today so we can get
					moving now.
				</li>
				<li>
					<strong>We Walk You Through It All</strong> — you see the plan, the process, and the price.
					Love it? Sign up. Hate it? Walk away. No cost.
				</li>
				<li>
					<strong>We Build & Deploy While You Relax</strong> — in days, your site is live and
					working for you. Don’t love it in 30 days? Get every cent back <em>and</em> keep 60 days of
					support.
				</li>
			</ol>

			<!-- Decorative arrow to CTA -->
			<div class="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-10 h-10 text-blue-600 animate-bounce"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</div>
		</div>

		<!-- CTA directly below -->
		<div class="mt-16 text-center">
			<CtaBtn />
		</div>
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
						class="card bg-base-300 shadow-md hover:shadow-xl hover:ring-2 hover:ring-blue-500/60 hover:ring-offset-2 transition duration-200"
					>
						<article class="card-body prose prose-xl">
							<h3>{p.title}</h3>
							<h4 class="mt-1">{p.date}</h4>
							<div class="mx-auto mt-1 h-1 w-20 bg-slate-900 rounded"></div>
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

<style>
	/* Smooth accordion animation */
	.collapse-content {
		transition: all 0.3s ease-in-out;
	}

	.grid-card {
		position: relative;
		background: #f3f4f6; /* Tailwind bg-base-200 */
		padding: 1.5rem;
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.grid-card::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 12px;
		height: 100%;
		background: radial-gradient(
			circle,
			rgba(59, 130, 246, 0.8) 0%,
			rgba(59, 130, 246, 0) 70%
		); /* blue-500 */
		border-radius: 50%;
		pointer-events: none;
		animation: glowPulse 1s infinite alternate;
		z-index: 1;
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
