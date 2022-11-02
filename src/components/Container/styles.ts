import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
	--container-margin: 14.25vw;
	--container-width: min(1920px, 100vw);

	max-width: var(--container-width);

	margin: 0 var(--container-margin);

	@media (min-width: 1920px) {
		--container-margin: auto;
	}
`;
