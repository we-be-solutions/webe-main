<script lang="ts">
	import { tick } from 'svelte';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import CloudFlareTurnStile from './CloudFlareTurnStile.svelte';
	import { site } from '$lib/config';
	import { contactTopics, type ContactTopic } from '$lib/content/site';

	type Props = {
		btnText?: string;
		variant?: 'primary' | 'light' | 'outline';
		size?: 'md' | 'lg';
		/** Pre-selects the topic on the form, e.g. from a service page. */
		topic?: ContactTopic;
		class?: string;
	};

	let {
		btnText = 'Let’s talk',
		variant = 'primary',
		size = 'md',
		topic,
		class: className = ''
	}: Props = $props();

	type Issue = { message: string; path: string[] };

	let dialog: HTMLDialogElement | undefined = $state();
	let open = $state(false);
	let status: 'idle' | 'sending' | 'sent' = $state('idle');
	let error = $state('');
	let issues: Issue[] = $state([]);
	let cfToken = $state('');

	const uid = $props.id();
	const fieldId = (name: string) => `${uid}-${name}`;
	const fieldError = (name: string) => issues.find((issue) => issue.path[0] === name)?.message;

	const fields = [
		{ name: 'name', label: 'Full name', type: 'text', autocomplete: 'name' },
		{ name: 'email', label: 'Work email', type: 'email', autocomplete: 'email' },
		{ name: 'company', label: 'Company', type: 'text', autocomplete: 'organization' }
	] as const;

	const variants = {
		primary: 'btn-primary',
		light: 'bg-white text-neutral border-white hover:bg-base-200 hover:border-base-200',
		outline: 'btn-outline border-base-content/25 hover:bg-base-content hover:text-base-100'
	};

	async function openDialog() {
		open = true;
		// Wait for the dialog contents to mount so focus lands inside it
		await tick();
		dialog?.showModal();
	}

	function closeDialog() {
		dialog?.close();
	}

	function handleClose() {
		open = false;
		if (status === 'sent') status = 'idle';
		error = '';
		issues = [];
		cfToken = '';
	}

	const submit: SubmitFunction = () => {
		status = 'sending';
		error = '';
		issues = [];
		return async ({ result }) => {
			if (result.type === 'success') {
				status = 'sent';
			} else if (result.type === 'failure') {
				status = 'idle';
				error = (result.data?.error as string) ?? 'Something went wrong. Please try again.';
				issues = (result.data?.issues as Issue[]) ?? [];
			} else {
				status = 'idle';
				error = `Something went wrong. Please try again or email ${site.email}.`;
			}
		};
	};
</script>

<button
	type="button"
	class="btn {variants[variant]} {size === 'lg'
		? 'h-13 px-7 text-base'
		: 'px-5'} rounded-lg font-semibold shadow-none {className}"
	aria-haspopup="dialog"
	onclick={openDialog}
>
	{btnText}
</button>

<dialog
	bind:this={dialog}
	class="modal modal-bottom sm:modal-middle"
	aria-labelledby="{uid}-title"
	onclose={handleClose}
>
	{#if open}
		<div class="modal-box max-w-xl p-6 text-base-content sm:p-8">
			<button
				type="button"
				class="btn btn-sm btn-circle btn-ghost absolute top-3 right-3"
				aria-label="Close"
				onclick={closeDialog}
			>
				<svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4" aria-hidden="true">
					<path
						d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
					/>
				</svg>
			</button>

			{#if status === 'sent'}
				<div role="status">
					<h2 id="{uid}-title" class="text-2xl font-semibold tracking-tight">
						Thanks, message sent
					</h2>
					<p class="mt-3 leading-relaxed text-muted">
						I’ll read through what you’ve shared and get back to you personally to arrange a time to
						talk. A confirmation is on its way to your inbox.
					</p>
					<button type="button" class="btn btn-primary mt-6" onclick={closeDialog}>Close</button>
				</div>
			{:else}
				<h2 id="{uid}-title" class="pr-8 text-2xl font-semibold tracking-tight">
					Tell me what you’re working through
				</h2>
				<p class="mt-3 leading-relaxed text-muted">
					Whether it’s a team you want to strengthen or a technology decision you need help with,
					start with a no-obligation conversation. Leave a few details and I’ll be in touch.
				</p>

				<form method="POST" action="/" use:enhance={submit} class="mt-6 space-y-4" novalidate>
					{#if error}
						<div class="alert alert-error alert-soft text-sm" role="alert">{error}</div>
					{/if}

					{#each fields as field (field.name)}
						<div>
							<label class="mb-1.5 block text-sm font-medium" for={fieldId(field.name)}>
								{field.label}
							</label>
							<input
								id={fieldId(field.name)}
								name={field.name}
								type={field.type}
								autocomplete={field.autocomplete}
								required
								class="input w-full {fieldError(field.name) ? 'input-error' : ''}"
								aria-invalid={fieldError(field.name) ? 'true' : undefined}
								aria-describedby={fieldError(field.name)
									? `${fieldId(field.name)}-error`
									: undefined}
							/>
							{#if fieldError(field.name)}
								<p id="{fieldId(field.name)}-error" class="mt-1 text-sm text-error">
									{fieldError(field.name)}
								</p>
							{/if}
						</div>
					{/each}

					<fieldset>
						<legend class="mb-1.5 block text-sm font-medium">
							What’s it about? <span class="font-normal text-muted">(optional)</span>
						</legend>
						<div class="flex flex-col gap-2">
							{#each Object.entries(contactTopics) as [value, label] (value)}
								<label
									class="flex cursor-pointer items-center gap-3 rounded-field border border-base-300 px-3 py-2.5 text-sm has-checked:border-primary has-checked:bg-primary/5"
								>
									<input
										type="radio"
										name="topic"
										{value}
										checked={topic === value}
										class="radio radio-sm radio-primary"
									/>
									{label}
								</label>
							{/each}
						</div>
					</fieldset>

					<div>
						<label class="mb-1.5 block text-sm font-medium" for={fieldId('message')}>
							Tell me a little more <span class="font-normal text-muted">(optional)</span>
						</label>
						<textarea
							id={fieldId('message')}
							name="message"
							rows="4"
							maxlength="2000"
							class="textarea w-full {fieldError('message') ? 'textarea-error' : ''}"
							placeholder="Your team, the decision in front of you, what’s on your mind…"
						></textarea>
						{#if fieldError('message')}
							<p class="mt-1 text-sm text-error">{fieldError('message')}</p>
						{/if}
					</div>

					<div class="hidden" aria-hidden="true">
						<label for={fieldId('honeypot')}>Leave this field empty</label>
						<input
							type="text"
							name="honeypot"
							id={fieldId('honeypot')}
							tabindex="-1"
							autocomplete="off"
						/>
					</div>

					<CloudFlareTurnStile handleToken={(token: string) => (cfToken = token)} />
					<input type="hidden" name="cf-turnstile-response" value={cfToken} />

					<button
						type="submit"
						class="btn btn-primary h-12 w-full text-base"
						disabled={status === 'sending'}
					>
						{#if status === 'sending'}
							<span class="loading loading-spinner loading-sm" aria-hidden="true"></span>
							Sending…
						{:else}
							Send
						{/if}
					</button>

					<p class="text-sm text-muted">
						Prefer email? Write to <a class="link link-primary" href="mailto:{site.email}"
							>{site.email}</a
						>. See our <a class="link" href="/privacy">privacy policy</a> for how your details are handled.
					</p>
				</form>
			{/if}
		</div>
		<form method="dialog" class="modal-backdrop">
			<button aria-label="Close dialog">close</button>
		</form>
	{/if}
</dialog>
