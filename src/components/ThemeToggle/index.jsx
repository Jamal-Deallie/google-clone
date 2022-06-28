import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../features/themeSlice';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

export default function ThemeToggle() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
      }}>
      <IconButton onClick={toggle}>
        {theme.darkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}
