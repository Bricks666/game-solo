import * as React from 'react';
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

export interface ChooseControlProps<V> extends CommonProps {
	readonly options: ChooseOption<V>[];
	readonly value: V;
	readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
	readonly name: string;
	readonly label: string;
}

export const ChooseControl = React.memo(function ChooseControl<V>(
	props: ChooseControlProps<V>
) {
	const { className, options, onChange, name, value, label } = props;
	const id = React.useId();
	const activeElementIndex = options.findIndex(
		(option) => option.value === value
	);
	return (
		<StyledWrapper className={className}>
			<StyledLabel htmlFor={id}>{label}</StyledLabel>
			<StyledControlContainer id={id}>
				{options.map((option) => {
					const id = `point-${option.label}-${option.value}`;
					return (
						<StyledPointContainer>
							<StyledPointLabel htmlFor={id}>{option.label}</StyledPointLabel>
							<StyledPoint
								type='radio'
								name={name}
								onChange={onChange}
								value={option.value as string}
								checked={value === option.value}
								id={id}
								key={option.value as string}
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
