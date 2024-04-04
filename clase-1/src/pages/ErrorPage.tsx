import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
    return (
        <Grid container alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
            <Grid item xs={12} >
                <Typography variant="h4" align="center" pt={2} gutterBottom >Oops! Something went wrong.</Typography>
                <Typography variant="body1" align="center" gutterBottom>It seems like we've encountered an error.</Typography>
                <Typography variant="body1" align="center" gutterBottom>Please try again later.</Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', position: 'relative', height:'100%' }}>
                <img loading='lazy' src="/error.png" alt="Crashed Spaceship" style={{ maxWidth: '100%', height: '100%', objectFit:'contain' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Button 
                        variant="contained" 
                        color="error" 
                        sx={{ 
                            borderRadius:'50%', 
                            height:'8rem', 
                            width:'8rem', 
                            animation: 'pulse 1s infinite',
                        }} 
                        onClick={() => navigate('/')}
                    >
                        ¡Go Home!
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
}
