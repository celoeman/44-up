import Image from 'next/image';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'dark' | 'white';
}

export default function Logo({ className = '', size = 'md', variant = 'dark' }: LogoProps) {
    const logoSize = {
        sm: 'h-6',
        md: 'h-8',
        lg: 'h-14',
    };

    const logoSrc = variant === 'white' ? '/Vector-white.svg' : '/Vector.svg';

    return (
        <div className={`flex items-center ${className}`}>
            {/* Logo Image */}
            <div className={`${logoSize[size]} relative flex-shrink-0`}>
                <Image
                    src={logoSrc}
                    alt='44Up Logo'
                    width={584}
                    height={303}
                    className='h-full w-auto object-contain'
                    priority
                />
            </div>
        </div>
    );
}
