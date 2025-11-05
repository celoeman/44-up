import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className='pt-36 pb-20 px-4 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50'>
                <div className='max-w-7xl mx-auto'>
                    {/* Hero Section */}
                    <div className='mb-16'>
                        <h1 className='text-5xl font-bold text-gray-800 mb-12 text-center'>
                            About 44Up
                        </h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                            <div className='order-2 lg:order-1'>
                                <div className='relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl'>
                                    <Image
                                        src='/tampa.jpg'
                                        alt='Tampa'
                                        fill
                                        className='object-cover'
                                        priority
                                    />
                                </div>
                            </div>
                            <div className='order-1 lg:order-2 text-xl text-gray-700 space-y-6'>
                                <p>
                                    Welcome to 44Up, where we deliver
                                    tailored, high-impact digital solutions that
                                    help businesses grow and stand out. We blend
                                    strategy, creativity, and technology to
                                    elevate your brand, attract new customers,
                                    and accelerate growth in today's fast-moving
                                    digital world.
                                </p>

                                <p>
                                    Our services cover web design, development,
                                    SEO, SEM, CRO, branding, content creation,
                                    hosting, and maintenance — everything you
                                    need to strengthen your online presence and
                                    drive real results. By leveraging the latest
                                    tools and trends, we help you expand your
                                    reach, boost visibility, and achieve your
                                    goals with clarity and confidence.
                                </p>

                                <p>
                                    At 44Up, we're all about
                                    innovation, collaboration, and lasting
                                    partnerships that empower your business to
                                    thrive in the digital age.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
                        <div className='bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg'>
                            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                                Our Mission
                            </h2>
                            <p className='text-gray-700 leading-relaxed'>
                                To empower businesses with innovative digital
                                solutions that drive growth, enhance user
                                experience, and maximize ROI through
                                cutting-edge technology and creative excellence.
                            </p>
                        </div>
                        <div className='bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg'>
                            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                                Our Vision
                            </h2>
                            <p className='text-gray-700 leading-relaxed'>
                                To be the leading digital transformation partner
                                for businesses worldwide, recognized for our
                                innovative solutions, exceptional service, and
                                commitment to client success.
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className='mb-16'>
                        <h2 className='text-4xl font-bold text-gray-800 text-center mb-12'>
                            Our Values
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='text-center'>
                                <div className='w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <span className='text-2xl'>🎯</span>
                                </div>
                                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                    Excellence
                                </h3>
                                <p className='text-gray-700'>
                                    We strive for the highest quality in
                                    everything we do.
                                </p>
                            </div>
                            <div className='text-center'>
                                <div className='w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <span className='text-2xl'>🤝</span>
                                </div>
                                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                    Collaboration
                                </h3>
                                <p className='text-gray-700'>
                                    We work closely with our clients as true
                                    partners.
                                </p>
                            </div>
                            <div className='text-center'>
                                <div className='w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <span className='text-2xl'>💡</span>
                                </div>
                                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                    Innovation
                                </h3>
                                <p className='text-gray-700'>
                                    We embrace new technologies and creative
                                    solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className='bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg'>
                        <h2 className='text-4xl font-bold text-gray-800 text-center mb-8'>
                            By the Numbers
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
                            <div>
                                <div className='text-4xl font-bold text-orange-500 mb-2'>
                                    500+
                                </div>
                                <div className='text-gray-700'>
                                    Projects Delivered
                                </div>
                            </div>
                            <div>
                                <div className='text-4xl font-bold text-orange-500 mb-2'>
                                    340%
                                </div>
                                <div className='text-gray-700'>
                                    Average ROI Increase
                                </div>
                            </div>
                            <div>
                                <div className='text-4xl font-bold text-orange-500 mb-2'>
                                    20+
                                </div>
                                <div className='text-gray-700'>
                                    Industries Served
                                </div>
                            </div>
                            <div>
                                <div className='text-4xl font-bold text-orange-500 mb-2'>
                                    24/7
                                </div>
                                <div className='text-gray-700'>
                                    Support Available
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
