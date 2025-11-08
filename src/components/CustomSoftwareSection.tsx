'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Code2, Zap, Shield, TrendingUp, Users, Settings } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: Code2,
        title: 'Tailored Solutions',
        description: 'Built specifically for your business processes, workflows, and unique requirements.',
    },
    {
        icon: Zap,
        title: 'Scalable Architecture',
        description: 'Designed to grow with your business, handling increased load and complexity seamlessly.',
    },
    {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Robust security measures and compliance standards to protect your data and operations.',
    },
    {
        icon: TrendingUp,
        title: 'Performance Optimized',
        description: 'High-performance applications that deliver speed and reliability your business demands.',
    },
    {
        icon: Users,
        title: 'User-Centric Design',
        description: 'Intuitive interfaces that enhance productivity and improve user adoption rates.',
    },
    {
        icon: Settings,
        title: 'Seamless Integration',
        description: 'Connects with your existing tools, systems, and workflows for unified operations.',
    },
];

export default function CustomSoftwareSection() {
    return (
        <section className='py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0'>
                {/* Subtle Grid Pattern */}
                <div className='absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

                {/* Floating Orbs */}
                <div className='absolute top-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000'></div>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Header */}
                <div className='text-center mb-20'>
                    <ScrollAnimation delay={0.1}>
                        <Badge className='mb-6 bg-orange-500/10 text-gray-800 border border-orange-300 backdrop-blur-sm px-6 py-2 text-sm font-medium shadow-lg'>
                            Custom Software Development
                        </Badge>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
                            Software Built for Your Business
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.3}>
                        <p className='text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
                            We develop custom software solutions that align with your business objectives, 
                            streamline operations, and drive measurable results. Every line of code is 
                            written with your specific needs in mind.
                        </p>
                    </ScrollAnimation>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <ScrollAnimation
                                key={index}
                                delay={0.1 + index * 0.1}
                                direction='up'
                            >
                                <div className='group relative'>
                                    <div className='relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-orange-500/50 h-full'>
                                        <div className='flex flex-col'>
                                            {/* Icon */}
                                            <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg'>
                                                <Icon className='w-7 h-7 text-white' />
                                            </div>

                                            {/* Title */}
                                            <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300'>
                                                {feature.title}
                                            </h3>

                                            {/* Description */}
                                            <p className='text-gray-600 leading-relaxed'>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <ScrollAnimation delay={0.4} direction='up'>
                    <div className='relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white overflow-hidden'>
                        {/* Background Pattern */}
                        <div className='absolute inset-0 opacity-10'>
                            <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[size:30px_30px]'></div>
                        </div>

                        <div className='relative z-10'>
                            <h3 className='text-4xl md:text-5xl font-bold mb-6'>
                                Ready to Build Your Custom Solution?
                            </h3>
                            <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed'>
                                Let's discuss how custom software can transform your business operations 
                                and accelerate growth.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                                <a
                                    href='https://calendly.com/44up-info/30min'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button
                                        size='lg'
                                        className='text-lg px-10 py-6 bg-orange-500 hover:bg-orange-600 text-white shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 font-semibold'
                                    >
                                        Schedule a Consultation
                                    </Button>
                                </a>
                                <Link href='/services'>
                                    <Button
                                        size='lg'
                                        variant='outline'
                                        className='text-lg px-10 py-6 border-2 border-white/30 bg-transparent hover:bg-white/10 text-white hover:text-white hover:border-white transition-all duration-300 font-semibold'
                                    >
                                        View Our Services
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}

