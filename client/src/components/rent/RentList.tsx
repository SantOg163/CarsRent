import React, { useEffect } from 'react';
import RentCard from './RentCard';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getAllRentsThunk } from '../../features/actions/rentActions';

export default function RentList(): JSX.Element {
  const rents = useAppSelector((state) => state.rents);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (rents.length === 0) {
      void dispatch(getAllRentsThunk());
    }
  }, []);
  return <div>{rents && rents?.map((rent) => <RentCard key={rent.id} rent={rent} />)}</div>;
}
