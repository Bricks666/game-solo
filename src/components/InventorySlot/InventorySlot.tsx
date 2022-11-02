import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';

export interface InventorySlotProps extends CommonProps {}

export const InventorySlot: React.FC<InventorySlotProps> = React.memo(
	function InventorySlot(props) {
		const { className } = props;
		return <StyledWrapper className={className}>{null}</StyledWrapper>;
	}
);
