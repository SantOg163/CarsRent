import { Controller, Get, Param } from '@nestjs/common';
import User from 'db/models/user';
import Car from 'db/models/car';
import Rent from 'db/models/rent';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return User.findAll();
  }
  @Get('/:id')
  async getUser(@Param('id') id: number) {
    const user = JSON.parse(
      JSON.stringify(
        await User.findOne({
          where: { id },
          include: [{ model: Car }, { model: Rent }],
        }),
      ),
    );

    return { ...user, fullInfo: true };
  }
}
