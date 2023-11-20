import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import type { UserType } from '../../types/UserType';

type UserCardProps = {
  user: UserType;
};
function UserCard({ user }: UserCardProps): JSX.Element {
  return (
    <NavLink to={`/users/${user.id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
}
export default React.memo(UserCard);
