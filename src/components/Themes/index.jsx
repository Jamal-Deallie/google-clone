import React, { createContext, useContext, useState, useMemo } from 'react';
import { darkTheme, lightTheme } from '../../styles/customTheme';
import { ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState('false');

  const colorMode = useMemo(
    () =>
      function toggleColorMode() {
        setDarkMode(darkMode => !darkMode);
      },

    []
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
