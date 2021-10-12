<script lang="ts">
	import Input from './Input.svelte';
	import { active } from './stores';

	export let options: { name: string; value: number }[] = [];

	let search = '';
	let selected: number[] = [];

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
</script>

<div class="dropdown" class:is-active={$active}>
	<div class="dropdown-trigger">
		<Input bind:value={search} />
	</div>
	<div class="dropdown-menu" id="dropdown-menu" role="menu">
		<div class="dropdown-content">
			<!-- <a href="#" class="dropdown-item"> Dropdown item </a>
			<a class="dropdown-item"> Other dropdown item </a>
			<a href="#" class="dropdown-item is-active">
				Active dropdown item
			</a>
			<a href="#" class="dropdown-item"> Other dropdown item </a>
			<hr class="dropdown-divider" />
			<a href="#" class="dropdown-item"> With a divider </a> -->
		</div>
	</div>
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
