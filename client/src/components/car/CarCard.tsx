import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import type { RentType } from '../../types/RentType';
import type { CarType } from '../../types/CarType';

type CarCardProps = {
  car: CarType;
};
function CarCard({ car }: CarCardProps): JSX.Element {
  return (
    <NavLink to={`/cars/${car.id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {car.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brand: {car.CarModel.Brand.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Model: {car.CarModel.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              UserId: {car.userId}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
}
export default React.memo(CarCard);
