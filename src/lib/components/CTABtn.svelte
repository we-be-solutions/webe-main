<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { fade, scale } from 'svelte/transition';
	import CloudFlareTurnStile from './CloudFlareTurnStile.svelte';

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
		return async ({ result }) => {
			if (result.type === 'failure') {
				issues = result.data?.issues;
				await applyAction(result);
			} else {
				toggleModal();
				await applyAction(result);
			}
		};
	};

	function toggleModal() {
		showModal = !showModal;
	}

	const handleCFToken = (token: string): void => {
		cfToken = token;
	};
</script>

<!-- Trigger Button -->
<button class="btn btn-primary btn-lg" onclick={toggleModal}>Free Discovery Call</button>

<!-- Modal -->
{#if showModal}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
		role="dialog"
		tabindex="0"
		in:fade={{ duration: 150 }}
		out:fade={{ duration: 150 }}
		onclick={toggleModal}
		onkeydown={(event) => event.key === 'Escape' && toggleModal()}
	>
		<div class="modal modal-open" role="dialog" tabindex="0">
			<div
				class="modal-box w-full max-w-2xl max-h-9/10 mt-16"
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

				<h2 class="text-2xl font-bold mb-2">Start Your Tech Plan with WeBe</h2>
				<p class="mb-4">
					We’re here to help small and medium businesses use technology to grow—without the jargon
					or overwhelm. If you’re ready to make smarter tech decisions, reach out with the form
					below.
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

					<div>
						<label class="label" for="timeline">When would you like to start?</label>
						<select id="timeline" name="timeline" required class="select select-bordered w-full">
							<option value="now" selected={form?.values?.timeline === 'now'}>
								Ready to start now
							</option>
							<option value="1-3" selected={form?.values?.timeline === '1-3'}>
								Within 1–3 months
							</option>
							<option value="3-6" selected={form?.values?.timeline === '3-6'}>
								Within 3–6 months
							</option>
						</select>
					</div>

					<div>
						<label class="label" for="project">
							What’s your biggest tech challenge right now? What results would you like to achieve?
						</label>
						<textarea
							id="project"
							name="project"
							rows="4"
							placeholder="I am unsure. I am open to assistance."
							class="textarea textarea-bordered w-full">{form?.values?.project ?? ''}</textarea
						>
					</div>

					<div class="hidden">
						<label for="honeypot">Honey pot</label>
						<input type="text" name="honeypot" id="honeypot" value={form?.values?.honeypot ?? ''} />
					</div>

					<CloudFlareTurnStile handleToken={handleCFToken} />
					<input type="hidden" name="cf-turnstile-response" value={cfToken} />

					<button type="submit" class="btn btn-primary w-full">Send</button>
				</form>

				<div class="mt-6">
					<p>
						We work closely with a select number of clients to ensure each business gets the
						attention it deserves. If you’re a fit, we’ll reach out within 48 hours to discuss your
						next steps.
					</p>

					<div class="mt-4 p-4 bg-base-200 rounded">
						<h3 class="text-lg font-semibold">Ready to make tech work for your business?</h3>
						<p>
							If you want clear guidance and practical solutions for your tech challenges, <strong
								>reach out now</strong
							>. Let’s turn your biggest tech challenge into your next business breakthrough.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
