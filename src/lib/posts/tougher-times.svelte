<script>
	import selectInput from '$lib/scripts/selectInput';
	import validateInput from '$lib/scripts/validateInput';
	import calculateValues from '$lib/scripts/calculateValue';

	import { base } from '$app/paths';

	const procChance = 0.15;
</script>

<div class="heading">
	<div class="corners">
		<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" />
	</div>
	<div class="title">
		<h2>Tougher Times</h2>
		<p class="gray text">Common Item</p>
	</div>
</div>
<div class="content">
	<div class="section">
		<h3>Description:</h3>
		<p>
			Gain
			<span class="green text">13%</span> <span class="blue-gray text">(+15% per stack)</span>
			chance to <span class="green text">block</span> incoming damage.
			<span class="yellow text">Unaffected by luck</span>.
			<span class="pink text">Corrupted by Safer Spaces</span><span class="inline img"
				>&nbsp;<img src="{base}/images/items/safer-spaces.png" alt="Safer Spaces" /></span
			>.
		</p>
	</div>
	<div class="section">
		<h3>Strategy:</h3>
		<p class="light-gray text">
			Tougher Times<span class="inline img"
				>&nbsp;<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" /></span
			>
			stacks hyperbolically, meaning that each Tougher Times<span class="inline img"
				>&nbsp;<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" /></span
			> gives you less stacking bonus for each stack you have.
		</p>
		<p class="light-gray text">
			It's best to only keep 2 or 3 Tougher Times<span class="inline img"
				>&nbsp;<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" /></span
			>
			if possible unless you plan on stacking a lot of them. Other defensive options like Oddly-shaped
			Opal<span class="inline img"
				>&nbsp;<img src="{base}/images/items/oddly-shaped-opal.png" alt="Oddly-shaped Opal" /></span
			>
			and Safer Spaces<span class="inline img"
				>&nbsp;<img src="{base}/images/items/safer-spaces.png" alt="Safer Spaces" /></span
			> are more efficient uses of your resources.
		</p>
		<p class="light-gray text">
			If you have a Tougher Times<span class="inline img"
				>&nbsp;<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" /></span
			>
			and a Pluripotent Larva<span class="inline img"
				>&nbsp;<img src="{base}/images/items/pluripotent-larva.png" alt="Pluripotent Larva" /></span
			>
			it may be worth considering using the Pluripotent Larva<span class="inline img"
				>&nbsp;<img src="{base}/images/items/pluripotent-larva.png" alt="Pluripotent Larva" /></span
			>
			to gain Safer Spaces<span class="inline img"
				>&nbsp;<img src="{base}/images/items/safer-spaces.png" alt="Safer Spaces" /></span
			> if you have other items that you can corrupt as well.
		</p>
	</div>
	<div class="section">
		<h3>Notes:</h3>
		<p class="light-gray text">
			Tougher Times<span class="inline img"
				>&nbsp;<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" /></span
			>
			can block any incoming source of damage except for Void Fog<span class="inline img"
				>&nbsp;<img src="{base}/images/effects/void-fog.png" alt="Void Fog" /></span
			>
			and Strong Void Fog<span class="inline img"
				>&nbsp;<img src="{base}/images/effects/void-fog-strong.png" alt="Strong Void Fog" /></span
			>, this includes self inflicted damage, fall damage, and tick damage.
		</p>
		<p class="light-gray text">
			Void Reaver<span class="inline img"
				>&nbsp;<img src="{base}/images/enemies/void-reaver.png" alt="Void Reaver" /></span
			>
			implosions cannot be blocked by Tougher Times<span class="inline img"
				>&nbsp;<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" /></span
			>.
		</p>
		<p class="light-gray text">
			Tougher Times<span class="inline img"
				>&nbsp;<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" /></span
			>
			provides a base chance of <span class="green text">15%</span> to block damage, but that
			<span class="green text">15%</span>
			is run through this calculation <span class="blue text">f(x) = (1 - (1/.15x+1))</span> which
			results in one stack of Tougher Times<span class="inline img"
				>&nbsp;<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" /></span
			>
			actually providing a <span class="green text">13%</span> chance to block damage.
		</p>
		<h3>Real Block Chance:</h3>
		<div id="calc" class="hyperbolic">
			<div id="input" title="# of Tougher Times">
				<img src="{base}/images/items/tougher-times.png" alt="Tougher Times" />
				<span class="gray text">x</span>
				<input
					type="text"
					name="tougher-times"
					id="calc-input"
					class="int"
					value="1"
					placeholder="0"
					on:click={selectInput}
					on:input={() => {
						validateInput(event);
						calculateValues(event, procChance);
					}}
				/>
			</div>
			<div id="output" title="Real % chance to block">
				<input
					type="text"
					name="tougher-times"
					id="calc-output"
					class="green text"
					value="13%"
					placeholder="13%"
					readonly
				/>
			</div>
		</div>
	</div>
</div>
