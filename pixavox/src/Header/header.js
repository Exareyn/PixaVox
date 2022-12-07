import './header.css';
import SettingMenu from './Menu/menu'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme/theme.js'

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
      <Toolbar sx={{ height: '150px'}}>
          <Typography variant="h1" sx={{marginLeft: '6%'}}>
            PixaVOX
          </Typography>
          <Button color="inherit" sx={{marginLeft: 'auto', marginRight:'1%'}}>
            <Typography variant="h2">
              Acceuil
            </Typography>
          </Button>
          <Button color="inherit" sx={{marginRight:'1%'}}>
            <Typography variant="h2">
              Créer
            </Typography>
          </Button>
          <Button color="inherit" sx={{marginRight:'1%'}}>
            <Typography variant="h2">
              Market place
            </Typography>
          </Button>
          <Tooltip title="Open settings">
              <IconButton sx={{marginRight: '3%'}}>
                <Avatar alt="user" src="" sx={{width: 100, height: 100}}/>
                <SettingMenu/>
              </IconButton>
          </Tooltip>

        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
