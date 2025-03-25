<script lang="ts">
	// Import necessary components or functions if needed
	import { onMount } from 'svelte';
	import Logo from '../components/svg/logo.svelte';
	import LogoNoWords from '../components/svg/logoNoWords.svelte';

	// State variables
	let showModal = false;

	// Functions
	function toggleModal() {
		showModal = !showModal;
	}

	function submitForm(event: Event) {
		event.preventDefault();
		// Handle form submission logic here
		toggleModal();
		// Show success message or redirect
	}

	onMount(() => {
		// Any initialization code here
	});
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
			<h2 class="headline">Automation & Software That Drives Profit, Not Complexity</h2>
			<p class="subheadline">
				We build custom automation that eliminates bottlenecks, scales operations, and delivers
				measurable ROI.
			</p>
			<button class="cta-button" on:click={toggleModal}>Apply For a Strategy Call</button>
		</div>
	</header>

	<section class="value-proposition">
		<div class="container">
			<h2>The High-Impact Alternative to Bloated Development Firms</h2>
			<p>
				WeBe Solutions isn’t for everyone. I work exclusively with businesses that see automation as
				a growth engine, not just a cost. My clients invest in <strong
					>custom-built automation</strong
				> to cut inefficiencies, scale faster, and drive higher profits.
			</p>
		</div>
	</section>
	<section class="advantages">
		<div class="container">
			<h2>The WeBe Solutions Performance Guarantee</h2>
			<div class="advantages-grid">
				<div class="advantage-card">
					<h3>Strategic Expertise, Powered by Automation</h3>
					<p>
						Your project is architected by a senior developer who prioritizes business objectives
						first, automation second. Every solution is designed to maximize efficiency and directly
						impact your bottom line.
					</p>
				</div>
				<div class="advantage-card">
					<h3>Direct Access To The Decision Maker</h3>
					<p>
						No middlemen. You work directly with me, ensuring fast decisions, clear communication,
						and a streamlined development process that avoids the usual agency delays.
					</p>
				</div>
				<div class="advantage-card">
					<h3>Rapid, Results-Driven Execution</h3>
					<p>
						My automated workflows and agile methodology deliver market-ready solutions in half the
						time of traditional dev teams—helping you scale faster.
					</p>
				</div>
				<div class="advantage-card">
					<h3>Measurable Business Outcomes, Not Just Code</h3>
					<p>
						Your project isn’t complete when the code compiles—it’s complete when it automates your
						operations and drives tangible ROI.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="services">
		<div class="container">
			<h2>Strategic Automation Solutions for Scalable Business Growth</h2>
			<ul class="services-list">
				<li>
					<h3>Custom Automation Development</h3>
					<p>
						Tailored software solutions that automate key workflows and create a competitive edge
					</p>
				</li>
				<li>
					<h3>Revenue-Boosting API Integrations</h3>
					<p>Seamless systems that unlock new profit streams through automated connections</p>
				</li>
				<li>
					<h3>Technology Strategy & Consultation</h3>
					<p>
						Decision frameworks that help businesses invest in automation and avoid costly mistakes
					</p>
				</li>
				<li>
					<h3>System Optimization & Automation</h3>
					<p>
						Transform your existing systems into high-performing, automated business accelerators
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
					My clients don’t measure success by lines of code or feature counts—they measure it by the
					impact automation has on their bottom line:
				</p>
				<ul class="results-list">
					<li>
						<span class="highlight">Hundreds of hours</span> per week saved by automating routine tasks
						and reducing labor costs
					</li>
					<li>
						<span class="highlight">Eliminate</span> time-wasting admin bottlenecks by automating key
						workflows and decision processes
					</li>
					<li>
						<span class="highlight">Data-driven decision-making</span> powered by custom dashboards that
						provide real-time insights across operations
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="exclusivity">
		<div class="container">
			<h2>Extremely Limited Availability</h2>
			<p>
				To ensure the premium quality my clients demand, I take on only <span class="highlight"
					>3 new automation projects per quarter</span
				>. This limited availability guarantees that your project receives the undivided attention
				it needs to drive real, measurable results through automation.
			</p>
			<button class="cta-button" on:click={toggleModal}>Apply for A Strategy Call</button>
			<p class="small-note">
				*Application process includes a qualification assessment to ensure we’re the right fit to
				work together.
			</p>
		</div>
	</section>

	<footer>
		<div class="container">
			<p>&copy; {new Date().getFullYear()} WeBe Solutions. All rights reserved.</p>
		</div>
	</footer>

	{#if showModal}
		<div class="modal-backdrop" role="button" on:click={toggleModal}>
			<div class="modal-content" tabindex="0" role="button" on:click|stopPropagation>
				<div class="modal-header">
					<button class="close-button" on:click={toggleModal}>×</button>
					<h2>Application for Strategic Automation Partnership</h2>
				</div>
				<p class="modal-subtext">
					We carefully select partners based on alignment, readiness, and potential for growth
					through automation. Apply below to see if we’re a good fit.
				</p>
				<form on:submit={submitForm}>
					<div class="form-group">
						<label for="name">Full Name</label>
						<input type="text" id="name" required />
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" required />
					</div>
					<div class="form-group">
						<label for="company">Company</label>
						<input type="text" id="company" required />
					</div>
					<div class="form-group">
						<label for="budget"
							>Our minimum engagement starts at $10,000. Which best describes your budget?</label
						>
						<select id="budget" required>
							<option value="">Select the option that best applies</option>
							<option value="10-30k">$10,000 - $30,000</option>
							<option value="30-75k">$30,000 - $75,000</option>
							<option value="75k+">$75,000+</option>
						</select>
					</div>
					<div class="form-group">
						<label for="timeline">Desired Completion Timeline</label>
						<select id="timeline" required>
							<option value="">Select a timeline</option>
							<option value="1-3">1-3 months</option>
							<option value="3-6">3-6 months</option>
							<option value="6+">6+ months</option>
						</select>
					</div>
					<div class="form-group">
						<label for="project"
							>Describe your project and the business outcomes you're aiming for</label
						>
						<textarea id="project" rows="4" required></textarea>
					</div>
					<button type="submit" class="submit-button">Apply for Consideration</button>
				</form>
				<p class="modal-subtext">
					Due to high demand, we only accept a limited number of automation projects each quarter.
					If selected, we will reach out within 48 hours to discuss next steps.
				</p>
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
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: 50px;
		border-radius: 8px;
		width: 90%;
		max-height: 80%;
		overflow: scroll;
		max-width: 600px;
		position: relative;
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
