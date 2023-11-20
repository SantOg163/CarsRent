import { createAsyncThunk } from '@reduxjs/toolkit';
import type { UserType } from '../../types/UserType';
import { getUserService, getUsersService } from '../../services/userServices';

export const getAllUserThunk = createAsyncThunk<UserType[]>('users/getUsers', async () => {
  const data = await getUsersService();
  return data;
});
export const getUserInfoThunk = createAsyncThunk<UserType, number>('users/getUser', async (id) => {
  const data = await getUserService(id);
  return data;
});
