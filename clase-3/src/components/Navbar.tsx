import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className="bg-black p-4">
        <ul className="flex justify-center space-x-4">
        <li>
            <Link href="/client" className="text-white">
                Cliente
            </Link>
        </li>
        <li>
            <Link href="/server" className="text-white">
                Servidor
            </Link>
        </li>
        </ul>
    </nav>
  )
}
