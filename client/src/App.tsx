import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import UserList from './components/user/UserList';
import NavBar from './components/UI/NavBar';
import UserPage from './components/user/UserPage';
import RentList from './components/rent/RentList';
import RentPage from './components/rent/RentPage';
import CarList from './components/car/CarList';
import CarPage from './components/car/CarPage';

function App(): JSX.Element {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/rents" element={<RentList />} />
        <Route path="/rents/:id" element={<RentPage />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:id" element={<CarPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
