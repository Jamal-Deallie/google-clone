import { useEffect, useMemo } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useStateContext } from '../../contexts/StateContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchResults() {
  const { results, loading, getResults } = useStateContext();
  const location = useLocation();

  const searchTerm = useMemo(
    () => location.search.split('=').at(-1),
    [location]
  );



  return (
    <Box>
      <h1>Search Results</h1>
      {/* {results?.results?.map(({ link, title, description }, index) => (
        <Box
          key={index}
          sx={{
            maxWidth: '852px',
            width: '100%',
            ml: '150px',
            my: '40px',
          }}>
          <Link href={link} target='_blank' rel='noreferrer' underline='none'>
            <Typography variant='body2'>
              {link.length > 30 ? link.substring(0, 35) : link}
            </Typography>
          </Link>
          <Link
            href={link}
            target='_blank'
            rel='noreferrer'
            underline='hover'
            sx={{ my: '15px' }}>
            <Typography sx={{ fontSize: '2rem' }}>{title}</Typography>
          </Link>
          <Typography variant='body2'>{description}</Typography>
        </Box>
      ))} */}
    </Box>
  );
}
