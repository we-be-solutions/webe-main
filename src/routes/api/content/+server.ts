import { json } from '@sveltejs/kit';

export type Categories = 'Automation' | 'Business Operations' | 'AI' | 'Tools';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

function getContent(latest: string) {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/content/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort((first, second) => {
		const [fDay, fMonth, fYear] = first.date.split('-');
		const [sDay, sMonth, sYear] = second.date.split('-');
		const fDate = new Date(parseInt(fYear, 10), parseInt(fMonth, 10) - 1, parseInt(fDay, 10));
		const sDate = new Date(parseInt(sYear, 10), parseInt(sMonth, 10) - 1, parseInt(sDay, 10));
		return sDate.getTime() - fDate.getTime();
	});

	if (latest !== 'all') {
		return posts.slice(0, 3);
	}

	return posts;
}

export async function GET({ url }: { url: URL }) {
	const latest = url.searchParams.get('latest') ?? 'all';
	const res = getContent(latest);
	return json(res);
}
