'use client'

import { ListMovies } from './components/ListMovies';
import apiFetch from './services/movieService';
import { FC, useEffect, useState } from 'react';
import { Movies, serverParams } from './Types/types';
import { SearchMovie } from './components/SearchMovie';


const Home: FC<serverParams> = ({searchParams}) => {


  const [movies, setMovies] = useState<Movies>({ 
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  })

  useEffect(() => {

    const getMovies = async() => {
      
      const result = await apiFetch.getMovies({searchParams});
      setMovies(result)

    }

    //Demorar la función y reducir los llamados a la API
    function delayExecution(delay: number, func: () => void): void {
      setTimeout(func, delay);
    }

    delayExecution( 600, getMovies)
     
  }, [searchParams])
    

  return (
    <main className="md:container mx-auto px-20 md:px-40 pt-5">
      <h1 className="text-center text-3xl font-bold">Movies Purple.dev</h1>
      <SearchMovie />
      <ListMovies movies={movies} />
    </main>
  )
}

export default Home