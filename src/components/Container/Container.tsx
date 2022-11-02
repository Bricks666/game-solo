import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';

export interface ContainerProps extends CommonProps {}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = (
	props
) => {
	const { className, children } = props;
	return <StyledWrapper className={className}>{children}</StyledWrapper>;
};
