import {Link, Outlet} from 'react-router-dom';
import {StoreContext} from '../../context/StoreContext.tsx';
import useFetch from 'use-fetch-hook-renchglad/dist/useFetch';
import Store from '../../models/store.ts';
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState, MouseEvent} from 'react';

const Root = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const url = 'http://localhost:3000/api/store/1';
  const store = useFetch<Store>(url);
  if (store.error) {
    return <h1>Erreur</h1>;
  }

  if (store.loading) {
    return <h1>Loading</h1>;
  }

  return store.data && <>
    <AppBar position='static' style={{backgroundColor: store.data.custom_color}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem'
            }}
          >
            <Link to='Home' style={{textDecoration: 'none', color: 'inherit'}}>
              {store.data.name}
            </Link>
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Accueil</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Produits</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem'
            }}
          >
            <Link to='Home' style={{textDecoration: 'none', color: 'inherit'}}>
              {store.data.name}
            </Link>
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{my: 2, color: 'white', display: 'block'}}
            >
              Accueil
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{my: 2, color: 'white', display: 'block'}}
            >
              Produits
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Accueil</Link>
          </li>
          <li>
            <Link to="/products">Produits</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <StoreContext.Provider value={store.data}>
        <Outlet/>
      </StoreContext.Provider>
    </div>
  </>;
};

export default Root;
