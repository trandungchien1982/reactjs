import React, { useRef } from 'react';

function ScrollToDiv() {
  const targetDivRef = useRef(null); // Ref để trỏ tới div mục tiêu

  const handleScrollToDiv = () => {
    if (targetDivRef.current) {
      // Sử dụng phương thức scrollIntoView() của phần tử DOM
      console.log(" -- Try to scroll to view : " + targetDivRef.current);
      targetDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <p>Nội dung rất dài...</p>
      <p>...cuộn xuống dưới để thấy nút...</p>
      {/* Rất nhiều nội dung ở đây */}
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>

      {/* Phần tử mà chúng ta muốn cuộn tới */}
      <div ref={targetDivRef} style={{ border: '1px solid blue', padding: '20px' }}>
        <h3>Đây là phần tử mục tiêu!</h3>
        <p>Chúng ta sẽ cuộn đến đây khi click nút.</p>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <p>...vẫn còn nội dung nữa.</p>

      <button onClick={handleScrollToDiv}>Cuộn đến phần tử mục tiêu</button>
    </div>
  );
}

export default ScrollToDiv;