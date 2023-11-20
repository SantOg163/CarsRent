import type { RentType } from './RentType';

export type CarType = {
  id: number;
  modelId: number;
  userId: number;
  CarModel: CarModel;
  Rents?: RentType[];
  fullInfo?: boolean;
};
type CarModel = {
  id: number;
  brandId: number;
  name: string;
  Brand: Brand;
};
type Brand = {
  id: number;
  name: string;
};
