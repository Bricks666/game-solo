import { sample, Event } from 'effector';
import { getNumberBetween, getValue } from '@/utils';
import { GameConfig, ItemModel, Slot } from './types';
import {
	$gameConfig,
	$items,
	$selectedItemId,
	$slots,
	createItemsFx,
	createSlotsFx,
	itemSelected,
	setGameConfig,
	slotSelected,
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
		.map((_, i) => {
			const value = getNumberBetween(start, end);

			return {
				id: i + 1,
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

sample({
	clock: createItemsFx.doneData,
	target: $items,
});

createSlotsFx.use((params) => {
	const { count, minItem } = params;
	const slots: Slot[] = new Array(count + 1).fill('').map((_, i) => {
		return {
			id: i + 1,
			item: null,
		};
	});
	return slots.map((slot) =>
		slot.id === 0 ? { ...slot, item: minItem } : slot
	);
});

sample({
	clock: createItemsFx.doneData,
	source: [$gameConfig, $items],
	filter: ([config]) => Boolean(config),
	fn: ([config, items]: [GameConfig, ItemModel[]]): {
		count: number;
		minItem: ItemModel;
	} => {
		const values = items.map(getValue);
		const minValue = Math.min(...values);
		const minItem = items.find((item) => getValue(item) === minValue)!;
		return {
			count: config!.count,
			minItem,
		};
	},
	target: createSlotsFx,
});

sample({
	clock: createSlotsFx.doneData,
	target: $slots,
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
		return slots.map((slot) => (slot.id === slotId ? { ...slot, item } : slot));
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

const swapItem = sample({
	clock: slotWillChange,
	filter: ({ slots, selectedItemId, slotId }) => {
		if (selectedItemId === null) {
			return false;
		}
		const slot = slots.find((slot) => slot.id === slotId);
		if (!slot) {
			return false;
		}
		return !!slot.item;
	},
});

sample({
	clock: swapItem,
	fn: ({ slots, slotId, selectedItemId, items }) => {
		const item = items.find((item) => item.id === selectedItemId)!;
		return slots.map((slot) => (slot.id === slotId ? { ...slot, item } : slot));
	},
	target: $slots,
});

sample({
	clock: swapItem,
	fn: ({ items, selectedItemId }) => {
		return items.filter((item) => item.id !== selectedItemId);
	},
	target: $items,
});

sample({
	clock: swapItem,
	fn: () => null,
	target: $selectedItemId,
});
