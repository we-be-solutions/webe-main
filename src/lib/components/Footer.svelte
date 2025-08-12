<script>
	import CtaBtn from './CTABtn.svelte';

	let { ctaVisible = true } = $props();
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
						stroke-width="1.5"
						viewBox="0 0 50 50"
						class="size-10"
					>
						<title>LinedIn</title>
						<path
							d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
						></path>
					</svg>
					<p>LinkedIn</p>
				</a>
				<a
					href="https://www.facebook.com/webesolutions.au/"
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-10">
						<title>Facebook</title>
						<path
							d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
						/>
					</svg>
					<p>Facebook</p>
				</a>
			</div>
		</div>

		{#if ctaVisible}
			<!-- Right: CTA Button -->
			<div class="flex justify-center md:justify-end">
				<CtaBtn />
			</div>
		{/if}
	</div>
</footer>
