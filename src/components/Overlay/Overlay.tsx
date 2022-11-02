import * as React from 'react';
import { CommonProps, VoidFunction } from '@/interfaces';
import { Portal } from '../Portal';
import { StyledBackdrop, StyledWrapper } from './styles';

export interface OverlayProps extends CommonProps {
	readonly onClose?: VoidFunction;
}

export const Overlay: React.FC<React.PropsWithChildren<OverlayProps>> = (
	props
) => {
	const { children, className, onClose } = props;
	return (
		<Portal>
			<StyledWrapper role='dialog'>
				<StyledBackdrop
					role={onClose && 'button'}
					onClick={onClose}
					tabIndex={onClose && 0}
					title={onClose && 'overlay'}
					isClickable={!!onClose}
				/>
				<div className={className}>{children}</div>
			</StyledWrapper>
		</Portal>
	);
};
