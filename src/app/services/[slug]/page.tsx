import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
    CheckCircle2,
    ArrowRight,
    Zap,
    TrendingUp,
    Users,
    Target,
    BarChart3,
} from 'lucide-react';

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    // Service-specific content
    const serviceContent: Record<string, any> = {
        'web-development': {
            heroTitle: 'Transform Your Business with Cutting-Edge Web Development',
            heroSubtitle:
                'We build powerful, scalable web applications that drive results and exceed expectations',
            overview:
                'In today\'s digital-first world, your website is often the first impression customers have of your business. Our web development services go beyond creating beautiful sites—we build powerful, scalable applications that drive real business results.',
            keyFeatures: [
                {
                    icon: Zap,
                    title: 'Modern Tech Stack',
                    description:
                        'Built with the latest technologies including React, Next.js, Node.js, and cloud infrastructure for optimal performance and scalability.',
                },
                {
                    icon: TrendingUp,
                    title: 'Performance Optimized',
                    description:
                        'Lightning-fast load times, optimized code, and efficient database queries ensure your site performs flawlessly under any traffic load.',
                },
                {
                    icon: Users,
                    title: 'User-Centric Design',
                    description:
                        'Intuitive interfaces and seamless user experiences that convert visitors into customers and keep them coming back.',
                },
            ],
            whatWeOffer: [
                'Custom Web Application Development',
                'E-Commerce Solutions & Online Stores',
                'Progressive Web Apps (PWAs)',
                'API Development & Integration',
                'Content Management Systems (CMS)',
                'Responsive & Mobile-First Design',
                'Third-Party Integrations (Payment, CRM, etc.)',
                'Performance Optimization & SEO',
            ],
            benefits: [
                'Increased online visibility and brand presence',
                'Improved customer engagement and conversion rates',
                'Scalable solutions that grow with your business',
                'Reduced operational costs through automation',
                'Enhanced security and data protection',
                '24/7 accessibility for global reach',
            ],
            process: [
                {
                    step: '01',
                    title: 'Discovery & Planning',
                    description:
                        'We start by understanding your business goals, target audience, and technical requirements to create a comprehensive development roadmap.',
                },
                {
                    step: '02',
                    title: 'Design & Prototyping',
                    description:
                        'Our design team creates wireframes and prototypes that align with your brand while ensuring optimal user experience.',
                },
                {
                    step: '03',
                    title: 'Development & Testing',
                    description:
                        'Using agile methodologies, we build your application with regular testing, code reviews, and stakeholder feedback loops.',
                },
                {
                    step: '04',
                    title: 'Deployment & Launch',
                    description:
                        'We handle all deployment logistics, domain setup, hosting configuration, and ensure a smooth launch with zero downtime.',
                },
                {
                    step: '05',
                    title: 'Support & Maintenance',
                    description:
                        'Ongoing support, updates, and optimization to keep your application running smoothly and adapting to new requirements.',
                },
            ],
        },
        'design-and-marketing': {
            heroTitle: 'Elevate Your Brand with Strategic Design & Marketing',
            heroSubtitle:
                'Create compelling visual identities and marketing campaigns that resonate with your audience and drive growth',
            overview:
                'Great design and strategic marketing are the foundation of successful brands. We combine creative excellence with data-driven marketing strategies to help you stand out in a crowded marketplace and connect with your ideal customers.',
            keyFeatures: [
                {
                    icon: Target,
                    title: 'Brand Identity Design',
                    description:
                        'Comprehensive brand identity packages including logos, color palettes, typography, and brand guidelines that reflect your unique value proposition.',
                },
                {
                    icon: BarChart3,
                    title: 'Data-Driven Marketing',
                    description:
                        'Marketing strategies backed by analytics and insights, ensuring every campaign delivers measurable ROI and business growth.',
                },
                {
                    icon: TrendingUp,
                    title: 'Multi-Channel Campaigns',
                    description:
                        'Integrated marketing campaigns across social media, email, content, and paid advertising for maximum reach and impact.',
                },
            ],
            whatWeOffer: [
                'Brand Identity & Logo Design',
                'Social Media Marketing & Management',
                'Content Marketing & Strategy',
                'Email Marketing Campaigns',
                'Video Production & Marketing',
                'Graphic Design & Visual Assets',
                'Marketing Automation Setup',
                'Conversion Rate Optimization',
            ],
            benefits: [
                'Stronger brand recognition and recall',
                'Increased customer engagement and loyalty',
                'Higher conversion rates and sales',
                'Improved market positioning',
                'Consistent brand experience across all touchpoints',
                'Measurable marketing ROI',
            ],
            process: [
                {
                    step: '01',
                    title: 'Brand Research & Strategy',
                    description:
                        'We analyze your market, competitors, and target audience to develop a comprehensive brand and marketing strategy.',
                },
                {
                    step: '02',
                    title: 'Creative Development',
                    description:
                        'Our creative team develops visual concepts, messaging frameworks, and campaign ideas that align with your brand strategy.',
                },
                {
                    step: '03',
                    title: 'Campaign Execution',
                    description:
                        'We launch and manage multi-channel marketing campaigns, continuously optimizing for performance and engagement.',
                },
                {
                    step: '04',
                    title: 'Performance Analysis',
                    description:
                        'Regular reporting and analytics help us understand what\'s working and refine strategies for better results.',
                },
                {
                    step: '05',
                    title: 'Continuous Optimization',
                    description:
                        'Ongoing refinement of campaigns, A/B testing, and strategy adjustments to maximize ROI and growth.',
                },
            ],
        },
        'hosting-and-maintenance': {
            heroTitle: 'Reliable Hosting & Maintenance for Peace of Mind',
            heroSubtitle:
                'Keep your website secure, fast, and up-to-date with our comprehensive hosting and maintenance services',
            overview:
                'Your website needs constant care to perform at its best. Our hosting and maintenance services ensure your site is always secure, fast, and running smoothly, so you can focus on growing your business.',
            keyFeatures: [
                {
                    icon: Zap,
                    title: 'High-Performance Hosting',
                    description:
                        'Fast, reliable hosting infrastructure with 99.9% uptime guarantee, CDN integration, and optimized server configurations.',
                },
                {
                    icon: TrendingUp,
                    title: 'Proactive Monitoring',
                    description:
                        '24/7 monitoring of your site\'s performance, uptime, and security with instant alerts and rapid response to issues.',
                },
                {
                    icon: BarChart3,
                    title: 'Regular Updates',
                    description:
                        'Automated and manual updates for CMS, plugins, themes, and core software to keep everything current and secure.',
                },
            ],
            whatWeOffer: [
                'Managed WordPress Hosting',
                'Cloud Hosting Solutions',
                'SSL Certificate Management',
                'Daily Automated Backups',
                'Security Monitoring & Updates',
                'Performance Optimization',
                'Content Updates & Edits',
                'Technical Support & Troubleshooting',
            ],
            benefits: [
                '99.9% uptime guarantee',
                'Enhanced security and protection',
                'Faster page load times',
                'Reduced risk of downtime',
                'Peace of mind with expert management',
                'Cost-effective maintenance solutions',
            ],
            process: [
                {
                    step: '01',
                    title: 'Infrastructure Setup',
                    description:
                        'We configure optimal hosting environments, set up CDN, SSL certificates, and implement security best practices.',
                },
                {
                    step: '02',
                    title: 'Migration & Optimization',
                    description:
                        'Seamless migration of your existing site with zero downtime, followed by performance optimization.',
                },
                {
                    step: '03',
                    title: 'Ongoing Maintenance',
                    description:
                        'Regular updates, backups, security scans, and performance monitoring to keep everything running smoothly.',
                },
                {
                    step: '04',
                    title: '24/7 Support',
                    description:
                        'Round-the-clock technical support and rapid response to any issues or emergencies that arise.',
                },
                {
                    step: '05',
                    title: 'Regular Reporting',
                    description:
                        'Monthly reports on uptime, performance metrics, security status, and recommendations for improvements.',
                },
            ],
        },
        'seo': {
            heroTitle: 'Dominate Search Rankings with Expert SEO Services',
            heroSubtitle:
                'Increase your organic visibility, drive qualified traffic, and grow your business with proven SEO strategies',
            overview:
                'Search Engine Optimization is the foundation of long-term digital growth. Our comprehensive SEO services help you rank higher in search results, attract qualified visitors, and convert them into customers—all while building sustainable, organic traffic.',
            keyFeatures: [
                {
                    icon: Target,
                    title: 'Keyword Research & Strategy',
                    description:
                        'In-depth keyword analysis to identify high-value opportunities that align with your business goals and target audience.',
                },
                {
                    icon: BarChart3,
                    title: 'Content Strategy & Optimization',
                    description:
                        'SEO-optimized content that ranks well, engages users, and drives conversions through strategic keyword integration.',
                },
                {
                    icon: Zap,
                    title: 'Link Building & Authority',
                    description:
                        'Strategic link building campaigns to increase domain authority and improve rankings across competitive keywords.',
                },
            ],
            whatWeOffer: [
                'On-Page SEO Optimization',
                'Technical SEO Audits',
                'Content Strategy & Creation',
                'Link Building Campaigns',
                'Local SEO Optimization',
                'SEO Analytics & Reporting',
                'Competitor Analysis',
                'Schema Markup Implementation',
            ],
            benefits: [
                'Increased organic traffic and visibility',
                'Higher search engine rankings',
                'Improved user experience and engagement',
                'Long-term sustainable growth',
                'Better ROI than paid advertising',
                'Enhanced brand credibility and trust',
            ],
            process: [
                {
                    step: '01',
                    title: 'SEO Audit & Analysis',
                    description:
                        'Comprehensive analysis of your current SEO performance, technical issues, and opportunities for improvement.',
                },
                {
                    step: '02',
                    title: 'Strategy Development',
                    description:
                        'Custom SEO strategy tailored to your industry, target keywords, and business objectives.',
                },
                {
                    step: '03',
                    title: 'Implementation',
                    description:
                        'On-page optimization, technical improvements, content creation, and link building execution.',
                },
                {
                    step: '04',
                    title: 'Monitoring & Reporting',
                    description:
                        'Regular tracking of rankings, traffic, and conversions with detailed monthly reports and insights.',
                },
                {
                    step: '05',
                    title: 'Continuous Optimization',
                    description:
                        'Ongoing refinement based on performance data, algorithm updates, and emerging opportunities.',
                },
            ],
        },
        'consulting-and-business-services': {
            heroTitle: 'Strategic Consulting to Accelerate Your Business Growth',
            heroSubtitle:
                'Expert guidance and business solutions to streamline operations, improve efficiency, and drive digital transformation',
            overview:
                'Navigating digital transformation and business growth requires strategic expertise. Our consulting services help you make informed decisions, optimize operations, and leverage technology to achieve your business objectives faster and more efficiently.',
            keyFeatures: [
                {
                    icon: Target,
                    title: 'Digital Transformation Advisory',
                    description:
                        'Strategic guidance on adopting new technologies, modernizing systems, and transforming business processes for the digital age.',
                },
                {
                    icon: Zap,
                    title: 'Workflow Automation',
                    description:
                        'Identify and automate repetitive tasks using tools like Zapier, Make.com, and custom solutions to boost productivity.',
                },
                {
                    icon: BarChart3,
                    title: 'Data-Driven Strategy',
                    description:
                        'KPI tracking, analytics dashboards, and data-driven insights to make better business decisions and measure success.',
                },
            ],
            whatWeOffer: [
                'Digital Transformation Consulting',
                'Workflow Automation Setup',
                'CRM/ERP Implementation',
                'Project Management System Setup',
                'Business Process Optimization',
                'KPI Dashboard Development',
                'Technology Stack Recommendations',
                'Change Management Support',
            ],
            benefits: [
                'Improved operational efficiency',
                'Reduced manual work and errors',
                'Better data visibility and insights',
                'Faster decision-making processes',
                'Scalable business processes',
                'Competitive advantage through innovation',
            ],
            process: [
                {
                    step: '01',
                    title: 'Business Assessment',
                    description:
                        'Comprehensive analysis of your current processes, systems, and pain points to identify improvement opportunities.',
                },
                {
                    step: '02',
                    title: 'Strategy Development',
                    description:
                        'Custom roadmap and recommendations tailored to your business goals, budget, and timeline.',
                },
                {
                    step: '03',
                    title: 'Implementation',
                    description:
                        'Hands-on setup and configuration of systems, tools, and processes with training for your team.',
                },
                {
                    step: '04',
                    title: 'Optimization & Refinement',
                    description:
                        'Continuous monitoring, optimization, and adjustments to ensure systems deliver maximum value.',
                },
                {
                    step: '05',
                    title: 'Ongoing Support',
                    description:
                        'Regular check-ins, updates, and strategic guidance to help you adapt and grow with changing needs.',
                },
            ],
        },
        'mobile-app-development': {
            heroTitle: 'Build Powerful Mobile Apps That Drive Business Growth',
            heroSubtitle:
                'Native and cross-platform mobile applications that deliver exceptional user experiences and measurable results',
            overview:
                'Mobile apps are essential for engaging customers and driving business growth. We develop high-performance mobile applications for iOS and Android that combine beautiful design with powerful functionality, delivering experiences that users love and businesses rely on.',
            keyFeatures: [
                {
                    icon: Zap,
                    title: 'Native & Cross-Platform',
                    description:
                        'Native iOS and Android apps for optimal performance, or cross-platform solutions using React Native and Flutter for faster development.',
                },
                {
                    icon: Target,
                    title: 'App Store Optimization',
                    description:
                        'Strategic ASO to improve app visibility, increase downloads, and maximize organic growth in app stores.',
                },
                {
                    icon: Users,
                    title: 'Seamless User Experience',
                    description:
                        'Intuitive interfaces, smooth navigation, and engaging interactions that keep users coming back and drive app success.',
                },
            ],
            whatWeOffer: [
                'iOS App Development (Swift, Objective-C)',
                'Android App Development (Kotlin, Java)',
                'Cross-Platform Development (React Native, Flutter)',
                'App UI/UX Design',
                'API Integration & Backend Development',
                'App Store Optimization (ASO)',
                'App Maintenance & Updates',
                'Push Notification Setup',
            ],
            benefits: [
                'Increased customer engagement',
                'Direct marketing channel to users',
                'Enhanced brand presence',
                'Improved customer loyalty',
                'New revenue opportunities',
                'Competitive advantage in your market',
            ],
            process: [
                {
                    step: '01',
                    title: 'Discovery & Planning',
                    description:
                        'Understanding your goals, target audience, and requirements to create a detailed app development roadmap.',
                },
                {
                    step: '02',
                    title: 'Design & Prototyping',
                    description:
                        'Creating wireframes, mockups, and interactive prototypes to visualize the app experience before development.',
                },
                {
                    step: '03',
                    title: 'Development & Testing',
                    description:
                        'Agile development with regular testing, quality assurance, and iterative improvements based on feedback.',
                },
                {
                    step: '04',
                    title: 'Launch & Deployment',
                    description:
                        'App store submission, launch coordination, and deployment to ensure a successful market entry.',
                },
                {
                    step: '05',
                    title: 'Support & Updates',
                    description:
                        'Ongoing maintenance, feature updates, bug fixes, and performance optimization to keep your app current.',
                },
            ],
        },
    };

    const content = serviceContent[service.slug] || serviceContent['web-development'];

    return (
        <div className='min-h-screen bg-white'>
            <Header />
            <main>
                {/* Hero Section */}
                <section className='relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50'>
                    <div className='absolute inset-0'>
                        <div className={`absolute top-20 right-20 w-96 h-96 bg-gradient-to-r ${service.gradient} opacity-10 rounded-full blur-3xl`}></div>
                        <div className={`absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r ${service.gradient} opacity-10 rounded-full blur-3xl`}></div>
                    </div>
                    <div className='max-w-7xl mx-auto relative z-10'>
                        <div className='text-center mb-12'>
                            <Badge className={`mb-6 bg-gradient-to-r ${service.gradient} bg-opacity-10 text-gray-800 border border-gray-200 px-6 py-2`}>
                                {service.title}
                            </Badge>
                            <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
                                {content.heroTitle}
                            </h1>
                            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                                {content.heroSubtitle}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className='py-20 px-4 bg-white'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid md:grid-cols-2 gap-12 items-start'>
                            {/* Left Side - Why It Matters */}
                            <div>
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                                    <Icon className='w-10 h-10 text-white' />
                                </div>
                                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                                    Why {service.title} Matters
                                </h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-8'>
                                    {content.overview}
                                </p>
                                <Link href='/contact'>
                                    <Button size='lg' className={`bg-gradient-to-r ${service.gradient} text-white hover:opacity-90 transition-all duration-300`}>
                                        Get Started Today
                                        <ArrowRight className='ml-2 w-5 h-5' />
                                    </Button>
                                </Link>
                            </div>
                            
                            {/* Right Side - What This Service Entails */}
                            <div>
                                <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                                    What This Service Entails
                                </h3>
                                <div className='grid gap-6'>
                                    {content.keyFeatures.map((feature: any, index: number) => {
                                        const FeatureIcon = feature.icon;
                                        return (
                                            <div key={index} className='p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 hover:border-gray-300'>
                                                <div className='flex items-start gap-4'>
                                                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                                                        <FeatureIcon className={`w-6 h-6 text-white`} />
                                                    </div>
                                                    <div className='flex-1'>
                                                        <h4 className='font-bold text-gray-900 mb-2'>{feature.title}</h4>
                                                        <p className='text-sm text-gray-600 leading-relaxed'>{feature.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Services Button */}
                <section className='py-12 px-4 bg-white'>
                    <div className='max-w-7xl mx-auto text-center'>
                        <Link href='/services'>
                            <Button variant='outline' size='lg' className='border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50'>
                                ← Back to Services
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

