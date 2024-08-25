import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import { signInSchema } from './validations/user-schema';
import { getUserByEmail } from './data/user';

 //Edge compatibility
export default {
    providers: [
    Credentials({
      async authorize(credentials) {
        const validatedField = signInSchema.safeParse(credentials);
        if(validatedField.success){
            const { email, password } = validatedField.data;
            const user = await getUserByEmail(email);
            if(!user || !user.password) return null;

            const passwordMatch = await bcrypt.compare(
                password,
                user.password
            );

            if(passwordMatch) return user;

        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig 