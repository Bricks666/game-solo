import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';

export interface InventorySlotProps extends CommonProps {
	readonly onSelect: React.EventHandler<
		React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
	>;
	readonly id: number;
}

export const InventorySlot: React.FC<
	React.PropsWithChildren<InventorySlotProps>
> = (props) => {
	const { className, children, id, onSelect } = props;
	return (
		<StyledWrapper
			className={className}
			onClick={onSelect}
			onTouchStart={onSelect}
			data-id={id}>
			{children}
		</StyledWrapper>
	);
};
