import { Box, Typography, Link } from '@mui/material';
import { useStateContext } from '../../contexts/StateContextProvider';
export default function SearchResults() {
  const { results, loading } = useStateContext();
  return (
    <Box>
      {results?.results?.map(({ link, title, description }, index) => (
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
      ))}
    </Box>
  );
}
