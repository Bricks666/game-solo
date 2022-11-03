import * as React from 'react';
import { useStore } from 'effector-react';
import { $gameConfig } from '@/models/config';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';
import { Inventory } from '../Inventory';
import { SortArrow } from '../SortArrow';

export interface BottomBarProps extends CommonProps {}

export const BottomBar: React.FC<BottomBarProps> = React.memo(
	function BottomBar(props) {
		const { className } = props;
		const config = useStore($gameConfig);
		const isDescSort = config?.sort === -1;

		return (
			<StyledWrapper className={className}>
				<SortArrow invert={isDescSort} />
				<Inventory invert={isDescSort} />
			</StyledWrapper>
		);
	}
);
