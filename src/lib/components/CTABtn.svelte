<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { fade, scale } from 'svelte/transition';
	import CloudFlareTurnStile from './CloudFlareTurnStile.svelte';
	import { sending, updateSending } from '../../store.svelte';

	type FormFailure = {
		error?: string;
		issues?: Array<{ message: string; path: string[] }>;
		values?: Record<string, string>;
	};

	let form: FormFailure & { success?: boolean; message?: string } = $props();
	let issues = $state(form.issues);
	let showModal = $state(false);
	let cfToken = $state('');

	const options: SubmitFunction = ({}) => {
		updateSending();
		return async ({ result }) => {
			if (result.type === 'failure') {
				issues = result.data?.issues;
				updateSending();
				await applyAction(result);
			} else {
				toggleModal();
				await applyAction(result);
			}
		};
	};

	function toggleModal() {
		showModal = !showModal;
		document.querySelector('nav')?.classList.toggle('hidden', showModal);
		document.querySelector('.cta-btn')?.classList.toggle('hidden', showModal);
	}

	const handleCFToken = (token: string): void => {
		cfToken = token;
	};
</script>

<!-- Trigger Button -->
<button
	class="cta-btn btn btn-warning btn-md text-xl text-black hover:shadow-lg transition-shadow duration-300"
	onclick={toggleModal}>Book a Chat!</button
>

<!-- Modal -->
{#if showModal}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
		role="dialog"
		tabindex="0"
		in:fade={{ duration: 150 }}
		out:fade={{ duration: 150 }}
		onclick={toggleModal}
		onkeydown={(event) => event.key === 'Escape' && toggleModal()}
	>
		<div class="modal modal-open" role="dialog" tabindex="0">
			<div
				class="modal-box w-full text-black max-w-2xl max-h-full"
				in:scale={{ duration: 200, start: 0.9 }}
				out:scale={{ duration: 200, start: 1 }}
				onclick={(e) => e.stopPropagation()}
				onkeydown={(event) => event.key === 'Escape' && toggleModal()}
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
				tabindex="0"
			>
				<!-- Close Button -->
				<form method="dialog">
					<button
						class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						onclick={toggleModal}
					>
						✕
					</button>
				</form>

				{#if !sending.sending}
					<h2 class="text-2xl font-bold mb-2">
						Get a Website That Works for Your Business Not the Other Way Around
					</h2>
					<p class="mb-4">
						If your current site wastes time, costs customers, or gives you headaches, it’s time for
						a change. Fill out the form and we’ll help you build a website and tech plan that fits
						your business perfectly saving you time, stress, and money.
					</p>
					<form method="POST" use:enhance={options} class="space-y-4">
						{#if form?.error}
							<div class="alert alert-error text-sm">{form.error}</div>
						{/if}

						{#if issues}
							{#each issues as issue}
								<p class="text-error text-sm">{issue.path[0]}: {issue.message}</p>
							{/each}
						{/if}

						<div>
							<label class="label" for="name">Full Name</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={form?.values?.name ?? ''}
								class="input input-bordered w-full"
							/>
						</div>

						<div>
							<label class="label" for="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={form?.values?.email ?? ''}
								class="input input-bordered w-full"
							/>
						</div>

						<div>
							<label class="label" for="company">Company</label>
							<input
								type="text"
								id="company"
								name="company"
								required
								value={form?.values?.company ?? ''}
								class="input input-bordered w-full"
							/>
						</div>

						<div class="hidden">
							<label for="honeypot">Honey pot</label>
							<input
								type="text"
								name="honeypot"
								id="honeypot"
								value={form?.values?.honeypot ?? ''}
							/>
						</div>

						<CloudFlareTurnStile handleToken={handleCFToken} />
						<input type="hidden" name="cf-turnstile-response" value={cfToken} />

						<button type="submit" class="btn btn-warning w-full text-black">Send</button>
					</form>
				{/if}

				<div class="mt-6">
					{#if !sending.sending}
						<p>
							We only take on a few new clients at a time to make sure each gets serious attention.
							If it’s a fit, we’ll reach out within 48 hours.
						</p>
					{/if}
					{#if sending.sending}
						<div class="mt-4 p-4 bg-base-200 rounded">
							<h3 class="text-xl font-bold">You’ve taken the first step.</h3>
							<p>
								Now we’ll review your info and see how we can help. If there’s a strong fit, we’ll
								book a time to talk strategy and next steps.
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
