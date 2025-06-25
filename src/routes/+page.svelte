<script lang="ts">
	import LogoNoWords from '../components/svg/logoNoWords.svelte';
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { fade, scale } from 'svelte/transition';
	type FormFailure = {
		error?: string;
		issues?: Array<{ message: string; path: string[] }>;
		values?: Record<string, string>;
	};

	let form: FormFailure & { success?: boolean; message?: string } = $props();
	$inspect(form);
	let issues = $state(form.issues);

	const options: SubmitFunction = ({}) => {
		return async ({ result }) => {
			if (result.type === 'failure') {
				issues = result.data?.issues;
				await applyAction(result);
			} else {
				toggleModal();
				await applyAction(result);
			}
		};
	};
	// State variables
	let showModal = $state(false);

	// Functions
	function toggleModal() {
		showModal = !showModal;
	}
</script>

<main class="landing-page">
	<header class="hero">
		<div class="container">
			<div class="logo">
				<div class="logo-sizer">
					<LogoNoWords />
				</div>
				<h1>WeBe Solutions</h1>
			</div>
			<h2 class="headline">Level the Playing Field of Tech</h2>
			<p class="subheadline">
				I help non-tech SMEs unlock smart, simple technology solutions—so you can compete with
				confidence, not complexity.
			</p>
			<button class="cta-button" onclick={toggleModal}>Free Discovery Call</button>
		</div>
	</header>

	<section class="value-proposition">
		<div class="container">
			<h2>The High-Impact Alternative to Big Tech Firms</h2>
			<p>
				WeBe Solutions isn’t for everyone. I work exclusively with businesses that want to use
				technology as a growth engine—not just another cost. My clients invest in <strong
					>strategic tech</strong
				> to cut inefficiencies, make smarter decisions, and drive higher profits.
			</p>
		</div>
	</section>
	<section class="advantages">
		<div class="container">
			<h2>The WeBe Solutions Performance Guarantee</h2>
			<div class="advantages-grid">
				<div class="advantage-card">
					<h3>Strategic Expertise, Powered by Insight</h3>
					<p>
						Your tech journey is guided by a consultant who prioritises your business objectives
						first, technology second. Every recommendation is designed to maximise impact and
						directly support your goals.
					</p>
				</div>
				<div class="advantage-card">
					<h3>Direct Access To The Decision Maker</h3>
					<p>
						No middlemen. You work directly with me, ensuring clear communication, fast decisions,
						and a streamlined process that avoids agency delays.
					</p>
				</div>
				<div class="advantage-card">
					<h3>Rapid, Results-Driven Guidance</h3>
					<p>
						My agile approach delivers actionable insights and practical application in half the
						time of traditional consultancies—helping you move forward quickly.
					</p>
				</div>
				<div class="advantage-card">
					<h3>Measurable Business Outcomes, Not Just Tech</h3>
					<p>
						My work doesn’t end with a report or a prototype—it continues through building,
						refining, and supporting systems until you see real results and feel confident in the
						decisions that got you there.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="services">
		<div class="container">
			<h2>Strategic Tech Solutions for Confident Business Growth</h2>
			<ul class="services-list">
				<li>
					<h3>Tech Strategy Sessions</h3>
					<p>
						Clarify your business goals and discover how technology can help you achieve them—no
						jargon, just clear advice.
					</p>
				</li>
				<li>
					<h3>System Design & Prototyping</h3>
					<p>
						Turn ideas into working prototypes or technical blueprints—built collaboratively to
						align with your goals and budget.
					</p>
				</li>
				<li>
					<h3>On-Call Tech Advisor</h3>
					<p>
						Ongoing access to expert advice—get answers, ideas, and confidence whenever you need
						them.
					</p>
				</li>
				<li>
					<h3>Implementation Support</h3>
					<p>
						Hands-on help bringing your systems to life—from integrations and automation to custom
						builds and delivery.
					</p>
				</li>
			</ul>
		</div>
	</section>

	<section class="results">
		<div class="container">
			<h2>The Investment That Pays for Itself</h2>
			<div class="results-content">
				<p>
					My clients don’t measure success by tech features or complexity—they measure it by the
					impact smart tech decisions have on their business:
				</p>
				<ul class="results-list">
					<li>
						<span class="highlight">Hours saved</span> by streamlining workflows and reducing manual
						tasks
					</li>
					<li>
						<span class="highlight">Eliminate costly mistakes</span> by making informed, future-proof
						tech choices
					</li>
					<li>
						<span class="highlight">Effective collaboration</span> fueled by open, transparent communication
						and expert guidance
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="exclusivity">
		<div class="container">
			<h2>Focused Attention for Every Client</h2>
			<p>
				To ensure each business receives the attention and care it deserves, I work closely with
				just a small number of consulting clients at a time.
			</p>
			<p>
				This means your business gets the focus and support needed to make real progress in using
				technology to drive growth and efficiency.
			</p>
			<button class="cta-button" onclick={toggleModal}>Free Discovery Call</button>
			<p class="small-note">
				*We will start with a conversation to make sure I'm the right fit for your needs.
			</p>
		</div>
	</section>

	<footer>
		<div class="container">
			<p>&copy; {new Date().getFullYear()} WeBe Solutions. All rights reserved.</p>
			<p>ABN 33 620 124 892</p>
		</div>
	</footer>

	{#if showModal}
		<div
			class="modal-backdrop"
			role="button"
			in:fade={{ duration: 150 }}
			out:fade={{ duration: 150 }}
			tabindex="0"
			onclick={() => toggleModal()}
			onkeydown={(event) => {
				if (event.key === 'Escape') {
					toggleModal();
				}
			}}
		>
			<div
				class="modal-content"
				role="button"
				in:scale={{ duration: 200, start: 0.9 }}
				out:scale={{ duration: 200, start: 1 }}
				tabindex="0"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(event) => {
					if (event.key === 'Escape') {
						toggleModal();
					}
				}}
			>
				<div class="modal-header">
					<button class="close-button" onclick={toggleModal}>×</button>
					<h2>Apply for Strategic Tech Advisory Partnership</h2>
				</div>
				<p class="modal-subtext">
					We’re here to help small and medium businesses use technology to grow—without the jargon
					or overwhelm. If you’re ready to make smarter tech decisions, reach out below to see if
					we’re the right fit for you.
				</p>
				<form method="POST" use:enhance={options}>
					{#if form?.error}
						<p class="error">{form.error}</p>
					{/if}
					{#if issues}
						{#each issues as issue}
							<p class="error">{issue.path[0]}: {issue.message}</p>
						{/each}
					{/if}
					<div class="form-group">
						<label for="name">Full Name</label>
						<input type="text" name="name" id="name" value={form?.values?.name ?? ''} required />
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							value={form?.values?.email ?? ''}
							required
						/>
					</div>
					<div class="form-group">
						<label for="company">Company</label>
						<input
							type="text"
							name="company"
							id="company"
							value={form?.values?.company ?? ''}
							required
						/>
					</div>
					<div class="form-group">
						<label for="timeline">When would you like to start?</label>
						<select id="timeline" name="timeline" required>
							<option value="now" selected={form?.values?.timeline === 'now'}
								>Ready to start now</option
							>
							<option value="1-3" selected={form?.values?.timeline === '1-3'}
								>Within 1-3 months</option
							>
							<option value="3-6" selected={form?.values?.timeline === '3-6'}
								>Within 3-6 months</option
							>
						</select>
					</div>
					<div class="form-group">
						<label for="project"
							>What’s your biggest tech challenge right now? What results would you like to achieve?</label
						>
						<textarea
							id="project"
							name="project"
							placeholder="I am unsure. I am open to assistance."
							>{form?.values?.project ?? ''}</textarea
						>
					</div>
					<div class="honeypot">
						<label for="honeypot">Honey pot</label>
						<input type="text" name="honeypot" id="honeypot" value={form?.values?.honeypot ?? ''} />
					</div>
					<button type="submit" class="submit-button">Send</button>
				</form>

				<p class="modal-subtext">
					We work closely with a select number of clients to ensure each business gets the attention
					it deserves. If you’re a fit, we’ll reach out within 48 hours to discuss your next steps.
				</p>
				<div class="offer-call">
					<h3>Ready to make tech work for your business?</h3>
					<p>
						If you want clear guidance and practical solutions for your tech challenges, <strong
							>apply now</strong
						>. Let’s turn your biggest tech challenge into your next business breakthrough.
					</p>
				</div>
			</div>
		</div>
	{/if}
</main>

<style>
	/* Define CSS variable for teal color */
	:root {
		--blue-teal: #00a4cc; /* Default Blue-leaning teal */
		--blue-teal-dark: #007b99; /* Darker teal for hover effects */
	}

	/* Global Styles */
	:global(body) {
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			sans-serif;
		line-height: 1.6;
		color: #333;
		margin: 0;
		padding: 0;
		background-color: #fafafa;
	}
	/* Honey pot is a hidden field to capture bots */
	.honeypot {
		display: none;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	/* Hero Section */
	.hero {
		background: linear-gradient(135deg, #1a1a1a, #000000);
		color: white;
		padding: 100px 0;
		text-align: center;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logo-sizer {
		width: 100px;
	}
	.logo h1 {
		font-size: 2.5rem;
		margin-bottom: 20px;
		letter-spacing: 1px;
	}

	.headline {
		font-size: 2.4rem;
		max-width: 800px;
		margin: 0 auto 20px;
		line-height: 1.3;
		font-weight: 800;
	}

	.subheadline {
		font-size: 1.3rem;
		max-width: 700px;
		margin: 0 auto 50px;
		opacity: 0.9;
	}

	/* Button Styles */
	.cta-button {
		background-color: var(--blue-teal); /* Blue-leaning teal */
		color: white;
		border: none;
		padding: 18px 40px;
		font-size: 1.1rem;
		font-weight: 700;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.3s;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.cta-button:hover {
		background-color: var(--blue-teal-dark); /* Darker teal for hover effect */
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(0, 128, 128, 0.3);
	}

	/* Section Styles */
	section {
		padding: 100px 0;
	}

	section h2 {
		font-size: 2.2rem;
		margin-bottom: 40px;
		text-align: center;
		font-weight: 800;
		position: relative;
		padding-bottom: 15px;
	}

	section h2:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 4px;
		background-color: var(--blue-teal); /* Blue-leaning teal */
	}

	section p {
		max-width: 800px;
		margin: 0 auto 30px;
		text-align: center;
		font-size: 1.1rem;
	}

	/* Value Proposition */
	.value-proposition {
		background-color: #f1f1f1;
	}

	.value-proposition p {
		font-size: 1.3rem;
		font-weight: 500;
	}

	/* Advantages Grid */
	.advantages-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
		gap: 40px;
		margin-top: 50px;
	}

	.advantage-card {
		background-color: white;
		padding: 40px 30px;
		border-radius: 8px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.advantage-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
	}

	.advantage-card h3 {
		color: #000;
		margin-bottom: 20px;
		font-size: 1.3rem;
		font-weight: 700;
	}

	.advantage-card p {
		text-align: left;
		margin-bottom: 0;
		font-size: 1rem;
	}

	/* Services List */
	.services {
		background-color: #1a1a1a;
		color: white;
	}

	.services h2:after {
		background-color: white;
	}

	.services-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
		gap: 40px;
		list-style: none;
		padding: 0;
		margin: 50px 0 30px;
	}

	.services-list li {
		background-color: #2a2a2a;
		padding: 40px 30px;
		border-radius: 8px;
		transition: transform 0.3s;
		border-left: 4px solid var(--blue-teal); /* Blue-leaning teal */
	}

	.services-list li:hover {
		transform: translateY(-5px);
	}

	.services-list h3 {
		color: white;
		margin-bottom: 15px;
		font-size: 1.3rem;
	}

	.services-list p {
		text-align: left;
		margin-bottom: 0;
		opacity: 0.8;
	}

	/* Results */
	.results {
		background-color: #f8f8f8;
	}

	.results-content {
		background-color: white;
		max-width: 800px;
		margin: 0 auto;
		padding: 50px;
		border-radius: 10px;
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
	}

	.results-list {
		list-style: none;
		padding: 0;
	}

	.results-list li {
		margin-bottom: 20px;
		font-size: 1.2rem;
		padding-left: 30px;
		position: relative;
	}

	.results-list li:before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--blue-teal); /* Blue-leaning teal */
		font-weight: bold;
	}

	.highlight {
		color: var(--blue-teal); /* Blue-leaning teal */
		font-weight: 700;
	}

	/* Exclusivity */
	.exclusivity {
		text-align: center;
		background-color: #000;
		color: white;
	}

	.exclusivity p {
		font-size: 1.3rem;
		margin-bottom: 40px;
	}

	.exclusivity .cta-button {
		margin-bottom: 20px;
	}

	.small-note {
		font-size: 0.9rem;
		opacity: 0.7;
		max-width: 500px;
	}

	/* Footer */
	footer {
		background-color: #1a1a1a;
		color: white;
		padding: 30px 0;
		text-align: center;
	}

	/* Modal */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		animation: fade 0.2s ease-out;
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: 50px;
		border-radius: 8px;
		width: 90%;
		max-height: 80%;
		overflow-y: scroll;
		overflow-x: none;
		max-width: 600px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition-duration: 0.3;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
		animation: modal-appear 2s ease-in-out forwards;
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-subtext {
		text-align: center;
		margin-bottom: 30px;
		font-size: 1rem;
		color: #666;
	}

	.close-button {
		position: absolute;
		top: 20px;
		right: 20px;
		font-size: 1.5rem;
		background: none;
		border: none;
		cursor: pointer;
		color: #333;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 25px;
		min-width: 100%;
	}

	.form-group label {
		display: block;
		align-self: flex-start;
		margin-bottom: 8px;
		font-weight: 600;
	}

	.form-group select {
		width: 100%;
		padding: 12px 15px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		background-color: #f9f9f9;
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 12px 0px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		background-color: #f9f9f9;
	}

	.form-group select {
		height: 48px;
	}

	.submit-button {
		background-color: var(--blue-teal); /* Blue-leaning teal */
		color: white;
		border: none;
		padding: 15px 25px;
		font-size: 1.1rem;
		font-weight: 700;
		border-radius: 4px;
		cursor: pointer;
		width: 100%;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.submit-button:hover {
		background-color: var(--blue-teal-dark); /* Darker teal for hover effect */
	}

	.error {
		color: red;
	}

	/* Responsive Adjustments */
	@media (max-width: 768px) {
		.headline {
			font-size: 1.8rem;
		}

		.subheadline {
			font-size: 1.1rem;
		}

		section {
			padding: 70px 0;
		}

		.modal-content {
			padding: 30px;
		}

		.results-content {
			padding: 30px;
		}
	}
</style>
