'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Menu, X, Mail } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const scrollPositionRef = useRef(0);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollDifference = scrollPosition - lastScrollY.current;

            setIsScrolled(scrollPosition > 0);

            // Hide header when scrolling down, show when scrolling up
            // Also show header when at the top of the page
            if (scrollPosition < 10) {
                setIsHeaderVisible(true);
            } else if (scrollDifference > 5) {
                // Scrolling down
                setIsHeaderVisible(false);
            } else if (scrollDifference < -5) {
                // Scrolling up
                setIsHeaderVisible(true);
            }

            lastScrollY.current = scrollPosition;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            // Save current scroll position
            scrollPositionRef.current = window.scrollY;

            // Lock scroll on body and html
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPositionRef.current}px`;
            document.body.style.width = '100%';
            document.documentElement.style.overflow = 'hidden';
        } else {
            // Restore scroll
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.documentElement.style.overflow = '';

            // Restore scroll position
            window.scrollTo(0, scrollPositionRef.current);
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/90 backdrop-blur-md border-b border-white/20'
                        : 'bg-transparent'
                } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
            >
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
                                className='text-slate-900 hover:text-slate-700 transition-colors font-medium text-base'
                            >
                                About
                            </Link>
                            <div className='relative group'>
                                <Link
                                    href='/services'
                                    className='text-slate-900 hover:text-slate-700 transition-colors font-medium inline-flex items-center text-base'
                                >
                                    Services
                                </Link>
                            </div>
                            <Link
                                href='/process'
                                className='text-slate-900 hover:text-slate-700 transition-colors font-medium text-base'
                            >
                                Process
                            </Link>
                            {/* <Link
                                href='/contact'
                                className='text-gray-700 hover:text-gray-900 transition-colors font-medium text-base'
                            >
                                Contact
                            </Link> */}
                        </nav>

                        <div className='flex items-center space-x-4'>
                            {/* Desktop Buttons */}
                            <a
                                href='mailto:info@44up.dev'
                                className='hidden sm:block'
                            >
                                <Button
                                    variant='outline'
                                    className='bg-transparent border-orange-500 text-orange-500 hover:bg-orange-50 p-2'
                                    aria-label='Contact via email'
                                >
                                    <Mail className='h-5 w-5' />
                                </Button>
                            </a>
                            <a
                                href='https://calendly.com/44up-info/30min'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hidden sm:block'
                            >
                                <Button className='bg-orange-500 hover:bg-orange-600 shadow-lg text-white font-medium transition-all duration-300'>
                                    Book a Call
                                </Button>
                            </a>

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
                className={`fixed inset-0 z-[9998] md:hidden transition-opacity duration-300 ${
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
                className={`fixed top-0 right-0 w-80 max-w-[85vw] z-[9999] bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{
                    height: '100dvh',
                    maxHeight: '100dvh',
                    paddingTop: 'env(safe-area-inset-top)',
                    paddingBottom: 'env(safe-area-inset-bottom)',
                }}
            >
                <div className='flex flex-col flex-1 min-h-0 overflow-hidden'>
                    {/* Mobile Menu Header */}
                    <div className='flex items-center justify-between p-6 border-b border-gray-200'>
                        <Link href='/' onClick={closeMenu}>
                            <Logo size='lg' variant='dark' />
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
                                className='block px-4 py-3 rounded-lg text-slate-900 hover:bg-slate-50 hover:text-slate-700 transition-all duration-200 font-medium'
                            >
                                About
                            </Link>
                            <Link
                                href='/services'
                                onClick={closeMenu}
                                className='block px-4 py-3 rounded-lg text-slate-900 hover:bg-slate-50 hover:text-slate-700 transition-all duration-200 font-medium'
                            >
                                Services
                            </Link>
                            <Link
                                href='/process'
                                onClick={closeMenu}
                                className='block px-4 py-3 rounded-lg text-slate-900 hover:bg-slate-50 hover:text-slate-700 transition-all duration-200 font-medium'
                            >
                                Process
                            </Link>
                            {/* <Link
                                href='/contact'
                                onClick={closeMenu}
                                className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 font-medium'
                            >
                                Contact
                            </Link> */}
                        </div>

                        {/* Mobile Menu Buttons */}
                        <div className='mt-8 space-y-3 pt-8 border-t border-gray-200'>
                            <a
                                href='mailto:info@44up.dev'
                                onClick={closeMenu}
                                className='block'
                            >
                                <Button
                                    variant='outline'
                                    className='w-full bg-transparent border-orange-500 text-orange-500 hover:bg-orange-50 flex items-center justify-center gap-2'
                                    aria-label='Contact via email'
                                >
                                    <Mail className='h-5 w-5' />
                                    <span>Contact</span>
                                </Button>
                            </a>
                            <a
                                href='https://calendly.com/44up-info/30min'
                                target='_blank'
                                rel='noopener noreferrer'
                                onClick={closeMenu}
                                className='block'
                            >
                                <Button className='w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg text-white font-medium transition-all duration-300'>
                                    Book a Call
                                </Button>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
