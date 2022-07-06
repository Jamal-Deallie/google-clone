import { styled } from '@mui/material/styles';
import { Container, Typography, Button, Stack, Box } from '@mui/material';

export const HomeSection = styled(Box)({
  background: '#202123',
  height: '100vh',
});

export const HomeHeader = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem calc(8px + 1.5625vw)',
});
export const Logo = styled('img')({
  display: 'block',
  textAlign: 'center',
  margin: '0 auto',
});

export const HeaderOption = styled(Typography)(({ theme }) => ({
  color: '#bdc1c6',
  fontSize: '1.8rem',
  fontWeight: 400,
}));

export const Image = styled('img')({
  width: '660px',
  margin: '0 auto',
  display: 'block',

});

export const ImageWrap = styled(Box)({
  width: '645px',
  height: '24rem',
  borderRadius: '1rem',
  margin: '0 auto',
  marginBottom: '3.5rem',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ButtonContainer = styled(Stack)({
  justifyContent: 'center',
  alignItems: 'center',
});

export const OptionWrapper = styled(Box)({
  display: 'flex',
  gap: '4rem',
  width: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CustomButton = styled(Button)(({ theme }) => ({
  color: '#000000',
  display: 'inline-block',
  background: '#8ab4f8',
  border: '1px solid #8ab4f8',
  textTransform: 'capitalize',
  fontFamily: 'Roboto, arial, sans-serif;',
  borderRadius: '4px',
  height: '56px',
  width: '135px',
  fontSize: '1.8rem',
  padding: '0 2rem',
  '&:hover': {
    color: '#bdc1c6',
  },
}));

export const InputWrapper = styled(Container)({
  '&.MuiContainer-root': {
    maxWidth: '90rem',
  },
});
