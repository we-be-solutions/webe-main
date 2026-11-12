<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
</script>

<Seo
	title="Privacy Policy | WeBe Solutions"
	description="How WeBe Solutions collects, uses and stores your personal information."
	path="/privacy"
/>

<section class="prose prose-slate mx-auto px-4 py-16 sm:px-6 md:py-24 lg:prose-lg">
	<h1>Privacy Policy</h1>

	<p>
		This policy explains how {site.name} (ABN {site.abn}) (“WeBe”, “I”, “we”) handles personal
		information collected through this website and in the course of providing consulting services.
		WeBe handles personal information in line with the Australian Privacy Principles in the
		<em>Privacy Act 1988</em> (Cth).
	</p>

	<h2>What we collect</h2>
	<p>When you use the contact form, we collect:</p>
	<ul>
		<li>your name</li>
		<li>your email address</li>
		<li>your company name</li>
		<li>anything you choose to tell us about your team in the optional message field.</li>
	</ul>
	<p>
		If you email us directly or become a client, we also hold the correspondence and business
		contact details you share with us.
	</p>
	<p>
		When you visit the site, Google Analytics collects information about how the site is used, such
		as pages viewed, approximate location, device and browser type. We use this in aggregate and
		don’t use it to identify you.
	</p>

	<h2>How we use it</h2>
	<p>We use your information to:</p>
	<ul>
		<li>respond to your enquiry and arrange a conversation</li>
		<li>provide, manage and invoice for services you engage us for</li>
		<li>understand how the site is used so we can improve it.</li>
	</ul>
	<p>
		We don’t sell or rent your personal information, and we don’t add you to marketing lists. If we
		ever want to send you something you didn’t ask for, you can opt out at any time.
	</p>

	<h2>Client information</h2>
	<p>
		During an engagement we may see information about your systems, code, people and business. We
		treat this as confidential, use it only to deliver the agreed work, and handle it in line with
		the engagement agreement.
	</p>

	<h2>Service providers</h2>
	<p>We use the following providers to run this website:</p>
	<ul>
		<li><strong>Vercel</strong>, which hosts the website</li>
		<li><strong>Google Analytics</strong>, for website usage statistics</li>
		<li><strong>Resend</strong>, which delivers contact form messages by email</li>
		<li>
			<strong>Cloudflare Turnstile</strong>, which checks that contact form submissions come from a
			person rather than a bot
		</li>
		<li>our email provider, which stores correspondence with you.</li>
	</ul>
	<p>
		Some of these providers store or process data outside Australia, including in the United States.
		Each has its own privacy policy and security practices. We only share what they need to provide
		their service.
	</p>

	<h2>Cookies</h2>
	<p>
		Google Analytics uses cookies to measure site usage, and Cloudflare Turnstile may use cookies or
		similar technology to detect bots. You can block or delete cookies in your browser settings. The
		site will still work, though the contact form needs Turnstile to run.
	</p>

	<h2>Storage and security</h2>
	<p>
		We take reasonable steps to protect personal information from misuse, loss and unauthorised
		access. We keep it only as long as we need it for the purposes above or to meet legal and tax
		obligations, then delete it.
	</p>

	<h2>Access, correction and complaints</h2>
	<p>
		You can ask what personal information we hold about you, ask us to correct it, or ask us to
		delete it. Email <a href="mailto:{site.email}">{site.email}</a> and we’ll respond within a reasonable
		time.
	</p>
	<p>
		If you have a concern about how we’ve handled your information, please contact us first so we
		can try to resolve it. If you’re not satisfied, you can contact the Office of the Australian
		Information Commissioner at
		<a href="https://www.oaic.gov.au" rel="noopener" target="_blank">oaic.gov.au</a>.
	</p>

	<h2>Changes to this policy</h2>
	<p>We may update this policy from time to time. The current version is always on this page.</p>

	<p class="text-sm text-muted">Last updated: 12 November 2026</p>
</section>
