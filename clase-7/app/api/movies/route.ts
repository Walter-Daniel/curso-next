import { NextResponse } from "next/server";

export async function GET(request: Request) { 

   try {
    const apiResponse = await fetch('https://ghibliapi.vercel.app/films');

    if (apiResponse.ok) {
    const filmsData = await apiResponse.json();
        NextResponse.json(filmsData);
   } 
    }catch (error) {
    NextResponse.json({ error: 'Failed to fetch Ghibli films' });
    
   }
    
}