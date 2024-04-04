import React from 'react';
import { Grid, Typography, Button, Avatar, Stack, Container, Paper } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export const AboutPage: React.FC = () => {
    return (
      <Container >
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', marginTop:{ xs:'6rem', lg:'0' } }}>
            {/* Sección de Información del Proyecto */}
            <Grid item xs={12} md={6} sx={{ animation: 'moveInRight 1s ease-out' }}>
                <Paper style={{ height: '100%', padding:'2rem' }}>
                <Grid container  spacing={2}>
                    <Grid item xs={12}>
                            <Typography variant="h2" gutterBottom>Project Information</Typography>
                            <Typography variant="body1">
                                ASTROWIKI is a project created for the intensive course by Hedy Software focusing on Next.js.
                                This platform is dedicated to providing information about galaxies utilizing the NASA API.
                                Through ASTROWIKI, users can delve into the wonders of the cosmos, explore various galaxies, and learn about the marvels of space exploration.
                            </Typography>

                    </Grid>
                </Grid>
                        </Paper>
            </Grid>

            {/* Sección de Información del Creador */}
            <Grid item xs={12} md={6} sx={{ animation: 'moveInLeft 1s ease-out' }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12}>
                        <Stack gap={1}>
                          <Avatar alt="Walter Daniel Carrizo" src="/perfil.avif" sx={{ margin: 'auto', width: 350, height: 350 }} />
                          <Typography variant="subtitle1" align="center">Walter Daniel Carrizo</Typography>
                          <Typography variant="body2" align="center">Student of Programming | Full Stack MERN Developer</Typography>
                        </Stack>

                        {/* Enlaces a GitHub, LinkedIn, Portfolio, y Email */}
                        <Grid container justifyContent="center" spacing={2} mt={2}>
                            <Grid item>
                                <Button variant="outlined" startIcon={<GitHub />} href="https://github.com/waltercarrizo">
                                    GitHub
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" startIcon={<LinkedIn />} href="https://www.linkedin.com/in/walter-daniel-carrizo/">
                                    LinkedIn
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" startIcon={<Email />} href="mailto:tu@email.com">
                                    Email
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Container>
    );
}
