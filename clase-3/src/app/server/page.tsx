import { FC } from 'react';
import { serverParams } from '../Types/types';
import apiFetch from '../services/movieService';

const Home: FC<serverParams> = async({searchParams}) => {

  const getMovies = await apiFetch.getMovies({searchParams});
  const {results} = getMovies;

  return (
    <main className="md:container mx-auto sm:px-15  md:px-40 pt-5">
      <h1 className="text-center text-3xl font-bold">Server Side Purple.dev</h1>
      <ul className='border mt-5'>
      {
        results.length > 0 && results.map(movie => (
          <li key={movie.id} className='p-3'>
            Title: {movie.title}
            <span className='bg-yellow-400 p-2 ml-2'>Date: {movie.release_date.toString()}</span>
          </li>

        ))
      }

      </ul>
      
    </main>
  )
}

export default Home