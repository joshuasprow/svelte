<script lang="ts">
	import Field from './Field.svelte';

	export let value = undefined;

	const getYear = (i: number) => {
		const y = new Date().getFullYear() + 1;
		return `${y - i}`;
	};
</script>

<Field label="Year" name="year-select">
	<div class="select">
		<select class="year-select" bind:value name="year-select">
			<option label="Select Year" default />
			{#each Array(102) as _, i}
				<option label={getYear(i)} value={getYear(i)} />
			{/each}
		</select>
	</div>
</Field>

<style>
	.year-select {
		width: 150px;
	}
</style>
