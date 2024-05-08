import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; 
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  type?: 'submit' | 'button';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, type='button', ...props }) => {
  const classes = {
    primary: 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg 	text-white py-2 px-4 rounded-xl',
    secondary: 'border border-white ease-in-out duration-300 hover:bg-rose-500 text-white text-sm py-3 px-4 rounded-xl',
    fullWidth: 'w-full'
  };

  const buttonClasses = `${classes[variant]} ${fullWidth ? classes.fullWidth : ''}`;

  return (
    <button className={buttonClasses} type={type} {...props}>
      {children}
    </button>
  );
};