'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface Service {
    id: string;
    name: string;
    tiers: {
        tier1: { base: number; monthly: number };
        tier2: { base: number; monthly: number };
        tier3: { base: number; monthly: number };
    };
}

interface AddonService {
    id: string;
    name: string;
    cost: string;
    type: 'monthly' | 'one-time' | 'per-item';
    basePrice: number;
    monthlyPrice: number;
}

const services: Service[] = [
    {
        id: 'aichatbot',
        name: 'AI Chatbot Development',
        tiers: {
            tier1: { base: 2500, monthly: 150 },
            tier2: { base: 5000, monthly: 300 },
            tier3: { base: 10000, monthly: 600 },
        },
    },
    {
        id: 'ecommerce',
        name: 'E-Commerce Store',
        tiers: {
            tier1: { base: 1500, monthly: 200 },
            tier2: { base: 3000, monthly: 400 },
            tier3: { base: 6000, monthly: 750 },
        },
    },
    {
        id: 'webdev',
        name: 'Web Development',
        tiers: {
            tier1: { base: 2000, monthly: 300 },
            tier2: { base: 5000, monthly: 600 },
            tier3: { base: 10000, monthly: 1000 },
        },
    },
    {
        id: 'mobile',
        name: 'Mobile App Development',
        tiers: {
            tier1: { base: 3000, monthly: 400 },
            tier2: { base: 7500, monthly: 800 },
            tier3: { base: 15000, monthly: 1500 },
        },
    },
    {
        id: 'hosting',
        name: 'Domain & Hosting',
        tiers: {
            tier1: { base: 100, monthly: 25 },
            tier2: { base: 150, monthly: 50 },
            tier3: { base: 250, monthly: 100 },
        },
    },
    {
        id: 'seo',
        name: 'SEO & Optimization',
        tiers: {
            tier1: { base: 500, monthly: 800 },
            tier2: { base: 800, monthly: 1500 },
            tier3: { base: 1200, monthly: 3000 },
        },
    },
    {
        id: 'landing',
        name: 'Landing / Marketing Sites',
        tiers: {
            tier1: { base: 500, monthly: 150 },
            tier2: { base: 1000, monthly: 300 },
            tier3: { base: 2000, monthly: 500 },
        },
    },
    {
        id: 'sem',
        name: 'Search Engine Marketing',
        tiers: {
            tier1: { base: 800, monthly: 500 },
            tier2: { base: 1200, monthly: 800 },
            tier3: { base: 2000, monthly: 1000 },
        },
    },
    {
        id: 'smm',
        name: 'Social Media Marketing',
        tiers: {
            tier1: { base: 500, monthly: 700 },
            tier2: { base: 800, monthly: 1500 },
            tier3: { base: 1500, monthly: 3000 },
        },
    },
    {
        id: 'affiliate',
        name: 'Affiliate Marketing',
        tiers: {
            tier1: { base: 1000, monthly: 300 },
            tier2: { base: 2500, monthly: 600 },
            tier3: { base: 5000, monthly: 1000 },
        },
    },
];

const addonServices: AddonService[] = [
    {
        id: 'maintenance',
        name: 'Maintenance & Support',
        cost: '$100–$500/month',
        type: 'monthly',
        basePrice: 0,
        monthlyPrice: 300,
    },
    {
        id: 'training',
        name: 'Training & Onboarding',
        cost: '$200–$800 (one-time)',
        type: 'one-time',
        basePrice: 500,
        monthlyPrice: 0,
    },
    {
        id: 'analytics',
        name: 'Reporting & Analytics Setup',
        cost: '$250–$600 (one-time)',
        type: 'one-time',
        basePrice: 425,
        monthlyPrice: 0,
    },
    {
        id: 'copywriting',
        name: 'Content Copywriting',
        cost: '$100–$500 per page/post',
        type: 'per-item',
        basePrice: 300,
        monthlyPrice: 0,
    },
];

const tiers = [
    { id: 'tier1', name: 'Tier 1 – Starter', description: '1–10 employees' },
    { id: 'tier2', name: 'Tier 2 – Growth', description: '10–50 employees' },
    { id: 'tier3', name: 'Tier 3 – Enterprise', description: '50+ employees' },
];

export default function PricingCalculator() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedTier, setSelectedTier] = useState<
        'tier1' | 'tier2' | 'tier3' | null
    >(null);
    const [packageType, setPackageType] = useState<
        'bundle' | 'a-la-carte' | null
    >(null);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

    const toggleService = (serviceId: string) => {
        if (packageType === 'bundle') {
            // For bundles, require exactly 3 services
            if (selectedServices.includes(serviceId)) {
                setSelectedServices((prev) =>
                    prev.filter((id) => id !== serviceId)
                );
            } else if (selectedServices.length < 3) {
                setSelectedServices((prev) => [...prev, serviceId]);
            }
        } else {
            // For a la carte, allow any number
            setSelectedServices((prev) =>
                prev.includes(serviceId)
                    ? prev.filter((id) => id !== serviceId)
                    : [...prev, serviceId]
            );
        }
    };

    const toggleAddon = (addonId: string) => {
        setSelectedAddons((prev) =>
            prev.includes(addonId)
                ? prev.filter((id) => id !== addonId)
                : [...prev, addonId]
        );
    };

    const calculateTotal = () => {
        if (!selectedTier) return null;

        let totalBase = 0;
        let totalMonthly = 0;

        // Calculate main services
        selectedServices.forEach((serviceId) => {
            const service = services.find((s) => s.id === serviceId);
            if (service) {
                totalBase += service.tiers[selectedTier].base;
                totalMonthly += service.tiers[selectedTier].monthly;
            }
        });

        // Calculate addon services
        selectedAddons.forEach((addonId) => {
            const addon = addonServices.find((a) => a.id === addonId);
            if (addon) {
                totalBase += addon.basePrice;
                totalMonthly += addon.monthlyPrice;
            }
        });

        // Apply 20% discount on cheapest service if bundle and 3+ services
        let cheapestServiceDiscount = 0;
        if (packageType === 'bundle' && selectedServices.length >= 3) {
            let cheapestPrice = Infinity;
            selectedServices.forEach((serviceId) => {
                const service = services.find((s) => s.id === serviceId);
                if (service) {
                    const servicePrice = service.tiers[selectedTier].base;
                    if (servicePrice < cheapestPrice) {
                        cheapestPrice = servicePrice;
                    }
                }
            });
            cheapestServiceDiscount = cheapestPrice * 0.2;
        }

        return {
            base: totalBase - cheapestServiceDiscount,
            monthly: totalMonthly,
            serviceDiscount: cheapestServiceDiscount,
        };
    };

    const totals = calculateTotal();

    const handleNext = () => {
        if (currentStep === 1 && selectedTier) {
            setCurrentStep(2);
        } else if (currentStep === 2 && packageType) {
            setCurrentStep(3);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(1);
        setSelectedTier(null);
        setPackageType(null);
        setSelectedServices([]);
        setSelectedAddons([]);
    };

    return (
        <section className='pt-36 pb-20 px-4 bg-gray-50'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                        Build Your Pricing Calculator
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-6'>
                        Follow the steps to get your custom quote
                    </p>
                    <Link href='/pricing'>
                        <Button variant='outline' className='border-gray-300'>
                            View Pricing Tables
                        </Button>
                    </Link>
                </div>

                {/* Stepper Progress */}
                <div className='mb-8'>
                    <div className='relative flex items-center justify-between mb-16'>
                        {/* Background Connecting Line */}
                        <div className='absolute top-6 left-6 h-0.5 bg-gray-300 w-[calc(100%-48px)]'></div>

                        {/* Active Progress Line */}
                        <div
                            className={`absolute top-6 left-6 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 ${
                                currentStep === 1
                                    ? 'w-0'
                                    : currentStep === 2
                                    ? 'w-[calc(50%-6px)]'
                                    : 'w-[calc(100%-48px)]'
                            }`}
                        ></div>

                        {/* Steps */}
                        {[1, 2, 3].map((step) => (
                            <div
                                key={step}
                                className='relative flex flex-col items-center flex-1 z-10'
                            >
                                {/* Circle */}
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
                                        currentStep >= step
                                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-transparent'
                                            : 'bg-white text-gray-400 border-gray-300'
                                    }`}
                                >
                                    {step}
                                </div>

                                {/* Label */}
                                <div className='mt-2 text-sm text-center'>
                                    <div className='font-medium'>
                                        {step === 1 && 'Choose Tier'}
                                        {step === 2 && 'Package Type'}
                                        {step === 3 && 'Select Services'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <Card className='mb-8'>
                    <CardContent className='p-8'>
                        {/* Step 1: Choose Tier */}
                        {currentStep === 1 && (
                            <div className='space-y-6'>
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                        Step 1: Choose Your Tier
                                    </h3>
                                    <p className='text-gray-600 mb-6'>
                                        Select the tier that matches your
                                        business size
                                    </p>
                                    <div className='space-y-3'>
                                        {tiers.map((tier) => (
                                            <button
                                                key={tier.id}
                                                onClick={() =>
                                                    setSelectedTier(
                                                        tier.id as any
                                                    )
                                                }
                                                className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                                                    selectedTier === tier.id
                                                        ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 shadow-lg'
                                                        : 'border-gray-200 hover:border-gray-300 bg-white'
                                                }`}
                                            >
                                                <div className='font-bold text-lg text-gray-900 mb-1'>
                                                    {tier.name}
                                                </div>
                                                <div className='text-sm text-gray-600'>
                                                    {tier.description}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Choose Bundle or A La Carte */}
                        {currentStep === 2 && (
                            <div className='space-y-6'>
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                        Step 2: Choose Package Type
                                    </h3>
                                    <p className='text-gray-600 mb-6'>
                                        Select bundle (3 services, 20% off
                                        cheapest) or choose services
                                        individually
                                    </p>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <button
                                            onClick={() =>
                                                setPackageType('bundle')
                                            }
                                            className={`p-8 rounded-xl border-2 text-left transition-all ${
                                                packageType === 'bundle'
                                                    ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 shadow-lg'
                                                    : 'border-gray-200 hover:border-gray-300 bg-white'
                                            }`}
                                        >
                                            <div className='text-3xl mb-3'>
                                                📦
                                            </div>
                                            <div className='font-bold text-lg text-gray-900 mb-2'>
                                                Bundle Package
                                            </div>
                                            <div className='text-sm text-gray-600 mb-3'>
                                                Select exactly 3 services
                                            </div>
                                            <Badge className='bg-green-100 text-green-800'>
                                                20% Off Cheapest Service
                                            </Badge>
                                        </button>
                                        <button
                                            onClick={() =>
                                                setPackageType('a-la-carte')
                                            }
                                            className={`p-8 rounded-xl border-2 text-left transition-all ${
                                                packageType === 'a-la-carte'
                                                    ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 shadow-lg'
                                                    : 'border-gray-200 hover:border-gray-300 bg-white'
                                            }`}
                                        >
                                            <div className='text-3xl mb-3'>
                                                🛒
                                            </div>
                                            <div className='font-bold text-lg text-gray-900 mb-2'>
                                                A La Carte
                                            </div>
                                            <div className='text-sm text-gray-600 mb-3'>
                                                Choose any number of services
                                            </div>
                                            <Badge className='bg-blue-100 text-blue-800'>
                                                Flexible Selection
                                            </Badge>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Select Services */}
                        {currentStep === 3 && (
                            <div className='space-y-6'>
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                        Step 3: Select Services
                                    </h3>
                                    <p className='text-gray-600 mb-6'>
                                        {packageType === 'bundle'
                                            ? 'Select exactly 3 services to get 20% off your cheapest service'
                                            : 'Select any services you need'}
                                    </p>

                                    {/* Main Services */}
                                    <div className='mb-8'>
                                        <h4 className='font-semibold text-lg mb-4'>
                                            Main Services
                                        </h4>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto'>
                                            {services.map((service) => {
                                                const isSelected =
                                                    selectedServices.includes(
                                                        service.id
                                                    );
                                                const isDisabled =
                                                    packageType === 'bundle' &&
                                                    !isSelected &&
                                                    selectedServices.length >=
                                                        3;
                                                return (
                                                    <button
                                                        key={service.id}
                                                        onClick={() =>
                                                            toggleService(
                                                                service.id
                                                            )
                                                        }
                                                        disabled={isDisabled}
                                                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                                                            isSelected
                                                                ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-pink-50'
                                                                : isDisabled
                                                                ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                                                                : 'border-gray-200 hover:border-gray-300 bg-white'
                                                        }`}
                                                    >
                                                        <div className='font-medium text-gray-900 mb-1'>
                                                            {service.name}
                                                        </div>
                                                        {selectedTier && (
                                                            <div className='text-sm text-gray-600'>
                                                                Base: $
                                                                {service.tiers[
                                                                    selectedTier
                                                                ].base.toLocaleString()}
                                                                {' | '}
                                                                Monthly: $
                                                                {service.tiers[
                                                                    selectedTier
                                                                ].monthly.toLocaleString()}
                                                            </div>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        {packageType === 'bundle' && (
                                            <div className='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg'>
                                                <p className='text-sm text-blue-800'>
                                                    Bundle:{' '}
                                                    {selectedServices.length}/3
                                                    services selected
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Addon Services */}
                                    <div>
                                        <h4 className='font-semibold text-lg mb-4'>
                                            Add-on Services (Optional)
                                        </h4>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                            {addonServices.map((addon) => {
                                                const isSelected =
                                                    selectedAddons.includes(
                                                        addon.id
                                                    );
                                                return (
                                                    <button
                                                        key={addon.id}
                                                        onClick={() =>
                                                            toggleAddon(
                                                                addon.id
                                                            )
                                                        }
                                                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                                                            isSelected
                                                                ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-pink-50'
                                                                : 'border-gray-200 hover:border-gray-300 bg-white'
                                                        }`}
                                                    >
                                                        <div className='font-medium text-gray-900 mb-1'>
                                                            {addon.name}
                                                        </div>
                                                        <div className='text-sm text-gray-600'>
                                                            {addon.cost}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className='flex justify-between items-center'>
                    <Button
                        variant='outline'
                        onClick={handleBack}
                        disabled={currentStep === 1}
                    >
                        Back
                    </Button>
                    {currentStep < 3 ? (
                        <Button
                            onClick={handleNext}
                            disabled={
                                (currentStep === 1 && !selectedTier) ||
                                (currentStep === 2 && !packageType)
                            }
                            className='bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600'
                        >
                            Next
                        </Button>
                    ) : (
                        <Button onClick={handleReset} variant='outline'>
                            Start Over
                        </Button>
                    )}
                </div>

                {/* Summary Card */}
                {currentStep === 3 && totals && (
                    <Card className='mt-8 bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200'>
                        <CardContent className='p-8'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                                Your Quote Summary
                            </h3>
                            <div className='space-y-4'>
                                <div className='flex justify-between items-center'>
                                    <span className='text-gray-700'>
                                        Selected Services:
                                    </span>
                                    <Badge variant='secondary'>
                                        {selectedServices.length +
                                            selectedAddons.length}
                                    </Badge>
                                </div>
                                {totals.serviceDiscount > 0 && (
                                    <div className='flex justify-between items-center text-green-600'>
                                        <span>Bundle Discount:</span>
                                        <span className='font-bold'>
                                            -$
                                            {totals.serviceDiscount.toLocaleString()}
                                        </span>
                                    </div>
                                )}
                                <div className='border-t border-gray-300 pt-4'>
                                    <div className='flex justify-between items-center mb-2'>
                                        <span className='font-medium text-gray-700'>
                                            One-time Setup:
                                        </span>
                                        <span className='font-bold text-lg'>
                                            ${totals.base.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='font-medium text-gray-700'>
                                            Monthly Cost:
                                        </span>
                                        <span className='font-bold text-lg'>
                                            ${totals.monthly.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                <div className='pt-4 space-y-3'>
                                    <Button className='w-full' size='lg'>
                                        Get This Quote
                                    </Button>
                                    <Button
                                        variant='outline'
                                        className='w-full'
                                    >
                                        Schedule Consultation
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </section>
    );
}
