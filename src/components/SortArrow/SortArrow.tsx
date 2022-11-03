import * as React from 'react';
import { useStore } from 'effector-react';
import { CommonProps } from '@/interfaces';
import { StyledText, StyledWrapper } from './styles';
import { $gameConfig } from '@/models/game';

export interface SortArrowProps extends CommonProps {}

export const SortArrow: React.FC<SortArrowProps> = React.memo(
	function SortArrow(props) {
		const { className } = props;
		const config = useStore($gameConfig);
		const isDescSort = config?.sort === -1;
		const label = isDescSort ? 'По убыванию' : 'По возрастанию';
		return (
			<StyledWrapper className={className} invert={isDescSort}>
				<StyledText>{label}</StyledText>
			</StyledWrapper>
		);
	}
);
