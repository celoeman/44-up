import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Logo from '@/components/Logo';

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-white py-12'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div>
                        <Link href='/' className='block mb-4'>
                            <Logo variant='white' />
                        </Link>
                        <p className='text-gray-400 text-sm'>
                            Your vision, our expertise.
                        </p>
                    </div>

                    <div>
                        <h3 className='font-semibold mb-4'>Services</h3>
                        <ul className='space-y-2 text-sm text-gray-400'>
                            <li>
                                <Link
                                    href='/services'
                                    className='hover:text-white transition-colors'
                                >
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/services'
                                    className='hover:text-white transition-colors'
                                >
                                    Mobile Apps
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/services'
                                    className='hover:text-white transition-colors'
                                >
                                    E-Commerce
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/services'
                                    className='hover:text-white transition-colors'
                                >
                                    AI & Machine Learning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-semibold mb-4'>Company</h3>
                        <ul className='space-y-2 text-sm text-gray-400'>
                            <li>
                                <Link
                                    href='/'
                                    className='hover:text-white transition-colors'
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/team'
                                    className='hover:text-white transition-colors'
                                >
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/careers'
                                    className='hover:text-white transition-colors'
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contact'
                                    className='hover:text-white transition-colors'
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-semibold mb-4'>Support</h3>
                        <ul className='space-y-2 text-sm text-gray-400'>
                            <li>
                                <Link
                                    href='/contact'
                                    className='hover:text-white transition-colors'
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contact'
                                    className='hover:text-white transition-colors'
                                >
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contact'
                                    className='hover:text-white transition-colors'
                                >
                                    Status
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contact'
                                    className='hover:text-white transition-colors'
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className='my-8 bg-gray-700' />

                <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
                    <p>&copy; 2024 44Up. All rights reserved.</p>
                    <div className='flex space-x-6 mt-4 md:mt-0'>
                        <a
                            href='#'
                            className='hover:text-white transition-colors'
                        >
                            Twitter
                        </a>
                        <a
                            href='#'
                            className='hover:text-white transition-colors'
                        >
                            LinkedIn
                        </a>
                        <a
                            href='#'
                            className='hover:text-white transition-colors'
                        >
                            GitHub
                        </a>
                        <a
                            href='#'
                            className='hover:text-white transition-colors'
                        >
                            Dribbble
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
