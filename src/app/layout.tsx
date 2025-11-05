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
    title: '44Up - Digital Innovation & AI Solutions',
    description:
        'Transform your business with cutting-edge digital solutions including AI chatbots, web development, mobile apps, and e-commerce platforms. Your vision, our expertise.',
    icons: {
        icon: '/Square.png',
        shortcut: '/Square.png',
        apple: '/Square.png',
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
                <link rel='icon' href='/Square.png' type='image/png' />
                <link rel='shortcut icon' href='/Square.png' />
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
