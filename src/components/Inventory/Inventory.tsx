import * as React from 'react';
import { useStore } from 'effector-react';
import { CommonProps } from '@/interfaces';
import { $slots } from '@/models/game';
import { InventorySlot } from '../InventorySlot';
import { StyledItem, StyledWrapper } from './styles';

export interface InventoryProps extends CommonProps {}

export const Inventory: React.FC<InventoryProps> = React.memo(
	function Inventory(props) {
		const { className } = props;
		const slots = useStore($slots);
		console.log(slots);
		return (
			<StyledWrapper className={className}>
				{slots.map((slot, i) => {
					const child = slot.item ? (
						<StyledItem {...slot.item} selected={false} />
					) : null;
					return <InventorySlot key={i}>{child}</InventorySlot>;
				})}
			</StyledWrapper>
		);
	}
);
