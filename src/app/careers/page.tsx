import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function CareersPage() {
    const benefits = [
        {
            icon: '💰',
            title: 'Competitive Salary',
            description: 'Above-market compensation packages',
        },
        {
            icon: '🏥',
            title: 'Health Insurance',
            description: 'Comprehensive medical, dental, and vision',
        },
        {
            icon: '🏖️',
            title: 'Flexible PTO',
            description: 'Unlimited vacation and sick days',
        },
        {
            icon: '🏠',
            title: 'Remote Work',
            description: 'Work from anywhere in the world',
        },
        {
            icon: '📚',
            title: 'Learning Budget',
            description: '$2,000 annual professional development',
        },
        {
            icon: '💻',
            title: 'Equipment',
            description: 'Latest MacBook and home office setup',
        },
    ];

    return (
        <div className='min-h-screen'>
            <Header />
            <main className='pt-24 pb-20 px-4 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50'>
                <div className='max-w-7xl mx-auto'>
                    {/* Hero Section */}
                    <div className='text-center mb-16 pt-12'>
                        <ScrollAnimation delay={0.1}>
                            <h1 className='text-5xl font-bold text-gray-800 mb-6'>
                                Join Our Team
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.2}>
                            <p className='text-xl text-gray-700 max-w-4xl mx-auto'>
                                Be part of a dynamic team that's transforming
                                businesses through innovative digital solutions.
                                We're looking for passionate individuals who want to
                                make a real impact.
                            </p>
                        </ScrollAnimation>
                    </div>

                    {/* Benefits Section */}
                    <div className='mb-16'>
                        <ScrollAnimation delay={0.1}>
                            <h2 className='text-4xl font-bold text-gray-800 text-center mb-12'>
                                Why Work With Us
                            </h2>
                        </ScrollAnimation>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {benefits.map((benefit, index) => (
                                <ScrollAnimation
                                    key={index}
                                    delay={0.1 + index * 0.1}
                                    direction='up'
                                >
                                    <div className='bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg'>
                                        <div className='text-center'>
                                            <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                                <span className='text-2xl'>
                                                    {benefit.icon}
                                                </span>
                                            </div>
                                            <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                                {benefit.title}
                                            </h3>
                                            <p className='text-gray-700 text-sm'>
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>

                    {/* Open Positions */}
                    <div className='mb-16'>
                        <ScrollAnimation delay={0.1}>
                            <h2 className='text-4xl font-bold text-gray-800 text-center mb-12'>
                                Open Positions
                            </h2>
                        </ScrollAnimation>
                        {/* <div className='space-y-6'>
                            {openPositions.map((position, index) => (
                                <div
                                    key={index}
                                    className='bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg'
                                >
                                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4'>
                                        <div>
                                            <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                                                {position.title}
                                            </h3>
                                            <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
                                                <span className='flex items-center'>
                                                    <span className='mr-2'>
                                                        📍
                                                    </span>
                                                    {position.location}
                                                </span>
                                                <span className='flex items-center'>
                                                    <span className='mr-2'>
                                                        🏢
                                                    </span>
                                                    {position.department}
                                                </span>
                                                <span className='flex items-center'>
                                                    <span className='mr-2'>
                                                        ⏰
                                                    </span>
                                                    {position.type}
                                                </span>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/careers/apply/${position.id}`}
                                            className='mt-4 lg:mt-0 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-center'
                                        >
                                            Apply Now
                                        </Link>
                                    </div>
                                    <p className='text-gray-700 mb-4'>
                                        {position.description}
                                    </p>
                                    <div>
                                        <h4 className='font-semibold text-gray-800 mb-2'>
                                            Requirements:
                                        </h4>
                                        <ul className='list-disc list-inside text-gray-700 space-y-1'>
                                            {position.requirements.map(
                                                (req, reqIndex) => (
                                                    <li key={reqIndex}>
                                                        {req}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        <ScrollAnimation delay={0.2} direction='up'>
                            <div className='bg-white/80 backdrop-blur-md rounded-2xl p-12 border border-gray-200 shadow-lg text-center'>
                                <div className='text-6xl mb-6'>💼</div>
                                <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                                    We're Not Hiring Right Now
                                </h3>
                                <p className='text-gray-700 max-w-2xl mx-auto leading-relaxed'>
                                    We're not actively recruiting at the moment, but we're always interested in connecting with talented individuals. Feel free to reach out if you'd like to stay in touch for future opportunities.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Application Process */}
                    <ScrollAnimation delay={0.3} direction='up'>
                        <div className='bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg mb-16'>
                            <ScrollAnimation delay={0.1}>
                                <h2 className='text-4xl font-bold text-gray-800 text-center mb-8'>
                                    Application Process
                                </h2>
                            </ScrollAnimation>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                                {[
                                    {
                                        number: '1',
                                        title: 'Apply',
                                        description: 'Submit your application and resume',
                                    },
                                    {
                                        number: '2',
                                        title: 'Review',
                                        description: 'We review your application within 48 hours',
                                    },
                                    {
                                        number: '3',
                                        title: 'Interview',
                                        description: 'Technical and cultural fit interviews',
                                    },
                                    {
                                        number: '4',
                                        title: 'Decision',
                                        description: 'We make our decision and extend an offer',
                                    },
                                ].map((step, index) => (
                                    <ScrollAnimation
                                        key={index}
                                        delay={0.1 + index * 0.1}
                                        direction='up'
                                    >
                                        <div className='text-center'>
                                            <div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                                                <span className='text-white font-bold'>
                                                    {step.number}
                                                </span>
                                            </div>
                                            <h3 className='font-semibold text-gray-800 mb-2'>
                                                {step.title}
                                            </h3>
                                            <p className='text-gray-700 text-sm'>
                                                {step.description}
                                            </p>
                                        </div>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* CTA */}
                    <ScrollAnimation delay={0.4} direction='up'>
                        <div className='text-center'>
                            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                                Don't See Your Role?
                            </h2>
                            <p className='text-gray-700 mb-6'>
                                We're always looking for exceptional talent. Send us
                                your resume!
                            </p>
                            <a
                                href='mailto:info@44up.dev'
                                className='inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors'
                            >
                                Get in Touch
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </main>
            <Footer />
        </div>
    );
}
