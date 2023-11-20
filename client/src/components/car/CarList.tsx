import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getAllCarsThunk } from '../../features/actions/carActions';
import CarCard from './CarCard';

export default function CarList(): JSX.Element {
  const cars = useAppSelector((state) => state.cars);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (cars.length === 0) {
      void dispatch(getAllCarsThunk());
    }
  }, []);
  return <div>{cars && cars?.map((car) => <CarCard key={car.id} car={car} />)}</div>;
}
