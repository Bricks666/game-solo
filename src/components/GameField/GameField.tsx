import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';
import { Items } from '../Items';

export interface GameFieldProps extends CommonProps {}

export const GameField: React.FC<GameFieldProps> = React.memo(
	function GameField(props) {
		const { className } = props;
		return (
			<StyledWrapper className={className}>
				<Items />
			</StyledWrapper>
		);
	}
);
