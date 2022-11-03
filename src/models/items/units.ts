import * as React from 'react';
import { combine, createDomain } from 'effector';
import { arrayIsEqual, extractId, getValue } from '@/utils';
import {
	ItemModel,
	Slot,
	GenerateSlotsParams,
	GenerateItemsResponse,
	ItemToSlotParams,
} from './types';
import { $gameConfig, GameConfig } from '../config';

export const ItemsDomain = createDomain();

export const $selectedItemId = ItemsDomain.store<number | null>(null);
export const $items = ItemsDomain.store<ItemModel[]>([]);

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
export const $slots = ItemsDomain.store<Slot[]>([]);
export const itemToSlot = ItemsDomain.event<ItemToSlotParams>();

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

export const setItemsAndSlots = ItemsDomain.event<{
	items: ItemModel[];
	slots: Slot[];
}>();

export const generateSlotsFx = ItemsDomain.effect<
	GenerateSlotsParams,
	Slot[]
>();

export const generateItemsFx = ItemsDomain.effect<
	GameConfig,
	GenerateItemsResponse,
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

export const onItemSelect = ItemsDomain.event<
	| React.MouseEvent<HTMLElement>
	| React.TouchEvent<HTMLElement>
	| React.DragEvent<HTMLElement>
>();

export const itemSelected = onItemSelect.map(extractId);

export const onSlotSelect = ItemsDomain.event<React.MouseEvent<HTMLElement>>();
export const slotSelected = onSlotSelect.map(extractId);
