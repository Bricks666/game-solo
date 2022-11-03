import { sample } from 'effector';
import { getNumberBetween, getValue } from '@/utils';
import { GameConfig, Slot } from './types';
import {
	$gameConfig,
	$items,
	$slots,
	createItemsFx,
	createSlotsFx,
	setGameConfig,
	startLevelGame,
} from './units';

sample({
	clock: setGameConfig,
	fn: (config): GameConfig => {
		return {
			count: Number(config.count),
			sort: Number(config.sort) as 1 | -1,
			values: config.values,
		};
	},
	target: $gameConfig,
});

createItemsFx.use((params) => {
	const { count, values } = params;
	const isAlphas = values === 'A';
	const start = isAlphas ? 'A'.charCodeAt(0) : 0;
	const end = isAlphas ? 'Z'.charCodeAt(0) : Number(values);
	return Array(count + 1)
		.fill('')
		.map(() => {
			const value = getNumberBetween(start, end);

			return {
				image: '/assets/images/candies/candy-1.webp',
				value: isAlphas ? String.fromCharCode(value) : value,
			};
		});
});

sample({
	clock: startLevelGame,
	source: $gameConfig,
	filter: Boolean,
	target: createItemsFx,
});

const setItemsAndSlots = sample({
	clock: createItemsFx.doneData,
	fn: (items) => {
		const values = items.map(getValue);
		const minValue = Math.min(...values);
		console.log(minValue);
		const minItem = items.find((item) => getValue(item) === minValue)!;
		return { items: items.filter((item) => item !== minItem), minItem };
	},
});

sample({
	clock: setItemsAndSlots,
	fn: ({ items }) => items,
	target: $items,
});

createSlotsFx.use((params) => {
	const { count, minItem } = params;

	const slots: Slot[] = new Array(count + 1).fill({ item: null });
	slots[0] = { item: minItem };
	return slots;
});

sample({
	clock: setItemsAndSlots,
	source: $gameConfig,
	filter: Boolean,
	fn: (config, { minItem }) => {
		return {
			count: config.count,
			minItem,
		};
	},
	target: createSlotsFx,
});

sample({
	clock: createSlotsFx.doneData,
	target: $slots,
});
