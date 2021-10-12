<script lang="ts">
	import { onMount } from 'svelte';
	import Field from './Field.svelte';
	import Select from './Select.svelte';

	export let value: number;

	interface Make {
		id: number;
		name: string;
	}

	const name = 'make-select';

	let options: { name: string; value: number }[] = [];

	onMount(async () => {
		try {
			const res = await fetch(`https://api.wrenchapart.com/makes`);
			const makes: Make[] = await res.json();

			options = makes.map((m) => ({ name: m.name, value: m.id }));
		} catch (e) {
			console.error(e);
		}
	});
</script>

<Field label="Make*" {name}>
	<Select {name} {options} on:change={(v) => (value = v.detail)} />
</Field>
