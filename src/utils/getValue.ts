import { ItemModel } from '@/models/game';

export const getValue = (item: ItemModel): number => {
	const { value } = item;
	if (typeof value === 'string') {
		return value.charCodeAt(0);
	}

	return value;
};
