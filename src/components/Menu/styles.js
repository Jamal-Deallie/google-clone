import { styled } from '@mui/material/styles';
import { Box, Switch, Radio } from '@mui/material';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  background: theme.palette.primary.medium,
}));

export const MenuContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: '45rem',
  padding: '2rem 2.4rem',
  width: '100%',
  minHeight: '100vh',
}));

export const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase + .MuiSwitch-track': {
    backgroundColor: theme.palette.secondary.medium,
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.tertiary.main,
  },
}));

export const CustomRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.secondary.medium,
  '&.Mui-checked': {
    color: theme.palette.tertiary.main,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 28,
  },
}));

export const Icon = styled('img')({
  height: '30px',
});
