import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';

export interface SortArrowProps extends CommonProps {}

export const SortArrow: React.FC<SortArrowProps> = React.memo(
	function SortArrow(props) {
		const { className } = props;
		const sort: 1 | -1 = -1;
		const label = sort === -1 ? 'По убыванию' : 'По возрастанию';
		return (
			<StyledWrapper className={className} invert={sort === -1}>
				{label}
			</StyledWrapper>
		);
	}
);
