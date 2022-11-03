import styled from '@emotion/styled';
import { BaseButton } from '../BaseButton';
import { BorderGradient } from '../BorderGradient';
import { Container } from '../Container';

export const StyledContainer = styled(Container)`
	padding: calc(75px * var(--scale-factor));
`;

export const StyledWrapper = styled(BorderGradient)`
	--border-gradient-border-width: 20px;
	--border-gradient-border-radius: 40px;
	--border-gradient-border-image: linear-gradient(
		180deg,
		#67df89 0%,
		rgba(141, 103, 223, 0) 100%
	);

	display: grid;
	justify-items: center;
	gap: calc(22px * var(--scale-factor));

	padding: calc(25px * var(--scale-factor)) calc(70px * var(--scale-factor));

	background-color: var(--base-contract-color);

	overflow: visible;

	::after {
		content: '';

		position: absolute;
		inset: -10%;
		z-index: 1;

		background-image: url('/assets/images/star.webp'),
			url('/assets/images/star.webp'), url('/assets/images/star.webp'),
			url('/assets/images/star.webp');
		background-position: top left 5%, top 20% right, bottom 5% right 5%,
			bottom -5% left;
		background-size: calc(100px * var(--scale-factor)),
			calc(160px * var(--scale-factor)), calc(90px * var(--scale-factor)),
			calc(160px * var(--scale-factor));
		background-repeat: no-repeat;
	}
`;

export const StyledTitle = styled.h2`
	background: linear-gradient(180deg, #fff9d8 8.65%, #ffe44f 69.58%);
	background-clip: text;
	-webkit-background-clip: text;

	font-size: calc(128px * var(--scale-factor));
	-webkit-text-fill-color: transparent;
	line-height: 1.2em;

	filter: drop-shadow(0 0 calc(10px * var(--scale-factor)) #1e813a);
`;

export const StyledMessage = styled.p`
	font-size: calc(40px * var(--scale-factor));
	line-height: 1.2em;
	color: var(--third-color-70);
	text-align: center;
`;

export const StyledButton = styled(BaseButton)`
	margin-top: calc(50px * var(--scale-factor));

	background-color: var(--primary-color-90);

	color: var(--base-contract-color);
	font-size: calc(40px * var(--scale-factor));
`;
