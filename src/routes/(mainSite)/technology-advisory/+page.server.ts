import { redirect } from '@sveltejs/kit';

// Retired service page: everything now lives on the homepage.
export const load = () => redirect(301, '/');
