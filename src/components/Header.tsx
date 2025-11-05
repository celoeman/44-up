'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent body scroll when menu is open
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/20'>
                <div className='max-w-7xl mx-auto px-4 py-6'>
                    <div className='flex items-center justify-between'>
                        <Link
                            href='/'
                            className='flex items-center'
                            onClick={closeMenu}
                        >
                            <Logo size='lg' />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className='hidden md:flex items-center space-x-8'>
                            <Link
                                href='/about'
                                className='text-gray-700 hover:text-gray-900 transition-colors font-medium text-base'
                            >
                                About
                            </Link>
                            <div className='relative group'>
                                <Link
                                    href='/services'
                                    className='text-gray-700 hover:text-gray-900 transition-colors font-medium inline-flex items-center text-base'
                                >
                                    Services
                                </Link>
                            </div>
                            <Link
                                href='/process'
                                className='text-gray-700 hover:text-gray-900 transition-colors font-medium text-base'
                            >
                                Process
                            </Link>
                            <Link
                                href='/contact'
                                className='text-gray-700 hover:text-gray-900 transition-colors font-medium text-base'
                            >
                                Contact
                            </Link>
                        </nav>

                        <div className='flex items-center space-x-4'>
                            {/* Desktop Buttons */}
                            <Button
                                variant='outline'
                                className='hidden sm:block bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50'
                            >
                                Sign In
                            </Button>
                            <Link href='/contact' className='hidden sm:block'>
                                <Button className='bg-orange-500 hover:bg-orange-600 shadow-lg text-white font-medium transition-all duration-300'>
                                    Get Quote
                                </Button>
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className='md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors'
                                aria-label='Toggle menu'
                            >
                                {isMenuOpen ? (
                                    <X className='h-6 w-6' />
                                ) : (
                                    <Menu className='h-6 w-6' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
                    isMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeMenu}
            >
                <div className='absolute inset-0 bg-black/50 backdrop-blur-sm'></div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='flex flex-col h-full'>
                    {/* Mobile Menu Header */}
                    <div className='flex items-center justify-between p-6 border-b border-gray-200'>
                        <Link href='/' onClick={closeMenu}>
                            <Logo size='lg' />
                        </Link>
                        <button
                            onClick={closeMenu}
                            className='p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors'
                            aria-label='Close menu'
                        >
                            <X className='h-6 w-6' />
                        </button>
                    </div>

                    {/* Mobile Menu Navigation */}
                    <nav className='flex-1 overflow-y-auto px-6 py-8'>
                        <div className='space-y-1'>
                            <Link
                                href='/about'
                                onClick={closeMenu}
                                className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 font-medium'
                            >
                                About
                            </Link>
                            <Link
                                href='/services'
                                onClick={closeMenu}
                                className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 font-medium'
                            >
                                Services
                            </Link>
                            <Link
                                href='/process'
                                onClick={closeMenu}
                                className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 font-medium'
                            >
                                Process
                            </Link>
                            <Link
                                href='/contact'
                                onClick={closeMenu}
                                className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 font-medium'
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Mobile Menu Buttons */}
                        <div className='mt-8 space-y-3 pt-8 border-t border-gray-200'>
                            <Button
                                variant='outline'
                                onClick={closeMenu}
                                className='w-full bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50'
                            >
                                Sign In
                            </Button>
                            <Link
                                href='/contact'
                                onClick={closeMenu}
                                className='block'
                            >
                                <Button className='w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg text-white font-medium transition-all duration-300'>
                                    Get Quote
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
