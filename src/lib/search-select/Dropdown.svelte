<script lang="ts">
	import Input from './Input.svelte';
	import { active, search } from './stores';
	import type { Option } from './types';

	export let options: Option[];

	const normalize = (s: string) => s.replace(/\W|_/g, '').toLowerCase();

	const filter = (_search: string, _name: string) => {
		const s = normalize(_search);
		const n = normalize(_name);

		return n.includes(s);
	};

	$: filtered = options.filter((o) => filter($search, o.name));
</script>

<div class="dropdown" class:is-active={$active}>
	<div class="dropdown-trigger">
		<Input />
	</div>
	<div class="dropdown-menu" id="dropdown-menu" role="menu">
		<div class="dropdown-content">
			{#each filtered as option}
				<span class="dropdown-item">{option.name}</span>
			{/each}
		</div>
	</div>
</div>
