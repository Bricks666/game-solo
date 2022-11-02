import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CommonProps } from '@/interfaces';
import { StartGameParams } from '@/models/game';
import { ChooseControl } from '../ChooseControl';
import { RadioButton } from '../RadioButton';
import { countOptions, valueOptions } from './data';
import { StyledButton, StyledRadioContainer, StyledWrapper } from './styles';

export interface StartFormProps extends CommonProps {}

export const StartForm: React.FC<StartFormProps> = React.memo(
	function StartForm(props) {
		const { className } = props;

		const { control, handleSubmit, reset } = useForm<StartGameParams>({
			defaultValues: {
				count: 2,
				sort: 1,
				values: 'A',
			},
		});
		const onSubmit: SubmitHandler<StartGameParams> = (params) => {
			console.log(params);
			reset();
		};
		return (
			<StyledWrapper className={className} onSubmit={handleSubmit(onSubmit)}>
				<ChooseControl
					label='Кол-во предметов'
					name='count'
					control={control as any}
					options={countOptions}
				/>
				<ChooseControl
					name='values'
					control={control as any}
					label='Значения'
					options={valueOptions}
				/>
				<StyledRadioContainer>
					<RadioButton
						control={control as any}
						name='sort'
						label='По возрастанию'
						value={1}
					/>
					<RadioButton
						name='sort'
						label='По убыванию'
						control={control as any}
						value={-1}
					/>
				</StyledRadioContainer>
				<StyledButton type='submit'>Играть</StyledButton>
			</StyledWrapper>
		);
	}
);
