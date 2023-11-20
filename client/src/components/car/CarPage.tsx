import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import type { CarType } from '../../types/CarType';
import { getCarThunk } from '../../features/actions/carActions';
import RentCard from '../rent/RentCard';

export default function CarPage(): JSX.Element {
  const { id } = useParams();
  const cars = useAppSelector((state) => state.cars);
  const dispatch = useAppDispatch();
  const [showRents, setShowRents] = useState(false);
  const [car, setCar] = useState<CarType | undefined>(cars?.find((el) => el.id === Number(id)));
  useEffect(() => {
    if (!car?.fullInfo) {
      void dispatch(getCarThunk(Number(id))).then((res) => setCar(res.payload as CarType));
    }
  }, []);
  return (
    <Card>
      {car && car?.fullInfo && (
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
            <NavLink to={`/users/${car.userId}`}>
              <Typography variant="body2" color="text.secondary">
                UserId: {car.userId}
              </Typography>
            </NavLink>
            {car.Rents && car?.Rents.length !== 0 && (
              <Button onClick={() => setShowRents((prev) => !prev)}>Show Rents</Button>
            )}
            {showRents && (
              <div>
                {car?.Rents && car?.Rents.map((rent) => <RentCard key={rent.id} rent={rent} />)}
              </div>
            )}
          </CardContent>
        </CardActionArea>
      )}
    </Card>
  );
}
