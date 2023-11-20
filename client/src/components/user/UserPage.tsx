import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import type { UserType } from '../../types/UserType';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getUserInfoThunk } from '../../features/actions/userActions';
import RentCard from '../rent/RentCard';

export default function UserPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const users = useAppSelector((state) => state.users);
  const [user, setUser] = useState<UserType | undefined>(users.find((el) => el.id === Number(id)));
  const [showRents, setShowRents] = useState(false);
  useEffect(() => {
    if (!user?.fullInfo)
      void dispatch(getUserInfoThunk(Number(id))).then((res) => setUser(res.payload as UserType));
  }, []);
  return (
    <div>
      {user && (
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
                {user.Rents && (
                  <Button onClick={() => setShowRents((prev) => !prev)}>Show Rents</Button>
                )}
              {showRents && (
                <div>
                  {user?.Rents && user?.Rents.map((rent) => <RentCard key={rent.id} rent={rent} />)}
                </div>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}
