import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { Overlay } from '../Overlay';
import {
	StyledButton,
	StyledContainer,
	StyledMessage,
	StyledTitle,
	StyledWrapper,
} from './styles';

export interface WinScreenProps extends CommonProps {}

export const WinScreen: React.FC<WinScreenProps> = React.memo(
	function WinScreen(props) {
		const { className } = props;
		return (
			<Overlay>
				<StyledContainer>
					<StyledWrapper className={className}>
						<StyledTitle>Победа!</StyledTitle>
						<StyledMessage>
							Молодец! Ты успешно справился с заданием!
						</StyledMessage>
						<StyledButton>Заново</StyledButton>
					</StyledWrapper>
				</StyledContainer>
			</Overlay>
		);
	}
);
