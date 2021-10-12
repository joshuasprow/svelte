<script lang="ts">
	import Dropdown from './Dropdown.svelte';
	import DropdownItem from './DropdownItem.svelte';
	import Input from './Input.svelte';
	import Wrapper from './Wrapper.svelte';

	export let options = [];

	let search = '';
	let selected = [];
	let visibility = 'hidden';

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

	function handleClick(itemId) {
		if (selected.includes(itemId)) {
			selected = selected.filter((s) => s !== itemId);
		} else {
			selected[selected.length] = itemId;
		}
	}
</script>

<Wrapper bind:visibility>
	<Input bind:value={search} bind:visibility />
	<Dropdown bind:visibility>
		{#each filtered as item}
			<DropdownItem
				selected={selected.includes(item.id)}
				{item}
				on:click={() => handleClick(item.id)}
			/>
		{/each}
	</Dropdown>
</Wrapper>
