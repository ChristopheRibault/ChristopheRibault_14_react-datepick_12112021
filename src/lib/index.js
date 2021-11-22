import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { add, toDate, format } from 'date-fns';
import { Controls, Calendar } from './components';
import { getDates } from './utils';

const Wrapper = styled.div`
  position: relative;
`;

const StyledCalendar = styled.div`
  display: grid;
  grid-template-areas: "controls" "calendar";
  grid-template-rows: 30px;
  width: 220px;
  border: 1px solid #888;
  padding: 5px;
  position: absolute;
  z-index: 100;
  background-color: #fff;
`;

const defaultDate = new Date();

const DatePicker = ({ selected = defaultDate, name, onChange, ...props }) => {

  const [ dates, setDates ] = useState({});
  const [ selectedDate, setSelectedDate ] = useState(selected);
  const [ showCalendar, toggleCalendar ] = useState(false);
  const inputElement = useRef(null)

  const controlMethods = {
    nextMonth: () => {
      setSelectedDate(
        add(selectedDate, { months: 1 }),
      );
    },
    prevMonth: () => {
      setSelectedDate(
        add(selectedDate, { months: -1 }),
      );
    },
    setMonth: (month) => {
      setSelectedDate(
        toDate(selectedDate.setMonth(month)),
      );
    },
    setYear: (year) => {
      setSelectedDate(
        toDate(selectedDate.setFullYear(year)),
      );
    },
  };

  const onSelectDate = (date) => {
    setSelectedDate(date);
    onChange({
      target: {
        name,
        value: format(date, 'MM/dd/yyyy'),
      },
    });
    toggleCalendar(false);
  };

  useEffect(() => {
    setDates(getDates(selectedDate));
  }, [selectedDate]);

  return (
    <Wrapper
      onFocusCapture={() => toggleCalendar(true)}
    >
      <input
        ref={inputElement}
        type='text'
        name={name}
        value={format(selectedDate, 'MM/dd/yyyy')}
        readOnly
        {...props}
      />
      {
        showCalendar &&
        <StyledCalendar>
          <Controls
            month={dates?.month}
            year={dates?.year}
            methods={controlMethods}
          />
          <Calendar
            selectedDate={selectedDate}
            dates={dates?.dates}
            onSelectDate={onSelectDate}
          />
        </StyledCalendar>
      }
    </Wrapper>
  );
};

export default DatePicker;
