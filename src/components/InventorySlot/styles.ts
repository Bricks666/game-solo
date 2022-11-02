import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
	width: clamp(40px, var(--item-size), 200px);
	height: clamp(40px, var(--item-size), 200px);

	border-radius: 50%;

	box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
`;
