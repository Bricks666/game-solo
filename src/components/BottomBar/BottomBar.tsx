import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';
import { Inventory } from '../Inventory';
import { SortArrow } from '../SortArrow';

export interface BottomBarProps extends CommonProps {}

export const BottomBar: React.FC<BottomBarProps> = React.memo(
	function BottomBar(props) {
		const { className } = props;
		return (
			<StyledWrapper className={className}>
				<SortArrow />
				<Inventory />
			</StyledWrapper>
		);
	}
);
