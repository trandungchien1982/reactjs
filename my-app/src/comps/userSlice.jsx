import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: [],
  loading: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Reducers đồng bộ khác (nếu có)
  },
});

export default userSlice.reducer;