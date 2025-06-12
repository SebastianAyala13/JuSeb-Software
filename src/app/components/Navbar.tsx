'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="JuSeb SOFTWARE Logo" width={40} height={40} />
            <span className="text-white font-bold text-xl">JuSeb SOFTWARE</span>
          </Link>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menú de escritorio */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLinks pathname={pathname || ''} mobile={false} onClick={() => {}} />
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLinks pathname={pathname || ''} mobile={true} onClick={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLinks({ pathname, mobile, onClick }: { pathname: string; mobile: boolean; onClick: () => void }) {
  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/precios', label: 'Precios' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/blog', label: 'Blog' },
    { href: '/recursos', label: 'Recursos' },
    { href: '/sobre-nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={`${
              mobile
                ? 'block px-3 py-2 rounded-md text-base font-medium'
                : 'text-sm font-medium'
            } ${
              isActive
                ? 'text-blue-400'
                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
            } transition-colors duration-200`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}