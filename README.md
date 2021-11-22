# React-datepick

## Installation

This package can be installed with npm

```
npm install @tof28/react-datepicker
```
or yarn

```
yarn add @tof28/react-datepicker
```

## Usage

```JSX
  import DatePicker from '@tof28/react-datepicker';

  <DatePicker
    name='my-datepicker'
    selected={new Date()}
    onChange={myHandleChangeFunction}
  >
```

You can use `selected` prop to set default date.

Use `onChange` prop to add your own beavior. It will be triggered on a date selection and will receive an event with a target object.

```js
  {
    target: {
      name,
      value,
    }
  }
```
