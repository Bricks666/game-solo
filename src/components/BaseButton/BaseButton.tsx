import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledWrapper } from './styles';

export interface BaseButtonProps
	extends CommonProps,
		React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const BaseButton: React.FC<React.PropsWithChildren<BaseButtonProps>> = (
	props
) => {
	const { className, children, ...rest } = props;
	return (
		<StyledWrapper className={className} type='button' {...rest}>
			{children}
		</StyledWrapper>
	);
};
