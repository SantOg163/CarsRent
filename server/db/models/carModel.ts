import {
  Model,
  DataType,
  Column,
  Table,
  BelongsTo,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import Brand from './brand';
import Car from './car';

@Table({
  modelName: 'CarModel',
})
export class CarModel extends Model<CarModel> {
  @ForeignKey(() => Brand)
  @Column({
    type: DataType.INTEGER,
  })
  brandId!: number;

  @Column({
    type: DataType.STRING,
  })
  name!: string;
  @BelongsTo(() => Brand)
  Brand!: Brand;
  @HasMany(() => Car)
  Cars!: Car[];

  static associate(models: any) {
    this.belongsTo(models.Brand, { foreignKey: 'brandId' });
    this.hasMany(models.Car, { foreignKey: 'modelId' });
  }
}
export default CarModel;
