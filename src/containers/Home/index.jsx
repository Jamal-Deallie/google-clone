import { SearchInput } from '../../components';
import {
  Logo,
  Image,
  HomeHeader,
  HeaderOption,
  OptionWrapper,
  CustomButton,
  InputWrapper,
  ImageWrap,
} from './styles';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton, Box } from '@mui/material';
export default function HomeContainer() {
  const dark = true;
  return (
    <Box sx={{ height: '100vh', bgcolor: 'primary.main' }}>
      <HomeHeader>
        <OptionWrapper>
          <HeaderOption>About</HeaderOption>
          <HeaderOption>Store</HeaderOption>
        </OptionWrapper>
        <OptionWrapper>
          <HeaderOption>Gmail</HeaderOption>
          <HeaderOption>Images</HeaderOption>
          <IconButton sx={{ color: '#bdc1c6' }} size='large'>
            <AppsIcon sx={{ fontSize: '32px' }} />
          </IconButton>
          <CustomButton variant='contained'>Sign In</CustomButton>
        </OptionWrapper>
      </HomeHeader>
      {dark ? (
        <ImageWrap>
          <Image src='images/mlk-dark.jpeg' alt='MLK Day' />
        </ImageWrap>
      ) : (
        <Logo src='images/mlk-light.png' alt='MLK Day' />
      )}
      <InputWrapper>
        <SearchInput display={'flex'} />
      </InputWrapper>
    </Box>
  );
}
