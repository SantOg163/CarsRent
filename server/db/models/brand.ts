import { Model, DataType, Table, Column, HasMany } from 'sequelize-typescript';
import CarModel from './carModel';

@Table({
  modelName: 'Brand',
})
export class Brand extends Model<Brand> {
  @Column({
    type: DataType.STRING,
  })
  name!: string;
  @HasMany(() => CarModel)
  CarModels!: CarModel[];
  static associate(models: any) {
    this.hasMany(models.CarModel, { foreignKey: 'brandId' });
  }
}
export default Brand;
