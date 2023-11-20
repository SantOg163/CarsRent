import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import type { RentType } from '../../types/RentType';
import { getRentThunk } from '../../features/actions/rentActions';

export default function RentPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const rents = useAppSelector((state) => state.rents);
  const [rent, setRent] = useState<RentType | undefined>(
    Array.isArray(rents) ? rents.find((el) => el.id === Number(id)) : undefined,
  );
  useEffect(() => {
    if (!rent) {
      void dispatch(getRentThunk(Number(id))).then((res) => setRent(res.payload as RentType));
    }
  }, []);
  return (
    <div>
      {rent && (
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {rent.id} - {rent.createdAt.slice(0, rent.createdAt.indexOf('T'))}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <NavLink to={`/users/${rent.userId}`} style={{ textDecoration: 'none' }}>
                  UserId: {rent.userId}
                </NavLink>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <NavLink to={`/cars/${rent.carId}`} style={{ textDecoration: 'none' }}>
                  CarId: {rent.carId}
                </NavLink>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}
