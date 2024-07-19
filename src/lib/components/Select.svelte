<script>
	import updatePage from '$lib/scripts/updatePage';
	import nameToID from '$lib/scripts/nameToID';
	import itemData from '$lib/data/items.json';

	const { items } = itemData;
</script>

<div id="select" class="panel corners">
	<div class="heading">
		<h2>Item Select</h2>
		<p class="gray text">Choose an item to learn more about it</p>
	</div>
	<div class="content">
		<ul id="item-select">
			{#each items as item}
				<li class={`${item.rarity.toLowerCase()} item`} title={item.name}>
					<button type="button" on:click={() => updatePage(item.name)}>
						<img src={`/images/items/${nameToID(item.name)}.png`} alt={item.name} />
					</button>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	#select {
		height: fit-content;
		width: 362px;
	}

	#item-select {
		display: grid;
		gap: 6px;
		grid-auto-rows: 48px;
		grid-template-columns: repeat(6, 48px);
		max-height: 234px;
		overflow-y: auto;
		padding: 6px;
		scrollbar-width: none;
	}

	h2 {
		margin-bottom: 4px;
	}
</style>
