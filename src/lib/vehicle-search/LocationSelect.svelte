<script lang="ts">
	import Field from './Field.svelte';
	import Select from './Select.svelte';

	const name = 'location-select';

	const options = [
		{ name: 'All', value: 0 },
		{ name: 'Austin', value: 2 },
		{ name: 'Lubbock', value: 3 },
		{ name: 'Budget', value: 4 },
		{ name: 'San Antonio', value: 5 },
		{ name: 'Late Model', value: 8 },
	];

	export let value = options[0].value;
</script>

<Field label="Location*" name="location-select">
	<Select {name} {options} on:change={(v) => (value = v.detail)} />
</Field>
