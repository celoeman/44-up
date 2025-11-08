'use client';

import { useEffect } from 'react';

export default function ViewportHeightLock() {
    useEffect(() => {
        function setAppHeight() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        // Set initial height
        setAppHeight();

        // Update on resize and orientation change
        window.addEventListener('resize', setAppHeight);
        window.addEventListener('orientationchange', setAppHeight);

        // Also listen for visual viewport changes (mobile browser UI)
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', setAppHeight);
        }

        return () => {
            window.removeEventListener('resize', setAppHeight);
            window.removeEventListener('orientationchange', setAppHeight);
            if (window.visualViewport) {
                window.visualViewport.removeEventListener('resize', setAppHeight);
            }
        };
    }, []);

    return null;
}

