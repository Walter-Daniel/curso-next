import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { offlineItems, onlineItems } from "../../helpers/navbarItems";
import {  NavLink } from 'react-router-dom';
import { FC } from "react";

import logo from '/logo.png';

interface Props {
  window?: () => Window;
  handleDrawerToggle: () => void;
}


export const DrawerComponent: FC<Props> = ({ handleDrawerToggle }) => {
  const status = false;

  return (
    <>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}>
          <img src={logo} loading='lazy' alt="Logo Bon Appétit" style={{ height: '2.9rem' }} />
          <Typography
            variant="h1"
            component="div"
            sx={{ textTransform: 'uppercase', fontSize: '1.5rem', fontWeight: '600' }}
          >
            Bon <span style={{ color: '#d90429' }}>Appétit</span>
          </Typography>
        </Box>
        <Divider style={{ backgroundColor: "#dad7cd" }} />
        <List>
          {((status) ? onlineItems : offlineItems).map((item) => (
            <ListItem key={item.title}>
              <ListItemButton component={NavLink} to={item.navegation} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}
