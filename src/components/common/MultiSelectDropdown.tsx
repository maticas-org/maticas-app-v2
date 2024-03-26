import React from 'react';
import Select from 'react-select';
import { OptionsType, OptionTypeBase } from 'react-select';
import '../../App.css';

interface MultiSelectDropdownProps {
  options: OptionsType<OptionTypeBase>;
  placeholder?: string;
  isMulti?: boolean;
  onChange: (selectedOption: OptionsType<OptionTypeBase>) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  placeholder = "Select options",
  isMulti = true,
  onChange,
}) => {
  return (
    <Select
      options={options}
      isMulti={isMulti}
      placeholder={placeholder}
      onChange={onChange}
      className='select-container'
      styles={{
        control: (provided) => ({ ...provided, width: '100%', justifyContent: 'center', alignItems: 'center' }),
      }}
    />
  );
};

export default MultiSelectDropdown;
