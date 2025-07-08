<script lang="ts">
	import whiteTri from '$lib/assets/white_tri.png';

	let { data } = $props();
</script>

<header class="hero">
	<div class="container">
		<h2 class="headline">Level the Playing Field of Tech</h2>
		<p class="subheadline">
			Helping your business plan, build, and use the right technology the right way. So you can grow
			without the tech headaches.
		</p>
	</div>
</header>

<section class="value-proposition">
	<div class="container">
		<h2>The High-Impact Alternative to Big Tech Firms</h2>
		<p>
			WeBe Solutions is built for businesses that see technology as a growth engine and not just
			another expense. It's for those ready to invest in <strong>strategic tech</strong> to eliminate
			inefficiencies, make smarter decisions, and accelerate profits.
		</p>
	</div>
</section>
<section class="articles">
	<h2>Latest News</h2>
	<div id="article-container">
		{#await data.posts then posts}
			{#each posts as p}
				<a href="/blog/{p.slug}">
					<article id="card">
						<h3>{p.title}</h3>
						<h4>{p.date}</h4>
						<p>{p.description}</p>
						<p>
							{#each p.categories as tag}
								<span>{tag}</span>
							{/each}
						</p>
					</article>
				</a>
			{/each}
		{/await}
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
					first, technology second. Every recommendation is designed to maximise impact and directly
					support your goals.
				</p>
			</div>
			<div class="advantage-card">
				<h3>Direct Access To The Decision Maker</h3>
				<p>
					No middlemen. You work directly with me, ensuring clear communication, fast decisions, and
					a streamlined process that avoids agency delays.
				</p>
			</div>
			<div class="advantage-card">
				<h3>Rapid, Results-Driven Guidance</h3>
				<p>
					A agile approach delivers actionable insights and practical application in half the time
					of traditional consultancies—helping you move forward quickly.
				</p>
			</div>
			<div class="advantage-card">
				<h3>Measurable Business Outcomes, Not Just Tech</h3>
				<p>
					My work doesn’t end with a report or a prototype—it continues through building, refining,
					and supporting systems until you see real results and feel confident in the decisions that
					got you there.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="services">
	<img id="tri" src={whiteTri} alt="white triangle art" loading="lazy" />
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
					See your vision in action with working prototypes and system blueprints—designed to match
					your goals and budget.
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
					Eliminate friction and boost productivity by simplifying your tech stack and streamlining
					daily workflows.
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
	<div class="container">
		<h2>The Investment That Pays for Itself</h2>
		<div class="results-content">
			<p>
				My clients don’t measure success by tech features or complexity—they measure it by the
				impact smart tech decisions have on their business:
			</p>
			<ul class="results-list">
				<li>
					<span class="highlight">Hours saved</span> by streamlining workflows and reducing manual tasks
				</li>
				<li>
					<span class="highlight">Eliminate costly mistakes</span> by making informed, future-proof tech
					choices
				</li>
				<li>
					<span class="highlight">Effective collaboration</span> fueled by open, transparent communication
					and expert guidance
				</li>
				<li>
					<span class="highlight">Faster delivery</span> of projects with clear plans and hands-on support
				</li>
				<li>
					<span class="highlight">Less stress</span> from unclear systems or scattered tools
				</li>
				<li>
					<span class="highlight">Stronger decision-making</span> backed by plain-language insights and
					real-world experience
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
</section>

<section class="exclusivity">
	<div class="container">
		<h2>Focused Attention for Every Client</h2>
		<p>
			To ensure each business receives the attention and care it deserves, I work closely with just
			a small number of consulting clients at a time.
		</p>
		<p>
			This means your business gets the focus and support needed to make real progress in using
			technology to drive growth and efficiency.
		</p>
	</div>
</section>

<style>
	#tri {
		padding-top: 280px;
		padding-left: 80px;
		z-index: 0;
		position: absolute;
		width: 300px;
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
		background: linear-gradient(135deg, var(--blue-teal-dark), #000000);
		background-color: var(--black);
		color: white;
		padding: 100px 0;
		text-align: center;
	}

	.headline {
		font-size: 3.4rem;
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

	.advantages {
		background-color: #f1f1f1;
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
		border: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
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
		display: flex;
		flex-direction: column;
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
		box-shadow: 0px 4px 8px rgba(100, 100, 200, 0.2);
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

	/* Responsive Adjustments */
	@media (max-width: 768px) {
		.headline {
			font-size: 2.8rem;
		}

		.subheadline {
			font-size: 1.1rem;
		}

		section {
			padding: 70px 0;
		}

		.results-content {
			padding: 30px;
		}
	}

	/* .articles h1 { */
	/* 	color: var(--white); */
	/* 	margin: 0px; */
	/* 	font-size: 3.3rem; */
	/* 	text-align: center; */
	/* 	font-weight: 800; */
	/* 	position: relative; */
	/* } */
	/**/
	/* .articles h1:after { */
	/* 	content: ''; */
	/* 	position: absolute; */
	/* 	bottom: 0; */
	/* 	left: 50%; */
	/* 	transform: translateX(-50%); */
	/* 	width: 150px; */
	/* 	height: 4px; */
	/* 	background-color: var(--blue-teal); /* Blue-leaning teal */
	/* } */

	.articles h3 {
		color: black;
	}

	#article-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	#article-container a {
		max-width: 30%;
	}

	.articles a {
		text-decoration: none;
	}

	#card {
		margin: 8px;
		margin: 10px 10px 10px 10px;
		color: var(--black);
		border: 3px solid var(--black);
		padding: 15px;
		min-height: 100%;
	}

	#card:hover {
		border: 3px solid var(--blue-teal);
	}
	article p {
		margin-top: 2.5rem;
		font-size: 1rem;
		display: flex;
		flex-wrap: wrap;
	}

	article span {
		margin-top: 3px;
		border: 1px solid var(--black);
		padding: 4px;
		margin-left: 5px;
	}

	@media (max-width: 1023px) {
		#article-container a {
			max-width: 100%;
		}
		#card {
			max-width: 100%;
			min-height: inherit;
			margin-bottom: 20px;
			margin-top: 20px;
		}
	}
</style>
