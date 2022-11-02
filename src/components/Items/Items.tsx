/* eslint-disable sonarjs/no-duplicate-string */
import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { ItemModel } from '@/models/game';
import { StyledItem, StyledWrapper } from './styles';

export interface ItemsProps extends CommonProps {}

export const Items: React.FC<ItemsProps> = React.memo(function Items(props) {
	const { className } = props;
	const items: ItemModel[] = [
		{
			image: '/assets/images/candies/candy-1.webp',
			number: 42,
		},
		{
			image: '/assets/images/candies/candy-2.webp',
			number: 5,
		},
		{
			image: '/assets/images/candies/candy-2.webp',
			number: 5,
		},
		{
			image: '/assets/images/candies/candy-2.webp',
			number: 5,
		},
		{
			image: '/assets/images/candies/candy-2.webp',
			number: 5,
		},
	];
	return (
		<StyledWrapper className={className}>
			{items.map((item) => (
				<StyledItem {...item} key={item.number} />
			))}
		</StyledWrapper>
	);
});
