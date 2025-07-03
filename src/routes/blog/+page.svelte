<h1>Articles</h1>
<div id="article-container">
	<article id="card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed nisi excepturi ducimus
			quis placeat dolores harum minima officia quibusdam, mollitia laboriosam magnam eius
			reprehenderit vel nulla blanditiis perspiciatis facere.
		</p>
	</article>
	<article id="card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed nisi excepturi ducimus
			quis placeat dolores harum minima officia quibusdam, mollitia laboriosam magnam eius
			reprehenderit vel nulla blanditiis perspiciatis facere.
		</p>
	</article>
	<article id="card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed nisi excepturi ducimus
			quis placeat dolores harum minima officia quibusdam, mollitia laboriosam magnam eius
			reprehenderit vel nulla blanditiis perspiciatis facere.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed nisi excepturi ducimus
			quis placeat dolores harum minima officia quibusdam, mollitia laboriosam magnam eius
			reprehenderit vel nulla blanditiis perspiciatis facere.
		</p>
	</article>
	<article id="card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed nisi excepturi ducimus
			quis placeat dolores harum minima officia quibusdam, mollitia laboriosam magnam eius
			reprehenderit vel nulla blanditiis perspiciatis facere.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed nisi excepturi ducimus
			quis placeat dolores harum minima officia quibusdam, mollitia laboriosam magnam eius
			reprehenderit vel nulla blanditiis perspiciatis facere.
		</p>
	</article>
	<article id="card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed nisi excepturi ducimus
			quis placeat dolores harum minima officia quibusdam, mollitia laboriosam magnam eius
			reprehenderit vel nulla blanditiis perspiciatis facere.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed nisi excepturi ducimus
			quis placeat dolores harum minima officia quibusdam, mollitia laboriosam magnam eius
			reprehenderit vel nulla blanditiis perspiciatis facere.
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
		justify-content: space-between;
	}

	#card {
		margin: 8px;
		margin: 20px 40px 20px 40px;
		color: var(--black);
		border: 3px solid var(--black);
	}

	#card p {
		padding: 20px;
	}

	@media (max-width: 1023px) {
		#card {
			max-width: 100%;
			min-width: auto;
			margin-bottom: 20px;
			margin-top: 20px;
		}

		#card p {
			padding: 20px;
		}
	}
</style>
