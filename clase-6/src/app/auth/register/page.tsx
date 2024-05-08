'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import Link from "next/link";

import { userSchema } from "@/validations/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAuth, ButtonForm } from '@/components';
import { Inputs } from '@/types/auth';
import { FcAdvance } from 'react-icons/fc';
import { getAuth } from '@/lib/firebase-utils';
import { useRouter } from 'next/navigation';


export default function RegisterPage() {

  const { register, handleSubmit, formState: {errors}, reset } = useForm<Inputs>({
    resolver: zodResolver(userSchema)
  });

  const router = useRouter();

  const handleGoogleSignIn = async() => {
    console.log('hola')
  }


  const createUser = async(email:string, password:string, displayName:string) => {
    const isSignUp = true;
    getAuth({email, password, router, isSignUp} )
    reset()
  }

  const onSubmit:SubmitHandler<Inputs> = (data) => {
    const { email, password, displayName } = data;
    createUser(email, password, displayName)
  }

  return (
   
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg mx-5 md:mx-0 p-5 md:p-10 w-[100%] md:w-2/3 lg:w-1/3 rounded-xl shadow-xl fade-in">
          <div className="flex justify-end mb-5">
            <h2 className='text-3xl uppercase'>Register</h2>
          </div>
            {/* Name */}
            <div className="flex flex-col pb-5 relative" >
                <label htmlFor="displayName" className="pb-1">Name</label>
                <input 
                  type="text" 
                  id="displayName"
                  placeholder="Enter your name here..." 
                  className="border-small rounded-md p-2 border-gray-400" 
                  {...register('displayName')}
                  />
                  {
                    errors.displayName?.message && <small className="text-red-500 absolute bottom-0">{errors.displayName?.message}</small>
                  }
            </div>
            <FormAuth register={register} errors={errors}/>
            {/* Password Confirm */}
            <div className="flex flex-col pb-5 relative">
                <label htmlFor="confirmPassword" className="pb-1">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword"
                  placeholder="Enter your password here..." 
                  className="border-small rounded-md p-2 border-gray-400"
                  {...register('confirmPassword')}
                  />
                  {
                    errors.confirmPassword?.message && <small className="text-red-500 absolute bottom-0">{errors.confirmPassword?.message}</small>
                  }
            </div>
            {/* BUTTONS */}
            <ButtonForm handleGoogleSignIn={handleGoogleSignIn} title='Sign up' />
            <div className="flex gap-2 pt-3">
              <p className='text-small'>Already have an account?</p>
              <Link href={'/login'} className="underline text-red-500 text-small">Login</Link>
            </div>
            <div className="flex gap-2 pt-3 justify-end items-center">
              <FcAdvance />
              <Link href={'/'} className="text-black text-sm">
                Go home
              </Link>
            </div>
        </form>
     
  );
}