<script lang="ts">
	let { data } = $props();
</script>

<div class="text-center mt-32">
	<h1 class="text-4xl font-bold mb-6 mt-6">Articles</h1>
	<div class="mx-auto mt-1 mb-6 h-1 w-20 bg-primary rounded"></div>
</div>

<div
	id="article-container"
	class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-12 my-12 mx-auto lg:max-w-4/5"
>
	{#await data.posts then posts}
		{#each posts as p}
			<a href="/blog/{p.slug}" class="card bg-base-300 shadow-md hover:shadow-lg transition">
				<article class="card-body">
					<h2 class="card-title">{p.title}</h2>
					<h3 class="text-sm text-base-content/60">{p.date}</h3>
					<p>{p.description}</p>
					<div class="mt-2 flex flex-wrap gap-2">
						{#each p.categories as tag}
							<span class="badge badge-outline">{tag}</span>
						{/each}
					</div>
				</article>
			</a>
		{/each}
	{/await}
</div>
