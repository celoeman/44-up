'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Globe,
    Server,
    Search,
    Smartphone,
    Paintbrush,
    Briefcase,
} from 'lucide-react';
import ScrollAnimation from '@/components/ScrollAnimation';

export const serviceCategories = [
    {
        name: 'Technology & Development',
        description: 'Building digital tools and automation',
        examples: 'Web, apps, AI chatbots, APIs',
        services: [
            {
                name: 'AI Chatbot Development',
                tiers: {
                    tier1: { base: '$2,500', monthly: '$150' },
                    tier2: { base: '$5,000', monthly: '$300' },
                    tier3: { base: '$10,000+', monthly: '$600+' },
                },
            },
            {
                name: 'E-Commerce Store',
                tiers: {
                    tier1: { base: '$1,500', monthly: '$200' },
                    tier2: { base: '$3,000', monthly: '$400' },
                    tier3: { base: '$6,000+', monthly: '$750+' },
                },
            },
            {
                name: 'Landing / Marketing Sites',
                tiers: {
                    tier1: { base: '$500', monthly: '$150' },
                    tier2: { base: '$1,000', monthly: '$300' },
                    tier3: { base: '$2,000+', monthly: '$500+' },
                },
            },
            {
                name: 'Web Development (App / Platform)',
                tiers: {
                    tier1: { base: '$2,000', monthly: '$300' },
                    tier2: { base: '$5,000', monthly: '$600' },
                    tier3: { base: '$10,000+', monthly: '$1,000+' },
                },
            },
            {
                name: 'Mobile App Development (iOS / Android)',
                tiers: {
                    tier1: { base: '$3,000', monthly: '$400' },
                    tier2: { base: '$7,500', monthly: '$800' },
                    tier3: { base: '$15,000+', monthly: '$1,500+' },
                },
            },
            {
                name: 'Domain & Hosting Services',
                tiers: {
                    tier1: { base: '$100', monthly: '$25' },
                    tier2: { base: '$150', monthly: '$50' },
                    tier3: { base: '$250', monthly: '$100' },
                },
            },
            {
                name: 'Custom Integrations (APIs, CRMs, Payment Gateways, etc.)',
                tiers: {
                    tier1: { base: 'Quoted separately', monthly: '' },
                    tier2: { base: 'Quoted separately', monthly: '' },
                    tier3: { base: 'Quoted separately', monthly: '' },
                },
            },
            {
                name: 'DevOps & CI/CD Setup',
                tiers: {
                    tier1: { base: '$1,500', monthly: '$200' },
                    tier2: { base: '$3,000', monthly: '$400' },
                    tier3: { base: '$6,000+', monthly: '$800+' },
                },
            },
            {
                name: 'Managing/Updating Existing Apps',
                tiers: {
                    tier1: { base: '$500', monthly: '$300' },
                    tier2: { base: '$1,000', monthly: '$600' },
                    tier3: { base: '$2,000+', monthly: '$1,200+' },
                },
            },
            {
                name: 'Custom UI/UX Design',
                tiers: {
                    tier1: { base: '$1,500', monthly: '' },
                    tier2: { base: '$3,000', monthly: '' },
                    tier3: { base: '$6,000+', monthly: '' },
                },
            },
            {
                name: 'UI/UX Design Upgrades',
                tiers: {
                    tier1: { base: '+$500–$1,000', monthly: '' },
                    tier2: { base: '+$1,000–$1,500', monthly: '' },
                    tier3: { base: '+$1,500–$2,000+', monthly: '' },
                },
            },
        ],
    },
    {
        name: 'Marketing & Media',
        description: 'Promoting and growing the brand',
        examples: 'SEO, SMM, SEM, branding',
        services: [
            {
                name: 'Analysis & Optimization (SEO)',
                tiers: {
                    tier1: { base: '$500', monthly: '$800' },
                    tier2: { base: '$800', monthly: '$1,500' },
                    tier3: { base: '$1,200', monthly: '$3,000' },
                },
            },
            // {
            //     name: 'Search Engine Marketing (SEM)',
            //     tiers: {
            //         tier1: { base: '$800', monthly: '$500 + 10% ad spend' },
            //         tier2: { base: '$1,200', monthly: '$800 + 8% ad spend' },
            //         tier3: {
            //             base: '$2,000+',
            //             monthly: 'Custom (5–8% ad spend)',
            //         },
            //     },
            // },
            {
                name: 'Social Media Marketing (SMM)',
                tiers: {
                    tier1: { base: '$500', monthly: '$700 (2 platforms)' },
                    tier2: { base: '$800', monthly: '$1,500 (3–4 platforms)' },
                    tier3: { base: '$1,500', monthly: '$3,000+ (custom)' },
                },
            },
            // {
            //     name: 'Affiliate Marketing Setup',
            //     tiers: {
            //         tier1: { base: '$1,000', monthly: '$300' },
            //         tier2: { base: '$2,500', monthly: '$600' },
            //         tier3: { base: '$5,000+', monthly: '$1,000+' },
            //     },
            // },
            {
                name: 'Email Marketing',
                tiers: {
                    tier1: { base: '$500', monthly: '$400' },
                    tier2: { base: '$1,000', monthly: '$800' },
                    tier3: { base: '$2,000+', monthly: '$1,500+' },
                },
            },
            {
                name: 'Content Marketing & Creation',
                tiers: {
                    tier1: { base: '$300', monthly: '$500' },
                    tier2: { base: '$600', monthly: '$1,000' },
                    tier3: { base: '$1,200', monthly: '$2,000+' },
                },
            },
            {
                name: 'Video Marketing & Production',
                tiers: {
                    tier1: { base: '$1,500', monthly: '$200' },
                    tier2: { base: '$3,000', monthly: '$500' },
                    tier3: { base: '$6,000+', monthly: '$1,000+' },
                },
            },
            // {
            //     name: 'Conversion Rate Optimization (CRO)',
            //     tiers: {
            //         tier1: { base: '$800', monthly: '$600' },
            //         tier2: { base: '$1,500', monthly: '$1,200' },
            //         tier3: { base: '$3,000+', monthly: '$2,500+' },
            //     },
            // },
            {
                name: 'Branding & Logo Design',
                tiers: {
                    tier1: { base: '$500', monthly: '' },
                    tier2: { base: '$1,000', monthly: '' },
                    tier3: { base: '$2,000+', monthly: '' },
                },
            },
        ],
    },
    {
        name: 'Consulting & Business Services',
        description: 'Advising leadership and planning growth',
        examples:
            'Growth strategy, digital transformation, workflow automation, financial operations, KPI tracking',
        services: [
            {
                name: 'Technology & Digital Transformation Advisory',
                tiers: {
                    tier1: { base: '$2,000', monthly: '' },
                    tier2: { base: '$4,000', monthly: '' },
                    tier3: { base: '$8,000+', monthly: '' },
                },
            },
            {
                name: 'Project Management Setup (Asana, Monday.com, etc.)',
                tiers: {
                    tier1: { base: '$500', monthly: '$100' },
                    tier2: { base: '$1,000', monthly: '$200' },
                    tier3: { base: '$2,000+', monthly: '$400+' },
                },
            },
            {
                name: 'Workflow Automation (Zapier, Make.com, Custom)',
                tiers: {
                    tier1: { base: '$800', monthly: '$150' },
                    tier2: { base: '$1,500', monthly: '$300' },
                    tier3: { base: '$3,000+', monthly: '$600+' },
                },
            },
            {
                name: 'CRM/ERP Setup & Maintenance',
                tiers: {
                    tier1: { base: '$1,500', monthly: '$300' },
                    tier2: { base: '$3,000', monthly: '$600' },
                    tier3: { base: '$6,000+', monthly: '$1,200+' },
                },
            },
            {
                name: 'Customer Support / Helpdesk Systems',
                tiers: {
                    tier1: { base: '$800', monthly: '$200' },
                    tier2: { base: '$1,500', monthly: '$400' },
                    tier3: { base: '$3,000+', monthly: '$800+' },
                },
            },
            {
                name: 'Reporting Dashboards, Data-Driven Strategy & KPI Recommendations',
                tiers: {
                    tier1: { base: '$1,500', monthly: '$300' },
                    tier2: { base: '$3,000', monthly: '$600' },
                    tier3: { base: '$6,000+', monthly: '$1,200+' },
                },
            },
        ],
    },
];

const services = [
    {
        icon: Globe,
        title: 'Web Development',
        description:
            'Building functional, responsive websites and web applications with modern technologies to create powerful digital experiences that drive business results.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Paintbrush,
        title: 'Design and Marketing',
        description:
            'Crafting visually appealing designs and comprehensive marketing strategies that enhance brand presence, create intuitive user experiences, and drive customer engagement and conversions.',
        gradient: 'from-pink-500 to-rose-500',
    },
    {
        icon: Server,
        title: 'Hosting & Maintenance',
        description:
            'Providing secure, reliable hosting services and ongoing maintenance to ensure websites run smoothly and are up-to-date with the latest software and security patches.',
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        icon: Search,
        title: 'SEO',
        description:
            'Optimizing websites to improve organic search engine rankings, increase visibility, and drive targeted traffic by implementing best practices in content, keywords, and technical aspects.',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: Briefcase,
        title: 'Consulting & Business Services',
        description:
            'Providing strategic guidance and business solutions including digital transformation advisory, workflow automation, CRM setup, and data-driven strategy to help your business grow.',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description:
            'Building native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and drive business growth through innovative mobile solutions.',
        gradient: 'from-indigo-500 to-blue-500',
    },
];

export default function ServicesSection() {
    const pathname = usePathname();
    const isRootPage = pathname === '/';

    return (
        <section
            className={`${isRootPage ? 'py-24' : 'pt-36 pb-24'} px-4 ${
                isRootPage
                    ? 'bg-white'
                    : 'bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50'
            } relative overflow-hidden`}
        >
            {/* Enhanced Background Elements */}
            {!isRootPage && (
                <div className='absolute inset-0'>
                    {/* Animated Grid Pattern */}
                    <div className='absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

                    {/* Floating Gradient Orbs */}
                    <div className='absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse'></div>
                    <div className='absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
                    <div className='absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-2000'></div>
                    <div className='absolute bottom-40 right-40 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-3000'></div>

                    {/* Animated Particles */}
                    <div className='absolute top-1/4 left-1/4 w-3 h-3 bg-orange-400/30 rounded-full animate-bounce delay-500'></div>
                    <div className='absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce delay-1000'></div>
                    <div className='absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-purple-400/30 rounded-full animate-bounce delay-1500'></div>
                    <div className='absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-bounce delay-2000'></div>
                </div>
            )}

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Header */}
                <div className='text-center mb-20'>
                    <ScrollAnimation delay={0.1}>
                        <Badge className='mb-6 bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-gray-800 border border-orange-300 backdrop-blur-sm px-6 py-2 shadow-lg'>
                            ✨ Our Services
                        </Badge>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
                            {isRootPage ? (
                                <>
                                    Why settle for cookie-cutter technology
                                    <span className='block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'>
                                        for your unique business
                                    </span>
                                </>
                            ) : (
                                <>
                                    Stay ahead of the competition
                                    <span className='block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'>
                                        and achieve unparalleled results
                                    </span>
                                </>
                            )}
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.3}>
                        <p className='text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
                            {isRootPage
                                ? 'Everything we build starts from a blank page.'
                                : "We don't recycle ideas, we invent them."}
                        </p>
                    </ScrollAnimation>
                </div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <ScrollAnimation
                                key={index}
                                delay={0.1 + index * 0.1}
                                direction='up'
                            >
                                <div className='group relative'>
                                    {/* Card Glow Effect */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity duration-500`}
                                    ></div>

                                    <Card className='relative h-full bg-white/90 backdrop-blur-md border-2 border-gray-200 shadow-xl hover:shadow-2xl rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group-hover:border-orange-300'>
                                        <CardContent className='p-0'>
                                            <div className='flex flex-col items-center text-center'>
                                                {/* Icon with Gradient Background */}
                                                <div
                                                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                                                >
                                                    <Icon className='w-10 h-10 text-white' />
                                                </div>

                                                {/* Title */}
                                                <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300'>
                                                    {service.title}
                                                </h3>

                                                {/* Description */}
                                                <p className='text-gray-700 leading-relaxed'>
                                                    {service.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </ScrollAnimation>
                        );
                    })}
                </div>

                {/* Enhanced CTA Section */}
                <ScrollAnimation delay={0.3} direction='up'>
                    <div className='relative'>
                        <div className='relative bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-12 text-center text-white overflow-hidden'>
                            {/* Animated Background Pattern */}
                            <div className='absolute inset-0 opacity-20'>
                                <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[size:30px_30px] animate-pulse'></div>
                            </div>

                            {/* Floating Elements */}
                            <div className='absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse'></div>
                            <div className='absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000'></div>

                            <div className='relative z-10'>
                                <h3 className='text-4xl md:text-5xl font-bold mb-6'>
                                    Ready to Transform Your Digital Presence?
                                </h3>
                                <p className='text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed'>
                                    Explore our full range of services and
                                    discover how we can help you achieve your
                                    business goals with cutting-edge solutions
                                    tailored to your needs.
                                </p>
                                <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                                    <Link href='/services'>
                                        <Button
                                            size='lg'
                                            className='text-lg px-10 py-6 bg-white text-orange-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 font-semibold'
                                        >
                                            Explore All Services
                                        </Button>
                                    </Link>
                                    <Link href='/contact'>
                                        <Button
                                            size='lg'
                                            className='text-lg px-10 py-6 bg-white text-orange-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 font-semibold'
                                        >
                                            Get a Free Consultation
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
