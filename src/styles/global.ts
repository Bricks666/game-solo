import { css } from '@emotion/react';

export const globalStyles = css`
	:root,
	:root::after,
	:root::before {
		--primary-color: #38df7a;
		--secondary-color: #ffd748;
		--third-color-100: #101f32;
		--third-color-90: #104987;
		--third-color-80: #7f75f0;
		--base-color: #423f45;
		--base-contract-color: #ffffff;
	}

	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;

		box-sizing: border-box;
	}

	body,
	html {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 100vh;

		line-height: 1.2em;
		color: var(--base-color);
	}

	.visibility-hidden {
		position: absolute;
		top: -999999px;
		left: -999999px;

		margin: -1px;

		font-size: 1px;

		overflow: hidden;
	}

	fieldset,
	button {
		border: none;
		outline: none;
	}
`;
