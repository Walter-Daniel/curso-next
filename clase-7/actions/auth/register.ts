'use server'

import { userSchema } from '@/validations/user-schema';
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
 
export const signup = async(
  values: z.infer<typeof userSchema>
) => {
    
    const validatedFields = userSchema.safeParse(values);

    if(!validatedFields.success) {
        return {error: 'Invalid credentials'};
    }

    const { email, password, displayName  } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);
    if(existingUser) return { error: 'Email already in use!' }

    await db.user.create({
        data: {
            name: displayName,
            email,
            password: hashedPassword,
        }
    });

    //TODO send verification token email

    return { success: 'User Created' }

    // return { success: 'Email sent!' }
}