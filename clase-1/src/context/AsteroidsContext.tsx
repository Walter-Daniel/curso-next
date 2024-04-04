import { createContext, Dispatch, SetStateAction } from 'react';
import { NearEarthObject } from '../interfaces/asteroids';

export interface AsteroidsContextProps {
    startDate: Date | null;
    setStartDate: Dispatch<SetStateAction<Date | null>>;
    endDate: Date | null;
    setEndDate: Dispatch<SetStateAction<Date | null>>;
    asteroids: NearEarthObject[];
    error: string;
    handleSearch: () => Promise<void>;
    isLoading: boolean;
}

export const AsteroidsContext = createContext<AsteroidsContextProps>({} as AsteroidsContextProps);