import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledText, StyledWrapper } from './styles';
import { ItemModel } from '@/models/game';

export interface ItemProps extends CommonProps, ItemModel {}

export const Item: React.FC<ItemProps> = React.memo(function Item(props) {
	const { className, number, image } = props;
	return (
		<StyledWrapper className={className} background={image}>
			<StyledText>{number}</StyledText>
		</StyledWrapper>
	);
});
