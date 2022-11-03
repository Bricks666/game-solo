import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
	position: fixed;
	inset: 0;
	z-index: 10;

	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 100%;
`;

interface StyledBackdropProps {
	readonly isClickable: boolean;
}

export const StyledBackdrop = styled.div<StyledBackdropProps>`
	position: absolute;
	inset: 0;
	z-index: -1;

	background-color: rgba(32, 21, 54, 0.6);

	cursor: ${(props) => (props.isClickable ? 'pointer' : 'default')};
`;
