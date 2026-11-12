import type { Actions } from '@sveltejs/kit';
import { contactAction } from '$lib/server/contact';

// The contact form on every page posts here (action="/").
export const actions = {
	default: contactAction
} satisfies Actions;
