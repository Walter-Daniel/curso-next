'use client'

import { useEffect, useState } from 'react';

export const ListMovies = () => {
  const [filmsData, setFilmsData] = useState<any[]>([]);

  useEffect(() => {
    const getMovies = async() => {
        const movies = await fetch(`/api/movies`)
        console.log(movies)
    }
    getMovies();
  }, []);

  if (!filmsData.length) {
    return <p>Loading Ghibli films...</p>;
  }

  return (
    <div>
      <h1>Ghibli Films</h1>
      <ul>
        {filmsData.map((film) => (
          <li key={film.id}>
            {film.title} ({film.release_date})
          </li>
        ))}
      </ul>
    </div>
  );
}
