<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id: string;
		eyebrow?: string;
		title: string;
		intro?: string;
		tone?: 'light' | 'muted' | 'dark';
		children: Snippet;
	};

	let { id, eyebrow, title, intro, tone = 'light', children }: Props = $props();

	const tones = {
		light: 'bg-base-100 text-base-content',
		muted: 'bg-base-200 text-base-content',
		dark: 'bg-neutral text-neutral-content'
	};
</script>

<section {id} class="{tones[tone]} py-20 md:py-28" aria-labelledby="{id}-heading">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<header class="max-w-3xl">
			{#if eyebrow}
				<p
					class="text-sm font-semibold tracking-wider uppercase {tone === 'dark'
						? 'text-secondary'
						: 'text-primary'}"
				>
					{eyebrow}
				</p>
			{/if}
			<h2
				id="{id}-heading"
				class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-tight"
			>
				{title}
			</h2>
			{#if intro}
				<p
					class="mt-5 text-lg leading-relaxed {tone === 'dark'
						? 'text-neutral-content/80'
						: 'text-muted'}"
				>
					{intro}
				</p>
			{/if}
		</header>
		<div class="mt-12 md:mt-16">
			{@render children()}
		</div>
	</div>
</section>
