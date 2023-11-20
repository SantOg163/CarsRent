import { Controller, Get, Param } from '@nestjs/common';
import Car from '../../db/models/car';
import CarModel from 'db/models/carModel';
import Brand from 'db/models/brand';
import Rent from 'db/models/rent';
import { Json } from 'sequelize/types/utils';

@Controller('cars')
export class CarsController {
  @Get('/count')
  async getCarsCount() {
    return Car.count();
  }
  @Get()
  async getCars() {
    return Car.findAll({
      include: [{ model: CarModel, include: [{ model: Brand }] }],
    });
  }
  @Get('/:id')
  async getCar(@Param('id') id: number) {
    const car = JSON.parse(
      JSON.stringify(
        await Car.findOne({
          where: { id },
          include: [
            { model: CarModel, include: [{ model: Brand }] },
            { model: Rent },
          ],
        }),
      ),
    );
    return { ...car, fullInfo: true };
  }
}
