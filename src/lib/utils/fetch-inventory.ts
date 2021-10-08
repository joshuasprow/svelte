type Param = 'locationId' | 'makeId' | 'modelId' | 'year';

export type FetchInventoryParams = { [param in Param]?: string } & {
	modelIds?: string[];
};

export interface Vehicle {
	vin: string;
}

const fetchInventoryChunk = async ({
	locationId,
	makeId,
	modelId,
	year,
}: FetchInventoryParams): Promise<Vehicle[]> => {
	const params = new URLSearchParams();

	if (locationId) params.set('locationId', locationId);
	if (makeId) params.set('makeId', makeId);
	if (modelId) params.set('modelId', modelId);
	if (year) params.set('year', year);

	const url = `https://api.wrenchapart.com/vehicles?${params.toString()}`;

	const res = await fetch(url);

	return res.json();
};

export const fetchInventory = async ({
	locationId,
	makeId,
	modelIds,
	year,
}: FetchInventoryParams): Promise<Vehicle[]> => {
	if (!modelIds.length) {
		return fetchInventoryChunk({ locationId, makeId, year });
	}

	const inventories = await Promise.all(
		modelIds.map((modelId) =>
			fetchInventoryChunk({ locationId, makeId, modelId, year })
		)
	);

	return inventories.reduce((all, curr) => [...all, ...curr]);
};
