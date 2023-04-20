import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTheme,
  ListItemButton,
  ListItemIcon,
  Switch,
} from '@mui/material';
import { ModeNight } from '@mui/icons-material';

import { logout } from '../../../redux/actions/authActions';
import { setMode } from '../../../redux/actions/modeThemeActions';
import './logostyle.css';

function Navbar() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = e => {
    dispatch(logout());
  };

  const { mode } = useSelector(state => state);

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <AppBar
      position="sticky"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        zIndex: 'snackbar',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <LogoutIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: '50%',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'space-around',
            }}
          >
            <img src="/carr.png" alt="car" className="navbarcar" />
            <p className="boxlogo">
              <span className="car">CAR</span>
              <span className="munity">MUNITY</span>
            </p>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CARMUNITY
          </Typography>
          <ListItemButton
            component="a"
            href="#simple-list"
            sx={{ width: '1px' }}
          >
            <ListItemIcon sx={{ zIndex: 'tooltip' }}>
              <ModeNight sx={{ zIndex: 'tooltip', color: 'white' }} />
            </ListItemIcon>
            <Switch onChange={e => dispatch(setMode())} />
          </ListItemButton>
          {!auth?.name && (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={NavLink}
                to="/registration"
              >
                Зарегистрироваться
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={NavLink}
                to="/login"
              >
                Войти
              </Button>
            </Box>
          )}

          {auth?.name && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Перейти в личный кабинет">
                <IconButton component={NavLink} to="/personal" sx={{ p: 0 }}>
                  <Avatar alt="text" src={`${auth?.img}`} />
                </IconButton>
              </Tooltip>
              <Button
                onClick={logoutHandler}
                sx={{ color: 'white' }}
                component={NavLink}
                to="/login"
              >
                <LogoutIcon
                  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                />
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
