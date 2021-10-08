<script lang="ts">
	import { fetchInventory, Vehicle } from '$lib/utils/fetch-inventory';
	import YearSelect from '$lib/vehicle-search/YearSelect.svelte';

	let locationId: undefined;
	let makeId: undefined;
	let modelIds = [];
	let year: undefined;

	let results: Vehicle[] = [];

	const handleSubmit = async () => {
		try {
			results = await fetchInventory({
				locationId,
				makeId,
				modelIds,
				year,
			});
		} catch (e) {
			console.error(e);
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<YearSelect bind:value={year} />
</form>
