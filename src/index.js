import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from './lib';

const App = () => (
  <div>
    <DatePicker selected={new Date()} onChange={console.log} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
