import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { add, toDate } from 'date-fns';
import { Controls, Calendar } from './components';
import { getDates } from './utils';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "controls" "calendar";
  grid-template-rows: 30px;
  width: 220px;
  border: 1px solid #888;
  padding: 5px;
`;

const defaultDate = new Date();

const DatePicker = ({ selected = defaultDate, onChange }) => {

  const [ dates, setDates ] = useState({});
  const [ selectedDate, setSelectedDate ] = useState(selected);

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

  useEffect(() => {
    setDates(getDates(selectedDate));
  }, [selectedDate]);

  return (
    <Wrapper>
      <Controls
        month={dates?.month}
        year={dates?.year}
        methods={controlMethods}
      />
      <Calendar
        selectedDate={selectedDate}
        dates={dates?.dates}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default DatePicker;
