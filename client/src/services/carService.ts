import type { CarType } from '../types/CarType';
import type { RentType } from '../types/RentType';
import apiConfig from './apiConfig';

export async function getCarsService(): Promise<CarType[]> {
  return apiConfig
    .get<CarType[]>('/cars')
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
export async function getCarService(id: number): Promise<CarType> {
  return apiConfig
    .get<CarType>(`/cars/${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
