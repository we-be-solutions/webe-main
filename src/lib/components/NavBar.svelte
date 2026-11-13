<script lang="ts">
	import LogoNoWords from '../../components/svg/logoNoWords.svelte';
	import CtaBtn from './CTABtn.svelte';
	import { clickOutside } from '$lib/clickOutside';

	let menuOpen = $state(false);

	const links = [
		{ href: '/#offer', label: 'The offer' },
		{ href: '/#how-it-works', label: 'How it works' },
		{ href: '/#engagement', label: 'Engagement' },
		{ href: '/#about', label: 'About' },
		{ href: '/#faq', label: 'FAQ' }
	];
</script>

<header
	class="fixed inset-x-0 top-0 z-50 border-b border-base-300/70 bg-base-100/90 backdrop-blur"
	use:clickOutside={() => (menuOpen = false)}
>
	<nav
		class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
		aria-label="Main"
	>
		<a href="/" class="flex items-center gap-2.5" aria-label="WeBe Solutions home">
			<span class="w-8"><LogoNoWords /></span>
			<span class="text-xl font-bold tracking-tight">WeBe</span>
			<span class="hidden text-sm font-medium text-muted sm:inline">Solutions</span>
		</a>

		<ul class="hidden items-center gap-1 lg:flex">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						class="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-base-content"
						>{link.label}</a
					>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<CtaBtn btnText="Let’s talk" class="btn-sm hidden sm:inline-flex" />
			<button
				class="btn btn-ghost btn-square lg:hidden"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
					aria-hidden="true"
				>
					{#if menuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
						/>
					{/if}
				</svg>
			</button>
		</div>
	</nav>

	{#if menuOpen}
		<div id="mobile-menu" class="border-t border-base-300 bg-base-100 lg:hidden">
			<ul class="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							class="block rounded-md px-3 py-2.5 font-medium hover:bg-base-200"
							onclick={() => (menuOpen = false)}>{link.label}</a
						>
					</li>
				{/each}
				<li class="pt-2 sm:hidden">
					<CtaBtn btnText="Let’s talk about your team" class="w-full" />
				</li>
			</ul>
		</div>
	{/if}
</header>
