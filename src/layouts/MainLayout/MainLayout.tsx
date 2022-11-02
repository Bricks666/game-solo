import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { StyledWrapper } from './styles';

export interface MainLayoutProps extends CommonProps {}

export const MainLayout: React.FC<MainLayoutProps> = React.memo(
	function MainLayout(props) {
		const { className } = props;
		return <StyledWrapper className={className}>{null}</StyledWrapper>;
	}
);
