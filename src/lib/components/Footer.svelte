<script lang="ts">
	import LogoNoWords from '../../components/svg/logoNoWords.svelte';
	import { site } from '$lib/config';
</script>

<footer class="border-t border-base-300 bg-base-200">
	<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
			<div>
				<a href="/" class="flex items-center gap-2.5" aria-label="WeBe Solutions home">
					<span class="w-8"><LogoNoWords /></span>
					<span class="text-lg font-bold tracking-tight">{site.name}</span>
				</a>
				<p class="mt-4 max-w-sm text-sm leading-relaxed text-muted">
					Engineering leadership, solution architecture and delivery improvement for software teams
					in Australia.
				</p>
			</div>

			<div>
				<h2 class="text-sm font-semibold">Contact</h2>
				<ul class="mt-3 space-y-2 text-sm text-muted">
					<li>
						<a class="hover:text-base-content" href="mailto:{site.email}">{site.email}</a>
					</li>
					<li>
						<a class="hover:text-base-content" href={site.linkedin} rel="noopener" target="_blank"
							>LinkedIn</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h2 class="text-sm font-semibold">Legal</h2>
				<ul class="mt-3 space-y-2 text-sm text-muted">
					<li><a class="hover:text-base-content" href="/privacy">Privacy Policy</a></li>
					<li><a class="hover:text-base-content" href="/terms">Terms of Service</a></li>
				</ul>
			</div>
		</div>

		<div
			class="mt-10 flex flex-col gap-2 border-t border-base-300 pt-6 text-sm text-muted sm:flex-row sm:justify-between"
		>
			<p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
			<p>ABN {site.abn}</p>
		</div>
	</div>
</footer>
