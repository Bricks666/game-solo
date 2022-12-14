import { css } from '@emotion/react';

export const globalStyles = css`
	:root {
		--primary-color-100: #38df7a;
		--primary-color-95: rgba(30, 129, 58, 1);
		--primary-color-90: rgba(43, 214, 0, 1);

		--secondary-color: #ffd748;

		--third-color-100: #101f32;
		--third-color-90: #104987;
		--third-color-80: #7f75f0;
		--third-color-70: #5f40a1;

		--base-color: #423f45;
		--base-contract-color: #ffffff;

		--shadow-color: rgba(0, 0, 0, 0.4);

		--max-width: 1440;
		--min-width: 320;
		--base-width: 980;
		--current-width-px: calc(var(--current-width) * 1px);
		--scale-factor: calc(var(--current-width) / var(--base-width));
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
		min-height: 100vh;

		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		line-height: 1.2em;
		color: var(--base-color);
	}

	fieldset,
	button {
		border: none;
		outline: none;
	}

	button {
		cursor: pointer;
	}

	.visibility-hidden {
		position: absolute;
		top: -999999px;
		left: -999999px;

		margin: -1px;

		font-size: 1px;

		overflow: hidden;
	}

	.page-wrapper {
		min-height: 100vh;

		background-image: var(--page-wrapper-bg);
		background-repeat: no-repeat;
		background-size: cover;
	}

	#__next {
		min-height: 100vh;
	}
`;
