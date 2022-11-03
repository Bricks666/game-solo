import { combine, createDomain } from 'effector';
import { arrayIsEqual, getValue } from '@/utils';
import { ItemModel, Slot, GameConfig } from './types';

export const GameDomain = createDomain('GameDomain');

export const startLevelGame = GameDomain.event();

export const $gameConfig = GameDomain.store<GameConfig | null>(null);

export const $hasGameConfig = $gameConfig.map(Boolean);

export const $themeCode = GameDomain.store<number>(0);
export const generateTheme = GameDomain.effect<never, number, Error>();

$gameConfig.watch(console.log);

export const setGameConfig = GameDomain.event<GameConfig>();

export const $items = GameDomain.store<ItemModel[]>([]);

export const $slots = GameDomain.store<Slot[]>([]);

export const createSlotsFx = GameDomain.effect<
	{
		minItem: ItemModel;
		count: number;
	},
	Slot[]
>();

export const $selectedItemIndex = GameDomain.store<number | null>(null);

export const $field = combine($items, $selectedItemIndex);

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
