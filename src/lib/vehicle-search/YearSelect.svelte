<script lang="ts">
	export let value = undefined;

	const getYear = (i: number) => {
		const y = new Date().getFullYear() + 1;

		return `${y - i}`;
	};
</script>

<div class="field">
	<label class="label" for="year-select">Year</label>
	<div class="control">
		<div class="select">
			<select class="year-select" bind:value name="year-select">
				<option label="select year" default />
				{#each Array(102) as _, i}
					<option label={getYear(i)} value={getYear(i)} />
				{/each}
			</select>
		</div>
	</div>
</div>

<style>
	.year-select {
		width: 150px;
	}
</style>
