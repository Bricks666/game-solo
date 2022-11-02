import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';

export interface WinScreenProps extends CommonProps {}

export const WinScreen: React.FC<WinScreenProps> = React.memo(
	function WinScreen(props) {
		const { className } = props;
		return <StyledWrapper className={className}>{null}</StyledWrapper>;
	}
);
