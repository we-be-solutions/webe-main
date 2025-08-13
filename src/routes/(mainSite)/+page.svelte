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
			We Run Your Website So You Can Run Your Business.
		</h2>
		<div class="mx-auto mt-1 mb-6 h-1 w-20 bg-primary rounded"></div>
		<p class="text-2xl text-base-content"></p>
		<p class="text-2xl text-base-content mt-2">You don’t have time to mess with web headaches.</p>

		<p class="text-2xl text-base-content mt-2">
			We handle it for you. A website service that keeps your site fast, secure, and up-to-date.
		</p>
		<p class="text-2xl text-base-content mt-2">
			WeBe takes care of it. So you can focus on getting the real work done!
		</p>
		<!-- <div class="mt-32"> -->
		<!-- 	<CtaBtn /> -->
		<!-- </div> -->
	</div>
</header>

<!-- New Section: Value Proposition -->
<section class="py-16 bg-base-200">
	<div class="container mx-auto my-12 px-4">
		<h2 class="text-3xl font-semibold mb-4">Tired of Your Website Headaches?</h2>

		<p class="text-xl mt-6 font-semibold">Is your slow site losing you money?</p>
		<p class="text-xl mt-6 font-semibold">Is your site costing you hours you don’t have?</p>
		<p class="text-xl mt-6 font-semibold">Are broken pages turning customers away?</p>
		<p class="text-xl mt-6 font-semibold">Is managing your site more work than it should be?</p>

		<p class="text-xl mt-6">
			We make sites fast. We keep them working. We help you keep your customers.
		</p>
	</div>
</section>

<!-- New Section: Accessibility & Web Focus -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-8">Website Management That Frees Your Time</h2>
		<div class="mb-6 h-1 w-20 bg-primary rounded"></div>
		<ul class="text-xl grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
			<li class="card bg-blue-900 text-white shadow-blue-600 shadow-sm p-8">
				<h3 class="card-title mb-4">Never Worry About Updates</h3>
				<p>
					We handle all website updates, security patches, and backups so your site stays safe and
					running smoothly.
				</p>
			</li>
			<li class="card bg-blue-900 text-white shadow-blue-600 shadow-sm p-8">
				<h3 class="card-title mb-4">Unlimited Edits Without Extra Fees</h3>
				<p>
					Need changes or tweaks? Just ask. We make unlimited edits to keep your website fresh and
					aligned with your business.
				</p>
			</li>
			<li class="card bg-blue-900 text-white shadow-blue-600 shadow-sm p-8">
				<h3 class="card-title mb-4">Fast, Secure, and Always Online</h3>
				<p>
					We monitor your site 24/7 to ensure it loads quickly, stays secure, and never goes
					offline. Making your site into an asset not a liability.
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
					<strong>Fully Managed Websites</strong><br />
					We handle hosting, updates, backups, and security — so you never have to worry about your site.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Unlimited Edits Included</strong><br />
					Make changes anytime, no extra fees — keep your site fresh as your business evolves.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Fast, Reliable Performance</strong><br />
					We optimise your site for speed and uptime to keep your customers happy and engaged.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Proactive Security & Monitoring</strong><br />
					Continuous monitoring and automatic fixes keep your site safe from threats and downtime.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>SEO and Technical Best Practices</strong><br />
					We build and maintain your site with search engines and accessibility in mind to boost your
					visibility.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Annual Full Refresh</strong><br />
					Once a year, we redesign your site to keep it modern and aligned with your brand — included
					in your plan.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Transparent, Predictable Pricing</strong><br />
					One simple monthly fee covers everything — no surprise bills or hidden costs.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Dedicated Support & Communication</strong><br />
					Responsive email support with clear updates keeps you informed without the stress.
				</p>
			</li>
			<li class="card bg-base-200 p-6">
				<p>
					<strong>Scalable & Future-Proof</strong><br />
					Our solutions grow with your business — no vendor lock-in or outdated templates holding you
					back.
				</p>
			</li>
		</ul>
	</div>
</section>

<!-- Investment Impact Section -->
<!-- <section class="py-16 bg-base-200"> -->
<!-- 	<div class="container mx-auto px-4"> -->
<!-- 		<h2 class="text-3xl font-semibold mb-6">Return on a Hassle-Free Website</h2> -->
<!-- 		<div class="mb-6 h-1 w-20 bg-primary rounded"></div> -->
<!-- 		<p class="mb-6 mt-8 text-xl"> -->
<!-- 			A website that’s always working, secure, and updated isn’t just peace of mind. It is a -->
<!-- 			business asset that drives growth, saves you time, and protects your reputation. -->
<!-- 		</p> -->
<!-- 		<ul class="space-y-6 list-disc pl-6 text-xl mt-12"> -->
<!-- 			<li> -->
<!-- 				<span class="font-bold">Save 5+ hours a week</span> by never worrying about updates, fixes, or -->
<!-- 				downtime. Spend more time focusing on your business while we keep your website running smoothly -->
<!-- 				and error-free. -->
<!-- 			</li> -->
<!-- 			<li> -->
<!-- 				<span class="font-bold">Convert more visitors</span> with fast, reliable performance and clear -->
<!-- 				calls to action that turn browsers into customers. A smooth, professional site builds trust and -->
<!-- 				encourages people to take action. -->
<!-- 			</li> -->
<!-- 			<li> -->
<!-- 				<span class="font-bold">Protect your business</span> from costly security breaches and compliance -->
<!-- 				issues. Our proactive monitoring and updates keep your site secure, giving you peace of mind -->
<!-- 				and avoiding expensive problems. -->
<!-- 			</li> -->
<!-- 			<li> -->
<!-- 				<span class="font-bold">Keep your brand fresh</span> with included annual redesigns that attract -->
<!-- 				and engage your audience. Staying modern and relevant means more visitors stay longer and remember -->
<!-- 				your business. -->
<!-- 			</li> -->
<!-- 			<li> -->
<!-- 				<span class="font-bold">Get unlimited website edits</span> so your site always matches your latest -->
<!-- 				offers and messaging — no extra costs or delays. -->
<!-- 			</li> -->
<!-- 			<li> -->
<!-- 				<span class="font-bold">Enjoy predictable monthly pricing</span> with no surprise fees — making -->
<!-- 				budgeting simple and stress-free. -->
<!-- 			</li> -->
<!-- 			<li> -->
<!-- 				<span class="font-bold">Benefit from expert support</span> that responds quickly and keeps you -->
<!-- 				informed without tech jargon. -->
<!-- 			</li> -->
<!-- 			<li> -->
<!-- 				<span class="font-bold">Scale effortlessly</span> as your business grows — your website will -->
<!-- 				grow with you, no vendor lock-in or costly rebuilds. -->
<!-- 			</li> -->
<!-- 		</ul> -->
<!-- 	</div> -->
<!-- 	<div class="container mt-10 p-6 bg-gray-100 rounded shadow mx-auto"> -->
<!-- 		<h3 class="text-2xl font-semibold mb-6">Here’s What You Get with Your Managed Website</h3> -->
<!-- 		<ul class="list-disc pl-6 space-y-4 text-lg"> -->
<!-- 			<li><strong>Custom Managed Website Setup</strong> — $2,497 value, included free</li> -->
<!-- 			<li><strong>Unlimited Website Edits & Content Updates</strong> — $700/month value</li> -->
<!-- 			<li><strong>24/7 Hosting, Security, Monitoring & Backups</strong> — $350/month value</li> -->
<!-- 			<li><strong>Annual Full Website Redesign & Refresh</strong> — $1,500 value</li> -->
<!-- 			<li> -->
<!-- 				<strong>Technical SEO & Accessibility Compliance</strong> — $400/month ongoing value -->
<!-- 			</li> -->
<!-- 			<li><strong>Performance Optimisation & Speed Tuning</strong> — $350/month ongoing value</li> -->
<!-- 			<li><strong>Dedicated Account Manager & Priority Support</strong> — $300/month value</li> -->
<!-- 			<li><strong>Advanced Analytics & Conversion Tracking Setup</strong> — $250 value</li> -->
<!-- 			<li><strong>Staging Environment & Quality Assurance Testing</strong> — $200/month value</li> -->
<!-- 			<p class="mt-6 text-xl font-semibold">Total Value: $16,000+ per year</p> -->
<!-- 			<p class="mt-2 text-xl">Your Price: <strong>$597/month</strong></p> -->
<!-- 		</ul> -->
<!-- 	</div> -->
<!-- 	<div class="mt-10 p-6 bg-green-100 border border-green-400 rounded mx-auto w-2xl"> -->
<!-- 		<h3 class="text-2xl font-semibold mb-4">Our 100% Satisfaction Guarantee</h3> -->
<!-- 		<p class="text-lg"> -->
<!-- 			If at any time in the first 30 days you’re not completely happy with our service, just let us -->
<!-- 			know — we’ll refund your money with no questions asked. Plus, we’ll work with you to fix any -->
<!-- 			issues until you’re thrilled. -->
<!-- 		</p> -->
<!-- 	</div> -->
<!-- </section> -->

<section class="py-16 bg-base-200">
	<div class="container mx-auto px-4 max-w-6xl">
		<h2 class="text-4xl font-bold mb-6 text-center">Return on a Hassle-Free Website</h2>
		<div class="mx-auto mb-12 h-1 w-24 bg-primary rounded"></div>

		<p class="mb-12 text-center text-xl max-w-3xl mx-auto">
			A website that’s always working, secure, and updated isn’t just peace of mind. It’s a business
			asset that drives growth, saves you time, and protects your reputation.
		</p>

		<!-- Benefits Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
			<div class="flex space-x-4">
				<div class="flex-shrink-0 text-primary">
					<!-- Replace with an icon for “time saved” -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-10"
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
						class="size-10"
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
						class="size-10"
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
						class="size-10"
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
						class="size-10"
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
						class="size-10"
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
						class="size-10"
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
						class="size-10"
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
		<div class="bg-gray-100 p-8 rounded-lg shadow max-w-4xl mx-auto mb-12">
			<h3 class="text-3xl font-semibold mb-8 text-center">
				What You Get With Your Managed Website
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
				<div>
					<p><strong>Custom Coded Website</strong> — $2,497 value, included free</p>
					<p><strong>Unlimited Website Edits & Content Updates</strong> — $700/month value</p>
					<p><strong>24/7 Hosting, Security, Monitoring & Backups</strong> — $350/month value</p>
					<p><strong>Annual Full Website Redesign & Refresh</strong> — $1,500 value</p>
					<p>
						<strong>Technical SEO & Accessibility Compliance</strong> — $400/month ongoing value
					</p>
				</div>
				<div>
					<p><strong>Performance Optimisation & Speed Tuning</strong> — $350/month ongoing value</p>
					<p><strong>Dedicated Account Manager & Priority Support</strong> — $300/month value</p>
					<p><strong>Advanced Analytics & Conversion Tracking Setup</strong> — $250 value</p>
					<p><strong>Staging Environment & Quality Assurance Testing</strong> — $200/month value</p>
				</div>
			</div>
			<p class="mt-10 text-2xl font-bold text-center">Total Value: $16,000+ per year</p>
			<p class="text-xl text-center mt-2">Your Price: <strong>$597/month</strong></p>
			<p class="text-xl text-center mt-10">Why Our Price Is So Low?</p>
			<p class="text-xl text-center mt-3">
				We keep costs small. We build smart websites just for you with new, fast tools. We don’t use
				expensive templates or extra stuff you don’t need.
			</p>
			<p class="text-xl text-center mt-3">
				We are a small team. Our bills are small. We don’t add big agency fees. That means you get a
				great website for way less money.
			</p>
		</div>

		<!-- Guarantee -->
		<div class="bg-green-100 border border-green-400 rounded p-8 max-w-3xl mx-auto text-center">
			<h3 class="text-3xl font-semibold mb-4">The WeBe Breakup Guarantee</h3>
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
<section class="py-16 bg-blue-900 text-primary-content text-center">
	<div class="container mx-auto px-4 max-w-xl">
		<h2 class="text-3xl text-white font-semibold mb-4">
			Let’s Build What Your Business Really Needs
		</h2>

		<p class="text-xl text-white mb-8">
			Ready to stop struggling with your website? Book a free, no-pressure call to discover how
			managed web solutions can save you time, protect your brand, and help you grow.
		</p>

		<p class="text-white mb-8 font-semibold">
			Limited spots available each month — don’t miss out.
		</p>
		<div
			class="bg-blue-50 border border-blue-200 rounded p-8 max-w-3xl mx-auto text-center mt-12 text-black mb-10"
		>
			<h3 class="text-3xl font-semibold mb-6">Your Website Plan <br /> Risk-Free in 3 Steps</h3>
			<ol class="text-lg max-w-xl mx-auto text-left space-y-4 list-decimal list-inside font-medium">
				<li>
					<strong>Click “Let’s Get Started” & Schedule</strong> - lock in your call today so we can get
					moving now.
				</li>
				<li>
					<strong>We Walk You Through It All</strong> - you see the plan, the process, and the price.
					Love it? Sign up. Hate it? Walk away. No cost.
				</li>
				<li>
					<strong>We Build & Deploy While You Relax</strong> - in days, your site is live and
					working for you. Don’t love it in 30 days? Get every cent back <em>and</em> keep 60 days of
					support.
				</li>
			</ol>
		</div>

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

<style>
	/* Smooth accordion animation */
	.collapse-content {
		transition: all 0.3s ease-in-out;
	}
</style>
