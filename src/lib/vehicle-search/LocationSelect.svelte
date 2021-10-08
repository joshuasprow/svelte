<script lang="ts">
	export let value = undefined;

	const options = [
		{ id: 0, name: 'All' },
		{ id: 2, name: 'Austin' },
		{ id: 3, name: 'Lubbock' },
		{ id: 4, name: 'Budget' },
		{ id: 5, name: 'San Antonio' },
		{ id: 8, name: 'Late Model' },
	];
</script>

<div class="field">
	<label class="label" for="location-select">Location*</label>
	<div class="control">
		<div class="select">
			<select class="location-select" bind:value name="location-select">
				<option label="Select Location" default />
				{#each options as option}
					<option label={option.name} value={option.id} />
				{/each}
			</select>
		</div>
	</div>
</div>

<style>
	.location-select {
		width: 150px;
	}
</style>
