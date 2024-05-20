'use client'

import { getMovies } from '@/actions/movies/getMovies';
import { Movies } from '@/app/interfaces/movies';
import { useEffect, useState } from 'react';
import { CardComponent } from './CardComponent';

export const ListMovies = () => {
  const [filmsData, setFilmsData] = useState<Movies[]>([]);

  useEffect(() => {
    const fetchMovies = async() => {
        const movies = await getMovies();
        setFilmsData(movies)
    }
    fetchMovies();
  }, []);

  if (!filmsData.length) {
    return <p>Loading Ghibli films...</p>;
  }

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {filmsData.map((film) => (
          <CardComponent  movie={film}/>
        ))}
      </div>
    </div>
  );
}
