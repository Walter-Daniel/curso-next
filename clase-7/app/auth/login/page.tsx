'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '@/app/validations/user-schema';
import { Inputs } from '@/app/interfaces/auth';
import { FormAuth, Title } from '@/app/components';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import googleIMG from '@/public/google.png'
import githubIMG from '@/public/github.png'


export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(signInSchema),
  });

  const handleGoogleSignIn = async () => {
    console.log('Signin with google');
  };

  const handleSignIn = async (email: string, password: string) => {
    console.log(email, password);
    reset()
  };

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await handleSignIn(email, password);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-slate-100 mx-5 md:mx-0 p-5 md:p-10 w-[100%] md:w-2/3 lg:w-1/3 rounded-xl shadow-xl fade-in'
    >
      <div className='flex justify-end mb-5'>
        <Title color='black'>
          Purple.dev
        </Title>
      </div>
      <FormAuth register={register} errors={errors} />
      {/* BUTTONS */}
      <button 
        type='submit' 
        className='bg-black text-white rounded-md p-2 w-full'>
              Login
      </button>
      <div className='md:flex gap-2 pt-4'>
        <button 
          className='border border-gray-400 p-2 rounded-md w-full flex justify-center hover:bg-gray-300 
                      transition-bg duration-300 '>
          <Image 
            src={googleIMG}
            alt=''
            width={25}
            height={25}
          />
        </button>
        <button className='border border-gray-400 p-2 rounded-md w-full flex justify-center hover:bg-gray-300 
                      transition-bg duration-300'>
          <Image 
            src={githubIMG}
            alt=''
            width={25}
            height={25}
          />
        </button>
      </div>
      <div className='flex gap-2 pt-3'>
        <p className='text-sm'>No tienes una cuenta?</p>
        <Link href={'/auth/register'} className='underline text-sm'>
          Registrate
        </Link>
      </div>
    </form>
  );
}
