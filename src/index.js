import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from './lib';

const App = () => (
  <div>
    <h1>Hello React</h1>
    <DatePicker />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
