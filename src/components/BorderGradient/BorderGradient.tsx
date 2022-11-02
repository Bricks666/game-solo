import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';

export interface BorderGradientProps extends CommonProps {}

export const BorderGradient: React.FC<
	React.PropsWithChildren<BorderGradientProps>
> = (props) => {
	const { className, children } = props;
	return <StyledWrapper className={className}>{children}</StyledWrapper>;
};
