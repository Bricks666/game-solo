import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledButton } from './styles';

export interface RadioButtonProps
	extends CommonProps,
		React.InputHTMLAttributes<HTMLInputElement> {
	readonly label: string;
}

export const RadioButton: React.FC<RadioButtonProps> = React.memo(
	function RadioButton(props) {
		const { className, label, ...rest } = props;
		const id = React.useId();
		return (
			<label className={className} htmlFor={id}>
				<StyledButton>{label}</StyledButton>
				<input className='visibility-hidden' {...rest} id={id} />
			</label>
		);
	}
);
