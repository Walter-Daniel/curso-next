import React, { useEffect, useState } from 'react';
import { ExoPlanetsResponse } from '../interfaces/exoPlanets';
import { Canvas } from '@react-three/fiber';
import { ExoComponent, ExoplanetInfoComponent } from '../components/Exoplanets';
import { Container, Typography } from '@mui/material';
import { startExoPlanetFetch } from '../services/nasaApiService';
import { ScrollToTopButton } from '../components/general/ScrollToTopButton';

export const Exoplanets: React.FC = () => {
    const [planets, setPlanets] = useState<ExoPlanetsResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {

        const fetchData = async() => {
            const response = await startExoPlanetFetch();
            if(!response.ok){
                setError(response.errorMessage)
            }else {
                setPlanets(response.data)
                localStorage.setItem('exoPlanet', JSON.stringify(response.data));
                setLoading(false)
            } 
        }
        const getPlanets = localStorage.getItem('exoPlanet');
        if(!getPlanets){
            fetchData();
        }else{
            const parsedPlanets = JSON.parse(getPlanets)
            setPlanets(parsedPlanets)
            setLoading(false)
        }
    }, []);

    const planetFiltered = planets.filter((planet) => planet.koi_prad !== null).map((planet) => ({
        name: planet.kepler_name,
        radius: planet.koi_prad
    })).sort((planet1, planet2) => planet1.radius > planet2.radius ? -1 : 1);


    return (
        <Container style={{ marginTop:'6rem', minHeight:'100vh' }} className='fade-in'>
            {
                loading && <Typography>Cargando ... </Typography>
            }
            {
            planets.length > 0 && (
                <>
                    <ExoplanetInfoComponent />
                    <Typography variant='h5' gutterBottom>Scale Image of Kepler-470 b: 77.76 Times the Earth's Radius</Typography>
                    <Canvas style={{ height:'50vh', width:'100%' }}>
                        <ExoComponent planetData={planetFiltered}/>
                    </Canvas>
                </>
            )}
            {error && <Typography>{error}</Typography>}
         <ScrollToTopButton targetId="scrollButton"/> 
        </Container>
        
    );
}
