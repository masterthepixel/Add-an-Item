import React from 'react';
import { Option } from '../../types/main';
import {SelectWrapper, SelectInput} from './styled';

export interface PickerProps {
  gridArea?: string;
  name: string;
  options: Array<Option>
  onSelectColumnNumber: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const Picker: React.FC<PickerProps> = ({
  gridArea = '',
  name,
  options,
  onSelectColumnNumber
}) => {
  return (
    <SelectWrapper gridArea={gridArea}>
      <SelectInput name={name} onChange={onSelectColumnNumber}>
        {options.map((option: Option) => (
          <option value={option.value} key={option.value}>{option.label}</option>
        ))}
      </SelectInput>
    </SelectWrapper>
  )
}

export default Picker;