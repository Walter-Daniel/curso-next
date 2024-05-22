import React from 'react';
import { Divider, Grid, Paper, Typography, useTheme } from '@mui/material';
import { Apod } from '../../interfaces/apod';

interface ApodDetailsProps {
    apodData: Apod;
}

export const APODComponent: React.FC<ApodDetailsProps> = ({ apodData }) => {
    const theme = useTheme();
    const colorPrimary = theme.palette.primary.main;

    const renderMedia = () => {
        if (apodData.url.includes('youtube.com')) {
            return (
                <iframe
                    title={apodData.title}
                    width="100%"
                    height="315"
                    src={apodData.url}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            );
        } else {
            return (
                <img
                    src={apodData.url}
                    alt={apodData.title}
                    style={{ maxWidth: '100%', height: '100%', objectFit:'cover' }}
                    loading='lazy'
                />
            );
        }
    };

    return (
        <Grid container sx={{ minHeighteight: '100vh', marginTop:'6rem' }} id="apod">
            {/* Primera sección con la información */}
            <Grid item xs={12} md={6}>
                <Paper sx={{ padding:'2rem', height:'100%' }}>
                    <Typography sx={{ typography:{xs: 'h4', md:'h2'} }}>Photography of the Day</Typography>
                    <Divider sx={{ margin:'1rem 0' }}/>
                    <Typography variant="h4" gutterBottom>{apodData.title}</Typography>
                    <Typography variant="h6" color={colorPrimary} gutterBottom>{apodData.copyright}</Typography>
                    <Typography variant="body1" gutterBottom>{apodData.explanation}</Typography>
                </Paper>  
            </Grid>
            {/* Segunda sección con la imagen o el reproductor de YouTube */}
            <Grid item xs={12} md={6}>
            <Paper sx={{ padding:'2rem', height:'100%' }}>

                {renderMedia()}
                </Paper>
            </Grid>
        </Grid>
    );
}
