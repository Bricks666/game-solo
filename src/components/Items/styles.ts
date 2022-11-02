import styled from '@emotion/styled';
import { Item } from '../Item';

export const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: calc(25px * var(--scale-factor));

	min-height: calc(300px * var(--scale-factor));
`;

export const StyledItem = styled(Item)`
	--item-size: calc(156px * var(--scale-factor));

	:nth-child(odd) {
		align-self: end;
	}

	:first-child,
	:last-child {
		align-self: center;
	}
`;
