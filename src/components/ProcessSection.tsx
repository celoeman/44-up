import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function ProcessSection() {
    return (
        <section className='pt-36 pb-20 px-4 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div>
                    <ScrollAnimation delay={0.1}>
                        <h2 className='text-4xl font-bold text-gray-900 mb-8 text-center'>
                            Our Approach & Timeline
                        </h2>
                    </ScrollAnimation>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <ScrollAnimation
                            delay={0.2}
                            direction='up'
                            className='order-2 lg:order-1'
                        >
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
                        </ScrollAnimation>
                        <ScrollAnimation
                            delay={0.3}
                            direction='up'
                            className='order-1 lg:order-2'
                        >
                            <div className='relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl'>
                                <Image
                                    src='/office.jpg'
                                    alt='Office'
                                    fill
                                    className='object-cover'
                                    priority
                                />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>

                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
                </div> */}
            </div>
        </section>
    );
}
