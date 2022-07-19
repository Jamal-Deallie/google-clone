import { useState, useContext } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Link } from 'react-router-dom';
import { Drawer, Button, IconButton } from '@mui/material';
import { SearchInput } from '../../components';
import {
  Logo,
  InnerContainer,
  NavBar,
  BarContainer,
  InputWrapper,
  OptionsContainer,
  CustomTooltip,
} from './styles';
import { Menu } from '../../components';
import {
  ThemeContext,
  useThemeContext,
} from '../../contexts/ThemeContextProvider';

export default function CustomAppBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { darkMode } = useThemeContext();
  function handleMenu() {
    setOpenMenu(openMenu => !openMenu);
  }
  console.log({ mode: darkMode });
  return (
    <>
      <BarContainer>
        <NavBar>
          <InnerContainer>
            <Link to='/'>
              <Logo
                src={
                  darkMode
                    ? 'images/google-dark.svg'
                    : 'images/google-light.svg'
                }
                alt='Google Logo'
              />
            </Link>

            <InputWrapper>
              <SearchInput />
            </InputWrapper>
          </InnerContainer>
          <OptionsContainer>
          <CustomTooltip title='Settings'>
            <IconButton onClick={handleMenu}>
              <SettingsOutlinedIcon
                sx={{ fontSize: 45, color: 'secondary.medium' }}
              />
            </IconButton>
            </CustomTooltip>
            <CustomTooltip title='Google Apps'>
            <IconButton>
              <AppsOutlinedIcon
                sx={{ fontSize: 45, color: 'secondary.medium' }}
              />
            </IconButton>
            </CustomTooltip>
       
            <Button variant='bold'>Sign In</Button>
          </OptionsContainer>
        </NavBar>
      </BarContainer>
      <Drawer
        anchor='right'
        open={openMenu}
        onClose={handleMenu}
        sx={{ background: 'primary.medium' }}>
        <Menu handleMenu={handleMenu} />
      </Drawer>
    </>
  );
}
