'use client'
import { type signOut, } from '@/auth';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from '@nextui-org/react';

import { Title } from './Title';

export const NavbarComponent = (logout:any) => {
 

  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>  
          <Title size="2xl">Purple.dev</Title>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      </NavbarContent>
      <NavbarContent justify="end">
            <NavbarItem>
              <Button onClick={logout}>
                Logout
              </Button>
            </NavbarItem>
          
      </NavbarContent>
    </Navbar>
  );
}
