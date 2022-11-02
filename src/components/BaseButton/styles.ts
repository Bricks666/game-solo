import styled from '@emotion/styled';

export const StyledWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: calc(8px * var(--scale-factor)) calc(75px * var(--scale-factor));

	font-size: calc(32px * var(--scale-factor));
	font-weight: 700;
	color: currentColor;

	border-radius: calc(20px * var(--scale-factor));

	transition: box-shadow 200ms ease-in-out;

	:hover,
	:focus-visible {
		box-shadow: 0 0 8px var(--shadow-color);
	}
`;
