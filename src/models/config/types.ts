export type ValuesType = 'A' | number;
export type SortType = 1 | -1;

export interface GameConfig {
	readonly count: number;
	readonly sort: SortType;
	readonly valueType: ValuesType;
}
