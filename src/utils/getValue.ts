import { ItemModel } from '@/models/items';

export const getValue = (item: ItemModel): number => {
	const { value } = item;
	if (typeof value === 'string') {
		return value.charCodeAt(0);
	}

	return value;
};
