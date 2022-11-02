import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { InventorySlot } from '../InventorySlot';
import { StyledWrapper } from './styles';
import { Item } from '../Item';

export interface InventoryProps extends CommonProps {}

export const Inventory: React.FC<InventoryProps> = React.memo(
	function Inventory(props) {
		const { className } = props;
		const slotsCount = 6;
		const filled = [
			{ number: 34, image: '/assets/images/candies/candy-4.webp' },
		];
		const array = Array(slotsCount - filled.length).fill('');
		return (
			<StyledWrapper className={className}>
				{filled.map((item) => (
					<Item {...item} key={item.number} />
				))}
				{array.map((_, i) => (
					<InventorySlot key={i} />
				))}
			</StyledWrapper>
		);
	}
);
