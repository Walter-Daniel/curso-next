import { Movies, serverParams } from '../Types/types';

const BASE_URL = 'https://api.themoviedb.org/3'

interface APIFetch {
    getMovies: ({ searchParams }:serverParams) => Promise<Movies>
}

const apiFetch: APIFetch = {
    getMovies: async({searchParams}) =>{

        const buildURL = new URL(`${BASE_URL}`)
        const buildParams = new URLSearchParams(``)

        if(searchParams.query){
            buildParams.set('query', searchParams.query)
            buildURL.pathname = buildURL.pathname + '/search/movie'
        }else{
            buildURL.pathname = buildURL.pathname + '/movie/popular'
        }

        try {
            const fetchMovies = await fetch(`${buildURL}?${buildParams}`, {
                headers: {
                    Authorization: 
                    `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzZmMjk4MTA3M2ZlZmZiOTJhMmMyYmRlNjE3NWI3MyIsInN1YiI6IjYyNjFkYTYzN2NhYTQ3MTRiNGRiZDdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R7zM_dSTokd5azFbT-TJufcSKjSbejwoGfiS9oEqjEg`
                },
                cache: 'no-store'
            })
            if(fetchMovies.status !== 200) throw new Error('Error fetching THMDB API')

            const result: Movies = await fetchMovies.json();

            return result;

        } catch (error) {
            console.log(error)
            return {} as Movies
        }
    }
}

export default apiFetch; 