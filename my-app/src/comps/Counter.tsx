
import React from 'react';
import useCounter from './useCounter'; // Import Custom Hook

function Counter() {
  const { count, increment, decrement, reset } = useCounter(10); // Sử dụng Custom Hook

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
