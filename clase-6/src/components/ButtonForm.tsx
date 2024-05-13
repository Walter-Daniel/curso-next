import React, { FC } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { CustomButton } from './Button'

interface ButtonProps {
    handleGoogleSignIn: () => Promise<void>
    title: 'Sign up' | 'Sign in'
}

export const ButtonForm: FC<ButtonProps> = ({handleGoogleSignIn, title}) => {
  return (
    <div className='pt-3'>
        <CustomButton type='submit' fullWidth>{title}</CustomButton>
        <div className="p-1 flex items-center justify-center">
            <div className="border-t border-black flex-grow mr-3"></div>
            <p className='text-center text-small'>Or</p>
            <div className="border-t border-black flex-grow ml-3"></div>
        </div>
        <Button onClick={handleGoogleSignIn} fullWidth color='secondary'>
            {/* <Image src={'/google.png'} alt="google icon" width={25} height={25}/> */}
            <p>{title} with Google</p>
        </Button>
    </div>
  )
}
