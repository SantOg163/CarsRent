import type { UserType } from '../types/UserType';
import apiConfig from './apiConfig';

export async function getUsersService(): Promise<UserType[]> {
  return apiConfig
    .get<UserType[]>('/users')
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
export async function getUserService(id: number): Promise<UserType> {
  return apiConfig
    .get<UserType>(`/users/${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
