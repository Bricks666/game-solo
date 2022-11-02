import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
	--container-margin: auto;

	max-width: var(--current-width-px);

	margin: 0 var(--container-margin);

	@media (min-width: 1921px) {
		--container-margin: auto;
	}
`;
