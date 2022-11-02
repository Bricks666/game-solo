import * as React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import { StartForm } from '@/components/StartForm';
import { Container } from '@/components/Container';

const StartPage: NextPage = () => {
	return (
		<StyledWrapper>
			<StyledContainer>
				<StartForm />
			</StyledContainer>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	position: relative;
	z-index: 0;

	min-height: 100vh;

	padding-top: calc(20px * var(--scale-factor));

	background-image: url('/assets/images/start-bg.webp');
	background-repeat: no-repeat;
	background-size: cover;
`;

const StyledContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default StartPage;
