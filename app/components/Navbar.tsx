import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  // Define the navLinks array
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className='border-2 rounded-full px-6 py-3 my-4 flex items-center justify-between gap-6 mx-auto w-fit'>
        {
            navLinks.map(link => (
                <Link key={link.name} href={link.href} className='font-medium'>
                    {link.name}
                </Link>
            ))
        }
    </header>
  )
}

export default Navbar;
