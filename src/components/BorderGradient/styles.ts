import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
	position: relative;

	background-clip: padding-box;

	border: calc(var(--border-gradient-border-width) * var(--scale-factor)) solid
		transparent;
	border-radius: calc(
		var(--border-gradient-border-radius) * var(--scale-factor)
	);

	::before {
		content: '';

		position: absolute;
		inset: 0;
		z-index: -1;

		margin: calc(
			var(--border-gradient-border-width) * var(--scale-factor) * -1
		);

		background-image: var(--border-gradient-border-image);

		border-radius: inherit;
	}
`;
