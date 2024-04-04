import * as React from 'react';
import { Container, Grid, IconButton, Link, Paper, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

export const Footer: React.FC = () => {
  return (
    <footer >
      <Paper style={{
                    color: '#fff', 
                    marginTop:'2rem',
                    padding: '1.5rem 0',
                    position: 'static',
                    bottom: 0, left: 0, right: 0 }}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1">&copy; 2024 Walter Daniel Carrizo</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <IconButton component={Link} href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
                <Facebook style={{ color: '#fff' }} />
              </IconButton>
              <IconButton component={Link} href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter">
                <Twitter style={{ color: '#fff' }} />
              </IconButton>
              <IconButton component={Link} href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
                <Instagram style={{ color: '#fff' }} />
              </IconButton>
              <IconButton component={Link} href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <LinkedIn style={{ color: '#fff' }} />
              </IconButton>
              <IconButton component={Link} href="https://github.com/" target="_blank" rel="noopener" aria-label="Github">
                <GitHub style={{ color: '#fff' }} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
      </Paper>
    </footer>
  );
};
