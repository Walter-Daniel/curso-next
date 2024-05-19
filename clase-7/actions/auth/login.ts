'use server'

import { signInSchema } from '@/validations/user-schema';
import { signIn } from '@/auth';
import * as z from 'zod';
import bcrypt from 'bcrypt';
 
export const authenticate = async(
//   prevState: string | undefined,
  values: z.infer<typeof signInSchema>
) => {

    

    console.log(values)
    const validatedFields = signInSchema.safeParse(values);

    if(!validatedFields.success) {
        setTimeout(() => {
            console.log("Retrasado por 1 segundo.");
        }, 5000);
        return {error: 'Invalid credentials'};
    }

    const { email, password  } = validatedFields.data;

    return { success: 'Email sent!' }
}