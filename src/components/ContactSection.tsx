'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        businessSize: '',
        services: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        'idle' | 'success' | 'error'
    >('idle');

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    businessSize: '',
                    services: '',
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className='pt-36 pb-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4'>
                        Ready to Transform Your Business?
                    </h2>
                    <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                        Get started with a free consultation and discover how
                        our digital solutions can accelerate your growth.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    {/* Contact Form */}
                    <Card className='bg-white/10 backdrop-blur-sm border-white/20'>
                        <CardContent className='p-8'>
                            <h3 className='text-2xl font-bold mb-6'>
                                Get Your Free Quote
                            </h3>
                            {submitStatus === 'success' && (
                                <div className='mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg'>
                                    <p className='text-green-300'>
                                        Thank you! Your message has been sent
                                        successfully. We'll get back to you
                                        soon.
                                    </p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className='mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg'>
                                    <p className='text-red-300'>
                                        Sorry, there was an error sending your
                                        message. Please try again later.
                                    </p>
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <label
                                            htmlFor='firstName'
                                            className='block text-sm font-medium mb-2'
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
                                            className='w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                            placeholder='John'
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='lastName'
                                            className='block text-sm font-medium mb-2'
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
                                            className='w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                            placeholder='Doe'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm font-medium mb-2'
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
                                        className='w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder='john@company.com'
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='company'
                                        className='block text-sm font-medium mb-2'
                                    >
                                        Company
                                    </label>
                                    <input
                                        type='text'
                                        id='company'
                                        name='company'
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className='w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder='Your Company Name'
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='businessSize'
                                        className='block text-sm font-medium mb-2'
                                    >
                                        Business Size
                                    </label>
                                    <select
                                        id='businessSize'
                                        name='businessSize'
                                        value={formData.businessSize}
                                        onChange={handleInputChange}
                                        className='w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 [&>option]:bg-gray-900 [&>option]:text-white'
                                    >
                                        <option value=''>
                                            Select your business size
                                        </option>
                                        <option value='Tier 1 - Starter (1-10 employees)'>
                                            Tier 1 - Starter (1-10 employees)
                                        </option>
                                        <option value='Tier 2 - Growth (10-50 employees)'>
                                            Tier 2 - Growth (10-50 employees)
                                        </option>
                                        <option value='Tier 3 - Enterprise (50+ employees)'>
                                            Tier 3 - Enterprise (50+ employees)
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor='services'
                                        className='block text-sm font-medium mb-2'
                                    >
                                        Services Interested In
                                    </label>
                                    <textarea
                                        id='services'
                                        name='services'
                                        value={formData.services}
                                        onChange={handleInputChange}
                                        className='w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24'
                                        placeholder='Tell us about your project needs...'
                                    />
                                </div>

                                <Button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isSubmitting
                                        ? 'Sending...'
                                        : 'Get Free Consultation'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Info & Benefits */}
                    <div className='space-y-8'>
                        <div>
                            <h3 className='text-2xl font-bold mb-6'>
                                Why Choose Us?
                            </h3>
                            <div className='space-y-4'>
                                <div className='flex items-start'>
                                    <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1'>
                                        <svg
                                            className='w-4 h-4 text-white'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold mb-1'>
                                            Transparent Pricing
                                        </h4>
                                        <p className='text-gray-300 text-sm'>
                                            No hidden fees, clear pricing tiers
                                            for every business size
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1'>
                                        <svg
                                            className='w-4 h-4 text-white'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold mb-1'>
                                            Expert Team
                                        </h4>
                                        <p className='text-gray-300 text-sm'>
                                            Certified professionals with 10+
                                            years of experience
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1'>
                                        <svg
                                            className='w-4 h-4 text-white'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold mb-1'>
                                            24/7 Support
                                        </h4>
                                        <p className='text-gray-300 text-sm'>
                                            Round-the-clock support and
                                            maintenance
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1'>
                                        <svg
                                            className='w-4 h-4 text-white'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold mb-1'>
                                            ROI Guarantee
                                        </h4>
                                        <p className='text-gray-300 text-sm'>
                                            We guarantee measurable results or
                                            your money back
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                            <h4 className='font-semibold mb-4'>
                                Contact Information
                            </h4>
                            <div className='space-y-3 text-sm'>
                                <div className='flex items-center'>
                                    <svg
                                        className='w-4 h-4 mr-3 text-blue-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                                    </svg>
                                    <span>hello@mediacompany.com</span>
                                </div>
                                <div className='flex items-center'>
                                    <svg
                                        className='w-4 h-4 mr-3 text-blue-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span>New York, NY</span>
                                </div>
                                <div className='flex items-center'>
                                    <svg
                                        className='w-4 h-4 mr-3 text-blue-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className='mt-16 text-center'>
                    <p className='text-gray-300 mb-6'>
                        Trusted by 500+ businesses worldwide
                    </p>
                    <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
                        <Badge
                            variant='outline'
                            className='text-white border-white/30'
                        >
                            SOC 2 Compliant
                        </Badge>
                        <Badge
                            variant='outline'
                            className='text-white border-white/30'
                        >
                            GDPR Ready
                        </Badge>
                        <Badge
                            variant='outline'
                            className='text-white border-white/30'
                        >
                            99.9% Uptime
                        </Badge>
                        <Badge
                            variant='outline'
                            className='text-white border-white/30'
                        >
                            24/7 Support
                        </Badge>
                    </div>
                </div>
            </div>
        </section>
    );
}
