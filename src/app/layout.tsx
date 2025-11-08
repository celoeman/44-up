import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
    preload: false,
});

export const metadata: Metadata = {
    title: '44Up - Custom Software Solutions',
    description:
        'Transform your business with cutting-edge custom software solutions. Your vision, our expertise.',
    icons: {
        icon: '/logo.svg',
        shortcut: '/logo.svg',
        apple: '/logo.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/logo.svg' type='image/svg+xml' />
                <link rel='shortcut icon' href='/logo.svg' />
                <meta name='theme-color' content='#2563eb' />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
