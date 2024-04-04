import { useMemo, useState } from 'react';
import { DrawerComponent } from '../components/navbar/DrawerComponent';
import { offlineItems, onlineItems } from '../helpers/navbarItems';

import { Box, Button, Drawer, Grid, IconButton, Stack, Toolbar, Typography, styled, useScrollTrigger, useTheme } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import logo from '/logo.png';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface Props {
    window?: () => Window;
  }
  
const AppBar = styled(MuiAppBar, {})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: 'background-color 0.3s ease',
}));

const drawerWidth = 240;

export const Navbar = (props: Props) => {

  const theme = useTheme();
  const colorPrimary = theme.palette.primary.main;
  
  //User authenticated
  const status = "non-authenticated";

  const {pathname} = useLocation();
  const isHome = useMemo(() => pathname === '/', [pathname]);
  const navigate = useNavigate();
  const handlerLogout = () => {
    navigate('/login')
  };

  //Open menu in mobile dispositive
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  //control for navbar scroll
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  });

  return (
    <Box sx={{ display: 'flex' }} id="scrollButton" component="div">
      <AppBar 
        component="nav" 
        elevation={0} 
        sx={{ backgroundColor: { xs: '#121212', lg: isHome ? (trigger ? '#121212' : 'transparent') 
                                                        : '#121212' }}}
                                                        >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
              <img loading='lazy' src={logo} alt="Logo WikiAstro" style={{ height: '2.9rem' }} />
              <Typography
                variant="h1"
                component="div"
                sx={{ flexGrow: 1, display: { sm: 'block', textTransform: 'uppercase', fontSize: '2rem', fontWeight: '600' } }}
              >
                Astro<span style={{ color: colorPrimary }} >Wiki</span>
              </Typography>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Stack direction="row" spacing={2}>

                {((status === 'non-authenticated') ? offlineItems
                  : onlineItems).map((item) => (
                    <Button component={NavLink} to={item.navegation} key={item.title} variant={item.btn}>
                      {item.title}
                    </Button>
                ))}
                {
                  ((status !== 'non-authenticated') && (
                    <Button key="cerrar sesión" variant="contained" onClick={() => handlerLogout()}>
                      Cerrar sesión
                    </Button>
                  ))
                }
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          <DrawerComponent handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </nav>
    </Box>
  );
}
