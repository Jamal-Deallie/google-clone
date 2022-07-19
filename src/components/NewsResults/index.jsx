import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Image } from './styles';
import Moment from 'react-moment';

export default function NewsResults() {
  const total = 36900000;

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  const date = randomDate(new Date(2020, 0, 1), new Date());

  function separator(numb) {
    var str = numb.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
  }
  return (
    <Box sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
      <Container sx={{ py: 2.5 }}>
        <Box sx={{ pb: 2.5 }}>
          <Typography>{`About ${separator(total)} results`}</Typography>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Typography sx={{ textTransform: 'lowercase' }}>
              www.reviews.org › Mobile
            </Typography>
          </Box>
          <Typography>Best iPhone Models of 2022</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box>
              <Link to='/'>
                <Image src='images/video.png' alt='Video Placeholder' />
              </Link>
            </Box>
            <Box
              sx={{
                maxWidth: '48rem',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 3,
              }}>
              <Typography>
                Duis pretium quam luctus, dignissim lorem id, vehicula diam.
                Nunc semper neque ac tempus congue.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>www.reviews.org</Typography>
                <Moment format='MMM, DD YYYY'>{date}</Moment>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
