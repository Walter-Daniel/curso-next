import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';
import { Movies } from '../Types/types';

interface MovieList{
    movies: Movies
}

export const ListMovies:FC<MovieList> = ({movies}) => {

    const imageURL = "https://image.tmdb.org/t/p/original"

    const {results} = movies;

  return (
    <div className='md:grid md:grid-cols-4 gap-4 pt-4 mb-10'>
        {
          results.length > 0 &&
           results.map(movie => (

            <Card 
              isFooterBlurred 
              className="w-full h-[300px] border transition ease-in-out delay-15 hover:translate-y-px hover:scale-110 hover:opacity-60 duration-300 cursor-pointer" key={movie.id}>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={`${imageURL}/${movie.backdrop_path}`}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 text-white flex-col items-start">
                <h4 className='font-bold text-large'>{movie.title}</h4>
                <p className='text-tiny uppercase font-bold'>Release Date: {movie.release_date.toString()}</p>
                <small className='font-bold'>Category: Movie</small>
              </CardFooter>
            </Card>

           )  
          )
        }
      </div>
  )
}
