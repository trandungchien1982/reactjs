
import { createContext } from 'react';

const mainData = {
  hasLogin: false,
};
const AuthContext = createContext({
  hasLogin: '', // Giá trị mặc định
  setLogin: () => {},
});

export default AuthContext;