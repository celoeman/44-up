'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function AIChatbotSection() {
    return (
        <section className='py-24 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0'>
                {/* Animated Grid */}
                <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]'></div>

                {/* Floating Elements */}
                <div className='absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-300/10 to-orange-300/10 rounded-full blur-2xl animate-pulse'></div>
                <div className='absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-300/10 to-pink-300/10 rounded-full blur-2xl animate-pulse delay-1000'></div>

                {/* Neural Network Pattern */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5'>
                    <svg viewBox='0 0 400 400' className='w-full h-full'>
                        <defs>
                            <pattern
                                id='neural'
                                x='0'
                                y='0'
                                width='40'
                                height='40'
                                patternUnits='userSpaceOnUse'
                            >
                                <circle
                                    cx='20'
                                    cy='20'
                                    r='2'
                                    fill='currentColor'
                                    className='text-blue-300'
                                />
                                <path
                                    d='M20,20 L60,20 M20,20 L20,60'
                                    stroke='currentColor'
                                    strokeWidth='0.5'
                                    className='text-blue-300/30'
                                />
                            </pattern>
                        </defs>
                        <rect width='100%' height='100%' fill='url(#neural)' />
                    </svg>
                </div>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Header */}
                <div className='text-center mb-20'>
                    <ScrollAnimation delay={0.1}>
                        <Badge className='mb-6 bg-gradient-to-r from-blue-300/20 to-orange-300/20 text-white border border-white/20 backdrop-blur-sm px-6 py-2'>
                            💻 Custom Software Development
                        </Badge>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <h2 className='text-5xl md:text-6xl font-bold text-white mb-8'>
                            Bespoke Software That
                            <span className='bg-gradient-to-r from-blue-300 via-orange-300 to-pink-300 bg-clip-text text-transparent block'>
                                Transforms Customer Experience
                            </span>
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.3}>
                        <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
                            Build custom software solutions tailored to your
                            unique business needs, designed to streamline
                            operations, improve efficiency, and deliver
                            measurable results that drive growth.
                        </p>
                    </ScrollAnimation>
                </div>

                {/* CTA Section */}
                <ScrollAnimation delay={0.4} direction='up'>
                    <div className='relative mt-20'>
                        <div className='relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-200 overflow-hidden'>
                            {/* Decorative gradient accent */}
                            <div className='absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-orange-500 to-pink-500'></div>

                            {/* Pattern overlay */}
                            <div className='absolute inset-0 opacity-5'>
                                <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(251,146,60,0.1)_25%,rgba(251,146,60,0.1)_50%,transparent_50%,transparent_75%,rgba(251,146,60,0.1)_75%,rgba(251,146,60,0.1))] bg-[size:20px_20px]'></div>
                            </div>

                            <div className='relative z-10'>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                                    {/* Left side - Content */}
                                    <div>
                                        <div className='inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full border border-orange-200'>
                                            <span className='text-sm font-semibold text-orange-700'>
                                                💻 Ecommerce, Web, Mobile
                                            </span>
                                        </div>
                                        <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight'>
                                            Ready to Build Your Vision?
                                        </h3>
                                        <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                                            Partner with us to create software
                                            that perfectly fits your business.
                                            Our custom solutions are designed to
                                            scale with you, integrate seamlessly
                                            with your existing systems, and
                                            deliver the performance your
                                            business demands.
                                        </p>
                                        <a
                                            href='https://calendly.com/44up-info/30min'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Button
                                                size='lg'
                                                className='text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold'
                                            >
                                                Schedule a Consultation
                                            </Button>
                                        </a>
                                    </div>

                                    {/* Right side - Stats/Features */}
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200'>
                                            <div className='text-3xl font-bold text-pink-600 mb-2'>
                                                40%
                                            </div>
                                            <div className='text-sm text-gray-700 font-medium'>
                                                Efficiency Increase
                                            </div>
                                        </div>
                                        <div className='bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200'>
                                            <div className='text-3xl font-bold text-pink-600 mb-2'>
                                                50%
                                            </div>
                                            <div className='text-sm text-gray-700 font-medium'>
                                                Cost Reduction
                                            </div>
                                        </div>
                                        <div className='bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200'>
                                            <div className='text-3xl font-bold text-pink-600 mb-2'>
                                                3-6
                                            </div>
                                            <div className='text-sm text-gray-700 font-medium'>
                                                Months to Launch
                                            </div>
                                        </div>
                                        <div className='bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200'>
                                            <div className='text-3xl font-bold text-pink-600 mb-2'>
                                                100%
                                            </div>
                                            <div className='text-sm text-gray-700 font-medium'>
                                                Tailored to Your Needs
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-6 text-center'>
                                        <p className='text-xs text-gray-500 italic'>
                                            *Metrics based on typical custom
                                            software projects. Actual results
                                            vary based on project scope and
                                            requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
