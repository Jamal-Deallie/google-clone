import { createTheme } from '@mui/material/styles';

const secondaryDark = '#26323';
const secondaryColor = '#253232';

const primaryColor = '#FCF4EC';

const warningColor = '#DC756C';
const successColor = '#56C090';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#1c1c1c',
      dark: '#000000',
      light: '#434343',
    },
    secondary: {
      main: '#1c1c1c',
      dark: '#000000',
      light: '#434343',
    },
    warning: {
      main: warningColor,
    },
    success: {
      main: successColor,
    },
  },
  background: {
    default: 'linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%)',
  },
  typography: {
    fontFamily: ["'balboa, sans-serif', 'open-sans, sans-serif'"].join(','),
    h1: {
      fontFamily: 'balboa, sans-serif',
      fontSize: '5.4rem',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '2rem',
      fontFamily: 'Roboto,arial,sans-serif',
      color: '#1c1c1c',
    },
    body2: {
      fontSize: '1.4rem',
      fontFamily: 'Roboto,arial,sans-serif',
      color: '#1c1c1c',
    },
  },
  components: {
    MuiButton: {
      fontSize: '1.6rem',
      fontFamily: ['open-sans,sans-serif'],
    },
    defaultProps: {
      disableElevation: true,
      disableFocusRipple: true,
      disableRipple: true,
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1c1c1c',
      dark: '#000000',
      light: '#434343',
    },
    secondary: {
      main: '#1c1c1c',
      dark: '#000000',
      light: '#434343',
    },
    warning: {
      main: warningColor,
    },
    success: {
      main: successColor,
    },
  },
  background: {
    default: 'linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%)',
  },
  typography: {
    fontFamily: ["'balboa, sans-serif', 'open-sans, sans-serif'"].join(','),
    h1: {
      fontFamily: 'balboa, sans-serif',
      fontSize: '5.4rem',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '2rem',
      fontFamily: 'Roboto,arial,sans-serif',
      color: '#1c1c1c',
    },
    body2: {
      fontSize: '1.4',
      fontFamily: 'Roboto,arial,sans-serif',
    },
  },
  components: {
    MuiButton: {
      fontSize: '1.6rem',
      fontFamily: ['open-sans,sans-serif'],
    },
    defaultProps: {
      disableElevation: true,
      disableFocusRipple: true,
      disableRipple: true,
    },
  },
});
