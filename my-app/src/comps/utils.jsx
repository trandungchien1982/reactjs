import React, { useState, useEffect } from 'react';

// Custom Hook để theo dõi vị trí chuột
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position; // Hook trả về dữ liệu/logic
}

export default useMousePosition;