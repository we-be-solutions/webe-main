import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	try {
		const post = await import(`../../../content/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
};
