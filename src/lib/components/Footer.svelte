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
		</div>

		{#if ctaVisible}
			<!-- Right: CTA Button -->
			<div class="flex justify-center md:justify-end">
				<CtaBtn />
			</div>
		{/if}
	</div>
</footer>
