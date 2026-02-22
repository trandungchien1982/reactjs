
import React, { useState } from 'react';
import Button from './Button';

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');

  // Hàm này được tạo lại mỗi khi Parent re-render
  const handleButtonClick = () => {
    setCount(count + 1);
    console.log('Button clicked!');
  };

  console.log('Parent component re-rendered');

  return (
    <div>
      <h1>Count: {count}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Truyền hàm handleButtonClick xuống component con */}
      <Button handleClick={handleButtonClick}>Click me</Button>
      {/* Button khác không dùng hàm memoized */}
      <Button handleClick={() => console.log('Another button clicked')}>Another Button</Button>
    </div>
  );
}

export default Parent;