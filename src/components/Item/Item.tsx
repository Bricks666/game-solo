import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledText, StyledWrapper } from './styles';
import { ItemModel } from '@/models/game';

export interface ItemProps extends CommonProps, ItemModel {
	readonly selected: boolean;
	readonly id: number;
	readonly onSelect: React.EventHandler<
		| React.MouseEvent<HTMLElement>
		| React.TouchEvent<HTMLElement>
		| React.DragEvent<HTMLElement>
	>;
}

export const Item: React.FC<ItemProps> = React.memo(function Item(props) {
	const { className, value: number, image, selected, id, onSelect } = props;
	return (
		<StyledWrapper
			className={className}
			background={image}
			selected={selected}
			onClick={onSelect}
			onTouchStart={onSelect}
			data-id={id}>
			<StyledText>{number}</StyledText>
		</StyledWrapper>
	);
});
