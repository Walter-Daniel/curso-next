'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import Link from "next/link";

import { blogSchema } from "@/validations/blog-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAuth, ButtonForm, Title, CustomButton } from '@/components';
import { getAuth } from '@/lib/firebase-utils';
import { useRouter } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase-config';


export type Inputs = {
    title: string;
    description: string;
    image: string; 
};

export const FormBlog = ({user}:{user: User}) => {

  const { register, handleSubmit, formState: {errors}, reset } = useForm<Inputs>({
    resolver: zodResolver(blogSchema)
  });

  const router = useRouter();

  const createBlog = async(data:Inputs) => {
    await fetch(`/api/blog/${user!.uid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((value) => reset() )

  }

  const onSubmit:SubmitHandler<Inputs> = (data) => {
    createBlog(data)
  }

  const handleReset = () => {
    reset();
  }


  
  return (
   
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 p-5 md:p-10 w-[100%] rounded-xl shadow-xl fade-in">
          <div className="pb-4">
            <Title size="2xl">
              Crear recomendación
            </Title>
          </div>
            {/* Name */}
            <div className="flex flex-col pb-5 relative" >
                <label htmlFor="title" className="pb-1">Título</label>
                <input 
                  type="text" 
                  id="title"
                  placeholder="Ingresa el título" 
                  className="border-small rounded-md p-2 border-gray-400" 
                  {...register('title')}
                  />
                  {
                    errors.title?.message && <small className="text-red-500 absolute bottom-0">{errors.title?.message}</small>
                  }
            </div>
            {/* Description */}
            <div className="flex flex-col pb-5 relative" >
                <label htmlFor="description" className="pb-1">Descripción</label>
                <textarea 
                    {...register("description")} 
                    placeholder="Sobre la recomendación" 
                    id='description'
                    className="border-small rounded-md p-2 border-gray-400"  
                />
                 {
                    errors.description?.message && <small className="text-red-500 absolute bottom-0">{errors.description?.message}</small>
                  }
            </div>
            {/* Image */}
            <div className="flex flex-col pb-5 relative">
                <label htmlFor="image" className="pb-1">Imagen</label>
                <input 
                  type="text" 
                  id="image"
                  placeholder="Ingresa el link de la imagen" 
                  className="border-small rounded-md p-2 border-gray-400"
                  {...register('image')}
                  />
                  {
                    errors.image?.message && <small className="text-red-500 absolute bottom-0">{errors.image?.message}</small>
                  }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <CustomButton fullWidth type='submit'>
                    Publicar
                </CustomButton>
                <Button fullWidth color='secondary' onClick={handleReset}>
                  Resetear formulario
                </Button>
            </div>
        </form>
     
  );
}