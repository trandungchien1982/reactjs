// src/hooks/useCounter.js
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  // Hook trả về những gì mà component cần sử dụng
  console.log(" -------------------- ");
  console.log(" -- Try to return the current values inside useCounter() ... " + new Date());

  return {
    count,
    increment,
    decrement,
    reset
  };
}

export default useCounter;
