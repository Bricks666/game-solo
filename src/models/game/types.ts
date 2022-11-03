export type ValuesType = 'A' | number;
export type SortType = 1 | -1;

export interface GameConfig {
	readonly count: number;
	readonly sort: SortType;
	readonly values: ValuesType;
}

export interface ItemModel {
	readonly id: number;
	readonly value: number | string;
	readonly image: string;
}

export interface Slot {
	readonly id: number;
	readonly item: ItemModel | null;
}
