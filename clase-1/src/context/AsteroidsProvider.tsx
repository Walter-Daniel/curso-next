import { useState } from 'react';
import { AsteroidsContext, AsteroidsContextProps } from './AsteroidsContext';
import { NearEarthObject } from '../interfaces/asteroids';
import dayjs from 'dayjs';
import { startSearchAsteroids } from '../services/nasaApiService';

interface AsteroidsProps {
    children: JSX.Element | JSX.Element[]
}

export const AsteroidsProvider = ({ children }: AsteroidsProps) => {

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [asteroids, setAsteroids] = useState<NearEarthObject[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false); // Variable para controlar el estado de carga

    const handleSearch = async () => {
      
        setIsLoading(true);

        // Validate start and end dates using dayjs
        if (!startDate || !endDate || !dayjs(startDate).isValid() || !dayjs(endDate).isValid()) {
            setError('Please select valid start and end dates');
            setIsLoading(false); // Establecer isLoading a false cuando finaliza la búsqueda
            return;
        }

        if (dayjs(startDate).isAfter(dayjs(endDate))) {
            setError('End date cannot be before start date');
            setIsLoading(false);
            return;
        }

        // Calculate the difference in days (using dayjs.diff)
        const daysDifference = Math.abs(dayjs(endDate).diff(startDate, 'days'));
        if (daysDifference > 7) {
            setError('The difference between dates cannot be greater than 7 days');
            setIsLoading(false); // Establecer isLoading a false cuando finaliza la búsqueda
            return;
        }

        const formattedStartDate = dayjs(startDate).format('YYYY-MM-DD');
        const formattedEndDate = dayjs(endDate).format('YYYY-MM-DD');
        const response = await startSearchAsteroids({formattedStartDate, formattedEndDate});

        if(!response.ok){
            setError(response.errorMessage);
            setIsLoading(false); // Establecer isLoading a false cuando finaliza la búsqueda
            return;
        } else {
            setAsteroids(Object.values(response.data).flat());
            setError('');
            setIsLoading(false);
        }
    };

    const contextValue: AsteroidsContextProps = {
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        asteroids,
        error,
        handleSearch,
        isLoading 
    };

    return (
        <AsteroidsContext.Provider value={contextValue}>
            { children }
        </AsteroidsContext.Provider>
    )
}
