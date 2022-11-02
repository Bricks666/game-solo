import styled from '@emotion/styled';

export const StyledWrapper = styled.form`
	position: relative;

	display: grid;
	gap: 50px;
	justify-items: center;

	padding: 50px 80px;

	background-color: var(--base-contract-color);
	background-clip: padding-box;

	border: 20px solid transparent;
	border-radius: 40px;

	::after {
		content: '';

		position: absolute;
		inset: -20px;
		z-index: -1;

		background-image: linear-gradient(
			var(--third-color-80) 0,
			var(--third-color-100) 100%
		);

		border-radius: 20px;
	}
`;

export const StyledRadioContainer = styled.fieldset`
	display: flex;
	gap: 36px;
`;
