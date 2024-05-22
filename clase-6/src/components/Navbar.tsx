'use client'

import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase-config";
import Link from "next/link";
import { Title } from "./Title";
import { CustomButton } from "./Button";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
        
    return () => unsubscribe();
  }, []);

  const handlerLogout = () => {
    signOut(auth)
  }

  const menuItems = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Blog',
      href: '/blog'
    },

  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
          <Title size="2xl">Purple.dev</Title>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       {
        menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={item.href}>
              {item.title}
            </Link>
          </NavbarItem>
        ))
       }
      </NavbarContent>
      <NavbarContent justify="end">
       {
        (!user) ? (
         <>
          <NavbarItem className="hidden lg:flex">
            <Link href="/auth/login">Iniciar Sesión</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
            as={Link} 
            href="/auth/register" 
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Registrarse
            </Button>
          </NavbarItem>
         </>
        ) :
        (
          <>
            <NavbarItem className="">
              <Link href="/profile">Perfil</Link>
            </NavbarItem>
            <NavbarItem>
              <CustomButton onClick={handlerLogout}>
                Cerrar sesión
              </CustomButton>
            </NavbarItem>
          </>
        )
       }
      </NavbarContent>
      {/* MOBILE */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
