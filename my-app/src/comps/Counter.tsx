import { useState, useMemo, useReducer } from 'react';
import reducer, { initialState } from './utils';

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <div style={{border: "5px solid lightgreen"}}>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    );
}

export default Calculator;