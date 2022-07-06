import { styled } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';


export const SearchBarSection = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  backgroundColor: 'transparent',

  '&:hover': {
    backgroundColor: 'transparent',
  },
  border: `1px solid #DFE1E5`,
  alignItems: 'center',
  borderRadius: '30px',
  marginLeft: 0,
  width: '100%',
  padding: '1rem 0 1rem 2.5rem',
  height: '62px',
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  width: '2.5rem',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#FFFFFF',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(.5em + ${theme.spacing(1)})`,
    backgroundColor: 'transparent',
    fontSize: '1.8rem',
    color: '#FFFFFF',
  },
}));

export const Form = styled('form')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  margin: '0 auto',
}));

export const ButtonContainer = styled(Box, {
  name: 'StyledBox',
  slot: 'Wrapper',
  shouldForwardProp: prop => prop !== '$display',
})(({ $display }) => ({
  marginTop: '2.5rem',
  justifyContent: 'center',
  gap: '2.5rem',
  display: $display ? $display : 'none',
}));

export const CustomButton = styled('button')(({ theme }) => ({
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
}));

// background-color: #303134;
// border: 1px solid #303134;
// border-radius: 4px;
// color: #e8eaed;
// font-family: Roboto,arial,sans-serif;
// font-size: 14px;
// margin: 11px 4px;
// padding: 0 16px;
// line-height: 27px;
// height: 36px;
// min-width: 54px;
// text-align: center;
// cursor: pointer;
// user-select: none;
