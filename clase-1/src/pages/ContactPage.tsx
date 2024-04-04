import React from 'react';
import { Container, Grid, Paper, Typography} from '@mui/material';
import { FormContact } from '../components/contact/FormContact';

export const ContactPage: React.FC = () => {

  return (
    <Container className='fade-in'>
      <Grid container spacing={2}justifyContent="center" style={{ minHeight: '90vh', paddingTop:'10rem' }}>
        <Grid item xs={12} lg={6}>
        <Paper>
          <Grid container direction="column">
            <Grid item style={{padding:'1.5rem'}}>
              <Typography variant="h4" gutterBottom>Contact Us</Typography>
              <Typography variant="body1" paragraph>
                Feel free to contact us to publish your news, articles, or works. You can also reach out to us for any inquiries, feedback, or collaborations. We'd love to hear from you!
              </Typography>
              <Typography variant="body1" paragraph>
                Email: example@example.com
              </Typography>
              <Typography variant="body1" paragraph>
                Phone: +1234567890
              </Typography>
              <Typography variant="body1" paragraph>
                Address: 123 Street Name, City, Country
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <FormContact />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};