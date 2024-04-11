'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { NavLink } from './NavLink';

const links = [
    { url: '/', title: 'Inicio' },
    { url: '/blog', title: 'Blog' },
    { url: '/gallery', title: 'Galería' },
    { url: '/contact', title: 'Contacto' }
];

export const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>
        {/* LINKS */}
        <div className='hidden md:flex gap-4 w-1/3'>
            {links.map(link => (
                <NavLink url={link.url} title={link.title} key={link.title}  />
            ))}
        </div>
        {/* LOGO */}
        <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
            <Link href='/' className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                <span className='text-white mr-1'>Turismo</span>
                <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>ARG</span>
            </Link>
        </div>
        {/* SOCIAL */}
        <div className='hidden md:flex gap-4 w-1/3 justify-center'>
            <Link href=''>
                <Image src='/github.png' alt='GitHub Icon' width={24} height={24} />
            </Link>
            <Link href=''>
                <Image src='/linkedin.png' alt='Linkedin Icon' width={24} height={24} />
            </Link>
        </div>
        {/* RESPONSIVE MENU */}
        <div className='md:hidden'>
            {/* MENU BOTTON */}
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen((prev)=> !prev)}>
                <div className="w-10 h-1 bg-white rounded"></div>
                <div className="w-10 h-1 bg-white rounded"></div>
                <div className="w-10 h-1 bg-white rounded"></div>
            </button>
            {/* MENU LIST */}
            {
                open && (
                    <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl'>
                        {links.map(link => (
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
                    </div>
                )
            }

        </div>
    </div>
  )
}
