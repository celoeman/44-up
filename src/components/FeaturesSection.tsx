'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const features = [
    {
        icon: '🤖',
        title: 'AI-Powered Solutions',
        description:
            'Deploy intelligent chatbots and AI systems that learn, adapt, and provide 24/7 customer support.',
    },
    {
        icon: '🚀',
        title: 'Lightning Fast Development',
        description:
            'Cut development time by 60% with our agile methodology and expert team.',
    },
    {
        icon: '📱',
        title: 'Mobile-First Approach',
        description:
            'Every solution is built mobile-first, ensuring perfect performance across all devices.',
    },
    {
        icon: '🔒',
        title: 'Enterprise Security',
        description:
            "Bank-level security protocols protect your data and your customers' trust.",
    },
    {
        icon: '📊',
        title: 'Data-Driven Results',
        description:
            'Real-time analytics and insights to optimize your digital presence continuously.',
    },
    {
        icon: '⚡',
        title: '24/7 Support',
        description:
            'Round-the-clock technical support ensures your business never stops running.',
    },
];

export default function FeaturesSection() {
    return (
        <section className='py-24 px-4 bg-white relative overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0'>
                {/* Gradient Orbs */}
                <div className='absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl'></div>
                <div className='absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl'></div>

                {/* Subtle Pattern */}
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,146,60,0.03)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.03)_0%,transparent_50%)]'></div>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                <div className='text-center mb-16'>
                    <ScrollAnimation delay={0.1}>
                        <div className='inline-block mb-6 px-6 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full border border-orange-200'>
                            <span className='text-sm font-semibold text-orange-700'>
                                ✨ Why Choose 44Up?
                            </span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
                            Built for Your Success
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.3}>
                        <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                            We don't just build websites and apps. We craft digital
                            experiences that transform businesses and drive growth.
                            Our strategy isn't prepackaged, it's built with you in
                            mind.
                        </p>
                    </ScrollAnimation>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                    {features.map((feature, index) => (
                        <ScrollAnimation
                            key={index}
                            delay={0.1 + index * 0.1}
                            direction='up'
                        >
                            <div className='group relative'>
                            {/* Gradient border on hover */}
                            <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500'></div>
                            
                            <div className='relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2'>
                                {/* Icon with gradient background */}
                                <div className='w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-orange-200'>
                                    <div className='text-4xl'>{feature.icon}</div>
                                </div>
                                
                                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                    {feature.title}
                                </h3>
                                <p className='text-gray-600 leading-relaxed mb-4'>
                                    {feature.description}
                                </p>
                                
                                {/* Decorative element */}
                                <div className='h-1 w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mt-4 group-hover:w-20 transition-all duration-300'>                                </div>
                            </div>
                        </div>
                        </ScrollAnimation>
                    ))}
                </div>

                <ScrollAnimation delay={0.3} direction='up'>
                    <div className='text-center'>
                        <div className='inline-block bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-200 shadow-lg'>
                        <p className='text-lg text-gray-700 mb-6 font-medium'>
                            Ready to transform your digital presence?
                        </p>
                        <Link href='/services'>
                            <Button
                                size='lg'
                                className='text-lg px-10 py-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold'
                            >
                                Explore Our Solutions
                            </Button>
                        </Link>
                    </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
