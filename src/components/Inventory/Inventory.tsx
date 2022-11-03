import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { InventorySlot } from '../InventorySlot';
import { StyledItem, StyledWrapper } from './styles';

export interface InventoryProps extends CommonProps {}

export const Inventory: React.FC<InventoryProps> = React.memo(
	function Inventory(props) {
		const { className } = props;
		const slotsCount = 6;
		const filled = [
			{ number: 34, image: '/assets/images/candies/candy-4.webp' },
		];
		const array = Array(slotsCount).fill('');
		return (
			<StyledWrapper className={className}>
				{array.map((_, i) => {
					const item = filled[i];
					const child = item ? <StyledItem {...item} selected={false} /> : null;
					return <InventorySlot key={i}>{child}</InventorySlot>;
				})}
			</StyledWrapper>
		);
	}
);
