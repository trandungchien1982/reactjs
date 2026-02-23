import { useState, useMemo } from 'react';

function Calculator() {
  const [number, setNumber] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [count, setCount] = useState(10);

  // Một phép tính tốn kém
  const calculateExpensiveValue = (num: number, mul: number) => {
    let start = Date.now();
    console.log('Performing expensive calculation... ' + new Date());
    // Giả lập độ trễ tính toán
    let i = 0;
    while (i < 1000000000) i++;
    console.log("   ----> Finish expensive calc : totalTime = " + (Date.now() - start));
    return num * mul;
  };

  // Sử dụng useMemo để ghi nhớ kết quả tính toán
  // Kết quả chỉ được tính lại khi number hoặc multiplier thay đổi
  const expensiveValue = useMemo(() => {
    console.log(" -- Try to calculate again with number: " + number + ", multiplier: " + multiplier);
    return calculateExpensiveValue(number, multiplier);
  }, [number, multiplier]); // Dependencies: number và multiplier

  console.log('Calculator component re-rendered');

  return (
    <div>
      <h1>Expensive Calculation</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(count + 1)}>Increase counting : {count}</button>
      <p>Result: {expensiveValue}</p>
       <p>Multiplier: {multiplier}</p> {/* Hiển thị multiplier để thấy re-render */}
    </div>
  );
}

export default Calculator;