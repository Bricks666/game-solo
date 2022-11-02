import styled from '@emotion/styled';

interface StyledWrapperProps {
	readonly invert: boolean;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
	position: relative;

	width: max-content;

	${(props) => (props.invert ? 'margin-left: auto;' : 'margin-right: auto;')}

	::after {
		content: '';

		position: absolute;
		${(props) =>
			props.invert
				? 'right: calc(100px * var(--scale-factor));'
				: 'left: calc(100px * var(--scale-factor));'}

		top: calc(-10px * var(--scale-factor));
		z-index: 0;

		height: calc(100% + 30px * var(--scale-factor));
		width: 100%;

		background-image: url('/assets/images/arrow.svg');
		background-repeat: no-repeat;
		background-position: center right;

		${(props) => (props.invert ? 'transform: rotate(180deg);' : '')}
	}
`;

export const StyledText = styled.p`
	font-size: calc(36px * var(--scale-factor));
	color: var(--base-contract-color);
	line-height: 1.2em;
	-webkit-text-stroke: calc(1.5px * var(--scale-factor)) var(--base-color);
`;
