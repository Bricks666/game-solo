/* eslint-disable sonarjs/no-duplicate-string */
import * as React from 'react';
import { useStore } from 'effector-react';
import { CommonProps } from '@/interfaces';
import { $items, ItemModel } from '@/models/game';
import { StyledItem, StyledWrapper } from './styles';

export interface ItemsProps extends CommonProps {}

export const Items: React.FC<ItemsProps> = React.memo(function Items(props) {
	const { className } = props;
	const items: ItemModel[] = useStore($items);
	console.log(items);
	return (
		<StyledWrapper className={className}>
			{items.map((item) => (
				<StyledItem {...item} key={item.value} selected={false} />
			))}
		</StyledWrapper>
	);
});
