<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let options: { name: string; value: number }[] = [];
	export let name: string;

	const dispatch = createEventDispatcher<{ change: number }>();

	interface ChangeEvent extends Event {
		currentTarget: EventTarget & HTMLSelectElement;
	}

	const handleChange = ({ currentTarget }: ChangeEvent) =>
		dispatch('change', parseInt(currentTarget.value, 10));
</script>

<div class="select">
	<select on:change={handleChange} {name}>
		{#each options as option}
			<option label={option.name} value={option.value} />
		{/each}
	</select>
</div>

<style>
	select {
		width: 150px;
	}
</style>
