<script>
	import CtaBtn from './CTABtn.svelte';
</script>

<footer class="bg-base-300 px-5 py-6">
	<div class=" mx-auto flex flex-col-reverse gap-6 md:flex-row md:justify-between md:items-center">
		<div class="flex justify-center items-end gap-6">
			<!-- Left: Legal Info -->
			<div class="space-y-2 text-sm">
				<p>&copy; {new Date().getFullYear()} WeBe Solutions. All rights reserved.</p>
				<p>ABN 33 620 124 892</p>
				<div class="flex gap-4">
					<a href="/privacy" class="link link-hover">Privacy Policy</a>
					<a href="/terms" class="link link-hover">Terms of Service</a>
				</div>
			</div>

			<!-- Center: Social Icons -->
			<div class="flex justify-center gap-4">
				<a
					href="https://www.linkedin.com/company/webe-au/"
					target="_blank"
					rel="noopener"
					aria-label="LinkedIn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 hover:text-primary transition"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2.2a4.8 4.8 0 0 1 4-2.2zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
						/>
					</svg>
					<p>LinkedIn</p>
				</a>
				<a
					href="https://www.facebook.com/webesolutions.au/"
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 hover:text-primary transition"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z"
						/>
					</svg>
					<p>Facebook</p>
				</a>
			</div>
		</div>

		<!-- Right: CTA Button -->
		<div class="flex justify-center md:justify-end">
			<CtaBtn />
		</div>
	</div>
</footer>
