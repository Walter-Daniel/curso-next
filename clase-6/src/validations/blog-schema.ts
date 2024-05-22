import {z} from 'zod';

export const blogSchema = z.object({
    title: z.string().min(5, {
        message: 'El título debe tener un mínimo de 5 caracteres'
    }).max(25, {
        message: 'El título puede tener hasta 25 caracteres'
    }),
    description: z.string().min(10, {
        message: 'La descripción debe tener un mínimo de 10 caracteres'
    }).max(300, {
        message: 'La descripción puede tener hasta 300 caracteres'
    }),
    image: z.string().trim().min(5,{
        message: 'Debe ingresar una url correcta'
    })
})