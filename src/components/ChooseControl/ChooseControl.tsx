/* eslint-disable eqeqeq */
import * as React from 'react';
import {
	UseControllerProps,
	FieldValues,
	useController,
} from 'react-hook-form';
import { CommonProps } from '@/interfaces';
import {
	StyledControlContainer,
	StyledIndicator,
	StyledLabel,
	StyledPoint,
	StyledPointContainer,
	StyledPointLabel,
	StyledWrapper,
} from './styles';
import { ChooseOption } from './types';

export interface ChooseControlProps<V, Fields extends FieldValues>
	extends CommonProps,
		UseControllerProps<Fields>,
		Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			keyof UseControllerProps
		> {
	readonly options: ChooseOption<V>[];
	readonly label: string;
}

export const ChooseControl = React.memo(function ChooseControl<
	V,
	Fields extends FieldValues
>(props: ChooseControlProps<V, Fields>) {
	const {
		className,
		options,
		label,
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
		...rest
	} = props;
	const { field } = useController({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	});
	const id = React.useId();
	const activeElementIndex = options.findIndex(
		(option) => option.value == field.value
	);
	return (
		<StyledWrapper className={className}>
			<StyledLabel htmlFor={id}>{label}</StyledLabel>
			<StyledControlContainer id={id}>
				{options.map((option) => {
					const id = `point-${option.label}-${option.value}`;
					return (
						<StyledPointContainer key={option.value as string}>
							<StyledPointLabel htmlFor={id}>{option.label}</StyledPointLabel>
							<StyledPoint
								{...field}
								{...rest}
								type='radio'
								value={option.value as string}
								checked={field.value === option.value}
								id={id}
							/>
						</StyledPointContainer>
					);
				})}
				{activeElementIndex !== -1 ? (
					<StyledIndicator activeElementIndex={activeElementIndex} />
				) : null}
			</StyledControlContainer>
		</StyledWrapper>
	);
});
