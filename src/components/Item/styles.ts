import styled from '@emotion/styled';

interface StyledWrapperProps {
	readonly background?: string;
	readonly selected: boolean;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: clamp(40px, var(--item-size), 200px);
	height: clamp(40px, var(--item-size), 200px);

	border-radius: 50%;

	background-image: url(${(props) => props.background});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;

	${(props) => (props.selected ? 'transform: translateY(-20%);' : '')}
	${(props) =>
		props.selected
			? 'filter: drop-shadow(0 8px 8px var(--secondary-color));'
			: ''}

	transition: transform 200ms ease-in-out, filter 200ms ease-in-out;
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
