<script lang="ts">
	// Import necessary components or functions if needed
	import { onMount } from 'svelte';

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
				<h1>WeBe Solutions</h1>
			</div>
			<h2 class="headline">Elite Software Development For Businesses That Demand Results</h2>
			<p class="subheadline">Strategic software solutions engineered to generate substantial ROI</p>
			<button class="cta-button" on:click={toggleModal}>Apply For Consultation</button>
		</div>
	</header>

	<section class="value-proposition">
		<div class="container">
			<h2>The High-Performance Alternative To Traditional Development Firms</h2>
			<p>
				WeBe Solutions isn't for everyone. I work exclusively with businesses that recognize
				software as a strategic investment rather than a necessary expense. My clients understand
				that premium development directly translates to premium results.
			</p>
		</div>
	</section>

	<section class="advantages">
		<div class="container">
			<h2>The WeBe Solutions Performance Guarantee</h2>
			<div class="advantages-grid">
				<div class="advantage-card">
					<h3>Strategic Expertise, Not Just Technical Skill</h3>
					<p>
						Your project is architected by a senior developer who understands business objectives
						first, technology second. Every line of code serves your bottom line.
					</p>
				</div>
				<div class="advantage-card">
					<h3>Direct Access To The Decision Maker</h3>
					<p>
						No account managers. No junior developers. You work directly with me—eliminating
						communication gaps that plague traditional agencies.
					</p>
				</div>
				<div class="advantage-card">
					<h3>Premium Execution Speed</h3>
					<p>
						My streamlined methodology delivers market-ready solutions in half the time of
						conventional development teams—giving you first-mover advantage.
					</p>
				</div>
				<div class="advantage-card">
					<h3>Results-Based Delivery</h3>
					<p>
						My projects aren't complete when the code compiles—they're complete when they deliver
						measurable business results that exceed your investment.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="services">
		<div class="container">
			<h2>Strategic Solutions For Business Growth</h2>
			<ul class="services-list">
				<li>
					<h3>High-Performance Application Development</h3>
					<p>Custom software engineered to create competitive advantages</p>
				</li>
				<li>
					<h3>Revenue-Generating API Solutions</h3>
					<p>Integration systems that unlock new profit centers</p>
				</li>
				<li>
					<h3>Strategic Technology Consultation</h3>
					<p>Decision frameworks that eliminate costly technology mistakes</p>
				</li>
				<li>
					<h3>Performance Optimization</h3>
					<p>Transform underperforming systems into business accelerators</p>
				</li>
			</ul>
		</div>
	</section>

	<section class="results">
		<div class="container">
			<h2>The Investment That Pays For Itself</h2>
			<div class="results-content">
				<p>
					My clients don't measure success by code quality or feature counts—they measure it by
					business impact:
				</p>
				<ul class="results-list">
					<li>
						<span class="highlight">Hundreds</span> of hours per week in labor costs saved through custom
						systems
					</li>
					<li>
						<span class="highlight">Eliminate</span> weekly business admin bottlenecks by automating
						critical processes
					</li>
					<li>
						<span class="highlight">Enhanced decision-making</span> across the organization with comprehensive
						data and insights portals
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="exclusivity">
		<div class="container">
			<h2>Extremely Limited Availability</h2>
			<p>
				To maintain the premium quality my clients expect, I accept only <span class="highlight"
					>3 new projects per quarter</span
				>. This exclusivity ensures your project receives the strategic attention required to
				produce exceptional results.
			</p>
			<button class="cta-button" on:click={toggleModal}>Apply For Consultation</button>
			<p class="small-note">
				*Application process includes a qualification assessment to ensure mutual fit
			</p>
		</div>
	</section>

	<footer>
		<div class="container">
			<p>&copy; {new Date().getFullYear()} WeBe Solutions. All rights reserved.</p>
		</div>
	</footer>

	{#if showModal}
		<div
			class="modal-backdrop"
			aria-label="modal-backdrop"
			aria-roledescription="modal"
			role="button"
			on:click={toggleModal}
		>
			<div class="modal-content" tabindex="0" role="button" on:click|stopPropagation>
				<div class="modal-header">
					<button class="close-button" on:click={toggleModal}>×</button>
					<h2>Application For Strategic Partnership</h2>
				</div>
				<p class="modal-subtext">
					Complete this brief qualification form to determine if we're the right fit to work
					together.
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
						<label for="budget">Project Investment Range</label>
						<select id="budget" required>
							<option value="">Select a range</option>
							<option value="30-50k">$30,000 - $50,000</option>
							<option value="50-100k">$50,000 - $100,000</option>
							<option value="100k+">$100,000+</option>
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
						<label for="project">Describe your project and desired business outcomes</label>
						<textarea id="project" rows="4" required></textarea>
					</div>
					<button type="submit" class="submit-button">Submit Application</button>
				</form>
			</div>
		</div>
	{/if}
</main>

<style>
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
		background-color: #ff3c00;
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
		background-color: #e03500;
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(255, 60, 0, 0.3);
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
		background-color: #ff3c00;
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
		border-left: 4px solid #ff3c00;
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
		color: #ff3c00;
		font-weight: bold;
	}

	.highlight {
		color: #ff3c00;
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
		background-color: #ff3c00;
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
		background-color: #e03500;
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
