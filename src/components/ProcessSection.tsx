import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const processSteps = [
    {
        step: '01',
        title: 'Discovery & Planning',
        description:
            'We dive deep into your business goals, target audience, and competitive landscape to craft the perfect digital strategy.',
        duration: '1-2 weeks',
        color: 'bg-blue-100 text-blue-800',
    },
    {
        step: '02',
        title: 'Design & Development',
        description:
            'Our design and development team creates stunning, user-centric solutions that align with your brand identity and goals.',
        duration: '4-8 weeks',
        color: 'bg-green-100 text-green-800',
    },
    {
        step: '03',
        title: 'Launch & Optimize',
        description:
            'We launch your solution and continuously optimize for maximum performance and ROI.',
        duration: '1-2 weeks',
        color: 'bg-orange-100 text-orange-800',
    },
    {
        step: '04',
        title: 'Marketing & Promotion',
        description:
            'We promote your solution through strategic marketing campaigns to maximize visibility and reach.',
        duration: 'Ongoing',
        color: 'bg-purple-100 text-purple-800',
    },
    {
        step: '05',
        title: 'Monitoring & Optimization',
        description:
            'We continuously refine strategies based on data insights to maximize performance and ROI.',
        duration: 'Ongoing',
        color: 'bg-indigo-100 text-indigo-800',
    },
    {
        step: '06',
        title: 'Review & Grow',
        description:
            'We review performance metrics and identify opportunities for growth and expansion.',
        duration: 'Ongoing',
        color: 'bg-pink-100 text-pink-800',
    },
];

export default function ProcessSection() {
    return (
        <section className='pt-36 pb-20 px-4 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-16'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-8 text-center'>
                        Our Approach & Timeline
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div className='order-2 lg:order-1'>
                            <p className='text-xl text-gray-600 leading-relaxed'>
                                Our approach begins with a thorough Discovery &
                                Planning phase where we delve into understanding
                                your business objectives, target audience, and
                                market landscape. This sets the foundation for
                                our Design & Development stage, where we
                                meticulously craft and build tailored solutions
                                that align with your brand identity and goals.
                                Throughout this journey, our focus remains on
                                Monitoring & Optimization, continuously refining
                                strategies based on data insights to maximize
                                performance and ROI.
                            </p>
                        </div>
                        <div className='order-1 lg:order-2'>
                            <div className='relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src='/office.jpg'
                                    alt='Office'
                                    fill
                                    className='object-cover'
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {processSteps.map((step, index) => (
                        <Card
                            key={index}
                            className='hover:shadow-lg transition-shadow relative overflow-hidden'
                        >
                            <CardContent className='p-6'>
                                <div
                                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${step.color}`}
                                >
                                    Step {step.step}
                                </div>

                                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                                    {step.title}
                                </h3>

                                <p className='text-gray-600 mb-4'>
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
