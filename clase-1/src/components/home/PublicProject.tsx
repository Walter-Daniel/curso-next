import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';

interface Props {
  name: string;
  imageSrc: string;
  caption: string;
  profession: string;
  universityDegree: string;
  workingAlone: boolean;
  projectText: string;
}

export const PublicProject: React.FC<Props> = ({ name, imageSrc, profession, universityDegree, workingAlone, projectText }) => {
  return (
      <Grid container sx={{ marginTop:'3rem', minHeight:'80vh' }}>
        <Grid item xs={12} md={6}>
          <Paper style={{  height: '100%', padding:'2rem' }}>
            <Typography variant="h4" gutterBottom>{name}</Typography>
            <Box sx={{position: 'relative'}} component="div">
            <img src={imageSrc} alt={name} loading='lazy' style={{ width: '100%', objectFit: 'cover', height: '30rem'}} /> 

            <Box sx={{ position: 'absolute', bottom: '7px', left: 0, right: 0, padding: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.7)'}} component="div">
              <Typography variant="body1" paragraph>
                <strong>Profession:</strong> {profession}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>University Degree:</strong> {universityDegree}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Working:</strong> {workingAlone ? 'Alone' : 'In a group'}
              </Typography>
            </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '2rem', height: '100%' }}>
            <Typography variant="h4" gutterBottom>Project Description</Typography>
            <Typography variant="body1" paragraph>
              {projectText}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
  );
};
