'use client';

import { useState } from 'react';

interface ApplicationFormProps {
    jobTitle: string;
    jobId: string;
}

export default function ApplicationForm({
    jobTitle,
    jobId,
}: ApplicationFormProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        coverLetter: '',
    });
    const [resume, setResume] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        'idle' | 'success' | 'error'
    >('idle');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Create FormData for file upload
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('firstName', formData.firstName);
        formDataToSubmit.append('lastName', formData.lastName);
        formDataToSubmit.append('email', formData.email);
        formDataToSubmit.append('phone', formData.phone);
        formDataToSubmit.append('linkedin', formData.linkedin);
        formDataToSubmit.append('portfolio', formData.portfolio);
        formDataToSubmit.append('coverLetter', formData.coverLetter);
        formDataToSubmit.append('jobTitle', jobTitle);
        formDataToSubmit.append('jobId', jobId);
        if (resume) {
            formDataToSubmit.append('resume', resume);
        }

        try {
            // TODO: Replace with your API endpoint
            const response = await fetch('/api/apply', {
                method: 'POST',
                body: formDataToSubmit,
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    linkedin: '',
                    portfolio: '',
                    coverLetter: '',
                });
                setResume(null);
                // Reset file input
                const fileInput = document.getElementById(
                    'resume'
                ) as HTMLInputElement;
                if (fileInput) fileInput.value = '';
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>
                Apply for {jobTitle}
            </h2>

            {submitStatus === 'success' && (
                <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
                    <p className='text-green-800'>
                        ✅ Thank you! Your application has been submitted
                        successfully. We'll review it and get back to you soon.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg'>
                    <p className='text-red-800'>
                        ❌ There was an error submitting your application.
                        Please try again or contact us directly.
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name Fields */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label
                            htmlFor='firstName'
                            className='block text-sm font-semibold text-gray-700 mb-2'
                        >
                            First Name *
                        </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='lastName'
                            className='block text-sm font-semibold text-gray-700 mb-2'
                        >
                            Last Name *
                        </label>
                        <input
                            type='text'
                            id='lastName'
                            name='lastName'
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none'
                        />
                    </div>
                </div>

                {/* Contact Fields */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-semibold text-gray-700 mb-2'
                        >
                            Email *
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='phone'
                            className='block text-sm font-semibold text-gray-700 mb-2'
                        >
                            Phone *
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none'
                        />
                    </div>
                </div>

                {/* Links */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label
                            htmlFor='linkedin'
                            className='block text-sm font-semibold text-gray-700 mb-2'
                        >
                            LinkedIn Profile
                        </label>
                        <input
                            type='url'
                            id='linkedin'
                            name='linkedin'
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            placeholder='https://linkedin.com/in/yourprofile'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='portfolio'
                            className='block text-sm font-semibold text-gray-700 mb-2'
                        >
                            Portfolio / Website
                        </label>
                        <input
                            type='url'
                            id='portfolio'
                            name='portfolio'
                            value={formData.portfolio}
                            onChange={handleInputChange}
                            placeholder='https://yourportfolio.com'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none'
                        />
                    </div>
                </div>

                {/* Resume Upload */}
                <div>
                    <label
                        htmlFor='resume'
                        className='block text-sm font-semibold text-gray-700 mb-2'
                    >
                        Resume / CV *
                    </label>
                    <input
                        type='file'
                        id='resume'
                        name='resume'
                        required
                        accept='.pdf,.doc,.docx'
                        onChange={handleFileChange}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100'
                    />
                    {resume && (
                        <p className='mt-2 text-sm text-gray-600'>
                            Selected: {resume.name} (
                            {(resume.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                    )}
                    <p className='mt-1 text-xs text-gray-500'>
                        Accepted formats: PDF, DOC, DOCX (Max 10MB)
                    </p>
                </div>

                {/* Cover Letter */}
                <div>
                    <label
                        htmlFor='coverLetter'
                        className='block text-sm font-semibold text-gray-700 mb-2'
                    >
                        Cover Letter *
                    </label>
                    <textarea
                        id='coverLetter'
                        name='coverLetter'
                        required
                        rows={6}
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-y'
                    />
                </div>

                {/* Submit Button */}
                <div className='pt-4'>
                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className='w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold px-8 py-3 rounded-lg transition-colors'
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </div>
            </form>
        </div>
    );
}
