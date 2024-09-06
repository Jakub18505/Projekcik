import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#FFD700' }}>
    <Toolbar>
      <Typography variant="h4" sx={{ color: 'black' }}>
        Wyszukiwarka przepisów
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;