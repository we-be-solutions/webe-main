<script lang="ts">
	let { data } = $props();
	let Content = data.content;
</script>

<div id="article-container">
	<article id="card">
		<h1>{data.meta.title}</h1>
		<Content />
		<hr />
		<p>Published: {data.meta.date}</p>
		<p>
			{#each data.meta.categories as tag}
				<span>{tag}</span>
			{/each}
		</p>
	</article>
</div>

<style>
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

	#article-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-self: center;
		max-width: 1200px;
	}

	#card {
		flex-grow: 1;
		margin: 8px;
		margin: 20px 40px 20px 40px;
		color: var(--black);
		border: 3px solid var(--black);
		padding: 105px;
	}

	article p {
		margin-top: 2.5rem;
		font-size: 1.2rem;
		display: flex;
		flex-wrap: wrap;
	}

	article span {
		margin-top: 4px;
		border: 1px solid var(--black);
		padding: 4px;
		margin-left: 5px;
	}

	@media (max-width: 1023px) {
		#card {
			max-width: 100%;
			margin-bottom: 20px;
			margin-top: 20px;
			padding: 35px;
		}
	}
</style>
