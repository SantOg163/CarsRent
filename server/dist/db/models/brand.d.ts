import { Model } from 'sequelize-typescript';
import CarModel from './carModel';
export declare class Brand extends Model<Brand> {
    name: string;
    CarModels: CarModel[];
    static associate(models: any): void;
}
export default Brand;
