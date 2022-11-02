import styled from '@emotion/styled';

export const StyledButton = styled.label`
	padding: 0 20px;

	font-size: calc(32px * var(--scale-factor));
	line-height: 1.2em;
	font-weight: 700;

	background-color: var(--secondary-color);

	border-radius: calc(20px * var(--scale-factor));

	cursor: pointer;

	transition: box-shadow 200ms ease-in-out;

	:hover,
	:focus-visible {
		box-shadow: 0 0 8px var(--shadow-color);
	}
`;

export const StyledInput = styled.input`
	&:not(:checked) + ${StyledButton} {
		background-color: rgba(255, 215, 72, 0.56);
	}
`;
