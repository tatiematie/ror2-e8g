<script>
	import { onMount } from 'svelte';

	import Display from '$lib/components/Display.svelte';
	import Select from '$lib/components/Select.svelte';

	import { getCookie } from '$lib/scripts/cookieHandling';
	import updatePage from '$lib/scripts/updatePage';
	import nameToID from '$lib/scripts/nameToID';

	import itemData from '$lib/data/items.json';

	import '../app.css';

	let lastViewed = '';
	onMount(() => {
		lastViewed = getCookie('lastViewed');
		if (!getCookie('lastViewed')) lastViewed = itemData.items[0].name;

		updatePage(lastViewed);
	});
</script>

<svelte:head>
	<title>{`ROR2 E8 Guides - ${lastViewed}`}</title>
	<link rel="icon" href={`/images/items/${nameToID(lastViewed)}.png`} />
</svelte:head>

<main id="app">
	<Display />
	<Select />
</main>

<style>
	#app {
		display: flex;
		flex-direction: row;
		gap: 12px;
		margin: 0 auto;
		max-height: 100%;
		max-width: 1080px;
	}
</style>
