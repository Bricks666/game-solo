import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
	--choose-point-size: 23px;
	--choose-point-gap: 100px;

	display: grid;
	justify-items: center;
	gap: 16px;
`;

export const StyledLabel = styled.label`
	font-size: 33px;
	font-weight: 700;
`;

export const StyledControlContainer = styled.fieldset`
	position: relative;

	display: flex;
	gap: var(--choose-point-gap);

	border-radius: 10px;

	::after {
		content: '';

		position: absolute;
		inset: 0;
		top: calc(100% - var(--choose-point-size));

		background-color: var(--secondary-color);

		border-radius: 10px;
	}
`;

export const StyledPointContainer = styled.div`
	display: grid;
	justify-items: center;
`;

export const StyledPointLabel = styled.label`
	font-size: 24px;
	font-weight: 700;
`;

export const StyledPoint = styled.input`
	position: relative;
	z-index: 1;

	width: var(--choose-point-size);
	height: var(--choose-point-size);

	appearance: none;
`;

interface StyledIndicatorProps {
	readonly activeElementIndex: number;
}

export const StyledIndicator = styled.div<StyledIndicatorProps>`
	position: absolute;

	top: calc(100% - var(--choose-point-size));
	left: 0;
	z-index: 1;

	width: var(--choose-point-size);
	height: var(--choose-point-size);

	background-color: var(--third-color-90);

	border-radius: 50%;

	transform: translateX(
		calc(
			${(props) => props.activeElementIndex} * var(--choose-point-gap) +
				${(props) => props.activeElementIndex} * 100%
		)
	);

	transition: transform 200ms ease-in-out;
`;
