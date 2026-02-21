
import React, { useRef, useEffect } from 'react';

function FocusInput() {
  // 1. Tạo một ref object để lưu trữ phần tử input DOM
  const inputRef = useRef(null); // Khởi tạo với null

  // 2. Sử dụng useEffect để thực hiện hành động sau khi component được mount
  useEffect(() => {
    // Kiểm tra xem inputRef.current đã trỏ đến phần tử DOM chưa
    if (inputRef.current) {
      // 3. Truy cập phần tử DOM và gọi phương thức focus()
      inputRef.current.focus();
    }
  }, []); // Dependency array rỗng đảm bảo effect chỉ chạy một lần sau khi mount

  return (
    <div>
      <label>Tên của bạn:</label>
      {/* 4. Đính kèm ref object vào thẻ input */}
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
