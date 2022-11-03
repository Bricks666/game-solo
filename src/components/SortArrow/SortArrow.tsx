import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledText, StyledWrapper } from './styles';

export interface SortArrowProps extends CommonProps {
	readonly invert: boolean;
}

export const SortArrow: React.FC<SortArrowProps> = React.memo(
	function SortArrow(props) {
		const { className, invert } = props;
		const label = invert ? 'По убыванию' : 'По возрастанию';
		return (
			<StyledWrapper className={className} invert={invert}>
				<StyledText>{label}</StyledText>
			</StyledWrapper>
		);
	}
);
