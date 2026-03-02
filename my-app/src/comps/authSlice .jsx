import { createSlice } from '@reduxjs/toolkit';

// Định nghĩa trạng thái ban đầu
const initialState = {
  isAuthenticated: false,
};

// Tạo slice sử dụng createSlice
export const authSlice = createSlice({
  name: 'auth', // Tên slice
  initialState,    // Trạng thái ban đầu
  reducers: {
    // Các reducer functions xử lý logic đồng bộ
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    // Thêm các reducers khác nếu cần
  },
  // extraReducers: (builder) => { ... } // Dùng để xử lý async actions
});

// createSlice tự động tạo action creators dựa trên tên của các reducer
export const { login, logout } = authSlice.actions;

// Xuất reducer cho store
export default authSlice.reducer;