
import React, { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export interface UsersResponse {
    id:       number;
    name:     string;
    username: string;
    email:    string;
}

export const Card: FC<UsersResponse> = ({ id, name,username, email }) => {
  return (
    <div key={id} className="border p-4 flex h-400 justify-between gap-4">
        <div className='h-[100%]'>
            <ul >
                <li>
                    <p className=''>Nombre completo:</p> 
                    <p className='font-bold'>{name}</p>
                </li>
                <li>
                    <p>Usuario:</p>
                    <p className='font-bold'>{username}</p>
                </li>
                <li>
                    <p>Email:</p>
                    <p className='font-bold'>{email}</p>
                </li>
            </ul>
            <div className="pt-4">
                <Link href={`recommendations/${id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md my-4">Recomendaciones</Link>
            </div>
        </div>
        <div>
            <Image src={`/profile${id}.jpg`} alt={username} width={200} height={300} className='object-cover h-[100%] w-200' />
        </div>
    </div>
  )
}
