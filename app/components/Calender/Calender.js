import React, { useCallback, useState } from 'react';
import { DatePicker, Popover, TextField, Icon } from '@shopify/polaris';
import { CalendarMajorMonotone } from '@shopify/polaris-icons';

const Calender = () => {
  const [popoverActive, setPopoverActive] = useState(true);
  const [{ month, year }, setDate] = useState({ month: 10, year: 2020 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
  });

  const togglePopoverActive = useCallback(() => setPopoverActive((popoverActive) => !popoverActive), []);

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    [],
  );

  return (
    <div data-polaris-layer style={{ position: "relative", zIndex: 1 }}>
      <Popover
        active={popoverActive}
        onClose={togglePopoverActive}
        activator={
          <div onClick={togglePopoverActive}>
            <TextField
              type='text'
              label='Pickup date'
              placeholder='Select a date ...'
              prefix={<Icon source={CalendarMajorMonotone} color="black"></Icon>}
              value={selectedDates.start}
              disabled
            />
          </div>
        }>
        <DatePicker
          month={month}
          year={year}
          onChange={setSelectedDates}
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