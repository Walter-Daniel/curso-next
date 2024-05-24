'use server'

import { signInSchema } from '@/validations/user-schema';
import { signIn, signOut } from '@/auth';
import * as z from 'zod';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
 
export const authenticate = async(
  values: z.infer<typeof signInSchema>
) => {

    console.log('desde action login: ', values)
    
    const validatedFields = signInSchema.safeParse(values);

    console.log('estan llegando los valores??: ', values)
    if(!validatedFields.success) {
        return {error: 'Invalid credentials'};
    }

    const { email, password  } = validatedFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin": 
                    return { error: 'Invalid Credentials!' } 
                default:
                    return { error: 'Something went wrong!' }
            }
        }
        throw error;
    }
};

export const logout = async() => {
    await signOut({ redirectTo: "/auth/login" })
}