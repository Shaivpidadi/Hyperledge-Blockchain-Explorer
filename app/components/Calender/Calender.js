import React, { useCallback, useState } from 'react';
import { DatePicker, Popover, Button } from '@shopify/polaris';
import { CalendarMajorMonotone } from '@shopify/polaris-icons';
import moment from 'moment';

// Temporary Disable react-dates
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const Calender = ({ onChangeDate }) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [{ month, year }, setDate] = useState({ month: moment().month(), year: moment().year() });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
  });

  const togglePopoverActive = useCallback(() => setPopoverActive((popoverActive) => !popoverActive), []);

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    [],
  );

  const onChangeHandle = (dates) => {
    setSelectedDates(dates);
    onChangeDate(dates)
  }

  const activator = (
    <Button fullWidth onClick={togglePopoverActive}>
      Date picker
    </Button>
  );

  return (
    <div data-polaris-layer style={{ position: "relative", zIndex: 1 }}>
      <Popover
        active={popoverActive}
        onClose={togglePopoverActive}
        activator={activator}
      >
        <DatePicker
          month={month}
          year={year}
          onChange={onChangeHandle}
          onMonthChange={handleMonthChange}
          selected={selectedDates}
          // disableDatesBefore={new Date('Sat Feb 03 2018 00:00:00 GMT-0500 (EST)')}
          disableDatesAfter={new Date()}
          allowRange
        />
      </Popover>
    </div >
  );


};

export default Calender;


// Temporary

// const [selectedDates, setSelectedDates] = useState({ start: moment(), end: null, });
// const [focusedInput, setFocusedInput] = useState('startDate');

// return (
//   <DateRangePicker
//     startDate={selectedDates.start} // momentPropTypes.momentObj or null,
//     startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
//     endDate={selectedDates.end} // momentPropTypes.momentObj or null,
//     endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
//     onDatesChange={({ startDate, endDate }) => setSelectedDates({ startDate, endDate })} // PropTypes.func.isRequired,
//     focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
//     onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
//   />
// );