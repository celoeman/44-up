import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Logo from '@/components/Logo';

export default function HeroSection() {
    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-36'>
            {/* Background Image */}
            <div className='absolute inset-0 overflow-hidden'>
                <Image
                    src='/tampa2.jpg'
                    alt='Tampa background'
                    fill
                    className='object-cover object-top scale-125'
                    style={{ objectPosition: 'center top' }}
                    priority
                    quality={90}
                />
                {/* White Tinted Overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/70'></div>
            </div>

            {/* Animated Background Elements */}
            <div className='absolute inset-0'>
                {/* Floating Orbs */}
                <div className='absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute top-40 right-20 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute bottom-20 left-40 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000'></div>

                {/* Grid Pattern */}
                <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

                {/* Floating Particles */}
                <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-500'></div>
                <div className='absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400/50 rounded-full animate-bounce delay-1000'></div>
                <div className='absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-200/50 rounded-full animate-bounce delay-1500'></div>
                <div className='absolute bottom-1/4 right-1/4 w-1 h-1 bg-orange-400/50 rounded-full animate-bounce delay-2000'></div>
            </div>

            <div className='max-w-7xl mx-auto px-4 py-20 relative z-10'>
                <div className='text-center'>
                    <Badge className='mb-8 bg-orange-500/20 text-gray-800 border border-orange-300 backdrop-blur-sm px-6 py-2 text-sm font-medium shadow-lg'>
                        🚀 Your Digital Transformation Partner
                    </Badge>

                    <h1 className='text-6xl md:text-8xl font-bold text-gray-800 mb-8 leading-tight drop-shadow-lg'>
                        Redefine the Next Phase
                        <span className='block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'>
                            of Your Business
                        </span>
                    </h1>

                    <p className='text-xl md:text-2xl text-gray-700 mb-12 max-w-5xl mx-auto leading-relaxed drop-shadow-md'>
                        At 44Up, we help you feel confident in your
                        digital presence. Whether you're launching a startup or
                        scaling a global brand, our technology solutions are
                        designed to make your business run smoother, grow
                        faster, and feel one step ahead.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-6 justify-center mb-16'>
                        <Link href='/contact'>
                            <Button
                                size='lg'
                                className='text-lg px-10 py-8 bg-orange-500 hover:bg-orange-600 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 text-white font-medium'
                            >
                                Start Your Project
                            </Button>
                        </Link>
                        <Link href='/services'>
                            <Button
                                variant='outline'
                                size='lg'
                                className='text-lg px-10 py-8 border-2 border-gray-300 text-gray-800 hover:bg-gray-50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105'
                            >
                                View Our Solutions
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
                    <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse'></div>
                </div>
            </div>
        </section>
    );
}
