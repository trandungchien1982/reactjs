import { createSlice } from '@reduxjs/toolkit';
// import User from './User';
import { fetchUsers } from './userThunk';

// interface UserState {
//     entities: User[];
//     loading: 'idle' | 'pending' | 'succeeded' | 'failed';
//     error: string | null;
// }

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
  extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          console.log("PENDING  - the case of fetchUsers.pending");
          state.loading = 'pending';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          console.log("SUCCESS - the case of fetchUsers.fullfilled");
          state.loading = 'succeeded';
          state.data = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          console.log("REJECT - the case of fetchUsers.rejected");
          console.log(action.error);
          state.loading = false
          state.error = action.error.message
        })
    }
});

export default userSlice.reducer;
