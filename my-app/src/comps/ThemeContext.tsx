// src/contexts/ThemeContext.js
import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'light', // Giá trị mặc định
  toggleTheme: () => {}, // Hàm rỗng mặc định
});

export default ThemeContext;
