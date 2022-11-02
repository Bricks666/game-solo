import styled from '@emotion/styled';

interface StyledWrapperProps {
	readonly background?: string;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: var(--item-size);
	height: var(--item-size);

	border-radius: 50%;

	background-image: url(${(props) => props.background});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const StyledText = styled.p`
	font-weight: 700;
	font-size: calc(56px * var(--scale-factor));
	color: var(--base-contract-color);
	letter-spacing: 0.04em;
	line-height: 1.2em;
	-webkit-text-stroke: calc(3px * var(--scale-factor)) #242546;
	user-select: none;
`;
