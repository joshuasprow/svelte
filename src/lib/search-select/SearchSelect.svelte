<script lang="ts">
	import { outside } from '$lib/utils/outside';
	import Dropdown from './Dropdown.svelte';
	import { active } from './stores';
	import type { Option } from './types';

	export let options: Option[] = [];

	const handleClickOutside = () => active.set(false);
</script>

<div use:outside on:close={handleClickOutside}>
	<Dropdown {options} />
</div>
<!-- 
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
</Wrapper> -->
