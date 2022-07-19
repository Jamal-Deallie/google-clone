import { createTheme } from '@mui/material/styles';

const secondaryDark = '#26323';
const secondaryColor = '#253232';

const primaryColor = '#FCF4EC';

const warningColor = '#DC756C';
const successColor = '#56C090';
const tertiaryColor = '#8ab4f8';

const tertiaryDark = '#1a73e8';
// #202124
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#1c1c1c',
      dark: '#202124',
      light: '#434343',
      medium: '#202124',
    },
    secondary: {
      main: '#e8eaed',
      dark: '#9aa0a6',
      medium: '#e8eaed',
      light: '#434343',
    },
    warning: {
      main: warningColor,
    },
    success: {
      main: successColor,
    },
    tertiary: {
      main: tertiaryColor,
    },
  },
  // background: {
  //   default: '#000000',
  // },

  typography: {
    body1: {
      fontSize: '2rem',
      fontFamily: 'Roboto,arial,sans-serif',
      color: '#e8eaed',
    },
    body2: {
      fontSize: '2.4rem',
      fontFamily: 'Roboto,arial,sans-serif',
      color: '#e8eaed',
    },
  },
  components: {
    MuiButton: {
      // variants: [
      //   {
      //     props: { variant: 'bold' },
      //     style: {
      //       color: '#202124',
      //       background: '#8ab4f8',
      //       padding: '9px 15px',
      //       maxWidth: '120px',
      //       width: '100%',
      //       border: '1px solid transparent',
      //       fontWeight: 500,
      //       letterSpacing: '0.25px',
      //       fontSize: '1.8rem',
      //     },
      //   },
      // ],
      variants: [
        {
          props: { variant: 'bold' },
          style: {
            color: '#ffffff',
            display: 'inline-block',
            background: '#303134',
            border: '1px solid #303134',
            textTransform: 'capitalize',
            fontFamily: 'Roboto, arial, sans-serif;',
            borderRadius: '4px',
            height: '56px',
            fontSize: '1.8rem',
            padding: '0 2rem',
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      dark: '#f8f9fa',
      light: '#434343',
    },
    secondary: {
      main: '#000000',
      dark: '#000000',
      light: '#434343',
    },
    tertiary: {
      main: tertiaryDark,
      dark: tertiaryColor,
    },
    warning: {
      main: warningColor,
    },
    success: {
      main: successColor,
    },
  },
  background: {
    default: '#000000',
  },
  typography: {
    body1: {
      fontSize: '2rem',
      fontFamily: 'Roboto,arial,sans-serif',
      color: '#1c1c1c',
    },
    body2: {
      fontSize: '1.4',
      fontFamily: 'Roboto,arial,sans-serif',
      color: '#1c1c1c',
    },
    body3: {
      color: '#1c1c1c',
      fontSize: '1.8rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'bold' },
          style: {
            color: '#202124',
            background: tertiaryDark,
            padding: '9px 15px',
            maxWidth: '120px',
            width: '100%',
            border: '1px solid transparent',
            fontWeight: 500,
            letterSpacing: '0.25px',
            fontSize: '1.8rem',
            '&:hover': {
              background: tertiaryColor,
            },
          },
        },

        {
          props: { variant: 'secondary' },
          style: {
            color: secondaryColor,
            display: 'inline-block',
            background: '#f8f9fa',
            border: '1px solid #f8f9fa',
            textTransform: 'capitalize',
            fontFamily: 'Roboto, arial, sans-serif;',
            borderRadius: '4px',
            height: '56px',
            fontSize: '1.8rem',
            padding: '0 2rem',
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});
