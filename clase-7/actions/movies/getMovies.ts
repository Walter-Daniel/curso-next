'use server'

export async function getMovies()  {

    
   try {
    const apiResponse = await fetch('https://ghibliapi.vercel.app/films', {
        headers: {
            'Content-Type': 'application/json',
          },
   });

    if (apiResponse.ok) {
    const filmsData = await apiResponse.json();
    return (filmsData);
   } 
    }catch (error) {
    return { error: 'Failed to fetch Ghibli films' }
    
   }

}