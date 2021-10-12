<script lang="ts">
	import Field from './Field.svelte';

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

<Field label="Location*" name="location-select">
	<div class="select">
		<select class="location-select" bind:value name="location-select">
			<option label="Select Location" default />
			{#each options as option}
				<option label={option.name} value={option.id} />
			{/each}
		</select>
	</div>
</Field>

<style>
	.location-select {
		width: 150px;
	}
</style>
