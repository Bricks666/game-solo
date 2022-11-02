import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
	--container-margin: 14.25vw;

	max-width: var(--current-width-px);

	margin: 0 var(--container-margin);

	@media (min-width: 1920px) {
		--container-margin: auto;
	}
`;
