import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
};

const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],
	kit: { adapter: adapter() }
};

export default config;
