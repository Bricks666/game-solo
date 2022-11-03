import styled from '@emotion/styled';
import { BorderGradient } from '../BorderGradient';
import { Item } from '../Item';

export const StyledWrapper = styled(BorderGradient)`
	--item-size: calc(130px * var(--scale-factor));
	--border-gradient-border-width: 15px;
	--border-gradient-border-radius: 50px;
	--border-gradient-border-image: radial-gradient(
		51.3% 817.07% at 46.28% 46.11%,
		#f2e6fa 0%,
		rgba(156, 154, 103, 0) 100%
	);

	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: calc(4px * var(--scale-factor));

	width: 100%;

	padding: calc(30px * var(--scale-factor)) calc(16px * var(--scale-factor));

	background-image: radial-gradient(
			238.96% 238.96% at 50% 54.28%,
			#faf9f9 0%,
			#c09f9b 100%
		),
		url('/assets/images/candies/candy-bar.webp');
	background-repeat: no-repeat;
	background-size: cover;
	background-blend-mode: color-burn;

	box-shadow: 0px calc(4px * var(--scale-factor))
		calc(4px * var(--scale-factor)) rgba(0, 0, 0, 0.25);
`;

export const StyledItem = styled(Item)`
	position: relative;
	z-index: 1;
`;
