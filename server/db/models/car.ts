import {
  Model,
  DataType,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import User from './user';
import Rent from './rent';
import CarModel from './carModel';

@Table({
  modelName: 'Car',
})
export class Car extends Model<Car> {
  @ForeignKey(() => CarModel)
  @Column({
    type: DataType.INTEGER,
  })
  modelId!: number;
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId!: number;

  @BelongsTo(() => User)
  User!: User;
  @HasMany(() => Rent)
  Rents!: Rent[];
  @BelongsTo(() => CarModel)
  CarModel!: CarModel;

  static associate(models: any) {
    this.belongsTo(models.CarModel, { foreignKey: 'modelId' });
    this.belongsTo(models.User, { foreignKey: 'userId' });
    this.hasMany(models.Rent, { foreignKey: 'carId' });
  }
}
export default Car;
