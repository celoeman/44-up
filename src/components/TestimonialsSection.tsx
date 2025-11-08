'use client';

import { Badge } from '@/components/ui/badge';
import ScrollAnimation from '@/components/ScrollAnimation';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const companyLogos = [
    {
        name: 'AegisRider',
        logo: '/companies/aegisrider.png',
    },
    {
        name: 'Better Earth',
        logo: '/companies/better-earth.svg',
    },
    {
        name: 'Captivr',
        logo: '/companies/captivr.png',
    },
    {
        name: 'ClinIntell',
        logo: '/companies/clinintell.png',
    },
    {
        name: 'FlexShopper',
        logo: '/companies/flexshopper.svg',
    },
    {
        name: 'Nyce Homes',
        logo: '/companies/nyce-homes.svg',
    },
];

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CEO, TechStart Inc.',
        company: 'TechStart Inc.',
        content:
            '44Up transformed our startup from idea to IPO-ready platform in just 8 months. Their expertise is unmatched.',
        rating: 5,
        avatar: '👩‍💼',
    },
    {
        name: 'Marcus Rodriguez',
        role: 'CTO, RetailMax',
        company: 'RetailMax',
        content:
            'The e-commerce platform they built increased our online sales by 340%. ROI was achieved in the first quarter.',
        rating: 5,
        avatar: '👨‍💻',
    },
    {
        name: 'Emily Watson',
        role: 'Founder, HealthFlow',
        company: 'HealthFlow',
        content:
            'From mobile app to web platform, 44Up delivered everything on time and under budget. Exceptional team.',
        rating: 5,
        avatar: '👩‍⚕️',
    },
];

export default function TestimonialsSection() {
    return (
        <section className='py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0'>
                {/* Floating Elements */}
                <div className='absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-300/5 to-orange-300/5 rounded-full blur-3xl'></div>
                <div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-300/5 to-pink-300/5 rounded-full blur-3xl'></div>

                {/* Subtle Pattern */}
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.02)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.02)_0%,transparent_50%)]'></div>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Header */}
                <div className='text-center mb-20'>
                    <ScrollAnimation delay={0.1}>
                        <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
                            44Up
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                            See what our clients say about working with 44Up
                        </p>
                    </ScrollAnimation>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
                    {testimonials.map((testimonial, index) => (
                        <ScrollAnimation
                            key={index}
                            delay={0.1 + index * 0.15}
                            direction='up'
                        >
                            <div>
                                <div className='relative bg-white rounded-3xl p-8 border-2 border-gray-200'>
                                    {/* Quote icon */}
                                    <div className='absolute top-6 right-6 text-6xl text-orange-500/10 font-serif leading-none'>
                                        &quot;
                                    </div>

                                    {/* Content */}
                                    <div className='relative'>
                                        {/* Rating */}
                                        <div className='flex mb-6'>
                                            {[...Array(testimonial.rating)].map(
                                                (_, i) => (
                                                    <span
                                                        key={i}
                                                        className='text-orange-500 text-xl'
                                                    >
                                                        ★
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        {/* Testimonial text */}
                                        <p className='text-gray-800 text-lg leading-relaxed mb-8 font-medium relative z-10'>
                                            {testimonial.content}
                                        </p>

                                        {/* Divider */}
                                        <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6'></div>

                                        {/* Author info */}
                                        <div className='flex items-center gap-4'>
                                            <div className='w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-3xl'>
                                                {testimonial.avatar}
                                            </div>
                                            <div className='flex-1'>
                                                <h4 className='font-bold text-gray-900 text-lg'>
                                                    {testimonial.name}
                                                </h4>
                                                <p className='text-sm text-gray-600 mb-1'>
                                                    {testimonial.role}
                                                </p>
                                                <Badge className='bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-700 border-orange-200 text-xs'>
                                                    {testimonial.company}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>

            {/* Background Elements */}
            <div className='absolute inset-0'>
                {/* Floating Elements */}
                <div className='absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-300/5 to-orange-300/5 rounded-full blur-3xl'></div>
                <div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-300/5 to-pink-300/5 rounded-full blur-3xl'></div>

                {/* Subtle Pattern */}
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.02)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.02)_0%,transparent_50%)]'></div>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        Trusted by Industry Leaders
                    </h2>
                    <p className='text-gray-600'>
                        We work with some of the world&apos;s most innovative
                        companies
                    </p>
                </div>
                <InfiniteMovingCards
                    items={companyLogos}
                    direction='left'
                    speed='normal'
                    pauseOnHover={true}
                />
            </div>
        </section>
    );
}
