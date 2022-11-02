import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
	--choose-point-size: calc(23px * var(--scale-factor));
	--choose-point-gap: calc(100px * var(--scale-factor));

	display: grid;
	justify-items: center;
	gap: calc(16px * var(--scale-factor));
`;

export const StyledLabel = styled.label`
	font-size: calc(33px * var(--scale-factor));
	line-height: 1.2em;
	font-weight: 700;
`;

export const StyledControlContainer = styled.fieldset`
	--control-border-radius: calc(10px * var(--scale-factor));

	position: relative;

	display: flex;
	gap: var(--choose-point-gap);

	border-radius: var(--control-border-radius);

	::after {
		content: '';

		position: absolute;
		inset: 0;
		top: calc(100% - var(--choose-point-size));

		background-color: var(--secondary-color);

		border-radius: var(--control-border-radius);
	}
`;

export const StyledPointContainer = styled.div`
	display: grid;
	justify-items: center;
	gap: calc(var(--scale-factor) * 1px);
`;

export const StyledPointLabel = styled.label`
	font-size: calc(24px * var(--scale-factor));
	line-height: 1.2em;
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
	--indicator-active-index: ${(props) => props.activeElementIndex};
	--indicator-translate: calc(
		var(--indicator-active-index) * var(--choose-point-gap)
	);
	--indicator-offset: calc(var(--indicator-active-index) * 100%);

	position: absolute;

	top: calc(100% - var(--choose-point-size));
	left: 0;
	z-index: 1;

	width: var(--choose-point-size);
	height: var(--choose-point-size);

	background-color: var(--third-color-90);

	border-radius: 50%;

	transform: translateX(
		calc(var(--indicator-offset) + var(--indicator-translate))
	);

	transition: transform 200ms ease-in-out;
`;
