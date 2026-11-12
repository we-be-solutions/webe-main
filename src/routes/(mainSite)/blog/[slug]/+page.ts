import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { ARTICLES_ENABLED } from '$lib/config';

export const load: PageLoad = async ({ params }) => {
	if (!ARTICLES_ENABLED) error(404, 'Not found');

	try {
		const post = await import(`../../../../content/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
};
