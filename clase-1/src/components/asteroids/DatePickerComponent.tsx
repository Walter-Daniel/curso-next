import { Alert, Button, Grid, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useContext } from 'react';
import { AsteroidsContext } from '../../context/AsteroidsContext';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const DatePickerComponent = () => {

    const {  handleSearch, setEndDate, setStartDate , startDate, endDate , error, isLoading} = useContext(AsteroidsContext);

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(date) => setStartDate(date)}
              sx={{ width:'100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(date) => setEndDate(date)}
              sx={{ width:'100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSearch} disabled={isLoading}>
              Search
            </Button>
          </Grid>
        </Grid>
    </LocalizationProvider> 
    {error &&  
        <Alert variant="outlined" severity="error" sx={{ marginTop:'2rem' }}>
             {error}
        </Alert>
    }
    {
        isLoading && <Typography sx={{ marginTop:'2rem' }}>Searching...</Typography>
    }
    </>
  )
}
