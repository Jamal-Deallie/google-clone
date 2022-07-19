import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
export const Image = styled('img')({
  height: '150px',
});

export const GridContainer = styled(Box)({
  padding: '2.5rem',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: '2rem',
});

export const ImageContainer = styled(Box)({
  width: 'inherit',
  height: '240px',
  overflow: 'hidden',
});

