<script>
    export let itemName = "Monster Tooth";
    export let imgSrc = "/images/items/monster-tooth.png";
    export let altText = "Monster Tooth";
    export let rarity = "Common Item";
</script>

<div class="heading">
    <div class="corners">
        <img src="{imgSrc}" alt="{altText}">
    </div>
    <div class="title">
        <h2>{itemName}</h2>
        <p class="gray text">{rarity}</p>
    </div>
</div>
<div class="content">
    <div class="section">
        <h3>Description:</h3>
    </div>
    <div class="section">
        <h3>Strategy:</h3>
    </div>
    <div class="section">
        <h3>Synergy:</h3>
        <ul class="content synergies"></ul>
    </div>
    <div class="section">
        <h3>Notes:</h3>
    </div>
</div>
