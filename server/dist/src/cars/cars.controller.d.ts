import Car from '../../db/models/car';
export declare class CarsController {
    getCarsCount(): Promise<number>;
    getCars(): Promise<Car[]>;
    getCar(id: number): Promise<any>;
}
