import { createSlice } from '@reduxjs/toolkit';
import type { RentType } from '../../types/RentType';
import { getAllRentsThunk, } from '../actions/rentActions';

// Define a type for the slice state

// Define the initial state using that type
const initialState: RentType[] = [];

export const rentSlice = createSlice({
  name: 'rents',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRentsThunk.fulfilled, (state, action) => action.payload);
  },
});
export default rentSlice.reducer;
