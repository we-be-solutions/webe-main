<script lang="ts">
	let { data } = $props();
</script>

<h1>Articles</h1>
<div id="article-container">
	{#each data.posts as p}
		<a href="/blog/{p.slug}">
			<article id="card">
				<h2>{p.title}</h2>
				<h3>{p.date}</h3>
				<p>{p.description}</p>
			</article>
		</a>
	{/each}
</div>

<style>
	a {
		text-decoration: none;
	}

	h1 {
		color: var(--white);
		margin: 0px;
		font-size: 3.3rem;
		text-align: center;
		font-weight: 800;
		position: relative;
	}

	h1:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 150px;
		height: 4px;
		background-color: var(--blue-teal); /* Blue-leaning teal */
	}

	h2 {
		color: black;
	}

	#article-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	#card {
		flex-grow: 1;
		margin: 8px;
		margin: 20px 40px 20px 40px;
		color: var(--black);
		border: 3px solid var(--black);
		padding: 15px;
	}

	#card:hover {
		border: 3px solid var(--blue-teal);
	}

	@media (max-width: 1023px) {
		#card {
			max-width: 100%;
			margin-bottom: 20px;
			margin-top: 20px;
		}
	}
</style>
