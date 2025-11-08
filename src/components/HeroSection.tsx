'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Logo from '@/components/Logo';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function HeroSection() {
    const [currentVideo, setCurrentVideo] = useState('/video2.mp4');
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleVideoEnd = () => {
            // Rotate between video2 and video1
            setCurrentVideo((prev) => 
                prev === '/video2.mp4' ? '/video1.mp4' : '/video2.mp4'
            );
        };

        video.addEventListener('ended', handleVideoEnd);
        
        // Ensure video plays when source changes
        video.load();
        video.play().catch(() => {});

        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, [currentVideo]);

    return (
        <section className='relative h-screen flex items-center justify-center overflow-hidden'>
            {/* Background Video */}
            <div className='absolute inset-0 overflow-hidden'>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    preload='auto'
                    className='absolute inset-0 w-full h-full object-cover object-center'
                    style={{ objectPosition: 'center center' }}
                    onLoadedData={(e) => {
                        // Ensure video plays after load
                        (e.target as HTMLVideoElement).play().catch(() => {});
                    }}
                >
                    <source src={currentVideo} type='video/mp4' />
                </video>
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
                    <ScrollAnimation delay={0.1}>
                        <Badge className='mb-8 bg-orange-500/20 text-gray-800 border border-orange-300 backdrop-blur-sm px-6 py-2 text-sm font-medium shadow-lg'>
                            🚀 Your Digital Transformation Partner
                        </Badge>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.2}>
                        <h1 className='text-6xl md:text-8xl font-bold text-gray-800 mb-8 leading-tight drop-shadow-lg'>
                            Redefine the Next Phase
                            <span className='block text-gray-800'>
                                of Your Business
                            </span>
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.4}>
                        <div className='flex flex-col sm:flex-row gap-6 justify-center mb-16'>
                            <a 
                                href='https://calendly.com/44up-info/30min' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <Button
                                    size='lg'
                                    className='text-lg px-10 py-8 bg-orange-500 hover:bg-orange-800 shadow-2xl hover:shadow-orange-700/25 transition-all duration-300 transform hover:scale-105 text-white font-medium'
                                >
                                    Start Your Project
                                </Button>
                            </a>
                        </div>
                    </ScrollAnimation>
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
