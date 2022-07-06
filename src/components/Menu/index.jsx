import {
  HeaderContainer,
  MenuContainer,
  CustomSwitch,
  CustomRadio,
  Icon,
} from './styles';

import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material';

import { OpenInNew, Close, AnnouncementOutlined } from '@mui/icons-material';

export default function Menu() {
  return (
    <MenuContainer sx={{ bgcolor: 'primary.medium' }}>
      <HeaderContainer>
        <Typography variant='body2'>Quick Settings</Typography>
        <IconButton>
          <Close sx={{ fontSize: 42, color: 'secondary.medium' }} />
        </IconButton>
      </HeaderContainer>
      <Box>
        <List>
          <ListItemText primary='Privacy' />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Search history' />
              <ListItemIcon>
                <OpenInNew sx={{ fontSize: 28, color: 'secondary.medium' }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Your data in Search' />
              <ListItemIcon>
                <OpenInNew sx={{ fontSize: 28, color: 'secondary.medium' }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ backgroundColor: 'secondary.medium' }} />
        <Box>
          <List>
            <ListItemText primary='Using Search' />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Explicit results filter' />
                <ListItemIcon>
                  <FormControlLabel
                    control={<CustomSwitch defaultChecked color='tertiary' />}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Languages' />
                <ListItemIcon>
                  <Typography sx={{ color: 'secondary.dark' }}>
                    English{' '}
                  </Typography>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Advanced Search' />
                <ListItemIcon>
                  <OpenInNew sx={{ fontSize: 28, color: 'secondary.medium' }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ backgroundColor: 'secondary.medium' }} />
        <Box>
          <List>
            <ListItemText primary='Appearance' />
            <ListItem disablePadding>
              <FormControl sx={{ width: '100%' }}>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue='lightTheme'
                  name='radio-buttons-group'>
                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <FormControlLabel
                      value='lightTheme'
                      control={<CustomRadio />}
                      label='Light theme'
                    />
                    <ListItemIcon>
                      <Icon src='images/icons/light.png' alt='light' />
                    </ListItemIcon>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <FormControlLabel
                      value='darkTheme'
                      control={<CustomRadio />}
                      label='Dark theme'
                    />
                    <ListItemIcon>
                      <Icon src='images/icons/dark.png' alt='Dark Theme' />
                    </ListItemIcon>
                  </ListItem>
                </RadioGroup>
              </FormControl>
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ backgroundColor: 'secondary.medium' }} />
        <Box>
          <List>
            <ListItemText primary='Support' />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Explicit results filter' />
                <ListItemIcon>
                  <FormControlLabel
                    control={<CustomSwitch defaultChecked color='tertiary' />}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Advanced Search' />
                <ListItemIcon>
                  <ListItemText primary='Search Help' />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Send Feedback' />
                <ListItemIcon>
                  <AnnouncementOutlined
                    sx={{ fontSize: 28, color: 'secondary.medium' }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </MenuContainer>
  );
}
