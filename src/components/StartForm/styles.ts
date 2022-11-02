import styled from '@emotion/styled';
import { BaseButton } from '../BaseButton';

export const StyledWrapper = styled.form`
	position: relative;

	display: grid;
	gap: calc(50px * var(--scale-factor));
	justify-items: center;

	padding: calc(50px * var(--scale-factor)) calc(80px * var(--scale-factor));

	background-color: var(--base-contract-color);
	background-clip: padding-box;

	border: calc(20px * var(--scale-factor)) solid transparent;
	border-radius: calc(40px * var(--scale-factor));

	::before {
		content: '';

		position: absolute;
		inset: 0;
		z-index: -1;

		margin: calc(-20px * var(--scale-factor));

		background-image: linear-gradient(
			var(--third-color-80) 0,
			var(--third-color-100) 100%
		);

		border-radius: inherit;
	}
`;

export const StyledRadioContainer = styled.fieldset`
	display: flex;
	gap: calc(36px * var(--scale-factor));

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const StyledButton = styled(BaseButton)`
	background-color: var(--primary-color);

	color: var(--base-contract-color);
`;
