import * as React from 'react';
import { useEvent } from 'effector-react';
import { restartGame } from '@/models/config';
import { CommonProps } from '@/interfaces';
import { Overlay } from '../Overlay';
import {
	StyledButton,
	StyledContainer,
	StyledInnerWrapper,
	StyledMessage,
	StyledTitle,
	StyledWrapper,
} from './styles';

export interface WinScreenProps extends CommonProps {}

export const WinScreen: React.FC<WinScreenProps> = React.memo(
	function WinScreen(props) {
		const { className } = props;
		const restart = useEvent(restartGame);
		return (
			<Overlay>
				<StyledContainer>
					<StyledWrapper className={className}>
						<StyledInnerWrapper>
							<StyledTitle>Победа!</StyledTitle>
							<StyledMessage>
								Молодец! Ты успешно справился с заданием!
							</StyledMessage>
							<StyledButton onClick={restart}>Заново</StyledButton>
						</StyledInnerWrapper>
					</StyledWrapper>
				</StyledContainer>
			</Overlay>
		);
	}
);
