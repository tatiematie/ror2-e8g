<script>
    export let itemName = "Volcanic Egg";
    export let imgSrc = "/images/items/volcanic-egg.png";
    export let altText = "Volcanic Egg";
    export let rarity = "Equipment Item";
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
