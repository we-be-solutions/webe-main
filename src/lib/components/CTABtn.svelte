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

	let form: FormFailure & { success?: boolean; message?: string; btnText?: string } = $props();
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

<button class="cta-btn btn bg-blue-500 btn-md text-lg text-white p-10 h-15" onclick={toggleModal}>
	<span>{form.btnText ? form.btnText : 'See Your Next Step (Free)'}</span>
</button>
<!-- Modal -->
{#if showModal}
	<div
		class="fixed inset-0 z-[9999] flex items-center justify-center
         bg-base-200/70 backdrop-blur-sm"
		role="dialog"
		tabindex="0"
		in:fade={{ duration: 150 }}
		out:fade={{ duration: 150 }}
		onclick={toggleModal}
		onkeydown={(event) => event.key === 'Escape' && toggleModal()}
	>
		<div class="modal modal-open" role="dialog" tabindex="0">
			<div
				class="modal-box z-[9999] w-full text-black max-w-2xl max-h-full"
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
					<h2 class="text-2xl font-bold mb-2">Your First Win in Just One Day</h2>
					<p class="mb-4">
						Start with a free <strong>check-up call</strong>. In 30 minutes we’ll spot where your
						website or tools slow you down. Then we’ll show how many <strong>$800 days</strong> it takes
						to fix. Simple plan, no risk.
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

						<div class="w-full flex justify-center">
							<button
								type="submit"
								class="cta-btn btn w-4/5 bg-blue-500 btn-xl text-lg text-white p-10 h-15"
								>Send</button
							>
						</div>
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
								book a time to talk diagnosis and next steps.
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.cta-btn {
		position: relative;
		overflow: hidden;
		border-radius: 0.75rem;
		font-weight: 700;
		padding: 0.5rem 1.5rem;
		transition:
			transform 0.2s ease,
			box-shadow 0.3s ease;
	}

	/* Glow / pulse effect */
	.cta-btn::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(
			circle,
			rgba(103, 232, 249, 0.5) 0%,
			/* Tailwind cyan-300 */ rgba(59, 130, 246, 0.4) 40%,
			/* Tailwind blue-500 */ rgba(37, 99, 235, 0) 70%
		);
		border-radius: 50%;
		opacity: 0;
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
		z-index: 0;
	}

	/* Hover / active states */
	.cta-btn:hover::before {
		opacity: 1;
		transform: scale(1.2);
	}

	.cta-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 12px rgba(59, 130, 246, 0.4); /* Tailwind's blue-500 */
	}

	.cta-btn:active {
		transform: translateY(1px);
		box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3); /* Tailwind's blue-500 */
	}

	/* Ensure text is above glow */
	.cta-btn span {
		position: relative;
		z-index: 1;
	}
</style>
