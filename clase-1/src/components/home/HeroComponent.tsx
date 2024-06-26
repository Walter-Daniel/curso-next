import React from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const HeroComponent: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/bg.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'parallaxBackground 10s linear infinite alternate',
        
      }}
      component="div"
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} sx={{ animation: 'moveInLeft 1s ease-out' }}>
            <Typography sx={{
                        fontSize: {
                            xs: '1.5rem', // Default size for extra small screens
                            sm: '1.75rem', // Small screens
                            md: '2rem', // Medium screens
                            lg: '2.5rem', // Large screens
                        },
                    }} color="textPrimary">
              Explore the Cosmos with ASTROWIKI
            </Typography>
            <Typography variant="body1" color="textPrimary">
            Welcome to ASTROWIKI, your portal to the mysteries of the universe. Explore galaxies, stars, planets, and more as we embark on an enlightening journey through the cosmos.
            </Typography>
            <Stack direction='row' gap='2rem' marginTop='2rem'>
            <Button variant="contained" href='#apod' color="primary" fullWidth>
              See more
            </Button>
            <Button variant="outlined" color="primary" fullWidth>
              <Link to='/contact' style={{width:'100%', color:'white', textDecoration:'none'}}>
                Contact
              </Link>
            </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
