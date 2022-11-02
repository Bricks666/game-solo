import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
	--item-size: calc(130px * var(--scale-factor));

	position: relative;

	display: flex;
	justify-content: center;
	gap: calc(4px * var(--scale-factor));

	width: 100%;

	padding: calc(45px * var(--scale-factor));

	background-image: radial-gradient(
			238.96% 238.96% at 50% 54.28%,
			#faf9f9 0%,
			#c09f9b 100%
		),
		url('/assets/images/candies/candy-bar.webp');
	background-repeat: no-repeat;
	background-size: cover;
	background-blend-mode: color-burn;
	background-clip: padding-box;

	border-radius: calc(50px * var(--scale-factor));
	border: calc(15px * var(--scale-factor)) solid transparent;

	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	::before {
		content: '';

		position: absolute;
		inset: 0;
		z-index: -1;

		margin: calc(-15px * var(--scale-factor));

		background-image: radial-gradient(
			51.3% 817.07% at 46.28% 46.11%,
			#f2e6fa 0%,
			rgba(156, 154, 103, 0) 100%
		);

		border-radius: inherit;
	}
`;
