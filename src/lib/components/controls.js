import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: controls;
`;

const StyledBtn = styled.button`
  border: none;
  background-color: rgba(0,0,0,0);
  font-weight: 700;
  font-size: 1.3em;
  color: #888;
  cursor: pointer;
`;

const StyledSelect = styled.select`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const Controls = function({
  month: selectedMonth,
  year: selectedYear,
  methods,
}) {

  const monthMap = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <Wrapper>
      <StyledBtn onClick={methods.prevMonth}>{'<'}</StyledBtn>
      <StyledSelect
        value={selectedMonth}
        onChange={(e) => methods.setMonth(e.target.value)}
      >
        {
          monthMap.map((month, i) => (
            <option key={month} value={i}>{month}</option>
          ))
        }
      </StyledSelect>
      <StyledSelect
        value={selectedYear}
        onChange={(e) => methods.setYear(e.target.value)}
      >
        {Array.apply(null, Array(101)).map((_, i) => (
          <option key={`year-${i+1950}`}>{i + 1950}</option>
        ))}

      </StyledSelect>
      <StyledBtn onClick={methods.nextMonth}>{'>'}</StyledBtn>
    </Wrapper>
  );
};

export default Controls;
