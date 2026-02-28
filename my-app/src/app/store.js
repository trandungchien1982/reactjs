import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../comps/userSlice';

export const store = configureStore({
  reducer: {
    // Các slice reducers được kết hợp lại ở đây
    counter: userReducer,
  },
  // configureStore tự động thêm redux-thunk và bật Redux DevTools extension
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myCustomMiddleware), // Thêm middleware khác nếu cần
  // devTools: process.env.NODE_ENV !== 'production', // Bật/tắt DevTools theo môi trường
});
