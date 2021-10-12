<script lang="ts">
	import 'bulma/css/bulma.min.css';
	import { fetchInventory, Vehicle } from '$lib/utils/fetch-inventory';
	import YearSelect from '$lib/vehicle-search/YearSelect.svelte';
	import LocationSelect from './LocationSelect.svelte';
	import MakeSelect from './MakeSelect.svelte';
	import ModelSelect from './ModelSelect.svelte';

	let locationId: number | undefined;
	let makeId: number | undefined;
	let modelIds: number[] = [];
	let year: number | undefined;

	let results: Vehicle[] = [];

	$: console.log({ locationId, makeId, year });

	$: console.table(
		results.map(({ vin, make, model, modelYear }) => ({
			vin,
			make: make.name,
			model: model.name,
			year: modelYear,
		}))
	);

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

<section class="section">
	<article class="container">
		<form class="form" on:submit|preventDefault={handleSubmit}>
			<LocationSelect bind:value={locationId} />
			<MakeSelect bind:value={makeId} />
			<ModelSelect {makeId} {modelIds} />
			<YearSelect bind:value={year} />
			<button
				class="button is-info"
				disabled={!makeId || !locationId}
				type="submit">Search</button
			>
		</form>
	</article>
</section>
