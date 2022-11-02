import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { StyledRadioContainer, StyledWrapper } from './styles';
import { ChooseControl, ChooseOption } from '../ChooseControl';
import { RadioButton } from '../RadioButton';
import { BaseButton } from '../BaseButton';

export interface StartFormProps extends CommonProps {}

const countOptions: ChooseOption<number>[] = [
	{
		label: '2',
		value: 2,
	},
	{
		label: '3',
		value: 3,
	},
	{
		label: '4',
		value: 4,
	},
	{
		label: '5',
		value: 5,
	},
];

const valueOptions: ChooseOption<number | string>[] = [
	{
		label: 'A',
		value: 'A',
	},
	{
		label: '9',
		value: '9',
	},
	{
		label: '19',
		value: '19',
	},
	{
		label: '59',
		value: '59',
	},
	{
		label: '99',
		value: '99',
	},
	{
		label: '999',
		value: '999',
	},
];

export const StartForm: React.FC<StartFormProps> = React.memo(
	function StartForm(props) {
		const { className } = props;
		const [count, setCount] = React.useState<number>(2);
		const [value, setValue] = React.useState<number | string>('A');
		const onCountChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
			setCount(Number(evt.target.value) as unknown as number);
		};

		const onCountValue: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
			setValue(evt.target.value);
		};
		return (
			<StyledWrapper className={className}>
				<ChooseControl
					label='Кол-во предметов'
					value={count}
					options={countOptions}
					onChange={onCountChange}
					name='count'
				/>
				<ChooseControl
					label='Значения'
					value={value}
					options={valueOptions}
					onChange={onCountValue}
					name='value'
				/>
				<StyledRadioContainer>
					<RadioButton label='По возрастанию' name='sort' />
					<RadioButton label='По убыванию' name='sort' />
				</StyledRadioContainer>
				<BaseButton>Играть</BaseButton>
			</StyledWrapper>
		);
	}
);
