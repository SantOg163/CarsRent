import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CarType } from '../../types/CarType';
import { getCarService, getCarsService } from '../../services/carService';

export const getAllCarsThunk = createAsyncThunk<CarType[]>('rents/getAllCarsThunk', async () => {
  const data = await getCarsService();
  return data;
});
export const getCarThunk = createAsyncThunk<CarType, number>(
  'rents/getCarThunk',
  async (id) => {
    const data = await getCarService(id);
    return data;
  },
);
