/* eslint-disable indent */
import { sample, Event } from 'effector';
import { getNumberBetween, getValue } from '@/utils';
import { startLevelGame, $gameConfig } from '../config';
import { ItemModel, Slot } from './types';
import {
	$items,
	$selectedItemId,
	$slots,
	generateItemsFx,
	generateSlotsFx,
	itemSelected,
	slotSelected,
} from './units';

generateItemsFx.use((params) => {
	const { count, valueType, sort } = params;
	const isAlphas = valueType === 'A';
	const start = isAlphas ? 'A'.charCodeAt(0) : 0;
	const end = isAlphas ? 'Z'.charCodeAt(0) : Number(valueType);
	const items = Array(count + 1)
		.fill('')
		.map((_, i) => {
			const value = getNumberBetween(start, end);

			return {
				id: i + 1,
				image: '/assets/images/candies/candy-1.webp',
				value: isAlphas ? String.fromCharCode(value) : value,
				slotId: null,
			};
		});
	const values = items.map(getValue);
	const startValue = sort === 1 ? Math.min(...values) : Math.max(...values);
	const startSlottedItem = items.find((item) => getValue(item) === startValue)!;
	return {
		startSlottedItem,
		items: items.filter((item) => item !== startSlottedItem),
	};
});

sample({
	clock: startLevelGame,
	source: $gameConfig,
	filter: Boolean,
	target: generateItemsFx,
});

sample({
	clock: generateItemsFx.doneData,
	fn: ({ items }) => items,
	target: $items,
});

generateSlotsFx.use((params) => {
	const { count, startSlottedItem } = params;
	const slots: Slot[] = new Array(count + 1).fill('').map((_, i) => {
		return {
			id: i + 1,
			item: null,
		};
	});
	return slots.map((slot) =>
		slot.id === 1 ? { ...slot, item: startSlottedItem } : slot
	);
});

sample({
	clock: generateItemsFx.doneData,
	source: $gameConfig,
	filter: (config) => Boolean(config),
	fn: (
		config,
		{ startSlottedItem }
	): {
		count: number;
		startSlottedItem: ItemModel;
	} => {
		return {
			count: config!.count,
			startSlottedItem,
		};
	},
	target: generateSlotsFx,
});

sample({
	clock: generateSlotsFx.doneData,
	target: $slots,
});

sample({
	clock: generateSlotsFx.done,
});

sample({
	clock: itemSelected,
	target: $selectedItemId,
});

const slotWillChange = sample({
	clock: slotSelected,
	source: [$slots, $items, $selectedItemId],
	fn: ([slots, items, selectedItemId], slotId) => ({
		slots,
		items,
		selectedItemId,
		slotId,
	}),
}) as Event<{
	slots: Slot[];
	items: ItemModel[];
	selectedItemId: number | null;
	slotId: number | null;
}>;

const dropItem = sample({
	clock: slotWillChange,
	filter: ({ slots, selectedItemId, slotId }) => {
		if (selectedItemId === null) {
			return false;
		}
		const slot = slots.find((slot) => slot.id === slotId);
		if (!slot) {
			return false;
		}
		return !slot.item;
	},
});

sample({
	clock: dropItem,
	fn: ({ slots, slotId, selectedItemId, items }) => {
		const item = items.find((item) => item.id === selectedItemId)!;
		return slots.map((slot) =>
			slot.id === slotId
				? {
						...slot,
						item: {
							...item,
							slotId: slot.id,
						},
				  }
				: slot
		);
	},
	target: $slots,
});

sample({
	clock: dropItem,
	fn: ({ items, selectedItemId }) => {
		return items.filter((item) => item.id !== selectedItemId);
	},
	target: $items,
});

sample({
	clock: dropItem,
	fn: () => null,
	target: $selectedItemId,
});
