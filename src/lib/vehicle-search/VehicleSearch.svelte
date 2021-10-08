<script lang="ts">
	import 'bulma/css/bulma.min.css';
	import { fetchInventory, Vehicle } from '$lib/utils/fetch-inventory';
	import YearSelect from '$lib/vehicle-search/YearSelect.svelte';
	import LocationSelect from './LocationSelect.svelte';
	import MakeSelect from './MakeSelect.svelte';

	let locationId: undefined;
	let makeId: undefined;
	let modelIds = [];
	let year: undefined;

	let results: Vehicle[] = [];

	$: console.log({ locationId, makeId, year });

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
			<YearSelect bind:value={year} />
		</form>
	</article>
</section>
