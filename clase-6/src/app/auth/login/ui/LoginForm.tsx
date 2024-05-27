'use client'

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Spinner } from '@nextui-org/react';
import { FaHome } from 'react-icons/fa';

import { signInSchema } from '@/validations/user-schema';
import { Inputs } from '@/types/auth';
import { FormAuth, Title } from '@/components';
import { getAuth } from '@/lib/firebase-utils';

export const LoginForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<Inputs>({
      resolver: zodResolver(signInSchema),
    });
  
  
    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
      const isSignUp = false;
      setIsLoading(true);
      try {
        await getAuth({email, password, router, isSignUp} )
      } catch (error) {
        console.log(error) 
      } finally {
        setIsLoading(false)
      }
    };

    console.log(isLoading)
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white mx-5 md:mx-0 p-5 md:p-10 w-[100%] md:w-2/3 lg:w-1/3 rounded-xl shadow-xl fade-in"
    >
      <div className="flex justify-end mb-5">
        <Title size="4xl">
          Purple.dev
        </Title>
      </div>
      <FormAuth register={register} errors={errors} />
      {/* BUTTONS */}
      <div className='pt-3'>
        <Button 
          className={`text-white ${isLoading ? 'bg-gray-500' : 'bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg' }`} 
          fullWidth
          type='submit'
          disabled={isLoading}
          >
          { isLoading ? <Spinner size="sm" color='warning'/> : 'Sign in' }
          </Button>
        <div className="p-1 flex items-center justify-center">
            <div className="border-t border-black flex-grow mr-3"></div>
            <p className='text-center text-small'>Or</p>
            <div className="border-t border-black flex-grow ml-3"></div>
        </div>
       <Button color='secondary' fullWidth>Sign in with Google</Button>
    </div>
      <div className="flex gap-2 pt-3">
        <p className="text-sm">No tienes una cuenta?</p>
        <Link href={"/auth/register"} className="underline text-sm">
          Registrate
        </Link>
      </div>
      <div className="flex gap-2 pt-3 justify-end items-center">
        <FaHome />
        <Link href={'/'} className="text-black text-sm">
        Regresar al inicio
        </Link>
      </div>
    </form>
  )
}
