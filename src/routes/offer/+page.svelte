<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const size = 500;

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

	let time = $state(false);

	if (browser) {
		setTimeout(() => {
			time = !time;
		}, 2000);
	}
</script>

{#if !time}
	<div
		class="spinner mt-50 h-full w-full m-auto align-middle"
		style="--size: {size}px"
		aria-label="Loading..."
		role="status"
	></div>
{:else}
	<div
		class="max-w-md mx-auto mt-50 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg text-center"
	>
		<div class="text-4xl mb-4">🎉</div>
		<h1 class="text-2xl font-bold text-webe-blue dark:text-webe-blue-light mb-2">
			Thanks for stopping by!
		</h1>
		<p class="text-gray-600 dark:text-gray-300">We appreciate your time and see you soon.</p>
	</div>
{/if}

<style>
	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: var(--color-teal-800); /* Bootstrap Blue */
		border-radius: 50%;
		width: var(--size);
		height: var(--size);
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
