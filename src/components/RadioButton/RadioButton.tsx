import * as React from 'react';
import {
	FieldValues,
	useController,
	UseControllerProps,
} from 'react-hook-form';
import { CommonProps } from '@/interfaces';
import { StyledButton, StyledInput } from './styles';

export interface RadioButtonProps<Fields extends FieldValues>
	extends CommonProps,
		UseControllerProps<Fields>,
		Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			keyof UseControllerProps
		> {
	readonly label: string;
}

export const RadioButton = React.memo(function RadioButton<
	Fields extends FieldValues
>(props: RadioButtonProps<Fields>) {
	const {
		className,
		label,
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
		value,
		...rest
	} = props;
	const { field } = useController({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	});
	const checked = field.value == value;
	console.log(field, value, checked, name, label);
	const id = React.useId();
	return (
		<div className={className}>
			<StyledInput
				className='visibility-hidden'
				{...rest}
				{...field}
				value={value}
				type='radio'
				checked={checked}
				id={id}
			/>
			<StyledButton htmlFor={id}>{label}</StyledButton>
		</div>
	);
});
