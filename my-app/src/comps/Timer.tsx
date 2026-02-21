import React, { useRef, useEffect, useState } from 'react';

function Timer() {
  // State để hiển thị thời gian (sẽ gây re-render)
  const [seconds, setSeconds] = useState(0);

  // Ref để lưu trữ ID của timer (không gây re-render)
  const timerIdRef = useRef(null);

  useEffect(() => {
    // Khởi tạo timer và lưu ID vào ref.current
    timerIdRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1); // Cập nhật state, gây re-render
    }, 1000);

    console.log('Timer started, ID:', timerIdRef.current);

    // Cleanup function: xóa timer khi component unmount hoặc effect chạy lại
    return () => {
      console.log('Timer cleared, ID:', timerIdRef.current);
      clearInterval(timerIdRef.current);
    };
  }, []); // Dependency array rỗng: chỉ thiết lập timer một lần khi mount

  return (
    <div>
      <p>Đã trôi qua {seconds} giây.</p>
      <p>(Kiểm tra console log để xem ID của timer được lưu trong ref)</p>
    </div>
  );
}

export default Timer;