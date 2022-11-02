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
	background-image: url('');
`;

const StyledContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default StartPage;
