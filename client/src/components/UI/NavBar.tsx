import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '50px' }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around',padding: '0 100px'}}>
            <NavLink to="/users" aria-current="page">
              <Button sx={{color:'white'}} color="inherit">Users</Button>
            </NavLink>
            <NavLink to="/cars" aria-current="page">
              <Button sx={{color:'white'}} color="inherit">Cars</Button>
            </NavLink>
            <NavLink to="/rents" aria-current="page">
              <Button sx={{color:'white'}} color="inherit">Rent</Button>
            </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
