import '../index.css';
import React, { useState } from 'react';
import Calculator from './ButtonComponent';
import calculate from '../logic/calculate';

function CalculatorDesign() {
  const initialState = {
    total: null,
    next: null,
    operation: null,
  };

  const [state, setState] = useState(initialState);

  // Array destructuring

  const { total, operation, next } = state;

  // button click event
  const eventhandler = (event, name) => {
    const updateState = calculate(state, name);
    setState(updateState);
  };
  return (
    <div className="calculator">
      <div className="result">
        {total}
        {' '}
        {operation}
        {' '}
        {next}
        {' '}
      </div>
      <div className="keyboard">
        <Calculator onClick={eventhandler} name="AC" className="nosign" />
        <Calculator onClick={eventhandler} name="+/-" className="nosign" />
        <Calculator onClick={eventhandler} name="%" className="nosign" />
        <Calculator onClick={eventhandler} name="÷" className="side" />
        <Calculator onClick={eventhandler} name="7" className="nosign" />
        <Calculator onClick={eventhandler} name="8" className="nosign" />
        <Calculator onClick={eventhandler} name="9" className="nosign" />
        <Calculator onClick={eventhandler} name="*" className="side" />
        <Calculator onClick={eventhandler} name="4" className="nosign" />
        <Calculator onClick={eventhandler} name="5" className="nosign" />
        <Calculator onClick={eventhandler} name="6" className="nosign" />
        <Calculator onClick={eventhandler} name="-" className="side" />
        <Calculator onClick={eventhandler} name="1" className="nosign" />
        <Calculator onClick={eventhandler} name="2" className="nosign" />
        <Calculator onClick={eventhandler} name="3" className="nosign" />
        <Calculator onClick={eventhandler} name="+" className="side" />
        <Calculator onClick={eventhandler} name="0" className="span" />
        <Calculator onClick={eventhandler} name="." className="nosign" />
        <Calculator onClick={eventhandler} name="=" className="side" />

      </div>
    </div>
  );
}

export default CalculatorDesign;
