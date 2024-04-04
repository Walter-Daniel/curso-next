import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { Apod } from '../interfaces/apod';
import { apod } from '../api/APOD';
import { NearEarthObject } from '../interfaces/asteroids';
import { asteroidsApi } from '../api/Asteroids';
import { exoPlanetApi } from '../api/ExpoPlanets';
import { ExoPlanetsResponse } from '../interfaces/exoPlanets';

interface ErrorResponse {
    message: string;
}
  
interface APODResponseSuccess {
    ok: true;
    data: Apod;
}
  
interface APODResponseError {
    ok: false;
    errorMessage: string;
}

interface Asteroids {
  near_earth_objects: { [key: string]: NearEarthObject[] };
}

interface AsteroidsResponseSuccess {
    ok: true;
    data: { [key: string]: NearEarthObject[] };
}
  
interface AsteroidsResponseError {
    ok: false;
    errorMessage: string;
}

interface ExoPlanetResponseSuccess {
    ok: true;
    data: ExoPlanetsResponse[];
}
  
interface ExoPlanetResponseError {
    ok: false;
    errorMessage: string;
}

interface SearchProps {
  formattedStartDate: string;
  formattedEndDate: string;
}



type APODResponse = APODResponseSuccess | APODResponseError ;
type AsteroidsResponse = AsteroidsResponseSuccess | AsteroidsResponseError ;
type ExoplanetApiResponse = ExoPlanetResponseSuccess | ExoPlanetResponseError;

export const startAPOD = async (): Promise<APODResponse> => {
    try {
      const response: AxiosResponse<Apod> = await apod.getAll();
      const { data } = response;
      return {
        ok: true,
        data
      }
        
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        const errorMessage = axiosError.response?.data.message || 'An error occurred';
        return {
          ok: false,
          errorMessage: errorMessage
        };
      } else {
        return {
          ok: false,
          errorMessage: 'An error occurred'
        };
      }
    }
};

export const startSearchAsteroids = async({formattedStartDate: startDate, formattedEndDate: endDate}:SearchProps):Promise<AsteroidsResponse> => {
  try {
    const response: AxiosResponse<Asteroids> = await asteroidsApi.getAll(startDate,endDate);
    const { near_earth_objects }  = response.data;
    return {
      ok: true,
      data: near_earth_objects
    }
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      const errorMessage = axiosError.response?.data.message || 'An error occurred';
      return {
        ok: false,
        errorMessage: errorMessage
      };
    } else {
      return {
        ok: false,
        errorMessage: 'An error occurred'
      };
    }
  }
}

export const startExoPlanetFetch = async():Promise<ExoplanetApiResponse> => {
    try {
        const response: AxiosResponse<ExoPlanetsResponse[]> = await exoPlanetApi.getAll();
        localStorage.setItem('exoPlanet', JSON.stringify(response.data))
        return {
          ok: true,
          data: response.data
        }       
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        const errorMessage = axiosError.response?.data.message || 'An error occurred';
        return {
          ok: false,
          errorMessage: errorMessage
        };
      } else {
        return {
          ok: false,
          errorMessage: 'An error occurred'
        };
      }
    }

}