<script>
	import CtaBtn from './CTABtn.svelte';
</script>

<footer
	class="bg-base-300 flex flex-col justify-between sm:flex-col md:flex-row lg:flex-row xl:flex-row"
>
	<div class="max-w-6xl my-5 px-5">
		<p class="text-sm">&copy; {new Date().getFullYear()} WeBe Solutions. All rights reserved.</p>
		<p class="text-sm">ABN 33 620 124 892</p>
	</div>
	<div class="flex justify-center align-middle mb-4 mt-4 mr-6">
		<CtaBtn />
	</div>
</footer>
