import styled from '@emotion/styled';
import { BaseButton } from '../BaseButton';
import { BorderGradient } from '../BorderGradient';

export const StyledWrapper = styled(BorderGradient)`
	--border-gradient-border-width: 20px;
	--border-gradient-border-radius: 40px;
	--border-gradient-border-image: linear-gradient(
		var(--third-color-80) 0,
		var(--third-color-100) 100%
	);
`;

export const StyledForm = styled.form`
	display: grid;
	gap: calc(50px * var(--scale-factor));
	justify-items: center;

	padding: calc(50px * var(--scale-factor)) calc(80px * var(--scale-factor));

	background-color: var(--base-contract-color);

	border-radius: inherit;
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
	background-color: var(--primary-color-100);

	color: var(--base-contract-color);
`;
