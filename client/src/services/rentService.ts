import type { RentType } from '../types/RentType';
import apiConfig from './apiConfig';

export async function getRentsService(): Promise<RentType[]> {
  return apiConfig
    .get<RentType[]>('/rents')
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
export async function getRentService(id: number): Promise<RentType> {
  return apiConfig
    .get<RentType>(`/rents/${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
