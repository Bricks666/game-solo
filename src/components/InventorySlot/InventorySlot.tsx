import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';

export interface InventorySlotProps extends CommonProps {}

export const InventorySlot: React.FC<
	React.PropsWithChildren<InventorySlotProps>
> = (props) => {
	const { className, children } = props;
	return <StyledWrapper className={className}>{children}</StyledWrapper>;
};
