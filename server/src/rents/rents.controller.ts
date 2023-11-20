import { Controller, Get, Param } from '@nestjs/common';
import Rent from 'db/models/rent';

@Controller('rents')
export class RentsController {
  @Get()
  getRents() {
    return Rent.findAll();
  }
  @Get('/:id')
  getRent(@Param('id') id: number) {
    return Rent.findByPk(id);
  }
}
