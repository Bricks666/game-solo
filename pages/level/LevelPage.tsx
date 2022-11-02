import * as React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import { Container } from '@/components/Container';
import { GameField } from '@/components/GameField';
import { BottomBar } from '@/components/BottomBar';
import { WinScreen } from '@/components/WinScreen';

const LevelPage: NextPage = () => {
	const isWon = true;
	return (
		<StyledWrapper className='page-wrapper'>
			<StyledContainer>
				<GameField />
				<BottomBar />
				{isWon && <WinScreen />}
			</StyledContainer>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	--page-wrapper-bg: url('/assets/images/candies/candy-field.webp');
`;

const StyledContainer = styled(Container)`
	display: grid;
	grid-template-rows: 1fr max-content;
	gap: calc(40px * var(--scale-factor));

	padding: min(calc(45px * var(--scale-factor)), 60px);

	min-height: 100vh;
`;

export default LevelPage;
