import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRentService, getRentsService } from '../../services/rentService';
import type { RentType } from '../../types/RentType';

export const getAllRentsThunk = createAsyncThunk<RentType[]>('rents/getAllRentThunk', async () => {
  const data = await getRentsService();
  return data;
});
export const getRentThunk = createAsyncThunk<RentType, number>(
  'rents/getRentThunk',
  async (id) => {
    const data = await getRentService(id);
    return data;
  },
);
