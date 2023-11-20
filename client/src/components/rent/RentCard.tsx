import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import type { RentType } from '../../types/RentType';

type RentCardProps = {
  rent: RentType;
};
function RentCard({ rent }: RentCardProps): JSX.Element {
  return (
    <NavLink to={`/rents/${rent.id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {rent.id} - {rent.createdAt.slice(0, rent.createdAt.indexOf('T'))}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {rent.carId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {rent.userId}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
}
export default React.memo(RentCard);
