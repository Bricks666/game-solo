/* eslint-disable sonarjs/no-duplicate-string */
import * as React from 'react';
import { useStore, useEvent } from 'effector-react';
import { $field, onItemSelect } from '@/models/game';
import { CommonProps } from '@/interfaces';
import { StyledItem, StyledWrapper } from './styles';

export interface ItemsProps extends CommonProps {}

export const Items: React.FC<ItemsProps> = React.memo(function Items(props) {
	const { className } = props;
	const items = useStore($field);
	const onSelect = useEvent(onItemSelect);
	return (
		<StyledWrapper className={className}>
			{items.map((item) => (
				<StyledItem {...item} onSelect={onSelect} key={item.value} />
			))}
		</StyledWrapper>
	);
});
