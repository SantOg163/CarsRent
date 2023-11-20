import { createSlice } from '@reduxjs/toolkit';
import { getAllCarsThunk } from '../actions/carActions';
import type { CarType } from '../../types/CarType';

// Define a type for the slice state

// Define the initial state using that type
const initialState: CarType[] = [];

export const rentSlice = createSlice({
  name: 'cars',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCarsThunk.fulfilled, (state, action) => action.payload);
  },
});
export default rentSlice.reducer;
