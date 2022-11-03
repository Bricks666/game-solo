import * as React from 'react';
import { useStore, useEvent } from 'effector-react';
import { CommonProps } from '@/interfaces';
import { $inventory, onItemSelect, onSlotSelect } from '@/models/items';
import { InventorySlot } from '../InventorySlot';
import { StyledItem, StyledWrapper } from './styles';

export interface InventoryProps extends CommonProps {
	readonly invert: boolean;
}

export const Inventory: React.FC<InventoryProps> = React.memo(
	function Inventory(props) {
		const { className, invert } = props;

		const slots = useStore($inventory);
		const onSelectSlot = useEvent(onSlotSelect);
		const onSelectItem = useEvent(onItemSelect);
		return (
			<StyledWrapper className={className} invert={invert}>
				{slots.map((slot) => {
					const child = slot.item ? (
						<StyledItem {...slot.item} onSelect={onSelectItem} />
					) : null;
					return (
						<InventorySlot id={slot.id} onSelect={onSelectSlot} key={slot.id}>
							{child}
						</InventorySlot>
					);
				})}
			</StyledWrapper>
		);
	}
);
