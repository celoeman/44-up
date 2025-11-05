import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getJobByUuid } from '@/lib/jobPositions';
import { notFound } from 'next/navigation';
import ApplicationForm from '@/components/ApplicationForm';
import Link from 'next/link';

export default async function ApplyPage({
    params,
}: {
    params: Promise<{ uuid: string }>;
}) {
    const { uuid } = await params;
    const job = getJobByUuid(uuid);

    if (!job) {
        notFound();
    }

    return (
        <div className='min-h-screen'>
            <Header />
            <main className='pt-24 pb-20 px-4 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50'>
                <div className='max-w-4xl mx-auto'>
                    {/* Job Details Header */}
                    <div className='mb-8'>
                        <Link
                            href='/careers'
                            className='text-orange-600 hover:text-orange-700 mb-4 inline-block'
                        >
                            ← Back to Careers
                        </Link>
                        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                            {job.title}
                        </h1>
                        <div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-6'>
                            <span className='flex items-center'>
                                <span className='mr-2'>📍</span>
                                {job.location}
                            </span>
                            <span className='flex items-center'>
                                <span className='mr-2'>🏢</span>
                                {job.department}
                            </span>
                            <span className='flex items-center'>
                                <span className='mr-2'>⏰</span>
                                {job.type}
                            </span>
                        </div>
                        <div className='bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg mb-8'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                                About This Role
                            </h2>
                            <p className='text-gray-700 mb-6'>
                                {job.description}
                            </p>
                            <div>
                                <h3 className='font-semibold text-gray-800 mb-3'>
                                    Requirements:
                                </h3>
                                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                                    {job.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Application Form */}
                    <ApplicationForm jobTitle={job.title} jobId={job.id} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
