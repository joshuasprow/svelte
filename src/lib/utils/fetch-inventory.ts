type Param = 'locationId' | 'makeId' | 'modelId' | 'year';

export type FetchInventoryParams = { [param in Param]?: number } & {
	modelIds?: number[];
};

interface Make {
	id: number;
	name: string;
}

interface Model extends Make {
	make_id: number;
}

export interface Vehicle {
	vin: string;
	make: Make;
	model: Model;
	modelYear: number;
}

const fetchInventoryChunk = async ({
	locationId,
	makeId,
	modelId,
	year,
}: FetchInventoryParams): Promise<Vehicle[]> => {
	const params = new URLSearchParams();

	if (locationId) params.set('locationId', locationId.toString());
	if (makeId) params.set('makeId', makeId.toString());
	if (modelId) params.set('modelId', modelId.toString());
	if (year) params.set('year', year.toString());

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
