import React from 'react';
import MultiSelectDropdown from '../common/MultiSelectDropdown';
import DateTimeRangeSelector from '../common/DateTimeRangeSelector';

const MultipleVariableChartOptions: React.FC = () => {
    const options1 = [
        { value: '1', label: 'Temperature °C' },
        { value: '2', label: 'Relative Humidity %' },
        { value: '3', label: 'Light (lux)' }
      ];

    const options2 = [
        { value: '1', label: 'Bardeen' },
        { value: '2', label: 'Big Data' },
        { value: '3', label: 'Home' }
      ];

      const handleSelectChange = (selectedOptions) => {
        console.log(selectedOptions); // Process selected options
      };

    return (<>
     <MultiSelectDropdown options={options1} onChange={handleSelectChange} placeholder='Select ambient variables to visualize'/>
     <MultiSelectDropdown options={options2} onChange={handleSelectChange} placeholder='Select a growing zone to visualize'/>
     <DateTimeRangeSelector/>
     </>);
}

export default MultipleVariableChartOptions;