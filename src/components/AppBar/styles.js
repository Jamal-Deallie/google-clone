import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


export const Logo = styled('img')({
  height: 'auto',
  aspectRatio: 'auto 92 / 30',
  width: '17rem',
});

export const InnerContainer = styled(Box)({
  display: 'flex',

  height: '100%',
  gap: '5rem',

  width: '100%',
  maxWidth: '90rem',
  flexGrow: 2,
  //   display: $display ? $display : 'none',
});

export const InputWrapper = styled(Box)({
  width: '100%',
});

export const NavBar = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  padding: '3rem 0 2rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const BarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: '2rem',
}));

export const OptionsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  minWidth: '35rem',
  gap: '3rem',
});
