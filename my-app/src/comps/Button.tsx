import React, { useState } from 'react';

// Sử dụng React.memo để tối ưu
const Button = React.memo(({ handleClick, children }) => {
  console.log('Button component re-rendered:', children);
  return <button onClick={handleClick}>{children}</button>;
});


export default Button;