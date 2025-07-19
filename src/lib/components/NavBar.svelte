<script lang="ts">
	import LogoNoWords from '../../components/svg/logoNoWords.svelte';
	import CtaBtn from './CTABtn.svelte';
	import { clickOutside } from '$lib/clickOutside';

	let menuOpen = false;
</script>

<nav class="navbar z-50 fixed bg-base-100 shadow-sm" use:clickOutside={() => (menuOpen = false)}>
	<div class="navbar-start">
		<a href="/" class="flex items-center gap-2">
			<div class="w-15">
				<LogoNoWords />
			</div>
			<p class="text-3xl font-bold">WeBe</p>
		</a>
	</div>

	<!-- Desktop Menu -->
	<div class="navbar-center hidden md:flex relative -translate-x-1/2">
		<ul class="menu menu-horizontal px-1 text-lg">
			<li><a href="/">Home</a></li>
			<li><a href="/blog">Articles</a></li>
		</ul>
	</div>

	<!-- Mobile Hamburger -->
	<div class="navbar-end md:hidden">
		<button class="btn btn-ghost" aria-label="Toggle menu" on:click={() => (menuOpen = !menuOpen)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4.5 6.75h15M4.5 12h15M4.5 17.25h15"
				/>
			</svg>
		</button>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if menuOpen}
		<div class="absolute top-full left-0 w-full bg-base-100 shadow-md md:hidden z-20">
			<ul class="menu px-4 py-2 space-y-2">
				<li><a href="/" on:click={() => (menuOpen = false)}>Home</a></li>
				<li><a href="/blog" on:click={() => (menuOpen = false)}>Articles</a></li>
			</ul>
		</div>
	{/if}
</nav>

<!-- CTA outside nav -->
<div
	class="fixed top-0 right-0 z-50 hidden md:flex items-center px-4 h-[var(--navbar-height,4rem)]"
	style="--navbar-height:72px;"
>
	<CtaBtn />
</div>
