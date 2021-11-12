import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from './lib';

const App = () => (
  <div>
    <DatePicker selected={new Date(2021, 0, 29)} onChange={console.log} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
