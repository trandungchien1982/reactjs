import { useState, useEffect, useCallback } from 'react'

// Custom Hook
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // Sử dụng useCallback để tránh tạo lại hàm toggle mỗi lần render
  const toggle = useCallback(() => {
    console.log(" Ben trong ham toggle() : currentValue : " + value);
    setValue(currentValue => !currentValue);
  }, []); // dependencies array rỗng vì không phụ thuộc vào biến nào thay đổi

  // Trả về trạng thái hiện tại và hàm để đổi trạng thái
  return [value === true ? "VISIBLE" : "HIDDEN", value, toggle];
}

export default useToggle;