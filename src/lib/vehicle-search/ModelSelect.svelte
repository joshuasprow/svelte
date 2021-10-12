<script lang="ts">
	import SearchSelect from '$lib/search-select/SearchSelect.svelte';
	import type { Model } from '$lib/utils/fetch-inventory';
	import Field from './Field.svelte';

	export let makeId: number | undefined;
	export let modelIds: number[] = [];

	let loading = false;
	let models: Model[] = [];

	const fetchModels = async () => {
		try {
			loading = true;

			const params = makeId ? `?makeId=${makeId}` : '';
			const res = await fetch(
				`https://api.wrenchapart.com/models${params}`
			);

			models = await res.json();
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	};

	$: options = models
		.filter((m) => m.makeId === makeId)
		.map((m) => ({ name: m.name, value: m.id }));

	$: if (makeId) fetchModels();
</script>

<Field label="Models" name="model-select">
	<SearchSelect {options} />
</Field>
