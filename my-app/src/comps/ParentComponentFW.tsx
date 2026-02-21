import React, { useRef, forwardRef, useEffect } from 'react';

// Component con MyInput sử dụng forwardRef
// ref là tham số thứ hai được forwardRef cung cấp
const MyInput = forwardRef((props, ref) => {
  // Đính kèm ref nhận từ component cha vào thẻ input DOM bên trong
  return (
    <>
      <p>Item 01: <input type="text" /> </p>
      <hr />
      <div style={{border: "1px solid red"}}>
        <p>Item 02: <input ref={ref} type="text" {...props} /> </p>
      </div>
    </>

  );

});

// Component cha sử dụng MyInput và cần focus vào input bên trong
function ParentComponentFW() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Bây giờ inputRef.current sẽ trỏ đến thẻ input DOM bên trong MyInput
    if (inputRef.current) {
      console.log(" -- Try to set background = 'red' for inputRef - forwardRef ...");
      inputRef.current.style.background = 'cyan';
      inputRef.current.style.border = "5px solid yellow";
    }
  }, []);

  return (
    <div>
      <h3>Sử dụng forwardRef</h3>
      <MyInput ref={inputRef} placeholder="The inputRef component!" title="Tooltip for inputRef and forwardRef" />
    </div>
  );
}

export default ParentComponentFW;