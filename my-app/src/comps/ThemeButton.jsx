// src/components/ThemeButton.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '10px',
      border: '1px solid ' + (theme === 'light' ? '#ccc' : '#666'),
      cursor: 'pointer'
    }}>
      Chuyển sang chế độ {theme === 'light' ? 'Tối' : 'Sáng'}
    </button>
  );
};

export default ThemeButton;
