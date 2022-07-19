import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Image, GridContainer, ImageContainer } from './styles';
import { useStateContext } from '../../contexts/StateContextProvider';

export default function ImagesResults() {
  const { results, loading, getResults } = useStateContext();

  console.log(results.image_results);
  const myArray = 'Elbilar, solenergi och ren...   www.tesla.com'.split('...');

  function splitFunction(str) {
    return str.split('...');
  }

  return (
    <Box sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
      <GridContainer>
        {results?.image_results?.map(
          ({ link, title, description, image }, index) => (
            <ImageContainer key={index}>
              <Link to={link.href}>
                <Box>
                  <Image src={image.src} alt='Placeholder' />
                </Box>
                <Box
                  sx={{
                    maxWidth: '48rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 1,
                  }}>
                  <Typography>{splitFunction(link.title)[0]}...</Typography>

                  <Typography>{splitFunction(link.title)[1]}</Typography>
                </Box>
              </Link>
            </ImageContainer>
          )
        )}
      </GridContainer>
    </Box>
  );
}
