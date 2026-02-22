
import React, { useState, useCallback } from 'react';
import Button from './Button';

function ParentWithCallback() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');
  const [value, setValue] = useState(10);

  // Hàm này chỉ được tạo lại khi 'count' thay đổi
  const handleButtonClick = useCallback(() => {
    setCount(count + 1); // Lưu ý: 'count' là dependency ngầm ở đây
    console.log('Button clicked 2 !');
  }, [count]); // count là dependency

  const handleButtonClick4 = useCallback(() => {
      setCount(count + 10); // Lưu ý: 'count' là dependency ngầm ở đây
      setValue(value - 5);
      console.log('Button clicked 2 !');
  }, [count, value]); // count, value là dependency

  console.log('Parent component re-rendered');

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>(Name: {name})</h2>
      <h2>(Value: {value})</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Truyền hàm handleButtonClick đã được ghi nhớ */}
      <Button handleClick={handleButtonClick}>Click me 2</Button>

      {/* Truyền hàm handleButtonClick4 đã được ghi nhớ */}
      <Button handleClick={handleButtonClick4}>Click me 4</Button>

      {/* Button khác không dùng hàm memoized */}
      <Button handleClick={() => console.log('Another button clicked')}>Another Button</Button>
    </div>
  );
}

export default ParentWithCallback;