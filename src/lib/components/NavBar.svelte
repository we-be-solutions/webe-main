<script lang="ts">
	import LogoNoWords from '../../components/svg/logoNoWords.svelte';
	import CtaBtn from './CTABtn.svelte';
	import { clickOutside } from '$lib/clickOutside';

	let menuOpen = false;
</script>

<nav use:clickOutside={() => (menuOpen = false)}>
	<div class="logo">
		<div class="logo-sizer">
			<LogoNoWords />
		</div>
		<h1>WeBE</h1>
	</div>

	<!-- Hamburger icon (visible only on mobile) -->
	<button class="hamburger" on:click={() => (menuOpen = !menuOpen)}> ☰ </button>

	<!-- Navigation menu -->
	<ul class:open={menuOpen} on:click={() => (menuOpen = false)}>
		<li><a href="/">Home</a></li>
		<li><a href="/blog">Articles</a></li>
	</ul>

	<CtaBtn />
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		background: white;
		z-index: 3;
	}

	.logo {
		display: flex;
		padding-right: 10px;
		padding-left: 10px;
		align-items: center;
		justify-content: center;
		/* background-color: var(--black); */
	}
	.logo-sizer {
		width: 75px;
	}
	.logo h1 {
		padding: 0px;
		margin: 0px;
		font-size: 2.5rem;
		letter-spacing: 1px;
		line-height: 1.6;
		color: var(--black);
	}

	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		transition: max-height 0.3s ease;
	}

	li {
		list-style-type: none;
		margin: 0 10px;
	}

	li a {
		text-decoration: none;
		color: inherit;
		font-size: 1.5rem;
		font-weight: 600;
		padding-right: 8px;
		border-right: 3px solid var(--black);
	}

	li a:hover {
		border-right: 3px solid var(--blue-teal);
		color: var(--blue-teal);
	}

	.hamburger {
		display: none;
		font-size: 2rem;
		background: none;
		border: none;
		cursor: pointer;
	}

	/* Mobile styles */
	@media (max-width: 768px) {
		ul {
			flex-direction: column;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: white;
			max-height: 0;
			overflow: hidden;
			margin: 0;
		}

		ul.open {
			max-height: 200px; /* Adjust as needed */
		}

		.hamburger {
			align-self: center;
			margin-right: 20px;
			display: block;
		}

		nav {
			flex-wrap: wrap;
			align-items: flex-start;
		}
	}
</style>
