// src/contexts/ThemeProvider.js
import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [login, setLoginValue] = useState('');

  const contextValue = {
    isLogin: login,
    setLogin: () => {
        setLoginValue('HAS-LOGIN');
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;