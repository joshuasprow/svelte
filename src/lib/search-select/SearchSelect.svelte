<script lang="ts">
	import Dropdown from './Dropdown.svelte';
	import DropdownItem from './DropdownItem.svelte';
	import Input from './Input.svelte';
	import type { Visibility } from './types';
	import Wrapper from './Wrapper.svelte';

	export let options: { name: string; value: number }[] = [];

	let search = '';
	let selected: number[] = [];
	let visibility: Visibility = 'hidden';

	const match = (name: string) => {
		const parsedSearch = search.replace(/\W|_/g, '').toLowerCase();
		const parsedSelectable = name.replace(/\W|_/g, '').toLowerCase();

		if (parsedSelectable.includes(parsedSearch)) {
			return true;
		} else {
			return false;
		}
	};

	$: filtered = options.filter((o) => match(o.name));

	function handleClick(id: number) {
		if (selected.includes(id)) {
			selected = selected.filter((s) => s !== id);
		} else {
			selected[selected.length] = id;
		}
	}
</script>

<Wrapper bind:visibility>
	<Input bind:value={search} bind:visibility />
	<Dropdown bind:visibility>
		{#each filtered as item}
			<DropdownItem
				selected={selected.includes(item.value)}
				{item}
				on:click={() => handleClick(item.value)}
			/>
		{/each}
	</Dropdown>
</Wrapper>
