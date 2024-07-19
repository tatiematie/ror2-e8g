import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
        }),
        prerender: {
            default: true,
        },
        trailingSlash: 'always',
        paths: {
            base: '/ror2-e8g'
        }
    }
};

export default config;
