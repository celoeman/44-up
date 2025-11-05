import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TeamPage() {
    const teamMembers = [
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
    ];

    return (
        <div className='min-h-screen'>
            <Header />
            <main className='pt-24 pb-20 px-4 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50'>
                <div className='max-w-7xl mx-auto'>
                    {/* Hero Section */}
                    <div className='text-center mb-16'>
                        <h1 className='text-5xl font-bold text-gray-800 mb-6'>
                            Meet Our Team
                        </h1>
                        <p className='text-xl text-gray-700 max-w-4xl mx-auto'>
                            Our diverse team of experts brings together decades
                            of experience in technology, design, and business
                            strategy to deliver exceptional results.
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className='bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
                            >
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
                        ))}
                    </div>

                    {/* Culture Section */}
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

                    {/* CTA */}
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
                </div>
            </main>
            <Footer />
        </div>
    );
}
