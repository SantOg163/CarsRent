import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../types/UserType';
import { getAllUserThunk, getUserInfoThunk } from '../actions/userActions';

// Define a type for the slice state

// Define the initial state using that type
const initialState: UserType[] = [];

export const userSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUserThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getUserInfoThunk.fulfilled, (state, action) =>
      state.map((user) => (user.id === action.payload.id ? action.payload : user)),
    );
  },
});
export default userSlice.reducer;
