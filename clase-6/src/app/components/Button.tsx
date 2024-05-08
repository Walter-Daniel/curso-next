import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; 
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  type?: 'submit' | 'button';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, type='button', ...props }) => {
  const classes = {
    primary: 'bg-black 	text-white font-bold py-2 px-4 rounded',
    secondary: 'bg-rose-400 ease-in-out duration-300 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded',
    fullWidth: 'w-full'
  };

  const buttonClasses = `${classes[variant]} ${fullWidth ? classes.fullWidth : ''}`;

  return (
    <button className={buttonClasses} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
