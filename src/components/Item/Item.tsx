import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledText, StyledWrapper } from './styles';
import { ItemModel } from '@/models/game';

export interface ItemProps extends CommonProps, ItemModel {
	readonly selected: boolean;
}

export const Item: React.FC<ItemProps> = React.memo(function Item(props) {
	const { className, value: number, image, selected } = props;
	return (
		<StyledWrapper className={className} background={image} selected={selected}>
			<StyledText>{number}</StyledText>
		</StyledWrapper>
	);
});
