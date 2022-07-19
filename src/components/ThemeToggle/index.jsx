import { useContext } from 'react';
import { toggleTheme } from '../../features/themeSlice';
import { FormControlLabel } from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContextProvider';
import { MaterialUISwitch } from './styles';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  console.log(darkMode);
  const handleChange = event => {};

  return (
    <FormControlLabel
      control={
        <MaterialUISwitch
          sx={{ m: 1 }}
          checked={null}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
      label='MUI switch'
    />
  );
}
