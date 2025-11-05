'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { serviceCategories } from '@/components/ServicesSection';

function PricingTableForCategory({
    category,
}: {
    category: (typeof serviceCategories)[0];
}) {
    const parsePrice = (price: string) => {
        if (
            price.includes('+') ||
            price.includes('–') ||
            price.includes('-') ||
            price.includes('%') ||
            price.toLowerCase().includes('custom') ||
            price.toLowerCase().includes('quoted')
        ) {
            return price;
        }
        const num = parseInt(price.replace(/[$,]/g, ''));
        return isNaN(num) ? price : num;
    };

    const formatPrice = (price: string | number) => {
        if (typeof price === 'string') {
            return price;
        }
        return price.toLocaleString();
    };

    return (
        <div className='overflow-x-auto'>
            <table className='w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden'>
                <thead className='bg-gradient-to-r from-orange-500 to-pink-500 text-white'>
                    <tr>
                        <th className='px-6 py-4 text-left font-semibold text-lg'>
                            Service
                        </th>
                        <th className='px-6 py-4 text-center font-semibold text-lg'>
                            Tier 1 – Starter
                            <div className='text-sm font-normal opacity-90 mt-1'>
                                1–10 employees
                            </div>
                        </th>
                        <th className='px-6 py-4 text-center font-semibold text-lg'>
                            Tier 2 – Growth
                            <div className='text-sm font-normal opacity-90 mt-1'>
                                10–50 employees
                            </div>
                        </th>
                        <th className='px-6 py-4 text-center font-semibold text-lg'>
                            Tier 3 – Enterprise
                            <div className='text-sm font-normal opacity-90 mt-1'>
                                50+ employees
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {category.services.map((service, index) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                            } hover:bg-orange-50 transition-colors h-24`}
                        >
                            <td className='px-6 py-4 font-semibold text-gray-900 h-24 align-middle'>
                                {service.name}
                            </td>
                            <td className='px-6 py-4 text-center h-24 align-middle'>
                                <div className='space-y-1'>
                                    <div className='text-lg font-bold text-gray-900'>
                                        {typeof parsePrice(
                                            service.tiers.tier1.base
                                        ) === 'number'
                                            ? `$${formatPrice(
                                                  parsePrice(
                                                      service.tiers.tier1.base
                                                  ) as number
                                              )}`
                                            : service.tiers.tier1.base}
                                    </div>
                                    {service.tiers.tier1.monthly && (
                                        <div className='text-sm text-gray-600'>
                                            {typeof parsePrice(
                                                service.tiers.tier1.monthly
                                            ) === 'number'
                                                ? `$${formatPrice(
                                                      parsePrice(
                                                          service.tiers.tier1
                                                              .monthly
                                                      ) as number
                                                  )}/mo`
                                                : service.tiers.tier1.monthly}
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className='px-6 py-4 text-center h-24 align-middle'>
                                <div className='space-y-1'>
                                    <div className='text-lg font-bold text-gray-900'>
                                        {typeof parsePrice(
                                            service.tiers.tier2.base
                                        ) === 'number'
                                            ? `$${formatPrice(
                                                  parsePrice(
                                                      service.tiers.tier2.base
                                                  ) as number
                                              )}`
                                            : service.tiers.tier2.base}
                                    </div>
                                    {service.tiers.tier2.monthly && (
                                        <div className='text-sm text-gray-600'>
                                            {typeof parsePrice(
                                                service.tiers.tier2.monthly
                                            ) === 'number'
                                                ? `$${formatPrice(
                                                      parsePrice(
                                                          service.tiers.tier2
                                                              .monthly
                                                      ) as number
                                                  )}/mo`
                                                : service.tiers.tier2.monthly}
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className='px-6 py-4 text-center h-24 align-middle'>
                                <div className='space-y-1'>
                                    <div className='text-lg font-bold text-gray-900'>
                                        {typeof parsePrice(
                                            service.tiers.tier3.base
                                        ) === 'number'
                                            ? `$${formatPrice(
                                                  parsePrice(
                                                      service.tiers.tier3.base
                                                  ) as number
                                              )}`
                                            : service.tiers.tier3.base}
                                    </div>
                                    {service.tiers.tier3.monthly && (
                                        <div className='text-sm text-gray-600'>
                                            {typeof parsePrice(
                                                service.tiers.tier3.monthly
                                            ) === 'number'
                                                ? `$${formatPrice(
                                                      parsePrice(
                                                          service.tiers.tier3
                                                              .monthly
                                                      ) as number
                                                  )}/mo`
                                                : service.tiers.tier3.monthly}
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function PricingTable() {
    return (
        <section className='pt-36 pb-20 px-4 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                        Pricing Tables
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-6'>
                        Transparent pricing for all our services. Choose the
                        tier that fits your business size.
                    </p>
                    <Link href='/calculator'>
                        <Button className='bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600'>
                            Build Your Custom Quote
                        </Button>
                    </Link>
                </div>

                <Tabs
                    defaultValue={serviceCategories[0].name}
                    className='w-full'
                >
                    <div className='flex justify-center mb-8'>
                        <TabsList className='inline-flex w-auto'>
                            {serviceCategories.map((category) => (
                                <TabsTrigger
                                    key={category.name}
                                    value={category.name}
                                    className='text-sm md:text-base'
                                >
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    {serviceCategories.map((category) => (
                        <TabsContent key={category.name} value={category.name}>
                            <PricingTableForCategory category={category} />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
