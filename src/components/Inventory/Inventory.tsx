import * as React from 'react';
import { useStore, useEvent } from 'effector-react';
import { CommonProps } from '@/interfaces';
import { $inventory, onItemSelect, onSlotSelect } from '@/models/game';
import { InventorySlot } from '../InventorySlot';
import { StyledItem, StyledWrapper } from './styles';

export interface InventoryProps extends CommonProps {}

export const Inventory: React.FC<InventoryProps> = React.memo(
	function Inventory(props) {
		const { className } = props;
		const slots = useStore($inventory);
		const onSelectSlot = useEvent(onSlotSelect);
		const onSelectItem = useEvent(onItemSelect);
		return (
			<StyledWrapper className={className}>
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
