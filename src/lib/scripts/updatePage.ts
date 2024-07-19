import { setCookie } from './cookieHandling';
import nameToID from './nameToID';
import { writable } from 'svelte/store';

import { base } from '$app/paths';

// Create a writable store to hold the current post component
export const currentPost = writable(null);

const updatePage = async (name: string) => {
	const pageFavico = document.querySelector("link[rel='icon']");
	if (pageFavico) document.head.removeChild(pageFavico);

	const newFavico = document.createElement('link');
	newFavico.rel = 'icon';
	newFavico.href = `${base}/images/items/${nameToID(name)}.png`;
	document.head.appendChild(newFavico);

	const pageTitle = document.querySelector('title');
	pageTitle.innerText = `ROR2 E8 Guides: ${name}`;

	setCookie('lastViewed', name, 14);

	// Dynamically import the post component
	try {
		const postModule = await import(`$lib/posts/${nameToID(name)}.svelte`);
		currentPost.set(postModule.default);
	} catch (error) {
		console.error(`Failed to load post for ${name}:`, error);
	}
};

export default updatePage;
