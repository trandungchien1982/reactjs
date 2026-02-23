// src/components/ThemedDiv.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemedDiv = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '20px',
      marginTop: '20px',
      border: '1px solid ' + (theme === 'light' ? '#ccc' : '#666')
    }}>
      {children}
    </div>
  );
};

export default ThemedDiv;
