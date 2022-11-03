import * as React from 'react';
import { useRouter } from 'next/router';
import { useEvent } from 'effector-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CommonProps } from '@/interfaces';
import { GameConfig, setGameConfig } from '@/models/config';
import { ChooseControl } from '../ChooseControl';
import { RadioButton } from '../RadioButton';
import { countOptions, valueOptions } from './data';
import {
	StyledButton,
	StyledRadioContainer,
	StyledForm,
	StyledWrapper,
} from './styles';

export interface StartFormProps extends CommonProps {}

export const StartForm: React.FC<StartFormProps> = React.memo(
	function StartForm(props) {
		const { className } = props;
		const setGameConfigEvent = useEvent(setGameConfig);
		const { push } = useRouter();
		const { control, handleSubmit } = useForm<GameConfig>({
			defaultValues: {
				count: 2,
				sort: 1,
				valueType: 'A',
			},
		});
		const onSubmit: SubmitHandler<GameConfig> = (params) => {
			setGameConfigEvent(params);
			setTimeout(() => push('/level'), 300);
		};
		return (
			<StyledWrapper className={className}>
				<StyledForm onSubmit={handleSubmit(onSubmit)}>
					<ChooseControl
						label='Кол-во предметов'
						name='count'
						control={control as any}
						options={countOptions}
					/>
					<ChooseControl
						name='valueType'
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
				</StyledForm>
			</StyledWrapper>
		);
	}
);
