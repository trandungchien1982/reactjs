
import React from 'react';
import useCounter from './useCounter'; // Import Custom Hook

function Counter2NewLayout() {
  const { count, increment, decrement, reset } = useCounter(100); // Sử dụng Custom Hook

  return (
    <div>
      <p>Bien dem hien tai - Count: {count}</p>
      <button onClick={increment} style={{border: "3px solid green", background: "cyan"}}>TANG+</button> <br/>
      <button onClick={decrement} style={{border: "5px solid magenta", background: "lightgreen"}}>GIAM-</button> <br/>
      <button onClick={reset} style={{border: "5px solid blue", background: "lightorange"}}>NGUYEN BAN</button> <br/>
    </div>
  );
}

export default Counter2NewLayout;
