<script>
	let loading = $state(false);
</script>

<section class="py-16 bg-base-200">
	<div class="container mt-24 mx-auto px-4 max-w-3xl text-center">
		<h2 class="text-4xl font-bold mb-6 text-primary">
			Lay the Right Tech Foundations Before You Scale
		</h2>
		<p class="text-lg mb-8 text-base-content/80">
			Growing your business? Don’t let duct-taped systems or outdated tools create bottlenecks. This
			free tech checkup gives you a practical, scalable foundation—without the overwhelm.
		</p>

		<div class="grid gap-4 text-left mb-10">
			<p>Here’s what’s included:</p>
			<ul class="list-none space-y-3">
				<li>
					✅ <strong>30-Minute 1:1 Strategy Session</strong> – Real advice, tailored to your team and
					operations.
				</li>
				<li>
					✅ <strong>Full System Report</strong> – A clear look at what’s working and what’s holding
					you back.
				</li>
				<li>
					✅ <strong>Next Steps Roadmap</strong> – Focus your time and budget on what actually matters.
				</li>
				<li>
					✅ <strong>Monthly Q&A Invite</strong> – Join others solving the same problems you are.
				</li>
				<li>
					✅ <strong>Performance Audit</strong> – Is your website pulling its weight? We’ll show you.
				</li>
				<li>
					✅ <strong>Accessibility Audit</strong> – Check how your digital experience serves real users.
				</li>
				<li>
					✅ <strong>Technical SEO Audit</strong> – See what’s working, what’s missing, and how to fix
					it.
				</li>
				<li>
					✅ <strong>Tech Health Checklist</strong> – Built for modern service-based businesses.
				</li>
				<li>
					✅ <strong>Ultimate Tool List</strong> – Our no-BS take on what’s worth using and what’s not.
				</li>
			</ul>
		</div>

		<p class="text-lg font-medium text-base-content">
			No fluff. No hard sell. Just clear, actionable insights to help you move forward with
			confidence.
		</p>

		<div class="mt-10">
			<button
				class="ml-onclick-form btn btn-warning text-black btn-lg"
				onclick={() => {
					loading = !loading;
					ml('show', 'd3FOT3', true);
					setTimeout(() => {
						loading = !loading;
					}, 2000);
				}}>{loading ? 'Loading...' : 'Book My Free Tech Checkup'}</button
			>
		</div>
	</div>
</section>
