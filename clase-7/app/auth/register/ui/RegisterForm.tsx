'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import Link from "next/link";

import { userSchema } from "@/validations/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, FormAuth, Title } from '@/components';
import { Inputs } from '@/app/interfaces/auth';
import Image from 'next/image';
import googleIMG from '@/public/google.png'
import githubIMG from '@/public/github.png'
import { signup } from '@/actions/auth/register';
import { Button } from '@nextui-org/react';
import { useState, useTransition } from 'react';


export const RegisterForm = () => {

    
  const [ isPending, startTransition ] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const { register, handleSubmit, formState: {errors}, reset } = useForm<Inputs>({
    resolver: zodResolver(userSchema)
  });


  const onSubmit:SubmitHandler<Inputs> = async(values) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      signup(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
    })
  }

  return (
   
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-100 mx-5 md:mx-0 p-5 md:p-10 w-[100%] md:w-2/3 lg:w-1/3 rounded-xl shadow-xl fade-in">
          <div className="flex justify-end mb-5">
            <Title size="4xl">
              Purple.dev
            </Title>
          </div>
            {/* Name */}
            <div className="flex flex-col pb-5 relative" >
                <label htmlFor="displayName" className="pb-1">Name</label>
                <input 
                  type="text" 
                  id="displayName"
                  placeholder="John Wick" 
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
                <label htmlFor="confirmPassword" className="pb-1">Password confirm</label>
                <input 
                  type="password" 
                  id="confirmPassword"
                  placeholder="Insert your password here" 
                  className="border-small rounded-md p-2 border-gray-400"
                  {...register('confirmPassword')}
                  />
                  {
                    errors.confirmPassword?.message && <small className="text-red-500 absolute bottom-0">{errors.confirmPassword?.message}</small>
                  }
            </div>
                {/* ALERT */}
            {
              error && <Alert message={error} type='error' onClose={() => setError("")} />
            }
            {
              success && <Alert  message={success} type='success'  onClose={() => setSuccess("")}/>
            }
            {/* BUTTONS */}
            <Button type='submit'
                disabled={isPending}
                className={`text-white rounded-md p-2 w-full ${isPending ? 'bg-gray-400' : 'bg-black'} mt-2`}
                fullWidth>
                Register
            </Button>
            <div className="flex gap-2 pt-3">
              <p className='text-small'>Already have an account?</p>
              <Link href={'/auth/login'} className="underline text-small">Login</Link>
            </div>
        </form>
     
  );
}