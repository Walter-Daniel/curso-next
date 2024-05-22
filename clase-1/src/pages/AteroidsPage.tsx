import React from 'react';
import {Container , Typography, Paper } from '@mui/material';
import { AsteroidsTable, DatePickerComponent } from '../components/asteroids';
import { AsteroidsProvider } from '../context/AsteroidsProvider';
import { ScrollToTopButton } from '../components/general/ScrollToTopButton';

export const AsteroidsPage: React.FC = () => {

  return (
    <AsteroidsProvider>
    <Container style={{ marginTop: '6rem' }} className='fade-in'>
      <Paper sx={{ padding:'2rem' }}>
        <Typography sx={{ typography:{xs: 'h4', md:'h2'} }} gutterBottom >
          Near-Earth asteroids 
        </Typography>
        <Typography variant='body1'>
        Have you ever wanted to explore space and discover which asteroids are passing close to our planet right now? With AsteroidsList, you can do just that easily and excitingly!
        </Typography>
        <Typography variant='body1'>
        Our tool allows you to search for asteroids approaching Earth within a specific date range, but here's the catch: the dates you choose must not have more than a 7-day difference! This means you can stay up-to-date with the latest space events and find out which asteroids are making their closest journey to us within a short and manageable timeframe.
        </Typography>
        <Typography variant='body1'>
        So, are you ready to start your space adventure? Simply choose your dates within a week and get ready to explore the fascinating world of near-Earth asteroids with AsteroidsList. Don't miss this exciting opportunity for discovery!
        </Typography>
        <Typography variant="h4" mt={5} gutterBottom>
          Asteroids search
        </Typography>
        <DatePickerComponent />
      </Paper>
      <AsteroidsTable />  
      <ScrollToTopButton  targetId="scrollButton"/> 
    </Container>
    </AsteroidsProvider>
  );
};