<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
</script>

<Seo
	title="Terms of Service | WeBe Solutions"
	description="The terms that govern your use of the WeBe Solutions website and services."
	path="/terms"
/>

<section class="prose prose-slate mx-auto px-4 py-16 sm:px-6 md:py-24 lg:prose-lg">
	<h1>Terms of Service</h1>

	<p>
		These terms apply to your use of this website, operated by {site.name} (ABN {site.abn}) (“WeBe”,
		“I”, “we”). By using the site, you agree to them.
	</p>

	<h2>1. About our services</h2>
	<p>
		WeBe provides technical coaching, mentoring and guidance for software engineers and their teams,
		delivered through the Engineering Capability Accelerator and related consulting. The website
		describes these services in general terms. It isn’t an offer and doesn’t create an engagement.
	</p>
	<p>
		Any paid work is governed by a separate written agreement or proposal, which sets out the scope,
		fees and terms for that engagement. If that agreement conflicts with these terms, the agreement
		applies.
	</p>

	<h2>2. Advice and decisions</h2>
	<p>
		Our role is to coach, advise and support your team. We don’t guarantee any particular
		progression, promotion or level of capability for individual engineers. Decisions about your
		systems, people and business remain yours, as does responsibility for implementing them. WeBe
		doesn’t provide managed IT support, certified security audits, or legal or compliance assurance,
		and our risk assessments aren’t a substitute for them.
	</p>

	<h2>3. Website content</h2>
	<p>
		Content on this site is general information only. It isn’t advice tailored to your situation,
		and you shouldn’t rely on it as such. We try to keep it accurate and up to date but don’t
		guarantee that it is.
	</p>

	<h2>4. Intellectual property</h2>
	<p>
		The content, design and branding on this site belong to WeBe unless stated otherwise. Please
		don’t copy or republish it without permission. Ownership of work produced during an engagement
		is set out in the engagement agreement.
	</p>

	<h2>5. Using the site</h2>
	<p>
		Please don’t use the site for anything unlawful, attempt to interfere with its operation, or
		submit false or misleading information through the contact form.
	</p>

	<h2>6. Third-party links and services</h2>
	<p>
		The site may link to other websites and uses third-party services, as described in our
		<a href="/privacy">Privacy Policy</a>. We aren’t responsible for the content or practices of
		those third parties.
	</p>

	<h2>7. Liability</h2>
	<p>
		Nothing in these terms excludes, restricts or modifies any right or remedy you have under the
		Australian Consumer Law or any other law that can’t be excluded. Subject to that, WeBe isn’t
		liable for any loss arising from your use of this website or reliance on its content.
	</p>

	<h2>8. Privacy</h2>
	<p>
		Our <a href="/privacy">Privacy Policy</a> explains how we handle personal information.
	</p>

	<h2>9. Changes</h2>
	<p>
		We may update these terms from time to time. The current version is always on this page, and
		continuing to use the site means you accept it.
	</p>

	<h2>10. Governing law</h2>
	<p>These terms are governed by the laws in force in Australia.</p>

	<h2>11. Contact</h2>
	<p>
		Questions about these terms? Email <a href="mailto:{site.email}">{site.email}</a>.
	</p>

	<p class="text-sm text-muted">Last updated: 12 November 2026</p>
</section>
