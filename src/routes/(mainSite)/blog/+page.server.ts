import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Post } from '../api/content/+server';
import { ARTICLES_ENABLED } from '$lib/config';

export const load: PageServerLoad = async ({ fetch }) => {
	if (!ARTICLES_ENABLED) error(404, 'Not found');

	const res = await fetch('/api/content');
	const posts: Promise<Post[]> = res.json();
	return { posts };
};
