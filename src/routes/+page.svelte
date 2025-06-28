<script lang="ts">
	import LogoNoWords from '../components/svg/logoNoWords.svelte';
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { fade, scale } from 'svelte/transition';
	import whiteTri from '$lib/assets/white_tri.png';
	import wave from '$lib/assets/wave_dark.png';

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
	<button class="cta-button" onclick={toggleModal}>free discovery call</button>
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
				I help businesses plan, build, and use the right technology—so you can grow without the tech
				headaches.
			</p>
		</div>
	</header>

	<section class="value-proposition">
		<img id="top-wave" src={wave} alt="wave background" />
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
		<img id="wave" src={wave} alt="wave background" />
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
		<img id="tri" src={whiteTri} alt="white triangle art" />
		<div class="container">
			<h2>Strategic Tech Solutions for Confident Business Growth</h2>
			<ul class="services-list">
				<li>
					<h3>Work Smarter with AI</h3>
					<p>
						Streamline operations and make smarter decisions by confidently using AI—without adding
						risk or complexity.
					</p>
				</li>

				<li>
					<h3>Achieve Goals with the Right Tech</h3>
					<p>
						Move your business forward faster by uncovering how technology can directly support your
						growth—minus the jargon.
					</p>
				</li>

				<li>
					<h3>Free Up Time Through Automation</h3>
					<p>
						Reclaim hours each week by turning repetitive tasks into efficient automations—so your
						team can focus on high-impact work.
					</p>
				</li>

				<li>
					<h3>Bring Your Ideas to Life</h3>
					<p>
						See your vision in action with working prototypes and system blueprints—designed to
						match your goals and budget.
					</p>
				</li>

				<li>
					<h3>Make Confident Tech Decisions</h3>
					<p>
						Get expert guidance when you need it—so you’re never stuck, second-guessing, or wasting
						time on the wrong tools.
					</p>
				</li>

				<li>
					<h3>Turn Plans into Reality</h3>
					<p>
						Launch smoothly with hands-on support—from system builds to integrations—ensuring your
						tech works from day one.
					</p>
				</li>

				<li>
					<h3>Get More from Your Tools</h3>
					<p>
						Eliminate friction and boost productivity by simplifying your tech stack and
						streamlining daily workflows.
					</p>
				</li>

				<li>
					<h3>Choose the Right Tools with Confidence</h3>
					<p>
						Avoid costly mistakes by getting clear, unbiased recommendations on platforms that
						actually fit your needs.
					</p>
				</li>
			</ul>
		</div>
	</section>

	<section class="results">
		<img id="top-wave" src={wave} alt="wave background" />
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
					<li>
						<span class="highlight">Faster delivery</span> of projects with clear plans and hands-on
						support
					</li>
					<li>
						<span class="highlight">Less stress</span> from unclear systems or scattered tools
					</li>
					<li>
						<span class="highlight">Stronger decision-making</span> backed by plain-language insights
						and real-world experience
					</li>
					<li>
						<span class="highlight">More confident teams</span> who know how and why things work
					</li>
					<li>
						<span class="highlight">Real business results</span> from tech that’s built to support your
						goals
					</li>
				</ul>
			</div>
		</div>
		<img id="wave" src={wave} alt="wave background" />
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
				<button class="close-button" onclick={toggleModal}>×</button>
				<div class="modal-header">
					<h2>Start Your Tech Plan with WeBe</h2>
				</div>
				<p class="modal-subtext">
					We’re here to help small and medium businesses use technology to grow—without the jargon
					or overwhelm. If you’re ready to make smarter tech decisions, reach out with the form
					below.
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
							>reach out now</strong
						>. Let’s turn your biggest tech challenge into your next business breakthrough.
					</p>
				</div>
			</div>
		</div>
	{/if}
</main>

<style>
	#tri {
		padding-top: 280px;
		padding-left: 80px;
		z-index: 0;
		position: absolute;
		width: 300px;
	}
	#wave {
		z-index: 0;
		width: 100%;
		height: 70px;
		position: absolute;
		bottom: 0px;
	}
	#top-wave {
		z-index: 0;
		width: 100%;
		height: 70px;
		position: absolute;
		top: 0px;
		transform: rotate(180deg);
	}

	/* Define CSS variable for teal color */
	:root {
		--blue-teal: #00a4cc; /* Default Blue-leaning teal */
		--blue-teal-dark: #007b99; /* Darker teal for hover effects */
		--blue-teal-transparent: #00a4ccdd; /* Default Blue-leaning teal */
		--cyberpunk-pink: #ff2ecb; /* Vivid neon magenta */
		--cyberpunk-pink-dark: #c0219b; /* Deeper magenta for hover/dark variants */
		--cyberpunk-pink-transparent: #ff2ecbdd; /* Same neon pink, with transparency */
		--black: #1a1a1a;
		--black-transparent: #1a1a1add;
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
		z-index: 1;
		position: relative;
	}

	/* Hero Section */
	.hero {
		/* background: linear-gradient(135deg, #1a1a1a, #000000); */
		background-color: var(--black);
		color: white;
		padding: 100px 0;
		text-align: left;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: start;
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
		position: fixed;
		top: 45px;
		right: 45px;
		text-align: center;
		background-color: var(--black-transparent);
		color: var(--cyberpunk-pink);
		border: none;
		padding: 18px 20px;
		font-size: 1.1rem;
		font-weight: 700;
		border: 1px solid var(--cyberpunk-pink);
		border-radius: 500px;
		width: 140px;
		height: 140px;
		cursor: pointer;
		transition: all 0.1s;
		text-transform: uppercase;
		letter-spacing: 1px;
		z-index: 2;
		box-shadow: 4px 1px 4px 1px var(--cyberpunk-pink-dark);
	}

	.cta-button:hover {
		box-shadow: 4px 1px 4px 1px var(--blue-teal-dark);
		color: var(--blue-teal);
		border: 1px solid var(--blue-teal);
		transform: translateY(-1px);
	}

	/* Section Styles */
	section {
		padding: 100px 0;
		position: relative;
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
		border: 1px solid var(--cyberpunk-pink);
		box-shadow: 0 5px 8px var(--cyberpunk-pink-dark);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.advantage-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
		border: 1px solid var(--blue-teal);
		box-shadow: 0 5px 8px var(--blue-teal-dark);
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
		background-color: var(--black);
		color: white;
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
		box-shadow: 0px 0px 8px white;
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
		background-color: var(--black);
		color: white;
	}

	.exclusivity p {
		font-size: 1.3rem;
		margin-bottom: 40px;
	}

	/* Footer */
	footer {
		background-color: #000;
		color: white;
		padding: 30px 0;
		text-align: left;
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

		.cta-button {
			bottom: 20px;
			top: auto;
		}
	}
</style>
