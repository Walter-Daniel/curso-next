import { Inputs } from '../types/auth';
import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface FormProps {
    register: UseFormRegister<Inputs>;
    errors: FieldErrors<Inputs>;
}

export const FormAuth: FC<FormProps> = ({register, errors}) => {
  return (
    <div>
        {/* Email */}
        <div className="flex flex-col pb-5 relative">
                <label htmlFor="email" className="pb-1">Correo</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Ingresa tu correo" 
                  className="border-small rounded-md p-2 border-gray-400"
                  {...register('email')}
                  />
                  {
                    errors.email?.message && <small className="text-red-500 absolute bottom-0">{errors.email?.message}</small>
                  }
            </div>
            {/* Password */}
            <div className="flex flex-col pb-5 relative">
                <label htmlFor="Contraseña" className="pb-1">Password</label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="Ingresa tu contraseña" 
                  className="border-small rounded-md p-2 border-gray-400 font-medium" 
                  {...register('password')}
                  />
                  {
                    errors.password?.message && <small className="text-red-500 absolute bottom-0">{errors.password?.message}</small>
                  }
            </div>
    </div>
  )
}
