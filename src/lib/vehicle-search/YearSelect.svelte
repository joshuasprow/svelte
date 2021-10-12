<script lang="ts">
	import Field from './Field.svelte';
	import Select from './Select.svelte';

	export let value: number;

	const name = 'year-select';

	const formatYear = (i: number) => {
		const y = new Date().getFullYear() + 1;
		return y - i;
	};

	const options = Array.from(Array(102)).map((_, i) => {
		const year = formatYear(i);
		return {
			name: year.toString(),
			value: year,
		};
	});
</script>

<Field label="Year" {name}>
	<Select {name} {options} on:change={(v) => (value = v.detail)} />
</Field>
