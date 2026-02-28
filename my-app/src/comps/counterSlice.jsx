import { createSlice } from '@reduxjs/toolkit';

// Định nghĩa trạng thái ban đầu
const initialState = {
  value: 0,
};

// Tạo slice sử dụng createSlice
export const counterSlice = createSlice({
  name: 'counter', // Tên slice
  initialState,    // Trạng thái ban đầu
  reducers: {
    // Các reducer functions xử lý logic đồng bộ
    increment: (state) => {
      // Immer cho phép chúng ta "mutate" state trực tiếp
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Thêm các reducers khác nếu cần
  },
  // extraReducers: (builder) => { ... } // Dùng để xử lý async actions
});

// createSlice tự động tạo action creators dựa trên tên của các reducer
export const { increment, decrement } = counterSlice.actions;

// Xuất reducer cho store
export default counterSlice.reducer;
