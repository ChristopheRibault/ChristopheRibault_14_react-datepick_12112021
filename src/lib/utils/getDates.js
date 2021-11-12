const getDaysArray = function(start, end) {
  for(
    var arr = [], dt = new Date(start);
    dt <= end;
    dt.setDate(dt.getDate()+1)
  ){
    arr.push(new Date(dt));
  }
  return arr;
};

const getDates = function(selectedDate) {
  const date = new Date(selectedDate);
  const month = date.getMonth();
  const year = date.getFullYear();

  const firstOfMonth = new Date(year, month);
  const firstOfDisplay = new Date(year, month, - firstOfMonth.getDay() + 1);
  const lastOfMonth = new Date(year, month + 1, 0);
  const lastOfDisplay = new Date(year, month + 1, 6 - lastOfMonth.getDay());
  const dates = getDaysArray(firstOfDisplay, lastOfDisplay);

  return {
    dates,
    month,
    year,
  };
};

export default getDates;
