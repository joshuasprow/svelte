<script lang="ts">
	import Input from './Input.svelte';
	import { active, search } from './stores';
	import type { Option } from './types';

	export let options: Option[];
	export let selected: Option['value'][];

	const normalize = (s: string) => s.replace(/\W|_/g, '').toLowerCase();

	const filter = (_search: string, _name: string) => {
		const s = normalize(_search);
		const n = normalize(_name);

		return n.includes(s);
	};

	$: filtered = options.filter((o) => filter($search, o.name));

	const handleItemClick = (value: number) => {
		const s = new Set(selected);

		if (s.has(value)) {
			s.delete(value);
		} else {
			s.add(value);
		}

		selected = Array.from(s);
	};
</script>

<div class="dropdown" class:is-active={$active}>
	<div class="dropdown-trigger">
		<Input />
	</div>
	<div class="dropdown-menu" id="dropdown-menu" role="menu">
		<div class="dropdown-content">
			{#each filtered as option}
				<div
					class:is-active={selected.includes(option.value)}
					class="dropdown-item"
					on:click={() => handleItemClick(option.value)}
					role="button"
				>
					{option.name}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.dropdown-item {
		text-align: inherit;
		white-space: nowrap;
		width: 100%;
	}

	.dropdown-item:hover {
		background-color: hsl(0, 0%, 96%);
		color: hsl(0, 0%, 4%);
	}

	.dropdown-item.is-active {
		background-color: hsl(229, 53%, 53%);
		color: #fff;
	}
</style>
