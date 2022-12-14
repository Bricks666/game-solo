export interface StartGameParams {
	readonly count: number;
	readonly sort: 1 | -1;
	readonly values: number | string;
}

export interface ItemModel {
	readonly number: number;
	readonly image: string;
}
