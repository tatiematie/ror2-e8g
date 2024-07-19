<script>
	import { currentPost } from '$lib/scripts/updatePage';
	import { onMount } from 'svelte';

	let PostComponent = null;

	// Subscribe to changes in currentPost store
	const unsubscribe = currentPost.subscribe((value) => {
		PostComponent = value;
	});

	onMount(() => {
		return () => unsubscribe();
	});
</script>

<div id="display" class="panel corners">
	{#if PostComponent}
		<svelte:component this={PostComponent} />
	{/if}
</div>

<style>
	#display {
		flex-grow: 1;
	}
</style>
