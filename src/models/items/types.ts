export interface ItemModel {
	readonly id: number;
	readonly value: number | string;
	readonly image: string;
	readonly slotId: number | null;
}

export interface Slot {
	readonly id: number;
	readonly item: ItemModel | null;
}

export interface ItemToSlotParams {
	readonly itemId: number;
	readonly slotId: number;
}
export interface GenerateSlotsParams {
	readonly startSlottedItem: ItemModel;
	readonly count: number;
}

export interface GenerateItemsResponse {
	readonly items: ItemModel[];
	readonly startSlottedItem: ItemModel;
}
