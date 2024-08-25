'use client'

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '@/validations/user-schema';
import { Inputs } from '@/app/interfaces/auth';
import { Alert, Title } from '@/components';

import { authenticate } from '@/actions/auth/login';
import { useState, useTransition } from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';


export const LoginForm = () => {
  const route = useRouter()
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(signInSchema),
  });

  const handleGoogleSignIn = async () => {
    console.log('Signin with google');
  };

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      authenticate(values)
        .then((data) => {
          setError(data?.error)
          // setSuccess(data?.success)
        })
      route.refresh();
    })
    // reset();
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
      <div className="flex flex-col pb-5 relative ">
        <label htmlFor="email" className="pb-1">Email</label>
        <input
          type="email"
          id="email"
          defaultValue={"prueba@email.com"}
          placeholder="jhon@example.com"
          className="border-small rounded-md p-2 bg-white border-gray-300 font-medium"
          {...register('email')}
        />
        {
          errors.email?.message && <small className="text-red-500 absolute bottom-0">{errors.email?.message}</small>
        }
      </div>
      {/* Password */}
      <div className="flex flex-col pb-5 relative">
        <label htmlFor="passowrd" className="pb-1">Password</label>
        <input
          type="password"
          id="password"
          defaultValue={"123456"}
          placeholder="Insert your password here"
          className="border-small rounded-md p-2 border-gray-300 font-medium"
          {...register('password')}
        />
        {
          errors.password?.message && <small className="text-red-500 absolute bottom-0">{errors.password?.message}</small>
        }
      </div>
      {/* ALERT */}
      {
        error && <Alert message={error} type='error' onClose={() => setError("")} />
      }
      {
        success && <Alert message={success} type='success' onClose={() => setSuccess("")} />
      }
      {/* BUTTONS */}
      <Button type='submit'
        disabled={isPending}
        className={`text-white rounded-md p-2 w-full ${isPending ? 'bg-gray-400' : 'bg-black'} mt-2`}
        fullWidth>
        Login
      </Button>
      <div className='flex gap-2 pt-3'>
        <p className='text-sm'>Don't have an account?</p>
        <Link href={'/auth/register'} className='underline text-sm'>
          Sign up
        </Link>
      </div>
    </form>
  )
}
