import { Button } from '@nextui-org/react';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  type?: 'submit' | 'button';
}

export const CustomButton: React.FC<ButtonProps> = ({ children, fullWidth = false, type='button', ...props }) => {
  const classes = {
    primary: 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg',
    fullWidth: 'w-full'
  };

  const buttonClasses = `${classes.primary} ${fullWidth ? classes.fullWidth : ''}`;

  return (
    <Button className={buttonClasses} type={type} {...props}>
      {children}
    </Button>
  );
};
