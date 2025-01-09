import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { waveCSS } from './packages/vite/src/vite';

const config: UserConfig = {
	plugins: [waveCSS(), sveltekit()],
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			strict: false
		}
	}
};

export default config;
