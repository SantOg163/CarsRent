import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getAllUserThunk } from '../../features/actions/userActions';
import UserCard from './UserCard';

export default function UserList(): JSX.Element {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (users.length === 0) {
      void dispatch(getAllUserThunk());
    }
  }, []);
  return <div>{users && users?.map((user) => <UserCard key={user.id} user={user} />)}</div>;
}
