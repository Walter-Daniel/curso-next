'use client'
import React, { useState } from 'react';

export default function ContactPage(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validación simple
    let newErrors = { ...errors };
    if (formData.name.trim() === '') {
      newErrors.name = 'Por favor, ingrese su nombre';
    } else {
      newErrors.name = '';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Por favor, ingrese su correo electrónico';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Por favor, ingrese un correo electrónico válido';
    } else {
      newErrors.email = '';
    }
    if (formData.message.trim() === '') {
      newErrors.message = 'Por favor, ingrese un mensaje';
    } else {
      newErrors.message = '';
    }
    setErrors(newErrors);
    // Si no hay errores, se puede enviar el formulario
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log('Formulario enviado:', formData);
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
          <p><strong>Dirección:</strong> 123 Calle Principal, Ciudad, País</p>
          <p><strong>Teléfono:</strong> +123 456 7890</p>
          <p><strong>Correo Electrónico:</strong> info@example.com</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" rows={4} name="message" value={formData.message} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            {errors.message && <span className="text-red-500">{errors.message}</span>}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Enviar</button>
        </form>
      </div>
    </div>
  );
};