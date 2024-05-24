'use client'

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '@/validations/user-schema';
import { Inputs } from '@/app/interfaces/auth';
import { Alert, FormAuth, Title } from '@/components';

import { authenticate } from '@/actions/auth/login';
import { useState, useTransition } from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';


export const LoginForm = () => {

  const route = useRouter()

  const [ isPending, startTransition ] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  
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

  console.log(error, success)
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
