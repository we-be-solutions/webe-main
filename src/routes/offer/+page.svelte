<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const checkMailerLite = () => {
			if (window.ml) {
				window.ml('show', 'd3FOT3', true);
			} else {
				// Wait and try again if the script hasn't loaded yet
				setTimeout(checkMailerLite, 300);
			}
		};

		checkMailerLite();
	});
</script>
