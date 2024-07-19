<script>
	import validateInput from '$lib/scripts/validateInput';
	import selectInput from '$lib/scripts/selectInput';
	import calculateValues from '$lib/scripts/calculateValue';
	import updatePage from '$lib/scripts/updatePage';

	const procChance = 0.1;
</script>

<div class="heading">
	<div class="corners">
		<img src="/images/items/tri-tip-dagger.png" alt="Tri-Tip Dagger" />
	</div>
	<div class="title">
		<h2>Tri-Tip Dagger</h2>
		<p class="gray text">Common Item</p>
	</div>
</div>
<div class="content">
	<div class="section">
		<h3>Description:</h3>
		<p>
			Gain a
			<span class="yellow text">10%</span> <span class="blue-gray text">(+10% per stack)</span>
			chance to <span class="yellow text">bleed</span><span class="inline img"
				>&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			>
			the target for <span class="yellow text">240%</span> base damage.
			<span class="pink text">Corrupted by Needletick</span><span class="inline img"
				>&nbsp;<img src="/images/items/needletick.png" alt="Needletick" /></span
			>.
		</p>
	</div>
	<div class="section">
		<h3>Strategy:</h3>
		<p class="light-gray text">
			Survivors with high fire rate and high proc coefficients generally make the best use of
			Tri-Tip Daggers<span class="inline img"
				>&nbsp;<img src="/images/items/tri-tip-dagger.png" alt="Tri-Tip Dagger" /></span
			>. The best examples of this are Commando<span class="inline img"
				>&nbsp;<img src="/images/survivors/commando.png" alt="Commando" /></span
			>
			and MUL-T<span class="inline img"
				>&nbsp;<img src="/images/survivors/mul-t.png" alt="MUL-T" /></span
			>.
		</p>
		<p class="light-gray text">
			Another great source of <span class="yellow text">bleed</span><span class="inline img"
				>&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			>
			stacking comes from survivors with multi-hit attacks like Captain's<span class="inline img"
				>&nbsp;<img src="/images/survivors/captain.png" alt="Captain" /></span
			>
			Vulcan Shotgun<span class="inline img"
				>&nbsp;<img src="/images/survivors/skills/vulcan-shotgun.png" alt="Vulcan Shotgun" /></span
			>
			or either of Engineer's<span class="inline img"
				>&nbsp;<img src="/images/survivors/engineer.png" alt="Engineer" /></span
			>
			Turret<span class="inline img"
				>&nbsp;<img
					src="/images/survivors/skills/tr12-gauss-auto-turret.png"
					alt="TR12 Gauss Auto-Turret"
				/></span
			>/<span class="inline img"
				>&nbsp;<img
					src="/images/survivors/skills/tr58-carbonizer-turret.png"
					alt="TR58 Carbonizer Turret"
				/></span
			> varieties.
		</p>
		<p class="light-gray text">
			Survivors without high fire rate can use The Crowdfunder<span class="inline img"
				>&nbsp;<img src="/images/items/the-crowdfunder.png" alt="The Crowdfunder" /></span
			>
			as an alternative method of proccing
			<span class="yellow text">bleed</span><span class="inline img"
				>&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			> stacks.
		</p>
	</div>
	<div class="section">
		<h3>Synergy:</h3>
		<ul class="content synergies">
			<li class="common item and" title="Tri-Tip Dagger">
				<button type="button" on:click={() => updatePage('Tri-Tip Dagger')}>
					<img src="/images/items/tri-tip-dagger.png" alt="Tri-Tip Dagger" />
				</button>
			</li>
			<li class="common item or" title="Delicate Watch">
				<button type="button" on:click={() => updatePage('Delicate Watch')}>
					<img src="/images/items/delicate-watch.png" alt="Delicate Watch" />
				</button>
			</li>
			<li class="common item" title="Armor Piercing Rounds">
				<button type="button" on:click={() => updatePage('Armor Piercing Rounds')}>
					<img src="/images/items/armor-piercing-rounds.png" alt="Armor Piercing Rounds" />
				</button>
			</li>
		</ul>
		<p class="light-gray text">
			<span class="yellow text">Bleed</span><span class="inline img"
				>&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			>
			damage is dependent on the survivor's base damage, Delicate Watch<span class="inline img"
				>&nbsp;<img src="/images/items/delicate-watch.png" alt="Delicate Watch" /></span
			>
			increases your base damage and, by extension, your <span class="yellow text">bleed</span><span
				class="inline img">&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			> damage.
		</p>
		<p class="light-gray text">
			Armor Piercing Rounds<span class="inline img"
				>&nbsp;<img
					src="/images/items/armor-piercing-rounds.png"
					alt="Armor Piercing Rounds"
				/></span
			>
			can be used to inflict more <span class="yellow text">bleed</span><span class="inline img"
				>&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			> damage on bosses.
		</p>
	</div>
	<div class="section">
		<h3>Notes:</h3>
		<p class="light-gray text">
			<span class="yellow text">Bleed</span><span class="inline img"
				>&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			>
			is applied for <span class="blue text">3s</span>, multiplied by the proc coefficient of the
			skill or item that procced it. In Commando's<span class="inline img"
				>&nbsp;<img src="/images/survivors/commando.png" alt="Commando" /></span
			>
			case, Double Tap<span class="inline img"
				>&nbsp;<img src="/images/survivors/skills/double-tap.png" alt="Double Tap" /></span
			>
			successfully proccing a Tri-Tip Dagger<span class="inline img"
				>&nbsp;<img src="/images/items/tri-tip-dagger.png" alt="Tri-Tip Dagger" /></span
			>
			would inflict the target with <span class="yellow text">bleed</span><span class="inline img"
				>&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			>
			for <span class="blue text">3s</span> * <span class="yellow text">1.0</span> =
			<span class="blue text">3s</span>.
		</p>
		<p class="light-gray text">
			After proccing <span class="yellow text">bleed</span><span class="inline img"
				>&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			>
			on the target, you have the rest of that <span class="yellow text">bleed</span><span
				class="inline img">&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			>
			proc's duration to stack another instance of <span class="yellow text">bleed</span><span
				class="inline img">&nbsp;<img src="/images/effects/bleed.png" alt="Bleed" /></span
			> on the target before the stacks are removed.
		</p>
		<h3>Real Bleed Chance:</h3>
		<div id="calc" class="linear">
			<div id="input" title="# of Tri-Tip Daggers">
				<img src="/images/items/tri-tip-dagger.png" alt="Tri-Tip Dagger" />
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
			<div id="modifier" title="# of 57 Leaf Clovers">
				<img src="/images/items/57-leaf-clover.png" alt="57 Leaf Clover" />
				<span class="gray text">x</span>
				<input
					type="text"
					name="57-leaf-clover"
					id="calc-modifier"
					value="0"
					placeholder="0"
					class="int"
					on:click={selectInput}
					on:input={() => {
						validateInput(event);
						calculateValues(event, procChance);
					}}
				/>
			</div>
			<div id="output" title="Real % chance to bleed">
				<input
					type="text"
					name="tougher-times"
					id="calc-output"
					class="green text output"
					value="10%"
					placeholder="10%"
					readonly
				/>
			</div>
		</div>
	</div>
</div>
