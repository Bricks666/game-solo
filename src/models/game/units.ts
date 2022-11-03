import * as React from 'react';
import { combine, createDomain } from 'effector';
import { arrayIsEqual, extractId, getValue } from '@/utils';
import { ItemModel, Slot, GameConfig } from './types';

export const GameDomain = createDomain('GameDomain');

export const startLevelGame = GameDomain.event();
export const $gameConfig = GameDomain.store<GameConfig | null>(null);
export const $hasGameConfig = $gameConfig.map(Boolean);
export const setGameConfig = GameDomain.event<GameConfig>();

export const $selectedItemId = GameDomain.store<number | null>(null);
export const $items = GameDomain.store<ItemModel[]>([]);

export const $field = combine(
	$items,
	$selectedItemId,
	(items, selectedItemId) => {
		return items.map((item) => ({
			...item,
			selected: item.id === selectedItemId,
		}));
	}
);
export const $slots = GameDomain.store<Slot[]>([]);

export const $inventory = combine(
	$slots,
	$selectedItemId,
	(slots, selectedItemId) => {
		return slots.map((slot) => ({
			...slot,
			item: slot.item
				? {
						...slot.item,
						selected: slot.item.id === selectedItemId,
				  }
				: null,
		}));
	}
);

export const setItemsAndSlots = GameDomain.event<{
	items: ItemModel[];
	slots: Slot[];
}>();

export const createSlotsFx = GameDomain.effect<
	{
		minItem: ItemModel;
		count: number;
	},
	Slot[]
>();

export const createItemsFx = GameDomain.effect<
	GameConfig,
	ItemModel[],
	Error
>();

export const $isWin = combine($gameConfig, $slots, (config, slots) => {
	if (!config) {
		return false;
	}
	const { sort } = config;
	const values = slots.map((slot) => (slot.item ? getValue(slot.item) : null));
	if (values.includes(null)) {
		return false;
	}
	const sortedValues = [...values].sort((a, b) => (a! - b!) * sort);
	return arrayIsEqual(values, sortedValues);
});

export const onItemSelect = GameDomain.event<
	| React.MouseEvent<HTMLElement>
	| React.TouchEvent<HTMLElement>
	| React.DragEvent<HTMLElement>
>();

export const itemSelected = onItemSelect.map(extractId);

export const onSlotSelect = GameDomain.event<React.MouseEvent<HTMLElement>>();
export const slotSelected = onSlotSelect.map(extractId);
