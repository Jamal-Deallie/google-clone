import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const InnerContainer = styled(Box)({
  margin: '0 auto',
  height: '100%',
  padding: '0 5rem',
});

export const NavOption = styled(NavLink, {
  shouldForwardProp: prop => prop !== 'theme' && '$url',
})(({ theme, $url }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: theme.palette.secondary.dark,
  paddingBottom: '.5rem',
  '&.active': {
    borderBottom: '3px solid #8ab4f8',
    width: 'calc(auto -2rem)',
    color: '#8ab4f8',
  },
  '&::before': {
    content: $url ? $url : 'url(images/icons/google_search.svg)',
    height: '27.5px',
    width: '27.5px',
    marginRight: '1rem',
  },
}));

export const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '4rem',
}));

export const ResultsHeader = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  paddingBottom: '2rem',
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
}));


