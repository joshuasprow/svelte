<script lang="ts">
	import { onMount } from 'svelte';

	export let value = undefined;

	interface Make {
		id: number;
		name: string;
	}

	let makes: Make[] = [];

	onMount(async () => {
		try {
			const res = await fetch(`https://api.wrenchapart.com/makes`);
			makes = await res.json();
		} catch (e) {
			console.error(e);
		}
	});
</script>

<div class="field">
	<label class="label" for="make-select">Make*</label>
	<div class="control">
		<div class="select">
			<select class="make-select" bind:value name="make-select">
				<option label="Select Make" default />
				{#each makes as make}
					<option label={make.name} value={make.id} />
				{/each}
			</select>
		</div>
	</div>
</div>

<style>
	.make-select {
		width: 150px;
	}
</style>
