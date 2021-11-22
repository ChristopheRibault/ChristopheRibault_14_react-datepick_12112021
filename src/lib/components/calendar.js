import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-area: calendar;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 30px;
`;

const StyledDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  font-weight: 700;
  font-size: .8em;
  color: #888;
  background-color: #ddd;
`;

const StyledDate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3px;
  border: 1px solid #ccc;
  color: #666;
  background-color: #eee;
  cursor: pointer;
  &.inactive {
    background-color: #fff;
    color: #ccc;
    cursor: grab;
  }
  &.selected {
    background-color: #00f;
    color: #fff;
  }
`;

const Calendar = function({ selectedDate, dates, onSelectDate }) {
  const weekDays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

  return (
    <Wrapper>
      {weekDays.map(day => (
        <StyledDay key={day}>{day}</StyledDay>
      ))}
      {!!dates?.length && dates.map(date => {
        const className = date.toDateString() === selectedDate.toDateString() ?
          'selected' :
          date.getMonth() !== selectedDate.getMonth() ?
            'inactive' :
            '';
        return (
          <StyledDate
            key={date.toString()}
            className={className}
            onClick={() => onSelectDate(date)}
          >{date.getDate()}</StyledDate>
          );
      })}
    </Wrapper>
  );
};

export default Calendar;
