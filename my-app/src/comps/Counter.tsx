
import React, { useState, useEffect } from 'react';

function Counter() {
  // Khai báo một state variable tên là 'count'
  // với giá trị khởi tạo là 0.
  // 'count' sẽ là giá trị hiện tại, 'setCount' là hàm cập nhật.
  const [count, setCount] = useState(0);
  const [countDbClick, setCountDbClick] = useState(0);
  const [countTmpClick, setCountTmpClick] = useState(0);

  const handleDbClick = () => {
    setCountDbClick((val) => val + 1);
  }

  useEffect(() => {
    console.log(" -- Call lan dau tien sau khi Comp Render xong ... MOUNTING");
  }, []);

  const updDbClick = (val) => val + 1;

  useEffect(() => {
      console.log(" -- Call sau khi count thay doi : " + count);
      for (let i = 0; i < 10; i++) {
        setCountDbClick(updDbClick);
        console.log("-- current countDbClick: " + countDbClick);
      }

      for (let j = 0; j < 20; j++) {
        setCountDbClick(updDbClick);
        console.log("-- current countDbClick: " + countDbClick);
      }
  }, [count]);

  useEffect(() => {
    console.log(" -- Call sau khi countDbClick thay doi : " + countDbClick);
  }, [countDbClick]);

  return (
    <div>
      <p>Bạn đã click {count} lần</p>
      <p>Bạn đã DoubleClick {countDbClick} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Click vào đây
      </button>
    </div>
  );
}

export default Counter;
