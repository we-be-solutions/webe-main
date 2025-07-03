<script lang="ts">
	// THIS COMPONENT NEEDS A FORM ACTION WITH RESEND
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { fade, scale } from 'svelte/transition';

	type FormFailure = {
		error?: string;
		issues?: Array<{ message: string; path: string[] }>;
		values?: Record<string, string>;
	};

	let form: FormFailure & { success?: boolean; message?: string } = $props();
	let issues = $state(form.issues);

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
	// State variables
	let showModal = $state(false);

	// Functions
	function toggleModal() {
		showModal = !showModal;
	}
</script>

<button class="cta-button" onclick={toggleModal}>free discovery call</button>
{#if showModal}
	<div
		class="modal-backdrop"
		role="button"
		in:fade={{ duration: 150 }}
		out:fade={{ duration: 150 }}
		tabindex="0"
		onclick={() => toggleModal()}
		onkeydown={(event) => {
			if (event.key === 'Escape') {
				toggleModal();
			}
		}}
	>
		<div
			class="modal-content"
			role="button"
			in:scale={{ duration: 200, start: 0.9 }}
			out:scale={{ duration: 200, start: 1 }}
			tabindex="0"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(event) => {
				if (event.key === 'Escape') {
					toggleModal();
				}
			}}
		>
			<button class="close-button" onclick={toggleModal}>×</button>
			<div class="modal-header">
				<h2>Start Your Tech Plan with WeBe</h2>
			</div>
			<p class="modal-subtext">
				We’re here to help small and medium businesses use technology to grow—without the jargon or
				overwhelm. If you’re ready to make smarter tech decisions, reach out with the form below.
			</p>
			<form method="POST" use:enhance={options}>
				{#if form?.error}
					<p class="error">{form.error}</p>
				{/if}
				{#if issues}
					{#each issues as issue}
						<p class="error">{issue.path[0]}: {issue.message}</p>
					{/each}
				{/if}
				<div class="form-group">
					<label for="name">Full Name</label>
					<input type="text" name="name" id="name" value={form?.values?.name ?? ''} required />
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" name="email" id="email" value={form?.values?.email ?? ''} required />
				</div>
				<div class="form-group">
					<label for="company">Company</label>
					<input
						type="text"
						name="company"
						id="company"
						value={form?.values?.company ?? ''}
						required
					/>
				</div>
				<div class="form-group">
					<label for="timeline">When would you like to start?</label>
					<select id="timeline" name="timeline" required>
						<option value="now" selected={form?.values?.timeline === 'now'}
							>Ready to start now</option
						>
						<option value="1-3" selected={form?.values?.timeline === '1-3'}
							>Within 1-3 months</option
						>
						<option value="3-6" selected={form?.values?.timeline === '3-6'}
							>Within 3-6 months</option
						>
					</select>
				</div>
				<div class="form-group">
					<label for="project"
						>What’s your biggest tech challenge right now? What results would you like to achieve?</label
					>
					<textarea id="project" name="project" placeholder="I am unsure. I am open to assistance."
						>{form?.values?.project ?? ''}</textarea
					>
				</div>
				<div class="honeypot">
					<label for="honeypot">Honey pot</label>
					<input type="text" name="honeypot" id="honeypot" value={form?.values?.honeypot ?? ''} />
				</div>
				<button type="submit" class="submit-button">Send</button>
			</form>

			<p class="modal-subtext">
				We work closely with a select number of clients to ensure each business gets the attention
				it deserves. If you’re a fit, we’ll reach out within 48 hours to discuss your next steps.
			</p>
			<div class="offer-call">
				<h3>Ready to make tech work for your business?</h3>
				<p>
					If you want clear guidance and practical solutions for your tech challenges, <strong
						>reach out now</strong
					>. Let’s turn your biggest tech challenge into your next business breakthrough.
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.honeypot {
		display: none;
	}
	/* Button Styles */
	.cta-button {
		text-align: center;
		background-color: var(--black-transparent);
		color: white;
		border: none;
		font-size: 1.1rem;
		font-weight: 700;
		border: 1px solid var(--cyberpunk-pink);
		cursor: pointer;
		transition: all 0.1s;
		text-transform: uppercase;
		letter-spacing: 1px;
		z-index: 2;
		box-shadow: 1px 1px 4px 1px var(--cyberpunk-pink-dark);
		margin-right: 20px;
		padding: 5px;
	}

	.cta-button:hover {
		box-shadow: 1px 1px 4px 1px var(--blue-teal-dark);
		color: var(--blue-teal);
		border: 1px solid var(--blue-teal);
		transform: translateY(-1px);
	}
	/* Modal */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		animation: fade 0.2s ease-out;
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: 50px;
		border-radius: 8px;
		width: 90%;
		max-height: 80%;
		overflow-y: scroll;
		overflow-x: none;
		max-width: 600px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition-duration: 0.3;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
		animation: modal-appear 2s ease-in-out forwards;
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-subtext {
		text-align: center;
		margin-bottom: 30px;
		font-size: 1rem;
		color: #666;
	}

	.close-button {
		position: absolute;
		top: 20px;
		right: 20px;
		font-size: 1.5rem;
		background: none;
		border: none;
		cursor: pointer;
		color: #333;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 25px;
		min-width: 100%;
	}

	.form-group label {
		display: block;
		align-self: flex-start;
		margin-bottom: 8px;
		font-weight: 600;
	}

	.form-group select {
		width: 100%;
		padding: 12px 15px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		background-color: #f9f9f9;
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 12px 0px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		background-color: #f9f9f9;
	}

	.form-group select {
		height: 48px;
	}

	.submit-button {
		background-color: var(--blue-teal); /* Blue-leaning teal */
		color: white;
		border: none;
		padding: 15px 25px;
		font-size: 1.1rem;
		font-weight: 700;
		border-radius: 4px;
		cursor: pointer;
		width: 100%;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.submit-button:hover {
		background-color: var(--blue-teal-dark); /* Darker teal for hover effect */
	}

	.error {
		color: red;
	}
	@media (max-width: 768px) {
		.modal-content {
			padding: 30px;
		}

		/* Button Styles */
		.cta-button {
			position: fixed;
			bottom: 10px;
			right: 10px;
			text-align: center;
			background-color: var(--black-transparent);
			color: white;
			border: none;
			padding: 18px 20px;
			font-size: 1.1rem;
			font-weight: 700;
			border: 1px solid var(--cyberpunk-pink);
			border-radius: 500px;
			width: 140px;
			height: 140px;
			cursor: pointer;
			transition: all 0.1s;
			text-transform: uppercase;
			letter-spacing: 1px;
			z-index: 2;
			box-shadow: 4px 1px 4px 1px var(--cyberpunk-pink-dark);
		}

		.cta-button:hover {
			box-shadow: 4px 1px 4px 1px var(--blue-teal-dark);
			color: var(--blue-teal);
			border: 1px solid var(--blue-teal);
			transform: translateY(-1px);
		}
	}
</style>
