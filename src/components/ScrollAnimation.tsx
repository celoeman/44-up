'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
    duration?: number;
}

export default function ScrollAnimation({
    children,
    className,
    delay = 0,
    direction = 'up',
    duration = 0.6,
}: ScrollAnimationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Disconnect after first trigger to improve performance
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const directionClasses = {
        up: 'translate-y-8',
        down: '-translate-y-8',
        left: 'translate-x-8',
        right: '-translate-x-8',
        fade: '',
    };

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all ease-out',
                isVisible
                    ? 'opacity-100 translate-x-0 translate-y-0'
                    : `opacity-0 ${directionClasses[direction]}`,
                className
            )}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`,
                willChange: isVisible ? 'auto' : 'transform, opacity',
            }}
        >
            {children}
        </div>
    );
}
