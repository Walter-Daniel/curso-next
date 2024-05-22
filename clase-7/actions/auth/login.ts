'use server'

import { signInSchema } from '@/validations/user-schema';
import { signIn } from '@/auth';
import * as z from 'zod';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
 
export const authenticate = async(
//   prevState: string | undefined,
  values: z.infer<typeof signInSchema>
) => {
    
    const validatedFields = signInSchema.safeParse(values);

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