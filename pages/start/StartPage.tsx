import * as React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import { StartForm } from '@/components/StartForm';
import { Container } from '@/components/Container';

const StartPage: NextPage = () => {
	return (
		<StyledWrapper className='page-wrapper'>
			<StyledContainer>
				<StartForm />
			</StyledContainer>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	--page-wrapper-bg: url('/assets/images/start-bg.webp');

	position: relative;
	z-index: 0;

	padding-top: calc(20px * var(--scale-factor));
`;

const StyledContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default StartPage;
