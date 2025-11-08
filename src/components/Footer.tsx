import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Logo from '@/components/Logo';

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-white py-12'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
                                    href='/services/web-development'
                                    className='hover:text-white transition-colors'
                                >
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/services/mobile-app-development'
                                    className='hover:text-white transition-colors'
                                >
                                    Mobile Apps
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/services/hosting-and-maintenance'
                                    className='hover:text-white transition-colors'
                                >
                                    Hosting & Maintenance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-semibold mb-4'>Company</h3>
                        <ul className='space-y-2 text-sm text-gray-400'>
                            <li>
                                <Link
                                    href='/about'
                                    className='hover:text-white transition-colors'
                                >
                                    About Us
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
                        </ul>
                    </div>

                    {/* <div>
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
                    </div> */}
                </div>

                <Separator className='my-8 bg-gray-700' />

                <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
                    <p>&copy; 2024 44Up. All rights reserved.</p>
                    <p className='mt-4 md:mt-0'>
                        Made with{' '}
                        <span className='inline-block text-white'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4 inline-block'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                            >
                                <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                            </svg>
                        </span>{' '}
                        in Tampa
                    </p>
                </div>
            </div>
        </footer>
    );
}
