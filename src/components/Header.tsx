'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { serviceCategories } from '@/components/ServicesSection';
import {
    Bot,
    ShoppingCart,
    Globe,
    Smartphone,
    Server,
    Cog,
    Paintbrush,
    LayoutGrid,
    BarChart3,
    Mail,
    Video,
    Megaphone,
    LineChart,
    Briefcase,
    BookOpen,
    Database,
} from 'lucide-react';

const iconForService = (name: string) => {
    const key = name.toLowerCase();
    if (key.includes('chatbot')) return Bot;
    if (key.includes('e-commerce') || key.includes('store'))
        return ShoppingCart;
    if (key.includes('web') || key.includes('landing')) return Globe;
    if (key.includes('mobile app')) return Smartphone;
    if (
        key.includes('hosting') ||
        key.includes('devops') ||
        key.includes('server')
    )
        return Server;
    if (key.includes('integration') || key.includes('automation')) return Cog;
    if (
        key.includes('ui/ux') ||
        key.includes('branding') ||
        key.includes('design')
    )
        return Paintbrush;
    if (key.includes('platform') || key.includes('crm') || key.includes('erp'))
        return LayoutGrid;
    if (key.includes('seo') || key.includes('cro') || key.includes('kpi'))
        return BarChart3;
    if (key.includes('email')) return Mail;
    if (key.includes('video')) return Video;
    if (
        key.includes('marketing') ||
        key.includes('sem') ||
        key.includes('smm') ||
        key.includes('affiliate')
    )
        return Megaphone;
    if (key.includes('strategy') || key.includes('consult')) return Briefcase;
    if (key.includes('data')) return Database;
    if (key.includes('report') || key.includes('learn')) return BookOpen;
    return LineChart;
};

export default function Header() {
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/20'>
            <div className='max-w-7xl mx-auto px-4 py-6'>
                <div className='flex items-center justify-between'>
                    <Link href='/' className='flex items-center'>
                        <Logo size='lg' />
                    </Link>

                    <nav className='hidden md:flex items-center space-x-8'>
                        <Link
                            href='/about'
                            className='text-gray-700 hover:text-gray-900 transition-colors font-medium text-base'
                        >
                            About
                        </Link>
                        <div className='relative group'>
                            <Link
                                href='/services'
                                className='text-gray-700 hover:text-gray-900 transition-colors font-medium inline-flex items-center text-base'
                            >
                                Services
                            </Link>
                        </div>
                        <Link
                            href='/process'
                            className='text-gray-700 hover:text-gray-900 transition-colors font-medium text-base'
                        >
                            Process
                        </Link>
                        <Link
                            href='/pricing'
                            className='text-gray-700 hover:text-gray-900 transition-colors font-medium text-base'
                        >
                            Pricing
                        </Link>
                        {/* <div className='absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block'>
                                <div className='w-[920px] max-w-[90vw] rounded-xl border border-gray-200 bg-white shadow-xl p-6'>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                                        {serviceCategories.map((category, ci) => (
                                            <div key={ci} className=''>
            									<div className='mb-3'>
                                                    <div className='text-sm font-semibold text-gray-900'>{category.name}</div>
                                                    {category.description && (
                                                        <div className='text-xs text-gray-500'>{category.description}</div>
                                                    )}
                                                </div>
                                                <ul className='space-y-2'>
                                                    {category.services.map((svc: any, si: number) => {
                                                        const Icon = iconForService(svc.name);
                                                        return (
                                                            <li key={si}>
                                                                <Link href='/services' className='flex items-center gap-3 rounded-md p-2 hover:bg-gray-50 transition-colors'>
                                                                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500'>
                                                                        <Icon className='h-4 w-4 text-white' />
                                                                    </span>
                                                                    <span className='text-sm text-gray-800'>{svc.name}</span>
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div> */}
                        <Link
                            href='/contact'
                            className='text-gray-700 hover:text-gray-900 transition-colors font-medium text-base'
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className='flex items-center space-x-4'>
                        <Button
                            variant='outline'
                            className='hidden sm:block bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50'
                        >
                            Sign In
                        </Button>
                        <Link href='/contact'>
                            <Button className='bg-orange-500 hover:bg-orange-600 shadow-lg text-white font-medium transition-all duration-300'>
                                Get Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
