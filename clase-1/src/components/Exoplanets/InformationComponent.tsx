import React from 'react';
import { Paper, Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PlanetIcon from '@mui/icons-material/Explore';

export const ExoplanetInfoComponent: React.FC = () => {
  return (
      <Paper sx={{ padding:'2rem', marginBottom:'2rem' }}>
        <Typography variant="h2" gutterBottom>
            Information About Exoplanets
        </Typography>
        <Typography variant="body1" gutterBottom>
            Exoplanets, also known as extrasolar planets, are planets that orbit stars outside of our solar system.
            They have become a subject of immense interest in astronomy and astrophysics due to their potential to provide insights into planetary formation, evolution, and the possibility of extraterrestrial life.
        </Typography>
        <Typography variant="body1" gutterBottom>
            Here are some key points about exoplanets:
        </Typography>
        <ul>
            <ListItem>
                <ListItemIcon>
                    <PlanetIcon />
                </ListItemIcon>
                <ListItemText primary="Discovery: The first confirmed discovery of an exoplanet occurred in 1992 around the pulsar PSR B1257+12. Since then, thousands of exoplanets have been confirmed." />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PlanetIcon />
                </ListItemIcon>
                <ListItemText primary="Detection Methods: Exoplanets are detected through various methods, including the transit method, radial velocity method, direct imaging, microlensing, and astrometry." />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PlanetIcon />
                </ListItemIcon>
                <ListItemText primary="Classification: Exoplanets can be classified based on their characteristics such as size, composition, and orbital properties. They include gas giants, rocky planets, super-Earths, mini-Neptunes, and more." />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PlanetIcon />
                </ListItemIcon>
                <ListItemText primary="Habitability: Scientists are interested in exoplanets located within the habitable zone, where conditions may allow for liquid water to exist on the planet's surface." />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PlanetIcon />
                </ListItemIcon>
                <ListItemText primary="Exoplanet Catalogs: Organizations like NASA and ESA maintain catalogs of confirmed exoplanets, providing detailed information about each known exoplanet." />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PlanetIcon />
                </ListItemIcon>
                <ListItemText primary="Exoplanet Missions: Space missions such as Kepler, TESS, and CHEOPS have greatly expanded our understanding of exoplanets by studying their properties and characteristics." />
            </ListItem>
        </ul>
      </Paper>
  );
}
