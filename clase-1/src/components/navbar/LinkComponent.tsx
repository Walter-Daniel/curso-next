import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

export const CustomNavLink = forwardRef<HTMLAnchorElement, any>(({ className, ...rest }, ref) => (
  <NavLink
    ref={ref}
    {...rest}
    className={(isActive) => (isActive ? `${className} Mui-selected` : className)}
    end
  />
));
