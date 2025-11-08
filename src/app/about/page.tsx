import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function AboutPage() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className='pt-36 pb-20 px-4 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50'>
                <div className='max-w-7xl mx-auto'>
                    {/* Hero Section */}
                    <div className='mb-16'>
                        <ScrollAnimation delay={0.1}>
                            <h1 className='text-5xl font-bold text-gray-800 mb-12 text-center'>
                                About 44Up
                            </h1>
                        </ScrollAnimation>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                            <ScrollAnimation delay={0.2} direction='up' className='order-2 lg:order-1'>
                                <div className='relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl'>
                                    <Image
                                        src='/tampa.jpg'
                                        alt='Tampa'
                                        fill
                                        className='object-cover'
                                        priority
                                    />
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation delay={0.3} direction='up' className='order-1 lg:order-2 text-xl text-gray-700 space-y-6'>
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
                                    Our services cover web development, mobile app
                                    development, design and marketing, SEO,
                                    hosting and maintenance, and consulting &
                                    business services — everything you need to
                                    strengthen your online presence and drive
                                    real results. By leveraging the latest tools
                                    and trends, we help you expand your reach,
                                    boost visibility, and achieve your goals with
                                    clarity and confidence.
                                </p>

                                <p>
                                    At 44Up, we're all about
                                    innovation, collaboration, and lasting
                                    partnerships that empower your business to
                                    thrive in the digital age.
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
                        <ScrollAnimation delay={0.1} direction='up'>
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
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.2} direction='up'>
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
                        </ScrollAnimation>
                    </div>

                    {/* Stats */}
                    {/* <div className='bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg'>
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
                    </div> */}

                    {/* Team Section */}
                    <div id='team' className='mb-16'>
                        <ScrollAnimation delay={0.1}>
                            <div className='text-center mb-12'>
                                <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                                    Meet Our Team
                                </h2>
                                <p className='text-xl text-gray-700 max-w-4xl mx-auto'>
                                    Our diverse team of experts brings together decades
                                    of experience in technology, design, and business
                                    strategy to deliver exceptional results.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Team Grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                            {[
                                {
                                    name: 'Alex O',
                                    role: 'Creative Director',
                                    bio: 'Creative leader specializing in user experience and interface design.',
                                    image: '👨‍🎨',
                                },
                                {
                                    name: 'Ricky K',
                                    role: 'Director of Growth',
                                    bio: 'Product strategist coordinating client projects and driving product vision.',
                                    image: '👨‍💼',
                                },
                                {
                                    name: 'Lisett K',
                                    role: 'Director of Business Development',
                                    bio: 'Sales leader managing client relationships and business development.',
                                    image: '👩‍💼',
                                },
                                {
                                    name: 'Eman C',
                                    role: 'Engineering Director – Frontend',
                                    bio: 'Full-stack engineer passionate about scalable solutions and innovation.',
                                    image: '👨‍💻',
                                },
                                {
                                    name: 'Patrick C',
                                    role: 'Engineering Director – Backend',
                                    bio: 'Expert engineer focused on building robust and efficient systems.',
                                    image: '👨‍💻',
                                },
                                {
                                    name: 'Meg C',
                                    role: 'Director of Legal Affairs',
                                    bio: 'Legal expert ensuring compliance and protecting business interests.',
                                    image: '👩‍⚖️',
                                },
                            ].map((member, index) => (
                                <ScrollAnimation
                                    key={index}
                                    delay={0.1 + index * 0.1}
                                    direction='up'
                                >
                                    <div className='bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'>
                                        <div className='text-center'>
                                            <div className='w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                                <span className='text-4xl'>
                                                    {member.image}
                                                </span>
                                            </div>
                                            <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                                {member.name}
                                            </h3>
                                            <p className='text-orange-600 font-semibold mb-3'>
                                                {member.role}
                                            </p>
                                            <p className='text-gray-700 text-sm'>
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>

                        {/* Culture Section */}
                        <ScrollAnimation delay={0.3} direction='up'>
                            <div className='bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg mb-16'>
                                <h2 className='text-4xl font-bold text-gray-800 text-center mb-8'>
                                    Our Culture
                                </h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                    <div>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                                            What We Value
                                        </h3>
                                        <ul className='space-y-3 text-gray-700'>
                                            <li className='flex items-center'>
                                                <span className='text-orange-500 mr-3'>
                                                    ✓
                                                </span>
                                                Innovation and creative problem-solving
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='text-orange-500 mr-3'>
                                                    ✓
                                                </span>
                                                Collaboration and open communication
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='text-orange-500 mr-3'>
                                                    ✓
                                                </span>
                                                Continuous learning and growth
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='text-orange-500 mr-3'>
                                                    ✓
                                                </span>
                                                Work-life balance and flexibility
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                                            Why Join Us
                                        </h3>
                                        <ul className='space-y-3 text-gray-700'>
                                            <li className='flex items-center'>
                                                <span className='text-orange-500 mr-3'>
                                                    ✓
                                                </span>
                                                Cutting-edge projects and technologies
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='text-orange-500 mr-3'>
                                                    ✓
                                                </span>
                                                Professional development opportunities
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='text-orange-500 mr-3'>
                                                    ✓
                                                </span>
                                                Collaborative and supportive environment
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='text-orange-500 mr-3'>
                                                    ✓
                                                </span>
                                                Competitive benefits and flexible hours
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* CTA */}
                        <ScrollAnimation delay={0.4} direction='up'>
                            <div className='text-center'>
                                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                                    Ready to Join Our Team?
                                </h2>
                                <p className='text-gray-700 mb-6'>
                                    We're always looking for talented individuals to
                                    join our growing team.
                                </p>
                                <a
                                    href='/careers'
                                    className='inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors'
                                >
                                    View Open Positions
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
