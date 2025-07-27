<script lang="ts">
	let { data } = $props();
	let Content = data.content;
</script>

<div id="article-container" class="max-w-5xl mx-auto p-6 mt-32">
	<article class="card bg-base-100 shadow-md">
		<div class="card-body space-y-4">
			<h1 class="card-title text-4xl font-bold">{data.meta.title}</h1>

			<div class="prose prose-lg max-w-none">
				<Content />
			</div>

			<hr class="border-base-300" />

			<p class="text-sm text-base-content/60">Published: {data.meta.date}</p>

			<div class="flex flex-wrap gap-2">
				{#each data.meta.categories as tag}
					<span class="badge badge-outline">{tag}</span>
				{/each}
			</div>
		</div>
	</article>
</div>
