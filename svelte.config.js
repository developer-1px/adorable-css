/** @type {import("@sveltejs/kit").Config} */
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
	kit: {
		adapter: adapter(),
		alias: {
			src: resolve('src'),
			packages: resolve('packages')
		}
	}
};

if (process.env.NODE_ENV === 'production') {
	config.kit.paths = { base: '' };
}

export default config;
