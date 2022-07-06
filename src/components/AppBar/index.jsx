import { useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Link } from 'react-router-dom';
import {
  Drawer,
  Button,
  IconButton,
} from '@mui/material';
import { SearchInput } from '../../components';
import {
  Logo,
  InnerContainer,
  NavBar,
  BarContainer,
  InputWrapper,
  OptionsContainer,
} from './styles';
import { Menu } from '../../components';

//logo search input flex container
//tab menu with All, Images, News, Shopping, Videos

export default function CustomAppBar() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu(openMenu => !openMenu);
  }

  return (
    <>
      <BarContainer>
        <NavBar>
          <InnerContainer>
            <Link to='/'>
              <Logo src='images/google_dark.svg' alt='Google Logo' />
            </Link>

            <InputWrapper>
              <SearchInput />
            </InputWrapper>
          </InnerContainer>
          <OptionsContainer>
            <IconButton onClick={handleMenu}>
              <SettingsOutlinedIcon
                sx={{ fontSize: 45, color: 'secondary.medium' }}
              />
            </IconButton>
            <IconButton>
              <AppsOutlinedIcon
                sx={{ fontSize: 45, color: 'secondary.medium' }}
              />
            </IconButton>
            <Button variant='bold'>Sign In </Button>
          </OptionsContainer>
        </NavBar>
      </BarContainer>
      <Drawer
        anchor='right'
        open={openMenu}
        onClose={handleMenu}
        sx={{ background: 'primary.medium' }}>
        <Menu />
      </Drawer>
    </>
  );
}
