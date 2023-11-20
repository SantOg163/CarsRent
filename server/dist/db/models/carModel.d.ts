import { Model } from 'sequelize-typescript';
import Brand from './brand';
import Car from './car';
export declare class CarModel extends Model<CarModel> {
    brandId: number;
    name: string;
    Brand: Brand;
    Cars: Car[];
    static associate(models: any): void;
}
export default CarModel;
