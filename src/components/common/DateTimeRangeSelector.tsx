import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../App.css'

interface DateTimeRangeSelectorProps {
  // You can include additional props as needed, such as a callback to handle the date range selection
}

const DateTimeRangeSelector: React.FC<DateTimeRangeSelectorProps> = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <>
    <p className='centered-container'>Please select range date for you to visualize the data</p>
    <div className="date-range-selector">
    <div className="date-picker-container">
      <b><label>Start </label></b>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>

    <div className="date-picker-container">
      <b><label> End </label></b>
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  </div>
  </>
  );
};

export default DateTimeRangeSelector;
