import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const addons = [
    {
        name: 'Maintenance & Support',
        description: 'Bug fixes, uptime monitoring, and site updates',
        cost: '$100–$500/month',
        type: 'monthly',
        features: [
            '24/7 uptime monitoring',
            'Regular security updates',
            'Bug fixes and patches',
            'Performance optimization',
            'Backup management',
        ],
    },
    {
        name: 'Training & Onboarding',
        description: 'Client team training for web or CMS',
        cost: '$200–$800 (one-time)',
        type: 'one-time',
        features: [
            'Custom training sessions',
            'Documentation creation',
            'Video tutorials',
            'Hands-on workshops',
            'Ongoing support access',
        ],
    },
    {
        name: 'Reporting & Analytics Setup',
        description: 'Google Analytics, Tag Manager, dashboards',
        cost: '$250–$600 (one-time)',
        type: 'one-time',
        features: [
            'Google Analytics 4 setup',
            'Google Tag Manager configuration',
            'Custom dashboard creation',
            'Conversion tracking',
            'Monthly reporting templates',
        ],
    },
    {
        name: 'Content Copywriting',
        description: 'Blogs, landing copy, ad copy',
        cost: '$100–$500 per page/post',
        type: 'per-item',
        features: [
            'SEO-optimized content',
            'Brand voice consistency',
            'A/B testing variations',
            'Conversion-focused copy',
            'Multi-platform adaptation',
        ],
    },
];

export default function AddonsSection() {
    return (
        <section className='py-20 px-4 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                        Additional Services & Add-ons
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        Enhance your digital presence with our specialized
                        add-on services designed to maximize your success.
                        <span className='block mt-2 text-lg font-semibold text-blue-600'>
                            Select these services in the pricing calculator above to get instant quotes!
                        </span>
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {addons.map((addon, index) => (
                        <Card
                            key={index}
                            className='hover:shadow-lg transition-shadow'
                        >
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <div>
                                        <CardTitle className='text-xl mb-2'>
                                            {addon.name}
                                        </CardTitle>
                                        <p className='text-gray-600'>
                                            {addon.description}
                                        </p>
                                    </div>
                                    <Badge
                                        variant={
                                            addon.type === 'monthly'
                                                ? 'default'
                                                : 'secondary'
                                        }
                                        className='ml-4'
                                    >
                                        {addon.type === 'monthly'
                                            ? 'Monthly'
                                            : addon.type === 'one-time'
                                            ? 'One-time'
                                            : 'Per Item'}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className='mb-6'>
                                    <div className='text-3xl font-bold text-blue-600 mb-2'>
                                        {addon.cost}
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <h4 className='font-semibold mb-3'>
                                        What's Included:
                                    </h4>
                                    <ul className='space-y-2'>
                                        {addon.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className='flex items-center text-sm text-gray-600'
                                                >
                                                    <svg
                                                        className='w-4 h-4 text-green-500 mr-2 flex-shrink-0'
                                                        fill='currentColor'
                                                        viewBox='0 0 20 20'
                                                    >
                                                        <path
                                                            fillRule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clipRule='evenodd'
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
