import { Button } from './ui/button';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const onboardingSteps = [
    {
        title: 'Discovery',
        description:
            'We schedule a meeting to discuss your goals, needs, and expectations.',
    },
    {
        title: 'Proposal Presentation',
        description:
            'We present our tailored proposal including pricing and project details.',
    },
    {
        title: 'Project Kickoff',
        description:
            'Once you approve the proposal, we initiate the project, assigning a dedicated team.',
    },
    {
        title: 'Regular Updates',
        description: 'We provide regular progress updates and milestones.',
    },
    {
        title: 'Project Completion',
        description:
            'Upon project completion, we conduct thorough testing and hand over all deliverables.',
    },
    {
        title: 'Ongoing Support',
        description: 'We offer post-launch support and assistance as needed.',
    },
];

export default function OnboardingSection() {
    return (
        <section className='py-20 px-4 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <ScrollAnimation delay={0.1}>
                        <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                            Initial Discovery
                        </h2>
                    </ScrollAnimation>
                </div>

                <div className='relative max-w-6xl mx-auto'>
                    {/* Vertical timeline line */}
                    <div className='absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500'></div>

                    <div className='space-y-12'>
                        {onboardingSteps.map((step, index) => (
                            <ScrollAnimation
                                key={index}
                                delay={0.1 + index * 0.1}
                                direction='up'
                            >
                                <div className='relative flex items-start md:items-center'>
                                {/* Timeline dot */}
                                <div className='absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex-shrink-0'>
                                    <div className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center shadow-lg'>
                                        <div className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center'>
                                            <span className='text-lg md:text-xl font-bold text-orange-600'>
                                                {index + 1}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='ml-24 md:ml-0 md:w-full md:flex md:items-center md:justify-between'>
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className='md:w-[45%] md:text-right md:pr-12'>
                                                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>
                                                    {step.title}
                                                </h3>
                                                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                                                    {step.description}
                                                </p>
                                            </div>
                                            <div className='hidden md:block md:w-[45%]'></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='hidden md:block md:w-[45%]'></div>
                                            <div className='md:w-[45%] md:text-left md:pl-12'>
                                                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>
                                                    {step.title}
                                                </h3>
                                                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                                                    {step.description}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>

                <ScrollAnimation delay={0.4} direction='up'>
                    <div className='text-center mt-12'>
                        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                Ready to Start Your Project?
                            </h3>
                            <p className='text-lg text-gray-600 mb-6'>
                                Let&apos;s discuss your vision and create something
                                extraordinary together.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                                <a
                                    href='https://calendly.com/44up-info/30min'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button size='lg' className='text-lg px-8'>
                                        Start Your Project
                                    </Button>
                                </a>
                                <Link href='/services'>
                                    <Button
                                        variant='outline'
                                        size='lg'
                                        className='text-lg px-8'
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
